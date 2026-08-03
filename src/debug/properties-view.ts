import { html, type TemplateResult } from 'lit';
import { formatValue } from '../utils/json.js';

export type DebugProperty = {
  name: string;
  default: unknown;
  config: { type?: string };
};

export function getDebugProperties(
  metadataProperties: Record<string, any> | undefined,
  sensitivePropertyNames: ReadonlySet<string>,
): DebugProperty[] {
  if (!metadataProperties) return [];

  return Object.entries(metadataProperties)
    .filter(([name]) => name !== 'value' && !sensitivePropertyNames.has(name))
    .map(([name, config]) => ({
      name,
      default: config.defaultValue,
      config,
    }));
}

export function renderDebugPropertiesTab(
  metadataProperties: Record<string, any> | undefined,
  values: Record<string, unknown>,
  sensitivePropertyNames: ReadonlySet<string>,
): TemplateResult {
  const properties = getDebugProperties(metadataProperties, sensitivePropertyNames);

  return html`
    <table class="debug-table">
      <thead>
        <tr>
          <th>Property</th>
          <th>Default Value</th>
          <th>Current Value</th>
        </tr>
      </thead>
      <tbody>
        ${properties.map((property) => html`
          <tr>
            <td><code class="property-name">${property.name}</code></td>
            <td class="value-default">${formatValue(property.default)}</td>
            <td class="value-current">${renderDebugPropertyValue(property.name, property.config, values)}</td>
          </tr>
        `)}
      </tbody>
    </table>
  `;
}

function renderDebugPropertyValue(
  propertyName: string,
  propertyConfig: { type?: string },
  values: Record<string, unknown>,
): TemplateResult {
  const currentValue = values[propertyName] as any;
  const propertyType = propertyConfig.type;

  if (propertyType === 'boolean') {
    return html`
      <span style="font-weight: 500; color: ${currentValue ? '#28a745' : '#dc3545'};">
        ${currentValue ? '✓ Yes' : '✗ No'}
      </span>
    `;
  }

  if (propertyType === 'string') {
    const displayValue = (propertyName === 'bearerToken' || propertyName === 'clientSecret')
      && currentValue
      && currentValue.length > 0
      ? `***${currentValue.slice(-4)}`
      : currentValue;
    const truncated = displayValue && displayValue.length > 100
      ? `${displayValue.substring(0, 100)}...`
      : displayValue;

    return html`
      <span style="font-family: 'Courier New', monospace; font-size: 12px; word-break: break-all;">
        ${truncated || '<empty>'}
      </span>
    `;
  }

  if (propertyType === 'number' || propertyType === 'integer') {
    return html`<span style="font-weight: 500;">${currentValue}</span>`;
  }

  return html`<span>${formatValue(currentValue)}</span>`;
}
