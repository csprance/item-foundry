import {BaseItem} from "~/basetypes";
import {LocalizedText} from "~/properties";
import {ItemCategory, Quality, Rarity} from "~/enums";

export class Pot extends BaseItem {
    name = new LocalizedText({ text: 'Pot' });
    description = new LocalizedText({
        text: 'A basic pot used for cooking stews and soups.',
    });
    weight = 2.0;
    rarity = Rarity.Common;
    category = ItemCategory.Equipment;
    quality = Quality.Standard;
    visuals = '/art/pot_visuals.fbx';
    stackSize = 1;
}
