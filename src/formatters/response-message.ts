import { extractNestedValue } from '../utils/response.js';

export function formatMessageWithBoldLabels(message: string): string {
  if (!message) return '';

  return message.split('\n').map((line) => {
    const match = line.match(/^([^:]+):\s*(.*)$/);
    if (!match) return line;

    const label = match[1].trim();
    const value = match[2];
    return `<strong>${label}:</strong> ${value}`;
  }).join('<br>');
}

export function formatRawResponse(apiResponse: string): string {
  if (!apiResponse) return '';

  try {
    return JSON.stringify(JSON.parse(apiResponse), null, 2);
  } catch {
    return apiResponse;
  }
}

export function formatResponseWithConfig(config: any, responseDataString: string): string {
  if (!config.fields || !Array.isArray(config.fields)) {
    return 'Invalid configuration format';
  }

  let responseData: any;
  try {
    responseData = JSON.parse(responseDataString);
  } catch (error) {
    console.error('[Message Formatting] Failed to parse response data:', error);
    return 'Unable to parse response data';
  }

  const lines: string[] = [];
  config.fields.forEach((field: any) => {
    const value = extractNestedValue(responseData, field.path);

    if (Array.isArray(value)) {
      if (value.length > 0) {
        const firstItem = value[0];
        const isPrimitiveArray = typeof firstItem !== 'object' || firstItem === null;
        lines.push(`${field.title}:`);
        value.forEach((item, index) => {
          lines.push(`  ${index + 1}. ${isPrimitiveArray ? String(item) : JSON.stringify(item)}`);
        });
      } else {
        lines.push(`${field.title}: (empty)`);
      }
    } else {
      const displayValue = value !== undefined && value !== null ? String(value) : 'N/A';
      lines.push(`${field.title}: ${displayValue}`);
    }
  });

  return lines.join('\n');
}
