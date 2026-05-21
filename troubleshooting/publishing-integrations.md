# Publishing and Integration Errors

## Publishing Shows "Failed" Status

**Direct Answer:** The content didn't publish to the platform. The most common causes are expired authentication tokens, changed platform permissions, or unsupported content format.

![Publishing and Integration Errors — Brande.ai](./images/publishing-integrations.jpg)


### How to Fix This

1. **Reconnect your integration**
   - Go to Integrations
   - Find the failed integration (shows "Error" badge)
   - Click "Reconnect" and reauthenticate with the platform
   - This refreshes your access token

2. **Check platform permissions**
   - Log into your connected platform directly
   - Verify Brande still has permission to post
   - Some platforms revoke app permissions automatically after 90 days
   - Reauthorize Brande in your platform settings

3. **Verify the content format is supported**
   - Some platforms have character limits or format restrictions
   - Break longer content into multiple posts
   - Remove unsupported formatting (certain HTML, special characters)

4. **Retry the publish**
   - Brande automatically retries failed publishes 3 times with exponential backoff
   - If still failing after retries, the integration needs reconnection

### Retry and Backoff Details

- Attempt 1: Immediate
- Attempt 2: 5 minutes later
- Attempt 3: 25 minutes later
- After 3 failures: Manual retry required

### If This Doesn't Work

- **Check platform status pages** — The platform itself might be down
- **Review the error message** — Click the failed publish for error details
- **Contact support with error details** — Provide the exact error message

---

## Integration Shows "Expired" Status

**Direct Answer:** Your authentication token expired. You must reauthenticate to publish again.

### How to Fix This

1. **Reconnect the integration**
   - Go to Integrations
   - Click the "Expired" integration
   - Select "Reconnect"
   - Sign into the platform and approve access again

2. **Set automatic reauthentication** (if available)
   - Some platforms allow Brande to refresh tokens automatically
   - During reconnection, enable "Allow automatic refresh" if offered
   - This prevents future expirations

3. **Check platform session timeout**
   - Some platforms expire tokens after 90 days of inactivity
   - Reconnect regularly if you publish infrequently
   - More frequent connections reduce expiration issues

### When Integrations Expire

- OAuth tokens typically last 90 days
- Some platforms refresh tokens automatically (Facebook, Instagram)
- Others require manual reconnection (LinkedIn, Twitter)
- Check your platform's documentation for token validity

### If This Doesn't Work

- **Log out and back in to the platform** — Clear the platform's session
- **Try again immediately after reconnecting** — Sometimes tokens need 30 seconds to activate
- **Use a different platform account** — If one account is causing issues

---

## Integration Shows "Revoked" Status

**Direct Answer:** You manually disconnected this integration in the platform settings, or the platform revoked Brande's access.

### How to Fix This

1. **Reconnect the integration**
   - Go to Integrations
   - Click "Revoked" integration
   - Select "Reconnect"
   - Sign in and reapprove Brande's access

2. **Check the platform's app permissions**
   - Log into your connected platform
   - Go to Settings > Apps or Connected Apps
   - Look for Brande and verify permissions are enabled
   - Grant permission if it was revoked

3. **Verify your account status**
   - Some platforms revoke app access if your account is inactive
   - Confirm your platform account is in good standing
   - Reconnect after resolving any account issues

### Why Platforms Revoke Access

- You removed the app in platform settings
- Your platform account was suspended or deleted
- The platform's security policy revoked the app
- You changed your password (some platforms auto-revoke for security)

### If This Doesn't Work

- **Try reconnecting from the platform side** — Some platforms have better reconnection flow from their app settings
- **Create a new app token** (for API-based integrations) — Delete the old token and generate a new one
- **Contact platform support** — If they're blocking Brande's access

---

## Integration Authenticates But Won't Let Me Select a Platform Account

**Direct Answer:** The authentication worked, but you need to select which specific account or channel to publish to.

### How to Fix This

1. **Select your account**
   - After authenticating, a list appears of your platform accounts
   - Click the account where you want to publish
   - Confirm the selection

2. **Verify you have multiple accounts**
   - Some platforms show only one account by default
   - If you don't see your account, you may not be logged into the right one
   - Log out, log back in to the correct account, then reconnect

3. **Check account access permissions**
   - You must have post/publish permissions on the selected account
   - Admin or editor roles work; viewer-only roles don't
   - Ask the account owner to grant you posting permissions

### If This Doesn't Work

- **Reconnect the integration** — Start over from Integrations > Add
- **Use a different platform account** — Try connecting a different account you own
- **Contact support with your platform type** — We can verify the authentication flow

---

## Related Topics

- [Publish Content Directly to Channels](/section-6-collaboration/publish-to-channels)
- [Share and Publish Content](/section-6-collaboration/share-and-publish)
- [Navigate the Settings Panel](/section-8-dashboard/navigate-settings)
- [Get Support from Brande.ai](/section-10-help/get-support)