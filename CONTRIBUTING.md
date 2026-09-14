# Help Center — Contributing & Review Workflow

## How content flows

```
feature branch (writers)
  └── PR → staging (reviewer merges)
              └── Cloudflare Pages auto-deploys
                    └── stakeholders review at fixed URL
                          └── PR → main (needs a second approval)
                                └── GitHub Pages → https://help.brande.ai (live, public)
```

**Branch responsibilities:**

| Branch | Who touches it | How |
|--------|---------------|-----|
| `feature/*` | Writers | Direct push |
| `staging` | Reviewer only | Merging approved PRs |
| `main` | Lead only | Merging from staging when fully approved |

`staging` is the repo's **default branch** — a PR opened on GitHub targets it automatically.

`staging` and `main` are both protected: **1 approving review required**, with `enforce_admins`
on. Nobody can merge their own PR into either branch, admins included. A second collaborator
always approves.

> **The site is live.** Anything merged to `main` is served at https://help.brande.ai within
> about a minute. There is no deploy gate on production any more — review on Cloudflare
> staging *before* opening the promotion PR.

### Keeping branches in sync

- Cut feature branches from `staging`, and update them from `staging`. Never merge `main` into a
  feature branch or into `staging`.
- Promote `staging` → `main` with **Create a merge commit**. Squash and rebase merges rewrite
  commits, so the two branches drift apart.
- After every release GitHub shows `main` as "N commits ahead of `staging`" and offers to compare.
  Those commits are the promotion merge commits, and both branches hold the same files. Leave it:
  there is nothing to sync.

---

## For writers

1. **Create a feature branch** from `staging`:
   ```bash
   git checkout staging
   git pull
   git checkout -b feature/update-article-name
   ```
2. **Edit markdown files** in the section folders at the repo root
   (`section-0-mental-model/` … `section-11-campaign-studio/`, `troubleshooting/`)
3. **Preview locally:** `npm install && npm run dev`
4. **Push and open a PR** targeting `staging` (not `main`):
   ```bash
   git push -u origin feature/update-article-name
   ```
   `staging` is the default branch, so it is already the PR base — just confirm it
5. **Review the markdown diff** in your PR before requesting a review

---

## For the reviewer

1. Review the markdown diff in the PR
2. Merge the PR into `staging` when acceptable
3. The staging workflow auto-deploys within ~2 minutes
4. Notify stakeholders that updated content is ready at the fixed URL

---

## For non-technical reviewers (CEO, Ops)

The help center is always available at a single fixed URL — no new link for every change:

```
https://staging.brande-help-center.pages.dev
```

1. Open the link and enter your email
2. Enter the one-time code sent to your inbox
3. Browse the rendered help center
4. Leave feedback as PR comments, or communicate directly with the reviewer

No installs or terminal commands needed. Bookmark the URL once — it never changes.

---

## Local development

Run everything from the repo root. Node.js 24 is what CI uses.

```bash
npm install
npm run dev
```

<!-- AUTO-GENERATED: scripts — from package.json, do not edit by hand -->

