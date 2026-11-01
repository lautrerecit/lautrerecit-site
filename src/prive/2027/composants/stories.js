// Deux modèles de story Instagram 1080×1920 pour La Boussole 2027.
// s = { enjeu, num, cliche, replique, valeur, source }
// Zones sûres : rien d'important au-dessus de HAUT (en-tête Instagram) ni sous BAS (autocollants, réponse).
// Aucun modèle n'associe noir et or ; l'or foncé ne sert que sur fond clair, le bordeaux porte du crème.

const W = 1080, H = 1920, M = 96, HAUT = 210, BAS = H - 300;
const C = {
  creme: '#F2EDE4', papier: '#FFFDF8', ink: '#0E0C0A', ink2: '#2A241D', ink3: '#5E554A',
  or: '#7A5E18', bordeaux: '#6E2632', bordeauxF: '#4E1A23',
};
const SERIF = '"Playfair Display"', SANS = '"League Spartan"', MONO = '"JetBrains Mono"';

export function chargerPolices() {
  const f = [`italic 400 60px ${SERIF}`, `700 200px ${SERIF}`, `italic 700 46px ${SERIF}`, `400 42px ${SANS}`, `600 42px ${SANS}`, `700 28px ${MONO}`];
  return Promise.all(f.map((x) => document.fonts.load(x))).catch(() => {});
}

/* ---------- outils ---------- */
function lignes(g, txt, police, larg) {
  g.font = police;
  const out = []; let l = '';
  String(txt).split(' ').forEach((m) => {
    const t = l ? l + ' ' + m : m;
    if (g.measureText(t).width > larg && l) { out.push(l); l = m; } else l = t;
  });
  if (l) out.push(l);
  return out;
}
// Plus grande taille (≤ max) pour laquelle le texte tient en `maxL` lignes.
let K = 1; // réduction globale quand une story déborde
function ajuste(g, txt, police, larg, max, min, maxL) {
  max = Math.round(max * K / 2) * 2; min = Math.min(min, max);
  for (let t = max; t >= min; t -= 2) {
    const ls = lignes(g, txt, police(t), larg);
    if (ls.length <= maxL) return { t, ls, f: police(t) };
  }
  return { t: min, ls: lignes(g, txt, police(min), larg), f: police(min) };
}
function ecrire(g, ls, x, y, lh, couleur, police, align = 'left') {
  g.save(); g.font = police; g.fillStyle = couleur; g.textAlign = align;
  ls.forEach((l, i) => g.fillText(l, x, y + i * lh));
  g.restore();
  return y + (ls.length - 1) * lh;
}
function mono(g, txt, x, y, couleur, taille = 28, espace = 7, align = 'left') {
  g.save(); g.font = `700 ${taille}px ${MONO}`; g.fillStyle = couleur; g.textAlign = align;
  if ('letterSpacing' in g) g.letterSpacing = espace + 'px';
  g.fillText(txt.toUpperCase(), x, y); g.restore();
}
let bruit;
function grain(g, force = 0.06) {
  if (!bruit) {
    bruit = document.createElement('canvas'); bruit.width = bruit.height = 256;
    const b = bruit.getContext('2d'), d = b.createImageData(256, 256);
    for (let i = 0; i < d.data.length; i += 4) { const v = Math.random() * 255; d.data[i] = d.data[i + 1] = d.data[i + 2] = v; d.data[i + 3] = 255; }
    b.putImageData(d, 0, 0);
  }
  g.save(); g.globalAlpha = force; g.globalCompositeOperation = 'overlay';
  g.fillStyle = g.createPattern(bruit, 'repeat'); g.fillRect(0, 0, W, H); g.restore();
}
function vignette(g, a = 0.18) {
  const r = g.createRadialGradient(W / 2, H * 0.42, 260, W / 2, H * 0.5, 1250);
  r.addColorStop(0, 'rgba(255,255,255,0)'); r.addColorStop(1, `rgba(78,58,20,${a})`);
  g.fillStyle = r; g.fillRect(0, 0, W, H);
}
function signature(g, y, couleur = C.ink, sous = C.ink3) {
  g.save(); g.textAlign = 'center';
  g.font = `italic 700 50px ${SERIF}`; g.fillStyle = couleur; g.fillText("L'Autre Récit", W / 2, y);
  g.font = `500 26px ${SANS}`; g.fillStyle = sous; g.fillText('La Boussole 2027 · lautrerecit.com', W / 2, y + 44);
  g.restore();
}
function ombre(g, flou = 50, dy = 26, a = 0.22) { g.shadowColor = `rgba(40,28,10,${a})`; g.shadowBlur = flou; g.shadowOffsetY = dy; }
function sansOmbre(g) { g.shadowColor = 'transparent'; g.shadowBlur = 0; g.shadowOffsetY = 0; }
const enTete = (s) => `La Boussole 2027 · ${s.num ? s.num + ' · ' : ''}${s.enjeu}`;

