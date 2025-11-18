# PACCAR Apigee HR Nintex Xtension

This directory contains the Nintex Xtension OpenAPI 2.0 specification for integrating with the PACCAR Apigee HR API.

## Files

- `apigee.json` - The OpenAPI 2.0 specification file ready to upload to Nintex Workflow

## Overview

This Xtension provides integration with the PACCAR Apigee HR API, specifically for managing HR011 employee details forms.

### Features

- **OAuth2 Authentication** - Uses application (client credentials) flow
- **Connection Validation** - Automatically validates credentials when creating a connection
- **Three Main Operations:**
  1. **Get access token** - Retrieve a token using your saved connection (for Nintex Forms)
  2. **Submit HR011 form** - Create, update, or delete employee records
  3. **Get HR011 form** - Retrieve employee record details

## Authentication

Nintex uses Basic Authentication to connect to the Apigee API. When you create a connection:

1. **Username**: Your OAuth2 Client ID
2. **Password**: Your OAuth2 Client Secret
3. Nintex sends these credentials with each request
4. The "Get access token" operation retrieves a fresh token from Apigee using your connection

## How to Upload to Nintex Workflow

1. Log in to your Nintex Workflow (formerly Nintex Automation Cloud) tenant
2. Navigate to **Xtensions** in the left menu
3. Click **Add custom connector**
4. Choose **Upload JSON file**
5. Upload the `apigee.json` file from this directory
6. Review the operations and click **Publish**

## Configuration

### OAuth2 Setup

When creating a connection in Nintex Workflow, you'll need:

- **Client ID** - Your OAuth2 application client ID
- **Client Secret** - Your OAuth2 application client secret
- **Token URL** - Already configured as: `https://api-qa.digital.paccar.cloud/security/oauth2/v1/token`

The connection will be automatically validated when created.

### Environment

- **Base URL**: `https://api-qa.digital.paccar.cloud/sap/api/v1/hr`
- **SAP Client**: Default is `170` (can be changed per request)

## Operations

### Get Access Token

**🎯 Primary Use Case: Nintex Forms Integration**

This operation retrieves an OAuth2 access token using your saved connection. No client credentials are exposed - Nintex handles authentication server-side.

**Required Fields:**
- None (uses your saved connection)

**Returns:**
- Access token (use this in Authorization header as `Bearer <token>`)
- Token type (typically "Bearer")
- Expires in (seconds until token expires)
- Scope (granted permissions)

**How it works:**
1. Your Nintex Form triggers a workflow
2. Workflow calls "Get access token" with your saved connection
3. Nintex uses the connection's credentials server-side to get a token
4. Token is returned to the workflow
5. Workflow passes token back to your form
6. Form uses token in Web Request Plugin

**Security Benefits:**
- ✅ Client ID and Secret never exposed to the browser
- ✅ Token retrieval happens server-side via Nintex
- ✅ Form only receives the token, not the credentials

### Submit HR011 Form

Creates, updates, or deletes employee records in SAP.

**Required Fields:**
- Form type (default: HR011)
- Personnel number (8-digit employee ID)
- Operation type (Create/Update/Delete)

**Optional Fields:**
- Start date (YYYYMMDD format)
- Action reason (2-digit code)
- Email address
- Submitter email

**Example Workflow Use:**
1. Collect employee data from a Nintex Form
2. Use this action to submit the data to SAP
3. Store the response metadata for record-keeping

### Get HR011 Form

Retrieves existing employee record details from SAP.

**Required Fields:**
- Personnel number (8-digit employee ID)

**Returns:**
- Complete employee record including metadata
- All form fields (email, dates, action reasons, etc.)

## Best Practices

Following Nintex Xtension best practices:

✅ **Clear naming** - Operations use verb-noun format (Submit form, Get form)
✅ **Validation** - Connection validated on creation
✅ **Field validation** - Personnel numbers and dates validated with patterns
✅ **User-friendly labels** - Uses x-ntx-oneOf for operation type dropdown
✅ **Sub-labels** - Provides format guidance for dates and IDs
✅ **Required fields** - Properly marked with minLength validation

## Field Formats

- **Personnel Number**: 8 digits (e.g., `00260090`)
- **Start Date**: YYYYMMDD (e.g., `20251215`)
- **Action Reason**: 2 digits (e.g., `07`)
- **Operation**: 
  - `1` = Create
  - `2` = Update
  - `3` = Delete

## Testing

After uploading:

1. **Create a Connection:**
   - Go to Xtensions → Connections
   - Click "Add connection" for PACCAR Apigee HR
   - Enter your Client ID and Client Secret
   - Connection will be automatically validated
   - Save the connection

2. **Test Get Access Token:**
   - Create a test workflow
   - Add "Get access token" action
   - Select your saved connection
   - Run the workflow
   - Verify you receive an access_token in the response
   - This token can be passed to your Nintex Form

3. **Test Submit HR011 Form:**
   - Create a test workflow
   - Add "Submit HR011 form" action
   - Select your saved connection
   - Fill in test data (use a test personnel number)
   - Run the workflow and verify the response
   - Check the SAP system to confirm the data was received

4. **Test Get HR011 Form:**
   - Create a test workflow
   - Add "Get HR011 form" action
   - Select your saved connection
   - Enter a personnel number
   - Run and verify employee data is returned

## Troubleshooting

### Connection Validation Fails

**Error**: `[XAPI.InputValidationErrorCode] Connection validation failed.`

**Possible Causes:**

1. **OAuth2 Flow Mismatch:**
   - This Xtension is configured for OAuth2 `accessCode` flow (authorization code)
   - Nintex only supports `accessCode` flow for OAuth2
   - If your Apigee API only supports `client_credentials` flow, you'll need to use a different authentication method

