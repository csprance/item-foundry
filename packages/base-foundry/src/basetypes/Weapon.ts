import { BaseItem } from '~/basetypes/BaseItem';
import { Category } from '~/enums';

export abstract class Weapon extends BaseItem {
  category: Category = Category.Weapon;
}
