import { html, LitElement } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { callApi } from './apiClient.js';
import { customElement, property } from 'lit/decorators.js';
import { ValidationModule } from './validation.module.js';
import { prepareRequestBody, parseRequestHeaders } from './utils/request.js';
import { determineResponseType, extractNestedValue } from './utils/response.js';
import { formatJsonForDisplay, formatValue, getJsonStatus, isValidJson } from './utils/json.js';
import { FormCoordinatorManager } from './forms/form-coordinator.js';
import { SubmissionScheduler } from './forms/submission-scheduler.js';
import { renderJsonOutput, renderJsonPreview } from './debug/json-tools-view.js';
import {
  generateResponseConfigQuoted,
  parseResponseFormatterConfig,
  type FormatterFieldSelection,
} from './formatters/response-config.js';
import {
  formatMessageWithBoldLabels,
  formatRawResponse,
  formatResponseWithConfig,
} from './formatters/response-message.js';
import { renderDebugPropertiesTab } from './debug/properties-view.js';
import { renderRequestDetailsTab } from './debug/request-details-view.js';
import { renderApiToolsTab } from './debug/api-tools-view.js';
import { renderResponseFormatterTab } from './debug/response-formatter-view.js';
import { renderFormattedPreview } from './debug/formatter-preview-view.js';
import { renderSelectedFieldsList } from './debug/selected-fields-view.js';
import { getAlertIcon, shouldShowAlert, shouldShowMoreDetails } from './debug/alert-utils.js';
import { createSampleJson, formatJsonEditorValue, minifyJsonEditorValue } from './debug/json-editor.js';
import { createApiResponseValue, createConfigurationErrorValue, createPendingApiValue } from './nintex/value-state.js';
import {
  collectAvailableFormatterFields,
  getSortedSelectedFields,
  removeFormatterField,
  reorderFormatterFields,
  toggleFormatterField,
  updateFormatterFieldTitle,
} from './formatters/field-selection.js';
import { resolveConfiguredMessage } from './formatters/configured-message.js';
import { fetchOAuthToken as requestOAuthToken } from './services/oauth-token-service.js';
import { interpretApiResponse } from './services/api-response-interpreter.js';
import { pluginStyles } from './styles/plugin.styles.js';
import { getPluginContract } from './nintex/plugin-contract.js';

const PLUGIN_VERSION = '1.1.8';
const SENSITIVE_DEBUG_PROPERTIES = new Set(['clientSecret']);

@customElement('daf-webrequest-plugin')
export class DafWebRequestPlugin extends LitElement {
  static styles = pluginStyles;



  // Add private property to track active debug tab
  private activeDebugTab: string = 'properties';
  private activeFormatterTab: string = 'success';
  private formatterJsonInput: string = '';
  private formatterSelectedFields: Map<string, FormatterFieldSelection> = new Map();
  private formatterUseArrayNotation: boolean = true;
  private formatterMessageTitle: string = '';

  @property({ type: String }) label: string = '';
  @property({ type: String }) description: string = '';
  @property({ type: Boolean }) readOnly: boolean = false;
  
  // Custom accessor for value property with explicit change notification
  private _value: {
    success: boolean | null;
    valid: boolean;
    statusCode: number;
    responseType: string;
    data: string;
    message: string;
    formattedResponse: string;
    timestamp: string;
    executionTime: number;
    access_token?: string;
    output?: any;
  } = {
    success: false,
    valid: false,
    statusCode: 0,
    responseType: '',
    data: '',
    message: '',
    formattedResponse: '',
    timestamp: '',
    executionTime: 0
  };
  
  @property({ type: Object })
  get value() {
    return this._value;
  }
  set value(newValue: typeof this._value) {
    const oldValue = this._value;
    this._value = newValue;
    console.log('[Value Setter] Value changed, dispatching ntx-value-change event', newValue);
    this.dispatchNintexValueChange(newValue);
    this.requestUpdate('value', oldValue);
  }

  private dispatchNintexValueChange(value: typeof this._value): void {
    this.dispatchEvent(new CustomEvent('ntx-value-change', {
      detail: value,
      bubbles: true,
      composed: true,
    }));
  }
  @property({ type: String }) requestBody: string = '';
  @property({ type: String }) apiUrl: string = '';
  @property({ type: String }) requestHeaders: string = '';
  @property({ type: String }) bearerToken: string = '';
  @property({ type: String }) tokenUrl: string = '';
  @property({ type: String }) clientId: string = '';
  @property({ type: String }) clientSecret: string = '';
  @property({ type: String }) outputValueKey: string = '';
  @property({ type: String }) contentType: string = 'application/json';
  @property({ type: Number }) requestTimeout: number = 30;
  @property({ type: Boolean, reflect: true }) debugMode: boolean = false;
  @property({ type: String }) method: string = 'POST';
  @property({ type: String }) successMessage: string = 'API call completed successfully';
  @property({ type: String }) warningMessage: string = 'API call completed with warnings';
  @property({ type: String }) errorMessage: string = 'API call failed';
  @property({ type: Boolean, reflect: true, attribute: 'send-api-call' }) sendAPICall: boolean = false;
  @property({ type: Boolean, reflect: true, attribute: 'allow-multiple-api-calls' }) allowMultipleAPICalls: boolean = false;
  @property({ type: Boolean, reflect: true, attribute: 'countdown-enabled' }) countdownEnabled: boolean = false;
  @property({ type: Number }) countdownTimer: number = 5;
  
  // Custom accessors for btnEnabled with explicit change detection
  private _btnEnabled: boolean = true;
  @property({ type: Boolean, reflect: true, attribute: 'btn-enabled' })
  get btnEnabled(): boolean {
    return this._btnEnabled;
  }
  set btnEnabled(value: boolean) {
    const oldValue = this._btnEnabled;
    this._btnEnabled = value;
    console.log(`[Property Setter] btnEnabled changed from ${oldValue} to ${value}`);
    this.requestUpdate('btnEnabled', oldValue);
  }
  
