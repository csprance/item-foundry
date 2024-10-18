import { Weapon } from '~/basetypes';
import { LocCat, LocalizedText } from '~/properties';

export class Glock19 extends Weapon {
  name = new LocalizedText({
    text: 'Glock 19',
    category: LocCat.InventoryName,
  });

  description = new LocalizedText({
    text: 'The Glock 19 is a semi-automatic pistol popular with law enforcement agencies for its compact size, ease of use, and reliability in various situations.',
    category: LocCat.InventoryName,
  });

  weight = 0.68;
  visuals = '/weapons/default.fbx';
  icon = '/weapons/icons/default.png';
}
