var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var DafWebRequestPlugin_1;
import { html, LitElement, css } from 'lit';
import { callApi } from './apiClient.js';
import { customElement, property } from 'lit/decorators.js';
let DafWebRequestPlugin = DafWebRequestPlugin_1 = class DafWebRequestPlugin extends LitElement {
    constructor() {
        super();
        // Add private property to track active debug tab
        this.activeDebugTab = 'properties';
        this.formatterJsonInput = '';
        this.formatterSelectedFields = new Map();
        // Instance-specific state (not reactive properties - these are internal state only)
        this.isLoading = false;
        this.apiResponse = '';
        this.responseType = null;
        this.hasSuccessfulCall = false;
        this.lastApiCallTime = 0;
        this.showCooldownAlert = false;
        this.lastCooldownAlertTime = 0;
        this.apiCallStartTime = 0;
        this.cooldownTimerId = null; // Track the timer for cleanup
        this.formValidationError = '';
        this.oauthTokenResponse = null;
        // Initialize all properties with their default values
        this.label = '';
        this.description = '';
        this.readOnly = false;
        this.value = {
            success: false,
            statusCode: 0,
            responseType: '',
            data: '',
            message: '',
            timestamp: '',
            executionTime: 0
        };
        this.requestBody = '';
        this.apiUrl = '';
        this.requestHeaders = '';
        this.bearerToken = '';
        this.tokenUrl = '';
        this.clientId = '';
        this.clientSecret = '';
        this.outputValueKey = '';
        this.responseConfig = '';
        this.contentType = 'application/json';
        this.debugMode = false;
        this.method = 'POST';
        this.successMessage = 'API call completed successfully';
        this.warningMessage = 'API call completed with warnings';
        this.errorMessage = 'API call failed';
        this.sendAPICall = false;
        this.allowMultipleAPICalls = false;
        this.countdownEnabled = false;
        this.countdownTimer = 5;
        this.btnEnabled = true;
        this.btnText = 'Send API Request';
        this.btnAlignment = 'left';
        this.btnVisible = true;
        this.formValidation = false;
        this.submissionAction = 'none';
        this.submitHidden = false;
    }
    // Called when the element is added to the DOM
    connectedCallback() {
        super.connectedCallback();
        // Apply submit button visibility on initial load
        this.toggleSubmitButtonVisibility();
    }
    static getMetaConfig() {
        return {
            controlName: 'Web Request Plugin',
            fallbackDisableSubmit: false,
            version: '1.0.0',
            description: 'A Nintex Form Plugin for making API calls.',
            properties: {
                apiUrl: {
                    type: 'string',
                    title: 'API URL',
                    description: 'The endpoint URL to call',
                    defaultValue: '',
                },
                method: {
                    type: 'string',
                    title: 'HTTP Method',
                    description: 'The HTTP method to use for the API call.',
                    enum: ['POST', 'GET', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
                    defaultValue: 'POST',
                },
                requestHeaders: {
                    type: 'string',
                    title: 'Request Headers',
                    description: 'Headers to include in the API request, as a JSON object.',
                    defaultValue: '',
                },
                bearerToken: {
                    type: 'string',
                    title: 'Bearer Token',
                    description: 'Optional: Bearer token value for Authorization header (used if Token URL is not provided)',
                    defaultValue: '',
                },
                tokenUrl: {
                    type: 'string',
                    title: 'Token URL',
                    description: 'Optional: OAuth token endpoint URL e.g. https://api.example.com/oauth2/v1/token',
                    defaultValue: '',
                },
                clientId: {
                    type: 'string',
                    title: 'Client ID',
                    description: 'OAuth Client ID required if Token URL is provided',
                    defaultValue: '',
                },
                clientSecret: {
                    type: 'string',
                    title: 'Client Secret',
                    description: 'OAuth Client Secret required if Token URL is provided',
                    defaultValue: '',
                },
                requestBody: {
                    type: 'string',
                    title: 'Request Body',
                    description: 'Body to send in the API request. Format depends on Content Type.',
                    defaultValue: '',
                },
                outputValueKey: {
                    type: 'string',
                    title: 'Output Value Key',
                    description: 'Optional: JSON key path to extract from response',
                    defaultValue: '',
                },
                responseConfig: {
                    type: 'string',
                    title: 'Response Format Configuration',
                    description: 'JSON configuration for formatting API response display',
                    defaultValue: '',
                },
                contentType: {
                    type: 'string',
                    title: 'Content Type',
                    description: 'The Content-Type header for the request body.',
                    enum: ['application/json', 'application/x-www-form-urlencoded', 'text/plain'],
                    defaultValue: 'application/json',
                },
                waitForResponse: {
                    type: 'boolean',
                    title: 'Wait for Callback Response',
                    description: 'If true, the plugin will wait for a callback post body once the workflow is completed.',
                    defaultValue: false,
                },
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
                            description: 'User-friendly message describing the result',
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
                        statusCode: 0,
                        responseType: '',
                        data: '',
                        message: '',
                        timestamp: '',
                        executionTime: 0
                    },
                },
                debugMode: {
                    type: 'boolean',
                    title: 'Debug Mode',
                    description: 'If true, enables the JSON converter UI.',
                    defaultValue: false,
                },
                successMessage: {
                    type: 'string',
                    title: 'Success Message',
                    description: 'Custom message to display when the API call succeeds.',
                    defaultValue: 'API call completed successfully',
                },
                warningMessage: {
                    type: 'string',
                    title: 'Warning Message',
                    description: 'Custom message to display when the API call returns a warning.',
                    defaultValue: 'API call completed with warnings',
                },
                errorMessage: {
                    type: 'string',
                    title: 'Error Message',
                    description: 'Custom message to display when the API call fails.',
                    defaultValue: 'API call failed',
                },
                sendAPICall: {
                    type: 'boolean',
                    title: 'Send API Call',
                    description: 'Set to true to trigger the API call. Automatically resets to false after execution.',
                    defaultValue: false,
                },
                allowMultipleAPICalls: {
                    type: 'boolean',
                    title: 'Allow Multiple API Calls',
                    description: 'If true, allows repeated API calls. If false, disables further calls after first success/warning.',
                    defaultValue: false,
                },
                countdownEnabled: {
                    type: 'boolean',
                    title: 'Enable Countdown Timer',
                    description: 'If true, enforces a countdown timer between API calls. If false, allows unlimited rapid calls.',
                    defaultValue: false,
                },
                countdownTimer: {
                    type: 'number',
                    title: 'Countdown Timer',
                    description: 'Number of seconds to wait between API calls when countdown is enabled.',
                    defaultValue: 5,
                },
                btnVisible: {
                    type: 'boolean',
                    title: 'Button Visible',
                    description: 'If true, the button is visible on the form.',
                    defaultValue: true,
                },
                btnEnabled: {
                    type: 'boolean',
                    title: 'Button Enabled',
                    description: 'If true, the button is enabled and can be clicked.',
                    defaultValue: true,
                },
                btnText: {
                    type: 'string',
                    title: 'Button Text',
                    description: 'The text to display on the button.',
                    defaultValue: 'Send API Request',
                },
                btnAlignment: {
                    type: 'string',
                    title: 'Button Alignment',
                    description: 'The alignment of the button within the container.',
                    enum: ['left', 'center', 'right'],
                    defaultValue: 'left',
                },
                formValidation: {
                    type: 'boolean',
                    title: 'Validate Form Before API Call',
                    description: 'If true, validates the entire Nintex form before making the API call. Only proceeds if all required fields are valid.',
                    defaultValue: false,
                },
                submissionAction: {
                    type: 'string',
                    title: 'Submission Action',
                    description: 'Action to take after a successful API call.',
                    enum: ['none', 'quick-submit', 'delayed-submit'],
                    defaultValue: 'none',
                },
                submitHidden: {
                    type: 'boolean',
                    title: 'Hide Submit Button',
                    description: 'If true, hides the Nintex form submit button from users.',
                    defaultValue: false,
                },
            },
            standardProperties: {
                fieldLabel: true,
                description: true,
                readOnly: true,
                defaultValue: false,
            },
        };
    }
    render() {
        const showJsonConverter = this.debugMode;
        if (showJsonConverter) {
            // Debug mode: Enhanced debug interface with tabs
            return html `
        <div class="plugin-container">
          ${this.btnVisible ? html `
            <div class="form-group">
              <div class="btn-container align-${this.btnAlignment}">
                <button 
                  class="btn btn-primary" 
                  part="api-button"
                  @click=${() => this.triggerAPICall()} 
                  ?disabled=${this.isButtonDisabled()}
                >
                  ${this.isLoading ? html `<span class="spinner"></span>Calling API...` : this.btnText}
                </button>
              </div>
              ${this.renderResponseAlert()}
            </div>
          ` : ''}

          <div class="debug-tabs">
            <div class="debug-tab-nav">
              <button 
                class="debug-tab-button ${this.activeDebugTab === 'properties' ? 'active' : ''}"
                @click=${() => this.setActiveTab('properties')}
              >
                Plugin Properties
              </button>
              <button 
                class="debug-tab-button ${this.activeDebugTab === 'request' ? 'active' : ''}"
                @click=${() => this.setActiveTab('request')}
              >
                Request Details
              </button>
              <button 
                class="debug-tab-button ${this.activeDebugTab === 'tools' ? 'active' : ''}"
                @click=${() => this.setActiveTab('tools')}
              >
                API Tools
              </button>
              <button 
                class="debug-tab-button ${this.activeDebugTab === 'formatter' ? 'active' : ''}"
                @click=${() => this.setActiveTab('formatter')}
              >
                Response Formatter
              </button>
            </div>

            <div class="debug-tab-content ${this.activeDebugTab === 'properties' ? 'active' : ''}">
              ${this.renderPropertiesTab()}
            </div>

            <div class="debug-tab-content ${this.activeDebugTab === 'request' ? 'active' : ''}">
              ${this.renderRequestDetailsTab()}
            </div>

            <div class="debug-tab-content ${this.activeDebugTab === 'tools' ? 'active' : ''}">
              ${this.renderAPIToolsTab()}
            </div>

            <div class="debug-tab-content ${this.activeDebugTab === 'formatter' ? 'active' : ''}">
              ${this.renderResponseFormatterTab()}
            </div>
          </div>
        </div>
      `;
        }
        // Not in debug mode: only show UI if button is visible
        if (!this.btnVisible) {
            // Silent mode: no visible UI, API call happens in background
            return html `<div class="plugin-container" style="display: none;"></div>`;
        }
        return html `
      <div class="plugin-container">
        <div class="form-group">
          <div class="btn-container align-${this.btnAlignment}">
            <button 
              class="btn btn-primary" 
              part="api-button"
              @click=${() => this.triggerAPICall()} 
              ?disabled=${this.isButtonDisabled()}
            >
              ${this.isLoading ? html `<span class="spinner"></span>Processing...` : this.btnText}
            </button>
          </div>
          ${this.renderResponseAlert()}
        </div>
      </div>
    `;
    }
    renderResponseAlert() {
        var _a;
        const now = Date.now();
        const timeSinceLastCall = now - this.lastApiCallTime;
        const cooldownMs = this.countdownTimer * 1000;
        const inCooldown = this.countdownEnabled && this.lastApiCallTime > 0 && timeSinceLastCall < cooldownMs;
        // Check if we're in delayed submission countdown
        const isDelayedSubmission = this.submissionAction === 'delayed-submit' &&
            this.cooldownTimerId !== null &&
            (this.responseType === 'success' || this.responseType === 'warning');
        // Show form validation error if present
        if (this.formValidationError) {
            return html `
        <div class="alert alert-error" part="validation-alert">
          <div>
            <span class="alert-icon">✗</span>
            <strong>Validation Error:</strong> ${this.formValidationError}
          </div>
        </div>
      `;
        }
        // Show cooldown message only if someone attempted to trigger during cooldown
        if (inCooldown && this.showCooldownAlert) {
            const remainingSeconds = Math.ceil((cooldownMs - timeSinceLastCall) / 1000);
            return html `
        <div class="alert alert-info" part="cooldown-alert">
          <div>
            <span class="alert-icon">ℹ</span>
            <strong>Information:</strong> Please wait ${remainingSeconds} seconds before sending another request.
          </div>
        </div>
      `;
        }
        // Only show response alert if we have a response AND it's newer than the last cooldown alert
        if (!this.apiResponse || !this.responseType)
            return '';
        // Don't show old responses that happened before we showed a cooldown alert
        if (this.lastCooldownAlertTime > this.lastApiCallTime)
            return '';
        const alertClass = `alert-${this.responseType}`;
        const icon = this.getAlertIcon(this.responseType);
        const typeLabel = this.responseType.charAt(0).toUpperCase() + this.responseType.slice(1);
        const customMessage = this.getCustomMessage(this.responseType);
        // Calculate remaining seconds for delayed submission
        let submissionCountdown = 0;
        if (isDelayedSubmission) {
            submissionCountdown = Math.ceil((cooldownMs - timeSinceLastCall) / 1000);
        }
        // For success responses, show only the custom message
        if (this.responseType === 'success') {
            return html `
        <div class="alert ${alertClass}" part="response-alert">
          <div>
            <span class="alert-icon">${icon}</span>
            <strong>${typeLabel}:</strong> ${customMessage}
          </div>
          ${isDelayedSubmission ? html `
            <div class="alert-response">
              Submitting form in ${submissionCountdown} seconds...
            </div>
          ` : ''}
        </div>
      `;
        }
        // For warnings and errors, show custom message + actual response message
        return html `
      <div class="alert ${alertClass}" part="response-alert">
        <div>
          <span class="alert-icon">${icon}</span>
          <strong>${typeLabel}:</strong> ${customMessage}
        </div>
        ${((_a = this.value) === null || _a === void 0 ? void 0 : _a.message) ? html `
          <div class="alert-response">
            ${this.value.message}
          </div>
        ` : ''}
        ${isDelayedSubmission ? html `
          <div class="alert-response">
            Submitting form in ${submissionCountdown} seconds...
          </div>
        ` : ''}
      </div>
    `;
    }
    getAlertIcon(type) {
        switch (type) {
            case 'success': return '✓';
            case 'warning': return '⚠';
            case 'error': return '✗';
            default: return '•';
        }
    }
    getCustomMessage(type) {
        switch (type) {
            case 'success': return this.successMessage;
            case 'warning': return this.warningMessage;
            case 'error': return this.errorMessage;
            default: return 'Unknown response type';
        }
    }
    // Handle property changes from the host application
    updated(changedProperties) {
        if (changedProperties.has('value')) {
            console.log('[Updated Lifecycle] Value property changed, dispatching ntx-value-change event');
            this.dispatchEvent(new CustomEvent('ntx-value-change', {
                detail: this.value,
                bubbles: true,
                composed: true,
            }));
        }
        // Watch for sendAPICall property changes to trigger API automatically
        if (changedProperties.has('sendAPICall') && this.sendAPICall) {
            this.handleAPICallTrigger();
        }
        // Watch for submitHidden property changes to hide/show the Nintex submit button
        if (changedProperties.has('submitHidden')) {
            this.toggleSubmitButtonVisibility();
        }
    }
    toggleSubmitButtonVisibility() {
        const styleId = 'ntx-submit-button-hidden-style';
        if (this.submitHidden) {
            // Hide the submit button by injecting CSS
            if (!document.getElementById(styleId)) {
                const style = document.createElement('style');
                style.id = styleId;
                style.textContent = `
          button[data-e2e="btn-submit"] {
            display: none !important;
          }
        `;
                document.head.appendChild(style);
                console.log('[Submit Button] Hidden via CSS');
            }
        }
        else {
            // Show the submit button by removing the CSS
            const existingStyle = document.getElementById(styleId);
            if (existingStyle) {
                existingStyle.remove();
                console.log('[Submit Button] Made visible by removing CSS');
            }
        }
    }
    validateNintexForm() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('[Validation] Starting form validation...');
            const form = document.querySelector('form');
            if (!form) {
                console.warn('[Validation] No form found for validation');
                return true; // If no form found, proceed anyway
            }
            // Trigger validation by programmatically calling reportValidity on form elements
            // This validates without submitting the form
            console.log('[Validation] Triggering validation on form inputs');
            const formElements = form.querySelectorAll('input, textarea, select');
            formElements.forEach((element) => {
                if (element instanceof HTMLInputElement ||
                    element instanceof HTMLTextAreaElement ||
                    element instanceof HTMLSelectElement) {
                    // Call reportValidity to trigger native HTML5 validation
                    element.reportValidity();
                }
            });
            // Wait briefly for Nintex's custom validation to update
            console.log('[Validation] Waiting 200ms for validation state to update...');
            yield new Promise(resolve => setTimeout(resolve, 200));
            // Check for invalid fields using multiple methods
            // Method 1: Nintex's aria-invalid attribute
            const ariaInvalidFields = form.querySelectorAll('[aria-invalid="true"]');
            // Method 2: HTML5 validation state
            const html5InvalidFields = form.querySelectorAll(':invalid');
            // Method 3: Nintex error messages
            const nintexErrorMessages = form.querySelectorAll('.ntx-form-error, [class*="error-message"]');
            const totalInvalidCount = ariaInvalidFields.length + html5InvalidFields.length;
            const isValid = totalInvalidCount === 0 && nintexErrorMessages.length === 0;
            console.log('[Validation] Invalid fields found:');
            console.log('  - aria-invalid:', ariaInvalidFields.length);
            console.log('  - HTML5 invalid:', html5InvalidFields.length);
            console.log('  - Error messages:', nintexErrorMessages.length);
            console.log('[Validation] Form is valid:', isValid);
            if (!isValid) {
                console.log('[Validation] Form validation FAILED. Invalid fields:');
                ariaInvalidFields.forEach((field, index) => {
                    console.log(`  [aria-invalid ${index + 1}]`, field);
                });
                html5InvalidFields.forEach((field, index) => {
                    console.log(`  [HTML5 invalid ${index + 1}]`, field);
                });
            }
            return isValid;
        });
    }
    handleAPICallTrigger() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('[API Call] handleAPICallTrigger started');
            // Immediately set sendAPICall to false to prevent multiple calls
            this.sendAPICall = false;
            // Clear any previous validation error
            this.formValidationError = '';
            // Check if form validation is required
            if (this.formValidation) {
                console.log('[API Call] Form validation is ENABLED, checking form...');
                const isFormValid = yield this.validateNintexForm();
                console.log('[API Call] Validation result:', isFormValid);
                if (!isFormValid) {
                    console.log('[API Call] Form validation FAILED - BLOCKING API call');
                    this.formValidationError = 'Please fill in all required fields correctly before submitting.';
                    this.requestUpdate();
                    return;
                }
                console.log('[API Call] Form validation PASSED - proceeding with API call');
            }
            else {
                console.log('[API Call] Form validation is DISABLED');
            }
            // Check if multiple API calls are allowed
            if (!this.allowMultipleAPICalls && this.hasSuccessfulCall) {
                console.log('[API Call] Multiple API calls not allowed and already had successful call - BLOCKING');
                // Multiple calls not allowed and we've already had a successful call - prevent execution
                return;
            }
            // Check cooldown timer - prevent API call if still in cooldown (only if countdown is enabled)
            if (this.countdownEnabled) {
                const now = Date.now();
                const timeSinceLastCall = now - this.lastApiCallTime;
                const cooldownMs = this.countdownTimer * 1000;
                const inCooldown = this.lastApiCallTime > 0 && timeSinceLastCall < cooldownMs;
                if (inCooldown) {
                    console.log('[API Call] In cooldown period - BLOCKING');
                    // Show cooldown alert and don't proceed
                    this.showCooldownAlert = true;
                    this.lastCooldownAlertTime = Date.now(); // Record when we showed the cooldown alert
                    this.startCooldownTimer();
                    return;
                }
            }
            // Proceed with API call
            console.log('[API Call] All checks passed - calling handleApiCall()');
            this.handleApiCall();
        });
    }
    triggerAPICall() {
        // Set sendAPICall to true when button is clicked
        this.sendAPICall = true;
    }
    isButtonDisabled() {
        // If allowMultipleAPICalls is true, NEVER disable the button permanently
        // Only disable during loading - ignore btnEnabled and hasSuccessfulCall
        if (this.allowMultipleAPICalls) {
            return this.isLoading;
        }
        // If allowMultipleAPICalls is false, disable for loading, btnEnabled, OR after successful/warning call
        // Note: Errors (this.responseType === 'error') still allow retry
        const permanentlyDisabled = this.hasSuccessfulCall && (this.responseType === 'success' || this.responseType === 'warning');
        return this.isLoading || !this.btnEnabled || permanentlyDisabled;
    }
    setActiveTab(tabName) {
        this.activeDebugTab = tabName;
        this.requestUpdate();
    }
    renderPropertiesTab() {
        // Get all properties dynamically from the metadata
        const metadata = this.constructor.getMetaConfig();
        const properties = [];
        // Iterate through all properties defined in the metadata
        if (metadata.properties) {
            for (const [propName, propConfig] of Object.entries(metadata.properties)) {
                // Skip the value property as it's output-only and complex
                if (propName === 'value')
                    continue;
                properties.push({
                    name: propName,
                    default: propConfig.defaultValue,
                    config: propConfig
                });
            }
        }
        // Sort properties alphabetically for consistency
        properties.sort((a, b) => a.name.localeCompare(b.name));
        return html `
      <table class="debug-table">
        <thead>
          <tr>
            <th>Property</th>
            <th>Default Value</th>
            <th>Current Value</th>
          </tr>
        </thead>
        <tbody>
          ${properties.map(prop => html `
            <tr>
              <td><code class="property-name">${prop.name}</code></td>
              <td class="value-default">${this.formatValue(prop.default)}</td>
              <td class="value-current">${this.renderPropertyInput(prop.name, prop.config)}</td>
            </tr>
          `)}
        </tbody>
      </table>
    `;
    }
    renderPropertyInput(propName, propConfig) {
        const currentValue = this[propName];
        const propType = propConfig.type;
        const enumValues = propConfig.enum;
        // Boolean type - render checkbox/toggle
        if (propType === 'boolean') {
            return html `
        <input 
          type="checkbox" 
          .checked=${currentValue}
          @change=${(e) => {
                const newValue = e.target.checked;
                this[propName] = newValue;
                console.log(`[Property Change] ${propName} updated to:`, newValue);
                this.requestUpdate();
            }}
          style="width: auto; height: auto; cursor: pointer;"
        />
      `;
        }
        // Enum type - render dropdown
        if (enumValues && Array.isArray(enumValues)) {
            return html `
        <select
          class="form-control"
          @change=${(e) => {
                const newValue = e.target.value;
                this[propName] = newValue;
                console.log(`[Property Change] ${propName} updated to:`, newValue);
                this.requestUpdate();
            }}
          style="width: auto; min-width: 150px; height: auto; padding: 4px 8px;"
        >
          ${enumValues.map((val) => html `
            <option value=${val} ?selected=${val === currentValue}>${val}</option>
          `)}
        </select>
      `;
        }
        // Number type - render number input
        if (propType === 'number' || propType === 'integer') {
            return html `
        <input 
          type="number"
          class="form-control"
          .value=${currentValue}
          @input=${(e) => {
                const value = e.target.value;
                const newValue = value === '' ? 0 : Number(value);
                this[propName] = newValue;
                console.log(`[Property Change] ${propName} updated to:`, newValue);
                this.requestUpdate();
            }}
          style="width: auto; min-width: 100px; height: auto; padding: 4px 8px;"
        />
      `;
        }
        // String type - render textarea
        if (propType === 'string') {
            // Mask sensitive properties
            const displayValue = (propName === 'bearerToken' || propName === 'clientSecret') && currentValue && currentValue.length > 0
                ? '***' + currentValue.slice(-4)
                : currentValue;
            return html `
        <textarea
          class="form-control"
          .value=${displayValue}
          @input=${(e) => {
                const newValue = e.target.value;
                this[propName] = newValue;
                console.log(`[Property Change] ${propName} updated to:`, newValue.substring(0, 50) + (newValue.length > 50 ? '...' : ''));
                this.requestUpdate();
            }}
          rows="1"
          style="width: 100%; min-width: 200px; resize: vertical; font-family: 'Courier New', monospace; font-size: 12px; padding: 4px 8px;"
          ?readonly=${propName === 'bearerToken' || propName === 'clientSecret'}
        ></textarea>
      `;
        }
        // Default fallback - just display the value
        return html `<span>${this.formatValue(currentValue)}</span>`;
    }
    renderRequestDetailsTab() {
        return html `
      <table class="debug-table">
        <thead>
          <tr>
            <th>Property</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>apiUrl</code></td>
            <td style="word-break: break-all;">${this.apiUrl || '<not set>'}</td>
          </tr>
          <tr>
            <td><code>method</code></td>
            <td>${this.method}</td>
          </tr>
          ${this.oauthTokenResponse ? html `
            <tr>
              <td><code>OAuth Token</code></td>
              <td>
                <div class="debug-json-container">
                  <button 
                    class="debug-json-copy-btn"
                    @click=${() => this.copyToClipboard(JSON.stringify(this.oauthTokenResponse, null, 2))}
                    title="Copy to clipboard"
                  >
                    📋 Copy
                  </button>
                  <pre class="debug-json">${JSON.stringify(this.oauthTokenResponse, null, 2)}</pre>
                </div>
              </td>
            </tr>
          ` : ''}
          <tr>
            <td><code>requestHeaders</code></td>
            <td>
              ${this.requestHeaders ? html `
                <div class="debug-json-container">
                  <button 
                    class="debug-json-copy-btn"
                    @click=${() => this.copyToClipboard(this.formatJsonForDisplay(this.requestHeaders))}
                    title="Copy to clipboard"
                  >
                    📋 Copy
                  </button>
                  <pre class="debug-json">${this.formatJsonForDisplay(this.requestHeaders)}</pre>
                </div>
              ` : '<not set>'}
            </td>
          </tr>
          <tr>
            <td><code>requestBody</code></td>
            <td>
              ${this.requestBody ? html `
                <div class="debug-json-container">
                  <button 
                    class="debug-json-copy-btn"
                    @click=${() => this.copyToClipboard(this.formatJsonForDisplay(this.requestBody))}
                    title="Copy to clipboard"
                  >
                    📋 Copy
                  </button>
                  <pre class="debug-json">${this.formatJsonForDisplay(this.requestBody)}</pre>
                </div>
              ` : '<not set>'}
            </td>
          </tr>
          <tr>
            <td><code>State</code></td>
            <td>
              <strong>Loading:</strong> ${this.isLoading}<br>
              <strong>Has Successful Call:</strong> ${this.hasSuccessfulCall}<br>
              <strong>Button Disabled:</strong> ${this.isButtonDisabled()}
            </td>
          </tr>
          ${this.apiResponse ? html `
            <tr>
              <td><code>Response</code></td>
              <td>
                <div class="debug-json-container">
                  <button 
                    class="debug-json-copy-btn"
                    @click=${() => this.copyToClipboard(this.formatJsonForDisplay(this.apiResponse))}
                    title="Copy to clipboard"
                  >
                    📋 Copy
                  </button>
                  <pre class="debug-json">${this.formatJsonForDisplay(this.apiResponse)}</pre>
                </div>
              </td>
            </tr>
          ` : ''}
        </tbody>
      </table>
    `;
    }
    renderAPIToolsTab() {
        const isValidJson = this.isValidJson(this.requestBody);
        const jsonStatus = this.getJsonStatus(this.requestBody);
        return html `
      <div class="debug-tools">
        <div class="form-group">
          <label class="control-label">JSON Request Body Editor</label>
          <div class="json-editor-container">
            <div class="json-editor-toolbar">
              <div class="json-editor-actions">
                <button 
                  class="json-editor-btn" 
                  @click=${this.formatJson}
                  ?disabled=${!isValidJson}
                  title="Format and beautify JSON"
                >
                  ✨ Format
                </button>
                <button 
                  class="json-editor-btn" 
                  @click=${this.minifyJson}
                  ?disabled=${!isValidJson}
                  title="Minify JSON to single line"
                >
                  🗜️ Minify
                </button>
                <button 
                  class="json-editor-btn" 
                  @click=${this.clearJson}
                  title="Clear JSON content"
                >
                  🗑️ Clear
                </button>
                <button 
                  class="json-editor-btn" 
                  @click=${this.insertSampleJson}
                  title="Insert sample JSON"
                >
                  📝 Sample
                </button>
              </div>
              <div class="json-editor-status ${isValidJson ? 'valid' : 'invalid'}">
                ${jsonStatus}
              </div>
            </div>
            <textarea 
              class="form-control json-editor-textarea" 
              .value=${this.requestBody} 
              @input=${this.handleJsonInput}
              @blur=${this.handleJsonBlur}
              @paste=${this.handleJsonPaste}
              placeholder="Enter JSON request body here..."
              spellcheck="false"
            ></textarea>
          </div>
        </div>

        ${this.renderJsonOutput()}
        
        ${this.renderJsonPreview()}
      </div>
    `;
    }
    renderResponseFormatterTab() {
        const hasJsonInput = this.formatterJsonInput.trim().length > 0;
        const isValidJson = hasJsonInput && this.isValidJson(this.formatterJsonInput);
        let parsedJson = null;
        let jsonError = '';
        if (hasJsonInput) {
            try {
                parsedJson = JSON.parse(this.formatterJsonInput);
            }
            catch (e) {
                jsonError = e.message;
            }
        }
        return html `
      <div class="debug-tools">
        <div class="form-group">
          <label class="control-label">Paste Response JSON</label>
          <textarea 
            class="form-control" 
            rows="8"
            .value=${this.formatterJsonInput}
            @input=${(e) => {
            const target = e.target;
            this.formatterJsonInput = target.value;
            this.formatterSelectedFields.clear();
            this.requestUpdate();
        }}
            placeholder="Paste your API response JSON here..."
            style="font-family: 'Consolas', 'Monaco', 'Courier New', monospace; font-size: 13px;"
          ></textarea>
          ${jsonError ? html `<div class="text-danger" style="margin-top: 8px;">${jsonError}</div>` : ''}
        </div>

        ${isValidJson && parsedJson ? html `
          <div class="form-group">
            <label class="control-label">Configure Response Fields</label>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
              <!-- Available Fields -->
              <div>
                <h4 style="font-size: 14px; font-weight: 600; margin-bottom: 12px; color: var(--ntx-form-theme-color-input-text);">Available Fields</h4>
                <div style="max-height: 500px; overflow-y: auto; border: 1px solid var(--ntx-form-theme-color-border); border-radius: 4px; padding: 12px; background: var(--ntx-form-theme-color-background);">
                  ${this.renderAvailableFields(parsedJson, '')}
                </div>
              </div>
              
              <!-- Selected Fields -->
              <div>
                <h4 style="font-size: 14px; font-weight: 600; margin-bottom: 12px; color: var(--ntx-form-theme-color-input-text);">Selected Fields (drag to reorder)</h4>
                <div style="max-height: 500px; overflow-y: auto; border: 1px solid var(--ntx-form-theme-color-border); border-radius: 4px; padding: 12px; background: var(--ntx-form-theme-color-background-alt);">
                  ${this.renderSelectedFieldsList()}
                </div>
              </div>
            </div>
          </div>

          ${this.formatterSelectedFields.size > 0 ? html `
            <div class="form-group">
              <label class="control-label">Preview</label>
              <div style="border: 1px solid var(--ntx-form-theme-color-border); border-radius: 4px; padding: 16px; background: var(--ntx-form-theme-color-background-alt);">
                ${this.renderFormattedPreview(parsedJson)}
              </div>
            </div>

            <div class="form-group">
              <label class="control-label">Response Format Configuration</label>
              <div style="position: relative;">
                <textarea 
                  class="form-control" 
                  readonly
                  rows="3"
                  .value=${this.generateResponseConfigQuoted()}
                  style="font-family: 'Consolas', 'Monaco', 'Courier New', monospace; font-size: 12px; padding-right: 80px;"
                ></textarea>
                <button 
                  class="btn btn-primary" 
                  style="position: absolute; top: 8px; right: 8px; padding: 4px 12px; font-size: 12px;"
                  @click=${() => {
            const quoted = this.generateResponseConfigQuoted();
            this.copyToClipboard(quoted);
            alert('Configuration copied to clipboard!');
        }}
                  title="Copy to clipboard"
                >
                  📋 Copy
                </button>
              </div>
              <button 
                class="btn btn-primary" 
                style="margin-top: 8px;"
                @click=${() => {
            // Store the minified version (without outer quotes) to the property
            const config = { fields: [] };
            this.formatterSelectedFields.forEach((fieldConfig, key) => {
                if (fieldConfig.checked) {
                    config.fields.push({
                        path: key,
                        title: fieldConfig.title || key
                    });
                }
            });
            this.responseConfig = JSON.stringify(config);
            this.requestUpdate();
            alert('Configuration saved to responseConfig property!');
        }}
              >
                Save Configuration
              </button>
            </div>
          ` : ''}
        ` : ''}
      </div>
    `;
    }
    renderAvailableFields(obj, path) {
        const fields = [];
        const processObject = (current, currentPath) => {
            if (current && typeof current === 'object' && !Array.isArray(current)) {
                Object.keys(current).forEach(key => {
                    var _a;
                    const fullPath = currentPath ? `${currentPath}.${key}` : key;
                    const value = current[key];
                    // Skip nested objects and arrays for now, only show leaf values
                    if (value !== null && typeof value !== 'object') {
                        const fieldKey = fullPath;
                        const isChecked = ((_a = this.formatterSelectedFields.get(fieldKey)) === null || _a === void 0 ? void 0 : _a.checked) || false;
                        fields.push(html `
              <div style="display: flex; align-items: flex-start; margin-bottom: 10px; padding: 8px; border-radius: 4px; background: ${isChecked ? 'var(--ntx-form-theme-color-primary-light, #e3f2fd)' : 'transparent'}; transition: background 0.2s;">
                <input 
                  type="checkbox" 
                  .checked=${isChecked}
                  @change=${(e) => {
                            const target = e.target;
                            if (target.checked) {
                                // Get highest order number and add 1
                                let maxOrder = -1;
                                this.formatterSelectedFields.forEach(field => {
                                    if (field.order > maxOrder)
                                        maxOrder = field.order;
                                });
                                this.formatterSelectedFields.set(fieldKey, {
                                    title: fieldKey.split('.').pop() || fieldKey,
                                    checked: true,
                                    order: maxOrder + 1
                                });
                            }
                            else {
                                this.formatterSelectedFields.delete(fieldKey);
                            }
                            this.requestUpdate();
                        }}
                  style="width: 18px; height: 18px; cursor: pointer; margin-top: 2px; flex-shrink: 0;"
                />
                <div style="flex: 1; margin-left: 10px; min-width: 0;">
                  <div style="font-weight: 500; margin-bottom: 4px; word-break: break-word;">
                    <code style="background: var(--ntx-form-theme-color-background-alt); padding: 2px 6px; border-radius: 3px; font-size: 12px;">${fieldKey}</code>
                  </div>
                  <div style="font-size: 11px; color: var(--ntx-form-theme-color-secondary); word-break: break-word;">
                    ${String(value).length > 50 ? String(value).substring(0, 50) + '...' : String(value)}
                  </div>
                </div>
              </div>
            `);
                    }
                    else if (value && typeof value === 'object' && !Array.isArray(value)) {
                        // Recursively process nested objects
                        processObject(value, fullPath);
                    }
                });
            }
        };
        processObject(obj, path);
        return fields.length > 0 ? fields : html `<div style="color: var(--ntx-form-theme-color-secondary); font-style: italic; padding: 12px; text-align: center;">No fields available</div>`;
    }
    renderSelectedFieldsList() {
        // Sort fields by order
        const sortedFields = Array.from(this.formatterSelectedFields.entries())
            .filter(([_, config]) => config.checked)
            .sort((a, b) => a[1].order - b[1].order);
        if (sortedFields.length === 0) {
            return html `<div style="color: var(--ntx-form-theme-color-secondary); font-style: italic; padding: 12px; text-align: center;">No fields selected. Check fields from the left panel.</div>`;
        }
        return sortedFields.map(([fieldKey, config], index) => html `
      <div 
        draggable="true"
        @dragstart=${(e) => {
            e.dataTransfer.effectAllowed = 'move';
            e.dataTransfer.setData('text/plain', index.toString());
        }}
        @dragover=${(e) => {
            e.preventDefault();
            e.dataTransfer.dropEffect = 'move';
        }}
        @drop=${(e) => {
            e.preventDefault();
            const fromIndex = parseInt(e.dataTransfer.getData('text/plain'));
            const toIndex = index;
            if (fromIndex !== toIndex) {
                // Reorder the fields
                const reorderedFields = Array.from(sortedFields);
                const [movedItem] = reorderedFields.splice(fromIndex, 1);
                reorderedFields.splice(toIndex, 0, movedItem);
                // Update orders
                reorderedFields.forEach(([key, cfg], idx) => {
                    this.formatterSelectedFields.set(key, Object.assign(Object.assign({}, cfg), { order: idx }));
                });
                this.requestUpdate();
            }
        }}
        style="
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 10px;
          padding: 10px;
          background: var(--ntx-form-theme-color-background);
          border: 1px solid var(--ntx-form-theme-color-border);
          border-radius: 4px;
          cursor: move;
          transition: all 0.2s;
        "
        @mouseenter=${(e) => {
            e.currentTarget.style.borderColor = 'var(--ntx-form-theme-color-primary)';
            e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
        }}
        @mouseleave=${(e) => {
            e.currentTarget.style.borderColor = 'var(--ntx-form-theme-color-border)';
            e.currentTarget.style.boxShadow = 'none';
        }}
      >
        <div style="font-size: 16px; color: var(--ntx-form-theme-color-secondary); cursor: grab;" title="Drag to reorder">
          ⋮⋮
        </div>
        <div style="font-weight: 600; color: var(--ntx-form-theme-color-primary); min-width: 30px;">
          ${index + 1}.
        </div>
        <div style="flex: 1; min-width: 0;">
          <div style="font-size: 11px; color: var(--ntx-form-theme-color-secondary); margin-bottom: 4px; word-break: break-all;">
            <code style="font-size: 10px;">${fieldKey}</code>
          </div>
          <input 
            type="text" 
            class="form-control"
            placeholder="Display title"
            .value=${config.title}
            @input=${(e) => {
            const target = e.target;
            this.formatterSelectedFields.set(fieldKey, Object.assign(Object.assign({}, config), { title: target.value }));
            this.requestUpdate();
        }}
            style="font-size: 13px; padding: 6px 8px; height: auto;"
          />
        </div>
        <button
          @click=${() => {
            this.formatterSelectedFields.delete(fieldKey);
            this.requestUpdate();
        }}
          style="
            background: var(--ntx-form-theme-color-error, #dc3545);
            color: white;
            border: none;
            border-radius: 4px;
            padding: 6px 10px;
            cursor: pointer;
            font-size: 12px;
            transition: filter 0.2s;
          "
          @mouseenter=${(e) => {
            e.currentTarget.style.filter = 'brightness(0.9)';
        }}
          @mouseleave=${(e) => {
            e.currentTarget.style.filter = 'brightness(1)';
        }}
          title="Remove field"
        >
          ✕
        </button>
      </div>
    `);
    }
    renderFormattedPreview(obj) {
        const items = [];
        this.formatterSelectedFields.forEach((config, key) => {
            if (config.checked) {
                const value = this.extractNestedValue(obj, key);
                const displayTitle = config.title || key;
                items.push(html `
          <div style="margin-bottom: 8px;">
            <strong>${displayTitle}:</strong> ${value !== undefined ? String(value) : 'N/A'}
          </div>
        `);
            }
        });
        return items.length > 0 ? items : html `<div style="color: var(--ntx-form-theme-color-secondary); font-style: italic;">No fields selected</div>`;
    }
    generateResponseConfig() {
        const config = { fields: [] };
        // Sort by order before generating config
        const sortedFields = Array.from(this.formatterSelectedFields.entries())
            .filter(([_, fieldConfig]) => fieldConfig.checked)
            .sort((a, b) => a[1].order - b[1].order);
        sortedFields.forEach(([key, fieldConfig]) => {
            config.fields.push({
                path: key,
                title: fieldConfig.title || key
            });
        });
        return JSON.stringify(config, null, 2);
    }
    generateResponseConfigQuoted() {
        const config = { fields: [] };
        // Sort by order before generating config
        const sortedFields = Array.from(this.formatterSelectedFields.entries())
            .filter(([_, fieldConfig]) => fieldConfig.checked)
            .sort((a, b) => a[1].order - b[1].order);
        sortedFields.forEach(([key, fieldConfig]) => {
            config.fields.push({
                path: key,
                title: fieldConfig.title || key
            });
        });
        // Minify and wrap in double quotes
        const minified = JSON.stringify(config);
        return `"${minified.replace(/"/g, '\\"')}"`;
    }
    formatValue(value) {
        if (typeof value === 'boolean')
            return value.toString();
        if (typeof value === 'string')
            return `"${value}"`;
        if (typeof value === 'number')
            return value.toString();
        if (value === null)
            return 'null';
        if (value === undefined)
            return 'undefined';
        return JSON.stringify(value);
    }
    formatJsonForDisplay(jsonString) {
        try {
            // Try to parse and pretty-format the JSON
            const parsed = JSON.parse(jsonString);
            return JSON.stringify(parsed, null, 2);
        }
        catch (e) {
            // If it's not valid JSON, return as-is
            return jsonString;
        }
    }
    // JSON Editor Helper Methods
    isValidJson(jsonString) {
        if (!jsonString.trim())
            return true; // Empty is valid
        try {
            JSON.parse(jsonString);
            return true;
        }
        catch (_a) {
            return false;
        }
    }
    getJsonStatus(jsonString) {
        if (!jsonString.trim()) {
            return 'Empty';
        }
        try {
            const parsed = JSON.parse(jsonString);
            const charCount = jsonString.length;
            const lineCount = jsonString.split('\n').length;
            const keyCount = this.countJsonKeys(parsed);
            return `Valid JSON • ${charCount} chars • ${lineCount} lines • ${keyCount} keys`;
        }
        catch (e) {
            return `Invalid JSON • ${e.message}`;
        }
    }
    countJsonKeys(obj) {
        if (typeof obj !== 'object' || obj === null)
            return 0;
        if (Array.isArray(obj)) {
            return obj.reduce((count, item) => count + this.countJsonKeys(item), 0);
        }
        return Object.keys(obj).length + Object.values(obj).reduce((count, value) => count + this.countJsonKeys(value), 0);
    }
    formatJson() {
        if (!this.isValidJson(this.requestBody))
            return;
        try {
            const parsed = JSON.parse(this.requestBody);
            this.requestBody = JSON.stringify(parsed, null, 2);
            this.requestUpdate();
        }
        catch (_a) {
            // Already validated, shouldn't happen
        }
    }
    minifyJson() {
        if (!this.isValidJson(this.requestBody))
            return;
        try {
            const parsed = JSON.parse(this.requestBody);
            this.requestBody = JSON.stringify(parsed);
            this.requestUpdate();
        }
        catch (_a) {
            // Already validated, shouldn't happen
        }
    }
    clearJson() {
        this.requestBody = '';
        this.requestUpdate();
    }
    insertSampleJson() {
        const sample = {
            "startData": {
                "se_input": "This is a test",
                "options": {
                    "callbackUrl": "optionally add a callback URL here. Must be https",
                    "metadata": {
                        "userId": "12345",
                        "requestId": "req-" + Date.now()
                    }
                }
            }
        };
        this.requestBody = JSON.stringify(sample, null, 2);
        this.requestUpdate();
    }
    handleJsonInput(e) {
        const target = e.target;
        this.requestBody = target.value;
        this.requestUpdate();
    }
    handleJsonBlur(e) {
        // Auto-format valid JSON on blur
        if (this.isValidJson(this.requestBody) && this.requestBody.trim()) {
            try {
                const parsed = JSON.parse(this.requestBody);
                const formatted = JSON.stringify(parsed, null, 2);
                if (formatted !== this.requestBody) {
                    this.requestBody = formatted;
                    this.requestUpdate();
                }
            }
            catch (_a) {
                // Don't auto-format if invalid
            }
        }
    }
    handleJsonPaste(e) {
        // Auto-format pasted JSON after a short delay
        setTimeout(() => {
            if (this.isValidJson(this.requestBody)) {
                this.formatJson();
            }
        }, 100);
    }
    renderJsonOutput() {
        if (!this.requestBody.trim())
            return '';
        let minified = '';
        let escaped = '';
        let error = '';
        try {
            const parsed = JSON.parse(this.requestBody);
            minified = JSON.stringify(parsed);
            escaped = '"' + minified.replace(/\\/g, '\\\\').replace(/"/g, '\\"') + '"';
        }
        catch (e) {
            error = e.message;
        }
        return html `
      <div class="form-group">
        <label class="control-label">Generated Output</label>
        <div style="display: flex; gap: 16px;">
          <div style="flex: 1;">
            <label class="control-label" style="font-size: 12px; color: #6c757d;">Minified JSON</label>
            <textarea 
              class="form-control" 
              readonly 
              rows="3"
              .value=${minified}
              style="font-family: 'Consolas', 'Monaco', 'Courier New', monospace; font-size: 12px;"
            ></textarea>
          </div>
          <div style="flex: 1;">
            <label class="control-label" style="font-size: 12px; color: #6c757d;">Escaped for Code</label>
            <textarea 
              class="form-control" 
              readonly 
              rows="3"
              .value=${escaped}
              style="font-family: 'Consolas', 'Monaco', 'Courier New', monospace; font-size: 12px;"
            ></textarea>
          </div>
        </div>
        ${error ? html `<div class="text-danger" style="margin-top: 8px; font-size: 12px;">${error}</div>` : ''}
      </div>
    `;
    }
    renderJsonPreview() {
        if (!this.requestBody.trim() || !this.isValidJson(this.requestBody))
            return '';
        try {
            const parsed = JSON.parse(this.requestBody);
            return html `
        <div class="form-group">
          <label class="control-label">JSON Structure Preview</label>
          <div class="json-viewer">
${this.renderJsonWithSyntaxHighlight(parsed, 0)}
          </div>
        </div>
      `;
        }
        catch (_a) {
            return '';
        }
    }
    renderJsonWithSyntaxHighlight(obj, indent = 0) {
        const spaces = '  '.repeat(indent);
        if (obj === null) {
            return `<span class="json-syntax-null">null</span>`;
        }
        if (typeof obj === 'string') {
            return `<span class="json-syntax-string">"${obj}"</span>`;
        }
        if (typeof obj === 'number') {
            return `<span class="json-syntax-number">${obj}</span>`;
        }
        if (typeof obj === 'boolean') {
            return `<span class="json-syntax-boolean">${obj}</span>`;
        }
        if (Array.isArray(obj)) {
            if (obj.length === 0)
                return '<span class="json-syntax-punctuation">[]</span>';
            const items = obj.map(item => `${spaces}  ${this.renderJsonWithSyntaxHighlight(item, indent + 1)}`).join(',\n');
            return `<span class="json-syntax-punctuation">[</span>\n${items}\n${spaces}<span class="json-syntax-punctuation">]</span>`;
        }
        if (typeof obj === 'object') {
            const keys = Object.keys(obj);
            if (keys.length === 0)
                return '<span class="json-syntax-punctuation">{}</span>';
            const items = keys.map(key => `${spaces}  <span class="json-syntax-key">"${key}"</span><span class="json-syntax-punctuation">:</span> ${this.renderJsonWithSyntaxHighlight(obj[key], indent + 1)}`).join(',\n');
            return `<span class="json-syntax-punctuation">{</span>\n${items}\n${spaces}<span class="json-syntax-punctuation">}</span>`;
        }
        return String(obj);
    }
    // Recursively remove keys with instructional placeholder values
    static removeInstructionalPlaceholders(obj) {
        if (Array.isArray(obj)) {
            return obj.map(item => this.removeInstructionalPlaceholders(item));
        }
        else if (obj && typeof obj === 'object') {
            const result = {};
            for (const [key, value] of Object.entries(obj)) {
                if (typeof value === 'string' &&
                    /^<.*>$/.test(value.trim())) {
                    // skip this key (remove it)
                    continue;
                }
                const cleaned = this.removeInstructionalPlaceholders(value);
                if (cleaned !== undefined &&
                    !(typeof cleaned === 'object' && cleaned !== null && Object.keys(cleaned).length === 0)) {
                    result[key] = cleaned;
                }
            }
            return result;
        }
        return obj;
    }
    fetchOAuthToken() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(this.tokenUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams({
                    grant_type: 'client_credentials',
                    client_id: this.clientId,
                    client_secret: this.clientSecret,
                }),
            });
            if (!response.ok) {
                throw new Error(`Token request failed with status ${response.status}`);
            }
            const data = yield response.json();
            if (!data.access_token) {
                throw new Error('No access_token in response');
            }
            // Store the full token response for debugging
            this.oauthTokenResponse = {
                access_token: data.access_token,
                token_type: data.token_type || 'Bearer',
                expires_in: data.expires_in,
                scope: data.scope,
                fetched_at: new Date().toISOString(),
                expires_at: data.expires_in ? new Date(Date.now() + (data.expires_in * 1000)).toISOString() : null
            };
            return data.access_token;
        });
    }
    handleApiCall() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.isLoading)
                return;
            // Record the time of this API call and start execution timer
            this.lastApiCallTime = Date.now();
            this.apiCallStartTime = Date.now();
            this.responseType = null;
            this.apiResponse = '';
            // If OAuth credentials are provided, fetch token first
            let accessToken = this.bearerToken;
            if (this.tokenUrl && this.clientId && this.clientSecret) {
                try {
                    accessToken = yield this.fetchOAuthToken();
                }
                catch (error) {
                    // Token fetch failed, set error response
                    const executionTime = Date.now() - this.apiCallStartTime;
                    const timestamp = new Date().toISOString();
                    this.responseType = 'error';
                    this.apiResponse = `OAuth token fetch failed: ${error instanceof Error ? error.message : String(error)}`;
                    this.value = {
                        success: false,
                        statusCode: 401,
                        responseType: 'error',
                        data: this.apiResponse,
                        message: this.errorMessage,
                        timestamp: timestamp,
                        executionTime: executionTime
                    };
                    this.dispatchEvent(new CustomEvent('ntx-value-change', {
                        detail: this.value,
                        bubbles: true,
                        composed: true,
                    }));
                    this.isLoading = false;
                    this.requestUpdate();
                    return;
                }
            }
            let url = this.apiUrl || '';
            let headers = {};
            if (this.requestHeaders) {
                try {
                    headers = JSON.parse(this.requestHeaders);
                }
                catch (_a) {
                    headers = {};
                    this.requestHeaders.split(/\r?\n/).forEach(line => {
                        const idx = line.indexOf(':');
                        if (idx > -1) {
                            const key = line.slice(0, idx).trim();
                            const value = line.slice(idx + 1).trim();
                            if (key)
                                headers[key] = value;
                        }
                    });
                }
            }
            // Add Bearer token to Authorization header if provided
            if (accessToken && accessToken.trim()) {
                headers['Authorization'] = `Bearer ${accessToken.trim()}`;
            }
            // Determine the actual body to use based on contentType
            let actualBody;
            if (this.contentType === 'application/x-www-form-urlencoded') {
                // For URL-encoded, use the raw requestBody string as-is
                actualBody = this.requestBody || '';
            }
            else if (this.contentType === 'application/json') {
                // For JSON, parse requestBody if provided, otherwise send nothing
                if (this.requestBody && this.requestBody.trim()) {
                    try {
                        actualBody = JSON.parse(this.requestBody);
                    }
                    catch (e) {
                        // If parsing fails, treat as empty
                        actualBody = undefined;
                    }
                }
                else {
                    actualBody = undefined;
                }
            }
            else {
                // For other types (text/plain, etc.), use raw string
                actualBody = this.requestBody || '';
            }
            yield callApi({
                url,
                method: this.method || 'POST',
                headers,
                requestBody: actualBody,
                contentType: this.contentType,
                setLoading: (loading) => {
                    this.isLoading = loading;
                    this.requestUpdate();
                },
                setResponse: (response, statusCode, success) => {
                    const executionTime = Date.now() - this.apiCallStartTime;
                    const timestamp = new Date().toISOString();
                    this.apiResponse = response;
                    this.responseType = success === false ? 'error' : this.determineResponseType(response);
                    // Try to parse response and extract values
                    let accessToken;
                    let customOutput = undefined;
                    try {
                        const parsed = JSON.parse(response);
                        // Extract access_token if present
                        if (parsed.access_token) {
                            accessToken = parsed.access_token;
                        }
                        // Extract custom output value if outputValueKey is specified
                        if (this.outputValueKey && this.outputValueKey.trim()) {
                            customOutput = this.extractNestedValue(parsed, this.outputValueKey);
                        }
                    }
                    catch (_a) {
                        // Response is not JSON, skip extraction
                    }
                    // Create structured value object
                    this.value = Object.assign(Object.assign({ success: success !== false && (this.responseType === 'success' || this.responseType === 'warning'), statusCode: statusCode || (this.responseType === 'success' ? 200 : 500), responseType: this.responseType, data: response, message: this.getCustomMessage(this.responseType), timestamp: timestamp, executionTime: executionTime }, (accessToken && { access_token: accessToken })), (customOutput !== undefined && { output: customOutput }));
                    // Mark as successful call if success or warning
                    if (this.responseType === 'success' || this.responseType === 'warning') {
                        this.hasSuccessfulCall = true;
                    }
                    // Dispatch value change event
                    console.log('[Value Change] Dispatching ntx-value-change event with value:', this.value);
                    this.dispatchEvent(new CustomEvent('ntx-value-change', {
                        detail: this.value,
                        bubbles: true,
                        composed: true,
                    }));
                    console.log('[Value Change] Event dispatched at:', new Date().toISOString());
                    this.requestUpdate();
                    // After dispatching the value change event, wait for Nintex to process it
                    // then trigger post-submission action if needed
                    const isSuccessResponse = this.responseType === 'success' || this.responseType === 'warning';
                    if (isSuccessResponse) {
                        // Wait 800ms to ensure ntx-value-change event is fully processed by Nintex
                        // This gives Nintex adequate time to update form values before submission
                        console.log('[Value Change] Waiting 800ms for Nintex to process value change...');
                        setTimeout(() => {
                            console.log('[Value Change] Wait complete at:', new Date().toISOString(), '- proceeding with submission action');
                            this.handlePostSubmissionAction();
                        }, 800);
                    }
                }
            });
        });
    }
    determineResponseType(response) {
        // Check if response indicates an error
        if (response.toLowerCase().includes('error:') ||
            response.toLowerCase().includes('failed') ||
            response.toLowerCase().includes('exception')) {
            return 'error';
        }
        // Try to parse as JSON to check for error status codes
        try {
            const parsed = JSON.parse(response);
            if (parsed.error || parsed.status === 'error') {
                return 'error';
            }
            if (parsed.warning || parsed.status === 'warning') {
                return 'warning';
            }
        }
        catch (_a) {
            // Not JSON, continue with other checks
        }
        // Default to success for valid responses
        return 'success';
    }
    extractNestedValue(obj, path) {
        // First, try to find the exact key (for keys like "developer.email")
        if (obj && typeof obj === 'object' && path in obj) {
            return obj[path];
        }
        // If not found, try nested path navigation (for paths like "data.user.name")
        const keys = path.split('.');
        let current = obj;
        for (const key of keys) {
            if (current && typeof current === 'object' && key in current) {
                current = current[key];
            }
            else {
                return undefined;
            }
        }
        return current;
    }
    copyToClipboard(text) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield navigator.clipboard.writeText(text);
                // Could add a toast notification here if desired
            }
            catch (err) {
                console.error('Failed to copy text:', err);
            }
        });
    }
    handlePostSubmissionAction() {
        console.log('[Submission Action] Checking submission action:', this.submissionAction);
        if (this.submissionAction === 'none') {
            console.log('[Submission Action] No action configured');
            return;
        }
        if (this.submissionAction === 'quick-submit') {
            console.log('[Submission Action] Quick submit - triggering after 500ms');
            setTimeout(() => {
                this.submitNintexForm();
            }, 500);
            return;
        }
        if (this.submissionAction === 'delayed-submit') {
            console.log('[Submission Action] Delayed submit - starting countdown timer');
            // Start the countdown timer, and submit when it expires
            this.startDelayedSubmission();
            return;
        }
    }
    submitNintexForm() {
        console.log('[Submission Action] Attempting to submit Nintex form');
        const form = document.querySelector('form');
        if (!form) {
            console.error('[Submission Action] No form found');
            return;
        }
        const submitBtn = form.querySelector('button[type="submit"]');
        if (submitBtn instanceof HTMLElement) {
            console.log('[Submission Action] Clicking submit button');
            submitBtn.click();
        }
        else {
            console.error('[Submission Action] No submit button found');
        }
    }
    startDelayedSubmission() {
        // Clear any existing timer first
        if (this.cooldownTimerId !== null) {
            clearTimeout(this.cooldownTimerId);
            this.cooldownTimerId = null;
        }
        const countdownMs = this.countdownTimer * 1000;
        const startTime = Date.now();
        // Update the UI to show countdown
        const updateCountdown = () => {
            const elapsed = Date.now() - startTime;
            const remaining = countdownMs - elapsed;
            if (remaining <= 0) {
                // Countdown finished, submit the form
                console.log('[Submission Action] Countdown complete - submitting form');
                this.submitNintexForm();
                this.cooldownTimerId = null;
            }
            else {
                // Still counting down, update UI
                this.requestUpdate();
                this.cooldownTimerId = window.setTimeout(updateCountdown, 100);
            }
        };
        console.log('[Submission Action] Starting delayed submission countdown for', this.countdownTimer, 'seconds');
        updateCountdown();
    }
    startCooldownTimer() {
        // Clear any existing timer first
        if (this.cooldownTimerId !== null) {
            clearTimeout(this.cooldownTimerId);
            this.cooldownTimerId = null;
        }
        // Update the UI every second during cooldown to show remaining time
        const updateTimer = () => {
            const now = Date.now();
            const timeSinceLastCall = now - this.lastApiCallTime;
            const cooldownMs = this.countdownTimer * 1000;
            if (timeSinceLastCall < cooldownMs) {
                // Still in cooldown, update in another second
                this.requestUpdate();
                this.cooldownTimerId = window.setTimeout(updateTimer, 1000);
            }
            else {
                // Cooldown period ended, hide the alert
                this.showCooldownAlert = false;
                this.cooldownTimerId = null;
                this.requestUpdate();
            }
        };
        // Start the timer
        this.cooldownTimerId = window.setTimeout(updateTimer, 1000);
    }
    // Cleanup timer when component is destroyed
    disconnectedCallback() {
        super.disconnectedCallback();
        if (this.cooldownTimerId !== null) {
            clearTimeout(this.cooldownTimerId);
            this.cooldownTimerId = null;
        }
    }
};
DafWebRequestPlugin.styles = css `
    .plugin-container {
      font-family: var(--ntx-form-theme-font-family);
      color: var(--ntx-form-theme-color-input-text);
    }

    .form-group {
      margin-bottom: 16px;
    }

    .control-label {
      display: block;
      margin-bottom: 8px;
      font-size: var(--ntx-form-theme-text-label-size);
      color: var(--ntx-form-theme-color-input-text);
      font-weight: 500;
    }

    .form-control {
      width: 100%;
      height: var(--ntx-form-theme-control-height, auto);
      padding: 8px 12px;
      font-size: var(--ntx-form-theme-text-input-size);
      font-family: var(--ntx-form-theme-font-family);
      color: var(--ntx-form-theme-color-input-text);
      background-color: var(--ntx-form-theme-color-input-background);
      border: 1px solid var(--ntx-form-theme-color-border);
      border-radius: var(--ntx-form-theme-border-radius);
      box-sizing: border-box;
    }

    .form-control:focus {
      outline: none;
      border-color: var(--ntx-form-theme-color-primary);
      box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
    }

    .btn {
      padding: 8px 16px;
      font-size: var(--ntx-form-theme-text-input-size);
      font-family: var(--ntx-form-theme-font-family);
      border: none;
      border-radius: var(--ntx-form-theme-border-radius);
      cursor: pointer;
      transition: background-color 0.15s ease-in-out;
    }

    .btn-primary {
      color: white;
      background-color: var(--ntx-form-theme-color-primary);
    }

    .btn-primary:hover:not(:disabled) {
      filter: brightness(0.9);
    }

    .btn:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    .text-danger {
      color: var(--ntx-form-theme-color-error);
      font-size: var(--ntx-form-theme-text-label-size);
      margin-top: 4px;
    }

    .alert {
      padding: 12px 16px;
      margin-top: 12px;
      border-radius: var(--ntx-form-theme-border-radius);
      font-size: var(--ntx-form-theme-text-label-size);
      font-family: var(--ntx-form-theme-font-family);
      user-select: text;
      -webkit-user-select: text;
      -moz-user-select: text;
      -ms-user-select: text;
    }

    .alert-success {
      background-color: #d4edda;
      color: #155724;
      border: 1px solid #c3e6cb;
    }

    .alert-warning {
      background-color: #fff3cd;
      color: #856404;
      border: 1px solid #ffeaa7;
    }

    .alert-error {
      background-color: #f8d7da;
      color: #721c24;
      border: 1px solid #f5c6cb;
    }

    .alert-info {
      background-color: #d1ecf1;
      color: #0c5460;
      border: 1px solid #bee5eb;
    }

    .alert-icon {
      margin-right: 8px;
      font-weight: bold;
    }

    .alert-response {
      margin-top: 8px;
      padding-top: 8px;
      border-top: 1px solid rgba(0, 0, 0, 0.1);
      font-family: 'Courier New', Courier, monospace;
      font-size: 12px;
      white-space: pre-wrap;
      word-break: break-all;
    }

    .spinner {
      display: inline-block;
      width: 12px;
      height: 12px;
      margin-right: 8px;
      border: 2px solid transparent;
      border-top: 2px solid currentColor;
      border-radius: 50%;
      animation: spin 1s linear infinite;
    }

    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }

    pre.form-control {
      white-space: pre-wrap;
      word-wrap: break-word;
      min-height: 80px;
      font-family: 'Courier New', Courier, monospace;
    }

    textarea.form-control {
      resize: vertical;
    }

    .btn-container {
      display: flex;
    }

    .btn-container.align-left {
      justify-content: flex-start;
    }

    .btn-container.align-center {
      justify-content: center;
    }

    .btn-container.align-right {
      justify-content: flex-end;
    }

    /* Debug Tabs */
    .debug-tabs {
      margin-top: var(--ntx-form-theme-spacing-md, 16px);
    }

    .debug-tab-nav {
      display: flex;
      border-bottom: 1px solid var(--ntx-form-theme-tab-border, #dee2e6);
      margin-bottom: var(--ntx-form-theme-spacing-md, 16px);
    }

    .debug-tab-button {
      padding: var(--ntx-form-theme-spacing-sm, 8px) var(--ntx-form-theme-spacing-md, 16px);
      border: none;
      background: none;
      font-family: var(--ntx-form-theme-font-family);
      font-size: var(--ntx-form-theme-text-label-size, 14px);
      cursor: pointer;
      color: var(--ntx-form-theme-tab-inactive, #6c757d);
      border-bottom: 2px solid transparent;
      transition: all 0.2s ease;
    }

    .debug-tab-button:hover {
      color: var(--ntx-form-theme-color-primary, #0078d4);
      background-color: var(--ntx-form-theme-color-background-alt, #f8f9fa);
    }

    .debug-tab-button.active {
      color: var(--ntx-form-theme-tab-active, #0078d4);
      border-bottom-color: var(--ntx-form-theme-tab-active, #0078d4);
      font-weight: 500;
    }

    .debug-tab-content {
      display: none;
    }

    .debug-tab-content.active {
      display: block;
    }

    /* Debug Tables */
    .debug-table {
      width: 100%;
      border-collapse: collapse;
      font-family: var(--ntx-form-theme-font-family);
      font-size: var(--ntx-form-theme-text-input-size, 14px);
      background: var(--ntx-form-theme-color-background, #ffffff);
      border-radius: var(--ntx-form-theme-border-radius, 4px);
      overflow: hidden;
      box-shadow: var(--ntx-form-theme-shadow-sm, 0 1px 2px rgba(0, 0, 0, 0.05));
    }

    .debug-table th,
    .debug-table td {
      padding: var(--ntx-form-theme-spacing-sm, 8px) var(--ntx-form-theme-spacing-md, 16px);
      text-align: left;
      border-bottom: 1px solid var(--ntx-form-theme-table-border, #dee2e6);
    }

    .debug-table th {
      background-color: var(--ntx-form-theme-color-primary, #0078d4);
      color: white;
      font-weight: 600;
      text-transform: uppercase;
      font-size: 12px;
      letter-spacing: 0.5px;
    }

    .debug-table tr:nth-child(even) {
      background-color: var(--ntx-form-theme-table-stripe, #f8f9fa);
    }

    .debug-table tr:hover {
      background-color: var(--ntx-form-theme-table-hover, #e9ecef);
    }

    .debug-table .property-name {
      font-weight: 500;
      color: var(--ntx-form-theme-color-primary, #0078d4);
    }

    .debug-table .value-default {
      font-style: italic;
      color: var(--ntx-form-theme-color-secondary, #6c757d);
    }

    .debug-table .value-current {
      font-weight: 500;
    }

    .debug-table .value-json {
      font-family: 'Courier New', Courier, monospace;
      font-size: 12px;
      background-color: var(--ntx-form-theme-color-background-alt, #f8f9fa);
      padding: 4px 8px;
      border-radius: 3px;
      max-width: 300px;
      word-break: break-all;
    }

    .debug-json {
      font-family: 'Courier New', Courier, monospace;
      font-size: 12px;
      background-color: var(--ntx-form-theme-color-background-alt, #f8f9fa);
      padding: 8px;
      border-radius: 3px;
      white-space: pre-wrap;
      word-break: break-all;
      max-height: 200px;
      overflow-y: auto;
      border: 1px solid var(--ntx-form-theme-color-border, #dee2e6);
      margin: 0;
      user-select: text;
      -webkit-user-select: text;
      -moz-user-select: text;
      -ms-user-select: text;
    }

    .debug-json-container {
      position: relative;
    }

    .debug-json-copy-btn {
      position: absolute;
      top: 4px;
      right: 4px;
      padding: 4px 8px;
      font-size: 11px;
      background: var(--ntx-form-theme-color-primary, #0078d4);
      color: white;
      border: none;
      border-radius: 3px;
      cursor: pointer;
      opacity: 0;
      transition: opacity 0.2s ease;
    }

    .debug-json-container:hover .debug-json-copy-btn {
      opacity: 1;
    }

    .debug-json-copy-btn:hover {
      filter: brightness(1.1);
    }

    .debug-json-copy-btn:active {
      transform: scale(0.95);
    }

    .debug-table td {
      vertical-align: top;
      max-width: 400px;
      word-wrap: break-word;
    }

    /* JSON Editor Enhancements */
    .json-editor-container {
      border: 1px solid var(--ntx-form-theme-color-border, #dee2e6);
      border-radius: var(--ntx-form-theme-border-radius, 4px);
      overflow: hidden;
      background: var(--ntx-form-theme-color-input-background, #ffffff);
    }

    .json-editor-toolbar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 8px 12px;
      background: var(--ntx-form-theme-color-background-alt, #f8f9fa);
      border-bottom: 1px solid var(--ntx-form-theme-color-border, #dee2e6);
      font-size: 12px;
    }

    .json-editor-actions {
      display: flex;
      gap: 8px;
    }

    .json-editor-btn {
      padding: 4px 8px;
      font-size: 11px;
      border: 1px solid var(--ntx-form-theme-color-border, #dee2e6);
      background: white;
      border-radius: 3px;
      cursor: pointer;
      color: var(--ntx-form-theme-color-input-text, #333333);
      transition: all 0.2s ease;
    }

    .json-editor-btn:hover {
      background: var(--ntx-form-theme-color-primary, #0078d4);
      color: white;
      border-color: var(--ntx-form-theme-color-primary, #0078d4);
    }

    .json-editor-status {
      font-size: 11px;
      color: var(--ntx-form-theme-color-secondary, #6c757d);
    }

    .json-editor-status.valid {
      color: #28a745;
    }

    .json-editor-status.invalid {
      color: var(--ntx-form-theme-color-error, #dc3545);
    }

    .json-editor-textarea {
      font-family: 'Consolas', 'Monaco', 'Courier New', monospace;
      font-size: 13px;
      line-height: 1.5;
      padding: 12px;
      border: none;
      resize: vertical;
      background: transparent;
      color: var(--ntx-form-theme-color-input-text, #333333);
      min-height: 200px;
      tab-size: 2;
    }

    .json-editor-textarea:focus {
      outline: none;
    }

    .json-viewer {
      background: var(--ntx-form-theme-color-background-alt, #f8f9fa);
      border: 1px solid var(--ntx-form-theme-color-border, #dee2e6);
      border-radius: var(--ntx-form-theme-border-radius, 4px);
      padding: 12px;
      font-family: 'Consolas', 'Monaco', 'Courier New', monospace;
      font-size: 12px;
      white-space: pre;
      overflow-x: auto;
      max-height: 300px;
      overflow-y: auto;
    }

    .json-syntax-string { color: #032f62; }
    .json-syntax-number { color: #005cc5; }
    .json-syntax-boolean { color: #d73a49; }
    .json-syntax-null { color: #6f42c1; }
    .json-syntax-key { color: #22863a; font-weight: 500; }
    .json-syntax-punctuation { color: #24292e; }
  `;
