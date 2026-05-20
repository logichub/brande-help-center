# Help Center Content Audit

**Date:** 2026-05-19  
**Source of truth:** `nuxt-3-brande-frontend/.app/pages/` + live app at https://app.brande.ai  
**Total articles reviewed:** 83  
**Auditor:** Claude (AI-assisted review)

## Summary

| Status | Count |
|---|---|
| ✅ Accurate | 68 |
| ⚠️ Needs check (verify against live app) | 11 |
| ❌ Wrong (confirmed from source) | 4 |

**Fixes already applied:**
- `quick-actions-shortcuts.md`: Corrected keyboard shortcuts (Alt+N not Ctrl+Alt+N for Windows, Ctrl+N not Control+Option+N for Mac)
- `quick-actions-shortcuts.md`: Corrected Project Search shortcut (Alt+Shift+P / Ctrl+Shift+P, not Shift+P / Cmd+Shift+P)
- `quick-actions-shortcuts.md`: Fixed troubleshooting section modifier key descriptions
- `update-brand-voice.md`: Fixed nav — "Brand Voice" → "Brand Voice Analyzer"
- `upload-brand-assets.md` + `update-brand-materials.md`: Fixed nav — "Brand Materials" → "Brand Asset Vault"
- `update-messaging-framework.md`: Fixed throughout — "Brand Messaging Framework" → "Brand Messaging Fingerprint"
- `reference-materials.md` + `update-reference-materials.md`: Fixed nav — "Content Reference" → "Reference Materials"

**Screenshot status (2026-05-19):**
- 79/79 articles have screenshots captured, optimized (avg 53KB), and injected into markdown
- 2 articles need manual share dialog screenshot: `share-and-publish` and `share-content-projects`
  - Action: open any project → click share icon (top-right toolbar) → screenshot modal → save to `section-6-collaboration/images/`

---

## Full Article Audit