2. **Check Your Apigee Configuration:**
   - Verify the authorization URL exists: `https://api-qa.digital.paccar.cloud/security/oauth2/v1/authorize`
   - Verify the token URL exists: `https://api-qa.digital.paccar.cloud/security/oauth2/v1/token`
   - Confirm your OAuth2 app supports authorization code flow (not just client credentials)

3. **Redirect URL Not Configured:**
   - In your Apigee OAuth2 app, add the Nintex redirect URL:
     - US tenants: `https://us.nintex.io/connection/api/Token`
     - EU tenants: `https://eu.nintex.io/connection/api/Token`
     - AU tenants: `https://au.nintex.io/connection/api/Token`

4. **Validation Endpoint Issue:**
   - The `/validate` endpoint may not exist on your API
   - Try removing the `x-ntx-connection-validation` from the spec temporarily to test

**Solution if API Only Supports Client Credentials:**

If your Apigee API only supports client credentials flow (no user authorization step), you have two options:

**Option A: Use Custom Headers (Recommended)**
Change the authentication to use a Bearer token passed via custom headers:
- Remove OAuth2 security definitions
- Add `x-ntx-connection-properties` to request client ID/secret
- Use a helper operation to get the token
- Pass token in Authorization header

**Option B: Use API Key Authentication**
- Change `securityDefinitions` to use `apiKey` type
- The token would be passed as a header or query parameter
- Less secure but simpler for client credentials flow

### Connection Validation Fails
- Verify your Client ID and Client Secret are correct
- Check that the OAuth2 token URL is accessible
- Ensure your credentials have the necessary scopes

### 401 Unauthorized
- Connection may have expired - reconnect
- Check that your OAuth2 app has access to the HR API

### 400 Bad Request
- Verify personnel number is 8 digits
- Check date format is YYYYMMDD
- Ensure all required fields are provided

## Limitations

Per Nintex Xtension limitations:
- Only OpenAPI Specification 2.0 is supported
- Only one authentication type per Xtension (OAuth2 in this case)
- Must use application/json content type
- Connection to local services not supported

## Updates

To update this Xtension:

1. Make changes to `apigee.json`
2. Validate the JSON at [editor.swagger.io](https://editor.swagger.io/)
3. In Nintex Workflow, go to Xtensions
4. Find "PACCAR Apigee HR" and click the menu (...)
5. Choose **Edit**
6. Upload the updated `apigee.json`
7. Review changes and click **Update**

**Important**: Actions in existing workflows won't update automatically - you'll need to remove and re-add them.

## Support

For issues with:
- **The Xtension specification**: Check this repository
- **Nintex Workflow**: See [Nintex Help](https://help.nintex.com/en-US/xtensions/Home.htm)
- **PACCAR Apigee API**: Contact your API administrator

## Version History

- **1.0.0** - Initial release with Submit and Get HR011 form operations

## Integration with Nintex Forms & Web Request Plugin

Here's how to securely use this Xtension with your Nintex Form Web Request Plugin:

### Architecture

```
Nintex Form (Browser)
    ↓ Call workflow with form data
Nintex Workflow (Server-side)
    ↓ Use saved connection
PACCAR Apigee HR Xtension
    ↓ Nintex handles OAuth2
API Token Retrieved
    ↓ Return to workflow
Token passed back to Form
    ↓ Use in Web Request Plugin
Direct API calls with token
```

### Step-by-Step Integration

**Step 1: Create the Token Retrieval Workflow**

1. Create a workflow that uses "Get access token" action
2. Select your saved PACCAR Apigee HR connection
3. Configure the workflow to return the `access_token` output
4. Publish the workflow

**Step 2: Configure Your Nintex Form**

1. Add a button or form load event that triggers the workflow
2. Store the returned `access_token` in a form variable
3. Configure your Web Request Plugin:

```javascript
// After receiving token from workflow
const token = workflowOutput.access_token;

// Set Web Request Plugin properties
plugin.apiUrl = "https://api-qa.digital.paccar.cloud/sap/api/v1/hr/hr011?sap-client=170";
plugin.requestHeaders = JSON.stringify({
  "Authorization": `Bearer ${token}`,
  "Content-Type": "application/json"
});

// Build request body from form fields
plugin.requestBody = JSON.stringify({
  d: {
    Form: "HR011",
    Pernr: formData.personnelNumber,
    Operation: formData.operationType,
    Email: formData.email,
    EmailGebruiker: currentUser.email,
    Begda: formData.startDate.replace(/-/g, ''), // Convert to YYYYMMDD
    ActionReason: formData.actionReason
  }
});

// Trigger the API call
plugin.sendAPICall = true;
```

**Step 3: Handle Token Expiration**

Tokens typically expire after 1 hour (3600 seconds). Options:

- **Option A:** Get a fresh token before each API call
- **Option B:** Store `expires_in` and only refresh when needed
- **Option C:** Catch 401 errors and retry with new token

### Example: Complete Flow

**Form Configuration:**
```
1. User loads form
   ↓
2. Form triggers "Get Token" workflow
   ↓
3. Workflow returns: { access_token: "abc123...", expires_in: 3600 }
   ↓
4. Form stores token in variable
   ↓
5. User fills HR011 form fields
   ↓
6. User clicks "Submit to SAP"
   ↓
7. Web Request Plugin uses stored token
   ↓
8. Plugin calls API directly
   ↓
9. Result displayed to user
```

### Security Benefits

✅ **Client credentials never exposed** - Only stored in Nintex connection  
✅ **Token retrieved server-side** - Via Nintex Workflow  
✅ **Short-lived tokens** - Expire after 1 hour  
✅ **No credentials in browser** - Form only receives token  
✅ **Centralized management** - Update connection once, works everywhere