__decorate([
    property({ type: String })
], DafWebRequestPlugin.prototype, "label", void 0);
__decorate([
    property({ type: String })
], DafWebRequestPlugin.prototype, "description", void 0);
__decorate([
    property({ type: Boolean })
], DafWebRequestPlugin.prototype, "readOnly", void 0);
__decorate([
    property({ type: Object })
], DafWebRequestPlugin.prototype, "value", void 0);
__decorate([
    property({ type: String })
], DafWebRequestPlugin.prototype, "requestBody", void 0);
__decorate([
    property({ type: String })
], DafWebRequestPlugin.prototype, "apiUrl", void 0);
__decorate([
    property({ type: String })
], DafWebRequestPlugin.prototype, "requestHeaders", void 0);
__decorate([
    property({ type: String })
], DafWebRequestPlugin.prototype, "bearerToken", void 0);
__decorate([
    property({ type: String })
], DafWebRequestPlugin.prototype, "tokenUrl", void 0);
__decorate([
    property({ type: String })
], DafWebRequestPlugin.prototype, "clientId", void 0);
__decorate([
    property({ type: String })
], DafWebRequestPlugin.prototype, "clientSecret", void 0);
__decorate([
    property({ type: String })
], DafWebRequestPlugin.prototype, "outputValueKey", void 0);
__decorate([
    property({ type: String })
], DafWebRequestPlugin.prototype, "responseConfig", void 0);
__decorate([
    property({ type: String })
], DafWebRequestPlugin.prototype, "contentType", void 0);
__decorate([
    property({ type: Boolean })
], DafWebRequestPlugin.prototype, "debugMode", void 0);
__decorate([
    property({ type: String })
], DafWebRequestPlugin.prototype, "method", void 0);
__decorate([
    property({ type: String })
], DafWebRequestPlugin.prototype, "successMessage", void 0);
__decorate([
    property({ type: String })
], DafWebRequestPlugin.prototype, "warningMessage", void 0);
__decorate([
    property({ type: String })
], DafWebRequestPlugin.prototype, "errorMessage", void 0);
__decorate([
    property({ type: Boolean })
], DafWebRequestPlugin.prototype, "sendAPICall", void 0);
__decorate([
    property({ type: Boolean })
], DafWebRequestPlugin.prototype, "allowMultipleAPICalls", void 0);
__decorate([
    property({ type: Boolean })
], DafWebRequestPlugin.prototype, "countdownEnabled", void 0);
__decorate([
    property({ type: Number })
], DafWebRequestPlugin.prototype, "countdownTimer", void 0);
__decorate([
    property({ type: Boolean })
], DafWebRequestPlugin.prototype, "btnEnabled", void 0);
__decorate([
    property({ type: String })
], DafWebRequestPlugin.prototype, "btnText", void 0);
__decorate([
    property({ type: String })
], DafWebRequestPlugin.prototype, "btnAlignment", void 0);
__decorate([
    property({ type: Boolean })
], DafWebRequestPlugin.prototype, "btnVisible", void 0);
__decorate([
    property({ type: Boolean })
], DafWebRequestPlugin.prototype, "formValidation", void 0);
__decorate([
    property({ type: String })
], DafWebRequestPlugin.prototype, "submissionAction", void 0);
__decorate([
    property({ type: Boolean })
], DafWebRequestPlugin.prototype, "submitHidden", void 0);
DafWebRequestPlugin = DafWebRequestPlugin_1 = __decorate([
    customElement('daf-webrequest-plugin')
], DafWebRequestPlugin);
export { DafWebRequestPlugin };
