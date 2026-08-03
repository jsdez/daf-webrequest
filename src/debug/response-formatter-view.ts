import { html, type TemplateResult } from 'lit';
import { isValidJson } from '../utils/json.js';

export type ResponseMessageType = 'success' | 'warning' | 'error';

export type ResponseFormatterViewState = {
  formatterJsonInput: string;
  activeFormatterTab: ResponseMessageType;
  successMessage: string;
  warningMessage: string;
  errorMessage: string;
};

export type ResponseFormatterViewCallbacks = {
  onJsonInput: (event: Event) => void;
  onTabChange: (type: ResponseMessageType) => void;
  renderMessageTypeConfig: (
    type: ResponseMessageType,
    currentConfig: string,
    parsedJson: any,
  ) => TemplateResult;
};

export function renderResponseFormatterTab(
  state: ResponseFormatterViewState,
  callbacks: ResponseFormatterViewCallbacks,
): TemplateResult {
  const hasJsonInput = state.formatterJsonInput.trim().length > 0;
  const formatterJsonIsValid = hasJsonInput && isValidJson(state.formatterJsonInput);
  let parsedJson: any = null;
  let jsonError = '';

  if (hasJsonInput) {
    try {
      parsedJson = JSON.parse(state.formatterJsonInput);
    } catch (error) {
      jsonError = (error as Error).message;
    }
  }

  const renderTabButton = (type: ResponseMessageType, label: string) => html`
    <button
      class="debug-tab-button ${state.activeFormatterTab === type ? 'active' : ''}"
      @click=${() => callbacks.onTabChange(type)}
    >${label}</button>
  `;

  return html`
    <div class="debug-tools">
      <div class="form-group">
        <label class="control-label">Paste Response JSON</label>
        <textarea
          class="form-control"
          rows="8"
          .value=${state.formatterJsonInput}
          @input=${callbacks.onJsonInput}
          placeholder="Paste your API response JSON here (for success, error, or warning responses)..."
          style="font-family: 'Consolas', 'Monaco', 'Courier New', monospace; font-size: 13px;"
        ></textarea>
        ${jsonError ? html`<div class="text-danger" style="margin-top: 8px;">${jsonError}</div>` : ''}
      </div>

      ${formatterJsonIsValid && parsedJson ? html`
        <div class="debug-tab-nav" style="margin-bottom: 0;">
          ${renderTabButton('success', '✓ Success Message')}
          ${renderTabButton('warning', '⚠ Warning Message')}
          ${renderTabButton('error', '✕ Error Message')}
        </div>

        <div class="debug-tab-content ${state.activeFormatterTab === 'success' ? 'active' : ''}">
          ${callbacks.renderMessageTypeConfig('success', state.successMessage, parsedJson)}
        </div>
        <div class="debug-tab-content ${state.activeFormatterTab === 'warning' ? 'active' : ''}">
          ${callbacks.renderMessageTypeConfig('warning', state.warningMessage, parsedJson)}
        </div>
        <div class="debug-tab-content ${state.activeFormatterTab === 'error' ? 'active' : ''}">
          ${callbacks.renderMessageTypeConfig('error', state.errorMessage, parsedJson)}
        </div>
      ` : ''}
    </div>
  `;
}
