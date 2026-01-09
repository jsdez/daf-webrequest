import { html, LitElement, css } from 'lit';
import { callApi } from './apiClient.js';
import { customElement, property } from 'lit/decorators.js';
import { PluginContract, PropType } from '@nintex/form-plugin-contract';

@customElement('daf-webrequest-plugin')
export class DafWebRequestPlugin extends LitElement {
  static styles = css`
    .plugin-container {
      font-family: var(--ntx-form-theme-font-family);
      color: var(--ntx-form-theme-color-input-text);
    }

    .form-group {
      margin-bottom: 16px;
    }

    .control-label {
      display: block;
      margin-bottom: 8px;
      font-size: var(--ntx-form-theme-text-label-size);
      color: var(--ntx-form-theme-color-input-text);
      font-weight: 500;
    }

    .form-control {
      width: 100%;
      height: var(--ntx-form-theme-control-height, auto);
      padding: 8px 12px;
      font-size: var(--ntx-form-theme-text-input-size);
      font-family: var(--ntx-form-theme-font-family);
      color: var(--ntx-form-theme-color-input-text);
      background-color: var(--ntx-form-theme-color-input-background);
      border: 1px solid var(--ntx-form-theme-color-border);
      border-radius: var(--ntx-form-theme-border-radius);
      box-sizing: border-box;
    }

    .form-control:focus {
      outline: none;
      border-color: var(--ntx-form-theme-color-primary);
      box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
    }

    .btn {
      padding: 8px 16px;
      font-size: var(--ntx-form-theme-text-input-size);
      font-family: var(--ntx-form-theme-font-family);
      border: none;
      border-radius: var(--ntx-form-theme-border-radius);
      cursor: pointer;
      transition: background-color 0.15s ease-in-out;
    }

    .btn-primary {
      color: white;
      background-color: var(--ntx-form-theme-color-primary);
    }

    .btn-primary:hover:not(:disabled) {
      filter: brightness(0.9);
    }

    .btn:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    .text-danger {
      color: var(--ntx-form-theme-color-error);
      font-size: var(--ntx-form-theme-text-label-size);
      margin-top: 4px;
    }

    .alert {
      padding: 12px 16px;
      margin-top: 12px;
      border-radius: var(--ntx-form-theme-border-radius);
      font-size: var(--ntx-form-theme-text-label-size);
      font-family: var(--ntx-form-theme-font-family);
      user-select: text;
      -webkit-user-select: text;
      -moz-user-select: text;
      -ms-user-select: text;
    }

    .alert-success {
      background-color: #d4edda;
      color: #155724;
      border: 1px solid #c3e6cb;
    }

    .alert-warning {
      background-color: #fff3cd;
      color: #856404;
      border: 1px solid #ffeaa7;
    }

    .alert-error {
      background-color: #f8d7da;
      color: #721c24;
      border: 1px solid #f5c6cb;
    }

    .alert-info {
      background-color: #d1ecf1;
      color: #0c5460;
      border: 1px solid #bee5eb;
    }

    .alert-icon {
      margin-right: 8px;
      font-weight: bold;
    }

    .alert-response {
      margin-top: 8px;
      padding-top: 8px;
      border-top: 1px solid rgba(0, 0, 0, 0.1);
      font-family: 'Courier New', Courier, monospace;
      font-size: 12px;
      white-space: pre-wrap;
      word-break: break-all;
    }

    .spinner {
      display: inline-block;
      width: 12px;
      height: 12px;
      margin-right: 8px;
      border: 2px solid transparent;
      border-top: 2px solid currentColor;
      border-radius: 50%;
      animation: spin 1s linear infinite;
    }

    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }

    pre.form-control {
      white-space: pre-wrap;
      word-wrap: break-word;
      min-height: 80px;
      font-family: 'Courier New', Courier, monospace;
    }

    textarea.form-control {
      resize: vertical;
    }

    .btn-container {
      display: flex;
    }

    .btn-container.align-left {
      justify-content: flex-start;
    }

    .btn-container.align-center {
      justify-content: center;
    }

    .btn-container.align-right {
      justify-content: flex-end;
    }

    /* Debug Tabs */
    .debug-tabs {
      margin-top: var(--ntx-form-theme-spacing-md, 16px);
    }

    .debug-tab-nav {
      display: flex;
      border-bottom: 1px solid var(--ntx-form-theme-tab-border, #dee2e6);
      margin-bottom: var(--ntx-form-theme-spacing-md, 16px);
    }

    .debug-tab-button {
      padding: var(--ntx-form-theme-spacing-sm, 8px) var(--ntx-form-theme-spacing-md, 16px);
      border: none;
      background: none;
      font-family: var(--ntx-form-theme-font-family);
      font-size: var(--ntx-form-theme-text-label-size, 14px);
      cursor: pointer;
      color: var(--ntx-form-theme-tab-inactive, #6c757d);
      border-bottom: 2px solid transparent;
      transition: all 0.2s ease;
    }

    .debug-tab-button:hover {
      color: var(--ntx-form-theme-color-primary, #0078d4);
      background-color: var(--ntx-form-theme-color-background-alt, #f8f9fa);
    }

    .debug-tab-button.active {
      color: var(--ntx-form-theme-tab-active, #0078d4);
      border-bottom-color: var(--ntx-form-theme-tab-active, #0078d4);
      font-weight: 500;
    }

    .debug-tab-content {
      display: none;
    }

    .debug-tab-content.active {
      display: block;
    }

    /* Debug Tables */
    .debug-table {
      width: 100%;
      border-collapse: collapse;
      font-family: var(--ntx-form-theme-font-family);
      font-size: var(--ntx-form-theme-text-input-size, 14px);
      background: var(--ntx-form-theme-color-background, #ffffff);
      border-radius: var(--ntx-form-theme-border-radius, 4px);
      overflow: hidden;
      box-shadow: var(--ntx-form-theme-shadow-sm, 0 1px 2px rgba(0, 0, 0, 0.05));
    }

    .debug-table th,
    .debug-table td {
      padding: var(--ntx-form-theme-spacing-sm, 8px) var(--ntx-form-theme-spacing-md, 16px);
      text-align: left;
      border-bottom: 1px solid var(--ntx-form-theme-table-border, #dee2e6);
    }

    .debug-table th {
      background-color: var(--ntx-form-theme-color-primary, #0078d4);
      color: white;
      font-weight: 600;
      text-transform: uppercase;
      font-size: 12px;
      letter-spacing: 0.5px;
    }

    .debug-table tr:nth-child(even) {
      background-color: var(--ntx-form-theme-table-stripe, #f8f9fa);
    }

    .debug-table tr:hover {
      background-color: var(--ntx-form-theme-table-hover, #e9ecef);
    }

    .debug-table .property-name {
      font-weight: 500;
      color: var(--ntx-form-theme-color-primary, #0078d4);
    }

    .debug-table .value-default {
      font-style: italic;
      color: var(--ntx-form-theme-color-secondary, #6c757d);
    }

    .debug-table .value-current {
      font-weight: 500;
    }

    .debug-table .value-json {
      font-family: 'Courier New', Courier, monospace;
      font-size: 12px;
      background-color: var(--ntx-form-theme-color-background-alt, #f8f9fa);
      padding: 4px 8px;
      border-radius: 3px;
      max-width: 300px;
      word-break: break-all;
    }

    .debug-json {
      font-family: 'Courier New', Courier, monospace;
      font-size: 12px;
      background-color: var(--ntx-form-theme-color-background-alt, #f8f9fa);
      padding: 8px;
      border-radius: 3px;
      white-space: pre-wrap;
      word-break: break-all;
      max-height: 200px;
      overflow-y: auto;
      border: 1px solid var(--ntx-form-theme-color-border, #dee2e6);
      margin: 0;
      user-select: text;
      -webkit-user-select: text;
      -moz-user-select: text;
      -ms-user-select: text;
    }

    .debug-json-container {
      position: relative;
    }

    .debug-json-copy-btn {
      position: absolute;
      top: 4px;
      right: 4px;
      padding: 4px 8px;
      font-size: 11px;
      background: var(--ntx-form-theme-color-primary, #0078d4);
      color: white;
      border: none;
      border-radius: 3px;
      cursor: pointer;
      opacity: 0;
      transition: opacity 0.2s ease;
    }

    .debug-json-container:hover .debug-json-copy-btn {
      opacity: 1;
    }

    .debug-json-copy-btn:hover {
      filter: brightness(1.1);
    }

    .debug-json-copy-btn:active {
      transform: scale(0.95);
    }

    .debug-table td {
      vertical-align: top;
      max-width: 400px;
      word-wrap: break-word;
    }

    /* JSON Editor Enhancements */
    .json-editor-container {
      border: 1px solid var(--ntx-form-theme-color-border, #dee2e6);
      border-radius: var(--ntx-form-theme-border-radius, 4px);
      overflow: hidden;
      background: var(--ntx-form-theme-color-input-background, #ffffff);
    }

    .json-editor-toolbar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 8px 12px;
      background: var(--ntx-form-theme-color-background-alt, #f8f9fa);
      border-bottom: 1px solid var(--ntx-form-theme-color-border, #dee2e6);
      font-size: 12px;
    }

    .json-editor-actions {
      display: flex;
      gap: 8px;
    }

    .json-editor-btn {
      padding: 4px 8px;
      font-size: 11px;
      border: 1px solid var(--ntx-form-theme-color-border, #dee2e6);
      background: white;
      border-radius: 3px;
      cursor: pointer;
      color: var(--ntx-form-theme-color-input-text, #333333);
      transition: all 0.2s ease;
    }

    .json-editor-btn:hover {
      background: var(--ntx-form-theme-color-primary, #0078d4);
      color: white;
      border-color: var(--ntx-form-theme-color-primary, #0078d4);
    }

    .json-editor-status {
      font-size: 11px;
      color: var(--ntx-form-theme-color-secondary, #6c757d);
    }

    .json-editor-status.valid {
      color: #28a745;
    }

    .json-editor-status.invalid {
      color: var(--ntx-form-theme-color-error, #dc3545);
    }

    .json-editor-textarea {
      font-family: 'Consolas', 'Monaco', 'Courier New', monospace;
      font-size: 13px;
      line-height: 1.5;
      padding: 12px;
      border: none;
      resize: vertical;
      background: transparent;
      color: var(--ntx-form-theme-color-input-text, #333333);
      min-height: 200px;
      tab-size: 2;
    }

    .json-editor-textarea:focus {
      outline: none;
    }

    .json-viewer {
      background: var(--ntx-form-theme-color-background-alt, #f8f9fa);
      border: 1px solid var(--ntx-form-theme-color-border, #dee2e6);
      border-radius: var(--ntx-form-theme-border-radius, 4px);
      padding: 12px;
      font-family: 'Consolas', 'Monaco', 'Courier New', monospace;
      font-size: 12px;
      white-space: pre;
      overflow-x: auto;
      max-height: 300px;
      overflow-y: auto;
    }

    .json-syntax-string { color: #032f62; }
    .json-syntax-number { color: #005cc5; }
    .json-syntax-boolean { color: #d73a49; }
    .json-syntax-null { color: #6f42c1; }
    .json-syntax-key { color: #22863a; font-weight: 500; }
    .json-syntax-punctuation { color: #24292e; }
  `;

