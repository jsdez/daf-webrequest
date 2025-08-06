var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { html, LitElement, css } from 'lit';
import { callApi } from './apiClient.js';
import { customElement, property } from 'lit/decorators.js';
let DafWebRequestPlugin = class DafWebRequestPlugin extends LitElement {
    constructor() {
        super(...arguments);
        this.label = '';
        this.description = '';
        this.readOnly = false;
        this.value = '';
        this.requestBody = '';
        this.apiUrl = '';
        this.requestHeaders = '';
        this.debugMode = false;
        this.method = 'POST';
        this.isLoading = false;
        this.apiResponse = '';
        this.responseType = null;
    }
    static getMetaConfig() {
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
                },
                requestHeaders: {
                    type: 'string',
                    title: 'Request Headers (JSON)',
                    description: 'Headers to include in the API request, as a JSON object.',
                    defaultValue: '',
                },
                requestBody: {
                    type: 'string',
                    title: 'Request Body (JSON)',
                    description: 'Body to send in the API request, as a JSON object.',
                    defaultValue: '',
                },
                waitForResponse: {
                    type: 'boolean',
                    title: 'Wait for Callback Response',
                    description: 'If true, the plugin will wait for a callback post body once the workflow is completed.',
                    defaultValue: false,
                },
                value: {
                    type: 'string',
                    title: 'Value',
                    isValueField: true,
                    defaultValue: '',
                },
                debugMode: {
                    type: 'boolean',
                    title: 'Debug Mode',
                    description: 'If true, enables the JSON converter UI.',
                    defaultValue: false,
                },
                method: {
                    type: 'string',
                    title: 'HTTP Method',
                    description: 'The HTTP method to use for the API call.',
                    enum: ['POST', 'GET', 'PUT', 'DELETE', 'PATCH'],
                    defaultValue: 'POST',
                },
            },
            standardProperties: {
                fieldLabel: true,
                description: true,
                readOnly: true,
                defaultValue: true,
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
            }
            catch (e) {
                error = 'Invalid JSON';
            }
            return html `
        <div class="plugin-container">
          <div class="form-group">
            <label class="control-label" part="debug-label">Enter JSON:</label>
            <textarea 
              class="form-control" 
              part="debug-input"
              rows="8" 
              .value=${this.requestBody} 
              @input=${(e) => { this.requestBody = e.target.value; this.requestUpdate(); }}
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
            ${error ? html `<div class="text-danger" part="error-message">${error}</div>` : ''}
          </div>
          <div class="form-group">
            <button 
              class="btn btn-primary" 
              part="api-button"
              @click=${() => this.handleApiCall()} 
              ?disabled=${this.isLoading}
            >
              ${this.isLoading ? html `<span class="spinner"></span>Calling API...` : 'Call API'}
            </button>
            ${this.renderResponseAlert()}
          </div>
        </div>
      `;
        }
        // Not in debug mode: show only button and response
        return html `
      <div class="plugin-container">
        <div class="form-group">
          <button 
            class="btn btn-primary" 
            part="api-button"
            @click=${() => this.handleApiCall()} 
            ?disabled=${this.isLoading}
          >
            ${this.isLoading ? html `<span class="spinner"></span>Processing...` : 'Execute API Call'}
          </button>
          ${this.renderResponseAlert()}
        </div>
      </div>
    `;
    }
    renderResponseAlert() {
        if (!this.apiResponse)
            return '';
        const alertClass = this.responseType ? `alert-${this.responseType}` : 'alert-success';
        return html `
      <div class="alert ${alertClass}" part="response-alert">
        ${this.apiResponse}
      </div>
    `;
    }
    // Handle property changes from the host application
    updated(changedProperties) {
        if (changedProperties.has('value')) {
            this.dispatchEvent(new CustomEvent('ntx-value-change', {
                detail: this.value,
                bubbles: true,
                composed: true,
            }));
        }
    }
    // Recursively remove keys with instructional placeholder values
    static removeInstructionalPlaceholders(obj) {
        if (Array.isArray(obj)) {
            return obj.map(item => this.removeInstructionalPlaceholders(item));
        }
        else if (obj && typeof obj === 'object') {
            const result = {};
            for (const [key, value] of Object.entries(obj)) {
                if (typeof value === 'string' &&
                    /^<.*>$/.test(value.trim())) {
                    // skip this key (remove it)
                    continue;
                }
                const cleaned = this.removeInstructionalPlaceholders(value);
                if (cleaned !== undefined &&
                    !(typeof cleaned === 'object' && cleaned !== null && Object.keys(cleaned).length === 0)) {
                    result[key] = cleaned;
                }
            }
            return result;
        }
        return obj;
    }
    handleApiCall() {
        return __awaiter(this, void 0, void 0, function* () {
            this.responseType = null;
            this.apiResponse = '';
            let url = this.apiUrl || '';
            let headers = {};
            if (this.requestHeaders) {
                try {
                    headers = JSON.parse(this.requestHeaders);
                }
                catch (_a) {
                    headers = {};
                    this.requestHeaders.split(/\r?\n/).forEach(line => {
                        const idx = line.indexOf(':');
                        if (idx > -1) {
                            const key = line.slice(0, idx).trim();
                            const value = line.slice(idx + 1).trim();
                            if (key)
                                headers[key] = value;
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
            yield callApi({
                url,
                method: this.method || 'POST',
                headers,
                requestBody: body,
                setLoading: (loading) => {
                    this.isLoading = loading;
                    this.requestUpdate();
                },
                setResponse: (response) => {
                    this.apiResponse = response;
                    this.responseType = this.determineResponseType(response);
                    this.value = response; // Store response in the value field for Nintex
                    this.requestUpdate();
                }
            });
        });
    }
    determineResponseType(response) {
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
        }
        catch (_a) {
            // Not JSON, continue with other checks
        }
        // Default to success for valid responses
        return 'success';
    }
};
DafWebRequestPlugin.styles = css `
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
  `;
__decorate([
    property({ type: String })
], DafWebRequestPlugin.prototype, "label", void 0);
__decorate([
    property({ type: String })
], DafWebRequestPlugin.prototype, "description", void 0);
__decorate([
    property({ type: Boolean })
], DafWebRequestPlugin.prototype, "readOnly", void 0);
__decorate([
    property({ type: String })
], DafWebRequestPlugin.prototype, "value", void 0);
__decorate([
    property({ type: String })
], DafWebRequestPlugin.prototype, "requestBody", void 0);
__decorate([
    property({ type: String })
], DafWebRequestPlugin.prototype, "apiUrl", void 0);
__decorate([
    property({ type: String })
], DafWebRequestPlugin.prototype, "requestHeaders", void 0);
__decorate([
    property({ type: Boolean })
], DafWebRequestPlugin.prototype, "debugMode", void 0);
__decorate([
    property({ type: String })
], DafWebRequestPlugin.prototype, "method", void 0);
DafWebRequestPlugin = __decorate([
    customElement('daf-webrequest-plugin')
], DafWebRequestPlugin);
export { DafWebRequestPlugin };
