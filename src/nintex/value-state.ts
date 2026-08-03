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
