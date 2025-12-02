---
title: Dodo payments integration
description: How to integrate dodo payments as a payment gateway in buisnesstools.in.
---

Dodo Payments offers simplified payment processing for global transactions.

## Prerequisites

*   A [Dodo Payments Account](https://dodopayments.com/).
*   **Live Mode** enabled for receiving real payments.

## Step 1: Get Credentials

1.  Log in to your **Dodo Payments Dashboard**.
2.  Switch to **Live Mode** (toggle in the dashboard) for production.
3.  Navigate to **Developer** > **API Keys**.
![Dashboard](https://assets.buisnesstools.in/docs/payments/dashboard.png)
4.  **Merchant ID**: Copy your Merchant ID.
    * This is an **optional** field you don't have to provide it.
    *   Paste this into the **Merchant ID** field in your settings.
5.  **API Key**: Generate a new API Key.
    *   Paste this into the **API Key** field in your settings.
![Api keys](https://assets.buisnesstools.in/docs/payments/api-keys.png)

> [!IMPORTANT]
> Ensure you are copying the keys corresponding to the correct mode (Test or Live).

> ![Screenshot of Dodo Payments Credentials](PLACEHOLDER_IMAGE_DODO_CREDENTIALS)
> *Find your Merchant ID and API Key in the dashboard.*

## Step 2: Configure Webhooks

1.  Go to the **Webhooks** section in your Dodo Dashboard.
2.  Click **Create Webhook**.
3.  **Webhook URL**: Copy the **Webhook URL** from your settings page.
![webhook](https://assets.buisnesstools.in/docs/payments/webhook.png)
4.  **Webhook Secret**:
    *   Generate a secret in the Dodo Dashboard.
    *   Copy and paste this into the **Webhook secret** field in your settings.
5.  **Events**: Select the following events:
    *   `payment.success`
    *   `payment.failed`
    ![payments](https://assets.buisnesstools.in/docs/payments/payments.png)
    *   `subscription.created`
    *   `subscription.active`
    *   `subscription.cancelled`
    ![subscriptions](https://assets.buisnesstools.in/docs/payments/subscriptions.png)
6.  Save the webhook configuration.