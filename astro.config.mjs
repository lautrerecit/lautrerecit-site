// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Réplique 2027 — projet privé : pages servies en local (npm run dev) uniquement.
// Pour les publier : PUBLIER_2027=1 npm run build (et retirer le noindex des pages).
const PUBLIER_2027 = process.env.PUBLIER_2027 === '1';
const replique2027 = {
  name: 'replique-2027',
  hooks: {
    'astro:config:setup': ({ command, injectRoute }) => {
      if (command !== 'dev' && !PUBLIER_2027) return;
      injectRoute({ pattern: '/2027', entrypoint: './src/prive/2027/index.astro' });
      injectRoute({ pattern: '/2027/methode', entrypoint: './src/prive/2027/methode.astro' });
      injectRoute({ pattern: '/2027/qui-a-dit', entrypoint: './src/prive/2027/qui-a-dit.astro' });
      injectRoute({ pattern: '/2027/quiz', entrypoint: './src/prive/2027/quiz.astro' });
      if (command === 'dev') {
        injectRoute({ pattern: '/2027/propositions', entrypoint: './src/prive/2027/propositions.astro' });
        injectRoute({ pattern: '/2027/creations', entrypoint: './src/prive/2027/creations.astro' });
        injectRoute({ pattern: '/2027/premium', entrypoint: './src/prive/2027/premium.astro' });
        injectRoute({ pattern: '/2027/premium-v1', entrypoint: './src/prive/2027/premium-v1.astro' });
        injectRoute({ pattern: '/2027/stories', entrypoint: './src/prive/2027/stories.astro' });
        injectRoute({ pattern: '/2027/verre', entrypoint: './src/prive/2027/verre.astro' });
        injectRoute({ pattern: '/2027/contraste', entrypoint: './src/prive/2027/contraste.astro' });
        injectRoute({ pattern: '/2027/dossiers-3d', entrypoint: './src/prive/2027/dossiers3d.astro' });
        injectRoute({ pattern: '/2027/audit', entrypoint: './src/prive/2027/audit.astro' });
      }
      injectRoute({ pattern: '/2027/[enjeu]', entrypoint: './src/prive/2027/[enjeu].astro' });
    },
  },
};

// https://astro.build/config
export default defineConfig({
  // Domaine canonique = www.lautrerecit.com (l'apex redirige vers www côté Netlify).
  site: 'https://www.lautrerecit.com',
  integrations: [replique2027, sitemap({ filter: (page) => PUBLIER_2027 || !page.includes('/2027/') })],
  // Sortie 100% statique (par défaut) → hébergeable sur Netlify gratuitement.
  build: {
    // URLs propres : /manifeste/ au lieu de /manifeste.html
    format: 'directory',
  },
});
