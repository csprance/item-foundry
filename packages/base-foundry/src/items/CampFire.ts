import { BaseItem } from '~/basetypes';
import { LocalizedText } from '~/properties';

export class Campfire extends BaseItem {
  name = new LocalizedText({ text: 'Campfire' });
  description = new LocalizedText({
    text: 'A campfire to cook food and keep warm.',
  });
  weight = 3.0;
  visuals = '/art/campfire_visuals.fbx';
  stackSize = 1;
}
