---
title: Troubleshooting
description: This page answers some of the common questions that people have realted to payment integrations in buisnesstools.in.
---

If you are facing issues with your payment integration, check the common solutions below.

## General Issues

### Invalid Credentials
*   **Symptom**: "Authentication Failed" or "Invalid API Key" errors.
*   **Solution**: Double-check that you have copied the keys correctly. Ensure there are no extra spaces at the beginning or end of the key strings.

### Webhook Not Working
*   **Symptom**: Payments are successful but not reflecting in the community dashboard.
*   **Solution**:
    1.  Ensure the **Webhook Secret** matches exactly between your dashboard and the settings page.
    2.  Verify that the correct events are selected in the payment gateway dashboard.

### Test vs Live Mode Mismatch
*   **Symptom**: "Key does not exist" or transaction failures.
*   **Solution**: Ensure you are using **Test Mode** keys when testing and **Live Mode** keys for production. Do not mix them.

## Razorpay Specific

### Signature Verification Failed
*   **Solution**: This usually means the Webhook Secret is incorrect. Regenerate the secret in your settings and update it in the Razorpay dashboard.

## Dodo Payments Specific

### Payment Failed in Test Mode
*   **Solution**: Ensure you are using the test card details provided in the Dodo Payments documentation for testing.

## Testing Your Integration

1.  Enable **Test Mode** in your settings.
2.  Use the provided test card credentials (usually available in the gateway's docs).
3.  Make a small purchase (e.g., ₹1 or $1).
4.  Verify that the transaction appears in your community dashboard.
5.  Check if you received the confirmation email.

## Contact Support

If you are still facing issues, please contact our support team at **support@buisnesstools.in**.
