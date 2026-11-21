// Verrou serveur de la formation « L'Algérie a pensé » (/algerie/*).
//
// Ce Worker ne s'exécute que sur /algerie/* (voir run_worker_first dans
// wrangler.jsonc). Tout le reste du site est servi directement en statique.
//
// Réglages à poser dans Cloudflare (Workers → lautrerecit → Settings → Variables
// and Secrets), en type « Secret » :
//   ALGERIE_CODE    le code d'accès envoyé aux acheteurs (ex. algerieform)
//   SESSION_SECRET  une longue chaîne aléatoire qui signe les cookies.
//                   La changer déconnecte tout le monde d'un coup.
// Liaison R2 (dans wrangler.jsonc) : VIDEOS → bucket algerie-videos.

const COOKIE = 'ar_algerie';
const COOKIE_PATH = '/algerie';
const SESSION_DAYS = 365;
const LOGIN_PATH = '/algerie/connexion/';
const VIDEO_PREFIX = '/algerie/video/';
const VIDEO_NAME = /^m(0[1-9]|1[0-5])\.mp4$/;

const enc = new TextEncoder();

function b64url(buf) {
  let s = '';
  for (const b of new Uint8Array(buf)) s += String.fromCharCode(b);
  return btoa(s).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

async function hmac(secret, data) {
  const key = await crypto.subtle.importKey(
    'raw', enc.encode(secret), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);
  return b64url(await crypto.subtle.sign('HMAC', key, enc.encode(data)));
}

// Comparaison à temps constant (évite de deviner le code caractère par caractère).
async function sameText(a, b) {
  const [ha, hb] = await Promise.all([
    crypto.subtle.digest('SHA-256', enc.encode(a)),
    crypto.subtle.digest('SHA-256', enc.encode(b)),
  ]);
  return crypto.subtle.timingSafeEqual(ha, hb);
}

function readCookie(request, name) {
  const header = request.headers.get('Cookie') || '';
  for (const part of header.split(';')) {
    const i = part.indexOf('=');
    if (i > -1 && part.slice(0, i).trim() === name) return part.slice(i + 1).trim();
  }
  return null;
}

async function makeToken(secret) {
  const exp = Math.floor(Date.now() / 1000) + SESSION_DAYS * 86400;
  const payload = `v1.${exp}`;
  return `${payload}.${await hmac(secret, payload)}`;
}

async function validToken(token, secret) {
  if (!token) return false;
  const parts = token.split('.');
  if (parts.length !== 3 || parts[0] !== 'v1') return false;
  const exp = Number(parts[1]);
  if (!Number.isFinite(exp) || exp < Date.now() / 1000) return false;
  const expected = await hmac(secret, `${parts[0]}.${parts[1]}`);
  return sameText(parts[2], expected);
}

// N'accepte qu'un retour vers une page de la formation (pas de redirection ouverte).
function safeRedirect(value) {
  if (typeof value !== 'string') return '/algerie/';
  if (!value.startsWith('/algerie/') || value.startsWith('//') || value.includes('\\')) return '/algerie/';
  if (value.startsWith(LOGIN_PATH)) return '/algerie/';
  return value;
}

function redirect(location, extraHeaders = {}) {
  return new Response(null, {
    status: 303,
    headers: { Location: location, 'Cache-Control': 'no-store', ...extraHeaders },
  });
}

function sessionCookie(value, maxAge) {
  return `${COOKIE}=${value}; Path=${COOKIE_PATH}; Max-Age=${maxAge}; HttpOnly; Secure; SameSite=Lax`;
}

// Réponse privée : jamais mise en cache partagé, jamais indexée.
function privatize(response) {
  const r = new Response(response.body, response);
  r.headers.set('Cache-Control', 'private, no-store');
  r.headers.set('X-Robots-Tag', 'noindex, nofollow');
  return r;
}

async function handleLogin(request, env) {
  const form = await request.formData().catch(() => null);
  const code = String(form?.get('code') ?? '').trim().toLowerCase();
  const back = safeRedirect(String(form?.get('redirect') ?? ''));
  const expected = String(env.ALGERIE_CODE ?? '').trim().toLowerCase();

  if (!expected || !env.SESSION_SECRET || !code || !(await sameText(code, expected))) {
    return redirect(`${LOGIN_PATH}?erreur=1&redirect=${encodeURIComponent(back)}`);
  }
  const token = await makeToken(env.SESSION_SECRET);
  return redirect(back, { 'Set-Cookie': sessionCookie(token, SESSION_DAYS * 86400) });
}

function parseRange(header, size) {
  const m = /^bytes=(\d*)-(\d*)$/.exec(header || '');
  if (!m || (m[1] === '' && m[2] === '')) return null;
  if (m[1] === '') {
    const suffix = Math.min(Number(m[2]), size);
    return { offset: size - suffix, length: suffix };
  }
  const start = Number(m[1]);
  const end = m[2] === '' ? size - 1 : Math.min(Number(m[2]), size - 1);
  if (start >= size || end < start) return 'invalid';
  return { offset: start, length: end - start + 1 };
}

async function handleVideo(request, env, name) {
  if (!VIDEO_NAME.test(name)) return new Response('Introuvable', { status: 404 });
  if (!env.VIDEOS) return new Response('Vidéos non configurées', { status: 500 });

  const head = await env.VIDEOS.head(name);
  if (!head) return new Response('Introuvable', { status: 404 });
  const size = head.size;

  const headers = new Headers();
  headers.set('Content-Type', head.httpMetadata?.contentType || 'video/mp4');
  headers.set('Accept-Ranges', 'bytes');
  headers.set('Cache-Control', 'private, max-age=3600');
  headers.set('ETag', head.httpEtag);
  headers.set('X-Robots-Tag', 'noindex, nofollow');

  if (request.method === 'HEAD') {
    headers.set('Content-Length', String(size));
    return new Response(null, { status: 200, headers });
  }

  const range = parseRange(request.headers.get('Range'), size);
  if (range === 'invalid') {
    headers.set('Content-Range', `bytes */${size}`);
    return new Response(null, { status: 416, headers });
  }
  if (range) {
    const obj = await env.VIDEOS.get(name, { range });
    if (!obj) return new Response('Introuvable', { status: 404 });
    headers.set('Content-Range', `bytes ${range.offset}-${range.offset + range.length - 1}/${size}`);
    headers.set('Content-Length', String(range.length));
    return new Response(obj.body, { status: 206, headers });
  }
  const obj = await env.VIDEOS.get(name);
  if (!obj) return new Response('Introuvable', { status: 404 });
  headers.set('Content-Length', String(size));
  return new Response(obj.body, { status: 200, headers });
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const path = url.pathname;

    // Hors formation : on sert le site statique tel quel.
    if (path !== '/algerie' && !path.startsWith('/algerie/')) {
      return env.ASSETS.fetch(request);
    }

    // Page de connexion : libre d'accès ; le formulaire y est posté.
    if (path === LOGIN_PATH || path === '/algerie/connexion') {
      if (request.method === 'POST') return handleLogin(request, env);
      return privatize(await env.ASSETS.fetch(request));
    }

    if (path === '/algerie/deconnexion' || path === '/algerie/deconnexion/') {
      return redirect(LOGIN_PATH, { 'Set-Cookie': sessionCookie('', 0) });
    }

    const ok = env.SESSION_SECRET
      && (await validToken(readCookie(request, COOKIE), env.SESSION_SECRET));

    if (!ok) {
      if (path.startsWith(VIDEO_PREFIX)) return new Response('Accès réservé', { status: 401 });
      const back = safeRedirect(path + url.search);
      return redirect(`${LOGIN_PATH}?redirect=${encodeURIComponent(back)}`);
    }

    if (path.startsWith(VIDEO_PREFIX)) {
      return handleVideo(request, env, path.slice(VIDEO_PREFIX.length));
    }

    return privatize(await env.ASSETS.fetch(request));
  },
};
