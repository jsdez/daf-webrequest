# DAF Web Request Plugin

A Nintex Form Plugin for making API calls with advanced features including OAuth 2.0 authentication, form validation, automated submission, response formatting, and comprehensive debugging tools.

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
   - **URL**: Your CDN or hosted URL (e.g., `https://cdn.jsdelivr.net/npm/...`)

### 2. Add the Control to Your Form

1. Drag the **Web Request Plugin** control onto your form
2. Configure the control properties (see Configuration section below)

## Configuration

The plugin offers comprehensive configuration options for API calls, authentication, form behavior, and UI customization.

### API Configuration

#### API URL
- **Type**: String
- **Default**: `''`
- **Description**: The endpoint URL for your API call
- **Example**: `https://api.example.com/v1/users`
- **Usage**: Can include Nintex variables like `{Variable:BaseURL}/endpoint`

#### HTTP Method
- **Type**: Dropdown
- **Options**: `POST`, `GET`, `PUT`, `DELETE`, `PATCH`, `OPTIONS`
- **Default**: `POST`
- **Description**: The HTTP method to use for the API request
- **When to use**:
  - `GET`: Retrieve data
  - `POST`: Create new resources or submit data
  - `PUT`: Update existing resources (full replacement)
  - `PATCH`: Update existing resources (partial update)
  - `DELETE`: Remove resources
  - `OPTIONS`: Check server capabilities

#### Content Type
- **Type**: Dropdown
- **Options**: `application/json`, `application/x-www-form-urlencoded`, `text/plain`
- **Default**: `application/json`
- **Description**: The Content-Type header for the request body
- **When to use**:
  - `application/json`: Most modern REST APIs (recommended)
  - `application/x-www-form-urlencoded`: Traditional form submissions
  - `text/plain`: Raw text data

#### Request Headers
- **Type**: String (JSON format)
- **Default**: `''`
- **Description**: Custom headers to include in the API request
- **Format**: JSON object `{"Header-Name": "value"}`
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
- **Type**: String
- **Default**: `''`
- **Description**: The body content to send with the request
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

### Authentication

The plugin supports two authentication methods that work independently:

#### OAuth 2.0 Client Credentials (Recommended)

##### Token URL
- **Type**: String
- **Default**: `''`
- **Description**: OAuth 2.0 token endpoint URL
- **Example**: `https://api.example.com/oauth2/v1/token`
- **When provided**: Plugin automatically fetches access token before API call

##### Client ID
- **Type**: String
- **Default**: `''`
- **Description**: OAuth 2.0 client identifier
- **Required**: Yes, if Token URL is provided
- **Example**: `my-client-id` or `{Variable:ClientID}`

##### Client Secret
- **Type**: String
- **Default**: `''`
- **Description**: OAuth 2.0 client secret
- **Required**: Yes, if Token URL is provided
- **Security**: Store in Nintex variables, never hardcode
- **Example**: `{Variable:ClientSecret}`

**How it works**:
1. Plugin sends POST request to Token URL with client credentials
2. Token endpoint returns `access_token`
3. Plugin uses token in `Authorization: Bearer <token>` header for API call
4. Token is automatically included in response object for reuse

#### Manual Bearer Token

##### Bearer Token
- **Type**: String
- **Default**: `''`
- **Description**: Pre-obtained OAuth/JWT token
- **When to use**: If you already have a valid token
- **Example**: `{Variable:AuthToken}`
- **Note**: If Token URL is provided, it takes precedence over Bearer Token

### Response Configuration

#### Output Value Key
- **Type**: String
- **Default**: `''`
- **Description**: JSON path to extract specific value from API response
- **Format**: Use dot notation for nested values (e.g., `data.user.id`)
- **Example**: If response is:
```json
{
  "data": {
    "user": {
      "id": "12345",
      "name": "John Doe"
    }
  }
}
```
Set to `data.user.id` to extract `"12345"` into `value.output`

