---
title: Payment integrations in buisnesstools.in
description: This is a guide to help you set up payment processing for your community using various payment gateways.
---

# Payment Integration Guide

This guide will help you set up payment processing for your community using our supported payment gateways. We currently support **Razorpay** and **Dodo Payments**.

## Supported Gateways

| Gateway | Best For | Region |
| :--- | :--- | :--- |
| **Razorpay** | Indian Businesses | India |
| **Dodo Payments** | Global Payments | International |

## General Prerequisites

Before you begin integrating any payment gateway, ensure you have the following:

1.  **Business Account**: You must have a registered business account with the respective payment provider.
2.  **KYC Verification**: Complete your KYC (Know Your Customer) verification with the provider to activate live payments.
3.  **Bank Account Details**: Have your business bank account details ready for settlements.

## Test vs Live Mode

Both Razorpay and Dodo Payments offer two modes of operation:

*   **Test Mode**: Use this mode during development and testing. It allows you to simulate transactions without using real money. You will use "Test Keys" for this.
*   **Live Mode**: Use this mode when you are ready to accept real payments from customers. You will need to switch to "Live Keys" and ensure your account is fully activated.

> [!IMPORTANT]
> Always test your integration in **Test Mode** first before switching to **Live Mode**.

## Next Steps

Choose your preferred payment gateway to proceed with the integration:

*   [Integrate Razorpay](/payments/razorpay)
*   [Integrate Dodo Payments](/payments/dodo)