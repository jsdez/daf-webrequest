import { html, type TemplateResult } from 'lit';
import type { FormatterFieldSelection } from '../formatters/response-config.js';

export type SelectedFieldsViewCallbacks = {
  onReorder: (fromIndex: number, toIndex: number) => void;
  onTitleChange: (fieldKey: string, title: string) => void;
  onRemove: (fieldKey: string) => void;
};

export function renderSelectedFieldsList(
  fields: Array<[string, FormatterFieldSelection]>,
  callbacks: SelectedFieldsViewCallbacks,
): TemplateResult | TemplateResult[] {
  if (fields.length === 0) {
    return html`<div style="color: var(--ntx-form-theme-color-secondary); font-style: italic; padding: 12px; text-align: center;">No fields selected. Check fields from the left panel.</div>`;
  }

  return fields.map(([fieldKey, config], index) => html`
    <div draggable="true"
      @dragstart=${(event: DragEvent) => {
        event.dataTransfer!.effectAllowed = 'move';
        event.dataTransfer!.setData('text/plain', index.toString());
      }}
      @dragover=${(event: DragEvent) => {
        event.preventDefault();
        event.dataTransfer!.dropEffect = 'move';
      }}
      @drop=${(event: DragEvent) => {
        event.preventDefault();
        const fromIndex = parseInt(event.dataTransfer!.getData('text/plain'));
        if (fromIndex !== index) callbacks.onReorder(fromIndex, index);
      }}
      style="display: flex; align-items: center; gap: 10px; margin-bottom: 10px; padding: 10px; background: var(--ntx-form-theme-color-background); border: 1px solid var(--ntx-form-theme-color-border); border-radius: 4px; cursor: move; transition: all 0.2s;"
      @mouseenter=${(event: MouseEvent) => {
        (event.currentTarget as HTMLElement).style.borderColor = 'var(--ntx-form-theme-color-primary)';
        (event.currentTarget as HTMLElement).style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
      }}
      @mouseleave=${(event: MouseEvent) => {
        (event.currentTarget as HTMLElement).style.borderColor = 'var(--ntx-form-theme-color-border)';
        (event.currentTarget as HTMLElement).style.boxShadow = 'none';
      }}>
      <div style="font-size: 16px; color: var(--ntx-form-theme-color-secondary); cursor: grab;" title="Drag to reorder">⋮⋮</div>
      <div style="font-weight: 600; color: var(--ntx-form-theme-color-primary); min-width: 30px;">${index + 1}.</div>
      <div style="flex: 1; min-width: 0;">
        <div style="font-size: 11px; color: var(--ntx-form-theme-color-secondary); margin-bottom: 4px; word-break: break-all;"><code style="font-size: 10px;">${fieldKey}</code></div>
        <input type="text" class="form-control" placeholder="Display title" .value=${config.title}
          @input=${(event: Event) => callbacks.onTitleChange(fieldKey, (event.target as HTMLInputElement).value)}
          style="font-size: 13px; padding: 6px 8px; height: auto;" />
      </div>
      <button @click=${() => callbacks.onRemove(fieldKey)}
        style="background: var(--ntx-form-theme-color-error, #dc3545); color: white; border: none; border-radius: 4px; padding: 6px 10px; cursor: pointer; font-size: 12px; transition: filter 0.2s;"
        @mouseenter=${(event: MouseEvent) => { (event.currentTarget as HTMLElement).style.filter = 'brightness(0.9)'; }}
        @mouseleave=${(event: MouseEvent) => { (event.currentTarget as HTMLElement).style.filter = 'brightness(1)'; }} title="Remove field">✕</button>
    </div>
  `);
}
