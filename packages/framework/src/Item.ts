import {getPropertyMetadata, getSerializableProperties, getValidationRules,} from './decorators/Property';

export abstract class Item {
  id: string = '';

  constructor() {
    this.id = this.generateId();
  }

  protected generateId(): string {
    const className = this.constructor.name;
    return toKebabCase(className);
  }

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
    const json: any = {id: this.id};
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

// Utility function to convert PascalCase to kebab-case
function toKebabCase(str: string): string {
  return str
      .replace(/([a-z0-9])([A-Z])/g, '$1-$2') // Insert hyphen between lowercase and uppercase
      .replace(/([A-Z])([A-Z][a-z])/g, '$1-$2') // Handle consecutive uppercase letters
      .toLowerCase();
}
