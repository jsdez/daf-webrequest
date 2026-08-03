import { PluginContract, PropType, pluginContractSchema } from '@nintex/form-plugin-contract';

const PLUGIN_VERSION = '1.1.8';

let contractValidationDone = false;

function validateContractOnce(contract: PluginContract): void {
  if (contractValidationDone) return;
  contractValidationDone = true;

  const result = pluginContractSchema.safeParse(contract);
  if (result.success) {
    console.log('[Plugin Contract] Contract validation passed');
    return;
  }

  console.error('[Plugin Contract] Contract validation failed');
  result.error.issues.forEach((issue, index) => {
    console.error(`  [${index + 1}] path=${issue.path.join('.')} message=${issue.message}`);
  });
}

export function getPluginContract(): PluginContract {
  const contract: PluginContract = {
    controlName: 'Web Request Plugin',
    fallbackDisableSubmit: false,
    version: PLUGIN_VERSION,
    description: 'A Nintex Form Plugin for making API calls.',
    properties: {
      apiUrl: {
        type: 'string',
        title: 'API URL',
        description: 'The endpoint URL to call',
        defaultValue: '',
      } as PropType,
      method: {
        type: 'string',
        title: 'HTTP Method',
        description: 'The HTTP method to use for the API call.',
        enum: ['POST', 'GET', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
        defaultValue: 'POST',
      } as PropType,
      requestHeaders: {
        type: 'string',
        title: 'Request Headers',
        description: 'Headers to include in the API request, as a JSON object.',
        defaultValue: '',
      } as PropType,
      bearerToken: {
        type: 'string',
        title: 'Bearer Token',
        description: 'Optional bearer token value for authorization header used if token URL is not provided',
        defaultValue: '',
      } as PropType,
      tokenUrl: {
        type: 'string',
        title: 'Token URL',
        description: 'Optional OAuth token endpoint URL',
        defaultValue: '',
      } as PropType,
      clientId: {
        type: 'string',
        title: 'Client ID',
        description: 'OAuth Client ID required if Token URL is provided',
        defaultValue: '',
      } as PropType,
      clientSecret: {
        type: 'string',
        title: 'Client Secret',
        description: 'OAuth Client Secret required if Token URL is provided',
        defaultValue: '',
      } as PropType,
      requestBody: {
        type: 'string',
        title: 'Request Body',
        description: 'Body to send in the API request. Format depends on Content Type.',
        defaultValue: '',
      } as PropType,
      outputValueKey: {
        type: 'string',
        title: 'Output Value Key',
        description: 'Optional JSON key path to extract from response',
        defaultValue: '',
      } as PropType,
      contentType: {
        type: 'string',
        title: 'Content Type',
        description: 'The Content-Type header for the request body.',
        enum: ['application/json', 'application/x-www-form-urlencoded', 'text/plain'],
        defaultValue: 'application/json',
      } as PropType,
      requestTimeout: {
        type: 'number',
        title: 'Request Timeout',
        description: 'Maximum seconds to wait for the OAuth token or API request. Set to 0 to disable the timeout.',
        defaultValue: 30,
      } as PropType,
      value: {
        type: 'object',
        title: 'API Response',
        description: 'The complete API response object containing status, data, and metadata',
        isValueField: true,
        properties: {
          success: {
            type: 'boolean',
            title: 'Success',
            description: 'Whether the API call was successful',
          },
          valid: {
            type: 'boolean',
            title: 'Valid',
            description: 'Validation flag used by form rules. True on successful API call and in only-submit mode.',
          },
          statusCode: {
            type: 'integer',
            title: 'HTTP Status Code',
            description: 'The HTTP response status code',
          },
          responseType: {
            type: 'string',
            title: 'Response Type',
            description: 'The categorized response type (success, warning, error)',
          },
          data: {
            type: 'string',
            title: 'Response Data',
            description: 'The raw response data from the API',
          },
          message: {
            type: 'string',
            title: 'Response Message',
            description: 'Actual message from API response',
          },
          formattedResponse: {
            type: 'string',
            title: 'Formatted Response',
            description: 'Formatted response message based on success warning and error message configuration',
          },
          timestamp: {
            type: 'string',
            title: 'Timestamp',
            description: 'ISO timestamp of when the API call was made',
          },
          executionTime: {
            type: 'integer',
            title: 'Execution Time',
            description: 'Time taken for the API call in milliseconds',
          },
          access_token: {
            type: 'string',
            title: 'Access Token',
            description: 'Automatically extracted access_token from response if present',
          },
          output: {
            type: 'string',
            title: 'Custom Output',
            description: 'Custom extracted value based on outputValueKey property',
          }
        },
        defaultValue: {
          success: false,
          valid: false,
          statusCode: 0,
          responseType: '',
          data: '',
          message: '',
          formattedResponse: '',
          timestamp: '',
          executionTime: 0
        },
      } as PropType,
      debugMode: {
        type: 'boolean',
        title: 'Debug Mode',
        description: 'If true, enables the JSON converter UI.',
        defaultValue: false,
      } as PropType,
      successMessage: {
        type: 'string',
        title: 'Success Message',
        description: 'Custom message to display when the API call succeeds. Can be plain text or a Response Format Configuration JSON from the Response Formatter.',
        defaultValue: 'API call completed successfully',
      } as PropType,
      warningMessage: {
        type: 'string',
        title: 'Warning Message',
        description: 'Custom message to display when the API call returns a warning. Can be plain text or a Response Format Configuration JSON from the Response Formatter.',
        defaultValue: 'API call completed with warnings',
      } as PropType,
      errorMessage: {
        type: 'string',
        title: 'Error Message',
        description: 'Custom message to display when the API call fails. Can be plain text or a Response Format Configuration JSON from the Response Formatter.',
        defaultValue: 'API call failed',
      } as PropType,
      sendAPICall: {
        type: 'boolean',
        title: 'Send API Call',
        description: 'Set to true to trigger the API call. Automatically resets to false after execution.',
        defaultValue: false,
      } as PropType,
      allowMultipleAPICalls: {
        type: 'boolean',
        title: 'Allow Multiple API Calls',
        description: 'If true allows repeated API calls. If false blocks repeated calls after success until request configuration or submission behavior changes.',
        defaultValue: false,
      } as PropType,
      countdownEnabled: {
        type: 'boolean',
        title: 'Enable Countdown Timer',
        description: 'If true, enforces a countdown timer between API calls. If false, allows unlimited rapid calls.',
        defaultValue: false,
      } as PropType,
      countdownTimer: {
        type: 'number',
        title: 'Countdown Timer',
        description: 'Number of seconds to wait between API calls when countdown is enabled.',
        defaultValue: 5,
      } as PropType,
      btnVisible: {
        type: 'boolean',
        title: 'Button Visible',
        description: 'If true, the button is visible on the form.',
        defaultValue: true,
      } as PropType,
      btnEnabled: {
        type: 'boolean',
        title: 'Button Enabled',
        description: 'If true, the button is enabled and can be clicked.',
        defaultValue: true,
      } as PropType,
      btnText: {
        type: 'string',
        title: 'Button Text',
        description: 'The text to display on the button.',
        defaultValue: 'Send API Request',
      } as PropType,
      btnAlignment: {
        type: 'string',
        title: 'Button Alignment',
        description: 'The alignment of the button within the container.',
        enum: ['left', 'center', 'right'],
        defaultValue: 'left',
      } as PropType,
      submissionAction: {
        type: 'string',
        title: 'Submission Action',
        description: 'Action to take after a successful API call Set to only submit to skip API call and submit form directly',
        enum: ['no-submit', 'quick-submit', 'delayed-submit', 'only-submit'],
        defaultValue: 'no-submit',
      } as PropType,
      submitHidden: {
        type: 'boolean',
        title: 'Hide Submit Button',
        description: 'If true, hides the Nintex form submit button from users.',
        defaultValue: false,
      } as PropType,
      showMoreDetails: {
        type: 'string',
        title: 'Show More Details',
        description: 'Controls when to show expandable raw response details in alerts.',
        enum: ['Never', 'Always', 'On Error/Warning'],
        defaultValue: 'Never',
      } as PropType,
      alertPosition: {
        type: 'string',
        title: 'Alert Position',
        description: 'Controls where the alert message is displayed relative to the button.',
        enum: ['After', 'Before', 'Pop-out'],
        defaultValue: 'After',
      } as PropType,
    },
    standardProperties: {
      fieldLabel: true,
      description: true,
      readOnly: true,
      defaultValue: false,
    },
  };

  validateContractOnce(contract);
  return contract;
}
