// Exporte les visuels réseaux sociaux (gabarits HTML de marketing/visuels/src/)
// en PNG prêts à publier dans marketing/visuels/.
// Utilisation : node marketing/outils/exporter-visuels.js [nom-du-gabarit]
// Nécessite Playwright (require('playwright')) et une connexion internet (Google Fonts).

const path = require('path');
const fs = require('fs');
const { chromium } = require('playwright');

const src = path.join(__dirname, '..', 'visuels', 'src');
const out = path.join(__dirname, '..', 'visuels');
const visuels = {
  'post-1-presentation': [1080, 1350],
  'post-2-suivi-en-ligne': [1080, 1350],
  'post-3-avance-immediate': [1080, 1350],
  'post-4-pack-noel': [1080, 1350],
  'post-5-parrainage': [1080, 1350],
  'post-6-erreurs-physique-chimie': [1080, 1350],
  'story-1-pack-noel': [1080, 1920],
  'story-2-contact': [1080, 1920],
  'google-business-couverture': [1200, 675],
  'google-business-logo': [720, 720],
};

(async () => {
  const filtre = process.argv[2];
  const browser = await chromium.launch();
  for (const [nom, [w, h]] of Object.entries(visuels)) {
    if (filtre && nom !== filtre) continue;
    const fichier = path.join(src, nom + '.html');
    if (!fs.existsSync(fichier)) { console.warn('Absent :', nom); continue; }
    const page = await browser.newPage({ viewport: { width: w, height: h }, deviceScaleFactor: 1 });
    const erreurs = [];
    page.on('pageerror', (e) => erreurs.push(e.message));
    page.on('requestfailed', (r) => erreurs.push('Échec : ' + r.url()));
    await page.goto('file://' + fichier, { waitUntil: 'networkidle' });
    await page.evaluate(() => document.fonts.ready);
    await page.locator('.canvas').screenshot({ path: path.join(out, nom + '.png') });
    console.log('PNG :', 'marketing/visuels/' + nom + '.png', erreurs.length ? erreurs : '');
    await page.close();
  }
  await browser.close();
})();
