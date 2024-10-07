import {getPropertyMetadata, getSerializableProperties, getValidationRules,} from './decorators/Property';

export abstract class Item {
  id: string = '';

  constructor() {
    this.id = this.generateId();
  }

  protected generateId(): string {
    const className = this.constructor.name;
    return toSnakeCase(className);
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

  toJSON(includeMetadata = true): any {
    const json: Record<string, any> = {id: this.id};
    const props = getSerializableProperties(this);
    const metadata = getPropertyMetadata(this);

    for (const prop of props) {
      const value = (this as any)[prop];
      json[prop] = serializeValue(value);

      if (includeMetadata && metadata[prop]) {
        json[`__${prop}`] = metadata[prop];
      }
    }
    if (includeMetadata) {
      json['__type'] = Object.getPrototypeOf(Object.getPrototypeOf(this)).constructor
          .name
    }

    return JSON.parse(
        JSON.stringify({
          ...json,
        }),
    );
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
function toSnakeCase(input: string): string {
  return input
      .replace(/([a-z])([A-Z])/g, '$1_$2') // Convert camelCase and PascalCase to snake_case
      .replace(/[-\s]+/g, '_') // Convert kebab-case and spaces to snake_case
      .replace(/__/g, '_') // Remove any double underscores created in the process
      .toLowerCase(); // Convert the entire string to lowercase
}
