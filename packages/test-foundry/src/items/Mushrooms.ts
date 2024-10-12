import {BaseItem} from "~/basetypes";
import {LocalizedText} from "~/properties";
import {ItemCategory, Quality, Rarity} from "~/enums";

export class Mushrooms extends BaseItem {
    name = new LocalizedText({ text: 'Mushrooms' });
    description = new LocalizedText({
        text: 'Wild mushrooms, edible and good for cooking.',
    });
    weight = 0.2;
    rarity = Rarity.Uncommon;
    category = ItemCategory.Consumable;
    quality = Quality.Standard;
    visuals = '/art/mushrooms_visuals.fbx';
    stackSize = 10;
}
