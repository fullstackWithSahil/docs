---
title: Leads api
description: How to add,update and remove leads using api
---
## Add Lead

**Endpoint:** `/api/v1/leads`

**Method:** `POST`

**Description:** Adds a new lead to your database

**Request Body (JSON):**

```json
{
  "name": "John Doe",
  "email": "john@gmail.com",
  "source": "website",
  "note": "Might be interested in React course"
}

```

**Response:**

```json
{
  "success": true,
  "data": {
    "lead_id": "lead_12345",
    "name": "John Doe",
    "email": "john@gmail.com",
    "source": "website",
    "note": "Might be interested in React course",
    "created_at": "2024-01-25T09:30:00Z"
  },
  "message": "Lead added successfully"
}

```

### Code Examples:

**JavaScript (Node.js):**

```jsx
const axios = require('axios');

async function addLead() {
  try {
    const response = await axios.post('https://buisnesstools.com/api/v1/leads', {
      name: 'John Doe',
      email: 'john@gmail.com',
      source: 'website',
      note: 'Might be interested in React course'
    }, {
      headers: {
        'Authorization': 'Bearer YOUR_API_KEY',
        'Content-Type': 'application/json'
      }
    });

    console.log('Lead added:', response.data);
  } catch (error) {
    console.error('Error adding lead:', error.response.data);
  }
}

```

**Python:**

```python
import requests

def add_lead():
    url = 'https://buisnesstools.com/api/v1/leads'
    headers = {
        'Authorization': 'Bearer YOUR_API_KEY',
        'Content-Type': 'application/json'
    }
    data = {
        'name': 'John Doe',
        'email': 'john@gmail.com',
        'source': 'website',
        'note': 'Might be interested in React course'
    }

    response = requests.post(url, json=data, headers=headers)

    if response.status_code == 200:
        print('Lead added:', response.json())
    else:
        print('Error:', response.json())

```

**cURL:**

```bash
curl -X POST https://buisnesstools.com/api/v1/leads \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@gmail.com",
    "source": "website",
    "note": "Might be interested in React course"
  }'

```

## Update Lead

**Endpoint:** `/api/v1/leads/:id`

**Method:** `PUT`

**Description:** Updates an existing lead in your database

**Path Parameter:** `:id` - The unique identifier of the lead to update

**Request Body (JSON):**

```json
{
  "email": "john.new@gmail.com",
  "note": "Followed up today - very interested in React course"
}

```

**Response:**

```json
{
  "success": true,
  "error": "",
  "data": {
    "lead_id": "lead_12345",
    "name": "John Doe",
    "email": "john.new@gmail.com",
    "source": "website",
    "note": "Followed up today - very interested in React course",
    "updated_at": "2024-01-26T14:20:00Z"
  },
  "message": "Lead updated successfully"
}

```

### Code Examples:

**JavaScript (Node.js):**

```jsx
const axios = require('axios');

async function updateLead(leadId) {
  try {
    const response = await axios.put(`https://buisnesstools.com/api/v1/leads/${leadId}`, {
      email: 'john.new@gmail.com',
      note: 'Followed up today - very interested in React course'
    }, {
      headers: {
        'Authorization': 'Bearer YOUR_API_KEY',
        'Content-Type': 'application/json'
      }
    });

    console.log('Lead updated:', response.data);
  } catch (error) {
    console.error('Error updating lead:', error.response.data);
  }
}

```

**Python:**

```python
import requests

def update_lead(lead_id):
    url = f'https://buisnesstools.com/api/v1/leads/{lead_id}'
    headers = {
        'Authorization': 'Bearer YOUR_API_KEY',
        'Content-Type': 'application/json'
    }
    data = {
        'email': 'john.new@gmail.com',
        'note': 'Followed up today - very interested in React course'
    }

    response = requests.put(url, json=data, headers=headers)

    if response.status_code == 200:
        print('Lead updated:', response.json())
    else:
        print('Error:', response.json())

```

**cURL:**

```bash
curl -X PUT https://buisnesstools.com/api/v1/leads/lead_12345 \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "email": "john.new@gmail.com",
    "note": "Followed up today - very interested in React course"
  }'

```

## Delete Lead

**Endpoint:** `/api/v1/leads/:id`

**Method:** `DELETE`

**Description:** Deletes a lead from your database

**Path Parameter:** `:id` - The unique identifier of the lead to delete

**Response:**

```json
{
  "success": true,
  "error": "",
  "message": "Lead deleted successfully"
}

```

### Code Examples:

**JavaScript (Node.js):**

```jsx
const axios = require('axios');

async function deleteLead(leadId) {
  try {
    const response = await axios.delete(`https://buisnesstools.com/api/v1/leads/${leadId}`, {
      headers: {
        'Authorization': 'Bearer YOUR_API_KEY'
      }
    });

    console.log('Lead deleted:', response.data);
  } catch (error) {
    console.error('Error deleting lead:', error.response.data);
  }
}

```

**Python:**

```python
import requests

def delete_lead(lead_id):
    url = f'https://buisnesstools.com/api/v1/leads/{lead_id}'
    headers = {
        'Authorization': 'Bearer YOUR_API_KEY'
    }

    response = requests.delete(url, headers=headers)

    if response.status_code == 200:
        print('Lead deleted:', response.json())
    else:
        print('Error:', response.json())

```

**cURL:**

```bash
curl -X DELETE https://buisnesstools.com/api/v1/leads/lead_12345 \
  -H "Authorization: Bearer YOUR_API_KEY"

```