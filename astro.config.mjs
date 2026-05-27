// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

/** Converts Astro-generated CSS links to non-blocking preload+onload pattern. */
const nonBlockingCss = () => ({
  name: 'non-blocking-css',
  apply: /** @type {'build'} */ ('build'),
  transformIndexHtml: {
    order: /** @type {'post'} */ ('post'),
    /** @param {string} html */
    handler(html) {
      return html.replace(
        /<link rel="stylesheet" href="(\/_astro\/[^"]+\.css)">/g,
        (_, href) =>
          `<link rel="preload" as="style" href="${href}" onload="this.onload=null;this.rel='stylesheet'">` +
          `<noscript><link rel="stylesheet" href="${href}"></noscript>`
      );
    },
  },
});

const SITE = 'https://milancocktaildays.it';

/** @type {Record<string, { priority: number; changefreq: any }>} */
const pagePriority = {
  [`${SITE}/`]:             { priority: 1.0, changefreq: 'monthly' },
  [`${SITE}/festival/`]:    { priority: 0.9, changefreq: 'monthly' },
  [`${SITE}/bars/`]:        { priority: 0.8, changefreq: 'monthly' },
  [`${SITE}/programma/`]:   { priority: 0.8, changefreq: 'monthly' },
  [`${SITE}/contatti/`]:    { priority: 0.7, changefreq: 'monthly' },
  [`${SITE}/en/`]:          { priority: 1.0, changefreq: 'monthly' },
  [`${SITE}/en/festival/`]: { priority: 0.9, changefreq: 'monthly' },
  [`${SITE}/en/sponsor/`]:  { priority: 0.8, changefreq: 'monthly' },
  [`${SITE}/en/contatti/`]: { priority: 0.7, changefreq: 'monthly' },
  [`${SITE}/en/bar/`]:      { priority: 0.8, changefreq: 'monthly' },
};

export default defineConfig({
  site: SITE,
  integrations: [
    sitemap({
      serialize(item) {
        const meta = pagePriority[item.url];
        if (meta) {
          item.priority   = meta.priority;
          item.changefreq = meta.changefreq;
        }
        item.lastmod = new Date().toISOString().split('T')[0];
        return item;
      },
    }),
  ],
  compressHTML: true,
  vite: { plugins: [nonBlockingCss()] },
});
