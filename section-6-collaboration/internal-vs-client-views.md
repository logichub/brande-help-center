# Understand Internal vs Client Content Views

Your team members see the full Brande.ai interface. Clients see a simplified view focused only on reviewing projects. This separation keeps your internal operations private while giving clients visibility where it matters.

## Brand owner and internal team view

When you're logged in as a brand owner or internal team member, you see:

**Full interface:**

- Complete project list (all projects, folders, filters)
- Brand settings and Brand DNA management
- Content Agent recommendations and capabilities
- Content Calendar with scheduling tools
- Dashboard with analytics and insights
- Announcement messages and product updates
- Team management and invitations
- Integration setup and publishing controls
- Full commenting and collaboration tools

**Actions available:**

- Create, edit, delete projects
- Manage folders and organization
- Approve/unapprove projects
- Publish to integrations
- Set up team members and access
- Update brand guidelines and settings

This is the unrestricted, full-featured experience.

## Client collaborator view

When you share projects with a client or invite them as a "Client Collaborator," they see a limited interface:

**What clients see:**

- Only the projects you've shared with them
- Project content, images, and structure
- Comments and reply threads
- Approval status
- Project status (Draft, Review, Approved, Published, etc.)

**What clients cannot see:**

- Brand settings or Brand DNA
- Content Agent recommendations (interface hides these)
- Content Calendar or scheduling features
- Dashboard, analytics, or insights
- Announcement messages
- Team member list or invitations
- Integration or publishing controls
- Other projects (only shared ones visible)
- Folder structure (projects appear flat in their view)

**Actions available:**

- View projects (read-only, cannot edit)
- Leave and reply to comments
- Approve/unapprove projects (if plan includes project_approval)
- Download exports (DOCX) of approved content

This simplified interface keeps the focus on the work itself, not your backend.

## How client access looks

**Client logs in:** They see a streamlined dashboard with only the projects you've shared.

**Client reviews a project:** They see:

- Project name and status
- Full content (text, images, tables)
- Comments section for feedback
- Approve button (if enabled)

**Client sees nothing about:** Your brand strategy, team operations, or publishing setup.

## Why this matters

**For your brand:**

- Keeps internal strategy and Brand DNA private
- Hides work-in-progress and brainstorms
- Prevents clients from seeing team disagreements
- Maintains professionalism

**For clients:**

- Focused experience—no overwhelming features
- Clear, simple feedback interface
- No confusion from tools they don't need
- Transparency into project status without backend access

## Inviting clients

**Option 1: Share a one-off project link**

- Client gets a link, views one project
- No account needed
- Good for short-term feedback

**Option 2: Invite as client collaborator**

- Client gets an account with limited access
- Can see all projects you share over time
- Good for ongoing partnerships

Both limit visibility to the client view described above.

## Setting up client access

1. Go to Team Members (if inviting as member)
2. Click "Invite"
3. Enter client email
4. Choose role: "Client Collaborator" (not "Admin" or "Editor")
5. Assign projects they can access
6. Client receives invitation and creates account

Or:

1. Open a project
2. Click Share
3. Copy project link
4. Send to client

Either way, client sees only the client view.

## Changing roles

If a client becomes an internal team member:

1. Go to Team Members
2. Select the person
3. Change role from "Client Collaborator" to "Editor" or "Admin"
4. They now see the full interface

If an internal team member leaves and should become a client:

1. Change their role to "Client Collaborator"
2. They lose access to settings, calendar, etc.
3. They can still review and comment on assigned projects

## Visibility of features by role

| Feature            | Brand Owner | Team Member | Client Collaborator |
| ------------------ | ----------- | ----------- | ------------------- |
| All Projects       | ✓           | ✓           | Only shared         |
| Edit Content       | ✓           | ✓           | ✗ (read-only)       |
| Comments           | ✓           | ✓           | ✓                   |
| Approve/Unapprove  | ✓           | ✓           | ✓ (if enabled)      |
| Brand DNA Settings | ✓           | ✗           | ✗                   |
| Content Agent      | ✓           | ✓           | ✗ (hidden)          |
| Content Calendar   | ✓           | ✓           | ✗ (hidden)          |
| Integrations       | ✓           | ✓           | ✗ (hidden)          |
| Publishing         | ✓           | ✓           | ✗                   |
| Team Management    | ✓           | ✗           | ✗                   |

## Managing visibility

Brande.ai automatically hides irrelevant features for client collaborators. You don't need to do anything—the system handles it based on their role.

However, be aware:

- Never share your brand dashboard or settings pages with clients
- Use the Share modal for project sharing (not direct dashboard access)
- Treat internal operations and strategy as brand-confidential

## Related Topics

- [Manage Client Review and Approval](/section-6-collaboration/manage-client-review-approval)
- [Share Content Projects](/section-6-collaboration/share-content-projects)
- [Leave and Respond to Comments](/section-6-collaboration/leave-respond-comments)
