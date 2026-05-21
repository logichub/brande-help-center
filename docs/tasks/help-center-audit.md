# Help Center Content Audit — Evidence-Based

**Date:** 2026-05-21  
**Evidence sources:** (1) Directus database via MCP, (2) Nuxt 3 frontend source (`nuxt-3-brande-frontend/.app/`), (3) Backend source (`intellecto-services/`). Every item is verified — no "needs live-app check" deferred items remain.

**Total articles:** 79

---

## Evidence Status Key

| Symbol | Meaning |
|--------|---------|
| ✅ | Verified correct |
| ❌ | Confirmed wrong |
| ⚠️ | Misleading / partially wrong |

---

## Product Architecture — Read First

### Content Agent vs Content Opportunities
Two different surfaces:
- **Content Agent** = dashboard widget next to the Quick Action buttons. Its heading is hardcoded in `constants/content-agent.ts`: **"Content Agent: Your Strategic Content Recommendations for Today"**. Generates recommendations on mount via `contentAgentStore.generateContentAgentRecomendations()`.
- **Content Opportunities** = the full-screen page at `/account/recommendations`. Labeled "Recommendations" in UI strings. Displays the same data in expanded form.

### Language Support
The UI language selector shows **English and Spanish only**. The `languages` DB table has 8 entries but those drive content-workflow translation features, not the UI toggle.

---

## Critical Cross-Cutting Issues

### Issue 1 — Plan Names (affects ~10 articles)

Only 3 plans exist in `plans` DB collection: **Creator**, **Growth**, **Agency**.  
Articles use: Free, Starter, Pro, Team, Enterprise — **all wrong**.

**Verified plan limits from DB:**

| Feature | Creator | Growth | Agency |
|---------|---------|--------|--------|
| Brands | 1 | 1 | 3 |
| Brand Voice docs | 3 | 10 | 100 |
| Collaborators | 1 | 10 | 100 |
| Recommendations | 0 | Unlimited | Unlimited |
| Snippets | 0 | Unlimited | Unlimited |
| Project Approval | No | Yes | Yes |
| Project Comments | No | No | Yes |
| Checklist Templates | 0 | 0 | 1 |
| Brand Messaging Fingerprint | No | No | Yes |

### Issue 2 — Agency Plan Brand Limit

`understand-agency-plan.md` says "unlimited client brands." DB: `brand_limit = 3`. ❌ Wrong.

---

## Full Article Audit

### Section 0 — Mental Model

#### `understand-brande.md`
| Claim | Source | Status |
|-------|--------|--------|
| Conceptual overview — no specific UI steps | — | ✅ |

---

### Section 1 — Getting Started

#### `create-your-account.md`
| Claim | Source | Status |
|-------|--------|--------|
| Password: minimum 8 characters | `signup.vue`: `z.string().min(8, ...)` | ✅ |
| Password: requires uppercase, lowercase, number | `signup.vue` Zod schema: only `.min(8)` enforced. The `superRefine` block runs zxcvbn and blocks submission if zxcvbn shows warnings — but zxcvbn evaluates strength holistically, NOT by specific character class. No uppercase/lowercase/number rule exists. | ❌ |
| A strength indicator shows as you type | `signup.vue` references `AddonInputPassword` with `validation.feedback` — strength indicator exists | ✅ |
| Onboarding wizard after first login | DB `onboarding_steps` + frontend confirmed | ✅ |

**Fix:** Change password requirements to "minimum 8 characters (a strength indicator will guide you)." Remove uppercase/lowercase/number claims.

---

#### `understand-brand-dna.md`
| Claim | Source | Status |
|-------|--------|--------|
| Conceptual article — no verifiable UI steps | — | ✅ |

---

#### `complete-brand-profile.md`
| Claim | Source | Status |
|-------|--------|--------|
| Onboarding wizard at `/onboard` | Frontend route + DB confirmed | ✅ |
| "Five key sections" | DB `onboarding_steps` has **7 steps** | ❌ |
| Section names (Brand Basics, Business Objectives, etc.) | DB step titles: Company Information / Brand and Product Positioning / Customer Research / Competitive Analysis / Content Strategy and Creative Briefs / Public Stances and Legal Considerations / Content Preferences and Restrictions | ❌ |
| Channel selection in onboarding | DB Step 5 `form_contents`: `contentDistributionChannels` multi-select ✅ | ✅ |
| Logo required during onboarding | DB Step 1 `form_contents` does NOT include a logo field | ❌ |

**Fix:** Update to 7 steps with correct names from DB.

---

