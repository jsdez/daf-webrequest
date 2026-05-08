const VALIDATION_MARKER_SELECTOR = '[role="alert"], .ntx-form-error, .ntx-error-message';

export type FormControlElement = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;

export type FormContext = {
  form: HTMLFormElement;
  submitControl: HTMLElement;
  controls: FormControlElement[];
};

export type ValidationSummary = {
  outcome: string;
  ariaCount: number;
  html5Count: number;
  alertCount: number;
  fieldValidation: boolean;
  ruleValidation: boolean;
  message: string;
  invalidControls: string[];
  alerts: string[];
};

/**
 * Standalone validation module.
 * Call attach() when the host element connects to the DOM and detach() when it disconnects.
 */
export class ValidationModule {
  private isBlurRevalidating = false;
  private focusedControlValues = new WeakMap<FormControlElement, string>();

  private _onGlobalFocusIn = (e: Event): void => {
    const path = e.composedPath?.() ?? [];
    const target = (path[0] ?? e.target) as HTMLElement;
    const control = this.getTrackableControl(target);
    if (!control) return;
    this.focusedControlValues.set(control, this.getComparableControlValue(control));
  };

  private _onGlobalFocusOut = (e: Event): void => {
    if (this.isBlurRevalidating) return;

    const path = e.composedPath?.() ?? [];
    const target = (path[0] ?? e.target) as HTMLElement;
    if (!(target instanceof HTMLElement)) return;

    const formContext = this.getFormContext();
    if (!formContext) return;
    if (!formContext.form.contains(target)) return;
    if (!this.hasValidationMarkers(formContext.form)) return;

    const control = this.getTrackableControl(target);
    if (!control) return;

    const previousValue = this.focusedControlValues.get(control);
    const nextValue = this.getComparableControlValue(control);
    this.focusedControlValues.delete(control);
    if (previousValue === undefined || previousValue === nextValue) return;

    this.isBlurRevalidating = true;
    void this
      .runSoftValidationAndUpdateUI(formContext)
      .then(() => { this.isBlurRevalidating = false; })
      .catch(() => { this.isBlurRevalidating = false; });
  };

  /** Register document-level focus listeners. Call from connectedCallback. */
  attach(): void {
    document.addEventListener('focusin', this._onGlobalFocusIn);
    document.addEventListener('focusout', this._onGlobalFocusOut);
  }

  /** Remove document-level focus listeners. Call from disconnectedCallback. */
  detach(): void {
    document.removeEventListener('focusin', this._onGlobalFocusIn);
    document.removeEventListener('focusout', this._onGlobalFocusOut);
  }

  /**
   * Run a full native-Nintex validation pass.
   * @returns true if the form is valid (no errors), false if validation errors exist.
   */
  async runHardValidation(): Promise<boolean> {
    const formContext = this.getFormContext();
    if (!formContext) {
      console.warn('[ValidationModule] No form context found — blocking API call');
      return false;
    }

    this.clearNintexValidationUI();
    this.suppressNativeSubmitArtifacts(formContext.form);
    await this.triggerNativeValidation(formContext);
    this.suppressNativeSubmitArtifacts(formContext.form);

    const summary = this.collectValidationSummary(formContext);
    console.info('[ValidationModule] Hard validation summary', summary);

    if (summary.fieldValidation || summary.ruleValidation) {
      // Focus the topmost invalid field so the user is directed to it
      const firstInvalid = formContext.form.querySelector<HTMLElement>('[aria-invalid="true"]');
      if (firstInvalid) {
        firstInvalid.focus();
      }
      return false;
    }

    this.suppressNativeSubmitArtifacts(formContext.form);

    return true;
  }

  /** Remove all daf-injected validation UI from the DOM. */
  clearNintexValidationUI(): void {
    document.querySelectorAll('.daf-injected-error').forEach((el) => el.remove());
    document.querySelectorAll('[data-daf-validated]').forEach((el) => {
      el.removeAttribute('aria-invalid');
      el.removeAttribute('data-daf-validated');
    });
    document.querySelectorAll('.daf-has-error').forEach((el) => {
      el.classList.remove('nx-has-error', 'daf-has-error');
    });
  }

