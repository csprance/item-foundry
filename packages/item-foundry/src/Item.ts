import {
  getPropertyMetadata,
  getSerializableProperties,
  getValidationRules,
} from './decorators/Property';
import { serializeValue, toSnakeCase } from './lib';

export abstract class Item {
  id: string = '';

  constructor() {
    this.id = this.generateId();
  }

  protected generateId(): string {
    const className = this.constructor.name;
    return toSnakeCase(className);
  }

  public validate(): string[] {
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

  public toJSON(includeMetadata = true): any {
    const json: Record<string, any> = { id: this.id };
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
      json['__type'] = Object.getPrototypeOf(
        Object.getPrototypeOf(this),
      ).constructor.name;
    }

    return JSON.parse(
      JSON.stringify({
        ...json,
      }),
    );
  }
}
