import { Recipe } from '~/basetypes';
import { Campfire } from '~/items/CampFire';
import { Rope } from '~/items/Rope';
import { Stick } from '~/items/Stick';
import { Stone } from '~/items/Stone';
import { LocalizedText, RecipeIO } from '~/properties';

export class CampfireRecipe extends Recipe {
  inputs = new RecipeIO([
    [Stone, 5],
    [Stick, 3],
    [Rope, 1],
  ]);
  outputs = new RecipeIO([[Campfire, 1]]);
  name = new LocalizedText({ text: 'Campfire Recipe' });
  description = new LocalizedText({
    text: 'Combine stones, sticks, and rope to create a campfire.',
  });
}
