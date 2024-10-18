import { BaseItem } from '~/basetypes';
import { Rarity } from '~/enums';
import { LocalizedText } from '~/properties';

export class SharpStone extends BaseItem {
  name = new LocalizedText({ text: 'Sharp Stone' });
  description = new LocalizedText({
    text: 'A sharpened stone, useful for cutting or crafting.',
  });
  weight = 0.7;
  rarity = Rarity.Uncommon;
  visuals = '/art/sharp_stone_visuals.fbx';
  stackSize = 1;
}
