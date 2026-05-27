// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

/**
 * Converts Astro-generated CSS links to non-blocking preload+onload after build.
 * Must run as an Astro integration (not a Vite plugin) because Astro injects
 * CSS <link> tags in its own finalization step, after Vite's transformIndexHtml.
 */
const nonBlockingCss = () => ({
  name: 'non-blocking-css',
  hooks: {
    'astro:build:done': async ({ dir }) => {
      const { readdir, readFile, writeFile } = await import('node:fs/promises');
      const { join } = await import('node:path');
      const { fileURLToPath } = await import('node:url');

      async function processDir(dirPath) {
        const entries = await readdir(dirPath, { withFileTypes: true });
        for (const entry of entries) {
          const fullPath = join(dirPath, entry.name);
          if (entry.isDirectory()) {
            await processDir(fullPath);
          } else if (entry.name.endsWith('.html')) {
            const html = await readFile(fullPath, 'utf8');
            const transformed = html.replace(
              /<link rel="stylesheet" href="(\/_astro\/[^"]+\.css)">/g,
              (_, href) =>
                `<link rel="preload" as="style" href="${href}" onload="this.onload=null;this.rel='stylesheet'">` +
                `<noscript><link rel="stylesheet" href="${href}"></noscript>`
            );
            if (transformed !== html) await writeFile(fullPath, transformed, 'utf8');
          }
        }
      }

      await processDir(fileURLToPath(dir));
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
    nonBlockingCss(),
  ],
  compressHTML: true,
});
