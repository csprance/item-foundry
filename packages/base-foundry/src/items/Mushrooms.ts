import { BaseItem } from '~/basetypes';
import { Rarity } from '~/enums';
import { LocalizedText } from '~/properties';

export class Mushrooms extends BaseItem {
  name = new LocalizedText({ text: 'Mushrooms' });
  description = new LocalizedText({
    text: 'Wild mushrooms, edible and good for cooking.',
  });
  weight = 0.2;
  rarity = Rarity.Uncommon;
  visuals = '/art/mushrooms_visuals.fbx';
  stackSize = 10;
}
