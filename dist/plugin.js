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
        this.openApiUrl = '';
        this.requestBody = '';
        this.openApiSpec = null;
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
                openApiUrl: {
                    type: 'string',
                    title: 'OpenAPI Spec URL',
                    description: 'URL to the OpenAPI (Swagger) specification JSON.',
                    defaultValue: '',
                },
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
            },
            standardProperties: {
                fieldLabel: true,
                description: true,
                readOnly: true,
                defaultValue: true,
            },
        };
    }
    updated(changedProps) {
        if (changedProps.has('openApiUrl') && this.openApiUrl) {
            this.fetchOpenApiSpec(this.openApiUrl);
        }
    }
    fetchOpenApiSpec(url) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const res = yield fetch(url);
                if (!res.ok)
                    throw new Error('Failed to fetch OpenAPI spec');
                this.openApiSpec = yield res.json();
                // You can now use this.openApiSpec to build UI or logic
            }
            catch (e) {
                this.openApiSpec = null;
                // Optionally handle error (show message, etc.)
            }
        });
    }
    render() {
        var _a;
        // Detect if rendered inside <ntx-form-preview>
        const isPreview = ((_a = this.parentElement) === null || _a === void 0 ? void 0 : _a.tagName.toLowerCase()) === 'ntx-form-preview';
        if (isPreview) {
            // Render a JSON escaper/minifier for the requestBody
            let minified = '';
            try {
                if (this.requestBody) {
                    minified = JSON.stringify(JSON.parse(this.requestBody));
                }
            }
            catch (e) {
                minified = 'Invalid JSON';
            }
            return html `
        <div>
          <label>Minified JSON:</label>
          <textarea readonly rows="6" style="width:100%">${minified}</textarea>
        </div>
      `;
        }
        return html `
      <div>
        <label>${this.label}</label>
        <input
          .value=${this.value}
          ?disabled=${this.readOnly}
          @input=${this.onInput}
        />
        <div>${this.description}</div>
      </div>
    `;
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
], DafWebRequestPlugin.prototype, "openApiUrl", void 0);
__decorate([
    property({ type: String })
], DafWebRequestPlugin.prototype, "requestBody", void 0);
DafWebRequestPlugin = __decorate([
    customElement('daf-webrequest-plugin')
], DafWebRequestPlugin);
export { DafWebRequestPlugin };