#### Success Message
- **Type**: String
- **Default**: `API call completed successfully`
- **Description**: Message displayed when API call succeeds (status 200-299)
- **Formats**:
  - **Plain text**: `Registration successful!`
  - **Response Format Config**: Use Response Formatter tool to generate formatted output (see Debug Mode section)
- **Example** (formatted):
```json
{"fields":[{"path":"d.Message","title":"Message"},{"path":"d.Pernr","title":"Personnel Number"}]}
```

#### Warning Message
- **Type**: String
- **Default**: `API call completed with warnings`
- **Description**: Message displayed when API returns warning status (300-399)
- **Supports**: Plain text or Response Format Configuration

#### Error Message
- **Type**: String
- **Default**: `API call failed`
- **Description**: Message displayed when API call fails (400+)
- **Supports**: Plain text or Response Format Configuration

### Button Configuration

#### Button Text
- **Type**: String
- **Default**: `Send API Request`
- **Description**: Text displayed on the API call button
- **Example**: `Submit Registration`, `Check Status`, `Send to SAP`

#### Button Alignment
- **Type**: Dropdown
- **Options**: `left`, `center`, `right`
- **Default**: `left`
- **Description**: Horizontal alignment of the button within its container

#### Button Visible
- **Type**: Boolean
- **Default**: `true`
- **Description**: Controls button visibility
- **When false**: Button is hidden but API still executes when `Send API Call` is triggered
- **Use case**: Background API calls triggered by form rules or workflows

#### Button Enabled
- **Type**: Boolean
- **Default**: `true`
- **Description**: Controls whether button can be clicked
- **When false**: Button is visible but disabled (grayed out)
- **Tip**: Use Nintex rules to enable/disable based on form state

### Behavior Controls

#### Send API Call
- **Type**: Boolean
- **Default**: `false`
- **Description**: Trigger for API execution
- **How it works**:
  1. Set to `true` via button click, Nintex rule, or workflow
  2. Plugin executes API call
  3. Automatically resets to `false` after execution
- **Use case**: Automate API calls based on form events or workflow conditions

#### Allow Multiple API Calls
- **Type**: Boolean
- **Default**: `false`
- **Description**: Controls whether API can be called multiple times
- **When false**: Button permanently disabled after first successful/warning response
- **When true**: Button re-enables after each call (respects countdown timer if enabled)
- **Use case**: Set to `true` for retry scenarios or multiple submissions

#### Form Validation
- **Type**: Boolean
- **Default**: `false`
- **Description**: Validate entire Nintex form before API execution
- **When true**:
  1. User clicks button
  2. Plugin validates all form fields
  3. If invalid: Shows error message, counts invalid fields, blocks API call
  4. If valid: Proceeds with API call
- **Validation checks**:
  - Required fields
  - HTML5 validation rules
  - Nintex custom validation
  - ARIA invalid states
- **Use case**: Ensure data quality before sending to external systems

#### Enable Countdown Timer
- **Type**: Boolean
- **Default**: `false`
- **Description**: Enforce delay between API calls
- **When true**: Users must wait specified seconds before next call
- **When false**: No rate limiting (calls can be made rapidly)
- **Use case**: Prevent accidental double-submissions or API rate limit violations

#### Countdown Timer
- **Type**: Number (seconds)
- **Default**: `5`
- **Description**: Seconds to wait between API calls when countdown is enabled
- **Range**: Any positive number
- **Example**: Set to `10` for 10-second delay
- **Note**: Only active when `Enable Countdown Timer` is `true`

### Submission Actions

#### Submission Action
- **Type**: Dropdown
- **Options**: `none`, `quick-submit`, `delayed-submit`
- **Default**: `none`
- **Description**: Action to take after successful API call
- **Options explained**:
  - **none**: No automatic submission (default behavior)
  - **quick-submit**: Immediately submit Nintex form after successful API call
  - **delayed-submit**: Show countdown, then submit form (respects Countdown Timer value)
