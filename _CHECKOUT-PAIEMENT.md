# Checkout & Paiement — Formation « Le nationalisme noir américain »

> Documentation + journal du système de vente custom (page de commande + PayPal + Make + Systeme).
> Objectif : remplacer le bon de commande Systeme (moche) par une belle page à la charte L'Autre Récit,
> avec paiement PayPal et **livraison automatique** de l'accès par Systeme.

---

## 1. Le flux complet

```
Client → page /commande-test (belle page, à ta charte)
  → remplit Prénom + Email + coche les 2 cases (CGV + rétractation)
  → clique « Payer avec PayPal » (couvre PayPal + carte + 4× Pay Later)
  → paie ; l'EMAIL du client voyage caché dans le champ « custom_id » de l'ordre PayPal
  → PayPal envoie un webhook « PAYMENT.CAPTURE.COMPLETED » à Make
  → Make : Create a Contact (email = custom_id) → Add a Tag (achat-nna)
  → Règle Systeme : « tag achat-nna ajouté » → inscrit à la formation + ENVOIE l'email d'accès
  → client crée son mot de passe → espace membre (cours.lautrerecit.com)
  → client redirigé vers /merci
```

**Point clé :** l'email est la clé qui relie paiement → accès. Il voyage via `custom_id`.

---

## 2. Les pages (repo `site-lautrerecit/`, hébergé **Cloudflare**, toutes `noindex`)

| Page | Fichier | URL | Rôle |
|---|---|---|---|
| Checkout | `public/commande-test/index.html` | `/commande-test` | La belle page de paiement (PayPal) |
| Merci | `public/merci/index.html` | `/merci` | Confirmation ; bouton → cours Systeme |
| Tunnel TEST | `public/formation-nationalisme-noir-test/index.html` | `/formation-nationalisme-noir-test` | CTA → `/commande-test` |
| Tunnel RÉEL (intact) | `public/formation-nationalisme-noir/index.html` | `/formation-nationalisme-noir` | CTA → Systeme (`cours.lautrerecit.com/commande`) |

Bouton /merci « Accéder à ma formation » → `https://cours.lautrerecit.com/school/course/nationalisme-noir-americain/lecture/10269935`

---

## 3. PayPal

- **Compte Business** : L'Autre Récit · `lautrerecit@gmail.com`
- **Client ID Sandbox** : `AcVhc83_...` (tests faux argent)
- **Client ID Live** : `BAAVFY8m...` (vrai argent) — **actuellement dans le bouton**
- SDK chargé dans `commande-test/index.html` : `enable-funding=paylater` (le 4×), `currency=EUR`, `intent=capture`
- **Webhook** : événement `PAYMENT.CAPTURE.COMPLETED` → URL Make
- ⚠️ **Sandbox et Live ont chacun LEUR webhook (séparés).** Le **webhook Live est indispensable** pour les vrais paiements — sans lui, aucun email ne part.
- **URL Make du webhook** : `https://hook.eu1.make.com/a4vijrmn179ydtw1bh79fypem15pf14f`

---

## 4. Make (scénario « Integration Webhooks »)

```
[Module 2 · Webhook] → [Module 17 · Systeme.io Create a Contact] → [Module 18 · Systeme.io Add a Tag]
```

- **Module 2 (Webhook)** : reçoit l'événement PayPal.
- **Module 17 (Create a Contact)** : `Email` = `{{2.resource.custom_id}}`
- **Module 18 (Add a Tag to a Contact)** : `Contact ID` = `{{17.id}}` (Map ON) · `Tag` = `achat-nna`
- **Connexion Systeme.io** = la clé API (« jeton ») Systeme.
- ⚠️ **Doit être sur ON (Active)** pour tourner tout seul. « **Run once** » = test manuel qui attrape UN événement puis s'arrête (ne pas s'en servir en production).
- **Gratuit** : 1000 opérations/mois (~330 ventes) — largement suffisant.
- Les **numéros de modules changent** quand on supprime/rajoute → re-mapper si besoin.

---

## 5. Systeme

