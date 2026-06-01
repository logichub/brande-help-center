import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Brande.ai Help Center",
  description:
    "Your guide to using Brande.ai — the brand-aware content operating system.",

  // Set base to '/' for subdomain (help.brande.ai)
  // Set base to '/help-center/' for subdirectory (brande.ai/help-center/)
  base: "/",

  // Clean URLs: /section-1-getting-started/complete-brand-profile instead of .html
  cleanUrls: true,

  // Ignore README.md files (not meant for publishing)
  srcExclude: ["**/README.md", "**/TODO.md", "docs/**", "scripts/**"],

  // Warn on dead links instead of failing the build (some articles are still WIP)
  ignoreDeadLinks: true,

  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }],
    ["link", { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" }],
    ["link", { rel: "icon", type: "image/png", href: "/favicon.png" }],
    [
      "script",
      { async: "", src: "https://www.googletagmanager.com/gtag/js?id=TAG_ID" },
    ],
    [
      "script",
      {},
      `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'TAG_ID');`,
    ],
  ],

  themeConfig: {
    logo: {
      light: "/logo-light.png",
      dark: "/logo-dark.png",
    },
    siteTitle: false,

    nav: [
      { text: "Home", link: "/" },
      {
        text: "Getting Started",
        link: "/section-1-getting-started/create-your-account",
      },
      { text: "Troubleshooting", link: "/troubleshooting/" },
      { text: "Brande.ai", link: "https://brande.ai" },
    ],

    sidebar: [
      {
        text: "Understanding Brande.ai",
        items: [
          {
            text: "What is Brande.ai?",
            link: "/section-0-mental-model/understand-brande",
          },
        ],
      },
      {
        text: "Getting Started",
        collapsed: false,
        items: [
          {
            text: "Create Your Account",
            link: "/section-1-getting-started/create-your-account",
          },
          {
            text: "Understand Brand DNA",
            link: "/section-1-getting-started/understand-brand-dna",
          },
          {
            text: "Complete Your Brand Profile",
            link: "/section-1-getting-started/complete-brand-profile",
          },
          {
            text: "Select Content Channels",
            link: "/section-1-getting-started/select-content-channels",
          },
          {
            text: "Upload Brand Assets",
            link: "/section-1-getting-started/upload-brand-assets",
          },
          {
            text: "Use Reference Materials",
            link: "/section-1-getting-started/reference-materials",
          },
          {
            text: "Brand Voice Analyzer",
            link: "/section-1-getting-started/understand-brand-voice-analyzer",
          },
          {
            text: "Update Brand Voice",
            link: "/section-1-getting-started/update-brand-voice",
          },
          {
            text: "Update Brand Materials",
            link: "/section-1-getting-started/update-brand-materials",
          },
          {
            text: "Update Reference Materials",
            link: "/section-1-getting-started/update-reference-materials",
          },
          {
            text: "Update Messaging Framework",
            link: "/section-1-getting-started/update-messaging-framework",
          },
          {
            text: "Update Profile Settings",
            link: "/section-1-getting-started/update-profile-settings",
          },
        ],
      },
      {
        text: "Content Agent",
        collapsed: true,
        items: [
          {
            text: "Understanding Content Agent",
            link: "/section-2-content-agent/understanding-content-agent",
          },
          {
            text: "Use Content Agent",
            link: "/section-2-content-agent/use-content-agent",
          },
          {
            text: "Get Daily Recommendations",
            link: "/section-2-content-agent/get-daily-recommendations",
          },
          {
            text: "Read Content Briefs",
            link: "/section-2-content-agent/read-content-briefs",
          },
          {
            text: "Customize a Content Brief",
            link: "/section-2-content-agent/customize-content-brief",
          },
          {
            text: "Save to Folders",
            link: "/section-2-content-agent/save-to-folders",
          },
          {
            text: "Multiple Channels",
            link: "/section-2-content-agent/content-agent-multiple-channels",
          },
          {
            text: "Multiple Brands",
            link: "/section-2-content-agent/content-agent-multiple-brands",
          },
          {
            text: "Agent vs Manual Creation",
            link: "/section-2-content-agent/content-agent-vs-manual",
          },
        ],
      },
      {
        text: "Creating Content",
        collapsed: true,
        items: [
          {
            text: "Create a New Project",
            link: "/section-3-creating-content/create-new-project",
          },
          {
            text: "Choose Project Templates",
            link: "/section-3-creating-content/choose-project-templates",
          },
          {
            text: "Generate Website Copy",
            link: "/section-3-creating-content/generate-website-copy",
          },
          {
            text: "Create Facebook Threads",
            link: "/section-3-creating-content/create-facebook-threads",
          },
          {
            text: "Create LinkedIn Content",
            link: "/section-3-creating-content/create-linkedin-content",
          },
          {
            text: "Include Images",
            link: "/section-3-creating-content/include-images",
          },
          {
            text: "Edit, Refine & Regenerate",
            link: "/section-3-creating-content/edit-refine-regenerate",
          },
          {
            text: "Use Brand Voice in Projects",
            link: "/section-3-creating-content/use-brand-voice-in-projects",
          },
          {
            text: "Use Content Improver",
            link: "/section-3-creating-content/use-content-improver",
          },
          {
            text: "Create & Manage Snippets",
            link: "/section-3-creating-content/create-manage-snippets",
          },
        ],
      },
      {
        text: "Visual Content",
        collapsed: true,
        items: [
          {
            text: "Generate On-Brand Images",
            link: "/section-4-visual-content/generate-on-brand-images",
          },
          {
            text: "Customize Image Style",
            link: "/section-4-visual-content/customize-image-style",
          },
          {
            text: "Visuals for Different Platforms",
            link: "/section-4-visual-content/visual-content-platforms",
          },
          {
            text: "Maintain Visual Consistency",
            link: "/section-4-visual-content/maintain-visual-consistency",
          },
        ],
      },
      {
        text: "Projects & Organization",
        collapsed: true,
        items: [
          {
            text: "Projects, Folders & Campaigns",
            link: "/section-5-projects-organization/understand-projects-folders",
          },
          {
            text: "Find Projects via Search",
            link: "/section-5-projects-organization/find-projects-search",
          },
          {
            text: "Preview Files & Images",
            link: "/section-5-projects-organization/preview-files-images",
          },
          {
            text: "Export to DOCX or PDF",
            link: "/section-5-projects-organization/export-content",
          },
          {
            text: "Export Tables to CSV",
            link: "/section-5-projects-organization/export-tables-csv",
          },
          {
            text: "Organize at Scale",
            link: "/section-5-projects-organization/organize-at-scale",
          },
        ],
      },
      {
        text: "Collaboration & Sharing",
        collapsed: true,
        items: [
          {
            text: "Share and Publish",
            link: "/section-6-collaboration/share-and-publish",
          },
          {
            text: "Share Content Projects",
            link: "/section-6-collaboration/share-content-projects",
          },
          {
            text: "Publish to Channels",
            link: "/section-6-collaboration/publish-to-channels",
          },
          {
            text: "Client Review & Approval",
            link: "/section-6-collaboration/manage-client-review-approval",
          },
          {
            text: "Leave & Respond to Comments",
            link: "/section-6-collaboration/leave-respond-comments",
          },
          {
            text: "Internal vs Client Views",
            link: "/section-6-collaboration/internal-vs-client-views",
          },
        ],
      },
      {
        text: "Agency Plan",
        collapsed: true,
        items: [
          {
            text: "Understand the Agency Plan",
            link: "/section-7-agency/understand-agency-plan",
          },
          {
            text: "Brande.ai for Agencies",
            link: "/section-7-agency/use-brande-for-agencies",
          },
          {
            text: "Set Up Agency Workspace",
            link: "/section-7-agency/set-up-agency-workspace",
          },
          {
            text: "Manage Multiple Brands",
            link: "/section-7-agency/manage-multiple-brands",
          },
          {
            text: "Invite Client Collaborators",
            link: "/section-7-agency/invite-client-collaborators",
          },
          {
            text: "Client Approval Flows",
            link: "/section-7-agency/client-approval-flows",
          },
          {
            text: "Custom Checklists & Workflows",
            link: "/section-7-agency/custom-checklists-workflows",
          },
          {
            text: "Content Agent for Clients",
            link: "/section-7-agency/content-agent-client-accounts",
          },
          {
            text: "Agency Dashboard",
            link: "/section-7-agency/agency-dashboard",
          },
          {
            text: "Scale Without Losing Control",
            link: "/section-7-agency/scale-without-losing-control",
          },
        ],
      },
      {
        text: "Dashboard & Navigation",
        collapsed: true,
        items: [
          {
            text: "Use the Dashboard",
            link: "/section-8-dashboard/use-dashboard",
          },
          {
            text: "Content Calendar",
            link: "/section-8-dashboard/manage-content-calendar",
          },
          {
            text: "Quick Actions & Shortcuts",
            link: "/section-8-dashboard/quick-actions-shortcuts",
          },
          {
            text: "Navigate Settings",
            link: "/section-8-dashboard/navigate-settings",
          },
        ],
      },
      {
        text: "Account & Settings",
        collapsed: true,
        items: [
          {
            text: "Access & Update Settings",
            link: "/section-9-account/access-update-settings",
          },
          {
            text: "Change Your Password",
            link: "/section-9-account/change-password",
          },
          {
            text: "Theme & Language",
            link: "/section-9-account/theme-language-preferences",
          },
          {
            text: "User Preferences",
            link: "/section-9-account/manage-user-preferences",
          },
          {
            text: "Manage Notifications",
            link: "/section-9-account/manage-notifications",
          },
        ],
      },
      {
        text: "Help & Feedback",
        collapsed: true,
        items: [
          {
            text: "Use the Help Center",
            link: "/section-10-help/use-help-center",
          },
          { text: "Submit Feedback", link: "/section-10-help/submit-feedback" },
          {
            text: "Request New Features",
            link: "/section-10-help/request-new-features",
          },
          { text: "Get Support", link: "/section-10-help/get-support" },
          {
            text: "Product Updates",
            link: "/section-10-help/understand-product-updates",
          },
        ],
      },
      {
        text: "Troubleshooting",
        collapsed: true,
        items: [
          { text: "Overview", link: "/troubleshooting/" },
          { text: "Account & Login", link: "/troubleshooting/account-login" },
          {
            text: "Brand Voice Analysis",
            link: "/troubleshooting/brand-voice-analysis",
          },
          { text: "Content Agent", link: "/troubleshooting/content-agent" },
          {
            text: "Content Generation",
            link: "/troubleshooting/content-generation",
          },
          { text: "File Uploads", link: "/troubleshooting/file-uploads" },
          {
            text: "Premium Features",
            link: "/troubleshooting/premium-features",
          },
          {
            text: "Publishing & Integrations",
            link: "/troubleshooting/publishing-integrations",
          },
        ],
      },
    ],

    search: {
      provider: "local",
    },

    editLink: {
      pattern: "https://github.com/logichub/brande-help-center/edit/main/:path",
      text: "Edit this page on GitHub",
    },

    lastUpdated: {
      // text: 'Last updated',
      formatOptions: {
        dateStyle: "medium",
        timeStyle: "short",
      },
    },

    footer: {
      message: "Brande.ai Help Center",
      copyright: "© 2026 Brande.ai. All rights reserved.",
    },

    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/logichub' },
    // ],
  },
});
