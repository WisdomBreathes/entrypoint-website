import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// GitHub Pages: WisdomBreathes/entrypoint-website
// Custom domain (entrypointcanada.com) removes the /repo-name/ subpath —
// set base: '/' once DNS is pointed and CNAME is in /public.
// Until then, use base: '/entrypoint-website/' for gh-pages preview URLs.
export default defineConfig({
  site: 'https://wisdombreathes.github.io',
  base: '/entrypoint-website',
  integrations: [tailwind()],
});
