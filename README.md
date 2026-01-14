# DAF Web Request Plugin

A comprehensive Nintex Form Plugin for making API calls with advanced features including OAuth 2.0 authentication, form validation, automated submission, response formatting, and comprehensive debugging tools.

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Setup in Nintex Forms](#setup-in-nintex-forms)
- [Configuration Reference](#configuration-reference)
- [Debug Mode Guide](#debug-mode-guide)
- [Usage Examples](#usage-examples)
- [Response Object](#response-object)
- [Troubleshooting](#troubleshooting)

## Features

- **Multiple HTTP Methods**: Support for POST, GET, PUT, DELETE, PATCH, and OPTIONS
- **OAuth 2.0 Authentication**: Automatic token fetching with client credentials flow
- **Bearer Token Support**: Use pre-obtained tokens for authentication
- **Form Validation**: Validate Nintex form before API execution
- **Automated Submission**: Submit form automatically after successful API calls
- **Response Formatting**: Visual tool to format and display API response fields
- **Debug Mode**: Interactive tabs for properties, request details, API tools, and response formatting
- **Customizable UI**: Configurable button text, alignment, visibility, and messages
- **Rate Limiting**: Optional countdown timer between API calls
- **Response Handling**: Automatic response parsing with custom value extraction
- **Copy to Clipboard**: Easy copying of request/response data in debug mode
- **JSON Tools**: Built-in JSON formatter, validator, and syntax highlighter

## Installation

### Option 1: CDN (Recommended)

Once published to npm, load the plugin via jsDelivr:

```html
https://cdn.jsdelivr.net/npm/<your-package-name>@<version>/dist/plugin.js
```

### Option 2: Local Development

1. Clone this repository
2. Install dependencies:
   ```sh
   npm install
   ```
3. Build the plugin:
   ```sh
   npm run build
   ```
4. Deploy to your hosting:
   ```sh
   npm run deploy
   ```

## Setup in Nintex Forms

### 1. Add the Plugin to Your Form

1. Open your Nintex Form in the designer
2. Go to **Form Settings** > **Custom Plugins**
3. Add a new plugin with the following details:
   - **Name**: `daf-webrequest-plugin`
   - **URL**: Your CDN or hosted URL

### 2. Add the Control to Your Form

1. Drag the **Web Request Plugin** control onto your form
2. Configure the control properties (see Configuration Reference below)

## Configuration Reference

### API Configuration

#### API URL
- **Type**: String | **Default**: `''`
- **Description**: The endpoint URL for your API call
- **Example**: `https://api.example.com/v1/users`
- **Supports Nintex Variables**: `{Variable:BaseURL}/endpoint`

#### HTTP Method
- **Type**: Dropdown | **Default**: `POST`
- **Options**: `POST`, `GET`, `PUT`, `DELETE`, `PATCH`, `OPTIONS`
- **When to use**:
  - **GET**: Retrieve data
  - **POST**: Create new resources or submit data
  - **PUT**: Update existing resources (full replacement)
  - **PATCH**: Update existing resources (partial update)
  - **DELETE**: Remove resources
  - **OPTIONS**: Check server capabilities

#### Content Type
- **Type**: Dropdown | **Default**: `application/json`
- **Options**: `application/json`, `application/x-www-form-urlencoded`, `text/plain`
- **When to use**:
  - `application/json`: Most modern REST APIs (recommended)
  - `application/x-www-form-urlencoded`: Traditional form submissions
  - `text/plain`: Raw text data

#### Request Headers
- **Type**: String (JSON format) | **Default**: `''`
- **Format**: `{"Header-Name": "value"}`
- **Example**:
```json
{
  "X-Custom-Header": "CustomValue",
  "X-API-Version": "2.0",
  "X-Request-ID": "{Variable:RequestID}"
}
```
- **Note**: Authorization headers are automatically added if authentication is configured

#### Request Body
- **Type**: String | **Default**: `''`
- **Format**: Depends on Content Type setting
- **Example** (JSON):
```json
{
  "firstName": "{Variable:FirstName}",
  "lastName": "{Variable:LastName}",
  "email": "{Variable:Email}",
  "department": "Engineering"
}
```
- **Tip**: Use Debug Mode > API Tools tab for JSON editing with validation

---

### Authentication

#### OAuth 2.0 Client Credentials (Recommended)

##### Token URL
- **Type**: String | **Default**: `''`
- **Description**: OAuth 2.0 token endpoint URL
- **Example**: `https://api.example.com/oauth2/v1/token`
- **When provided**: Plugin automatically fetches access token before API call

##### Client ID
- **Type**: String | **Default**: `''`
- **Description**: OAuth 2.0 client identifier
- **Required**: Yes, if Token URL is provided
- **Example**: `my-client-id` or `{Variable:ClientID}`

##### Client Secret
- **Type**: String | **Default**: `''`
- **Description**: OAuth 2.0 client secret
- **Required**: Yes, if Token URL is provided
- **Security**: Store in Nintex variables, never hardcode
- **Example**: `{Variable:ClientSecret}`

**How OAuth 2.0 works**:
1. Plugin sends POST to Token URL with client credentials
2. Token endpoint returns `access_token`
3. Plugin uses token in `Authorization: Bearer <token>` header for API call
4. Token is automatically included in response object for reuse

#### Manual Bearer Token

##### Bearer Token
- **Type**: String | **Default**: `''`
- **Description**: Pre-obtained OAuth/JWT token
- **When to use**: If you already have a valid token
- **Example**: `{Variable:AuthToken}`
- **Note**: If Token URL is provided, it takes precedence over Bearer Token

---

### Response Configuration

#### Output Value Key
- **Type**: String | **Default**: `''`
- **Description**: JSON path to extract specific value from API response
- **Format**: Use dot notation for nested values (e.g., `data.user.id`)
- **Example**: If response is `{"data":{"user":{"id":"12345"}}}`, set to `data.user.id` to extract `"12345"` into `value.output`

#### Success Message
- **Type**: String | **Default**: `API call completed successfully`
- **Description**: Message displayed when API call succeeds (HTTP 200-299)
- **Formats**:
  - **Plain text**: `Registration successful!`
  - **Response Format Config**: JSON from Response Formatter tool
- **Example** (formatted):
```json
{"fields":[{"path":"d.Message","title":"Message"},{"path":"d.Pernr","title":"Personnel Number"}]}
```
- **Result**: Multi-line formatted display with custom titles

#### Warning Message
- **Type**: String | **Default**: `API call completed with warnings`
- **Description**: Message for warning status (HTTP 300-399)
- **Supports**: Plain text or Response Format Configuration

#### Error Message
- **Type**: String | **Default**: `API call failed`
- **Description**: Message when API call fails (HTTP 400+)
- **Supports**: Plain text or Response Format Configuration

---

### Button Configuration

#### Button Text
- **Type**: String | **Default**: `Send API Request`
- **Example**: `Submit Registration`, `Check Status`, `Send to SAP`

#### Button Alignment
- **Type**: Dropdown | **Default**: `left`
- **Options**: `left`, `center`, `right`

#### Button Visible
- **Type**: Boolean | **Default**: `true`
- **When false**: Button hidden, but API still executes when `Send API Call` is triggered
- **Use case**: Background API calls triggered by form rules

#### Button Enabled
- **Type**: Boolean | **Default**: `true`
- **When false**: Button visible but disabled (grayed out)

---

### Behavior Controls

#### Send API Call
- **Type**: Boolean | **Default**: `false`
- **Description**: Trigger for API execution
- **How it works**:
  1. Set to `true` via button click, Nintex rule, or workflow
  2. Plugin executes API call
  3. Automatically resets to `false` after execution

#### Allow Multiple API Calls
- **Type**: Boolean | **Default**: `false`
- **When false**: Button permanently disabled after first successful/warning response
- **When true**: Button re-enables after each call (respects countdown timer if enabled)

#### Form Validation
- **Type**: Boolean | **Default**: `false`
- **When true**: Validates entire Nintex form before API execution
- **Validation includes**:
  - Required fields
  - HTML5 validation rules
  - Nintex custom validation
  - ARIA invalid states
- **On failure**: Shows error message with invalid field count, blocks API call

#### Enable Countdown Timer
- **Type**: Boolean | **Default**: `false`
- **When true**: Enforces delay between API calls
- **When false**: Allows unlimited rapid calls

#### Countdown Timer
- **Type**: Number (seconds) | **Default**: `5`
- **Description**: Seconds to wait between API calls when countdown is enabled

---

### Submission Actions

#### Submission Action
- **Type**: Dropdown | **Default**: `no-submit`
- **Options**:
  - **no-submit**: No automatic submission
  - **quick-submit**: Immediately submit Nintex form after successful API call
  - **delayed-submit**: Show countdown, then submit form (respects Countdown Timer value)
  - **only-submit**: Skip API call and directly submit the form
- **Triggers on**: Success (200-299) and Warning (300-399) responses only

#### Hide Submit Button
- **Type**: Boolean | **Default**: `false`
- **When true**: Hides the standard Nintex form submit button
- **How**: Injects global CSS to hide `button[data-e2e="btn-submit"]`
- **Use case**: Force users to submit via API call button
- **Note**: Submit button remains functional when hidden (for `Submission Action` use)

---

### Alert Display Configuration

#### Show More Details
- **Type**: Dropdown | **Default**: `Never`
- **Options**: `Never`, `Always`, `On Error/Warning`
- **Description**: Controls when to show expandable raw response details in alerts
- **When enabled**:
  - Adds "More Details..." link below alert message
  - Click to expand and view full API response (pretty-formatted JSON)
  - Includes "copy" link to copy raw response to clipboard
- **Use cases**:
  - **Never**: Clean interface, hide technical details from users
  - **Always**: Show details for all responses (success, warning, error)
  - **On Error/Warning**: Only show details when troubleshooting is needed

#### Alert Position
- **Type**: Dropdown | **Default**: `After`
- **Options**: `After`, `Before`, `Pop-out`
- **Description**: Controls where the alert message is displayed relative to the button
- **Options explained**:
  - **After**: Alert displays below the button (default position)
  - **Before**: Alert displays above the button (uses margin-bottom instead of margin-top)
  - **Pop-out**: Alert displays as a modal overlay with backdrop
- **Modal features** (Pop-out):
  - Semi-transparent backdrop
  - Centered modal with shadow
  - Close button (×) in top-right
  - Click outside to close
  - Smooth fade-in/slide-in animations

---

### Advanced Configuration

#### Wait for Callback Response
- **Type**: Boolean | **Default**: `false`
- **Description**: Wait for callback POST body after workflow completion
- **Use case**: Long-running workflows that send results asynchronously

#### Debug Mode
- **Type**: Boolean | **Default**: `false`
- **When true**: Replaces button with tabbed debugging interface
- **When false**: Shows only the API call button
- **Use case**: Development, testing, and troubleshooting

---

## Debug Mode Guide

Enable comprehensive debugging by setting **Debug Mode** to `true`. This reveals four interactive tabs.

### Tab 1: Plugin Properties

**Purpose**: View and modify all plugin properties in real-time.

**Features**:
- Properties table showing name, default value, and current value
- Interactive controls for immediate editing:
  - Booleans: Toggle checkbox
  - Strings: Edit textarea
  - Numbers: Number input
  - Enums: Dropdown select
- Sensitive data masked (Bearer Token, Client Secret show last 4 chars)
- Live updates without leaving the form

**How to Use**:
1. Click "Plugin Properties" tab
2. Edit any property directly
3. Changes apply immediately
4. Test API call with new configuration

---

### Tab 2: Request Details

**Purpose**: Inspect actual HTTP request and response data.

**Features**:
- API configuration display (URL, method)
- OAuth Token Response (if using OAuth)
- Request Headers (with Authorization)
- Request Body (complete payload)
- Response Data (complete API response)
- State information (loading, success, button state)
- Copy buttons for all JSON sections

**How to Use**:
1. Make an API call
2. Open "Request Details" tab
3. Review sections:
   - Verify OAuth Token was fetched
   - Check Authorization header
   - Inspect Request Body format
   - Review Response structure
4. Click 📋 Copy to copy any JSON

**Example Output**:
```json
// OAuth Token Response
{
  "access_token": "eyJhbGciOiJSUzI1NiIsInR5...",
  "token_type": "Bearer",
  "expires_in": 3600
}

// Request Headers
{
  "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsInR5...",
  "Content-Type": "application/json"
}
```

---

### Tab 3: API Tools

**Purpose**: Build, validate, and format JSON request bodies.

**Features**:

#### JSON Editor
- Large textarea for complex JSON
- Real-time validation with status indicator
- Syntax checking with error messages
- Character/line/key/size statistics

#### Editor Actions
- **✨ Format**: Beautify with proper indentation
- **🗜️ Minify**: Compress to single line
- **🗑️ Clear**: Remove all content
- **📝 Sample**: Insert example structure

#### Output Formats
- **Minified**: Single-line JSON
- **Escaped**: Minified with escaped quotes
- **URI Encoded**: URL-safe encoded
- Copy buttons for each format

**How to Use**:
1. Open "API Tools" tab
2. Type or paste JSON
3. Watch validation status (✓ Valid or ✗ Error)
4. Use action buttons (Format, Minify, Sample)
5. Copy desired output format
6. Click "Copy to Request Body" to use in API call

---

### Tab 4: Response Formatter

**Purpose**: Create formatted response displays visually with support for complex nested data and arrays.

**Features**:

#### JSON Input
- Large textarea for API response
- Auto-validation with error display

#### Three-Tab Configuration Interface

**Success Tab**: Configure display for successful responses (HTTP 200-299)
**Warning Tab**: Configure display for warning responses (HTTP 300-399)
**Error Tab**: Configure display for error responses (HTTP 400+)

Each tab includes:
- **Current Configuration**: Shows existing config with color-coded preview (green/yellow/red)
- **Preview Section**: See how the formatted message will look
- **Field Configurator**: Build new configurations visually

#### Message Title Configuration

**Message Title** field (full-width text input):
- Optional custom title for the alert header
- Replaces default labels ("Success", "Warning", "Error")
- Leave empty to hide the title header completely
- Shows status indicator:
  - `✓ Custom title will be displayed` when title is set
  - `○ No title - header will be hidden` when empty
- Automatically included in configuration output
- Ideal for contextual messages like "Employee Created Successfully"

#### Two-Column Field Configuration

**Left Panel - Available Fields**:
- Auto-extracted list of all response fields
- Shows field path and sample value
- **Checkbox**: Select fields to include
- **Array Support**: 
  - Enable "List all array items" to show `[*]` notation
  - Access properties within arrays: `errordetails[*].message`
  - Access specific indexes: `errordetails[0].message`
- Selected fields highlighted blue
- Auto-assigns order numbers

**Right Panel - Selected Fields**:
- Draggable cards showing selected fields
- **⋮⋮ Handle**: Drag to reorder
- **Number**: Current position (1, 2, 3...)
- **Field Path**: Original JSON path (supports nested paths and arrays)
- **Title Input**: Custom display label
- **✕ Button**: Remove field

#### Preview Section
- Shows exact formatted output
- Uses custom titles
- Format: `Title: Value` on separate lines
- **Array formatting**: Multiple items shown as numbered list

#### Configuration Output
- Generated JSON config
- Format: `{"title":"Custom Title","fields":[{"path":"...","title":"..."}]}`
- Title field optional - omit if no custom title needed
- **📋 Copy Button**: Copy to clipboard (color-coded per message type)
- Auto-minified and ready to paste

**Complete Workflow**:

1. **Paste Response JSON**
   - Make test API call
   - Copy response from Request Details tab
   - Paste into "Paste Response JSON" textarea
   - Verify JSON is valid

2. **Select Message Type Tab**
   - Click Success, Warning, or Error tab
   - View current configuration (if any)
   - See preview of current config

3. **Set Custom Title (Optional)**
   - Enter custom title in "Message Title" field
   - Examples: "Registration Complete", "Update Failed", "Action Required"
   - Or leave empty to hide title header completely

4. **Select Fields**
   - Browse "Available Fields" panel
   - Check boxes next to desired fields
   - For arrays: Enable "List all array items" checkbox
   - Select array properties: `errordetails[*].message`
   - Fields appear in "Selected Fields" panel

5. **Customize Display**
   - Edit "Display title" inputs
   - Drag ⋮⋮ handles to reorder
   - Click ✕ to remove fields
   - Watch Preview update in real-time

6. **Generate Configuration**
   - Review Preview section
   - Scroll to "Response Format Configuration"
   - Click color-coded 📋 Copy button

7. **Apply to Form**
   - Paste into Success/Warning/Error Message property
   - Disable Debug Mode
   - Make API call
   - View formatted response

**Example - Simple Fields**:
```json
// Configuration (with custom title)
{"title":"Employee Registration","fields":[
  {"path":"d.Message","title":"Message"},
  {"path":"d.Pernr","title":"Personnel Number"},
  {"path":"d.EmployeeName","title":"Employee Name"}
]}

// Result Displayed
✓ Employee Registration
Message: Registration successful
Personnel Number: 12345
Employee Name: John Doe
```

**Example - Without Title**:
```json
// Configuration (no title - header hidden)
{"fields":[
  {"path":"d.Message","title":"Message"},
  {"path":"d.Pernr","title":"Personnel Number"}
]}

// Result Displayed (no header)
Message: Registration successful
Personnel Number: 12345
```

**Example - Array Handling**:
```json
// API Response (SAP Error)
{
  "error": {
    "innererror": {
      "errordetails": [
        {"code":"XS/138","message":"Email address 234124 is invalid"},
        {"code":"/IWBEP/CX_MGW_BUSI_EXCEPTION","message":"An exception was raised"}
      ]
    }
  }
}

// Configuration (with array notation)
{"fields":[
  {"path":"error.innererror.errordetails[*].message","title":"Error Messages"}
]}

// Result Displayed
✗ Error
Error Messages:
  1. Email address 234124 is invalid
  2. An exception was raised
```

---

### Debug Mode Best Practices

**During Development**:
- Keep Debug Mode enabled
- Use Plugin Properties to test configurations
- Use API Tools to build request bodies
- Use Response Formatter to design output

**Before Deployment**:
- Test all scenarios with actual data
- Verify Response Formatter output displays correctly
- Check Request Details for security issues
- **Disable Debug Mode**

**Security Notes**:
- Debug Mode shows sensitive data (tokens, secrets)
- Only enable in development/test environments
- **Never enable Debug Mode in production**

---

## Usage Examples

### Example 1: OAuth 2.0 with GET Request

```javascript
// Configuration
Token URL: https://api-qa.example.com/oauth2/v1/token
Client ID: {Variable:ClientID}
Client Secret: {Variable:ClientSecret}
API URL: https://api-qa.example.com/sap/api/v1/hr/HR011
HTTP Method: GET
Button Text: Fetch Employee Data

// Workflow:
// 1. Plugin fetches OAuth token from Token URL
// 2. Makes GET request with Authorization header
// 3. Returns employee data in response
```

### Example 2: POST with JSON Body

```javascript
// Configuration
API URL: https://api.example.com/users
HTTP Method: POST
Content Type: application/json
Bearer Token: {Variable:AuthToken}
Button Text: Create User

// Request Body (built in API Tools tab):
{
  "firstName": "{Variable:FirstName}",
  "lastName": "{Variable:LastName}",
  "email": "{Variable:Email}",
  "department": "Engineering"
}

// Request Headers:
{
  "X-Request-ID": "{Variable:RequestID}",
  "X-API-Version": "2.0"
}
```

### Example 3: Form Validation + Auto Submit

```javascript
// Configuration
API URL: https://api.example.com/registrations
HTTP Method: POST
Token URL: https://auth.example.com/oauth2/token
Client ID: {Variable:ClientID}
Client Secret: {Variable:ClientSecret}

// Behavior Settings
Form Validation: true               // Validate before API call
Submission Action: delayed-submit   // Auto-submit after success
Countdown Timer: 5                  // 5-second countdown
Hide Submit Button: true            // Hide standard submit

Button Text: Submit Registration

// Workflow:
// 1. User fills form
// 2. User clicks "Submit Registration"
// 3. Plugin validates all form fields
// 4. If invalid: Shows error count, blocks API
// 5. If valid: Fetches OAuth token
// 6. Sends data to API
// 7. If success: Shows formatted response
// 8. Shows "Submitting form in 5 seconds..."
// 9. Auto-submits Nintex form
```

### Example 4: Extract Specific Value

```javascript
// Configuration
API URL: https://api.example.com/orders
HTTP Method: POST
Output Value Key: data.order.id

// API Response:
{
  "success": true,
  "data": {
    "order": {
      "id": "ORD-12345",
      "status": "pending"
    }
  }
}

// Result:
// value.output = "ORD-12345"
// Use {Control:WebRequest.output} in workflows
```

### Example 5: Formatted Response Messages

```javascript
// Step 1: Use Response Formatter (Debug Mode)
// Paste API response:
{
  "d": {
    "Message": "Registration in SAP successful",
    "Pernr": "12345",
    "EmployeeName": "John Doe",
    "Department": "Engineering"
  }
}

// Step 2: Set custom title (optional)
// Message Title: "Employee Created Successfully"
// Leave empty to hide the title header completely

// Step 3: Select fields and customize titles
// - d.Message → "Message"
// - d.Pernr → "Personnel Number"
// - d.EmployeeName → "Employee Name"
// - d.Department → "Department"

// Step 4: Copy configuration, paste into Success Message:
{"title":"Employee Created Successfully","fields":[{"path":"d.Message","title":"Message"},{"path":"d.Pernr","title":"Personnel Number"},{"path":"d.EmployeeName","title":"Employee Name"},{"path":"d.Department","title":"Department"}]}

// Step 5: Disable Debug Mode and test

// User sees (with title):
✓ Employee Created Successfully
Message: Registration in SAP successful
Personnel Number: 12345
Employee Name: John Doe
Department: Engineering

// Or without title (omit "title" field):
{"fields":[...]}
// User sees:
Message: Registration in SAP successful
Personnel Number: 12345
Employee Name: John Doe
Department: Engineering
```

### Example 6: Background API Call (Hidden Button)

```javascript
// Configuration
API URL: https://api.example.com/audit-log
HTTP Method: POST
Button Visible: false
Send API Call: false

// Request Body:
{
  "userId": "{Control:UserID.value}",
  "action": "form_opened",
  "timestamp": "{Function:Now()}"
}

// Nintex Form Rule:
// When: Form loads
// Then: Set WebRequestPlugin.sendAPICall = true

// Result:
// - Button hidden from users
// - API call triggers automatically on form load
// - Logs form access without user interaction
```

### Example 7: Rate Limiting

```javascript
// Configuration
API URL: https://api.example.com/status-check
HTTP Method: GET
Bearer Token: {Variable:AuthToken}

// Behavior Settings
Allow Multiple API Calls: true
Enable Countdown Timer: true
Countdown Timer: 10

Button Text: Check Status

// Workflow:
// 1. User clicks "Check Status"
// 2. API call executes
// 3. Button disables for 10 seconds
// 4. Shows "Wait 10 seconds..."
// 5. Button re-enables
// 6. User can check status again
```

### Example 8: Conditional Authentication

```javascript
// Scenario: Different auth per environment

// Dev Environment Rule:
// When: {Variable:Environment} = "dev"
// Then: Set WebRequestPlugin.bearerToken = {Variable:DevToken}

// Prod Environment Rule:
// When: {Variable:Environment} = "prod"
// Then:
//   Set WebRequestPlugin.tokenUrl = {Variable:ProdTokenURL}
//   Set WebRequestPlugin.clientId = {Variable:ProdClientID}
//   Set WebRequestPlugin.clientSecret = {Variable:ProdClientSecret}

// Configuration
API URL: {Variable:BaseURL}/api/endpoint
HTTP Method: POST

// Result:
// - Dev: Simple bearer token
// - Prod: OAuth 2.0 with client credentials
```

### Example 9: Alert Display Options

```javascript
// Configuration for User-Facing Forms
Alert Position: Pop-out          // Show as modal overlay
Show More Details: Never         // Hide technical details

// Result:
// - Clean, professional modal alert
// - No raw JSON visible to users
// - Automatic close on backdrop click

// Configuration for Admin/Developer Forms
Alert Position: After            // Standard position below button
Show More Details: Always        // Show expandable details

// Result:
// - Standard alert with "More Details..." link
// - Click to expand and see full API response
// - "copy" link to copy raw JSON to clipboard

// Configuration for Error Handling
Alert Position: Before           // Show above button for visibility
Show More Details: On Error/Warning  // Only show details when needed

// Result:
// - Alert appears first (before button)
// - Details section only for errors/warnings
// - Clean success messages without clutter
```

### Example 10: Array Response Handling

```javascript
// API Response with Multiple Errors
{
  "error": {
    "innererror": {
      "errordetails": [
        {"code":"XS/138","message":"Email address 234124 is invalid","severity":"error"},
        {"code":"XS/139","message":"Phone number format incorrect","severity":"error"},
        {"code":"XS/140","message":"Postal code missing","severity":"warning"}
      ]
    }
  }
}

// Response Formatter Configuration
// In Debug Mode:
// 1. Paste response JSON
// 2. Click "Error" tab
// 3. Enable "List all array items" checkbox
// 4. Select: error.innererror.errordetails[*].message
// 5. Select: error.innererror.errordetails[*].severity
// 6. Copy configuration

// Error Message Property:
{"fields":[
  {"path":"error.innererror.errordetails[*].message","title":"Validation Errors"},
  {"path":"error.innererror.errordetails[*].severity","title":"Severity Levels"}
]}

// User Sees:
✗ Error
Validation Errors:
  1. Email address 234124 is invalid
  2. Phone number format incorrect
  3. Postal code missing
Severity Levels:
  1. error
  2. error
  3. warning
```

---

## Response Object

The plugin returns a structured response object in the `value` property:

```typescript
{
  success: boolean,           // true if HTTP 200-299
  statusCode: number,         // HTTP status code (200, 404, 500, etc.)
  responseType: string,       // 'success', 'warning', or 'error'
  data: string,              // Raw response data (stringified JSON)
  message: string,           // Actual message from API response (extracted from d.Message, Message, or message)
  formattedResponse: string, // Formatted response based on Success/Warning/Error Message configuration
  timestamp: string,         // ISO timestamp of API call
  executionTime: number,     // Milliseconds taken
  access_token?: string,     // Auto-extracted if present in response
  output?: any              // Custom extracted value (if outputValueKey set)
}
```

**Accessing in Nintex**:
- `{Control:WebRequest.success}` - Boolean success flag
- `{Control:WebRequest.statusCode}` - HTTP status code
- `{Control:WebRequest.data}` - Raw response data
- `{Control:WebRequest.message}` - Actual message from API
- `{Control:WebRequest.formattedResponse}` - Formatted display message
- `{Control:WebRequest.output}` - Extracted value (from outputValueKey)
- `{Control:WebRequest.access_token}` - OAuth token (for reuse)

---

## Troubleshooting

### CORS Issues
**Symptoms**: Error message mentioning "CORS" or "Cross-Origin"

**Solutions**:
- Ensure API server returns proper CORS headers
- Check `Access-Control-Allow-Origin` header is present
- Verify API handles OPTIONS preflight requests
- Contact API administrator if you don't control the server

### OAuth Token Fetch Failures
**Symptoms**: Error about token endpoint, 401 unauthorized

**Check**:
- Token URL is correct and accessible
- Client ID and Client Secret are valid
- Token endpoint supports `client_credentials` grant type
- Use Debug Mode > Request Details to inspect error
- Verify OAuth Token Response section shows access_token

### Authentication Failures
**Symptoms**: 401 or 403 errors from API

**Check**:
- Bearer Token is valid and not expired
- OAuth flow succeeded (check Debug Mode > Request Details)
- Required headers are included (check Request Headers section)
- API endpoint expects the authentication method you're using

### Response Not Updating
**Symptoms**: Form shows old data or no response

**Check**:
- `Send API Call` is being set to `true`
- `Allow Multiple API Calls` is `true` if you need repeated execution
- API URL is correct and accessible
- Check Debug Mode > Request Details for actual response
- Verify no JavaScript errors in browser console

### Form Validation Not Working
**Symptoms**: API calls with invalid form data

**Check**:
- `Form Validation` property is set to `true`
- Form fields have proper validation rules
- Required fields are marked as required
- Check browser console for validation errors

### Formatted Responses Not Displaying
**Symptoms**: Shows JSON config instead of formatted output

**Check**:
- Configuration JSON is valid (test in API Tools tab)
- Field paths match actual response structure
- Response Format Configuration is pasted into Success/Warning/Error Message
- Debug Mode is disabled (formatted display only works in normal mode)

### Button Remains Disabled
**Symptoms**: Button grayed out, can't click

**Check**:
- `Button Enabled` is `true`
- `Allow Multiple API Calls` is `true` (if you need repeated calls)
- Not in cooldown period (if countdown enabled)
- Previous call was not successful (if multiple calls disabled)
- Check Debug Mode > Request Details > State section

---

## Development

### Project Structure
```
src/
  plugin.ts       # Main plugin component (2,486 lines)
  apiClient.ts    # API call handler
  nintex.css      # Styles
dist/             # Build output
```

### Build Commands
```sh
npm run build    # TypeScript compilation
npm run bundle   # esbuild bundling
npm run deploy   # Build + bundle
```

### Key Technologies
- **LitElement**: Web component framework
- **TypeScript**: Type-safe development
- **esbuild**: Fast bundling
- **Nintex Form Plugin Contract**: Form integration

---

## References

- [Nintex Form Plugin Documentation](https://help.nintex.com/en-US/formplugins/Reference/Create.htm)
- [LitElement Documentation](https://lit.dev/)
- [OAuth 2.0 Client Credentials Flow](https://oauth.net/2/grant-types/client-credentials/)

---

## License

MIT License

Copyright (c) 2026 DAF Trucks N.V.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## Support

For issues, questions, or contributions, please [open an issue](https://github.com/jsdez/daf-webrequest/issues) on GitHub.
