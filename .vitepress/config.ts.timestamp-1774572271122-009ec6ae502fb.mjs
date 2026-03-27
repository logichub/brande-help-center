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
  // Warn on dead links instead of failing the build (some articles are still WIP)
  ignoreDeadLinks: true,
  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }]
  ],
  themeConfig: {
    logo: "/logo.svg",
    siteTitle: "Brande.ai Help",
    nav: [
      { text: "Home", link: "/" },
      { text: "Getting Started", link: "/section-1-getting-started/create-your-account" },
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
          { text: "Create Your Account", link: "/section-1-getting-started/create-your-account" },
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLnZpdGVwcmVzcy9jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvc2Vzc2lvbnMvY29tcGFzc2lvbmF0ZS1pbnRlbGxpZ2VudC1tYXllci9tbnQvYnJhbmRlL2RvY3MvaGVscC1jZW50ZXIvLnZpdGVwcmVzc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL3Nlc3Npb25zL2NvbXBhc3Npb25hdGUtaW50ZWxsaWdlbnQtbWF5ZXIvbW50L2JyYW5kZS9kb2NzL2hlbHAtY2VudGVyLy52aXRlcHJlc3MvY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9zZXNzaW9ucy9jb21wYXNzaW9uYXRlLWludGVsbGlnZW50LW1heWVyL21udC9icmFuZGUvZG9jcy9oZWxwLWNlbnRlci8udml0ZXByZXNzL2NvbmZpZy50c1wiO2ltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGVwcmVzcydcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgdGl0bGU6ICdCcmFuZGUuYWkgSGVscCBDZW50ZXInLFxuICBkZXNjcmlwdGlvbjogJ1lvdXIgZ3VpZGUgdG8gdXNpbmcgQnJhbmRlLmFpIFx1MjAxNCB0aGUgYnJhbmQtYXdhcmUgY29udGVudCBvcGVyYXRpbmcgc3lzdGVtLicsXG5cbiAgLy8gU2V0IGJhc2UgdG8gJy8nIGZvciBzdWJkb21haW4gKGhlbHAuYnJhbmRlLmFpKVxuICAvLyBTZXQgYmFzZSB0byAnL2hlbHAtY2VudGVyLycgZm9yIHN1YmRpcmVjdG9yeSAoYnJhbmRlLmFpL2hlbHAtY2VudGVyLylcbiAgYmFzZTogJy8nLFxuXG4gIC8vIENsZWFuIFVSTHM6IC9zZWN0aW9uLTEtZ2V0dGluZy1zdGFydGVkL2NvbXBsZXRlLWJyYW5kLXByb2ZpbGUgaW5zdGVhZCBvZiAuaHRtbFxuICBjbGVhblVybHM6IHRydWUsXG5cbiAgLy8gSWdub3JlIFJFQURNRS5tZCBmaWxlcyAobm90IG1lYW50IGZvciBwdWJsaXNoaW5nKVxuICBzcmNFeGNsdWRlOiBbJyoqL1JFQURNRS5tZCddLFxuXG4gIC8vIFdhcm4gb24gZGVhZCBsaW5rcyBpbnN0ZWFkIG9mIGZhaWxpbmcgdGhlIGJ1aWxkIChzb21lIGFydGljbGVzIGFyZSBzdGlsbCBXSVApXG4gIGlnbm9yZURlYWRMaW5rczogdHJ1ZSxcblxuICBoZWFkOiBbXG4gICAgWydsaW5rJywgeyByZWw6ICdpY29uJywgaHJlZjogJy9mYXZpY29uLmljbycgfV0sXG4gIF0sXG5cbiAgdGhlbWVDb25maWc6IHtcbiAgICBsb2dvOiAnL2xvZ28uc3ZnJyxcbiAgICBzaXRlVGl0bGU6ICdCcmFuZGUuYWkgSGVscCcsXG5cbiAgICBuYXY6IFtcbiAgICAgIHsgdGV4dDogJ0hvbWUnLCBsaW5rOiAnLycgfSxcbiAgICAgIHsgdGV4dDogJ0dldHRpbmcgU3RhcnRlZCcsIGxpbms6ICcvc2VjdGlvbi0xLWdldHRpbmctc3RhcnRlZC9jcmVhdGUteW91ci1hY2NvdW50JyB9LFxuICAgICAgeyB0ZXh0OiAnVHJvdWJsZXNob290aW5nJywgbGluazogJy90cm91Ymxlc2hvb3RpbmcvJyB9LFxuICAgICAgeyB0ZXh0OiAnQnJhbmRlLmFpJywgbGluazogJ2h0dHBzOi8vYnJhbmRlLmFpJyB9LFxuICAgIF0sXG5cbiAgICBzaWRlYmFyOiBbXG4gICAgICB7XG4gICAgICAgIHRleHQ6ICdVbmRlcnN0YW5kaW5nIEJyYW5kZS5haScsXG4gICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgeyB0ZXh0OiAnV2hhdCBpcyBCcmFuZGUuYWk/JywgbGluazogJy9zZWN0aW9uLTAtbWVudGFsLW1vZGVsL3VuZGVyc3RhbmQtYnJhbmRlJyB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGV4dDogJ0dldHRpbmcgU3RhcnRlZCcsXG4gICAgICAgIGNvbGxhcHNlZDogZmFsc2UsXG4gICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgeyB0ZXh0OiAnQ3JlYXRlIFlvdXIgQWNjb3VudCcsIGxpbms6ICcvc2VjdGlvbi0xLWdldHRpbmctc3RhcnRlZC9jcmVhdGUteW91ci1hY2NvdW50JyB9LFxuICAgICAgICAgIHsgdGV4dDogJ1VuZGVyc3RhbmQgQnJhbmQgRE5BJywgbGluazogJy9zZWN0aW9uLTEtZ2V0dGluZy1zdGFydGVkL3VuZGVyc3RhbmQtYnJhbmQtZG5hJyB9LFxuICAgICAgICAgIHsgdGV4dDogJ0NvbXBsZXRlIFlvdXIgQnJhbmQgUHJvZmlsZScsIGxpbms6ICcvc2VjdGlvbi0xLWdldHRpbmctc3RhcnRlZC9jb21wbGV0ZS1icmFuZC1wcm9maWxlJyB9LFxuICAgICAgICAgIHsgdGV4dDogJ1NlbGVjdCBDb250ZW50IENoYW5uZWxzJywgbGluazogJy9zZWN0aW9uLTEtZ2V0dGluZy1zdGFydGVkL3NlbGVjdC1jb250ZW50LWNoYW5uZWxzJyB9LFxuICAgICAgICAgIHsgdGV4dDogJ1VwbG9hZCBCcmFuZCBBc3NldHMnLCBsaW5rOiAnL3NlY3Rpb24tMS1nZXR0aW5nLXN0YXJ0ZWQvdXBsb2FkLWJyYW5kLWFzc2V0cycgfSxcbiAgICAgICAgICB7IHRleHQ6ICdVc2UgUmVmZXJlbmNlIE1hdGVyaWFscycsIGxpbms6ICcvc2VjdGlvbi0xLWdldHRpbmctc3RhcnRlZC9yZWZlcmVuY2UtbWF0ZXJpYWxzJyB9LFxuICAgICAgICAgIHsgdGV4dDogJ0JyYW5kIFZvaWNlIEFuYWx5emVyJywgbGluazogJy9zZWN0aW9uLTEtZ2V0dGluZy1zdGFydGVkL3VuZGVyc3RhbmQtYnJhbmQtdm9pY2UtYW5hbHl6ZXInIH0sXG4gICAgICAgICAgeyB0ZXh0OiAnVXBkYXRlIEJyYW5kIFZvaWNlJywgbGluazogJy9zZWN0aW9uLTEtZ2V0dGluZy1zdGFydGVkL3VwZGF0ZS1icmFuZC12b2ljZScgfSxcbiAgICAgICAgICB7IHRleHQ6ICdVcGRhdGUgQnJhbmQgTWF0ZXJpYWxzJywgbGluazogJy9zZWN0aW9uLTEtZ2V0dGluZy1zdGFydGVkL3VwZGF0ZS1icmFuZC1tYXRlcmlhbHMnIH0sXG4gICAgICAgICAgeyB0ZXh0OiAnVXBkYXRlIFJlZmVyZW5jZSBNYXRlcmlhbHMnLCBsaW5rOiAnL3NlY3Rpb24tMS1nZXR0aW5nLXN0YXJ0ZWQvdXBkYXRlLXJlZmVyZW5jZS1tYXRlcmlhbHMnIH0sXG4gICAgICAgICAgeyB0ZXh0OiAnVXBkYXRlIE1lc3NhZ2luZyBGcmFtZXdvcmsnLCBsaW5rOiAnL3NlY3Rpb24tMS1nZXR0aW5nLXN0YXJ0ZWQvdXBkYXRlLW1lc3NhZ2luZy1mcmFtZXdvcmsnIH0sXG4gICAgICAgICAgeyB0ZXh0OiAnVXBkYXRlIFByb2ZpbGUgU2V0dGluZ3MnLCBsaW5rOiAnL3NlY3Rpb24tMS1nZXR0aW5nLXN0YXJ0ZWQvdXBkYXRlLXByb2ZpbGUtc2V0dGluZ3MnIH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0ZXh0OiAnQ29udGVudCBBZ2VudCcsXG4gICAgICAgIGNvbGxhcHNlZDogdHJ1ZSxcbiAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICB7IHRleHQ6ICdVbmRlcnN0YW5kaW5nIENvbnRlbnQgQWdlbnQnLCBsaW5rOiAnL3NlY3Rpb24tMi1jb250ZW50LWFnZW50L3VuZGVyc3RhbmRpbmctY29udGVudC1hZ2VudCcgfSxcbiAgICAgICAgICB7IHRleHQ6ICdVc2UgQ29udGVudCBBZ2VudCcsIGxpbms6ICcvc2VjdGlvbi0yLWNvbnRlbnQtYWdlbnQvdXNlLWNvbnRlbnQtYWdlbnQnIH0sXG4gICAgICAgICAgeyB0ZXh0OiAnR2V0IERhaWx5IFJlY29tbWVuZGF0aW9ucycsIGxpbms6ICcvc2VjdGlvbi0yLWNvbnRlbnQtYWdlbnQvZ2V0LWRhaWx5LXJlY29tbWVuZGF0aW9ucycgfSxcbiAgICAgICAgICB7IHRleHQ6ICdSZWFkIENvbnRlbnQgQnJpZWZzJywgbGluazogJy9zZWN0aW9uLTItY29udGVudC1hZ2VudC9yZWFkLWNvbnRlbnQtYnJpZWZzJyB9LFxuICAgICAgICAgIHsgdGV4dDogJ0N1c3RvbWl6ZSBhIENvbnRlbnQgQnJpZWYnLCBsaW5rOiAnL3NlY3Rpb24tMi1jb250ZW50LWFnZW50L2N1c3RvbWl6ZS1jb250ZW50LWJyaWVmJyB9LFxuICAgICAgICAgIHsgdGV4dDogJ1NhdmUgdG8gRm9sZGVycycsIGxpbms6ICcvc2VjdGlvbi0yLWNvbnRlbnQtYWdlbnQvc2F2ZS10by1mb2xkZXJzJyB9LFxuICAgICAgICAgIHsgdGV4dDogJ011bHRpcGxlIENoYW5uZWxzJywgbGluazogJy9zZWN0aW9uLTItY29udGVudC1hZ2VudC9jb250ZW50LWFnZW50LW11bHRpcGxlLWNoYW5uZWxzJyB9LFxuICAgICAgICAgIHsgdGV4dDogJ011bHRpcGxlIEJyYW5kcycsIGxpbms6ICcvc2VjdGlvbi0yLWNvbnRlbnQtYWdlbnQvY29udGVudC1hZ2VudC1tdWx0aXBsZS1icmFuZHMnIH0sXG4gICAgICAgICAgeyB0ZXh0OiAnQWdlbnQgdnMgTWFudWFsIENyZWF0aW9uJywgbGluazogJy9zZWN0aW9uLTItY29udGVudC1hZ2VudC9jb250ZW50LWFnZW50LXZzLW1hbnVhbCcgfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRleHQ6ICdDcmVhdGluZyBDb250ZW50JyxcbiAgICAgICAgY29sbGFwc2VkOiB0cnVlLFxuICAgICAgICBpdGVtczogW1xuICAgICAgICAgIHsgdGV4dDogJ0NyZWF0ZSBhIE5ldyBQcm9qZWN0JywgbGluazogJy9zZWN0aW9uLTMtY3JlYXRpbmctY29udGVudC9jcmVhdGUtbmV3LXByb2plY3QnIH0sXG4gICAgICAgICAgeyB0ZXh0OiAnQ2hvb3NlIFByb2plY3QgVGVtcGxhdGVzJywgbGluazogJy9zZWN0aW9uLTMtY3JlYXRpbmctY29udGVudC9jaG9vc2UtcHJvamVjdC10ZW1wbGF0ZXMnIH0sXG4gICAgICAgICAgeyB0ZXh0OiAnR2VuZXJhdGUgV2Vic2l0ZSBDb3B5JywgbGluazogJy9zZWN0aW9uLTMtY3JlYXRpbmctY29udGVudC9nZW5lcmF0ZS13ZWJzaXRlLWNvcHknIH0sXG4gICAgICAgICAgeyB0ZXh0OiAnQ3JlYXRlIEZhY2Vib29rIFRocmVhZHMnLCBsaW5rOiAnL3NlY3Rpb24tMy1jcmVhdGluZy1jb250ZW50L2NyZWF0ZS1mYWNlYm9vay10aHJlYWRzJyB9LFxuICAgICAgICAgIHsgdGV4dDogJ0NyZWF0ZSBMaW5rZWRJbiBDb250ZW50JywgbGluazogJy9zZWN0aW9uLTMtY3JlYXRpbmctY29udGVudC9jcmVhdGUtbGlua2VkaW4tY29udGVudCcgfSxcbiAgICAgICAgICB7IHRleHQ6ICdJbmNsdWRlIEltYWdlcycsIGxpbms6ICcvc2VjdGlvbi0zLWNyZWF0aW5nLWNvbnRlbnQvaW5jbHVkZS1pbWFnZXMnIH0sXG4gICAgICAgICAgeyB0ZXh0OiAnRWRpdCwgUmVmaW5lICYgUmVnZW5lcmF0ZScsIGxpbms6ICcvc2VjdGlvbi0zLWNyZWF0aW5nLWNvbnRlbnQvZWRpdC1yZWZpbmUtcmVnZW5lcmF0ZScgfSxcbiAgICAgICAgICB7IHRleHQ6ICdVc2UgQnJhbmQgVm9pY2UgaW4gUHJvamVjdHMnLCBsaW5rOiAnL3NlY3Rpb24tMy1jcmVhdGluZy1jb250ZW50L3VzZS1icmFuZC12b2ljZS1pbi1wcm9qZWN0cycgfSxcbiAgICAgICAgICB7IHRleHQ6ICdVc2UgQ29udGVudCBJbXByb3ZlcicsIGxpbms6ICcvc2VjdGlvbi0zLWNyZWF0aW5nLWNvbnRlbnQvdXNlLWNvbnRlbnQtaW1wcm92ZXInIH0sXG4gICAgICAgICAgeyB0ZXh0OiAnQ3JlYXRlICYgTWFuYWdlIFNuaXBwZXRzJywgbGluazogJy9zZWN0aW9uLTMtY3JlYXRpbmctY29udGVudC9jcmVhdGUtbWFuYWdlLXNuaXBwZXRzJyB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGV4dDogJ1Zpc3VhbCBDb250ZW50JyxcbiAgICAgICAgY29sbGFwc2VkOiB0cnVlLFxuICAgICAgICBpdGVtczogW1xuICAgICAgICAgIHsgdGV4dDogJ0dlbmVyYXRlIE9uLUJyYW5kIEltYWdlcycsIGxpbms6ICcvc2VjdGlvbi00LXZpc3VhbC1jb250ZW50L2dlbmVyYXRlLW9uLWJyYW5kLWltYWdlcycgfSxcbiAgICAgICAgICB7IHRleHQ6ICdDdXN0b21pemUgSW1hZ2UgU3R5bGUnLCBsaW5rOiAnL3NlY3Rpb24tNC12aXN1YWwtY29udGVudC9jdXN0b21pemUtaW1hZ2Utc3R5bGUnIH0sXG4gICAgICAgICAgeyB0ZXh0OiAnVmlzdWFscyBmb3IgRGlmZmVyZW50IFBsYXRmb3JtcycsIGxpbms6ICcvc2VjdGlvbi00LXZpc3VhbC1jb250ZW50L3Zpc3VhbC1jb250ZW50LXBsYXRmb3JtcycgfSxcbiAgICAgICAgICB7IHRleHQ6ICdNYWludGFpbiBWaXN1YWwgQ29uc2lzdGVuY3knLCBsaW5rOiAnL3NlY3Rpb24tNC12aXN1YWwtY29udGVudC9tYWludGFpbi12aXN1YWwtY29uc2lzdGVuY3knIH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0ZXh0OiAnUHJvamVjdHMgJiBPcmdhbml6YXRpb24nLFxuICAgICAgICBjb2xsYXBzZWQ6IHRydWUsXG4gICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgeyB0ZXh0OiAnUHJvamVjdHMsIEZvbGRlcnMgJiBDYW1wYWlnbnMnLCBsaW5rOiAnL3NlY3Rpb24tNS1wcm9qZWN0cy1vcmdhbml6YXRpb24vdW5kZXJzdGFuZC1wcm9qZWN0cy1mb2xkZXJzJyB9LFxuICAgICAgICAgIHsgdGV4dDogJ0ZpbmQgUHJvamVjdHMgdmlhIFNlYXJjaCcsIGxpbms6ICcvc2VjdGlvbi01LXByb2plY3RzLW9yZ2FuaXphdGlvbi9maW5kLXByb2plY3RzLXNlYXJjaCcgfSxcbiAgICAgICAgICB7IHRleHQ6ICdQcmV2aWV3IEZpbGVzICYgSW1hZ2VzJywgbGluazogJy9zZWN0aW9uLTUtcHJvamVjdHMtb3JnYW5pemF0aW9uL3ByZXZpZXctZmlsZXMtaW1hZ2VzJyB9LFxuICAgICAgICAgIHsgdGV4dDogJ0V4cG9ydCB0byBET0NYIG9yIFBERicsIGxpbms6ICcvc2VjdGlvbi01LXByb2plY3RzLW9yZ2FuaXphdGlvbi9leHBvcnQtY29udGVudCcgfSxcbiAgICAgICAgICB7IHRleHQ6ICdFeHBvcnQgVGFibGVzIHRvIENTVicsIGxpbms6ICcvc2VjdGlvbi01LXByb2plY3RzLW9yZ2FuaXphdGlvbi9leHBvcnQtdGFibGVzLWNzdicgfSxcbiAgICAgICAgICB7IHRleHQ6ICdPcmdhbml6ZSBhdCBTY2FsZScsIGxpbms6ICcvc2VjdGlvbi01LXByb2plY3RzLW9yZ2FuaXphdGlvbi9vcmdhbml6ZS1hdC1zY2FsZScgfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRleHQ6ICdDb2xsYWJvcmF0aW9uICYgU2hhcmluZycsXG4gICAgICAgIGNvbGxhcHNlZDogdHJ1ZSxcbiAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICB7IHRleHQ6ICdTaGFyZSBhbmQgUHVibGlzaCcsIGxpbms6ICcvc2VjdGlvbi02LWNvbGxhYm9yYXRpb24vc2hhcmUtYW5kLXB1Ymxpc2gnIH0sXG4gICAgICAgICAgeyB0ZXh0OiAnU2hhcmUgQ29udGVudCBQcm9qZWN0cycsIGxpbms6ICcvc2VjdGlvbi02LWNvbGxhYm9yYXRpb24vc2hhcmUtY29udGVudC1wcm9qZWN0cycgfSxcbiAgICAgICAgICB7IHRleHQ6ICdQdWJsaXNoIHRvIENoYW5uZWxzJywgbGluazogJy9zZWN0aW9uLTYtY29sbGFib3JhdGlvbi9wdWJsaXNoLXRvLWNoYW5uZWxzJyB9LFxuICAgICAgICAgIHsgdGV4dDogJ0NsaWVudCBSZXZpZXcgJiBBcHByb3ZhbCcsIGxpbms6ICcvc2VjdGlvbi02LWNvbGxhYm9yYXRpb24vbWFuYWdlLWNsaWVudC1yZXZpZXctYXBwcm92YWwnIH0sXG4gICAgICAgICAgeyB0ZXh0OiAnTGVhdmUgJiBSZXNwb25kIHRvIENvbW1lbnRzJywgbGluazogJy9zZWN0aW9uLTYtY29sbGFib3JhdGlvbi9sZWF2ZS1yZXNwb25kLWNvbW1lbnRzJyB9LFxuICAgICAgICAgIHsgdGV4dDogJ0ludGVybmFsIHZzIENsaWVudCBWaWV3cycsIGxpbms6ICcvc2VjdGlvbi02LWNvbGxhYm9yYXRpb24vaW50ZXJuYWwtdnMtY2xpZW50LXZpZXdzJyB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGV4dDogJ0FnZW5jeSBQbGFuJyxcbiAgICAgICAgY29sbGFwc2VkOiB0cnVlLFxuICAgICAgICBpdGVtczogW1xuICAgICAgICAgIHsgdGV4dDogJ1VuZGVyc3RhbmQgdGhlIEFnZW5jeSBQbGFuJywgbGluazogJy9zZWN0aW9uLTctYWdlbmN5L3VuZGVyc3RhbmQtYWdlbmN5LXBsYW4nIH0sXG4gICAgICAgICAgeyB0ZXh0OiAnQnJhbmRlLmFpIGZvciBBZ2VuY2llcycsIGxpbms6ICcvc2VjdGlvbi03LWFnZW5jeS91c2UtYnJhbmRlLWZvci1hZ2VuY2llcycgfSxcbiAgICAgICAgICB7IHRleHQ6ICdTZXQgVXAgQWdlbmN5IFdvcmtzcGFjZScsIGxpbms6ICcvc2VjdGlvbi03LWFnZW5jeS9zZXQtdXAtYWdlbmN5LXdvcmtzcGFjZScgfSxcbiAgICAgICAgICB7IHRleHQ6ICdNYW5hZ2UgTXVsdGlwbGUgQnJhbmRzJywgbGluazogJy9zZWN0aW9uLTctYWdlbmN5L21hbmFnZS1tdWx0aXBsZS1icmFuZHMnIH0sXG4gICAgICAgICAgeyB0ZXh0OiAnSW52aXRlIENsaWVudCBDb2xsYWJvcmF0b3JzJywgbGluazogJy9zZWN0aW9uLTctYWdlbmN5L2ludml0ZS1jbGllbnQtY29sbGFib3JhdG9ycycgfSxcbiAgICAgICAgICB7IHRleHQ6ICdDbGllbnQgQXBwcm92YWwgRmxvd3MnLCBsaW5rOiAnL3NlY3Rpb24tNy1hZ2VuY3kvY2xpZW50LWFwcHJvdmFsLWZsb3dzJyB9LFxuICAgICAgICAgIHsgdGV4dDogJ0N1c3RvbSBDaGVja2xpc3RzICYgV29ya2Zsb3dzJywgbGluazogJy9zZWN0aW9uLTctYWdlbmN5L2N1c3RvbS1jaGVja2xpc3RzLXdvcmtmbG93cycgfSxcbiAgICAgICAgICB7IHRleHQ6ICdDb250ZW50IEFnZW50IGZvciBDbGllbnRzJywgbGluazogJy9zZWN0aW9uLTctYWdlbmN5L2NvbnRlbnQtYWdlbnQtY2xpZW50LWFjY291bnRzJyB9LFxuICAgICAgICAgIHsgdGV4dDogJ0FnZW5jeSBEYXNoYm9hcmQnLCBsaW5rOiAnL3NlY3Rpb24tNy1hZ2VuY3kvYWdlbmN5LWRhc2hib2FyZCcgfSxcbiAgICAgICAgICB7IHRleHQ6ICdTY2FsZSBXaXRob3V0IExvc2luZyBDb250cm9sJywgbGluazogJy9zZWN0aW9uLTctYWdlbmN5L3NjYWxlLXdpdGhvdXQtbG9zaW5nLWNvbnRyb2wnIH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0ZXh0OiAnRGFzaGJvYXJkICYgTmF2aWdhdGlvbicsXG4gICAgICAgIGNvbGxhcHNlZDogdHJ1ZSxcbiAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICB7IHRleHQ6ICdVc2UgdGhlIERhc2hib2FyZCcsIGxpbms6ICcvc2VjdGlvbi04LWRhc2hib2FyZC91c2UtZGFzaGJvYXJkJyB9LFxuICAgICAgICAgIHsgdGV4dDogJ0NvbnRlbnQgQ2FsZW5kYXInLCBsaW5rOiAnL3NlY3Rpb24tOC1kYXNoYm9hcmQvbWFuYWdlLWNvbnRlbnQtY2FsZW5kYXInIH0sXG4gICAgICAgICAgeyB0ZXh0OiAnUXVpY2sgQWN0aW9ucyAmIFNob3J0Y3V0cycsIGxpbms6ICcvc2VjdGlvbi04LWRhc2hib2FyZC9xdWljay1hY3Rpb25zLXNob3J0Y3V0cycgfSxcbiAgICAgICAgICB7IHRleHQ6ICdOYXZpZ2F0ZSBTZXR0aW5ncycsIGxpbms6ICcvc2VjdGlvbi04LWRhc2hib2FyZC9uYXZpZ2F0ZS1zZXR0aW5ncycgfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRleHQ6ICdBY2NvdW50ICYgU2V0dGluZ3MnLFxuICAgICAgICBjb2xsYXBzZWQ6IHRydWUsXG4gICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgeyB0ZXh0OiAnQWNjZXNzICYgVXBkYXRlIFNldHRpbmdzJywgbGluazogJy9zZWN0aW9uLTktYWNjb3VudC9hY2Nlc3MtdXBkYXRlLXNldHRpbmdzJyB9LFxuICAgICAgICAgIHsgdGV4dDogJ0NoYW5nZSBZb3VyIFBhc3N3b3JkJywgbGluazogJy9zZWN0aW9uLTktYWNjb3VudC9jaGFuZ2UtcGFzc3dvcmQnIH0sXG4gICAgICAgICAgeyB0ZXh0OiAnVGhlbWUgJiBMYW5ndWFnZScsIGxpbms6ICcvc2VjdGlvbi05LWFjY291bnQvdGhlbWUtbGFuZ3VhZ2UtcHJlZmVyZW5jZXMnIH0sXG4gICAgICAgICAgeyB0ZXh0OiAnVXNlciBQcmVmZXJlbmNlcycsIGxpbms6ICcvc2VjdGlvbi05LWFjY291bnQvbWFuYWdlLXVzZXItcHJlZmVyZW5jZXMnIH0sXG4gICAgICAgICAgeyB0ZXh0OiAnTWFuYWdlIE5vdGlmaWNhdGlvbnMnLCBsaW5rOiAnL3NlY3Rpb24tOS1hY2NvdW50L21hbmFnZS1ub3RpZmljYXRpb25zJyB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGV4dDogJ0hlbHAgJiBGZWVkYmFjaycsXG4gICAgICAgIGNvbGxhcHNlZDogdHJ1ZSxcbiAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICB7IHRleHQ6ICdVc2UgdGhlIEhlbHAgQ2VudGVyJywgbGluazogJy9zZWN0aW9uLTEwLWhlbHAvdXNlLWhlbHAtY2VudGVyJyB9LFxuICAgICAgICAgIHsgdGV4dDogJ1N1Ym1pdCBGZWVkYmFjaycsIGxpbms6ICcvc2VjdGlvbi0xMC1oZWxwL3N1Ym1pdC1mZWVkYmFjaycgfSxcbiAgICAgICAgICB7IHRleHQ6ICdSZXF1ZXN0IE5ldyBGZWF0dXJlcycsIGxpbms6ICcvc2VjdGlvbi0xMC1oZWxwL3JlcXVlc3QtbmV3LWZlYXR1cmVzJyB9LFxuICAgICAgICAgIHsgdGV4dDogJ0dldCBTdXBwb3J0JywgbGluazogJy9zZWN0aW9uLTEwLWhlbHAvZ2V0LXN1cHBvcnQnIH0sXG4gICAgICAgICAgeyB0ZXh0OiAnUHJvZHVjdCBVcGRhdGVzJywgbGluazogJy9zZWN0aW9uLTEwLWhlbHAvdW5kZXJzdGFuZC1wcm9kdWN0LXVwZGF0ZXMnIH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0ZXh0OiAnVHJvdWJsZXNob290aW5nJyxcbiAgICAgICAgY29sbGFwc2VkOiB0cnVlLFxuICAgICAgICBpdGVtczogW1xuICAgICAgICAgIHsgdGV4dDogJ092ZXJ2aWV3JywgbGluazogJy90cm91Ymxlc2hvb3RpbmcvJyB9LFxuICAgICAgICAgIHsgdGV4dDogJ0FjY291bnQgJiBMb2dpbicsIGxpbms6ICcvdHJvdWJsZXNob290aW5nL2FjY291bnQtbG9naW4nIH0sXG4gICAgICAgICAgeyB0ZXh0OiAnQnJhbmQgVm9pY2UgQW5hbHlzaXMnLCBsaW5rOiAnL3Ryb3VibGVzaG9vdGluZy9icmFuZC12b2ljZS1hbmFseXNpcycgfSxcbiAgICAgICAgICB7IHRleHQ6ICdDb250ZW50IEFnZW50JywgbGluazogJy90cm91Ymxlc2hvb3RpbmcvY29udGVudC1hZ2VudCcgfSxcbiAgICAgICAgICB7IHRleHQ6ICdDb250ZW50IEdlbmVyYXRpb24nLCBsaW5rOiAnL3Ryb3VibGVzaG9vdGluZy9jb250ZW50LWdlbmVyYXRpb24nIH0sXG4gICAgICAgICAgeyB0ZXh0OiAnRmlsZSBVcGxvYWRzJywgbGluazogJy90cm91Ymxlc2hvb3RpbmcvZmlsZS11cGxvYWRzJyB9LFxuICAgICAgICAgIHsgdGV4dDogJ1ByZW1pdW0gRmVhdHVyZXMnLCBsaW5rOiAnL3Ryb3VibGVzaG9vdGluZy9wcmVtaXVtLWZlYXR1cmVzJyB9LFxuICAgICAgICAgIHsgdGV4dDogJ1B1Ymxpc2hpbmcgJiBJbnRlZ3JhdGlvbnMnLCBsaW5rOiAnL3Ryb3VibGVzaG9vdGluZy9wdWJsaXNoaW5nLWludGVncmF0aW9ucycgfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgXSxcblxuICAgIHNlYXJjaDoge1xuICAgICAgcHJvdmlkZXI6ICdsb2NhbCcsXG4gICAgfSxcblxuICAgIGVkaXRMaW5rOiB7XG4gICAgICBwYXR0ZXJuOiAnaHR0cHM6Ly9naXRodWIuY29tL2JyYW5kZS1haS9icmFuZGUvZWRpdC9tYWluL2RvY3MvaGVscC1jZW50ZXIvOnBhdGgnLFxuICAgICAgdGV4dDogJ0VkaXQgdGhpcyBwYWdlIG9uIEdpdEh1YicsXG4gICAgfSxcblxuICAgIGZvb3Rlcjoge1xuICAgICAgbWVzc2FnZTogJ0JyYW5kZS5haSBIZWxwIENlbnRlcicsXG4gICAgICBjb3B5cmlnaHQ6ICdcdTAwQTkgMjAyNiBCcmFuZGUuYWkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuJyxcbiAgICB9LFxuXG4gICAgc29jaWFsTGlua3M6IFtcbiAgICAgIHsgaWNvbjogJ2dpdGh1YicsIGxpbms6ICdodHRwczovL2dpdGh1Yi5jb20vYnJhbmRlLWFpJyB9LFxuICAgIF0sXG4gIH0sXG59KVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUF3WixTQUFTLG9CQUFvQjtBQUVyYixJQUFPLGlCQUFRLGFBQWE7QUFBQSxFQUMxQixPQUFPO0FBQUEsRUFDUCxhQUFhO0FBQUE7QUFBQTtBQUFBLEVBSWIsTUFBTTtBQUFBO0FBQUEsRUFHTixXQUFXO0FBQUE7QUFBQSxFQUdYLFlBQVksQ0FBQyxjQUFjO0FBQUE7QUFBQSxFQUczQixpQkFBaUI7QUFBQSxFQUVqQixNQUFNO0FBQUEsSUFDSixDQUFDLFFBQVEsRUFBRSxLQUFLLFFBQVEsTUFBTSxlQUFlLENBQUM7QUFBQSxFQUNoRDtBQUFBLEVBRUEsYUFBYTtBQUFBLElBQ1gsTUFBTTtBQUFBLElBQ04sV0FB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
