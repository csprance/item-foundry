import { Property } from '@qtg/item-foundry';

import { BaseItem } from './BaseItem';

export abstract class BaseWeapon extends BaseItem {
  @Property([
    {
      validator: Validators.isPositiveNumber,
      message: 'Damage must be a positive number',
    },
    {
      validator: Validators.isInRange(1, 1000),
      message: 'Damage must be between 1 and 1000',
    },
  ])
  damage: number;
}
