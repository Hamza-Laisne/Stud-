// Exporte les supports imprimables de marketing/print/ en PDF.
// Utilisation : node marketing/outils/exporter-pdf.js
// Nécessite Playwright (require('playwright')) avec Chromium déjà installé,
// et une connexion internet (polices Google Fonts).

const path = require('path');
const { chromium } = require('playwright');

const dir = path.join(__dirname, '..', 'print');
const supports = [
  'flyer-a5',          // A5 recto-verso (2 pages)
  'affiche-pack-noel', // A4
  'carte-parrainage',  // 85 × 55 mm recto-verso (2 pages)
];

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  for (const nom of supports) {
    await page.goto('file://' + path.join(dir, nom + '.html'), { waitUntil: 'networkidle' });
    await page.evaluate(() => document.fonts.ready);
    await page.pdf({
      path: path.join(dir, nom + '.pdf'),
      preferCSSPageSize: true,
      printBackground: true,
    });
    console.log('PDF :', 'marketing/print/' + nom + '.pdf');
  }
  await browser.close();
})();
