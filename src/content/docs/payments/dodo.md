---
title: Dodo payments integration
description: How to integrate dodo payments as a payment gateway in buisnesstools.in.
---

Dodo Payments offers simplified payment processing for global transactions.

## Prerequisites

*   A [Dodo Payments Account](https://dodopayments.com/).
*   **Test Mode** enabled for initial setup.

## Step 1: Get Credentials

1.  Log in to your **Dodo Payments Dashboard**.
2.  Switch to **Test Mode** (toggle in the dashboard) for development.
3.  Navigate to **Developer** > **API Keys**.
4.  **Merchant ID**: Copy your Merchant ID.
    *   Paste this into the **Merchant ID** field in your settings.
5.  **API Key**: Generate a new API Key.
    *   Paste this into the **API Key** field in your settings.

> [!IMPORTANT]
> Ensure you are copying the keys corresponding to the correct mode (Test or Live).

> ![Screenshot of Dodo Payments Credentials](PLACEHOLDER_IMAGE_DODO_CREDENTIALS)
> *Find your Merchant ID and API Key in the dashboard.*

## Step 2: Configure Webhooks

1.  Go to the **Webhooks** section in your Dodo Dashboard.
2.  Click **Create Webhook**.
3.  **Webhook URL**: Copy the **Subscription URL** or **One time URL** from your settings page.
4.  **Webhook Secret**:
    *   Generate a secret in the Dodo Dashboard.
    *   Copy and paste this into the **Webhook secret** field in your settings.
5.  **Events**: Select the following events:
    *   `payment.success`
    *   `payment.failed`
    *   `subscription.created`
    *   `subscription.active`
    *   `subscription.cancelled`
6.  Save the webhook configuration.

> ![Screenshot of Dodo Payments Webhook](PLACEHOLDER_IMAGE_DODO_WEBHOOK)
> *Configure the webhook to receive payment updates.*