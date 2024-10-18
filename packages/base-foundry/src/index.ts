import { Item } from '@qtg/item-foundry';
import * as fs from 'node:fs';
import * as path from 'node:path';
import * as process from 'node:process';

import * as Items from './items/index.ts';
import * as Recipes from './recipes/index.ts';

export class ItemFoundry {
  items = mapItemClasses(Items);
  recipes = mapItemClasses(Recipes);

  public export() {
    for (const item of [this.items, this.recipes].flat()) {
      const exportPath = path.join(process.cwd(), 'export', `${item.id}.json`);
      // Write the JSON data to the file
      const directoryPath = path.dirname(exportPath);
      fs.mkdirSync(directoryPath, { recursive: true });
      fs.writeFileSync(exportPath, JSON.stringify(item.toJSON(false), null, 2));
      console.log(`Exported: ${exportPath}`);
    }
  }
}

export const mapItemClasses = (recipes: typeof Recipes | typeof Items) =>
  Object.values(recipes)
    .map((ItemClass) => {
      const instance = new ItemClass();
      const validations = instance.validate();
      if (validations.length === 0) {
        return instance;
      } else {
        console.log('Invalid instance: ', validations, instance);
      }
    })
    .filter(Boolean) as Item[];
