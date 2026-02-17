---
title: Common Errors
description: Common API errors and how to resolve them
---

When integrating with our APIs, you may encounter the following HTTP status codes.  
Use the descriptions and guidance below to understand the cause and how to fix it.

## Status Codes

| Code | Description |
|------|-------------|
| **200** | **Success.** The request was processed successfully and the action was completed. |
| **400+** | **Client error.** The request is invalid or references a resource that does not exist (for example, sending an email template that hasn’t been created). Check the error message in the response for details. |
| **401** | **Authentication error.** The API key is missing, invalid, or not passed as a `Bearer` token in the `Authorization` header. |
| **403** | **Permission denied.** The API key does not have permission to perform the requested action. |
| **429** | **Rate limit exceeded.** You can send up to **10 requests per 10 seconds**. Retry after a short delay or implement request throttling. |
| **500** | **Server error.** Something went wrong on our side. If the issue persists, please contact support. |
