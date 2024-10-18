import { Weapon } from '~/basetypes';
import { LocCat, LocalizedText } from '~/properties';

export class M16A4 extends Weapon {
  name = new LocalizedText({
    text: 'M16A4',
    category: LocCat.InventoryName,
  });

  description = new LocalizedText({
    text: 'The M16A4 is a standard-issue military rifle that offers burst fire and exceptional accuracy, primarily used in infantry operations.',
    category: LocCat.InventoryName,
  });

  weight = 3.77;
  visuals = '/weapons/default.fbx';
  icon = '/weapons/icons/default.png';
}
