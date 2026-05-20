/**
 * Verify that every help center article has a corresponding JPG image.
 * Reports missing images, image sizes, and overall coverage percentage.
 *
 * Run: node scripts/check-coverage.js
 * Exit code 1 if any article is missing an image.
 */

import { readdirSync, existsSync, statSync } from 'fs';
import { join, basename, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');

const SECTION_FOLDERS = [
  'section-0-mental-model',
  'section-1-getting-started',
  'section-2-content-agent',
  'section-3-creating-content',
  'section-4-visual-content',
  'section-5-projects-organization',
  'section-6-collaboration',
  'section-7-agency',
  'section-8-dashboard',
  'section-9-account',
  'section-10-help',
  'troubleshooting',
];

const MAX_SIZE_KB = 150;

function formatKB(bytes) {
  return `${Math.round(bytes / 1024)}KB`;
}

function padEnd(str, len) {
  return str.length >= len ? str : str + ' '.repeat(len - str.length);
}

function main() {
  console.log('\nBrande.ai Help Center — Image Coverage Report');
  console.log('═'.repeat(70) + '\n');

  const rows = [];
  let totalArticles = 0;
  let withImage = 0;
  let oversized = 0;

  for (const folder of SECTION_FOLDERS) {
    const folderPath = join(ROOT, folder);
    if (!existsSync(folderPath)) continue;

    const mdFiles = readdirSync(folderPath)
      .filter(f => f.endsWith('.md') && f !== 'index.md');

    for (const mdFile of mdFiles) {
      const slug = basename(mdFile, '.md');
      const imagePath = join(folderPath, 'images', `${slug}.jpg`);
      totalArticles++;

      if (existsSync(imagePath)) {
        const sizeBytes = statSync(imagePath).size;
        const sizeKB = Math.round(sizeBytes / 1024);
        withImage++;
        if (sizeKB > MAX_SIZE_KB) oversized++;
        rows.push({
          path: `${folder}/${slug}`,
          hasImage: true,
          sizeKB,
          oversized: sizeKB > MAX_SIZE_KB,
        });
      } else {
        rows.push({
          path: `${folder}/${slug}`,
          hasImage: false,
          sizeKB: 0,
          oversized: false,
        });
      }
    }
  }

  // Print table header
  console.log(`${padEnd('Article', 55)} ${'Image'} ${'Size'}`);
  console.log('─'.repeat(70));

  for (const row of rows) {
    const status = row.hasImage
      ? (row.oversized ? '⚠ ' : '✓ ')
      : '✗ ';
    const size = row.hasImage ? formatKB(row.sizeKB * 1024) : '—';
    const sizeStr = row.oversized ? `${size} (OVERSIZED)` : size;
    console.log(`${padEnd(row.path, 55)} ${status} ${sizeStr}`);
  }

  const missing = totalArticles - withImage;
  const coveragePct = Math.round((withImage / totalArticles) * 100);

  console.log('\n' + '═'.repeat(70));
  console.log(`Total articles:  ${totalArticles}`);
  console.log(`With image:      ${withImage} (${coveragePct}%)`);
  console.log(`Missing image:   ${missing}`);
  if (oversized > 0) {
    console.log(`Oversized (>${MAX_SIZE_KB}KB): ${oversized}`);
  }

  if (missing === 0 && oversized === 0) {
    console.log('\n✓ Full coverage — all articles have optimized images.\n');
    process.exit(0);
  } else {
    if (missing > 0) {
      console.log(`\n✗ ${missing} article(s) are missing images.`);
      console.log('  Run: node scripts/capture-screenshots.js → node scripts/optimize-images.js');
    }
    if (oversized > 0) {
      console.log(`\n⚠ ${oversized} image(s) exceed ${MAX_SIZE_KB}KB.`);
      console.log('  Re-run: node scripts/optimize-images.js (will reduce quality further)');
    }
    console.log();
    process.exit(1);
  }
}

main();