- **Triggers on**: Success (200-299) and Warning (300-399) responses
- **Does not trigger on**: Error responses (400+)
- **Use case**: Automate form submission after successful data processing

#### Hide Submit Button
- **Type**: Boolean
- **Default**: `false`
- **Description**: Hide the standard Nintex form submit button
- **When true**: Injects global CSS to hide `button[data-e2e="btn-submit"]`
- **When false**: Submit button remains visible
- **Use case**: Force users to submit via API call button instead of standard submit
- **Note**: Submit button remains functional even when hidden (for `Submission Action` use)

### Advanced Configuration

#### Wait for Callback Response
- **Type**: Boolean
- **Default**: `false`
- **Description**: Wait for a callback POST body after workflow completion
- **Use case**: Long-running workflows that send results back asynchronously
- **Note**: Experimental feature for advanced integration scenarios

#### Debug Mode
- **Type**: Boolean
- **Default**: `false`
- **Description**: Enable comprehensive debugging interface
- **When true**: Replaces button with tabbed interface showing:
  - Plugin Properties tab
  - Request Details tab
  - API Tools tab
  - Response Formatter tab
- **When false**: Shows only the API call button
- **Use case**: Development, testing, and troubleshooting
- **Tip**: Enable for initial setup, disable for production
### Example 1: OAuth 2.0 with GET Request

```javascript
// Single control handles authentication and API call
Token URL: https://api-qa.digital.paccar.cloud/security/oauth2/v1/token
Client ID: your-client-id
Client Secret: {Variable:ClientSecret}
API URL: https://api-qa.digital.paccar.cloud/sap/api/v1/hr/HR011
HTTP Method: GET
### Example 3: POST with JSON Body

### Example 2: Simple GET Request with Pre-obtained Token

```javascript
// Configure in Nintex Form
API URL: https://api.example.com/users/123
HTTP Method: GET
Bearer Token: {Variable:AuthToken}
```*Button Text** | String | Text displayed on the button | `'Send API Request'` |
| **Button Alignment** | Dropdown | left, center, right | `'left'` |
| **Button Visible** | Boolean | Show/hide the button | `true` |
| **Button Enabled** | Boolean | Enable/disable the button | `true` |
| **Success Message** | String | Custom message for successful calls | `'API call completed successfully'` |
| **Warning Message** | String | Custom message for warnings | `'API call completed with warnings'` |
| **Error Message** | String | Custom message for errors | `'API call failed'` |

### Behavior Controls

| Property | Type | Description | Default |
|----------|------|-------------|---------|
| **Send API Call** | Boolean | Trigger API call (resets to false after execution) | `false` |
| **Allow Multiple API Calls** | Boolean | Allow repeated calls vs. single execution | `false` |
| **Enable Countdown Timer** | Boolean | Enforce delay between calls | `false` |
| **Countdown Timer** | Number | Seconds to wait between calls | `5` |
| **Debug Mode** | Boolean | Enable advanced debug interface | `false` |

## Usage Examples

### Example 1: Simple GET Request

```javascript
// Configure in Nintex Form
API URL: https://api.example.com/users/123
HTTP Method: GET
Bearer Token: {Variable:AuthToken}
```

### Example 2: POST with JSON Body

```javascript
// Request Body (use Debug Mode > API Tools tab for JSON editing)
{
  "name": "{Variable:UserName}",
### Example 4: Extract Specific Response Value
  "department": "Engineering"
}

// Request Headers
{
  "Content-Type": "application/json",
  "X-Custom-Header": "value"
}
```

### Example 3: Extract Specific Response Value

```javascript
// If API returns:
{
  "data": {
### Example 5: Automated Workflow Trigger
      "id": "12345",
      "name": "John Doe"
    }
  }
}

