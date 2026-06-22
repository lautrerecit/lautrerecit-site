// ============================================================
// Banque de quiz — données pures (aucun code de rendu ici).
// Ajouter un quiz = ajouter un objet à ce tableau. Le moteur (/quiz/) fait le reste.
// Chaque question : { q, options[], correct (index 0-based), exp, cite?, citeAuthor? }
// ============================================================

export const quizzes = [
  {
    slug: 'nationalisme-noir',
    eyebrow: 'Quiz · Formation',
    title: 'Le nationalisme noir <em>américain</em>',
    meta: '8 questions · ~5 min',
    blurb: "De Garvey aux Panthers — l'arc complet du nationalisme noir, corrigé et sourcé.",
    cta: { label: 'Approfondir avec la formation', href: '/formation-nationalisme-noir/index.html' },
    questions: [
      {
        q: "Qui fonde l'UNIA au début du XXᵉ siècle et lance la Black Star Line pour relier les diasporas noires à l'Afrique ?",
        options: ['Marcus Garvey', 'Booker T. Washington', 'W.E.B. Du Bois', 'Malcolm X'],
        correct: 0,
        exp: "Garvey porte un nationalisme noir de la fierté et du retour à l'Afrique. La Black Star Line (1919) en est le symbole économique. Son héritage irriguera aussi bien la Nation of Islam que les Black Panthers.",
      },
      {
        q: "Le concept de « double conscience » — se voir à travers le regard méprisant d'une société dominante — est forgé en 1903 par :",
        options: ['Frantz Fanon', 'W.E.B. Du Bois', 'Aimé Césaire', 'Stokely Carmichael'],
        correct: 1,
        exp: "Dans Les Âmes du peuple noir (1903), Du Bois décrit ce dédoublement : être à la fois Américain et Noir, et se mesurer sans cesse au regard d'un monde qui vous méprise.",
        cite: "On éprouve toujours sa double nature — un Américain, un Noir : deux âmes, deux pensées, dans un seul corps noir.",
        citeAuthor: 'W.E.B. Du Bois',
      },
      {
        q: "En prison, à la fin des années 1940, Malcolm Little se convertit et rejoint :",
        options: ["l'organisation des droits civiques (NAACP)", 'la Nation of Islam', 'le Black Panther Party', 'les Frères musulmans'],
        correct: 1,
        exp: "Sa conversion à la Nation of Islam est une opération familiale : sa fratrie, déjà membre, le convainc. Malcolm Little devient Malcolm X — le « X » remplaçant le nom hérité de l'esclavage.",
      },
      {
        q: "Après son pèlerinage à La Mecque en 1964, quel basculement s'opère chez Malcolm X ?",
        options: ['Il abandonne tout militantisme', 'Il rompt avec la théologie raciale et embrasse une fraternité par-delà les races', "Il renonce à l'islam", 'Il rejoint le mouvement non-violent de King'],
        correct: 1,
        exp: "À La Mecque, Malcolm voit des musulmans de toutes carnations prier côte à côte. Il quitte la Nation of Islam, adopte l'islam sunnite et fonde l'OAAU. Sa radicalité demeure, mais le critère racial tombe.",
      },
      {
        q: "Le Black Panther Party for Self-Defense est fondé en 1966 à Oakland par :",
        options: ['Martin Luther King', 'Angela Davis et Fred Hampton', 'Huey Newton et Bobby Seale', 'Elijah Muhammad'],
        correct: 2,
        exp: "Newton et Seale fondent le parti en octobre 1966 : un programme en dix points, des patrouilles d'auto-défense face à la police, et surtout un maillage de programmes sociaux.",
      },
      {
        q: "Quel programme social des Black Panthers nourrissait gratuitement des milliers d'enfants chaque matin avant l'école ?",
        options: ['Les Freedom Schools', 'Le Free Breakfast for Children', 'La Marche sur Washington', 'Le Million Man March'],
        correct: 1,
        exp: "Le Free Breakfast for Children (1969) nourrissait les enfants des quartiers noirs. Programme si menaçant aux yeux du FBI qu'il en fit une cible prioritaire : nourrir les enfants était devenu un acte politique.",
      },
      {
        q: "Le slogan « Black Power », qui acte la rupture avec la non-violence intégrationniste, est popularisé en 1966 par :",
        options: ['Rosa Parks', 'Thurgood Marshall', 'Stokely Carmichael', 'Booker T. Washington'],
        correct: 2,
        exp: "Carmichael (futur Kwame Ture) lance « Black Power » lors de la Marche contre la peur, dans le Mississippi. Avec Charles Hamilton, il théorisera en 1967 la condition noire comme une « colonie intérieure ».",
      },
      {
        q: "Comment s'appelait le programme clandestin du FBI visant à infiltrer, discréditer et neutraliser les mouvements noirs radicaux ?",
        options: ['MK-Ultra', 'COINTELPRO', 'Le maccarthysme', 'Le plan Marshall'],
        correct: 1,
        exp: "COINTELPRO cibla la Nation of Islam, Malcolm X, King et les Panthers : lettres anonymes, indicateurs infiltrés, et l'assassinat de Fred Hampton en 1969. La répression d'État a pesé sur le destin de ces mouvements autant que leurs propres choix.",
      },
    ],
  },

  {
    slug: 'sciences-sociales',
    eyebrow: 'Quiz · Sciences sociales',
    title: 'Lire le monde&nbsp;: <em>les outils</em>',
    meta: '12 questions · ~8 min',
    blurb: "Hégémonie, orientalisme, violence symbolique, colonialité… les grilles qui traversent L'Autre Récit.",
    cta: { label: 'Découvrir le média', href: '/a-propos/' },
    questions: [
      {
        q: "L'« hégémonie culturelle » — l'idée qu'une classe domine par le consentement autant que par la force — est forgée par :",
        options: ['Karl Marx', 'Antonio Gramsci', 'Michel Foucault', 'Max Weber'],
        correct: 1,
        exp: "Gramsci montre que le pouvoir ne tient pas qu'avec la matraque : il tient surtout quand sa vision du monde passe pour le simple « bon sens ». Ce qui paraît neutre ou évident est ce qui n'a plus besoin de se justifier.",
      },
      {
        q: "Selon Edward Said, l'« orientalisme » désigne :",
        options: ["l'amour occidental pour l'art oriental", "la façon dont l'Occident a fabriqué « l'Orient » comme objet de savoir et de domination", "une école de peinture du XIXᵉ siècle", "la diplomatie entre Orient et Occident"],
        correct: 1,
        exp: "Dans Orientalisme (1978), Said démonte un appareil de savoir qui invente un « Orient » figé, exotique et inférieur — un savoir qui sert et accompagne la domination coloniale.",
        cite: "L'Orient est presque une invention de l'Occident.",
        citeAuthor: 'Edward Said',
      },
      {
        q: "La « violence symbolique » chez Pierre Bourdieu, c'est :",
        options: ["la violence des images choquantes", "une domination si intériorisée qu'elle est perçue comme naturelle, y compris par les dominés", "la censure d'État", "la violence verbale en ligne"],
        correct: 1,
        exp: "Violence douce, invisible, qui obtient la soumission sans coup de force : les dominés adhèrent aux catégories mêmes qui les classent. La domination la plus efficace est celle qu'on ne voit plus.",
      },
      {
        q: "« On ne naît pas femme, on le devient. » Cette phrase, qui sépare le sexe biologique du genre construit, est de :",
        options: ['Simone de Beauvoir', 'Hannah Arendt', 'Judith Butler', 'Angela Davis'],
        correct: 0,
        exp: "Beauvoir (Le Deuxième Sexe, 1949) ouvre la voie : le « féminin » n'est pas une nature, c'est une fabrication sociale. Toute la pensée du genre en découlera.",
      },
      {
        q: "L'État, dans la définition classique de Max Weber, se caractérise par :",
        options: ["le contrôle de l'économie", "le monopole de la violence physique légitime sur un territoire", "l'organisation des élections", "la propriété des terres"],
        correct: 1,
        exp: "Pour Weber, ce qui définit l'État moderne n'est pas ce qu'il fait, mais ce qu'il revendique : le droit exclusif d'user — ou d'autoriser — la contrainte physique sur un territoire donné.",
      },
      {
        q: "Le 17 octobre 1961, à Paris, que s'est-il passé ?",
        options: ["une grève générale", "la police réprime dans le sang une manifestation pacifique d'Algériens, jetant des corps dans la Seine", "la fin de la guerre d'Algérie", "une marche pour les droits civiques"],
        correct: 1,
        exp: "Des Algériens manifestent pacifiquement contre un couvre-feu. La répression policière fait des dizaines de morts, des corps jetés à la Seine. Un massacre longtemps nié, effacé de la mémoire officielle.",
      },
      {
        q: "Le 8 mai 1945, pendant que l'Europe fête la victoire sur le nazisme, la France :",
        options: ["accorde l'indépendance à l'Algérie", "massacre à Sétif, Guelma et Kherrata", "signe les accords d'Évian", "libère les colonies"],
        correct: 1,
        exp: "Le jour même de la capitulation allemande, la répression de manifestations nationalistes en Algérie fait des milliers de morts. L'autre face d'une date qu'on croyait connaître.",
      },
      {
        q: "La « racialisation » désigne :",
        options: ["la preuve scientifique de l'existence des races", "un processus social qui assigne les individus à des « races » hiérarchisées, sans fondement biologique", "le métissage des populations", "une politique de quotas"],
        correct: 1,
        exp: "La « race » n'est pas une donnée de la biologie : c'est un rapport social. Racialiser, c'est produire des groupes « racisés » et les ordonner — un acte de pouvoir, pas un constat de nature.",
      },
      {
        q: "« Les subalternes peuvent-ils parler ? » Cette question (Gayatri Spivak) interroge :",
        options: ["le droit de vote", "la possibilité, pour les dominés, de se faire entendre hors du cadre imposé par les dominants", "le travail des employés", "la liberté de la presse"],
        correct: 1,
        exp: "Le « subalterne » (terme repris de Gramsci) est celui que le récit dominant prive de voix. Le danger : parler « à sa place » en croyant lui donner la parole. D'où la règle de L'Autre Récit — parler depuis l'intérieur.",
      },
      {
        q: "La thèse de la « colonialité » (Aníbal Quijano) soutient que :",
        options: ["la colonisation fut bénéfique", "les rapports de domination coloniaux survivent à la fin officielle de la colonisation, dans les savoirs et les structures", "toutes les colonies sont devenues indépendantes en 1960", "le colonialisme n'a jamais existé"],
        correct: 1,
        exp: "L'indépendance juridique ne suffit pas : la hiérarchie coloniale persiste dans l'économie, la langue, les normes du « savoir légitime ». Écho direct du « on ne cesse d'être colonisé qu'en cessant d'être colonisable » de Bennabi.",
      },
      {
        q: "En pensée musulmane, les notions de réforme (iṣlāḥ) et de renouveau (tajdīd) renvoient à :",
        options: ["l'abandon de la tradition", "l'effort de revivifier la tradition pour répondre aux défis du présent", "une nouvelle religion", "le rejet de la raison"],
        correct: 1,
        exp: "Réformer, c'est puiser dans la tradition de quoi affronter le présent. On retrouve ce fil d'Ibn Badis jusqu'aux penseurs du renouveau, pour qui la culture est le premier terrain de la souveraineté.",
      },
      {
        q: "Le « mythe méritocratique » — très présent dans le discours médiatique — consiste à :",
        options: ["récompenser les meilleurs élèves", "expliquer la réussite par le seul effort individuel, en occultant les déterminismes sociaux hérités", "organiser des concours", "valoriser le travail manuel"],
        correct: 1,
        exp: "« Self-made man », « il n'y a qu'à vouloir » : le récit du mérite transforme un privilège de départ en vertu personnelle, et fait porter l'échec à ceux qui partaient déjà perdants. Naturaliser l'inégalité, c'est la rendre invisible.",
      },
    ],
  },
];