/* ---------- 1 · Le message ---------- */
function bulle(g, x, y, w, h, coul, cote) {
  g.beginPath(); g.roundRect(x, y, w, h, 46); g.fill();
  g.beginPath();
  if (cote === 'g') { g.moveTo(x + 30, y + h - 40); g.quadraticCurveTo(x - 6, y + h + 10, x - 26, y + h + 6); g.quadraticCurveTo(x + 22, y + h - 4, x + 70, y + h - 10); }
  else { g.moveTo(x + w - 30, y + h - 40); g.quadraticCurveTo(x + w + 6, y + h + 10, x + w + 26, y + h + 6); g.quadraticCurveTo(x + w - 22, y + h - 4, x + w - 70, y + h - 10); }
  g.fill();
}
function dialogue(g, s) {
  const fd = g.createLinearGradient(0, 0, 0, H); fd.addColorStop(0, '#F7F2E9'); fd.addColorStop(1, '#ECE3D3');
  g.fillStyle = fd; g.fillRect(0, 0, W, H); vignette(g, 0.12);
  // en-tête de conversation
  const yT = HAUT + 10;
  g.fillStyle = 'rgba(255,253,248,.75)'; ombre(g, 30, 10, 0.08); g.beginPath(); g.roundRect(M - 40, yT, W - 2 * M + 80, 132, 30); g.fill(); sansOmbre(g);
  g.save(); g.translate(M + 34, yT + 66);
  g.fillStyle = C.bordeaux; g.beginPath(); g.arc(0, 0, 40, 0, Math.PI * 2); g.fill();
  g.fillStyle = '#FBF3E3'; g.beginPath(); g.moveTo(0, -26); g.lineTo(9, 0); g.lineTo(0, 26); g.lineTo(-9, 0); g.closePath(); g.fill();
  g.restore();
  ecrire(g, ['Repas de famille'], M + 100, yT + 60, 0, C.ink, `700 40px ${SERIF}`);
  ecrire(g, [enTete(s)], M + 100, yT + 100, 0, C.ink3, `500 26px ${SANS}`);
  g.save(); g.textAlign = 'center'; g.font = `600 24px ${SANS}`; g.fillStyle = C.ink3; g.fillText('Aujourd’hui', W / 2, yT + 210); g.restore();
  const heure = (t, x, y, coul, align = 'right') => ecrire(g, [t], x, y, 0, coul, `500 24px ${SANS}`, align);

  // bulle reçue : l'idée reçue
  const lg = 800;
  const c = ajuste(g, s.cliche, (t) => `500 ${t}px ${SANS}`, lg - 110, 48, 34, 5);
  const lhc = Math.round(c.t * 1.32), hc = c.ls.length * lhc + 100;
  let y = yT + 260;
  g.fillStyle = '#E0D5C1'; ombre(g, 24, 10, 0.12); bulle(g, M - 10, y, lg, hc, null, 'g'); sansOmbre(g);
  ecrire(g, c.ls, M + 40, y + 34 + c.t * 0.9, lhc, C.ink, c.f);
  heure('20:41', M - 10 + lg - 34, y + hc - 22, C.ink3);

  // réponse en deux bulles : le chiffre, puis l'explication
  const lr = 840, xr = W - M - lr + 10;
  const fondR = (y0, h) => { const b = g.createLinearGradient(0, y0, 0, y0 + h); b.addColorStop(0, '#7E2D3A'); b.addColorStop(1, C.bordeauxF); return b; };
  y += hc + 70;
  const v = ajuste(g, s.valeur, (t) => `700 ${t}px ${SERIF}`, lr - 110, 160, 80, 1);
  const hv = v.t + 70;
  g.fillStyle = fondR(y, hv); ombre(g, 40, 18, 0.25); g.beginPath(); g.roundRect(xr, y, lr, hv, 46); g.fill(); sansOmbre(g);
  ecrire(g, v.ls, xr + 55, y + 30 + v.t * 0.82, 0, '#FBF3E3', v.f);
  y += hv + 18;
  const r = ajuste(g, s.replique, (t) => `400 ${t}px ${SANS}`, lr - 110, 42, 30, 7);
  const lhr = Math.round(r.t * 1.4), hr = r.ls.length * lhr + 96;
  g.fillStyle = fondR(y, hr); ombre(g, 40, 18, 0.25); bulle(g, xr, y, lr, hr, null, 'd'); sansOmbre(g);
  ecrire(g, r.ls, xr + 55, y + 30 + r.t, lhr, '#F2EDE4', r.f);
  heure('20:42 · Lu', xr + lr - 34, y + hr - 22, 'rgba(242,237,228,.78)');

  // aperçu du lien, comme dans une messagerie
  y += hr + 40;
  const ls = lignes(g, s.source, `400 26px ${SANS}`, lr - 110).slice(0, 2);
  const hl = 128 + ls.length * 34;
  g.fillStyle = '#FFFDF8'; ombre(g, 30, 12, 0.14); g.beginPath(); g.roundRect(xr, y, lr, hl, 30); g.fill(); sansOmbre(g);
  g.fillStyle = C.bordeaux; g.fillRect(xr + 28, y + 28, 6, hl - 56);
  ecrire(g, ['lautrerecit.com/2027'], xr + 58, y + 58, 0, C.or, `600 26px ${SANS}`);
  ecrire(g, ['La Boussole 2027 · ' + s.enjeu], xr + 58, y + 100, 0, C.ink, `700 32px ${SERIF}`);
  const fin = ecrire(g, ls, xr + 58, y + 142, 34, C.ink3, `400 26px ${SANS}`);
  signature(g, BAS - 60);
  grain(g, 0.06);
  return fin + 30;
}