// Set Output Value Key to: data.user.id
// The plugin will automatically extract "12345" into value.output
```

### Example 4: Automated Workflow Trigger

```javascript
// Use workflow to set:
Send API Call: true  // This triggers the API call automatically

// The plugin will:
// 1. Execute the API call
// 2. Automatically reset Send API Call to false
// 3. Update the value object with response data
```

## Response Object

The plugin returns a structured response object in the `value` property:

```typescript
{
  success: boolean,           // true if call succeeded
  statusCode: number,         // HTTP status code
  responseType: string,       // 'success', 'warning', or 'error'
  data: string,              // Raw response data
  message: string,           // User-friendly message
  timestamp: string,         // ISO timestamp
  executionTime: number,     // Milliseconds taken
  access_token?: string,     // Auto-extracted if present in response
  output?: any              // Custom extracted value (if outputValueKey set)
}
```

## Debug Mode

Debug Mode provides a comprehensive development and troubleshooting interface with four interactive tabs. Enable by setting **Debug Mode** property to `true`.

### 1. Plugin Properties Tab

**Purpose**: View and modify all plugin properties in real-time during development.

**Features**:
- **Properties Table**: Shows property name, default value, and current value
- **Interactive Controls**:
  - Booleans: Toggle with checkbox
  - Strings: Edit in textarea with auto-resize
  - Numbers: Adjust with number input
  - Enums: Select from dropdown
- **Sensitive Data**: Bearer Token and Client Secret are masked (shows last 4 characters)
- **Live Updates**: Changes reflect immediately in the plugin

**Use Cases**:
- Test different API configurations without leaving the form
- Quickly toggle authentication methods
- Experiment with message formats
- Verify default vs. current values

**How to Use**:
1. Enable Debug Mode
2. Click "Plugin Properties" tab
3. Edit any property directly in the table
4. Changes apply immediately
5. Test API call with new configuration

---

### 2. Request Details Tab

**Purpose**: Inspect the actual HTTP request and response data.

**Features**:
- **API Configuration**: View API URL and HTTP method
- **OAuth Token Response**: See fetched access token details (if using OAuth)
- **Request Headers**: View all headers sent with the request
- **Request Body**: View the complete request payload
- **Response Data**: View the complete API response
- **State Information**:
  - Loading status
  - Has successful call
  - Button disabled state
- **Copy to Clipboard**: Every JSON section has a copy button

**Use Cases**:
- Verify authentication headers are correct
- Inspect actual request body sent to API
- Debug API response structure
- Troubleshoot authentication issues
- Confirm OAuth token fetch succeeded

**How to Use**:
1. Make an API call
2. Open "Request Details" tab
3. Review each section:
   - Check OAuth Token was fetched (if applicable)
   - Verify requestHeaders include Authorization
   - Inspect requestBody format
   - Review Response structure
4. Click 📋 Copy button to copy any JSON for analysis

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
  "Content-Type": "application/json",
  "X-Custom-Header": "value"
}

// Response
{
  "success": true,
  "statusCode": 200,
  "data": "{\"message\":\"Success\"}",
  "access_token": "eyJhbGciOiJSUzI1NiIsInR5..."
}
```

---

### 3. API Tools Tab

**Purpose**: Build, validate, and format JSON request bodies with real-time feedback.

**Features**:

#### JSON Editor
- **Syntax Highlighting**: (via textarea with monospace font)
- **Real-time Validation**: Instant feedback on JSON validity
- **Status Indicator**: Shows ✓ Valid or ✗ Error with details
- **Large Content Area**: Full-width textarea for complex JSON

#### Editor Actions
- **✨ Format**: Beautify JSON with proper indentation
- **🗜️ Minify**: Compress JSON to single line
- **🗑️ Clear**: Remove all content
- **📝 Sample**: Insert example JSON structure

#### JSON Statistics (when valid)
- Line count
- Character count
- Key count
- Byte size

