import { html, type TemplateResult } from 'lit';
import { isValidJson } from '../utils/json.js';

export function renderJsonOutput(requestBody: string): TemplateResult | string {
  if (!requestBody.trim()) return '';

  let minified = '';
  let escaped = '';
  let error = '';

  try {
    const parsed = JSON.parse(requestBody);
    minified = JSON.stringify(parsed);
    escaped = `"${minified.replace(/\\/g, '\\\\').replace(/"/g, '\\"')}"`;
  } catch (exception) {
    error = (exception as Error).message;
  }

  return html`
    <div class="form-group">
      <label class="control-label">Generated Output</label>
      <div style="display: flex; gap: 16px;">
        <div style="flex: 1;">
          <label class="control-label" style="font-size: 12px; color: #6c757d;">Minified JSON</label>
          <textarea class="form-control" readonly rows="3" .value=${minified}
            style="font-family: 'Consolas', 'Monaco', 'Courier New', monospace; font-size: 12px;"
          ></textarea>
        </div>
        <div style="flex: 1;">
          <label class="control-label" style="font-size: 12px; color: #6c757d;">Escaped for Code</label>
          <textarea class="form-control" readonly rows="3" .value=${escaped}
            style="font-family: 'Consolas', 'Monaco', 'Courier New', monospace; font-size: 12px;"
          ></textarea>
        </div>
      </div>
      ${error ? html`<div class="text-danger" style="margin-top: 8px; font-size: 12px;">${error}</div>` : ''}
    </div>
  `;
}

export function renderJsonPreview(requestBody: string): TemplateResult | string {
  if (!requestBody.trim() || !isValidJson(requestBody)) return '';

  try {
    const parsed = JSON.parse(requestBody);
    return html`
      <div class="form-group">
        <label class="control-label">JSON Structure Preview</label>
        <div class="json-viewer">
${renderJsonWithSyntaxHighlight(parsed, 0)}
        </div>
      </div>
    `;
  } catch {
    return '';
  }
}

export function renderJsonWithSyntaxHighlight(obj: any, indent: number = 0): string {
  const spaces = '  '.repeat(indent);

  if (obj === null) return '<span class="json-syntax-null">null</span>';
  if (typeof obj === 'string') return `<span class="json-syntax-string">"${obj}"</span>`;
  if (typeof obj === 'number') return `<span class="json-syntax-number">${obj}</span>`;
  if (typeof obj === 'boolean') return `<span class="json-syntax-boolean">${obj}</span>`;

  if (Array.isArray(obj)) {
    if (obj.length === 0) return '<span class="json-syntax-punctuation">[]</span>';
    const items = obj.map((item) => `${spaces}  ${renderJsonWithSyntaxHighlight(item, indent + 1)}`).join(',\n');
    return `<span class="json-syntax-punctuation">[</span>\n${items}\n${spaces}<span class="json-syntax-punctuation">]</span>`;
  }

  if (typeof obj === 'object') {
    const keys = Object.keys(obj);
    if (keys.length === 0) return '<span class="json-syntax-punctuation">{}</span>';
    const items = keys.map((key) => (
      `${spaces}  <span class="json-syntax-key">"${key}"</span><span class="json-syntax-punctuation">:</span> ${renderJsonWithSyntaxHighlight(obj[key], indent + 1)}`
    )).join(',\n');
    return `<span class="json-syntax-punctuation">{</span>\n${items}\n${spaces}<span class="json-syntax-punctuation">}</span>`;
  }

  return String(obj);
}