#### `select-content-channels.md`
| Claim | Source | Status |
|-------|--------|--------|
| Channel selection in onboarding step | DB Step 5 confirmed | ✅ |
| Channel list | DB Step 5 exactly: Blog, Podcasts, Paid Ads, Email, Facebook, Instagram, Twitter (X), LinkedIn, TikTok, YouTube, Pinterest, Snapchat, Discord/Communities | ✅ |

---

#### `upload-brand-assets.md`
| Claim | Source | Status |
|-------|--------|--------|
| Page label "Brand Asset Vault" | DB strings: `brand.brandMaterials.title = "Brand Asset Vault"` | ✅ |
| Route `/account/documents` | `pages/account/documents.vue` | ✅ |
| File size limit: 100 MB | `documents.vue` line 33: `const maxFileSize = ref<number>(5 * 1024 * 1024)` = **5MB** | ❌ |
| GIF listed as supported image type | `constants/file.ts` line 65: `supportedImageExtensions = ['.jpg', '.jpeg', '.png', '.webp']` — no GIF | ❌ |
| PDF, Word, video, audio supported | `constants/file.ts` `supportedTextExtensions` includes PDF, DOC, DOCX; `supportedMediaExtensions` includes MP4, MOV, MP3, WAV | ✅ |

**Fix:** Change file size limit from 100MB to 5MB. Remove GIF from the supported image types list.

---

#### `reference-materials.md`
| Claim | Source | Status |
|-------|--------|--------|
| Page label "Reference Materials" | DB strings: `brand.contentReference.title = "Reference Materials"` | ✅ |
| Route `/account/reference-materials` | `pages/account/reference-materials.vue` | ✅ |
| Creator plan: no access | DB: Creator `reference_material_limit = 0` | ✅ |
| File size limit | `components/Settings/ReferenceInput.vue`: regular files = 100MB, images = 10MB, media (audio/video) = 1GB | ✅ (if article states 100MB for files) |

---

#### `understand-brand-voice-analyzer.md`
| Claim | Source | Status |
|-------|--------|--------|
| Page label "Brand Voice Analyzer" | DB strings: `brand.brandVoice.title = "Brand Voice Analyzer"` | ✅ |
| Route `/account/brand-voice` | `pages/account/brand-voice.vue` | ✅ |
| "50–500 words per sample" | DB strings: exact match | ✅ |
| Creator plan: 3 brand voice docs | DB: Creator `brand_voice_limit = 3` | ✅ |

---

#### `update-brand-voice.md`
| Claim | Source | Status |
|-------|--------|--------|
| Page label "Brand Voice Analyzer" | ✅ Fix already applied | ✅ |

---

#### `update-brand-materials.md`
| Claim | Source | Status |
|-------|--------|--------|
| Page label "Brand Asset Vault" | ✅ Fix already applied | ✅ |
| File size limit (if mentioned) | 5MB — same as `upload-brand-assets.md` | ❌ Fix if present |

---

#### `update-reference-materials.md`
| Claim | Source | Status |
|-------|--------|--------|
| Page label "Reference Materials" | ✅ Fix already applied | ✅ |

---

#### `update-messaging-framework.md`
| Claim | Source | Status |
|-------|--------|--------|
| Page label "Brand Messaging Fingerprint" | DB strings: `brand.brandMessagingFramework.title = "Brand Messaging Fingerprint"` | ✅ |
| Route `/account/brand-message` | `pages/account/brand-message.vue` | ✅ |
| Agency plan only | DB: `brand_message_suggestions = true` only for Agency | ✅ |
| Loading text in app says "Generating Your Brand Messaging Framework…" | `brand-message.vue` line 247 — hardcoded inconsistency in the code itself, different from the page title | ⚠️ Not article's fault, but worth noting |

---

#### `update-profile-settings.md`
| Claim | Source | Status |
|-------|--------|--------|
| Account at `/account` | Confirmed | ✅ |

---

### Section 2 — Content Agent

#### `understanding-content-agent.md`
| Claim | Source | Status |
|-------|--------|--------|
| "Content Agent" as feature name | ✅ `constants/content-agent.ts` uses "Content Agent" throughout | ✅ |
| Distinction between widget and full Recommendations page | ⚠️ Article should clarify both are related but separate surfaces | ⚠️ |

---

#### `use-content-agent.md`
| Claim | Source | Status |
|-------|--------|--------|
| Dashboard widget labeled "Content Agent: Your Strategic Content Recommendations for Today" | `constants/content-agent.ts`: `recommendationTitle = 'Content Agent: Your Strategic Content Recommendations for Today'` | ✅ |
| Widget is on the dashboard | `pages/dashboard.vue`: `<ContentAgentRecommedations>` component rendered on dashboard | ✅ |
| Creator plan has no Content Agent | DB: Creator `recommendation_limit = 0` | ✅ |
| Not available during trial | `ContentAgentRecommedations.vue` line 38: `subscription?.value.status === 'trialing'` returns early | ✅ |