- **Tag** : `achat-nna`
- **Règle** (Automatisations → Règles) : déclencheur « **Tag ajouté : achat-nna** » → action « **Inscrire à la formation** *Le nationalisme noir américain* · Accès total ». L'email d'accès part **automatiquement** à l'inscription.
- **Cours** : slug `nationalisme-noir-americain`
- **Clé API** = le « **jeton** » dans les réglages Systeme (collé dans la connexion Make).

---

## 6. Codes promo (FRONT-END, DÉMO — ✅ RETIRÉS 2026-07-04)

> ✅ **FAIT** : les 3 codes démo + tout le bloc promo (HTML + JS) ont été **supprimés** de `commande-test/index.html`. Prix **figé 79,99 €**. La sécurité prix est désormais **côté Make** (voir **§11**). Historique conservé ci-dessous pour mémoire.
>
> 🔴 *(historique)* ces codes étaient écrits **en clair dans le JavaScript** → visibles au code source. C'est pour ça qu'ils ont dû partir avant le vrai tunnel.

Codes qui **étaient** dans le JS (retirés) :

| Code | Effet |
|---|---|
| `MERCI20` | −20 % (63,99 €) |
| `KDSLMLDFLKDFKLLKDKL100` | 100 % (test gratuit — ne marche PAS en PayPal car 0 €) |
| `TESTLIVE-1E-9QK2X` | ramène à **1,00 €** (pour tester le Live pas cher) |