#### Output Formats (when valid)
- **Minified**: Single-line JSON
- **Escaped**: Minified with escaped quotes for embedding
- **URI Encoded**: URL-safe encoded JSON
- **Copy buttons** for each format

**Use Cases**:
- Build complex request bodies visually
- Validate JSON before sending API call
- Format messy JSON for readability
- Generate escaped JSON for Nintex variables
- Test different JSON structures

**How to Use**:
1. Open "API Tools" tab
2. Type or paste JSON in the editor
3. Watch for validation status (green ✓ or red ✗)
4. Use action buttons:
   - Click **Format** to beautify
   - Click **Minify** to compress
   - Click **Sample** for template
5. Copy desired output format:
   - Use **Minified** for compact storage
   - Use **Escaped** for Nintex variable assignment
   - Use **URI Encoded** for URL parameters
6. Click "Copy to Request Body" to use in API call

**Example Workflow**:
```javascript
// 1. Click "Sample" to insert template
{
  "name": "value",
  "nested": {
    "key": "value"
  }
}

// 2. Modify with Nintex variables
{
  "name": "{Variable:Name}",
  "nested": {
    "key": "{Variable:Key}"
  }
}

// 3. Click "Format" to beautify
// 4. Click "Copy to Request Body"
// 5. API call now uses this body
```

---

### 4. Response Formatter Tab

**Purpose**: Create formatted response displays by selecting and ordering API response fields.

**Features**:

#### JSON Input
- **Paste Area**: Large textarea for API response JSON
- **Auto-validation**: Instant JSON validation
- **Error Display**: Clear error messages if JSON is invalid

#### Field Configuration (Two-Column Layout)

**Left Panel - Available Fields**:
- Auto-extracted list of all response fields (leaf values only)
- Shows field path and sample value
- Checkbox to select fields for formatting
- Selected fields highlighted in blue
- Auto-assigns order number when checked

**Right Panel - Selected Fields**:
- Draggable cards showing selected fields in order
- **⋮⋮ Handle**: Drag to reorder fields
- **Number**: Current position (1, 2, 3...)
- **Field Path**: Original JSON path shown in gray
- **Title Input**: Custom display label for field
- **✕ Button**: Remove field from selection
- **Live Reordering**: Drag and drop to change display order

#### Preview Section
- Shows exactly how formatted output will appear
- Uses custom titles if provided
- Format: `Title: Value` on separate lines

#### Configuration Output
- **Response Format Configuration**: Generated JSON config
- **Format**: `{"fields":[{"path":"...","title":"..."}]}`
- **📋 Copy Button**: Copy configuration to clipboard
- **Auto-minified**: Ready to paste into Success/Warning/Error Message properties

**Use Cases**:
- Create formatted success messages from API responses
- Select specific fields to display (hide unnecessary data)
- Customize field labels for user-friendly display
- Preview formatted output before deployment
- Reorder fields for logical display sequence

**How to Use**:

**Step 1: Paste Response JSON**
1. Make a test API call
2. Copy the response from Request Details tab
3. Paste into "Paste Response JSON" textarea
4. Verify JSON is valid (no red error)

**Step 2: Select Fields**
1. Browse "Available Fields" panel (left side)
2. Check boxes next to fields you want to display
3. Fields move to "Selected Fields" panel (right side)
4. Each checked field gets assigned an order number

**Step 3: Customize Display**
1. In "Selected Fields" panel:
   - Edit "Display title" input to customize label
   - Drag ⋮⋮ handle to reorder fields
   - Click ✕ to remove unwanted fields
2. Watch "Preview" section update in real-time

**Step 4: Generate Configuration**
1. Review the Preview to confirm layout
2. Scroll to "Response Format Configuration"
3. Click 📋 Copy button
4. Paste into Success Message (or Warning/Error Message) property

