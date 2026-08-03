import { formatResponseWithConfig } from './response-message.js';

export type ResponseMessageType = 'success' | 'warning' | 'error';

export type ResolvedResponseMessage = {
  title: string | null;
  message: string;
};

export function resolveConfiguredMessage(
  type: ResponseMessageType,
  configurations: Record<ResponseMessageType, string>,
  responseData: string,
): ResolvedResponseMessage {
  const messageConfig = configurations[type];

  if (messageConfig.startsWith('"{') && messageConfig.endsWith('}"')) {
    try {
      const config = JSON.parse(messageConfig.slice(1, -1).replace(/\\"/g, '"'));
      return {
        title: config.title || null,
        message: formatResponseWithConfig(config, responseData),
      };
    } catch (error) {
      console.error('[Message Formatting] Failed to parse quoted config:', error);
      return { title: null, message: messageConfig };
    }
  }

  if (messageConfig.trim().startsWith('{"')) {
    try {
      const config = JSON.parse(messageConfig);
      return {
        title: config.title || null,
        message: formatResponseWithConfig(config, responseData),
      };
    } catch (error) {
      console.error('[Message Formatting] Failed to parse unquoted config:', error);
      return { title: null, message: messageConfig };
    }
  }

  return { title: null, message: messageConfig };
}
