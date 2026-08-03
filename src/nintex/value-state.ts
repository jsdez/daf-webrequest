export function createPendingApiValue(timestamp: string) {
  return {
    success: false,
    valid: false,
    statusCode: 0,
    responseType: 'pending',
    data: '',
    message: '',
    formattedResponse: '',
    timestamp,
    executionTime: 0,
  };
}

export function createApiResponseValue(input: {
  success: boolean;
  responseType: string;
  statusCode?: number;
  data: string;
  message: string;
  formattedResponse: string;
  timestamp: string;
  executionTime: number;
  accessToken?: string;
  output?: unknown;
}) {
  const isTrueSuccess = input.success === true && input.responseType === 'success';
  return {
    success: isTrueSuccess,
    valid: isTrueSuccess,
    statusCode: input.statusCode !== undefined ? input.statusCode : (input.responseType === 'success' ? 200 : 500),
    responseType: input.responseType,
    data: input.data,
    message: input.message,
    formattedResponse: input.formattedResponse,
    timestamp: input.timestamp,
    executionTime: input.executionTime,
    ...(input.accessToken && { access_token: input.accessToken }),
    ...(input.output !== undefined && { output: input.output }),
  };
}

export function createConfigurationErrorValue(
  message: string,
  formattedResponse: string,
  timestamp: string,
  executionTime: number,
) {
  return {
    success: false,
    valid: false,
    statusCode: 0,
    responseType: 'error',
    data: message,
    message,
    formattedResponse,
    timestamp,
    executionTime,
  };
}
