// items/instances/HealthPotion.ts
import { BasePotion } from '../basetypes';

export class HealthPotion extends BasePotion {
  id = 'potion_health';
  name = 'Health Potion';
  description = 'Restores 50 health points';
  healingAmount = 50;
}
