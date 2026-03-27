# Help Center — Contributing & Review Workflow

## How docs get reviewed and published

```
Edit markdown → Push branch → Open PR → Team reviews (rendered preview + diff) → Merge → Public
                                              ↑
                              Cloudflare Pages preview URL
                              posted as a PR comment automatically
```

## For developers

1. **Create a branch** from `main` (e.g. `docs/update-getting-started`)
2. **Edit markdown files** in `docs/help-center/`
3. **Preview locally:** `cd docs/help-center && npm install && npm run dev`
4. **Push and open a PR** — a preview URL will be posted as a comment within a few minutes
5. **Review the rendered preview** and the markdown diff
6. **Merge when approved** — production deploy is gated separately

## For non-technical reviewers (CEO, Ops)

When a PR is opened that changes docs, a comment will appear with a preview link. Click it to see the full rendered help center. Leave feedback directly on the PR, or tell a developer what needs changing. 

No installs or terminal commands needed.

## Local development

```bash
cd docs/help-center
npm install
npm run dev      # starts dev server at localhost:5173
npm run build    # production build
npm run preview  # preview production build
```

## Deployment setup (one-time)

### Cloudflare Pages (PR previews + password-protected staging)

1. Create a Cloudflare Pages project named `brande-help-center`
2. Add GitHub repo secrets:
   - `CLOUDFLARE_API_TOKEN` — API token with "Cloudflare Pages: Edit" permission
   - `CLOUDFLARE_ACCOUNT_ID` — your Cloudflare account ID
3. (Optional) Restrict access: Cloudflare dashboard → Pages → brande-help-center → Settings → Access Policy → add team emails

### GitHub Pages (public production)

1. In repo Settings → Pages, set source to "GitHub Actions"
2. Add a custom domain (e.g. `help.brande.ai`) in the Pages settings
3. Create a DNS CNAME record: `help.brande.ai` → `<your-org>.github.io`
4. When ready to go public: remove the `if: false` line from `.github/workflows/deploy-help-center.yml`

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

## Adding a new article

1. Create a `.md` file in the correct section folder
2. Add it to the sidebar in `.vitepress/config.ts`
3. Link to it from related articles' "Related Topics" section
4. Open a PR for review
