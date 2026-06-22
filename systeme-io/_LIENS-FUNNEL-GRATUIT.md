# 🔗 Tunnel GRATUIT Systeme — « Commence gratuitement par le cours d'introduction »

> Tous les liens à ne plus jamais perdre. (Relevé 2026-06-21 · rien n'a été supprimé ni modifié.)

## Le funnel
- **Tableau de bord du funnel** : https://systeme.io/dashboard/funnels/7330794

## Les 2 pages

### 1. Page de CAPTURE (formulaire email)
- ✏️ Éditer : https://systeme.io/dashboard/page/41970347/edit
- 👁️ Voir en ligne : https://cours.lautrerecit.com/f6d9c503

### 2. Page « Voici ton cours d'introduction » (LA PAGE AVEC LES VIDÉOS)
- ✏️ Éditer : https://systeme.io/dashboard/page/41970382/edit
- 👁️ Voir en ligne : https://cours.lautrerecit.com/45482acd

## 💳 Bouton « Accéder à la formation payante » (bas de la page gratuite)
- Pointe vers : **https://cours.lautrerecit.com/commande** (bon de commande PAYANT — testé, fonctionne, design premium en place). Ouvre dans un nouvel onglet (`target="_blank"`).
- ⚠️ Si « rien ne se passe » au clic : tu testes en **preview** (`?preview=...`) → les boutons ne marchent pas en preview. Tester sur la vraie URL `https://cours.lautrerecit.com/45482acd`.

## 🎬 URL des vidéos (asset précieux)
- **Intro Module 1** : https://d1yei2z3i6k35z.cloudfront.net/17067148/6a38386a660657.27855990_introM1.mp4
  - (183,6 Mo · `video/mp4`)
- _(ajouter ici les URL des autres modules d'intro quand ils seront mis)_

## ⚠️ BUG n°1 (LE blocage) : après l'email, pas de redirection vers la page vidéo
Le formulaire de capture est réglé sur **`redirectionType: "none"`** → après l'envoi, il affiche un message « Tout est prêt ! Vous êtes inscrit ! » et **reste sur la page de capture**. Il ne va JAMAIS sur la page des vidéos.

**Fix** : éditer la page de capture (`41970347`) → cliquer le **formulaire** (ou le bouton « Envoyer ») → réglages → « Que se passe-t-il après l'inscription / soumission ? » → choisir **« Aller à l'étape suivante du tunnel »** (ou « Rediriger vers une URL » = `https://cours.lautrerecit.com/45482acd`) → Sauvegarder.

## ⚠️ BUG n°2 (à corriger ensuite) : la vidéo ne se lit pas (carré noir)
Une fois la redirection réparée, 2e souci : le MP4 n'est **pas « faststart »** (atome `moov` à la fin) + 183 Mo → le navigateur doit tout télécharger avant de lire → carré noir.

**Fix (sans perte) :**
```bash
ffmpeg -i source.mp4 -c copy -movflags +faststart sortie.mp4
```
Puis remplacer la vidéo dans Systeme. **Mieux** : héberger sur YouTube (non répertorié) ou Vimeo et intégrer → streaming parfait, pas de limite de poids.
