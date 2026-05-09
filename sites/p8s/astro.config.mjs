// @ts-check
import { defineConfig } from 'astro/config';
import { fileURLToPath } from 'node:url';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://p8s.dev',
  integrations: [sitemap()],
  vite: {
    resolve: {
      alias: {
        '@shared': fileURLToPath(new URL('../../shared', import.meta.url)),
      },
    },
  },
});