  // Add private property to track active debug tab
  private activeDebugTab: string = 'properties';
  private formatterJsonInput: string = '';
  private formatterSelectedFields: Map<string, { title: string; checked: boolean; order: number }> = new Map();

  @property({ type: String }) label!: string;
  @property({ type: String }) description!: string;
  @property({ type: Boolean }) readOnly!: boolean;
  
  // Custom accessor for value property with explicit change notification
  private _value: {
    success: boolean;
    statusCode: number;
    responseType: string;
    data: string;
    message: string;
    timestamp: string;
    executionTime: number;
    access_token?: string;
    output?: any;
  } = {
    success: false,
    statusCode: 0,
    responseType: '',
    data: '',
    message: '',
    timestamp: '',
    executionTime: 0
  };
  
  @property({ type: Object })
  get value() {
    return this._value;
  }
  set value(newValue: typeof this._value) {
    const oldValue = this._value;
    this._value = newValue;
    console.log('[Value Setter] Value changed, dispatching ntx-value-change event', newValue);
    
    // Dispatch ntx-value-change event immediately when value is set
    this.dispatchEvent(new CustomEvent('ntx-value-change', {
      detail: newValue,
      bubbles: true,
      composed: true,
    }));
    
    this.requestUpdate('value', oldValue);
  }
  @property({ type: String }) requestBody!: string;
  @property({ type: String }) apiUrl!: string;
  @property({ type: String }) requestHeaders!: string;
  @property({ type: String }) bearerToken!: string;
  @property({ type: String }) tokenUrl!: string;
  @property({ type: String }) clientId!: string;
  @property({ type: String }) clientSecret!: string;
  @property({ type: String }) outputValueKey!: string;
  @property({ type: String }) contentType!: string;
  @property({ type: Boolean, reflect: true }) debugMode!: boolean;
  @property({ type: String }) method!: string;
  @property({ type: String }) successMessage!: string;
  @property({ type: String }) warningMessage!: string;
  @property({ type: String }) errorMessage!: string;
  @property({ type: Boolean, reflect: true, attribute: 'send-api-call' }) sendAPICall!: boolean;
  @property({ type: Boolean, reflect: true, attribute: 'allow-multiple-api-calls' }) allowMultipleAPICalls!: boolean;
  @property({ type: Boolean, reflect: true, attribute: 'countdown-enabled' }) countdownEnabled!: boolean;
  @property({ type: Number }) countdownTimer!: number;
  
  // Custom accessors for btnEnabled with explicit change detection
  private _btnEnabled: boolean = true;
  @property({ type: Boolean, reflect: true, attribute: 'btn-enabled' })
  get btnEnabled(): boolean {
    return this._btnEnabled;
  }
  set btnEnabled(value: boolean) {
    const oldValue = this._btnEnabled;
    this._btnEnabled = value;
    console.log(`[Property Setter] btnEnabled changed from ${oldValue} to ${value}`);
    this.requestUpdate('btnEnabled', oldValue);
  }
  
  @property({ type: String, reflect: true, attribute: 'btn-text' }) btnText!: string;
  @property({ type: String, reflect: true, attribute: 'btn-alignment' }) btnAlignment!: string;
  
  // Custom accessors for btnVisible with explicit change detection
  private _btnVisible: boolean = true;
  @property({ type: Boolean, reflect: true, attribute: 'btn-visible' })
  get btnVisible(): boolean {
    return this._btnVisible;
  }
  set btnVisible(value: boolean) {
    const oldValue = this._btnVisible;
    this._btnVisible = value;
    console.log(`[Property Setter] btnVisible changed from ${oldValue} to ${value}`);
    this.requestUpdate('btnVisible', oldValue);
  }
  
  @property({ type: Boolean, reflect: true, attribute: 'form-validation' }) formValidation!: boolean;
  @property({ type: String, reflect: true, attribute: 'submission-action' }) submissionAction!: string;
  @property({ type: Boolean, reflect: true, attribute: 'submit-hidden' }) submitHidden!: boolean;

  // Instance-specific state (not reactive properties - these are internal state only)
  private isLoading = false;
  private apiResponse: string = '';
  private responseType: 'success' | 'warning' | 'error' | null = null;
  private hasSuccessfulCall = false;
  private lastApiCallTime = 0;
  private showCooldownAlert = false;
  private lastCooldownAlertTime = 0;
  private apiCallStartTime = 0;
  private cooldownTimerId: number | null = null; // Track the timer for cleanup
  private formValidationError: string = '';
  private oauthTokenResponse: any = null;

  constructor() {
    super();
    // Initialize all properties with their default values
    this.label = '';
    this.description = '';
    this.readOnly = false;
    // Note: value is initialized in the private _value field declaration, not here
    this.requestBody = '';
    this.apiUrl = '';
    this.requestHeaders = '';
    this.bearerToken = '';
    this.tokenUrl = '';
    this.clientId = '';
    this.clientSecret = '';
    this.outputValueKey = '';
    this.contentType = 'application/json';
    this.debugMode = false;
    this.method = 'POST';
    this.successMessage = 'API call completed successfully';
    this.warningMessage = 'API call completed with warnings';
    this.errorMessage = 'API call failed';
    this.sendAPICall = false;
    this.allowMultipleAPICalls = false;
    this.countdownEnabled = false;
    this.countdownTimer = 5;
    this._btnEnabled = true;
    this.btnText = 'Send API Request';
    this.btnAlignment = 'left';
    this._btnVisible = true;
    this.formValidation = false;
    this.submissionAction = 'no-submit';
    this.submitHidden = false;
  }

  // Called when the element is added to the DOM
  connectedCallback() {
    super.connectedCallback();
    // Apply submit button visibility on initial load
    this.toggleSubmitButtonVisibility();
  }

