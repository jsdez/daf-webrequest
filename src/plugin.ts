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
  `;

  @property({ type: String }) label = '';
  @property({ type: String }) description = '';
  @property({ type: Boolean }) readOnly = false;
  @property({ type: Object }) value = {
    success: false,
    statusCode: 0,
    responseType: '',
    data: '',
    message: '',
    timestamp: '',
    executionTime: 0
  };
  @property({ type: String }) requestBody = '';
  @property({ type: String }) apiUrl = '';
  @property({ type: String }) requestHeaders = '';
  @property({ type: Boolean }) debugMode = false;
  @property({ type: String }) method: string = 'POST';
  @property({ type: String }) successMessage = 'API call completed successfully';
  @property({ type: String }) warningMessage = 'API call completed with warnings';
  @property({ type: String }) errorMessage = 'API call failed';
  @property({ type: Boolean }) sendAPICall = false;
  @property({ type: Boolean }) allowMultipleAPICalls = false;
  @property({ type: Boolean }) countdownEnabled = false;
  @property({ type: Number }) countdownTimer = 5;
  @property({ type: Boolean }) btnEnabled = true;
  @property({ type: String }) btnText = 'Send API Request';
  @property({ type: String }) btnAlignment = 'left';
  @property({ type: Boolean }) btnVisible = true;

  private isLoading = false;
  private apiResponse: string = '';
  private responseType: 'success' | 'warning' | 'error' | null = null;
  private hasSuccessfulCall = false;
  private lastApiCallTime = 0;
  private showCooldownAlert = false;
  private apiCallStartTime = 0; // Track API call execution time

  constructor() {
    super();
    // Initialize all properties with their default values
    this.label = '';
    this.description = '';
    this.readOnly = false;
    this.value = {
      success: false,
      statusCode: 0,
      responseType: '',
      data: '',
      message: '',
      timestamp: '',
      executionTime: 0
    };
    this.requestBody = '';
    this.apiUrl = '';
    this.requestHeaders = '';
    this.debugMode = false;
    this.method = 'POST';
    this.successMessage = 'API call completed successfully';
    this.warningMessage = 'API call completed with warnings';
    this.errorMessage = 'API call failed';
    this.sendAPICall = false;
    this.allowMultipleAPICalls = false;
    this.countdownEnabled = false;
    this.countdownTimer = 5;
    this.btnEnabled = true;
    this.btnText = 'Send API Request';
    this.btnAlignment = 'left';
    this.btnVisible = true;
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
          title: 'API URL with Token',
          description: 'The endpoint URL to call, including any required token as a query parameter.',
          defaultValue: '',
        } as PropType,
        method: {
          type: 'string',
          title: 'HTTP Method',
          description: 'The HTTP method to use for the API call.',
          enum: ['POST', 'GET', 'PUT', 'DELETE', 'PATCH'],
          defaultValue: 'POST',
        } as PropType,
        requestHeaders: {
          type: 'string',
          title: 'Request Headers',
          description: 'Headers to include in the API request, as a JSON object.',
          defaultValue: '',
        } as PropType,
        requestBody: {
          type: 'string',
          title: 'Request Body',
          description: 'Body to send in the API request, as a JSON object.',
          defaultValue: '',
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
          description: 'Custom message to display when the API call succeeds.',
          defaultValue: 'API call completed successfully',
        } as PropType,
        warningMessage: {
          type: 'string',
          title: 'Warning Message',
          description: 'Custom message to display when the API call returns a warning.',
          defaultValue: 'API call completed with warnings',
        } as PropType,
        errorMessage: {
          type: 'string',
          title: 'Error Message',
          description: 'Custom message to display when the API call fails.',
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
          title: 'Countdown Timer (seconds)',
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
      // Debug mode: allow user to enter JSON, minify+escape and show result
      let minified = '';
      let escaped = '';
      let error = '';
      try {
        if (this.requestBody) {
          minified = JSON.stringify(JSON.parse(this.requestBody));
          escaped = '"' + minified.replace(/\\/g, '\\\\').replace(/"/g, '\\"') + '"';
        }
      } catch (e) {
        error = 'Invalid JSON';
      }
      return html`
        <div class="plugin-container">
          <div class="form-group">
            <label class="control-label" part="debug-label">Enter JSON:</label>
            <textarea 
              class="form-control" 
              part="debug-input"
              rows="8" 
              .value=${this.requestBody} 
              @input=${(e: any) => { this.requestBody = e.target.value; this.requestUpdate(); }}
            ></textarea>
          </div>
          <div class="form-group">
            <label class="control-label" part="output-label">Minified & Escaped JSON:</label>
            <textarea 
              class="form-control" 
              part="debug-output"
              readonly 
              rows="4"
            >${escaped}</textarea>
            ${error ? html`<div class="text-danger" part="error-message">${error}</div>` : ''}
          </div>
          <div class="form-group">
            ${this.btnVisible ? html`
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
            ` : ''}
            ${this.renderResponseAlert()}        
            <!-- Debug info -->
            <div style="margin-top: 8px; font-size: 12px; color: #666;">
              Debug: allowMultiple=${this.allowMultipleAPICalls}, hasSuccessful=${this.hasSuccessfulCall}, responseType=${this.responseType}, btnEnabled=${this.btnEnabled}, isLoading=${this.isLoading}, buttonDisabled=${this.isButtonDisabled()}
            </div>
          </div>
        </div>
      `;
    }
    // Not in debug mode: show only button and response
    return html`
      <div class="plugin-container">
        <div class="form-group">
          ${this.btnVisible ? html`
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
          ` : ''}
          ${this.renderResponseAlert()}
          <!-- Debug info -->
            <div style="margin-top: 8px; font-size: 12px; color: #666;">
              Debug: allowMultiple=${this.allowMultipleAPICalls}, hasSuccessful=${this.hasSuccessfulCall}, responseType=${this.responseType}, btnEnabled=${this.btnEnabled}, isLoading=${this.isLoading}, buttonDisabled=${this.isButtonDisabled()}
            </div>
        </div>
      </div>
    `;
  }

  private renderResponseAlert() {
    const now = Date.now();
    const timeSinceLastCall = now - this.lastApiCallTime;
    const cooldownMs = this.countdownTimer * 1000;
    const inCooldown = this.countdownEnabled && this.lastApiCallTime > 0 && timeSinceLastCall < cooldownMs;
    
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
    
    // Show regular response alert if we have a response
    if (!this.apiResponse || !this.responseType) return '';
    
    const alertClass = `alert-${this.responseType}`;
    const icon = this.getAlertIcon(this.responseType);
    const typeLabel = this.responseType.charAt(0).toUpperCase() + this.responseType.slice(1);
    const customMessage = this.getCustomMessage(this.responseType);
    
    return html`
      <div class="alert ${alertClass}" part="response-alert">
        <div>
          <span class="alert-icon">${icon}</span>
          <strong>${typeLabel}:</strong> ${customMessage}
        </div>
        ${this.debugMode ? html`
          <div class="alert-response">
            <strong>Response:</strong> ${this.apiResponse}
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
    switch (type) {
      case 'success': return this.successMessage;
      case 'warning': return this.warningMessage;
      case 'error': return this.errorMessage;
      default: return 'Unknown response type';
    }
  }

  // Handle property changes from the host application
  updated(changedProperties: Map<string, any>) {
    if (changedProperties.has('value')) {
      this.dispatchEvent(new CustomEvent('ntx-value-change', {
        detail: this.value,
        bubbles: true,
        composed: true,
      }));
    }
    
    // Watch for sendAPICall property changes to trigger API automatically
    if (changedProperties.has('sendAPICall') && this.sendAPICall) {
      this.handleAPICallTrigger();
    }
  }

  private handleAPICallTrigger() {
    // Immediately set sendAPICall to false to prevent multiple calls
    this.sendAPICall = false;
    
    // Check if multiple API calls are allowed
    if (!this.allowMultipleAPICalls && this.hasSuccessfulCall) {
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
        // Show cooldown alert and don't proceed
        this.showCooldownAlert = true;
        this.startCooldownTimer();
        return;
      }
    }
    
    // Proceed with API call
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
      const result = this.isLoading;
      
      // Debug logging to console
      if (this.debugMode) {
        console.log('Button disabled check - multiple calls allowed:', {
          isLoading: this.isLoading,
          btnEnabled: this.btnEnabled,
          result,
          note: 'btnEnabled is ignored when allowMultipleAPICalls=true'
        });
      }
      
      return result;
    }
    
    // If allowMultipleAPICalls is false, disable for loading, btnEnabled, OR after successful/warning call
    // Note: Errors (this.responseType === 'error') still allow retry
    const permanentlyDisabled = this.hasSuccessfulCall && (this.responseType === 'success' || this.responseType === 'warning');
    const result = this.isLoading || !this.btnEnabled || permanentlyDisabled;
    
    // Debug logging to console
    if (this.debugMode) {
      console.log('Button disabled check - single call only:', {
        isLoading: this.isLoading,
        btnEnabled: this.btnEnabled,
        permanentlyDisabled,
        hasSuccessfulCall: this.hasSuccessfulCall,
        responseType: this.responseType,
        result
      });
    }
    
    return result;
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

  private async handleApiCall() {
    if (this.isLoading) return;
    
    // Record the time of this API call and start execution timer
    this.lastApiCallTime = Date.now();
    this.apiCallStartTime = Date.now();
    
    this.responseType = null;
    this.apiResponse = '';
    
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
    // For now, still use the hardcoded body for testing
    const body = {
      startData: {
        se_input: "This is a test"
      }
    };
    
    await callApi({
      url,
      method: this.method || 'POST',
      headers,
      requestBody: body,
      setLoading: (loading: boolean) => { 
        this.isLoading = loading; 
        this.requestUpdate(); 
      },
      setResponse: (response: string, statusCode?: number, success?: boolean) => { 
        const executionTime = Date.now() - this.apiCallStartTime;
        const timestamp = new Date().toISOString();
        
        this.apiResponse = response;
        this.responseType = success === false ? 'error' : this.determineResponseType(response);
        
        // Create structured value object
        this.value = {
          success: success !== false && (this.responseType === 'success' || this.responseType === 'warning'),
          statusCode: statusCode || (this.responseType === 'success' ? 200 : 500),
          responseType: this.responseType,
          data: response,
          message: this.getCustomMessage(this.responseType),
          timestamp: timestamp,
          executionTime: executionTime
        };
        
        // Mark as successful call if success or warning
        if (this.responseType === 'success' || this.responseType === 'warning') {
          this.hasSuccessfulCall = true;
        }
        
        // Dispatch value change event
        this.dispatchEvent(new CustomEvent('ntx-value-change', {
          detail: this.value,
          bubbles: true,
          composed: true,
        }));
        
        this.requestUpdate(); 
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

  private startCooldownTimer() {
    // Update the UI every second during cooldown to show remaining time
    const updateTimer = () => {
      const now = Date.now();
      const timeSinceLastCall = now - this.lastApiCallTime;
      const cooldownMs = this.countdownTimer * 1000;
      
      if (timeSinceLastCall < cooldownMs) {
        // Still in cooldown, update in another second
        this.requestUpdate();
        setTimeout(updateTimer, 1000);
      } else {
        // Cooldown period ended, hide the alert
        this.showCooldownAlert = false;
        this.requestUpdate();
      }
    };
    
    // Start the timer
    setTimeout(updateTimer, 1000);
  }
}