⚠️ **Avant de brancher le vrai tunnel dessus** : retirer ces codes (sinon n'importe qui lit le source et paie 1 €). Les vrais codes promo = **coupons côté PayPal/Systeme** (validés serveur).

---

## 7. Go-live checklist

- [x] Livraison Systeme validée (tag → inscription → email).
- [x] Bouton PayPal + email dans `custom_id`.
- [x] Pont Make (webhook → contact → tag) validé **en sandbox**.
- [x] Client ID **Live** dans le bouton.
- [x] Webhook **Live** ajouté dans PayPal **sur la même app que le Client ID** (piège : voir §8).
- [~] **Paiement Live encaissé** (vrai argent, reçu `service@paypal.fr`) MAIS **pas d'email d'accès** : un événement PayPal **sans `custom_id`** (email vide) a fait planter *Create a Contact* (« Missing value of required parameter 'email' ») → Make **auto-désactive** le scénario → tant qu'il est **OFF, aucun paiement ne délivre l'accès** (2026-07-04). ⚠️ L'ancienne mention « le système marche en réel » était fausse : un seul run avait réussi, puis un événement-déchet a coupé le scénario.
- [ ] 🔴 **Filtre Make = OBLIGATOIRE (c'est LA cause du crash, plus un « bonus »)** : entre Webhook (mod 2) et *Create a Contact* (mod 17), condition `{{2.resource.custom_id}}` → **Exists** (et « text is not empty »). Ignore les événements sans email au lieu de planter + désactiver.
- [ ] 🔴 **Réactiver le scénario** après le filtre : toggle **ON (Active)** + planification **« Immediately as data arrives » ON** (pas « Run once »).
- [x] **Codes promo démo retirés** (2026-07-04) : prix figé 79,99 €, bloc promo supprimé du HTML+JS. Verrou prix = **§11 (filtre montant Make)**.
- [ ] Corriger le **nom vendeur PayPal** → « L'Autre Récit » (Paramètres PayPal Business).
- [ ] Faire pointer le **vrai tunnel** (`formation-nationalisme-noir`) vers `/commande-test` (ou renommer `/commande-test` en `/commande`).
- [ ] **Push** tous les commits.
- [ ] (Optionnel, ceinture+bretelles) Restreindre le **webhook PayPal** au seul événement `PAYMENT.CAPTURE.COMPLETED` (pas « all events ») pour tarir les événements sans email à la source.

---

## 8. Dépannage (leçons apprises)

- **Pas d'email après paiement** → 99 % c'est le **webhook Live pas branché** (sandbox ≠ live). Vérifier PayPal → **Live** → Webhooks.
- **Aucune exécution dans Make** → le scénario doit être **ON (Active)**, pas en « Run once ». Et les paiements faits **avant** l'ajout du webhook ne déclenchent rien.
- **Erreur « Validation failed » / « Missing value of required parameter 'email' » sur Create a Contact** → un événement PayPal **sans email** (`custom_id` vide : simulateur « $57 », événements non-capture, etc.) est arrivé jusqu'au module. ⚠️ **Make ne l'ignore PAS tout seul** : sans filtre, l'erreur **désactive le scénario entier** (mail « scenario has been stopped / deactivated because of an error ») → ensuite **plus aucun vrai paiement ne passe**. **Fix obligatoire = filtre `custom_id` Exists** entre Webhook et Create a Contact (voir checklist §7), PUIS **réactiver** (toggle ON). C'est le bug du 2026-07-04.
- **« Waiting for data » qui tourne dans le vide** → mode Run once en attente ; cliquer **Stop**, laisser en **ON**.
- **Voir ce que PayPal a vraiment envoyé** → PayPal Developer → **Event Logs** (statut Delivered/Failed + bouton **Resend**).
- **On ne peut PAS se payer soi-même** sur PayPal → payer par **carte** (invité) ou depuis **un autre compte**.
- **Hébergement = Cloudflare** (pas Netlify, pas de Pages Functions qui marchent chez eux) → le pont passe par **Make**, pas par une fonction serveur.
- **⭐ LE gros piège (résolu 2026-07-04)** : le **webhook doit être sur la MÊME app PayPal que le Client ID du bouton** (`BAAVFY8m`). Il avait été ajouté sur la « Default Application » (une autre app) → PayPal **encaissait** mais n'envoyait **aucun** webhook (paiements OK, mais 0 exécution Make, 0 email). Vérif : Apps & Credentials → l'app dont le Client ID = celui du bouton → section **Webhooks** → le webhook doit être **là**. Chaque app PayPal = boîte séparée (client-id + webhooks propres).

---

## 9. Pour passer en LIVE réel (quand prêt)

1. PayPal → onglet **Live** → clés Live (Client ID déjà dans le bouton).
2. Webhook **Live** = URL Make + `Payment capture completed` (fait).
3. Un **vrai paiement test** (via code `TESTLIVE-1E-9QK2X` → 1 €, carte) → vérifier l'email d'accès.
4. **Retirer les codes démo** + corriger le nom vendeur PayPal.
5. Rediriger le vrai tunnel vers le checkout.
6. Mettre Make **ON** définitivement.

---

## 10. Audit transversal du bon de commande (2026-07-04)

Passe complète sur `public/commande-test/index.html` (couleur/contraste, a11y, UX, juridique, code). **Corrigé & vérifié au DOM (:4399)** :
- **UX/légal — consentement AVANT paiement** : les 2 cases (CGV + renonciation) sont remontées **au-dessus** du bouton PayPal (avant : bouton d'abord). Ordre `.pay` = payplan → checks → montant → PayPal → reassure → secure.
- **Juridique** : ajout réf. **art. L221-28** dans la case de renonciation ; **garantie 7 j** requalifiée « **garantie commerciale** » (distincte du droit légal auquel on renonce, sinon message trompeur) ; **identité vendeur** en pied (L'Autre Récit · Rany WAHDAN · SIRET · adresse Montpellier · email) = info pré-contractuelle L221-5 ; ligne **RGPD** sous l'email (finalité + « aucun spam »).
- **Honnêteté prix** : le plan 4× affiche désormais « puis 3 × 20,00 € · **total 79,99 €** » (avant : 4×20,00 = 80,00 laissait croire à un centime de plus).
- **A11y** : `:focus-visible` doré (clavier) ; options de paiement en **radiogroup** navigables au clavier (role/tabindex/aria-checked + Entrée/Espace) ; SVG décoratifs `aria-hidden` ; `autocapitalize=off spellcheck=false` sur l'email.
- **Contraste** : `.tva` (mention TVA légale) et `.secure`/`.foot-legal` remontés `#8a806d → #a99d86` (AA sur la carte).
- **Anti-piège** : retrait de la note « Aperçu — Sandbox » (elle disait Sandbox alors que le bouton est **LIVE** → trompeur) ; email **mis en minuscules** avant `custom_id` (matching Systeme cohérent).
- **DS premium** : `--or3` en eyebrows/kickers sur fond sombre = **conforme** (règle §7), pas touché.

**✅ RÉSOLU (2026-07-04) — sécurité prix** : codes démo retirés, prix figé 79,99 €. Le montant part encore du client (PayPal Buttons), mais le **verrou autoritaire est côté Make** (le seul palier serveur du montage) : il n'accorde l'accès QUE si le montant **réellement capté** == 79,99 €. Un visiteur qui force 1 € via devtools paie 1 € réel mais **n'obtient aucun accès** (à rembourser dans PayPal). Recette complète = **§11**.

---

## 11. Verrou prix définitif — le filtre montant Make (sécurité serveur, sans code hébergé)

**Principe** : sur ce montage (Cloudflare statique + PayPal Buttons + Make), le **seul palier serveur** entre le paiement et la livraison de l'accès, c'est **Make**. Donc c'est **là** qu'on vérifie le prix — pas dans la page (falsifiable) ni dans un Worker (pas voulu).

**Invariant** : Make n'ajoute le tag `achat-nna` (= n'ouvre l'accès) QUE si le montant **réellement capté** par PayPal est un prix **autorisé**. Aujourd'hui un seul : **79,99 €**.

**Le filtre** (déjà là pour le crash `custom_id`, on lui ajoute la condition prix) — entre Webhook (mod 2) et *Create a Contact* (mod 17) :

```
Condition 1 (anti-crash) : {{2.resource.custom_id}}            → Exists  ET  text is not empty
Condition 2 (prix)  AND  : {{2.resource.amount.value}}         → Numeric = 79.99
Condition 3 (devise) AND : {{2.resource.amount.currency_code}} → Equal EUR
```

Les 3 vraies → contact + tag + email d'accès. Sinon (1 €, 0 €, autre devise, event sans email) → **ignoré**, aucun accès.

⚠️ **Vérifier le chemin JSON exact** sur un vrai `PAYMENT.CAPTURE.COMPLETED` (PayPal Developer → **Event Logs**) : le montant peut être `resource.amount.value` (capture) — confirmer avant de câbler.

**Pay Later (4×)** : PayPal paie le marchand **en une capture de 79,99 €** (l'acheteur rembourse PayPal en 4). Donc **une seule valeur à autoriser : 79,99**. Le sélecteur « 4× » de la page est cosmétique (l'ordre vaut toujours 79,99).

**Promo future (rappel)** : ajouter le prix promo à la Condition 2 (`= 79.99 OR = 63.99`) ou gérer via **Data Store Make**. Code réellement secret → **coupon Systeme**. On ne remet **jamais** de code en clair comme seule barrière.

### Séquence de déploiement définitif (dans l'ordre — l'ordre compte)

1. **Make d'abord** : ajouter les conditions ci-dessus au filtre + **réactiver le scénario** (toggle **ON / Active**, planif « Immediately as data arrives »). Sans ça : soit ça plante, soit ça livre à n'importe quel montant.
2. **PayPal** : Client ID **Live** (fait) · webhook **Live** sur la **même app** que le Client ID (fait, §8) · restreindre à `PAYMENT.CAPTURE.COMPLETED` · corriger le nom vendeur → « L'Autre Récit ».
3. **Test réel** : un vrai paiement 79,99 € (carte, autre compte) → l'email d'accès arrive. PUIS un test « pirate » : forcer 1 € via devtools → paiement OK mais **aucun accès** (filtre Make le prouve) → rembourser le 1 €.
4. **Brancher le vrai tunnel** : `formation-nationalisme-noir` → `/commande-test` (ou renommer `/commande-test` en `/commande`).
5. **Déployer** : commit + **push** `site-lautrerecit` → Cloudflare auto-deploy.

*Journal maintenu au fil du build (juillet 2026). Voir aussi `REVISIONS.md` (design du site).*
