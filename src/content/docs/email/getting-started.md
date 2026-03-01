---
title: Email Templates
description: A guide on creating and managing dynamic email templates in the Courses dashboard.
---

# 📧 Email Template Builder

The **Templates** feature allows you to create reusable email structures for your students or leads. By using dynamic variables, you can personalize each message automatically.

---

## ➕ Creating a New Template

1.  Navigate to the **Templates** section from the sidebar menu.
2.  Click on the **"+" icon** in the "Create a new Template" section.

![Screenshot of the 'Create a new Template' dashboard with the plus icon highlighted](https://assets.buisnesstools.in/docs/email-template/create-template.png)

3.  In the popup modal, enter a descriptive **Template Name** (e.g., "Welcome Email").
4.  Click **Create**.

![Screenshot of the 'Create a new Template' modal with the name 'sahil' being typed into the input field](https://assets.buisnesstools.in/docs/email-template/template-name.png)

---

## ✍️ Editing & Formatting

Once your template is created, you will enter the editor. Use the toolbar to style your message:

* **Headings:** Use the dropdown to select Heading 1, 2, or 3.
* **Text Styling:** Apply **Bold**, *Italics*, or <u>Underlines</u>.
* **Lists:** Organize information using bulleted or numbered lists.

![Screenshot showing the rich text editor with 'Heading 1' selected and a numbered list being created](https://assets.buisnesstools.in/docs/email-template/email-format.png)

---

## 🔀 Using Dynamic Variables

Variables allow you to send one template to 100 people while making each one feel personal.

### **Automatic Variables**
The system recognizes specific tags and pulls data directly from your student records:

* **`{{name}}`**: This variable is **automatically populated** with the receiver's first name.
    * *Input:* `Hi {{name}}, welcome!`
    * *Output:* `Hi Sahil, welcome!`

:::tip[Pro Tip]
Always ensure you use **double curly braces** `{{ }}`. The system will not recognize single braces or brackets.
:::

### **Manual Variables**
You can add other custom placeholders (e.g., `{{date}}` or `{{link}}`). 
> **Note:** Currently, variables other than `{{name}}` must be filled in manually before sending the email.

---

## 💾 Saving Your Work

After you have finished writing and formatting:

1.  Review your content for any typos.
2.  Click the **Save** button in the top right corner of the editor.
3.  A notification "Template created successfully!" will appear, and your template will now be visible in your library.

---

## 🛠 Troubleshooting

| Issue | Solution |
| :--- | :--- |
| **Variable not working** | Ensure there are no spaces inside the braces (e.g., use `{{name}}` not `{{ name }}`). |
| **Formatting looks odd** | Try highlighting the text and toggling the formatting buttons off and on to reset the HTML tags. |