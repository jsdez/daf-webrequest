export type ResponseType = 'success' | 'warning' | 'error';

export function determineResponseType(response: string): ResponseType {
  const normalizedResponse = response.toLowerCase();
  if (
    normalizedResponse.includes('error:')
    || normalizedResponse.includes('failed')
    || normalizedResponse.includes('exception')
  ) {
    return 'error';
  }

  try {
    const parsed = JSON.parse(response);
    if (parsed.error || parsed.status === 'error') {
      return 'error';
    }
    if (parsed.warning || parsed.status === 'warning') {
      return 'warning';
    }
  } catch {
    // Non-JSON responses use the textual checks above, then default to success.
  }

  return 'success';
}

export function extractNestedValue(obj: any, path: string): any {
  // First, try the exact key for keys such as "developer.email".
  if (obj && typeof obj === 'object' && path in obj) {
    return obj[path];
  }

  const keys = path.split('.');
  let current = obj;

  for (let index = 0; index < keys.length; index += 1) {
    const key = keys[index];
    const arrayMatch = key.match(/^(.+)\[(\*|\d+)\]$/);

    if (arrayMatch) {
      const arrayKey = arrayMatch[1];
      const arrayIndex = arrayMatch[2];
      if (!current || typeof current !== 'object' || !(arrayKey in current)) {
        return undefined;
      }

      const array = current[arrayKey];
      if (!Array.isArray(array)) {
        return undefined;
      }

      if (arrayIndex === '*') {
        const remainingPath = keys.slice(index + 1).join('.');
        return remainingPath
          ? array.map((item) => extractNestedValue(item, remainingPath)).filter((value) => value !== undefined)
          : array;
      }

      current = array[parseInt(arrayIndex, 10)];
    } else if (current && typeof current === 'object' && key in current) {
      current = current[key];
    } else {
      return undefined;
    }
  }

  return current;
}
