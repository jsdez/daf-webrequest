export function formatValue(value: any): string {
  if (typeof value === 'boolean') return value.toString();
  if (typeof value === 'string') return `"${value}"`;
  if (typeof value === 'number') return value.toString();
  if (value === null) return 'null';
  if (value === undefined) return 'undefined';
  return JSON.stringify(value);
}

export function formatJsonForDisplay(jsonString: string): string {
  try {
    return JSON.stringify(JSON.parse(jsonString), null, 2);
  } catch {
    return jsonString;
  }
}

export function isValidJson(jsonString: string): boolean {
  if (!jsonString.trim()) return true;
  try {
    JSON.parse(jsonString);
    return true;
  } catch {
    return false;
  }
}

export function countJsonKeys(obj: any): number {
  if (typeof obj !== 'object' || obj === null) return 0;
  if (Array.isArray(obj)) {
    return obj.reduce((count: number, item: any) => count + countJsonKeys(item), 0);
  }
  return Object.keys(obj).length
    + Object.values(obj).reduce((count: number, value: any) => count + countJsonKeys(value), 0);
}

export function getJsonStatus(jsonString: string): string {
  if (!jsonString.trim()) return 'Empty';

  try {
    const parsed = JSON.parse(jsonString);
    return `Valid JSON • ${jsonString.length} chars • ${jsonString.split('\n').length} lines • ${countJsonKeys(parsed)} keys`;
  } catch (error) {
    return `Invalid JSON • ${(error as Error).message}`;
  }
}
