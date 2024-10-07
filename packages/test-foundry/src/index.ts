// TODO: Build the JSON Item database here
import * as Items from './items';

const items: any[] = [];
Object.entries(Items).forEach(([className, ItemClass]) => {
  console.log(`Item name: ${className}`, ItemClass);
  const instance = new ItemClass();
  if (instance.validate().length === 0) {
    items.push(instance.toJSON());
  }
});
console.log(items);
