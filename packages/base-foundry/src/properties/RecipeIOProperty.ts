import { Item, Property, type ValidationRule } from '@qtg/item-foundry';
import { toSnakeCase } from '~/utils';

export function RecipeIOProperty(
  options: { metadata?: Record<string, any> } = {},
) {
  const validationRules: ValidationRule[] = [
    {
      validator: (val) => val instanceof RecipeIO,
      message: 'Must be a RecipeIO instance',
    },
  ];
  return Property({
    validate: validationRules,
    metadata: options.metadata,
  });
}
export type RecipeIOProperty = RecipeIO;

type RecipeIOItem = typeof Item | [typeof Item, number];
type RecipeIOItems = RecipeIOItem[];

export class RecipeIO {
  id: string = '';
  items: RecipeIOItems;

  protected generateId(): string {
    const className = this.constructor.name;
    return toSnakeCase(className);
  }

  constructor(items: RecipeIOItems) {
    this.id = this.generateId();
    this.items = items;
  }

  toJSON() {
    return this.items.map((item) => {
      const [actualItem, quantity = 1] = Array.isArray(item) ? item : [item, 1];
      return {
        id: (actualItem as unknown as Item).id,
        __type: actualItem.constructor.name,
        quantity,
      };
    });
  }
}
