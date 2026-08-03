export type FormatterFieldSelection = {
  title: string;
  checked: boolean;
  order: number;
};

export type ResponseFormatterConfig = {
  title?: string;
  fields: Array<{
    path: string;
    title: string;
  }>;
};

export function buildResponseFormatterConfig(
  selectedFields: ReadonlyMap<string, FormatterFieldSelection>,
  messageTitle: string,
): ResponseFormatterConfig {
  const config: ResponseFormatterConfig = {
    fields: [],
  };

  if (messageTitle && messageTitle.trim()) {
    config.title = messageTitle.trim();
  }

  const sortedFields = Array.from(selectedFields.entries())
    .filter(([, fieldConfig]) => fieldConfig.checked)
    .sort((left, right) => left[1].order - right[1].order);

  config.fields = sortedFields.map(([path, fieldConfig]) => ({
    path,
    title: fieldConfig.title || path,
  }));

  return config;
}

export function generateResponseConfig(
  selectedFields: ReadonlyMap<string, FormatterFieldSelection>,
  messageTitle: string,
): string {
  return JSON.stringify(buildResponseFormatterConfig(selectedFields, messageTitle), null, 2);
}

export function generateResponseConfigQuoted(
  selectedFields: ReadonlyMap<string, FormatterFieldSelection>,
  messageTitle: string,
): string {
  const minified = JSON.stringify(buildResponseFormatterConfig(selectedFields, messageTitle));
  return `"${minified.replace(/"/g, '\\"')}"`;
}
