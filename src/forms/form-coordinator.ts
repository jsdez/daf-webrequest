export type FormSubmissionParticipant = {
  submissionAction: string;
};

type FormCoordinator = {
  instances: Set<FormSubmissionParticipant>;
  hiddenSubmitRequesters: Set<FormSubmissionParticipant>;
  allowNativeSubmission: boolean;
  submitListener: (event: Event) => void;
};

/**
 * Coordinates native submit interception and submit-button visibility for all
 * DAF Web Request controls inside a single Nintex form.
 */
export class FormCoordinatorManager {
  private static readonly coordinators = new WeakMap<HTMLFormElement, FormCoordinator>();
  private static readonly SUBMIT_HIDDEN_STYLE_ID = 'daf-webrequest-submit-hidden-style';

  static register(host: HTMLElement, participant: FormSubmissionParticipant): HTMLFormElement | null {
    const form = host.closest('form');
    if (!(form instanceof HTMLFormElement)) {
      console.warn('[Form Coordinator] Plugin is not inside a form');
      return null;
    }

    let coordinator = this.coordinators.get(form);
    if (!coordinator) {
      let newCoordinator: FormCoordinator;
      const submitListener = (event: Event) => {
        const hasPluginControlledSubmission = Array.from(newCoordinator.instances)
          .some((instance) => instance.submissionAction !== 'only-submit');
        if (!newCoordinator.allowNativeSubmission && hasPluginControlledSubmission) {
          console.log('[Form Coordinator] Blocking native submit until a plugin explicitly permits it');
          event.preventDefault();
          event.stopPropagation();
          event.stopImmediatePropagation();
        }
      };

      newCoordinator = {
        instances: new Set(),
        hiddenSubmitRequesters: new Set(),
        allowNativeSubmission: false,
        submitListener,
      };
      form.addEventListener('submit', submitListener, true);
      this.coordinators.set(form, newCoordinator);
      coordinator = newCoordinator;
    }

    coordinator.instances.add(participant);
    return form;
  }

  static unregister(form: HTMLFormElement, participant: FormSubmissionParticipant): void {
    const coordinator = this.coordinators.get(form);
    if (!coordinator) return;

    coordinator.instances.delete(participant);
    coordinator.hiddenSubmitRequesters.delete(participant);
    this.applySubmitButtonVisibility(form, coordinator);

    if (coordinator.instances.size === 0) {
      form.removeEventListener('submit', coordinator.submitListener, true);
      this.coordinators.delete(form);
    }
  }

  static setSubmitHidden(
    form: HTMLFormElement,
    participant: FormSubmissionParticipant,
    hidden: boolean,
  ): void {
    const coordinator = this.coordinators.get(form);
    if (!coordinator) return;

    if (hidden) {
      coordinator.hiddenSubmitRequesters.add(participant);
    } else {
      coordinator.hiddenSubmitRequesters.delete(participant);
    }

    this.applySubmitButtonVisibility(form, coordinator);
  }

  static submit(form: HTMLFormElement, onComplete: () => void): boolean {
    const coordinator = this.coordinators.get(form);
    if (!coordinator) return false;

    const submitButton = form.querySelector('button[type="submit"]');
    if (!(submitButton instanceof HTMLElement)) return false;

    coordinator.allowNativeSubmission = true;
    submitButton.click();
    window.setTimeout(() => {
      coordinator.allowNativeSubmission = false;
      onComplete();
    }, 1500);
    return true;
  }

  private static ensureSubmitHiddenStyle(): void {
    if (document.getElementById(this.SUBMIT_HIDDEN_STYLE_ID)) return;

    const style = document.createElement('style');
    style.id = this.SUBMIT_HIDDEN_STYLE_ID;
    style.textContent = '.daf-webrequest-submit-hidden button[data-e2e="btn-submit"] { display: none !important; }';
    document.head.appendChild(style);
  }

  private static applySubmitButtonVisibility(form: HTMLFormElement, coordinator: FormCoordinator): void {
    form.classList.toggle('daf-webrequest-submit-hidden', coordinator.hiddenSubmitRequesters.size > 0);
    if (coordinator.hiddenSubmitRequesters.size > 0) {
      this.ensureSubmitHiddenStyle();
    } else if (document.querySelectorAll('form.daf-webrequest-submit-hidden').length === 0) {
      document.getElementById(this.SUBMIT_HIDDEN_STYLE_ID)?.remove();
    }
  }
}
