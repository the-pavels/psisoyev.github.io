// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { satteri } from '@astrojs/markdown-satteri';

/**
 * Markdown images are lazy by default. A picture that opens a post is usually the largest thing
 * on screen (the LCP element), so load it eagerly and ask for it before other images.
 * "Opens the post" means the first image in the first block of the document.
 */
const eagerOpeningImage = {
  name: 'eager-opening-image',
  element: {
    filter: ['img'],
    /**
     * @param {any} node
     * @param {any} ctx
     */
    visit(node, ctx) {
      const block = ctx.parent(node);
      if (!block || ctx.indexOf(node) !== 0) return;
      const root = ctx.parent(block);
      if (!root || root.type !== 'root') return;
      const before = root.children.slice(0, ctx.indexOf(block));
      if (before.some((/** @type {any} */ n) => n.type !== 'text' || n.value.trim() !== '')) return;
      ctx.setProperty(node, 'loading', 'eager');
      ctx.setProperty(node, 'fetchpriority', 'high');
    },
  },
};

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
    processor: satteri({ hastPlugins: [eagerOpeningImage] }),
    shikiConfig: {
      themes: { light: 'github-light', dark: 'github-dark' },
    },
  },
});
