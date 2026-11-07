// Régénère le QR code du flyer et de la carte de parrainage avec le VRAI lien.
//
// Utilisation (une seule fois : npm install qrcode, dans n'importe quel dossier de travail) :
//   node marketing/outils/generer-qr.js "https://votre-site.fr"
//
// Le fichier marketing/assets/qr-lien-site.svg est remplacé. Ensuite, relancez
// node marketing/outils/exporter-pdf.js pour régénérer les PDF.

const fs = require('fs');
const path = require('path');
const QRCode = require('qrcode');

const url = process.argv[2];
if (!url || url.includes('[[')) {
  console.error('Donnez le vrai lien en argument, par ex. : node generer-qr.js "https://stud-plus.fr"');
  process.exit(1);
}

const out = path.join(__dirname, '..', 'assets', 'qr-lien-site.svg');
QRCode.toString(url, {
  type: 'svg',
  errorCorrectionLevel: 'M',
  margin: 1,
  color: { dark: '#0f2a4a', light: '#ffffff' },
}, (err, svg) => {
  if (err) throw err;
  fs.writeFileSync(out, svg);
  console.log('QR code mis à jour :', out, '→', url);
});