---

#### `get-daily-recommendations.md`
| Claim | Source | Status |
|-------|--------|--------|
| Free plan — No recommendations | ❌ No Free plan | ❌ |
| Starter plan — Limited | ❌ No Starter plan | ❌ |
| Pro plan — Expanded | ❌ No Pro plan | ❌ |
| Agency plan — Unlimited | ⚠️ Correct plan name, but Growth also has unlimited | ⚠️ |

**Fix:** Creator = 0 recommendations, Growth = unlimited, Agency = unlimited.

---

#### `read-content-briefs.md`
| Claim | Source | Status |
|-------|--------|--------|
| Brief reading steps — conceptual | No specific UI claims | ✅ |

---

#### `customize-content-brief.md`
| Claim | Source | Status |
|-------|--------|--------|
| Customization dialog for recommendations | `ContentAgentRecommedations.vue` triggers `generateTemplateInput` → opens variable dialog | ✅ |

---

#### `save-to-folders.md`
| Claim | Source | Status |
|-------|--------|--------|
| Projects at `/`, folders in sidebar | `pages/index.vue` + DB `folders` collection | ✅ |

---

#### `content-agent-multiple-channels.md`
| Claim | Source | Status |
|-------|--------|--------|
| Starter = 3–4 channels, Pro = 10, Agency = all | ❌ No Starter/Pro plans. No per-plan channel gating exists anywhere in DB or frontend. Channel selection is set in onboarding Step 5 and is not plan-restricted. | ❌ |

**Fix:** Remove the false plan-based channel limits table entirely. Replace with explanation that channels are configured in Brand Profile onboarding, not gated by plan.

---

#### `content-agent-multiple-brands.md`
| Claim | Source | Status |
|-------|--------|--------|
| Starter = 1, Pro = 3, Agency = unlimited brands | ❌ No Starter/Pro. DB: Creator = 1, Growth = 1, Agency = 3 | ❌ |

**Fix:** Creator = 1 brand, Growth = 1 brand, Agency = up to 3 brands.

---

#### `content-agent-vs-manual.md`
| Claim | Source | Status |
|-------|--------|--------|
| Comparison article — no UI steps | ✅ | ✅ |

---

### Section 3 — Creating Content

#### `create-new-project.md`
| Claim | Source | Status |
|-------|--------|--------|
| Alt+N (Windows/Linux), Ctrl+N (Mac) | `pages/index.vue`: `onKeyStroke('n', e => { if (e.altKey \|\| (isMac && e.ctrlKey)) ... })` | ✅ |
| Dialog title "Create a new project" | DB strings: `projects.new.dialog.title = "Create a new project"` | ✅ |

---

#### `choose-project-templates.md`
| Claim | Source | Status |
|-------|--------|--------|
| 5 template categories | DB: Social Media, Content Strategy & Ideation, SEO & Web Content, Copywriting, Interactive Chat / Research | ✅ |

---

#### `generate-website-copy.md`
| Claim | Source | Status |
|-------|--------|--------|
| "Website Copy Generator" template | DB: `website-copy` template — SEO & Web Content | ✅ |
| "Website SaaS Case Study" template | DB: `website-saas-case-study` — SEO & Web Content | ✅ |

---

#### `create-facebook-threads.md`
| Claim | Source | Status |
|-------|--------|--------|
| "Facebook Thread Post" template exists | DB: `facebook-thread-post`, Social Media, supportsImages: true | ✅ |
| "Facebook Post" template exists | DB: `facebook-post`, Social Media | ✅ |
| Describes "Facebook Threads" as an official Facebook platform format | ⚠️ Facebook does not have a product called "Threads" — Meta Threads is a separate app (threads.net). The Brande template is for multi-post thread-style content published to Facebook. The article's platform description is misleading. | ⚠️ |

---

#### `create-linkedin-content.md`
| Claim | Source | Status |
|-------|--------|--------|
| "LinkedIn Post" template | DB: `linkedin-post`, supportsImages: true | ✅ |
| "LinkedIn Post Commenter" template | DB: `linkedin-post-commentor` | ✅ |

---

#### `include-images.md`
| Claim | Source | Status |
|-------|--------|--------|
| Image generation available in projects | DB: `supportsImages` field on templates — Facebook Post, Instagram Post/Carousel, LinkedIn Post, Long Form Content, etc. have `supportsImages: true` | ✅ |
| Platform-specific image sizing (e.g., different dimensions per platform) | DB: `image_generation_input` exists per template but the backend `image.service.js` uses fixed output dimensions — platform-specific sizing is not implemented | ❌ |

