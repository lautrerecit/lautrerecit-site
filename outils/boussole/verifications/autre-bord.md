# La Boussole 2027 — idées reçues « de l’autre bord » : rapport de vérification

Vérifications faites le 1er novembre 2026. Aucun fichier du site n’a été modifié. Les 30 chiffres de `autre-bord.js` ont tous été lus sur leur source primaire ; aucun ne porte `verifier: true`.

Outils : WebFetch, `curl` + `pdftotext` sur les PDF officiels, et le panneau navigateur pour la page SSMSI (bloquée en accès automatique). Les PDF du ministère de l’Éducation n’ont été lisibles que pour `enc-2026pdf-519886.pdf`.

Répartition : 9 entrées `gauche`, 1 `ecologiste` (logement), 0 `anti-systeme`. Verdicts : 4 faux, 2 vrai en partie, 4 plus compliqué.

---

## vie-chere — « L’inflation, c’est uniquement les profits » (vrai en partie)

Vérifié :
- **BCE, Bulletin économique 4/2023, encadré d’Elke Hahn** — https://www.ecb.europa.eu/pub/economic-bulletin/focus/2023/html/ecb.ebbox202304_03~705befadac.en.html — passage « accounting for roughly 60% of total growth in the GDP deflator » sur « the last three quarters » (données jusqu’au T1 2023), et « the 42% share of nominal GDP for GOS and mixed income ». L’encadré note aussi que les prix des intrants, de l’énergie par exemple, ont facilité les hausses de prix.
- **Insee Analyses n° 84, mai 2023** — https://www.insee.fr/fr/statistiques/fichier/7616072/ia84.pdf — résumé : intrants importés hors énergie, +10 % de coût → +5 % de prix de vente ; « Une hausse du prix de l’énergie est complètement répercutée sur le prix de vente ». Hausses T1 2021–T2 2022 : biens intermédiaires importés +32 %, électricité +15 %, gaz +110 %, produits pétroliers +148 %.
- **Banque de France, tribune d’A. Bénassy-Quéré « Marges au pas de course ? », 23 juin 2023** — https://www.banque-france.fr/fr/interventions-gouverneur/marges-au-pas-de-course — au second semestre 2022, la contribution de la marge à l’inflation dépasse celle du coût salarial en zone euro, mais lui est inférieure en France ; elle était négative au premier semestre 2022. Les chiffres exacts sont seulement dans un graphique : rien de chiffré n’en a été repris.
- **Insee Première n° 2105, 29 mai 2026** — https://www.insee.fr/fr/statistiques/8996855 — « Le taux de marge diminue de 0,5 point pour atteindre 32,2 % » ; « Il reste 1,5 point au-dessus de son niveau de 2019 ».

Incertain : il manque une décomposition officielle de l’IPC français entre profits, salaires et importations. Le déflateur du PIB (BCE) et l’IPC mesurent deux choses différentes, et le texte parle bien du « prix de la production intérieure ».
Abandonné : la part « importée » de l’inflation à 80 % (estimation de Société Générale, pas une source primaire).

## salaires — « La part des salaires ne cesse de baisser » (plus compliqué)

Vérifié :
- **Insee, Document de travail G2009/01, P.-A. Pionnier, « Le partage de la valeur ajoutée en France, 1949-2007 »** — https://www.insee.fr/fr/statistiques/1380707 (PDF G2009-01.pdf lu en entier) — § I.1 : moyenne de long terme d’environ 2/3 ; déformation au profit des salariés lors des chocs pétroliers, puis la part « a continué de décroître jusqu’en 1989. Elle est globalement stable depuis le début des années 1990 ». Plus loin : la part des salaires nets est « environ 10 points plus bas que le niveau atteint au début des années 1980 », à cause de la hausse des cotisations jusqu’au milieu des années 1990.
- **Insee Références, Les entreprises en France, déc. 2023, « Partage de la valeur ajoutée en Europe »** — https://www.insee.fr/fr/statistiques/7635213 — taux de marge des SNF : France 34,3 % en 2021 (30,8 % en 2009), UE 41,7 % ; la France a le plus bas taux en 2009 et en 2021.
- Insee Première n° 2105 (voir ci-dessus) pour 2025.

