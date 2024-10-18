import { BaseItem } from '~/basetypes';
import { LocalizedText } from '~/properties';

export class Fiber extends BaseItem {
  name = new LocalizedText({ text: 'Fiber' });
  description = new LocalizedText({
    text: 'Plant fibers, useful for making rope or basic shelter.',
  });
  weight = 0.1;
  visuals = '/art/fiber_visuals.fbx';
  stackSize = 50;
}
