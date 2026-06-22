# À FAIRE DEMAIN — Systeme.io + tunnel (préparé nuit du 2026-06-21, ~5h)

Rany dort. Tout est prêt pour exécuter d'un coup. 3 chantiers.

---

## 1. FICHES DE PRÉSENTATION DES MODULES (18) — prêtes à coller

**Statut : les 18 blocs HTML sont générés, design FINAL (centré).**
Dossier : `site-lautrerecit/systeme-io/blocs-fiches/` (un `.html` par module).

- **Modèle de référence visuel** : `blocs-fiches/_MODELE-REFERENCE.html` (double-clic → voit les 2 modèles).
- **Design validé** : texte **centré**, 2 variantes en MIROIR, même structure/tailles :
  - **Crème** (modules **impairs** 1·3·5) → carte claire + bandeau objectifs **sombre** en pied.
  - **Noir** (modules **pairs** 2·4·6) → carte **sombre** + bandeau objectifs **crème** en pied.
- **Alternance** : recommence à chaque cours (M1 crème, M2 noir, M3 crème…).
- Régénérer si besoin : `cd blocs-fiches && node _gen.mjs` (source texte = `_BLOCS-18-LECONS.html`).

### Contenu couvert : Intro (M1-M6) · Cours 1 (M1-M6) · Cours 2 (M1-M6).
### MANQUE encore (à écrire) : Cours 3, Interlude, Cours 4, Cours 5, Conclusion. → ajouter le texte dans `_BLOCS-18-LECONS.html` puis `node _gen.mjs`.

### Méthode d'injection Systeme (par page leçon) :
1. Rany **vide** le contenu démo de la page (titre « Chapitre1 », lorem, « Notes à retenir », listes, image impôts, « Références »…). ⚠️ **NE PAS toucher la vidéo.**
   - ⚠️ **Suppression = MANUELLE (Rany).** Mes clics auto sur la corbeille **gèlent** l'éditeur (confirmé 2×). La touche Suppr ne supprime pas. Donc Claude ne peut PAS supprimer.
2. Claude (ou Rany) ajoute un bloc **« Code HTML »** (glisser depuis Autre) sous la vidéo → engrenage → **« Modifier le code »** → coller le bloc → **ENREGISTRER** → **Sauvegarder** la page.
   - L'ajout + injection via éditeur ace marchent (testé). Seule la suppression plante.
3. Ordre canonique « cadrage d'abord » respecté par l'ordre des leçons.

**Décision à prendre demain** : Rany colle lui-même (je lui donne les blocs) OU Claude injecte direct page par page (Rany ne fait que vider). La 2e est bien plus rapide.

---

## 2. TUNNEL — signature « Rany » manuscrite DISPARUE (lettre du fondateur)

**Diagnostic (trouvé) :** la signature existe bien dans le code (`<div class="ltr-sign">Rany</div>`, police **Great Vibes** cursive). Elle est **cachée par son animation d'apparition au scroll** :
- `.ltr-sign.pending{clip-path:inset(0 100% -12% 0)}` → la masque (clip 100%).
- JS `IntersectionObserver` **seuil 0.6** ajoute `.writing` quand 60 % de la signature entre à l'écran. **Sans fallback.**
- Sur petit écran / si 60 % jamais atteint d'un coup / si déjà passée → reste en `.pending` = **invisible**. C'est ça « elle n'y est plus ».

**Fix prêt (3 fichiers, mêmes lignes) :**
`tunnel-vente/pagevente.html` · `tunnel-vente/deploy/index.html` · `site-lautrerecit/public/formation-nationalisme-noir/index.html`

Dans le `<script>` de la signature (~ligne 1610), remplacer le bloc par une version robuste :
```js
/* Signature animée · écrite au scroll-into-view (avec fallback anti-disparition) */
(function(){
  var s=document.querySelector('.ltr-sign');if(!s)return;
  var reveal=function(){s.classList.remove('pending');s.classList.add('writing');};
  if(!('IntersectionObserver'in window)){reveal();return;}
  s.classList.add('pending');
  var done=false,go=function(){if(done)return;done=true;reveal();};
  var io=new IntersectionObserver(function(es){es.forEach(function(en){if(en.isIntersecting)go();});},{threshold:.2,rootMargin:'0px 0px -10% 0px'});
  io.observe(s);
  setTimeout(go,2600); /* filet de sécurité : révèle toujours */
})();
```
Changements : seuil **0.6 → 0.2**, `rootMargin` (déclenche un peu avant), **timeout 2,6 s** qui révèle quoi qu'il arrive, fallback si pas d'IntersectionObserver. La signature ne peut plus rester invisible.
→ Après edit : re-`npm run build` du site + redéployer Netlify (cf. REVISIONS).

---

## 3. BON DE COMMANDE — case « renonciation au droit de rétractation »

**Question Rany : le natif Systeme peut-il le faire ?**

**Recherche (aide.systeme.io) :**
- Systeme a bien un **élément « case à cocher » natif** : texte éditable, message d'erreur éditable, **rendable obligatoire**.
- Une case **obligatoire bloque** le passage à l'étape suivante **quand le bouton enregistre le contact** (formulaires capture/optin → confirmé).
- **NON confirmé par la doc** : qu'une case obligatoire bloque le **bouton de PAIEMENT** du bon de commande. À **tester** sur le dashboard (ou demander au support).

**Recommandation (à valider par un pro du droit) :**
- **Plan A (sûr, natif)** : utiliser la **case CGV native** du bon de commande et rédiger son texte pour couvrir **les deux** : acceptation des CGV **+** renonciation expresse au droit de rétractation (contenu numérique fourni immédiatement, **art. L221-28**). 1 case obligatoire = bloque l'achat (built-in).
  - Texte type : « J'accepte les CGV et je demande l'accès immédiat à la formation. Je reconnais renoncer expressément à mon droit de rétractation de 14 jours dès le début du visionnage (art. L221-28 c. consommation). »
- **Plan B** : ajouter une **2e case à cocher** dédiée à la renonciation. → **tester demain** si elle est obligatoire ET bloque le paiement. Si elle ne bloque pas le paiement → revenir au Plan A.
- Rappel REVISIONS : **bouton de rétractation obligatoire (ordonnance 19 juin 2026, amende ≤75 k€)** à mettre dans l'espace membre + email de confirmation. **Faire valider par un pro.**

**Plan de test demain (5 min) :** glisser une case obligatoire sur le bon de commande, la mettre « obligatoire », essayer de payer sans cocher → voir si Systeme bloque. Résultat → choisir Plan A ou B.

---

### Sources (point 3)
- Systeme — Comment ajouter une case à cocher : https://aide.systeme.io/article/188-comment-ajouter-une-case-a-cocher
- Systeme — Ajouter les CGV dans vos pages : https://aide.systeme.io/article/205-comment-ajouter-les-conditions-generales-de-vente-dans-vos-pages
- Validité juridique du clic-CGV : https://www.cgv-expert.fr/prestation-redaction-conditions-generales/validation-cgv-clic-signature-manuscrite
