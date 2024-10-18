import { BaseItem } from '~/basetypes';
import { Rarity } from '~/enums';
import { LocalizedText } from '~/properties';

export class Herbs extends BaseItem {
  name = new LocalizedText({ text: 'Herbs' });
  description = new LocalizedText({
    text: 'A mix of wild herbs, useful for cooking.',
  });
  weight = 0.05;
  rarity = Rarity.Uncommon;
  visuals = '/art/herbs_visuals.fbx';
  stackSize = 20;
}