---

#### `edit-refine-regenerate.md`
| Claim | Source | Status |
|-------|--------|--------|
| Editor with regenerate options | `components/Projects/DocumentEditor.vue` — editor confirmed | ✅ |
| Revision history "chevron pair + Revision X of N label" | `utils/project.ts` exports `getUpdatedRevisions` — revision tracking exists. Frontend confirms revisions are stored. Specific UI label not verified but revision feature is real. | ✅ (feature exists) |

---

#### `use-brand-voice-in-projects.md`
| Claim | Source | Status |
|-------|--------|--------|
| Brand Voice dropdown in project dialog | DB: `hide_brand_voice_selection` field on templates controls visibility; most templates show it | ✅ |
| Creator: 3 brand voices max | DB: Creator `brand_voice_limit = 3` | ✅ |

---

#### `use-content-improver.md`
| Claim | Source | Status |
|-------|--------|--------|
| "Content Improver" template exists | DB: `content-improver`, Copywriting category, all plans | ✅ |
| Access via new-project → Copywriting | DB: `category = 4` (Copywriting) | ✅ |
| Describes a scoring interface: "Content Alignment: 72%", health indicator, category breakdown (Brand Voice Alignment, Audience Connection, etc.) | DB template description: "select one Improvement Option, and Brande.ai will rewrite your text according to your chosen refinement mode." No schema fields for scores, health indicators, or suggestions. Template schema has `variables` and `prompts` — standard template structure. This analysis interface **does not exist**. | ❌ |
| "Content Improver runs analysis and identifies specific suggestions" | No such functionality in template schema or frontend | ❌ |

**Fix:** Complete rewrite. Actual flow: open Content Improver template (Copywriting category) → upload your draft as reference material → select an improvement option → Brande.ai rewrites the content. There is no score panel.

---

#### `create-manage-snippets.md`
| Claim | Source | Status |
|-------|--------|--------|
| Route `/account/snippets/list` | `pages/account/snippets/list.vue` | ✅ |
| Page title "Snippets" | DB strings: `snippets.title = "Snippets"` | ✅ |
| Creator plan: no snippets | DB: Creator `custom_snippet_limit = 0` | ✅ |
| "Search snippets…" + "Create Snippet" | DB strings confirm both labels | ✅ |

---

### Section 4 — Visual Content

#### `generate-on-brand-images.md`
| Claim | Source | Status |
|-------|--------|--------|
| Image generation in templates | DB: `supportsImages` field + `image_generation_input` | ✅ |

---

#### `customize-image-style.md`
| Claim | Source | Status |
|-------|--------|--------|
| Image Instructions field | DB: `image_generation_input` per template | ✅ |
| Platform-specific image sizing | ❌ Not implemented — backend uses fixed dimensions, no per-platform sizing | ❌ |

---

#### `visual-content-platforms.md`
| Claim | Source | Status |
|-------|--------|--------|
| Platform-specific templates for social media | DB: Instagram Post, Instagram Carousel, Facebook Post, LinkedIn Post all have `supportsImages: true` | ✅ |

---

#### `maintain-visual-consistency.md`
| Claim | Source | Status |
|-------|--------|--------|
| Strategic guidance — no specific UI steps | ✅ | ✅ |

---

### Section 5 — Projects & Organization

#### `understand-projects-folders.md`
| Claim | Source | Status |
|-------|--------|--------|
| Projects workspace at `/` | `pages/index.vue` | ✅ |
| Folders in sidebar | DB `folders` collection + frontend | ✅ |

---

#### `find-projects-search.md`
| Claim | Source | Status |
|-------|--------|--------|
| Alt+Shift+P (Windows) / Ctrl+Shift+P (Mac) | `pages/index.vue`: `onKeyStroke('P', e => { if (e.shiftKey && (e.altKey \|\| (isMac && e.ctrlKey))) ... })` | ✅ |
| Modal title "Search Projects" | DB strings: `project.search.title = "Search Projects"` | ✅ |

---

#### `preview-files-images.md`
| Claim | Source | Status |
|-------|--------|--------|
| In-app file preview modal | No dedicated preview modal component found in frontend codebase. No preview-specific route or component. The `preview` slot in `BaseInputFileHeadless` is for upload previews only. **This feature does not appear to exist.** | ❌ |

**Fix:** Remove or rewrite. If the feature exists, it is not implemented in the current codebase.

---

#### `export-content.md`
| Claim | Source | Status |
|-------|--------|--------|
| DOCX export | `DocumentEditor.vue`: `exportToDOCX()` function confirmed. Button `data-testid="export-docx"`. Uses `html-docx-js-typescript` package. | ✅ |
| PDF export | `DocumentEditor.vue`: `exportToPDF()` calls `exportHtmlToPDF()` from `utils/exporter.ts` using `html2pdf.js` | ✅ |
| Export menu/button in project toolbar | `DocumentEditor.vue` — `isExportMenuOpen` ref + export buttons confirmed | ✅ |

