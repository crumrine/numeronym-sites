// @ts-check
import { defineConfig } from 'astro/config';
import { fileURLToPath } from 'node:url';

export default defineConfig({
  site: 'https://h11n.dev',
  vite: {
    resolve: {
      alias: {
        '@shared': fileURLToPath(new URL('../../shared', import.meta.url)),
      },
    },
  },
});
