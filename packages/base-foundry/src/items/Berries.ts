import { BaseItem } from '~/basetypes';
import { LocalizedText } from '~/properties';

export class Berries extends BaseItem {
  name = new LocalizedText({ text: 'Berries' });
  description = new LocalizedText({
    text: 'A handful of wild berries, edible and nutritious.',
  });
  weight = 0.1;
  visuals = '/art/berries_visuals.fbx';
  stackSize = 20;
}
