import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { PluginContract, PropType } from '@nintex/form-plugin-contract';

@customElement('daf-webrequest-plugin')
export class DafWebRequestPlugin extends LitElement {
  @property({ type: String }) label = '';
  @property({ type: String }) description = '';
  @property({ type: Boolean }) readOnly = false;
  @property({ type: String }) value = '';
  @property({ type: String }) openApiUrl = '';
  @property({ type: String }) requestBody = '';
  private openApiSpec: any = null;

  static getMetaConfig(): PluginContract {
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
        } as PropType,
        apiUrl: {
          type: 'string',
          title: 'API URL with Token',
          description: 'The endpoint URL to call, including any required token as a query parameter.',
          defaultValue: '',
        } as PropType,
        requestHeaders: {
          type: 'string',
          title: 'Request Headers (JSON)',
          description: 'Headers to include in the API request, as a JSON object.',
          defaultValue: '',
        } as PropType,
        requestBody: {
          type: 'string',
          title: 'Request Body (JSON)',
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
          type: 'string',
          title: 'Value',
          isValueField: true,
          defaultValue: '',
        } as PropType,
      },
      standardProperties: {
        fieldLabel: true,
        description: true,
        readOnly: true,
        defaultValue: true,
      },
    };
  }

  updated(changedProps: Map<string, any>) {
    if (changedProps.has('openApiUrl') && this.openApiUrl) {
      this.fetchOpenApiSpec(this.openApiUrl);
    }
  }

  async fetchOpenApiSpec(url: string) {
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error('Failed to fetch OpenAPI spec');
      this.openApiSpec = await res.json();
      // You can now use this.openApiSpec to build UI or logic
    } catch (e) {
      this.openApiSpec = null;
      // Optionally handle error (show message, etc.)
    }
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
      // Render a JSON escaper/minifier for the requestBody
      let minified = '';
      try {
        if (this.requestBody) {
          minified = JSON.stringify(JSON.parse(this.requestBody));
        }
      } catch (e) {
        minified = 'Invalid JSON';
      }
      return html`
        <div>
          <label>Minified JSON:</label>
          <textarea readonly rows="6" style="width:100%">${minified}</textarea>
        </div>
      `;
    }

    if (ancestorTag === 'ntx-form-runtime') {
      // Show response details in a bootstrap-like alert
      return html`
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
    return html`
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

  private onInput = (e: Event) => {
    const input = e.target as HTMLInputElement;
    this.value = input.value;
    this.dispatchEvent(new CustomEvent('ntx-value-change', {
      detail: this.value,
      bubbles: true,
      composed: true,
    }));
  };
}
