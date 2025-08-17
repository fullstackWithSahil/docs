---
title: API key management
description: An overview of api and convensions
---

API keys are essential for authenticating your requests to our API. Treat them like passwords and keep them secure.

## Accessing API Key Management

1. Log in to your buisnesstools account
2. Navigate to the **"APIs"** section in the left-hand sidebar. This will take you to the "API Key Management" page

## Creating a New API Key

1. On the "API Key Management" page, click the **"+ Create New Key"** button
2. A "Create New API Key" dialog box will appear
3. **Key Name:** Enter a descriptive name for your API key (e.g., "Production Email API," "Lead Management Integration"). This helps you identify the purpose of each key
4. **Permissions:** Select the specific permissions you want to grant to this API key. You can choose from:
    - **Send Emails:** Allows sending emails through the API
    - **Manage Email Templates:** Allows reading, adding, updating, and deleting email templates
    - **Read leads:** Allows reading lead data
    - **Add/Update leads:** Allows adding new leads and updating existing ones
    - **Delete leads:** Allows deleting leads from your database
5. Click the **"Create API Key"** button
6. Your new API key will be generated and displayed. **Important:** Copy this key immediately as it will not be shown again for security reasons. If you lose it, you'll need to generate a new one

## Managing Existing API Keys

On the "API Key Management" page, you will see a table listing all your API keys with the following information:

- **Name:** The name you assigned to the key
- **API Key:** A partially obscured view of your API key. You can click the "eye" icon to reveal the full key for copying (use with caution in secure environments)
- **Permissions:** The permissions granted to that specific key
- **Created:** The date and time the key was created
- **Last Used:** The last time the key was used for an API request
- **Status:** Indicates if the key is active or inactive
- **Actions:**
    - **Activate/Deactivate:** Toggle the status of your API key to enable or disable its use
    - **Delete:** Permanently remove an API key