**Step 5: Test in Form**
1. Disable Debug Mode
2. Make API call
3. Success message displays formatted response:
```
✓ Success
Message: Registration in SAP successful
Personnel Number: 12345
Employee Name: John Doe
Department: Engineering
```

**Example Configuration**:
```json
{"fields":[
  {"path":"d.Message","title":"Message"},
  {"path":"d.Pernr","title":"Personnel Number"},
  {"path":"d.EmployeeName","title":"Employee Name"},
  {"path":"d.Department","title":"Department"}
]}
```

**Tips**:
- Leave title blank to use field path as label
- Use descriptive titles for better UX
- Order fields logically (most important first)
- Test with actual API response for accuracy
- Copy configuration works with both quoted and unquoted JSON

---

### Debug Mode Best Practices

**During Development**:
- Keep Debug Mode enabled
- Use Plugin Properties to test configurations
- Use API Tools to build request bodies
- Use Response Formatter to design output

**Before Deployment**:
- Test all scenarios with actual form data
- Verify Response Formatter configuration displays correctly
- Check Request Details for security issues (exposed tokens, etc.)
- Disable Debug Mode

**Troubleshooting**:
- Enable Debug Mode when users report issues
- Check Request Details tab for actual request/response
- Verify authentication in OAuth Token Response
- Review Response structure to update Output Value Key

**Security Notes**:
- Debug Mode shows sensitive data (tokens, secrets)
- Only enable Debug Mode in development/test environments
- Never enable Debug Mode in production forms
- Masked sensitive properties still accessible in browser dev tools

## Advanced Features

### Rate Limiting

Prevent rapid API calls by enabling the countdown timer:

```javascript
Enable Countdown Timer: true
Countdown Timer: 5  // Wait 5 seconds between calls
```

### Silent Mode

Hide UI completely for background API calls:

```javascript
Button Visible: false
// API still executes when Send API Call is set to true
```

### Response Formatting

Use the Response Formatter tool (Debug Mode) to:
1. Paste a sample API response
2. Select which fields to display
3. Add custom titles for each field
4. Generate configuration JSON
5. Save to Response Format Configuration property

## Development

### Project Structure

```
src/
  plugin.ts       # Main plugin component
  apiClient.ts    # API call handler
  nintex.css      # Styles
dist/             # Build output
```

### Build Commands

```sh
npm run build    # Build for production
npm run deploy   # Build and copy to dist/
npm run dev      # Development mode with watch
```

### Publishing
## Troubleshooting

### CORS Issues

If you encounter CORS errors, ensure your API server:
- Returns proper CORS headers for OPTIONS requests
- Handles preflight requests before authentication
- Includes `Access-Control-Allow-Origin` header

### OAuth Token Fetch Failures

- Verify Token URL is correct and accessible
- Check Client ID and Client Secret are valid
- Ensure the token endpoint supports `client_credentials` grant type
- Review error messages in the plugin response
- Use Debug Mode > Request Details to inspect the error

### Authentication Failures

- If using OAuth flow: Verify Token URL, Client ID, and Client Secret
- If using Bearer Token: Verify token is valid and not expired
- Check that required headers are included
- Use Debug Mode > Request Details to inspect actual request

If you encounter CORS errors, ensure your API server:
- Returns proper CORS headers for OPTIONS requests
- Handles preflight requests before authentication
- Includes `Access-Control-Allow-Origin` header

### Authentication Failures

- Verify Bearer Token is valid and not expired
- Check that required headers are included
- Use Debug Mode > Request Details to inspect actual request

### Response Not Updating

- Ensure `Send API Call` is being set to `true`
- Check `Allow Multiple API Calls` if you need repeated execution
- Verify API URL is correct and accessible

## References

- [Nintex Form Plugin Documentation](https://help.nintex.com/en-US/formplugins/Reference/Create.htm)
- [LitElement Documentation](https://lit.dev/)
- [Nintex Automation Cloud](https://www.nintex.com/)
