import { BaseItem } from '~/basetypes/BaseItem';
import { Category } from '~/enums';
import { LocalizedText } from '~/properties';

export abstract class Weapon extends BaseItem {
  category: Category = Category.Weapon;
}
