/**
 * Interactive screenshot capture for Brande.ai help center.
 *
 * Launches a visible browser, logs in once, then walks through all 79 articles.
 * For each article: navigates to the starting URL and waits for your input.
 *
 * Controls (press then Enter):
 *   Enter alone  → capture current browser state → save as JPG → next article
 *   s            → skip (keep existing image)
 *   q            → quit
 *
 * Usage:
 *   node scripts/capture-interactive.js
 *   node scripts/capture-interactive.js --from slug-name   (resume from a specific slug)
 */

import { chromium } from 'playwright';
import sharp from 'sharp';
import { createInterface } from 'readline';
import { readFileSync, statSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');

// ─── Config ──────────────────────────────────────────────────────────────────

function loadEnv() {
  const lines = readFileSync(join(ROOT, '.env'), 'utf-8').split('\n');
  const env = {};
  for (const line of lines) {
    const [k, ...rest] = line.split('=');
    if (k && rest.length) env[k.trim()] = rest.join('=').trim();
  }
  return env;
}

const env = loadEnv();
const BASE_URL = (env.BRANDE_URL || 'https://app.brande.ai').replace(/\/$/, '');
const EMAIL = env.BRANDE_EMAIL;
const PASSWORD = env.BRANDE_PASSWORD;

if (!EMAIL || !PASSWORD) {
  console.error('Missing BRANDE_EMAIL or BRANDE_PASSWORD in .env');
  process.exit(1);
}

// ─── All 79 Articles ─────────────────────────────────────────────────────────

const ARTICLES = [
  // ── Section 0: Mental Model ───────────────────────────────────────────────
  {
    slug: 'understand-brande',
    folder: 'section-0-mental-model',
    startUrl: '/dashboard/',
    instructions: 'Dashboard overview — the "home base" of the app. All key widgets visible.',
  },

  // ── Section 1: Getting Started ────────────────────────────────────────────
  {
    slug: 'create-your-account',
    folder: 'section-1-getting-started',
    startUrl: '/signup/',
    skipLogin: true,
    instructions: 'Signup / registration form. Don\'t fill it in — just show the form.',
  },
  {
    slug: 'understand-brand-dna',
    folder: 'section-1-getting-started',
    startUrl: '/account/',
    instructions: 'Account overview page showing Brand DNA summary or brand details.',
  },
  {
    slug: 'complete-brand-profile',
    folder: 'section-1-getting-started',
    startUrl: '/onboard/step/1/',
    instructions: 'Onboarding wizard with brand profile form steps. If /onboard redirects away, navigate to brand setup manually.',
  },
  {
    slug: 'select-content-channels',
    folder: 'section-1-getting-started',
    startUrl: '/account/',
    instructions: 'Channel selection step in brand setup (LinkedIn, Twitter, Blog, etc.). Navigate there manually if needed.',
  },
  {
    slug: 'upload-brand-assets',
    folder: 'section-1-getting-started',
    startUrl: '/account/documents/',
    instructions: 'Brand Asset Vault page — upload area and any existing assets visible.',
  },
  {
    slug: 'reference-materials',
    folder: 'section-1-getting-started',
    startUrl: '/account/reference-materials/',
    instructions: 'Reference Materials page with add button and material list.',
  },
  {
    slug: 'understand-brand-voice-analyzer',
    folder: 'section-1-getting-started',
    startUrl: '/account/brand-voice/',
    instructions: 'Brand Voice Analyzer page — existing analysis or upload area visible.',
  },
  {
    slug: 'update-brand-voice',
    folder: 'section-1-getting-started',
    startUrl: '/account/brand-voice/',
    instructions: 'Brand Voice Analyzer page — same page, showing the analysis and update options.',
  },
  {
    slug: 'update-brand-materials',
    folder: 'section-1-getting-started',
    startUrl: '/account/documents/',
    instructions: 'Brand Asset Vault page.',
  },
  {
    slug: 'update-reference-materials',
    folder: 'section-1-getting-started',
    startUrl: '/account/reference-materials/',
    instructions: 'Reference Materials page.',
  },
  {
    slug: 'update-messaging-framework',
    folder: 'section-1-getting-started',
    startUrl: '/account/brand-message/',
    instructions: 'Brand Messaging Fingerprint page — brand story and messaging content visible.',
  },
  {
    slug: 'update-profile-settings',
    folder: 'section-1-getting-started',
    startUrl: '/account/',
    instructions: 'Account/brand settings page — General Info and Settings sections visible.',
  },

  // ── Section 2: Content Agent ──────────────────────────────────────────────
  {
    slug: 'understanding-content-agent',
    folder: 'section-2-content-agent',
    startUrl: '/account/recommendations/',
    instructions: 'Content Opportunities page — brief cards visible (not empty state).',
  },
  {
    slug: 'use-content-agent',
    folder: 'section-2-content-agent',
    startUrl: '/dashboard/',
    instructions: 'Dashboard with Content Agent / recommendations widget clearly visible.',
  },
  {
    slug: 'get-daily-recommendations',
    folder: 'section-2-content-agent',
    startUrl: '/account/recommendations/',
    instructions: 'Content Opportunities showing today\'s recommended briefs.',
  },
  {
    slug: 'read-content-briefs',
    folder: 'section-2-content-agent',
    startUrl: '/account/recommendations/',
    instructions: 'Expand or open a brief to show its full content details (title, description, instructions).',
  },
  {
    slug: 'customize-content-brief',
    folder: 'section-2-content-agent',
    startUrl: '/account/recommendations/',
    instructions: 'Open the customization dialog or settings on a brief.',
  },
  {
    slug: 'save-to-folders',
    folder: 'section-2-content-agent',
    startUrl: '/',
    instructions: 'Projects workspace with folder structure in sidebar clearly visible.',
  },
  {
    slug: 'content-agent-multiple-channels',
    folder: 'section-2-content-agent',
    startUrl: '/account/recommendations/',
    instructions: 'Content Opportunities showing multiple channel options or channel filter.',
  },
  {
    slug: 'content-agent-multiple-brands',
    folder: 'section-2-content-agent',
    startUrl: '/dashboard/',
    instructions: 'Dashboard showing brand switcher or multi-brand context.',
  },
  {
    slug: 'content-agent-vs-manual',
    folder: 'section-2-content-agent',
    startUrl: '/account/recommendations/',
    instructions: 'Content Opportunities page showing the AI-recommended content workflow.',
  },

  // ── Section 3: Creating Content ───────────────────────────────────────────
  {
    slug: 'create-new-project',
    folder: 'section-3-creating-content',
    startUrl: '/',
    instructions: 'Press Alt+N to open the New Project dialog.',
  },
  {
    slug: 'choose-project-templates',
    folder: 'section-3-creating-content',
    startUrl: '/',
    instructions: 'Alt+N → expand a template category or hover over templates to show template cards (differentiate from create-new-project).',
  },
  {
    slug: 'generate-website-copy',
    folder: 'section-3-creating-content',
    startUrl: '/',
    instructions: 'Alt+N → search "website" → show website template results.',
  },
  {
    slug: 'create-facebook-threads',
    folder: 'section-3-creating-content',
    startUrl: '/',
    instructions: 'Alt+N → search "facebook" → show Facebook template results.',
  },
  {
    slug: 'create-linkedin-content',
    folder: 'section-3-creating-content',
    startUrl: '/',
    instructions: 'Alt+N → search "linkedin" → show LinkedIn template results.',
  },
  {
    slug: 'include-images',
    folder: 'section-3-creating-content',
    startUrl: '/',
    instructions: 'Open a project → show image generation block or image options in the editor.',
  },
  {
    slug: 'edit-refine-regenerate',
    folder: 'section-3-creating-content',
    startUrl: '/',
    instructions: 'Open a project → show editor with generated content and regenerate/refine controls.',
  },
  {
    slug: 'use-brand-voice-in-projects',
    folder: 'section-3-creating-content',
    startUrl: '/',
    instructions: 'Open a project or creation dialog → show Brand Voice dropdown/selector.',
  },
  {
    slug: 'use-content-improver',
    folder: 'section-3-creating-content',
    startUrl: '/',
    instructions: 'Open a project → show Content Improver / improvement chat panel.',
  },
  {
    slug: 'create-manage-snippets',
    folder: 'section-3-creating-content',
    startUrl: '/account/snippets/list/',
    instructions: 'Snippets management page with snippet list or empty state.',
  },

  // ── Section 4: Visual Content ─────────────────────────────────────────────
  {
    slug: 'generate-on-brand-images',
    folder: 'section-4-visual-content',
    startUrl: '/',
    instructions: 'Open a project → show image generation panel or image output in editor.',
  },
  {
    slug: 'customize-image-style',
    folder: 'section-4-visual-content',
    startUrl: '/',
    instructions: 'Open a project → show image style controls (style picker, aspect ratio, dimensions).',
  },
  {
    slug: 'visual-content-platforms',
    folder: 'section-4-visual-content',
    startUrl: '/',
    instructions: 'Alt+N → search "social" or "image" → show visual/social template results.',
  },
  {
    slug: 'maintain-visual-consistency',
    folder: 'section-4-visual-content',
    startUrl: '/account/brand-voice/',
    instructions: 'Brand Voice Analyzer or visual style section.',
  },

  // ── Section 5: Projects & Organization ───────────────────────────────────
  {
    slug: 'understand-projects-folders',
    folder: 'section-5-projects-organization',
    startUrl: '/',
    instructions: 'Projects workspace — sidebar with folders and project list clearly visible (not a project editor).',
  },
  {
    slug: 'find-projects-search',
    folder: 'section-5-projects-organization',
    startUrl: '/',
    instructions: 'Press Alt+Shift+P to open Project Search modal.',
  },
  {
    slug: 'preview-files-images',
    folder: 'section-5-projects-organization',
    startUrl: '/',
    instructions: 'Open a project → click on a file or image to open the preview modal.',
  },
  {
    slug: 'export-content',
    folder: 'section-5-projects-organization',
    startUrl: '/',
    instructions: 'Open a project → open the export menu or dialog (DOCX, PDF options).',
  },
  {
    slug: 'export-tables-csv',
    folder: 'section-5-projects-organization',
    startUrl: '/',
    instructions: 'Open a project with a table → show the "Download CSV" button on a table block.',
  },
  {
    slug: 'organize-at-scale',
    folder: 'section-5-projects-organization',
    startUrl: '/',
    instructions: 'Show folder hierarchy in sidebar, OR navigate to content calendar with content organized by date.',
  },

  // ── Section 6: Collaboration ──────────────────────────────────────────────
  {
    slug: 'share-and-publish',
    folder: 'section-6-collaboration',
    startUrl: '/',
    instructions: 'Open a project → click the circular share icon in top-right toolbar → share modal open with link visible.',
  },
  {
    slug: 'share-content-projects',
    folder: 'section-6-collaboration',
    startUrl: '/',
    instructions: 'Same — share modal open with shareable link and social sharing options.',
  },
  {
    slug: 'publish-to-channels',
    folder: 'section-6-collaboration',
    startUrl: '/',
    instructions: 'Open a project → find and show the Publish button or dialog.',
  },
  {
    slug: 'manage-client-review-approval',
    folder: 'section-6-collaboration',
    startUrl: '/',
    instructions: 'Open a project → Approve/Unapprove button visible and prominent in toolbar.',
  },
  {
    slug: 'leave-respond-comments',
    folder: 'section-6-collaboration',
    startUrl: '/',
    instructions: 'Open a project → open the Comments panel showing comment threads.',
  },
  {
    slug: 'internal-vs-client-views',
    folder: 'section-6-collaboration',
    startUrl: '/',
    instructions: 'Open a project → show view toggle, or navigate to the client-facing share page to show client view.',
  },

  // ── Section 7: Agency ─────────────────────────────────────────────────────
  {
    slug: 'understand-agency-plan',
    folder: 'section-7-agency',
    startUrl: '/account/billing/',
    instructions: 'My Plan page showing current plan details and available features.',
  },
  {
    slug: 'use-brande-for-agencies',
    folder: 'section-7-agency',
    startUrl: '/account/',
    instructions: 'Account overview showing brand switching or multi-brand workflow.',
  },
  {
    slug: 'set-up-agency-workspace',
    folder: 'section-7-agency',
    startUrl: '/account/',
    instructions: 'Brand creation flow, workspace configuration, or team invite — navigate to the relevant section.',
  },
  {
    slug: 'manage-multiple-brands',
    folder: 'section-7-agency',
    startUrl: '/account/',
    instructions: 'Account page showing multiple brands listed (if available).',
  },
  {
    slug: 'invite-client-collaborators',
    folder: 'section-7-agency',
    startUrl: '/account/',
    instructions: 'Find and open the team invitation modal or collaborator invite form.',
  },
  {
    slug: 'client-approval-flows',
    folder: 'section-7-agency',
    startUrl: '/',
    instructions: 'Open a project → show approval workflow UI.',
  },
  {
    slug: 'custom-checklists-workflows',
    folder: 'section-7-agency',
    startUrl: '/account/checklist-templates/',
    instructions: 'Checklist Templates page.',
  },
  {
    slug: 'content-agent-client-accounts',
    folder: 'section-7-agency',
    startUrl: '/account/recommendations/',
    instructions: 'Content Opportunities page — per-brand context if visible.',
  },
  {
    slug: 'agency-dashboard',
    folder: 'section-7-agency',
    startUrl: '/dashboard/',
    instructions: 'Dashboard in agency/multi-brand view.',
  },
  {
    slug: 'scale-without-losing-control',
    folder: 'section-7-agency',
    startUrl: '/account/',
    instructions: 'Multi-brand account overview — brands list or workspace management view.',
  },

  // ── Section 8: Dashboard ──────────────────────────────────────────────────
  {
    slug: 'use-dashboard',
    folder: 'section-8-dashboard',
    startUrl: '/dashboard/',
    instructions: 'Full dashboard with all widgets — Content Agent, quick actions, calendar visible.',
  },
  {
    slug: 'manage-content-calendar',
    folder: 'section-8-dashboard',
    startUrl: '/content-calendar/',
    instructions: 'Content Calendar page.',
  },
  {
    slug: 'quick-actions-shortcuts',
    folder: 'section-8-dashboard',
    startUrl: '/dashboard/',
    instructions: 'Dashboard showing quick action buttons and keyboard shortcut hints.',
  },
  {
    slug: 'navigate-settings',
    folder: 'section-8-dashboard',
    startUrl: '/account/',
    instructions: 'Account page with sidebar navigation clearly visible.',
  },

  // ── Section 9: Account & Settings ────────────────────────────────────────
  {
    slug: 'access-update-settings',
    folder: 'section-9-account',
    startUrl: '/account/',
    instructions: 'Account settings page.',
  },
  {
    slug: 'change-password',
    folder: 'section-9-account',
    startUrl: '/forgot-password/',
    skipLogin: true,
    instructions: 'Password reset / forgot password form.',
  },
  {
    slug: 'theme-language-preferences',
    folder: 'section-9-account',
    startUrl: '/account/',
    instructions: 'Account settings — scroll to show Toggle Theme and Select Language buttons.',
  },
  {
    slug: 'manage-user-preferences',
    folder: 'section-9-account',
    startUrl: '/account/',
    instructions: 'Account settings — General Info, Change Password, Settings sections all visible.',
  },
  {
    slug: 'manage-notifications',
    folder: 'section-9-account',
    startUrl: '/notifications/',
    instructions: 'Notifications page.',
  },

  // ── Section 10: Help & Feedback ───────────────────────────────────────────
  {
    slug: 'use-help-center',
    folder: 'section-10-help',
    startUrl: '/support/',
    instructions: 'Support / help center page.',
  },
  {
    slug: 'submit-feedback',
    folder: 'section-10-help',
    startUrl: '/feedback/',
    instructions: 'Feedback submission form.',
  },
  {
    slug: 'request-new-features',
    folder: 'section-10-help',
    startUrl: '/feedback/',
    instructions: 'Feedback form — feature request section.',
  },
  {
    slug: 'get-support',
    folder: 'section-10-help',
    startUrl: '/support/',
    instructions: 'Support page.',
  },
  {
    slug: 'understand-product-updates',
    folder: 'section-10-help',
    startUrl: '/support/',
    instructions: 'Support page / changelog or updates section.',
  },

  // ── Section 11: Troubleshooting ───────────────────────────────────────────
  {
    slug: 'account-login',
    folder: 'section-11-troubleshooting',
    startUrl: '/login/',
    skipLogin: true,
    instructions: 'Login form.',
  },
  {
    slug: 'brand-voice-analysis',
    folder: 'section-11-troubleshooting',
    startUrl: '/account/brand-voice/',
    instructions: 'Brand Voice Analyzer page.',
  },
  {
    slug: 'content-agent',
    folder: 'section-11-troubleshooting',
    startUrl: '/account/recommendations/',
    instructions: 'Content Opportunities page.',
  },
  {
    slug: 'content-generation',
    folder: 'section-11-troubleshooting',
    startUrl: '/',
    instructions: 'Projects workspace or project editor.',
  },
  {
    slug: 'file-uploads',
    folder: 'section-11-troubleshooting',
    startUrl: '/account/documents/',
    instructions: 'Brand Asset Vault — upload area.',
  },
  {
    slug: 'premium-features',
    folder: 'section-11-troubleshooting',
    startUrl: '/account/billing/',
    instructions: 'My Plan / billing page.',
  },
  {
    slug: 'publishing-integrations',
    folder: 'section-11-troubleshooting',
    startUrl: '/',
    instructions: 'Project editor or integrations section.',
  },
];

// ─── Helpers ─────────────────────────────────────────────────────────────────

async function gotoSafe(page, url) {
  try {
    await page.goto(url, { waitUntil: 'networkidle', timeout: 20000 });
  } catch {
    await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 20000 });
    await page.waitForTimeout(2000);
  }
}

