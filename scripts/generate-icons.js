import sharp from 'sharp';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { join, dirname } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT      = join(__dirname, '../public/apple-touch-icon.png');
const LOGO_SRC = join(__dirname, '../public/logos/logo_1_v.FINAL/Panna.svg');

const S = 180;

const logoSvg = readFileSync(LOGO_SRC, 'utf8');

const LOGO_S = 120;
const logoPng = await sharp(Buffer.from(logoSvg))
  .resize(LOGO_S, LOGO_S, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .png()
  .toBuffer();

const bgSvg = `<svg width="${S}" height="${S}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#231C19"/>
      <stop offset="100%" stop-color="#1A1410"/>
    </linearGradient>
  </defs>
  <rect width="${S}" height="${S}" fill="url(#bg)"/>
</svg>`;

const logoOff = Math.round((S - LOGO_S) / 2);

await sharp(Buffer.from(bgSvg))
  .composite([{ input: logoPng, left: logoOff, top: logoOff }])
  .png()
  .toFile(OUT);

const meta = await sharp(OUT).metadata();
console.log(`✓ apple-touch-icon.png — ${meta.width}×${meta.height}px, ${meta.format}`);
