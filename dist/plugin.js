var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
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
        // Find the ancestor tag name in the parent chain
        let ancestorTag = '';
        let el = this.parentElement;
        while (el) {
            const tag = el.tagName.toLowerCase();
            if (["ntx-form-preview", "ntx-form-builder", "ntx-form-runtime"].includes(tag)) {
                ancestorTag = tag;
                break;
            }
            el = el.parentElement;
        }
        if (ancestorTag === 'ntx-form-preview') {
            // Preview: allow user to enter JSON, minify+escape and show result
            let minified = '';
            let escaped = '';
            let error = '';
            try {
                if (this.requestBody) {
                    minified = JSON.stringify(JSON.parse(this.requestBody));
                    escaped = minified.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
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
        if (ancestorTag === 'ntx-form-runtime') {
            // Show response details in a bootstrap-like alert
            return html `
        <div>
          <label>${this.label}</label>
          <input
            .value=${this.value}
            ?disabled=${this.readOnly}
            @input=${this.onInput}
          />
          <div>${this.description}</div>
          <div class="alert alert-info mt-2" role="alert" style="margin-top:10px;">
            <strong>Response:</strong>
            <pre style="margin:0;">${this.value ? this.value : 'No response yet.'}</pre>
          </div>
        </div>
      `;
        }
        // Default: builder/designer and others
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
], DafWebRequestPlugin.prototype, "requestBody", void 0);
DafWebRequestPlugin = __decorate([
    customElement('daf-webrequest-plugin')
], DafWebRequestPlugin);
export { DafWebRequestPlugin };
