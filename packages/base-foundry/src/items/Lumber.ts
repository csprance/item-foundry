import { BaseItem } from '~/basetypes';
import { WeightCategory } from '~/enums/Weight';
import { ChoppedWood } from '~/items';
import { LocalizedText } from '~/properties';

export class Lumber extends BaseItem {
  name = new LocalizedText({ text: 'Lumber' });
  description = new LocalizedText({
    text: `Wood that has been refined and processed from ${ChoppedWood.name}.`,
  });
  weight = WeightCategory.Medium;
}
