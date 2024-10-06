// framework/Item.ts
import {
  getPropertyMetadata,
  getSerializableProperties,
  getValidationRules,
} from './decorators/Property';

export abstract class Item {
  id: string = '';

  validate(): string[] {
    const errors: string[] = [];
    const rules = getValidationRules(this);

    for (const prop in rules) {
      const value = (this as any)[prop];
      const propRules = rules[prop];

      propRules.forEach((rule) => {
        if (!rule.validator(value)) {
          errors.push(`Property "${prop}": ${rule.message}`);
        }
      });
    }

    return errors;
  }

  toJSON(includeMetadata = false): any {
    const json: any = {};
    const props = getSerializableProperties(this);
    const metadata = getPropertyMetadata(this);

    for (const prop of props) {
      const value = (this as any)[prop];
      json[prop] = serializeValue(value);

      if (includeMetadata && metadata[prop]) {
        json[`_${prop}Metadata`] = metadata[prop];
      }
    }

    return json;
  }
}

function serializeValue(value: any): any {
  if (value instanceof Item) {
    return { id: value.id };
  } else if (Array.isArray(value)) {
    return value.map(serializeValue);
  } else {
    return value;
  }
}
