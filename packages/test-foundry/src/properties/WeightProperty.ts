import {Property, ValidationRule, Validators} from '@qtg/item-foundry';

export function WeightProperty(
    options: { metadata?: Record<string, any> } = {},
) {
    const validationRules: ValidationRule[] = [
        {
            validator: Validators.isPositiveNumber,
            message: 'Weight amount must be positive',
        },
    ];
    return Property({
        validate: validationRules,
        metadata: options.metadata,
    });
}
