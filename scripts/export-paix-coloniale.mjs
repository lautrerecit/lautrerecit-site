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
