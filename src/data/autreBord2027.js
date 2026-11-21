/* La Boussole 2027 — idées reçues « de l’autre bord » (gauche, écologistes, discours anti-système).
   Une entrée par dossier, même format que les objets de `cliches` dans src/data/repliques2027.js,
   plus `bord` et `verdict`. Chiffres vérifiés sur leur source primaire le 1er novembre 2026.
   verifier: true = chiffre non confirmé sur sa source d’origine (aucun dans ce fichier). Détail dans outils/boussole/verifications/autre-bord.md. */

const BCE_PROFITS = 'https://www.ecb.europa.eu/pub/economic-bulletin/focus/2023/html/ecb.ebbox202304_03~705befadac.en.html';
const INSEE_IA84 = 'https://www.insee.fr/fr/statistiques/fichier/7616072/ia84.pdf';
/* Sources des développements et objections (non affichées en chiffres) : */
const BDF_MARGES = 'https://www.banque-france.fr/fr/interventions-gouverneur/marges-au-pas-de-course';
const INSEE_CN2025 = 'https://www.insee.fr/fr/statistiques/8996855';
const INSEE_PVA_1949 = 'https://www.insee.fr/fr/statistiques/1380707';
const INSEE_PVA_UE = 'https://www.insee.fr/fr/statistiques/7635213';
const INSEE_DIPLOMES = 'https://www.insee.fr/fr/statistiques/4187349';
const INSEE_IP2051 = 'https://www.insee.fr/fr/statistiques/8570442';
const INSEE_FP2024 = 'https://www.insee.fr/fr/statistiques/8732435';
const INSEE_FP2017 = 'https://www.insee.fr/fr/statistiques/3747060';
const INSEE_IP1979 = 'https://www.insee.fr/fr/statistiques/fichier/7727384/ip1979.pdf';
const MTE_VACANTS = 'https://www.ecologie.gouv.fr/plan-national-lutte-contre-logements-vacants';
const DEPP_ENC2026 = 'https://www.education.gouv.fr/sites/default/files/document/enc-2026pdf-519886.pdf';
const COR_SYNTH = 'https://www.cor-retraites.fr/sites/default/files/2026-06/Synth%C3%A8se_RA_2026.pdf';
const SSMSI_BILAN = 'https://statistiques.interieur.gouv.fr/ssmsi/publications/insecurite-et-delinquance-en-2025-bilan-statistique-et-atlas-departemental';
const LOI_1905_ART2 = 'https://www.legifrance.gouv.fr/loda/article_lc/LEGIARTI000006340314';
const LOI_1905 = 'https://www.legifrance.gouv.fr/loda/id/LEGITEXT000006070169';
const AN_QE7183 = 'https://www.assemblee-nationale.fr/dyn/16/questions/QANR5L16QE7183';
const CC_2012_297 = 'https://www.conseil-constitutionnel.fr/decision/2013/2012297QPC.htm';
const SENAT_NPNRU_2026 = 'https://www.senat.fr/fileadmin/cru-1778089154/Commissions/Finances/2025-2026/Controles/Essentiel_post_commission_-_Controle_NPNRU_2026.pdf';
const ANRU_RA2024 = 'https://www.anru.fr/sites/default/files/media/downloads/anru_rapport_activite_2024.pdf';

