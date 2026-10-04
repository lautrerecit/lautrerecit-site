import { chromium } from 'playwright-core';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { mkdirSync } from 'node:fs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const htmlPath = join(root, 'paix-coloniale.html');
const outDir = join(root, 'export-paix-coloniale');

mkdirSync(outDir, { recursive: true });

const browser = await chromium.launch({
  executablePath: '/opt/pw-browsers/chromium',
});

try {
  const page = await browser.newPage({ deviceScaleFactor: 2 });

  // Le Chromium headless de cet environnement ne fait pas confiance au CA du
  // proxy réseau (erreur ERR_CERT_AUTHORITY_INVALID côté navigateur), donc les
  // requêtes vers fonts.googleapis.com/fonts.gstatic.com échouaient en silence
  // et toutes les polices retombaient sur la police système de secours — d'où
  // le rendu différent de la version réelle du site. On relaie ces requêtes
  // via `fetch` de Node, qui lui valide le CA du proxy correctement.
  await page.route(/^https:\/\/fonts\.(googleapis|gstatic)\.com\//, async (route) => {
    const req = route.request();
    try {
      const res = await fetch(req.url(), { headers: req.headers() });
      const body = Buffer.from(await res.arrayBuffer());
      await route.fulfill({
        status: res.status,
        headers: Object.fromEntries(res.headers),
        body,
      });
    } catch (err) {
      console.error(`✗ échec du relais de police : ${req.url()} — ${err.message}`);
      await route.continue();
    }
  });

  await page.goto(`file://${htmlPath}`, { waitUntil: 'networkidle' });

  // La page utilise `font-family:Georgia,'Cormorant Garamond',serif` par
  // endroits (ex. .ann-fact p) : sur un vrai poste (Windows/Mac), Georgia est
  // une police système installée et passe donc AVANT Cormorant Garamond dans
  // la pile — son gras est nettement plus épais/dense que celui, fin et
  // élégant, de Cormorant Garamond. Ce Chromium headless n'a pas Georgia
  // installée (police propriétaire Microsoft, absente des conteneurs Linux),
  // donc il retombe silencieusement sur Cormorant Garamond → rendu plus fin
  // que ce qu'un visiteur voit réellement. On comble ce trou avec Gelasio,
  // le clone libre de Georgia (mêmes métriques, même dessin) publié par
  // Google Fonts, réinjecté sous le nom "Georgia" pour que le rendu headless
  // corresponde à ce qu'un navigateur normal affiche.
  try {
    const gelasioCss = await (
      await fetch("https://fonts.googleapis.com/css2?family=Gelasio:ital,wght@0,400;0,700;1,400;1,700&display=swap")
    ).text();
    await page.addStyleTag({ content: gelasioCss.replace(/Gelasio/g, 'Georgia') });
  } catch (err) {
    console.warn(`⚠ Impossible de charger le substitut de Georgia (Gelasio) : ${err.message}`);
  }

  // Attend que toutes les polices web (Google Fonts) soient réellement chargées,
  // sinon Chromium capture parfois les slides avec la police de fallback système.
  await page.evaluate(async () => {
    await document.fonts.ready;
    await Promise.all(
      [...document.fonts].map((f) => f.load(f.family).catch(() => {}))
    );
  });
  await page.waitForTimeout(300);

  const failedFonts = await page.evaluate(() =>
    [...document.fonts].filter((f) => f.status !== 'loaded').map((f) => `${f.family} ${f.weight} ${f.style}`)
  );
  if (failedFonts.length) {
    console.warn(`⚠ Polices non chargées (fallback système utilisé) : ${failedFonts.join(', ')}`);
  } else {
    console.log('✓ Toutes les polices web sont chargées.');
  }

  const slides = await page.locator('.slide').all();
  console.log(`${slides.length} slides détectées.`);

  // Détecte les chevauchements avant d'exporter (texte qui déborde sur la
  // pagination `.pC`, position:absolute en bas de chaque slide) : un texte
  // trop grand/gras pousse le flux de contenu en dehors de l'espace prévu,
  // et comme `.slide{overflow:hidden}` ne le signale pas, ça passe inaperçu
  // tant qu'on n'a pas regardé l'image. Mieux vaut le savoir avant d'exporter.
  const overlaps = await page.evaluate(() => {
    const results = [];
    document.querySelectorAll('.slide').forEach((slide, i) => {
      const pC = slide.querySelector('.pC');
      if (!pC) return;
      const pcRect = pC.getBoundingClientRect();
      slide.querySelectorAll('.in *').forEach((el) => {
        if (el.children.length || !el.textContent.trim()) return; // seulement les feuilles avec du texte
        const r = el.getBoundingClientRect();
        if (r.bottom > pcRect.top + 4 && r.top < pcRect.bottom) {
          results.push({ slide: i + 1, el: el.tagName + (el.className ? '.' + String(el.className).split(' ')[0] : ''), text: el.textContent.trim().slice(0, 40) });
        }
      });
    });
    return results;
  });
  if (overlaps.length) {
    console.warn(`⚠ Chevauchement texte/pagination détecté :`);
    for (const o of overlaps) console.warn(`  slide ${o.slide} — <${o.el}> « ${o.text}… »`);
  }

  // Numéros de slides (1-indexés) passés en argument pour n'exporter qu'un
  // sous-ensemble, ex. `node scripts/export-paix-coloniale.mjs 6 8`.
  const only = process.argv.slice(2).map(Number).filter(Boolean);
  const indices = only.length ? only.map((n) => n - 1) : slides.map((_, i) => i);

  for (const i of indices) {
    const n = String(i + 1).padStart(2, '0');
    const outPath = join(outDir, `paix-coloniale-${n}.png`);
    await slides[i].screenshot({ path: outPath });
    console.log(`✓ ${outPath}`);
  }
} finally {
  await browser.close();
}
