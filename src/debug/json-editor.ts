import { isValidJson } from '../utils/json.js';

export function formatJsonEditorValue(value: string): string | null {
  if (!isValidJson(value)) return null;
  try {
    return JSON.stringify(JSON.parse(value), null, 2);
  } catch {
    return null;
  }
}

export function minifyJsonEditorValue(value: string): string | null {
  if (!isValidJson(value)) return null;
  try {
    return JSON.stringify(JSON.parse(value));
  } catch {
    return null;
  }
}

export function createSampleJson(now: number): string {
  return JSON.stringify({
    startData: {
      se_input: 'This is a test',
      options: {
        callbackUrl: 'optionally add a callback URL here. Must be https',
        metadata: {
          userId: '12345',
          requestId: `req-${now}`,
        },
      },
    },
  }, null, 2);
}