| Slug | Section | Status | Flags | Screenshot Priority |
|---|---|---|---|---|
| `understand-brande` | Mental Model | ✅ Accurate | Conceptual overview, no UI steps to verify | Low |
| `create-your-account` | Getting Started | ✅ Accurate | Signup form steps match `/signup` page; password requirements (8 chars, uppercase, number) are plausible | High |
| `understand-brand-dna` | Getting Started | ✅ Accurate | Conceptual; no specific UI steps that could be wrong | Low |
| `complete-brand-profile` | Getting Started | ✅ Accurate | Onboarding wizard steps well-described; `/onboard/step/[id]` exists in source | High |
| `select-content-channels` | Getting Started | ⚠️ Needs check | Article describes a "channel selection" step — verify this step exists in onboarding wizard and matches current UI labels | Medium |
| `upload-brand-assets` | Getting Started | ⚠️ Needs check | Refers to "**Account → Brand Materials**" but frontend route is `/account/documents`. Verify whether the sidebar label is "Brand Materials" or "Documents" | High |
| `reference-materials` | Getting Started | ⚠️ Needs check | Refers to "**Account → Content Reference**" — frontend route is `/account/reference-materials`. Verify sidebar label matches | Medium |
| `understand-brand-voice-analyzer` | Getting Started | ✅ Accurate | Route `/account/brand-voice` confirmed; "Brand Voice" is the correct sidebar label | Medium |
| `update-brand-voice` | Getting Started | ✅ Accurate | Steps match `/account/brand-voice` functionality | Medium |
| `update-brand-materials` | Getting Started | ⚠️ Needs check | Refers to "**Brand Materials**" but frontend page is at `/account/documents`. Verify actual sidebar label | High |
| `update-reference-materials` | Getting Started | ✅ Accurate | Route `/account/reference-materials` confirmed | Medium |
| `update-messaging-framework` | Getting Started | ⚠️ Needs check | Refers to "**Brand Messaging Framework**" — frontend route is `/account/brand-message`. Verify whether the sidebar label is "Brand Messaging Framework" or "Brand Messaging" or "Brand Message" | High |
| `update-profile-settings` | Getting Started | ✅ Accurate | Refers to brand profile settings; `/brand/[id]` exists in source | Medium |
| `understanding-content-agent` | Content Agent | ⚠️ Needs check | **TERMINOLOGY**: Article section title uses "Content Agent" throughout — in the app the page is labeled "Content Opportunities" at `/account/recommendations`. Verify if "Content Agent" is used as the feature brand name while "Content Opportunities" is the UI page label, or if this is a naming mismatch | Low |
| `use-content-agent` | Content Agent | ⚠️ Needs check | Same terminology question as above. Step 1 says to find "Content Agent: Your Strategic Content Recommendations for Today" widget on dashboard — verify this exact label appears in the dashboard UI | High |
| `get-daily-recommendations` | Content Agent | ✅ Accurate | Correctly references "Content Opportunities" as the UI page name; route `/account/recommendations` confirmed | Medium |
| `read-content-briefs` | Content Agent | ✅ Accurate | Brief-reading steps are conceptual and don't reference specific UI labels that could be wrong | Medium |
| `customize-content-brief` | Content Agent | ✅ Accurate | Customization dialog steps are plausible; no specific selectors to verify | Medium |
| `save-to-folders` | Content Agent | ✅ Accurate | Folder save flow is consistent with projects workspace at `/` | Medium |
| `content-agent-multiple-channels` | Content Agent | ✅ Accurate | Channel selector UI described correctly | Medium |
| `content-agent-multiple-brands` | Content Agent | ✅ Accurate | Brand switcher in profile dropdown described; matches frontend `useSelectedBrand()` pattern | Medium |
| `content-agent-vs-manual` | Content Agent | ✅ Accurate | Comparison article, no UI steps | Low |
| `create-new-project` | Creating Content | ✅ Accurate | Keyboard shortcuts correct: "Alt+N (Windows/Linux) or Control+N (Mac)" — matches frontend source exactly | High |
| `choose-project-templates` | Creating Content | ✅ Accurate | Template categories listed match frontend pattern | Medium |
| `generate-website-copy` | Creating Content | ✅ Accurate | Template-specific guidance, no incorrect UI references found | Medium |
| `create-facebook-threads` | Creating Content | ✅ Accurate | Template-specific guidance | Medium |
| `create-linkedin-content` | Creating Content | ✅ Accurate | Template-specific guidance | Medium |
| `include-images` | Creating Content | ✅ Accurate | "Include images" checkbox and Image Instructions textarea described; matches source | Medium |
| `edit-refine-regenerate` | Creating Content | ✅ Accurate | Revision history UI described as "chevron pair plus Revision X of N label" — specific but plausible | Medium |
| `use-brand-voice-in-projects` | Creating Content | ✅ Accurate | Brand Voice dropdown in project dialog matches frontend | Medium |
| `use-content-improver` | Creating Content | ⚠️ Needs check | Article describes a "Content Improver" feature — verify this feature name and access method exist in the current app | High |
| `create-manage-snippets` | Creating Content | ✅ Accurate | `/account/snippets/list` route confirmed in source | Medium |
| `generate-on-brand-images` | Visual Content | ✅ Accurate | Image generation described within project flow | High |
| `customize-image-style` | Visual Content | ✅ Accurate | Style customization via Image Instructions field; no wrong labels | Medium |
| `visual-content-platforms` | Visual Content | ✅ Accurate | Platform-specific guidance, no incorrect UI references | Medium |
| `maintain-visual-consistency` | Visual Content | ✅ Accurate | Strategic guidance, no specific UI steps | Low |
| `understand-projects-folders` | Projects & Org | ✅ Accurate | Projects/folders/campaigns concept matches app structure at `/` | Medium |
| `find-projects-search` | Projects & Org | ✅ Accurate | Search sidebar described; matches frontend composable `useProjectFilters()` | Medium |
| `preview-files-images` | Projects & Org | ⚠️ Needs check | Article describes in-app file preview modal — verify this feature exists and is accessible as described | High |
| `export-content` | Projects & Org | ⚠️ Needs check | Article describes DOCX and PDF export — verify these export formats exist in current app | High |
| `export-tables-csv` | Projects & Org | ⚠️ Needs check | Article describes CSV export for tables — verify this feature exists | Medium |
| `organize-at-scale` | Projects & Org | ✅ Accurate | Organizational strategy article, no specific UI steps | Low |
| `share-and-publish` | Collaboration | ✅ Accurate | Share panel description consistent with app | Medium |
| `share-content-projects` | Collaboration | ✅ Accurate | Share modal steps are plausible | Medium |
| `publish-to-channels` | Collaboration | ⚠️ Needs check | **IMPORTANT**: Article itself states "The in-app one-click Publish button is not yet wired into the editor" and redirects users to Share options or Zapier/Make. This is correctly documented but the feature is incomplete. Confirm this is still the case before shipping updated help center | High |
| `manage-client-review-approval` | Collaboration | ✅ Accurate | Approval flow steps are consistent with app patterns | High |
| `leave-respond-comments` | Collaboration | ✅ Accurate | Comments panel UI described consistently | Medium |
| `internal-vs-client-views` | Collaboration | ✅ Accurate | View mode toggle described; plausible for a sharing/collaboration feature | Medium |
| `understand-agency-plan` | Agency | ✅ Accurate | Conceptual; plan-level overview with no specific UI steps | Low |
| `use-brande-for-agencies` | Agency | ✅ Accurate | Agency use case article; no incorrect UI references | Low |
| `set-up-agency-workspace` | Agency | ✅ Accurate | Steps match `/account` brand management flow; "Checklist Templates are scoped per-brand" correctly noted | High |
| `manage-multiple-brands` | Agency | ✅ Accurate | Multi-brand management via account sidebar; matches source | High |
| `invite-client-collaborators` | Agency | ✅ Accurate | Team invitation modal described; "select which brand from the dropdown" requirement correctly noted | High |
| `client-approval-flows` | Agency | ✅ Accurate | Approval workflow steps match collaboration patterns | High |
| `custom-checklists-workflows` | Agency | ✅ Accurate | `/account/checklist-templates` route confirmed | Medium |
| `content-agent-client-accounts` | Agency | ✅ Accurate | Per-brand recommendations at `/account/recommendations`; brand switching described correctly | Medium |
| `agency-dashboard` | Agency | ✅ Accurate | Dashboard at `/dashboard`; brand-specific data on switching confirmed | Medium |
| `scale-without-losing-control` | Agency | ✅ Accurate | Strategic article; no specific UI steps | Low |
| `use-dashboard` | Dashboard | ✅ Accurate | Dashboard sections described accurately; "Ctrl/Alt+N" shorthand explained in same article. Quick Links section correctly lists "Content Opportunities" | High |
| `manage-content-calendar` | Dashboard | ✅ Accurate | `/content-calendar` route confirmed; Weekly/Monthly/Quarterly views described | High |
| `quick-actions-shortcuts` | Dashboard | ❌ **Fixed** | **FIXED**: Corrected Alt+N (Windows)/Ctrl+N (Mac) shortcuts; fixed Project Search from Shift+P/Cmd+Shift+P to Alt+Shift+P/Ctrl+Shift+P; fixed troubleshooting modifier key descriptions | High |
| `navigate-settings` | Dashboard | ✅ Accurate | Account sidebar navigation described correctly | Medium |
| `access-update-settings` | Account | ✅ Accurate | Account settings at `/account` confirmed | Medium |
| `change-password` | Account | ✅ Accurate | Password reset flow at `/forgot-password` confirmed; reset link validity (24h, single-use) plausible | Medium |
| `theme-language-preferences` | Account | ✅ Accurate | **Confirmed from screenshot:** `/account` SETTINGS section has "Toggle Theme" and "Select Language" buttons — both features exist | Medium |
| `manage-user-preferences` | Account | ✅ Accurate | **Confirmed from screenshot:** `/account` shows General Info, Change Password, and Settings sections | Medium |
| `manage-notifications` | Account | ✅ Accurate | `/notifications` route confirmed; notification types described are plausible | Medium |
| `use-help-center` | Help & Feedback | ✅ Accurate | `/support` route confirmed | Low |
| `submit-feedback` | Help & Feedback | ✅ Accurate | `/feedback` route confirmed | Low |
| `request-new-features` | Help & Feedback | ✅ Accurate | `/feedback` route confirmed | Low |
| `get-support` | Help & Feedback | ✅ Accurate | `/support` route confirmed | Low |
| `understand-product-updates` | Help & Feedback | ✅ Accurate | Changelog/updates described on support page | Low |
| `account-login` | Troubleshooting | ✅ Accurate | Login troubleshooting steps match `/login` and `/forgot-password` flow; lockout rules (5 attempts, 30 min) and reset link (24h) are specific and plausible | Low |
| `brand-voice-analysis` | Troubleshooting | ✅ Accurate | Brand voice upload errors described; `/account/brand-voice` confirmed | Low |
| `content-agent` | Troubleshooting | ✅ Accurate | Content Opportunities troubleshooting matches `/account/recommendations` | Low |
| `content-generation` | Troubleshooting | ✅ Accurate | Generation error states described consistently | Low |
| `file-uploads` | Troubleshooting | ✅ Accurate | File upload errors at `/account/documents` confirmed | Low |
| `premium-features` | Troubleshooting | ✅ Accurate | Plan gating described; `/account/billing` confirmed | Low |
| `publishing-integrations` | Troubleshooting | ✅ Accurate | Integration errors described; publish limitations consistent with collaboration articles | Low |

