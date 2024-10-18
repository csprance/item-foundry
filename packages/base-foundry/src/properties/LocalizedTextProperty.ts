import { Property, ValidationRule } from '@qtg/item-foundry';

export enum LocCat {
  Uncategorized = '/uncategorized/',
  InventoryName = '/inventory/name/',
  InventoryDescription = '/inventory/description/',
}

export function LocalizedTextProperty(
  options: { metadata?: Record<string, any> } = {},
) {
  const validationRules: ValidationRule[] = [
    {
      validator: (val) => val instanceof LocalizedText,
      message: 'Must be a LocalizedText class',
    },
  ];
  return Property({
    validate: validationRules,
    metadata: options.metadata,
  });
}
export type LocalizedTextProperty = LocalizedText;

export class LocalizedText {
  // The default language localized text
  text: string = '|EMPTY|';
  // A hint to the translators on what this is
  hint?: string;
  // The category in which this localized text falls under
  category: LocCat = LocCat.Uncategorized;

  constructor({
    text,
    hint,
    category,
  }: {
    text?: string;
    category?: LocCat;
    hint?: string;
  }) {
    this.text = text ? text : this.text;
    this.hint = hint ? hint : this.hint;
    this.category = category ? category : this.category;
  }

  toJSON() {
    return {
      text: this.text,
      hint: this.hint,
      category: this.category,
      __type: 'LocalizedText',
    };
  }
}
