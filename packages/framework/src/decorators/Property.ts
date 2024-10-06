// framework/decorators/Property.ts
import 'reflect-metadata';

const SERIALIZE_KEYS = Symbol('serialize_keys');
const VALIDATION_RULES = Symbol('validation_rules');
const PROPERTY_METADATA = Symbol('property_metadata');

export interface ValidationRule {
  validator: (value: any) => boolean;
  message: string;
}

export interface PropertyOptions {
  serialize?: boolean;
  validate?: ValidationRule[];
  metadata?: Record<string, any>;
}

export function Property(options: PropertyOptions = {}) {
  return function (target: any, propertyKey: string) {
    // Handle serialization
    if (options.serialize !== false) {
      let keys: string[] = Reflect.getMetadata(SERIALIZE_KEYS, target) || [];
      if (!keys.includes(propertyKey)) {
        keys.push(propertyKey);
        Reflect.defineMetadata(SERIALIZE_KEYS, keys, target);
      }
    }

    // Handle validation
    if (options.validate) {
      let propertyRules: { [key: string]: ValidationRule[] } =
        Reflect.getMetadata(VALIDATION_RULES, target) || {};
      if (!propertyRules[propertyKey]) {
        propertyRules[propertyKey] = [];
      }
      propertyRules[propertyKey].push(...options.validate);
      Reflect.defineMetadata(VALIDATION_RULES, propertyRules, target);
    }

    // Handle additional metadata
    if (options.metadata) {
      let metadata: { [key: string]: any } =
        Reflect.getMetadata(PROPERTY_METADATA, target) || {};
      metadata[propertyKey] = options.metadata;
      Reflect.defineMetadata(PROPERTY_METADATA, metadata, target);
    }
  };
}

// Helper functions to retrieve metadata
export function getSerializableProperties(instance: any): string[] {
  const properties = new Set<string>();
  let prototype = Object.getPrototypeOf(instance);

  while (prototype && prototype !== Object.prototype) {
    const keys: string[] = Reflect.getMetadata(SERIALIZE_KEYS, prototype) || [];
    keys.forEach((key) => properties.add(key));
    prototype = Object.getPrototypeOf(prototype);
  }

  return Array.from(properties);
}

export function getValidationRules(instance: any): {
  [key: string]: ValidationRule[];
} {
  const rules: { [key: string]: ValidationRule[] } = {};
  let prototype = Object.getPrototypeOf(instance);

  while (prototype && prototype !== Object.prototype) {
    const propertyRules: { [key: string]: ValidationRule[] } =
      Reflect.getMetadata(VALIDATION_RULES, prototype) || {};
    for (const prop in propertyRules) {
      if (!rules[prop]) {
        rules[prop] = [];
      }
      rules[prop].push(...propertyRules[prop]);
    }
    prototype = Object.getPrototypeOf(prototype);
  }

  return rules;
}

export function getPropertyMetadata(instance: any): { [key: string]: any } {
  const metadata: { [key: string]: any } = {};
  let prototype = Object.getPrototypeOf(instance);

  while (prototype && prototype !== Object.prototype) {
    const propMetadata: { [key: string]: any } =
      Reflect.getMetadata(PROPERTY_METADATA, prototype) || {};
    for (const prop in propMetadata) {
      if (!metadata[prop]) {
        metadata[prop] = {};
      }
      Object.assign(metadata[prop], propMetadata[prop]);
    }
    prototype = Object.getPrototypeOf(prototype);
  }

  return metadata;
}
