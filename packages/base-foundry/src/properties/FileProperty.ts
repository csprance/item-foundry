import { Property, ValidationRule, Validators } from '@qtg/item-foundry';

export function FileProperty(options: { metadata?: Record<string, any> } = {}) {
  const validationRules: ValidationRule[] = [
    {
      validator: Validators.isFilePath,
      message: 'Must be a valid filepath',
    },
  ];
  return Property({
    validate: validationRules,
    metadata: options.metadata,
  });
}
