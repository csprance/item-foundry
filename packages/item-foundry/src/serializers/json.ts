import { type Item } from '../Item.ts';
import {
  getPropertyMetadata,
  getSerializableProperties,
} from '../decorators/Property.ts';
import { serializeValue } from '../lib.ts';
import type { Serializer, SerializerOpts } from './index.ts';

export class JsonSerializer implements Serializer {
  serialize(item: Item, { includeMetadata }: SerializerOpts): string {
    const json: Record<string, any> = { id: item.id };
    const props = getSerializableProperties(item);
    const metadata = getPropertyMetadata(item);

    for (const prop of props) {
      const value = (item as any)[prop];
      json[prop] = serializeValue(value);

      if (includeMetadata && metadata[prop]) {
        json[`__${prop}`] = metadata[prop];
      }
    }
    if (includeMetadata) {
      json['__type'] = Object.getPrototypeOf(
        Object.getPrototypeOf(this),
      ).constructor.name;
    }

    return JSON.stringify(
      {
        ...json,
      },
      null,
      2,
    );
  }
}
