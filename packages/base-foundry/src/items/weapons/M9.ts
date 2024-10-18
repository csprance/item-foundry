import { Weapon } from '~/basetypes/Weapon';
import { LocCat, LocalizedText } from '~/properties';

export class M9 extends Weapon {
  name = new LocalizedText({
    text: 'M9 Pistol',
    category: LocCat.InventoryName,
  });
  description = new LocalizedText({
    text: 'A standard issue m9 pistol. Looks very used.',
    category: LocCat.InventoryDescription,
  });
}
