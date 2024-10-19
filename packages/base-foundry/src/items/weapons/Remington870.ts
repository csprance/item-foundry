import { Weapon } from '~/basetypes';
import { LocCat, LocalizedText } from '~/properties';

export class Remington870 extends Weapon {
  name = new LocalizedText({
    text: 'Remington 870',
    category: LocCat.InventoryName,
  });

  description = new LocalizedText({
    text: 'The Remington 870 is a pump-action shotgun known for its durability and reliability. It is commonly used by law enforcement for tactical and breaching purposes.',
    category: LocCat.InventoryName,
  });

  weight = 3.6;
  visuals = '/weapons/default.fbx';
  icon = '/weapons/icons/default.png';
}
