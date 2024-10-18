import { Weapon } from '~/basetypes';
import { LocCat, LocalizedText } from '~/properties';

export class M4Carbine extends Weapon {
  name = new LocalizedText({
    text: 'M4 Carbine',
    category: LocCat.InventoryName,
  });

  description = new LocalizedText({
    text: 'The M4 Carbine is a lightweight, gas-operated, air-cooled, magazine-fed, selective fire carbine. It is widely used by the U.S. military for its versatility and reliability.',
    category: LocCat.InventoryName,
  });

  weight = 3.77; // M16A4 realistic weight in kg
  visuals = '/weapons/default.fbx';
  icon = '/weapons/icons/default.png';
}
