# Milan Cocktail Days

Marketing website for **Milan Cocktail Days**, built with [Astro](https://astro.build).

## Stack

- **Astro 6** — static site generator
- **@builder.io/sdk** — content/CMS integration
- **@astrojs/sitemap** — sitemap generation
- Vanilla CSS, no UI framework

## Structure

```
src/
  pages/          Italian pages (default locale)
  pages/en/       English pages
  components/     Astro components (Header, Footer, Hero, CTA, etc.)
  layouts/        BaseLayout.astro
  config/         GTM and iubenda config
  i18n/           locale utilities
  scripts/        client-side tracking
scripts/          build-time tools (image optimization, OG image, icon generation)
public/           static assets (images, videos, logos)
```

Site is bilingual (IT/EN), with pages for the event, bar/venue info, sponsors, and contact.

## Integrations

Configured via environment variables (see `.env.example`):

- Google Tag Manager / GA4
- Facebook Pixel
- iubenda (cookie policy)
- Tally.so (forms)

## Development

```bash
npm install
npm run dev        # local dev server
npm run build       # production build
npm run preview     # preview build
npm run optimize-images   # optimize images in public/
```

Requires Node >= 22.12.0.
