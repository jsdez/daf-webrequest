import type { FormatterFieldSelection } from './response-config.js';

export type AvailableFormatterField = {
  kind: 'array' | 'value';
  path: string;
  title: string;
  preview: string;
};

export function collectAvailableFormatterFields(
  obj: any,
  path: string,
  useArrayNotation: boolean,
): AvailableFormatterField[] {
  const fields: AvailableFormatterField[] = [];

  const processObject = (current: any, currentPath: string): void => {
    if (!current || typeof current !== 'object' || Array.isArray(current)) return;

    Object.keys(current).forEach((key) => {
      const fullPath = currentPath ? `${currentPath}.${key}` : key;
      const value = current[key];

      if (Array.isArray(value) && value.length > 0) {
        if (useArrayNotation) {
          fields.push({
            kind: 'array',
            path: `${fullPath}[*]`,
            title: key,
            preview: `Array with ${value.length} item${value.length > 1 ? 's' : ''}`,
          });
        }

        if (typeof value[0] === 'object' && !Array.isArray(value[0])) {
          processObject(value[0], useArrayNotation ? `${fullPath}[*]` : `${fullPath}[0]`);
        }
      } else if (value !== null && typeof value !== 'object') {
        const displayValue = String(value);
        fields.push({
          kind: 'value',
          path: fullPath,
          title: fullPath.split('.').pop() || fullPath,
          preview: displayValue.length > 50 ? `${displayValue.substring(0, 50)}...` : displayValue,
        });
      } else if (value && typeof value === 'object' && !Array.isArray(value)) {
        processObject(value, fullPath);
      }
    });
  };

  processObject(obj, path);
  return fields;
}

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
