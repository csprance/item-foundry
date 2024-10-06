// items/instances/FlamingSword.ts
import { Property } from '@qtg/item-foundry';

import { BaseWeapon } from '../basetypes/BaseWeapon';
import { FireEnchantment } from './FireEnchantment';

export class FlamingSword extends BaseWeapon {
  id = 'weapon_flamingsword';
  name = 'Flaming Sword';
  description = 'A sword imbued with fire';
  damage = 150;

  @Property()
  enchantment = new FireEnchantment();
}
