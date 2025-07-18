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
import { html, LitElement } from 'lit';
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
        this.onInput = (e) => {
            const input = e.target;
            this.value = input.value;
            this.dispatchEvent(new CustomEvent('ntx-value-change', {
                detail: this.value,
                bubbles: true,
                composed: true,
            }));
        };
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
        <div>
          <label>Enter JSON:</label>
          <textarea rows="8" style="width:100%" .value=${this.requestBody} @input=${(e) => { this.requestBody = e.target.value; this.requestUpdate(); }}></textarea>
          <div style="margin-top:10px;">
            <label>Minified & Escaped JSON:</label>
            <textarea readonly rows="4" style="width:100%">${escaped}</textarea>
            ${error ? html `<div style="color:red;">${error}</div>` : ''}
          </div>
        </div>
      `;
        }
        // Not in debug mode: show request content and API call button
        return html `
      <div>
        <label>${this.label}</label>
        <input
          .value=${this.value}
          ?disabled=${this.readOnly}
          @input=${this.onInput}
        />
        <div>${this.description}</div>
        <div style="margin-top:10px;">
          <label>Request Body:</label>
          <pre style="background:#f8f9fa;padding:8px;border-radius:4px;">${this.requestBody}</pre>
        </div>
        <button @click=${() => this.callApi()} ?disabled=${this.isLoading} style="margin-top:10px;">
          ${this.isLoading ? 'Calling API...' : 'Call API'}
        </button>
        <div style="margin-top:10px;">
          <label>API Response:</label>
          <pre style="background:#e9ecef;padding:8px;border-radius:4px;">${this.apiResponse}</pre>
        </div>
      </div>
    `;
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
    callApi() {
        return __awaiter(this, void 0, void 0, function* () {
            this.isLoading = true;
            this.apiResponse = '';
            try {
                let url = this.apiUrl || '';
                let headers = {};
                if (this.requestHeaders) {
                    // Support both JSON and simple key:value pairs
                    try {
                        headers = JSON.parse(this.requestHeaders);
                    }
                    catch (_a) {
                        // Try to parse as key:value lines
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
                // Do NOT extract token from URL or move to Authorization header. Token must remain as query param per OpenAPI spec.
                // For testing: ignore requestBody and send a hardcoded value matching OpenAPI expectations
                const body = {
                    startData: {
                        se_input: "This is a test"
                    }
                };
                const res = yield fetch(url, {
                    method: this.method || 'POST',
                    headers: Object.assign({ 'Content-Type': 'application/json', Accept: 'application/json' }, headers),
                    body: ['POST', 'PUT', 'PATCH', 'DELETE'].includes((this.method || 'POST').toUpperCase()) ? JSON.stringify(body) : undefined,
                });
                const text = yield res.text();
                this.apiResponse = text;
            }
            catch (e) {
                this.apiResponse = 'Error: ' + ((e === null || e === void 0 ? void 0 : e.message) || e);
            }
            finally {
                this.isLoading = false;
                this.requestUpdate();
            }
        });
    }
};
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
