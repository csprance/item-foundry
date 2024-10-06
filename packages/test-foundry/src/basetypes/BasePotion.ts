import { Item, Property, Validators } from '@qtg/item-foundry';

export abstract class BasePotion extends Item {
  @Property({
    validator: Validators.isPositiveNumber,
    message: 'Healing amount must be positive',
  })
  healingAmount: number;
}
