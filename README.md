# Item Foundry

Item Foundry is a TypeScript-based framework designed to streamline the creation of robust, testable, and navigable item libraries for games and other applications. By leveraging TypeScript's powerful features such as decorators and classes, Item Foundry enables developers to define items with rigid yet extendable types and structures, ultimately serializing them into JSON or other formats for consumption in various systems.

## Table of Contents

- [Features](#features)
- [Why Item Foundry?](#why-item-foundry)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Project Structure](#project-structure)
- [Core Concepts](#core-concepts)
  - [Properties](#properties)
  - [Base Items](#base-items)
  - [Items](#items)
- [Defining Properties](#defining-properties)
- [Creating Base Items](#creating-base-items)
- [Defining Items](#defining-items)
- [Serialization and Validation](#serialization-and-validation)
- [Testing Items](#testing-items)
- [Conclusion](#conclusion)

## Features

- **TypeScript-Powered**: Utilize TypeScript's classes, decorators, and type system for robust item definitions.
- **Modular and Extensible**: Easily create reusable properties and base item types.
- **Serialization**: Serialize items into predictable JSON structures for use in any system.
- **Validation**: Enforce rules and constraints on item properties through decorators.
- **Metadata Support**: Include additional metadata, such as UI hints, directly in your item definitions.
- **Testable**: Validate and test items to ensure they conform to your schema and rules.

## Why Item Foundry?

While you could handcraft JSON files for your items, Item Foundry offers a more powerful and flexible approach:

- **Ease of Development**: Define items using TypeScript classes, reducing boilerplate and enhancing readability.
- **Maintainability**: Organize your codebase with clear separations between properties, base items, and item instances.
- **Type Safety**: Catch errors early with TypeScript's static type checking.
- **Reusability**: Create modular properties and base types that can be reused across multiple items.
- **Testing**: Easily test and validate items to ensure they meet your defined rules and constraints.

## Getting Started

### Installation

First, ensure you have Node.js and npm installed. Then, install Item Foundry via npm:

```bash
npm install item-foundry
```

### Project Structure

A typical Item Foundry project might look like this:

```
project-root/
├── src/
│   ├── framework/
│   ├── items/
│   │   ├── basetypes/
│   │   ├── properties/
│   │   └── instances/
│   └── index.ts
├── tests/
└── package.json
```

- **framework/**: Contains the core Item Foundry code (decorators, base classes, validators).
- **items/**: Your custom item definitions.
  - **basetypes/**: Abstract base item types.
  - **instances/**: Concrete item instances.
  - **properties/**: Reusable item properties.
- **tests/**: Your test files.

## Core Concepts

### Properties

> `@Property()`

Properties are the building blocks of items. They represent any attribute like damage, healing amount, durability, filepaths. Properties are defined by:

- **Serialization Logic**: Indicate how and if a property should be included when an item is serialized.
- **Validation Rules**: Enforce constraints on property values.
- **Metadata**: Attach additional information, such as UI hints.

### Base Items

Base items are abstract classes that define common properties and behaviors for a category of items (e.g., weapons, potions). They serve as templates for creating specific item instances.

### Items

Items are concrete instances of base items. They represent actual items in your game or application (e.g., "Excalibur" sword, "Health Potion").

## Defining Properties

Properties are defined using decorators that encapsulate serialization, validation, and metadata.

### Example: Creating a `Damage` Property Decorator

```typescript
// src/framework/properties/Damage.ts
import { Property, ValidationRule } from '../decorators/Property';
import { Validators } from '../validators';

export function Damage(options: { metadata?: Record<string, any> } = {}) {
  const validationRules: ValidationRule[] = [
    {
      validator: Validators.isPositiveNumber,
      message: 'Damage must be a positive number',
    },
    {
      validator: Validators.isInRange(1, 1000),
      message: 'Damage must be between 1 and 1000',
    },
  ];
  return Property({
    validate: validationRules,
    metadata: options.metadata,
  });
}
```

### Using the `Damage` Property in a Base Item

```typescript
// src/items/basetypes/BaseWeapon.ts
import { Item } from '../../framework/Item';
import { Damage } from '../../framework/properties/Damage';

export abstract class BaseWeapon extends Item {
  @Damage({ metadata: { uiHint: 'Weapon damage per hit' } })
  damage: number;
}
```

## Creating Base Items

Base items define the common structure and properties for a category of items.

### Example: Defining a `BaseWeapon` Class

```typescript
// src/items/basetypes/BaseWeapon.ts
import { Item } from '../../framework/Item';
import { Damage } from '../../framework/properties/Damage';
import { Durability } from '../../framework/properties/Durability';

export abstract class BaseWeapon extends Item {
  @Damage({ metadata: { uiHint: 'Weapon damage per hit' } })
  damage: number;

  @Durability({ metadata: { uiHint: 'Durability out of 100' } })
  durability: number;
}
```

## Defining Items

Items are concrete implementations of base items with specific property values.

### Example: Defining the `Excalibur` Item

```typescript
// src/items/instances/Excalibur.ts
import { BaseWeapon } from '../basetypes/BaseWeapon';

export class Excalibur extends BaseWeapon {
  id = 'weapon_excalibur';
  name = 'Excalibur';
  description = 'Legendary sword of King Arthur';
  damage = 1000;
  durability = 100;
}
```

### Example: Defining a `HealthPotion` Item

```typescript
// src/items/instances/HealthPotion.ts
import { BasePotion } from '../basetypes/BasePotion';

export class HealthPotion extends BasePotion {
  id = 'potion_health';
  name = 'Health Potion';
  description = 'Restores 50 health points';
  healingAmount = 50;
}
```

## Serialization and Validation

Item Foundry provides built-in methods for serializing items to JSON and validating them against defined rules.

### Serializing Items

```typescript
// src/index.ts
import { Excalibur } from './items/instances/Excalibur';

const excalibur = new Excalibur();
const serializedItem = excalibur.toJSON();
console.log(JSON.stringify(serializedItem, null, 2));
```

#### Output:

```json
{
  "id": "weapon_excalibur",
  "name": "Excalibur",
  "description": "Legendary sword of King Arthur",
  "damage": 1000,
  "durability": 100
}
```

### Validating Items

```typescript
// src/index.ts
const errors = excalibur.validate();
if (errors.length > 0) {
  console.error('Validation errors:', errors);
} else {
  console.log('Item is valid!');
}
```

## Testing Items

Testing ensures your items conform to your schema and behave as expected.

### Example: Testing an Item

```typescript
// test/itemValidation.test.ts
import { Excalibur } from '../src/items/instances/Excalibur';

test('Excalibur should be valid', () => {
  const excalibur = new Excalibur();
  const errors = excalibur.validate();
  expect(errors.length).toBe(0);
});

test('Excalibur should have correct damage', () => {
  const excalibur = new Excalibur();
  expect(excalibur.damage).toBe(1000);
});
```

## Conclusion

Item Foundry simplifies the process of creating a robust item library by harnessing the power of TypeScript. With modular properties, base items, and clear item definitions, you can easily build, test, and maintain a complex set of items. By enforcing rigid yet extendable types and structures, you ensure consistency and reliability in your items, all while benefiting from the flexibility of serialization and metadata inclusion.

Whether you're developing a game with thousands of items or building an application that requires complex item management, Item Foundry provides the tools and structure to make item creation efficient and enjoyable.

**Get started today and forge your item library with ease!**
