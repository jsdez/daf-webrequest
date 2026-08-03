import { html, type TemplateResult } from 'lit';
import { extractNestedValue } from '../utils/response.js';
import type { FormatterFieldSelection } from '../formatters/response-config.js';

export type FormatterPreviewItem = {
  title: string;
  value: string;
};

export function getFormatterPreviewItems(
  selectedFields: ReadonlyMap<string, FormatterFieldSelection>,
  responseJson: any,
): FormatterPreviewItem[] {
  const items: FormatterPreviewItem[] = [];

  selectedFields.forEach((config, key) => {
    if (!config.checked) return;

    const value = extractNestedValue(responseJson, key);
    items.push({
      title: config.title || key,
      value: value !== undefined ? String(value) : 'N/A',
    });
  });

  return items;
}

export function renderFormattedPreview(
  selectedFields: ReadonlyMap<string, FormatterFieldSelection>,
  responseJson: any,
): TemplateResult | TemplateResult[] {
  const items = getFormatterPreviewItems(selectedFields, responseJson);
  if (items.length === 0) {
    return html`<div style="color: var(--ntx-form-theme-color-secondary); font-style: italic;">No fields selected</div>`;
  }

  return items.map((item) => html`
    <div style="margin-bottom: 8px;">
      <strong>${item.title}:</strong> ${item.value}
    </div>
  `);
}
