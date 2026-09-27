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

  for (let i = 0; i < slides.length; i++) {
    const n = String(i + 1).padStart(2, '0');
    const outPath = join(outDir, `paix-coloniale-${n}.png`);
    await slides[i].screenshot({ path: outPath });
    console.log(`✓ ${outPath}`);
  }
} finally {
  await browser.close();
}
