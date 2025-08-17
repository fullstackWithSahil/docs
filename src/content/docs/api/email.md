---
title: Email api
description: How to send emails and email templates using api
---
## Send Email

**Endpoint:** `/api/v1/email/send`

**Method:** `POST`

**Description:** Sends an email to a specified recipient

**Request Body (JSON):**

```json
{
  "to": "student@example.com",
  "subject": "Welcome to the course!",
  "from": "teacher@example.com",
  "html": "<p>This is an example!</p>"
}

```

**Response:**

```json
{
  "success": true,
  "message": "Email sent successfully"
}

```

### Code Examples:

**JavaScript (Node.js):**

```jsx
const axios = require('axios');

async function sendEmail() {
  try {
    const response = await axios.post('https://buisnesstools.com/api/v1/email/send', {
      to: 'student@example.com',
      subject: 'Welcome to the course!',
      from: 'teacher@example.com',
      html: '<p>This is an example!</p>'
    }, {
      headers: {
        'Authorization': 'Bearer YOUR_API_KEY',
        'Content-Type': 'application/json'
      }
    });

    console.log('Email sent:', response.data);
  } catch (error) {
    console.error('Error sending email:', error.response.data);
  }
}

```

**Python:**

```python
import requests

def send_email():
    url = 'https://buisnesstools.com/api/v1/email/send'
    headers = {
        'Authorization': 'Bearer YOUR_API_KEY',
        'Content-Type': 'application/json'
    }
    data = {
        'to': 'student@example.com',
        'subject': 'Welcome to the course!',
        'from': 'teacher@example.com',
        'html': '<p>This is an example!</p>'
    }

    response = requests.post(url, json=data, headers=headers)

    if response.status_code == 200:
        print('Email sent:', response.json())
    else:
        print('Error:', response.json())

```

**cURL:**

```bash
curl -X POST https://buisnesstools.com/api/v1/email/send \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "to": "student@example.com",
    "subject": "Welcome to the course!",
    "from": "teacher@example.com",
    "html": "<p>This is an example!</p>"
  }'

```

**PHP:**

```php
<?php
$url = 'https://buisnesstools.com/api/v1/email/send';
$data = [
    'to' => 'student@example.com',
    'subject' => 'Welcome to the course!',
    'from' => 'teacher@example.com',
    'html' => '<p>This is an example!</p>'
];

$options = [
    'http' => [
        'header' => [
            'Authorization: Bearer YOUR_API_KEY',
            'Content-Type: application/json'
        ],
        'method' => 'POST',
        'content' => json_encode($data)
    ]
];

$context = stream_context_create($options);
$response = file_get_contents($url, false, $context);
$result = json_decode($response, true);

if ($result['success']) {
    echo "Email sent: " . $result['message'];
} else {
    echo "Error: " . $result['error'];
}
?>

```

## List Templates

**Endpoint:** `/api/v1/email/templates`

**Method:** `GET`

**Description:** Retrieves a list of available email templates

**Response:**

```json
{
  "success": true,
  "error": "",
  "data": [
    {
        "id": "1",
        "name": "Welcome Email",
        "body": "Welcome to {{course_name}}!",
        "variables":["course_name"],
        "created_at": "2024-01-15T10:30:00Z"
    },
    {
        "id": "2",
        "name": "Course Completion",
        "body": "Congratulations on completing {{course_name}}!",
        "variables":["course_name"],
        "created_at": "2024-01-20T14:15:00Z"
    }
  ],
  "message": "Templates retrieved successfully"
}

```

### Code Examples:

**JavaScript (Node.js):**

```jsx
const axios = require('axios');

async function listTemplates() {
  try {
    const response = await axios.get('https://buisnesstools.com/api/v1/email/template', {
      headers: {
        'Authorization': 'Bearer YOUR_API_KEY'
      }
    });

    console.log('Templates:', response.data.data);
  } catch (error) {
    console.error('Error fetching templates:', error.response.data);
  }
}

```

**Python:**

```python
import requests

def list_templates():
    url = 'https://buisnesstools.com/api/v1/email/template'
    headers = {
        'Authorization': 'Bearer YOUR_API_KEY'
    }

    response = requests.get(url, headers=headers)

    if response.status_code == 200:
        templates = response.json()['data']
        for template in templates:
            print(f"Template: {template['name']} (ID: {template['id']})")
    else:
        print('Error:', response.json())

```

**cURL:**

```bash
curl -X GET https://buisnesstools.com/api/v1/email/templates \
  -H "Authorization: Bearer YOUR_API_KEY"

```

## Send Template Email

**Endpoint:** `/api/v1/email/template`

**Method:** `POST`

**Description:** Sends an email using a pre-defined template

**Request Body (JSON):**

```json
{
  "to": ["student1@example.com","student2@example.com"],
  "template_id": "template_123",
  "variables": {
    "student_name": "John Doe",
    "course_name": "Mastering React"
  }
}

```

**Response:**

```json
{
  "success": true,
  "message": "email sent successfully"
}

```

### Code Examples:

**JavaScript (Node.js):**

```jsx
const axios = require('axios');

async function sendTemplateEmail() {
  try {
    const response = await axios.post('https://buisnesstools.com/api/v1/email/send-template', {
      to: 'student@example.com',
      template_id: 'template_123',
      variables: {
        student_name: 'John Doe',
        course_name: 'Mastering React'
      }
    }, {
      headers: {
        'Authorization': 'Bearer YOUR_API_KEY',
        'Content-Type': 'application/json'
      }
    });

    console.log('Template email sent:', response.data);
  } catch (error) {
    console.error('Error sending template email:', error.response.data);
  }
}

```

**Python:**

```python
import requests

def send_template_email():
    url = 'https://buisnesstools.com/api/v1/email/send-template'
    headers = {
        'Authorization': 'Bearer YOUR_API_KEY',
        'Content-Type': 'application/json'
    }
    data = {
        'to': 'student@example.com',
        'template_id': 'template_123',
        'variables': {
            'student_name': 'John Doe',
            'course_name': 'Mastering React'
        }
    }

    response = requests.post(url, json=data, headers=headers)

    if response.status_code == 200:
        print('Template email sent:', response.json())
    else:
        print('Error:', response.json())

```

**cURL:**

```bash
curl -X POST https://buisnesstools.com/api/v1/email/send-template \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "to": "student@example.com",
    "template_id": "template_123",
    "variables": {
      "student_name": "John Doe",
      "course_name": "Mastering React"
    }
  }'

```