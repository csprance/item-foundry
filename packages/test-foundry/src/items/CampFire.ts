import { BaseItem } from '~/basetypes';
import { Quality, Rarity } from '~/enums';
import { LocalizedText } from '~/properties';

export class Campfire extends BaseItem {
  name = new LocalizedText({ text: 'Campfire' });
  description = new LocalizedText({
    text: 'A campfire to cook food and keep warm.',
  });
  weight = 3.0;
  rarity = Rarity.Common;
  quality = Quality.Standard;
  visuals = '/art/campfire_visuals.fbx';
  stackSize = 1;
}
