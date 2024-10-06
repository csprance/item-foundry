import { Item } from '@qtg/item-foundry';
import { Property } from '@qtg/item-foundry';

export abstract class BaseEnchantment extends Item {
  @Property() effect: string;
}
