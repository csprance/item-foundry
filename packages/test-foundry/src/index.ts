// TODO: Build the JSON Item database here
import * as fs from 'node:fs';
import * as path from 'node:path';
import * as process from 'node:process';
import { mapItemClasses } from '~/utils';

import * as Items from './items';
import * as Recipes from './recipes';

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
