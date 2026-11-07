# Programme de parrainage Stud+

> **L’idée en une phrase** : les familles qui voient déjà les progrès de leur enfant dans l’espace de suivi sont les meilleures ambassadrices de Stud+ ; le parrainage leur donne une raison de parler de vous **cette semaine**, et non « un jour ».
>
> **Objectifs** : 5 familles sur 5 informées avant le 22 novembre 2026 · 2 recommandations reçues avant le 30 novembre · 2 filleuls qui ont fait leur 1re séance avant le 20 décembre.

---

## 1. La mécanique

| | Ce qu’il reçoit | Quand |
|---|---|---|
| **Le filleul** (la nouvelle famille) | Sa **1re heure de cours offerte** : la 1re séance de 2 h n’est facturée qu’une heure. | Dès la 1re séance. |
| **Le parrain** (la famille qui recommande) | **Une séance de 2 h offerte.** | Quand le filleul a fait sa **4e séance**. |

**Concrètement, sur la facture**
- Filleul en individuel : 1re séance facturée **50 €** au lieu de 100 €, soit **25 € payés** après Avance Immédiate. Les séances suivantes : 100 €, 50 € payés.
- Filleul en formule fratrie : 1re séance facturée **70 €** au lieu de 140 €, soit **35 € payés**.
- Parrain : la séance offerte n’apparaît pas sur la facture du mois (elle n’est pas facturée, donc pas déclarée à l’URSSAF). Seules les heures payées sont déclarées en Avance Immédiate. ⚠️ À faire confirmer par l’expert-comptable lors du premier rendez-vous.

**Pourquoi la 4e séance ?** Parce qu’une famille qui a fait 4 séances (un mois de cours hebdomadaires) est une famille installée. La récompense du parrain arrive au moment où le filleul est vraiment devenu client, et le coût d’une séance offerte est couvert plusieurs fois.

---

## 2. Les règles (et ce qu’elles empêchent)

À afficher au dos de la carte de parrainage et à rappeler en cas de doute.

1. **Le filleul est une nouvelle famille** : elle n’a jamais pris de cours avec Stud+. → *Empêche* : qu’une ancienne famille revienne « parrainée » pour obtenir l’heure offerte.
2. **Le filleul appartient à un autre foyer que le parrain.** Un frère ou une sœur du même foyer passe par la formule fratrie, pas par le parrainage. → *Empêche* : de parrainer son propre enfant.
3. **Le nom du parrain est donné dès le premier message** du filleul. Il est noté immédiatement dans Notion. → *Empêche* : les parrainages déclarés après coup et les litiges entre deux familles qui revendiquent le même filleul (règle : le premier nom donné l’emporte).
4. **Le parrain est une famille active** (au moins une séance dans les 30 derniers jours) ou une famille ancienne qui a été cliente pendant au moins un trimestre. → *Empêche* : les « parrains » qui n’ont jamais été clients.
5. **La séance du parrain est due quand la 4e séance du filleul a eu lieu**, et non à la réservation. Toutes les séances facturées comptent, y compris celles du Pack Noël ; une séance annulée ne compte pas.
6. **Pack Noël** : son prix (300 €, 150 € payés) est fixe. L’heure offerte au filleul s’applique à sa première séance de cours régulier, pas au Pack.
7. **La séance offerte se prend dans l’année scolaire en cours** (jusqu’au 30 juin 2027 pour les parrainages de 2026-2027), sur un créneau habituel. Elle n’est ni remboursable, ni convertible en argent, ni cessible.
8. **Pas de plafond** : 3 filleuls arrivés à leur 4e séance = 3 séances offertes. Un parrain qui vous amène 3 familles vous a rapporté bien plus que 3 séances.
9. **Parrainage et avis Google sont séparés** : on ne conditionne jamais une récompense à un avis (règle de Google).
10. **Stud+ peut refuser un parrainage** en cas de fraude manifeste (faux foyer, doublon). Dites-le en une phrase, poliment, sans procès d’intention.

---

## 3. Le suivi dans Notion (15 min à créer, 2 min par parrainage)

Créez une base **« Parrainages »** reliée à votre base **« Familles »** (ou « Élèves »).

| Propriété | Type | Contenu |
|---|---|---|
| Filleul | Titre | Nom de la nouvelle famille |
| Parrain | Relation → Familles | La famille qui recommande |
| Date du 1er contact | Date | Jour du premier message du filleul |
| Canal | Sélection | WhatsApp, SMS, appel, carte remise en main propre |
| Statut | Statut | `Recommandé` → `1er contact` → `1re séance faite` → `4e séance faite` → `Séance du parrain planifiée` → `Séance du parrain faite` · ou `Perdu` |
| Séances du filleul | Nombre (ou rollup depuis l’agenda) | Mis à jour après chaque séance |
| 1re heure offerte appliquée | Case à cocher | Cochée quand la facture du mois l’a bien prise en compte |
| Récompense due | Formule | `prop("Séances du filleul") >= 4` |
| Date de la séance offerte | Date | Créneau planifié avec le parrain |
| Notes | Texte | Ce qui a déclenché la recommandation (camarade de classe, voisin…) |

