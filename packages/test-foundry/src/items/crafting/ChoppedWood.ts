import {BaseItem} from '~/basetypes';
import {WeightCategory} from '~/enums/Weight';
import {LocalizedText} from '~/properties';

export class ChoppedWood extends BaseItem {
    name = new LocalizedText({text: 'Chopped Wood'});
    description = new LocalizedText({
        text: 'Wood chopped directly from a tree that has not been processed.',
    });
    weight = WeightCategory.Medium;
}
