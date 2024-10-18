import { Item, Property } from '@qtg/item-foundry';
import { Category, Quality, Rarity, WeightCategory } from '~/enums/index.ts';
import {
  FileProperty,
  IntProperty,
  LocalizedText,
  LocalizedTextProperty,
  WeightProperty,
} from '~/properties';

export abstract class BaseItem extends Item {
  /**
   * The name of the item
   */
  @LocalizedTextProperty()
  abstract name: LocalizedText;

  /**
   * The Localized description of the item
   */
  @LocalizedTextProperty()
  abstract description: LocalizedText;

  /**
   * How much something weighs
   */
  @WeightProperty()
  weight: WeightCategory | number = WeightCategory.Weightless;

  /**
   * How rare the item is
   */
  @Property()
  rarity: Rarity = Rarity.Common;

  /**
   * What Item category does this belong to
   */
  @Property()
  category: Category = Category.Consumable;

  /**
   * What Quality is this item
   */
  @Property()
  quality: Quality = Quality.Standard;

  /**
   * Where are the visuals located at
   */
  @FileProperty()
  visuals: string = '/empty.fbx';

  /**
   * How many of these can you stack in one slot
   */
  @IntProperty()
  stackSize: number = 1;

  /**
   * The icon image
   */
  @FileProperty()
  icon: string = '/empty.png';
}
