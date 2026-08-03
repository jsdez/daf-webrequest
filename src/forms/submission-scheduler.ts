export type SubmissionSchedulerCallbacks = {
  getCountdownSeconds: () => number;
  getLastApiCallTime: () => number;
  submit: () => void;
  requestUpdate: () => void;
  onCooldownComplete: () => void;
};

/** Owns timing-only submission behavior while leaving submission decisions in the plugin. */
export class SubmissionScheduler {
  private timerId: number | null = null;
  private delayedStartTime = 0;

  constructor(private readonly callbacks: SubmissionSchedulerCallbacks) {}

  get isTimerActive(): boolean {
    return this.timerId !== null;
  }

  get delayedSubmissionStartTime(): number {
    return this.delayedStartTime;
  }

  handlePostSubmissionAction(submissionAction: string): void {
    console.log('[Submission Action] Checking submission action:', submissionAction);

    if (submissionAction === 'no-submit') {
      console.log('[Submission Action] No action configured');
      return;
    }

    if (submissionAction === 'quick-submit') {
      console.log('[Submission Action] Quick submit - triggering after 500ms');
      window.setTimeout(() => {
        this.callbacks.submit();
      }, 500);
      return;
    }

    if (submissionAction === 'delayed-submit') {
      console.log('[Submission Action] Delayed submit - starting countdown timer');
      this.startDelayedSubmission();
    }
  }

  startDelayedSubmission(): void {
    this.clearTimer();

    const countdownMs = this.callbacks.getCountdownSeconds() * 1000;
    const startTime = Date.now();
    this.delayedStartTime = startTime;

    const updateCountdown = () => {
      const elapsed = Date.now() - startTime;
      const remaining = countdownMs - elapsed;

      if (remaining <= 0) {
        console.log('[Submission Action] Countdown complete - submitting form');
        this.callbacks.submit();
        this.timerId = null;
        this.delayedStartTime = 0;
      } else {
        this.callbacks.requestUpdate();
        this.timerId = window.setTimeout(updateCountdown, 100);
      }
    };

    console.log('[Submission Action] Starting delayed submission countdown for', this.callbacks.getCountdownSeconds(), 'seconds');
    updateCountdown();
  }

  startCooldownTimer(): void {
    this.clearTimer();

    const updateTimer = () => {
      const timeSinceLastCall = Date.now() - this.callbacks.getLastApiCallTime();
      const cooldownMs = this.callbacks.getCountdownSeconds() * 1000;

      if (timeSinceLastCall < cooldownMs) {
        this.callbacks.requestUpdate();
        this.timerId = window.setTimeout(updateTimer, 1000);
      } else {
        this.callbacks.onCooldownComplete();
        this.timerId = null;
        this.callbacks.requestUpdate();
      }
    };

    this.timerId = window.setTimeout(updateTimer, 1000);
  }

  dispose(): void {
    this.clearTimer();
  }

  private clearTimer(): void {
    if (this.timerId !== null) {
      window.clearTimeout(this.timerId);
      this.timerId = null;
    }
  }
}
