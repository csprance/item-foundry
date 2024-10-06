import { Item, Property } from '@qtg/item-foundry';

import { ItemCategory, Quality, Rarity } from '../enums';
import {
  FileProperty,
  FloatProperty, IntProperty,
  LocalizedText,
  LocalizedTextProperty,
} from '../properties';

export abstract class BaseItem extends Item {
  @LocalizedTextProperty({ metadata: { uiHint: 'The name of the item' } })
  abstract name: LocalizedText;

  @LocalizedTextProperty({
    metadata: { uiHint: 'The description of the item' },
  })
  abstract description: LocalizedText;

  @FloatProperty({ metadata: { uiHint: 'How much something weighs' } })
  abstract weight: number;

  @Property({ metadata: { uiHint: 'How rare the item is' } })
  abstract rarity: Rarity;

  @Property({ metadata: { uiHint: 'What Item category does this belong to' } })
  abstract category: ItemCategory;

  @Property({ metadata: { uiHint: 'What Item category does this belong to' } })
  abstract quality: Quality;

  @FileProperty({metadata: {uiHint: 'Where are the visuals for this item located at'}})
  abstract visuals: string;

  @IntProperty({metadata: {uiHint: ""}})
  abstract stackSize: number;
}
