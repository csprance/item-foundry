import { Recipe } from '~/basetypes';
import { RawMeat } from '~/items';
import { CookedMeat } from '~/items/CookedMeat';
import { LocalizedText, RecipeIO } from '~/properties';

export class CookedMeatRecipe extends Recipe {
  inputs = new RecipeIO([[RawMeat, 1]]);

  outputs = new RecipeIO([[CookedMeat, 1]]);

  name = new LocalizedText({ text: 'Cooked Meat Recipe' });
  description = new LocalizedText({
    text: 'Cook raw meat over a fire to create a nourishing meal.',
  });
}
