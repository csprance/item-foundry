import { Hint, Item, Property } from '@qtg/item-foundry';
import { ItemCategory, Quality, Rarity, WeightCategory } from '~/enums';
import {
  FileProperty,
  IntProperty,
  LocalizedText,
  LocalizedTextProperty,
  WeightProperty,
} from '~/properties';

export abstract class BaseItem extends Item {
  @LocalizedTextProperty()
  @Hint('The name of the item')
  abstract name: LocalizedText;

  @LocalizedTextProperty()
  @Hint('The description of the item')
  abstract description: LocalizedText;

  @WeightProperty()
  @Hint('How much something weighs')
  weight: WeightCategory | number = WeightCategory.Weightless;

  @Property()
  @Hint('How rare the item is')
  rarity: Rarity = Rarity.Common;

  @Property()
  @Hint('What Item category does this belong to')
  category: ItemCategory = ItemCategory.Consumable;

  @Property()
  @Hint('What Item category does this belong to')
  quality: Quality = Quality.Standard;

  @FileProperty()
  @Hint('Where are the visuals for this item located at')
  visuals: string = '/empty.fbx';

  @IntProperty()
  @Hint('How many of these can you stack in one slot')
  stackSize: number = 1;
}
