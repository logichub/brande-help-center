/**
 * Convert raw PNG screenshots to optimized JPGs co-located with each article.
 *
 * Input:  public/images/raw/{section}/{slug}.png
 * Output: {section-folder}/images/{slug}.jpg
 *
 * Run: node scripts/optimize-images.js
 */

import sharp from 'sharp';
import { readdirSync, statSync, mkdirSync, existsSync } from 'fs';
import { join, basename, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const RAW_DIR = join(ROOT, 'public', 'images', 'raw');

// Maps section slug (used in raw dir name) → help center folder name
const SECTION_FOLDER = {
  'mental-model': 'section-0-mental-model',
  'getting-started': 'section-1-getting-started',
  'content-agent': 'section-2-content-agent',
  'creating-content': 'section-3-creating-content',
  'visual-content': 'section-4-visual-content',
  'projects-organization': 'section-5-projects-organization',
  'collaboration': 'section-6-collaboration',
  'agency': 'section-7-agency',
  'dashboard': 'section-8-dashboard',
  'account': 'section-9-account',
  'help': 'section-10-help',
  'troubleshooting': 'troubleshooting',
};

const MAX_WIDTH = 1200;
const JPEG_QUALITY = 75;
const MAX_SIZE_KB = 150;

async function optimizeImage(inputPath, outputPath) {
  mkdirSync(dirname(outputPath), { recursive: true });

  const image = sharp(inputPath);
  const meta = await image.metadata();

  const pipeline = meta.width > MAX_WIDTH
    ? image.resize({ width: MAX_WIDTH, withoutEnlargement: true })
    : image;

  await pipeline
    .jpeg({ quality: JPEG_QUALITY, mozjpeg: true })
    .toFile(outputPath);

  const sizeKB = Math.round(statSync(outputPath).size / 1024);

  // If still over limit, reduce quality further
  if (sizeKB > MAX_SIZE_KB) {
    await sharp(inputPath)
      .resize({ width: MAX_WIDTH, withoutEnlargement: true })
      .jpeg({ quality: 60, mozjpeg: true })
      .toFile(outputPath);
  }

  return Math.round(statSync(outputPath).size / 1024);
}

async function main() {
  if (!existsSync(RAW_DIR)) {
    console.error(`Raw directory not found: ${RAW_DIR}`);
    console.error('Run node scripts/capture-screenshots.js first.');
    process.exit(1);
  }

  const sections = readdirSync(RAW_DIR).filter(d =>
    statSync(join(RAW_DIR, d)).isDirectory()
  );

  if (sections.length === 0) {
    console.log('No raw screenshots found. Run capture-screenshots.js first.');
    process.exit(0);
  }

  console.log(`\nBrande.ai Help Center — Image Optimization`);
  console.log(`Max width: ${MAX_WIDTH}px | JPEG quality: ${JPEG_QUALITY}% | Size limit: ${MAX_SIZE_KB}KB\n`);

  let success = 0;
  let failed = 0;
  let totalKB = 0;

  for (const section of sections) {
    const sectionRawDir = join(RAW_DIR, section);
    const folderName = SECTION_FOLDER[section];

    if (!folderName) {
      console.warn(`  Unknown section "${section}" — skipping`);
      continue;
    }

    const pngs = readdirSync(sectionRawDir).filter(f => f.endsWith('.png'));

    for (const png of pngs) {
      const slug = basename(png, '.png');
      const inputPath = join(sectionRawDir, png);
      const outputPath = join(ROOT, folderName, 'images', `${slug}.jpg`);
      const label = `${section}/${slug}`;

      process.stdout.write(`  ${label}.jpg...`);
      try {
        const sizeKB = await optimizeImage(inputPath, outputPath);
        process.stdout.write(` ✓ ${sizeKB}KB\n`);
        success++;
        totalKB += sizeKB;
      } catch (err) {
        process.stdout.write(` ✗ ${err.message}\n`);
        failed++;
      }
    }
  }

  console.log(`\n────────────────────────────────`);
  console.log(`Done: ${success} optimized, ${failed} failed`);
  console.log(`Total size: ${totalKB}KB (~${Math.round(totalKB / 1024 * 10) / 10}MB)`);
  console.log(`Average: ${success ? Math.round(totalKB / success) : 0}KB per image`);
  console.log(`\nNext step: node scripts/inject-image-refs.js\n`);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
