import { BaseItem } from '~/basetypes';
import { LocalizedText } from '~/properties';

export class Stone extends BaseItem {
  name = new LocalizedText({ text: 'Stone' });
  description = new LocalizedText({
    text: 'A small rock, useful for crafting basic tools.',
  });
  weight = 1.5;
  visuals = '/art/stone_visuals.fbx';
  stackSize = 20;
}
