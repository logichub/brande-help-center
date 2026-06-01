# Screenshot Capture — Live Progress Tracker

**Last updated:** 2026-05-19  
**Script:** `scripts/capture-screenshots.js`  
**Total articles:** 79  
**Capture run:** Run #3 complete (79/79, 0 failed). Share dialog timing fix worked — all articles captured.

---

## Overall Status

| Phase                                        | Status                                                                    |
| -------------------------------------------- | ------------------------------------------------------------------------- |
| Script fixes (modal dialogs, trailing slash) | ✅ Done                                                                   |
| Article label corrections                    | ✅ Done                                                                   |
| Screenshot capture                           | ✅ Done — 79/79 (Run #3). Share dialog fix worked. No manual screenshots needed. |
| Image optimization (PNG→JPG)                 | ⏳ Pending — run `node scripts/optimize-images.js` (updates share article JPGs) |
| Image injection into markdown                | ✅ Done — all 79 articles have image refs                                 |
| Coverage verification                        | ✅ 100% — 79/79                                                           |
| Visual QA (npm run dev)                      | ⏳ Pending                                                                |

---

## Article Label Fixes Applied

These were confirmed WRONG from live screenshots and corrected in the source markdown:

| File                            | Wrong Label                             | Correct Label                             | Fixed |
| ------------------------------- | --------------------------------------- | ----------------------------------------- | ----- |
| `update-brand-voice.md`         | Account → **Brand Voice**               | Account → **Brand Voice Analyzer**        | ✅    |
| `upload-brand-assets.md`        | Account → **Brand Materials**           | Account → **Brand Asset Vault**           | ✅    |
| `update-brand-materials.md`     | Account → **Brand Materials**           | Account → **Brand Asset Vault**           | ✅    |
| `update-messaging-framework.md` | Account → **Brand Messaging Framework** | Account → **Brand Messaging Fingerprint** | ✅    |
| `reference-materials.md`        | Account → **Content Reference**         | Account → **Reference Materials**         | ✅    |
| `update-reference-materials.md` | Account → **Content Reference**         | Account → **Reference Materials**         | ✅    |

**Confirmed from screenshots:** Full sidebar shows:

- Account · Brand Voice Analyzer · Content Opportunities · Brand Messaging Fingerprint · Brand Asset Vault · Reference Materials · Checklist Templates · Snippets · Custom Fields · API Keys · My Plan

---

## Script Fixes Applied

| Fix                        | Detail                                                                                     |
| -------------------------- | ------------------------------------------------------------------------------------------ |
| Trailing slash on all URLs | App 404s without trailing slash — added normalization to `goto()` helper                   |
| Modal dialog capture       | Old approach: `clickIfExists('[data-testid="button-new"]')` — fails when sidebar collapsed |
| Modal dialog fix           | New: `openNewProjectDialog()` using `page.keyboard.press('Alt+n')` — works from anywhere   |

---

## Screenshot Quality Log

### ✅ Confirmed Correct

| Article                                             | What screenshot shows                                                                                                                                                                                                                                      | Notes                                                                                  |
| --------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `mental-model/understand-brande`                    | Dashboard with Content Agent widget                                                                                                                                                                                                                        | ✓                                                                                      |
| `getting-started/create-your-account`               | Signup form ("Welcome to Brande.ai!")                                                                                                                                                                                                                      | ✓                                                                                      |
| `getting-started/understand-brand-dna`              | Account page (no brand ID — fallback)                                                                                                                                                                                                                      | Acceptable                                                                             |
| `getting-started/complete-brand-profile`            | Account page                                                                                                                                                                                                                                               | Acceptable                                                                             |
| `getting-started/select-content-channels`           | Account page                                                                                                                                                                                                                                               | Acceptable                                                                             |
| `getting-started/upload-brand-assets`               | **BRAND ASSET VAULT** page — correct label ✓                                                                                                                                                                                                               | Sidebar clearly visible                                                                |
| `getting-started/reference-materials`               | **REFERENCE MATERIALS** page — correct label ✓                                                                                                                                                                                                             | Sidebar clearly visible                                                                |
| `getting-started/understand-brand-voice-analyzer`   | **BRAND VOICE ANALYZER** page — correct label ✓                                                                                                                                                                                                            | Shows existing analysis + upload form                                                  |
| `getting-started/update-brand-voice`                | Brand Voice Analyzer page                                                                                                                                                                                                                                  | Same as above — acceptable                                                             |
| `getting-started/update-brand-materials`            | Brand Asset Vault page                                                                                                                                                                                                                                     | ✓                                                                                      |
| `getting-started/update-reference-materials`        | Reference Materials page                                                                                                                                                                                                                                   | ✓                                                                                      |
| `getting-started/update-messaging-framework`        | **Brand Messaging Fingerprint** page — correct label ✓                                                                                                                                                                                                     | Shows actual brand story content                                                       |
| `getting-started/update-profile-settings`           | Account page                                                                                                                                                                                                                                               | Acceptable (no brand ID)                                                               |
| `content-agent/understanding-content-agent`         | "Content Opportunities for Mia Horm" page                                                                                                                                                                                                                  | Sidebar shows correct label ✓                                                          |
| `content-agent/use-content-agent`                   | Dashboard with Content Agent widget                                                                                                                                                                                                                        | ✓                                                                                      |
| `content-agent/get-daily-recommendations`           | Content Opportunities page                                                                                                                                                                                                                                 | ✓                                                                                      |
| `content-agent/read-content-briefs`                 | Content Opportunities page                                                                                                                                                                                                                                 | ✓                                                                                      |
| `content-agent/customize-content-brief`             | Content Opportunities page                                                                                                                                                                                                                                 | ✓                                                                                      |
| `content-agent/save-to-folders`                     | Projects workspace (/)                                                                                                                                                                                                                                     | ✓                                                                                      |
| `content-agent/content-agent-multiple-channels`     | Content Opportunities page                                                                                                                                                                                                                                 | ✓                                                                                      |
| `content-agent/content-agent-multiple-brands`       | Dashboard                                                                                                                                                                                                                                                  | ✓                                                                                      |
| `content-agent/content-agent-vs-manual`             | Content Opportunities page                                                                                                                                                                                                                                 | ✓                                                                                      |
| `creating-content/create-new-project`               | **"Create a new project" dialog** — modal working ✓                                                                                                                                                                                                        | Alt+n keyboard shortcut worked!                                                        |
| `creating-content/choose-project-templates`         | Same dialog with categories                                                                                                                                                                                                                                | ✓                                                                                      |
| `creating-content/generate-website-copy`            | Dialog with "website" searched — shows **Website SaaS Case Study**, **Website Copy Generator**                                                                                                                                                             | ✓                                                                                      |
| `creating-content/create-facebook-threads`          | Dialog with "facebook" — shows **Facebook Thread Post**, **Facebook Post**                                                                                                                                                                                 | ✓                                                                                      |
| `creating-content/create-linkedin-content`          | Dialog with "linkedin" — shows **LinkedIn Post**, **LinkedIn Post Commenter**                                                                                                                                                                              | ✓                                                                                      |
| `creating-content/include-images`                   | New Project dialog                                                                                                                                                                                                                                         | ✓                                                                                      |
| `creating-content/edit-refine-regenerate`           | Project editor with content visible                                                                                                                                                                                                                        | ✓                                                                                      |
| `creating-content/use-brand-voice-in-projects`      | New Project dialog                                                                                                                                                                                                                                         | ✓                                                                                      |
| `creating-content/use-content-improver`             | Project editor                                                                                                                                                                                                                                             | ✓                                                                                      |
| `creating-content/create-manage-snippets`           | **SNIPPETS** page — search bar, "Create Snippet" button, empty state                                                                                                                                                                                       | ✓                                                                                      |
| `visual-content/generate-on-brand-images`           | New Project dialog                                                                                                                                                                                                                                         | ✓                                                                                      |
| `visual-content/customize-image-style`              | New Project dialog                                                                                                                                                                                                                                         | ✓                                                                                      |
| `visual-content/visual-content-platforms`           | Dialog with "social" → **Social Media Hook Generator**                                                                                                                                                                                                     | ✓                                                                                      |
| `visual-content/maintain-visual-consistency`        | Brand Voice Analyzer page                                                                                                                                                                                                                                  | ✓                                                                                      |
| `projects-organization/understand-projects-folders` | Projects workspace (/)                                                                                                                                                                                                                                     | ✓                                                                                      |
| `projects-organization/find-projects-search`        | **Project Search modal** (Alt+Shift+P) — shows project list, shortcut in modal title                                                                                                                                                                       | ✓ Excellent                                                                            |
| `projects-organization/preview-files-images`        | Project editor (fallback)                                                                                                                                                                                                                                  | ⚠️ File preview modal requires an attached file — can't automate. Manual review needed |
| `projects-organization/export-content`              | Project editor (fallback)                                                                                                                                                                                                                                  | —                                                                                      |
| `projects-organization/export-tables-csv`           | Project editor (fallback)                                                                                                                                                                                                                                  | —                                                                                      |
| `projects-organization/organize-at-scale`           | Projects workspace                                                                                                                                                                                                                                         | ✓                                                                                      |
| `collaboration/share-and-publish`                   | Run #3: share dialog captured successfully (timing fix worked) ✓                                                                                                                                                                                           | ✅                                                                                     |
| `collaboration/share-content-projects`              | Run #3: share dialog captured successfully ✓                                                                                                                                                                                                               | ✅                                                                                     |
| `collaboration/publish-to-channels`                 | Project editor (Publish button unwired — article correctly states this)                                                                                                                                                                                    | ✓                                                                                      |
| `collaboration/manage-client-review-approval`       | Project editor with **Approve** button visible in toolbar                                                                                                                                                                                                  | ✓                                                                                      |
| `collaboration/leave-respond-comments`              | Project editor                                                                                                                                                                                                                                             | ✓                                                                                      |
| `collaboration/internal-vs-client-views`            | Project editor                                                                                                                                                                                                                                             | ✓                                                                                      |
| `agency/understand-agency-plan`                     | Account page                                                                                                                                                                                                                                               | ✓                                                                                      |
| `agency/use-brande-for-agencies`                    | Account page                                                                                                                                                                                                                                               | ✓                                                                                      |
| `agency/set-up-agency-workspace`                    | Account page — SETTINGS section shows **"Toggle Theme"** and **"Select Language"**                                                                                                                                                                         | ✓ Resolves 2 audit ⚠️ items                                                            |
| `agency/manage-multiple-brands`                     | Account page                                                                                                                                                                                                                                               | ✓                                                                                      |
| `agency/invite-client-collaborators`                | Account page (Invite button not found at /account level — likely inside brand settings)                                                                                                                                                                    | ⚠️                                                                                     |
| `agency/client-approval-flows`                      | Project editor                                                                                                                                                                                                                                             | ✓                                                                                      |
| `agency/custom-checklists-workflows`                | **Checklist Templates** page — shows **Premium Feature gate** ("Upgrade your plan to unlock this feature")                                                                                                                                                 | ✓ Note: article should mention this requires a paid plan                               |

### ⏳ Not yet captured / not yet reviewed

All articles from `agency/content-agent-client-accounts` onwards.

---

## Capture Findings — Article Accuracy Notes

### Template category names (confirmed from live dialog)

The New Project dialog shows these exact category names:

- Social Media
- Content Strategy & Ideation
- SEO & Web Content
- Copywriting
- Interactive Chat / Research

Articles referencing "template categories" should use these exact names.

### Template names (confirmed from search)

- "Facebook Thread Post" and "Facebook Post" (for `create-facebook-threads` article)
- "LinkedIn Post" and "LinkedIn Post Commenter" (for `create-linkedin-content` article)
- "Website SaaS Case Study" and "Website Copy Generator" (for `generate-website-copy` article)

### Sidebar labels (confirmed from all account page screenshots)

```
Account
Brand Voice Analyzer       → /account/brand-voice
Content Opportunities      → /account/recommendations
Brand Messaging Fingerprint → /account/brand-message
Brand Asset Vault          → /account/documents
Reference Materials        → /account/reference-materials
Checklist Templates        → /account/checklist-templates
Snippets                   → /account/snippets/list
Custom Fields              → (not yet documented)
API Keys                   → (not yet documented)
My Plan                    → /account/billing
```

**Note:** "Custom Fields" and "API Keys" sidebar items are not covered in any help center article. May be worth adding stub articles.

---

## Issues / Blockers

| Issue                                  | Status       | Resolution                                                                                                                                                                                                                                                                         |
| -------------------------------------- | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Brand ID not resolving                 | Known        | All brand/\* routes fall back to /account — acceptable for screenshots                                                                                                                                                                                                             |
| Modal dialog not opening               | ✅ Fixed     | Switched from button click to `Alt+n` keyboard shortcut                                                                                                                                                                                                                            |
| Share button not clicking              | ✅ Fixed     | Selector `[data-testid="share-button"]` was correct per source (`Projects/Document.vue`). Root cause was timing: document editor component takes time to mount. Fix: `openFirstProject(page, true)` now waits for share button to be in DOM before clicking it. Applied in Run #3. |
| Articles with same screenshot          | Low priority | Several articles map to the same page (e.g., multiple content-agent articles all show /account/recommendations) — this is expected                                                                                                                                                 |
| Share/publish articles skipped for now | Noted        | If Run #3 fix still doesn't open share dialog (account may lack suitable project), screenshots will remain as project-editor fallback. Article content is accurate regardless.                                                                                                     |

---

## Remaining Steps

1. **Optimize new screenshots** — `node scripts/optimize-images.js` (converts Run #3 PNGs to JPGs, including updated share article screenshots)
2. **Verify coverage** — `node scripts/check-coverage.js`
3. **Visual QA** — `npm run dev` → browse representative articles, confirm images load correctly
4. **Human verification** of remaining ⚠️ audit items (see `docs/tasks/help-center-audit.md`)
