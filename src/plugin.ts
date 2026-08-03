import { html, LitElement, css } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { callApi } from './apiClient.js';
import { customElement, property } from 'lit/decorators.js';
import { PluginContract, PropType, pluginContractSchema } from '@nintex/form-plugin-contract';
import { ValidationModule } from './validation.module.js';
import { prepareRequestBody, parseRequestHeaders } from './utils/request.js';
import { determineResponseType, extractNestedValue } from './utils/response.js';
import { formatJsonForDisplay, formatValue, getJsonStatus, isValidJson } from './utils/json.js';
import { FormCoordinatorManager } from './forms/form-coordinator.js';
import { SubmissionScheduler } from './forms/submission-scheduler.js';

const PLUGIN_VERSION = '1.1.8';
const SENSITIVE_DEBUG_PROPERTIES = new Set(['clientSecret']);

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

@customElement('daf-webrequest-plugin')
export class DafWebRequestPlugin extends LitElement {
  static styles = css`
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

    .alert-before {
      margin-top: 0;
      margin-bottom: 12px;
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
      border-top: 1px solid rgba(0, 0, 0, 0.1);
      font-family: 'Courier New', Courier, monospace;
      font-size: 12px;
      white-space: pre-wrap;
      word-break: break-all;
    }

    .alert-more-details {
      margin-top: 12px;
      padding-top: 12px;
      border-top: 1px solid rgba(0, 0, 0, 0.1);
    }

    .alert-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 12px;
      padding-top: 12px;
      border-top: 1px solid rgba(0, 0, 0, 0.1);
      gap: 12px;
    }

    .alert-footer-left {
      flex: 0 1 auto;
    }

    .alert-footer-right {
      flex: 0 0 auto;
      font-size: 12px;
      font-style: italic;
      color: inherit;
      opacity: 0.9;
    }

    .alert-more-details-toggle {
      color: inherit;
      text-decoration: underline;
      cursor: pointer;
      font-size: 13px;
      font-weight: 500;
      background: none;
      border: none;
      padding: 0;
      font-family: inherit;
      display: inline-flex;
      align-items: center;
      gap: 4px;
    }

    .alert-more-details-toggle:hover {
      opacity: 0.8;
    }

    .alert-more-details-content {
      margin-top: 8px;
      padding: 8px;
      background: rgba(0, 0, 0, 0.05);
      border-radius: 4px;
      max-height: 200px;
      overflow-y: auto;
      font-family: 'Courier New', Courier, monospace;
      font-size: 11px;
      white-space: pre-wrap;
      word-break: break-all;
    }

    .alert-more-details-wrapper {
      position: relative
    }

    .alert-more-details-copy {
      position: absolute;
      top: 8px;
      right: 20px;
      color: inherit;
      text-decoration: underline;
      cursor: pointer;
      font-size: 11px;
      font-weight: 500;
      background: white;
      padding: 2px 6px;
      border-radius: 3px;
      opacity: 0.8;
      transition: opacity 0.2s ease;
    }

    .alert-more-details-copy:hover {
      opacity: 1;
    }

    /* Modal Styles */
    .modal-overlay {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.5);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 10000;
      animation: fadeIn 0.2s ease;
    }

    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }

    .modal-content {
      background: white;
      border-radius: var(--ntx-form-theme-border-radius, 4px);
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
      width: 80%;
      min-width: 600px;
      max-width: 800px;
      max-height: 80vh;
      overflow-y: auto;
      animation: slideIn 0.3s ease;
      margin: 20px;
      position: relative;
      padding: 16px;
    }

    @media (max-width: 768px) {
      .modal-content {
        width: 80%;
        min-width: unset;
        max-width: unset;
      }
    }

    @keyframes slideIn {
      from {
        transform: translateY(-20px);
        opacity: 0;
      }
      to {
        transform: translateY(0);
        opacity: 1;
      }
    }

    .modal-close {
      position: absolute;
      top: 8px;
      right: 8px;
      background: white;
      border: none;
      font-size: 24px;
      line-height: 1;
      cursor: pointer;
      color: var(--ntx-form-theme-color-secondary, #6c757d);
      padding: 0;
      width: 30px;
      height: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      transition: background 0.2s ease;
      z-index: 1;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    .modal-close:hover {
      background: var(--ntx-form-theme-color-background-alt, #f8f9fa);
    }

    .modal-content .alert {
      margin-top: 0;
    }

    /* Inline Alert Styles */
    .btn-alert-container {
      display: flex;
      gap: 12px;
    }

    .btn-alert-container.align-left {
      justify-content: flex-start;
      align-items: flex-start;
    }

    .btn-alert-container.align-center {
      justify-content: center;
      align-items: flex-start;
    }

    .btn-alert-container.align-right {
      justify-content: flex-end;
      align-items: flex-start;
    }

    .inline-alert {
      flex: 1;
      max-width: 400px;
    }

    .inline-alert.center {
      max-width: 300px;
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

    .debug-version {
      margin-bottom: var(--ntx-form-theme-spacing-sm, 8px);
      font-family: 'Courier New', Courier, monospace;
      font-size: 12px;
      color: var(--ntx-form-theme-color-secondary, #6c757d);
      opacity: 0.9;
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

  // Add private property to track active debug tab
  private activeDebugTab: string = 'properties';
  private activeFormatterTab: string = 'success';
  private formatterJsonInput: string = '';
  private formatterSelectedFields: Map<string, { title: string; checked: boolean; order: number }> = new Map();
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

  static getMetaConfig(): PluginContract {
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
    // Check if there's any alert content to show
    const now = Date.now();
    const timeSinceLastCall = now - this.lastApiCallTime;
    const cooldownMs = this.countdownTimer * 1000;
    const inCooldown = this.countdownEnabled && this.lastApiCallTime > 0 && timeSinceLastCall < cooldownMs;
    
    if (inCooldown && this.showCooldownAlert) return true;
    if (!this.apiResponse || !this.responseType) return false;
    if (this.lastCooldownAlertTime > this.lastApiCallTime) return false;
    
    return true;
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
                <div class="alert-more-details-content">${this.formatRawResponse()}</div>
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
            ${unsafeHTML(this.formatMessageWithBoldLabels(this.value.message))}
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
              <div class="alert-more-details-content">${this.formatRawResponse()}</div>
            </div>
          ` : ''}
        ` : ''}
      </div>
    `;
  }

  private formatMessageWithBoldLabels(message: string): string {
    if (!message) return '';
    
    // Split by lines and process each line
    const lines = message.split('\n');
    const formattedLines = lines.map(line => {
      // Match pattern "Label: Value" where label is at the start of the line
      const match = line.match(/^([^:]+):\s*(.*)$/);
      if (match) {
        const label = match[1].trim();
        const value = match[2];
        return `<strong>${label}:</strong> ${value}`;
      }
      return line;
    });
    
    return formattedLines.join('<br>');
  }

  private getAlertIcon(type: 'success' | 'warning' | 'error'): string {
    switch (type) {
      case 'success': return '✓';
      case 'warning': return '⚠';
      case 'error': return '✗';
      default: return '•';
    }
  }

  private shouldShowMoreDetails(responseType: string): boolean {
    if (this.showMoreDetails === 'Never') return false;
    if (this.showMoreDetails === 'Always') return true;
    if (this.showMoreDetails === 'On Error/Warning') {
      return responseType === 'error' || responseType === 'warning';
    }
    return false;
  }

  private toggleDetailsExpanded() {
    this.detailsExpanded = !this.detailsExpanded;
    this.requestUpdate();
  }

  private formatRawResponse(): string {
    if (!this.apiResponse) return '';
    
    try {
      // Try to parse as JSON and pretty-print with indentation
      const parsed = JSON.parse(this.apiResponse);
      return JSON.stringify(parsed, null, 2);
    } catch (e) {
      // If not valid JSON, return as-is
      return this.apiResponse;
    }
  }

  private copyRawResponseToClipboard() {
    const content = this.formatRawResponse();
    this.copyToClipboard(content);
  }

  private getCustomMessage(type: 'success' | 'warning' | 'error'): { title: string | null, message: string } {
    let messageConfig: string;
    switch (type) {
      case 'success': messageConfig = this.successMessage; break;
      case 'warning': messageConfig = this.warningMessage; break;
      case 'error': messageConfig = this.errorMessage; break;
      default: messageConfig = 'Unknown response type';
    }
    
    // Check if messageConfig is a Response Format Configuration JSON (quoted format: "{...}")
    if (messageConfig.startsWith('"{') && messageConfig.endsWith('}"')) {
      try {
        // Remove outer quotes and unescape
        const unquoted = messageConfig.slice(1, -1).replace(/\\"/g, '"');
        const config = JSON.parse(unquoted);
        
        // Format response using config
        return {
          title: config.title || null,
          message: this.formatResponseWithConfig(config)
        };
      } catch (e) {
        console.error('[Message Formatting] Failed to parse quoted config:', e);
        return { title: null, message: messageConfig }; // Fall back to showing the raw message
      }
    }
    
    // Check if messageConfig is a Response Format Configuration JSON (unquoted format: {...})
    if (messageConfig.trim().startsWith('{"')) {
      try {
        const config = JSON.parse(messageConfig);
        
        // Format response using config
        return {
          title: config.title || null,
          message: this.formatResponseWithConfig(config)
        };
      } catch (e) {
        console.error('[Message Formatting] Failed to parse unquoted config:', e);
        return { title: null, message: messageConfig }; // Fall back to showing the raw message
      }
    }
    
    // Return plain text message with no custom title
    return { title: null, message: messageConfig };
  }

  private formatResponseWithConfig(config: any): string {
    if (!config.fields || !Array.isArray(config.fields)) {
      return 'Invalid configuration format';
    }
    
    // Parse the response data
    let responseData: any;
    try {
      responseData = JSON.parse(this.value.data);
    } catch (e) {
      console.error('[Message Formatting] Failed to parse response data:', e);
      return 'Unable to parse response data';
    }
    
    // Format each field according to config
    const lines: string[] = [];
    config.fields.forEach((field: any) => {
      const value = extractNestedValue(responseData, field.path);
      
      // Handle arrays (like multiple error details)
      if (Array.isArray(value)) {
        if (value.length > 0) {
          // Check if array contains objects or primitives
          const firstItem = value[0];
          const isPrimitiveArray = typeof firstItem !== 'object' || firstItem === null;
          
          if (isPrimitiveArray) {
            // Array of primitive values (strings, numbers, etc.)
            lines.push(`${field.title}:`);
            value.forEach((item, index) => {
              lines.push(`  ${index + 1}. ${String(item)}`);
            });
          } else {
            // Array of objects - show as JSON
            lines.push(`${field.title}:`);
            value.forEach((item, index) => {
              const displayValue = JSON.stringify(item);
              lines.push(`  ${index + 1}. ${displayValue}`);
            });
          }
        } else {
          lines.push(`${field.title}: (empty)`);
        }
      } else {
        const displayValue = value !== undefined && value !== null ? String(value) : 'N/A';
        lines.push(`${field.title}: ${displayValue}`);
      }
    });
    
    return lines.join('\n');
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
    this.value = {
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
    // Get all properties dynamically from the metadata
    const metadata = (this.constructor as typeof DafWebRequestPlugin).getMetaConfig();
    const properties: Array<{ name: string; default: any; config: any }> = [];
    
    // Iterate through all properties defined in the metadata
    // Properties are maintained in declaration order (order from getMetaConfig)
    if (metadata.properties) {
      for (const [propName, propConfig] of Object.entries(metadata.properties)) {
        // Skip output-only values and secrets from the debug UI.
        if (propName === 'value' || SENSITIVE_DEBUG_PROPERTIES.has(propName)) continue;
        
        properties.push({
          name: propName,
          default: (propConfig as any).defaultValue,
          config: propConfig
        });
      }
    }
    
    // NOTE: Properties are displayed in declaration order (as defined in getMetaConfig)
    // This groups related properties together for better UX

    return html`
      <table class="debug-table">
        <thead>
          <tr>
            <th>Property</th>
            <th>Default Value</th>
            <th>Current Value</th>
          </tr>
        </thead>
        <tbody>
          ${properties.map(prop => html`
            <tr>
              <td><code class="property-name">${prop.name}</code></td>
              <td class="value-default">${formatValue(prop.default)}</td>
              <td class="value-current">${this.renderPropertyInput(prop.name, prop.config)}</td>
            </tr>
          `)}
        </tbody>
      </table>
    `;
  }

  private renderPropertyInput(propName: string, propConfig: any) {
    const currentValue = (this as any)[propName];
    const propType = propConfig.type;

    // Boolean type - display as Yes/No
    if (propType === 'boolean') {
      return html`
        <span style="font-weight: 500; color: ${currentValue ? '#28a745' : '#dc3545'};">
          ${currentValue ? '✓ Yes' : '✗ No'}
        </span>
      `;
    }

    // String type - mask sensitive properties and display
    if (propType === 'string') {
      const displayValue = (propName === 'bearerToken' || propName === 'clientSecret') && currentValue && currentValue.length > 0
        ? '***' + currentValue.slice(-4)
        : currentValue;

      // Truncate long strings
      const truncated = displayValue && displayValue.length > 100 
        ? displayValue.substring(0, 100) + '...' 
        : displayValue;

      return html`
        <span style="font-family: 'Courier New', monospace; font-size: 12px; word-break: break-all;">
          ${truncated || '<empty>'}
        </span>
      `;
    }

    // Number type - display as number
    if (propType === 'number' || propType === 'integer') {
      return html`
        <span style="font-weight: 500;">
          ${currentValue}
        </span>
      `;
    }

    // Default fallback - just display the value
    return html`<span>${formatValue(currentValue)}</span>`;
  }

  private renderRequestDetailsTab() {
    return html`
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
          ${this.oauthTokenResponse ? html`
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
              ${this.requestHeaders ? html`
                <div class="debug-json-container">
                  <button 
                    class="debug-json-copy-btn"
                    @click=${() => this.copyToClipboard(formatJsonForDisplay(this.requestHeaders))}
                    title="Copy to clipboard"
                  >
                    📋 Copy
                  </button>
                  <pre class="debug-json">${formatJsonForDisplay(this.requestHeaders)}</pre>
                </div>
              ` : '<not set>'}
            </td>
          </tr>
          <tr>
            <td><code>requestBody</code></td>
            <td>
              ${this.requestBody ? html`
                <div class="debug-json-container">
                  <button 
                    class="debug-json-copy-btn"
                    @click=${() => this.copyToClipboard(formatJsonForDisplay(this.requestBody))}
                    title="Copy to clipboard"
                  >
                    📋 Copy
                  </button>
                  <pre class="debug-json">${formatJsonForDisplay(this.requestBody)}</pre>
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
          ${this.apiResponse ? html`
            <tr>
              <td><code>Response</code></td>
              <td>
                <div class="debug-json-container">
                  <button 
                    class="debug-json-copy-btn"
                    @click=${() => this.copyToClipboard(formatJsonForDisplay(this.apiResponse))}
                    title="Copy to clipboard"
                  >
                    📋 Copy
                  </button>
                  <pre class="debug-json">${formatJsonForDisplay(this.apiResponse)}</pre>
                </div>
              </td>
            </tr>
          ` : ''}
        </tbody>
      </table>
    `;
  }

  private renderAPIToolsTab() {
    const requestBodyIsValid = isValidJson(this.requestBody);
    const jsonStatus = getJsonStatus(this.requestBody);

    return html`
      <div class="debug-tools">
        <div class="form-group">
          <label class="control-label">JSON Request Body Editor</label>
          <div class="json-editor-container">
            <div class="json-editor-toolbar">
              <div class="json-editor-actions">
                <button 
                  class="json-editor-btn" 
                  @click=${this.formatJson}
                  ?disabled=${!requestBodyIsValid}
                  title="Format and beautify JSON"
                >
                  ✨ Format
                </button>
                <button 
                  class="json-editor-btn" 
                  @click=${this.minifyJson}
                  ?disabled=${!requestBodyIsValid}
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
              <div class="json-editor-status ${requestBodyIsValid ? 'valid' : 'invalid'}">
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

  private renderResponseFormatterTab() {
    const hasJsonInput = this.formatterJsonInput.trim().length > 0;
    const formatterJsonIsValid = hasJsonInput && isValidJson(this.formatterJsonInput);
    
    let parsedJson: any = null;
    let jsonError = '';
    
    if (hasJsonInput) {
      try {
        parsedJson = JSON.parse(this.formatterJsonInput);
      } catch (e) {
        jsonError = (e as Error).message;
      }
    }

    return html`
      <div class="debug-tools">
        <div class="form-group">
          <label class="control-label">Paste Response JSON</label>
          <textarea 
            class="form-control" 
            rows="8"
            .value=${this.formatterJsonInput}
            @input=${(e: Event) => {
              const target = e.target as HTMLTextAreaElement;
              this.formatterJsonInput = target.value;
              this.requestUpdate();
            }}
            placeholder="Paste your API response JSON here (for success, error, or warning responses)..."
            style="font-family: 'Consolas', 'Monaco', 'Courier New', monospace; font-size: 13px;"
          ></textarea>
          ${jsonError ? html`<div class="text-danger" style="margin-top: 8px;">${jsonError}</div>` : ''}
        </div>

        ${formatterJsonIsValid && parsedJson ? html`
          <!-- Message Type Tabs -->
          <div class="debug-tab-nav" style="margin-bottom: 0;">
            <button 
              class="debug-tab-button ${this.activeFormatterTab === 'success' ? 'active' : ''}"
              @click=${() => {
                this.activeFormatterTab = 'success';
                this.loadConfigIntoFields('success');
                this.requestUpdate();
              }}
            >
              ✓ Success Message
            </button>
            <button 
              class="debug-tab-button ${this.activeFormatterTab === 'warning' ? 'active' : ''}"
              @click=${() => {
                this.activeFormatterTab = 'warning';
                this.loadConfigIntoFields('warning');
                this.requestUpdate();
              }}
            >
              ⚠ Warning Message
            </button>
            <button 
              class="debug-tab-button ${this.activeFormatterTab === 'error' ? 'active' : ''}"
              @click=${() => {
                this.activeFormatterTab = 'error';
                this.loadConfigIntoFields('error');
                this.requestUpdate();
              }}
            >
              ✕ Error Message
            </button>
          </div>

          <!-- Success Tab Content -->
          <div class="debug-tab-content ${this.activeFormatterTab === 'success' ? 'active' : ''}">
            ${this.renderMessageTypeConfig('success', this.successMessage, parsedJson)}
          </div>

          <!-- Warning Tab Content -->
          <div class="debug-tab-content ${this.activeFormatterTab === 'warning' ? 'active' : ''}">
            ${this.renderMessageTypeConfig('warning', this.warningMessage, parsedJson)}
          </div>

          <!-- Error Tab Content -->
          <div class="debug-tab-content ${this.activeFormatterTab === 'error' ? 'active' : ''}">
            ${this.renderMessageTypeConfig('error', this.errorMessage, parsedJson)}
          </div>
        ` : ''}
      </div>
    `;
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
                .value=${this.generateResponseConfigQuoted()}
                style="font-family: 'Consolas', 'Monaco', 'Courier New', monospace; font-size: 12px; padding-right: 100px; background: ${color.bg}; color: ${color.text}; border-color: ${color.border};"
              ></textarea>
              <button 
                class="btn" 
                style="position: absolute; top: 8px; right: 8px; padding: 6px 16px; font-size: 13px; background: ${color.btnBg}; color: ${color.btnText || 'white'}; border: none; font-weight: 600;"
                @click=${() => {
                  const quoted = this.generateResponseConfigQuoted();
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
        preview = this.formatResponseWithConfig(parsedConfig);
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
      let parsedConfig;
      
      // Handle quoted format
      if (config.startsWith('"{') && config.endsWith('}"')) {
        const unquoted = config.slice(1, -1).replace(/\\"/g, '"');
        parsedConfig = JSON.parse(unquoted);
      } 
      // Handle unquoted format
      else if (config.trim().startsWith('{"')) {
        parsedConfig = JSON.parse(config);
      } else {
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
    const fields: any[] = [];
    
    const processObject = (current: any, currentPath: string) => {
      if (current && typeof current === 'object' && !Array.isArray(current)) {
        Object.keys(current).forEach(key => {
          const fullPath = currentPath ? `${currentPath}.${key}` : key;
          const value = current[key];
          
          // Handle arrays with [*] notation
          if (Array.isArray(value) && value.length > 0) {
            // Only show array notation option if the checkbox is enabled
            if (this.formatterUseArrayNotation) {
              const fieldKey = `${fullPath}[*]`;
              const isChecked = this.formatterSelectedFields.get(fieldKey)?.checked || false;
              const previewValue = `Array with ${value.length} item${value.length > 1 ? 's' : ''}`;
              
              fields.push(html`
                <div style="display: flex; align-items: flex-start; margin-bottom: 10px; padding: 8px; border-radius: 4px; background: ${isChecked ? 'var(--ntx-form-theme-color-primary-light, #e3f2fd)' : 'transparent'}; transition: background 0.2s;">
                  <input 
                    type="checkbox" 
                    .checked=${isChecked}
                    @change=${(e: Event) => {
                      const target = e.target as HTMLInputElement;
                      if (target.checked) {
                        let maxOrder = -1;
                        this.formatterSelectedFields.forEach(field => {
                          if (field.order > maxOrder) maxOrder = field.order;
                        });
                        this.formatterSelectedFields.set(fieldKey, { 
                          title: key, 
                          checked: true,
                          order: maxOrder + 1
                        });
                      } else {
                        this.formatterSelectedFields.delete(fieldKey);
                      }
                      this.requestUpdate();
                    }}
                    style="width: 18px; height: 18px; cursor: pointer; margin-top: 2px; flex-shrink: 0;"
                  />
                  <div style="flex: 1; margin-left: 10px; min-width: 0;">
                    <div style="font-weight: 500; margin-bottom: 4px; word-break: break-word;">
                      <code style="background: var(--ntx-form-theme-color-background-alt); padding: 2px 6px; border-radius: 3px; font-size: 12px;">${fieldKey}</code>
                      <span style="margin-left: 6px; font-size: 11px; color: var(--ntx-form-theme-color-secondary);">📋 Array</span>
                    </div>
                    <div style="font-size: 11px; color: var(--ntx-form-theme-color-secondary); word-break: break-word;">
                      ${previewValue}
                    </div>
                  </div>
                </div>
              `);
            }
            
            // Always process first item to show available fields within array items
            if (typeof value[0] === 'object' && !Array.isArray(value[0])) {
              // For array items, show both [0] notation and [*] notation for nested fields
              const arrayItemPath = this.formatterUseArrayNotation ? `${fullPath}[*]` : `${fullPath}[0]`;
              processObject(value[0], arrayItemPath);
            }
          } else if (value !== null && typeof value !== 'object') {
            // Show leaf values
            const fieldKey = fullPath;
            const isChecked = this.formatterSelectedFields.get(fieldKey)?.checked || false;
            
            fields.push(html`
              <div style="display: flex; align-items: flex-start; margin-bottom: 10px; padding: 8px; border-radius: 4px; background: ${isChecked ? 'var(--ntx-form-theme-color-primary-light, #e3f2fd)' : 'transparent'}; transition: background 0.2s;">
                <input 
                  type="checkbox" 
                  .checked=${isChecked}
                  @change=${(e: Event) => {
                    const target = e.target as HTMLInputElement;
                    if (target.checked) {
                      let maxOrder = -1;
                      this.formatterSelectedFields.forEach(field => {
                        if (field.order > maxOrder) maxOrder = field.order;
                      });
                      this.formatterSelectedFields.set(fieldKey, { 
                        title: fieldKey.split('.').pop() || fieldKey, 
                        checked: true,
                        order: maxOrder + 1
                      });
                    } else {
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
          } else if (value && typeof value === 'object' && !Array.isArray(value)) {
            // Recursively process nested objects
            processObject(value, fullPath);
          }
        });
      }
    };
    
    processObject(obj, path);
    return fields.length > 0 ? fields : html`<div style="color: var(--ntx-form-theme-color-secondary); font-style: italic; padding: 12px; text-align: center;">No fields available</div>`;
  }

  private renderSelectedFieldsList(): any {
    // Sort fields by order
    const sortedFields = Array.from(this.formatterSelectedFields.entries())
      .filter(([_, config]) => config.checked)
      .sort((a, b) => a[1].order - b[1].order);

    if (sortedFields.length === 0) {
      return html`<div style="color: var(--ntx-form-theme-color-secondary); font-style: italic; padding: 12px; text-align: center;">No fields selected. Check fields from the left panel.</div>`;
    }

    return sortedFields.map(([fieldKey, config], index) => html`
      <div 
        draggable="true"
        @dragstart=${(e: DragEvent) => {
          e.dataTransfer!.effectAllowed = 'move';
          e.dataTransfer!.setData('text/plain', index.toString());
        }}
        @dragover=${(e: DragEvent) => {
          e.preventDefault();
          e.dataTransfer!.dropEffect = 'move';
        }}
        @drop=${(e: DragEvent) => {
          e.preventDefault();
          const fromIndex = parseInt(e.dataTransfer!.getData('text/plain'));
          const toIndex = index;
          
          if (fromIndex !== toIndex) {
            // Reorder the fields
            const reorderedFields = Array.from(sortedFields);
            const [movedItem] = reorderedFields.splice(fromIndex, 1);
            reorderedFields.splice(toIndex, 0, movedItem);
            
            // Update orders
            reorderedFields.forEach(([key, cfg], idx) => {
              this.formatterSelectedFields.set(key, { ...cfg, order: idx });
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
        @mouseenter=${(e: MouseEvent) => {
          (e.currentTarget as HTMLElement).style.borderColor = 'var(--ntx-form-theme-color-primary)';
          (e.currentTarget as HTMLElement).style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
        }}
        @mouseleave=${(e: MouseEvent) => {
          (e.currentTarget as HTMLElement).style.borderColor = 'var(--ntx-form-theme-color-border)';
          (e.currentTarget as HTMLElement).style.boxShadow = 'none';
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
            @input=${(e: Event) => {
              const target = e.target as HTMLInputElement;
              this.formatterSelectedFields.set(fieldKey, { ...config, title: target.value });
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
          @mouseenter=${(e: MouseEvent) => {
            (e.currentTarget as HTMLElement).style.filter = 'brightness(0.9)';
          }}
          @mouseleave=${(e: MouseEvent) => {
            (e.currentTarget as HTMLElement).style.filter = 'brightness(1)';
          }}
          title="Remove field"
        >
          ✕
        </button>
      </div>
    `);
  }

  private renderFormattedPreview(obj: any): any {
    const items: any[] = [];
    
    this.formatterSelectedFields.forEach((config, key) => {
      if (config.checked) {
        const value = extractNestedValue(obj, key);
        const displayTitle = config.title || key;
        
        items.push(html`
          <div style="margin-bottom: 8px;">
            <strong>${displayTitle}:</strong> ${value !== undefined ? String(value) : 'N/A'}
          </div>
        `);
      }
    });
    
    return items.length > 0 ? items : html`<div style="color: var(--ntx-form-theme-color-secondary); font-style: italic;">No fields selected</div>`;
  }

  private generateResponseConfig(): string {
    const config: any = {};
    
    // Add title if provided
    if (this.formatterMessageTitle && this.formatterMessageTitle.trim()) {
      config.title = this.formatterMessageTitle.trim();
    }
    
    config.fields = [];
    
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

  private generateResponseConfigQuoted(): string {
    const config: any = {};
    
    // Add title if provided
    if (this.formatterMessageTitle && this.formatterMessageTitle.trim()) {
      config.title = this.formatterMessageTitle.trim();
    }
    
    config.fields = [];
    
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

  private formatJson(): void {
    if (!isValidJson(this.requestBody)) return;
    try {
      const parsed = JSON.parse(this.requestBody);
      this.requestBody = JSON.stringify(parsed, null, 2);
      this.requestUpdate();
    } catch {
      // Already validated, shouldn't happen
    }
  }

  private minifyJson(): void {
    if (!isValidJson(this.requestBody)) return;
    try {
      const parsed = JSON.parse(this.requestBody);
      this.requestBody = JSON.stringify(parsed);
      this.requestUpdate();
    } catch {
      // Already validated, shouldn't happen
    }
  }

  private clearJson(): void {
    this.requestBody = '';
    this.requestUpdate();
  }

  private insertSampleJson(): void {
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

  private renderJsonOutput() {
    if (!this.requestBody.trim()) return '';

    let minified = '';
    let escaped = '';
    let error = '';

    try {
      const parsed = JSON.parse(this.requestBody);
      minified = JSON.stringify(parsed);
      escaped = '"' + minified.replace(/\\/g, '\\\\').replace(/"/g, '\\"') + '"';
    } catch (e) {
      error = (e as Error).message;
    }

    return html`
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
        ${error ? html`<div class="text-danger" style="margin-top: 8px; font-size: 12px;">${error}</div>` : ''}
      </div>
    `;
  }

  private renderJsonPreview() {
    if (!this.requestBody.trim() || !isValidJson(this.requestBody)) return '';

    try {
      const parsed = JSON.parse(this.requestBody);
      return html`
        <div class="form-group">
          <label class="control-label">JSON Structure Preview</label>
          <div class="json-viewer">
${this.renderJsonWithSyntaxHighlight(parsed, 0)}
          </div>
        </div>
      `;
    } catch {
      return '';
    }
  }

  private renderJsonWithSyntaxHighlight(obj: any, indent: number = 0): string {
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
      if (obj.length === 0) return '<span class="json-syntax-punctuation">[]</span>';
      
      const items = obj.map(item => 
        `${spaces}  ${this.renderJsonWithSyntaxHighlight(item, indent + 1)}`
      ).join(',\n');
      
      return `<span class="json-syntax-punctuation">[</span>\n${items}\n${spaces}<span class="json-syntax-punctuation">]</span>`;
    }
    
    if (typeof obj === 'object') {
      const keys = Object.keys(obj);
      if (keys.length === 0) return '<span class="json-syntax-punctuation">{}</span>';
      
      const items = keys.map(key => 
        `${spaces}  <span class="json-syntax-key">"${key}"</span><span class="json-syntax-punctuation">:</span> ${this.renderJsonWithSyntaxHighlight(obj[key], indent + 1)}`
      ).join(',\n');
      
      return `<span class="json-syntax-punctuation">{</span>\n${items}\n${spaces}<span class="json-syntax-punctuation">}</span>`;
    }
    
    return String(obj);
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

  private async fetchOAuthToken(): Promise<string> {
    const timeoutSeconds = this.getRequestTimeoutSeconds();
    const controller = new AbortController();
    let timedOut = false;
    const timeoutId = timeoutSeconds === null
      ? null
      : window.setTimeout(() => {
        timedOut = true;
        controller.abort();
      }, timeoutSeconds * 1000);

    try {
      const response = await fetch(this.tokenUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          grant_type: 'client_credentials',
          client_id: this.clientId,
          client_secret: this.clientSecret,
        }),
        signal: controller.signal,
      });

      if (!response.ok) {
        throw new Error(`Token request failed with status ${response.status}`);
      }

      const data = await response.json();
      if (!data.access_token) {
        throw new Error('No access_token in response');
      }

      // Store only non-sensitive OAuth metadata for debugging.
      this.oauthTokenResponse = {
        token_type: data.token_type || 'Bearer',
        expires_in: data.expires_in,
        scope: data.scope,
        fetched_at: new Date().toISOString(),
        expires_at: data.expires_in ? new Date(Date.now() + (data.expires_in * 1000)).toISOString() : null
      };

      return data.access_token;
    } catch (error) {
      if (timedOut && timeoutSeconds !== null) {
        throw new Error(`OAuth token request timed out after ${timeoutSeconds} seconds.`);
      }
      throw error;
    } finally {
      if (timeoutId !== null) {
        window.clearTimeout(timeoutId);
      }
    }
  }

  private setRequestConfigurationError(message: string): void {
    const executionTime = Date.now() - this.apiCallStartTime;
    const timestamp = new Date().toISOString();
    this.responseType = 'error';
    this.apiResponse = message;
    const formattedResponse = this.getCustomMessage('error').message;
    this.value = {
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
        accessToken = await this.fetchOAuthToken();
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
        
        // Try to parse response and extract values
        let accessToken: string | undefined;
        let customOutput: any = undefined;
        let responseMessage = '';
        
        try {
          const parsed = JSON.parse(response);
          
          // Extract access_token if present
          if (parsed.access_token) {
            accessToken = parsed.access_token;
          }
          
          // Extract custom output value if outputValueKey is specified
          if (this.outputValueKey && this.outputValueKey.trim()) {
            customOutput = extractNestedValue(parsed, this.outputValueKey);
          }
          
          // Extract response message from common paths (d.Message for SAP, message, Message, etc.)
          responseMessage = extractNestedValue(parsed, 'd.Message') ||
                           extractNestedValue(parsed, 'Message') ||
                           extractNestedValue(parsed, 'message') ||
                           extractNestedValue(parsed, 'msg') ||
                           extractNestedValue(parsed, 'data.message') ||
                           '';
        } catch {
          // Response is not JSON, skip extraction
        }
        
        // Get formatted response message
        const formattedResponseData = this.getCustomMessage(this.responseType);
        
        // Create structured value object
        const isTrueSuccess = success === true && this.responseType === 'success';
        this.value = {
          success: isTrueSuccess,
          valid: isTrueSuccess,
          statusCode: statusCode !== undefined ? statusCode : (this.responseType === 'success' ? 200 : 500),
          responseType: this.responseType,
          data: response,
          message: responseMessage,
          formattedResponse: formattedResponseData.message,
          timestamp: timestamp,
          executionTime: executionTime,
          ...(accessToken && { access_token: accessToken }),
          ...(customOutput !== undefined && { output: customOutput })
        };
        
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
