/**
 * Insert image references into markdown articles that are missing them.
 * Looks for ./images/{slug}.jpg next to each .md file.
 * Inserts the reference after the first paragraph following the H1 title.
 * Safe to re-run — skips files that already have an image reference.
 *
 * Run: node scripts/inject-image-refs.js
 */

import { readdirSync, statSync, readFileSync, writeFileSync, existsSync } from 'fs';
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

// Extract the H1 title from markdown content
function extractTitle(content) {
  const match = content.match(/^#\s+(.+)$/m);
  return match ? match[1].trim() : 'Brande.ai';
}

// Insert image ref after the first paragraph that follows the H1
function insertImageRef(content, imageRef) {
  const lines = content.split('\n');
  let h1Index = -1;
  let insertAfter = -1;
  let inParagraph = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (h1Index === -1 && line.startsWith('# ')) {
      h1Index = i;
      continue;
    }

    if (h1Index === -1) continue;

    // Skip frontmatter / empty lines right after h1
    if (!inParagraph && line.trim() === '') continue;

    // Detect paragraph start (non-empty, non-heading, non-code)
    if (!inParagraph && line.trim() !== '' && !line.startsWith('#') && !line.startsWith('```')) {
      inParagraph = true;
    }

    // Detect end of first paragraph (blank line after content)
    if (inParagraph && line.trim() === '') {
      insertAfter = i;
      break;
    }
  }

  // Fallback: insert right after H1 line
  if (insertAfter === -1 && h1Index !== -1) {
    insertAfter = h1Index + 1;
  }

  if (insertAfter === -1) return content;

  lines.splice(insertAfter, 0, '', imageRef, '');
  return lines.join('\n');
}

function processFile(mdPath) {
  const slug = basename(mdPath, '.md');
  const dir = dirname(mdPath);
  const imagePath = join(dir, 'images', `${slug}.jpg`);

  if (!existsSync(imagePath)) {
    return { status: 'no-image', slug };
  }

  const content = readFileSync(mdPath, 'utf-8');

  // Skip if already has an image reference
  if (content.includes('![') || content.includes('<img')) {
    return { status: 'already-has-image', slug };
  }

  const title = extractTitle(content);
  const imageRef = `![${title} — Brande.ai](./images/${slug}.jpg)`;
  const updated = insertImageRef(content, imageRef);

  if (updated === content) {
    return { status: 'no-change', slug };
  }

  writeFileSync(mdPath, updated, 'utf-8');
  return { status: 'injected', slug };
}

function main() {
  console.log('\nBrande.ai Help Center — Image Reference Injection\n');

  const counts = { injected: 0, 'already-has-image': 0, 'no-image': 0, 'no-change': 0 };

  for (const folder of SECTION_FOLDERS) {
    const folderPath = join(ROOT, folder);
    if (!existsSync(folderPath)) continue;

    const files = readdirSync(folderPath)
      .filter(f => f.endsWith('.md') && f !== 'index.md')
      .map(f => join(folderPath, f));

    for (const mdPath of files) {
      const result = processFile(mdPath);
      counts[result.status]++;

      const icon = result.status === 'injected' ? '✓' :
                   result.status === 'already-has-image' ? '↩' :
                   result.status === 'no-image' ? '✗' : '–';
      console.log(`  ${icon} ${folder}/${result.slug} (${result.status})`);
    }
  }

  console.log('\n────────────────────────────────');
  console.log(`Injected:          ${counts.injected}`);
  console.log(`Already had image: ${counts['already-has-image']}`);
  console.log(`Missing image:     ${counts['no-image']}`);
  console.log(`No change:         ${counts['no-change']}`);

  if (counts['no-image'] > 0) {
    console.log('\n⚠ Some articles are still missing images. Run check-coverage.js for details.');
  } else {
    console.log('\n✓ All articles with images have been updated.');
  }

  console.log('\nNext step: node scripts/check-coverage.js\n');
}

main();
