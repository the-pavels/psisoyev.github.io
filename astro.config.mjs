// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://pavels.im',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  // Pages that moved or no longer exist
  redirects: {
    '/cv': '/',
    '/tags': '/blog/',
    '/page/2': '/blog/',
  },
  markdown: {
    shikiConfig: {
      themes: { light: 'github-light', dark: 'github-dark' },
    },
  },
});
