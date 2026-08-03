export type AlertResponseType = 'success' | 'warning' | 'error';

export function getAlertIcon(type: AlertResponseType): string {
  switch (type) {
    case 'success': return '✓';
    case 'warning': return '⚠';
    case 'error': return '✗';
    default: return '•';
  }
}

export function shouldShowMoreDetails(showMoreDetails: string, responseType: string): boolean {
  if (showMoreDetails === 'Never') return false;
  if (showMoreDetails === 'Always') return true;
  return showMoreDetails === 'On Error/Warning'
    && (responseType === 'error' || responseType === 'warning');
}

export function shouldShowAlert(state: {
  now: number;
  lastApiCallTime: number;
  countdownTimer: number;
  countdownEnabled: boolean;
  showCooldownAlert: boolean;
  apiResponse: string;
  responseType: string | null;
  lastCooldownAlertTime: number;
}): boolean {
  const inCooldown = state.countdownEnabled
    && state.lastApiCallTime > 0
    && state.now - state.lastApiCallTime < state.countdownTimer * 1000;

  if (inCooldown && state.showCooldownAlert) return true;
  if (!state.apiResponse || !state.responseType) return false;
  if (state.lastCooldownAlertTime > state.lastApiCallTime) return false;
  return true;
}
