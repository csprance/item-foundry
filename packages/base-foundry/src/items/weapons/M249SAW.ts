import { Weapon } from '~/basetypes';
import { LocCat, LocalizedText } from '~/properties';

export class M249SAW extends Weapon {
  name = new LocalizedText({
    text: 'M249 SAW',
    category: LocCat.InventoryName
  });

  description = new LocalizedText({
    text: 'The M249 Squad Automatic Weapon (SAW) is a light machine gun used by military forces for automatic fire support, ideal for providing suppressive fire to squads.',
    category: LocCat.InventoryName
  });

  weight = 7.5;
  visuals = '/weapons/default.fbx';
  icon = '/weapons/icons/default.png';
}