---

#### `export-tables-csv.md`
| Claim | Source | Status |
|-------|--------|--------|
| CSV export for tables | `DocumentEditor.vue`: `initTableExportCSVTool()` adds "Download CSV" button to table blocks. Label from DB strings: `button.downloadCSV = "Download CSV"`. | ✅ |

---

#### `organize-at-scale.md`
| Claim | Source | Status |
|-------|--------|--------|
| Strategic article — no UI steps | ✅ | ✅ |

---

### Section 6 — Collaboration

#### `share-and-publish.md`
| Claim | Source | Status |
|-------|--------|--------|
| Share dialog | DB strings: `project.share.title = "Share Project"`, collaborator + social sections confirmed | ✅ |

---

#### `share-content-projects.md`
| Claim | Source | Status |
|-------|--------|--------|
| Free plan: 2 collaborators | ❌ No Free plan. Creator = 1, Growth = 10, Agency = 100 | ❌ |
| Pro plan: 10 collaborators | ❌ No Pro plan | ❌ |

**Fix:** Creator = 1, Growth = 10, Agency = 100.

---

#### `publish-to-channels.md`
| Claim | Source | Status |
|-------|--------|--------|
| Publish button not yet wired into editor | `DocumentEditor.vue` has a share button but no one-click publish implementation confirmed — article correctly documents this | ✅ |
| Free plan: limited posts, Pro: 100+ posts | ❌ No Free/Pro plans; no per-plan publishing limits in DB | ❌ |

**Fix:** Remove fabricated plan-based posting limits table.

---

#### `manage-client-review-approval.md`
| Claim | Source | Status |
|-------|--------|--------|
| Approve button in project toolbar | DB: Growth `project_approval = true`, Agency `project_approval = true` | ✅ |
| Creator plan: no approval | DB: Creator `project_approval = false` | ✅ |

---

#### `leave-respond-comments.md`
| Claim | Source | Status |
|-------|--------|--------|
| Comments panel in projects | DB: `project_comments` field | ✅ |
| Agency-only restriction | DB: Creator = false, Growth = false, Agency = true | ✅ |
| Article should explicitly state Agency-only | ⚠️ Verify the article makes this restriction clear | ⚠️ |

---

#### `internal-vs-client-views.md`
| Claim | Source | Status |
|-------|--------|--------|
| Brand Collaborator vs Client Collaborator roles | `invite-client-collaborators.md` source + DB `invites` collection | ✅ |

---

### Section 7 — Agency

#### `understand-agency-plan.md`
| Claim | Source | Status |
|-------|--------|--------|
| "Unlimited client brands in one workspace" | DB: Agency `brand_limit = 3` | ❌ |
| Checklist Templates | DB: Agency `checklist_templates_limit = 1` | ✅ |
| Task assignment, approval, comments | DB: Agency `task_assignment = 1`, `project_approval = true`, `project_comments = true` | ✅ |
| Brand Messaging Fingerprint | DB: Agency `brand_message_suggestions = true` | ✅ |

**Fix:** Change "unlimited client brands" to "up to 3 client brands per workspace."

---

#### `use-brande-for-agencies.md`
| Claim | Source | Status |
|-------|--------|--------|
| Agency use case — no specific UI steps | ✅ | ✅ |

---

#### `set-up-agency-workspace.md`
| Claim | Source | Status |
|-------|--------|--------|
| Checklist Templates scoped per-brand | DB `checklist_templates` has brand field | ✅ |
| Toggle Theme + Select Language in Settings | DB strings: `button.toggleTheme = "Toggle Theme"`, `app.tooltips.selectLanguage = "Select Language"` | ✅ |

---

#### `manage-multiple-brands.md`
| Claim | Source | Status |
|-------|--------|--------|
| Multi-brand management | DB: Agency `brand_limit = 3` | ✅ |
| If article claims unlimited brands | ❌ 3 brands max | ❌ (verify and fix) |

---

#### `invite-client-collaborators.md`
| Claim | Source | Status |
|-------|--------|--------|
| Brand Collaborator / Client Collaborator roles | Confirmed in frontend invite dialog | ✅ |
| Collaborator limits by plan | Verify article uses Creator/Growth/Agency names: 1/10/100 | ⚠️ Verify |

---

#### `client-approval-flows.md`
| Claim | Source | Status |
|-------|--------|--------|
| Approval workflow | DB: Growth and Agency `project_approval = true` | ✅ |

