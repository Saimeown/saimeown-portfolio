# Contact Form Setup Guide

## Overview
The contact form uses EmailJS to send emails directly from the frontend without requiring a backend server.

## Setup Instructions

### 1. Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### 2. Create Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. Note the **Service ID** (e.g., `service_abc123`)

### 3. Create Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Create a template with the following variables:
   ```
   From: {{name}} <{{email}}>
   Subject: New Contact Form Submission
   
   Name: {{name}}
   Email: {{email}}
   Website: {{website}}
   Message: {{message}}
   ```
4. Note the **Template ID** (e.g., `template_xyz789`)

### 4. Get Public Key
1. Go to "Integration" or "API Keys" in your dashboard
2. Copy your **Public Key** (e.g., `abc123xyz789`)

### 5. Configure Environment Variables
1. Open the `.env` file in your project root
2. Replace the placeholder values:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_actual_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_actual_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_actual_public_key
   ```

### 6. Test the Form
1. Start your development server: `npm run dev`
2. Navigate to the contact section
3. Fill out and submit the form
4. Check your email for the test message

## Template Variables
The form sends the following data to your email template:
- `name` - User's name (required)
- `email` - User's email (required)  
- `website` - User's website (optional)
- `message` - User's message (required)

## Troubleshooting
- Make sure all environment variables are set correctly
- Check that your EmailJS service is properly configured
- Verify your email template uses the correct variable names
- Check the browser console for error messages
- Ensure you're not hitting EmailJS rate limits (100 emails/month on free plan)

## Features
- ✅ Form validation (required fields)
- ✅ Loading states during submission
- ✅ Success/error feedback messages
- ✅ Automatic form reset after successful submission
- ✅ Proper email formatting with user's contact details