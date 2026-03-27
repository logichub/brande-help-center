// .vitepress/config.ts
import { defineConfig } from "file:///sessions/compassionate-intelligent-mayer/mnt/brande/docs/help-center/node_modules/vitepress/dist/node/index.js";
var config_default = defineConfig({
  vite: {
    build: {
      // Use /tmp for temp files to avoid sandbox permission issues
      emptyOutDir: true
    }
  },
  tempDir: "/tmp/vitepress-temp",
  cacheDir: "/tmp/vitepress-cache",
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLnZpdGVwcmVzcy9jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvc2Vzc2lvbnMvY29tcGFzc2lvbmF0ZS1pbnRlbGxpZ2VudC1tYXllci9tbnQvYnJhbmRlL2RvY3MvaGVscC1jZW50ZXIvLnZpdGVwcmVzc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL3Nlc3Npb25zL2NvbXBhc3Npb25hdGUtaW50ZWxsaWdlbnQtbWF5ZXIvbW50L2JyYW5kZS9kb2NzL2hlbHAtY2VudGVyLy52aXRlcHJlc3MvY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9zZXNzaW9ucy9jb21wYXNzaW9uYXRlLWludGVsbGlnZW50LW1heWVyL21udC9icmFuZGUvZG9jcy9oZWxwLWNlbnRlci8udml0ZXByZXNzL2NvbmZpZy50c1wiO2ltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGVwcmVzcydcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgdml0ZToge1xuICAgIGJ1aWxkOiB7XG4gICAgICAvLyBVc2UgL3RtcCBmb3IgdGVtcCBmaWxlcyB0byBhdm9pZCBzYW5kYm94IHBlcm1pc3Npb24gaXNzdWVzXG4gICAgICBlbXB0eU91dERpcjogdHJ1ZSxcbiAgICB9LFxuICB9LFxuICB0ZW1wRGlyOiAnL3RtcC92aXRlcHJlc3MtdGVtcCcsXG4gIGNhY2hlRGlyOiAnL3RtcC92aXRlcHJlc3MtY2FjaGUnLFxuXG4gIHRpdGxlOiAnQnJhbmRlLmFpIEhlbHAgQ2VudGVyJyxcbiAgZGVzY3JpcHRpb246ICdZb3VyIGd1aWRlIHRvIHVzaW5nIEJyYW5kZS5haSBcdTIwMTQgdGhlIGJyYW5kLWF3YXJlIGNvbnRlbnQgb3BlcmF0aW5nIHN5c3RlbS4nLFxuXG4gIC8vIFNldCBiYXNlIHRvICcvJyBmb3Igc3ViZG9tYWluIChoZWxwLmJyYW5kZS5haSlcbiAgLy8gU2V0IGJhc2UgdG8gJy9oZWxwLWNlbnRlci8nIGZvciBzdWJkaXJlY3RvcnkgKGJyYW5kZS5haS9oZWxwLWNlbnRlci8pXG4gIGJhc2U6ICcvJyxcblxuICAvLyBDbGVhbiBVUkxzOiAvc2VjdGlvbi0xLWdldHRpbmctc3RhcnRlZC9jb21wbGV0ZS1icmFuZC1wcm9maWxlIGluc3RlYWQgb2YgLmh0bWxcbiAgY2xlYW5VcmxzOiB0cnVlLFxuXG4gIC8vIElnbm9yZSBSRUFETUUubWQgZmlsZXMgKG5vdCBtZWFudCBmb3IgcHVibGlzaGluZylcbiAgc3JjRXhjbHVkZTogWycqKi9SRUFETUUubWQnXSxcblxuICAvLyBXYXJuIG9uIGRlYWQgbGlua3MgaW5zdGVhZCBvZiBmYWlsaW5nIHRoZSBidWlsZCAoc29tZSBhcnRpY2xlcyBhcmUgc3RpbGwgV0lQKVxuICBpZ25vcmVEZWFkTGlua3M6IHRydWUsXG5cbiAgaGVhZDogW1xuICAgIFsnbGluaycsIHsgcmVsOiAnaWNvbicsIGhyZWY6ICcvZmF2aWNvbi5pY28nIH1dLFxuICBdLFxuXG4gIHRoZW1lQ29uZmlnOiB7XG4gICAgbG9nbzogJy9sb2dvLnN2ZycsXG4gICAgc2l0ZVRpdGxlOiAnQnJhbmRlLmFpIEhlbHAnLFxuXG4gICAgbmF2OiBbXG4gICAgICB7IHRleHQ6ICdIb21lJywgbGluazogJy8nIH0sXG4gICAgICB7IHRleHQ6ICdHZXR0aW5nIFN0YXJ0ZWQnLCBsaW5rOiAnL3NlY3Rpb24tMS1nZXR0aW5nLXN0YXJ0ZWQvY3JlYXRlLXlvdXItYWNjb3VudCcgfSxcbiAgICAgIHsgdGV4dDogJ1Ryb3VibGVzaG9vdGluZycsIGxpbms6ICcvdHJvdWJsZXNob290aW5nLycgfSxcbiAgICAgIHsgdGV4dDogJ0JyYW5kZS5haScsIGxpbms6ICdodHRwczovL2JyYW5kZS5haScgfSxcbiAgICBdLFxuXG4gICAgc2lkZWJhcjogW1xuICAgICAge1xuICAgICAgICB0ZXh0OiAnVW5kZXJzdGFuZGluZyBCcmFuZGUuYWknLFxuICAgICAgICBpdGVtczogW1xuICAgICAgICAgIHsgdGV4dDogJ1doYXQgaXMgQnJhbmRlLmFpPycsIGxpbms6ICcvc2VjdGlvbi0wLW1lbnRhbC1tb2RlbC91bmRlcnN0YW5kLWJyYW5kZScgfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRleHQ6ICdHZXR0aW5nIFN0YXJ0ZWQnLFxuICAgICAgICBjb2xsYXBzZWQ6IGZhbHNlLFxuICAgICAgICBpdGVtczogW1xuICAgICAgICAgIHsgdGV4dDogJ0NyZWF0ZSBZb3VyIEFjY291bnQnLCBsaW5rOiAnL3NlY3Rpb24tMS1nZXR0aW5nLXN0YXJ0ZWQvY3JlYXRlLXlvdXItYWNjb3VudCcgfSxcbiAgICAgICAgICB7IHRleHQ6ICdVbmRlcnN0YW5kIEJyYW5kIEROQScsIGxpbms6ICcvc2VjdGlvbi0xLWdldHRpbmctc3RhcnRlZC91bmRlcnN0YW5kLWJyYW5kLWRuYScgfSxcbiAgICAgICAgICB7IHRleHQ6ICdDb21wbGV0ZSBZb3VyIEJyYW5kIFByb2ZpbGUnLCBsaW5rOiAnL3NlY3Rpb24tMS1nZXR0aW5nLXN0YXJ0ZWQvY29tcGxldGUtYnJhbmQtcHJvZmlsZScgfSxcbiAgICAgICAgICB7IHRleHQ6ICdTZWxlY3QgQ29udGVudCBDaGFubmVscycsIGxpbms6ICcvc2VjdGlvbi0xLWdldHRpbmctc3RhcnRlZC9zZWxlY3QtY29udGVudC1jaGFubmVscycgfSxcbiAgICAgICAgICB7IHRleHQ6ICdVcGxvYWQgQnJhbmQgQXNzZXRzJywgbGluazogJy9zZWN0aW9uLTEtZ2V0dGluZy1zdGFydGVkL3VwbG9hZC1icmFuZC1hc3NldHMnIH0sXG4gICAgICAgICAgeyB0ZXh0OiAnVXNlIFJlZmVyZW5jZSBNYXRlcmlhbHMnLCBsaW5rOiAnL3NlY3Rpb24tMS1nZXR0aW5nLXN0YXJ0ZWQvcmVmZXJlbmNlLW1hdGVyaWFscycgfSxcbiAgICAgICAgICB7IHRleHQ6ICdCcmFuZCBWb2ljZSBBbmFseXplcicsIGxpbms6ICcvc2VjdGlvbi0xLWdldHRpbmctc3RhcnRlZC91bmRlcnN0YW5kLWJyYW5kLXZvaWNlLWFuYWx5emVyJyB9LFxuICAgICAgICAgIHsgdGV4dDogJ1VwZGF0ZSBCcmFuZCBWb2ljZScsIGxpbms6ICcvc2VjdGlvbi0xLWdldHRpbmctc3RhcnRlZC91cGRhdGUtYnJhbmQtdm9pY2UnIH0sXG4gICAgICAgICAgeyB0ZXh0OiAnVXBkYXRlIEJyYW5kIE1hdGVyaWFscycsIGxpbms6ICcvc2VjdGlvbi0xLWdldHRpbmctc3RhcnRlZC91cGRhdGUtYnJhbmQtbWF0ZXJpYWxzJyB9LFxuICAgICAgICAgIHsgdGV4dDogJ1VwZGF0ZSBSZWZlcmVuY2UgTWF0ZXJpYWxzJywgbGluazogJy9zZWN0aW9uLTEtZ2V0dGluZy1zdGFydGVkL3VwZGF0ZS1yZWZlcmVuY2UtbWF0ZXJpYWxzJyB9LFxuICAgICAgICAgIHsgdGV4dDogJ1VwZGF0ZSBNZXNzYWdpbmcgRnJhbWV3b3JrJywgbGluazogJy9zZWN0aW9uLTEtZ2V0dGluZy1zdGFydGVkL3VwZGF0ZS1tZXNzYWdpbmctZnJhbWV3b3JrJyB9LFxuICAgICAgICAgIHsgdGV4dDogJ1VwZGF0ZSBQcm9maWxlIFNldHRpbmdzJywgbGluazogJy9zZWN0aW9uLTEtZ2V0dGluZy1zdGFydGVkL3VwZGF0ZS1wcm9maWxlLXNldHRpbmdzJyB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGV4dDogJ0NvbnRlbnQgQWdlbnQnLFxuICAgICAgICBjb2xsYXBzZWQ6IHRydWUsXG4gICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgeyB0ZXh0OiAnVW5kZXJzdGFuZGluZyBDb250ZW50IEFnZW50JywgbGluazogJy9zZWN0aW9uLTItY29udGVudC1hZ2VudC91bmRlcnN0YW5kaW5nLWNvbnRlbnQtYWdlbnQnIH0sXG4gICAgICAgICAgeyB0ZXh0OiAnVXNlIENvbnRlbnQgQWdlbnQnLCBsaW5rOiAnL3NlY3Rpb24tMi1jb250ZW50LWFnZW50L3VzZS1jb250ZW50LWFnZW50JyB9LFxuICAgICAgICAgIHsgdGV4dDogJ0dldCBEYWlseSBSZWNvbW1lbmRhdGlvbnMnLCBsaW5rOiAnL3NlY3Rpb24tMi1jb250ZW50LWFnZW50L2dldC1kYWlseS1yZWNvbW1lbmRhdGlvbnMnIH0sXG4gICAgICAgICAgeyB0ZXh0OiAnUmVhZCBDb250ZW50IEJyaWVmcycsIGxpbms6ICcvc2VjdGlvbi0yLWNvbnRlbnQtYWdlbnQvcmVhZC1jb250ZW50LWJyaWVmcycgfSxcbiAgICAgICAgICB7IHRleHQ6ICdDdXN0b21pemUgYSBDb250ZW50IEJyaWVmJywgbGluazogJy9zZWN0aW9uLTItY29udGVudC1hZ2VudC9jdXN0b21pemUtY29udGVudC1icmllZicgfSxcbiAgICAgICAgICB7IHRleHQ6ICdTYXZlIHRvIEZvbGRlcnMnLCBsaW5rOiAnL3NlY3Rpb24tMi1jb250ZW50LWFnZW50L3NhdmUtdG8tZm9sZGVycycgfSxcbiAgICAgICAgICB7IHRleHQ6ICdNdWx0aXBsZSBDaGFubmVscycsIGxpbms6ICcvc2VjdGlvbi0yLWNvbnRlbnQtYWdlbnQvY29udGVudC1hZ2VudC1tdWx0aXBsZS1jaGFubmVscycgfSxcbiAgICAgICAgICB7IHRleHQ6ICdNdWx0aXBsZSBCcmFuZHMnLCBsaW5rOiAnL3NlY3Rpb24tMi1jb250ZW50LWFnZW50L2NvbnRlbnQtYWdlbnQtbXVsdGlwbGUtYnJhbmRzJyB9LFxuICAgICAgICAgIHsgdGV4dDogJ0FnZW50IHZzIE1hbnVhbCBDcmVhdGlvbicsIGxpbms6ICcvc2VjdGlvbi0yLWNvbnRlbnQtYWdlbnQvY29udGVudC1hZ2VudC12cy1tYW51YWwnIH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0ZXh0OiAnQ3JlYXRpbmcgQ29udGVudCcsXG4gICAgICAgIGNvbGxhcHNlZDogdHJ1ZSxcbiAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICB7IHRleHQ6ICdDcmVhdGUgYSBOZXcgUHJvamVjdCcsIGxpbms6ICcvc2VjdGlvbi0zLWNyZWF0aW5nLWNvbnRlbnQvY3JlYXRlLW5ldy1wcm9qZWN0JyB9LFxuICAgICAgICAgIHsgdGV4dDogJ0Nob29zZSBQcm9qZWN0IFRlbXBsYXRlcycsIGxpbms6ICcvc2VjdGlvbi0zLWNyZWF0aW5nLWNvbnRlbnQvY2hvb3NlLXByb2plY3QtdGVtcGxhdGVzJyB9LFxuICAgICAgICAgIHsgdGV4dDogJ0dlbmVyYXRlIFdlYnNpdGUgQ29weScsIGxpbms6ICcvc2VjdGlvbi0zLWNyZWF0aW5nLWNvbnRlbnQvZ2VuZXJhdGUtd2Vic2l0ZS1jb3B5JyB9LFxuICAgICAgICAgIHsgdGV4dDogJ0NyZWF0ZSBGYWNlYm9vayBUaHJlYWRzJywgbGluazogJy9zZWN0aW9uLTMtY3JlYXRpbmctY29udGVudC9jcmVhdGUtZmFjZWJvb2stdGhyZWFkcycgfSxcbiAgICAgICAgICB7IHRleHQ6ICdDcmVhdGUgTGlua2VkSW4gQ29udGVudCcsIGxpbms6ICcvc2VjdGlvbi0zLWNyZWF0aW5nLWNvbnRlbnQvY3JlYXRlLWxpbmtlZGluLWNvbnRlbnQnIH0sXG4gICAgICAgICAgeyB0ZXh0OiAnSW5jbHVkZSBJbWFnZXMnLCBsaW5rOiAnL3NlY3Rpb24tMy1jcmVhdGluZy1jb250ZW50L2luY2x1ZGUtaW1hZ2VzJyB9LFxuICAgICAgICAgIHsgdGV4dDogJ0VkaXQsIFJlZmluZSAmIFJlZ2VuZXJhdGUnLCBsaW5rOiAnL3NlY3Rpb24tMy1jcmVhdGluZy1jb250ZW50L2VkaXQtcmVmaW5lLXJlZ2VuZXJhdGUnIH0sXG4gICAgICAgICAgeyB0ZXh0OiAnVXNlIEJyYW5kIFZvaWNlIGluIFByb2plY3RzJywgbGluazogJy9zZWN0aW9uLTMtY3JlYXRpbmctY29udGVudC91c2UtYnJhbmQtdm9pY2UtaW4tcHJvamVjdHMnIH0sXG4gICAgICAgICAgeyB0ZXh0OiAnVXNlIENvbnRlbnQgSW1wcm92ZXInLCBsaW5rOiAnL3NlY3Rpb24tMy1jcmVhdGluZy1jb250ZW50L3VzZS1jb250ZW50LWltcHJvdmVyJyB9LFxuICAgICAgICAgIHsgdGV4dDogJ0NyZWF0ZSAmIE1hbmFnZSBTbmlwcGV0cycsIGxpbms6ICcvc2VjdGlvbi0zLWNyZWF0aW5nLWNvbnRlbnQvY3JlYXRlLW1hbmFnZS1zbmlwcGV0cycgfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRleHQ6ICdWaXN1YWwgQ29udGVudCcsXG4gICAgICAgIGNvbGxhcHNlZDogdHJ1ZSxcbiAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICB7IHRleHQ6ICdHZW5lcmF0ZSBPbi1CcmFuZCBJbWFnZXMnLCBsaW5rOiAnL3NlY3Rpb24tNC12aXN1YWwtY29udGVudC9nZW5lcmF0ZS1vbi1icmFuZC1pbWFnZXMnIH0sXG4gICAgICAgICAgeyB0ZXh0OiAnQ3VzdG9taXplIEltYWdlIFN0eWxlJywgbGluazogJy9zZWN0aW9uLTQtdmlzdWFsLWNvbnRlbnQvY3VzdG9taXplLWltYWdlLXN0eWxlJyB9LFxuICAgICAgICAgIHsgdGV4dDogJ1Zpc3VhbHMgZm9yIERpZmZlcmVudCBQbGF0Zm9ybXMnLCBsaW5rOiAnL3NlY3Rpb24tNC12aXN1YWwtY29udGVudC92aXN1YWwtY29udGVudC1wbGF0Zm9ybXMnIH0sXG4gICAgICAgICAgeyB0ZXh0OiAnTWFpbnRhaW4gVmlzdWFsIENvbnNpc3RlbmN5JywgbGluazogJy9zZWN0aW9uLTQtdmlzdWFsLWNvbnRlbnQvbWFpbnRhaW4tdmlzdWFsLWNvbnNpc3RlbmN5JyB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGV4dDogJ1Byb2plY3RzICYgT3JnYW5pemF0aW9uJyxcbiAgICAgICAgY29sbGFwc2VkOiB0cnVlLFxuICAgICAgICBpdGVtczogW1xuICAgICAgICAgIHsgdGV4dDogJ1Byb2plY3RzLCBGb2xkZXJzICYgQ2FtcGFpZ25zJywgbGluazogJy9zZWN0aW9uLTUtcHJvamVjdHMtb3JnYW5pemF0aW9uL3VuZGVyc3RhbmQtcHJvamVjdHMtZm9sZGVycycgfSxcbiAgICAgICAgICB7IHRleHQ6ICdGaW5kIFByb2plY3RzIHZpYSBTZWFyY2gnLCBsaW5rOiAnL3NlY3Rpb24tNS1wcm9qZWN0cy1vcmdhbml6YXRpb24vZmluZC1wcm9qZWN0cy1zZWFyY2gnIH0sXG4gICAgICAgICAgeyB0ZXh0OiAnUHJldmlldyBGaWxlcyAmIEltYWdlcycsIGxpbms6ICcvc2VjdGlvbi01LXByb2plY3RzLW9yZ2FuaXphdGlvbi9wcmV2aWV3LWZpbGVzLWltYWdlcycgfSxcbiAgICAgICAgICB7IHRleHQ6ICdFeHBvcnQgdG8gRE9DWCBvciBQREYnLCBsaW5rOiAnL3NlY3Rpb24tNS1wcm9qZWN0cy1vcmdhbml6YXRpb24vZXhwb3J0LWNvbnRlbnQnIH0sXG4gICAgICAgICAgeyB0ZXh0OiAnRXhwb3J0IFRhYmxlcyB0byBDU1YnLCBsaW5rOiAnL3NlY3Rpb24tNS1wcm9qZWN0cy1vcmdhbml6YXRpb24vZXhwb3J0LXRhYmxlcy1jc3YnIH0sXG4gICAgICAgICAgeyB0ZXh0OiAnT3JnYW5pemUgYXQgU2NhbGUnLCBsaW5rOiAnL3NlY3Rpb24tNS1wcm9qZWN0cy1vcmdhbml6YXRpb24vb3JnYW5pemUtYXQtc2NhbGUnIH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0ZXh0OiAnQ29sbGFib3JhdGlvbiAmIFNoYXJpbmcnLFxuICAgICAgICBjb2xsYXBzZWQ6IHRydWUsXG4gICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgeyB0ZXh0OiAnU2hhcmUgYW5kIFB1Ymxpc2gnLCBsaW5rOiAnL3NlY3Rpb24tNi1jb2xsYWJvcmF0aW9uL3NoYXJlLWFuZC1wdWJsaXNoJyB9LFxuICAgICAgICAgIHsgdGV4dDogJ1NoYXJlIENvbnRlbnQgUHJvamVjdHMnLCBsaW5rOiAnL3NlY3Rpb24tNi1jb2xsYWJvcmF0aW9uL3NoYXJlLWNvbnRlbnQtcHJvamVjdHMnIH0sXG4gICAgICAgICAgeyB0ZXh0OiAnUHVibGlzaCB0byBDaGFubmVscycsIGxpbms6ICcvc2VjdGlvbi02LWNvbGxhYm9yYXRpb24vcHVibGlzaC10by1jaGFubmVscycgfSxcbiAgICAgICAgICB7IHRleHQ6ICdDbGllbnQgUmV2aWV3ICYgQXBwcm92YWwnLCBsaW5rOiAnL3NlY3Rpb24tNi1jb2xsYWJvcmF0aW9uL21hbmFnZS1jbGllbnQtcmV2aWV3LWFwcHJvdmFsJyB9LFxuICAgICAgICAgIHsgdGV4dDogJ0xlYXZlICYgUmVzcG9uZCB0byBDb21tZW50cycsIGxpbms6ICcvc2VjdGlvbi02LWNvbGxhYm9yYXRpb24vbGVhdmUtcmVzcG9uZC1jb21tZW50cycgfSxcbiAgICAgICAgICB7IHRleHQ6ICdJbnRlcm5hbCB2cyBDbGllbnQgVmlld3MnLCBsaW5rOiAnL3NlY3Rpb24tNi1jb2xsYWJvcmF0aW9uL2ludGVybmFsLXZzLWNsaWVudC12aWV3cycgfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRleHQ6ICdBZ2VuY3kgUGxhbicsXG4gICAgICAgIGNvbGxhcHNlZDogdHJ1ZSxcbiAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICB7IHRleHQ6ICdVbmRlcnN0YW5kIHRoZSBBZ2VuY3kgUGxhbicsIGxpbms6ICcvc2VjdGlvbi03LWFnZW5jeS91bmRlcnN0YW5kLWFnZW5jeS1wbGFuJyB9LFxuICAgICAgICAgIHsgdGV4dDogJ0JyYW5kZS5haSBmb3IgQWdlbmNpZXMnLCBsaW5rOiAnL3NlY3Rpb24tNy1hZ2VuY3kvdXNlLWJyYW5kZS1mb3ItYWdlbmNpZXMnIH0sXG4gICAgICAgICAgeyB0ZXh0OiAnU2V0IFVwIEFnZW5jeSBXb3Jrc3BhY2UnLCBsaW5rOiAnL3NlY3Rpb24tNy1hZ2VuY3kvc2V0LXVwLWFnZW5jeS13b3Jrc3BhY2UnIH0sXG4gICAgICAgICAgeyB0ZXh0OiAnTWFuYWdlIE11bHRpcGxlIEJyYW5kcycsIGxpbms6ICcvc2VjdGlvbi03LWFnZW5jeS9tYW5hZ2UtbXVsdGlwbGUtYnJhbmRzJyB9LFxuICAgICAgICAgIHsgdGV4dDogJ0ludml0ZSBDbGllbnQgQ29sbGFib3JhdG9ycycsIGxpbms6ICcvc2VjdGlvbi03LWFnZW5jeS9pbnZpdGUtY2xpZW50LWNvbGxhYm9yYXRvcnMnIH0sXG4gICAgICAgICAgeyB0ZXh0OiAnQ2xpZW50IEFwcHJvdmFsIEZsb3dzJywgbGluazogJy9zZWN0aW9uLTctYWdlbmN5L2NsaWVudC1hcHByb3ZhbC1mbG93cycgfSxcbiAgICAgICAgICB7IHRleHQ6ICdDdXN0b20gQ2hlY2tsaXN0cyAmIFdvcmtmbG93cycsIGxpbms6ICcvc2VjdGlvbi03LWFnZW5jeS9jdXN0b20tY2hlY2tsaXN0cy13b3JrZmxvd3MnIH0sXG4gICAgICAgICAgeyB0ZXh0OiAnQ29udGVudCBBZ2VudCBmb3IgQ2xpZW50cycsIGxpbms6ICcvc2VjdGlvbi03LWFnZW5jeS9jb250ZW50LWFnZW50LWNsaWVudC1hY2NvdW50cycgfSxcbiAgICAgICAgICB7IHRleHQ6ICdBZ2VuY3kgRGFzaGJvYXJkJywgbGluazogJy9zZWN0aW9uLTctYWdlbmN5L2FnZW5jeS1kYXNoYm9hcmQnIH0sXG4gICAgICAgICAgeyB0ZXh0OiAnU2NhbGUgV2l0aG91dCBMb3NpbmcgQ29udHJvbCcsIGxpbms6ICcvc2VjdGlvbi03LWFnZW5jeS9zY2FsZS13aXRob3V0LWxvc2luZy1jb250cm9sJyB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGV4dDogJ0Rhc2hib2FyZCAmIE5hdmlnYXRpb24nLFxuICAgICAgICBjb2xsYXBzZWQ6IHRydWUsXG4gICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgeyB0ZXh0OiAnVXNlIHRoZSBEYXNoYm9hcmQnLCBsaW5rOiAnL3NlY3Rpb24tOC1kYXNoYm9hcmQvdXNlLWRhc2hib2FyZCcgfSxcbiAgICAgICAgICB7IHRleHQ6ICdDb250ZW50IENhbGVuZGFyJywgbGluazogJy9zZWN0aW9uLTgtZGFzaGJvYXJkL21hbmFnZS1jb250ZW50LWNhbGVuZGFyJyB9LFxuICAgICAgICAgIHsgdGV4dDogJ1F1aWNrIEFjdGlvbnMgJiBTaG9ydGN1dHMnLCBsaW5rOiAnL3NlY3Rpb24tOC1kYXNoYm9hcmQvcXVpY2stYWN0aW9ucy1zaG9ydGN1dHMnIH0sXG4gICAgICAgICAgeyB0ZXh0OiAnTmF2aWdhdGUgU2V0dGluZ3MnLCBsaW5rOiAnL3NlY3Rpb24tOC1kYXNoYm9hcmQvbmF2aWdhdGUtc2V0dGluZ3MnIH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0ZXh0OiAnQWNjb3VudCAmIFNldHRpbmdzJyxcbiAgICAgICAgY29sbGFwc2VkOiB0cnVlLFxuICAgICAgICBpdGVtczogW1xuICAgICAgICAgIHsgdGV4dDogJ0FjY2VzcyAmIFVwZGF0ZSBTZXR0aW5ncycsIGxpbms6ICcvc2VjdGlvbi05LWFjY291bnQvYWNjZXNzLXVwZGF0ZS1zZXR0aW5ncycgfSxcbiAgICAgICAgICB7IHRleHQ6ICdDaGFuZ2UgWW91ciBQYXNzd29yZCcsIGxpbms6ICcvc2VjdGlvbi05LWFjY291bnQvY2hhbmdlLXBhc3N3b3JkJyB9LFxuICAgICAgICAgIHsgdGV4dDogJ1RoZW1lICYgTGFuZ3VhZ2UnLCBsaW5rOiAnL3NlY3Rpb24tOS1hY2NvdW50L3RoZW1lLWxhbmd1YWdlLXByZWZlcmVuY2VzJyB9LFxuICAgICAgICAgIHsgdGV4dDogJ1VzZXIgUHJlZmVyZW5jZXMnLCBsaW5rOiAnL3NlY3Rpb24tOS1hY2NvdW50L21hbmFnZS11c2VyLXByZWZlcmVuY2VzJyB9LFxuICAgICAgICAgIHsgdGV4dDogJ01hbmFnZSBOb3RpZmljYXRpb25zJywgbGluazogJy9zZWN0aW9uLTktYWNjb3VudC9tYW5hZ2Utbm90aWZpY2F0aW9ucycgfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRleHQ6ICdIZWxwICYgRmVlZGJhY2snLFxuICAgICAgICBjb2xsYXBzZWQ6IHRydWUsXG4gICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgeyB0ZXh0OiAnVXNlIHRoZSBIZWxwIENlbnRlcicsIGxpbms6ICcvc2VjdGlvbi0xMC1oZWxwL3VzZS1oZWxwLWNlbnRlcicgfSxcbiAgICAgICAgICB7IHRleHQ6ICdTdWJtaXQgRmVlZGJhY2snLCBsaW5rOiAnL3NlY3Rpb24tMTAtaGVscC9zdWJtaXQtZmVlZGJhY2snIH0sXG4gICAgICAgICAgeyB0ZXh0OiAnUmVxdWVzdCBOZXcgRmVhdHVyZXMnLCBsaW5rOiAnL3NlY3Rpb24tMTAtaGVscC9yZXF1ZXN0LW5ldy1mZWF0dXJlcycgfSxcbiAgICAgICAgICB7IHRleHQ6ICdHZXQgU3VwcG9ydCcsIGxpbms6ICcvc2VjdGlvbi0xMC1oZWxwL2dldC1zdXBwb3J0JyB9LFxuICAgICAgICAgIHsgdGV4dDogJ1Byb2R1Y3QgVXBkYXRlcycsIGxpbms6ICcvc2VjdGlvbi0xMC1oZWxwL3VuZGVyc3RhbmQtcHJvZHVjdC11cGRhdGVzJyB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGV4dDogJ1Ryb3VibGVzaG9vdGluZycsXG4gICAgICAgIGNvbGxhcHNlZDogdHJ1ZSxcbiAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICB7IHRleHQ6ICdPdmVydmlldycsIGxpbms6ICcvdHJvdWJsZXNob290aW5nLycgfSxcbiAgICAgICAgICB7IHRleHQ6ICdBY2NvdW50ICYgTG9naW4nLCBsaW5rOiAnL3Ryb3VibGVzaG9vdGluZy9hY2NvdW50LWxvZ2luJyB9LFxuICAgICAgICAgIHsgdGV4dDogJ0JyYW5kIFZvaWNlIEFuYWx5c2lzJywgbGluazogJy90cm91Ymxlc2hvb3RpbmcvYnJhbmQtdm9pY2UtYW5hbHlzaXMnIH0sXG4gICAgICAgICAgeyB0ZXh0OiAnQ29udGVudCBBZ2VudCcsIGxpbms6ICcvdHJvdWJsZXNob290aW5nL2NvbnRlbnQtYWdlbnQnIH0sXG4gICAgICAgICAgeyB0ZXh0OiAnQ29udGVudCBHZW5lcmF0aW9uJywgbGluazogJy90cm91Ymxlc2hvb3RpbmcvY29udGVudC1nZW5lcmF0aW9uJyB9LFxuICAgICAgICAgIHsgdGV4dDogJ0ZpbGUgVXBsb2FkcycsIGxpbms6ICcvdHJvdWJsZXNob290aW5nL2ZpbGUtdXBsb2FkcycgfSxcbiAgICAgICAgICB7IHRleHQ6ICdQcmVtaXVtIEZlYXR1cmVzJywgbGluazogJy90cm91Ymxlc2hvb3RpbmcvcHJlbWl1bS1mZWF0dXJlcycgfSxcbiAgICAgICAgICB7IHRleHQ6ICdQdWJsaXNoaW5nICYgSW50ZWdyYXRpb25zJywgbGluazogJy90cm91Ymxlc2hvb3RpbmcvcHVibGlzaGluZy1pbnRlZ3JhdGlvbnMnIH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgIF0sXG5cbiAgICBzZWFyY2g6IHtcbiAgICAgIHByb3ZpZGVyOiAnbG9jYWwnLFxuICAgIH0sXG5cbiAgICBlZGl0TGluazoge1xuICAgICAgcGF0dGVybjogJ2h0dHBzOi8vZ2l0aHViLmNvbS9icmFuZGUtYWkvYnJhbmRlL2VkaXQvbWFpbi9kb2NzL2hlbHAtY2VudGVyLzpwYXRoJyxcbiAgICAgIHRleHQ6ICdFZGl0IHRoaXMgcGFnZSBvbiBHaXRIdWInLFxuICAgIH0sXG5cbiAgICBmb290ZXI6IHtcbiAgICAgIG1lc3NhZ2U6ICdCcmFuZGUuYWkgSGVscCBDZW50ZXInLFxuICAgICAgY29weXJpZ2h0OiAnXHUwMEE5IDIwMjYgQnJhbmRlLmFpLiBBbGwgcmlnaHRzIHJlc2VydmVkLicsXG4gICAgfSxcblxuICAgIHNvY2lhbExpbmtzOiBbXG4gICAgICB7IGljb246ICdnaXRodWInLCBsaW5rOiAnaHR0cHM6Ly9naXRodWIuY29tL2JyYW5kZS1haScgfSxcbiAgICBdLFxuICB9LFxufSlcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBd1osU0FBUyxvQkFBb0I7QUFFcmIsSUFBTyxpQkFBUSxhQUFhO0FBQUEsRUFDMUIsTUFBTTtBQUFBLElBQ0osT0FBTztBQUFBO0FBQUEs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