  static getMetaConfig(): PluginContract {
    return {
      controlName: 'Web Request Plugin',
      fallbackDisableSubmit: false,
      version: '1.0.0',
      description: 'A Nintex Form Plugin for making API calls.',
      properties: {
        apiUrl: {
          type: 'string',
          title: 'API URL',
          description: 'The endpoint URL to call',
          defaultValue: '',
        } as PropType,
        method: {
          type: 'string',
          title: 'HTTP Method',
          description: 'The HTTP method to use for the API call.',
          enum: ['POST', 'GET', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
          defaultValue: 'POST',
        } as PropType,
        requestHeaders: {
          type: 'string',
          title: 'Request Headers',
          description: 'Headers to include in the API request, as a JSON object.',
          defaultValue: '',
        } as PropType,
        bearerToken: {
          type: 'string',
          title: 'Bearer Token',
          description: 'Optional: Bearer token value for Authorization header (used if Token URL is not provided)',
          defaultValue: '',
        } as PropType,
        tokenUrl: {
          type: 'string',
          title: 'Token URL',
          description: 'Optional: OAuth token endpoint URL e.g. https://api.example.com/oauth2/v1/token',
          defaultValue: '',
        } as PropType,
        clientId: {
          type: 'string',
          title: 'Client ID',
          description: 'OAuth Client ID required if Token URL is provided',
          defaultValue: '',
        } as PropType,
        clientSecret: {
          type: 'string',
          title: 'Client Secret',
          description: 'OAuth Client Secret required if Token URL is provided',
          defaultValue: '',
        } as PropType,
        requestBody: {
          type: 'string',
          title: 'Request Body',
          description: 'Body to send in the API request. Format depends on Content Type.',
          defaultValue: '',
        } as PropType,
        outputValueKey: {
          type: 'string',
          title: 'Output Value Key',
          description: 'Optional: JSON key path to extract from response',
          defaultValue: '',
        } as PropType,
        contentType: {
          type: 'string',
          title: 'Content Type',
          description: 'The Content-Type header for the request body.',
          enum: ['application/json', 'application/x-www-form-urlencoded', 'text/plain'],
          defaultValue: 'application/json',
        } as PropType,
        waitForResponse: {
          type: 'boolean',
          title: 'Wait for Callback Response',
          description: 'If true, the plugin will wait for a callback post body once the workflow is completed.',
          defaultValue: false,
        } as PropType,
        value: {
          type: 'object',
          title: 'API Response',
          description: 'The complete API response object containing status, data, and metadata',
          isValueField: true,
          properties: {
            success: {
              type: 'boolean',
              title: 'Success',
              description: 'Whether the API call was successful',
            },
            statusCode: {
              type: 'integer',
              title: 'HTTP Status Code',
              description: 'The HTTP response status code',
            },
            responseType: {
              type: 'string',
              title: 'Response Type',
              description: 'The categorized response type (success, warning, error)',
            },
            data: {
              type: 'string',
              title: 'Response Data',
              description: 'The raw response data from the API',
            },
            message: {
              type: 'string',
              title: 'Response Message',
              description: 'User-friendly message describing the result',
            },
            timestamp: {
              type: 'string',
              title: 'Timestamp',
              description: 'ISO timestamp of when the API call was made',
            },
            executionTime: {
              type: 'integer',
              title: 'Execution Time',
              description: 'Time taken for the API call in milliseconds',
            },
            access_token: {
              type: 'string',
              title: 'Access Token',
              description: 'Automatically extracted access_token from response if present',
            },
            output: {
              type: 'string',
              title: 'Custom Output',
              description: 'Custom extracted value based on outputValueKey property',
            }
          },
          defaultValue: {
            success: false,
            statusCode: 0,
            responseType: '',
            data: '',
            message: '',
            timestamp: '',
            executionTime: 0
          },
        } as PropType,
        debugMode: {
          type: 'boolean',
          title: 'Debug Mode',
          description: 'If true, enables the JSON converter UI.',
          defaultValue: false,
        } as PropType,
        successMessage: {
          type: 'string',
          title: 'Success Message',
          description: 'Custom message to display when the API call succeeds. Can be plain text or a Response Format Configuration JSON from the Response Formatter.',
          defaultValue: 'API call completed successfully',
        } as PropType,
        warningMessage: {
          type: 'string',
          title: 'Warning Message',
          description: 'Custom message to display when the API call returns a warning. Can be plain text or a Response Format Configuration JSON from the Response Formatter.',
          defaultValue: 'API call completed with warnings',
        } as PropType,
        errorMessage: {
          type: 'string',
          title: 'Error Message',
          description: 'Custom message to display when the API call fails. Can be plain text or a Response Format Configuration JSON from the Response Formatter.',
          defaultValue: 'API call failed',
        } as PropType,
        sendAPICall: {
          type: 'boolean',
          title: 'Send API Call',
          description: 'Set to true to trigger the API call. Automatically resets to false after execution.',
          defaultValue: false,
        } as PropType,
        allowMultipleAPICalls: {
          type: 'boolean',
          title: 'Allow Multiple API Calls',
          description: 'If true, allows repeated API calls. If false, disables further calls after first success/warning.',
          defaultValue: false,
        } as PropType,
        countdownEnabled: {
          type: 'boolean',
          title: 'Enable Countdown Timer',
          description: 'If true, enforces a countdown timer between API calls. If false, allows unlimited rapid calls.',
          defaultValue: false,
        } as PropType,
        countdownTimer: {
          type: 'number',
          title: 'Countdown Timer',
          description: 'Number of seconds to wait between API calls when countdown is enabled.',
          defaultValue: 5,
        } as PropType,
        btnVisible: {
          type: 'boolean',
          title: 'Button Visible',
          description: 'If true, the button is visible on the form.',
          defaultValue: true,
        } as PropType,
        btnEnabled: {
          type: 'boolean',
          title: 'Button Enabled',
          description: 'If true, the button is enabled and can be clicked.',
          defaultValue: true,
        } as PropType,
        btnText: {
          type: 'string',
          title: 'Button Text',
          description: 'The text to display on the button.',
          defaultValue: 'Send API Request',
        } as PropType,
        btnAlignment: {
          type: 'string',
          title: 'Button Alignment',
          description: 'The alignment of the button within the container.',
          enum: ['left', 'center', 'right'],
          defaultValue: 'left',
        } as PropType,
        formValidation: {
          type: 'boolean',
          title: 'Validate Form Before API Call',
          description: 'If true, validates the entire Nintex form before making the API call. Only proceeds if all required fields are valid.',
          defaultValue: false,
        } as PropType,
        submissionAction: {
          type: 'string',
          title: 'Submission Action',
          description: 'Action to take after a successful API call. Set to "only-submit" to skip API call and directly submit the form.',
          enum: ['no-submit', 'quick-submit', 'delayed-submit', 'only-submit'],
          defaultValue: 'no-submit',
        } as PropType,
        submitHidden: {
          type: 'boolean',
          title: 'Hide Submit Button',
          description: 'If true, hides the Nintex form submit button from users.',
          defaultValue: false,
        } as PropType,
      },
      standardProperties: {
        fieldLabel: true,
        description: true,
        readOnly: true,
        defaultValue: false,
      },
    };
  }

  render() {
    const showJsonConverter = this.debugMode;
    
    if (showJsonConverter) {
      // Debug mode: Enhanced debug interface with tabs
      return html`
        <div class="plugin-container">
          ${this.btnVisible ? html`
            <div class="form-group">
              <div class="btn-container align-${this.btnAlignment}">
                <button 
                  class="btn btn-primary" 
                  part="api-button"
                  @click=${() => this.triggerAPICall()} 
                  ?disabled=${this.isButtonDisabled()}
                >
                  ${this.isLoading ? html`<span class="spinner"></span>Calling API...` : this.btnText}
                </button>
              </div>
              ${this.renderResponseAlert()}
            </div>
          ` : ''}

          <div class="debug-tabs">
            <div class="debug-tab-nav">
              <button 
                class="debug-tab-button ${this.activeDebugTab === 'properties' ? 'active' : ''}"
                @click=${() => this.setActiveTab('properties')}
              >
                Plugin Properties
              </button>
              <button 
                class="debug-tab-button ${this.activeDebugTab === 'request' ? 'active' : ''}"
                @click=${() => this.setActiveTab('request')}
              >
                Request Details
              </button>
              <button 
                class="debug-tab-button ${this.activeDebugTab === 'tools' ? 'active' : ''}"
                @click=${() => this.setActiveTab('tools')}
              >
                API Tools
              </button>
              <button 
                class="debug-tab-button ${this.activeDebugTab === 'formatter' ? 'active' : ''}"
                @click=${() => this.setActiveTab('formatter')}
              >
                Response Formatter
              </button>
            </div>

            <div class="debug-tab-content ${this.activeDebugTab === 'properties' ? 'active' : ''}">
              ${this.renderPropertiesTab()}
            </div>

            <div class="debug-tab-content ${this.activeDebugTab === 'request' ? 'active' : ''}">
              ${this.renderRequestDetailsTab()}
            </div>

            <div class="debug-tab-content ${this.activeDebugTab === 'tools' ? 'active' : ''}">
              ${this.renderAPIToolsTab()}
            </div>

            <div class="debug-tab-content ${this.activeDebugTab === 'formatter' ? 'active' : ''}">
              ${this.renderResponseFormatterTab()}
            </div>
          </div>
        </div>
      `;
    }
    
    // Not in debug mode: only show UI if button is visible
    if (!this.btnVisible) {
      // Silent mode: no visible UI, API call happens in background
      return html`<div class="plugin-container" style="display: none;"></div>`;
    }
    
    return html`
      <div class="plugin-container">
        <div class="form-group">
          <div class="btn-container align-${this.btnAlignment}">
            <button 
              class="btn btn-primary" 
              part="api-button"
              @click=${() => this.triggerAPICall()} 
              ?disabled=${this.isButtonDisabled()}
            >
              ${this.isLoading ? html`<span class="spinner"></span>Processing...` : this.btnText}
            </button>
          </div>
          ${this.renderResponseAlert()}
        </div>
      </div>
    `;
  }

  private renderResponseAlert() {
    const now = Date.now();
    const timeSinceLastCall = now - this.lastApiCallTime;
    const cooldownMs = this.countdownTimer * 1000;
    const inCooldown = this.countdownEnabled && this.lastApiCallTime > 0 && timeSinceLastCall < cooldownMs;
    
    // Check if we're in delayed submission countdown
    const isDelayedSubmission = this.submissionAction === 'delayed-submit' && 
                                this.cooldownTimerId !== null && 
                                (this.responseType === 'success' || this.responseType === 'warning');
    
    // Show form validation error if present
    if (this.formValidationError) {
      return html`
        <div class="alert alert-error" part="validation-alert">
          <div>
            <span class="alert-icon">✗</span>
            <strong>Validation Error:</strong> ${this.formValidationError}
          </div>
        </div>
      `;
    }
    
    // Show cooldown message only if someone attempted to trigger during cooldown
    if (inCooldown && this.showCooldownAlert) {
      const remainingSeconds = Math.ceil((cooldownMs - timeSinceLastCall) / 1000);
      return html`
        <div class="alert alert-info" part="cooldown-alert">
          <div>
            <span class="alert-icon">ℹ</span>
            <strong>Information:</strong> Please wait ${remainingSeconds} seconds before sending another request.
          </div>
        </div>
      `;
    }
    
    // Only show response alert if we have a response AND it's newer than the last cooldown alert
    if (!this.apiResponse || !this.responseType) return '';
    
    // Don't show old responses that happened before we showed a cooldown alert
    if (this.lastCooldownAlertTime > this.lastApiCallTime) return '';
    
    const alertClass = `alert-${this.responseType}`;
    const icon = this.getAlertIcon(this.responseType);
    const typeLabel = this.responseType.charAt(0).toUpperCase() + this.responseType.slice(1);
    const customMessage = this.getCustomMessage(this.responseType);
    
    // Calculate remaining seconds for delayed submission
    let submissionCountdown = 0;
    if (isDelayedSubmission) {
      submissionCountdown = Math.ceil((cooldownMs - timeSinceLastCall) / 1000);
    }
    
    // Check if customMessage contains newlines (formatted response)
    const isFormattedResponse = customMessage.includes('\n');
    
    // For success responses, show only the custom message
    if (this.responseType === 'success') {
      return html`
        <div class="alert ${alertClass}" part="response-alert">
          <div>
            <span class="alert-icon">${icon}</span>
            <strong>${typeLabel}</strong>
          </div>
          ${isFormattedResponse ? html`
            <div class="alert-response" style="white-space: pre-line; margin-top: 8px;">
              ${customMessage}
            </div>
          ` : html`
            <div style="display: inline; margin-left: 4px;">
              ${customMessage}
            </div>
          `}
          ${isDelayedSubmission ? html`
            <div class="alert-response">
              Submitting form in ${submissionCountdown} seconds...
            </div>
          ` : ''}
        </div>
      `;
    }
    
    // For warnings and errors, show custom message + actual response message
    return html`
      <div class="alert ${alertClass}" part="response-alert">
        <div>
          <span class="alert-icon">${icon}</span>
          <strong>${typeLabel}</strong>
        </div>
        ${isFormattedResponse ? html`
          <div class="alert-response" style="white-space: pre-line; margin-top: 8px;">
            ${customMessage}
          </div>
        ` : html`
          <div style="display: inline; margin-left: 4px;">
            ${customMessage}
          </div>
        `}
        ${this.value?.message ? html`
          <div class="alert-response">
            ${this.value.message}
          </div>
        ` : ''}
        ${isDelayedSubmission ? html`
          <div class="alert-response">
            Submitting form in ${submissionCountdown} seconds...
          </div>
        ` : ''}
      </div>
    `;
  }

  private getAlertIcon(type: 'success' | 'warning' | 'error'): string {
    switch (type) {
      case 'success': return '✓';
      case 'warning': return '⚠';
      case 'error': return '✗';
      default: return '•';
    }
  }

  private getCustomMessage(type: 'success' | 'warning' | 'error'): string {
    let message: string;
    switch (type) {
      case 'success': message = this.successMessage; break;
      case 'warning': message = this.warningMessage; break;
      case 'error': message = this.errorMessage; break;
      default: message = 'Unknown response type';
    }
    
    // Check if message is a Response Format Configuration JSON (quoted format: "{...}")
    if (message.startsWith('"{') && message.endsWith('}"')) {
      try {
        // Remove outer quotes and unescape
        const unquoted = message.slice(1, -1).replace(/\\"/g, '"');
        const config = JSON.parse(unquoted);
        
        // Format response using config
        return this.formatResponseWithConfig(config);
      } catch (e) {
        console.error('[Message Formatting] Failed to parse quoted config:', e);
        return message; // Fall back to showing the raw message
      }
    }
    
    // Check if message is a Response Format Configuration JSON (unquoted format: {...})
    if (message.trim().startsWith('{"fields"') && message.trim().endsWith('}')) {
      try {
        const config = JSON.parse(message);
        
        // Format response using config
        return this.formatResponseWithConfig(config);
      } catch (e) {
        console.error('[Message Formatting] Failed to parse unquoted config:', e);
        return message; // Fall back to showing the raw message
      }
    }
    
    // Return plain text message
    return message;
  }

  private formatResponseWithConfig(config: any): string {
    if (!config.fields || !Array.isArray(config.fields)) {
      return 'Invalid configuration format';
    }
    
    // Parse the response data
    let responseData: any;
    try {
      responseData = JSON.parse(this.value.data);
    } catch (e) {
      console.error('[Message Formatting] Failed to parse response data:', e);
      return 'Unable to parse response data';
    }
    
    // Format each field according to config
    const lines: string[] = [];
    config.fields.forEach((field: any) => {
      const value = this.extractNestedValue(responseData, field.path);
      const displayValue = value !== undefined ? String(value) : 'N/A';
      lines.push(`${field.title}: ${displayValue}`);
    });
    
    return lines.join('\n');
  }

  // Handle property changes from the host application
  updated(changedProperties: Map<string, any>) {
    // Note: value change event is now dispatched in the value setter, not here
    
    // Watch for sendAPICall property changes to trigger API automatically
    if (changedProperties.has('sendAPICall') && this.sendAPICall) {
      this.handleAPICallTrigger();
    }

    // Watch for submitHidden property changes to hide/show the Nintex submit button
    if (changedProperties.has('submitHidden')) {
      this.toggleSubmitButtonVisibility();
    }

    // Log UI property changes for debugging
    if (changedProperties.has('btnVisible')) {
      console.log(`[UI Property Change] btnVisible changed to: ${this.btnVisible}`);
      this.requestUpdate();
    }
    
    if (changedProperties.has('btnEnabled')) {
      console.log(`[UI Property Change] btnEnabled changed to: ${this.btnEnabled}`);
      this.requestUpdate();
    }
    
    if (changedProperties.has('btnText')) {
      console.log(`[UI Property Change] btnText changed to: ${this.btnText}`);
      this.requestUpdate();
    }
    
    if (changedProperties.has('btnAlignment')) {
      console.log(`[UI Property Change] btnAlignment changed to: ${this.btnAlignment}`);
      this.requestUpdate();
    }
    
    if (changedProperties.has('debugMode')) {
      console.log(`[UI Property Change] debugMode changed to: ${this.debugMode}`);
      this.requestUpdate();
    }
  }

  private toggleSubmitButtonVisibility(): void {
    const styleId = 'ntx-submit-button-hidden-style';
    
    if (this.submitHidden) {
      // Hide the submit button by injecting CSS
      if (!document.getElementById(styleId)) {
        const style = document.createElement('style');
        style.id = styleId;
        style.textContent = `
          button[data-e2e="btn-submit"] {
            display: none !important;
          }
        `;
        document.head.appendChild(style);
        console.log('[Submit Button] Hidden via CSS');
      }
    } else {
      // Show the submit button by removing the CSS
      const existingStyle = document.getElementById(styleId);
      if (existingStyle) {
        existingStyle.remove();
        console.log('[Submit Button] Made visible by removing CSS');
      }
    }
  }

  private async validateNintexForm(): Promise<boolean> {
    console.log('[Validation] Starting form validation...');
    const form = document.querySelector('form');
    if (!form) {
      console.warn('[Validation] No form found for validation');
      return true; // If no form found, proceed anyway
    }
    
    // Trigger validation by programmatically calling reportValidity on form elements
    // This validates without submitting the form
    console.log('[Validation] Triggering validation on form inputs');
    const formElements = form.querySelectorAll('input, textarea, select');
    formElements.forEach((element: Element) => {
      if (element instanceof HTMLInputElement || 
          element instanceof HTMLTextAreaElement || 
          element instanceof HTMLSelectElement) {
        // Call reportValidity to trigger native HTML5 validation
        element.reportValidity();
      }
    });
    
    // Wait briefly for Nintex's custom validation to update
    console.log('[Validation] Waiting 200ms for validation state to update...');
    await new Promise(resolve => setTimeout(resolve, 200));
    
    // Check for invalid fields using multiple methods
    // Method 1: Nintex's aria-invalid attribute
    const ariaInvalidFields = form.querySelectorAll('[aria-invalid="true"]');
    
    // Method 2: HTML5 validation state
    const html5InvalidFields = form.querySelectorAll(':invalid');
    
    // Method 3: Nintex error messages
    const nintexErrorMessages = form.querySelectorAll('.ntx-form-error, [class*="error-message"]');
    
    const totalInvalidCount = ariaInvalidFields.length + html5InvalidFields.length;
    const isValid = totalInvalidCount === 0 && nintexErrorMessages.length === 0;
    
    console.log('[Validation] Invalid fields found:');
    console.log('  - aria-invalid:', ariaInvalidFields.length);
    console.log('  - HTML5 invalid:', html5InvalidFields.length);
    console.log('  - Error messages:', nintexErrorMessages.length);
    console.log('[Validation] Form is valid:', isValid);
    
    if (!isValid) {
      console.log('[Validation] Form validation FAILED. Invalid fields:');
      ariaInvalidFields.forEach((field, index) => {
        console.log(`  [aria-invalid ${index + 1}]`, field);
      });
      html5InvalidFields.forEach((field, index) => {
        console.log(`  [HTML5 invalid ${index + 1}]`, field);
      });
    }
    
    return isValid;
  }

  private async handleAPICallTrigger() {
    console.log('[API Call] handleAPICallTrigger started');
    // Immediately set sendAPICall to false to prevent multiple calls
    this.sendAPICall = false;
    
    // Clear any previous validation error
    this.formValidationError = '';
    
    // Check if submission action is set to only-submit
    if (this.submissionAction === 'only-submit') {
      console.log('[API Call] Submission action is only-submit - skipping API call and validation, submitting form directly');
      this.submitNintexForm();
      return;
    }
    
    // Check if form validation is required
    if (this.formValidation) {
      console.log('[API Call] Form validation is ENABLED, checking form...');
      const isFormValid = await this.validateNintexForm();
      console.log('[API Call] Validation result:', isFormValid);
      
      if (!isFormValid) {
        console.log('[API Call] Form validation FAILED - BLOCKING API call');
        this.formValidationError = 'Please fill in all required fields correctly before submitting.';
        this.requestUpdate();
        return;
      }
      console.log('[API Call] Form validation PASSED - proceeding with API call');
    } else {
      console.log('[API Call] Form validation is DISABLED');
    }
    
    // Check if multiple API calls are allowed
    if (!this.allowMultipleAPICalls && this.hasSuccessfulCall) {
      console.log('[API Call] Multiple API calls not allowed and already had successful call - BLOCKING');
      // Multiple calls not allowed and we've already had a successful call - prevent execution
      return;
    }
    
    // Check cooldown timer - prevent API call if still in cooldown (only if countdown is enabled)
    if (this.countdownEnabled) {
      const now = Date.now();
      const timeSinceLastCall = now - this.lastApiCallTime;
      const cooldownMs = this.countdownTimer * 1000;
      const inCooldown = this.lastApiCallTime > 0 && timeSinceLastCall < cooldownMs;
      
      if (inCooldown) {
        console.log('[API Call] In cooldown period - BLOCKING');
        // Show cooldown alert and don't proceed
        this.showCooldownAlert = true;
        this.lastCooldownAlertTime = Date.now(); // Record when we showed the cooldown alert
        this.startCooldownTimer();
        return;
      }
    }
    
    // Proceed with API call
    console.log('[API Call] All checks passed - calling handleApiCall()');
    this.handleApiCall();
  }

  private triggerAPICall() {
    // Set sendAPICall to true when button is clicked
    this.sendAPICall = true;
  }

  private isButtonDisabled(): boolean {
    // If allowMultipleAPICalls is true, NEVER disable the button permanently
    // Only disable during loading - ignore btnEnabled and hasSuccessfulCall
    if (this.allowMultipleAPICalls) {
      return this.isLoading;
    }
    
    // If allowMultipleAPICalls is false, disable for loading, btnEnabled, OR after successful/warning call
    // Note: Errors (this.responseType === 'error') still allow retry
    const permanentlyDisabled = this.hasSuccessfulCall && (this.responseType === 'success' || this.responseType === 'warning');
    return this.isLoading || !this.btnEnabled || permanentlyDisabled;
  }

  private setActiveTab(tabName: 'properties' | 'request' | 'tools' | 'formatter'): void {
    this.activeDebugTab = tabName;
    this.requestUpdate();
  }

  private renderPropertiesTab() {
    // Get all properties dynamically from the metadata
    const metadata = (this.constructor as typeof DafWebRequestPlugin).getMetaConfig();
    const properties: Array<{ name: string; default: any; config: any }> = [];
    
    // Iterate through all properties defined in the metadata
    if (metadata.properties) {
      for (const [propName, propConfig] of Object.entries(metadata.properties)) {
        // Skip the value property as it's output-only and complex
        if (propName === 'value') continue;
        
        properties.push({
          name: propName,
          default: (propConfig as any).defaultValue,
          config: propConfig
        });
      }
    }
    
    // Sort properties alphabetically for consistency
    properties.sort((a, b) => a.name.localeCompare(b.name));

    return html`
      <table class="debug-table">
        <thead>
          <tr>
            <th>Property</th>
            <th>Default Value</th>
            <th>Current Value</th>
          </tr>
        </thead>
        <tbody>
          ${properties.map(prop => html`
            <tr>
              <td><code class="property-name">${prop.name}</code></td>
              <td class="value-default">${this.formatValue(prop.default)}</td>
              <td class="value-current">${this.renderPropertyInput(prop.name, prop.config)}</td>
            </tr>
          `)}
        </tbody>
      </table>
    `;
  }

  private renderPropertyInput(propName: string, propConfig: any) {
    const currentValue = (this as any)[propName];
    const propType = propConfig.type;

    // Boolean type - display as Yes/No
    if (propType === 'boolean') {
      return html`
        <span style="font-weight: 500; color: ${currentValue ? '#28a745' : '#dc3545'};">
          ${currentValue ? '✓ Yes' : '✗ No'}
        </span>
      `;
    }

    // String type - mask sensitive properties and display
    if (propType === 'string') {
      const displayValue = (propName === 'bearerToken' || propName === 'clientSecret') && currentValue && currentValue.length > 0
        ? '***' + currentValue.slice(-4)
        : currentValue;

      // Truncate long strings
      const truncated = displayValue && displayValue.length > 100 
        ? displayValue.substring(0, 100) + '...' 
        : displayValue;

      return html`
        <span style="font-family: 'Courier New', monospace; font-size: 12px; word-break: break-all;">
          ${truncated || '<empty>'}
        </span>
      `;
    }

    // Number type - display as number
    if (propType === 'number' || propType === 'integer') {
      return html`
        <span style="font-weight: 500;">
          ${currentValue}
        </span>
      `;
    }

    // Default fallback - just display the value
    return html`<span>${this.formatValue(currentValue)}</span>`;
  }

  private renderRequestDetailsTab() {
    return html`
      <table class="debug-table">
        <thead>
          <tr>
            <th>Property</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>apiUrl</code></td>
            <td style="word-break: break-all;">${this.apiUrl || '<not set>'}</td>
          </tr>
          <tr>
            <td><code>method</code></td>
            <td>${this.method}</td>
          </tr>
          ${this.oauthTokenResponse ? html`
            <tr>
              <td><code>OAuth Token</code></td>
              <td>
                <div class="debug-json-container">
                  <button 
                    class="debug-json-copy-btn"
                    @click=${() => this.copyToClipboard(JSON.stringify(this.oauthTokenResponse, null, 2))}
                    title="Copy to clipboard"
                  >
                    📋 Copy
                  </button>
                  <pre class="debug-json">${JSON.stringify(this.oauthTokenResponse, null, 2)}</pre>
                </div>
              </td>
            </tr>
          ` : ''}
          <tr>
            <td><code>requestHeaders</code></td>
            <td>
              ${this.requestHeaders ? html`
                <div class="debug-json-container">
                  <button 
                    class="debug-json-copy-btn"
                    @click=${() => this.copyToClipboard(this.formatJsonForDisplay(this.requestHeaders))}
                    title="Copy to clipboard"
                  >
                    📋 Copy
                  </button>
                  <pre class="debug-json">${this.formatJsonForDisplay(this.requestHeaders)}</pre>
                </div>
              ` : '<not set>'}
            </td>
          </tr>
          <tr>
            <td><code>requestBody</code></td>
            <td>
              ${this.requestBody ? html`
                <div class="debug-json-container">
                  <button 
                    class="debug-json-copy-btn"
                    @click=${() => this.copyToClipboard(this.formatJsonForDisplay(this.requestBody))}
                    title="Copy to clipboard"
                  >
                    📋 Copy
                  </button>
                  <pre class="debug-json">${this.formatJsonForDisplay(this.requestBody)}</pre>
                </div>
              ` : '<not set>'}
            </td>
          </tr>
          <tr>
            <td><code>State</code></td>
            <td>
              <strong>Loading:</strong> ${this.isLoading}<br>
              <strong>Has Successful Call:</strong> ${this.hasSuccessfulCall}<br>
              <strong>Button Disabled:</strong> ${this.isButtonDisabled()}
            </td>
          </tr>
          ${this.apiResponse ? html`
            <tr>
              <td><code>Response</code></td>
              <td>
                <div class="debug-json-container">
                  <button 
                    class="debug-json-copy-btn"
                    @click=${() => this.copyToClipboard(this.formatJsonForDisplay(this.apiResponse))}
                    title="Copy to clipboard"
                  >
                    📋 Copy
                  </button>
                  <pre class="debug-json">${this.formatJsonForDisplay(this.apiResponse)}</pre>
                </div>
              </td>
            </tr>
          ` : ''}
        </tbody>
      </table>
    `;
  }

  private renderAPIToolsTab() {
    const isValidJson = this.isValidJson(this.requestBody);
    const jsonStatus = this.getJsonStatus(this.requestBody);

    return html`
      <div class="debug-tools">
        <div class="form-group">
          <label class="control-label">JSON Request Body Editor</label>
          <div class="json-editor-container">
            <div class="json-editor-toolbar">
              <div class="json-editor-actions">
                <button 
                  class="json-editor-btn" 
                  @click=${this.formatJson}
                  ?disabled=${!isValidJson}
                  title="Format and beautify JSON"
                >
                  ✨ Format
                </button>
                <button 
                  class="json-editor-btn" 
                  @click=${this.minifyJson}
                  ?disabled=${!isValidJson}
                  title="Minify JSON to single line"
                >
                  🗜️ Minify
                </button>
                <button 
                  class="json-editor-btn" 
                  @click=${this.clearJson}
                  title="Clear JSON content"
                >
                  🗑️ Clear
                </button>
                <button 
                  class="json-editor-btn" 
                  @click=${this.insertSampleJson}
                  title="Insert sample JSON"
                >
                  📝 Sample
                </button>
              </div>
              <div class="json-editor-status ${isValidJson ? 'valid' : 'invalid'}">
                ${jsonStatus}
              </div>
            </div>
            <textarea 
              class="form-control json-editor-textarea" 
              .value=${this.requestBody} 
              @input=${this.handleJsonInput}
              @blur=${this.handleJsonBlur}
              @paste=${this.handleJsonPaste}
              placeholder="Enter JSON request body here..."
              spellcheck="false"
            ></textarea>
          </div>
        </div>

        ${this.renderJsonOutput()}
        
        ${this.renderJsonPreview()}
      </div>
    `;
  }

  private renderResponseFormatterTab() {
    const hasJsonInput = this.formatterJsonInput.trim().length > 0;
    const isValidJson = hasJsonInput && this.isValidJson(this.formatterJsonInput);
    
    let parsedJson: any = null;
    let jsonError = '';
    
    if (hasJsonInput) {
      try {
        parsedJson = JSON.parse(this.formatterJsonInput);
      } catch (e) {
        jsonError = (e as Error).message;
      }
    }

    return html`
      <div class="debug-tools">
        <div class="form-group">
          <label class="control-label">Paste Response JSON</label>
          <textarea 
            class="form-control" 
            rows="8"
            .value=${this.formatterJsonInput}
            @input=${(e: Event) => {
              const target = e.target as HTMLTextAreaElement;
              this.formatterJsonInput = target.value;
              this.formatterSelectedFields.clear();
              this.requestUpdate();
            }}
            placeholder="Paste your API response JSON here..."
            style="font-family: 'Consolas', 'Monaco', 'Courier New', monospace; font-size: 13px;"
          ></textarea>
          ${jsonError ? html`<div class="text-danger" style="margin-top: 8px;">${jsonError}</div>` : ''}
        </div>

        ${isValidJson && parsedJson ? html`
          <div class="form-group">
            <label class="control-label">Configure Response Fields</label>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
              <!-- Available Fields -->
              <div>
                <h4 style="font-size: 14px; font-weight: 600; margin-bottom: 12px; color: var(--ntx-form-theme-color-input-text);">Available Fields</h4>
                <div style="max-height: 500px; overflow-y: auto; border: 1px solid var(--ntx-form-theme-color-border); border-radius: 4px; padding: 12px; background: var(--ntx-form-theme-color-background);">
                  ${this.renderAvailableFields(parsedJson, '')}
                </div>
              </div>
              
              <!-- Selected Fields -->
              <div>
                <h4 style="font-size: 14px; font-weight: 600; margin-bottom: 12px; color: var(--ntx-form-theme-color-input-text);">Selected Fields (drag to reorder)</h4>
                <div style="max-height: 500px; overflow-y: auto; border: 1px solid var(--ntx-form-theme-color-border); border-radius: 4px; padding: 12px; background: var(--ntx-form-theme-color-background-alt);">
                  ${this.renderSelectedFieldsList()}
                </div>
              </div>
            </div>
          </div>

          ${this.formatterSelectedFields.size > 0 ? html`
            <div class="form-group">
              <label class="control-label">Preview</label>
              <div style="border: 1px solid var(--ntx-form-theme-color-border); border-radius: 4px; padding: 16px; background: var(--ntx-form-theme-color-background-alt);">
                ${this.renderFormattedPreview(parsedJson)}
              </div>
            </div>

            <div class="form-group">
              <label class="control-label">Response Format Configuration</label>
              <div style="position: relative;">
                <textarea 
                  class="form-control" 
                  readonly
                  rows="3"
                  .value=${this.generateResponseConfigQuoted()}
                  style="font-family: 'Consolas', 'Monaco', 'Courier New', monospace; font-size: 12px; padding-right: 80px;"
                ></textarea>
                <button 
                  class="btn btn-primary" 
                  style="position: absolute; top: 8px; right: 8px; padding: 4px 12px; font-size: 12px;"
                  @click=${() => {
                    const quoted = this.generateResponseConfigQuoted();
                    this.copyToClipboard(quoted);
                  }}
                  title="Copy to clipboard"
                >
                  📋 Copy
                </button>
              </div>
            </div>
          ` : ''}
        ` : ''}
      </div>
    `;
  }

  private renderAvailableFields(obj: any, path: string): any {
    const fields: any[] = [];
    
    const processObject = (current: any, currentPath: string) => {
      if (current && typeof current === 'object' && !Array.isArray(current)) {
        Object.keys(current).forEach(key => {
          const fullPath = currentPath ? `${currentPath}.${key}` : key;
          const value = current[key];
          
          // Skip nested objects and arrays for now, only show leaf values
          if (value !== null && typeof value !== 'object') {
            const fieldKey = fullPath;
            const isChecked = this.formatterSelectedFields.get(fieldKey)?.checked || false;
            
            fields.push(html`
              <div style="display: flex; align-items: flex-start; margin-bottom: 10px; padding: 8px; border-radius: 4px; background: ${isChecked ? 'var(--ntx-form-theme-color-primary-light, #e3f2fd)' : 'transparent'}; transition: background 0.2s;">
                <input 
                  type="checkbox" 
                  .checked=${isChecked}
                  @change=${(e: Event) => {
                    const target = e.target as HTMLInputElement;
                    if (target.checked) {
                      // Get highest order number and add 1
                      let maxOrder = -1;
                      this.formatterSelectedFields.forEach(field => {
                        if (field.order > maxOrder) maxOrder = field.order;
                      });
                      this.formatterSelectedFields.set(fieldKey, { 
                        title: fieldKey.split('.').pop() || fieldKey, 
                        checked: true,
                        order: maxOrder + 1
                      });
                    } else {
                      this.formatterSelectedFields.delete(fieldKey);
                    }
                    this.requestUpdate();
                  }}
                  style="width: 18px; height: 18px; cursor: pointer; margin-top: 2px; flex-shrink: 0;"
                />
                <div style="flex: 1; margin-left: 10px; min-width: 0;">
                  <div style="font-weight: 500; margin-bottom: 4px; word-break: break-word;">
                    <code style="background: var(--ntx-form-theme-color-background-alt); padding: 2px 6px; border-radius: 3px; font-size: 12px;">${fieldKey}</code>
                  </div>
                  <div style="font-size: 11px; color: var(--ntx-form-theme-color-secondary); word-break: break-word;">
                    ${String(value).length > 50 ? String(value).substring(0, 50) + '...' : String(value)}
                  </div>
                </div>
              </div>
            `);
          } else if (value && typeof value === 'object' && !Array.isArray(value)) {
            // Recursively process nested objects
            processObject(value, fullPath);
          }
        });
      }
    };
    
    processObject(obj, path);
    return fields.length > 0 ? fields : html`<div style="color: var(--ntx-form-theme-color-secondary); font-style: italic; padding: 12px; text-align: center;">No fields available</div>`;
  }

  private renderSelectedFieldsList(): any {
    // Sort fields by order
    const sortedFields = Array.from(this.formatterSelectedFields.entries())
      .filter(([_, config]) => config.checked)
      .sort((a, b) => a[1].order - b[1].order);

    if (sortedFields.length === 0) {
      return html`<div style="color: var(--ntx-form-theme-color-secondary); font-style: italic; padding: 12px; text-align: center;">No fields selected. Check fields from the left panel.</div>`;
    }

    return sortedFields.map(([fieldKey, config], index) => html`
      <div 
        draggable="true"
        @dragstart=${(e: DragEvent) => {
          e.dataTransfer!.effectAllowed = 'move';
          e.dataTransfer!.setData('text/plain', index.toString());
        }}
        @dragover=${(e: DragEvent) => {
          e.preventDefault();
          e.dataTransfer!.dropEffect = 'move';
        }}
        @drop=${(e: DragEvent) => {
          e.preventDefault();
          const fromIndex = parseInt(e.dataTransfer!.getData('text/plain'));
          const toIndex = index;
          
          if (fromIndex !== toIndex) {
            // Reorder the fields
            const reorderedFields = Array.from(sortedFields);
            const [movedItem] = reorderedFields.splice(fromIndex, 1);
            reorderedFields.splice(toIndex, 0, movedItem);
            
            // Update orders
            reorderedFields.forEach(([key, cfg], idx) => {
              this.formatterSelectedFields.set(key, { ...cfg, order: idx });
            });
            
            this.requestUpdate();
          }
        }}
        style="
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 10px;
          padding: 10px;
          background: var(--ntx-form-theme-color-background);
          border: 1px solid var(--ntx-form-theme-color-border);
          border-radius: 4px;
          cursor: move;
          transition: all 0.2s;
        "
        @mouseenter=${(e: MouseEvent) => {
          (e.currentTarget as HTMLElement).style.borderColor = 'var(--ntx-form-theme-color-primary)';
          (e.currentTarget as HTMLElement).style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
        }}
        @mouseleave=${(e: MouseEvent) => {
          (e.currentTarget as HTMLElement).style.borderColor = 'var(--ntx-form-theme-color-border)';
          (e.currentTarget as HTMLElement).style.boxShadow = 'none';
        }}
      >
        <div style="font-size: 16px; color: var(--ntx-form-theme-color-secondary); cursor: grab;" title="Drag to reorder">
          ⋮⋮
        </div>
        <div style="font-weight: 600; color: var(--ntx-form-theme-color-primary); min-width: 30px;">
          ${index + 1}.
        </div>
        <div style="flex: 1; min-width: 0;">
          <div style="font-size: 11px; color: var(--ntx-form-theme-color-secondary); margin-bottom: 4px; word-break: break-all;">
            <code style="font-size: 10px;">${fieldKey}</code>
          </div>
          <input 
            type="text" 
            class="form-control"
            placeholder="Display title"
            .value=${config.title}
            @input=${(e: Event) => {
              const target = e.target as HTMLInputElement;
              this.formatterSelectedFields.set(fieldKey, { ...config, title: target.value });
              this.requestUpdate();
            }}
            style="font-size: 13px; padding: 6px 8px; height: auto;"
          />
        </div>
        <button
          @click=${() => {
            this.formatterSelectedFields.delete(fieldKey);
            this.requestUpdate();
          }}
          style="
            background: var(--ntx-form-theme-color-error, #dc3545);
            color: white;
            border: none;
            border-radius: 4px;
            padding: 6px 10px;
            cursor: pointer;
            font-size: 12px;
            transition: filter 0.2s;
          "
          @mouseenter=${(e: MouseEvent) => {
            (e.currentTarget as HTMLElement).style.filter = 'brightness(0.9)';
          }}
          @mouseleave=${(e: MouseEvent) => {
            (e.currentTarget as HTMLElement).style.filter = 'brightness(1)';
          }}
          title="Remove field"
        >
          ✕
        </button>
      </div>
    `);
  }

  private renderFormattedPreview(obj: any): any {
    const items: any[] = [];
    
    this.formatterSelectedFields.forEach((config, key) => {
      if (config.checked) {
        const value = this.extractNestedValue(obj, key);
        const displayTitle = config.title || key;
        
        items.push(html`
          <div style="margin-bottom: 8px;">
            <strong>${displayTitle}:</strong> ${value !== undefined ? String(value) : 'N/A'}
          </div>
        `);
      }
    });
    
    return items.length > 0 ? items : html`<div style="color: var(--ntx-form-theme-color-secondary); font-style: italic;">No fields selected</div>`;
  }

  private generateResponseConfig(): string {
    const config: any = { fields: [] };
    
    // Sort by order before generating config
    const sortedFields = Array.from(this.formatterSelectedFields.entries())
      .filter(([_, fieldConfig]) => fieldConfig.checked)
      .sort((a, b) => a[1].order - b[1].order);
    
    sortedFields.forEach(([key, fieldConfig]) => {
      config.fields.push({
        path: key,
        title: fieldConfig.title || key
      });
    });
    
    return JSON.stringify(config, null, 2);
  }

  private generateResponseConfigQuoted(): string {
    const config: any = { fields: [] };
    
    // Sort by order before generating config
    const sortedFields = Array.from(this.formatterSelectedFields.entries())
      .filter(([_, fieldConfig]) => fieldConfig.checked)
      .sort((a, b) => a[1].order - b[1].order);
    
    sortedFields.forEach(([key, fieldConfig]) => {
      config.fields.push({
        path: key,
        title: fieldConfig.title || key
      });
    });
    
    // Minify and wrap in double quotes
    const minified = JSON.stringify(config);
    return `"${minified.replace(/"/g, '\\"')}"`;
  }

  private formatValue(value: any): string {
    if (typeof value === 'boolean') return value.toString();
    if (typeof value === 'string') return `"${value}"`;
    if (typeof value === 'number') return value.toString();
    if (value === null) return 'null';
    if (value === undefined) return 'undefined';
    return JSON.stringify(value);
  }

  private formatJsonForDisplay(jsonString: string): string {
    try {
      // Try to parse and pretty-format the JSON
      const parsed = JSON.parse(jsonString);
      return JSON.stringify(parsed, null, 2);
    } catch (e) {
      // If it's not valid JSON, return as-is
      return jsonString;
    }
  }

  // JSON Editor Helper Methods
  private isValidJson(jsonString: string): boolean {
    if (!jsonString.trim()) return true; // Empty is valid
    try {
      JSON.parse(jsonString);
      return true;
    } catch {
      return false;
    }
  }

  private getJsonStatus(jsonString: string): string {
    if (!jsonString.trim()) {
      return 'Empty';
    }
    
    try {
      const parsed = JSON.parse(jsonString);
      const charCount = jsonString.length;
      const lineCount = jsonString.split('\n').length;
      const keyCount = this.countJsonKeys(parsed);
      
      return `Valid JSON • ${charCount} chars • ${lineCount} lines • ${keyCount} keys`;
    } catch (e) {
      return `Invalid JSON • ${(e as Error).message}`;
    }
  }

  private countJsonKeys(obj: any): number {
    if (typeof obj !== 'object' || obj === null) return 0;
    if (Array.isArray(obj)) {
      return obj.reduce((count: number, item: any) => count + this.countJsonKeys(item), 0);
    }
    return Object.keys(obj).length + Object.values(obj).reduce((count: number, value: any) => count + this.countJsonKeys(value), 0);
  }

  private formatJson(): void {
    if (!this.isValidJson(this.requestBody)) return;
    try {
      const parsed = JSON.parse(this.requestBody);
      this.requestBody = JSON.stringify(parsed, null, 2);
      this.requestUpdate();
    } catch {
      // Already validated, shouldn't happen
    }
  }

  private minifyJson(): void {
    if (!this.isValidJson(this.requestBody)) return;
    try {
      const parsed = JSON.parse(this.requestBody);
      this.requestBody = JSON.stringify(parsed);
      this.requestUpdate();
    } catch {
      // Already validated, shouldn't happen
    }
  }

  private clearJson(): void {
    this.requestBody = '';
    this.requestUpdate();
  }

  private insertSampleJson(): void {
    const sample = {
      "startData": {
        "se_input": "This is a test",
        "options": {
          "callbackUrl": "optionally add a callback URL here. Must be https",
          "metadata": {
            "userId": "12345",
            "requestId": "req-" + Date.now()
          }
        }
      }
    };
    this.requestBody = JSON.stringify(sample, null, 2);
    this.requestUpdate();
  }

  private handleJsonInput(e: Event): void {
    const target = e.target as HTMLTextAreaElement;
    this.requestBody = target.value;
    this.requestUpdate();
  }

  private handleJsonBlur(e: Event): void {
    // Auto-format valid JSON on blur
    if (this.isValidJson(this.requestBody) && this.requestBody.trim()) {
      try {
        const parsed = JSON.parse(this.requestBody);
        const formatted = JSON.stringify(parsed, null, 2);
        if (formatted !== this.requestBody) {
          this.requestBody = formatted;
          this.requestUpdate();
        }
      } catch {
        // Don't auto-format if invalid
      }
    }
  }

  private handleJsonPaste(e: ClipboardEvent): void {
    // Auto-format pasted JSON after a short delay
    setTimeout(() => {
      if (this.isValidJson(this.requestBody)) {
        this.formatJson();
      }
    }, 100);
  }

  private renderJsonOutput() {
    if (!this.requestBody.trim()) return '';

    let minified = '';
    let escaped = '';
    let error = '';

    try {
      const parsed = JSON.parse(this.requestBody);
      minified = JSON.stringify(parsed);
      escaped = '"' + minified.replace(/\\/g, '\\\\').replace(/"/g, '\\"') + '"';
    } catch (e) {
      error = (e as Error).message;
    }

    return html`
      <div class="form-group">
        <label class="control-label">Generated Output</label>
        <div style="display: flex; gap: 16px;">
          <div style="flex: 1;">
            <label class="control-label" style="font-size: 12px; color: #6c757d;">Minified JSON</label>
            <textarea 
              class="form-control" 
              readonly 
              rows="3"
              .value=${minified}
              style="font-family: 'Consolas', 'Monaco', 'Courier New', monospace; font-size: 12px;"
            ></textarea>
          </div>
          <div style="flex: 1;">
            <label class="control-label" style="font-size: 12px; color: #6c757d;">Escaped for Code</label>
            <textarea 
              class="form-control" 
              readonly 
              rows="3"
              .value=${escaped}
              style="font-family: 'Consolas', 'Monaco', 'Courier New', monospace; font-size: 12px;"
            ></textarea>
          </div>
        </div>
        ${error ? html`<div class="text-danger" style="margin-top: 8px; font-size: 12px;">${error}</div>` : ''}
      </div>
    `;
  }

  private renderJsonPreview() {
    if (!this.requestBody.trim() || !this.isValidJson(this.requestBody)) return '';

    try {
      const parsed = JSON.parse(this.requestBody);
      return html`
        <div class="form-group">
          <label class="control-label">JSON Structure Preview</label>
          <div class="json-viewer">
${this.renderJsonWithSyntaxHighlight(parsed, 0)}
          </div>
        </div>
      `;
    } catch {
      return '';
    }
  }

  private renderJsonWithSyntaxHighlight(obj: any, indent: number = 0): string {
    const spaces = '  '.repeat(indent);
    
    if (obj === null) {
      return `<span class="json-syntax-null">null</span>`;
    }
    
    if (typeof obj === 'string') {
      return `<span class="json-syntax-string">"${obj}"</span>`;
    }
    
    if (typeof obj === 'number') {
      return `<span class="json-syntax-number">${obj}</span>`;
    }
    
    if (typeof obj === 'boolean') {
      return `<span class="json-syntax-boolean">${obj}</span>`;
    }
    
    if (Array.isArray(obj)) {
      if (obj.length === 0) return '<span class="json-syntax-punctuation">[]</span>';
      
      const items = obj.map(item => 
        `${spaces}  ${this.renderJsonWithSyntaxHighlight(item, indent + 1)}`
      ).join(',\n');
      
      return `<span class="json-syntax-punctuation">[</span>\n${items}\n${spaces}<span class="json-syntax-punctuation">]</span>`;
    }
    
    if (typeof obj === 'object') {
      const keys = Object.keys(obj);
      if (keys.length === 0) return '<span class="json-syntax-punctuation">{}</span>';
      
      const items = keys.map(key => 
        `${spaces}  <span class="json-syntax-key">"${key}"</span><span class="json-syntax-punctuation">:</span> ${this.renderJsonWithSyntaxHighlight(obj[key], indent + 1)}`
      ).join(',\n');
      
      return `<span class="json-syntax-punctuation">{</span>\n${items}\n${spaces}<span class="json-syntax-punctuation">}</span>`;
    }
    
    return String(obj);
  }

  // Recursively remove keys with instructional placeholder values
  private static removeInstructionalPlaceholders(obj: any): any {
    if (Array.isArray(obj)) {
      return obj.map(item => this.removeInstructionalPlaceholders(item));
    } else if (obj && typeof obj === 'object') {
      const result: any = {};
      for (const [key, value] of Object.entries(obj)) {
        if (
          typeof value === 'string' &&
          /^<.*>$/.test(value.trim())
        ) {
          // skip this key (remove it)
          continue;
        }
        const cleaned = this.removeInstructionalPlaceholders(value);
        if (
          cleaned !== undefined &&
          !(typeof cleaned === 'object' && cleaned !== null && Object.keys(cleaned).length === 0)
        ) {
          result[key] = cleaned;
        }
      }
      return result;
    }
    return obj;
  }

  private async fetchOAuthToken(): Promise<string> {
    const response = await fetch(this.tokenUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        grant_type: 'client_credentials',
        client_id: this.clientId,
        client_secret: this.clientSecret,
      }),
    });

    if (!response.ok) {
      throw new Error(`Token request failed with status ${response.status}`);
    }

    const data = await response.json();
    if (!data.access_token) {
      throw new Error('No access_token in response');
    }

    // Store the full token response for debugging
    this.oauthTokenResponse = {
      access_token: data.access_token,
      token_type: data.token_type || 'Bearer',
      expires_in: data.expires_in,
      scope: data.scope,
      fetched_at: new Date().toISOString(),
      expires_at: data.expires_in ? new Date(Date.now() + (data.expires_in * 1000)).toISOString() : null
    };

    return data.access_token;
  }

