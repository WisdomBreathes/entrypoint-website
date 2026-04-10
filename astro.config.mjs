import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://wisdombreathes.github.io',
  base: '/entrypoint-website',
  integrations: [tailwind()],
});
