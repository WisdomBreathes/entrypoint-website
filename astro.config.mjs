import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://entrypointcanada.com',
  base: '/',
  trailingSlash: 'always',
  integrations: [tailwind()],
  build: {
    // Inline small assets to cut round-trips
    inlineStylesheets: 'auto',
  },
  vite: {
    build: {
      // Raise the CSS inlining threshold to 8KB so small style chunks get inlined
      assetsInlineLimit: 8192,
      cssMinify: true,
      minify: 'esbuild',
      rollupOptions: {
        output: {
          // Deterministic chunk names improve CDN cache hit rate
          entryFileNames: '_astro/[name].[hash].js',
          chunkFileNames: '_astro/[name].[hash].js',
          assetFileNames: '_astro/[name].[hash][extname]',
        },
      },
    },
  },
});