  private async handleApiCall() {
    if (this.isLoading) return;
    
    // Record the time of this API call and start execution timer
    this.lastApiCallTime = Date.now();
    this.apiCallStartTime = Date.now();
    
    this.responseType = null;
    this.apiResponse = '';
    
    // If OAuth credentials are provided, fetch token first
    let accessToken = this.bearerToken;
    if (this.tokenUrl && this.clientId && this.clientSecret) {
      try {
        accessToken = await this.fetchOAuthToken();
      } catch (error) {
        // Token fetch failed, set error response
        const executionTime = Date.now() - this.apiCallStartTime;
        const timestamp = new Date().toISOString();
        this.responseType = 'error';
        this.apiResponse = `OAuth token fetch failed: ${error instanceof Error ? error.message : String(error)}`;
        this.value = {
          success: false,
          statusCode: 401,
          responseType: 'error',
          data: this.apiResponse,
          message: this.errorMessage,
          timestamp: timestamp,
          executionTime: executionTime
        };
        // Note: ntx-value-change event is automatically dispatched by value setter
        this.isLoading = false;
        this.requestUpdate();
        return;
      }
    }
    
    let url = this.apiUrl || '';
    let headers: Record<string, string> = {};
    if (this.requestHeaders) {
      try {
        headers = JSON.parse(this.requestHeaders);
      } catch {
        headers = {};
        this.requestHeaders.split(/\r?\n/).forEach(line => {
          const idx = line.indexOf(':');
          if (idx > -1) {
            const key = line.slice(0, idx).trim();
            const value = line.slice(idx + 1).trim();
            if (key) headers[key] = value;
          }
        });
      }
    }
    
    // Add Bearer token to Authorization header if provided
    if (accessToken && accessToken.trim()) {
      headers['Authorization'] = `Bearer ${accessToken.trim()}`;
    }
    
    // Determine the actual body to use based on contentType
    let actualBody: any;
    if (this.contentType === 'application/x-www-form-urlencoded') {
      // For URL-encoded, use the raw requestBody string as-is
      actualBody = this.requestBody || '';
    } else if (this.contentType === 'application/json') {
      // For JSON, parse requestBody if provided, otherwise send nothing
      if (this.requestBody && this.requestBody.trim()) {
        try {
          actualBody = JSON.parse(this.requestBody);
        } catch (e) {
          // If parsing fails, treat as empty
          actualBody = undefined;
        }
      } else {
        actualBody = undefined;
      }
    } else {
      // For other types (text/plain, etc.), use raw string
      actualBody = this.requestBody || '';
    }
    
    await callApi({
      url,
      method: this.method || 'POST',
      headers,
      requestBody: actualBody,
      contentType: this.contentType,
      setLoading: (loading: boolean) => { 
        this.isLoading = loading; 
        this.requestUpdate(); 
      },
      setResponse: (response: string, statusCode?: number, success?: boolean) => { 
        const executionTime = Date.now() - this.apiCallStartTime;
        const timestamp = new Date().toISOString();
        
        this.apiResponse = response;
        this.responseType = success === false ? 'error' : this.determineResponseType(response);
        
        // Auto-populate Response Formatter with the API response
        this.formatterJsonInput = response;
        this.formatterSelectedFields.clear(); // Clear previous selections
        
        // Try to parse response and extract values
        let accessToken: string | undefined;
        let customOutput: any = undefined;
        
        try {
          const parsed = JSON.parse(response);
          
          // Extract access_token if present
          if (parsed.access_token) {
            accessToken = parsed.access_token;
          }
          
          // Extract custom output value if outputValueKey is specified
          if (this.outputValueKey && this.outputValueKey.trim()) {
            customOutput = this.extractNestedValue(parsed, this.outputValueKey);
          }
        } catch {
          // Response is not JSON, skip extraction
        }
        
        // Create structured value object
        this.value = {
          success: success !== false && (this.responseType === 'success' || this.responseType === 'warning'),
          statusCode: statusCode || (this.responseType === 'success' ? 200 : 500),
          responseType: this.responseType,
          data: response,
          message: this.getCustomMessage(this.responseType),
          timestamp: timestamp,
          executionTime: executionTime,
          ...(accessToken && { access_token: accessToken }),
          ...(customOutput !== undefined && { output: customOutput })
        };
        
        // Mark as successful call if success or warning
        if (this.responseType === 'success' || this.responseType === 'warning') {
          this.hasSuccessfulCall = true;
        }
        
        // Note: ntx-value-change event is automatically dispatched by value setter
        console.log('[Value Change] Value updated at:', new Date().toISOString());
        
        this.requestUpdate();
        
        // After value change event is dispatched (happens in setter), wait for Nintex to process it
        // then trigger post-submission action if needed
        const isSuccessResponse = this.responseType === 'success' || this.responseType === 'warning';
        if (isSuccessResponse) {
          // Wait 800ms to ensure ntx-value-change event is fully processed by Nintex
          // This gives Nintex adequate time to update form values before submission
          console.log('[Value Change] Waiting 800ms for Nintex to process value change...');
          setTimeout(() => {
            console.log('[Value Change] Wait complete at:', new Date().toISOString(), '- proceeding with submission action');
            this.handlePostSubmissionAction();
          }, 800);
        }
      }
    });
  }

