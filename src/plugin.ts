import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { PluginContract, PropType } from '@nintex/form-plugin-contract';

@customElement('daf-webrequest-plugin')
export class DafWebRequestPlugin extends LitElement {
  @property({ type: String }) label = '';
  @property({ type: String }) description = '';
  @property({ type: Boolean }) readOnly = false;
  @property({ type: String }) value = '';
  @property({ type: String }) requestBody = '';
  @property({ type: String }) apiUrl = '';
  @property({ type: String }) requestHeaders = '';
  @property({ type: Boolean }) debugMode = false;

  private isLoading = false;
  private apiResponse: string = '';

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
        debugMode: {
          type: 'boolean',
          title: 'Debug Mode',
          description: 'If true, enables the JSON converter UI.',
          defaultValue: false,
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
        <div>
          <label>Enter JSON:</label>
          <textarea rows="8" style="width:100%" .value=${this.requestBody} @input=${(e: any) => { this.requestBody = e.target.value; this.requestUpdate(); }}></textarea>
          <div style="margin-top:10px;">
            <label>Minified & Escaped JSON:</label>
            <textarea readonly rows="4" style="width:100%">${escaped}</textarea>
            ${error ? html`<div style="color:red;">${error}</div>` : ''}
          </div>
        </div>
      `;
    }
    // Not in debug mode: show request content and API call button
    return html`
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

  private onInput = (e: Event) => {
    const input = e.target as HTMLInputElement;
    this.value = input.value;
    this.dispatchEvent(new CustomEvent('ntx-value-change', {
      detail: this.value,
      bubbles: true,
      composed: true,
    }));
  };

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

  private async callApi() {
    this.isLoading = true;
    this.apiResponse = '';
    try {
      let url = this.apiUrl || '';
      let headers: Record<string, string> = {};
      if (this.requestHeaders) {
        // Support both JSON and simple key:value pairs
        try {
          headers = JSON.parse(this.requestHeaders);
        } catch {
          // Try to parse as key:value lines
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
      // Do NOT extract token from URL or move to Authorization header. Token must remain as query param per OpenAPI spec.
      // For testing: ignore requestBody and send a hardcoded value matching OpenAPI expectations
      const body = {
        startData: {
          se_input: "This is a test"
        }
      };
      const res = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          ...headers,
        },
        body: JSON.stringify(body),
      });
      const text = await res.text();
      this.apiResponse = text;
    } catch (e: any) {
      this.apiResponse = 'Error: ' + (e?.message || e);
    } finally {
      this.isLoading = false;
      this.requestUpdate();
    }
  }
}
