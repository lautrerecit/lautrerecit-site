// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Domaine final — à ajuster quand le DNS sera branché.
  site: 'https://lautrerecit.fr',
  // Sortie 100% statique (par défaut) → hébergeable sur Netlify gratuitement.
  build: {
    // URLs propres : /manifeste/ au lieu de /manifeste.html
    format: 'directory',
  },
});
