/**
 * Capture screenshots of the Brande.ai app for each help center article.
 * Each article has a specific action sequence that navigates to the right
 * page and opens the correct UI state before capturing.
 *
 * Run: node scripts/capture-screenshots.js
 * After: node scripts/optimize-images.js
 */

import { chromium } from 'playwright';
import { readFileSync, mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');

function loadEnv() {
  const envPath = join(ROOT, '.env');
  const lines = readFileSync(envPath, 'utf-8').split('\n');
  const env = {};
  for (const line of lines) {
    const [key, ...rest] = line.split('=');
    if (key && rest.length) env[key.trim()] = rest.join('=').trim();
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

// ─── Helpers ────────────────────────────────────────────────────────────────

async function goto(page, path, opts = {}) {
  // App requires trailing slash — without it every route 404s
  const p = path.endsWith('/') ? path : `${path}/`;
  try {
    await page.goto(`${BASE_URL}${p}`, { waitUntil: 'networkidle', timeout: 20000, ...opts });
  } catch {
    await page.goto(`${BASE_URL}${p}`, { waitUntil: 'domcontentloaded', timeout: 20000 });
    await page.waitForTimeout(2000);
  }
}

async function waitFor(page, selector, timeout = 8000) {
  try {
    await page.waitForSelector(selector, { timeout });
  } catch { /* not found — continue anyway */ }
}

async function clickIfExists(page, selector, timeout = 5000) {
  try {
    await page.waitForSelector(selector, { timeout });
    await page.click(selector);
    return true;
  } catch { return false; }
}

async function settle(page, ms = 1500) {
  await page.waitForTimeout(ms);
}

// ─── Login ───────────────────────────────────────────────────────────────────

async function login(page) {
  console.log('  → Logging in...');
  await goto(page, '/login');
  await page.fill('[data-testid="email-input"], input[type="email"]', EMAIL);
  await page.fill('[data-testid="password-input"], input[type="password"]', PASSWORD);
  await page.click('[data-testid="login-submit"], button[type="submit"]');
  await page.waitForURL(url => !url.href.includes('/login'), { timeout: 20000 });
  await settle(page, 2000);
  console.log('  ✓ Logged in');
}

// ─── Brand ID resolution ─────────────────────────────────────────────────────

async function getBrandId(page) {
  const fromUrl = (url) => { const m = url.match(/\/brand\/([a-zA-Z0-9_-]+)/); return m?.[1]; };

  // 1. Check current URL
  let id = fromUrl(page.url());
  if (id) return id;

  // 2. Check localStorage — app stores selected brand there
  id = await page.evaluate(() => {
    const keys = ['selectedBrand', 'selected_brand', 'brandId', 'brand_id', 'activeBrand', 'active_brand'];
    for (const k of keys) {
      const v = localStorage.getItem(k);
      if (v) {
        try { const p = JSON.parse(v); return p?.id || p; } catch { return v; }
      }
    }
    // Also scan all keys for anything containing a UUID-like brand id
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i);
      const v = localStorage.getItem(k);
      if (v && /brand/i.test(k)) {
        try { const p = JSON.parse(v); return p?.id || p?.brandId || null; } catch {}
      }
    }
    return null;
  });
  if (id) return id;

  // 3. Navigate to dashboard, check URL and links
  await goto(page, '/dashboard');
  await settle(page, 2000);
  id = fromUrl(page.url());
  if (id) return id;

  // 4. Look for any /brand/ link in the DOM
  const href = await page.evaluate(() => {
    const a = document.querySelector('a[href*="/brand/"]');
    return a ? a.getAttribute('href') : null;
  });
  if (href) return fromUrl(href);

  return null;
}

// ─── First project helper ────────────────────────────────────────────────────

async function openFirstProject(page, waitForDocument = false) {
  await goto(page, '/');
  await settle(page, 2000);
  // Try clicking the first project in the sidebar
  const clicked = await clickIfExists(page, '[data-testid="project-button"]', 4000)
    || await clickIfExists(page, '[data-testid="folderless-project-button"]', 2000);
  if (clicked) {
    if (waitForDocument) {
      // Wait for the document editor to fully mount (share button lives here)
      await waitFor(page, '[data-testid="share-button"]', 10000);
    }
    await settle(page, 2000);
  }
  return clicked;
}

// Open New Project dialog using keyboard shortcut (works regardless of sidebar state)
async function openNewProjectDialog(page) {
  await goto(page, '/');
  await settle(page, 2000);
  // Dismiss anything that might be open
  await page.keyboard.press('Escape');
  await settle(page, 500);
  // Alt+n opens the New Project dialog from anywhere (Windows/Linux shortcut)
  await page.keyboard.press('Alt+n');
  await waitFor(page, '[role="dialog"]', 8000);
  await settle(page, 1000);
}

// ─── Screenshot ──────────────────────────────────────────────────────────────

async function screenshot(page, section, slug) {
  const dir = join(ROOT, 'public', 'images', 'raw', section);
  mkdirSync(dir, { recursive: true });
  await page.screenshot({ path: join(dir, `${slug}.png`), fullPage: false });
}

// ─── Article definitions ─────────────────────────────────────────────────────
// Each entry: { section, slug, action: async (page, ctx) => void }
// ctx = { brandId }

function articles(ctx) {
  const { brandId } = ctx;

  return [

    // ── Section 0: Mental Model ────────────────────────────────────────────
    {
      section: 'mental-model',
      slug: 'understand-brande',
      action: async (page) => {
        await goto(page, '/dashboard');
        await waitFor(page, 'main', 5000);
        await settle(page);
      },
    },

    // ── Section 1: Getting Started ─────────────────────────────────────────
    {
      section: 'getting-started',
      slug: 'create-your-account',
      skipLogin: true,
      action: async (page) => {
        await goto(page, '/signup');
        await waitFor(page, '[data-testid="email-input"], input[type="email"]');
        await settle(page);
      },
    },
    {
      section: 'getting-started',
      slug: 'understand-brand-dna',
      action: async (page) => {
        if (brandId) await goto(page, `/brand/${brandId}`);
        else await goto(page, '/account');
        await settle(page, 2000);
      },
    },
    {
      section: 'getting-started',
      slug: 'complete-brand-profile',
      action: async (page) => {
        if (brandId) await goto(page, `/brand/${brandId}`);
        else await goto(page, '/account');
        await settle(page, 2000);
      },
    },
    {
      section: 'getting-started',
      slug: 'select-content-channels',
      action: async (page) => {
        if (brandId) await goto(page, `/brand/${brandId}`);
        else await goto(page, '/account');
        await settle(page, 2000);
      },
    },
    {
      section: 'getting-started',
      slug: 'upload-brand-assets',
      action: async (page) => {
        await goto(page, '/account/documents');
        await waitFor(page, 'main');
        await settle(page, 2000);
      },
    },
    {
      section: 'getting-started',
      slug: 'reference-materials',
      action: async (page) => {
        await goto(page, '/account/reference-materials');
        await waitFor(page, 'main');
        await settle(page, 2000);
      },
    },
    {
      section: 'getting-started',
      slug: 'understand-brand-voice-analyzer',
      action: async (page) => {
        await goto(page, '/account/brand-voice');
        await waitFor(page, 'main');
        await settle(page, 2000);
      },
    },
    {
      section: 'getting-started',
      slug: 'update-brand-voice',
      action: async (page) => {
        await goto(page, '/account/brand-voice');
        await waitFor(page, 'main');
        await settle(page, 2000);
      },
    },
    {
      section: 'getting-started',
      slug: 'update-brand-materials',
      action: async (page) => {
        await goto(page, '/account/documents');
        await waitFor(page, 'main');
        await settle(page, 2000);
      },
    },
    {
      section: 'getting-started',
      slug: 'update-reference-materials',
      action: async (page) => {
        await goto(page, '/account/reference-materials');
        await waitFor(page, 'main');
        await settle(page, 2000);
      },
    },
    {
      section: 'getting-started',
      slug: 'update-messaging-framework',
      action: async (page) => {
        await goto(page, '/account/brand-message');
        await waitFor(page, 'main');
        await settle(page, 2000);
      },
    },
    {
      section: 'getting-started',
      slug: 'update-profile-settings',
      action: async (page) => {
        if (brandId) await goto(page, `/brand/${brandId}`);
        else await goto(page, '/account');
        await settle(page, 2000);
      },
    },

    // ── Section 2: Content Agent ───────────────────────────────────────────
    {
      section: 'content-agent',
      slug: 'understanding-content-agent',
      action: async (page) => {
        // Show the Content Opportunities page
        await goto(page, '/account/recommendations');
        await waitFor(page, 'main');
        await settle(page, 2000);
      },
    },
    {
      section: 'content-agent',
      slug: 'use-content-agent',
      action: async (page) => {
        // Show dashboard with Content Agent widget
        await goto(page, '/dashboard');
        await waitFor(page, '[data-testid="content-agent-recommendations"], main');
        await settle(page, 2500);
      },
    },
    {
      section: 'content-agent',
      slug: 'get-daily-recommendations',
      action: async (page) => {
        await goto(page, '/account/recommendations');
        await waitFor(page, 'main');
        await settle(page, 2000);
      },
    },
    {
      section: 'content-agent',
      slug: 'read-content-briefs',
      action: async (page) => {
        await goto(page, '/account/recommendations');
        await waitFor(page, 'main');
        await settle(page, 2000);
      },
    },
    {
      section: 'content-agent',
      slug: 'customize-content-brief',
      action: async (page) => {
        await goto(page, '/account/recommendations');
        await waitFor(page, 'main');
        await settle(page, 2000);
      },
    },
    {
      section: 'content-agent',
      slug: 'save-to-folders',
      action: async (page) => {
        // Show projects workspace with folder structure
        await goto(page, '/');
        await waitFor(page, 'main');
        await settle(page, 2000);
      },
    },
    {
      section: 'content-agent',
      slug: 'content-agent-multiple-channels',
      action: async (page) => {
        await goto(page, '/account/recommendations');
        await waitFor(page, 'main');
        await settle(page, 2000);
      },
    },
    {
      section: 'content-agent',
      slug: 'content-agent-multiple-brands',
      action: async (page) => {
        // Show dashboard with brand switcher area visible
        await goto(page, '/dashboard');
        await waitFor(page, 'main');
        await settle(page, 2000);
      },
    },
    {
      section: 'content-agent',
      slug: 'content-agent-vs-manual',
      action: async (page) => {
        await goto(page, '/account/recommendations');
        await waitFor(page, 'main');
        await settle(page, 2000);
      },
    },

    // ── Section 3: Creating Content ────────────────────────────────────────
    {
      section: 'creating-content',
      slug: 'create-new-project',
      action: async (page) => {
        await openNewProjectDialog(page);
      },
    },
    {
      section: 'creating-content',
      slug: 'choose-project-templates',
      action: async (page) => {
        await openNewProjectDialog(page);
        // Wait for template grid to render
        await waitFor(page, '[data-testid="category-projects-types"], [data-testid="search-results-projects-types"]', 5000);
        await settle(page, 500);
      },
    },
    {
      section: 'creating-content',
      slug: 'generate-website-copy',
      action: async (page) => {
        await openNewProjectDialog(page);
        await waitFor(page, '[data-testid="project-type-search-input"]', 5000);
        await page.fill('[data-testid="project-type-search-input"]', 'website').catch(() => {});
        await settle(page, 1000);
      },
    },
    {
      section: 'creating-content',
      slug: 'create-facebook-threads',
      action: async (page) => {
        await openNewProjectDialog(page);
        await waitFor(page, '[data-testid="project-type-search-input"]', 5000);
        await page.fill('[data-testid="project-type-search-input"]', 'facebook').catch(() => {});
        await settle(page, 1000);
      },
    },
    {
      section: 'creating-content',
      slug: 'create-linkedin-content',
      action: async (page) => {
        await openNewProjectDialog(page);
        await waitFor(page, '[data-testid="project-type-search-input"]', 5000);
        await page.fill('[data-testid="project-type-search-input"]', 'linkedin').catch(() => {});
        await settle(page, 1000);
      },
    },
    {
      section: 'creating-content',
      slug: 'include-images',
      action: async (page) => {
        await openNewProjectDialog(page);
      },
    },
    {
      section: 'creating-content',
      slug: 'edit-refine-regenerate',
      action: async (page) => {
        // Open a project to show the editor
        await openFirstProject(page);
        await waitFor(page, '[data-testid="document"], [data-testid="projects-document"]', 5000);
        await settle(page, 1500);
      },
    },
    {
      section: 'creating-content',
      slug: 'use-brand-voice-in-projects',
      action: async (page) => {
        await openNewProjectDialog(page);
      },
    },
    {
      section: 'creating-content',
      slug: 'use-content-improver',
      action: async (page) => {
        await openFirstProject(page);
        await waitFor(page, '[data-testid="projects-chat"], [data-testid="document"]', 5000);
        await settle(page, 1500);
      },
    },
    {
      section: 'creating-content',
      slug: 'create-manage-snippets',
      action: async (page) => {
        await goto(page, '/account/snippets/list');
        await waitFor(page, 'main');
        await settle(page, 2000);
      },
    },

    // ── Section 4: Visual Content ──────────────────────────────────────────
    {
      section: 'visual-content',
      slug: 'generate-on-brand-images',
      action: async (page) => {
        await openNewProjectDialog(page);
      },
    },
    {
      section: 'visual-content',
      slug: 'customize-image-style',
      action: async (page) => {
        await openNewProjectDialog(page);
      },
    },
    {
      section: 'visual-content',
      slug: 'visual-content-platforms',
      action: async (page) => {
        await openNewProjectDialog(page);
        await waitFor(page, '[data-testid="project-type-search-input"]', 5000);
        await page.fill('[data-testid="project-type-search-input"]', 'social').catch(() => {});
        await settle(page, 1000);
      },
    },
    {
      section: 'visual-content',
      slug: 'maintain-visual-consistency',
      action: async (page) => {
        await goto(page, '/account/brand-voice');
        await waitFor(page, 'main');
        await settle(page, 2000);
      },
    },

    // ── Section 5: Projects & Organization ────────────────────────────────
    {
      section: 'projects-organization',
      slug: 'understand-projects-folders',
      action: async (page) => {
        await goto(page, '/');
        await waitFor(page, '[data-testid="projects-sidebar"], main');
        await settle(page, 2000);
      },
    },
    {
      section: 'projects-organization',
      slug: 'find-projects-search',
      action: async (page) => {
        await goto(page, '/');
        await settle(page, 1500);
        // Trigger project search modal (Alt+Shift+P)
        await page.keyboard.press('Alt+Shift+P');
        await waitFor(page, '[data-testid="projects-search-modal"], [role="dialog"]', 5000);
        await settle(page, 1000);
      },
    },
    {
      section: 'projects-organization',
      slug: 'preview-files-images',
      action: async (page) => {
        await openFirstProject(page);
        await waitFor(page, '[data-testid="document"], main', 5000);
        await settle(page, 1500);
      },
    },
    {
      section: 'projects-organization',
      slug: 'export-content',
      action: async (page) => {
        await openFirstProject(page);
        await waitFor(page, '[data-testid="document"], main', 5000);
        await settle(page, 1500);
      },
    },
    {
      section: 'projects-organization',
      slug: 'export-tables-csv',
      action: async (page) => {
        await openFirstProject(page);
        await waitFor(page, '[data-testid="document"], main', 5000);
        await settle(page, 1500);
      },
    },
    {
      section: 'projects-organization',
      slug: 'organize-at-scale',
      action: async (page) => {
        await goto(page, '/');
        await waitFor(page, '[data-testid="projects-sidebar"], main');
        await settle(page, 2000);
      },
    },

    // ── Section 6: Collaboration ───────────────────────────────────────────
    {
      section: 'collaboration',
      slug: 'share-and-publish',
      action: async (page) => {
        // waitForDocument=true ensures share button is mounted before clicking
        const hasProject = await openFirstProject(page, true);
        if (hasProject) {
          await clickIfExists(page, '[data-testid="share-button"]', 8000);
          await waitFor(page, '[role="dialog"]', 8000);
          await settle(page, 1500);
        } else {
          await goto(page, '/');
          await settle(page, 1500);
        }
      },
    },
    {
      section: 'collaboration',
      slug: 'share-content-projects',
      action: async (page) => {
        const hasProject = await openFirstProject(page, true);
        if (hasProject) {
          await clickIfExists(page, '[data-testid="share-button"]', 8000);
          await waitFor(page, '[role="dialog"]', 8000);
          await settle(page, 1500);
        } else {
          await goto(page, '/');
          await settle(page, 1500);
        }
      },
    },
    {
      section: 'collaboration',
      slug: 'publish-to-channels',
      action: async (page) => {
        await openFirstProject(page);
        await waitFor(page, '[data-testid="document"], main', 5000);
        await settle(page, 1500);
      },
    },
    {
      section: 'collaboration',
      slug: 'manage-client-review-approval',
      action: async (page) => {
        const hasProject = await openFirstProject(page);
        if (hasProject) {
          // Look for the approve button or approval status
          await waitFor(page, '[data-testid="approve-project-button"], [data-testid="document"]', 5000);
          await settle(page, 1500);
        } else {
          await goto(page, '/');
          await settle(page, 1500);
        }
      },
    },
    {
      section: 'collaboration',
      slug: 'leave-respond-comments',
      action: async (page) => {
        await openFirstProject(page);
        // Click the message/comments icon to open the comments panel
        await clickIfExists(page, '[data-testid="manage-tasks-button"], button[data-nui-tooltip*="comment" i], button[data-nui-tooltip*="task" i]', 4000);
        await settle(page, 1500);
      },
    },
    {
      section: 'collaboration',
      slug: 'internal-vs-client-views',
      action: async (page) => {
        const hasProject = await openFirstProject(page);
        if (hasProject) {
          await waitFor(page, '[data-testid="document"], main', 5000);
          await settle(page, 1500);
        } else {
          await goto(page, '/');
          await settle(page, 1500);
        }
      },
    },

    // ── Section 7: Agency ──────────────────────────────────────────────────
    {
      section: 'agency',
      slug: 'understand-agency-plan',
      action: async (page) => {
        await goto(page, '/account');
        await waitFor(page, 'main');
        await settle(page, 2000);
      },
    },
    {
      section: 'agency',
      slug: 'use-brande-for-agencies',
      action: async (page) => {
        await goto(page, '/account');
        await waitFor(page, 'main');
        await settle(page, 2000);
      },
    },
    {
      section: 'agency',
      slug: 'set-up-agency-workspace',
      action: async (page) => {
        await goto(page, '/account');
        await waitFor(page, 'main');
        await settle(page, 2000);
      },
    },
    {
      section: 'agency',
      slug: 'manage-multiple-brands',
      action: async (page) => {
        await goto(page, '/account');
        await waitFor(page, 'main');
        await settle(page, 2000);
      },
    },
    {
      section: 'agency',
      slug: 'invite-client-collaborators',
      action: async (page) => {
        await goto(page, '/account');
        await waitFor(page, 'main');
        // Try clicking an Invite button if it exists
        await clickIfExists(page, 'button:has-text("Invite"), a:has-text("Invite")', 4000);
        await settle(page, 1500);
      },
    },
    {
      section: 'agency',
      slug: 'client-approval-flows',
      action: async (page) => {
        const hasProject = await openFirstProject(page);
        await waitFor(page, '[data-testid="document"], main', 5000);
        await settle(page, 1500);
      },
    },
    {
      section: 'agency',
      slug: 'custom-checklists-workflows',
      action: async (page) => {
        await goto(page, '/account/checklist-templates');
        await waitFor(page, 'main');
        await settle(page, 2000);
      },
    },
    {
      section: 'agency',
      slug: 'content-agent-client-accounts',
      action: async (page) => {
        await goto(page, '/account/recommendations');
        await waitFor(page, 'main');
        await settle(page, 2000);
      },
    },
    {
      section: 'agency',
      slug: 'agency-dashboard',
      action: async (page) => {
        await goto(page, '/dashboard');
        await waitFor(page, 'main');
        await settle(page, 2000);
      },
    },
    {
      section: 'agency',
      slug: 'scale-without-losing-control',
      action: async (page) => {
        await goto(page, '/account');
        await waitFor(page, 'main');
        await settle(page, 2000);
      },
    },

    // ── Section 8: Dashboard ───────────────────────────────────────────────
    {
      section: 'dashboard',
      slug: 'use-dashboard',
      action: async (page) => {
        await goto(page, '/dashboard');
        await waitFor(page, 'main');
        await settle(page, 2500);
      },
    },
    {
      section: 'dashboard',
      slug: 'manage-content-calendar',
      action: async (page) => {
        await goto(page, '/content-calendar');
        await waitFor(page, 'main');
        await settle(page, 2500);
      },
    },
    {
      section: 'dashboard',
      slug: 'quick-actions-shortcuts',
      action: async (page) => {
        await goto(page, '/dashboard');
        await waitFor(page, '[data-testid="new-project-button"], main');
        await settle(page, 2000);
      },
    },
    {
      section: 'dashboard',
      slug: 'navigate-settings',
      action: async (page) => {
        await goto(page, '/account');
        await waitFor(page, 'main');
        await settle(page, 2000);
      },
    },

    // ── Section 9: Account & Settings ─────────────────────────────────────
    {
      section: 'account',
      slug: 'access-update-settings',
      action: async (page) => {
        await goto(page, '/account');
        await waitFor(page, 'main');
        await settle(page, 2000);
      },
    },
    {
      section: 'account',
      slug: 'change-password',
      skipLogin: true,
      action: async (page) => {
        await goto(page, '/forgot-password');
        await waitFor(page, 'input[type="email"], form');
        await settle(page);
      },
    },
    {
      section: 'account',
      slug: 'theme-language-preferences',
      action: async (page) => {
        await goto(page, '/account');
        await waitFor(page, 'main');
        await settle(page, 2000);
      },
    },
    {
      section: 'account',
      slug: 'manage-user-preferences',
      action: async (page) => {
        await goto(page, '/account');
        await waitFor(page, 'main');
        await settle(page, 2000);
      },
    },
    {
      section: 'account',
      slug: 'manage-notifications',
      action: async (page) => {
        await goto(page, '/notifications');
        await waitFor(page, 'main');
        await settle(page, 2000);
      },
    },

    // ── Section 10: Help & Feedback ───────────────────────────────────────
    {
      section: 'help',
      slug: 'use-help-center',
      action: async (page) => {
        await goto(page, '/support');
        await waitFor(page, 'main');
        await settle(page);
      },
    },
    {
      section: 'help',
      slug: 'submit-feedback',
      action: async (page) => {
        await goto(page, '/feedback');
        await waitFor(page, 'main, form');
        await settle(page);
      },
    },
    {
      section: 'help',
      slug: 'request-new-features',
      action: async (page) => {
        await goto(page, '/feedback');
        await waitFor(page, 'main, form');
        await settle(page);
      },
    },
    {
      section: 'help',
      slug: 'get-support',
      action: async (page) => {
        await goto(page, '/support');
        await waitFor(page, 'main');
        await settle(page);
      },
    },
    {
      section: 'help',
      slug: 'understand-product-updates',
      action: async (page) => {
        await goto(page, '/support');
        await waitFor(page, 'main');
        await settle(page);
      },
    },

    // ── Troubleshooting ───────────────────────────────────────────────────
    {
      section: 'troubleshooting',
      slug: 'account-login',
      skipLogin: true,
      action: async (page) => {
        await goto(page, '/login');
        await waitFor(page, '[data-testid="login-form"], form');
        await settle(page);
      },
    },
    {
      section: 'troubleshooting',
      slug: 'brand-voice-analysis',
      action: async (page) => {
        await goto(page, '/account/brand-voice');
        await waitFor(page, 'main');
        await settle(page, 2000);
      },
    },
    {
      section: 'troubleshooting',
      slug: 'content-agent',
      action: async (page) => {
        await goto(page, '/account/recommendations');
        await waitFor(page, 'main');
        await settle(page, 2000);
      },
    },
    {
      section: 'troubleshooting',
      slug: 'content-generation',
      action: async (page) => {
        await goto(page, '/');
        await waitFor(page, 'main');
        await settle(page, 2000);
      },
    },
    {
      section: 'troubleshooting',
      slug: 'file-uploads',
      action: async (page) => {
        await goto(page, '/account/documents');
        await waitFor(page, 'main');
        await settle(page, 2000);
      },
    },
    {
      section: 'troubleshooting',
      slug: 'premium-features',
      action: async (page) => {
        await goto(page, '/account/billing');
        await waitFor(page, 'main');
        await settle(page, 2000);
      },
    },
    {
      section: 'troubleshooting',
      slug: 'publishing-integrations',
      action: async (page) => {
        await goto(page, '/');
        await waitFor(page, 'main');
        await settle(page, 2000);
      },
    },
  ];
}

// ─── Main ────────────────────────────────────────────────────────────────────

async function main() {
  console.log(`\nBrande.ai Help Center — Screenshot Capture`);
  console.log(`Target: ${BASE_URL}\n`);

  const browser = await chromium.launch({ headless: true });
  const authContext = await browser.newContext({ viewport: { width: 1280, height: 800 } });
  const authPage = await authContext.newPage();

  // Login and resolve brand ID
  await login(authPage);
  const brandId = await getBrandId(authPage);
  if (brandId) console.log(`  Brand ID: ${brandId}\n`);
  else console.warn('  Warning: No brand ID found — brand/* pages will fallback to /account\n');

  // Optional filter: ONLY_SLUGS=slug1,slug2 node scripts/capture-screenshots.js
  const onlySlugs = process.env.ONLY_SLUGS
    ? new Set(process.env.ONLY_SLUGS.split(',').map(s => s.trim()))
    : null;

  let list = articles({ brandId });
  if (onlySlugs) list = list.filter(a => onlySlugs.has(a.slug));
  console.log(`  Articles: ${list.length}${onlySlugs ? ` (filtered to: ${[...onlySlugs].join(', ')})` : ''}\n`);

  let success = 0;
  let failed = 0;
  const failures = [];

  for (const article of list) {
    const label = `${article.section}/${article.slug}`;
    process.stdout.write(`  Capturing ${label}...`);

    try {
      let page;
      let ctx;

      if (article.skipLogin) {
        // Use a fresh anonymous browser context for public pages
        const anonCtx = await browser.newContext({ viewport: { width: 1280, height: 800 } });
        page = await anonCtx.newPage();
        ctx = anonCtx;
      } else {
        page = await authContext.newPage();
        ctx = authContext;
      }

      await article.action(page, { brandId });
      await screenshot(page, article.section, article.slug);
      await page.close();
      if (article.skipLogin) await ctx.close();

      process.stdout.write(' ✓\n');
      success++;
    } catch (err) {
      process.stdout.write(` ✗ ${err.message.split('\n')[0]}\n`);
      failed++;
      failures.push({ label, error: err.message.split('\n')[0] });
    }
  }

  await browser.close();

  console.log(`\n${'─'.repeat(50)}`);
  console.log(`Done: ${success} captured, ${failed} failed`);
  if (failures.length) {
    console.log('\nFailed articles:');
    failures.forEach(f => console.log(`  ✗ ${f.label}: ${f.error}`));
  }
  console.log(`\nRaw PNGs → public/images/raw/`);
  console.log(`Next: node scripts/optimize-images.js\n`);
}

main().catch(err => { console.error(err); process.exit(1); });
