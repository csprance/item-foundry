import {LocalizedText} from "~/properties";
import {ItemCategory, Rarity} from "~/enums";
import {BaseItem} from "~/basetypes";

export class Herbs extends BaseItem {
    name = new LocalizedText({ text: 'Herbs' });
    description = new LocalizedText({
        text: 'A mix of wild herbs, useful for cooking.',
    });
    weight = 0.05;
    rarity = Rarity.Uncommon;
    category = ItemCategory.Consumable;
    visuals = '/art/herbs_visuals.fbx';
    stackSize = 20;
}
