// items/instances/FireEnchantment.ts
import { BaseEnchantment } from '../basetypes/BaseEnchantment';

export class FireEnchantment extends BaseEnchantment {
  id = 'enchant_fire';
  name = 'Fire Enchantment';
  description = 'Adds fire damage to weapons';
  effect = 'Fire Damage';
}
