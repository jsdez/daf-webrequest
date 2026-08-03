export type PreparedRequestBody = {
  body: unknown;
  error?: string;
};

/** Preserves the plugin's current body semantics while exposing JSON errors. */
export function prepareRequestBody(contentType: string, requestBody: string): PreparedRequestBody {
  if (contentType === 'application/x-www-form-urlencoded') {
    return { body: requestBody || '' };
  }

  if (contentType === 'application/json') {
    if (!requestBody || !requestBody.trim()) {
      return { body: undefined };
    }

    try {
      return { body: JSON.parse(requestBody) };
    } catch (error) {
      return {
        body: undefined,
        error: error instanceof Error ? error.message : String(error),
      };
    }
  }

  return { body: requestBody || '' };
}

/** Parses either a JSON header object or conventional Header: value lines. */
export function parseRequestHeaders(requestHeaders: string): Record<string, string> {
  if (!requestHeaders) {
    return {};
  }

  try {
    return JSON.parse(requestHeaders) as Record<string, string>;
  } catch {
    const headers: Record<string, string> = {};
    requestHeaders.split(/\r?\n/).forEach((line) => {
      const index = line.indexOf(':');
      if (index <= -1) return;

      const key = line.slice(0, index).trim();
      const value = line.slice(index + 1).trim();
      if (key) headers[key] = value;
    });
    return headers;
  }
}