  /** Returns true if the form currently has any visible validation markers. */
  hasValidationMarkers(form: HTMLFormElement): boolean {
    if (form.querySelector('[aria-invalid="true"]')) return true;
    return Array.from(form.querySelectorAll<HTMLElement>(VALIDATION_MARKER_SELECTOR)).some(
      (element) =>
        this.isValidationAlertElement(element) &&
        this.isElementVisible(element) &&
        this.isValidationAlertText(element.textContent)
    );
  }

  // ─── Private helpers ────────────────────────────────────────────────────────

  private getFormContext(): FormContext | null {
    const form = document.querySelector('form');
    if (!(form instanceof HTMLFormElement)) return null;

    // Prefer Nintex submit control even when hidden, because we may intentionally hide it
    // and still need to trigger native validation programmatically.
    const preferredSubmit = form.querySelector<HTMLElement>(
      'button[data-e2e="btn-submit"], input[data-e2e="btn-submit"]'
    );

    const typedSubmit = Array.from(
      form.querySelectorAll<HTMLElement>('button[type="submit"], input[type="submit"]')
    ).find((element) => this.isElementVisible(element));

    const fallbackImplicitSubmit = Array.from(
      form.querySelectorAll<HTMLButtonElement>('button:not([type])')
    ).find(
      (element) =>
        this.isElementVisible(element) &&
        /submit/i.test((element.getAttribute('data-e2e') ?? '') + ' ' + (element.textContent ?? ''))
    );

    const submitControl =
      preferredSubmit ??
      typedSubmit ??
      fallbackImplicitSubmit ??
      null;

    if (!(submitControl instanceof HTMLElement)) return null;

    const controls = Array.from(
      form.querySelectorAll<FormControlElement>('input, select, textarea')
    ).filter((control) => this.isElementVisible(control) && !control.disabled);

    return { form, submitControl, controls };
  }

  private async triggerNativeValidation(formContext: FormContext): Promise<void> {
    formContext.form.addEventListener(
      'submit',
      (event) => {
        event.preventDefault();
        event.stopPropagation();
        event.stopImmediatePropagation();
      },
      { capture: true, once: true }
    );

    const submitControl = formContext.submitControl;
    const submitButton = submitControl instanceof HTMLButtonElement ? submitControl : null;
    const originalButtonType = submitButton?.getAttribute('type') ?? null;

    try {
      if (submitButton) {
        submitButton.setAttribute('type', 'button');
      }
      submitControl.click();
      await this.wait(350);
    } finally {
      if (submitButton) {
        if (originalButtonType === null) {
          submitButton.removeAttribute('type');
        } else {
          submitButton.setAttribute('type', originalButtonType);
        }
      }
    }
  }

  private async runSoftValidationAndUpdateUI(formContext: FormContext): Promise<void> {
    // Give Nintex time to finish its own blur-time DOM updates
    await this.wait(120);

    const summary = this.collectValidationSummary(formContext);
    console.info('[ValidationModule] Soft validation summary', summary);

    if (!summary.fieldValidation && !summary.ruleValidation) {
      // Form is now clean — remove any daf-injected UI
      this.clearNintexValidationUI();
      this.suppressNativeSubmitArtifacts(formContext.form);
    }
    // If still invalid, do nothing — errors are already visible in the DOM
  }

  private clearNativeSubmitArtifacts(form: HTMLFormElement): void {
    const screenReaderErrors = [
      ...Array.from(document.querySelectorAll<HTMLElement>('#screenReaderErrorMessage, [data-e2e="screenReaderErrorMessage"]')),
      ...Array.from(
        form.querySelectorAll<HTMLElement>('#screenReaderErrorMessage, [data-e2e="screenReaderErrorMessage"]')
      ),
    ];

    screenReaderErrors.forEach((element) => {
      element.textContent = '';
    });

    // Hide plugin gate validation messages that are expected before API success.
    const pluginGateAlerts = Array.from(
      form.querySelectorAll<HTMLElement>('[role="alert"], .ntx-form-error, .ntx-error-message')
    ).filter((element) => {
      const text = (element.textContent ?? '').trim().toLowerCase();
      return text.includes('api call not successful');
    });

    pluginGateAlerts.forEach((element) => {
      element.textContent = '';
    });
  }

