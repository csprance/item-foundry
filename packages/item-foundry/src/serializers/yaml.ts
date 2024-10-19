import { type Item } from '../Item.ts';
import {
  getPropertyMetadata,
  getSerializableProperties,
} from '../decorators/Property.ts';
import { serializeValue } from '../lib.ts';
import type { Serializer, SerializerOpts } from './index.ts';

export class YamlSerializer implements Serializer {
  serialize(item: Item, { includeMetadata }: SerializerOpts): string {
    const props = getSerializableProperties(item);
    const metadata = getPropertyMetadata(item);

    let yaml = `id: ${item.id}\n`;

    for (const prop of props) {
      const value = serializeValue((item as any)[prop]);
      yaml += `${prop}: ${value}\n`;

      if (includeMetadata && metadata[prop]) {
        yaml += `__${prop}: ${metadata[prop]}\n`;
      }
    }

    if (includeMetadata) {
      const typeName = Object.getPrototypeOf(Object.getPrototypeOf(this))
        .constructor.name;
      yaml += `__type: ${typeName}\n`;
    }

    return yaml;
  }
}
