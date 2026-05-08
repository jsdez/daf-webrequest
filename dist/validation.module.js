var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const VALIDATION_MARKER_SELECTOR = '[role="alert"], .ntx-form-error, .ntx-error-message';
/**
 * Standalone validation module.
 * Call attach() when the host element connects to the DOM and detach() when it disconnects.
 */
export class ValidationModule {
    constructor() {
        this.isBlurRevalidating = false;
        this.focusedControlValues = new WeakMap();
        this._onGlobalFocusIn = (e) => {
            var _a, _b, _c;
            const path = (_b = (_a = e.composedPath) === null || _a === void 0 ? void 0 : _a.call(e)) !== null && _b !== void 0 ? _b : [];
            const target = ((_c = path[0]) !== null && _c !== void 0 ? _c : e.target);
            const control = this.getTrackableControl(target);
            if (!control)
                return;
            this.focusedControlValues.set(control, this.getComparableControlValue(control));
        };
        this._onGlobalFocusOut = (e) => {
            var _a, _b, _c;
            if (this.isBlurRevalidating)
                return;
            const path = (_b = (_a = e.composedPath) === null || _a === void 0 ? void 0 : _a.call(e)) !== null && _b !== void 0 ? _b : [];
            const target = ((_c = path[0]) !== null && _c !== void 0 ? _c : e.target);
            if (!(target instanceof HTMLElement))
                return;
            const formContext = this.getFormContext();
            if (!formContext)
                return;
            if (!formContext.form.contains(target))
                return;
            if (!this.hasValidationMarkers(formContext.form))
                return;
            const control = this.getTrackableControl(target);
            if (!control)
                return;
            const previousValue = this.focusedControlValues.get(control);
            const nextValue = this.getComparableControlValue(control);
            this.focusedControlValues.delete(control);
            if (previousValue === undefined || previousValue === nextValue)
                return;
            this.isBlurRevalidating = true;
            void this
                .runSoftValidationAndUpdateUI(formContext)
                .then(() => { this.isBlurRevalidating = false; })
                .catch(() => { this.isBlurRevalidating = false; });
        };
    }
    /** Register document-level focus listeners. Call from connectedCallback. */
    attach() {
        document.addEventListener('focusin', this._onGlobalFocusIn);
        document.addEventListener('focusout', this._onGlobalFocusOut);
    }
    /** Remove document-level focus listeners. Call from disconnectedCallback. */
    detach() {
        document.removeEventListener('focusin', this._onGlobalFocusIn);
        document.removeEventListener('focusout', this._onGlobalFocusOut);
    }
    /**
     * Run a full native-Nintex validation pass.
     * @returns true if the form is valid (no errors), false if validation errors exist.
     */
    runHardValidation() {
        return __awaiter(this, void 0, void 0, function* () {
            const formContext = this.getFormContext();
            if (!formContext) {
                console.warn('[ValidationModule] No form context found — blocking API call');
                return false;
            }
            this.clearNintexValidationUI();
            this.suppressNativeSubmitArtifacts(formContext.form);
            yield this.triggerNativeValidation(formContext);
            this.suppressNativeSubmitArtifacts(formContext.form);
            const summary = this.collectValidationSummary(formContext);
            console.info('[ValidationModule] Hard validation summary', summary);
            if (summary.fieldValidation || summary.ruleValidation) {
                // Focus the topmost invalid field so the user is directed to it
                const firstInvalid = formContext.form.querySelector('[aria-invalid="true"]');
                if (firstInvalid) {
                    firstInvalid.focus();
                }
                return false;
            }
            this.suppressNativeSubmitArtifacts(formContext.form);
            return true;
        });
    }
    /** Remove all daf-injected validation UI from the DOM. */
    clearNintexValidationUI() {
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
    hasValidationMarkers(form) {
        if (form.querySelector('[aria-invalid="true"]'))
            return true;
        return Array.from(form.querySelectorAll(VALIDATION_MARKER_SELECTOR)).some((element) => this.isValidationAlertElement(element) &&
            this.isElementVisible(element) &&
            this.isValidationAlertText(element.textContent));
    }
    // ─── Private helpers ────────────────────────────────────────────────────────
    getFormContext() {
        var _a, _b;
        const form = document.querySelector('form');
        if (!(form instanceof HTMLFormElement))
            return null;
        // Prefer Nintex submit control even when hidden, because we may intentionally hide it
        // and still need to trigger native validation programmatically.
        const preferredSubmit = form.querySelector('button[data-e2e="btn-submit"], input[data-e2e="btn-submit"]');
        const typedSubmit = Array.from(form.querySelectorAll('button[type="submit"], input[type="submit"]')).find((element) => this.isElementVisible(element));
        const fallbackImplicitSubmit = Array.from(form.querySelectorAll('button:not([type])')).find((element) => {
            var _a, _b;
            return this.isElementVisible(element) &&
                /submit/i.test(((_a = element.getAttribute('data-e2e')) !== null && _a !== void 0 ? _a : '') + ' ' + ((_b = element.textContent) !== null && _b !== void 0 ? _b : ''));
        });
        const submitControl = (_b = (_a = preferredSubmit !== null && preferredSubmit !== void 0 ? preferredSubmit : typedSubmit) !== null && _a !== void 0 ? _a : fallbackImplicitSubmit) !== null && _b !== void 0 ? _b : null;
        if (!(submitControl instanceof HTMLElement))
            return null;
        const controls = Array.from(form.querySelectorAll('input, select, textarea')).filter((control) => this.isElementVisible(control) && !control.disabled);
        return { form, submitControl, controls };
    }
    triggerNativeValidation(formContext) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            formContext.form.addEventListener('submit', (event) => {
                event.preventDefault();
                event.stopPropagation();
                event.stopImmediatePropagation();
            }, { capture: true, once: true });
            const submitControl = formContext.submitControl;
            const submitButton = submitControl instanceof HTMLButtonElement ? submitControl : null;
            const originalButtonType = (_a = submitButton === null || submitButton === void 0 ? void 0 : submitButton.getAttribute('type')) !== null && _a !== void 0 ? _a : null;
            try {
                if (submitButton) {
                    submitButton.setAttribute('type', 'button');
                }
                submitControl.click();
                yield this.wait(350);
            }
            finally {
                if (submitButton) {
                    if (originalButtonType === null) {
                        submitButton.removeAttribute('type');
                    }
                    else {
                        submitButton.setAttribute('type', originalButtonType);
                    }
                }
            }
        });
    }
    runSoftValidationAndUpdateUI(formContext) {
        return __awaiter(this, void 0, void 0, function* () {
            // Give Nintex time to finish its own blur-time DOM updates
            yield this.wait(120);
            const summary = this.collectValidationSummary(formContext);
            console.info('[ValidationModule] Soft validation summary', summary);
            if (!summary.fieldValidation && !summary.ruleValidation) {
                // Form is now clean — remove any daf-injected UI
                this.clearNintexValidationUI();
                this.suppressNativeSubmitArtifacts(formContext.form);
            }
            // If still invalid, do nothing — errors are already visible in the DOM
        });
    }
    clearNativeSubmitArtifacts(form) {
        const screenReaderErrors = [
            ...Array.from(document.querySelectorAll('#screenReaderErrorMessage, [data-e2e="screenReaderErrorMessage"]')),
            ...Array.from(form.querySelectorAll('#screenReaderErrorMessage, [data-e2e="screenReaderErrorMessage"]')),
        ];
        screenReaderErrors.forEach((element) => {
            element.textContent = '';
        });
        // Hide plugin gate validation messages that are expected before API success.
        const pluginGateAlerts = Array.from(form.querySelectorAll('[role="alert"], .ntx-form-error, .ntx-error-message')).filter((element) => {
            var _a;
            const text = ((_a = element.textContent) !== null && _a !== void 0 ? _a : '').trim().toLowerCase();
            return text.includes('api call not successful');
        });
        pluginGateAlerts.forEach((element) => {
            element.textContent = '';
        });
    }
    suppressNativeSubmitArtifacts(form) {
        this.clearNativeSubmitArtifacts(form);
        [0, 75, 200, 400].forEach((delayMs) => {
            window.setTimeout(() => {
                this.clearNativeSubmitArtifacts(form);
            }, delayMs);
        });
    }
    isValidationAlertElement(element) {
        return !element.matches('#screenReaderErrorMessage, [data-e2e="screenReaderErrorMessage"]');
    }
    isValidationAlertText(text) {
        const normalized = (text !== null && text !== void 0 ? text : '').trim().toLowerCase();
        if (!normalized)
            return false;
        // These are submit/runtime gate artifacts, not field/rule validation failures.
        if (normalized.includes('there is 1 error in the form you are trying to submit'))
            return false;
        if (normalized.includes('there are ') && normalized.includes(' error in the form you are trying to submit'))
            return false;
        if (normalized.includes('api call not successful'))
            return false;
        return true;
    }
    collectValidationSummary(formContext) {
        const ariaInvalidElements = Array.from(formContext.form.querySelectorAll('[aria-invalid="true"]')).filter((element) => this.isElementVisible(element));
        const html5InvalidControls = formContext.controls.filter((control) => this.isElementVisible(control) && control.matches(':invalid'));
        const alertElements = Array.from(formContext.form.querySelectorAll(VALIDATION_MARKER_SELECTOR)).filter((element) => this.isValidationAlertElement(element) &&
            this.isElementVisible(element) &&
            this.isValidationAlertText(element.textContent));
        const invalidControls = [
            ...new Set(html5InvalidControls.map((control) => this.getControlLabel(control))),
        ];
        const alerts = [
            ...new Set(alertElements.map((element) => { var _a, _b; return (_b = (_a = element.textContent) === null || _a === void 0 ? void 0 : _a.trim()) !== null && _b !== void 0 ? _b : ''; })),
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
    isElementVisible(element) {
        const htmlElement = element;
        const style = window.getComputedStyle(htmlElement);
        return (style.display !== 'none' &&
            style.visibility !== 'hidden' &&
            htmlElement.offsetParent !== null);
    }
    getControlLabel(control) {
        return (control.getAttribute('aria-label') ||
            control.name ||
            control.id ||
            control.getAttribute('placeholder') ||
            control.tagName.toLowerCase());
    }
    getTrackableControl(target) {
        if (target instanceof HTMLInputElement ||
            target instanceof HTMLSelectElement ||
            target instanceof HTMLTextAreaElement) {
            return target;
        }
        return null;
    }
    getComparableControlValue(control) {
        var _a;
        if (control instanceof HTMLInputElement) {
            const type = control.type.toLowerCase();
            if (type === 'checkbox' || type === 'radio') {
                return control.checked ? 'checked' : 'unchecked';
            }
            if (type === 'file') {
                return Array.from((_a = control.files) !== null && _a !== void 0 ? _a : [])
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
    wait(durationMs) {
        return new Promise((resolve) => {
            window.setTimeout(resolve, durationMs);
        });
    }
}
