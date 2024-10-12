import {BaseItem} from "~/basetypes";
import {LocalizedText} from "~/properties";
import {ItemCategory, Quality, Rarity} from "~/enums";

export class Berries extends BaseItem {
    name = new LocalizedText({ text: 'Berries' });
    description = new LocalizedText({
        text: 'A handful of wild berries, edible and nutritious.',
    });
    weight = 0.1;
    rarity = Rarity.Common;
    category = ItemCategory.Consumable;
    quality = Quality.Standard;
    visuals = '/art/berries_visuals.fbx';
    stackSize = 20;
}
