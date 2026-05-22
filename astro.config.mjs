// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

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
});
