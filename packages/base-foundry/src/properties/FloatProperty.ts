import { Property, type ValidationRule, Validators } from '@qtg/item-foundry';

export function FloatProperty(
  options: { metadata?: Record<string, any> } = {},
) {
  const validationRules: ValidationRule[] = [
    {
      validator: Validators.isPositiveNumber,
      message: 'Healing amount must be positive',
    },
  ];
  return Property({
    validate: validationRules,
    metadata: options.metadata,
  });
}
