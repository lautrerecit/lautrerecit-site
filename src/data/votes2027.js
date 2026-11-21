/* Qui a voté quoi — scrutins publics de l'Assemblée nationale.
   Chaque scrutin est confirmé sur sa page officielle (assemblee-nationale.fr/dyn/{leg}/scrutins/{n}).
   Groupes rangés dans l'ordre de l'hémicycle, de gauche à droite ; les noms couvrent les XVIe et XVIIe législatures. */

export const groupes = [
  { id: 'GDR', court: 'GDR', nom: 'Gauche démocrate et républicaine' },
  { id: 'LFI', court: 'LFI', nom: 'La France insoumise' },
  { id: 'ECO', court: 'Écologistes', nom: 'Écologistes' },
  { id: 'SOC', court: 'Socialistes', nom: 'Socialistes' },
  { id: 'LIOT', court: 'LIOT', nom: 'Libertés, indépendants, outre-mer et territoires' },
  { id: 'DEM', court: 'MoDem', nom: 'Les Démocrates (MoDem)' },
  { id: 'EPR', court: 'Renaissance', nom: 'Renaissance / Ensemble pour la République' },
  { id: 'HOR', court: 'Horizons', nom: 'Horizons' },
  { id: 'DR', court: 'LR', nom: 'Les Républicains / Droite républicaine' },
  { id: 'UDR', court: 'UDR', nom: 'Union des droites pour la République (Ciotti)' },
  { id: 'RN', court: 'RN', nom: 'Rassemblement national' },
];

export const regleSelection = "Nous avons retenu les scrutins publics de l’Assemblée nationale, de juillet 2022 au 31 octobre 2026, portant directement sur le niveau des salaires (Smic, cotisations sur les bas salaires, aides conditionnées aux salaires) ou sur le coût de la vie (TVA sur l’énergie et les carburants, marges, superprofits, loi Egalim, texte « pouvoir d’achat »). Les textes viennent de tous les bords : gouvernement, gauche, RN, droite. Les votes à main levée et en commission sont exclus, faute de détail par groupe. Les décomptes ne comptent que les députés présents qui ont voté. Chaque chiffre vient de la page officielle du scrutin.";

export const aRetenir = {
  "salaires": "En juillet 2022, les députés RN présents ont voté contre les deux amendements portant le Smic à environ 1 500 € net, comme la majorité présidentielle et LR. Seule la gauche a voté pour. Le RN défend à la place une exonération de cotisations sur les hausses de salaires, dont la gauche, Renaissance, le MoDem et Horizons ont voté la suppression en janvier 2023."
};