  @property({ type: String, reflect: true, attribute: 'btn-text' }) btnText: string = 'Send API Request';
  @property({ type: String, reflect: true, attribute: 'btn-alignment' }) btnAlignment: string = 'left';
  
  // Custom accessors for btnVisible with explicit change detection
  private _btnVisible: boolean = true;
  @property({ type: Boolean, reflect: true, attribute: 'btn-visible' })
  get btnVisible(): boolean {
    return this._btnVisible;
  }
  set btnVisible(value: boolean) {
    const oldValue = this._btnVisible;
    this._btnVisible = value;
    console.log(`[Property Setter] btnVisible changed from ${oldValue} to ${value}`);
    this.requestUpdate('btnVisible', oldValue);
  }
  
  // Use an explicit accessor because Nintex can update this property after the
  // initial render. Clear the output at the exact moment its value changes,
  // rather than relying only on Lit's deferred updated() lifecycle.
  private _submissionAction: string = 'no-submit';
  @property({ type: String, reflect: true, attribute: 'submission-action' })
  get submissionAction(): string {
    return this._submissionAction;
  }
  set submissionAction(value: string) {
    const nextValue = value || 'no-submit';
    const oldValue = this._submissionAction;
    if (oldValue === nextValue) return;

    this._submissionAction = nextValue;
    console.log(`[Property Setter] submissionAction changed from ${oldValue} to ${nextValue}`);
    this.requestUpdate('submissionAction', oldValue);

    if (this.isConnected) {
      this.clearApiOutput('submission action changed');
      void this.publishPendingResultToNintex();
    }
  }
  @property({ type: Boolean, reflect: true, attribute: 'submit-hidden' }) submitHidden: boolean = false;
  @property({ type: String, reflect: true, attribute: 'show-more-details' }) showMoreDetails: string = 'Never';
  @property({ type: String, reflect: true, attribute: 'alert-position' }) alertPosition: string = 'After';

  // Instance-specific state (not reactive properties - these are internal state only)
  private detailsExpanded: boolean = false;
  private isLoading = false;
  private apiResponse: string = '';
  private responseType: 'success' | 'warning' | 'error' | null = null;
  private hasSuccessfulCall = false;
  private lastApiCallTime = 0;
  private showCooldownAlert = false;
  private lastCooldownAlertTime = 0;
  private apiCallStartTime = 0;
  private oauthTokenResponse: any = null;
  private containingForm: HTMLFormElement | null = null;
  private validationModule = new ValidationModule();
  private submissionScheduler = new SubmissionScheduler({
    getCountdownSeconds: () => this.countdownTimer,
    getLastApiCallTime: () => this.lastApiCallTime,
    submit: () => this.submitNintexForm(),
    requestUpdate: () => this.requestUpdate(),
    onCooldownComplete: () => {
      this.showCooldownAlert = false;
    },
  });
  private isFinalizingSubmission: boolean = false; // Guard against API re-entry during native submit phase

  constructor() {
    super();
    // NOTE: Do NOT initialize @property decorated fields here if they have defaultValue in metadata
    // Nintex passes values via attributes, and constructor initialization would override them
    // Only initialize private fields that aren't reactive properties
  }

  // Called when the element is added to the DOM
  connectedCallback() {
    super.connectedCallback();
    // Normalize legacy/null incoming values from host state.
    if (this.value?.valid !== true && this.value?.valid !== false) {
      this.value = {
        ...this.value,
        valid: false,
      };
    }
    this.registerWithContainingForm();
    // Attach blur-revalidation listeners
    this.validationModule.attach();
    // Suppress the Nintex-injected nx-error-message span for this plugin's form group
    this.injectErrorMessageSuppressStyle();
  }

  private registerWithContainingForm(): void {
    this.containingForm = FormCoordinatorManager.register(this, this);
    this.toggleSubmitButtonVisibility();
  }

  private unregisterFromContainingForm(): void {
    if (this.containingForm) {
      FormCoordinatorManager.unregister(this.containingForm, this);
    }
    this.containingForm = null;
  }

  static getMetaConfig() {
    return getPluginContract();
  }

