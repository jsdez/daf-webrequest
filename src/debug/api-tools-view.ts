import { html, type TemplateResult } from 'lit';
import { getJsonStatus, isValidJson } from '../utils/json.js';
import { renderJsonOutput, renderJsonPreview } from './json-tools-view.js';

export type ApiToolsViewCallbacks = {
  onFormat: () => void;
  onMinify: () => void;
  onClear: () => void;
  onInsertSample: () => void;
  onInput: (event: Event) => void;
  onBlur: (event: Event) => void;
  onPaste: (event: ClipboardEvent) => void;
};

export function renderApiToolsTab(
  requestBody: string,
  callbacks: ApiToolsViewCallbacks,
): TemplateResult {
  const requestBodyIsValid = isValidJson(requestBody);
  const jsonStatus = getJsonStatus(requestBody);

  return html`
    <div class="debug-tools">
      <div class="form-group">
        <label class="control-label">JSON Request Body Editor</label>
        <div class="json-editor-container">
          <div class="json-editor-toolbar">
            <div class="json-editor-actions">
              <button class="json-editor-btn" @click=${callbacks.onFormat} ?disabled=${!requestBodyIsValid}
                title="Format and beautify JSON">✨ Format</button>
              <button class="json-editor-btn" @click=${callbacks.onMinify} ?disabled=${!requestBodyIsValid}
                title="Minify JSON to single line">🗜️ Minify</button>
              <button class="json-editor-btn" @click=${callbacks.onClear} title="Clear JSON content">🗑️ Clear</button>
              <button class="json-editor-btn" @click=${callbacks.onInsertSample} title="Insert sample JSON">📝 Sample</button>
            </div>
            <div class="json-editor-status ${requestBodyIsValid ? 'valid' : 'invalid'}">${jsonStatus}</div>
          </div>
          <textarea
            class="form-control json-editor-textarea"
            .value=${requestBody}
            @input=${callbacks.onInput}
            @blur=${callbacks.onBlur}
            @paste=${callbacks.onPaste}
            placeholder="Enter JSON request body here..."
            spellcheck="false"
          ></textarea>
        </div>
      </div>
      ${renderJsonOutput(requestBody)}
      ${renderJsonPreview(requestBody)}
    </div>
  `;
}
