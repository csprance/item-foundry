import { Hint, Item } from '@qtg/item-foundry';
import {
  LocalizedText,
  LocalizedTextProperty,
  RecipeIO,
  RecipeIOProperty,
} from '~/properties';

export abstract class Recipe extends Item {
  @RecipeIOProperty()
  @Hint('What is required to create this recipe')
  abstract inputs: RecipeIO;

  // When this is executed what does it create?
  @RecipeIOProperty()
  @Hint('What is created when this recipe is executed')
  abstract outputs: RecipeIO;

  @LocalizedTextProperty()
  @Hint('The name of the Recipe')
  abstract name: LocalizedText;

  @LocalizedTextProperty()
  @Hint('The description of the recipe and what it creates')
  abstract description: LocalizedText;
}
