import { BaseItem } from '~/basetypes';
import { LocalizedText } from '~/properties';

export class RawMeat extends BaseItem {
  name = new LocalizedText({ text: 'Raw Meat' });
  description = new LocalizedText({
    text: 'A piece of uncooked meat, can be cooked or used in recipes.',
  });
  weight = 1.0;
  visuals = '/art/raw_meat_visuals.fbx';
  stackSize = 10;
}