---

#### `custom-checklists-workflows.md`
| Claim | Source | Status |
|-------|--------|--------|
| Route `/account/checklist-templates` | `pages/account/checklist-templates/` directory exists | ✅ |
| Agency-only feature | DB: Creator/Growth `checklist_templates_limit = 0`; Agency = 1 | ✅ |
| "Premium Feature" gate shown | DB strings: `subscription.noAccess.title = "Premium Feature"` | ✅ |

---

#### `content-agent-client-accounts.md`
| Claim | Source | Status |
|-------|--------|--------|
| Per-brand recommendations | DB: `content_agent` is brand-scoped | ✅ |

---

#### `agency-dashboard.md`
| Claim | Source | Status |
|-------|--------|--------|
| Dashboard at `/dashboard` | `pages/dashboard.vue` | ✅ |
| Brand-specific data on switching | DB content_agent + projects are brand-scoped | ✅ |

---

#### `scale-without-losing-control.md`
| Claim | Source | Status |
|-------|--------|--------|
| Strategic article — no UI steps | ✅ | ✅ |

---

### Section 8 — Dashboard

#### `use-dashboard.md`
| Claim | Source | Status |
|-------|--------|--------|
| Dashboard sections: Content Calendar, Quick Links, Recent Projects, Recent Folders | DB strings: `dashboard.sections.*` | ✅ |
| Content Agent widget on dashboard | `pages/dashboard.vue`: `<ContentAgentRecommedations>` component | ✅ |
| Quick Action Buttons: New Project (Ctrl/Alt+N), New Brand Voice, New Reference Material, New Brand Asset | DB strings: `dashboard.actions.*` confirms all 4 exact labels | ✅ |

---

#### `manage-content-calendar.md`
| Claim | Source | Status |
|-------|--------|--------|
| Route `/content-calendar` | `pages/content-calendar.vue` | ✅ |
| Weekly, Monthly, Quarterly view modes | `content-calendar.vue` line 54: `const viewMode = ref<'weekly' \| 'monthly' \| 'quarterly'>('weekly')` | ✅ |
| View preference saved across sessions | `content-calendar.vue` line 70: `localStorage.getItem('content-calendar-view-mode')` | ✅ |
| Calendar settings: hide weekends, open/close hours, week start | DB strings: `contentCalendar.settings.*` confirms all three | ✅ |

---

#### `quick-actions-shortcuts.md`
| Claim | Source | Status |
|-------|--------|--------|
| Alt+N (Windows/Linux) / Ctrl+N (Mac) — New Project | `pages/index.vue` `onKeyStroke('n', ...)` with `e.altKey \|\| (isMac && e.ctrlKey)` | ✅ |
| Alt+Shift+P / Ctrl+Shift+P — Project Search | `pages/index.vue` `onKeyStroke('P', ...)` with `e.shiftKey && (e.altKey \|\| (isMac && e.ctrlKey))` | ✅ |
| Alt+S / Ctrl+S — Toggle Sidebar | `pages/index.vue` `onKeyStroke('s', ...)` with same modifier pattern | ✅ |
| Ctrl+Alt+A — Account | ❌ Not found in any frontend source file | ❌ |
| Ctrl+Alt+H — Home | ❌ Not found in any frontend source file | ❌ |
| Ctrl+Alt+C — Content Opportunities | ❌ Not found in any frontend source file | ❌ |

**Fix:** Remove Ctrl+Alt+A, Ctrl+Alt+H, Ctrl+Alt+C. Add Alt+S / Ctrl+S for sidebar toggle if not already documented.

---

#### `navigate-settings.md`
| Claim | Source | Status |
|-------|--------|--------|
| Account sidebar items | DB strings confirm: Brand Voice Analyzer, Recommendations, Brand Messaging Fingerprint, Brand Asset Vault, Reference Materials, Checklist Templates, Snippets, My Plan | ✅ |

---

### Section 9 — Account & Settings

#### `access-update-settings.md`
| Claim | Source | Status |
|-------|--------|--------|
| `/account` with General Info, Change Password, Settings sections | DB strings + `pages/account/index.vue` | ✅ |

---

#### `change-password.md`
| Claim | Source | Status |
|-------|--------|--------|
| Password reset at `/forgot-password` | `pages/forgot-password.vue` + DB strings | ✅ |
| Reset link validity: 24h, single-use | Directus default behavior — not overridden in `intellecto-services/.env`. Directus default is 1 hour. The "24h" claim is likely wrong. | ❌ |

**Fix:** Remove specific "24 hours" claim. Replace with "a time-limited link" or verify the actual Directus token TTL from `.env` (`PASSWORD_RESET_URL_ALLOW_LIST` etc.).