/* ---------- 2 · La boussole ---------- */
function rose(g, cx, cy, R, coul) {
  g.save(); g.translate(cx, cy); g.strokeStyle = coul; g.fillStyle = coul;
  g.lineWidth = 2; [1, 0.82, 0.5].forEach((k) => { g.beginPath(); g.arc(0, 0, R * k, 0, Math.PI * 2); g.stroke(); });
  for (let i = 0; i < 72; i++) { const a = (i / 72) * Math.PI * 2, l = i % 9 === 0 ? 30 : 12; g.beginPath(); g.moveTo(Math.cos(a) * R, Math.sin(a) * R); g.lineTo(Math.cos(a) * (R - l), Math.sin(a) * (R - l)); g.stroke(); }
  for (let i = 0; i < 8; i++) {
    const a = (i / 8) * Math.PI * 2 - Math.PI / 2, l = i % 2 ? R * 0.5 : R * 0.8;
    g.beginPath(); g.moveTo(Math.cos(a) * l, Math.sin(a) * l); g.lineTo(Math.cos(a + 0.35) * R * 0.12, Math.sin(a + 0.35) * R * 0.12); g.lineTo(0, 0); g.closePath(); g.globalAlpha = 0.9; g.fill();
    g.beginPath(); g.moveTo(Math.cos(a) * l, Math.sin(a) * l); g.lineTo(Math.cos(a - 0.35) * R * 0.12, Math.sin(a - 0.35) * R * 0.12); g.lineTo(0, 0); g.closePath(); g.globalAlpha = 0.35; g.fill();
  }
  g.restore();
}
function boussole(g, s) {
  const coupe = 860;
  g.fillStyle = C.creme; g.fillRect(0, 0, W, coupe); vignette(g, 0.14);
  g.globalAlpha = 0.09; rose(g, W / 2, coupe - 40, 520, C.or); g.globalAlpha = 1;
  mono(g, enTete(s), W / 2, HAUT + 30, C.or, 26, 7, 'center');
  const c = ajuste(g, '« ' + s.cliche + ' »', (t) => `italic 400 ${t}px ${SERIF}`, W - 2 * M - 20, 62, 40, 5);
  const lhc = Math.round(c.t * 1.26);
  const yc = HAUT + 150 + c.t * 0.8;
  ecrire(g, c.ls, W / 2, yc + Math.max(0, (5 - c.ls.length)) * lhc * 0.35, lhc, C.ink, c.f, 'center');
  // bande bordeaux
  const b = g.createLinearGradient(0, coupe, 0, H); b.addColorStop(0, '#7A2B38'); b.addColorStop(1, '#3F151C');
  g.fillStyle = b; g.fillRect(0, coupe, W, H - coupe);
  g.globalAlpha = 0.10; rose(g, W / 2, coupe - 40, 520, '#F2EDE4'); g.globalAlpha = 1;
  // aiguille
  g.save(); g.translate(W / 2, coupe); g.fillStyle = '#F2EDE4';
  g.beginPath(); g.moveTo(0, 70); g.lineTo(-22, 0); g.lineTo(0, -70); g.lineTo(22, 0); g.closePath(); g.fill();
  g.fillStyle = C.bordeaux; g.beginPath(); g.arc(0, 0, 8, 0, Math.PI * 2); g.fill(); g.restore();
  const v = ajuste(g, s.valeur, (t) => `700 ${t}px ${SERIF}`, W - 2 * M, 220, 100, 1);
  let y = coupe + 120 + v.t * 0.95;
  ecrire(g, v.ls, W / 2, y, 0, '#FBF3E3', v.f, 'center');
  const r = ajuste(g, s.replique, (t) => `400 ${t}px ${SANS}`, W - 2 * M - 20, 42, 30, 6);
  y = ecrire(g, r.ls, W / 2, y + 90, Math.round(r.t * 1.38), '#F2EDE4', r.f, 'center');
  g.save(); g.font = `400 26px ${SANS}`; g.fillStyle = 'rgba(242,237,228,.78)'; g.textAlign = 'center';
  const ls = lignes(g, 'Source : ' + s.source, g.font, W - 2 * M - 40).slice(0, 2);
  ls.forEach((l, i) => g.fillText(l, W / 2, y + 66 + i * 34)); g.restore();
  signature(g, BAS - 60, '#FBF3E3', 'rgba(242,237,228,.8)');
  grain(g, 0.07);
  return y + 66 + (ls.length - 1) * 34;
}

export const MODELES = [
  { id: 'message', nom: 'Le message', dessin: dialogue },
  { id: 'boussole', nom: 'La boussole', dessin: boussole },
];

export function dessinerStory(cv, s, modele = 'message') {
  cv.width = W; cv.height = H;
  const g = cv.getContext('2d'); g.textBaseline = 'alphabetic';
  const m = MODELES.find((x) => x.id === modele) || MODELES[0];
  // On redessine plus petit tant que le bas du texte mord sur la signature.
  for (K = 1; K > 0.6; K -= 0.06) { g.clearRect(0, 0, W, H); if (m.dessin(g, s) < BAS - 150) break; }
  K = 1;
  return cv;
}
