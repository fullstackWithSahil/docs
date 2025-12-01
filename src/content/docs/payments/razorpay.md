---
title: Razorpay integration
description: How to integrate razorpay as a payment gateway in buisnesstools.in.
---

Razorpay is a popular payment gateway in India. Follow these steps to connect your Razorpay account to your community.

## Prerequisites

*   A verified [Razorpay Account](https://dashboard.razorpay.com/).
*   **Test Mode** enabled for initial setup.

## Step 1: Get API Keys

You need to generate API keys to authenticate your application.

1.  Log in to your **Razorpay Dashboard**.
2.  Toggle the mode to **Test Mode** (top right corner) for development or **Live Mode** for production.
3.  Navigate to **Settings** > **API Keys**.
4.  Click on **Generate Key** (or Regenerate Key if you lost the old one).
5.  You will see a **Key ID** and a **Key Secret**.
    *   **Key ID**: Copy this and paste it into the **API Key** field in your settings.
    *   **Key Secret**: Copy this and paste it into the **API Secret** field in your settings.

> [!CAUTION]
> Never share your Key Secret publicly.

> ![Screenshot of Razorpay API Keys page](PLACEHOLDER_IMAGE_RAZORPAY_API_KEYS)
> *Navigate to Settings > API Keys to generate your credentials.*

## Step 2: Configure Webhooks

Webhooks allow us to receive real-time notifications about payments.

1.  In the Razorpay Dashboard, go to **Settings** > **Webhooks**.
2.  Click **+ Add New Webhook**.
3.  **Webhook URL**: You will find two URLs in your settings page:
    *   **Subscription URL**: Use this for subscription-related events.
    *   **One-time URL**: Use this for one-time payment events.
    *   *Note: You may need to create two separate webhooks if you use both.*
4.  **Secret**: Create a strong secret password.
    *   Paste this secret into the **Webhook Secret** field in your settings.
    *   Enter the same secret in the Razorpay Webhook setup form.
5.  **Active Events**: Select the following events:
    *   `payment.captured`
    *   `payment.failed`
    *   `subscription.charged`
    *   `subscription.halted`
    *   `subscription.cancelled`
    *   `order.paid`
6.  Click **Create Webhook**.

> ![Screenshot of Razorpay Webhook setup](PLACEHOLDER_IMAGE_RAZORPAY_WEBHOOK)
> *Setup your webhook with the URL provided in your settings.*

## Troubleshooting

### Signature Verification Failed
If you encounter a "Signature Verification Failed" error:
1.  Ensure the **Webhook Secret** in your Razorpay dashboard matches the one in your application settings exactly.
2.  Check if you are using the correct keys (Test vs Live) for the mode you are testing in.
