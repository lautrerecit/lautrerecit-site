// Transforme la sortie Astro (dist/, liens en "/…" absolus) en site
// 100 % relatif → chaque .html s'ouvre en double-clic (file://), sans serveur.
// Sortie : dossier "_VOIR-LE-SITE-HTML/" à la racine du projet.
import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const dist = path.join(here, 'dist');
const out = path.join(here, '..', '_VOIR-LE-SITE-HTML');

// copie récursive
async function copyDir(src, dst) {
  await fs.mkdir(dst, { recursive: true });
  for (const e of await fs.readdir(src, { withFileTypes: true })) {
    const s = path.join(src, e.name), d = path.join(dst, e.name);
    if (e.isDirectory()) await copyDir(s, d);
    else await fs.copyFile(s, d);
  }
}

// réécrit les chemins absolus "/x" → préfixe relatif selon la profondeur du fichier.
// Les liens "répertoire" (/ ou /a-propos/) deviennent explicites → …/index.html
// (file:// ne résout PAS l'index d'un dossier au double-clic).
function relativize(html, depth) {
  const prefix = depth === 0 ? '' : '../'.repeat(depth);
  const fix = (p) => {
    // détacher l'ancre (#) ou la query (?) avant de traiter le chemin
    let frag = '';
    const m = p.match(/[#?].*$/);
    if (m) { frag = m[0]; p = p.slice(0, m.index); }
    let out;
    if (p === '') out = (prefix || './') + 'index.html';      // "/" ou "/#x"
    else if (p.endsWith('/')) out = prefix + p + 'index.html'; // "/a-propos/#grille"
    else out = prefix + p;                                     // "/dir/file.ext"
    return out + frag;
  };
  // href="/…" / src="/…"  (jamais // ni http… : le caractère après "=\"" doit être "/")
  html = html.replace(/(href|src)="\/(?!\/)([^"]*)"/g, (m, attr, p) => `${attr}="${fix(p)}"`);
  // srcset: "/x 1x, /y 2x" (ce sont toujours des fichiers)
  html = html.replace(/srcset="([^"]*)"/g, (m, v) =>
    `srcset="${v.replace(/(^|,\s*)\/(?!\/)([^\s,]*)/g, (mm, sep, p) => sep + prefix + p)}"`);
  // url(/…) dans les styles inline
  html = html.replace(/url\((['"]?)\/(?!\/)([^)'"]*)/g, (m, q, p) => `url(${q}${prefix}${p}`);
  return html;
}

async function walk(dir) {
  for (const e of await fs.readdir(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) await walk(p);
    else if (e.name.endsWith('.html')) {
      const depth = path.relative(out, dir).split(path.sep).filter(Boolean).length;
      const html = await fs.readFile(p, 'utf8');
      await fs.writeFile(p, relativize(html, depth), 'utf8');
    }
  }
}

await fs.rm(out, { recursive: true, force: true });
await copyDir(dist, out);
await walk(out);

// petite page-index lisible (optionnelle, l'accueil reste index.html)
console.log('✓ Site HTML relatif généré dans : _VOIR-LE-SITE-HTML/');
console.log('  Double-clique _VOIR-LE-SITE-HTML/index.html');
