// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Domaine canonique = www.lautrerecit.com (l'apex redirige vers www côté Netlify).
  site: 'https://www.lautrerecit.com',
  integrations: [sitemap()],
  // Sortie 100% statique (par défaut) → hébergeable sur Netlify gratuitement.
  build: {
    // URLs propres : /manifeste/ au lieu de /manifeste.html
    format: 'directory',
  },
});
