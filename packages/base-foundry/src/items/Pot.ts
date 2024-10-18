import { BaseItem } from '~/basetypes';
import { Category } from '~/enums';
import { LocalizedText } from '~/properties';

export class Pot extends BaseItem {
  name = new LocalizedText({ text: 'Pot' });
  description = new LocalizedText({
    text: 'A basic pot used for cooking stews and soups.',
  });
  weight = 2.0;
  category = Category.Equipment;
  visuals = '/art/pot_visuals.fbx';
  stackSize = 1;
}
