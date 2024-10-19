import { getValidationRules } from './decorators/Property';
import { toSnakeCase } from './lib';

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
}
