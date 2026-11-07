# Stud+ · Charte graphique

Direction : **moderne et dynamique**, façon start-up edtech. Des couleurs franches, des formes géométriques simples, un ton direct. Elle doit parler aux ados (énergie, clarté) comme aux parents (sérieux, transparence).

Tous les supports (site, imprimés, réseaux sociaux) partagent un seul fichier de jetons : [`tokens.css`](tokens.css).

---

## 1. Logo

| Fichier | Usage |
|---|---|
| `logo-stud-plus.svg` | Version principale, sur fond blanc ou papier (`--paper`). |
| `logo-stud-plus-fond-sombre.svg` | Lettres blanches, trait corail, « + » jaune : sur `--ink` ou `--blue`. |
| `logo-stud-plus-blanc.svg` | Monochrome blanc : sur photo, sur fond bleu chargé, en marquage. |
| `logo-stud-plus-encre.svg` | Monochrome encre : impression une couleur, tampon, fax. |
| `icone-stud-plus.svg` | Icône carrée (fond bleu) : avatar, favicon, appli. |
| `icone-stud-plus-sombre.svg` | Icône carrée (fond encre). |

**L’original reste disponible.** Le logo 3D dessiné par Hamza (`marketing/assets/logo-stud-plus.png`, `icon-512.png` à la racine) n’est pas remplacé. La version plate en est une transcription vectorielle fidèle : le même mot « STUD », la barre du T en rouge (le « moins »), le « + » jaune en exposant. Elle sert aux nouveaux supports parce qu’elle reste nette à toutes les tailles et s’imprime sans perte. L’appli existante garde ses icônes d’origine.

Construction : lettres en Bricolage Grotesque ExtraBold vectorisées, approche resserrée ; barre du T inclinée à −6° ; « + » incliné à +12°, placé en exposant après le D.

### Règles d’usage
- **Zone de protection** : un espace libre au moins égal à la hauteur de la barre rouge tout autour du logo.
- **Taille minimale** : 24 mm de large en impression, 96 px à l’écran. En dessous, utiliser l’icône carrée.
- **À faire** : logo principal sur fond clair, version « fond sombre » sur `--ink` ou `--blue`, versions monochromes quand la couleur n’est pas possible.
- **À ne pas faire** : déformer, changer les couleurs, ajouter une ombre ou un contour, poser la version principale (bleue) sur un fond bleu, poser le logo sur une photo chargée sans aplat, recomposer le mot dans une autre police.

---

## 2. Couleurs

| Jeton | Hex | Rôle |
|---|---|---|
| `--ink` | `#0A0F1F` | Texte principal, fonds sombres |
| `--ink-2` | `#1B2340` | Cartes sur fond sombre |
| `--blue` | `#2F5BFF` | Couleur principale, électrique : boutons, titres d’accent, fonds forts |
| `--blue-700` | `#2449D8` | Bleu pour texte sur `--blue-soft` |
| `--blue-soft` | `#E8EDFF` | Fonds de mise en avant, étiquettes |
| `--blue-300` | `#7C98FF` | Bleu lisible sur fond sombre |
| `--yellow` | `#FFC531` | Le « + », les prix, les accents |
| `--coral` | `#FF5B4A` | Le trait du logo : avec parcimonie (une étiquette, un signal) |
| `--coral-700` | `#D93A2B` | Corail pour un texte sur fond clair |
| `--mint` | `#16C79A` | Validation, compétence acquise |
| `--mint-700` | `#0B7A5C` | Menthe pour un texte sur fond clair |
| `--paper` | `#F7F8FC` | Fonds clairs |
| `--line` | `#E3E6F0` | Filets, bordures |
| `--muted` | `#4A5270` | Texte secondaire sur fond clair |
| `--muted-dark` | `#A9B1CC` | Texte secondaire sur fond sombre |

Proportions conseillées : 60 % neutres (`--paper`, blanc, `--ink`), 25 % bleu, 10 % jaune, 5 % corail et menthe.

### Contrastes vérifiés (WCAG 2.1)

AA exige 4,5:1 pour le texte courant et 3:1 pour le gros texte (24 px, ou 18,5 px en gras).

| Texte | Fond | Ratio | Verdict |
|---|---|---|---|
| `--ink` | blanc | 19,07 | AAA |
| `--ink` | `--paper` | 17,97 | AAA |
| `--muted` | `--paper` | 7,24 | AAA |
| `--blue` | blanc | 5,17 | AA |
| `--blue` | `--paper` | 4,87 | AA |
| blanc | `--blue` | 5,17 | AA |
| `--blue-700` | `--blue-soft` | 5,96 | AA |
| `--ink` | `--yellow` | 12,06 | AAA |
| `--yellow` | `--ink` | 12,06 | AAA |
| `--ink` | `--coral` | 6,22 | AA |
| `--coral-700` | blanc | 4,57 | AA |
| `--mint-700` | blanc | 5,31 | AA |
| `--ink` | `--mint` | 8,78 | AAA |
| blanc | `--ink-2` | 15,43 | AAA |
| `--muted-dark` | `--ink` | 8,94 | AAA |
| `--blue-300` | `--ink` | 7,08 | AAA |
| `--yellow` | `--blue` | 3,27 | Gros texte uniquement |

