// ============================================================
// Banque de versets — registre SOBRE (verset du jour, déterministe par date).
// On ne « tire » jamais l'Écriture au hasard sur clic : seul le défilement par jour est permis.
// ⚠️ Harakat à faire relire par Rany avant mise en ligne définitive.
// Mots-clés en or via <em> dans la traduction.
// ============================================================

export const versets = [
  // — Réforme / changement de soi —
  { theme: 'Réforme', ar: 'إِنَّ اللَّهَ لَا يُغَيِّرُ مَا بِقَوْمٍ حَتَّىٰ يُغَيِّرُوا مَا بِأَنْفُسِهِمْ', fr: "«&nbsp;Allah ne modifie pas l'état d'<em>un peuple</em> tant que les individus qui le composent ne modifient pas ce qui est <em>en eux-mêmes</em>.&nbsp;»", ref: "Ar-Ra'd · 13 · 11" },
  { theme: 'Réforme', ar: 'إِنْ أُرِيدُ إِلَّا الْإِصْلَاحَ مَا اسْتَطَعْتُ', fr: "«&nbsp;Je ne veux que la <em>réforme</em>, autant que je le peux.&nbsp;»", ref: 'Hud · 11 · 88' },
  { theme: 'Effort', ar: 'وَأَن لَّيْسَ لِلْإِنسَانِ إِلَّا مَا سَعَىٰ', fr: "«&nbsp;L'homme n'obtient que le fruit de ses <em>efforts</em>.&nbsp;»", ref: 'An-Najm · 53 · 39' },
  { theme: 'Action', ar: 'وَقُلِ اعْمَلُوا فَسَيَرَى اللَّهُ عَمَلَكُمْ وَرَسُولُهُ وَالْمُؤْمِنُونَ', fr: "«&nbsp;Et dis&nbsp;: <em>Œuvrez</em>&nbsp;! Allah verra votre œuvre, ainsi que Son messager et les croyants.&nbsp;»", ref: 'At-Tawba · 9 · 105' },

  // — Justice —
  { theme: 'Justice', ar: 'إِنَّ اللَّهَ يَأْمُرُ بِالْعَدْلِ وَالْإِحْسَانِ وَإِيتَاءِ ذِي الْقُرْبَىٰ', fr: "«&nbsp;Certes, Allah commande l'<em>équité</em>, la <em>bienfaisance</em> et la générosité envers les proches.&nbsp;»", ref: 'An-Nahl · 16 · 90' },
  { theme: 'Justice', ar: 'يَا أَيُّهَا الَّذِينَ آمَنُوا كُونُوا قَوَّامِينَ بِالْقِسْطِ شُهَدَاءَ لِلَّهِ وَلَوْ عَلَىٰ أَنفُسِكُمْ', fr: "«&nbsp;Soyez fermes en <em>justice</em>, témoins devant Allah, fût-ce <em>contre vous-mêmes</em>.&nbsp;»", ref: 'An-Nisa · 4 · 135' },
  { theme: 'Justice', ar: 'اعْدِلُوا هُوَ أَقْرَبُ لِلتَّقْوَىٰ', fr: "«&nbsp;Soyez <em>équitables</em>&nbsp;: cela est plus proche de la piété.&nbsp;»", ref: "Al-Ma'ida · 5 · 8" },

  // — Vérité —
  { theme: 'Vérité', ar: 'وَلَا تَلْبِسُوا الْحَقَّ بِالْبَاطِلِ وَتَكْتُمُوا الْحَقَّ وَأَنتُمْ تَعْلَمُونَ', fr: "«&nbsp;Ne mêlez pas le <em>vrai</em> au <em>faux</em>&nbsp;; ne cachez pas la vérité alors que vous savez.&nbsp;»", ref: 'Al-Baqara · 2 · 42' },
  { theme: 'Vérité', ar: 'وَقُلْ جَاءَ الْحَقُّ وَزَهَقَ الْبَاطِلُ ۚ إِنَّ الْبَاطِلَ كَانَ زَهُوقًا', fr: "«&nbsp;Et dis&nbsp;: la <em>vérité</em> est venue, l'erreur a disparu&nbsp;; l'erreur est vouée à disparaître.&nbsp;»", ref: 'Al-Isra · 17 · 81' },

  // — Dunya / Akhira —
  { theme: 'Dunya & Akhira', ar: 'وَابْتَغِ فِيمَا آتَاكَ اللَّهُ الدَّارَ الْآخِرَةَ ۖ وَلَا تَنسَ نَصِيبَكَ مِنَ الدُّنْيَا', fr: "«&nbsp;Recherche, à travers ce qu'Allah t'a donné, la <em>demeure dernière</em>, sans oublier ta <em>part en ce monde</em>.&nbsp;»", ref: 'Al-Qasas · 28 · 77' },
  { theme: 'Dunya & Akhira', ar: 'بَلْ تُؤْثِرُونَ الْحَيَاةَ الدُّنْيَا ۖ وَالْآخِرَةُ خَيْرٌ وَأَبْقَىٰ', fr: "«&nbsp;Mais vous préférez la <em>vie d'ici-bas</em>, alors que l'<em>au-delà</em> est meilleur et plus durable.&nbsp;»", ref: "Al-A'la · 87 · 16-17" },
  { theme: 'Dunya & Akhira', ar: 'وَمَا هَٰذِهِ الْحَيَاةُ الدُّنْيَا إِلَّا لَهْوٌ وَلَعِبٌ ۚ وَإِنَّ الدَّارَ الْآخِرَةَ لَهِيَ الْحَيَوَانُ', fr: "«&nbsp;Cette vie d'ici-bas n'est que <em>divertissement</em> et jeu&nbsp;; la demeure de l'<em>au-delà</em>, voilà la vraie vie.&nbsp;»", ref: "Al-'Ankabut · 29 · 64" },

  // — Savoir —
  { theme: 'Savoir', ar: 'قُلْ هَلْ يَسْتَوِي الَّذِينَ يَعْلَمُونَ وَالَّذِينَ لَا يَعْلَمُونَ', fr: "«&nbsp;Dis&nbsp;: sont-ils égaux, ceux qui <em>savent</em> et ceux qui <em>ne savent pas</em>&nbsp;?&nbsp;»", ref: 'Az-Zumar · 39 · 9' },
  { theme: 'Savoir', ar: 'وَقُل رَّبِّ زِدْنِي عِلْمًا', fr: "«&nbsp;Et dis&nbsp;: Seigneur, accrois mon <em>savoir</em>.&nbsp;»", ref: 'Ta-Ha · 20 · 114' },
  { theme: 'Savoir', ar: 'يَرْفَعِ اللَّهُ الَّذِينَ آمَنُوا مِنكُمْ وَالَّذِينَ أُوتُوا الْعِلْمَ دَرَجَاتٍ', fr: "«&nbsp;Allah élèvera en <em>degrés</em> ceux d'entre vous qui ont cru et ceux à qui le <em>savoir</em> a été donné.&nbsp;»", ref: 'Al-Mujadila · 58 · 11' },

  // — Patience / épreuve / espérance —
  { theme: 'Épreuve', ar: 'لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا', fr: "«&nbsp;Allah n'impose à aucune âme une charge <em>supérieure à sa capacité</em>.&nbsp;»", ref: 'Al-Baqara · 2 · 286' },
  { theme: 'Épreuve', ar: 'فَإِنَّ مَعَ الْعُسْرِ يُسْرًا ۝ إِنَّ مَعَ الْعُسْرِ يُسْرًا', fr: "«&nbsp;À côté de la <em>difficulté</em> est une <em>facilité</em>&nbsp;; oui, à côté de la difficulté est une facilité.&nbsp;»", ref: 'Ash-Sharh · 94 · 5-6' },
  { theme: 'Patience', ar: 'يَا أَيُّهَا الَّذِينَ آمَنُوا اسْتَعِينُوا بِالصَّبْرِ وَالصَّلَاةِ', fr: "«&nbsp;Ô croyants&nbsp;! Cherchez secours dans la <em>patience</em> et la prière.&nbsp;»", ref: 'Al-Baqara · 2 · 153' },
  { theme: 'Espérance', ar: 'لَا تَقْنَطُوا مِن رَّحْمَةِ اللَّهِ', fr: "«&nbsp;Ne <em>désespérez pas</em> de la miséricorde d'Allah.&nbsp;»", ref: 'Az-Zumar · 39 · 53' },

  // — Peuples / fraternité / unité —
  { theme: 'Peuples', ar: 'يَا أَيُّهَا النَّاسُ إِنَّا خَلَقْنَاكُم مِّن ذَكَرٍ وَأُنثَىٰ وَجَعَلْنَاكُمْ شُعُوبًا وَقَبَائِلَ لِتَعَارَفُوا', fr: "«&nbsp;Ô hommes&nbsp;! Nous vous avons créés d'un mâle et d'une femelle, et constitués en <em>peuples et tribus</em> pour que vous vous <em>entre-connaissiez</em>.&nbsp;»", ref: 'Al-Hujurat · 49 · 13' },
  { theme: 'Unité', ar: 'وَاعْتَصِمُوا بِحَبْلِ اللَّهِ جَمِيعًا وَلَا تَفَرَّقُوا', fr: "«&nbsp;Cramponnez-vous tous ensemble au <em>câble d'Allah</em> et ne soyez pas <em>divisés</em>.&nbsp;»", ref: "Al-'Imran · 3 · 103" },
  { theme: 'Fraternité', ar: 'إِنَّمَا الْمُؤْمِنُونَ إِخْوَةٌ', fr: "«&nbsp;Les croyants ne sont que des <em>frères</em>.&nbsp;»", ref: 'Al-Hujurat · 49 · 10' },

  // — Solidarité / soin de l'autre —
  { theme: 'Solidarité', ar: 'وَتَعَاوَنُوا عَلَى الْبِرِّ وَالتَّقْوَىٰ وَلَا تَعَاوَنُوا عَلَى الْإِثْمِ وَالْعُدْوَانِ', fr: "«&nbsp;Entraidez-vous dans le <em>bien</em> et la piété, non dans le péché et l'agression.&nbsp;»", ref: "Al-Ma'ida · 5 · 2" },
  { theme: 'Mesure', ar: 'وَكَذَٰلِكَ جَعَلْنَاكُمْ أُمَّةً وَسَطًا لِّتَكُونُوا شُهَدَاءَ عَلَى النَّاسِ', fr: "«&nbsp;Ainsi avons-Nous fait de vous une <em>communauté du juste milieu</em>, pour que vous soyez témoins devant les hommes.&nbsp;»", ref: 'Al-Baqara · 2 · 143' },
];
