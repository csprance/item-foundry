import { BaseItem } from '~/basetypes';
import { LocalizedText } from '~/properties';

export class Stick extends BaseItem {
  name = new LocalizedText({ text: 'Stick' });
  description = new LocalizedText({
    text: 'A small stick, useful for crafting tools or starting fires.',
  });
  weight = 0.2;
  visuals = '/art/stick_visuals.fbx';
  stackSize = 10;
}
