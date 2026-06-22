# L'Autre Récit — Pages Systeme.io (cours + checkout)

Tout ce qu'il faut pour monter la partie **`cours.lautrerecit.com`** (Systeme.io), dans l'ADN de la vitrine.

> **Aperçu visuel : ouvre `_APERCU.html`** (double-clic) — les 5 pages rendues, onglets.

---

## 1. Comment ça marche, Systeme.io (l'essentiel)

Systeme.io n'est **pas** comme Netlify : on **n'uploade pas de HTML**. C'est un **constructeur par blocs** (glisser-déposer). Mais il accepte 3 choses qui sauvent tout :

1. **Bloc « Code HTML brut »** — on y colle un bloc de marque complet (style inclus). C'est ce qui rend les pages premium.
2. **Code personnalisé** (`<head>` / CSS) au niveau page ou tunnel — pour restyler les éléments **natifs** (formulaire de paiement, connexion, boutons).
3. **Éléments natifs obligatoires** — paiement, vidéo, login : impossible à remplacer (sinon plus de paiement/accès). On les **restyle**, on ne les recode pas.

➡️ **Règle** : partie visuelle = bloc HTML collé (autonome). Partie fonctionnelle = natif Systeme + `brand.css`.

### Répartition du site
```
www.lautrerecit.com   →  Netlify   →  vitrine + PAGE DE VENTE (SEO, déjà premium)
cours.lautrerecit.com →  Systeme.io →  checkout + espace membre + cours + connexion
```
La **page de vente reste sur Netlify** (déjà faite). Systeme commence à l'**achat**.

---

## 2. Combien de pages ? → **5 essentielles** (+ 2 optionnelles)

| # | Page | Type Systeme | Rôle | Statut |
|---|------|--------------|------|--------|
| **1** | **Bon de commande** `/commander` | Étape tunnel « Bon de commande » | Le paiement. Les CTA de la page de vente Netlify pointent ICI. | ⭐ indispensable |
| **2** | **Merci / Confirmation** `/merci` | Étape tunnel « Page de confirmation » | Après paiement : « bienvenue », 3 étapes, lien espace. | ⭐ indispensable |
| **3** | **Espace membre** `/formation` | Cours (module formation) | Accueil du cours : progression + liste des modules. | ⭐ indispensable |
| **4** | **Leçon** (gabarit) | Leçon de cours | 1 vidéo + description + ressources. Répété par module. | ⭐ indispensable |
| **5** | **Connexion** `/connexion` | Page de connexion (auth Systeme) | Login élève. Cible du « Se connecter » de la vitrine. | ⭐ indispensable |
| 6 | Bump / Upsell | Order bump / One-time offer | + de revenu (pack citations, offre unique). | optionnel ph.2 |
| 7 | Squeeze (leçon offerte) | Tunnel « Squeeze page » | Capter des e-mails avec 1 leçon gratuite. | optionnel ph.2 |

**Pas besoin** de page de vente sur Systeme (elle est sur Netlify), ni de page « profil » (native, rien à faire).

---

## 3. Le tunnel, dans l'ordre (le parcours d'achat)

```
[Page de vente Netlify]  ──clic "Acheter"──▶  [1. Bon de commande]
                                                      │ paiement
                                                      ▼
                                              [2. Merci/Confirmation]
                                                      │ clic "Accéder"
                                                      ▼
[5. Connexion] ◀──login──  [3. Espace membre]  ──▶  [4. Leçons]
```

