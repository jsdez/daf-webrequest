import { determineResponseType, extractNestedValue } from '../utils/response.js';

export function interpretApiResponse(response: string, success: boolean | undefined, outputValueKey: string) {
  const responseType = success === false ? 'error' : determineResponseType(response);
  let accessToken: string | undefined;
  let output: unknown;
  let message = '';

  try {
    const parsed = JSON.parse(response);
    if (parsed.access_token) accessToken = parsed.access_token;
    if (outputValueKey && outputValueKey.trim()) output = extractNestedValue(parsed, outputValueKey);
    message = extractNestedValue(parsed, 'd.Message')
      || extractNestedValue(parsed, 'Message')
      || extractNestedValue(parsed, 'message')
      || extractNestedValue(parsed, 'msg')
      || extractNestedValue(parsed, 'data.message')
      || '';
  } catch {
    // Non-JSON responses retain the classified type without optional extraction.
  }

  return { responseType, accessToken, output, message };
}