---

#### `theme-language-preferences.md`
| Claim | Source | Status |
|-------|--------|--------|
| Toggle Theme button | DB strings: `button.toggleTheme = "Toggle Theme"` | ✅ |
| Select Language dropdown | DB strings: `app.tooltips.selectLanguage = "Select Language"` | ✅ |
| English and Spanish are the only supported UI languages | ✅ Confirmed by product team — DB `languages` table has 8 entries but those serve content workflows, not the UI selector | ✅ |
| Ctrl+Alt+A to reach Account page | ❌ Not in frontend source — same issue as shortcuts article | ❌ |

---

#### `manage-user-preferences.md`
| Claim | Source | Status |
|-------|--------|--------|
| General Info, Change Password, Settings sections | DB strings + `pages/account/index.vue` | ✅ |
| User profile questions (department, role, UTM source) | DB strings: `userProfile.information.fields.*` — all three confirmed with exact option lists | ✅ |

---

#### `manage-notifications.md`
| Claim | Source | Status |
|-------|--------|--------|
| Route `/notifications` | Frontend route confirmed | ✅ |

---

### Section 10 — Help & Feedback

#### `use-help-center.md`, `submit-feedback.md`, `request-new-features.md`, `get-support.md`, `understand-product-updates.md`
| Claim | Source | Status |
|-------|--------|--------|
| `/support` and `/feedback` routes | Frontend routes + DB strings | ✅ |
| `get-support.md` references "Starter plan" | ❌ No Starter plan | ❌ |

---

### Section 11 — Troubleshooting

#### `account-login.md`
| Claim | Source | Status |
|-------|--------|--------|
| Login at `/login`, reset at `/forgot-password` | Frontend routes confirmed | ✅ |
| Account lockout: 5 attempts, 30 minutes | `intellecto-services/.env.template`: `RATE_LIMITER_ENABLED=false` — rate limiting is **disabled**. No login lockout implemented. | ❌ |

**Fix:** Remove the "5 attempts, 30 minutes" lockout claim. It is not implemented.

---

#### `brand-voice-analysis.md`
| Claim | Source | Status |
|-------|--------|--------|
| Route `/account/brand-voice` | `pages/account/brand-voice.vue` | ✅ |

---

#### `content-agent.md` (troubleshooting)
| Claim | Source | Status |
|-------|--------|--------|
| "Content Agent requires Pro plan or higher" | ❌ No Pro plan. Creator = 0; Growth/Agency = unlimited | ❌ |
| "Pro, Team, Agency plans" | ❌ No Pro or Team plans | ❌ |
| Not available during trial | ✅ `ContentAgentRecommedations.vue` line 38 returns early if `trialing` | ✅ |

**Fix:** "Content Agent requires Growth or Agency plan. Creator plan has no access. Feature is disabled during trial."

---

#### `content-generation.md` (troubleshooting)
| Claim | Source | Status |
|-------|--------|--------|
| Generic error troubleshooting | No incorrect claims | ✅ |

---

#### `file-uploads.md` (troubleshooting)
| Claim | Source | Status |
|-------|--------|--------|
| Route `/account/documents` | `pages/account/documents.vue` | ✅ |
| File size limit guidance | If it says 100MB for Brand Assets: ❌ It's 5MB (`documents.vue` line 33) | ❌ |

---

#### `premium-features.md` (troubleshooting)
| Claim | Source | Status |
|-------|--------|--------|
| "Pro plan includes core features" | ❌ No Pro plan | ❌ |
| "Team plan adds collaboration" | ❌ No Team plan | ❌ |
| "Agency includes white-label and API access" | DB: `api_keys` collection exists; "white-label" not confirmed in DB | ⚠️ |
| Team plan: 5 collaborators | ❌ No Team plan. Growth = 10, Agency = 100 | ❌ |
| Agency plan: Unlimited collaborators | ❌ DB: `brand_collaborator_limit = 100` — not unlimited | ❌ |

**Fix:** Full rewrite. Use Creator/Growth/Agency plan data from DB.

---

#### `publishing-integrations.md` (troubleshooting)
| Claim | Source | Status |
|-------|--------|--------|
| API keys exist | DB `api_keys` collection confirmed | ✅ |
| Zapier/Make integration | DB `webhook_subscriptions` collection confirmed | ✅ |

---

## Prioritized Fix List

### Priority 1 — Confirmed Wrong (fix immediately)

