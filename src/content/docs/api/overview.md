---
title: API Overview
description: An overview of api and convensions
---
# API Documentation: Integrating with buisnesstools

Welcome to the buisnesstools API documentation! This guide will help course creators seamlessly integrate our platform with their existing tools and workflows. Our API allows you to programmatically send emails, manage email templates, and handle your leads database (add, update, delete).

## API Usage

All API requests must be authenticated using your API key. You will need to include your API key in the `Authorization` header of your requests using the `Bearer` token scheme.

**Base URL:** `https://buisnesstools.com/`

**Authentication Header Example:**

```
Authorization: Bearer YOUR_API_KEY

```

## Rate Limits

To ensure fair usage and prevent abuse, we have implemented the following rate limits on our API:

- **General API Requests:** You are limited to **10 requests every 10 seconds** across all API endpoints. If you exceed this limit, your requests may be temporarily throttled, and you will receive a `429 Too Many Requests` HTTP status code
- **Email Sending Limit:** You can send a maximum of **100 emails per day** using the API. This limit resets daily at 12:00 AM UTC. Exceeding this limit will result in a failed request with an appropriate error message

**Rate Limit Error Response:**

```json
{
  "success": false,
  "error": "Rate limit exceeded",
  "message": "Too many requests. Please try again later."
}

```
## API Response Convention

All API responses follow a consistent structure to ensure predictable and easy-to-handle responses:

```json
{
  "success": boolean,
  "error": string,
  "data": any,
  "message": string
}

```

- **success**: Boolean indicating if the request was successful
- **error**: Error message if the request failed (empty string if successful)
- **data**: Response data (optional, present only when there's data to return)
- **message**: Human-readable message describing the result

### Example Success Response:

```json
{
  "success": true,
  "data": {
    "email_id": "12345",
    "status": "sent"
  },
  "message": "Email sent successfully"
}

```

### Example Error Response:

```json
{
  "success": false,
  "error": "Invalid email address",
  "message": "Failed to send email due to invalid recipient address"
}

```

## Support

For additional support or questions about the API, please contact our support team or refer to our knowledge base.