  private suppressNativeSubmitArtifacts(form: HTMLFormElement): void {
    this.clearNativeSubmitArtifacts(form);

    [0, 75, 200, 400].forEach((delayMs) => {
      window.setTimeout(() => {
        this.clearNativeSubmitArtifacts(form);
      }, delayMs);
    });
  }

  private isValidationAlertElement(element: HTMLElement): boolean {
    return !element.matches('#screenReaderErrorMessage, [data-e2e="screenReaderErrorMessage"]');
  }

  private isValidationAlertText(text: string | null | undefined): boolean {
    const normalized = (text ?? '').trim().toLowerCase();
    if (!normalized) return false;

    // These are submit/runtime gate artifacts, not field/rule validation failures.
    if (normalized.includes('there is 1 error in the form you are trying to submit')) return false;
    if (normalized.includes('there are ') && normalized.includes(' error in the form you are trying to submit')) return false;
    if (normalized.includes('api call not successful')) return false;

    return true;
  }

  private collectValidationSummary(formContext: FormContext): ValidationSummary {
    const ariaInvalidElements = Array.from(
      formContext.form.querySelectorAll<HTMLElement>('[aria-invalid="true"]')
    ).filter((element) => this.isElementVisible(element));

    const html5InvalidControls = formContext.controls.filter(
      (control) => this.isElementVisible(control) && control.matches(':invalid')
    );

    const alertElements = Array.from(
      formContext.form.querySelectorAll<HTMLElement>(VALIDATION_MARKER_SELECTOR)
    ).filter(
      (element) =>
        this.isValidationAlertElement(element) &&
        this.isElementVisible(element) &&
        this.isValidationAlertText(element.textContent)
    );

    const invalidControls = [
      ...new Set(html5InvalidControls.map((control) => this.getControlLabel(control))),
    ];
    const alerts = [
      ...new Set(alertElements.map((element) => element.textContent?.trim() ?? '')),
    ].filter(Boolean);

    const fieldValidation = ariaInvalidElements.length > 0 || html5InvalidControls.length > 0;
    // Treat rule alerts as blocking only while there are live invalid controls.
    // This avoids stale alert text blocking the retry flow after users correct inputs.
    const ruleValidation = alertElements.length > 0 && fieldValidation;
    const outcome = fieldValidation || ruleValidation ? 'Validation surfaced' : 'No validation markers';
    const message = `${outcome} - aria: ${ariaInvalidElements.length}, html5: ${html5InvalidControls.length}, alerts: ${alertElements.length}`;

    return {
      outcome,
      ariaCount: ariaInvalidElements.length,
      html5Count: html5InvalidControls.length,
      alertCount: alertElements.length,
      fieldValidation,
      ruleValidation,
      message,
      invalidControls,
      alerts,
    };
  }

  private isElementVisible(element: Element): boolean {
    const htmlElement = element as HTMLElement;
    const style = window.getComputedStyle(htmlElement);
    return (
      style.display !== 'none' &&
      style.visibility !== 'hidden' &&
      htmlElement.offsetParent !== null
    );
  }

  private getControlLabel(control: FormControlElement): string {
    return (
      control.getAttribute('aria-label') ||
      control.name ||
      control.id ||
      control.getAttribute('placeholder') ||
      control.tagName.toLowerCase()
    );
  }

  private getTrackableControl(target: HTMLElement): FormControlElement | null {
    if (
      target instanceof HTMLInputElement ||
      target instanceof HTMLSelectElement ||
      target instanceof HTMLTextAreaElement
    ) {
      return target;
    }
    return null;
  }

  private getComparableControlValue(control: FormControlElement): string {
    if (control instanceof HTMLInputElement) {
      const type = control.type.toLowerCase();
      if (type === 'checkbox' || type === 'radio') {
        return control.checked ? 'checked' : 'unchecked';
      }
      if (type === 'file') {
        return Array.from(control.files ?? [])
          .map((file) => file.name)
          .join('|');
      }
      return control.value;
    }

    if (control instanceof HTMLSelectElement && control.multiple) {
      return Array.from(control.selectedOptions)
        .map((option) => option.value)
        .join('|');
    }

    return control.value;
  }

  private wait(durationMs: number): Promise<void> {
    return new Promise((resolve) => {
      window.setTimeout(resolve, durationMs);
    });
  }
}