  private determineResponseType(response: string): 'success' | 'warning' | 'error' {
    // Check if response indicates an error
    if (response.toLowerCase().includes('error:') || 
        response.toLowerCase().includes('failed') ||
        response.toLowerCase().includes('exception')) {
      return 'error';
    }
    
    // Try to parse as JSON to check for error status codes
    try {
      const parsed = JSON.parse(response);
      if (parsed.error || parsed.status === 'error') {
        return 'error';
      }
      if (parsed.warning || parsed.status === 'warning') {
        return 'warning';
      }
    } catch {
      // Not JSON, continue with other checks
    }
    
    // Default to success for valid responses
    return 'success';
  }

  private extractNestedValue(obj: any, path: string): any {
    // First, try to find the exact key (for keys like "developer.email")
    if (obj && typeof obj === 'object' && path in obj) {
      return obj[path];
    }
    
    // If not found, try nested path navigation (for paths like "data.user.name")
    const keys = path.split('.');
    let current = obj;
    
    for (const key of keys) {
      if (current && typeof current === 'object' && key in current) {
        current = current[key];
      } else {
        return undefined;
      }
    }
    
    return current;
  }

  private async copyToClipboard(text: string): Promise<void> {
    try {
      await navigator.clipboard.writeText(text);
      // Could add a toast notification here if desired
    } catch (err) {
      console.error('Failed to copy text:', err);
    }
  }