export const scrutins = [
 {
  "sujet": "salaires",
  "leg": 16,
  "numero": 43,
  "date": "2022-07-20",
  "url": "https://www.assemblee-nationale.fr/dyn/16/scrutins/43",
  "intitule": "Amendement n° 844 de Mme Guetté après l’article 4 du projet de loi portant mesures d’urgence pour la protection du pouvoir d’achat (première lecture)",
  "porteur": "LFI-NUPES (Clémence Guetté et le groupe)",
  "resultat": "Rejeté",
  "pour": 121,
  "contre": 257,
  "groupes": {
   "LFI": {
    "pour": 70,
    "contre": 0,
    "abst": 0,
    "position": "pour"
   },
   "SOC": {
    "pour": 19,
    "contre": 0,
    "abst": 0,
    "position": "pour"
   },
   "ECO": {
    "pour": 17,
    "contre": 0,
    "abst": 0,
    "position": "pour"
   },
   "GDR": {
    "pour": 12,
    "contre": 0,
    "abst": 0,
    "position": "pour"
   },
   "EPR": {
    "pour": 0,
    "contre": 114,
    "abst": 0,
    "position": "contre"
   },
   "DEM": {
    "pour": 0,
    "contre": 34,
    "abst": 0,
    "position": "contre"
   },
   "HOR": {
    "pour": 0,
    "contre": 20,
    "abst": 2,
    "position": "contre"
   },
   "DR": {
    "pour": 0,
    "contre": 19,
    "abst": 1,
    "position": "contre"
   },
   "RN": {
    "pour": 0,
    "contre": 69,
    "abst": 1,
    "position": "contre"
   }
  },
  "phrase": "Aurait porté le Smic à 1 923 € brut minimum (environ 1 500 € net) au 1er août 2022, avec une caisse de péréquation entre entreprises.",
  "confirme": true
 },
 {
  "sujet": "salaires",
  "leg": 16,
  "numero": 44,
  "date": "2022-07-20",
  "url": "https://www.assemblee-nationale.fr/dyn/16/scrutins/44",
  "intitule": "Amendement n° 94 de M. Leseul et amendements identiques après l’article 4 du projet de loi portant mesures d’urgence pour la protection du pouvoir d’achat (première lecture)",
  "porteur": "Socialistes (Gérard Leseul) et identiques",
  "resultat": "Rejeté",
  "pour": 121,
  "contre": 255,
  "groupes": {
   "LFI": {
    "pour": 69,
    "contre": 0,
    "abst": 0,
    "position": "pour"
   },
   "SOC": {
    "pour": 19,
    "contre": 0,
    "abst": 0,
    "position": "pour"
   },
   "ECO": {
    "pour": 17,
    "contre": 0,
    "abst": 0,
    "position": "pour"
   },
   "GDR": {
    "pour": 12,
    "contre": 0,
    "abst": 0,
    "position": "pour"
   },
   "LIOT": {
    "pour": 1,
    "contre": 0,
    "abst": 0,
    "position": "pour"
   },
   "EPR": {
    "pour": 0,
    "contre": 114,
    "abst": 0,
    "position": "contre"
   },
   "DEM": {
    "pour": 0,
    "contre": 32,
    "abst": 0,
    "position": "contre"
   },
   "HOR": {
    "pour": 0,
    "contre": 20,
    "abst": 2,
    "position": "contre"
   },
   "DR": {
    "pour": 0,
    "contre": 19,
    "abst": 0,
    "position": "contre"
   },
   "RN": {
    "pour": 0,
    "contre": 69,
    "abst": 1,
    "position": "contre"
   }
  },
  "phrase": "Aurait fixé le Smic à au moins 1 923 € brut mensuels (environ 1 500 € net) au 1er août 2022.",
  "confirme": true
 },
 {
  "sujet": "vie-chere",
  "leg": 16,
  "numero": 81,
  "date": "2022-07-21",
  "url": "https://www.assemblee-nationale.fr/dyn/16/scrutins/81",
  "intitule": "Ensemble du projet de loi portant mesures d’urgence pour la protection du pouvoir d’achat (première lecture)",
  "porteur": "Gouvernement Borne",
  "resultat": "Adopté",
  "pour": 341,
  "contre": 116,
  "groupes": {
   "LFI": {
    "pour": 0,
    "contre": 74,
    "abst": 0,
    "position": "contre"
   },
   "SOC": {
    "pour": 0,
    "contre": 3,
    "abst": 17,
    "position": "abstention"
   },
   "ECO": {
    "pour": 0,
    "contre": 21,
    "abst": 0,
    "position": "contre"
   },
   "GDR": {
    "pour": 0,
    "contre": 18,
    "abst": 4,
    "position": "contre"
   },
   "LIOT": {
    "pour": 5,
    "contre": 0,
    "abst": 0,
    "position": "pour"
   },
   "EPR": {
    "pour": 136,
    "contre": 0,
    "abst": 0,
    "position": "pour"
   },
   "DEM": {
    "pour": 37,
    "contre": 0,
    "abst": 0,
    "position": "pour"
   },
   "HOR": {
    "pour": 26,
    "contre": 0,
    "abst": 0,
    "position": "pour"
   },
   "DR": {
    "pour": 54,
    "contre": 0,
    "abst": 0,
    "position": "pour"
   },
   "RN": {
    "pour": 78,
    "contre": 0,
    "abst": 0,
    "position": "pour"
   }
  },
  "phrase": "Prime de partage de la valeur, revalorisation de prestations, plafonnement des hausses de loyers ; aucune hausse du Smic.",
  "objetAVerifier": true,
  "confirme": true
 },
 {
  "sujet": "vie-chere",
  "leg": 16,
  "numero": 103,
  "date": "2022-07-23",
  "url": "https://www.assemblee-nationale.fr/dyn/16/scrutins/103",
  "intitule": "Amendement n° 549 de M. Maudet après l’article premier du projet de loi de finances rectificative pour 2022 (première lecture)",
  "porteur": "LFI-NUPES (Damien Maudet et le groupe)",
  "resultat": "Rejeté",
  "pour": 100,
  "contre": 110,
  "groupes": {
   "LFI": {
    "pour": 37,
    "contre": 0,
    "abst": 0,
    "position": "pour"
   },
   "SOC": {
    "pour": 6,
    "contre": 0,
    "abst": 0,
    "position": "pour"
   },
   "ECO": {
    "pour": 6,
    "contre": 0,
    "abst": 0,
    "position": "pour"
   },
   "GDR": {
    "pour": 6,
    "contre": 0,
    "abst": 0,
    "position": "pour"
   },
   "LIOT": {
    "pour": 3,
    "contre": 0,
    "abst": 1,
    "position": "pour"
   },
   "EPR": {
    "pour": 0,
    "contre": 74,
    "abst": 3,
    "position": "contre"
   },
   "DEM": {
    "pour": 0,
    "contre": 21,
    "abst": 1,
    "position": "contre"
   },
   "HOR": {
    "pour": 1,
    "contre": 12,
    "abst": 0,
    "position": "contre"
   },
   "DR": {
    "pour": 0,
    "contre": 3,
    "abst": 5,
    "position": "abstention"
   },
   "RN": {
    "pour": 39,
    "contre": 0,
    "abst": 0,
    "position": "pour"
   }
  },
  "phrase": "Taxe exceptionnelle de 25 % sur les bénéfices 2022-2023 des groupes pétroliers, gaziers, maritimes et autoroutiers de plus de 999 M€ de chiffre d’affaires.",
  "confirme": true
 },
 {
  "sujet": "vie-chere",
  "leg": 16,
  "numero": 510,
  "date": "2022-11-07",
  "url": "https://www.assemblee-nationale.fr/dyn/16/scrutins/510",
  "intitule": "Amendement n° 343 de M. Jean-Philippe Tanguy avant l’article 1er du projet de loi de finances rectificative pour 2022 (première lecture)",
  "porteur": "Rassemblement national (Jean-Philippe Tanguy et le groupe)",
  "resultat": "Rejeté",
  "pour": 56,
  "contre": 135,
  "groupes": {
   "LFI": {
    "pour": 0,
    "contre": 0,
    "abst": 19,
    "position": "abstention"
   },
   "SOC": {
    "pour": 0,
    "contre": 2,
    "abst": 0,
    "position": "contre"
   },
   "ECO": {
    "pour": 0,
    "contre": 2,
    "abst": 0,
    "position": "contre"
   },
   "LIOT": {
    "pour": 1,
    "contre": 2,
    "abst": 0,
    "position": "contre"
   },
   "EPR": {
    "pour": 0,
    "contre": 88,
    "abst": 0,
    "position": "contre"
   },
   "DEM": {
    "pour": 0,
    "contre": 25,
    "abst": 1,
    "position": "contre"
   },
   "HOR": {
    "pour": 1,
    "contre": 15,
    "abst": 0,
    "position": "contre"
   },
   "DR": {
    "pour": 3,
    "contre": 1,
    "abst": 1,
    "position": "pour"
   },
   "RN": {
    "pour": 50,
    "contre": 0,
    "abst": 0,
    "position": "pour"
   }
  },
  "phrase": "Aurait baissé la TVA de 20 % à 5,5 % sur le gaz, l’électricité, le fioul et les carburants.",
  "confirme": true
 },
 {
  "sujet": "salaires",
  "leg": 16,
  "numero": 824,
  "date": "2023-01-12",
  "url": "https://www.assemblee-nationale.fr/dyn/16/scrutins/824",
  "intitule": "Amendement de suppression n° 1 de M. Guedj et identiques, à l’article premier de la proposition de loi du RN visant à inciter les entreprises à augmenter les salaires nets de 10 %",
  "porteur": "Texte du RN ; suppression demandée par Jérôme Guedj (PS) et identiques",
  "resultat": "Adopté",
  "pour": 124,
  "contre": 85,
  "lecture": "Ici, « pour » signifie pour la suppression de l’article, donc contre le texte du RN.",
  "groupes": {
   "LFI": {
    "pour": 16,
    "contre": 0,
    "abst": 0,
    "position": "pour"
   },
   "SOC": {
    "pour": 9,
    "contre": 0,
    "abst": 0,
    "position": "pour"
   },
   "ECO": {
    "pour": 8,
    "contre": 0,
    "abst": 0,
    "position": "pour"
   },
   "GDR": {
    "pour": 5,
    "contre": 0,
    "abst": 0,
    "position": "pour"
   },
   "LIOT": {
    "pour": 1,
    "contre": 0,
    "abst": 1,
    "position": "partagé"
   },
   "EPR": {
    "pour": 63,
    "contre": 0,
    "abst": 0,
    "position": "pour"
   },
   "DEM": {
    "pour": 16,
    "contre": 0,
    "abst": 0,
    "position": "pour"
   },
   "HOR": {
    "pour": 6,
    "contre": 0,
    "abst": 0,
    "position": "pour"
   },
   "DR": {
    "pour": 0,
    "contre": 0,
    "abst": 5,
    "position": "abstention"
   },
   "RN": {
    "pour": 0,
    "contre": 84,
    "abst": 0,
    "position": "contre"
   }
  },
  "phrase": "A supprimé l’article 1er du texte RN, qui exonérait de cotisations patronales les hausses de salaires de 10 % (jusqu’à 3 Smic).",
  "objetAVerifier": true,
  "confirme": true
 },
 {
  "sujet": "vie-chere",
  "leg": 16,
  "numero": 1254,
  "date": "2023-03-22",
  "url": "https://www.assemblee-nationale.fr/dyn/16/scrutins/1254",
  "intitule": "Ensemble de la proposition de loi tendant à renforcer l’équilibre dans les relations commerciales entre fournisseurs et distributeurs (texte de la commission mixte paritaire)",
  "porteur": "Frédéric Descrozaille (Renaissance), dite « Egalim 3 »",
  "resultat": "Adopté",
  "pour": 117,
  "contre": 0,
  "groupes": {
   "LFI": {
    "pour": 0,
    "contre": 0,
    "abst": 10,
    "position": "abstention"
   },
   "SOC": {
    "pour": 5,
    "contre": 0,
    "abst": 0,
    "position": "pour"
   },
   "ECO": {
    "pour": 3,
    "contre": 0,
    "abst": 0,
    "position": "pour"
   },
   "GDR": {
    "pour": 2,
    "contre": 0,
    "abst": 0,
    "position": "pour"
   },
   "LIOT": {
    "pour": 2,
    "contre": 0,
    "abst": 0,
    "position": "pour"
   },
   "EPR": {
    "pour": 59,
    "contre": 0,
    "abst": 0,
    "position": "pour"
   },
   "DEM": {
    "pour": 19,
    "contre": 0,
    "abst": 0,
    "position": "pour"
   },
   "HOR": {
    "pour": 12,
    "contre": 0,
    "abst": 0,
    "position": "pour"
   },
   "DR": {
    "pour": 14,
    "contre": 0,
    "abst": 0,
    "position": "pour"
   },
   "RN": {
    "pour": 0,
    "contre": 0,
    "abst": 24,
    "position": "abstention"
   }
  },
  "phrase": "Prolonge le seuil de revente à perte de 10 % et l’encadrement des promotions, durcit le cadre des négociations entre industriels et grande distribution.",
  "objetAVerifier": true,
  "confirme": true
 },
 {
  "sujet": "salaires",
  "leg": 16,
  "numero": 2012,
  "date": "2023-06-26",
  "url": "https://www.assemblee-nationale.fr/dyn/16/scrutins/2012",
  "intitule": "Amendement n° 115 de M. Monnet après l’article premier du projet de loi transposant l’accord national interprofessionnel sur le partage de la valeur",
  "porteur": "GDR-NUPES (Yannick Monnet)",
  "resultat": "Rejeté",
  "pour": 34,
  "contre": 55,
  "groupes": {
   "LFI": {
    "pour": 27,
    "contre": 0,
    "abst": 0,
    "position": "pour"
   },
   "SOC": {
    "pour": 3,
    "contre": 0,
    "abst": 0,
    "position": "pour"
   },
   "ECO": {
    "pour": 3,
    "contre": 0,
    "abst": 0,
    "position": "pour"
   },
   "GDR": {
    "pour": 1,
    "contre": 0,
    "abst": 0,
    "position": "pour"
   },
   "EPR": {
    "pour": 0,
    "contre": 44,
    "abst": 0,
    "position": "contre"
   },
   "DEM": {
    "pour": 0,
    "contre": 6,
    "abst": 1,
    "position": "contre"
   },
   "HOR": {
    "pour": 0,
    "contre": 4,
    "abst": 0,
    "position": "contre"
   },
   "DR": {
    "pour": 0,
    "contre": 1,
    "abst": 2,
    "position": "abstention"
   },
   "RN": {
    "pour": 0,
    "contre": 0,
    "abst": 13,
    "position": "abstention"
   }
  },
  "phrase": "Aurait suspendu les allègements de cotisations patronales des branches qui ne relèvent pas leurs minima après une 2e hausse annuelle du Smic.",
  "objetAVerifier": true,
  "confirme": true
 },
 {
  "sujet": "vie-chere",
  "leg": 16,
  "numero": 3101,
  "date": "2023-11-30",
  "url": "https://www.assemblee-nationale.fr/dyn/16/scrutins/3101",
  "intitule": "Ensemble de la proposition de loi visant à lutter contre l’inflation par l’encadrement des marges des industries agroalimentaires, du raffinage et de la grande distribution et par un prix d’achat plancher des matières premières agricoles (première lecture)",
  "porteur": "LFI-NUPES (Manuel Bompard)",
  "resultat": "Rejeté",
  "pour": 162,
  "contre": 168,
  "groupes": {
   "LFI": {
    "pour": 74,
    "contre": 0,
    "abst": 0,
    "position": "pour"
   },
   "SOC": {
    "pour": 12,
    "contre": 0,
    "abst": 0,
    "position": "pour"
   },
   "ECO": {
    "pour": 15,
    "contre": 0,
    "abst": 0,
    "position": "pour"
   },
   "GDR": {
    "pour": 12,
    "contre": 0,
    "abst": 0,
    "position": "pour"
   },
   "LIOT": {
    "pour": 1,
    "contre": 1,
    "abst": 0,
    "position": "partagé"
   },
   "EPR": {
    "pour": 0,
    "contre": 107,
    "abst": 0,
    "position": "contre"
   },
   "DEM": {
    "pour": 0,
    "contre": 37,
    "abst": 0,
    "position": "contre"
   },
   "HOR": {
    "pour": 0,
    "contre": 17,
    "abst": 0,
    "position": "contre"
   },
   "DR": {
    "pour": 0,
    "contre": 6,
    "abst": 0,
    "position": "contre"
   },
   "RN": {
    "pour": 47,
    "contre": 0,
    "abst": 0,
    "position": "pour"
   }
  },
  "phrase": "Aurait encadré les taux de marge de l’agroalimentaire, du raffinage et de la distribution, avec un prix plancher pour les produits agricoles.",
  "confirme": true
 },
 {
  "sujet": "vie-chere",
  "leg": 17,
  "numero": 147,
  "date": "2024-10-26",
  "url": "https://www.assemblee-nationale.fr/dyn/17/scrutins/147",
  "intitule": "Amendement n° I-917 de M. Jean-Philippe Tanguy après l’article 10 du projet de loi de finances pour 2025 (première lecture)",
  "porteur": "Rassemblement national (Jean-Philippe Tanguy et le groupe)",
  "resultat": "Rejeté",
  "pour": 73,
  "contre": 118,
  "groupes": {
   "LFI": {
    "pour": 0,
    "contre": 37,
    "abst": 0,
    "position": "contre"
   },
   "SOC": {
    "pour": 0,
    "contre": 30,
    "abst": 0,
    "position": "contre"
   },
   "ECO": {
    "pour": 0,
    "contre": 16,
    "abst": 1,
    "position": "contre"
   },
   "GDR": {
    "pour": 0,
    "contre": 0,
    "abst": 2,
    "position": "abstention"
   },
   "LIOT": {
    "pour": 0,
    "contre": 3,
    "abst": 0,
    "position": "contre"
   },
   "EPR": {
    "pour": 0,
    "contre": 19,
    "abst": 0,
    "position": "contre"
   },
   "DEM": {
    "pour": 0,
    "contre": 6,
    "abst": 2,
    "position": "contre"
   },
   "HOR": {
    "pour": 0,
    "contre": 2,
    "abst": 0,
    "position": "contre"
   },
   "DR": {
    "pour": 0,
    "contre": 5,
    "abst": 0,
    "position": "contre"
   },
   "RN": {
    "pour": 65,
    "contre": 0,
    "abst": 0,
    "position": "pour"
   },
   "UDR": {
    "pour": 8,
    "contre": 0,
    "abst": 0,
    "position": "pour"
   }
  },
  "phrase": "Aurait abaissé la TVA sur les carburants de 20 % à 5,5 %.",
  "confirme": true
 },
 {
  "sujet": "vie-chere",
  "leg": 17,
  "numero": 148,
  "date": "2024-10-26",
  "url": "https://www.assemblee-nationale.fr/dyn/17/scrutins/148",
  "intitule": "Amendement n° I-2249 de M. Laisney après l’article 10 du projet de loi de finances pour 2025 (première lecture)",
  "porteur": "LFI-NFP (Maxime Laisney et le groupe)",
  "resultat": "Adopté, sans effet : la partie recettes du budget a été rejetée",
  "pour": 164,
  "contre": 40,
  "groupes": {
   "LFI": {
    "pour": 42,
    "contre": 0,
    "abst": 0,
    "position": "pour"
   },
   "SOC": {
    "pour": 25,
    "contre": 4,
    "abst": 0,
    "position": "pour"
   },
   "ECO": {
    "pour": 19,
    "contre": 0,
    "abst": 0,
    "position": "pour"
   },
   "GDR": {
    "pour": 8,
    "contre": 0,
    "abst": 0,
    "position": "pour"
   },
   "LIOT": {
    "pour": 0,
    "contre": 2,
    "abst": 1,
    "position": "contre"
   },
   "EPR": {
    "pour": 0,
    "contre": 22,
    "abst": 0,
    "position": "contre"
   },
   "DEM": {
    "pour": 1,
    "contre": 4,
    "abst": 2,
    "position": "contre"
   },
   "HOR": {
    "pour": 0,
    "contre": 2,
    "abst": 0,
    "position": "contre"
   },
   "DR": {
    "pour": 0,
    "contre": 6,
    "abst": 0,
    "position": "contre"
   },
   "RN": {
    "pour": 64,
    "contre": 0,
    "abst": 0,
    "position": "pour"
   },
   "UDR": {
    "pour": 5,
    "contre": 0,
    "abst": 0,
    "position": "pour"
   }
  },
  "phrase": "TVA à 5,5 % sur la part « essentielle » des consommations d’électricité et de gaz des ménages, volume fixé par décret.",
  "confirme": true
 },
 {
  "sujet": "vie-chere",
  "leg": 17,
  "numero": 4038,
  "date": "2025-11-20",
  "url": "https://www.assemblee-nationale.fr/dyn/17/scrutins/4038",
  "intitule": "Amendement n° I-792 de Mme Le Pen après l’article 25 du projet de loi de finances pour 2026 (première lecture)",
  "porteur": "Rassemblement national (Marine Le Pen et le groupe)",
  "resultat": "Rejeté",
  "pour": 97,
  "contre": 167,
  "groupes": {
   "LFI": {
    "pour": 0,
    "contre": 27,
    "abst": 0,
    "position": "contre"
   },
   "SOC": {
    "pour": 1,
    "contre": 35,
    "abst": 0,
    "position": "contre"
   },
   "ECO": {
    "pour": 0,
    "contre": 13,
    "abst": 0,
    "position": "contre"
   },
   "GDR": {
    "pour": 0,
    "contre": 2,
    "abst": 0,
    "position": "contre"
   },
   "LIOT": {
    "pour": 0,
    "contre": 9,
    "abst": 1,
    "position": "contre"
   },
   "EPR": {
    "pour": 0,
    "contre": 47,
    "abst": 0,
    "position": "contre"
   },
   "DEM": {
    "pour": 0,
    "contre": 10,
    "abst": 0,
    "position": "contre"
   },
   "HOR": {
    "pour": 0,
    "contre": 11,
    "abst": 1,
    "position": "contre"
   },
   "DR": {
    "pour": 0,
    "contre": 10,
    "abst": 2,
    "position": "contre"
   },
   "RN": {
    "pour": 87,
    "contre": 0,
    "abst": 0,
    "position": "pour"
   },
   "UDR": {
    "pour": 8,
    "contre": 0,
    "abst": 0,
    "position": "pour"
   }
  },
  "phrase": "Aurait abaissé la TVA de 20 % à 5,5 % sur le gaz, l’électricité, le fioul et les carburants.",
  "confirme": true
 },
 {
  "sujet": "vie-chere",
  "leg": 17,
  "numero": 4039,
  "date": "2025-11-20",
  "url": "https://www.assemblee-nationale.fr/dyn/17/scrutins/4039",
  "intitule": "Amendement n° I-2098 de M. Laisney après l’article 25 du projet de loi de finances pour 2026 (première lecture)",
  "porteur": "LFI-NFP (Maxime Laisney et le groupe)",
  "resultat": "Rejeté",
  "pour": 38,
  "contre": 105,
  "groupes": {
   "LFI": {
    "pour": 26,
    "contre": 0,
    "abst": 0,
    "position": "pour"
   },
   "SOC": {
    "pour": 5,
    "contre": 20,
    "abst": 8,
    "position": "contre"
   },
   "ECO": {
    "pour": 0,
    "contre": 0,
    "abst": 12,
    "position": "abstention"
   },
   "GDR": {
    "pour": 4,
    "contre": 0,
    "abst": 0,
    "position": "pour"
   },
   "LIOT": {
    "pour": 0,
    "contre": 6,
    "abst": 4,
    "position": "contre"
   },
   "EPR": {
    "pour": 0,
    "contre": 46,
    "abst": 0,
    "position": "contre"
   },
   "DEM": {
    "pour": 0,
    "contre": 10,
    "abst": 0,
    "position": "contre"
   },
   "HOR": {
    "pour": 0,
    "contre": 10,
    "abst": 0,
    "position": "contre"
   },
   "DR": {
    "pour": 0,
    "contre": 10,
    "abst": 2,
    "position": "contre"
   },
   "RN": {
    "pour": 0,
    "contre": 0,
    "abst": 88,
    "position": "abstention"
   },
   "UDR": {
    "pour": 2,
    "contre": 0,
    "abst": 6,
    "position": "abstention"
   }
  },
  "phrase": "TVA à 5,5 % sur l’électricité et le gaz « essentiels » des ménages et sur leurs abonnements, passés à 20 % en août 2025.",
  "confirme": true
 },
 {
  "sujet": "salaires",
  "leg": 17,
  "numero": 8976,
  "date": "2026-10-22",
  "url": "https://www.assemblee-nationale.fr/dyn/17/scrutins/8976",
  "intitule": "Amendement n° 350 de M. Wauquiez et identiques à l’article 7 du projet de loi de financement de la sécurité sociale pour 2027 (première lecture)",
  "porteur": "Droite républicaine (Laurent Wauquiez) et identiques",
  "resultat": "Adopté",
  "pour": 101,
  "contre": 68,
  "groupes": {
   "LFI": {
    "pour": 0,
    "contre": 23,
    "abst": 0,
    "position": "contre"
   },
   "SOC": {
    "pour": 0,
    "contre": 14,
    "abst": 0,
    "position": "contre"
   },
   "ECO": {
    "pour": 1,
    "contre": 15,
    "abst": 0,
    "position": "contre"
   },
   "GDR": {
    "pour": 0,
    "contre": 2,
    "abst": 0,
    "position": "contre"
   },
   "EPR": {
    "pour": 23,
    "contre": 7,
    "abst": 1,
    "position": "pour"
   },
   "DEM": {
    "pour": 1,
    "contre": 7,
    "abst": 1,
    "position": "contre"
   },
   "HOR": {
    "pour": 8,
    "contre": 0,
    "abst": 0,
    "position": "pour"
   },
   "DR": {
    "pour": 7,
    "contre": 0,
    "abst": 0,
    "position": "pour"
   },
   "RN": {
    "pour": 58,
    "contre": 0,
    "abst": 0,
    "position": "pour"
   },
   "UDR": {
    "pour": 3,
    "contre": 0,
    "abst": 0,
    "position": "pour"
   }
  },
  "phrase": "Supprime la réforme des allègements de cotisations patronales sur les bas salaires prévue par le gouvernement (environ 3,7 Md€ selon les auteurs).",
  "objetAVerifier": true,
  "confirme": true
 }
];
