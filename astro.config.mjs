import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// Custom domain: entrypointcanada.com
// CNAME is in /public — GitHub Pages serves from root.
export default defineConfig({
  site: 'https://entrypointcanada.com',
  base: '/',
  integrations: [tailwind()],
});
