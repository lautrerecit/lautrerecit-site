// La Boussole 2027 — contrôle automatique d'une ou plusieurs pages (partie « mesure » de l'audit).
// Usage : node outils/boussole/controle.mjs /2027/ /2027/vie-chere/ …   (serveur `npm run dev` lancé)
// Sortie : outils/boussole/_controle/<page>-<largeur>.png (pleine page) + controle.json, et un résumé à l'écran.
// Critères mesurés : contraste ≥ 4,5:1 (≥ 3 grand texte), texte ≥ 13 px, chevauchement texte/texte,
// débordement horizontal, cibles tactiles ≥ 44 px sur téléphone. Le jugement (fond, ton, marque) revient à l'agent auditeur-boussole.
import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const PW = '/Users/wdnrany/.claude/skills/app-designer/node_modules/playwright-core/index.mjs';
const { chromium } = await import(PW);
const BASE = process.env.BOUSSOLE_URL || 'http://localhost:4321';
const OUT = join(dirname(fileURLToPath(import.meta.url)), '_controle');
const LARGEURS = [1280, 768, 375];
const pages = process.argv.slice(2);
if (!pages.length) { console.log('Usage : node outils/boussole/controle.mjs /2027/ [/2027/quiz/ …]'); process.exit(1); }
mkdirSync(OUT, { recursive: true });