Sur Systeme, **1, 2** = un **Tunnel** (type « Vendre un produit »). **3, 4** = un **Cours**. **5** = page de connexion (réglage du compte). Systeme relie l'achat → l'accès au cours automatiquement (règle d'automatisation « après achat → donner accès »).

---

## 4. Montage, page par page

### Étape 0 — Coller le CSS de marque (une fois)
Tunnel (ou chaque page) → **Réglages → Code personnalisé / `<head>`** → colle le contenu de **`brand.css`** entre `<style>…</style>`.
> Ça suffit à restyler boutons + champs natifs. Les blocs HTML ci-dessous sont déjà stylés tout seuls.

### Page 1 — Bon de commande
1. Tunnel → étape **« Bon de commande »** → choisis un modèle simple 2 colonnes.
2. Colonne gauche : **élément « Code HTML brut »** → colle `01-bon-de-commande.html` *(à générer après validation du design)*.
3. Colonne droite : **élément natif « Paiement »** de Systeme (e-mail, carte, bouton). Branche-le à ton produit + Stripe. Le `brand.css` le passe en doré.
4. (Pas de bump pour l'instant — choix de Rany. Le bloc `01` n'en contient pas. Un order bump pourra s'ajouter plus tard côté produit Systeme.)
5. Bouton de paiement → texte « Payer 79,99 € → ».

### Page 2 — Merci / Confirmation
1. Tunnel → étape **« Page de confirmation »**.
2. Une seule colonne pleine largeur → **« Code HTML brut »** → colle `02-merci.html`.
3. Le bouton « Accéder à mon espace » pointe vers **`/connexion`** (ou directement l'espace si Systeme connecte la session).

### Page 3 — Espace membre (accueil cours)
1. **Cours** → crée la formation « Le nationalisme noir américain ».
2. En **haut de la page d'accueil du cours** : bloc **« Code HTML brut »** → `03-espace-accueil.html` (hero + « reprendre » + carte de bienvenue).
3. En dessous : la **liste native des modules** Systeme (générée par la structure du cours, cf. §5).

### Page 4 — Leçon (gabarit réutilisable)
1. Dans chaque module → **leçon** → ajoute l'**élément vidéo natif** (upload ou lien) en haut.
2. En dessous : bloc **« Code HTML brut »** → `04-lecon-modele.html` (fil d'Ariane + titre + description + chips ressources).
3. Duplique le gabarit pour chaque leçon en changeant le texte. Navigation préc./suivant = native.

### Page 5 — Connexion
1. Réglages du **cours / espace membre** → page de **connexion**.
2. Si Systeme autorise un bloc sur la page de login : colle `05-connexion.html` (volet gauche de marque). Sinon, applique `brand.css` (le formulaire passe quand même aux couleurs L'Autre Récit).
3. Récupère l'**URL de connexion** → c'est elle qui remplace le placeholder `SYSTEME_LOGIN` dans la vitrine (Header « Se connecter »).

---

## 5. Le VRAI programme (à reproduire dans le constructeur de cours Systeme)

Titres exacts repris des decks. 1 leçon Systeme = 1 module vidéo.

```
INTRODUCTION (cours introductif — PAS un « prologue »)
  M1 — La question que vous n'osiez pas poser
  M2 — Pourquoi cette histoire est mal connue en France
  M3 — Race et racisme
  M4 — La domination en pratique
  M5 — La boussole analytique
  M6 — Les cinq tensions

COURS 1 — Aux origines
  M1 — La promesse non tenue
  M2 — Jim Crow : chiffres, corps, terreur
  M3 — Le Nord n'est pas mieux
  M4 — Du Bois et la double conscience
  M5 — Garvey et la mobilisation de masse
  M6 — Le débat fondateur

COURS 2 — Nation of Islam
  M1 — Pourquoi le sacré ?
  M2 — La machine contre-société
  M3 — La doctrine comme arme politique
  M4 — Le prix de la visibilité
  M5 — Femmes de la NOI · le silence comme architecture
  M6 — Protéger sans gouverner ?

COURS 3 — Malcolm X
  M1 — Lire Malcolm comme trajectoire
  M2 — Apprendre l'État par le corps
  M3 — La NOI comme école et cage
  M4 — Désaffiliation stratégique
  M5 — Civil rights vs Human rights
  M6 — L'héritage stratégique

INTERLUDE — Malcolm × King : le dialogue inachevé

COURS 4 — King stratège
  M1 — King, hypothèse de pouvoir
  M2 — L'intégration conflictuelle
  M3 — Montgomery · Birmingham · Selma
  M4 — Chicago, la cible structurelle
  M5 — Vietnam et pauvreté · la bascule radicale
  M6 — Les limites internes · Ella Baker

COURS 5 — Black Power
  M1 — Après les droits, le pouvoir
  M2 — Black Power · grammaire politique
  M3 — Les Black Panthers · contre-gouverner
  M4 — Le dilemme du genre chez les Panthers
  M5 — COINTELPRO · neutralisation
  M6 — L'héritage · de Black Power à BLM

CONCLUSION GÉNÉRALE
  M1 — Trois théories de la contrainte
  M2 — Les quatre limites structurelles
  M3 — 2020 comme objet-test
  M4 — La règle d'usage · la boussole
  M5 — Retour aux cinq tensions
```
> ⚠️ Chaque cours a aussi un **M7 « anatomie d'un discours »** (Plessy · Message to the Grassroots · The Ballot or the Bullet · Letter from Birmingham Jail · Ten-Point Program) que **Rany ne diffuse pas** → ne PAS l'inclure dans l'espace membre.
> Ordre canonique « cadrage d'abord » respecté par l'ordre des leçons.

---

## 6. Décisions par défaut (modifiables — dis-moi)

- **Prix affiché** : **79,99 €**, paiement unique (repris du JSON-LD vitrine). À confirmer (édition fondateur ?).
- **Garantie** : 14 jours, remboursé sans condition (déjà dans tes CGV).
- **Order bump** : **écarté pour l'instant** (choix Rany). À reconsidérer plus tard si tu veux gonfler le panier.
- **Squeeze / leçon offerte** : non lancée. Recommandée en phase 2 pour construire la liste e-mail (capte un e-mail → 1 leçon gratuite → séquence de vente). Tes 5 e-mails de lancement existent déjà (`tunnel-vente/emails/`).
- **noindex** sur les pages Systeme : oui (checkout/membre n'ont rien à référencer ; le SEO vit sur Netlify).

---

## 7. Fichiers de ce dossier

| Fichier | Quoi |
|---------|------|
| `_APERCU.html` | Aperçu visuel des 5 pages (double-clic). |
| `brand.css` | CSS à coller dans Systeme (restyle boutons/champs natifs). |
| `GUIDE.md` | Ce document. |
| `01-bon-de-commande.html` … `05-connexion.html` | ✅ Blocs HTML prêts à coller, un par page (ancrés sur la vraie formation). |

---

## 8. Ordre d'action conseillé

1. ✅ Domaine `cours.lautrerecit.com` → Systeme (CNAME Cloudflare gris) — *en cours de ton côté*.
2. ✅ Design validé · 5 blocs générés (`01-bon-de-commande` … `05-connexion`).
3. Coller chaque bloc dans Systeme (cf. §4) + `brand.css` dans le code perso.
4. Monter le **tunnel** (pages 1-2) + le **cours** (pages 3-4) + **connexion** (5) sur Systeme.
5. Brancher : CTA page de vente Netlify → `/commander` · « Se connecter » vitrine → URL login Systeme.
6. Test d'achat réel (mode test Stripe) de bout en bout.
