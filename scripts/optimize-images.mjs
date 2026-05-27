/**
 * Image optimization script — generates WebP and AVIF variants for key images.
 * Run: node scripts/optimize-images.mjs
 */
import sharp from 'sharp';
import { existsSync } from 'fs';
import { join } from 'path';

const PUBLIC = 'public/images';

const jobs = [
  // Hero background — full viewport, served at up to 1920w
  {
    input: `${PUBLIC}/bar_photo1.jpg`,
    widths: [640, 1024, 1920],
    outputBase: `${PUBLIC}/bar_photo1`,
  },
  // Card images — displayed ~400px wide
  {
    input: `${PUBLIC}/Clear Wine Glass Photo.jpg`,
    widths: [400, 800],
    outputBase: `${PUBLIC}/clear-wine-glass`,
  },
  {
    input: `${PUBLIC}/Szymon Fischer.jpg`,
    widths: [400, 800],
    outputBase: `${PUBLIC}/szymon-fischer`,
  },
  {
    input: `${PUBLIC}/bartender_1.jpg`,
    widths: [500, 1000],
    outputBase: `${PUBLIC}/bartender-1`,
  },
];

const formats = [
  { ext: 'avif', options: { quality: 60 } },
  { ext: 'webp', options: { quality: 80 } },
];

let generated = 0;
let skipped = 0;

for (const { input, widths, outputBase } of jobs) {
  const src = sharp(input);
  const meta = await src.metadata();

  for (const width of widths) {
    const clampedWidth = Math.min(width, meta.width);
    for (const { ext, options } of formats) {
      const out = `${outputBase}-${width}.${ext}`;
      if (existsSync(out)) {
        console.log(`skip  ${out}`);
        skipped++;
        continue;
      }
      await sharp(input)
        .resize({ width: clampedWidth, withoutEnlargement: true })
        [ext](options)
        .toFile(out);
      console.log(`done  ${out}`);
      generated++;
    }
  }
}

console.log(`\n✓ ${generated} generated, ${skipped} skipped.`);
