# Déploiement de la page de vente — Guide pas-à-pas

## Ce que tu vas faire

Mettre en ligne **ce dossier `deploy/`** (qui contient `index.html`) sur **Netlify Drop**, gratuitement, en 2 minutes. Puis remplacer ta page Systeme.io existante par la nouvelle URL.

---

## Étape 1 — Déployer sur Netlify Drop (2 min)

1. Ouvre **https://app.netlify.com/drop** dans ton navigateur.
2. **Glisse-dépose le dossier `deploy/` entier** sur la zone indiquée. *(Pas le fichier `index.html` seul — le dossier complet.)*
3. Netlify upload, déploie, et te donne une URL du type `https://random-name-abc123.netlify.app`.
4. Clique sur l'URL pour vérifier que la page s'affiche correctement.

**Pas besoin de créer un compte pour la première mise en ligne.** Mais je recommande d'en créer un (gratuit, email + mot de passe) juste après, pour pouvoir : renommer l'URL en `formation-l-autre-recit.netlify.app`, ajouter ton propre domaine, et redéployer plus tard.

## Étape 2 — Personnaliser le nom de domaine (5 min, optionnel)

Dans le dashboard Netlify de ton site déployé :
- **Site settings** > **Change site name** > tape par exemple `formation-nationalisme-noir`. Tu obtiendras `https://formation-nationalisme-noir.netlify.app`.
- Si tu veux un domaine custom du type `formation.lautrerecit.fr`, configure-le dans **Domain management** (instructions Netlify gérera la procédure DNS).

## Étape 3 — Relier les boutons d'achat à Systeme.io

Le HTML actuel a **5 liens placeholder** marqués `href="#"` qui ne mènent encore nulle part. Une fois que tu m'auras donné les vraies URLs (cf. ma question dans le chat), je modifie le fichier `index.html` et tu re-déploies en glissant-déposant le dossier mis à jour sur la **même URL Netlify** (la zone « Drop site folder » dans ton dashboard).

Les 5 liens à brancher :
1. **CTA principal d'achat** (section pricing, prix 79,99 €, ligne 1134) → URL de checkout Systeme.io
2. **« Voir le cours introductif »** (ligne 1180) → URL du cours intro gratuit (ou à supprimer)
3. **Instagram** (footer, ligne 1355) → URL Instagram L'Autre Récit
4. **Substack** (footer, ligne 1356) → URL Substack L'Autre Récit
5. **Mentions légales** + **CGV** (footer, lignes 1357-1358) → URLs pages légales

## Étape 4 — Pointer Systeme.io vers la nouvelle page

Tu as deux options dans Systeme.io :

**Option A — Domaine custom Systeme.io vers Netlify (pleine maîtrise visuelle)**
Dans Systeme.io, supprime la page `40380236` ou laisse-la vide. Configure ton domaine principal (ex: `formation.lautrerecit.fr`) pour pointer vers Netlify. Toute la page de vente est servie par Netlify. Le checkout (étape suivante du tunnel) reste géré par Systeme.io.

**Option B — Redirection 301 depuis Systeme.io vers Netlify**
Dans Systeme.io > paramètres du site > paramètres SEO, mets une redirection 301 de l'URL actuelle de la page de vente vers `https://ton-site.netlify.app`. Tout le trafic est routé vers Netlify.

L'**Option A est préférable** si tu veux conserver `lautrerecit.fr` comme nom de domaine principal de la page de vente.

---

## Et après

Quand tu veux modifier la page :
1. Tu m'envoies les changements (texte, images, prix…).
2. Je modifie le fichier `index.html` localement.
3. Tu re-déposes le dossier sur Netlify (drag-and-drop sur la même URL).

Pas de Git, pas de FTP, pas de CLI. C'est volontairement simple.
