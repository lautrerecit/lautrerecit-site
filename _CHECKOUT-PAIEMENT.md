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

## 6. Codes promo (FRONT-END, DÉMO — ⚠️ À RETIRER AVANT LANCEMENT)

Dans le JS de `commande-test/index.html` (**visibles dans le code source !**) :

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
- [x] Webhook **Live** ajouté dans PayPal.
- [ ] Confirmer **un vrai paiement Live** → email d'accès reçu (test en cours).
- [ ] **Retirer les codes promo démo**.
- [ ] Corriger le **nom vendeur PayPal** → « L'Autre Récit » (Paramètres PayPal Business).
- [ ] Faire pointer le **vrai tunnel** (`formation-nationalisme-noir`) vers `/commande-test` (ou renommer `/commande-test` en `/commande`).
- [ ] **Push** tous les commits.
- [ ] (Bonus) Ajouter un **filtre Make** « custom_id existe » pour ignorer les événements sans email.

---

## 8. Dépannage (leçons apprises)

- **Pas d'email après paiement** → 99 % c'est le **webhook Live pas branché** (sandbox ≠ live). Vérifier PayPal → **Live** → Webhooks.
- **Aucune exécution dans Make** → le scénario doit être **ON (Active)**, pas en « Run once ». Et les paiements faits **avant** l'ajout du webhook ne déclenchent rien.
- **Erreur « Validation failed » sur Create a Contact** → un événement **sans email** (ex. le simulateur PayPal « $57 ») = déchet, ignorer.
- **« Waiting for data » qui tourne dans le vide** → mode Run once en attente ; cliquer **Stop**, laisser en **ON**.
- **Voir ce que PayPal a vraiment envoyé** → PayPal Developer → **Event Logs** (statut Delivered/Failed + bouton **Resend**).
- **On ne peut PAS se payer soi-même** sur PayPal → payer par **carte** (invité) ou depuis **un autre compte**.
- **Hébergement = Cloudflare** (pas Netlify, pas de Pages Functions qui marchent chez eux) → le pont passe par **Make**, pas par une fonction serveur.

---

## 9. Pour passer en LIVE réel (quand prêt)

1. PayPal → onglet **Live** → clés Live (Client ID déjà dans le bouton).
2. Webhook **Live** = URL Make + `Payment capture completed` (fait).
3. Un **vrai paiement test** (via code `TESTLIVE-1E-9QK2X` → 1 €, carte) → vérifier l'email d'accès.
4. **Retirer les codes démo** + corriger le nom vendeur PayPal.
5. Rediriger le vrai tunnel vers le checkout.
6. Mettre Make **ON** définitivement.

*Journal maintenu au fil du build (juillet 2026). Voir aussi `REVISIONS.md` (design du site).*
