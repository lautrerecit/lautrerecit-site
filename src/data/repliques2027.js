/* Chiffres relevés le 29 octobre 2026, tous vérifiés sur leur source primaire le 29 octobre 2026.
   verifier: true = chiffre pas encore confirmé sur sa source d’origine ; signalé sur la page et bloqué pour le partage. */
import { autreBord } from './autreBord2027.js';
const INSEE_PRIX = 'https://www.insee.fr/fr/statistiques/serie/011814162';
const DREES_MS = 'https://www.drees.solidarites-sante.gouv.fr/sites/default/files/2025-12/MS2025%20-%20Fiche%2007%20-%20Les%20d%C3%A9penses%20d%27allocations.pdf';
const OCDE_FP = 'https://www.oecd.org/en/publications/international-migration-outlook-2021_29f23e9d-en/full-report/component-8.html';
const INSEE_SAL = 'https://www.insee.fr/fr/statistiques/9087193';
const EUROSTAT_ASILE = 'https://ec.europa.eu/eurostat/databrowser/view/migr_asyappctza/default/table';
const DGEF = 'https://www.immigration.interieur.gouv.fr/documentation/etudes-et-statistiques/titres-de-sejour-en-2025-protections-subsidiaires-ont-plus-que-double.html';
const OFPRA = 'https://www.ofpra.gouv.fr/sites/default/files/2026-07/Rapport%20d%27activit%C3%A9%202025%20Ofpra.pdf';
const CEPII_347 = 'https://www.cepii.fr/PDF_PUB/lettre/2014/let347.pdf';
const INSEE_TEO_RELIGION = 'https://www.insee.fr/fr/statistiques/6793308';
const INSEE_IP1911 = 'https://www.insee.fr/fr/statistiques/6473349';
const INTERIEUR_ACTES_2025 = 'https://www.prefectures-regions.gouv.fr/ile-de-france/irecontenu/telechargement/139847/1018971/file/Bilan_actes_anti_religieux_2025.pdf';
const CNCDH_2025 = 'https://www.cncdh.fr/sites/default/files/2026-06/CNCDH_Rapport%20racisme%202025.pdf';
const COR_SYNTH = 'https://www.cor-retraites.fr/sites/default/files/2026-06/Synth%C3%A8se_RA_2026.pdf';
const COR_RA = 'https://www.cor-retraites.fr/sites/default/files/2026-07/RA_2026_def_0.pdf';
const SSMSI_BILAN = 'https://statistiques.interieur.gouv.fr/ssmsi/publications/insecurite-et-delinquance-en-2025-bilan-statistique-et-atlas-departemental';
const SSMSI_VRS = 'https://statistiques.interieur.gouv.fr/ssmsi/files/ssmsi/2026-10/SSMSI_VRS_2026.pdf';
const BDF_DEPENSE = 'https://www.banque-france.fr/fr/publications-et-statistiques/publications/ou-la-france-depense-t-elle-davantage-que-ses-voisins-de-la-zone-euro';
const OCDE_PISA_FR = 'https://www.oecd.org/en/publications/pisa-2022-results-volume-i-and-ii-country-notes_ed6fbcc5-en/france_8008535b-en.html';
const CC_PRIVE = 'https://www.vie-publique.fr/files/rapport/pdf/289657.pdf';
const ANCOLS_2025 = 'https://www.ancols.fr/publications/statistiques-etudes/les-attributions-de-logements-sociaux1';
const SENAT_PLF26_LOGEMENT = 'https://www.senat.fr/rap/l25-139-35-1/l25-139-35-1-syn.pdf';
const SENAT_OM_2026 = 'https://www.senat.fr/rap/a25-140-4/a25-140-41.pdf';
const CEPII_META = 'https://www.cepii.fr/PDF_PUB/wp/2025/wp2025-07.pdf';

