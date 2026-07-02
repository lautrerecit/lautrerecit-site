# L'Autre Récit — Révisions & règles de design

Journal des décisions et règles à respecter pour le site (et le tunnel, considérés comme **un seul site**).

---

# 🟣 SESSION 2026-07-02 — PAGE LIENS (link-in-bio, `/liens`)

Page « tous les liens » façon Linktree, auto-hébergée. Fichier vivant = **page Astro `src/pages/liens.astro`** (autonome, sans layout site ; `<style is:global>` + `<script is:inline>`). Sert à `lautrerecit.com/liens` (chemin, pas de sous-domaine ni domaine, zéro DNS). La route Astro marche en dev (plus de 404). L'ancien `public/liens/index.html` statique a été supprimé (conflit de route).

**Lien « dernier article » = automatique** : `href={articles[0].url}` + sous-titre `{articles[0].t}`, source unique `src/data/articles.js` (plus récent en tête, même donnée que l'accueil). Nouvel article = 1 ligne en tête de `articles.js` → push → `/liens` suit. Ne jamais éditer ce lien à la main. Substack = const `SUB` (`https://autrerecit.substack.com`), utilisée sur la carte 03 + l'icône footer.

- **Direction retenue = C2** (« deck de verre enrichi ») : top-bar chrome + hero foil + 5 cartes verre à **tilt 3D par carte** + **spot lumineux curseur** + numéros foil + chevrons ronds + fond mesh animé + grain + footer réseaux. Profil NNA noir+or, doré canonique `--or2`, Playfair titres.
- **5 liens seulement** (ordre figé) : ① CTA formation *nationalisme noir* → **tunnel de vente `/formation-nationalisme-noir/`** (pas la page pédago) · ② *Notre dernier article* (auto = `articles[0].url`) · ③ *Substack* (`https://autrerecit.substack.com`) · ④ *Explorer le site* (`/`) · ⑤ *Nous écrire* (`mailto:contact@lautrerecit.com`).
- **Vignettes photo** : cartes 01 (cover formation) et 02 (cover article, auto `articles[0].cover`) montrent la photo à la place du numéro (`.thumb` + `.g-inner:has(.thumb) .num{display:none}`) ; 03-05 gardent le numéro. **OG de `/liens`** : bloc OG+Twitter ajouté (`og:image` = cover formation, absolu via `Astro.site`). Build validé (`npm run build`, exit 0, 15 pages).
- ⚠ **BUG à part** : OG globale du site cassée — `Base.astro` → `og:image=/og-default.jpg` inexistant. Hors scope /liens, à traiter séparément.
- Retirés sur demande : **logo monogramme « Ré »** (jugé moche), **filigrane « Récit » de fond**, **ligne mentions légales** du footer.
- Alternatives conservées comme référence : `a.html` (billet), `b.html` (stèle/épine), `c.html` (deck v1), `d.html` (sommaire letterpress), `e.html` (halo minimal).
- **Banque d'effets** : `public/liens/effets.html` = 18 effets premium noir+or démo (foil, glare, spot, tilt, magnétique, letterpress, bordure conic, brillance, duotone, count-up, grain, mesh, ripple, parallaxe, reveal, marquee, typewriter, underline). Déjà greffés sur C2 : 01/03/04/11/12. Piocher ici pour enrichir.
- **TODO restant** : confirmer email (`contact@lautrerecit.com` vs `lautrerecit@gmail.com`), puis `git push` pour mettre en ligne. Substack + dernier-article réglés.

---

# 🟣 SESSION 2026-07-01 — TUNNEL : CONTRASTE / ALTERNANCE DES SECTIONS

Fichier : `public/formation-nationalisme-noir/index.html` (copie hub, la seule à éditer).

## Règle posée : chaque section alterne sombre/clair, et les cartes contrastent avec leur fond
Avant, plusieurs sections étaient un **fond clair rempli de grosses cartes sombres** (ou l'inverse) → l'œil lisait la section par la couleur DOMINANTE (les cartes), d'où l'impression de « pas de contraste / deux sections pareilles ». Corrigé en inversant fond ET cartes pour que chaque section soit franchement sombre OU claire, cartes en couleur opposée, et que ça alterne.

Séquence finale (haut → bas) : hero **D** · trust **C** · Pourquoi **D** (cartes crème) · Bénéfices **C** (cartes noires) · Programme **D** (cartes crème) · Auteur **C** (lettre parchemin) · Concepts **D** (cartes crème) · Déploiement **D** · Prix **C** · FAQ **D** · Preuve **C** · CTA **D**.
- Seul doublon sombre assumé : **Concepts → Déploiement** (2 sombres d'affilée) — volontaire pour que la section **Prix reste crème** et que le **billet noir ressorte** juste après (même arbitrage que Rany avait tranché avec l'ancienne section aperçu, désormais retirée).
- Les cartes crème sur fond sombre copient le DS validé (`.bn-card` d'origine) ; les cartes sombres copient `.pain-card` d'origine. Doré : `--or2` accents sur sombre, `--or`/`--or2` sur crème (lisibilité).
- Lettre du fondateur : section passée en **clair** → fond crème un peu plus profond (`#ECE4D6`) + ombre renforcée + filet doré pour que le parchemin ressorte.

## Retraits
- **Section « Aperçu de la formation »** (galerie de slides `#apercu`) retirée (markup ; le JS `sg…` est self-guarded donc inerte). CSS `.sg-*`/`.taste-*`/`.freemium` laissé (mort, inoffensif).
- **Cours d'ouverture gratuit** : supprimé PARTOUT (il n'existe pas) — bandeau « Goûtez avant d'acheter », puce « Cours introductif gratuit », FAQ « essayer avant d'acheter », reassure du CTA final, et « Cours introductif + » dans la timeline de déploiement. Libellés déjà en français (seul « Workbook » traînait, il était dans la section aperçu retirée).

Vérifié au DOM (`preview_eval` :4399/formation-nationalisme-noir/index.html) : fonds, couleurs de texte, pas d'overflow horizontal, `#apercu` absent. Rany push le hub (GitHub Desktop → Cloudflare).

---

# 🟣 SESSION 2026-06-20 (suite) — DOMAINES + TUNNEL & COURS SYSTEME.IO

## Domaines (Cloudflare DNS, registrar Shopify)
- **`www.lautrerecit.com` = domaine PRIMAIRE** sur Netlify (apex `lautrerecit.com` → 301 → www). DNS : A `@`→`75.2.60.5` (gris) + CNAME `www`→`wwwlautrerecitcom.netlify.app` (gris). SSL vert OK. ⚠️ le site Netlify a été **renommé** → alias = `wwwlautrerecitcom.netlify.app` (l'ancien `famous-travesseiro-9aa4ff` est mort/404).
- **`cours.lautrerecit.com` → Systeme.io** (espace cours + tunnel). 2 CNAME Cloudflare **GRIS** (Systeme = AWS CloudFront + cert ACM) : `cours`→`dy88obqgtfkgn.cloudfront.net` + validation SSL `_5957…817.cours`→`_91113…acm-validations.aws`. Live, cadenas vert. (Détails : mémoire `cours-systeme-dns`.)
- **`astro.config.mjs` `site`** corrigé `lautrerecit.fr` → **`https://www.lautrerecit.com`** (canonical + sitemap + OG dérivés de `Astro.site`). ⚠️ à **redéployer** (`npm run build` + drag `dist`) pour que le live porte le bon canonical.
- ⚠️ **Legacy prerendering** Netlify = à décocher (déprécié, inutile pour un site Astro statique).

## Tunnel Systeme.io (funnel 7328481, sur cours.lautrerecit.com)
- **Bon de commande** (page **41951568**) = **VERSION PREMIUM NOIRE plein cadre** (Rany a rejeté la 1re version blanche « étriquée »). ADN vitrine : fond noir (`#0E0C0A` section + bloc), grand titre Playfair « noir *américain* » or, point doré séparateur, 2 colonnes (inclusions | carte prix dorée), ligne de confiance, **garantie 7 jours** (pas 14). Source : `systeme-io/01-bon-de-commande.html` (classe `.lr-ord`).
- **Page de remerciement** (page **41952128**) = bloc `02-merci.html` (dark premium), vérifiée live sur `cours.lautrerecit.com/remerciement`.
- **Reste page commande** : élément « Titre » vide parasite à supprimer (éditeur a gelé 2× dessus) ; « systeme.io » centré + badge = **watermark du plan** ; **PAIEMENT** = Stripe (Rany) + formulaire natif **lié au template** (notre page partie d'un template vide) + produit **79,99 €**.

## Blocs HTML premium → dossier `site-lautrerecit/systeme-io/`
- `01`…`05` (commande, merci, espace, leçon, connexion) **tous en premium NOIR**, + `brand.css` + `GUIDE.md` + `_APERCU.html`. **Vrais titres de modules** extraits des `<title>` des decks (ex. C3 M4 = « Désaffiliation stratégique »). « Introduction » (pas « Prologue »). **Pas de bump** (choix Rany).
- Phrase connexion validée : « **Reprendre le contrôle du récit, c'est arracher la plume à ceux qui l'ont confisquée.** »

## Formation (cours) Systeme — `course 637760`
- Créée (Ressources → Formations). Nom « Le nationalisme noir américain », URL `/formation`. **8 modules montés** : Introduction · Cours 1 Aux origines · Cours 2 Nation of Islam · Cours 3 Malcolm X · Interlude Malcolm × King · Cours 4 King stratège · Cours 5 Black Power · Conclusion générale.
- **Reste** : les **chapitres/leçons** = 1 vidéo chacun. ⚠️ **L'outil d'upload est plafonné à 10 Mo, les vidéos font 170-440 Mo → Rany uploade lui-même** (glisser-déposer, Systeme gère les gros fichiers). Vidéos prêtes : `Vidéos test/` (Intro M1-6, C1 M1-6, C2 M1-6, C3 M1). Puis habiller accueil cours (bloc 03) + connexion (bloc 05) + `brand.css` + règle d'accès produit→cours + CTA « Accéder à mon espace » → URL login.

## Méthodes Systeme.io (apprises — réutiliser)
- **Dialogues capricieux** : les clics synthétiques ferment la modale + React garde l'ancienne valeur. → remplir les `<input>` par le **setter natif + dispatch input/change** puis cliquer Sauvegarder. La modale « Créer un module » **se rouvre avec la valeur précédente** après save → enchaîner `setVal`+clic Save (783,429). **Pas de boucle async dans la page** (le tool rend la main avant la fin → runaway/doublons).
- **Remplacer le code d'un élément « Code HTML »** : éditeur = **ACE**. Injecter direct : `window.ace.edit(document.querySelector('.ace_editor')).setValue(CODE,-1)` puis ENREGISTRER. 100 % fiable.
- Le **builder de page Systeme gèle parfois** (renderer frozen) → recharger la page récupère l'état sauvé.
- **NOIR = premium** : Rany adore le fond noir pour ces pages (cohérent vitrine sombre).

---

# 🚦 HANDOFF — SESSION 2026-06-20 (À LIRE EN PREMIER)

## Où on en est
- **Le site est EN LIGNE** : `https://lautrerecit.com` sert déjà la vitrine (dernière version vérifiée live).
- Hébergé sur **Netlify**, projet **`lautrerecit`** (adresse interne **`wwwlautrerecitcom.netlify.app`**).
- Déployé via **Netlify Drop = glisser-déposer du dossier `dist`**. ⚠️ **Le build git Netlify ÉCHOUE** (repo connecté sans `package.json` à la racine → erreur ENOENT). **NE PAS compter sur le build auto.** Méthode = `cd site-lautrerecit && npm run build` puis glisser le dossier `dist` dans Netlify → onglet Deploys → zone drag-drop.
- `dist/netlify.toml` doit contenir **les headers seulement** (pas de section `[build]`).

## Domaine — DNS chez CLOUDFLARE (pas Shopify, pas Gandi)
- Le `.com` est registrar Shopify MAIS le **DNS est délégué à Cloudflare** (NS `tosana/jewel.ns.cloudflare.com`, zone `lautrerecit.com`).
- Avant : `lautrerecit.com` + `www` pointaient vers **Systeme.io** (via Cloudflare + CloudFront). Rany a **retiré** le domaine de Systeme.io.

### ✅ DNS FINAL À METTRE (Cloudflare → DNS → Records)
| Type | Name | Content | Proxy |
|---|---|---|---|
| **A** | `lautrerecit.com` (@) | `75.2.60.5` | **DNS only (nuage GRIS)** |
| **CNAME** | `www` | `wwwlautrerecitcom.netlify.app` | **DNS only (nuage GRIS)** |
| TXT | `_dmarc` | `v=DMARC1; p=none` | (laisser tel quel) |
| CNAME | `cours` *(plus tard)* | *(valeur donnée par Systeme.io)* | DNS only (gris) |

- **Supprimer la ligne AAAA `2620:127:f00f:4::`** (le record A suffit, évite les soucis IPv6) — sauf si Netlify l'a explicitement demandée.
- **GRIS (DNS only) obligatoire** : c'est ce qui permet à **Netlify de fabriquer le certificat SSL** lui-même. En ORANGE (proxy Cloudflare), Netlify ne peut PAS vérifier → le cadenas ne tient que via Cloudflare et le `www` casse. **C'était la cause des galères SSL.**
- **Le `www` doit pointer vers l'adresse `…netlify.app`** (pas vers `lautrerecit.com`). C'est le réglage standard Netlify. **Oublier la "redirect rule" Cloudflare** (pas nécessaire — Netlify redirige www→apex tout seul). Si une redirect rule a été créée, la supprimer.

### Côté Netlify
- Domain management → ajouter **`lautrerecit.com`** ET **`www.lautrerecit.com`**, `lautrerecit.com` en **primary**.
- DNS en gris → Netlify provisionne le **SSL (Let's Encrypt)** auto en quelques min sur les deux. (Bref avertissement SSL pendant la fabrication = normal, pré-lancement = ok.)

## Prochaines étapes (dans l'ordre)
1. Poser le DNS ci-dessus (gris) + ajouter les 2 domaines dans Netlify → attendre le **cadenas vert** sur `lautrerecit.com` + `www`.
2. **`cours.lautrerecit.com` → Systeme.io** : dans Systeme, ajouter le domaine `cours.lautrerecit.com` → il donne une valeur → créer un CNAME `cours` (gris) dans Cloudflare.
3. Brancher les vrais liens **checkout Systeme.io** + **« Se connecter »** (encore des placeholders dans le tunnel/site).
4. **Image OG** `og-default.jpg` (1200×630) manquante → partages sociaux cassés.
5. **Relire les harakat** des versets arabes (`architecture.astro`, `verset-du-jour.astro`) avant toute comm.

## Ce qui a été construit cette session (pages dans `src/pages/`)
- **`quiz.astro`** — hub multi-quiz (nationalisme noir 8 Q + sciences sociales 12 Q), moteur, **classement localStorage** (→ Supabase plus tard pour le global), score en foil. Data : `src/data/quizzes.js`.
- **`verset-du-jour.astro`** — verset du jour (auto par date, sobre) + tirage de citation (carte filante). Data : `src/data/versets.js` (~24 versets thématisés) + `src/data/citations.js` (18 penseurs).
- **`contact.astro`** — formulaire **Netlify Forms** (prénom/email/message), carte noir premium. *(Netlify Forms = capté côté Netlify + notif e-mail réglable ; marche seulement EN LIGNE.)*
- **`architecture.astro`** — LA pièce centrale : **la boussole / identité islamique**. Réaxée sur la pensée islamique (réforme de soi d'abord → justice ensuite, le verset comme axe, ouverte à tous). **Alternance stricte D-C-D-C-D-C-D-C-D-C** (10 sections), cards adaptées (claires sur noir / sombres sur crème). noVerset.
- **`vision.astro`** — lettre du fondateur + 4 repères (cards noires sur crème).
- **`grille-de-lecture.astro`** — 6 figures sur épine dorée. **Reframée : « outils/concepts », pas un panthéon fermé** (Malcolm X = figure, pas « penseur » ; « … et d'autres »).
- **`a-propos.astro`** — refait en **HUB** : hero sombre « Qui parle, et d'où ? » + 3 sections premium alternées (Vision / Grille / Architecture). Lede court. Carte boussole = **verset en français** (pas arabe).
- **PWA** : `public/manifest.webmanifest` + `public/sw.js` + branchement `Base.astro` (SW limité à la prod, pas localhost).
- **Showcase** (exploration, non intégré) : `public/_VISION-GRILLE-PREMIUM.html` (3 directions Grille : Panthéon/Fiches/Stèles + 3 Vision : Édito/Parcours/Plaques).
- Header : + **Contact** (nav = Accueil/À propos/Formations/Articles/Contact). Footer : + Vision/Grille/Architecture/Contact.
- **Audit anti-slop** passé sur : accueil (hero+vision), contact, formations, quiz (tiers+explications).

## RÈGLES validées cette session (permanentes)
- **Alternance stricte noir/crème bloc par bloc** — jamais 2 sections même couleur d'affilée. (Si des blocs se suivent en crème, soit fusionner, soit en passer un en noir avec cards inversées.)
- **Cards = contraste avec leur fond** : fond CRÈME → cards **NOIRES** (Encre & or) · fond SOMBRE → cards **CLAIRES** (blanc→crème). Jamais une card qui se fond dans son fond.
- **Architecture = boussole/identité ISLAMIQUE**, pas un exposé de science po ni du name-dropping d'auteurs. Réforme de soi d'abord. Ouverte à tous (preuve = communauté diverse).
- **Grille = outils/concepts**, sélection non exhaustive (jamais « LES penseurs »).
- ⚠️ **BUG RÉCURRENT — CSS périmé** : en dev, un serveur Astro resté ouvert longtemps garde du CSS périmé (HMR), et le navigateur cache aussi. → Pour valider : **`Cmd+Shift+R`** + au besoin **redémarrer le dev server**. **Sur le SITE EN LIGNE il n'y a pas ce cache** → c'est la référence fiable. (Beaucoup de « bugs » signalés cette session étaient juste ça.)
- Déploiement = `npm run build` dans `site-lautrerecit/` → glisser `dist` sur Netlify (jamais le build git).

---

## 🎨 RÈGLE COULEUR — ADN L'Autre Récit (PERMANENT)

**Quand Rany dit « couleur » / « il manque de la couleur », ce ne sont JAMAIS des couleurs au hasard.**

La couleur = l'**ADN de marque L'Autre Récit** :
- **Doré** dominant — `--or2 #C4A24A` + le **dégradé canonique premium** `linear-gradient(180deg,#EBCB70,#C9A24C,#A9863A)`.
- **Blanc / crème** — `#FFFFFF`, `--cr #F2EDE4`.
- Sur base **sombre** (`--ink #0E0C0A`) ou **crème**.

➡️ « Il manque de la couleur » = **plus de doré premium, plus de contraste blanc/crème, plus de matière (dégradés or, halos dorés)** — **PAS** une palette arc-en-ciel ni des tons joaillerie (terracotta, teal, bordeaux, indigo…).

❌ **À NE PAS FAIRE** : accents multicolores aléatoires par élément.
✅ **À FAIRE** : doré (plat + dégradé), blanc/crème, nuances de ces deux-là, sur sombre.

### Conséquence immédiate — RÉSOLU (2026-06-18)
Le showcase `_grille-5-designs.html` (accents joaillerie multicolores) a été **abandonné**. La grille de lecture vit désormais directement sur la vitrine (`a-propos.astro` `#grille`) en **doré + blanc sur sombre**, colonne verticale alternée (zigzag) avec épine dorée qui se remplit au scroll. Voir « ✅ Fait ».

---

## 📅 Session 2026-06-19 — repositionnement média, journal, newsletter, SEO, hero tunnel

### Positionnement → MÉDIA (plus « site de formation »)
- Hero lede + méta-titre/description (`Base.astro`, `index.astro`) : **« Média d'analyse critique »**. Les formations cadrées comme **un format du média** (« analyses, articles et formations »).

### Hero accueil
- Accroche littéraire : « Reprendre la *plume* à ceux qui *écrivent* notre *histoire* à *notre place*. » — **mots-clés en or italique** (reste droit), **2 lignes** (max-width 42ch).
- Lede catchy (inspiré du Framer, **sans pattern IA**) : « Le monde ne se donne jamais tel qu'il est : … à défaut d'être vraiment compris. L'Autre Récit déplace la lecture pour atteindre ce qui structure nos perceptions. »
- CTA hero → **« Entrer dans le récit ↓ »** (scroll). Le menu garde « Découvrir la formation » → tunnel. **Choix assumé : 2 chemins** (nav « Formations » = hub multi-formations ; CTA doré = spotlight sur la dernière).
- « vision » → italique (cohérence avec « formation »/« articles »).

### Journal / Articles (Substack)
- Accueil allégé : **un seul dernier article** + bouton « Voir tous les articles » → **nouvelle page `/articles`** (`articles.astro`).
- Design **Panneau flottant** (photo + panneau encre filet or, alternés), **panneaux/photos taille fixe (uniformisés)**, couvertures **noir & blanc**.
- **Vrais articles Substack** (API archive) : titres + permaliens réels ; couvertures téléchargées + optimisées (`public/articles/`).
- Catégories : **Société · Conflit · Géopolitique · Colonisation & décolonisation** ; cadrage « science politique **et pensée islamique** ».
- Données centralisées : `src/data/articles.js`. Nav « Articles » (header + footer) → page interne (était → Substack).

### Communauté (témoignages)
- 14 vrais avis communauté (repris du tunnel) ; **marquee défilant** (pause au survol).
- Section **crème + cards noires « Encre & or »** (design #2 de `_CARDS-5-PREMIUM.html`), mots-clés en or.
- ⚠️ Fix scoping Astro : `set:html` → **`.tm-q :global(strong)`** (sinon les `<strong>` restaient noirs).

### Instagram
- Post « La ummā, fast-food » ajouté (`fastfood.png`) ; post hijab (doublon coupole Al-Aqsa) retiré ; Al-Aqsa remonté. Section en **noir** (cartes sombres sur sombre).

### Newsletter
- Bloc **crème** sur l'accueil → s'abonne à **Substack** (`/subscribe`, email prérempli → abonné reçoit les articles, Rany récolte le mail). Un seul (doublon footer retiré).

### Verset « Notre boussole » (signature spirituelle)
- Composant global `Verset.astro`, rendu sur **toutes les pages** avant le footer.
- **Bande horizontale compacte, centrée, encadrée de filets dorés.** Arabe (Amiri) en **blanc**, traduction **droite** + mots-clés or italique. « Sourate Ar-Ra'd · 13 · 11 ».

### Rythme couleur + ORDRE des sections (accueil — canonique)
- **hero(noir) → vision(noir) → formation(crème) → journal(noir) → communauté(crème) → Instagram(noir) → newsletter(crème) → boussole(noir) → footer(noir).** Alternance crème/noir stricte après l'intro.

### À-propos
- 4 cartes « Ce qu'il faut savoir » → **noir premium + bordure dorée**.
- Chips Vision/Grille/Architecture → boutons canoniques **`.btn-oc`**.
- Lettre du fondateur : Source Serif → **League Spartan** (pas de serif en corps).

### SEO / technique
- JSON-LD **Organization** (`Base.astro`) + **Course/Offer 79,99 €** (page formation).
- **`@astrojs/sitemap`** (génère `sitemap-index.xml` au build) + **`robots.txt`**.
- `alt` réels sur les images-liens. Scroll-reveal accueil + page formation.

### Doré canonique
- Tous les textes en emphase : `--or` (terne, réservé ombres) → **`--or2`** (a-propos, formation, légal).

### Tunnel de vente
- **Raccourci** (audit) : `#pourquoi` supprimé, témoignages 14→8, concepts condensés, CTA 5→3 (~1702 → 1625 lignes).
- **Nouveau hero CINÉMATIQUE** : photo **panthers6** (Panthers face à la police, « Free Huey ») plein cadre, **décalée à droite** (zoom + origine gauche), bloc éditorial + CTA bas-gauche sur dégradé sombre. **Titre sans foil** (« noir *américain* », or simple).
- **Synchronisé dans les 3 copies** : `pagevente.html` (source) + `tunnel-vente/deploy/index.html` + `site-lautrerecit/public/formation-nationalisme-noir/index.html` (servie par le site). Backup ancien hero collage : `tunnel-vente/_pagevente_BACKUP-hero-collage.html`.

### Showcases créés (exploration, `public/`)
- `_EMAILS-5-DESIGNS` (5 e-mails) · `_ARTICLES-5-DESIGNS` (5 directions blog) · `_ARTICLES-FEUILLETON-6` (6 variantes) · `_CARDS-5-PREMIUM` (5 cards témoignage) · `_TUNNEL-HERO-10` (10 héros). Photos démo : `public/demo/`.

### ⚠️ BLOQUANTS restants (besoin de Rany)
1. **Checkout tunnel** : 2 CTA d'achat en `href="#"` → URLs Systeme.io. **Sans ça : 0 vente.**
2. **« Se connecter »** → `systeme.io/login` générique → URL espace membre.
3. **Image OG** `og-default.jpg` (1200×630) manquante → partages sociaux cassés.
- À trancher plus tard : preuve sociale formation (avis acheteurs au lancement) ; `post-8.png` orphelin.

---

## ✅ Fait
- **Patterns IA purgés** (manifeste + à-propos) : antithèses « X, pas Y » et négations-reformulations → affirmations directes. (Partir des sources · Donner des grilles de lecture · Rendre l'exigeant accessible · Assumer d'où l'on parle · Parler depuis l'intérieur · Une indépendance assumée.)
- **Doré canonique unifié** (un seul dégradé) sur tout le site + tunnel (titres `em`).
- **Hero, vision, Instagram, À propos** : doré premium appliqué.
- **Export** du site dans `tunnel-vente/site-lautrerecit/` (chemins relatifs, ouvrable en file://).
- **Menu = design 08 « Encadré filet or » sur la VITRINE** (2026-06-18, corrigé). Barre flottante (`position:fixed`) verre sombre (`rgba(14,12,10,.82)` + blur) + **DOUBLE FILET doré dégradé HAUT + BAS** (`border-image` linéaire qui fond aux extrémités — fidèle au showcase `_menu-10-designs.html` n°08, **pas** un cadre plein tout autour). Wordmark Playfair italic blanc, lien actif = or2 gras. `Header.astro` → toutes les pages vitrine. Nav = Accueil/À propos/Formations/Articles↗/Manifeste.
- **Tunnel = PAS de menu de nav** (décidé 2026-06-18, règle conversion : chaque lien = une fuite avant l'achat). **Page de vente (`deploy/index.html`) = AUCUN header** (hero plein cadre, 0 sortie). **Mentions/CGV = header minimal logo seul** (`.lr-header` avec wordmark → `/` vitrine + petit lien « ← Retour au site », pas de nav). Le menu 08 complet reste donc EXCLUSIVEMENT sur la vitrine.
- **Audit liens « L'Autre Récit » → vitrine** : le wordmark des mentions/CGV pointait vers `index.html` (page de vente = « ancien accueil ») → corrigé en `/` (nouvelle vitrine). Ancien `.lp-header` remplacé par le menu 08. Ancienne landing `tunnel-vente/index.html` (« 7 anti-patterns », lien mort `page-de-vente.html`) = legacy, **non déployée** → à supprimer un jour.
- **Boutons homogénéisés (système canonique A/B/D/E)** sur site + tunnel, radius 4px, doré premium (`--gold`). Règle d'usage : **sur SOMBRE → A (or plein) · B (or contour) · E (ink filet or)** ; **sur CRÈME → A (or plein) + D (fantôme)** ; **CTA → primaire large + secondaire large**. Classes vitrine : `.btn-or/.btn-oc/.btn-gh/.btn-ik/.btn-cr/.btn-lg`. Tunnel : `.btn-primary`/`.btn-on-dark` = A, `.btn-outline-dark` = B (réalignés sur le doré premium + radius 4px).
- **Grille de lecture refaite directement sur la vitrine** (`a-propos.astro`, section `#grille`) : **colonne verticale premium, doré, symétrie alternée gauche/droite (zigzag)** autour d'une **épine dorée centrale qui se remplit au scroll** + **révélation progressive carte par carte** (IntersectionObserver, cartes qui glissent depuis leur côté). Remplace l'ancienne timeline (rail à gauche). Mobile : épine à gauche, colonne unique. Les 5 designs de `_grille-5-designs.html` (accents joaillerie multicolores) = **abandonnés** (problèmes de couleur, hors ADN).

- **Manifeste SUPPRIMÉ partout** (2026-06-18, demande Rany — ajout IA non validé) : page `manifeste.astro` supprimée, retiré du menu (Header), du footer, du hero (bouton « Lire le manifeste »), et de la section teaser de l'accueil (supprimée). `/manifeste/` → 404. Plus aucune occurrence dans `src`.
- **Hero accueil épuré** : eyebrow « Histoire critique · Plateforme de réflexion » retiré ; un seul CTA « Voir les formations » (A or plein).
- **Mentions légales + CGV complétées** (portées depuis `tunnel-vente/deploy/`) directement dans `mentions-legales.astro` + `cgv.astro` (11 articles CGV, RGPD, médiation CM2C, droit de rétractation contenu numérique). Plus de placeholder « à finaliser ». Style premium crème/or, max-width 820px.
- **Présentation formations = Design C « vedette »** (choisi 2026-06-18). Composant réutilisable `components/FormationFeature.astro` (photo plein cadre + voile noir/doré, badge « Disponible · 5 cours », titre Playfair, CTA or → page de vente). Appliqué sur l'accueil (section « La formation ») ET la page `/formations/`. **Seule la formation nationalisme noir est affichée** (Rany pas encore sûr pour Algérie/Afrique → secondaires retirés). Photo : `public/formations/nationalisme-noir.jpg` (= panthers6). Showcase d'origine : `tunnel-vente/_formations-designs.html` (A/B/C).

- **Boutons = PACK 1 « Rectangle · Or franc »** (choisi 2026-06-18), homogénéisé partout (vitrine + page de vente) : A primaire `.btn-or`/`.btn-on-dark` (or plein, flèche qui glisse + lift) · B secondaire `.btn-oc`/`.btn-outline-dark` (or contour, **remplissage doré qui balaie** au survol via `::before` scaleX). Radius **5px**, `overflow:hidden;isolation:isolate` sur `.btn`. 404 secondaire passé en B.
- **Menu : ajout CTA + connexion** (`Header.astro`) : bouton or **« Découvrir la formation »** → `/formation-nationalisme-noir/` (tunnel) + lien **« Se connecter »** → Systeme.io (`SYSTEME_LOGIN` = placeholder `https://systeme.io/login`, **à remplacer** par l'URL de l'espace membre). Mobile (<860px) : login masqué, nav scrollable, CTA gardé.
- **Page de vente : foil animé → doré statique** : le titre hero « noir américain » utilisait `.foil` animé (`foilTop`) → remplacé par le **dégradé doré canonique statique** (`#EBCB70→#C9A24C→#A9863A`, `animation:none`) = l'effet doré utilisé partout sur la vitrine. (Le foil animé reste sur la carte pricing + le prix — non demandé.) Synchro deploy/pagevente/public faite.

- **Section Instagram enrichie** (2026-06-18) : +3 posts (la seine / musulmans / iraniennes → `post-10/11/12.png`) en tête, rythme photo/noir/photo. Titre « Instagram » en **Playfair italique doré** (`<em class="gold-grad">`). Captions **réécrites** (analytiques, voix L'Autre Récit). Survol carte = overlay « Voir le post ». CTA bas remplacé par un **chip doré** (glyphe Instagram + `@lautrerecit` · SUIVRE). Chaque carte → **permalien du post exact** (12 liens fournis par Rany, branchés dans `posts[].url`, ordre d'affichage). Chip « Suivre » → profil. (Instagram bloque la récupération auto des liens → fournis manuellement.)

- **Audit liens (2026-06-18)** : « Découvrir la formation » (menu) + la vedette formation → **tunnel** `/formation-nationalisme-noir/index.html` (`index.html` explicite = résout en dev Astro, prod Netlify ET snapshot ; le `/dossier/` nu faisait 404 en dev). « Voir les formations » → `/formations/` (catalogue). Page Astro orpheline `pages/formations/nationalisme-noir/` **supprimée** (redondante avec le tunnel, plus aucun lien dessus). Reste des liens vérifiés OK (footer, header, 404, a-propos, cite-cards → `#grille`).
- **Tunnel : accès accueil discret** (avis validé : sur un tunnel de vente, les sorties restent discrètes). Marque « L'Autre Récit » visible ; lien **« Accueil »/« Accueil du site ↗ » dans le FOOTER** → vitrine `/`. Page de vente : ajouté dans la colonne footer « L'Autre Récit ». Mentions/CGV : ajouté dans la ligne ©. (Pas de header de nav ajouté sur la page de vente — on garde le focus.)

- **Titre page de vente = Design 2** (2026-06-18) : voile (`.lph-veil`) assombri → l'or statique de « noir américain » ressort, faces encore visibles en haut. (Showcase `_hero-titre-effets.html`.)
- **Curseur « anneau qui s'ouvre » (effet 03) PARTOUT** : point doré net + anneau souple qui s'agrandit/se teinte (or3 + voile doré) au survol des éléments interactifs, point masqué au survol. Vitrine : composant `components/Cursor.astro` (script `is:inline`, `html.lrcur-on`, `cursor:none`, garde `pointer:fine` + reduced-motion) inclus dans `Base.astro`. Tunnel : page de vente (CSS `.cur-*` réalignée) + mentions/CGV (script injecté). Désactivé sur tactile. (Showcase `_curseurs-10.html`.)
- **Cards citations (carrousel hero) — survol = effet 10 « glow + scale léger »** (choisi 2026-06-18) : léger zoom (scale 1.035) + bord doré + halo doré, **sans texte** (le curseur signale le clic). Bandeau « La grille de lecture → » + classe `.cite-hint` **supprimés**. Clic toujours → `/a-propos/#grille`. (Showcase : `tunnel-vente/_cards-citations-10.html`.)

- **Section « Naviguez dans les slides » — vidéos RE-CAPTURÉES en HD** (2026-06-19) : les anciennes vidéos étaient en **720p à 336 kbps** (floues). Re-capturées en **1080p** depuis les decks HTML d'origine (Chrome système piloté par Playwright), encodées mp4 (H.264 crf21) + webm (VP9 crf31). Viewer repassé en `<video>` (poster WebP 2000×1125 net en 1er affichage → vidéo HD qui joue, `preload=none`, chargée à la demande). Auto-défilement 13s. ~10 Mo au total (mp4+webm, chargés un par un). Slide interactive `c5_visages` (iframe) intacte.
  - **Pas de couverture de module + ralenti** (2026-06-19) : la vidéo commençait par un glimpse de la slide 0 (couverture « Cours/Module » couleur du module) avant la vraie slide → supprimé (transition `.slide` coupée + `goSlide` immédiat + amorce de 1,2s coupée au montage `-ss 1.2`). Ralenti ~30 % propre, sans perte de netteté (`ffmpeg -vf setpts=1.3*PTS`, pas d'interpolation). Vérifié : 1re frame = la vraie slide.
  - **Slides « évolutives » (révélation au clic) : reveals DÉROULÉS dans la vidéo** (2026-06-19) — `capture.js` compte les étapes (`handleNext()` tant qu'on reste sur la slide) puis les déroule une par une (filmées) avant de tenir l'état final. Reveals : c1_dixieme=4 · c1_garvey=4 · c1_misescene=4 · c3_dictionnaire=2 · interlude=1 · (c3_kaaba/c3_carte/c4_king=0, complètes à l'arrivée). Vidéos en **`loop=false`** → jouent le déroulé une fois puis tiennent l'image finale révélée (pas de re-boucle « slide qui se vide »). Auto-défilement 14s. Posters WebP déjà en état révélé (cohérent).
  - Slides ↔ decks (vérifié 1 par 1) : c1_dixieme=`C1_M4_DoubleConscience`[5] · c1_garvey=`C1_M5_Garvey`[5] · c1_misescene=`C1_M5_Garvey`[7] · c3_dictionnaire=`C3_M2_Harlem`[8] · c3_kaaba=`C3_M4_Desaffiliation`[6] · c3_carte=`C3_M5_HumanRights`[4] · c4_king=`C4_M3_Selma`[7] · interlude=`INTERLUDE_MalcolmKing`[9]. (⚠️ les fichiers `*_ALT.html` = explorations de design, PAS les decks finaux.)
  - **Outil de capture réutilisable** : `utilitaire/capture/` (`capture.js <deck> <index|motclé> <out.webm> [ms]` + `dump.js <deck>` pour lister les titres de slides). Playwright + Chrome système, pas de Chromium téléchargé. Sert aussi pour la formation Algérie.

- **Séquence email de lancement — redesign premium** (2026-06-19) : 5 emails remis « mûrs » (bandeau noir + wordmark or + filet doré, corps crème éditorial Georgia/Playfair-fallback, n° & citations dorés, 1 CTA or par email ; l'email d'ouverture inversé noir/or = rupture). Copie d'origine conservée (voix L'Autre Récit, anti-slop). Showcase `tunnel-vente/_emails-premium.html` + 5 fichiers paste-ready `tunnel-vente/emails/premium_0X_*.html` (tables + styles inline + préheader, email-safe). **Envoi = Systeme.io éditeur « Code source » (PAS l'éditeur visuel)** : newsletters programmées (01-03), automatisation produit (04 confirmation), campagne/délai 7 j (05). Calendrier dimanche dans le showcase. Variables `[PRENOM]`→`{{contact.first_name}}`, `[URL_…]` à remplir.

## 👁️ Voir le site facilement (pour Rany, sans terminal)
- **`_VOIR-LE-SITE-HTML/`** (racine projet) = le site en **pages HTML simples, double-clic** (`index.html`). Liens rendus 100 % relatifs + script grille passé en `is:inline` (sinon module ES bloqué en file://). Généré par `site-lautrerecit/flatten-static.mjs`.
- **`Mettre à jour les pages HTML.command`** = régénère ce dossier (build Astro + flatten) après une modif.
- **`Voir le site.command`** = version LIVE via serveur Astro (`npm run dev --open`). Optionnel.
- ⚠️ Le dossier `_VOIR-LE-SITE-HTML/` est un **instantané** : le régénérer après chaque changement du site.

## ⏳ Décisions en attente
- (rien en attente sur menu / boutons / grille / header tunnel — tranchés le 2026-06-18)
- Brancher les liens checkout Systeme.io (placeholders sur la page de vente + page formation vitrine).
- Supprimer la landing legacy `tunnel-vente/index.html` si vraiment plus utile.

## 📌 Rappels
- Typo titres = **Playfair 700** (raffiné, pas 900 « gras »).
- Boutons = **rectangles** (radius 4px), jamais noir + flèche dorée.
- Foil dégradé du tunnel = **gardé** (Rany aime).

---

## 📅 Session 2026-06-21 — Bon de commande Systeme.io monté + paiement LIVE + Klarna/riba + redéploiement site

### ✅ Checkout (bon de commande Systeme) — FONCTIONNEL de bout en bout
Page bon de commande = `41954994`, slug public **`cours.lautrerecit.com/commande`** (funnel `7328481`).
- **Offre créée** : produit numérique « Le nationalisme noir américain » **79,99 € paiement unique**, formation liée en **Accès total** (Rany ajoutera C3-C5 à la main → accès à vie), **taxe Incluse** (franchise TVA, mention art. 293 B à mettre sur factures/CGV), description relevé bancaire « L'Autre Récit ». Le prix se met dans **« Tarif de l'offre »** (pas le bloc Produit). La formation doit être **publiée** (Statut vert) pour apparaître dans « Choisir une formation ».
- **Copie nettoyée** : le formulaire natif sortait en **template produit physique** (livraison/adresse/« votre livre GRATUIT 24,95 € »). Réécrit en : Étape 1 « Tes informations / Pour créer ton accès », bouton **« Continuer »** ; Étape 2 « Paiement / Accès immédiat », bouton **« Payer 79,99 € »**. (Édité via JS native-setter sur les inputs du panneau réglages — React.)
- **Récap PLEINE LARGEUR** : version bandeau `lr-ord` (= `systeme-io/01-bon-de-commande.html`, 2 colonnes valeur|prix, ligne réassurance Stripe/accès/garantie) collée à la place de l'ancien récap étroit `lr-cmd`. Le conteneur Systeme est full-width (1805px), c'est le récap qui se bridait.
- **Garantie 7 jours** (pas 14) — récap MAJ.
- **Style doré** : ⚠️ champs natifs = **styled-components (classes hashées)** → mockup pixel-perfect impossible. Solution : **bloc « Code HTML » avec `<style>` ciblé sur l'ID stable du form `#twosteppaymentform-dc78e08c`** (inputs radius/focus doré + bouton gradient doré). Le bouton passe **doré** ✅.
- **STRIPE connecté** (compte lautrerecit@gmail.com) → **paiement réel testé OK (carte Revolut), juste annulé** ✅✅. PayPal **écarté** (« intégration en cours » + restriction compte).

### 💳 Paiement & riba (foi de Rany) — décisions
- **Klarna / Afterpay / Affirm / PayPal 4× = BNPL = crédit tiers à intérêt/pénalités → RETIRÉS** (riba). Klarna désactivé dans **Stripe** (Paramètres → Moyens de paiement) + **masqué en CSS sur Systeme** (voir ci-dessous).
- **Paiement en 3× via Stripe/plan Systeme, MÊME PRIX (3× 26,66 €), sans frais = vente échelonnée (bay' bi-taqsīt) → LICITE, à garder.** (Tarif « Abonnement » limité à **3 paiements** mensuels — à finaliser.)
- ⚠️ **Klarna côté Systeme** : l'élément « Mode de paiement » embarque AUTOMATIQUEMENT Carte + Klarna + Credit Cards (impossible de retirer Klarna seul). Désactiver Klarna dans Stripe **ne suffit pas** (Systeme garde l'entrée en cache). → **Masqué en CSS** : règle ajoutée dans le `<style>` du bloc récap : `#twosteppaymentform-dc78e08c div:has(> input[type=radio]):has(img[src*="klarna"]){display:none!important}` (class-agnostic, `:has()` supporté, testée → 0 Klarna visible, cartes intactes).
- ⚠️ **« Un seul formulaire de paiement autorisé par page »** : Rany avait glissé **2 éléments « Mode de paiement »** (doublon → erreur de save + méthodes en double). Fix = supprimer 1 des 2 (manuellement — voir bug freeze).

### 🔗 CTA tunnel → checkout
- Les **3 CTA d'achat** (hero `pagevente.html:733` + carte prix `.tkc-cta:1148` + footer `:1362`) → `https://cours.lautrerecit.com/commande`, dans les **3 copies** (`tunnel-vente/pagevente.html` + `tunnel-vente/deploy/index.html` + `site-lautrerecit/public/formation-nationalisme-noir/index.html`). (#programme + « Voir le cours introductif » freemium laissés.)

### 🚀 Site complet redéployé (accueil écrasé)
- Rany avait déployé **seulement le tunnel** sur Netlify → `lautrerecit.com` n'affichait QUE le tunnel (accueil disparu). Fix : **`npm run build`** (14 pages, dist complet avec `index.html` accueil + tunnel à `/formation-nationalisme-noir/`) → **glisser `dist` sur Netlify**. (Netlify CLI installé mais pas liée ; site branché git auto-deploy via `netlify.toml`.) ⚠️ **Penser à commit + push** les modifs source (CTA) pour que l'auto-deploy git serve la bonne version.

### ⚠️ Méthodes & bugs Systeme à RETENIR
- **DELETE GÈLE l'éditeur** (clic corbeille auto → renderer frozen → reload). **Mes clics automatisés gèlent ; les clics MANUELS de Rany passent.** → toute suppression d'élément = Rany la fait à la main.
- L'éditeur **éjecte parfois** vers `/dashboard/funnels/7328481`. Re-entrer : funnel → « Bon de commande » → « Modifier la page ». Modale « reprendre ? » → **Oui** = garde l'état non sauvé, **Non** = dernière sauvegarde.
- **Dashboard Systeme se bloquait** (listes funnels/formations en « Loading… » sans appel API) = **extension du navigateur** de Rany (adblock/vie privée) → résolu en **navigation privée**. L'éditeur de PAGE charge même quand les listes sont bloquées.
- Édits fiables (pas de freeze) : texte via **JS native-setter** (`Object.getOwnPropertyDescriptor(HTMLInputElement.prototype,'value').set` + dispatch input/change), ajout via **drag** (`left_click_drag`), code Code HTML via **`window.ace.edit(document.querySelector('.ace_editor')).setValue(code,-1)`** puis ENREGISTRER.

### ⏳ Reste à faire
- **Finaliser le tarif 3×** (Abonnement limité à 3 paiements de 26,66 €, taxe incluse).
- **2 cases légales** sur le bon de commande : renonciation rétractation art. **L221-28** (NON pré-cochée) + **CGV**. + **Bouton de rétractation obligatoire 19 juin 2026** (ordonnance 2026-2, amende ≤75 k€) dans espace membre + email confirmation. **Faire valider par un pro.**
- **Espace membre** : accueil cours (bloc `03`) + page connexion (`05`) + récupérer l'URL login pour le « Se connecter » vitrine.
- **Commit + push** (CTA) + **redéployer** Netlify.
- Aligner garantie **7 j** dans les CGV (disaient 14 j).

---

## 📅 Session 2026-06-21 (nuit) — Fiches de présentation des modules (Systeme.io)

### ✅ Fiches modules — 18 blocs HTML générés, design FINAL centré
- Dossier `systeme-io/blocs-fiches/` : 1 `.html` par module (Intro M1-M6, C1 M1-M6, C2 M1-M6). Générateur `_gen.mjs` (source texte = `_BLOCS-18-LECONS.html`). Manifeste `_manifest.json`.
- **Modèle de référence** : `blocs-fiches/_MODELE-REFERENCE.html` (les 2 variantes côte à côte).
- **Design** : texte **CENTRÉ** (demande Rany : « le texte n'est pas droit »), 2 variantes **en miroir**, même structure/tailles :
  - **Crème** = modules **impairs** (1·3·5) : carte claire + bandeau objectifs **sombre** en pied.
  - **Noir** = modules **pairs** (2·4·6) : carte **sombre** (#17130E, bord doré) + bandeau objectifs **crème** en pied. (1re version « diptyque 2 colonnes » abandonnée — Rany préfère le même pattern que la crème, inversé.)
  - Polices : Playfair (titres/numéro), League Spartan (corps), JetBrains Mono (eyebrow/label). Doré `--or2` dominant. Blocs **autonomes** (style scopé `.lrf` inclus) → robustes au CSS global Systeme.
- **Alternance** recommence à chaque cours (M1 crème…).

### ⚠️ Contrainte Systeme CONFIRMÉE — suppression impossible en auto
- Clic auto sur la **corbeille** = **gèle le renderer** (CDP timeout, confirmé 2×). Touche **Suppr** = ne supprime rien. → **Claude ne peut PAS supprimer** d'élément. Les pages leçon contiennent le **contenu démo Systeme** (« Chapitre1 : Comment devenir millionnaire », lorem, « Notes à retenir », listes, image impôts, « Références », bouton « Cliquez ici »). **Rany doit vider à la main** (ses clics manuels passent). La **vidéo** de chaque leçon est la VRAIE vidéo du module → **ne pas toucher**.
- **Ajout + injection MARCHENT** : glisser « Code HTML » → engrenage → « Modifier le code » → `window.ace.edit(...).setValue(code,-1)` (ou coller) → ENREGISTRER → Sauvegarder.

### 📋 Préparé pour demain → `systeme-io/_TODO-DEMAIN.md`
1. Fiches : injecter les 18 (Rany vide / Claude injecte). Écrire C3/Interlude/C4/C5/Conclusion (manquent).
2. **Signature « Rany » manuscrite du tunnel disparue** : diagnostic = animation scroll `.ltr-sign.pending{clip-path}` + IntersectionObserver **seuil 0.6 sans fallback** → reste cachée. Fix prêt (seuil 0.2 + rootMargin + timeout 2,6 s de sécurité) dans les 3 copies tunnel.
3. **Bon de commande — case « renonciation droit de rétractation »** : Systeme a une case native obligatoire (bloque les formulaires capture, **non confirmé** pour le bouton paiement → tester). Reco : case CGV native avec texte couvrant CGV + renonciation L221-28 (Plan A), ou 2e case dédiée à tester (Plan B). Valider par un pro.

### ✅ Guide pédagogique — Édition de lancement (Intro · C1 · C2)
- `systeme-io/guide/Guide-Lancement-Intro-C1-C2.html` + **PDF exporté** (`.pdf`, ~1,4 Mo, Chrome headless `--print-to-pdf`, `print-color-adjust:exact` pour garder les fonds noirs). Design doc brandé (crème/noir/doré, Playfair/League Spartan/JetBrains Mono).
- Corrigé vs guide complet `.docx` : périmètre **Intro/C1/C2 only** · « master 2 » → **« niveau universitaire »** · chrono **1865→1959** (6 items contemporains retirés : Reagan, Jesse Jackson, Obama, BLM, Floyd, Kendrick) · **« certifiante » supprimé** · **boussole gardée mais sans nommer Malcolm/King/Panthers** (3 stratégies abstraites, NOI seul exemple) · limites = exemples C1-C2 only · Elijah sans « Messager ».
- **6 portraits** dans `guide/assets/` (copiés depuis `cours/c1-origines/assets/figures/`, washington réduit, elijah recadré portrait) : washington/dubois/wells/garvey/elijah/clara.jpg. Rendu N&B + cadre doré. ⚠️ vérifier droits d'usage ; elijah = recadrage d'une photo paysage (à remplacer si meilleur portrait dispo).
- Usage Systeme : **PDF à télécharger** dans leçon « Bienvenue / Ressources ». (Originaux `.docx` intacts dans `sources/docs/`.)