  private handlePostSubmissionAction(): void {
    console.log('[Submission Action] Checking submission action:', this.submissionAction);
    
    if (this.submissionAction === 'no-submit') {
      console.log('[Submission Action] No action configured');
      return;
    }
    
    if (this.submissionAction === 'quick-submit') {
      console.log('[Submission Action] Quick submit - triggering after 500ms');
      setTimeout(() => {
        this.submitNintexForm();
      }, 500);
      return;
    }
    
    if (this.submissionAction === 'delayed-submit') {
      console.log('[Submission Action] Delayed submit - starting countdown timer');
      // Start the countdown timer, and submit when it expires
      this.startDelayedSubmission();
      return;
    }
  }

  private submitNintexForm(): void {
    console.log('[Submission Action] Attempting to submit Nintex form');
    const form = document.querySelector('form');
    if (!form) {
      console.error('[Submission Action] No form found');
      return;
    }
    
    const submitBtn = form.querySelector('button[type="submit"]');
    if (submitBtn instanceof HTMLElement) {
      console.log('[Submission Action] Clicking submit button');
      submitBtn.click();
    } else {
      console.error('[Submission Action] No submit button found');
    }
  }

  private startDelayedSubmission(): void {
    // Clear any existing timer first
    if (this.cooldownTimerId !== null) {
      clearTimeout(this.cooldownTimerId);
      this.cooldownTimerId = null;
    }
    
    const countdownMs = this.countdownTimer * 1000;
    const startTime = Date.now();
    
    // Update the UI to show countdown
    const updateCountdown = () => {
      const elapsed = Date.now() - startTime;
      const remaining = countdownMs - elapsed;
      
      if (remaining <= 0) {
        // Countdown finished, submit the form
        console.log('[Submission Action] Countdown complete - submitting form');
        this.submitNintexForm();
        this.cooldownTimerId = null;
      } else {
        // Still counting down, update UI
        this.requestUpdate();
        this.cooldownTimerId = window.setTimeout(updateCountdown, 100);
      }
    };
    
    console.log('[Submission Action] Starting delayed submission countdown for', this.countdownTimer, 'seconds');
    updateCountdown();
  }

  private startCooldownTimer() {
    // Clear any existing timer first
    if (this.cooldownTimerId !== null) {
      clearTimeout(this.cooldownTimerId);
      this.cooldownTimerId = null;
    }
    
    // Update the UI every second during cooldown to show remaining time
    const updateTimer = () => {
      const now = Date.now();
      const timeSinceLastCall = now - this.lastApiCallTime;
      const cooldownMs = this.countdownTimer * 1000;
      
      if (timeSinceLastCall < cooldownMs) {
        // Still in cooldown, update in another second
        this.requestUpdate();
        this.cooldownTimerId = window.setTimeout(updateTimer, 1000);
      } else {
        // Cooldown period ended, hide the alert
        this.showCooldownAlert = false;
        this.cooldownTimerId = null;
        this.requestUpdate();
      }
    };
    
    // Start the timer
    this.cooldownTimerId = window.setTimeout(updateTimer, 1000);
  }
  
  // Cleanup timer when component is destroyed
  disconnectedCallback() {
    super.disconnectedCallback();
    if (this.cooldownTimerId !== null) {
      clearTimeout(this.cooldownTimerId);
      this.cooldownTimerId = null;
    }
  }
}