export const enjeux = [
  {
    id: 'vie-chere', titre: 'Vie chère', statut: 'actif', visuel: 'caddie',
    question: 'Pourquoi tout augmente, et qui en profite ?',
    intro: 'Depuis 2017, les prix ont augmenté de près d’un cinquième, et ceux de l’alimentation de près d’un tiers. Sur la même période, les marges de plusieurs maillons de la chaîne alimentaire ont progressé, et les ménages les plus modestes consacrent une part croissante de leurs revenus au logement.',
    etat: [
      { valeur: '+31,1 %', phrase: 'Hausse des prix de l’alimentation entre 2017 et 2025 (ensemble des prix : +19,5 %).', source: 'Insee, indices annuels des prix à la consommation, base 2025, calcul L’Autre Récit', url: INSEE_PRIX },
      { valeur: '+21,3 %', phrase: 'Hausse des prix de l’énergie sur un an en septembre 2026. L’inflation totale remonte à 3,1 %.', source: 'Insee, Informations rapides n° 247, 15 octobre 2026', url: 'https://www.insee.fr/fr/statistiques/9080209' },
      { valeur: '28,5 → 31,2 %', phrase: 'Taux de marge de l’industrie agroalimentaire entre 2019 et 2022.', source: 'Insee Première n° 2018', url: 'https://www.insee.fr/fr/statistiques/8260922' },
      { valeur: '32,1 %', phrase: 'Part des revenus que le quart le plus modeste des ménages consacre au logement, aides déduites. Elle augmente en dix ans, quand elle baisse pour l’ensemble des ménages.', source: 'Insee Première n° 2128, 23 septembre 2026', url: 'https://www.insee.fr/fr/statistiques/9053584' }
    ],
    cliches: [
      {
        id: 'assistes', visuel: 'balance', exemple: 'C’est à cause des assistés',
        cliche: 'La vie chère, c’est à cause des assistés et des aides sociales.',
        variantes: ['les assistés coûtent trop cher', 'trop d’aides sociales', 'le RSA ruine le pays', 'on paie pour ceux qui ne travaillent pas', 'les allocs'],
        motscles: ['assistanat', 'assistes', 'aides', 'allocations', 'rsa', 'chomeurs', 'profiteurs', 'impots', 'taxes'],
        replique: 'L’ensemble des minima sociaux, RSA compris, pèse 1,1 % du PIB, et un tiers des foyers qui ont droit au RSA ne le demandent même pas. Pendant ce temps, l’alimentation a pris 31 % depuis 2017.',
        developpement: [
          'Les minima sociaux sont les aides visées quand on parle d’« assistés » : RSA, minimum vieillesse, allocation adulte handicapé. Ils représentent 31,6 milliards d’euros en 2023, soit 2 % des dépenses publiques, et leur poids baisse depuis trois ans en euros constants.',
          'La hausse des prix, elle, se lit dans les comptes des entreprises de la chaîne alimentaire : marges de l’industrie agroalimentaire en hausse entre 2019 et 2022, rentabilité des grossistes au plus haut en 2024.'
        ],
        chiffres: [
          { valeur: '1,1 % du PIB', phrase: 'Poids de l’ensemble des minima sociaux en 2023 (31,6 milliards d’euros).', source: 'DREES, Minima sociaux et prestations de solidarité, édition 2025', url: DREES_MS },
          { valeur: '33 à 37 %', phrase: 'Part des foyers éligibles au RSA qui ne le percevaient pas fin 2021, soit environ 560 000 foyers.', source: 'DREES, Études et résultats n° 1370, mai 2026', url: 'https://drees.solidarites-sante.gouv.fr/publications-communique-de-presse/etudes-et-resultats/260506-non-recours-au-rsa-fin-2021' },
          { valeur: '549 €', phrase: 'Montant moyen du RSA versé par allocataire et par mois en 2023.', source: 'DREES, Minima sociaux et prestations de solidarité, édition 2025', url: DREES_MS }
        ],
        objection: {
          q: 'Mais les aides sociales, au total, ça fait des centaines de milliards.',
          r: 'Ce total englobe toute la protection sociale, dont les retraites et l’assurance maladie forment l’essentiel. Les minima sociaux, ceux qu’on vise en parlant d’« assistés », pèsent 2 % des dépenses publiques.'
        }
      },
      {
        id: 'immigres-coutent', exemple: 'Les immigrés nous coûtent cher',
        cliche: 'Les immigrés coûtent cher et plombent les comptes publics.',
        variantes: ['l’immigration coûte trop cher', 'les étrangers coûtent', 'les migrants ruinent la France', 'on paie pour les immigrés'],
        motscles: ['immigres', 'immigration', 'etrangers', 'migrants', 'cout', 'coutent', 'cher', 'budget', 'finances', 'dette'],
        replique: 'D’après l’OCDE, dans la plupart des pays, ce que les immigrés versent et ce qu’ils reçoivent s’équilibre à 1 % du PIB près, dans un sens ou dans l’autre. Rien là-dedans n’explique le prix de vos courses.',
        developpement: [
          'L’OCDE a comparé, sur 2006-2018, les impôts et cotisations payés par les immigrés avec les dépenses publiques dont ils bénéficient. Pour la France, le résultat dépend de la façon de compter : positif si l’on s’en tient aux dépenses versées à chaque personne (prestations, éducation, santé), négatif si l’on leur attribue aussi une part de la défense ou de la charge de la dette. Dans ce second calcul, le solde des natifs est lui aussi négatif, à cause des déficits publics de la période.',
          'Dans les deux cas, l’ordre de grandeur reste inférieur à 1 % du PIB. Le Conseil d’analyse économique parle d’un impact budgétaire « relativement faible ».'
        ],
        chiffres: [
          { valeur: '−1 % à +1 %', phrase: 'Contribution budgétaire nette des immigrés dans la plupart des pays de l’OCDE, en part du PIB.', source: 'OCDE, Perspectives des migrations internationales 2021, chapitre 4', url: 'https://www.oecd.org/fr/publications/perspectives-des-migrations-internationales-2021_da2bbd99-fr' },
          { valeur: '+1,02 % du PIB', phrase: 'Solde des immigrés en France sans compter aucun bien public (moyenne 2006-2018).', source: 'OCDE, Perspectives des migrations internationales 2021, tableau 4.1', url: OCDE_FP },
          { valeur: '−0,85 % du PIB', phrase: 'Même solde en leur imputant une part des biens publics (défense, dette…). Dans ce calcul, les natifs sont à −3,25 %.', source: 'OCDE, Perspectives des migrations internationales 2021, tableau 4.1', url: OCDE_FP }
        ],
        objection: {
          q: 'L’OCDE elle-même dit que le solde est négatif.',
          r: 'Seulement si l’on attribue aux immigrés une part de dépenses comme l’armée ou la dette. Dans ce même calcul, les natifs sont eux aussi en négatif, à −3,25 % du PIB, parce que l’État était en déficit. Les deux chiffres sont publiés côte à côte, et aucun ne dépasse 1 % du PIB.'
        }
      }
    ]
  },
  {
    id: 'salaires', titre: 'Salaires', statut: 'actif',
    question: 'Peut-on vivre de son travail en 2027 ?',
    intro: 'En 2025, le salaire moyen du privé, une fois l’inflation déduite, est exactement au niveau de 2021. Sur la même période, le taux de marge des entreprises s’est maintenu, et les aides publiques qu’elles reçoivent dépassent 200 milliards d’euros par an selon le Sénat.',
    etat: [
      { visuel: 'egal', valeur: '0 %', phrase: 'Évolution du salaire net moyen du privé entre 2021 et 2025, en euros constants.', source: 'Insee Première n° 2132, 22 octobre 2026', url: INSEE_SAL },
      { valeur: '+0,2 %/an', phrase: 'Progression du pouvoir d’achat du salaire net moyen entre 2019 et 2025.', source: 'Insee Première n° 2132, 22 octobre 2026', url: INSEE_SAL },
      { valeur: '2 238 €', phrase: 'Salaire net médian à temps plein dans le privé en 2025 : la moitié des salariés gagne moins.', source: 'Insee Première n° 2132, 22 octobre 2026', url: INSEE_SAL },
      { valeur: '12,8 %', phrase: 'Écart de salaire moyen entre femmes et hommes à temps de travail identique, en 2025.', source: 'Insee Première n° 2132, 22 octobre 2026', url: INSEE_SAL }
    ],
    cliches: [
      {
        id: 'entreprises-coulent', exemple: 'Augmenter les salaires tuerait les entreprises',
        cliche: 'On ne peut pas augmenter les salaires, sinon les entreprises coulent.',
        variantes: ['augmenter le smic tue l’emploi', 'les entreprises n’ont pas les moyens', 'les patrons ne peuvent pas payer plus', 'hausse des salaires faillite'],
        motscles: ['salaires', 'smic', 'augmenter', 'augmentation', 'entreprises', 'patrons', 'faillite', 'emploi', 'charges', 'couler'],
        replique: 'Les entreprises gardent 31,5 % de la richesse qu’elles produisent, et l’État leur verse au moins 211 milliards d’euros d’aides par an. L’argent existe, la question est de savoir où il va.',
        developpement: [
          'Le taux de marge des sociétés non financières mesure la part de la valeur ajoutée qui reste à l’entreprise une fois les salaires et cotisations payés. Il se maintient à 31,5 % mi-2026.',
          'Une partie de ces aides sert déjà à rendre les bas salaires moins chers pour l’employeur : les allègements de cotisations ont presque quadruplé en dix ans. Leur effet sur les salaires eux-mêmes est l’un des débats de la campagne.'
        ],
        chiffres: [
          { valeur: '211 Md€', phrase: 'Montant minimal des aides publiques aux entreprises en 2023, selon une commission d’enquête du Sénat. L’État avance un chiffre plus bas, 187 milliards.', source: 'Sénat, rapport n° 808 (2024-2025), 1er juillet 2025', url: 'https://www.senat.fr/notice-rapport/2024/r24-808-1-notice.html' },
          { valeur: '77,3 Md€', phrase: 'Coût des allègements généraux de cotisations patronales en 2024, près de quatre fois plus qu’en 2014.', source: 'Cour des comptes, RALFSS 2025, 26 mai 2025', url: 'https://www.ccomptes.fr/sites/default/files/2025-05/20250526-RALFSS-2025-Maitriser-dynamique-allegements-generaux-de-cotisations-sociales.pdf' },
          { valeur: '≈ 108 Md€', phrase: 'Sommes rendues aux actionnaires par les entreprises du CAC 40 en 2025, un record : 72,8 Md€ de dividendes et 34,8 Md€ de rachats d’actions.', source: 'La Lettre Vernimmen n° 233, janvier 2026', url: 'https://www.vernimmen.net/Lire/Lettre_Vernimmen/Lettre_233.html' }
        ],
        objection: {
          q: 'Les petites entreprises, elles, ne sont pas le CAC 40.',
          r: 'C’est vrai, et la situation d’une boulangerie n’a rien à voir avec celle d’un grand groupe. Le débat porte justement sur le ciblage des aides, et sur la part des profits des grands groupes qui part aux actionnaires plutôt qu’aux salaires.'
        }
      },
      {
        id: 'immigres-salaires', exemple: 'Les immigrés font baisser les salaires',
        cliche: 'Les immigrés tirent les salaires vers le bas.',
        variantes: ['les immigrés font baisser les salaires', 'les étrangers cassent les prix du travail', 'dumping social'],
        motscles: ['immigres', 'immigration', 'etrangers', 'salaires', 'baisser', 'baisse', 'dumping'],
        replique: 'En France, entre 1990 et 2010, l’immigration n’a eu aucun effet global sur les salaires des natifs. À l’échelle internationale, 88 études arrivent au même résultat : un effet moyen centré sur zéro.',
        developpement: [
          'L’étude du CEPII sur la France distingue selon la qualification : léger recul pour les plus qualifiés, légère hausse pour les moins qualifiés, et un effet global nul.',
          'Les immigrés occupent surtout des métiers mal payés et en tension : près de quatre employés de maison sur dix, plus d’un agent de gardiennage et de sécurité sur quatre.'
        ],
        chiffres: [
          { valeur: 'Effet nul', phrase: 'Effet global de l’immigration sur les salaires des natifs en France entre 1990 et 2010.', source: 'CEPII, La Lettre n° 347, Edo et Toubal, septembre 2014', url: CEPII_347 },
          { valeur: '88 études', phrase: 'Méta-analyse internationale (1985-2023, 2 992 estimations) : effet moyen sur les salaires des natifs centré sur zéro.', source: 'CEPII, Working Paper n° 2025-07, mai 2025', url: CEPII_META },
          { valeur: '38,8 %', phrase: 'Part d’immigrés parmi les employés de maison (agents de gardiennage et de sécurité : 28,4 %).', source: 'Dares Analyses n° 36, juillet 2021, données 2017', url: 'https://dares.travail-emploi.gouv.fr/sites/default/files/64017dcc9891b3111610af49187ef5e0/Dares-Analyses_Les%20m%C3%A9tiers%20des%20immigr%C3%A9s.pdf' }
        ],
        objection: {
          q: 'Sans eux, les patrons seraient obligés d’augmenter les salaires.',
          r: 'C’est l’argument le plus sérieux. Sur les salaires, l’effet global mesuré en France est nul. Le CEPII observe en revanche un effet sur l’emploi des natifs de même qualification : quand la part d’immigrés augmente de 10 % dans une catégorie, leur taux d’emploi recule d’environ 3 %. Le débat est réel, mais il porte sur des métiers précis, pas sur l’ensemble des salaires.'
        }
      }
    ]
  },
  {
    id: 'immigration', titre: 'Immigration', statut: 'actif',
    question: 'Combien, pourquoi, et à quel coût réel ?',
    intro: 'La France compte 8 millions d’immigrés, soit 11,6 % de sa population. Rapportée aux autres pays européens, elle se situe dans la moyenne, et les études sont le premier motif des premiers titres de séjour délivrés.',
    etat: [
      { valeur: '11,6 %', phrase: 'Part des immigrés dans la population en 2025, soit 8,0 millions de personnes (chiffre provisoire).', source: 'Insee, Population immigrée et étrangère en France, 4 juin 2026', url: 'https://www.insee.fr/fr/statistiques/2381757' },
      { valeur: '15e sur 26', phrase: 'Rang de la France parmi les pays de l’UE dont Eurostat publie la donnée, pour la part d’habitants nés à l’étranger : 14,0 %, contre 14,3 % en moyenne. Ce chiffre compte aussi les Français nés à l’étranger, d’où l’écart avec les 11,6 % d’immigrés.', source: 'Eurostat, migr_pop3ctb, 1er janvier 2025, calcul L’Autre Récit', url: 'https://ec.europa.eu/eurostat/databrowser/view/migr_pop3ctb/default/table' },
      { valeur: '377 462', phrase: 'Premiers titres de séjour délivrés en 2025 à des ressortissants de pays tiers (chiffre provisoire). Les études en sont le premier motif (116 835).', source: 'Ministère de l’Intérieur (DGEF), 30 juin 2026', url: DGEF },
      { valeur: '41,2 %', phrase: 'Taux d’admission à l’Ofpra en première instance en 2025. 145 270 demandes ont été déposées, réexamens inclus.', source: 'Ofpra, rapport d’activité 2025', url: OFPRA }
    ],
    cliches: [
      {
        id: 'appel-air', exemple: 'La France accueille plus que tout le monde',
        cliche: 'La France accueille plus que tout le monde, c’est l’appel d’air.',
        variantes: ['on accueille toute la misère du monde', 'submersion migratoire', 'invasion', 'grand remplacement', 'la France est trop généreuse', 'appel d’air'],
        motscles: ['accueille', 'accueil', 'appel', 'air', 'submersion', 'invasion', 'remplacement', 'trop', 'migrants', 'asile', 'misere', 'monde', 'genereuse'],
        replique: 'Rapportée à sa population, la France est 9e de l’Union européenne pour les demandes d’asile, et pile dans la moyenne pour la part d’habitants nés à l’étranger. La Grèce reçoit trois fois plus de demandeurs d’asile par habitant.',
        developpement: [
          'En 2025, la France enregistre 169 premières demandes d’asile pour 100 000 habitants, contre 149 en moyenne dans l’UE. La Grèce, Chypre et l’Espagne sont loin devant.',
          'Parmi les premiers titres de séjour délivrés en 2025, près d’un sur trois l’est pour des études.'
        ],
        chiffres: [
          { valeur: '9e sur 27', phrase: 'Rang de la France dans l’UE pour les premières demandes d’asile rapportées à la population, en 2025.', source: 'Eurostat, migr_asyappctza et demo_gind, calcul L’Autre Récit', url: EUROSTAT_ASILE },
          { valeur: '169 / 100 000', phrase: 'Premières demandes d’asile pour 100 000 habitants en France (Grèce : 534 ; moyenne UE : 149).', source: 'Eurostat, migr_asyappctza et demo_gind, calcul L’Autre Récit', url: EUROSTAT_ASILE },
          { valeur: '31 %', phrase: 'Part des premiers titres de séjour délivrés pour études en 2025 (chiffre provisoire).', source: 'Ministère de l’Intérieur (DGEF), 30 juin 2026', url: DGEF }
        ],
        objection: {
          q: 'Mais en nombre, on est parmi les premiers.',
          r: 'En nombre brut, la France est 4e, derrière l’Espagne, l’Italie et l’Allemagne, ce qui s’explique par sa population, l’une des plus nombreuses de l’Union. Seule la comparaison par habitant dit quelque chose de l’effort réel.'
        }
      },
      {
        id: 'aides-sociales', exemple: 'Ils viennent pour les aides',
        cliche: 'Les immigrés viennent pour profiter des aides sociales.',
        variantes: ['ils viennent pour les allocs', 'ils touchent le RSA en arrivant', 'tourisme social', 'l’AME c’est des soins gratuits pour les clandestins', 'ils ne travaillent pas'],
        motscles: ['aides', 'allocs', 'allocations', 'rsa', 'ame', 'profiter', 'profitent', 'soins', 'gratuits', 'clandestins', 'sans', 'papiers', 'travaillent', 'social'],
        replique: 'Pour toucher le RSA, un étranger hors Union européenne doit avoir depuis au moins cinq ans un titre de séjour qui l’autorise à travailler. Et 62 % des immigrés de 15 à 64 ans ont un emploi.',
        developpement: [
          'La condition des cinq ans est inscrite dans le Code de l’action sociale et des familles. D’autres étrangers y ont droit sans ce délai : réfugiés, bénéficiaires de la protection subsidiaire, apatrides et titulaires d’une carte de résident. Elle ne s’applique pas non plus aux Algériens, en vertu de l’accord franco-algérien.',
          'Le taux d’emploi des immigrés reste plus faible que celui des personnes sans ascendance migratoire, et leur taux de chômage presque deux fois plus élevé : 12,4 % contre 6,5 % en 2025 (Insee, enquête Emploi).'
        ],
        chiffres: [
          { valeur: '5 ans', phrase: 'Durée minimale de titre de séjour autorisant à travailler pour qu’un étranger hors UE puisse toucher le RSA.', source: 'CASF, art. L262-4 ; Service-public.fr', url: 'https://www.service-public.gouv.fr/particuliers/vosdroits/F19778' },
          { valeur: '61,9 %', phrase: 'Taux d’emploi des immigrés de 15 à 64 ans en 2025, contre 71,9 % sans ascendance migratoire.', source: 'Insee, données 2025, 22 juin 2026', url: 'https://www.insee.fr/fr/statistiques/4195420' },
          { valeur: '1,39 Md€', phrase: 'Coût de l’aide médicale de l’État en 2024, pour 465 208 bénéficiaires.', source: 'Sénat, rapport général n° 139 (2025-2026), annexe Santé', url: 'https://www.senat.fr/rap/l25-139-327/l25-139-327_mono.html' }
        ],
        objection: {
          q: 'L’AME, ce sont des soins gratuits pour les clandestins.',
          r: 'L’AME couvre les soins d’environ 465 000 personnes en situation irrégulière, pour 1,39 milliard d’euros en 2024. Le reste des dépenses de santé des étrangers en situation régulière relève du droit commun.'
        }
      }
    ]
  },
  {
    id: 'services-publics', titre: 'Services publics', statut: 'actif',
    question: 'Hôpital, transports, guichets : où est passé l’État ?',
    intro: 'Les capacités de l’hôpital continuent de reculer, plus lentement depuis 2024, et l’accès au médecin dépend fortement du lieu de vie. Les usagers disent avoir de plus en plus de mal à faire leurs démarches, dans un contexte de dématérialisation que le Défenseur des droits juge souvent mal accompagnée. Les effectifs publics augmentent légèrement, surtout grâce aux contractuels.',
    etat: [
      { valeur: '367 300', phrase: 'Lits d’hospitalisation complète fin 2024 en France, en baisse de 0,5 % sur un an, après −1,2 % en 2023 et −1,8 % en 2022.', source: 'DREES, Études et Résultats n° 1353, 13 novembre 2025', url: 'https://drees.solidarites-sante.gouv.fr/publications-communique-de-presse/etudes-et-resultats/251113_ER_etablissements-de-sante' },
      { valeur: '8 %', phrase: 'Part des 719 points d’accueil des urgences qui ont dû fermer au moins une fois entre mi-mars et mi-juin 2023. Sur la même période, 23 % ont régulé l’accès sur certains créneaux.', source: 'DREES, Études et Résultats n° 1305, 11 juillet 2024', url: 'https://drees.solidarites-sante.gouv.fr/publications-communique-de-presse/etudes-et-resultats/240711_ER_UrgencesHospitalieres2023' },
      { valeur: '4,3 fois', phrase: 'En 2024, les 10 % d’habitants les mieux dotés en médecins généralistes ont accès à 5,7 consultations par an, contre 1,3 pour les 10 % les moins dotés. L’écart a augmenté de 5,3 % en un an.', source: 'DREES, « Accessibilité aux soins de premier recours en 2024 », 22 juillet 2026', url: 'https://drees.solidarites-sante.gouv.fr/communique-de-presse-jeux-de-donnees/jeux-de-donnees/260722-accessibilite-aux-soins-de-premier-recours-en-2024' },
      { valeur: '61 %', phrase: 'Part des usagers qui déclarent des difficultés dans leurs démarches administratives en 2024, contre 39 % en 2016.', source: 'Défenseur des droits, rapport annuel d’activité 2025, dossier de presse, avril 2026', url: 'https://www.defenseurdesdroits.fr/sites/default/files/2026-04/ddd_rapport-annuel-2025_dossier-de-presse_20260410.pdf' }
    ],
    cliches: [
      {
        id: 'trop-de-fonctionnaires', exemple: 'Il y a trop de fonctionnaires',
        cliche: 'La France a trop de fonctionnaires et leur nombre explose.',
        variantes: ['on a deux fois plus de fonctionnaires que partout ailleurs', 'l’administration grossit sans arrêt', 'il faut supprimer des postes de fonctionnaires', 'chaque année on embauche encore plus d’agents'],
        motscles: ['fonctionnaires', 'trop', 'effectifs', 'emploi', 'public', 'administration', 'agents', 'postes', 'contractuels', 'explose'],
        replique: 'La part de l’emploi public dans l’emploi total a baissé de 0,9 point en France entre 2019 et 2023, l’une des plus fortes baisses de l’OCDE. La France reste un peu au-dessus de la moyenne, loin derrière les pays nordiques.',
        developpement: [
          'Fin 2024, la fonction publique compte 5,9 millions d’agents, 32 800 de plus qu’un an plus tôt (+0,6 %). Le nombre de fonctionnaires est quasi stable (−0,1 %) : la hausse vient des contractuels, qui représentent désormais 24,0 % des agents publics, 7,6 points de plus qu’il y a dix ans. L’emploi public se précarise plus qu’il ne gonfle.',
          'Les comparaisons dépendent de ce que chaque pays confie au secteur public. Dans certains pays, l’hôpital ou l’école emploient surtout des salariés privés financés par l’argent public : ces emplois sortent de la statistique sans que le service rendu soit moindre. Le nombre d’agents mesure une organisation, pas un niveau de service.'
        ],
        chiffres: [
          { valeur: '5,9 millions', phrase: 'Agents de la fonction publique au 31 décembre 2024 (hors Mayotte) : +0,6 % sur un an, dont +2,6 % pour les contractuels et −0,1 % pour les fonctionnaires.', source: 'Insee Première n° 2094, février 2026', url: 'https://www.insee.fr/fr/statistiques/fichier/8732435/IP2094.pdf' },
          { valeur: '21,1 %', phrase: 'Part de l’emploi public dans l’emploi total en France en 2021, contre 18,6 % en moyenne dans l’OCDE.', source: 'OCDE, Government at a Glance 2023, note France', url: 'https://www.oecd.org/en/publications/government-at-a-glance-2023_c4200b14-en/france_39c22479-en.html' },
          { valeur: '−0,9 point', phrase: 'Évolution de la part de l’emploi public dans l’emploi total en France entre 2019 et 2023, quand la moyenne OCDE gagne 0,3 point.', source: 'OCDE, Government at a Glance 2025, « Employment in general government »', url: 'https://www.oecd.org/en/publications/government-at-a-glance-2025_0efd0bcd-en/full-report/employment-in-general-government_dafcfac5.html' }
        ],
        objection: {
          q: 'La France reste quand même au-dessus de la moyenne de l’OCDE.',
          r: 'C’est vrai : 21,1 % contre 18,6 % en 2021. L’écart reste modéré, et la Norvège ou la Suède emploient bien plus dans le public. Le débat utile porte sur les services qu’on veut assurer et sur la place des contractuels, que le seul nombre d’agents ne tranche pas.'
        }
      },
      {
        id: 'services-publics-trop-chers', exemple: 'La France dépense plus que tout le monde',
        cliche: 'Les services publics coûtent trop cher, la France dépense plus que tous ses voisins.',
        variantes: ['on est champions du monde de la dépense publique', 'avec tout ce qu’on paie les services devraient être parfaits', 'l’argent public part dans l’administration', 'on dépense plus que les autres pour des services pires'],
        motscles: ['depense', 'depenses', 'cher', 'cout', 'impots', 'champions', 'gaspillage', 'administration', 'services', 'voisins'],
        replique: 'La France dépense 7,5 points de PIB de plus que la moyenne de la zone euro en 2023. Mais les deux tiers de cet écart viennent de la protection sociale, d’abord des retraites, et non des guichets ou des administrations.',
        developpement: [
          'En 2023, la dépense publique française atteint 57,0 % du PIB, contre 49,5 % en moyenne dans la zone euro. La protection sociale pèse 32,2 % du PIB en France contre 27,2 % dans la zone euro, un écart de 5,0 points qui vient surtout des retraites (2,2 points) et de la santé (1,5 point).',
          'Une grande part de la dépense « en plus » est donc versée aux ménages sous forme de pensions et de remboursements : elle ne finance ni plus d’agents aux guichets ni plus de lits. La Banque de France précise que ces écarts reflètent aussi un partage différent entre public et privé : une dépense publique en France peut correspondre à une assurance privée ailleurs.'
        ],
        chiffres: [
          { valeur: '57,0 % du PIB', phrase: 'Dépense publique de la France en 2023, la plus élevée de la zone euro (moyenne : 49,5 %).', source: 'Banque de France, Bulletin n° 259, article 4, juillet 2025', url: BDF_DEPENSE },
          { valeur: '2/3', phrase: 'Part de l’écart de dépense avec la zone euro en 2023 due à la protection sociale : 32,2 % du PIB en France contre 27,2 %.', source: 'Banque de France, Bulletin n° 259, article 4, juillet 2025', url: BDF_DEPENSE },
          { valeur: '2,2 points', phrase: 'Part des retraites dans les 5,0 points de PIB d’écart de dépense de protection sociale avec la zone euro en 2023. La santé en représente 1,5.', source: 'Banque de France, Bulletin n° 259, article 4, juillet 2025', url: BDF_DEPENSE }
        ],
        objection: {
          q: 'Peu importe où va l’argent, la France dépense quand même le plus.',
          r: 'C’est exact au niveau global. Mais ce constat dit peu de chose de l’état des services de proximité : l’essentiel de l’écart sert à verser des pensions, pendant que les lits d’hôpital reculent et que les démarches se compliquent. Le débat se joue sur la répartition de la dépense.'
        }
      }
    ]
  },
  {
    id: 'logement', titre: 'Logement', statut: 'actif',
    question: 'Pourquoi se loger coûte une part toujours plus grande du salaire ?',
    intro: 'En 2025, 4,1 millions de demandes de logement social ont été actives au moins un jour, pour un peu plus de 390 000 attributions. Depuis les années 1970, le poids du loyer dans le revenu des locataires a plus que doublé selon l’IGEDD. Dans le même temps, les aides au logement versées par l’État ont reculé d’environ un quart depuis 2017.',
    etat: [
      { valeur: '9,5 %', phrase: 'Taux d’attribution du logement social en 2025 : un peu plus de 390 000 baux signés pour 4,1 millions de demandes actives au moins un jour dans l’année (hors Mayotte).', source: 'Ancols, « Tableau de bord 2025 : attributions de logements sociaux », 2 juin 2026', url: ANCOLS_2025 },
      { valeur: '× 2', phrase: 'Depuis les années 1970, le poids du loyer dans le revenu des locataires a « plus que doublé » (enquêtes Logement de l’Insee, hors DOM). Le revenu des locataires a augmenté moins vite que celui de l’ensemble des ménages.', source: 'IGEDD, Jacques Friggit, « Prix de l’immobilier et loyers, 2025 », 18 février 2025', url: 'https://www.igedd.developpement-durable.gouv.fr/IMG/pdf/prix-immobilier-friggit-ceseridf-2025_cle2d7a8c-1.pdf' },
      { valeur: '−24,6 %', phrase: 'Baisse des aides au logement depuis 2017 : de 21,1 à 16,1 milliards d’euros par an (euros courants, montant prévu au projet de loi de finances 2026).', source: 'Sénat, Sophie Primas, « L’essentiel sur le projet de loi de finances pour 2026 – Cohésion des territoires », novembre 2025', url: SENAT_PLF26_LOGEMENT, verifier: true },
      { valeur: '2,9 millions', phrase: 'Logements vacants au 1er janvier 2026, soit 7,6 % du parc (hors Mayotte, données provisoires).', source: 'Insee Focus n° 388, 30 septembre 2026', url: 'https://www.insee.fr/fr/statistiques/9055697' }
    ],
    cliches: [
      {
        id: 'hlm-immigres', exemple: 'Les HLM, c’est d’abord pour les immigrés',
        cliche: 'Les logements sociaux sont attribués en priorité aux immigrés, au détriment des Français.',
        variantes: ['les HLM vont d’abord aux étrangers', 'un immigré qui arrive a un logement avant nous', 'on fait passer les migrants devant les Français pour les HLM', 'il y a une préférence étrangère dans le logement social'],
        motscles: ['hlm', 'logement', 'social', 'immigres', 'etrangers', 'attribution', 'priorite', 'migrants', 'bailleurs', 'demandeurs'],
        replique: 'La nationalité ne fait pas partie des critères d’attribution, qui reposent sur les ressources et des publics prioritaires. Les immigrés vivent plus souvent en HLM (35 % contre 11 % des 18-59 ans sans ascendance migratoire), ce que l’Insee relie surtout à des revenus plus faibles, dans un système qui ne satisfait qu’une demande sur dix.',
        developpement: [
          'Le logement social est attribué sous conditions de ressources, puis selon des publics prioritaires fixés par la loi, comme les ménages reconnus au titre du droit au logement opposable : 26 000 attributions leur sont allées en 2025. L’Ancols relève que les ménages très modestes, avec moins de 600 € de ressources mensuelles par unité de consommation, obtiennent un logement moins souvent que la moyenne. Les ménages encore en attente fin 2025 l’étaient depuis 850 jours en moyenne.',
          'La surreprésentation des immigrés dans le parc social est réelle : selon l’enquête Trajectoires et Origines (2019-2020), 35 % des immigrés de 18 à 59 ans vivent en logement social. L’Insee précise qu’elle est « largement liée aux moindres revenus et à l’âge plus jeune » de ces populations. Le critère qui joue est le revenu, pas l’origine.'
        ],
        chiffres: [
          { valeur: '35 % / 11 %', phrase: 'Part des 18-59 ans locataires du parc social en 2019-2020 : immigrés, puis personnes sans ascendance migratoire ou ultramarine (France métropolitaine).', source: 'Insee Références « Immigrés et descendants d’immigrés en France », édition 2023, fiche 5.5, enquête TeO2', url: 'https://www.insee.fr/fr/statistiques/6793286' },
          { valeur: '31 %', phrase: 'Taux de pauvreté des personnes immigrées en France métropolitaine en 2021, contre 14,5 % pour l’ensemble de la population.', source: 'Insee Flash Bretagne n° 108, décembre 2024', url: 'https://www.insee.fr/fr/statistiques/8314262', verifier: true },
          { valeur: '850 jours', phrase: 'Ancienneté moyenne de la demande pour les ménages toujours en attente au 31 décembre 2025 (hors Mayotte).', source: 'Ancols, « Tableau de bord 2025 : attributions de logements sociaux », juin 2026', url: ANCOLS_2025 }
        ],
        objection: {
          q: 'Quelle que soit la raison, s’ils sont trois fois plus souvent en HLM, ce sont des logements en moins pour les autres.',
          r: 'L’écart est exact. Mais à revenu et situation égaux, un demandeur français et un demandeur étranger en règle sont traités de la même façon. Exclure les étrangers en règle reviendrait à instaurer une préférence nationale, que le droit actuel ne prévoit pas, et ne créerait aucun logement face à 4,1 millions de demandes.'
        }
      },
      {
        id: 'apl-loyers', exemple: 'Les APL font monter les loyers',
        cliche: 'Les APL ne servent à rien puisqu’elles font monter les loyers : il suffit de les couper et de construire.',
        variantes: ['les APL c’est de l’argent qui finit chez les propriétaires', 'baisser les APL ferait baisser les loyers', 'le problème c’est l’offre il faut construire', 'les aides au logement nourrissent la hausse des loyers'],
        motscles: ['apl', 'aides', 'logement', 'loyers', 'construire', 'proprietaires', 'sru', 'offre', 'couper', 'bailleurs'],
        replique: 'L’effet existe : une étude publiée par l’Insee estime qu’entre 50 % et 80 % des allocations perçues par les ménages à bas revenus ont été absorbées par des hausses de loyer entre 1973 et 2002. Mais les aides ont déjà baissé d’un quart depuis 2017, et 87 % des ménages aidés gagnent moins que le Smic.',
        developpement: [
          'Gabrielle Fack s’est appuyée sur l’extension des aides au début des années 1990, qui ne concernait que certains ménages, pour comparer leurs loyers à ceux des autres. Son explication : la demande créée par les aides s’est heurtée à une offre « trop inélastique de la part des bailleurs ». Le résultat montre qu’une aide qui augmente face à une offre bloquée profite en partie aux propriétaires. Il plaide pour aider et construire à la fois.',
          'Couper les aides ne rend pas cet argent aux locataires. Le Sénat note que l’économie réalisée depuis 2017 « pèse en réalité principalement sur les bailleurs sociaux ». Quant à la construction, la loi SRU montre que la volonté locale manque parfois : sur 2020-2022, 711 communes n’ont pas atteint leurs objectifs de logements sociaux, et 341 ont été déclarées carencées.'
        ],
        chiffres: [
          { valeur: '50 % à 80 %', phrase: 'Part des allocations logement perçues par les ménages à bas revenus qui aurait été absorbée par la hausse de leurs loyers (enquêtes Logement de l’Insee, 1973-2002).', source: 'Gabrielle Fack, Économie et Statistique n° 381-382, Insee, 2005', url: 'https://www.insee.fr/fr/statistiques/1376573' },
          { valeur: '87,2 %', phrase: 'Part des ménages bénéficiaires d’une aide au logement dont les revenus étaient inférieurs au Smic en 2024 (environ 5,7 millions de ménages aidés).', source: 'Sénat, Sophie Primas, « L’essentiel sur le projet de loi de finances pour 2026 – Cohésion des territoires », novembre 2025', url: SENAT_PLF26_LOGEMENT },
          { valeur: '341', phrase: 'Communes déclarées carencées au titre de la loi SRU pour 2020-2022, sur 711 qui n’ont pas atteint leurs objectifs de logements sociaux.', source: 'Ministère chargé du logement, bilan 2020-2022 de la loi SRU, 11 avril 2024', url: 'https://www.ecologie.gouv.fr/ministre-delegue-au-logement-presente-bilan-2020-2022-loi-sru' }
        ],
        objection: {
          q: 'Donc les économistes donnent raison à ceux qui veulent baisser les APL.',
          r: 'En partie : l’effet inflationniste est documenté. Mais l’étude porte sur une aide qui augmente face à une offre bloquée. Elle ne montre pas qu’une baisse des aides ferait baisser les loyers d’autant. Pour des ménages presque tous sous le Smic, une baisse se traduit d’abord par un loyer plus lourd à payer.'
        }
      }
    ]
  },
  {
    id: 'ecole', titre: 'École', statut: 'actif',
    question: 'L’école corrige-t-elle encore les inégalités de départ ?',
    intro: 'La France est l’un des pays de l’OCDE où l’origine sociale pèse le plus sur les résultats des élèves de 15 ans. Les collèges accueillent des publics très différents selon le secteur et le classement en éducation prioritaire. Près d’une heure de cours sur dix n’est pas assurée dans le second degré public.',
    etat: [
      { valeur: '113 points', phrase: 'Écart en mathématiques entre le quart des élèves de 15 ans les plus favorisés et le quart le moins favorisé en France (PISA 2022), contre 93 points en moyenne dans l’OCDE.', source: 'OCDE, PISA 2022, note pays France, 5 décembre 2023', url: OCDE_PISA_FR },
      { valeur: '71 contre 119', phrase: 'Indice de position sociale moyen des collèges à la rentrée 2021 : 71 en REP+, 84 en REP, 106 dans le public hors éducation prioritaire, 119 dans le privé.', source: 'Cour des comptes, « L’enseignement privé sous contrat », juin 2023', url: CC_PRIVE },
      { valeur: '9,8 %', phrase: 'Heures d’enseignement non assurées dans les établissements publics du second degré en 2024-2025, dont 7,5 % faute de remplacement des enseignants absents.', source: 'DEPP, Note d’Information n° 26.14, avril 2026', url: 'https://www.education.gouv.fr/depp/la-part-du-temps-d-enseignement-non-assure-dans-les-etablissements-publics-du-second-degre-en-2024-504512' },
      { valeur: '38 042', phrase: 'Enseignants contractuels (en équivalent temps plein) dans le second degré public en septembre 2024, en hausse de 10 % sur un an.', source: 'Cour des comptes, « Le temps d’enseignement perdu par les élèves au collège », décembre 2025', url: 'https://www.vie-publique.fr/files/rapport/pdf/301528.pdf' }
    ],
    cliches: [
      {
        id: 'niveau-enfants-immigres', exemple: 'Le niveau baisse à cause des enfants d’immigrés',
        cliche: 'Si le niveau scolaire baisse en France, c’est à cause des enfants d’immigrés.',
        variantes: ['les classes sont tirées vers le bas par les enfants d’immigrés', 'avec l’immigration l’école ne peut plus suivre', 'le classement PISA s’effondre à cause de l’immigration', 'les élèves étrangers font baisser la moyenne'],
        motscles: ['niveau', 'baisse', 'immigres', 'enfants', 'pisa', 'immigration', 'ecole', 'eleves', 'classes', 'etrangers'],
        replique: 'La part d’élèves issus de l’immigration est restée stable autour de 16 % entre 2012 et 2022, alors que les résultats ont chuté. Une part stable ne peut pas expliquer une chute récente.',
        developpement: [
          'Selon l’OCDE, les résultats de 2022 comptent parmi les plus bas jamais mesurés par PISA en France. En mathématiques, la baisse touche dans les mêmes proportions les meilleurs élèves et les plus faibles : elle concerne l’ensemble des élèves, pas un groupe en particulier.',
          'Les élèves issus de l’immigration ont en moyenne des résultats plus faibles. Ils sont aussi bien plus souvent défavorisés : 48 % d’entre eux le sont, contre 25 % de l’ensemble des élèves. À milieu social comparable, l’écart en mathématiques passe de 51 à 17 points. Ce qui pèse le plus, c’est l’origine sociale, et l’école française la compense mal.'
        ],
        chiffres: [
          { valeur: '16 %', phrase: 'Part des élèves de 15 ans issus de l’immigration en France en 2022, contre 15 % en 2012.', source: 'OCDE, PISA 2022, note pays France, 5 décembre 2023', url: OCDE_PISA_FR },
          { valeur: '51 → 17 points', phrase: 'Écart moyen en mathématiques entre élèves non immigrés et immigrés en France (PISA 2022), avant puis après prise en compte du milieu social.', source: 'OCDE, PISA 2022, note pays France, 5 décembre 2023', url: OCDE_PISA_FR },
          { valeur: '21 %', phrase: 'Part des écarts de performance en mathématiques expliquée par le milieu socio-économique en France (PISA 2022), contre 15 % en moyenne dans l’OCDE.', source: 'OCDE, PISA 2022, note pays France, 5 décembre 2023', url: OCDE_PISA_FR }
        ],
        objection: {
          q: 'Il reste quand même un écart de 17 points à milieu social égal.',
          r: 'Oui, l’OCDE le juge significatif. Il tient en partie à la langue : 48 % des élèves immigrés parlent le plus souvent à la maison une autre langue que celle du test, et 19 % des primo-arrivants sont arrivés après 12 ans. Cet écart appelle un meilleur accueil linguistique ; il n’explique pas la baisse générale du niveau.'
        }
      },
      {
        id: 'prive-meilleur', exemple: 'Le privé fait mieux parce qu’il est meilleur',
        cliche: 'Les écoles privées ont de meilleurs résultats parce qu’elles enseignent mieux que le public.',
        variantes: ['dans le privé au moins les profs font leur travail', 'le privé a de meilleurs résultats au brevet c’est la preuve', 'si tu veux que ton enfant réussisse mets-le dans le privé', 'le public est en échec le privé marche'],
        motscles: ['prive', 'public', 'contrat', 'resultats', 'brevet', 'ips', 'mixite', 'segregation', 'boursiers', 'favorises'],
        replique: 'Le privé sous contrat accueille 40,2 % d’élèves de milieux très favorisés en 2021, contre 26,4 % en 2000. Selon la Cour des comptes, les études disponibles, « quoique parcellaires et imparfaites », montrent une performance « relativement proche » dans le public et dans le privé sous contrat.',
        developpement: [
          'Les résultats bruts du privé sont meilleurs, mais la Cour des comptes rappelle qu’ils sont « fortement corrélés avec l’origine sociale des élèves ». En 2021, 11,8 % des élèves du privé sous contrat sont boursiers, contre 29,1 % dans le public. Les travaux disponibles ne montrent pas de plus-value propre au privé.',
          'La DEPP observe que l’écart de composition sociale entre public et privé s’est creusé, pendant que la ségrégation diminuait à l’intérieur de chaque secteur. Le privé sous contrat est pourtant financé en majorité par l’État : 8 milliards d’euros de crédits en 2022, qui servent surtout à payer les enseignants.'
        ],
        chiffres: [
          { valeur: '40,2 %', phrase: 'Part des élèves de familles très favorisées dans le privé sous contrat en 2021, contre 26,4 % en 2000.', source: 'Cour des comptes, « L’enseignement privé sous contrat », juin 2023', url: CC_PRIVE },
          { valeur: '11,8 % / 29,1 %', phrase: 'Part des élèves boursiers en 2021, dans le privé sous contrat puis dans le public.', source: 'Cour des comptes, « L’enseignement privé sous contrat », juin 2023', url: CC_PRIVE },
          { valeur: '8 Md€', phrase: 'Crédits de l’État consacrés à l’enseignement privé sous contrat en 2022, qui financent surtout la rémunération des enseignants.', source: 'Cour des comptes, « L’enseignement privé sous contrat », juin 2023', url: CC_PRIVE }
        ],
        objection: {
          q: 'Les parents qui choisissent le privé fuient aussi les cours non remplacés du public.',
          r: 'La crainte se comprend : 9,8 % des heures ne sont pas assurées dans le second degré public en 2024-2025. Mais l’écart de résultats entre les deux secteurs tient d’abord à la composition sociale des élèves, et cette sélection est largement financée par l’argent public.'
        }
      }
    ]
  },
  {
    id: 'retraites', titre: 'Retraites', statut: 'actif',
    question: 'Le système est-il vraiment au bord de la faillite ?',
    intro: 'En 2025, les retraites représentent 14,1 % du PIB et le système affiche un déficit de 5,1 milliards d’euros, soit 0,2 point de PIB. Selon le Conseil d’orientation des retraites, la part des retraites dans le PIB resterait quasi stable jusqu’en 2045, puis monterait à 15,3 % en 2070, pendant que les ressources du système reculeraient. La réforme de 2023 est suspendue par la loi de financement de la sécurité sociale pour 2026 pour la génération 1964 et le début de la génération 1965, puis reprend pour les suivantes.',
    etat: [
      { valeur: '14,1 %', phrase: 'Part des dépenses de retraite dans le PIB en 2025, soit 422 milliards d’euros et 24,3 % des dépenses publiques (ensemble des régimes obligatoires).', source: 'Conseil d’orientation des retraites, Rapport annuel, synthèse, juin 2026', url: COR_SYNTH },
      { valeur: '−0,2 pt de PIB', phrase: 'Solde du système de retraite en 2025, régimes de base et complémentaires, hors produits financiers : un déficit de 5,1 milliards d’euros.', source: 'Conseil d’orientation des retraites, Rapport annuel, synthèse, juin 2026', url: COR_SYNTH },
      { valeur: '5,3 ans', phrase: 'Écart d’espérance de vie à 35 ans entre hommes cadres (48,9 ans) et hommes ouvriers (43,6 ans) sur 2020-2022. Chez les femmes, l’écart est de 3,4 ans.', source: 'Insee Première n° 2005, 16 juillet 2024', url: 'https://www.insee.fr/fr/statistiques/8220688' },
      { valeur: '1 380 €', phrase: 'Pension brute moyenne de droit direct des femmes fin 2024, majoration pour enfants comprise, contre 2 190 € pour les hommes (retraités résidant en France).', source: 'Conseil d’orientation des retraites, Rapport annuel 2026, tableau 3.2 (données Drees), p. 160-161', url: COR_RA }
    ],
    cliches: [
      {
        id: 'retraites-faillite', exemple: 'Il n’y aura plus rien pour les jeunes',
        cliche: 'Le système de retraite est en faillite, les jeunes qui cotisent aujourd’hui ne toucheront rien.',
        variantes: ['on n’aura jamais de retraite', 'les caisses sont vides', 'le système va exploser avec le papy-boom', 'on paie pour les vieux et on n’aura rien', 'les retraites c’est un puits sans fond'],
        motscles: ['faillite', 'retraite', 'retraites', 'jeunes', 'caisses', 'deficit', 'vieillissement', 'cotisations', 'pension', 'rien'],
        replique: 'Selon le COR, les dépenses de retraite passeraient de 14,1 % du PIB en 2025 à 14,2 % en 2045. Le système est en déficit et ce déficit se creuserait, mais les pensions restent versées : le risque pour les jeunes tient à leur niveau, pas à leur disparition.',
        developpement: [
          'Le Conseil d’orientation des retraites mesure d’abord la soutenabilité par la part des retraites dans la richesse produite. Cette part resterait presque stable pendant vingt ans, puis atteindrait 15,3 % du PIB en 2070. Le COR écrit que ses projections « ne corroborent pas l’idée d’une progression des dépenses de retraite qui échapperait à toute maîtrise en raison du vieillissement démographique ». Il relève pourtant que près de la moitié des moins de 34 ans s’attendent à ne percevoir aucune pension, ou une pension très faible.',
          'Le niveau de vie moyen des retraités, égal à celui de l’ensemble de la population en 2023 (100,2 %), tomberait à 90,3 % en 2070. Le déficit vient surtout de ressources qui baissent, de 13,9 % du PIB en 2025 à 12,9 % en 2070. Le COR rappelle aussi que la modération des salaires publics réduit les cotisations de la caisse des fonctionnaires territoriaux et hospitaliers.'
        ],
        chiffres: [
          { valeur: '14,2 %', phrase: 'Part des dépenses de retraite dans le PIB projetée en 2045 dans le scénario de référence, contre 14,1 % en 2025.', source: 'COR, Rapport annuel, synthèse, juin 2026', url: COR_SYNTH },
          { valeur: '−2,4 pts de PIB', phrase: 'Solde projeté en 2070 dans le scénario de référence. Selon la productivité retenue, il va de −1,7 à −3,1 points.', source: 'COR, Rapport annuel, synthèse, juin 2026', url: COR_SYNTH },
          { valeur: '90,3 %', phrase: 'Niveau de vie moyen des retraités rapporté à celui de l’ensemble de la population en 2070, contre 100,2 % en 2023.', source: 'COR, Rapport annuel, synthèse, juin 2026', url: COR_SYNTH }
        ],
        objection: {
          q: 'Le COR lui-même prévoit un déficit qui grossit jusqu’en 2070. Le système est donc bien intenable.',
          r: 'Le déficit est réel et se creuse dans tous les scénarios du COR, jusqu’à 2,4 points de PIB en 2070 dans le scénario central. Il oblige à choisir comment le financer, entre cotisations, impôts, âge de départ et niveau des pensions. Le COR souligne que ce solde est un repère imparfait, car une partie des régimes est équilibrée par l’État par construction.'
        }
      },
      {
        id: 'immigres-retraites', exemple: 'Les immigrés ruinent nos retraites',
        cliche: 'Les immigrés ruinent le système de retraite, ou à l’inverse, il suffirait d’en accueillir plus pour le sauver.',
        variantes: ['les étrangers touchent des retraites sans avoir cotisé', 'l’immigration coûte une fortune aux caisses', 'ce sont les immigrés qui vont payer nos retraites', 'on importe des futurs retraités'],
        motscles: ['immigres', 'immigration', 'retraites', 'retraite', 'migratoire', 'cotisants', 'etrangers', 'demographie', 'ruinent', 'sauver'],
        replique: 'Dans les projections du COR, plus d’immigration améliore les comptes : avec 230 000 entrées nettes par an au lieu de 150 000, les dépenses de retraite pèseraient 1,1 point de PIB de moins en 2070. L’effet s’atténue avec le temps, car les nouveaux cotisants deviennent à leur tour retraités.',
        developpement: [
          'Le scénario central du COR retient désormais un solde migratoire de 150 000 personnes par an, contre 70 000 dans les projections précédentes. Selon le COR, une hausse du solde migratoire augmente rapidement le nombre de cotisants et donc les ressources. Les personnes qui arrivent sont surtout d’âge actif, ce qui élève la population active et le PIB.',
          'Le COR précise que cet effet favorable « tendrait toutefois à s’estomper progressivement », à mesure que ces personnes partent à la retraite. Leurs pensions seraient en moyenne plus faibles, faute de carrières complètes en France, et le résultat suppose qu’elles trouvent un emploi. Les données du COR ne décrivent ni une ruine ni un sauvetage.'
        ],
        chiffres: [
          { valeur: '+150 000', phrase: 'Solde migratoire annuel retenu à partir de 2026 dans le scénario central, contre +70 000 dans le rapport de 2025.', source: 'COR, Rapport annuel 2026, partie 1, chapitre 1', url: COR_RA },
          { valeur: '−1,1 pt de PIB', phrase: 'Écart de dépenses de retraite en 2070 avec un solde migratoire de +230 000 par an. Avec +70 000 par an, elles augmentent de 1,1 point.', source: 'COR, Rapport annuel 2026, « Sensibilité à l’hypothèse de solde migratoire », p. 112', url: COR_RA },
          { valeur: '+100 000', phrase: 'Solde migratoire moyen observé par an sur les vingt dernières années. Il a atteint 271 000 en 2022, année des arrivées depuis l’Ukraine.', source: 'COR, Rapport annuel 2026, partie 1, section 1.2', url: COR_RA }
        ],
        objection: {
          q: 'Plus d’immigrés aujourd’hui, c’est plus de retraités à payer demain.',
          r: 'C’est exact, et le COR le dit : l’effet favorable s’estompe quand ces personnes atteignent l’âge de la retraite. À l’horizon 2070, le bilan reste favorable dans ses projections, avec 1,1 point de PIB de dépenses en moins dans l’hypothèse haute. Leurs pensions sont aussi plus faibles, car elles dépendent des années cotisées en France.'
        }
      }
    ]
  },
  {
    id: 'securite', titre: 'Sécurité', statut: 'actif',
    question: 'Ce que mesurent vraiment les chiffres de la délinquance.',
    intro: 'En 2025, la police et la gendarmerie ont enregistré 975 victimes d’homicide, un nombre stable sur un an, après une longue baisse entre 1996 et 2014. Les violences physiques et sexuelles enregistrées augmentent, mais ces chiffres dépendent des plaintes, que la plupart des victimes ne déposent pas. Le sentiment d’insécurité, lui, progresse entre 2024 et 2025.',
    etat: [
      { valeur: '975', phrase: 'Victimes d’homicide enregistrées en France en 2025, nombre stable par rapport à 2024, soit 1,4 pour 100 000 habitants.', source: 'SSMSI, « Insécurité et délinquance en 2025 : bilan statistique », 9 juillet 2026', url: SSMSI_BILAN },
      { valeur: '+5 %', phrase: 'Évolution des violences physiques enregistrées entre 2024 et 2025. Plus de la moitié des violences hors cadre familial enregistrées n’ont entraîné aucune incapacité totale de travail.', source: 'SSMSI, « Insécurité et délinquance en 2025 : bilan statistique », 9 juillet 2026', url: SSMSI_BILAN },
      { valeur: '21 %', phrase: 'Part des victimes de violences physiques qui ont porté plainte en 2024 (18 ans ou plus, méthode révisée en octobre 2026).', source: 'SSMSI, « Vécu et ressenti en matière de sécurité », rapport d’enquête, 29 octobre 2026', url: SSMSI_VRS },
      { valeur: '658 000', phrase: 'Personnes de 18 ans ou plus se déclarant victimes de violences physiques hors vol en 2024. L’écart avec 2023 (643 000) n’est pas statistiquement significatif.', source: 'SSMSI, « Vécu et ressenti en matière de sécurité », figure 1, 29 octobre 2026', url: SSMSI_VRS }
    ],
    cliches: [
      {
        id: 'ensauvagement', exemple: 'La violence explose',
        cliche: 'La France vit un ensauvagement : la violence explose partout et chaque année c’est pire.',
        variantes: ['on n’est plus en sécurité nulle part', 'il y a des meurtres tous les jours', 'c’est devenu une jungle', 'avant on pouvait sortir le soir', 'la France est un coupe-gorge'],
        motscles: ['ensauvagement', 'violence', 'violences', 'explose', 'homicides', 'meurtres', 'delinquance', 'insecurite', 'securite', 'plaintes'],
        replique: 'Le nombre de victimes d’homicide est stable en 2025, à 975, après une longue baisse entre 1996 et 2014. L’enquête de victimation ne relève pas de hausse significative du nombre de victimes de violences physiques en 2024, et seule une victime sur cinq porte plainte.',
        developpement: [
          'Les chiffres de la délinquance enregistrée comptent les faits connus de la police et de la gendarmerie. Ils montent quand les victimes portent plainte plus souvent ou quand les services traitent davantage de dossiers, ce qui explique une partie de la hausse des violences sexuelles enregistrées, longtemps tues.',
          'L’enquête de victimation interroge environ 200 000 personnes, qu’elles aient porté plainte ou non. Elle décrit une relative stabilité du nombre de victimes entre 2023 et 2024 pour la plupart des atteintes, sans baisse. Le sentiment d’insécurité augmente dans le même temps, avec 551 000 personnes de plus qui se disent en insécurité dans leur quartier ou leur village.'
        ],
        chiffres: [
          { valeur: '−3 %', phrase: 'Évolution des homicides enregistrés sur les douze mois précédant le 30 juin 2026. Les tentatives d’homicide baissent aussi de 3 %.', source: 'SSMSI, Interstats Infos rapides n° 68, 30 septembre 2026', url: 'https://statistiques.interieur.gouv.fr/ssmsi/publications/la-delinquance-enregistree-par-la-police-et-la-gendarmerie-nationales-un-point-mi' },
          { valeur: '8 %', phrase: 'Part des victimes de violences sexuelles physiques qui ont porté plainte en 2024 (méthode révisée).', source: 'SSMSI, « Vécu et ressenti en matière de sécurité », annexe 2, 29 octobre 2026', url: SSMSI_VRS },
          { valeur: '+551 000', phrase: 'Hausse, entre 2024 et 2025, du nombre de personnes qui se disent en insécurité dans leur quartier ou leur village (+5 %).', source: 'SSMSI, « Vécu et ressenti en matière de sécurité », 29 octobre 2026', url: SSMSI_VRS }
        ],
        objection: {
          q: 'Les tentatives d’homicide augmentent depuis 2016, et les gens se sentent de moins en moins en sécurité.',
          r: 'Les tentatives d’homicide enregistrées ont bien augmenté sur dix ans, et le sentiment d’insécurité progresse : ce sont des faits à prendre au sérieux. Sur les douze mois précédant juin 2026, homicides et tentatives baissent pourtant de 3 %, et le nombre de morts reste du même ordre qu’en 2016.'
        }
      },
      {
        id: 'insecurite-immigration', exemple: 'L’insécurité, c’est l’immigration',
        cliche: 'L’insécurité, c’est l’immigration : les étrangers sont responsables de la délinquance.',
        variantes: ['regardez les chiffres ce sont toujours des étrangers', 'sans les immigrés il n’y aurait pas de délinquance', 'les étrangers remplissent les commissariats', 'plus d’immigration plus d’insécurité'],
        motscles: ['immigration', 'etrangers', 'immigres', 'delinquance', 'insecurite', 'cause', 'surrepresentation', 'controles', 'facies', 'nationalite'],
        replique: 'En 2025, les étrangers représentent 9 % de la population, 18 % des mis en cause pour homicide et 16 % pour violences physiques : une surreprésentation que le SSMSI décrit comme « légèrement supérieure à leur part dans la population ». Ces chiffres portent sur des suspects identifiés, avant tout jugement, dans une population plus jeune et plus souvent contrôlée.',
        developpement: [
          'La surreprésentation est réelle et le SSMSI la documente. Elle est la plus forte pour certaines atteintes aux biens : 37 % des mis en cause pour vols dans les véhicules, 36 % pour cambriolages, 33 % pour vols violents sans arme. Depuis 2022, la part des étrangers parmi les mis en cause baisse pour presque tous les indicateurs, sauf le trafic de stupéfiants. Les étrangers sont aussi plus souvent victimes : 23 % des victimes d’homicide ou de tentative d’homicide en 2025.',
          'Un mis en cause est une personne soupçonnée dans une affaire élucidée : un an après les faits, seuls 7 % des cambriolages de 2024 étaient élucidés. Les infractions liées aux stupéfiants sont presque toutes révélées par l’action des services, donc par les lieux et les personnes que la police contrôle, et les jeunes hommes perçus comme noirs, arabes ou maghrébins ont quatre fois plus de risque d’être contrôlés. Le SSMSI juge lui-même ces données « sommaires » pour comprendre la délinquance : elles ne tiennent compte ni de l’âge ni de la situation sociale.'
        ],
        chiffres: [
          { valeur: '7 %', phrase: 'Part des cambriolages de logement enregistrés en 2024 élucidés au bout de douze mois. La part des étrangers parmi les mis en cause porte sur cette petite fraction des affaires.', source: 'SSMSI, « Insécurité et délinquance en 2025 : bilan statistique », éclairage 2, 9 juillet 2026', url: SSMSI_BILAN },
          { valeur: '4 fois', phrase: 'Les jeunes hommes perçus comme noirs, arabes ou maghrébins ont 4 fois plus de risque d’avoir été contrôlés que le reste de la population, et 12 fois plus de subir un contrôle « poussé » (enquête 2024).', source: 'Défenseur des droits, Enquête sur l’accès aux droits, volume 1, juin 2025', url: 'https://www.defenseurdesdroits.fr/sites/default/files/2025-06/ddd_EAD-2024_volume-1_relations-police-population.pdf' },
          { valeur: '9 %', phrase: 'Part des étrangers dans la population résidant en France en 2025 (6,3 millions de personnes). Les immigrés, dont une partie sont devenus français, sont 11,6 %.', source: 'Insee, « L’essentiel sur… les immigrés et les étrangers », 25 juin 2026', url: 'https://www.insee.fr/fr/statistiques/3633212' }
        ],
        objection: {
          q: 'Même en tenant compte de l’âge et des contrôles, les étrangers restent surreprésentés.',
          r: 'C’est possible : rien dans les données publiques ne permet d’affirmer que l’écart disparaîtrait entièrement, car le SSMSI ne publie aucun chiffre corrigé de l’âge, du sexe ou de la situation sociale. Ce que les données montrent, c’est un écart concentré sur certains vols et sur les stupéfiants, une part de 16 % pour les violences physiques, et une baisse depuis 2022 pour la plupart des indicateurs.'
        }
      }
    ]
  },
  {
    id: 'laicite-islam', titre: 'Laïcité et islam', statut: 'actif',
    question: 'Ce que dit la loi de 1905, et ce qu’on lui fait dire.',
    intro: 'La loi du 9 décembre 1905 impose la neutralité à l’État et garantit aux personnes la liberté de conscience et le libre exercice des cultes. Les usagers peuvent en principe exprimer leur religion, sauf là où une loi précise le limite, comme celle de 2004 pour les élèves ou celle de 2010 sur la dissimulation du visage. En 2025, les actes antimusulmans recensés ont atteint leur plus haut niveau depuis 2015.',
    etat: [
      { valeur: '10 %', phrase: 'Part des 18-59 ans qui se déclarent musulmans en France métropolitaine en 2019-2020. Ils sont 29 % à se dire catholiques et 51 % sans religion.', source: 'Insee Références, « La diversité religieuse en France » (Drouhot, Simon, Tiberj), enquête TeO2, 30 mars 2023', url: INSEE_TEO_RELIGION },
      { valeur: '326', phrase: 'Actes antimusulmans recensés en 2025, en hausse de 88 % sur un an : le niveau le plus élevé depuis 2015. Les atteintes aux personnes en représentent 64 %.', source: 'Ministère de l’Intérieur, Bilan des actes antireligieux 2025, avril 2026, p. 23-24', url: INTERIEUR_ACTES_2025 },
      { valeur: '10 %', phrase: 'Part des musulmans de 18 à 49 ans qui déclarent avoir subi une discrimination religieuse en 2019-2020, contre 5 % en 2008-2009.', source: 'Insee Première n° 1911, 5 juillet 2022, actualisé le 23 février 2023', url: INSEE_IP1911 },
      { valeur: '23', phrase: 'Associations dissoutes par décret entre septembre 2021 et janvier 2025, sous le régime élargi par la loi du 24 août 2021, contre 29 sur toute la période 2012-2021. Toutes ne sont pas musulmanes.', source: 'Assemblée nationale, commission des lois, évaluation de la loi confortant le respect des principes de la République, janvier 2025', url: 'https://www.assemblee-nationale.fr/dyn/17/documents/cion_lois/l17n870210094_document.pdf' }
    ],
    cliches: [
      {
        id: 'signes-espace-public', exemple: 'La laïcité, c’est pas de religion en public',
        cliche: 'La laïcité interdit de porter des signes religieux dans l’espace public.',
        variantes: ['en France on est laïque donc le voile n’a rien à faire dans la rue', 'la loi de 1905 interdit d’afficher sa religion', 'la religion c’est à la maison', 'le voile est déjà interdit il faut appliquer la loi'],
        motscles: ['laicite', 'voile', 'signes', 'religieux', 'public', 'rue', '1905', 'neutralite', 'abaya', 'burqa'],
        replique: 'La loi de 1905 impose la neutralité à l’État et à ses agents, pas aux usagers : selon le Conseil d’État, ceux-ci ont « a priori, le droit d’exprimer leurs convictions religieuses ». Les seules interdictions générales viennent de deux lois précises, celle de 2004 pour les élèves du public et celle de 2010 sur la dissimulation du visage.',
        developpement: [
          'L’article 1er de la loi du 9 décembre 1905 dit : « La République assure la liberté de conscience. Elle garantit le libre exercice des cultes sous les seules restrictions édictées ci-après dans l’intérêt de l’ordre public. » L’article 2 ajoute : « La République ne reconnaît, ne salarie ni ne subventionne aucun culte. » Le texte sépare l’État et les cultes, et ne contient aucune règle sur la tenue des personnes. Dans son dossier de décembre 2024, le Conseil d’État rappelle que le devoir de stricte neutralité s’impose à l’agent public, et que la qualité d’usager n’implique en elle-même aucune limitation à l’expression de ses croyances.',
          'Les restrictions doivent venir d’un texte particulier ou de l’ordre public. La loi du 15 mars 2004 interdit aux élèves des écoles, collèges et lycées publics les signes « par lesquels les élèves manifestent ostensiblement une appartenance religieuse » : c’est sur elle que repose l’interdiction de l’abaya en 2023, validée par le Conseil d’État le 27 septembre 2024. La loi du 11 octobre 2010 dispose que « nul ne peut, dans l’espace public, porter une tenue destinée à dissimuler son visage », sans viser une religion dans son texte. Un voile qui laisse le visage visible reste donc licite dans la rue ou à l’université. Un maire ne peut pas interdire le burkini sur une plage sans risque avéré de trouble à l’ordre public (Conseil d’État, 17 juillet 2023, n° 475636).'
        ],
        chiffres: [
          { valeur: '81 %', phrase: 'Part des personnes interrogées qui jugent positivement le mot « laïcité » en novembre 2025, dont 49 % très positivement. La notion fait consensus, son contenu juridique reste mal connu.', source: 'CNCDH, Rapport 2025 sur la lutte contre le racisme, l’antisémitisme et la xénophobie, contribution de Ando, Mayer, Tiberj, Vitale, p. 292', url: CNCDH_2025 },
          { valeur: '1 984', phrase: 'Signalements pour signes ou tenues contraires à la loi de 2004 dans les établissements publics en 2022-2023, en majorité des abayas, contre 617 l’année précédente.', source: 'Conseil d’État, décision du 27 septembre 2024, n° 487944', url: 'https://conseil-etat.fr/Media/actualites/documents/2024/septembre-2024/487944-487974-489177.pdf' },
          { valeur: '26 %', phrase: 'Part des femmes musulmanes de 18 à 49 ans qui disent porter un voile en 2019-2020, contre 18 % en 2008-2009. Hors école publique et voile intégral, aucune loi ne l’interdit.', source: 'Insee Références, « La diversité religieuse en France », enquête TeO2, 30 mars 2023', url: INSEE_TEO_RELIGION }
        ],
        objection: {
          q: 'L’État a bien interdit le voile à l’école et la burqa dans la rue. Les signes religieux sont donc déjà limités.',
          r: 'C’est exact, et ces limites ont été validées par le Conseil d’État et le Conseil constitutionnel. Elles viennent de deux lois précises, l’une pour les élèves du public, l’autre sur la dissimulation du visage, et non de la loi de 1905. Hors de ces cas, une interdiction doit se justifier par l’ordre public ou le fonctionnement d’un service, et le juge l’annule souvent.'
        }
      },
      {
        id: 'islam-incompatible', exemple: 'L’islam est incompatible avec la République',
        cliche: 'L’islam est incompatible avec la République et les musulmans refusent de s’intégrer.',
        variantes: ['les musulmans font passer la religion avant la France', 'ils vivent entre eux et ne veulent pas devenir français', 'l’islam menace l’identité de la France', 'ils ne respectent pas la laïcité', 'ils ne s’intègrent pas'],
        motscles: ['islam', 'musulmans', 'integration', 'integrer', 'republique', 'separatisme', 'communautarisme', 'valeurs', 'identite', 'incompatible'],
        replique: 'D’après l’enquête TeO2 de l’Ined et de l’Insee, 94 % des enfants de deux parents immigrés se sentent français, contre 97 % des personnes sans ascendance migratoire. Ce qui progresse, ce sont les discriminations religieuses : 31 % des musulmans discriminés l’attribuent à leur religion, contre 15 % dix ans plus tôt.',
        developpement: [
          'L’enquête Trajectoires et Origines 2, menée en 2019-2020 auprès de plus de 27 000 personnes de 18 à 59 ans, décrit un fort sentiment d’appartenance nationale chez les descendants d’immigrés, y compris d’origine maghrébine ou subsaharienne. Elle décrit aussi une pratique moins uniforme qu’on le dit : 20 % des musulmans fréquentent régulièrement une mosquée, 30 % des hommes et 10 % des femmes. Ses auteurs concluent que les positions sur l’homosexualité, l’avortement ou l’égalité entre femmes et hommes dépendent de certains profils de pratiquants, présents dans chacune des grandes religions, plutôt que d’une croyance en particulier.',
          'Le baromètre de la CNCDH de fin 2025 retourne l’argument des valeurs : les personnes les plus hostiles à l’islam sont aussi les moins attachées à la laïcité et à l’égalité entre femmes et hommes. Les chercheurs du baromètre écrivent que « le ressort premier de l’islamophobie n’est ni un attachement plus marqué aux valeurs républicaines, ni une défense de l’émancipation des femmes ou des minorités sexuelles et de genre ». Dans le même temps, 42 % des personnes interrogées voient l’islam comme une menace pour l’identité de la France.'
        ],
        chiffres: [
          { valeur: '94 %', phrase: 'Part des descendants de deux parents immigrés qui se sentent français en 2019-2020 (18-59 ans, France métropolitaine). Elle est de 97 % dans la population sans ascendance migratoire et de 71 % chez les immigrés.', source: 'Ined, dossier de presse « Trajectoires et Origines 2 », 19 mai 2026', url: 'https://www.ined.fr/fr/presse/trajectoires-et-origines-2', verifier: true },
          { valeur: '31 %', phrase: 'Part des musulmans de 18 à 49 ans ayant déclaré une discrimination qui l’attribuent à leur religion en 2019-2020, contre 15 % en 2008-2009.', source: 'Insee Première n° 1911, 5 juillet 2022, actualisé le 23 février 2023', url: INSEE_IP1911 },
          { valeur: '38 % / 57 %', phrase: 'Part des sondés qui jugent la laïcité « très positive » chez les plus hostiles à l’islam (38 %) et chez les moins hostiles (57 %), fin 2025.', source: 'CNCDH, Rapport 2025, contribution de Ando, Mayer, Tiberj, Vitale, p. 311-312', url: CNCDH_2025 }
        ],
        objection: {
          q: 'La religiosité des musulmans augmente et le port du voile progresse. N’est-ce pas la preuve d’un repli ?',
          r: 'La hausse de la religiosité est réelle : le port du voile chez les musulmanes de 18 à 49 ans est passé de 18 % à 26 % en dix ans. Une pratique plus visible ne mesure pas pour autant un refus de la République : les mêmes enquêtes montrent un sentiment d’être français très majoritaire chez les descendants d’immigrés, et la loi de 1905 protège justement le libre exercice du culte.'
        }
      }
    ]
  },
  {
    id: 'quartiers-outre-mer', titre: 'Quartiers et outre-mer', statut: 'actif',
    question: 'Les territoires dont on parle sans jamais leur donner la parole.',
    intro: 'Dans les quartiers prioritaires de l’Hexagone, le chômage est plus de deux fois plus élevé que dans les quartiers voisins. Dans les départements d’outre-mer, l’alimentation coûte de 30 % à 42 % plus cher qu’en métropole. Aux Antilles, plus de huit adultes sur dix ont encore du chlordécone détectable dans le sang.',
    etat: [
      { valeur: '16,6 %', phrase: 'Taux de chômage des 15-64 ans dans les quartiers prioritaires en 2024, contre 7,5 % dans les autres quartiers des mêmes villes (France hexagonale).', source: 'ANCT-ONPV, « Situation de l’emploi en 2024 dans les QPV », juin 2026', url: 'https://media.anct.gouv.fr/ressources/2026-07/onpv-dossier-emploi-2026.original.pdf' },
      { valeur: '44,3 %', phrase: 'Taux de pauvreté dans l’ensemble des quartiers prioritaires de France métropolitaine (revenus 2021). Ces quartiers sont délimités, par construction, sur un critère de pauvreté.', source: 'Insee Analyses Normandie n° 137, 13 février 2025 (Filosofi 2021)', url: 'https://www.insee.fr/fr/statistiques/8350997', verifier: true },
      { valeur: '+30 à +42 %', phrase: 'Écart des prix de l’alimentation entre les DOM et la France métropolitaine en 2022 (+42 % en Guadeloupe, +30 % à Mayotte). Tous produits confondus, l’écart va de 9 % à La Réunion à 16 % en Guadeloupe.', source: 'Insee Première n° 1958, juillet 2023', url: 'https://www.insee.fr/fr/statistiques/7648939' },
      { valeur: '77 %', phrase: 'Part de la population de Mayotte vivant sous le seuil de pauvreté national en 2018, soit plus de 200 000 personnes.', source: 'Insee Analyses Mayotte n° 25, 1er juillet 2020', url: 'https://www.insee.fr/fr/statistiques/4622454' }
    ],
    cliches: [
      {
        id: 'milliards-banlieues', exemple: 'On a déversé des milliards dans les banlieues',
        cliche: 'L’État a déversé des milliards dans les banlieues depuis quarante ans, pour aucun résultat.',
        variantes: ['on arrose les quartiers depuis des années', 'la politique de la ville c’est un puits sans fond', 'les banlieues coûtent une fortune au contribuable', 'on a tout donné aux cités ça ne sert à rien'],
        motscles: ['banlieues', 'quartiers', 'cites', 'ville', 'milliards', 'renovation', 'anru', 'qpv', 'arrose', 'deverse'],
        replique: 'Les crédits propres à la politique de la ville représentent environ 650 millions d’euros dans le budget 2026 de l’État, et la rénovation urbaine finance surtout des immeubles. Pendant ce temps, un rapport de l’Assemblée relevait qu’en Seine-Saint-Denis, la moitié seulement des absences d’enseignants du primaire étaient remplacées, contre près de huit sur dix en France.',
        developpement: [
          'Les milliards existent, mais ils servent surtout à reconstruire : l’ANRU engage 14 milliards d’euros dans le programme lancé en 2014 pour 447 quartiers. Ces sommes paient des démolitions et des logements, pas des professeurs ou des policiers. En 2018, les députés François Cornut-Gentille et Rodrigue Kokouendo ont comparé ces services publics ordinaires : Saint-Denis comptait un policier pour 464 habitants, le 18e arrondissement de Paris un pour 315. Le maire de La Courneuve, Gilles Poux, cité dans ce rapport, parle d’une situation « qui pénalise encore une fois des populations qui en ont pourtant encore plus besoin qu’ailleurs » et d’« un nouvel exemple de discrimination territoriale ».',
          'Le chômage tient aussi à ce qui se passe à l’embauche. Lors d’un testing mené sous l’égide de la Dares entre 2019 et 2021, à qualification comparable, les recruteurs ont rappelé 22,8 % des candidatures portant un nom à consonance maghrébine, contre 33,3 % des autres. L’effet de l’adresse est plus nuancé : dans un testing réalisé à Lille en 2021, habiter en quartier prioritaire avantageait le candidat d’origine française, sans doute grâce à la prime Emplois francs, mais « ne bénéficie cependant pas aux candidats d’origine maghrébine ».'
        ],
        chiffres: [
          { valeur: '651,7 M€', phrase: 'Crédits du programme « Politique de la ville » prévus au projet de loi de finances pour 2026, contre 609,5 M€ en 2025.', source: 'Sénat, avis n° 140 (2025-2026), tome VII « Politique de la ville », 24 novembre 2025', url: 'https://www.senat.fr/rap/a25-140-7/a25-140-71.pdf', verifier: true },
          { valeur: '12 Md€', phrase: 'Budget en équivalent-subvention du nouveau programme de renouvellement urbain lancé en 2014 (14 Md€ de concours), pour 447 quartiers.', source: 'ANRU, « Le nouveau programme national de renouvellement urbain »', url: 'https://www.anru.fr/le-nouveau-programme-national-de-renouvellement-urbain-npnru' },
          { valeur: '51 % / 78 %', phrase: 'Taux de remplacement des enseignants absents dans le primaire en 2015-2016 : Seine-Saint-Denis, puis France entière.', source: 'Assemblée nationale, rapport d’information n° 1014 sur l’action de l’État en Seine-Saint-Denis, 31 mai 2018', url: 'https://www.assemblee-nationale.fr/15/pdf/rap-info/i1014.pdf' }
        ],
        objection: {
          q: 'La rénovation urbaine, ce sont bien des milliards, et la pauvreté est toujours là.',
          r: 'Les montants sont considérables. Mais ils financent du bâti, alors que l’écart se creuse dans les services publics ordinaires. Et les quartiers prioritaires sont délimités sur un critère de revenu : un quartier qui s’enrichit sort de la liste. Juger la politique à la pauvreté qui reste revient à ne regarder que les quartiers pas encore sortis.'
        }
      },
      {
        id: 'outre-mer-perfusion', exemple: 'L’outre-mer nous coûte une fortune',
        cliche: 'Les territoires d’outre-mer vivent sous perfusion et coûtent cher à la métropole.',
        variantes: ['les DOM vivent sous perfusion', 'l’outre-mer c’est un gouffre pour l’État', 'on paie pour les Antilles et Mayotte', 'les ultramarins vivent des aides'],
        motscles: ['outre', 'mer', 'dom', 'antilles', 'mayotte', 'guadeloupe', 'martinique', 'reunion', 'perfusion', 'ultramarins'],
        replique: 'Sur les 21,9 milliards d’euros de crédits de l’État destinés aux outre-mer en 2026, un tiers relève de l’enseignement scolaire, des écoles que l’État financerait aussi dans l’Hexagone. La mission « Outre-mer » proprement dite pèse 2,8 milliards, en baisse de 5 %.',
        developpement: [
          'Le chiffre de l’« effort de l’État » additionne 30 missions budgétaires, dont les salaires des enseignants, des policiers et des juges, que chaque département de l’Hexagone reçoit aussi. Les habitants, eux, vivent avec des revenus plus bas et des prix plus hauts. Le rapporteur de la commission d’enquête de l’Assemblée sur la vie chère, le député Johnny Hajjar, décrit des populations « captives » face à quelques groupes « en capacité de déterminer les prix du marché ». Il demande que les ultramarins soient traités « comme “des Français à part entière”, et non plus comme “des Français entièrement à part” ».',
          'Une part du coût vient de choix faits ailleurs. Le chlordécone, un pesticide utilisé dans les bananeraies antillaises, reste présent dans le sang de plus de huit adultes sur dix en Guadeloupe et en Martinique, et 14,3 % et 18,7 % d’entre eux dépassent la valeur au-delà de laquelle un risque pour la santé ne peut être exclu. Santé publique France observe une baisse depuis 2013, mais une exposition « à un niveau généralisé ».'
        ],
        chiffres: [
          { valeur: '21,9 Md€', phrase: 'Crédits de paiement de l’État mobilisés pour les outre-mer en 2026, répartis entre 30 missions, dont un tiers pour l’enseignement scolaire.', source: 'Sénat, avis n° 140 (2025-2026), tome IV « Outre-mer », 24 novembre 2025', url: SENAT_OM_2026 },
          { valeur: '2,8 Md€', phrase: 'Crédits de paiement de la mission « Outre-mer » au projet de loi de finances 2026, en baisse de 5,14 % sur un an.', source: 'Sénat, avis n° 140 (2025-2026), tome IV « Outre-mer », 24 novembre 2025', url: SENAT_OM_2026 },
          { valeur: '81 % / 86 %', phrase: 'Part des adultes ayant du chlordécone détectable dans le sang en 2024, en Guadeloupe (81,3 %) puis en Martinique (85,5 %).', source: 'Santé publique France, premiers résultats de l’étude Kannari 2, 24 juin 2026', url: 'https://www.santepubliquefrance.fr/sites/default/files/2026-06/cp_lps_kannari2.pdf' }
        ],
        objection: {
          q: 'Les fonctionnaires y touchent 40 % de plus : c’est bien l’argent de la métropole.',
          r: 'La majoration existe, jusqu’à 40 % du traitement aux Antilles, en Guyane et à Mayotte. Mais elle ne concerne que les agents de l’État, créée pour attirer des fonctionnaires qualifiés. Elle ne change rien pour les 77 % de Mahorais sous le seuil de pauvreté.'
        }
      }
    ]
  }
];

