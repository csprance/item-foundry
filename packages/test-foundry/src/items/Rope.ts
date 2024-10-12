import { BaseItem } from '~/basetypes';
import { ItemCategory, Quality, Rarity } from '~/enums';
import { LocalizedText } from '~/properties';

export class Rope extends BaseItem {
  name = new LocalizedText({ text: 'Rope' });
  description = new LocalizedText({
    text: 'A length of rope, used for binding or securing items.',
  });
  weight = 0.5;
  rarity = Rarity.Uncommon;
  category = ItemCategory.Consumable;
  quality = Quality.Standard;
  visuals = '/art/rope_visuals.fbx';
  stackSize = 5;
}
