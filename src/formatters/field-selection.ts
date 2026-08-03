import type { FormatterFieldSelection } from './response-config.js';

export function getSortedSelectedFields(
  fields: ReadonlyMap<string, FormatterFieldSelection>,
): Array<[string, FormatterFieldSelection]> {
  return Array.from(fields.entries())
    .filter(([, config]) => config.checked)
    .sort((left, right) => left[1].order - right[1].order);
}

export function toggleFormatterField(
  fields: Map<string, FormatterFieldSelection>,
  fieldKey: string,
  checked: boolean,
  title: string,
): void {
  if (!checked) {
    fields.delete(fieldKey);
    return;
  }

  let maxOrder = -1;
  fields.forEach((field) => {
    if (field.order > maxOrder) maxOrder = field.order;
  });
  fields.set(fieldKey, { title, checked: true, order: maxOrder + 1 });
}

export function updateFormatterFieldTitle(
  fields: Map<string, FormatterFieldSelection>,
  fieldKey: string,
  title: string,
): void {
  const field = fields.get(fieldKey);
  if (field) fields.set(fieldKey, { ...field, title });
}

export function removeFormatterField(
  fields: Map<string, FormatterFieldSelection>,
  fieldKey: string,
): void {
  fields.delete(fieldKey);
}

export function reorderFormatterFields(
  fields: Map<string, FormatterFieldSelection>,
  fromIndex: number,
  toIndex: number,
): void {
  const sortedFields = getSortedSelectedFields(fields);
  if (fromIndex === toIndex) return;

  const [movedItem] = sortedFields.splice(fromIndex, 1);
  if (!movedItem) return;
  sortedFields.splice(toIndex, 0, movedItem);

  sortedFields.forEach(([key, config], index) => {
    fields.set(key, { ...config, order: index });
  });
}