**Interdits** : texte blanc sur `--yellow` (1,58), sur `--mint` (2,17) ou sur `--coral` (3,07) ; `--blue` en texte sur `--blue-soft` (4,43, utiliser `--blue-700`). Sur le jaune, la menthe et le corail, le texte est toujours `--ink`.

---

## 3. Typographies (Google Fonts)

- **Bricolage Grotesque** (600 à 800) : titres, prix, chiffres clés. Approche légèrement négative (`--tracking-display: -0.025em`), interlignage serré (1,05).
- **Inter** (400 à 700) : texte courant, interfaces, mentions. Interlignage 1,55.

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,600..800&family=Inter:wght@400..700&display=swap" rel="stylesheet">
```

### Échelle (ratio 1,25, base 16 px)

| Jeton | Taille | Usage |
|---|---|---|
| `--fs-5xl` | 61 px | H1 (écran large) |
| `--fs-4xl` | 49 px | H1 mobile |
| `--fs-3xl` | 39 px | H2 |
| `--fs-2xl` | 31 px | H2 mobile |
| `--fs-xl` | 25 px | H3 |
| `--fs-lg` | 20 px | Chapô |
| `--fs-base` | 16 px | Texte courant |
| `--fs-sm` | 14 px | Légendes |
| `--fs-xs` | 12,8 px | Mentions |

Surtitres : Inter 600 à 700, capitales, espacement `0.08em`. En impression, pas de texte sous 6 pt (2,1 mm).

---

## 4. Formes signature

1. **Le « + » jaune** : extrait du logo, incliné à +12°. Il ponctue une composition (1 grand, au plus 1 petit en bleu ou blanc). Jamais sur du texte.
2. **Le papier millimétré** : quadrillage très léger (`--grid-light`, `--grid-dark`), clin d’œil aux sciences.
3. **Les halos** : dégradés flous bleu et violet (`--halo`), uniquement sur fond sombre.
4. **Les cartes** : coins arrondis de 20 à 28 px (`--radius`, `--radius-lg`), ombre douce (`--shadow-soft`), ombre bleutée pour la carte mise en avant (`--shadow-lift`).
5. **L’étiquette inclinée** : une pastille capitales tournée à −6°, l’angle du trait du logo (`--tilt`). Une seule par composition.
6. **La pastille prix** : le prix après Avance Immédiate toujours en Bricolage ExtraBold, sur fond `--yellow`.

---

## 5. Iconographie

- Icônes au trait, style Lucide : trait de 2 à 2,4 px, extrémités et angles arrondis, grille de 24 px.
- Posées dans un carré arrondi (`--blue` avec icône blanche, ou `--yellow` avec icône `--ink`).
- Validation : pastille ronde `--mint` avec coche `--ink`.
- Pas d’émojis dans les supports imprimés ni dans les titres.
- Pas de photos de banque d’images. Si une photo est utilisée, ce sera une vraie photo d’Hamza ou d’un vrai cahier.

---

## 6. Ton de voix

Direct, énergique, rassurant. Des phrases courtes. Des faits plutôt que des promesses. On **vouvoie** toujours les parents ; on s’adresse aux élèves sans infantiliser.

| À faire | À ne pas faire |
|---|---|
| « Les maths et la physique, enfin sous contrôle. » | « Votre enfant va adorer les maths ! » |
| « Après chaque séance, vous savez tout. » | « Un suivi ultra-personnalisé de qualité premium. » |
| « 50 € la séance de 2 h après Avance Immédiate. » | « Des prix imbattables !!! » |
| « Un seul prof, un seul agenda : places limitées. » | « Dernières places, dépêchez-vous ! » |
| « Prévenez 24 h avant en cas d’empêchement. » | « Toute séance non décommandée sera facturée. » |
| « Tu bloques sur Thalès ? On reprend la méthode. » (aux élèves, réseaux sociaux) | « Tu » adressé aux parents |

Règles fermes :
- **Aucun avis client, aucune statistique de réussite, aucun nombre d’élèves inventés.** Les maquettes de l’espace de suivi portent toujours la mention « Exemple ».
- Toujours donner le prix **après** Avance Immédiate, avec le prix avant à côté.
- Typographie française : espace insécable avant « : » et dans « 50 € », « 2 h » ; espace fine insécable avant « ; ! ? » ; guillemets « » ; apostrophe typographique ’.
- Contact : 07 82 92 38 89 et WhatsApp (https://wa.me/33782923889). Pas d’adresse e-mail publique.

---

## 7. Fichiers des supports

- Imprimés : `marketing/print/` (HTML source + PDF). Export : `node marketing/outils/exporter-pdf.js`.
- Réseaux sociaux : `marketing/visuels/` (PNG) et `marketing/visuels/src/` (gabarits HTML). Export : `node marketing/outils/exporter-visuels.js`.
- QR codes WhatsApp : `node marketing/outils/generer-qr.js` (nécessite `npm install qrcode`).