async function login(ctx) {
  console.log('  → Logging in...');
  const page = await ctx.newPage();
  await gotoSafe(page, `${BASE_URL}/login/`);
  await page.fill('[data-testid="email-input"], input[type="email"]', EMAIL);
  await page.fill('[data-testid="password-input"], input[type="password"]', PASSWORD);
  await page.click('[data-testid="login-submit"], button[type="submit"]');
  await page.waitForURL(url => !url.href.includes('/login'), { timeout: 20000 });
  await page.waitForTimeout(2000);
  await page.close();
  console.log('  ✓ Logged in\n');
}

async function saveScreenshot(page, folder, slug) {
  const buf = await page.screenshot({ fullPage: false });
  const outDir = join(ROOT, folder, 'images');
  mkdirSync(outDir, { recursive: true });
  const outPath = join(outDir, `${slug}.jpg`);
  await sharp(buf)
    .resize({ width: 1200, withoutEnlargement: true })
    .jpeg({ quality: 75 })
    .toFile(outPath);
  return Math.round(statSync(outPath).size / 1024);
}

// ─── Main ────────────────────────────────────────────────────────────────────

async function main() {
  // Parse --from flag to resume from a specific slug
  const fromIdx = process.argv.indexOf('--from');
  const fromSlug = fromIdx !== -1 ? process.argv[fromIdx + 1] : null;
  let fromFound = !fromSlug;

  if (fromSlug) console.log(`\nResuming from: ${fromSlug}`);

  console.log('\nBrande.ai Help Center — Interactive Screenshot Capture');
  console.log(`URL: ${BASE_URL}`);
  console.log(`Articles: ${ARTICLES.length} total`);
  console.log('\nControls: press Enter to capture · s+Enter to skip · q+Enter to quit\n');
  console.log('The browser will open a new tab per article and auto-navigate.');
  console.log('Get the UI into the right state, then press Enter.\n');

  const browser = await chromium.launch({ headless: false });

  // One context for authenticated pages
  const authCtx = await browser.newContext({ viewport: { width: 1280, height: 800 } });
  await login(authCtx);

  // One context for public pages (no login)
  const anonCtx = await browser.newContext({ viewport: { width: 1280, height: 800 } });

  const rl = createInterface({ input: process.stdin, output: process.stdout });
  const ask = (q) => new Promise(res => rl.question(q, res));

  let captured = 0;
  let skipped = 0;

  for (let i = 0; i < ARTICLES.length; i++) {
    const art = ARTICLES[i];

    // --from resume support
    if (!fromFound) {
      if (art.slug === fromSlug) fromFound = true;
      else continue;
    }

    const num = `[${i + 1}/${ARTICLES.length}]`;

    console.log(`\n${'═'.repeat(65)}`);
    console.log(`${num}  ${art.slug}`);
    console.log(`     Folder : ${art.folder}/images/`);
    console.log(`     URL    : ${BASE_URL}${art.startUrl}`);
    console.log(`     Goal   : ${art.instructions}`);
    console.log(`${'─'.repeat(65)}`);

    const ctx = art.skipLogin ? anonCtx : authCtx;
    const page = await ctx.newPage();

    try {
      await gotoSafe(page, `${BASE_URL}${art.startUrl}`);
    } catch (err) {
      console.log(`     ⚠  Navigation error: ${err.message.split('\n')[0]}`);
    }

    const ans = await ask('     > ');

    if (ans.toLowerCase() === 'q') {
      await page.close();
      console.log('\n  Quit. Re-run with --from ' + art.slug + ' to continue here.');
      break;
    }

    if (ans.toLowerCase() === 's') {
      await page.close();
      console.log('     ⏭  Skipped');
      skipped++;
      continue;
    }

    // Capture
    try {
      const kb = await saveScreenshot(page, art.folder, art.slug);
      console.log(`     ✓  Saved → ${art.folder}/images/${art.slug}.jpg  (${kb}KB)`);
      captured++;
    } catch (err) {
      console.log(`     ✗  Save failed: ${err.message.split('\n')[0]}`);
    }

    await page.close();
  }

  rl.close();
  await browser.close();

  console.log(`\n${'═'.repeat(65)}`);
  console.log(`Session complete: ${captured} captured · ${skipped} skipped`);
  console.log('Images written directly to section-N-xxx/images/ folders.');
  console.log('\nNext steps:');
  console.log('  node scripts/check-coverage.js   ← verify all 79 articles still have images');
  console.log('  npm run dev                      ← visual QA in browser\n');
}

main().catch(err => { console.error(err); process.exit(1); });
