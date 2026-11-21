# La Boussole 2027 — fiche de règles

Fiche unique de La Boussole (pages `/2027/`). À relire en entier avant de créer ou de modifier une page, un dossier, une idée reçue, un jeu ou une story. Les nouvelles règles s'ajoutent ici, pas ailleurs.

Contrôle en deux temps, comme pour les vidéos :
1. **Mesure** : `node outils/boussole/controle.mjs /2027/… ` (serveur `npm run dev` lancé). Doit afficher `0 défaut(s)`.
2. **Jugement** : agent `auditeur-boussole`, œil neuf, avec la grille de la §6. À lancer après chaque nouveau dossier ou page, et avant toute publication.

---

## 1. Mission et publics

- L'Autre Récit est un média de science politique. La Boussole rend lisibles les programmes et les enjeux de 2027, et répond aux idées reçues avec des sources publiques.
- Objectif assumé : **faire voter**, quel que soit le vote. Jamais de consigne de vote, jamais de mobilisation d'un seul public au profit d'un camp.
- Deux publics, deux portes :
  - les **engagés**, qui cherchent de quoi répondre (dossiers, idées reçues, stories) ;
  - les **éloignés** (abstentionnistes, dépolitisés, indécis), qui se demandent si l'élection les concerne (quiz, « Votre situation », inscription, estimations).
- Chaque page dit pour quelle porte elle est faite.

## 2. Fond

**F1. Source primaire.** Chaque chiffre renvoie à la publication d'origine (Insee, DREES, Eurostat, OCDE, rapport parlementaire, texte de loi). Une dépêche, un article de presse, un résumé ou un texte collé ne sont pas des sources. Un chiffre non confirmé porte `verifier: true` : il est signalé sur la page et bloqué au partage.

**F2. Jamais inventer.** Aucune citation, aucune date et aucun chiffre de mémoire. Pas de guillemets sans texte vérifié. Une paraphrase entre crochets s'affiche comme un résumé, pas comme une citation.

**F3. Même règle pour tous les camps.** Une citation vient d'une source directe (vidéo, compte officiel, transcription) et non d'une reprise. Chaque dossier contient au moins une idée reçue venue d'un autre bord que la majorité de ses idées reçues, vérifiée avec la même exigence.

**F4. Les sujets d'abord, les idées reçues ensuite.** On entre par les enjeux (salaires, logement, santé…), jamais par les phrases de l'adversaire. Sur l'accueil, au plus trois idées reçues visibles, chacune d'un sujet différent. Pas de répétition d'un même groupe visé (« les immigrés… ») dans une même vue. *Pourquoi : effet d'agenda (McCombs et Shaw, 1972) ; un débat qui se droitise par le haut (Tiberj, 2024).*

**F5. Le fait d'abord.** Le fait est l'élément le plus visible. L'idée reçue apparaît une seule fois, en plus petit, entre guillemets, avec un intitulé (« On entend dire »). Ordre : fait → idée reçue → explication → source. *Pourquoi : effet de vérité illusoire (Hasher et al., 1977) ; Debunking Handbook (Lewandowsky et al., 2020).*

**F6. La nuance existe.** Trois verdicts possibles : Vrai, Faux, Plus compliqué. Ne jamais forcer en binaire une question qui dépend de la méthode (ex. solde budgétaire de l'immigration selon l'OCDE).

**F7. La couche L'Autre Récit.** Un dossier complet comporte trois blocs : *D'où vient l'idée reçue* (histoire, dates sourcées), *Ce que montrent les chercheurs* (ouvrages réellement lus ou vérifiés), *À qui profite le cadrage* (médias, effet de seuil). Une référence doit apporter quelque chose ; si on peut la retirer sans perte, on la retire.

**F8. La voix des concernés.** Quand une page décrit un groupe (immigrés, habitants des quartiers, musulmans, outre-mer), elle lui donne aussi la parole (enquête, témoignage, travaux de chercheurs issus du groupe), pas seulement des statistiques.

## 3. Ton