Incertain : la série longue s’arrête en 2007 dans ce document. Elle est complétée par le taux de marge récent, mais aucune publication Insee récente n’a été trouvée pour réécrire le « 2/3 » sur 2024-2025 (bases comptables différentes).
Abandonné : le rapport Cotis (2009). Le PDF de vie-publique.fr bloque l’accès automatique ; le document Insee de Pionnier, qui en est la base statistique, a été utilisé à sa place. Abandonné aussi : « augmenter fortement le Smic ne coûte rien », faute de chiffrage primaire récent trouvé.

## immigration — « Les immigrés sont plus diplômés que les Français » (plus compliqué)

Vérifié :
- **Insee Première n° 2051, 22 mai 2025** — https://www.insee.fr/fr/statistiques/8570442 — « 52 % des immigrés d’au moins 25 ans entrés en France en 2023 sont diplômés de l’enseignement supérieur, contre 41 % en 2006 » ; 22 % sans diplôme (30 % en 2006).
- **Insee, « Niveau de diplôme des immigrés et des descendants d’immigrés par origine géographique », données annuelles 2025, enquête Emploi** — https://www.insee.fr/fr/statistiques/4187349 — 15-64 ans : brevet, CEP ou aucun diplôme, immigrés 34,4 %, sans ascendance migratoire 12,6 % ; au-delà de bac + 2, 29,8 % contre 29,2 %.

Incertain : le champ (15-64 ans ayant terminé leurs études) diffère de celui des arrivants (25 ans ou plus) ; le texte ne mélange pas les deux. L’objection sur la reconnaissance des diplômes n’avance aucun chiffre.
Pistes écartées : « l’immigration va sauver les retraites » (déjà traité dans le dossier retraites) ; besoins de main-d’œuvre (pas de source primaire chiffrée trouvée rapidement). La formulation « plus diplômés » circule largement après la publication Insee de mai 2025, mais aucune citation nominative n’a été retenue.

## services-publics — « On a supprimé massivement des fonctionnaires depuis 2017 » (faux)

Vérifié :
- **Insee Première n° 1741, mars 2019** — https://www.insee.fr/fr/statistiques/3747060 — « au 31 décembre 2017, la fonction publique emploie 5,66 millions de personnes » (dont 139 000 contrats aidés) ; fonctionnaires 67,8 %, contractuels 17,9 %.
- **Insee Première n° 2094, 10 février 2026** — https://www.insee.fr/fr/statistiques/8732435 — 5,9 millions d’agents fin 2024 (5 876 700), +32 800 (+0,6 %) ; fonctionnaires 63,8 %, −0,1 % (−3 900) ; contractuels 24,0 %, +2,6 % (+35 900) ; +7,6 points de part des contractuels en dix ans.

Incertain : l’Insee prévient que les niveaux 2024 « ne sont pas parfaitement comparables » aux publications antérieures. Le texte le signale, et aucun écart calculé en nombre de fonctionnaires n’est affiché (ce serait un chiffre dérivé). La mention de l’OCDE (baisse de la part de l’emploi public 2019-2023) reprend le dossier existant sans revérification.

## logement — « Il suffirait d’occuper les logements vides » (plus compliqué, bord écologiste)

Vérifié :
- **Insee Focus n° 359, 17 sept. 2025, « Parc de logements au 1er janvier 2025 »** — https://insee.fr/fr/statistiques/8640662 — « en 2025, 3,0 millions de logements sont vacants » ; part passée de 8,1 % en 2019 à 7,7 % en 2025.
- **Ministère de la Transition écologique, Plan national de lutte contre les logements vacants** (page du 18 janv. 2021, mise à jour le 5 mai 2025) — https://www.ecologie.gouv.fr/plan-national-lutte-contre-logements-vacants — « 1,1 millions de logements sont vacants depuis au moins deux ans dans le parc privé », « parmi lesquels 300 000 en zone tendue ».
- **Insee Première n° 1979, janv. 2024** — https://www.insee.fr/fr/statistiques/fichier/7727384/ip1979.pdf — +60 % de logements vacants depuis 1990 ; encadré 1 sur les vacances frictionnelle et structurelle ; vacance plus forte dans les espaces peu denses ; Plan national lancé en 2021.

Incertain : la page ministérielle ne précise pas le millésime LOVAC. Le DREAL Grand Est cite 1,15 million (LOVAC 2025) et une dépêche 1,34 million : à recaler si un chiffre LOVAC daté est requis. Aucune citation d’élu écologiste n’est attribuée.
Abandonné : le chiffre des demandes HLM (4,1 millions) pour comparer, faute de l’avoir revérifié moi-même. Le cadre légal de la réquisition (ordonnance de 1945, loi de 1998) n’a pas été vérifié sur Légifrance et n’est donc pas mentionné.

