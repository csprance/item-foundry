import { type Item } from '../Item.ts';
import {
  getPropertyMetadata,
  getSerializableProperties,
} from '../decorators/Property.ts';
import { serializeValue } from '../lib.ts';
import type { Serializer, SerializerOpts } from './index.ts';

export class XmlSerializer implements Serializer {
  serialize(item: Item, { includeMetadata }: SerializerOpts): string {
    const props = getSerializableProperties(item);
    const metadata = getPropertyMetadata(item);

    let xml = `<Item id="${item.id}">`;

    for (const prop of props) {
      const value = serializeValue((item as any)[prop]);
      xml += `<${prop}>${value}</${prop}>`;

      if (includeMetadata && metadata[prop]) {
        xml += `<__${prop}>${metadata[prop]}</__${prop}>`;
      }
    }

    if (includeMetadata) {
      const typeName = Object.getPrototypeOf(Object.getPrototypeOf(this))
        .constructor.name;
      xml += `<__type>${typeName}</__type>`;
    }

    xml += '</Item>';

    return xml;
  }
}
