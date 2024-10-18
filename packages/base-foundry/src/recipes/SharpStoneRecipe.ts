import { Recipe } from '~/basetypes';
import { SharpStone, Stone } from '~/items';
import { LocalizedText, RecipeIO } from '~/properties';

export class SharpStoneRecipe extends Recipe {
  inputs = new RecipeIO([Stone]);
  outputs = new RecipeIO([SharpStone]);
  name = new LocalizedText({ text: 'Sharp Stone Recipe' });
  description = new LocalizedText({
    text: 'Sharpen a stone to create a basic cutting tool.',
  });
}
