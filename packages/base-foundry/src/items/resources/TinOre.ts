import { BaseItem } from '~/basetypes';
import { LocalizedText } from '~/properties';

export class CopperOre extends BaseItem {
  name = new LocalizedText({ text: 'Copper Ore' });
  description = new LocalizedText({
    text: 'A clump of copper ore ready to be processed.',
  });
  weight = 2.5;
  visuals = '/art/iron_ore_visuals.fbx';
  stackSize = 64;
}
