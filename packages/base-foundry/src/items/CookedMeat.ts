import { BaseItem } from '~/basetypes';
import { LocalizedText } from '~/properties';

export class CookedMeat extends BaseItem {
  name = new LocalizedText({ text: 'Cooked Meat' });
  description = new LocalizedText({
    text: 'A piece of cooked meat, can be eaten or used in recipes.',
  });
  weight = 0.9;
  visuals = '/art/cooked_meat_visuals.fbx';
  stackSize = 10;
}
