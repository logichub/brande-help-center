# Help Center — Contributing & Review Workflow

## How content flows

```
feature branch (writers)
  └── PR → staging (reviewer merges)
              └── Cloudflare Pages auto-deploys
                    └── stakeholders review at fixed URL
                          └── PR → main (lead merges when fully approved)
                                └── GitHub Pages (public, when ready)
```

**Branch responsibilities:**

| Branch | Who touches it | How |
|--------|---------------|-----|
| `feature/*` | Writers | Direct push |
| `staging` | Reviewer only | Merging approved PRs |
| `main` | Lead only | Merging from staging when fully approved |

---

## For writers

1. **Create a feature branch** from `main`:
   ```bash
   git checkout main
   git checkout -b docs/update-article-name
   ```
2. **Edit markdown files** in `docs/help-center/`
3. **Preview locally:** `cd docs/help-center && npm install && npm run dev`
4. **Push and open a PR** targeting `staging` (not `main`):
   ```bash
   git push -u origin docs/update-article-name
   ```
   On GitHub, make sure the PR base branch is set to `staging`
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

```bash
cd docs/help-center
npm install
npm run dev      # starts dev server at localhost:5173
npm run build    # production build
npm run preview  # preview production build
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

### GitHub Pages (public production)

1. In repo Settings → Pages, set source to "GitHub Actions"
2. Add a custom domain (e.g. `help.brande.ai`) in the Pages settings
3. Create a DNS CNAME record: `help.brande.ai` → `logichub.github.io`
4. When ready to go public: remove the `if: false` line from `.github/workflows/deploy.yml`

---

## File structure

```
docs/help-center/
├── .vitepress/config.ts   ← Site config, sidebar, nav
├── package.json           ← VitePress dependency
├── index.md               ← Homepage (hero + feature cards)
├── section-0-mental-model/ through section-10-help/
├── troubleshooting/
└── CONTRIBUTING.md         ← This file
```

---

## Adding a new article

1. Create a `.md` file in the correct section folder
2. Add it to the sidebar in `.vitepress/config.ts`
3. Link to it from related articles' "Related Topics" section
4. Open a PR targeting `staging` for review