## ecole — « Le niveau n’a pas baissé » (faux)

Vérifié :
- **DEPP, L’Éducation nationale en chiffres 2026** — https://www.education.gouv.fr/sites/default/files/document/enc-2026pdf-519886.pdf — pages rendues en image et lues :
  - p. 9 : PISA, maîtrise insuffisante en mathématiques, France 16,6 % (2003), 22,4 % (2012), 28,8 % (2022) ; TIMSS 2023 en 4e, la France « sous la moyenne internationale des pays de l’OCDE et de l’UE quel que soit le domaine » ; bacheliers dans une génération : 65,0 % en 2010, 79,0 % en 2026 (provisoire).
  - p. 6 : évaluations nationales, CE1 « Soustraire » 55,2 % (2020) puis 63,2 % (2025) ; CP et CE1 stables ou en légère hausse entre 2019 et 2025.

Incertain : la dictée DEPP (10,7 erreurs en 1987, 19,4 en 2021, Note d’information 22.37) et le calcul en CM2 1987-2017 (NI 19.08) n’ont pas été retenus. Les pages et PDF d’education.gouv.fr renvoient une erreur 403 en accès automatique et 502 dans le navigateur. **Note : une tentative d’ouvrir `education.gouv.fr/media/119533/download` dans le panneau navigateur a déclenché une boîte de dialogue de téléchargement chez l’utilisateur ; aucun fichier n’a été enregistré de mon côté.**
Piste écartée : « les classes sont de plus en plus surchargées ». Elle est vérifiée sur la même source (élémentaire 22,7 → 21,1 entre 2010 et 2025 ; lycée général et technologique 27,9 → 30,2 ; collège 24,5 → 25,7), donc réutilisable en variante « vrai en partie », mais elle est moins propre à la gauche. Écartée aussi : le financement du privé sous contrat, qui recoupe l’idée reçue « prive-meilleur » déjà en place.

## retraites — « Le déficit des retraites est inventé » (faux)

Vérifié : **COR, rapport annuel de juin 2026, synthèse** — https://www.cor-retraites.fr/sites/default/files/2026-06/Synth%C3%A8se_RA_2026.pdf :
- p. 10-11 : déficit de 5,1 Md€ en 2025 (−0,2 % du PIB), −0,2 % en 2030, −0,9 % en 2045, −2,4 % en 2070 ; suspension de la réforme de 2023 : « 1,8 milliards d’euros en année plein jusqu’en 2032 ».
- p. 8 : 417 Md€ de ressources, dont 277 Md€ de cotisations ; perte de 2,2 Md€ pour la branche vieillesse en 2024 selon la Cour des comptes (citée par le COR) ; ressources de 13,9 % du PIB en 2025, 12,9 % en 2070.
- p. 13-14 : les trois leviers ; tableau « hausse des cotisations employeurs de 6 Md€ » : emploi −15 à −80 milliers à long terme.
- dernière page : « durablement en besoin de financement dans l’ensemble des scénarios considérés ».

Abandonné : « revenir à 60 ans ne coûterait rien, il suffit de taxer les dividendes ». Aucun chiffrage officiel (COR, Cour des comptes, DREES) d’un retour à 60 ans n’a été trouvé ; seuls existent des chiffrages de think tanks (iFRAP) ou de partis, non primaires. Un chiffrage DSS/PLFSS reste peut-être à trouver.

## securite — « La délinquance baisse partout » (faux)

Vérifié : **SSMSI, « Insécurité et délinquance en 2025 : bilan statistique et atlas départemental », 9 juillet 2026** — https://statistiques.interieur.gouv.fr/ssmsi/publications/insecurite-et-delinquance-en-2025-bilan-statistique-et-atlas-departemental — page lue dans le navigateur. Violences physiques +5 % (+8 %/an depuis 2016) ; violences sexuelles +8 %, viols et tentatives +9 % ; tentatives d’homicide +4 % (+8 %/an depuis 2016) ; 975 victimes d’homicide, stable ; vols avec armes −8 % ; vols de véhicules et dans les véhicules −9 % ; cambriolages −3 % ; escroqueries +7 % ; stupéfiants : usage +7 %, trafic +9 %. Le SSMSI qualifie lui-même les évolutions d’« assez contrastées ».

