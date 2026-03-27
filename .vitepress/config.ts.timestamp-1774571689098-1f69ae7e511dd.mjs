// .vitepress/config.ts
import { defineConfig } from "file:///sessions/compassionate-intelligent-mayer/mnt/brande/docs/help-center/node_modules/vitepress/dist/node/index.js";
var config_default = defineConfig({
  title: "Brande.ai Help Center",
  description: "Your guide to using Brande.ai \u2014 the brand-aware content operating system.",
  // Set base to '/' for subdomain (help.brande.ai)
  // Set base to '/help-center/' for subdirectory (brande.ai/help-center/)
  base: "/",
  // Clean URLs: /section-1-getting-started/complete-brand-profile instead of .html
  cleanUrls: true,
  // Ignore README.md files (not meant for publishing)
  srcExclude: ["**/README.md"],
  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }]
  ],
  themeConfig: {
    logo: "/logo.svg",
    siteTitle: "Brande.ai Help",
    nav: [
      { text: "Home", link: "/" },
      { text: "Getting Started", link: "/section-1-getting-started/understand-brand-dna" },
      { text: "Troubleshooting", link: "/troubleshooting/" },
      { text: "Brande.ai", link: "https://brande.ai" }
    ],
    sidebar: [
      {
        text: "Understanding Brande.ai",
        items: [
          { text: "What is Brande.ai?", link: "/section-0-mental-model/understand-brande" }
        ]
      },
      {
        text: "Getting Started",
        collapsed: false,
        items: [
          { text: "Understand Brand DNA", link: "/section-1-getting-started/understand-brand-dna" },
          { text: "Complete Your Brand Profile", link: "/section-1-getting-started/complete-brand-profile" },
          { text: "Select Content Channels", link: "/section-1-getting-started/select-content-channels" },
          { text: "Upload Brand Assets", link: "/section-1-getting-started/upload-brand-assets" },
          { text: "Use Reference Materials", link: "/section-1-getting-started/reference-materials" },
          { text: "Brand Voice Analyzer", link: "/section-1-getting-started/understand-brand-voice-analyzer" },
          { text: "Update Brand Voice", link: "/section-1-getting-started/update-brand-voice" },
          { text: "Update Brand Materials", link: "/section-1-getting-started/update-brand-materials" },
          { text: "Update Reference Materials", link: "/section-1-getting-started/update-reference-materials" },
          { text: "Update Messaging Framework", link: "/section-1-getting-started/update-messaging-framework" },
          { text: "Update Profile Settings", link: "/section-1-getting-started/update-profile-settings" }
        ]
      },
      {
        text: "Content Agent",
        collapsed: true,
        items: [
          { text: "Understanding Content Agent", link: "/section-2-content-agent/understanding-content-agent" },
          { text: "Use Content Agent", link: "/section-2-content-agent/use-content-agent" },
          { text: "Get Daily Recommendations", link: "/section-2-content-agent/get-daily-recommendations" },
          { text: "Read Content Briefs", link: "/section-2-content-agent/read-content-briefs" },
          { text: "Customize a Content Brief", link: "/section-2-content-agent/customize-content-brief" },
          { text: "Save to Folders", link: "/section-2-content-agent/save-to-folders" },
          { text: "Multiple Channels", link: "/section-2-content-agent/content-agent-multiple-channels" },
          { text: "Multiple Brands", link: "/section-2-content-agent/content-agent-multiple-brands" },
          { text: "Agent vs Manual Creation", link: "/section-2-content-agent/content-agent-vs-manual" }
        ]
      },
      {
        text: "Creating Content",
        collapsed: true,
        items: [
          { text: "Create a New Project", link: "/section-3-creating-content/create-new-project" },
          { text: "Choose Project Templates", link: "/section-3-creating-content/choose-project-templates" },
          { text: "Generate Website Copy", link: "/section-3-creating-content/generate-website-copy" },
          { text: "Create Facebook Threads", link: "/section-3-creating-content/create-facebook-threads" },
          { text: "Create LinkedIn Content", link: "/section-3-creating-content/create-linkedin-content" },
          { text: "Include Images", link: "/section-3-creating-content/include-images" },
          { text: "Edit, Refine & Regenerate", link: "/section-3-creating-content/edit-refine-regenerate" },
          { text: "Use Brand Voice in Projects", link: "/section-3-creating-content/use-brand-voice-in-projects" },
          { text: "Use Content Improver", link: "/section-3-creating-content/use-content-improver" },
          { text: "Create & Manage Snippets", link: "/section-3-creating-content/create-manage-snippets" }
        ]
      },
      {
        text: "Visual Content",
        collapsed: true,
        items: [
          { text: "Generate On-Brand Images", link: "/section-4-visual-content/generate-on-brand-images" },
          { text: "Customize Image Style", link: "/section-4-visual-content/customize-image-style" },
          { text: "Visuals for Different Platforms", link: "/section-4-visual-content/visual-content-platforms" },
          { text: "Maintain Visual Consistency", link: "/section-4-visual-content/maintain-visual-consistency" }
        ]
      },
      {
        text: "Projects & Organization",
        collapsed: true,
        items: [
          { text: "Projects, Folders & Campaigns", link: "/section-5-projects-organization/understand-projects-folders" },
          { text: "Find Projects via Search", link: "/section-5-projects-organization/find-projects-search" },
          { text: "Preview Files & Images", link: "/section-5-projects-organization/preview-files-images" },
          { text: "Export to DOCX or PDF", link: "/section-5-projects-organization/export-content" },
          { text: "Export Tables to CSV", link: "/section-5-projects-organization/export-tables-csv" },
          { text: "Organize at Scale", link: "/section-5-projects-organization/organize-at-scale" }
        ]
      },
      {
        text: "Collaboration & Sharing",
        collapsed: true,
        items: [
          { text: "Share and Publish", link: "/section-6-collaboration/share-and-publish" },
          { text: "Share Content Projects", link: "/section-6-collaboration/share-content-projects" },
          { text: "Publish to Channels", link: "/section-6-collaboration/publish-to-channels" },
          { text: "Client Review & Approval", link: "/section-6-collaboration/manage-client-review-approval" },
          { text: "Leave & Respond to Comments", link: "/section-6-collaboration/leave-respond-comments" },
          { text: "Internal vs Client Views", link: "/section-6-collaboration/internal-vs-client-views" }
        ]
      },
      {
        text: "Agency Plan",
        collapsed: true,
        items: [
          { text: "Understand the Agency Plan", link: "/section-7-agency/understand-agency-plan" },
          { text: "Brande.ai for Agencies", link: "/section-7-agency/use-brande-for-agencies" },
          { text: "Set Up Agency Workspace", link: "/section-7-agency/set-up-agency-workspace" },
          { text: "Manage Multiple Brands", link: "/section-7-agency/manage-multiple-brands" },
          { text: "Invite Client Collaborators", link: "/section-7-agency/invite-client-collaborators" },
          { text: "Client Approval Flows", link: "/section-7-agency/client-approval-flows" },
          { text: "Custom Checklists & Workflows", link: "/section-7-agency/custom-checklists-workflows" },
          { text: "Content Agent for Clients", link: "/section-7-agency/content-agent-client-accounts" },
          { text: "Agency Dashboard", link: "/section-7-agency/agency-dashboard" },
          { text: "Scale Without Losing Control", link: "/section-7-agency/scale-without-losing-control" }
        ]
      },
      {
        text: "Dashboard & Navigation",
        collapsed: true,
        items: [
          { text: "Use the Dashboard", link: "/section-8-dashboard/use-dashboard" },
          { text: "Content Calendar", link: "/section-8-dashboard/manage-content-calendar" },
          { text: "Quick Actions & Shortcuts", link: "/section-8-dashboard/quick-actions-shortcuts" },
          { text: "Navigate Settings", link: "/section-8-dashboard/navigate-settings" }
        ]
      },
      {
        text: "Account & Settings",
        collapsed: true,
        items: [
          { text: "Access & Update Settings", link: "/section-9-account/access-update-settings" },
          { text: "Change Your Password", link: "/section-9-account/change-password" },
          { text: "Theme & Language", link: "/section-9-account/theme-language-preferences" },
          { text: "User Preferences", link: "/section-9-account/manage-user-preferences" },
          { text: "Manage Notifications", link: "/section-9-account/manage-notifications" }
        ]
      },
      {
        text: "Help & Feedback",
        collapsed: true,
        items: [
          { text: "Use the Help Center", link: "/section-10-help/use-help-center" },
          { text: "Submit Feedback", link: "/section-10-help/submit-feedback" },
          { text: "Request New Features", link: "/section-10-help/request-new-features" },
          { text: "Get Support", link: "/section-10-help/get-support" },
          { text: "Product Updates", link: "/section-10-help/understand-product-updates" }
        ]
      },
      {
        text: "Troubleshooting",
        collapsed: true,
        items: [
          { text: "Overview", link: "/troubleshooting/" },
          { text: "Account & Login", link: "/troubleshooting/account-login" },
          { text: "Brand Voice Analysis", link: "/troubleshooting/brand-voice-analysis" },
          { text: "Content Agent", link: "/troubleshooting/content-agent" },
          { text: "Content Generation", link: "/troubleshooting/content-generation" },
          { text: "File Uploads", link: "/troubleshooting/file-uploads" },
          { text: "Premium Features", link: "/troubleshooting/premium-features" },
          { text: "Publishing & Integrations", link: "/troubleshooting/publishing-integrations" }
        ]
      }
    ],
    search: {
      provider: "local"
    },
    editLink: {
      pattern: "https://github.com/brande-ai/brande/edit/main/docs/help-center/:path",
      text: "Edit this page on GitHub"
    },
    footer: {
      message: "Brande.ai Help Center",
      copyright: "\xA9 2026 Brande.ai. All rights reserved."
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/brande-ai" }
    ]
  }
});
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLnZpdGVwcmVzcy9jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvc2Vzc2lvbnMvY29tcGFzc2lvbmF0ZS1pbnRlbGxpZ2VudC1tYXllci9tbnQvYnJhbmRlL2RvY3MvaGVscC1jZW50ZXIvLnZpdGVwcmVzc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL3Nlc3Npb25zL2NvbXBhc3Npb25hdGUtaW50ZWxsaWdlbnQtbWF5ZXIvbW50L2JyYW5kZS9kb2NzL2hlbHAtY2VudGVyLy52aXRlcHJlc3MvY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9zZXNzaW9ucy9jb21wYXNzaW9uYXRlLWludGVsbGlnZW50LW1heWVyL21udC9icmFuZGUvZG9jcy9oZWxwLWNlbnRlci8udml0ZXByZXNzL2NvbmZpZy50c1wiO2ltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGVwcmVzcydcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgdGl0bGU6ICdCcmFuZGUuYWkgSGVscCBDZW50ZXInLFxuICBkZXNjcmlwdGlvbjogJ1lvdXIgZ3VpZGUgdG8gdXNpbmcgQnJhbmRlLmFpIFx1MjAxNCB0aGUgYnJhbmQtYXdhcmUgY29udGVudCBvcGVyYXRpbmcgc3lzdGVtLicsXG5cbiAgLy8gU2V0IGJhc2UgdG8gJy8nIGZvciBzdWJkb21haW4gKGhlbHAuYnJhbmRlLmFpKVxuICAvLyBTZXQgYmFzZSB0byAnL2hlbHAtY2VudGVyLycgZm9yIHN1YmRpcmVjdG9yeSAoYnJhbmRlLmFpL2hlbHAtY2VudGVyLylcbiAgYmFzZTogJy8nLFxuXG4gIC8vIENsZWFuIFVSTHM6IC9zZWN0aW9uLTEtZ2V0dGluZy1zdGFydGVkL2NvbXBsZXRlLWJyYW5kLXByb2ZpbGUgaW5zdGVhZCBvZiAuaHRtbFxuICBjbGVhblVybHM6IHRydWUsXG5cbiAgLy8gSWdub3JlIFJFQURNRS5tZCBmaWxlcyAobm90IG1lYW50IGZvciBwdWJsaXNoaW5nKVxuICBzcmNFeGNsdWRlOiBbJyoqL1JFQURNRS5tZCddLFxuXG4gIGhlYWQ6IFtcbiAgICBbJ2xpbmsnLCB7IHJlbDogJ2ljb24nLCBocmVmOiAnL2Zhdmljb24uaWNvJyB9XSxcbiAgXSxcblxuICB0aGVtZUNvbmZpZzoge1xuICAgIGxvZ286ICcvbG9nby5zdmcnLFxuICAgIHNpdGVUaXRsZTogJ0JyYW5kZS5haSBIZWxwJyxcblxuICAgIG5hdjogW1xuICAgICAgeyB0ZXh0OiAnSG9tZScsIGxpbms6ICcvJyB9LFxuICAgICAgeyB0ZXh0OiAnR2V0dGluZyBTdGFydGVkJywgbGluazogJy9zZWN0aW9uLTEtZ2V0dGluZy1zdGFydGVkL3VuZGVyc3RhbmQtYnJhbmQtZG5hJyB9LFxuICAgICAgeyB0ZXh0OiAnVHJvdWJsZXNob290aW5nJywgbGluazogJy90cm91Ymxlc2hvb3RpbmcvJyB9LFxuICAgICAgeyB0ZXh0OiAnQnJhbmRlLmFpJywgbGluazogJ2h0dHBzOi8vYnJhbmRlLmFpJyB9LFxuICAgIF0sXG5cbiAgICBzaWRlYmFyOiBbXG4gICAgICB7XG4gICAgICAgIHRleHQ6ICdVbmRlcnN0YW5kaW5nIEJyYW5kZS5haScsXG4gICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgeyB0ZXh0OiAnV2hhdCBpcyBCcmFuZGUuYWk/JywgbGluazogJy9zZWN0aW9uLTAtbWVudGFsLW1vZGVsL3VuZGVyc3RhbmQtYnJhbmRlJyB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGV4dDogJ0dldHRpbmcgU3RhcnRlZCcsXG4gICAgICAgIGNvbGxhcHNlZDogZmFsc2UsXG4gICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgeyB0ZXh0OiAnVW5kZXJzdGFuZCBCcmFuZCBETkEnLCBsaW5rOiAnL3NlY3Rpb24tMS1nZXR0aW5nLXN0YXJ0ZWQvdW5kZXJzdGFuZC1icmFuZC1kbmEnIH0sXG4gICAgICAgICAgeyB0ZXh0OiAnQ29tcGxldGUgWW91ciBCcmFuZCBQcm9maWxlJywgbGluazogJy9zZWN0aW9uLTEtZ2V0dGluZy1zdGFydGVkL2NvbXBsZXRlLWJyYW5kLXByb2ZpbGUnIH0sXG4gICAgICAgICAgeyB0ZXh0OiAnU2VsZWN0IENvbnRlbnQgQ2hhbm5lbHMnLCBsaW5rOiAnL3NlY3Rpb24tMS1nZXR0aW5nLXN0YXJ0ZWQvc2VsZWN0LWNvbnRlbnQtY2hhbm5lbHMnIH0sXG4gICAgICAgICAgeyB0ZXh0OiAnVXBsb2FkIEJyYW5kIEFzc2V0cycsIGxpbms6ICcvc2VjdGlvbi0xLWdldHRpbmctc3RhcnRlZC91cGxvYWQtYnJhbmQtYXNzZXRzJyB9LFxuICAgICAgICAgIHsgdGV4dDogJ1VzZSBSZWZlcmVuY2UgTWF0ZXJpYWxzJywgbGluazogJy9zZWN0aW9uLTEtZ2V0dGluZy1zdGFydGVkL3JlZmVyZW5jZS1tYXRlcmlhbHMnIH0sXG4gICAgICAgICAgeyB0ZXh0OiAnQnJhbmQgVm9pY2UgQW5hbHl6ZXInLCBsaW5rOiAnL3NlY3Rpb24tMS1nZXR0aW5nLXN0YXJ0ZWQvdW5kZXJzdGFuZC1icmFuZC12b2ljZS1hbmFseXplcicgfSxcbiAgICAgICAgICB7IHRleHQ6ICdVcGRhdGUgQnJhbmQgVm9pY2UnLCBsaW5rOiAnL3NlY3Rpb24tMS1nZXR0aW5nLXN0YXJ0ZWQvdXBkYXRlLWJyYW5kLXZvaWNlJyB9LFxuICAgICAgICAgIHsgdGV4dDogJ1VwZGF0ZSBCcmFuZCBNYXRlcmlhbHMnLCBsaW5rOiAnL3NlY3Rpb24tMS1nZXR0aW5nLXN0YXJ0ZWQvdXBkYXRlLWJyYW5kLW1hdGVyaWFscycgfSxcbiAgICAgICAgICB7IHRleHQ6ICdVcGRhdGUgUmVmZXJlbmNlIE1hdGVyaWFscycsIGxpbms6ICcvc2VjdGlvbi0xLWdldHRpbmctc3RhcnRlZC91cGRhdGUtcmVmZXJlbmNlLW1hdGVyaWFscycgfSxcbiAgICAgICAgICB7IHRleHQ6ICdVcGRhdGUgTWVzc2FnaW5nIEZyYW1ld29yaycsIGxpbms6ICcvc2VjdGlvbi0xLWdldHRpbmctc3RhcnRlZC91cGRhdGUtbWVzc2FnaW5nLWZyYW1ld29yaycgfSxcbiAgICAgICAgICB7IHRleHQ6ICdVcGRhdGUgUHJvZmlsZSBTZXR0aW5ncycsIGxpbms6ICcvc2VjdGlvbi0xLWdldHRpbmctc3RhcnRlZC91cGRhdGUtcHJvZmlsZS1zZXR0aW5ncycgfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRleHQ6ICdDb250ZW50IEFnZW50JyxcbiAgICAgICAgY29sbGFwc2VkOiB0cnVlLFxuICAgICAgICBpdGVtczogW1xuICAgICAgICAgIHsgdGV4dDogJ1VuZGVyc3RhbmRpbmcgQ29udGVudCBBZ2VudCcsIGxpbms6ICcvc2VjdGlvbi0yLWNvbnRlbnQtYWdlbnQvdW5kZXJzdGFuZGluZy1jb250ZW50LWFnZW50JyB9LFxuICAgICAgICAgIHsgdGV4dDogJ1VzZSBDb250ZW50IEFnZW50JywgbGluazogJy9zZWN0aW9uLTItY29udGVudC1hZ2VudC91c2UtY29udGVudC1hZ2VudCcgfSxcbiAgICAgICAgICB7IHRleHQ6ICdHZXQgRGFpbHkgUmVjb21tZW5kYXRpb25zJywgbGluazogJy9zZWN0aW9uLTItY29udGVudC1hZ2VudC9nZXQtZGFpbHktcmVjb21tZW5kYXRpb25zJyB9LFxuICAgICAgICAgIHsgdGV4dDogJ1JlYWQgQ29udGVudCBCcmllZnMnLCBsaW5rOiAnL3NlY3Rpb24tMi1jb250ZW50LWFnZW50L3JlYWQtY29udGVudC1icmllZnMnIH0sXG4gICAgICAgICAgeyB0ZXh0OiAnQ3VzdG9taXplIGEgQ29udGVudCBCcmllZicsIGxpbms6ICcvc2VjdGlvbi0yLWNvbnRlbnQtYWdlbnQvY3VzdG9taXplLWNvbnRlbnQtYnJpZWYnIH0sXG4gICAgICAgICAgeyB0ZXh0OiAnU2F2ZSB0byBGb2xkZXJzJywgbGluazogJy9zZWN0aW9uLTItY29udGVudC1hZ2VudC9zYXZlLXRvLWZvbGRlcnMnIH0sXG4gICAgICAgICAgeyB0ZXh0OiAnTXVsdGlwbGUgQ2hhbm5lbHMnLCBsaW5rOiAnL3NlY3Rpb24tMi1jb250ZW50LWFnZW50L2NvbnRlbnQtYWdlbnQtbXVsdGlwbGUtY2hhbm5lbHMnIH0sXG4gICAgICAgICAgeyB0ZXh0OiAnTXVsdGlwbGUgQnJhbmRzJywgbGluazogJy9zZWN0aW9uLTItY29udGVudC1hZ2VudC9jb250ZW50LWFnZW50LW11bHRpcGxlLWJyYW5kcycgfSxcbiAgICAgICAgICB7IHRleHQ6ICdBZ2VudCB2cyBNYW51YWwgQ3JlYXRpb24nLCBsaW5rOiAnL3NlY3Rpb24tMi1jb250ZW50LWFnZW50L2NvbnRlbnQtYWdlbnQtdnMtbWFudWFsJyB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGV4dDogJ0NyZWF0aW5nIENvbnRlbnQnLFxuICAgICAgICBjb2xsYXBzZWQ6IHRydWUsXG4gICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgeyB0ZXh0OiAnQ3JlYXRlIGEgTmV3IFByb2plY3QnLCBsaW5rOiAnL3NlY3Rpb24tMy1jcmVhdGluZy1jb250ZW50L2NyZWF0ZS1uZXctcHJvamVjdCcgfSxcbiAgICAgICAgICB7IHRleHQ6ICdDaG9vc2UgUHJvamVjdCBUZW1wbGF0ZXMnLCBsaW5rOiAnL3NlY3Rpb24tMy1jcmVhdGluZy1jb250ZW50L2Nob29zZS1wcm9qZWN0LXRlbXBsYXRlcycgfSxcbiAgICAgICAgICB7IHRleHQ6ICdHZW5lcmF0ZSBXZWJzaXRlIENvcHknLCBsaW5rOiAnL3NlY3Rpb24tMy1jcmVhdGluZy1jb250ZW50L2dlbmVyYXRlLXdlYnNpdGUtY29weScgfSxcbiAgICAgICAgICB7IHRleHQ6ICdDcmVhdGUgRmFjZWJvb2sgVGhyZWFkcycsIGxpbms6ICcvc2VjdGlvbi0zLWNyZWF0aW5nLWNvbnRlbnQvY3JlYXRlLWZhY2Vib29rLXRocmVhZHMnIH0sXG4gICAgICAgICAgeyB0ZXh0OiAnQ3JlYXRlIExpbmtlZEluIENvbnRlbnQnLCBsaW5rOiAnL3NlY3Rpb24tMy1jcmVhdGluZy1jb250ZW50L2NyZWF0ZS1saW5rZWRpbi1jb250ZW50JyB9LFxuICAgICAgICAgIHsgdGV4dDogJ0luY2x1ZGUgSW1hZ2VzJywgbGluazogJy9zZWN0aW9uLTMtY3JlYXRpbmctY29udGVudC9pbmNsdWRlLWltYWdlcycgfSxcbiAgICAgICAgICB7IHRleHQ6ICdFZGl0LCBSZWZpbmUgJiBSZWdlbmVyYXRlJywgbGluazogJy9zZWN0aW9uLTMtY3JlYXRpbmctY29udGVudC9lZGl0LXJlZmluZS1yZWdlbmVyYXRlJyB9LFxuICAgICAgICAgIHsgdGV4dDogJ1VzZSBCcmFuZCBWb2ljZSBpbiBQcm9qZWN0cycsIGxpbms6ICcvc2VjdGlvbi0zLWNyZWF0aW5nLWNvbnRlbnQvdXNlLWJyYW5kLXZvaWNlLWluLXByb2plY3RzJyB9LFxuICAgICAgICAgIHsgdGV4dDogJ1VzZSBDb250ZW50IEltcHJvdmVyJywgbGluazogJy9zZWN0aW9uLTMtY3JlYXRpbmctY29udGVudC91c2UtY29udGVudC1pbXByb3ZlcicgfSxcbiAgICAgICAgICB7IHRleHQ6ICdDcmVhdGUgJiBNYW5hZ2UgU25pcHBldHMnLCBsaW5rOiAnL3NlY3Rpb24tMy1jcmVhdGluZy1jb250ZW50L2NyZWF0ZS1tYW5hZ2Utc25pcHBldHMnIH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0ZXh0OiAnVmlzdWFsIENvbnRlbnQnLFxuICAgICAgICBjb2xsYXBzZWQ6IHRydWUsXG4gICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgeyB0ZXh0OiAnR2VuZXJhdGUgT24tQnJhbmQgSW1hZ2VzJywgbGluazogJy9zZWN0aW9uLTQtdmlzdWFsLWNvbnRlbnQvZ2VuZXJhdGUtb24tYnJhbmQtaW1hZ2VzJyB9LFxuICAgICAgICAgIHsgdGV4dDogJ0N1c3RvbWl6ZSBJbWFnZSBTdHlsZScsIGxpbms6ICcvc2VjdGlvbi00LXZpc3VhbC1jb250ZW50L2N1c3RvbWl6ZS1pbWFnZS1zdHlsZScgfSxcbiAgICAgICAgICB7IHRleHQ6ICdWaXN1YWxzIGZvciBEaWZmZXJlbnQgUGxhdGZvcm1zJywgbGluazogJy9zZWN0aW9uLTQtdmlzdWFsLWNvbnRlbnQvdmlzdWFsLWNvbnRlbnQtcGxhdGZvcm1zJyB9LFxuICAgICAgICAgIHsgdGV4dDogJ01haW50YWluIFZpc3VhbCBDb25zaXN0ZW5jeScsIGxpbms6ICcvc2VjdGlvbi00LXZpc3VhbC1jb250ZW50L21haW50YWluLXZpc3VhbC1jb25zaXN0ZW5jeScgfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRleHQ6ICdQcm9qZWN0cyAmIE9yZ2FuaXphdGlvbicsXG4gICAgICAgIGNvbGxhcHNlZDogdHJ1ZSxcbiAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICB7IHRleHQ6ICdQcm9qZWN0cywgRm9sZGVycyAmIENhbXBhaWducycsIGxpbms6ICcvc2VjdGlvbi01LXByb2plY3RzLW9yZ2FuaXphdGlvbi91bmRlcnN0YW5kLXByb2plY3RzLWZvbGRlcnMnIH0sXG4gICAgICAgICAgeyB0ZXh0OiAnRmluZCBQcm9qZWN0cyB2aWEgU2VhcmNoJywgbGluazogJy9zZWN0aW9uLTUtcHJvamVjdHMtb3JnYW5pemF0aW9uL2ZpbmQtcHJvamVjdHMtc2VhcmNoJyB9LFxuICAgICAgICAgIHsgdGV4dDogJ1ByZXZpZXcgRmlsZXMgJiBJbWFnZXMnLCBsaW5rOiAnL3NlY3Rpb24tNS1wcm9qZWN0cy1vcmdhbml6YXRpb24vcHJldmlldy1maWxlcy1pbWFnZXMnIH0sXG4gICAgICAgICAgeyB0ZXh0OiAnRXhwb3J0IHRvIERPQ1ggb3IgUERGJywgbGluazogJy9zZWN0aW9uLTUtcHJvamVjdHMtb3JnYW5pemF0aW9uL2V4cG9ydC1jb250ZW50JyB9LFxuICAgICAgICAgIHsgdGV4dDogJ0V4cG9ydCBUYWJsZXMgdG8gQ1NWJywgbGluazogJy9zZWN0aW9uLTUtcHJvamVjdHMtb3JnYW5pemF0aW9uL2V4cG9ydC10YWJsZXMtY3N2JyB9LFxuICAgICAgICAgIHsgdGV4dDogJ09yZ2FuaXplIGF0IFNjYWxlJywgbGluazogJy9zZWN0aW9uLTUtcHJvamVjdHMtb3JnYW5pemF0aW9uL29yZ2FuaXplLWF0LXNjYWxlJyB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGV4dDogJ0NvbGxhYm9yYXRpb24gJiBTaGFyaW5nJyxcbiAgICAgICAgY29sbGFwc2VkOiB0cnVlLFxuICAgICAgICBpdGVtczogW1xuICAgICAgICAgIHsgdGV4dDogJ1NoYXJlIGFuZCBQdWJsaXNoJywgbGluazogJy9zZWN0aW9uLTYtY29sbGFib3JhdGlvbi9zaGFyZS1hbmQtcHVibGlzaCcgfSxcbiAgICAgICAgICB7IHRleHQ6ICdTaGFyZSBDb250ZW50IFByb2plY3RzJywgbGluazogJy9zZWN0aW9uLTYtY29sbGFib3JhdGlvbi9zaGFyZS1jb250ZW50LXByb2plY3RzJyB9LFxuICAgICAgICAgIHsgdGV4dDogJ1B1Ymxpc2ggdG8gQ2hhbm5lbHMnLCBsaW5rOiAnL3NlY3Rpb24tNi1jb2xsYWJvcmF0aW9uL3B1Ymxpc2gtdG8tY2hhbm5lbHMnIH0sXG4gICAgICAgICAgeyB0ZXh0OiAnQ2xpZW50IFJldmlldyAmIEFwcHJvdmFsJywgbGluazogJy9zZWN0aW9uLTYtY29sbGFib3JhdGlvbi9tYW5hZ2UtY2xpZW50LXJldmlldy1hcHByb3ZhbCcgfSxcbiAgICAgICAgICB7IHRleHQ6ICdMZWF2ZSAmIFJlc3BvbmQgdG8gQ29tbWVudHMnLCBsaW5rOiAnL3NlY3Rpb24tNi1jb2xsYWJvcmF0aW9uL2xlYXZlLXJlc3BvbmQtY29tbWVudHMnIH0sXG4gICAgICAgICAgeyB0ZXh0OiAnSW50ZXJuYWwgdnMgQ2xpZW50IFZpZXdzJywgbGluazogJy9zZWN0aW9uLTYtY29sbGFib3JhdGlvbi9pbnRlcm5hbC12cy1jbGllbnQtdmlld3MnIH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0ZXh0OiAnQWdlbmN5IFBsYW4nLFxuICAgICAgICBjb2xsYXBzZWQ6IHRydWUsXG4gICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgeyB0ZXh0OiAnVW5kZXJzdGFuZCB0aGUgQWdlbmN5IFBsYW4nLCBsaW5rOiAnL3NlY3Rpb24tNy1hZ2VuY3kvdW5kZXJzdGFuZC1hZ2VuY3ktcGxhbicgfSxcbiAgICAgICAgICB7IHRleHQ6ICdCcmFuZGUuYWkgZm9yIEFnZW5jaWVzJywgbGluazogJy9zZWN0aW9uLTctYWdlbmN5L3VzZS1icmFuZGUtZm9yLWFnZW5jaWVzJyB9LFxuICAgICAgICAgIHsgdGV4dDogJ1NldCBVcCBBZ2VuY3kgV29ya3NwYWNlJywgbGluazogJy9zZWN0aW9uLTctYWdlbmN5L3NldC11cC1hZ2VuY3ktd29ya3NwYWNlJyB9LFxuICAgICAgICAgIHsgdGV4dDogJ01hbmFnZSBNdWx0aXBsZSBCcmFuZHMnLCBsaW5rOiAnL3NlY3Rpb24tNy1hZ2VuY3kvbWFuYWdlLW11bHRpcGxlLWJyYW5kcycgfSxcbiAgICAgICAgICB7IHRleHQ6ICdJbnZpdGUgQ2xpZW50IENvbGxhYm9yYXRvcnMnLCBsaW5rOiAnL3NlY3Rpb24tNy1hZ2VuY3kvaW52aXRlLWNsaWVudC1jb2xsYWJvcmF0b3JzJyB9LFxuICAgICAgICAgIHsgdGV4dDogJ0NsaWVudCBBcHByb3ZhbCBGbG93cycsIGxpbms6ICcvc2VjdGlvbi03LWFnZW5jeS9jbGllbnQtYXBwcm92YWwtZmxvd3MnIH0sXG4gICAgICAgICAgeyB0ZXh0OiAnQ3VzdG9tIENoZWNrbGlzdHMgJiBXb3JrZmxvd3MnLCBsaW5rOiAnL3NlY3Rpb24tNy1hZ2VuY3kvY3VzdG9tLWNoZWNrbGlzdHMtd29ya2Zsb3dzJyB9LFxuICAgICAgICAgIHsgdGV4dDogJ0NvbnRlbnQgQWdlbnQgZm9yIENsaWVudHMnLCBsaW5rOiAnL3NlY3Rpb24tNy1hZ2VuY3kvY29udGVudC1hZ2VudC1jbGllbnQtYWNjb3VudHMnIH0sXG4gICAgICAgICAgeyB0ZXh0OiAnQWdlbmN5IERhc2hib2FyZCcsIGxpbms6ICcvc2VjdGlvbi03LWFnZW5jeS9hZ2VuY3ktZGFzaGJvYXJkJyB9LFxuICAgICAgICAgIHsgdGV4dDogJ1NjYWxlIFdpdGhvdXQgTG9zaW5nIENvbnRyb2wnLCBsaW5rOiAnL3NlY3Rpb24tNy1hZ2VuY3kvc2NhbGUtd2l0aG91dC1sb3NpbmctY29udHJvbCcgfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRleHQ6ICdEYXNoYm9hcmQgJiBOYXZpZ2F0aW9uJyxcbiAgICAgICAgY29sbGFwc2VkOiB0cnVlLFxuICAgICAgICBpdGVtczogW1xuICAgICAgICAgIHsgdGV4dDogJ1VzZSB0aGUgRGFzaGJvYXJkJywgbGluazogJy9zZWN0aW9uLTgtZGFzaGJvYXJkL3VzZS1kYXNoYm9hcmQnIH0sXG4gICAgICAgICAgeyB0ZXh0OiAnQ29udGVudCBDYWxlbmRhcicsIGxpbms6ICcvc2VjdGlvbi04LWRhc2hib2FyZC9tYW5hZ2UtY29udGVudC1jYWxlbmRhcicgfSxcbiAgICAgICAgICB7IHRleHQ6ICdRdWljayBBY3Rpb25zICYgU2hvcnRjdXRzJywgbGluazogJy9zZWN0aW9uLTgtZGFzaGJvYXJkL3F1aWNrLWFjdGlvbnMtc2hvcnRjdXRzJyB9LFxuICAgICAgICAgIHsgdGV4dDogJ05hdmlnYXRlIFNldHRpbmdzJywgbGluazogJy9zZWN0aW9uLTgtZGFzaGJvYXJkL25hdmlnYXRlLXNldHRpbmdzJyB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGV4dDogJ0FjY291bnQgJiBTZXR0aW5ncycsXG4gICAgICAgIGNvbGxhcHNlZDogdHJ1ZSxcbiAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICB7IHRleHQ6ICdBY2Nlc3MgJiBVcGRhdGUgU2V0dGluZ3MnLCBsaW5rOiAnL3NlY3Rpb24tOS1hY2NvdW50L2FjY2Vzcy11cGRhdGUtc2V0dGluZ3MnIH0sXG4gICAgICAgICAgeyB0ZXh0OiAnQ2hhbmdlIFlvdXIgUGFzc3dvcmQnLCBsaW5rOiAnL3NlY3Rpb24tOS1hY2NvdW50L2NoYW5nZS1wYXNzd29yZCcgfSxcbiAgICAgICAgICB7IHRleHQ6ICdUaGVtZSAmIExhbmd1YWdlJywgbGluazogJy9zZWN0aW9uLTktYWNjb3VudC90aGVtZS1sYW5ndWFnZS1wcmVmZXJlbmNlcycgfSxcbiAgICAgICAgICB7IHRleHQ6ICdVc2VyIFByZWZlcmVuY2VzJywgbGluazogJy9zZWN0aW9uLTktYWNjb3VudC9tYW5hZ2UtdXNlci1wcmVmZXJlbmNlcycgfSxcbiAgICAgICAgICB7IHRleHQ6ICdNYW5hZ2UgTm90aWZpY2F0aW9ucycsIGxpbms6ICcvc2VjdGlvbi05LWFjY291bnQvbWFuYWdlLW5vdGlmaWNhdGlvbnMnIH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0ZXh0OiAnSGVscCAmIEZlZWRiYWNrJyxcbiAgICAgICAgY29sbGFwc2VkOiB0cnVlLFxuICAgICAgICBpdGVtczogW1xuICAgICAgICAgIHsgdGV4dDogJ1VzZSB0aGUgSGVscCBDZW50ZXInLCBsaW5rOiAnL3NlY3Rpb24tMTAtaGVscC91c2UtaGVscC1jZW50ZXInIH0sXG4gICAgICAgICAgeyB0ZXh0OiAnU3VibWl0IEZlZWRiYWNrJywgbGluazogJy9zZWN0aW9uLTEwLWhlbHAvc3VibWl0LWZlZWRiYWNrJyB9LFxuICAgICAgICAgIHsgdGV4dDogJ1JlcXVlc3QgTmV3IEZlYXR1cmVzJywgbGluazogJy9zZWN0aW9uLTEwLWhlbHAvcmVxdWVzdC1uZXctZmVhdHVyZXMnIH0sXG4gICAgICAgICAgeyB0ZXh0OiAnR2V0IFN1cHBvcnQnLCBsaW5rOiAnL3NlY3Rpb24tMTAtaGVscC9nZXQtc3VwcG9ydCcgfSxcbiAgICAgICAgICB7IHRleHQ6ICdQcm9kdWN0IFVwZGF0ZXMnLCBsaW5rOiAnL3NlY3Rpb24tMTAtaGVscC91bmRlcnN0YW5kLXByb2R1Y3QtdXBkYXRlcycgfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRleHQ6ICdUcm91Ymxlc2hvb3RpbmcnLFxuICAgICAgICBjb2xsYXBzZWQ6IHRydWUsXG4gICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgeyB0ZXh0OiAnT3ZlcnZpZXcnLCBsaW5rOiAnL3Ryb3VibGVzaG9vdGluZy8nIH0sXG4gICAgICAgICAgeyB0ZXh0OiAnQWNjb3VudCAmIExvZ2luJywgbGluazogJy90cm91Ymxlc2hvb3RpbmcvYWNjb3VudC1sb2dpbicgfSxcbiAgICAgICAgICB7IHRleHQ6ICdCcmFuZCBWb2ljZSBBbmFseXNpcycsIGxpbms6ICcvdHJvdWJsZXNob290aW5nL2JyYW5kLXZvaWNlLWFuYWx5c2lzJyB9LFxuICAgICAgICAgIHsgdGV4dDogJ0NvbnRlbnQgQWdlbnQnLCBsaW5rOiAnL3Ryb3VibGVzaG9vdGluZy9jb250ZW50LWFnZW50JyB9LFxuICAgICAgICAgIHsgdGV4dDogJ0NvbnRlbnQgR2VuZXJhdGlvbicsIGxpbms6ICcvdHJvdWJsZXNob290aW5nL2NvbnRlbnQtZ2VuZXJhdGlvbicgfSxcbiAgICAgICAgICB7IHRleHQ6ICdGaWxlIFVwbG9hZHMnLCBsaW5rOiAnL3Ryb3VibGVzaG9vdGluZy9maWxlLXVwbG9hZHMnIH0sXG4gICAgICAgICAgeyB0ZXh0OiAnUHJlbWl1bSBGZWF0dXJlcycsIGxpbms6ICcvdHJvdWJsZXNob290aW5nL3ByZW1pdW0tZmVhdHVyZXMnIH0sXG4gICAgICAgICAgeyB0ZXh0OiAnUHVibGlzaGluZyAmIEludGVncmF0aW9ucycsIGxpbms6ICcvdHJvdWJsZXNob290aW5nL3B1Ymxpc2hpbmctaW50ZWdyYXRpb25zJyB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICBdLFxuXG4gICAgc2VhcmNoOiB7XG4gICAgICBwcm92aWRlcjogJ2xvY2FsJyxcbiAgICB9LFxuXG4gICAgZWRpdExpbms6IHtcbiAgICAgIHBhdHRlcm46ICdodHRwczovL2dpdGh1Yi5jb20vYnJhbmRlLWFpL2JyYW5kZS9lZGl0L21haW4vZG9jcy9oZWxwLWNlbnRlci86cGF0aCcsXG4gICAgICB0ZXh0OiAnRWRpdCB0aGlzIHBhZ2Ugb24gR2l0SHViJyxcbiAgICB9LFxuXG4gICAgZm9vdGVyOiB7XG4gICAgICBtZXNzYWdlOiAnQnJhbmRlLmFpIEhlbHAgQ2VudGVyJyxcbiAgICAgIGNvcHlyaWdodDogJ1x1MDBBOSAyMDI2IEJyYW5kZS5haS4gQWxsIHJpZ2h0cyByZXNlcnZlZC4nLFxuICAgIH0sXG5cbiAgICBzb2NpYWxMaW5rczogW1xuICAgICAgeyBpY29uOiAnZ2l0aHViJywgbGluazogJ2h0dHBzOi8vZ2l0aHViLmNvbS9icmFuZGUtYWknIH0sXG4gICAgXSxcbiAgfSxcbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXdaLFNBQVMsb0JBQW9CO0FBRXJiLElBQU8saUJBQVEsYUFBYTtBQUFBLEVBQzFCLE9BQU87QUFBQSxFQUNQLGFBQWE7QUFBQTtBQUFBO0FBQUEsRUFJYixNQUFNO0FBQUE7QUFBQSxFQUdOLFdBQVc7QUFBQTtBQUFBLEVBR1gsWUFBWSxDQUFDLGNBQWM7QUFBQSxFQUUzQixNQUFNO0FBQUEsSUFDSixDQUFDLFFBQVEsRUFBRSxLQUFLLFFBQVEsTUFBTSxlQUFlLENBQUM7QUFBQSxFQUNoRDtBQUFBLEVBRUEsYUFBYTtBQUFBLElBQ1gsTUFBTTtBQUFBLElBQ04sV0FBVztBQUFBLElBRVgsS0FBSztBQUFBLE1BQ0gsRUFBRSxNQUFNLFFBQVEsTUFBTSxJQUFJO0FBQUEsTUFDMUIsRUFBRSxNQUFNLG1CQUFtQixNQUFNLGtEQUFrRDtBQUFBLE1BQ25GLEVBQUUsTUFBTSxtQkFBbUIsTUFBTSxvQkFBb0I7QUFBQSxNQUNyRCxFQUFFLE1BQU0sYUFBYSxNQUFNLG9CQUFvQjtBQUFBLElBQ2pEO0FBQUEsSUFFQSxTQUFTO0FBQUEsTUFDUDtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sT0FB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