/* Une idée reçue d’un autre bord par dossier (fiche F3), même exigence de sources : src/data/autreBord2027.js. */
enjeux.forEach((e) => { if (autreBord[e.id]) e.cliches.push(autreBord[e.id]); });

/* Vrai, faux ou plus compliqué ? — phrases réellement entendues, réponses tirées des fiches ci-dessus.
   vrai: true/false ; verdict: 'nuance' quand la réponse dépend de la méthode (prime sur vrai). */
export const quiz = [
  { a: 'Depuis 2017, l’alimentation a augmenté plus vite que l’ensemble des prix.', vrai: true, r: '+31,1 % pour l’alimentation, +19,5 % pour l’ensemble des prix entre 2017 et 2025.', s: 'Insee, calcul L’Autre Récit' },
  { a: 'Depuis 2017, on a supprimé massivement des fonctionnaires.', vrai: false, r: 'Le nombre d’agents publics est passé de 5,66 millions fin 2017 à 5,9 millions fin 2024. Ce qui recule, c’est la part des fonctionnaires titulaires, au profit des contractuels.', s: 'Insee Première n° 1741 et n° 2094' },
  { a: 'Un tiers des foyers qui ont droit au RSA ne le demandent pas.', vrai: true, r: 'Fin 2021, 33 à 37 % des foyers éligibles ne le percevaient pas, soit environ 560 000 foyers.', s: 'DREES, 2026' },
  { a: 'Le déficit des retraites est inventé pour justifier les réformes.', vrai: false, r: 'Le COR mesure un déficit de 5,1 milliards d’euros en 2025 (0,2 % du PIB), qui se creuserait ensuite. Il est modeste aujourd’hui, mais il n’est pas inventé.', s: 'COR, rapport annuel, juin 2026' },
  { a: 'La France est le pays de l’UE qui reçoit le plus de demandes d’asile par habitant.', vrai: false, r: 'Elle est 9e sur 27. La Grèce en reçoit trois fois plus par habitant.', s: 'Eurostat 2025, calcul L’Autre Récit' },
  { a: 'Entre 2021 et 2025, le salaire moyen du privé a gagné du pouvoir d’achat.', vrai: false, r: 'Une fois l’inflation déduite, il est exactement au niveau de 2021.', s: 'Insee Première n° 2132' },
  { a: 'La délinquance baisse partout en France.', vrai: false, r: 'Les cambriolages et les vols reculent en 2025, mais les violences physiques (+5 %) et sexuelles (+8 %) enregistrées augmentent.', s: 'SSMSI, Insécurité et délinquance en 2025' },
  { a: 'La loi de 1905 interdit de porter le voile dans la rue.', vrai: false, r: 'Elle impose la neutralité à l’État et garantit le libre exercice des cultes. Dans la rue, seule la dissimulation du visage est interdite, par la loi de 2010.', s: 'Légifrance, loi du 9 décembre 1905 ; loi n° 2010-1192' },
  { a: 'Le RSA est un gouffre pour les finances publiques.', vrai: false, r: 'Le RSA représente 12,2 milliards d’euros en 2023, soit 0,4 % du PIB.', s: 'DREES, édition 2025' },
  { a: 'À CV comparable, un nom à consonance maghrébine réduit les chances d’être rappelé.', vrai: true, r: '22,8 % de rappels contre 33,3 % pour un nom à consonance française, lors d’un testing mené entre 2019 et 2021.', s: 'Testing Dares, repris par l’Insee, 2023' },
  { a: 'La part des retraites dans le PIB va exploser d’ici 2045.', vrai: false, r: 'Le COR prévoit 14,1 % du PIB en 2025 et 14,2 % en 2045, puis 15,3 % en 2070.', s: 'COR, rapport annuel, juin 2026' },
  { a: 'Un étranger hors Union européenne peut toucher le RSA dès son arrivée en France.', vrai: false, verdict: 'nuance', r: 'La règle générale exige cinq ans de titre de séjour autorisant à travailler. Les réfugiés, les bénéficiaires de la protection subsidiaire, les apatrides et les titulaires d’une carte de résident en sont dispensés, comme les Algériens. Il faut aussi avoir 25 ans et vivre en France de façon stable.', s: 'CASF, art. L262-4 ; Service-public.fr' },
  { a: 'Il y a de plus en plus d’homicides en France.', vrai: false, r: '975 victimes en 2025, stable sur un an, après une longue baisse entre 1996 et 2014.', s: 'SSMSI, bilan 2025' },
  { a: 'La part de l’emploi public dans l’emploi total a augmenté en France depuis 2019.', vrai: false, r: 'Elle a baissé de 0,9 point entre 2019 et 2023, l’une des plus fortes baisses de l’OCDE.', s: 'OCDE, Government at a Glance 2025' },
  { a: 'Les immigrés coûtent plus qu’ils ne rapportent aux finances publiques.', vrai: false, verdict: 'nuance', r: 'Tout dépend de ce qu’on leur impute. Sans compter les biens publics, leur solde est de +1,02 % du PIB. En leur attribuant une part de la défense et de la dette, il passe à −0,85 %, contre −3,25 % pour les natifs dans le même calcul.', s: 'OCDE, Perspectives des migrations internationales 2021, tableau 4.1' },
  { a: 'Le chlordécone appartient au passé.', vrai: false, r: 'En 2024, plus de huit adultes sur dix en Guadeloupe et en Martinique en avaient encore dans le sang.', s: 'Santé publique France, Kannari 2, juin 2026' },
  { a: 'La part d’élèves issus de l’immigration a fortement augmenté depuis 2012.', vrai: false, r: 'Elle est stable : 16 % des élèves de 15 ans en 2022, contre 15 % en 2012.', s: 'OCDE, PISA 2022, note France' },
];
