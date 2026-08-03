import { html, type TemplateResult } from 'lit';
import { formatJsonForDisplay } from '../utils/json.js';

export type RequestDetailsViewState = {
  apiUrl: string;
  method: string;
  oauthTokenResponse: unknown;
  requestHeaders: string;
  requestBody: string;
  isLoading: boolean;
  hasSuccessfulCall: boolean;
  isButtonDisabled: boolean;
  apiResponse: string;
};

export function renderRequestDetailsTab(
  state: RequestDetailsViewState,
  onCopy: (text: string) => void,
): TemplateResult {
  const renderCopyableJson = (value: string) => html`
    <div class="debug-json-container">
      <button class="debug-json-copy-btn" @click=${() => onCopy(value)} title="Copy to clipboard">📋 Copy</button>
      <pre class="debug-json">${value}</pre>
    </div>
  `;

  const oauthTokenResponse = state.oauthTokenResponse
    ? JSON.stringify(state.oauthTokenResponse, null, 2)
    : '';
  const requestHeaders = state.requestHeaders ? formatJsonForDisplay(state.requestHeaders) : '';
  const requestBody = state.requestBody ? formatJsonForDisplay(state.requestBody) : '';
  const apiResponse = state.apiResponse ? formatJsonForDisplay(state.apiResponse) : '';

  return html`
    <table class="debug-table">
      <thead>
        <tr><th>Property</th><th>Value</th></tr>
      </thead>
      <tbody>
        <tr><td><code>apiUrl</code></td><td style="word-break: break-all;">${state.apiUrl || '<not set>'}</td></tr>
        <tr><td><code>method</code></td><td>${state.method}</td></tr>
        ${state.oauthTokenResponse ? html`
          <tr><td><code>OAuth Token</code></td><td>${renderCopyableJson(oauthTokenResponse)}</td></tr>
        ` : ''}
        <tr><td><code>requestHeaders</code></td><td>${requestHeaders ? renderCopyableJson(requestHeaders) : '<not set>'}</td></tr>
        <tr><td><code>requestBody</code></td><td>${requestBody ? renderCopyableJson(requestBody) : '<not set>'}</td></tr>
        <tr>
          <td><code>State</code></td>
          <td>
            <strong>Loading:</strong> ${state.isLoading}<br>
            <strong>Has Successful Call:</strong> ${state.hasSuccessfulCall}<br>
            <strong>Button Disabled:</strong> ${state.isButtonDisabled}
          </td>
        </tr>
        ${state.apiResponse ? html`
          <tr><td><code>Response</code></td><td>${renderCopyableJson(apiResponse)}</td></tr>
        ` : ''}
      </tbody>
    </table>
  `;
}
