// Exporte les supports imprimables en PDF (et des captures PNG de contrôle).
// Utilisation : node marketing/outils/exporter-pdf.js
// Nécessite Playwright (require('playwright')) avec Chromium déjà installé.

const path = require('path');
const { chromium } = require('playwright');

const dir = path.join(__dirname, '..');
const pages = [
  { html: 'flyer-a5.html', pdf: 'flyer-a5.pdf', format: 'A5' },
  { html: 'stage-noel-2026.html', pdf: 'stage-noel-2026.pdf', format: 'A4' },
];

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  for (const p of pages) {
    await page.goto('file://' + path.join(dir, p.html), { waitUntil: 'networkidle' });
    await page.pdf({
      path: path.join(dir, p.pdf),
      preferCSSPageSize: true,
      printBackground: true,
    });
    console.log('PDF :', p.pdf);
  }
  await browser.close();
})();