  render() {
    const showJsonConverter = this.debugMode;
    
    if (showJsonConverter) {
      // Debug mode: Enhanced debug interface with tabs
      return html`
        <div class="plugin-container">
          ${this.btnVisible ? this.renderButtonWithAlert('Calling API...') : ''}
          
          <div class="debug-tabs">
            <div class="debug-version">Plugin Version: ${PLUGIN_VERSION}</div>
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
      return html`<div class="plugin-container" style="display: none;"></div>`;
    }
    
    return html`
      <div class="plugin-container">
        ${this.renderButtonWithAlert('Processing...')}
      </div>
    `;
  }

  private renderButtonWithAlert(loadingText: string) {
    const alert = this.renderResponseAlert(this.alertPosition === 'Before');
    const button = html`
      <button 
        class="btn btn-primary" 
        part="api-button"
        @click=${() => this.triggerAPICall()} 
        ?disabled=${this.isButtonDisabled()}
      >
        ${this.isLoading ? html`<span class="spinner"></span>${loadingText}` : this.btnText}
      </button>
    `;

    // Handle Pop-out modal
    if (this.alertPosition === 'Pop-out') {
      return html`
        <div class="form-group">
          <div class="btn-container align-${this.btnAlignment}">
            ${button}
          </div>
        </div>
        ${this.shouldShowAlert() ? this.renderModal(alert) : ''}
      `;
    }

    // Handle Before positioning
    if (this.alertPosition === 'Before') {
      return html`
        <div class="form-group">
          ${alert}
          <div class="btn-container align-${this.btnAlignment}">
            ${button}
          </div>
        </div>
      `;
    }

    // Default: After positioning
    return html`
      <div class="form-group">
        <div class="btn-container align-${this.btnAlignment}">
          ${button}
        </div>
        ${alert}
      </div>
    `;
  }

  private shouldShowAlert(): boolean {
    return shouldShowAlert({
      now: Date.now(),
      lastApiCallTime: this.lastApiCallTime,
      countdownTimer: this.countdownTimer,
      countdownEnabled: this.countdownEnabled,
      showCooldownAlert: this.showCooldownAlert,
      apiResponse: this.apiResponse,
      responseType: this.responseType,
      lastCooldownAlertTime: this.lastCooldownAlertTime,
    });
  }

  private renderModal(alertContent: any) {
    return html`
      <div class="modal-overlay" @click=${(e: MouseEvent) => {
        // Close modal if clicking on overlay (not the content)
        if (e.target === e.currentTarget) {
          this.closeModal();
        }
      }}>
        <div class="modal-content">
          <button class="modal-close" @click=${() => this.closeModal()}>&times;</button>
          ${alertContent}
        </div>
      </div>
    `;
  }

  private closeModal() {
    // Clear the response to close the modal
    this.apiResponse = '';
    this.responseType = null;
    this.showCooldownAlert = false;
    this.requestUpdate();
  }

  private renderResponseAlert(isBefore: boolean = false) {
    const now = Date.now();
    const timeSinceLastCall = now - this.lastApiCallTime;
    const cooldownMs = this.countdownTimer * 1000;
    const inCooldown = this.countdownEnabled && this.lastApiCallTime > 0 && timeSinceLastCall < cooldownMs;
    
    // Check if we're in delayed submission countdown
    const isDelayedSubmission = this.submissionAction === 'delayed-submit' &&
                                this.submissionScheduler.isTimerActive &&
                                (this.responseType === 'success' || this.responseType === 'warning');
    
    const beforeClass = isBefore ? 'alert-before' : '';
    
    // Show cooldown message only if someone attempted to trigger during cooldown
    if (inCooldown && this.showCooldownAlert) {
      const remainingSeconds = Math.ceil((cooldownMs - timeSinceLastCall) / 1000);
      return html`
        <div class="alert alert-info ${beforeClass}" part="cooldown-alert">
          <div>
            <span class="alert-icon">ℹ</span>
            <strong>Information:</strong> Please wait ${remainingSeconds} seconds before sending another request.
          </div>
        </div>
      `;
    }
    
    // Only show response alert if we have a response AND it's newer than the last cooldown alert
    if (!this.apiResponse || !this.responseType) return '';
    
    // Don't show old responses that happened before we showed a cooldown alert
    if (this.lastCooldownAlertTime > this.lastApiCallTime) return '';
    
    const alertClass = `alert-${this.responseType}`;
    const icon = this.getAlertIcon(this.responseType);
    const typeLabel = this.responseType.charAt(0).toUpperCase() + this.responseType.slice(1);
    const messageData = this.getCustomMessage(this.responseType);
    const customTitle = messageData.title;
    const customMessage = messageData.message;
    
    // Calculate remaining seconds for delayed submission
    let submissionCountdown = 0;
    if (isDelayedSubmission) {
      const elapsed = Date.now() - this.submissionScheduler.delayedSubmissionStartTime;
      const remaining = this.countdownTimer * 1000 - elapsed;
      submissionCountdown = Math.max(0, Math.ceil(remaining / 1000));
    }
    
    // Check if customMessage contains newlines (formatted response)
    const isFormattedResponse = customMessage.includes('\n');
    
    // For success responses, show only the custom message
    if (this.responseType === 'success') {
      const showFooter = this.shouldShowMoreDetails('success') || isDelayedSubmission;
      
      return html`
        <div class="alert ${alertClass} ${beforeClass}" part="response-alert">
          ${customTitle ? html`
            <div>
              <strong>${customTitle}</strong>
            </div>
          ` : ''}
          ${isFormattedResponse ? html`
            <div class="alert-response" style="white-space: pre-line; margin-top: ${customTitle ? '8px' : '0'};">
              ${customMessage}
            </div>
          ` : html`
            <div style="display: inline; margin-left: ${customTitle ? '4px' : '0'};">
              ${customMessage}
            </div>
          `}
          ${showFooter ? html`
            <div class="alert-footer">
              <div class="alert-footer-left">
                ${this.shouldShowMoreDetails('success') ? html`
                  <button 
                    class="alert-more-details-toggle"
                    @click=${() => this.toggleDetailsExpanded()}
                  >
                    ${this.detailsExpanded ? '▼' : '▶'} More Details...
                  </button>
                ` : ''}
              </div>
              ${isDelayedSubmission ? html`
                <div class="alert-footer-right">
                  Submitting form in ${submissionCountdown} seconds...
                </div>
              ` : ''}
            </div>
            ${this.detailsExpanded && this.shouldShowMoreDetails('success') ? html`
              <div class="alert-more-details-wrapper">
                <span class="alert-more-details-copy" @click=${() => this.copyRawResponseToClipboard()}>copy</span>
                <div class="alert-more-details-content">${formatRawResponse(this.apiResponse)}</div>
              </div>
            ` : ''}
          ` : ''}
        </div>
      `;
    }
    
    // For warnings and errors, show custom message + actual response message
    const showFooter = this.shouldShowMoreDetails(this.responseType) || isDelayedSubmission;
    
    return html`
      <div class="alert ${alertClass} ${beforeClass}" part="response-alert">
        ${customTitle ? html`
          <div>
            <strong>${customTitle}</strong>
          </div>
        ` : ''}
        ${isFormattedResponse ? html`
          <div class="alert-response" style="white-space: pre-line; margin-top: ${customTitle ? '8px' : '0'};">
            ${customMessage}
          </div>
        ` : html`
          <div style="display: inline; margin-left: ${customTitle ? '4px' : '0'};">
            ${customMessage}
          </div>
        `}
        ${this.value?.message ? html`
          <div class="alert-response">
            ${unsafeHTML(formatMessageWithBoldLabels(this.value.message))}
          </div>
        ` : ''}
        ${showFooter ? html`
          <div class="alert-footer">
            <div class="alert-footer-left">
              ${this.shouldShowMoreDetails(this.responseType) ? html`
                <button 
                  class="alert-more-details-toggle"
                  @click=${() => this.toggleDetailsExpanded()}
                >
                  ${this.detailsExpanded ? '▼' : '▶'} More Details...
                </button>
              ` : ''}
            </div>
            ${isDelayedSubmission ? html`
              <div class="alert-footer-right">
                Submitting form in ${submissionCountdown} seconds...
              </div>
            ` : ''}
          </div>
          ${this.detailsExpanded && this.shouldShowMoreDetails(this.responseType) ? html`
            <div class="alert-more-details-wrapper">
              <span class="alert-more-details-copy" @click=${() => this.copyRawResponseToClipboard()}>copy</span>
              <div class="alert-more-details-content">${formatRawResponse(this.apiResponse)}</div>
            </div>
          ` : ''}
        ` : ''}
      </div>
    `;
  }

  private getAlertIcon(type: 'success' | 'warning' | 'error'): string {
    return getAlertIcon(type);
  }

  private shouldShowMoreDetails(responseType: string): boolean {
    return shouldShowMoreDetails(this.showMoreDetails, responseType);
  }

  private toggleDetailsExpanded() {
    this.detailsExpanded = !this.detailsExpanded;
    this.requestUpdate();
  }

  private copyRawResponseToClipboard() {
    const content = formatRawResponse(this.apiResponse);
    this.copyToClipboard(content);
  }

  private getCustomMessage(type: 'success' | 'warning' | 'error'): { title: string | null, message: string } {
    return resolveConfiguredMessage(type, {
      success: this.successMessage,
      warning: this.warningMessage,
      error: this.errorMessage,
    }, this.value.data);
  }

  // Handle property changes from the host application
  updated(changedProperties: Map<string, any>) {
    // Note: value change event is now dispatched in the value setter, not here

    const apiConfigurationProperties = [
      'allowMultipleAPICalls',
      'apiUrl',
      'method',
      'requestBody',
      'requestHeaders',
      'bearerToken',
      'tokenUrl',
      'clientId',
      'clientSecret',
      'contentType',
      'outputValueKey',
      'requestTimeout',
    ];
    const configurationChanged = apiConfigurationProperties
      .some((property) => changedProperties.has(property));
    const newApiCallRequested = changedProperties.has('sendAPICall') && this.sendAPICall;

    // Any request-defining configuration change or new trigger clears the
    // output unconditionally. Form-level Nintex rules must never see a prior
    // result while evaluating the next request or submission attempt.
    if (configurationChanged || newApiCallRequested) {
      this.clearApiOutput(configurationChanged ? 'configuration changed' : 'new API call requested');
      if (newApiCallRequested) {
        void this.publishPendingResultBeforeValidation();
      } else {
        void this.publishPendingResultToNintex();
      }
    }

    // Watch for submitHidden property changes to hide/show the Nintex submit button
    if (changedProperties.has('submitHidden')) {
      this.toggleSubmitButtonVisibility();
    }

    // Log UI property changes for debugging
    if (changedProperties.has('btnVisible')) {
      console.log(`[UI Property Change] btnVisible changed to: ${this.btnVisible}`);
      this.requestUpdate();
    }
    
    if (changedProperties.has('btnEnabled')) {
      console.log(`[UI Property Change] btnEnabled changed to: ${this.btnEnabled}`);
      this.requestUpdate();
    }
    
    if (changedProperties.has('btnText')) {
      console.log(`[UI Property Change] btnText changed to: ${this.btnText}`);
      this.requestUpdate();
    }
    
    if (changedProperties.has('btnAlignment')) {
      console.log(`[UI Property Change] btnAlignment changed to: ${this.btnAlignment}`);
      this.requestUpdate();
    }
    
    if (changedProperties.has('debugMode')) {
      console.log(`[UI Property Change] debugMode changed to: ${this.debugMode}`);
      this.requestUpdate();
    }
  }

  private toggleSubmitButtonVisibility(): void {
    if (!this.containingForm) return;
    FormCoordinatorManager.setSubmitHidden(this.containingForm, this, this.submitHidden);
  }

  private clearApiOutput(reason: string): void {
    this.hasSuccessfulCall = false;

    const timestamp = new Date().toISOString();
    console.log(`[API Call] Clearing API output: ${reason}`);
    this.responseType = null;
    this.apiResponse = '';
    this.value = createPendingApiValue(timestamp);
  }

  private async publishPendingResultToNintex(): Promise<void> {
    // The setter emits immediately, then Lit applies the changed value. Emit a
    // second time after rendering and give Nintex time to update its form-rule
    // state before a new validation cycle can trigger a native submit.
    await this.updateComplete;
    this.dispatchNintexValueChange(this.value);
    await new Promise<void>((resolve) => window.setTimeout(resolve, 800));
  }

  private async publishPendingResultBeforeValidation(): Promise<void> {
    await this.publishPendingResultToNintex();
    await this.handleAPICallTrigger();
  }

  private async handleAPICallTrigger() {
    console.log('[API Call] handleAPICallTrigger started');
    this.sendAPICall = false;

    // During post-success final native submit/validation, ignore any sendAPICall re-triggers.
    if (this.isFinalizingSubmission) {
      console.log('[API Call] Ignored - final native submission is in progress');
      return;
    }

    // only-submit: proxy for the native Nintex submit button — no API call ever
    if (this.submissionAction === 'only-submit') {
      console.log('[API Call] Submission action is only-submit — submitting form directly');

      // Mark form-rule validity without changing API success semantics.
      this.value = {
        ...this.value,
        valid: true,
      };

      this.submitNintexForm();
      return;
    }

    // All other submissionAction values: always validate via the validation module
    console.log('[API Call] Running form validation via ValidationModule...');
    const isFormValid = await this.validationModule.runHardValidation();
    console.log('[API Call] Validation result:', isFormValid);

    if (!isFormValid) {
      console.log('[API Call] Validation FAILED — blocking API call');
      return;
    }

    console.log('[API Call] Validation PASSED — proceeding');

    // Check if multiple API calls are allowed
    if (!this.allowMultipleAPICalls && this.hasSuccessfulCall) {
      console.log('[API Call] Multiple API calls not allowed and already had successful call — BLOCKING');
      return;
    }

    // Check cooldown timer
    if (this.countdownEnabled) {
      const now = Date.now();
      const timeSinceLastCall = now - this.lastApiCallTime;
      const cooldownMs = this.countdownTimer * 1000;
      const inCooldown = this.lastApiCallTime > 0 && timeSinceLastCall < cooldownMs;

      if (inCooldown) {
        console.log('[API Call] In cooldown period — BLOCKING');
        this.showCooldownAlert = true;
        this.lastCooldownAlertTime = Date.now();
        this.submissionScheduler.startCooldownTimer();
        return;
      }
    }

    // All checks passed — make the API call
    console.log('[API Call] All checks passed — calling handleApiCall()');
    this.handleApiCall();
  }

  private triggerAPICall() {
    // Set sendAPICall to true when button is clicked
    this.sendAPICall = true;
  }

  private isButtonDisabled(): boolean {
    // If allowMultipleAPICalls is true, NEVER disable the button permanently
    // Only disable during loading - ignore btnEnabled and hasSuccessfulCall
    if (this.allowMultipleAPICalls) {
      return this.isLoading;
    }
    
    // If allowMultipleAPICalls is false, disable for loading, btnEnabled, OR after a strict successful call.
    // Errors/warnings should still allow retry.
    const permanentlyDisabled = this.hasSuccessfulCall;
    return this.isLoading || !this.btnEnabled || permanentlyDisabled;
  }

  private setActiveTab(tabName: 'properties' | 'request' | 'tools' | 'formatter'): void {
    this.activeDebugTab = tabName;
    this.requestUpdate();
  }

  private renderPropertiesTab() {
    const metadata = (this.constructor as typeof DafWebRequestPlugin).getMetaConfig();
    return renderDebugPropertiesTab(
      metadata.properties as unknown as Record<string, any> | undefined,
      this as unknown as Record<string, unknown>,
      SENSITIVE_DEBUG_PROPERTIES,
    );
  }

  private renderRequestDetailsTab() {
    return renderRequestDetailsTab({
      apiUrl: this.apiUrl,
      method: this.method,
      oauthTokenResponse: this.oauthTokenResponse,
      requestHeaders: this.requestHeaders,
      requestBody: this.requestBody,
      isLoading: this.isLoading,
      hasSuccessfulCall: this.hasSuccessfulCall,
      isButtonDisabled: this.isButtonDisabled(),
      apiResponse: this.apiResponse,
    }, (text) => this.copyToClipboard(text));
  }

  private renderAPIToolsTab() {
    return renderApiToolsTab(this.requestBody, {
      onFormat: () => this.formatJson(),
      onMinify: () => this.minifyJson(),
      onClear: () => this.clearJson(),
      onInsertSample: () => this.insertSampleJson(),
      onInput: (event) => this.handleJsonInput(event),
      onBlur: (event) => this.handleJsonBlur(event),
      onPaste: (event) => this.handleJsonPaste(event),
    });
  }

  private renderResponseFormatterTab() {
    return renderResponseFormatterTab({
      formatterJsonInput: this.formatterJsonInput,
      activeFormatterTab: this.activeFormatterTab as 'success' | 'warning' | 'error',
      successMessage: this.successMessage,
      warningMessage: this.warningMessage,
      errorMessage: this.errorMessage,
    }, {
      onJsonInput: (event) => {
        const target = event.target as HTMLTextAreaElement;
        this.formatterJsonInput = target.value;
        this.requestUpdate();
      },
      onTabChange: (type) => {
        this.activeFormatterTab = type;
        this.loadConfigIntoFields(type);
        this.requestUpdate();
      },
      renderMessageTypeConfig: (type, currentConfig, parsedJson) =>
        this.renderMessageTypeConfig(type, currentConfig, parsedJson),
    });
  }

  private renderMessageTypeConfig(type: 'success' | 'warning' | 'error', currentConfig: string, parsedJson: any) {
    const colors = {
      success: { bg: '#d4edda', text: '#155724', border: '#c3e6cb', btnBg: '#28a745', btnText: 'white' },
      warning: { bg: '#fff3cd', text: '#856404', border: '#ffeaa7', btnBg: '#ffc107', btnText: '#000' },
      error: { bg: '#f8d7da', text: '#721c24', border: '#f5c6cb', btnBg: '#dc3545', btnText: 'white' }
    };
    const color = colors[type];

    return html`
      <div style="border: 1px solid var(--ntx-form-theme-color-border); border-top: none; border-radius: 0 0 4px 4px; padding: 16px; background: var(--ntx-form-theme-color-background);">
        
        <!-- Current Configuration -->
        <div class="form-group">
          <label class="control-label">Current ${type.charAt(0).toUpperCase() + type.slice(1)} Message Configuration</label>
          <div style="position: relative;">
            <textarea 
              class="form-control" 
              readonly
              rows="4"
              .value=${currentConfig}
              style="font-family: 'Consolas', 'Monaco', 'Courier New', monospace; font-size: 12px; background: ${color.bg}; color: ${color.text}; border-color: ${color.border};"
            ></textarea>
          </div>
          <div style="font-size: 11px; color: var(--ntx-form-theme-color-secondary); margin-top: 4px;">
            ${currentConfig.trim().startsWith('{"fields"') || currentConfig.trim().startsWith('"{') ? 
              '✓ Formatted response configuration detected' : 
              '○ Plain text message'}
          </div>
        </div>

        <!-- Preview -->
        <div class="form-group">
          <label class="control-label">Preview of Current Configuration</label>
          <div style="border: 1px solid ${color.border}; border-radius: 4px; padding: 16px; background: ${color.bg}; color: ${color.text}; white-space: pre-line; min-height: 60px;">
            ${this.getPreviewForConfig(currentConfig, parsedJson)}
          </div>
        </div>

        <!-- Response Field Configurator -->
        <div class="form-group">
          <label class="control-label">Response Field Configurator</label>
          
          <!-- Message Title -->
          <div class="form-group" style="margin-bottom: 16px;">
            <label class="control-label" style="font-size: 13px; font-weight: 500;">Message Title</label>
            <input 
              type="text" 
              class="form-control"
              .value=${this.formatterMessageTitle}
              @input=${(e: Event) => {
                const target = e.target as HTMLInputElement;
                this.formatterMessageTitle = target.value;
                this.requestUpdate();
              }}
              placeholder="Leave empty to hide title header"
              style="width: 100%;"
            />
            <div style="font-size: 11px; color: var(--ntx-form-theme-color-secondary); margin-top: 4px;">
              ${this.formatterMessageTitle ? '✓ Custom title will be displayed' : '○ No title - header will be hidden'}
            </div>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
            <!-- Available Fields -->
            <div>
              <h4 style="font-size: 14px; font-weight: 600; margin-bottom: 12px; color: var(--ntx-form-theme-color-input-text);">
                Available Fields
                <label style="float: right; font-weight: normal; font-size: 12px; display: flex; align-items: center; gap: 6px;">
                  <input 
                    type="checkbox" 
                    .checked=${this.formatterUseArrayNotation || false}
                    @change=${(e: Event) => {
                      const target = e.target as HTMLInputElement;
                      this.formatterUseArrayNotation = target.checked;
                      this.requestUpdate();
                    }}
                    style="cursor: pointer;"
                  />
                  List all array items
                </label>
              </h4>
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

        ${this.formatterSelectedFields.size > 0 ? html`
          <!-- New Configuration Preview -->
          <div class="form-group">
            <label class="control-label">New Configuration Preview</label>
            <div style="border: 1px solid var(--ntx-form-theme-color-border); border-radius: 4px; padding: 16px; background: var(--ntx-form-theme-color-background-alt); white-space: pre-line;">
              ${this.renderFormattedPreview(parsedJson)}
            </div>
          </div>

          <!-- Copy New Configuration -->
          <div class="form-group">
            <label class="control-label">Copy New Configuration</label>
            <div style="position: relative;">
              <textarea 
                class="form-control" 
                readonly
                rows="4"
                .value=${generateResponseConfigQuoted(this.formatterSelectedFields, this.formatterMessageTitle)}
                style="font-family: 'Consolas', 'Monaco', 'Courier New', monospace; font-size: 12px; padding-right: 100px; background: ${color.bg}; color: ${color.text}; border-color: ${color.border};"
              ></textarea>
              <button 
                class="btn" 
                style="position: absolute; top: 8px; right: 8px; padding: 6px 16px; font-size: 13px; background: ${color.btnBg}; color: ${color.btnText || 'white'}; border: none; font-weight: 600;"
                @click=${() => {
                  const quoted = generateResponseConfigQuoted(this.formatterSelectedFields, this.formatterMessageTitle);
                  this.copyToClipboard(quoted);
                }}
                title="Copy configuration to paste into ${type.charAt(0).toUpperCase() + type.slice(1)} Message property"
              >
                📋 Copy Config
              </button>
            </div>
            <div style="font-size: 11px; color: var(--ntx-form-theme-color-secondary); margin-top: 4px;">
              Copy this and paste into the <strong>${type.charAt(0).toUpperCase() + type.slice(1)} Message</strong> property in Plugin Properties
            </div>
          </div>
        ` : ''}
      </div>
    `;
  }

  private getPreviewForConfig(config: string, parsedJson: any): any {
    if (!config || config.trim().length === 0) {
      return html`<span style="font-style: italic; opacity: 0.6;">No configuration set</span>`;
    }

    // Store current value temporarily
    const originalValue = this.value;
    
    // Create temporary value with the parsedJson as data
    const tempValue = {
      ...this.value,
      data: JSON.stringify(parsedJson)
    };
    
    this.value = tempValue;
    
    // Get the formatted message
    let preview: string;
    if (config.trim().startsWith('{"fields"') || config.trim().startsWith('"{')) {
      // It's a formatted config
      try {
        let parsedConfig;
        if (config.startsWith('"{') && config.endsWith('}"')) {
          const unquoted = config.slice(1, -1).replace(/\\"/g, '"');
          parsedConfig = JSON.parse(unquoted);
        } else {
          parsedConfig = JSON.parse(config);
        }
        preview = formatResponseWithConfig(parsedConfig, this.value.data);
      } catch (e) {
        preview = config; // Fall back to plain text
      }
    } else {
      // Plain text
      preview = config;
    }
    
    // Restore original value
    this.value = originalValue;
    
    return preview;
  }

  private loadConfigIntoFields(type: 'success' | 'warning' | 'error') {
    const config = type === 'success' ? this.successMessage : 
                   type === 'warning' ? this.warningMessage : 
                   this.errorMessage;
    
    // Clear existing selections and title
    this.formatterSelectedFields.clear();
    this.formatterMessageTitle = '';
    
    if (!config || config.trim().length === 0) {
      this.requestUpdate();
      return;
    }
    
    // Try to parse the config
    try {
      const parsedConfig = parseResponseFormatterConfig(config);
      if (!parsedConfig) {
        // Plain text, nothing to load
        this.requestUpdate();
        return;
      }
      
      // Load title from config
      if (parsedConfig.title) {
        this.formatterMessageTitle = parsedConfig.title;
      }
      
      // Load fields from config
      if (parsedConfig.fields && Array.isArray(parsedConfig.fields)) {
        parsedConfig.fields.forEach((field: any, index: number) => {
          this.formatterSelectedFields.set(field.path, {
            title: field.title || field.path,
            checked: true,
            order: index
          });
        });
      }
    } catch (e) {
      console.error('[Config Loading] Failed to parse config:', e);
    }
    
    this.requestUpdate();
  }

  private renderAvailableFields(obj: any, path: string): any {
    const fields = collectAvailableFormatterFields(obj, path, this.formatterUseArrayNotation);
    if (fields.length === 0) {
      return html`<div style="color: var(--ntx-form-theme-color-secondary); font-style: italic; padding: 12px; text-align: center;">No fields available</div>`;
    }

    return fields.map((field) => {
      const isChecked = this.formatterSelectedFields.get(field.path)?.checked || false;
      return html`
        <div style="display: flex; align-items: flex-start; margin-bottom: 10px; padding: 8px; border-radius: 4px; background: ${isChecked ? 'var(--ntx-form-theme-color-primary-light, #e3f2fd)' : 'transparent'}; transition: background 0.2s;">
          <input
            type="checkbox"
            .checked=${isChecked}
            @change=${(event: Event) => {
              const target = event.target as HTMLInputElement;
              toggleFormatterField(this.formatterSelectedFields, field.path, target.checked, field.title);
              this.requestUpdate();
            }}
            style="width: 18px; height: 18px; cursor: pointer; margin-top: 2px; flex-shrink: 0;"
          />
          <div style="flex: 1; margin-left: 10px; min-width: 0;">
            <div style="font-weight: 500; margin-bottom: 4px; word-break: break-word;">
              <code style="background: var(--ntx-form-theme-color-background-alt); padding: 2px 6px; border-radius: 3px; font-size: 12px;">${field.path}</code>
              ${field.kind === 'array' ? html`<span style="margin-left: 6px; font-size: 11px; color: var(--ntx-form-theme-color-secondary);">📋 Array</span>` : ''}
            </div>
            <div style="font-size: 11px; color: var(--ntx-form-theme-color-secondary); word-break: break-word;">
              ${field.preview}
            </div>
          </div>
        </div>
      `;
    });
  }

  private renderSelectedFieldsList(): any {
    return renderSelectedFieldsList(getSortedSelectedFields(this.formatterSelectedFields), {
      onReorder: (fromIndex, toIndex) => {
        reorderFormatterFields(this.formatterSelectedFields, fromIndex, toIndex);
        this.requestUpdate();
      },
      onTitleChange: (fieldKey, title) => {
        updateFormatterFieldTitle(this.formatterSelectedFields, fieldKey, title);
        this.requestUpdate();
      },
      onRemove: (fieldKey) => {
        removeFormatterField(this.formatterSelectedFields, fieldKey);
        this.requestUpdate();
      },
    });
  }

  private renderFormattedPreview(obj: any) {
    return renderFormattedPreview(this.formatterSelectedFields, obj);
  }

  private formatJson(): void {
    const formatted = formatJsonEditorValue(this.requestBody);
    if (formatted === null) return;
    this.requestBody = formatted;
    this.requestUpdate();
  }

  private minifyJson(): void {
    const minified = minifyJsonEditorValue(this.requestBody);
    if (minified === null) return;
    this.requestBody = minified;
    this.requestUpdate();
  }

  private clearJson(): void {
    this.requestBody = '';
    this.requestUpdate();
  }

  private insertSampleJson(): void {
    this.requestBody = createSampleJson(Date.now());
    this.requestUpdate();
  }

  private handleJsonInput(e: Event): void {
    const target = e.target as HTMLTextAreaElement;
    this.requestBody = target.value;
    this.requestUpdate();
  }

  private handleJsonBlur(e: Event): void {
    // Auto-format valid JSON on blur
    if (isValidJson(this.requestBody) && this.requestBody.trim()) {
      try {
        const parsed = JSON.parse(this.requestBody);
        const formatted = JSON.stringify(parsed, null, 2);
        if (formatted !== this.requestBody) {
          this.requestBody = formatted;
          this.requestUpdate();
        }
      } catch {
        // Don't auto-format if invalid
      }
    }
  }

  private handleJsonPaste(e: ClipboardEvent): void {
    // Auto-format pasted JSON after a short delay
    setTimeout(() => {
      if (isValidJson(this.requestBody)) {
        this.formatJson();
      }
    }, 100);
  }

  // Recursively remove keys with instructional placeholder values
  private static removeInstructionalPlaceholders(obj: any): any {
    if (Array.isArray(obj)) {
      return obj.map(item => this.removeInstructionalPlaceholders(item));
    } else if (obj && typeof obj === 'object') {
      const result: any = {};
      for (const [key, value] of Object.entries(obj)) {
        if (
          typeof value === 'string' &&
          /^<.*>$/.test(value.trim())
        ) {
          // skip this key (remove it)
          continue;
        }
        const cleaned = this.removeInstructionalPlaceholders(value);
        if (
          cleaned !== undefined &&
          !(typeof cleaned === 'object' && cleaned !== null && Object.keys(cleaned).length === 0)
        ) {
          result[key] = cleaned;
        }
      }
      return result;
    }
    return obj;
  }

  private getRequestTimeoutSeconds(): number | null {
    const timeout = Number(this.requestTimeout);
    return Number.isFinite(timeout) && timeout > 0 ? timeout : null;
  }

  private setRequestConfigurationError(message: string): void {
    const executionTime = Date.now() - this.apiCallStartTime;
    const timestamp = new Date().toISOString();
    this.responseType = 'error';
    this.apiResponse = message;
    const formattedResponse = this.getCustomMessage('error').message;
    this.value = createConfigurationErrorValue(message, formattedResponse, timestamp, executionTime);
    this.requestUpdate();
  }

  private async handleApiCall() {
    if (this.isLoading) return;
    
    // Record the time of this API call and start execution timer
    this.lastApiCallTime = Date.now();
    this.apiCallStartTime = Date.now();
    
    this.responseType = null;
    this.apiResponse = '';

    // Validate and prepare the request body before obtaining credentials or
    // contacting the API. Invalid JSON must never become a silent empty body.
    const preparedBody = prepareRequestBody(this.contentType, this.requestBody);
    if (preparedBody.error) {
      this.setRequestConfigurationError(`Request body is not valid JSON: ${preparedBody.error}`);
      return;
    }
    const actualBody = preparedBody.body;
    
    // If OAuth credentials are provided, fetch token first
    let accessToken = this.bearerToken;
    if (this.tokenUrl && this.clientId && this.clientSecret) {
      try {
        const tokenResult = await requestOAuthToken({
          tokenUrl: this.tokenUrl,
          clientId: this.clientId,
          clientSecret: this.clientSecret,
          timeoutSeconds: this.getRequestTimeoutSeconds(),
        });
        accessToken = tokenResult.accessToken;
        this.oauthTokenResponse = tokenResult.debugMetadata;
      } catch (error) {
        // Token fetch failed, set error response
        const executionTime = Date.now() - this.apiCallStartTime;
        const timestamp = new Date().toISOString();
        this.responseType = 'error';
        this.apiResponse = `OAuth token fetch failed: ${error instanceof Error ? error.message : String(error)}`;
        this.value = {
          success: false,
          valid: false,
          statusCode: 401,
          responseType: 'error',
          data: this.apiResponse,
          message: '',
          formattedResponse: this.errorMessage,
          timestamp: timestamp,
          executionTime: executionTime
        };
        // Note: ntx-value-change event is automatically dispatched by value setter
        this.isLoading = false;
        this.requestUpdate();
        return;
      }
    }
    
    const url = this.apiUrl || '';
    const headers = parseRequestHeaders(this.requestHeaders);
    
    // Add Bearer token to Authorization header if provided
    if (accessToken && accessToken.trim()) {
      headers['Authorization'] = `Bearer ${accessToken.trim()}`;
    }
    
    await callApi({
      url,
      method: this.method || 'POST',
      headers,
      requestBody: actualBody,
      contentType: this.contentType,
      timeoutSeconds: this.getRequestTimeoutSeconds() ?? 0,
      setLoading: (loading: boolean) => { 
        this.isLoading = loading; 
        this.requestUpdate(); 
      },
      setResponse: (response: string, statusCode?: number, success?: boolean) => { 
        const executionTime = Date.now() - this.apiCallStartTime;
        const timestamp = new Date().toISOString();
        
        this.apiResponse = response;
        this.responseType = success === false ? 'error' : determineResponseType(response);
        
        // Auto-populate Response Formatter with the API response
        this.formatterJsonInput = response;
        this.formatterSelectedFields.clear(); // Clear previous selections
        
        // Interpret optional JSON fields without changing response publication timing.
        const interpretedResponse = interpretApiResponse(response, success, this.outputValueKey);
        const { accessToken, output: customOutput, message: responseMessage } = interpretedResponse;
        this.responseType = interpretedResponse.responseType;
        
        // Get formatted response message
        const formattedResponseData = this.getCustomMessage(this.responseType);
        
        // Create structured value object
        const isTrueSuccess = success === true && this.responseType === 'success';
        this.value = createApiResponseValue({
          success: success === true,
          responseType: this.responseType,
          statusCode,
          data: response,
          message: responseMessage,
          formattedResponse: formattedResponseData.message,
          timestamp,
          executionTime,
          accessToken,
          output: customOutput,
        });
        
        // Mark as successful call only on strict success.
        if (isTrueSuccess) {
          this.hasSuccessfulCall = true;
        }
        
        // Note: ntx-value-change event is automatically dispatched by value setter
        console.log('[Value Change] Value updated at:', new Date().toISOString());
        
        this.requestUpdate();
        
        // After value change event is dispatched (happens in setter), wait for Nintex to process it
        // then trigger post-submission action if needed
        const isSuccessResponse = isTrueSuccess;
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
  }

  private async copyToClipboard(text: string): Promise<void> {
    try {
      await navigator.clipboard.writeText(text);
      // Could add a toast notification here if desired
    } catch (err) {
      console.error('Failed to copy text:', err);
    }
  }

  private handlePostSubmissionAction(): void {
    this.submissionScheduler.handlePostSubmissionAction(this.submissionAction);
  }

  private submitNintexForm(): void {
    console.log('[Submission Action] Attempting to submit Nintex form');
    if (!this.containingForm) {
      console.error('[Submission Action] No coordinated form found');
      return;
    }

    console.log('[Submission Action] Clicking submit button');
    this.isFinalizingSubmission = true;
    const submitted = FormCoordinatorManager.submit(this.containingForm, () => {
      this.isFinalizingSubmission = false;
    });

    if (!submitted) {
      console.error('[Submission Action] No submit button found');
      this.isFinalizingSubmission = false;
    }
  }

  // Cleanup timer when component is destroyed
  disconnectedCallback() {
    super.disconnectedCallback();
    this.submissionScheduler.dispose();
    this.validationModule.detach();
    this.unregisterFromContainingForm();
    this.removeErrorMessageSuppressStyle();
  }

  private static readonly ERROR_SUPPRESS_STYLE_ID = 'daf-webrequest-suppress-nx-error';

  private injectErrorMessageSuppressStyle(): void {
    if (document.getElementById(DafWebRequestPlugin.ERROR_SUPPRESS_STYLE_ID)) return;
    const style = document.createElement('style');
    style.id = DafWebRequestPlugin.ERROR_SUPPRESS_STYLE_ID;
    style.textContent = '.form-group:has(daf-webrequest-plugin) .nx-error-message { display: none !important; }';
    document.head.appendChild(style);
  }

  private removeErrorMessageSuppressStyle(): void {
    // Only remove if no other instances remain in the document
    if (document.querySelectorAll('daf-webrequest-plugin').length === 0) {
      document.getElementById(DafWebRequestPlugin.ERROR_SUPPRESS_STYLE_ID)?.remove();
    }
  }
}
