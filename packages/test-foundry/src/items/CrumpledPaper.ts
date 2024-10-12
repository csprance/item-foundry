import { BaseItem } from '~/basetypes';
import { ItemCategory, Quality, Rarity } from '~/enums';
import { LocalizedText } from '~/properties';

export class CrumpledPaper extends BaseItem {
  name = new LocalizedText({ text: 'Crumpled Paper' });
  description = new LocalizedText({
    text: 'A crumpled piece of paper, someones trash.',
  });
  weight = 0.1;
  rarity = Rarity.Trash;
  category = ItemCategory.Consumable;
  quality = Quality.Poor;
  visuals = '/art/item_visuals.fbx';
  stackSize = 1;
}
