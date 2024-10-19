import type { Item } from '../Item.ts';
import { JsonSerializer } from './json.ts';
import { XmlSerializer } from './xml.ts';
import { YamlSerializer } from './yaml.ts';

export enum SerializationFormat {
  JSON = 'json',
  XML = 'xml', // Example for future formats
  YAML = 'yaml', // Example for future formats
}

export const serializers: Record<SerializationFormat, Serializer> = {
  [SerializationFormat.JSON]: new JsonSerializer(),
  [SerializationFormat.XML]: new XmlSerializer(),
  [SerializationFormat.YAML]: new YamlSerializer(),
};

export interface SerializerOpts {
  includeMetadata: boolean;
}

export interface Serializer {
  serialize(item: Item, opts: SerializerOpts): string;
}
