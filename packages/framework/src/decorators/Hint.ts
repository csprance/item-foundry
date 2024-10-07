// Hint decorator factory function
import {PROPERTY_METADATA} from "./Property";

export function Hint(hint: string) {
  return function (target: any, propertyKey: string) {
    // Retrieve existing metadata or initialize an empty object
    let metadata: { [key: string]: any } =
        Reflect.getMetadata(PROPERTY_METADATA, target) || {};
    // Add or update the hint in the metadata for the property
    metadata[propertyKey] = {...metadata[propertyKey], hint};
    Reflect.defineMetadata(PROPERTY_METADATA, metadata, target);
  };
}
