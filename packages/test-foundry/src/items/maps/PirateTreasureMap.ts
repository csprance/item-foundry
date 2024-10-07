import {BaseItem} from '~/basetypes';
import {Quality, Rarity} from '~/enums';
import {LocalizedText} from '~/properties';

export class PirateTreasureMap extends BaseItem {
    name = new LocalizedText({text: 'Pirate Treasure Map'});
    description = new LocalizedText({
        text: 'An old pirate treasure map containing the location to buried treasure somewhere.',
    });
    quality = Quality.Antique;
    rarity = Rarity.Epic;
}