**T1. Personne n'est en faute.** On ne se moque pas de qui croit une idée reçue. Le mot « cliché » n'est pas un verdict. On écrit « idée reçue », « on entend dire ».

**T2. Pas de joute.** Les intitulés ne parlent pas de clash, de réplique gagnante, de « détruire » un argument. On explique.

**T3. Vouvoiement**, phrases complètes, pas d'impératif sec en série. Pas de triplets ni d'antithèses mécaniques (« ce n'est pas X, c'est Y »).

**T4. Indépendance.** Aucune étiquette partisane (« de gauche ») pour le site ou son auteur. Le point de vue assumé est celui des personnes que visent les idées reçues.

## 4. Forme

**V1. Contraste.** Jamais clair sur clair, jamais sombre sur sombre. Texte ≥ 4,5:1 (≥ 3:1 au-dessus de 24 px). Or lisible : `#E0C27F` sur nuit, `#6B5215` ou `#7A5E18` sur ivoire. L'or n'est jamais un aplat.

**V2. Thème « Nuit et ivoire ».** Fond nuit avec lueurs, surfaces ivoire en verre. Lecture longue sur ivoire plein.

**V3. Typographie.** Playfair Display pour les titres, les chiffres et les citations ; League Spartan pour le corps et les intitulés en capitales. Pas de police à chasse fixe dans le contenu de La Boussole. Texte ≥ 13 px. Apostrophes typographiques (’), guillemets français, « […] » pour une coupure.

**V4. Hiérarchie.** Un seul élément dominant par bloc. Pas de mur de pastilles de même poids. Pas de carte à moitié vide : le contenu remplit la carte ou la carte rétrécit.

**V5. Boutons neutres.** Quand l'utilisateur choisit une réponse, les options ont le même poids visuel : le design ne souffle pas la réponse.

**V6. Mobile.** Pas de débordement horizontal à 375 px. Cibles tactiles ≥ 44 px, sauf liens dans le texte. Focus clavier visible sur nuit et sur ivoire.

**V7. Sobriété.** Un seul geste de jeu (glisser, retourner) par page. Effets 3D et verre au service de la lecture. Respect de `prefers-reduced-motion`.

## 5. Confidentialité

Le projet est privé : routes injectées seulement en dev ou avec `PUBLIER_2027=1`, `noindex`, exclu du sitemap. Les pages d'atelier (`/2027/audit`, `/2027/verre`…) restent en dev seulement. Pas de commit ni de push sans accord.

## 6. Grille de l'auditeur (16 questions)

Fond
1. Chaque chiffre affiché a-t-il une source primaire, datée, avec un lien ? (F1)
2. Y a-t-il une citation, une date ou un chiffre qui semble inventé, arrondi ou sorti de son contexte ? (F2)
3. Un lecteur d'un autre bord trouverait-il un traitement de faveur ou une cible unique ? (F3)
4. La vue d'entrée part-elle des sujets ou des phrases de l'adversaire ? Un groupe est-il nommé de façon répétée ? (F4)
5. Le fait est-il plus visible que l'idée reçue ? (F5)
6. Une réponse binaire écrase-t-elle une vraie nuance ? (F6)
7. La couche savante est-elle présente et utile (histoire, chercheurs, cadrage) ? (F7)
8. Les personnes décrites ont-elles la parole ? (F8)

Ton
9. Une personne qui croyait l'idée reçue se sentirait-elle moquée ? (T1)
10. Le vocabulaire relève-t-il de l'explication ou de la joute ? (T2, T3)
11. Le site pourrait-il être lu comme l'organe d'un parti ou comme une consigne de vote ? (T4)

Forme
12. Contraste et lisibilité, y compris sur téléphone (voir les captures) ? (V1, V3, V6)
13. Hiérarchie : l'œil sait-il où aller en trois secondes ? (V4)
14. Les choix sont-ils présentés de façon neutre ? (V5)
15. L'ensemble fait-il revue de sciences sociales ou appli de jeu ? (V2, V7)

Public
16. Pour la porte visée (engagés ou éloignés), la page donne-t-elle une raison de rester et une prochaine étape claire ? (§1)