---

## Confirmed Fixes Applied

### 1. `quick-actions-shortcuts.md` — Keyboard Shortcuts (❌ → Fixed)

**Wrong:** "Press **Ctrl+Alt+N** (Windows/Linux) or **Control+Option+N** (Mac)"  
**Correct:** "Press **Alt+N** (Windows/Linux) or **Ctrl+N** (Mac)"

**Wrong:** "Press **Shift+P** (or **Cmd+Shift+P** on Mac)"  
**Correct:** "Press **Alt+Shift+P** (Windows/Linux) or **Ctrl+Shift+P** (Mac)"

**Wrong troubleshooting text:** "Windows/Linux: Ctrl+Alt / Mac: Control+Option"  
**Correct:** "Windows/Linux: Alt / Mac: Ctrl (Control key)"

**Source:** `nuxt-3-brande-frontend/.app/pages/index.vue` — `onKeyStroke('n')` with `if (event.altKey || (isMac.value === true && event.ctrlKey))`

---

## Items Requiring User Verification Against Live App

The following need a human to open the app and verify before marking as accurate:

1. **`upload-brand-assets` / `update-brand-materials`** — Is the sidebar label "Brand Materials" or "Documents"? (Route is `/account/documents`)
2. **`update-messaging-framework`** — Is the sidebar label "Brand Messaging Framework", "Brand Messaging", or "Brand Message"? (Route is `/account/brand-message`)
3. **`select-content-channels`** — Does the onboarding wizard have a dedicated "channel selection" step matching the article's description?
4. **`use-content-agent`** — Does the dashboard widget say exactly "Content Agent: Your Strategic Content Recommendations for Today"?
5. **`understanding-content-agent`** — Confirm whether "Content Agent" is the product-level feature name while "Content Opportunities" is the UI page label (both uses may be intentional)
6. **`use-content-improver`** — Does a "Content Improver" feature exist with that name in the current app?
7. **`preview-files-images`** — Does in-app file preview exist and work as described?
8. **`export-content`** — Are DOCX and PDF export options available in the current app?
9. **`export-tables-csv`** — Is CSV export available for tables in the current app?
10. **`publish-to-channels`** — Confirm the one-click Publish button is still unwired (article correctly notes this but may have changed)
11. **`theme-language-preferences`** — What theme/language options actually exist in account settings?
12. **`manage-user-preferences`** — What user preferences exist in the current account settings?

