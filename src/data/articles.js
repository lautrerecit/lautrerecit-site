// Source unique des articles — utilisée par l'accueil (dernier article) et /articles (grille complète).
// Récupérés via l'API archive Substack (2026-06-19). Couvertures téléchargées + optimisées dans public/articles/.
// `d` = description courte (sous-titre Substack quand il existe). Liens = permaliens réels (articles abonnés).
export const SUB = 'https://autrerecit.substack.com';

export const articles = [
  { cat: 'Société',                       date: 'Juillet 2026', t: "Qui nous protège de la police ?", d: "Présomption d'usage légitime : la force protégée d'elle-même.", url: "https://autrerecit.substack.com/p/qui-nous-protege-de-la-police", cover: "/articles/police.jpg" },
  { cat: 'Société',                       date: 'Juin 2026',    t: "Pourquoi tout (dé)politiser ?", d: "La dépolitisation comme privilège.", url: "https://autrerecit.substack.com/p/pourquoi-tout-depolitiser", cover: "/articles/depolitiser.jpg" },
  { cat: 'Conflit',                       date: 'Mars 2026',    t: "Al-Aqsa sous verrou : ce que ça dit de nous", d: "Sommes-nous dignes de notre héritage ?", url: "https://autrerecit.substack.com/p/al-aqsa-sous-verrou-ce-que-ca-dit", cover: "/articles/alaqsa.jpg" },
  { cat: 'Géopolitique',                  date: 'Mars 2026',    t: "L'instrumentalisation médiatique de la condition des femmes iraniennes", d: "Sauver les femmes… ou le récit occidental dominant ?", url: "https://autrerecit.substack.com/p/linstrumentalisation-politique-et", cover: "/articles/iran.webp" },
  { cat: 'Colonisation & décolonisation', date: 'Février 2026', t: "En Cisjordanie, le nettoyage ethnique comme miroir de la paix coloniale", d: "L'expulsion habillée du vocabulaire de la paix.", url: "https://autrerecit.substack.com/p/en-cisjordanie-le-risque-de-nettoyage", cover: "/articles/cisjordanie.jpg" },
  { cat: 'Société',                       date: 'Janvier 2026', t: "Les musulmans, piégés dans le consumérisme", d: "Le halal à l'épreuve du capitalisme.", url: "https://autrerecit.substack.com/p/les-musulmans-pieges-dans-le-consumerisme", cover: "/articles/halal.jpg" },
];
