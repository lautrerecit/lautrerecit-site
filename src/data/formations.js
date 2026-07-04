// Source unique des formations — utilisée par l'accueil et /formations/.
export const formations = [
  {
    slug: 'algerie',
    title: "L'Algérie a pensé",
    eyebrow: 'Cours · Maghreb',
    blurb:
      "Colonisation et décolonisation par les penseurs eux-mêmes — Fanon, Ibn Badis, Bennabi, Sayad, Djebar. L'autre récit de l'Algérie, écrit depuis l'intérieur.",
    status: 'soon', // ⏳ BROUILLON jusqu'au lancement (dim. soir) : masqué du catalogue. Passer 'available' pour publier.
    href: '/formations/algerie/', // → page pédagogique (renvoie au tunnel /algerie). Comme NNA.
    duration: '6 cours',
    accent: '#1F6B4A',
    image: '/formations/algerie.jpg',
  },
  {
    slug: 'nationalisme-noir',
    title: 'Le nationalisme noir américain',
    eyebrow: 'Cours · États-Unis',
    blurb:
      "De Marcus Garvey à la Nation of Islam et aux Black Panthers : comment une minorité a bâti, brique par brique, ses propres institutions face à un État qui ne lui accordait rien.",
    status: 'available',
    href: '/formations/nationalisme-noir/', // → page pédagogique du site (elle-même renvoie au tunnel de vente). Le menu « Découvrir la formation » pointe directement sur le tunnel.
    duration: '5 cours',
    accent: '#C4A24A',
    image: '/formations/nationalisme-noir.jpg',
  },
  {
    slug: 'afrique-colonisation',
    title: 'Coloniser, décoloniser l’Afrique',
    eyebrow: 'Grand cours · Afrique',
    blurb:
      "Une grande fresque : la conquête, l’exploitation et les indépendances africaines, racontées par les acteurs et les penseurs du continent. Le projet le plus ambitieux de L’Autre Récit.",
    status: 'soon',
    href: '/formations/afrique-colonisation/',
    duration: 'En préparation',
    accent: '#9A7B2E',
  },
];
