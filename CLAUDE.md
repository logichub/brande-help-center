# brande-help-center

VitePress-powered public help center for Brande.ai, published at brande.ai/help. Content is organized into numbered sections covering the product end-to-end: `section-0-mental-model` (what Brande.ai is) through `section-10-help` (support/troubleshooting), including getting started, the content agent, creating/visual content, collaboration, agency plans, dashboard, and account settings.

> Note: `CONTRIBUTING.md` in this repo describes the content as living under `docs/help-center/`. In this checkout the content is at the **repo root** instead — run all commands below from the repo root, not `docs/help-center/`.

## Commands

```bash
npm install
npm run dev        # VitePress dev server at localhost:5173
npm run build       # production build
npm run preview     # preview the production build

npm run screenshots     # capture screenshots (Playwright)
npm run optimize        # optimize images (sharp)
npm run inject-images   # inject image refs into docs
npm run check-coverage  # check doc coverage
```

## Contribution workflow

```
feature/* (writers)  ──PR──>  staging (reviewer merges)  ──auto-deploy──>  Cloudflare Pages (stakeholder review)
                                                              │
                                                     PR ──>  main (lead merges when approved)  ──>  GitHub Pages (public)
```

- Writers branch from `main` as `feature/*` (or `docs/*`), edit markdown, and open a PR **targeting `staging`** (not `main`).
- The reviewer merges into `staging`; Cloudflare Pages auto-deploys within ~2 minutes to a fixed staging URL for stakeholder review.
- The lead merges `staging` → `main` when fully approved; this is what ships to the public GitHub Pages site.
- Non-technical reviewers (CEO, Ops) use the fixed staging URL with email one-time-code login — no local setup needed.

Full details, including one-time Cloudflare/GitHub Pages deployment setup, are in `CONTRIBUTING.md`.

## Writing conventions

- Attribute content generation to **"Brande.ai"**, not generic "AI" phrasing. Write "Brande.ai generates/writes..." rather than "AI-generated content" or "the AI generates...". Brande.ai is a content platform in its own right, not a wrapper around a generic AI label — see the root [CLAUDE.md](../CLAUDE.md) "Shared vocabulary" section. Never use "Brand-E" in user-facing copy; it's an internal-only codename.

## Adding a new article

1. Create a `.md` file in the correct `section-N-*` folder.
2. Register it in the sidebar in `.vitepress/config.ts`.
3. Cross-link it from related articles' "Related Topics" section.
4. Open a PR targeting `staging`.
