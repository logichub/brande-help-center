/**
 * Diagnose actual app routing after login.
 * Logs in, records the landing URL, then clicks each sidebar/nav link
 * and records where the app actually navigates to.
 *
 * Run: node scripts/diagnose-routes.js
 * This tells us the real URL structure to use in capture-screenshots.js
 */

import { chromium } from 'playwright';
import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');

function loadEnv() {
  const lines = readFileSync(join(ROOT, '.env'), 'utf-8').split('\n');
  const env = {};
  for (const line of lines) {
    const [key, ...rest] = line.split('=');
    if (key && rest.length) env[key.trim()] = rest.join('=').trim();
  }
  return env;
}

const env = loadEnv();
const BASE_URL = (env.BRANDE_URL || 'https://app.brande.ai').replace(/\/$/, '');

async function main() {
  console.log(`\nDiagnosing routes at ${BASE_URL}\n`);

  // Run HEADED so you can see exactly what's happening
  const browser = await chromium.launch({ headless: false, slowMo: 300 });
  const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });

  // Track all navigations
  const navLog = [];
  page.on('framenavigated', frame => {
    if (frame === page.mainFrame()) {
      const url = frame.url();
      if (url !== 'about:blank') navLog.push(url);
    }
  });

  // 1. Login
  console.log('Step 1: Navigating to login...');
  await page.goto(`${BASE_URL}/login`, { waitUntil: 'networkidle' });
  await page.fill('[data-testid="email-input"], input[type="email"]', env.BRANDE_EMAIL);
  await page.fill('[data-testid="password-input"], input[type="password"]', env.BRANDE_PASSWORD);
  await page.click('[data-testid="login-submit"], button[type="submit"]');

  // Wait for redirect after login
  await page.waitForURL(url => !url.href.includes('/login'), { timeout: 20000 });
  await page.waitForTimeout(3000);

  console.log(`\n✓ Logged in`);
  console.log(`  Landing URL: ${page.url()}`);

  // 2. Collect all links from sidebar/navigation
  console.log('\nStep 2: Collecting all visible navigation links...');
  await page.waitForTimeout(2000);

  const links = await page.evaluate(() => {
    const anchors = Array.from(document.querySelectorAll('a[href], nav a, aside a, [role="navigation"] a'));
    return [...new Set(anchors
      .map(a => ({ text: (a.textContent || '').trim().replace(/\s+/g, ' '), href: a.href }))
      .filter(l => l.href && !l.href.startsWith('javascript:') && l.text)
      .map(l => JSON.stringify(l))
    )].map(s => JSON.parse(s));
  });

  console.log(`\nFound ${links.length} navigation links:\n`);
  links.forEach(l => console.log(`  [${l.text}] → ${l.href}`));

  // 3. Try direct URL variations
  console.log('\nStep 3: Testing common URL patterns...');
  const testPaths = [
    '/dashboard',
    '/account',
    '/account/brand-voice',
    '/account/recommendations',
    '/account/documents',
    '/account/reference-materials',
    '/account/brand-message',
    '/account/checklist-templates',
    '/account/snippets/list',
    '/account/billing',
    '/content-calendar',
    '/notifications',
    '/support',
    '/feedback',
  ];

  for (const path of testPaths) {
    await page.goto(`${BASE_URL}${path}`, { waitUntil: 'networkidle', timeout: 10000 }).catch(() => {});
    await page.waitForTimeout(1500);
    const finalUrl = page.url();
    const title = await page.title().catch(() => '?');
    const has404 = await page.evaluate(() => document.body?.innerText?.includes('404') || document.title?.includes('404'));
    console.log(`  ${has404 ? '✗ 404' : '✓    '} ${path} → ${finalUrl} [${title}]`);
  }

  // 4. Log all recorded navigations
  console.log('\nFull navigation log:');
  navLog.forEach(url => console.log(`  ${url}`));

  // Keep browser open for 30s so you can inspect
  console.log('\nBrowser staying open for 30s — inspect the UI and note what you see.');
  console.log('Press Ctrl+C to exit early.\n');
  await page.waitForTimeout(30000);

  await browser.close();
}

main().catch(err => { console.error(err); process.exit(1); });