Incertain : la page signale que ses taux de plainte ont été révisés en octobre 2026 (rapport VRS 2026). Aucun taux de plainte n’est cité ici. L’effet « plaintes plus fréquentes » est présenté comme une hypothèse, sans chiffre.

## laicite-islam — « Depuis 1905, la République ne finance aucun culte » (vrai en partie)

Vérifié :
- **Loi du 9 décembre 1905, art. 2 (Légifrance)** — https://www.legifrance.gouv.fr/loda/article_lc/LEGIARTI000006340314 — principe et exception pour les aumôneries (« lycées, collèges, écoles, hospices, asiles et prisons »).
- **Loi de 1905, art. 13, dernier alinéa (version en vigueur depuis le 25 juillet 2015)** — https://www.legifrance.gouv.fr/loda/id/LEGITEXT000006070169 — entretien et conservation des édifices du culte appartenant aux personnes publiques.
- **Réponse ministérielle à la question écrite n° 7183 (JO du 31 oct. 2023)** — https://www.assemblee-nationale.fr/dyn/16/questions/QANR5L16QE7183 — 1 144 ministres du culte au 31 déc. 2022 : 876 catholiques, 204 + 41 protestants, 23 israélites ; plus 51 agents de secrétariat.
- **Conseil constitutionnel, décision n° 2012-297 QPC du 21 février 2013** — https://www.conseil-constitutionnel.fr/decision/2013/2012297QPC.htm — considérant 6 et dispositif « conforme ».

Incertain : le coût annuel du régime concordataire n’est pas confirmé (60,7 M€ en LFI 2013 et 54,7 M€ en 2021 n’ont été vus que dans des extraits secondaires) et n’est donc pas affiché. Les effectifs de 2022 sont les derniers publiés trouvés.
Pistes écartées : les actes antimusulmans (bilan 2025 du ministère de l’Intérieur), qui relèvent du racisme et non de la laïcité ; la neutralité des usagers, déjà traitée dans « signes-espace-public ».

## quartiers-outre-mer — « L’État n’a rien fait pour les quartiers » (plus compliqué)

Vérifié :
- **Sénat, commission des finances, contrôle de Sophie Primas, « Renouvellement urbain : pour une vision de long terme… », 13 mai 2026** — https://www.senat.fr/fileadmin/cru-1778089154/Commissions/Finances/2025-2026/Controles/Essentiel_post_commission_-_Controle_NPNRU_2026.pdf :
  - p. 1 : près de 100 Md€ mobilisés en trente ans, « dont moins de 3 % sont des crédits budgétaires » ; Action Logement 66,5 %, bailleurs sociaux 22,4 %.
  - p. 4-5 : part de l’État 10 % des subventions du NPNRU (1,2 Md€), 2,4 % en comptant les financements indirects ; fin 2026, l’État aurait versé 22,5 % de sa contribution, contre 52,3 % pour les bailleurs et 43 % pour Action Logement (direction du budget) ; aucun versement de l’État en 2024.
- **ANRU, rapport d’activité 2024** — https://www.anru.fr/sites/default/files/media/downloads/anru_rapport_activite_2024.pdf — 448 quartiers ; 115 000 logements sociaux démolis, 146 000 réhabilitations ; 14 Md€ de concours financiers du NPNRU ; synthèse DGCL 2024 : le PNRU « peine encore à exercer une influence sur l’amélioration de l’image des quartiers ».
- Recoupement : Sénat, avis PLF 2025 « Politique de la ville » — l’État n’avait versé que 107 M€ à l’ANRU fin 2024.

Incertain : Action Logement est financé par la participation des employeurs et agit sous convention avec l’État. Dire « hors État » est donc une question de périmètre, que le texte expose sans trancher. Aucun chiffre outre-mer n’a été ajouté (pas de piste « gauche » vérifiée assez vite).

---

## Points à faire valider par Rany
1. Bord : aucune entrée `anti-systeme`. Le déficit des retraites « inventé » pourrait y être reclassé si vous jugez qu’il circule surtout dans ce registre.
2. École : choisir entre « le niveau n’a pas baissé » (retenu) et « les classes sont surchargées » (chiffres prêts, voir plus haut).
3. Laïcité : la piste choisie porte sur 1905 et le financement. Si vous préférez une idée reçue plus directement liée à l’islam, il faudra une autre recherche.
