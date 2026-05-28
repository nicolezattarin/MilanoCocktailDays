import sharp from 'sharp';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { join, dirname } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT      = join(__dirname, '../public/og-default.jpg');
const LOGO_SRC = join(__dirname, '../public/logos/logo_1_v.FINAL/Inchiostro.svg');

const W = 1200;
const H = 630;

// Logo: recolor dark fill → white so it's visible on dark bg
const logoSvgWhite = readFileSync(LOGO_SRC, 'utf8')
  .replace(/fill="#1a1416"/gi, 'fill="#F5EFE6"')
  .replace(/fill="#1A1416"/gi, 'fill="#F5EFE6"');

// Render logo SVG to PNG at target size (square, centered vertically)
const LOGO_H = 340;
const logoPng = await sharp(Buffer.from(logoSvgWhite))
  .resize(LOGO_H, LOGO_H, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .png()
  .toBuffer();

// Background SVG with gold accent lines only (no text — logo carries the brand)
const bgSvg = `<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#231C19"/>
      <stop offset="100%" stop-color="#1A1410"/>
    </linearGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <rect x="80" y="${H - 60}" width="${W - 160}" height="1" fill="#C4850D" opacity="0.5"/>
  <rect x="80" y="58" width="${W - 160}" height="1" fill="#C4850D" opacity="0.5"/>
</svg>`;

// Composite: bg → logo centered
const logoLeft = Math.round((W - LOGO_H) / 2);
const logoTop  = Math.round((H - LOGO_H) / 2);

await sharp(Buffer.from(bgSvg))
  .composite([{ input: logoPng, left: logoLeft, top: logoTop }])
  .jpeg({ quality: 90 })
  .toFile(OUT);

const meta = await sharp(OUT).metadata();
console.log(`✓ og-default.jpg — ${meta.width}×${meta.height}px, ${meta.format}`);
