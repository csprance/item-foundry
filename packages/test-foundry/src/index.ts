// TODO: Build the JSON Item database here
import * as Items from './items';
import * as Recipes from './recipes';

const items: any[] = [];
Object.entries(Items).forEach(([className, ItemClass]) => {
  console.log(`Item name: ${className}`, ItemClass);
  const instance = new ItemClass();
  if (instance.validate().length === 0) {
    items.push(instance.toJSON());
  }
});
console.log(items);

const recipes: any[] = [];
Object.entries(Recipes).forEach(([className, ItemClass]) => {
  console.log(`Recipe name: ${className}`, ItemClass);
  const instance = new ItemClass();
  if (instance.validate().length === 0) {
    recipes.push(instance.toJSON());
  }
});
console.log(recipes);
