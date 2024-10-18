import { BaseItem } from '~/basetypes';
import { LocalizedText } from '~/properties';

export class IronOre extends BaseItem {
  name = new LocalizedText({ text: 'Iron Ore' });
  description = new LocalizedText({
    text: 'A clump of iron ore ready to be processed.',
  });
  weight = 2.5;
  visuals = '/art/iron_ore_visuals.fbx';
  stackSize = 64;
}
