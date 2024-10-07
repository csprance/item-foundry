import {BaseItem} from '~/basetypes';
import {WeightCategory} from '~/enums/Weight';
import {LocalizedText} from '~/properties';
import {ChoppedWood} from "~/items";

export class Lumber extends BaseItem {
    name = new LocalizedText({text: 'Lumber'});
    description = new LocalizedText({
        text: `Wood that has been refined and processed from ${ChoppedWood.name}.`,
    });
    weight = WeightCategory.Medium;
}
