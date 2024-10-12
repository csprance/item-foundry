import { BaseItem } from '~/basetypes';
import { ItemCategory, Quality, Rarity } from '~/enums';
import { LocalizedText } from '~/properties';

export class Stick extends BaseItem {
  name = new LocalizedText({ text: 'Stick' });
  description = new LocalizedText({
    text: 'A small stick, useful for crafting tools or starting fires.',
  });
  weight = 0.2;
  rarity = Rarity.Common;
  category = ItemCategory.Consumable;
  quality = Quality.Standard;
  visuals = '/art/stick_visuals.fbx';
  stackSize = 10;
}
