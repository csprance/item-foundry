// Utility function to convert PascalCase to kebab-case
import { Item } from './Item';

export function toSnakeCase(input: string): string {
  return input
    .replace(/([a-z])([A-Z])/g, '$1_$2') // Convert camelCase and PascalCase to snake_case
    .replace(/[-\s]+/g, '_') // Convert kebab-case and spaces to snake_case
    .replace(/__/g, '_') // Remove any double underscores created in the process
    .toLowerCase(); // Convert the entire string to lowercase
}
export function serializeValue(value: any): any {
  if (value instanceof Item) {
    return { id: value.id };
  } else if (Array.isArray(value)) {
    return value.map(serializeValue);
  } else {
    return value;
  }
}