// Mesure exécutée dans la page. Les chevauchements entre éléments en ligne (liens, <em>, <b> qui passent à la ligne) sont ignorés : faux positifs.
const mesure = (largeur) => {
  const D = document, W = window;
  const rgb = (s) => (s.match(/[\d.]+/g) || []).map(Number);
  const lum = (c) => { const a = c.slice(0, 3).map((v) => { v /= 255; return v <= .03928 ? v / 12.92 : Math.pow((v + .055) / 1.055, 2.4); }); return .2126 * a[0] + .7152 * a[1] + .0722 * a[2]; };
  const mix = (f, b) => { const a = f.length > 3 ? f[3] : 1; return [0, 1, 2].map((i) => f[i] * a + b[i] * (1 - a)); };
  const ratio = (x, y) => { const L1 = lum(x), L2 = lum(y); return (Math.max(L1, L2) + .05) / (Math.min(L1, L2) + .05); };
  function fond(el) { const pile = [];
    for (let e = el; e; e = e.parentElement) { const cs = W.getComputedStyle(e); const bi = cs.backgroundImage;
      if (bi && bi !== 'none' && /gradient/.test(bi)) { const m = bi.match(/rgba?\([^)]+\)|#[0-9a-f]{6}/i); if (m) { pile.push(m[0].startsWith('#') ? [parseInt(m[0].slice(1, 3), 16), parseInt(m[0].slice(3, 5), 16), parseInt(m[0].slice(5, 7), 16), 1] : rgb(m[0])); if ((pile[pile.length - 1][3] ?? 1) >= .9) break; } }
      const c = rgb(cs.backgroundColor); if (c.length && (c[3] ?? 1) > 0) { pile.push(c); if ((c[3] ?? 1) >= .95) break; } }
    let b = [18, 14, 11]; for (let i = pile.length - 1; i >= 0; i--) b = mix(pile[i], b); return b; }
  const visible = (el) => { const cs = W.getComputedStyle(el); if (cs.visibility === 'hidden' || cs.display === 'none' || +cs.opacity === 0) return false;
    if (el.closest('[aria-hidden="true"],[hidden],template,script,dialog:not([open])')) return false;
    for (let e = el.parentElement; e; e = e.parentElement) if (+W.getComputedStyle(e).opacity === 0) return false;
    const r = el.getBoundingClientRect(); return r.width > 0 && r.height > 0; };
  const nom = (el) => (el.className && String(el.className).split(' ')[0]) || el.tagName.toLowerCase();
  const EMPILE = '.qz-pile, .qd-pile';
  const enLigne = (el) => W.getComputedStyle(el).display === 'inline';
  const P = { contraste: [], taille: [], chevauchement: [], debordement: [], cible: [] };
  const vus = new Set(); const textes = [];
  D.querySelectorAll('main *').forEach((el) => {
    const txt = [...el.childNodes].filter((n) => n.nodeType === 3).map((n) => n.textContent.trim()).join(' ').trim();
    if (!txt || !visible(el)) return;
    const cs = W.getComputedStyle(el), px = parseFloat(cs.fontSize);
    // boîte d'un élément en ligne = rognée à son bloc parent (la boîte d'un grand chiffre déborde sous la ligne sans que rien ne se voie)
    let r = el.getBoundingClientRect();
    if (enLigne(el)) { let p = el.parentElement; while (p && enLigne(p)) p = p.parentElement; if (p) { const q = p.getBoundingClientRect(); r = { left: Math.max(r.left, q.left), right: Math.min(r.right, q.right), top: Math.max(r.top, q.top), bottom: Math.min(r.bottom, q.bottom) }; } }
    textes.push({ el, r, txt });
    if (px < 13 && !vus.has('t' + nom(el))) { vus.add('t' + nom(el)); P.taille.push(`${nom(el)} ${px}px «${txt.slice(0, 30)}»`); }
    if (/text/.test(cs.webkitBackgroundClip || cs.backgroundClip || '')) return; // foil : faux échec
    const b = fond(el), k = ratio(mix(rgb(cs.color), b), b);
    const seuil = (px >= 24 || (px >= 18.66 && +cs.fontWeight >= 700)) ? 3 : 4.5;
    if (k < seuil && !vus.has('c' + nom(el) + cs.color)) { vus.add('c' + nom(el) + cs.color); P.contraste.push(`${nom(el)} ${k.toFixed(2)}:1 «${txt.slice(0, 30)}»`); }
  });
  for (let i = 0; i < textes.length; i++) for (let j = i + 1; j < textes.length; j++) {
    const a = textes[i], c = textes[j];
    if (a.el.contains(c.el) || c.el.contains(a.el) || (enLigne(a.el) && enLigne(c.el))) continue;
    if (a.el.closest(EMPILE) && c.el.closest(EMPILE)) continue; // cartes empilées exprès
    const x = Math.min(a.r.right, c.r.right) - Math.max(a.r.left, c.r.left), y = Math.min(a.r.bottom, c.r.bottom) - Math.max(a.r.top, c.r.top);
    if (x > 3 && y > 3) { const cle = nom(a.el) + '/' + nom(c.el); if (!vus.has(cle)) { vus.add(cle); P.chevauchement.push(`${cle} «${a.txt.slice(0, 20)}» × «${c.txt.slice(0, 20)}»`); } }
  }
  if (D.documentElement.scrollWidth > largeur + 1) P.debordement.push(`largeur de page ${D.documentElement.scrollWidth}px pour ${largeur}px`);
  if (largeur < 500) D.querySelectorAll('main a, main button, main input, main select, main summary').forEach((el) => {
    if (!visible(el) || enLigne(el)) return; const r = el.getBoundingClientRect(); // lien dans le texte : exception WCAG 2.5.8
    if (r.height < 44 && !el.closest('p, li span, .r27-source, .qd-sources, .vt-source') && !vus.has('k' + nom(el))) { vus.add('k' + nom(el)); P.cible.push(`${nom(el)} ${Math.round(r.width)}×${Math.round(r.height)} «${el.textContent.trim().slice(0, 25)}»`); }
  });
  return P;
};

const navigateur = await chromium.launch();
const bilan = {};
for (const chemin of pages) {
  const slug = chemin.replace(/^\/|\/$/g, '').replace(/\//g, '_') || 'accueil';
  for (const w of LARGEURS) {
    const page = await navigateur.newPage({ viewport: { width: w, height: 900 }, deviceScaleFactor: 1 });
    await page.goto(BASE + chemin, { waitUntil: 'networkidle' });
    await page.addStyleTag({ content: '*,*::before,*::after{transition:none!important;animation:none!important}' });
    await page.waitForTimeout(300);
    bilan[`${chemin} @${w}`] = await page.evaluate(mesure, w);
    if (w !== 768) await page.screenshot({ path: join(OUT, `${slug}-${w}.png`), fullPage: true });
    await page.close();
  }
}
await navigateur.close();
writeFileSync(join(OUT, 'controle.json'), JSON.stringify(bilan, null, 2));
let defauts = 0;
for (const [cle, P] of Object.entries(bilan)) {
  const lignes = Object.entries(P).filter(([, v]) => v.length);
  defauts += lignes.reduce((s, [, v]) => s + v.length, 0);
  console.log(lignes.length ? `\n${cle}\n` + lignes.map(([k, v]) => `  ${k} : ${v.join(' · ')}`).join('\n') : `${cle} : aucun défaut`);
}
console.log(`\n${defauts} défaut(s). Captures et détail : ${OUT}`);