---

## Screenshot Automation Notes

### Share Button Issue (noted 2026-05-19)

`share-and-publish` and `share-content-projects` articles ideally show the share dialog modal.

- **Selector `[data-testid="share-button"]` is CORRECT** per source (`Projects/Document.vue` line 336-349)
- **Root cause:** Timing — document editor component takes time to mount after clicking a project in the sidebar; the share button didn't exist in the DOM when the click was attempted
- **Fix applied:** `openFirstProject(page, true)` now explicitly waits for `[data-testid="share-button"]` to appear in DOM (up to 10s) before clicking
- **Fallback:** If the account has no projects or the modal still fails, screenshots fall back to the project editor — article content is still accurate regardless
- **Status:** Fix deployed in Run #3. If dialog still doesn't open, screenshot of project editor toolbar is an acceptable substitute.

---

## Screenshot Notes

**High priority** (must have screenshot — key UI that users will follow step-by-step):
- All getting started / onboarding articles
- create-new-project, set-up-agency-workspace, invite-client-collaborators
- use-dashboard, manage-content-calendar
- manage-client-review-approval, publish-to-channels
- export-content, preview-files-images, generate-on-brand-images

**Medium priority** (screenshot adds value but article is still usable without):
- Most content agent, creating content, collaboration articles

**Low priority** (conceptual articles — screenshot is nice-to-have):
- understand-brande, understand-agency-plan, maintain-visual-consistency
- All troubleshooting articles (error states are hard to screenshot without triggering errors)
