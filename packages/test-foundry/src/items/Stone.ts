import { BaseItem } from '~/basetypes';
import { ItemCategory, Quality, Rarity } from '~/enums';
import { WeightCategory } from '~/enums/Weight';
import { LocalizedText } from '~/properties';

export class Stone extends BaseItem {
  name = new LocalizedText({ text: 'Stone' });
  description = new LocalizedText({
    text: 'A small rock, useful for crafting basic tools.',
  });
  weight = 1.5;
  rarity = Rarity.Common;
  category = ItemCategory.Consumable;
  quality = Quality.Standard;
  visuals = '/art/stone_visuals.fbx';
  stackSize = 20;
}
