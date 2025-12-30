# DAF Web Request Plugin

A Nintex Form Plugin for making API calls with advanced features including authentication, debug mode, response formatting, and configurable UI controls.

## Features

- **Multiple HTTP Methods**: Support for POST, GET, PUT, DELETE, PATCH, and OPTIONS
- **Flexible Authentication**: Bearer token and custom header support
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

### Basic Properties

| Property | Type | Description | Default |
|----------|------|-------------|---------|
| **API URL** | String | The endpoint URL to call | `''` |
| **HTTP Method** | Dropdown | POST, GET, PUT, DELETE, PATCH, OPTIONS | `'POST'` |
| **Content Type** | Dropdown | application/json, application/x-www-form-urlencoded, text/plain | `'application/json'` |
| **Request Headers** | String (JSON) | Custom headers as JSON object | `''` |
| **Request Body** | String | Body content (format depends on Content Type) | `''` |

### Authentication

The plugin supports two authentication methods:

#### Option 1: OAuth 2.0 Client Credentials Flow (Recommended)

| Property | Type | Description | Default |
|----------|------|-------------|---------|
| **Token URL** | String | OAuth token endpoint URL | `''` |
| **Client ID** | String | OAuth client identifier | `''` |
| **Client Secret** | String | OAuth client secret | `''` |

When Token URL, Client ID, and Client Secret are provided, the plugin automatically:
1. Fetches an access token from the token endpoint using client credentials flow
2. Uses the token in the `Authorization: Bearer <token>` header for the API call
3. Handles token fetch failures with appropriate error messages

**Example:**
```javascript
Token URL: https://api-qa.digital.paccar.cloud/security/oauth2/v1/token
Client ID: {Variable:MyClientID}
Client Secret: {Variable:MyClientSecret}
API URL: https://api-qa.digital.paccar.cloud/sap/api/v1/hr/HR011
```

#### Option 2: Manual Bearer Token

| Property | Type | Description | Default |
|----------|------|-------------|---------|
| **Bearer Token** | String | Pre-obtained OAuth/JWT token | `''` |

If you already have an access token, you can provide it directly. The plugin adds `Authorization: Bearer <token>` header when provided.

**Note:** If Token URL is provided, it takes precedence over Bearer Token.

### Response Configuration

| Property | Type | Description | Default |
|----------|------|-------------|---------|
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

Enable **Debug Mode** for development and troubleshooting. This provides four interactive tabs:

### 1. Plugin Properties
View all current property values vs. defaults

### 2. Request Details
- View formatted request configuration
- Copy request headers, body, and response
- Monitor button state and API call status

### 3. API Tools
- **JSON Editor** with syntax highlighting
- Format, minify, clear, and sample JSON
- Real-time validation and statistics
- Generate minified and escaped output

### 4. Response Formatter
- Paste API response JSON
- Select fields to display with custom titles
- Preview formatted output
- Generate and save response configuration

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
