// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { satteri } from '@astrojs/markdown-satteri';
import { readFileSync } from 'node:fs';

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

/**
 * Latin and Latin Extended faces of an installed @fontsource-variable package, for the local font
 * provider: the same files and unicode ranges the package's own CSS uses. Latin comes first, Base.astro
 * relies on that to find the file to preload.
 *
 * @param {string} pkg package name, e.g. '@fontsource-variable/radio-canada'
 * @param {string} weight the variable font's weight range
 */
const fontsourceFaces = (pkg, weight) => {
  const dir = `./node_modules/${pkg}`;
  const ranges = JSON.parse(readFileSync(new URL(`${dir}/unicode.json`, import.meta.url), 'utf8'));
  const slug = pkg.split('/')[1];
  return /** @type {const} */ (['latin', 'latin-ext']).map((subset) => ({
    src: /** @type {[string]} */ ([`${dir}/files/${slug}-${subset}-wght-normal.woff2`]),
    weight,
    style: /** @type {const} */ ('normal'),
    unicodeRange: /** @type {[string, ...string[]]} */ (ranges[subset].split(',')),
  }));
};

export default defineConfig({
  site: 'https://pavels.im',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  /*
   * Text fonts, from the installed @fontsource-variable packages. Astro adds a fallback face sized to
   * each font's metrics, so text set in the fallback takes up the same room and doesn't move when the
   * web font swaps in. Code font stays a plain @fontsource import in Base.astro.
   */
  fonts: [
    {
      provider: fontProviders.local(),
      name: 'Radio Canada Big',
      cssVariable: '--font-radio-canada-big',
      fallbacks: ['ui-sans-serif', 'system-ui', 'sans-serif'],
      options: { variants: fontsourceFaces('@fontsource-variable/radio-canada-big', '400 700') },
    },
    {
      provider: fontProviders.local(),
      name: 'Radio Canada',
      cssVariable: '--font-radio-canada',
      fallbacks: ['ui-sans-serif', 'system-ui', 'sans-serif'],
      options: { variants: fontsourceFaces('@fontsource-variable/radio-canada', '300 700') },
    },
  ],
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