| Command | Description |
|---------|-------------|
| `npm run dev` | Start the VitePress dev server with hot reload (http://localhost:5173) |
| `npm run build` | Production build into `.vitepress/dist` |
| `npm run preview` | Serve the production build locally |
| `npm run screenshots` | Capture app screenshots for every article (`scripts/capture-screenshots.js`) |
| `npm run optimize` | Convert raw PNGs in `public/images/raw/` to optimized JPGs beside each article |
| `npm run inject-images` | Insert missing `![](./images/{slug}.jpg)` refs into articles |
| `npm run check-coverage` | Verify every article has an image; exits 1 if any are missing |

<!-- /AUTO-GENERATED -->

Two screenshot scripts have no npm alias and are run directly:

| Command | Description |
|---------|-------------|
| `node scripts/capture-interactive.js` | Headed capture — you drive the browser, press Enter to shoot each article. `--from <slug>` resumes partway |
| `node scripts/diagnose-routes.js` | Headed login that logs the app's real post-login URL structure |

> If a rebuild fails with `EPERM`, delete `.vitepress/.temp` and `.vitepress/cache`, then retry.

---

## Environment variables

Only the screenshot scripts need credentials. The site build needs none.

Create a `.env` file at the repo root. It is gitignored and must never be committed — this
repo is public.

<!-- AUTO-GENERATED: env — from scripts/*.js, do not edit by hand -->

| Variable | Required | Description | Example |
|----------|----------|-------------|---------|
| `BRANDE_EMAIL` | Yes, for screenshots | Brande.ai login used by the capture scripts | `docs@brande.ai` |
| `BRANDE_PASSWORD` | Yes, for screenshots | Password for that account | `your-password` |
| `BRANDE_URL` | No | App base URL (default: `https://app.brande.ai`) | `https://app.brande.ai` |
| `ONLY_SLUGS` | No | Comma-separated slugs limiting a capture run | `create-a-project,invite-a-teammate` |

<!-- /AUTO-GENERATED -->

`ONLY_SLUGS` is passed inline rather than through `.env`:

```bash
ONLY_SLUGS=create-a-project npm run screenshots
```

---

## Deployment setup (one-time)

### Cloudflare Pages (staging)

1. Create a Cloudflare Pages project named `brande-help-center`
2. Add GitHub repo secrets:
   - `CLOUDFLARE_API_TOKEN` — API token with "Cloudflare Pages: Edit" permission
   - `CLOUDFLARE_ACCOUNT_ID` — your Cloudflare account ID
3. Restrict access: Cloudflare dashboard → Pages → brande-help-center → Settings → Access Policy → add team emails
4. Staging deploys automatically on every merge to `staging` via `.github/workflows/staging.yml`

### GitHub Pages (public production) — already configured

Live since 2026-06-01. Nothing here needs doing again; it is recorded for reference.

1. Repo Settings → Pages, source set to "GitHub Actions"
2. Custom domain `help.brande.ai` set in the Pages settings
3. DNS CNAME: `help.brande.ai` → `logichub.github.io`, proxy status **DNS only** (grey cloud)
4. The deploy gate (`if: false`) was removed from `.github/workflows/deploy.yml`

> **The custom domain lives in Settings → Pages, not in a file.** The production workflow uploads
> only `.vitepress/dist`, so the repo has no `CNAME` file and does not need one. If the domain ever
> stops resolving, re-enter `help.brande.ai` under Settings → Pages.

---

## File structure

<!-- AUTO-GENERATED: tree — from the repo root, do not edit by hand -->

```
.                              ← repo root IS the VitePress source root
├── .github/workflows/
│   ├── deploy.yml             ← GitHub Pages production (push to main)
│   └── staging.yml            ← Cloudflare Pages staging (push to staging)
├── .vitepress/config.ts       ← Site config, sidebar, nav
├── package.json               ← VitePress + Playwright tooling
├── index.md                   ← Homepage (hero + feature cards)
├── section-0-mental-model/    ← …through section-11-campaign-studio/, each with images/
├── troubleshooting/           ← Common issues, plus images/
├── public/icons/              ← Feature-card SVGs (light/dark variants)
├── scripts/                   ← Screenshot capture and image tooling
├── docs/tasks/                ← Internal notes (not published)
└── CONTRIBUTING.md            ← This file
```

Everything under `docs/` and `scripts/`, plus any `README.md`, `CONTRIBUTING.md` and `TODO.md`,
is kept out of the built site by `srcExclude` in `.vitepress/config.ts`.

> **Any other root-level `.md` file publishes as a public page.** If you add a meta doc at the
> root, add it to `srcExclude` first or keep it out of the repo.

<!-- /AUTO-GENERATED -->

---

## Adding a new article

1. Create a `.md` file in the correct section folder
2. Add it to the sidebar in `.vitepress/config.ts`
3. Use **root-relative** internal links (`/section-5-projects-organization/create-a-project`).
   A full path like `/docs/help-center/…` 404s — the source root is the repo root
4. Reference images relatively (`![](./images/slug.jpg)`) so Vite fingerprints them
5. Link to it from related articles' "Related Topics" section
6. Open a PR targeting `staging` for review

> `ignoreDeadLinks: true` is set in the config, so a broken internal link will **not** fail the
> build. Check your links by hand.
