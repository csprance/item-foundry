import {BaseItem} from '~/basetypes';
import {WeightCategory} from '~/enums/Weight';
import {LocalizedText} from '~/properties';

export class WoodenTable extends BaseItem {
    name = new LocalizedText({text: 'Wooden Table'});
    description = new LocalizedText({
        text: 'A basic wooden table',
    });
    weight = WeightCategory.Medium;
}