export const autreBord = {
  'vie-chere': {
    id: 'inflation-profits', bord: 'gauche', verdict: 'vrai-en-partie',
    exemple: 'L’inflation, c’est uniquement les profits',
    cliche: 'L’inflation, c’est uniquement les profits des entreprises.',
    variantes: ['l’inflation, c’est la cupidité des patrons', 'les prix montent pour gonfler les marges', 'inflation par les profits', 'les grands groupes se sont gavés'],
    motscles: ['inflation', 'profits', 'marges', 'cupidite', 'entreprises', 'patrons', 'prix', 'greedflation', 'superprofits'],
    replique: 'Les profits ont bien pesé : selon la BCE, ils expliquent environ 60 % de la hausse des prix de la production intérieure de la zone euro sur les trois trimestres allant jusqu’au début de 2023. Mais le choc de départ venait de l’énergie et des importations, et en France la contribution des marges est restée inférieure à celle des salaires fin 2022.',
    developpement: [
      'Le point de départ est un choc venu de l’extérieur : entre début 2021 et mi-2022, l’Insee mesure une hausse de 32 % du prix des biens intermédiaires importés et de 110 % à 148 % pour le gaz et les produits pétroliers achetés par les entreprises. Une hausse de l’énergie est répercutée en totalité sur les prix de vente de l’industrie.',
      'Ensuite, les entreprises ont pu faire monter leurs prix plus vite que leurs coûts. La BCE l’a mesuré pour la zone euro : la part des profits dans la hausse des prix intérieurs a dépassé leur poids habituel dans l’économie. En France, la Banque de France observe un profil différent : au second semestre 2022, la marge a moins contribué à l’inflation que le coût salarial, après une contribution négative au premier semestre.',
      'Les profits restent un sujet légitime : en 2025, le taux de marge des sociétés non financières est encore 1,5 point au-dessus de son niveau de 2019. Le mot « uniquement » efface le choc énergétique, qui a d’abord frappé les ménages et les entreprises importatrices.'
    ],
    chiffres: [
      { valeur: '≈ 60 %', phrase: 'Part des profits unitaires dans la hausse du prix du PIB de la zone euro sur les trois trimestres précédant le début de 2023, alors qu’ils pèsent 42 % du PIB.', source: 'BCE, Bulletin économique n° 4/2023, encadré d’Elke Hahn', url: BCE_PROFITS },
      { valeur: '100 %', phrase: 'Part d’une hausse du prix de l’énergie répercutée sur les prix de vente dans l’industrie manufacturière (début 2021 à mi-2022). Pour les autres intrants importés, une hausse de coûts de 10 % donne 5 % de hausse des prix.', source: 'Insee Analyses n° 84, mai 2023', url: INSEE_IA84 },
      { valeur: '32,2 %', phrase: 'Taux de marge des sociétés non financières en 2025, en baisse de 0,5 point sur un an mais 1,5 point au-dessus de 2019.', source: 'Insee Première n° 2105, mai 2026', url: INSEE_CN2025 }
    ],
    objection: {
      q: 'La BCE elle-même dit que ce sont les profits.',
      r: 'Pour la zone euro et pour une période précise, oui, et c’est un résultat important. La même analyse rappelle que les prix de l’énergie ont rendu les hausses plus faciles à faire passer. Pour la France, la Banque de France ne trouve pas la même chose : les salaires ont davantage contribué que les marges au second semestre 2022.'
    }
  },

  'salaires': {
    id: 'part-salaires-baisse', bord: 'gauche', verdict: 'plus-complique',
    exemple: 'La part des salaires ne cesse de baisser',
    cliche: 'La part des salaires dans la richesse produite ne cesse de baisser.',
    variantes: ['le capital prend tout', 'les salaires perdent du terrain face aux profits', 'le partage de la valeur se dégrade sans arrêt', 'la part du travail s’effondre'],
    motscles: ['partage', 'valeur', 'ajoutee', 'salaires', 'profits', 'capital', 'travail', 'marge', 'part'],
    replique: 'La grande baisse a eu lieu dans les années 1980 : la part des salaires dans la valeur ajoutée des entreprises a reculé jusqu’en 1989, puis elle est globalement stable depuis le début des années 1990, autour des deux tiers selon l’Insee. Ce qui a fortement baissé, c’est la part du salaire net, au profit des cotisations sociales.',
    developpement: [
      'L’Insee a reconstitué le partage de la valeur ajoutée depuis 1949. La part des salariés monte avec les chocs pétroliers des années 1970, redescend au cours des années 1980, puis se stabilise. Le niveau actuel est un peu inférieur à celui d’avant 1974, et l’écart est faible quand on mesure la valeur ajoutée au coût des facteurs.',
      'La part des salaires nets, elle, se situe environ 10 points plus bas qu’au début des années 1980 : les cotisations et contributions sociales ont augmenté jusqu’au milieu des années 1990. Cet argent finance les retraites et la santé ; il n’est pas allé aux actionnaires.',
      'Le débat légitime porte ailleurs : sur l’usage des profits, sur la répartition entre très hauts et bas salaires, et sur le niveau récent des marges, encore supérieur à celui de 2019. Le taux de marge des entreprises françaises reste par ailleurs l’un des plus bas de l’Union européenne.'
    ],
    chiffres: [
      { valeur: '≈ 2/3', phrase: 'Part moyenne de long terme de la rémunération des salariés dans la valeur ajoutée des sociétés non financières (1949-2007). Elle baisse jusqu’en 1989, puis reste globalement stable.', source: 'Insee, Document de travail G2009/01, P.-A. Pionnier, mai 2009', url: INSEE_PVA_1949 },
      { valeur: '−10 points', phrase: 'Écart entre la part des salaires nets dans la valeur ajoutée des sociétés non financières et son niveau du début des années 1980, à cause de la hausse des cotisations.', source: 'Insee, Document de travail G2009/01, mai 2009', url: INSEE_PVA_1949 },
      { valeur: '34,3 % / 41,7 %', phrase: 'Taux de marge des sociétés non financières en 2021 : France contre moyenne de l’Union européenne. La France a le plus bas en 2009 comme en 2021.', source: 'Insee Références, Les entreprises en France, décembre 2023 (données Eurostat)', url: INSEE_PVA_UE }
    ],
    objection: {
      q: 'Pourtant les dividendes battent des records.',
      r: 'Les records concernent surtout les grands groupes cotés, et le partage des profits entre investissement et actionnaires est une vraie question. Le partage entre salaires et profits, lui, n’a pas bougé de façon continue depuis trente ans. Les deux débats sont distincts.'
    }
  },

  'immigration': {
    id: 'immigres-plus-diplomes', bord: 'gauche', verdict: 'plus-complique',
    exemple: 'Les immigrés sont plus diplômés que les Français',
    cliche: 'Les immigrés sont plus diplômés que la moyenne des Français.',
    variantes: ['les immigrés sont surdiplômés', 'l’immigration, ce sont surtout des diplômés', 'les nouveaux arrivants ont tous fait des études'],
    motscles: ['immigres', 'immigration', 'diplomes', 'diplome', 'qualifies', 'etudes', 'superieur', 'surdiplomes'],
    replique: 'C’est vrai pour les arrivées récentes : 52 % des immigrés de 25 ans ou plus entrés en France en 2023 sont diplômés du supérieur. Pour l’ensemble des immigrés qui vivent en France, le tableau est polarisé : autant de diplômés au-delà de bac + 2 que les personnes sans ascendance migratoire, mais près de trois fois plus de personnes sans diplôme ou avec le seul brevet.',
    developpement: [
      'L’Insee suit le diplôme des personnes à leur arrivée. La part de diplômés du supérieur parmi les arrivants de 25 ans ou plus est passée de 41 % en 2006 à 52 % en 2023, et la part sans diplôme de 30 % à 22 %.',
      'Les immigrés installés depuis longtemps sont arrivés à une autre époque, souvent pour des emplois peu qualifiés. Parmi les 15-64 ans en 2025, 34,4 % des immigrés ont au plus le brevet, contre 12,6 % des personnes sans ascendance migratoire, alors que la part de diplômés au-delà de bac + 2 est presque identique (29,8 % contre 29,2 %).',
      'Les deux images circulent, chacune avec un morceau de vérité : l’immigration récente est très qualifiée, la population immigrée dans son ensemble est plus souvent aux deux extrémités de l’échelle des diplômes.'
    ],
    chiffres: [
      { valeur: '52 %', phrase: 'Part des diplômés du supérieur parmi les immigrés de 25 ans ou plus entrés en France en 2023 (41 % en 2006).', source: 'Insee Première n° 2051, mai 2025', url: INSEE_IP2051 },
      { valeur: '34,4 % / 12,6 %', phrase: 'Part des 15-64 ans ayant terminé leurs études qui ont au plus le brevet en 2025 : immigrés contre personnes sans ascendance migratoire.', source: 'Insee, enquête Emploi, données annuelles 2025', url: INSEE_DIPLOMES },
      { valeur: '29,8 % / 29,2 %', phrase: 'Part des 15-64 ans ayant terminé leurs études qui sont diplômés au-delà de bac + 2 en 2025 : immigrés contre personnes sans ascendance migratoire.', source: 'Insee, enquête Emploi, données annuelles 2025', url: INSEE_DIPLOMES }
    ],
    objection: {
      q: 'Si les arrivants sont si diplômés, pourquoi tant d’immigrés font-ils des métiers peu qualifiés ?',
      r: 'La question est juste. Ces données de l’Insee mesurent le diplôme et ne disent pas s’il est reconnu sur le marché du travail français. Le déclassement des diplômés venus de l’étranger est un sujet à part entière, distinct du niveau d’études.'
    }
  },

  'services-publics': {
    id: 'suppression-fonctionnaires', bord: 'gauche', verdict: 'faux',
    exemple: 'On a supprimé massivement des fonctionnaires depuis 2017',
    cliche: 'Depuis 2017, on a supprimé massivement des fonctionnaires.',
    variantes: ['on casse la fonction publique', 'il y a de moins en moins d’agents publics', 'les suppressions de postes se multiplient', 'l’État supprime des fonctionnaires'],
    motscles: ['fonctionnaires', 'suppressions', 'postes', 'agents', 'fonction', 'publique', 'effectifs', 'contractuels', 'statut'],
    replique: 'Le nombre d’agents publics a augmenté : 5,66 millions fin 2017, 5,9 millions fin 2024. Ce qui recule, c’est le statut : la part des fonctionnaires titulaires est passée de 67,8 % à 63,8 %, et celle des contractuels de 17,9 % à 24,0 %.',
    developpement: [
      'L’Insee compte toutes les personnes employées par l’État, les collectivités et les hôpitaux publics. Les effectifs ont progressé presque chaque année, y compris en 2024 (+0,6 %). L’Insee précise que les niveaux de 2024 ne sont pas parfaitement comparables aux publications antérieures, ce qui n’efface pas l’ordre de grandeur.',
      'La transformation se joue sur la nature des emplois : en 2024, le nombre de fonctionnaires est quasi stable (−0,1 %), alors que celui des contractuels progresse de 2,6 %. La part des contractuels a gagné 7,6 points en dix ans.',
      'Le sentiment de manque peut être réel sans suppression nette : l’emploi public augmente moins vite que la population ou que les besoins dans certains services, et l’OCDE relève une baisse de la part de l’emploi public dans l’emploi total en France entre 2019 et 2023.'
    ],
    chiffres: [
      { valeur: '5,66 → 5,9 M', phrase: 'Agents de la fonction publique au 31 décembre 2017 (contrats aidés compris), puis au 31 décembre 2024.', source: 'Insee Première n° 1741 (mars 2019) et n° 2094 (février 2026)', url: INSEE_FP2024 },
      { valeur: '67,8 → 63,8 %', phrase: 'Part des fonctionnaires dans les effectifs de la fonction publique, fin 2017 puis fin 2024.', source: 'Insee Première n° 1741 et n° 2094', url: INSEE_FP2017 },
      { valeur: '+35 900', phrase: 'Hausse du nombre de contractuels en 2024 (+2,6 %), quand le nombre de fonctionnaires recule de 3 900.', source: 'Insee Première n° 2094, février 2026', url: INSEE_FP2024 }
    ],
    objection: {
      q: 'Dans mon hôpital, il manque du monde.',
      r: 'C’est tout à fait possible : un total national qui augmente peut cacher des services en sous-effectif, des postes vacants faute de candidats et des agents moins stables. Le constat juste est donc un changement de statut et une répartition inégale, plutôt qu’une suppression massive.'
    }
  },

  'logement': {
    id: 'logements-vacants', bord: 'ecologiste', verdict: 'plus-complique',
    exemple: 'Il suffirait d’occuper les logements vides',
    cliche: 'Pas besoin de construire : il suffirait de réquisitionner les logements vides.',
    variantes: ['il y a 3 millions de logements vides', 'réquisition des logements vacants', 'on a assez de logements, il faut juste les occuper', 'des logements vides et des gens à la rue'],
    motscles: ['logements', 'vacants', 'vides', 'requisition', 'requisitionner', 'construire', 'artificialisation', 'crise', 'logement'],
    replique: 'La France compte 2,9 millions de logements vacants, mais la plupart le sont pour peu de temps ou là où peu de gens cherchent à se loger. Les logements privés vides depuis au moins deux ans sont environ 1,1 million, dont 300 000 en zone tendue : une ressource réelle, loin de couvrir les besoins à elle seule.',
    developpement: [
      'L’Insee distingue deux vacances. La vacance « frictionnelle » correspond au temps où un logement est en vente ou à la location : elle est temporaire et nécessaire au marché. La vacance « structurelle » vient de logements dégradés, mal situés, bloqués par une succession ou un litige.',
      'La vacance est plus forte dans les espaces peu denses et les petites aires urbaines, et plus faible dans les grandes métropoles où la demande est la plus forte. Le taux de vacance national recule d’ailleurs depuis 2019.',
      'L’argument écologiste a une base solide : mobiliser l’existant évite de bétonner des terres. Les 300 000 logements durablement vides en zone tendue sont une piste sérieuse, que l’État poursuit avec un plan national depuis 2021. Mais une partie demande des travaux, et ce volume ne peut pas remplacer à lui seul la construction là où la demande est la plus forte.'
    ],
    chiffres: [
      { valeur: '2,9 millions', phrase: 'Logements vacants au 1er janvier 2026, soit 7,6 % du parc (hors Mayotte, données provisoires).', source: 'Insee Focus n° 388, 30 septembre 2026', url: 'https://www.insee.fr/fr/statistiques/9055697' },
      { valeur: '1,1 million', phrase: 'Logements du parc privé vacants depuis au moins deux ans, dont 300 000 en zone tendue (données LOVAC).', source: 'Ministère de la Transition écologique, Plan national de lutte contre les logements vacants, page mise à jour le 5 mai 2025', url: MTE_VACANTS },
      { valeur: '+60 %', phrase: 'Hausse du nombre de logements vacants entre 1990 et 2023, surtout dans les zones qui perdent des habitants.', source: 'Insee Première n° 1979, janvier 2024', url: INSEE_IP1979 }
    ],
    objection: {
      q: 'Même 300 000 logements, ce serait énorme.',
      r: 'Oui, et ce serait un apport réel dans les villes où l’on manque de logements. Il faut seulement savoir qu’une partie demande des travaux lourds ou bute sur des successions, ce qui prend du temps. La remise sur le marché et la construction sont complémentaires.'
    }
  },

  'ecole': {
    id: 'niveau-pas-baisse', bord: 'gauche', verdict: 'faux',
    exemple: 'Le niveau n’a pas baissé',
    cliche: 'Le niveau scolaire n’a pas baissé, c’est un vieux refrain.',
    variantes: ['le niveau monte', 'on dit ça à chaque génération', 'la baisse du niveau est un mythe', 'les élèves ne sont pas plus faibles qu’avant'],
    motscles: ['niveau', 'baisse', 'eleves', 'ecole', 'mythe', 'pisa', 'mathematiques', 'resultats', 'bac'],
    replique: 'Les mesures répétées montrent une baisse des acquis : en mathématiques, la part d’élèves de 15 ans en difficulté est passée de 16,6 % en 2003 à 28,8 % en 2022. Ce qui a monté, c’est l’accès aux diplômes : 79 % d’une génération obtient le bac en 2026, contre 65 % en 2010.',
    developpement: [
      'L’idée vient d’une observation juste : chaque génération accède plus longtemps à l’école et obtient davantage de diplômes. Mais un taux de bacheliers ne mesure pas ce que savent les élèves à un âge donné.',
      'Les évaluations qui posent les mêmes questions à des élèves de même âge, à des années d’écart, vont dans le même sens. En mathématiques, PISA mesure une hausse continue des élèves sous le niveau de base depuis 2003. En sciences, la France se situe sous la moyenne des pays de l’OCDE et de l’UE dans TIMSS 2023, quel que soit le domaine.',
      'Le tableau récent est plus nuancé : dans les évaluations nationales de CP et de CE1, les résultats sont stables ou en légère hausse entre 2019 et 2025. La baisse est donc réelle sur la durée, sans être une chute continue à tous les âges.'
    ],
    chiffres: [
      { valeur: '16,6 → 28,8 %', phrase: 'Part des élèves de 15 ans en France dont la maîtrise en culture mathématique est insuffisante, PISA 2003 puis PISA 2022 (22,4 % en 2012).', source: 'DEPP, L’Éducation nationale en chiffres 2026', url: DEPP_ENC2026 },
      { valeur: '65,0 → 79,0 %', phrase: 'Part d’une génération qui obtient le baccalauréat, en 2010 puis en 2026 (données 2026 provisoires).', source: 'DEPP, L’Éducation nationale en chiffres 2026', url: DEPP_ENC2026 },
      { valeur: '55,2 → 63,2 %', phrase: 'Part des élèves de début de CE1 qui maîtrisent la soustraction de façon satisfaisante, en 2020 puis en 2025.', source: 'DEPP, L’Éducation nationale en chiffres 2026', url: DEPP_ENC2026 }
    ],
    objection: {
      q: 'Dire que le niveau baisse, c’est accuser les élèves ou les profs.',
      r: 'Le constat ne désigne aucun coupable. Il oblige à chercher les causes : heures d’enseignement, formation des enseignants, inégalités sociales, conditions d’étude. Nier la baisse empêche justement d’en discuter.'
    }
  },

  'retraites': {
    id: 'deficit-invente', bord: 'gauche', verdict: 'faux',
    exemple: 'Le déficit des retraites est inventé',
    cliche: 'Le déficit des retraites est inventé pour justifier les réformes.',
    variantes: ['il n’y a pas de problème de financement des retraites', 'le déficit est un mensonge', 'les caisses de retraite sont pleines', 'le COR noircit le tableau'],
    motscles: ['retraites', 'deficit', 'invente', 'mensonge', 'cor', 'financement', 'reforme', 'caisses', 'equilibre'],
    replique: 'Le Conseil d’orientation des retraites mesure un déficit de 5,1 milliards d’euros en 2025, soit 0,2 point de PIB, et le projette durablement sur toute la période, jusqu’à 2,4 points en 2070. Le déficit est modeste aujourd’hui ; il n’est pas inventé.',
    developpement: [
      'Il y a une part juste dans l’idée : le niveau du déficit dépend de choix politiques. Sur 417 milliards d’euros de ressources en 2025, seuls 277 milliards viennent des cotisations ; le reste correspond à des transferts de l’État ou d’autres organismes, que le gouvernement et le Parlement fixent. Le COR rappelle par exemple que la Cour des comptes estime que la compensation des allègements de cotisations a fait perdre 2,2 milliards d’euros à la branche vieillesse en 2024.',
      'Mais ces choix de comptabilité ne font pas disparaître le problème. Dans les projections du COR, les ressources passeraient de 13,9 % du PIB en 2025 à 12,9 % en 2070, et le système resterait en besoin de financement dans l’ensemble des scénarios étudiés.',
      'Pour revenir à l’équilibre, le COR présente trois leviers : baisser les pensions, augmenter les cotisations ou reculer l’âge de départ. Le choix entre eux est politique ; l’existence d’un écart à combler, elle, ne l’est pas.'
    ],
    chiffres: [
      { valeur: '−5,1 Md€', phrase: 'Solde du système de retraite en 2025, soit −0,2 % du PIB. Il atteindrait −0,9 % en 2045 et −2,4 % en 2070.', source: 'COR, rapport annuel de juin 2026, synthèse', url: COR_SYNTH },
      { valeur: '277 / 417 Md€', phrase: 'Part des ressources du système de retraite qui vient des cotisations sur les revenus d’activité en 2025 : près des deux tiers. Le reste dépend de transferts décidés par l’État.', source: 'COR, rapport annuel de juin 2026, synthèse', url: COR_SYNTH },
      { valeur: '1,8 Md€', phrase: 'Coût en année pleine de la suspension de la réforme de 2023, jusqu’en 2032, intégré aux projections.', source: 'COR, rapport annuel de juin 2026, synthèse', url: COR_SYNTH }
    ],
    objection: {
      q: 'Il suffirait d’augmenter les cotisations des entreprises.',
      r: 'C’est un des leviers que le COR examine. Selon les modèles qu’il a réunis, une hausse de 6 milliards d’euros des cotisations employeurs améliore le solde, avec un effet négatif sur l’emploi estimé entre 15 000 et 80 000 postes à long terme. Chaque levier a un coût ; c’est sur ce choix que porte le débat.'
    }
  },

  'securite': {
    id: 'delinquance-baisse-partout', bord: 'gauche', verdict: 'faux',
    exemple: 'La délinquance baisse partout',
    cliche: 'La délinquance baisse partout, l’insécurité est un fantasme.',
    variantes: ['l’insécurité est un fantasme', 'il n’y a jamais eu aussi peu de crimes', 'le sentiment d’insécurité est fabriqué par les médias', 'tout baisse'],
    motscles: ['delinquance', 'baisse', 'insecurite', 'fantasme', 'crimes', 'violences', 'chiffres', 'sentiment'],
    replique: 'Les atteintes aux biens reculent en 2025 : cambriolages −3 %, vols de véhicules −9 %, vols avec armes −8 %. Les atteintes aux personnes enregistrées, elles, augmentent : violences physiques +5 %, violences sexuelles +8 %, tentatives d’homicide +4 %, après +8 % par an en moyenne depuis 2016.',
    developpement: [
      'Le bilan du service statistique du ministère de l’Intérieur suit 18 indicateurs. Il décrit lui-même des évolutions « assez contrastées » en 2025 : les vols et cambriolages baissent, les violences contre les personnes montent.',
      'Ces chiffres portent sur les faits enregistrés par la police et la gendarmerie. Une partie de la hausse des violences, en particulier sexuelles et intrafamiliales, peut venir de plaintes plus fréquentes, ce qui est en soi un progrès. C’est l’argument le plus solide de celles et ceux qui relativisent les hausses.',
      'Le nombre de victimes d’homicide, 975 en 2025, est stable sur un an. La réalité est donc mélangée : ni explosion générale, ni baisse partout.'
    ],
    chiffres: [
      { valeur: '+8 %', phrase: 'Hausse des violences sexuelles enregistrées en 2025 (+9 % pour les viols et tentatives de viol).', source: 'SSMSI, Insécurité et délinquance en 2025, 9 juillet 2026', url: SSMSI_BILAN },
      { valeur: '+8 %/an', phrase: 'Progression annuelle moyenne des tentatives d’homicide enregistrées depuis 2016 (+4 % en 2025).', source: 'SSMSI, Insécurité et délinquance en 2025, 9 juillet 2026', url: SSMSI_BILAN },
      { valeur: '−3 %', phrase: 'Baisse des cambriolages de logement en 2025. Les vols de véhicules et dans les véhicules reculent de 9 %.', source: 'SSMSI, Insécurité et délinquance en 2025, 9 juillet 2026', url: SSMSI_BILAN }
    ],
    objection: {
      q: 'Si les violences augmentent, c’est seulement parce qu’on porte plus plainte.',
      r: 'C’est une partie de l’explication, surtout pour les violences sexuelles et conjugales. Les enquêtes de victimation du ministère permettent de le vérifier, catégorie par catégorie. Mais on ne peut pas en conclure que tout baisse : les chiffres disponibles ne le montrent pas.'
    }
  },

  'laicite-islam': {
    id: 'aucun-culte-finance', bord: 'gauche', verdict: 'vrai-en-partie',
    exemple: 'La République ne finance aucun culte',
    cliche: 'Depuis 1905, la République ne finance plus aucun culte, nulle part.',
    variantes: ['la loi de 1905 interdit tout argent public pour les religions', 'l’État ne paie aucun prêtre', 'zéro euro public pour les cultes', 'la laïcité, c’est zéro financement'],
    motscles: ['1905', 'laicite', 'financement', 'cultes', 'subvention', 'concordat', 'alsace', 'moselle', 'pretres', 'aumonerie'],
    replique: 'L’article 2 de la loi de 1905 pose bien le principe : « La République ne reconnaît, ne salarie ni ne subventionne aucun culte. » Mais la même loi prévoit des exceptions, et en Alsace-Moselle l’État rémunère encore 1 144 ministres du culte, un régime validé par le Conseil constitutionnel en 2013.',
    developpement: [
      'Le principe de 1905 est clair, et il reste la règle générale. Le même article autorise pourtant les budgets publics à payer des services d’aumônerie dans les « lycées, collèges, écoles, hospices, asiles et prisons », pour y assurer le libre exercice des cultes.',
      'L’article 13 permet aussi à l’État, aux départements, aux communes et à leurs groupements de payer « l’entretien et la conservation des édifices du culte » dont la loi leur reconnaît la propriété.',
      'Enfin, la loi de 1905 ne s’applique pas en Alsace-Moselle, où un régime local des cultes est resté en vigueur. Les ministres des cultes catholique, protestants et israélite y sont rémunérés par l’État. Le Conseil constitutionnel a jugé en 2013 que la Constitution n’avait pas entendu remettre en cause ce régime. Le culte musulman ne fait pas partie des cultes ainsi rémunérés.'
    ],
    chiffres: [
      { valeur: '1 144', phrase: 'Ministres du culte rémunérés par l’État en Alsace-Moselle au 31 décembre 2022 : 876 catholiques, 245 protestants, 23 israélites.', source: 'Ministère de l’Intérieur, réponse à la question écrite n° 7183, JO du 31 octobre 2023', url: AN_QE7183 },
      { valeur: 'Art. 2', phrase: 'La loi de 1905 autorise les budgets publics à financer des services d’aumônerie dans les établissements publics (écoles, hôpitaux, prisons).', source: 'Loi du 9 décembre 1905, article 2, Légifrance', url: LOI_1905_ART2 },
      { valeur: '2013', phrase: 'Le Conseil constitutionnel juge conforme la rémunération des pasteurs en Alsace-Moselle : la laïcité de la Constitution ne visait pas à remettre en cause ce régime local.', source: 'Conseil constitutionnel, décision n° 2012-297 QPC du 21 février 2013', url: CC_2012_297 }
    ],
    objection: {
      q: 'Ces exceptions sont des restes du passé, sans importance.',
      r: 'Elles sont inscrites dans la loi elle-même et concernent trois départements entiers. Elles comptent aussi dans le débat sur l’égalité entre les cultes, puisque le régime d’Alsace-Moselle ne rémunère pas de ministres du culte musulman.'
    }
  },

  'quartiers-outre-mer': {
    id: 'etat-rien-fait-quartiers', bord: 'gauche', verdict: 'plus-complique',
    exemple: 'L’État n’a rien fait pour les quartiers',
    cliche: 'L’État a abandonné les quartiers, il n’a rien fait pour eux.',
    variantes: ['les banlieues sont abandonnées', 'aucun investissement dans les cités', 'l’État a laissé tomber les quartiers populaires'],
    motscles: ['quartiers', 'banlieues', 'cites', 'abandon', 'etat', 'anru', 'renovation', 'npnru', 'politique', 'ville'],
    replique: 'La rénovation urbaine a mobilisé près de 100 milliards d’euros en trente ans dans les quartiers prioritaires. Mais moins de 3 % de cette somme vient du budget de l’État : l’essentiel est apporté par Action Logement et les bailleurs sociaux, et l’État verse sa part en retard.',
    developpement: [
      'Depuis 2004, deux programmes nationaux ont transformé des centaines de quartiers : démolitions, reconstructions, réhabilitations, équipements. Le second programme, lancé en 2014, concerne 448 quartiers et prévoit notamment 115 000 logements sociaux démolis et 146 000 réhabilités.',
      'Le financement passe surtout par d’autres acteurs. Dans ce second programme, Action Logement, financé par une contribution des employeurs, porte 66,5 % des subventions et les bailleurs sociaux 22,4 %. La part de l’État est de 10 %, soit 1,2 milliard d’euros, et 2,4 % en comptant les financements indirects.',
      'Selon la direction du budget, citée par le Sénat, l’État aurait versé fin 2026 seulement 22,5 % de sa contribution, contre 43 % pour Action Logement et 52,3 % pour les bailleurs sociaux. Dire que rien n’a été fait est inexact ; dire que l’État a tenu ses engagements financiers l’est aussi.'
    ],
    chiffres: [
      { valeur: '≈ 100 Md€', phrase: 'Fonds mobilisés en trente ans par les deux programmes de rénovation urbaine, dont moins de 3 % de crédits budgétaires de l’État.', source: 'Sénat, commission des finances, contrôle de Sophie Primas sur le renouvellement urbain, 13 mai 2026', url: SENAT_NPNRU_2026 },
      { valeur: '10 %', phrase: 'Part de l’État dans les subventions du nouveau programme de renouvellement urbain (1,2 milliard d’euros). Action Logement en porte 66,5 %.', source: 'Sénat, commission des finances, 13 mai 2026 (données DGCL)', url: SENAT_NPNRU_2026 },
      { valeur: '22,5 %', phrase: 'Part de sa contribution que l’État aurait versée fin 2026, contre 43 % pour Action Logement et 52,3 % pour les bailleurs sociaux.', source: 'Sénat, commission des finances, 13 mai 2026 (estimation de la direction du budget)', url: SENAT_NPNRU_2026 }
    ],
    objection: {
      q: 'Rénover des immeubles ne règle pas la vie des habitants.',
      r: 'C’est une critique sérieuse, que les évaluations reprennent en partie : selon la synthèse publiée par la DGCL en 2024, la rénovation a transformé l’espace urbain mais peine encore à changer l’image des quartiers. L’emploi, l’école et les services publics relèvent d’autres politiques, dont les moyens se discutent à part.'
    }
  }
};
