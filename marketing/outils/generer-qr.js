// Génère les QR codes WhatsApp (SVG) des supports Stud+.
// Chaque QR ouvre WhatsApp vers le 07 82 92 38 89 avec un message prérempli.
//
// Utilisation (une seule fois : npm install qrcode, dans un dossier de travail) :
//   node marketing/outils/generer-qr.js
// Puis : node marketing/outils/exporter-pdf.js et node marketing/outils/exporter-visuels.js

const fs = require('fs');
const path = require('path');
const QRCode = require('qrcode');

const base = 'https://wa.me/33782923889?text=';
const qr = {
  'qr-whatsapp': 'Bonjour Hamza, je souhaite des informations sur les cours Stud+.',
  'qr-pack-noel': 'Bonjour Hamza, je souhaite réserver le Pack Noël Stud+.',
  'qr-parrainage': 'Bonjour Hamza, une famille m’a recommandé Stud+ (parrainage).',
};
const dossiers = [
  path.join(__dirname, '..', 'print'),
  path.join(__dirname, '..', 'visuels', 'src'),
];

for (const [nom, texte] of Object.entries(qr)) {
  const url = base + encodeURIComponent(texte);
  QRCode.toString(url, {
    type: 'svg',
    errorCorrectionLevel: 'M',
    margin: 0,
    color: { dark: '#0A0F1FFF', light: '#FFFFFF00' },
  }, (err, svg) => {
    if (err) throw err;
    for (const d of dossiers) fs.writeFileSync(path.join(d, nom + '.svg'), svg);
    console.log('QR code :', nom, '→', url);
  });
}
