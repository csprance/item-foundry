import { Item } from '@qtg/item-foundry';
import {
  type SerializationFormat,
  serializers,
} from '@qtg/item-foundry/src/serializers';
import * as fs from 'node:fs';
import * as path from 'node:path';

import * as Items from './items/index.ts';
import * as Recipes from './recipes/index.ts';

export class ItemFoundry {
  items = mapItemClasses(Items);
  recipes = mapItemClasses(Recipes);

  public export(
    outDir: string,
    serializationFormat: SerializationFormat,
    includeMetadata: boolean,
  ) {
    const serializer = serializers[serializationFormat];
    for (const item of [this.items, this.recipes].flat()) {
      const exportPath = path.join(outDir, `${item.id}.json`);
      // Serialize the item and write it to disk
      const directoryPath = path.dirname(exportPath);
      fs.mkdirSync(directoryPath, { recursive: true });
      fs.writeFileSync(
        exportPath,
        serializer.serialize(item, { includeMetadata }),
      );
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
