import { expect, test } from 'bun:test';
import { ItemFoundry } from '~';

const foundry = new ItemFoundry();

test('Validate Recipes', () => {
  for (const recipe of foundry.recipes) {
    console.log(recipe.id);
    expect(recipe.validate()).toEqual([]);
  }
});

test('Validate Items', () => {
  for (const item of foundry.items) {
    console.log(item.id);
    expect(item.validate()).toEqual([]);
  }
});