**Trois vues à créer**
- **À traiter** : statut `Recommandé` ou `1er contact` → à rappeler dans les 24 h.
- **Récompenses à donner** : `Récompense due` cochée et statut différent de `Séance du parrain faite`.
- **Tableau de bord** : regroupé par parrain, pour voir vos meilleurs ambassadeurs.

**Routine du dimanche (2 min)** : mettre à jour le nombre de séances des filleuls ; si un filleul vient de faire sa 4e séance, envoyer le message de remerciement (§ 5) le lundi.

---

## 4. Le lancement (semaine du 16 novembre 2026)

**Matériel** : les cartes de parrainage imprimées (`marketing/print/carte-parrainage.pdf`, 3 cartes par famille), le message du § 4 bis, la base Notion prête.

**Le déroulé, famille par famille**
1. **En fin de séance**, 1 minute, de vive voix au parent présent : « Je lance un parrainage : si vous me recommandez à une famille, elle a sa 1re heure offerte, et vous une séance de 2 h quand elle a fait 4 séances. Je vous laisse 3 cartes. »
2. **Le soir même**, le message WhatsApp ci-dessous, puis le message transférable.
3. **Dans Notion**, cochez « Parrainage annoncé » sur la fiche de la famille (case à ajouter à la base « Familles »).

### 4 bis. Message de lancement

> Bonjour [Prénom], c’est Hamza. Merci encore pour la séance de ce soir, [Prénom de l’élève] a bien avancé sur [chapitre] 💪
>
> Comme je vous le disais, je lance le parrainage Stud+ 🎁 Si une famille de votre entourage cherche un prof de maths ou de physique-chimie, du collège au lycée :  
> ➡️ elle a sa **1re heure de cours offerte** ;  
> ➡️ vous recevez **une séance de 2 h offerte** dès qu’elle a fait sa 4e séance.
>
> Il suffit qu’elle me contacte au 07 82 92 38 89 en donnant votre nom. Je vous envoie juste en dessous un petit message tout prêt à transférer.

### Message à transférer (envoyé juste après)

> Je te transfère le contact de Hamza, le prof de maths et physique-chimie de [Prénom]. Il vient à domicile, séances de 2 h, du collège au lycée. Après chaque séance, on reçoit un compte rendu en ligne avec les devoirs et les compétences travaillées. Avec l’Avance Immédiate, la séance revient à 50 € au lieu de 100 €. Si tu le contactes de ma part, ta 1re heure est offerte : 07 82 92 38 89 ou https://wa.me/33782923889

---

## 5. Les messages du parcours

**Le filleul vient de vous contacter → au parrain, le jour même**
> Bonjour [Prénom], [nom du filleul] vient de me contacter de votre part : merci beaucoup pour votre confiance ! Je vous tiens au courant dès que vos 2 h offertes sont débloquées.

**Le filleul a fait sa 4e séance → au parrain, le lendemain**
> Bonne nouvelle, [Prénom] 🎉 [Nom du filleul] a fait sa 4e séance : votre séance de 2 h offerte est débloquée. Je vous propose de la placer [à la place de la séance du jeudi 10 décembre / en plus, pendant les vacances]. Ça vous va ? Et merci encore : c’est grâce à des recommandations comme la vôtre que Stud+ grandit.

**Au filleul, avant la 1re séance**
> Bonjour [Prénom], c’est confirmé pour [jour, heure] ! Comme vous venez de la part de [nom du parrain], votre 1re heure est offerte : la 1re séance de 2 h ne vous sera facturée qu’une heure. À [jour] !

---

## 6. Les relances

Le parrainage ne vit que si on en reparle au bon moment. Trois relances par trimestre, pas plus.

**Relance 1 – 15 jours après le lancement (vers le 1er décembre), aux familles qui n’ont encore recommandé personne**
> Bonjour [Prénom], c’est la période où les parents de la classe de [Prénom de l’élève] commencent à s’inquiéter pour [le brevet blanc / le bac blanc] de janvier. Si l’un d’eux vous demande un prof de maths ou de physique-chimie, pensez au parrainage : sa 1re heure est offerte, et vous recevez une séance de 2 h après sa 4e séance. Vous avez encore des cartes ? Je vous en rapporte si besoin.

**Relance 2 – après un bon résultat** (bonne note, compte rendu très positif)
> Bravo encore à [Prénom] pour [son 15 en physique] ! Si d’autres parents vous demandent comment [il / elle] a progressé, n’hésitez pas à leur donner mon numéro : la 1re heure leur est offerte, et une séance vous est offerte quand ils ont fait 4 séances.

**Relance 3 – rentrée de janvier (semaine du 4 janvier 2027)**
> Bonne année, [Prénom] ! Le 2e trimestre commence, et c’est souvent maintenant que les familles cherchent un prof, juste après les bulletins du 1er trimestre. Le parrainage continue : 1re heure offerte pour la famille que vous recommandez, 1 séance de 2 h offerte pour vous dès sa 4e séance.

**Bonnes pratiques**
- Remerciez **chaque** recommandation, même si elle n’aboutit pas : c’est le geste qui déclenche la suivante.
- Donnez la séance offerte vite (dans les 3 semaines qui suivent la 4e séance du filleul).
- Ne relancez jamais une famille qui traverse une période difficile (note décevante, conflit avec l’élève) : attendez le prochain bon moment.
