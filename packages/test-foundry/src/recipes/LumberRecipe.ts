import { Recipe } from '~/basetypes';
import { ChoppedWood, Lumber } from '~/items';
import { LocalizedText, RecipeIO } from '~/properties';

export class LumberRecipe extends Recipe {
  inputs = new RecipeIO([ChoppedWood]);
  outputs = new RecipeIO([[Lumber, 10]]);
  name = new LocalizedText({ text: 'Lumber' });
  description = new LocalizedText({
    text: `Process ${ChoppedWood.name} to ${Lumber.name}`,
  });
}
