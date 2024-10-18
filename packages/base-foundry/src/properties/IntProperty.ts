import { Property, ValidationRule, Validators } from '@qtg/item-foundry';

export function IntProperty(options: { metadata?: Record<string, any> } = {}) {
  const validationRules: ValidationRule[] = [
    {
      validator: Validators.isPositiveNumber,
      message: 'Damage amount must be positive',
    },
  ];
  return Property({
    validate: validationRules,
    metadata: options.metadata,
  });
}
