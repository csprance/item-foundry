import { Weapon } from '~/basetypes';
import { LocCat, LocalizedText } from '~/properties';

export class TaserX26 extends Weapon {
  name = new LocalizedText({
    text: 'Taser X26',
    category: LocCat.InventoryName,
  });

  description = new LocalizedText({
    text: 'The Taser X26 is a non-lethal electroshock weapon used by law enforcement to subdue suspects while minimizing lasting harm.',
    category: LocCat.InventoryName,
  });

  weight = 0.18;
  visuals = '/weapons/default.fbx';
  icon = '/weapons/icons/default.png';
}