| Article | What's wrong | Correct value from source |
|---------|-------------|--------------------------|
| `content-agent-multiple-brands.md` | Plan names + limits | Creator=1, Growth=1, Agency=3 brands |
| `content-agent-multiple-channels.md` | Fabricated per-plan channel limits | No channel gating exists — remove table |
| `get-daily-recommendations.md` | Wrong plan names | Creator=0, Growth=unlimited, Agency=unlimited |
| `understand-agency-plan.md` | "Unlimited brands" | 3 brands max (DB `brand_limit=3`) |
| `use-content-improver.md` | Fabricated scoring/analysis interface | Template rewrites content; no score panel exists |
| `upload-brand-assets.md` | File size: 100MB | 5MB (`documents.vue` line 33: `5 * 1024 * 1024`) |
| `upload-brand-assets.md` | GIF as supported image | Not in `supportedImageExtensions` — remove GIF |
| `create-your-account.md` | Password: uppercase/lowercase/number required | Only 8 chars + zxcvbn strength check enforced |
| `complete-brand-profile.md` | "5 sections" with wrong names | 7 steps — names from DB `onboarding_steps` |
| `preview-files-images.md` | File preview modal exists | No such component found in frontend |
| `quick-actions-shortcuts.md` | Ctrl+Alt+A, Ctrl+Alt+H, Ctrl+Alt+C | Not in frontend source — remove |
| `theme-language-preferences.md` | Ctrl+Alt+A shortcut | Not in frontend source — remove |
| `troubleshooting/account-login.md` | "5 attempts, 30 min lockout" | `RATE_LIMITER_ENABLED=false` — not implemented |
| `troubleshooting/content-agent.md` | Wrong plan names | Creator/Growth/Agency only |
| `troubleshooting/premium-features.md` | Wrong plan names + limits | Full rewrite |
| `share-content-projects.md` | Wrong plan names + collaborator counts | Creator=1, Growth=10, Agency=100 |
| `publish-to-channels.md` | Wrong plan names, fabricated post limits | Remove limits table |
| `get-support.md` | "Starter plan" | Remove |
| `change-password.md` | "24h" reset link | Directus default is 1 hour; "24h" unverified |
| `include-images.md` / `customize-image-style.md` | Platform-specific image sizing | Not implemented — remove that claim |

### Priority 2 — Misleading (fix in same pass)

| Article | Issue | Action |
|---------|-------|--------|
| `create-facebook-threads.md` | "Facebook Threads" as an official platform format | Clarify this is Brande.ai template nomenclature for multi-part thread content |
| `leave-respond-comments.md` | May not state comments are Agency-only | Add Agency-only restriction |
| `manage-multiple-brands.md` | May claim unlimited brands | Change to "up to 3 brands" |
| `update-brand-materials.md` | File size if mentioned | 5MB, same as Brand Asset Vault |

---

## Confirmed Correct — Do Not Change

Verified from DB + frontend source — these are accurate:

- Content Agent widget label: "Content Agent: Your Strategic Content Recommendations for Today" (`constants/content-agent.ts`)
- Content Agent not available during trial (`ContentAgentRecommedations.vue`)
- Alt+N / Ctrl+N — New Project (`pages/index.vue`)
- Alt+Shift+P / Ctrl+Shift+P — Project Search (`pages/index.vue`)
- Alt+S / Ctrl+S — Toggle Sidebar (`pages/index.vue`) [add to shortcuts article if missing]
- All 5 template category names
- All sidebar labels (Brand Voice Analyzer, Brand Asset Vault, Reference Materials, Brand Messaging Fingerprint, Snippets, My Plan)
- Content Improver EXISTS as a template (Copywriting, all plans)
- Facebook Thread Post and Facebook Post EXIST
- LinkedIn Post and LinkedIn Post Commenter EXIST
- Website Copy Generator and Website SaaS Case Study EXIST
- DOCX export: `exportToDOCX()` in `DocumentEditor.vue`
- PDF export: `exportHtmlToPDF()` in `utils/exporter.ts`
- CSV export for tables: `initTableExportCSVTool()` in `DocumentEditor.vue`
- Calendar: weekly / monthly / quarterly views (`content-calendar.vue`)
- Reference Materials: files = 100MB, images = 10MB, media = 1GB (`ReferenceInput.vue`)
- Brand Asset Vault file size: 5MB (`documents.vue`)
- Password minimum: 8 characters (`signup.vue` Zod schema)
- Onboarding: 7 steps, channel selection is Step 5
- Creator: 0 recommendations, 0 snippets, 0 reference materials, 3 brand voices, 1 collaborator
- Growth: project approval yes, comments no, 10 collaborators, 1 brand
- Agency: approval yes, comments yes, brand messaging yes, 3 brands, 100 collaborators, 1 checklist template
- UI language selector: English and Spanish only
- No account lockout (rate limiter disabled in backend)
- Supported image formats for upload: `.jpg, .jpeg, .png, .webp` only (no GIF)
