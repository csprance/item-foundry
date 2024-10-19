import * as fs from 'node:fs';
import * as path from 'node:path';

export enum CommandName {
  ExportFoundry = 'export',
  Generate = 'generate',
}

/**
 * Takes an imported or required object and converts it to an array of its own properties.
 */
export function importToArray<Key extends string, PropType>(
  importObject: Record<Key, PropType>,
): PropType[] {
  const keys = Object.getOwnPropertyNames(importObject);

  // ES6 / TypeScript exports contain a __esModule property. Don't include that.
  return keys
    .filter((key) => key.indexOf('__') !== 0)
    .map((key) => (importObject as any)[key]);
}

export interface GenerateConfig {
  // Either a filepath or a prompt to use
  prompt: string;
  // The files that defines the base item schemas to provide to the code generator
  baseItemSchemas: string[];
  // How many items to generate
  quantity: number;
  // Where we want these weapons to end up at
  outDir: string;
}

export const itemGeneratorPrompt = `
You are to generate a TypeScript file that adheres to the item schema provided in the filename context. Only generate the code; do not add any commentary or explanations.

Follow these instructions:

Use the item schema defined in the provided file to generate new items.

Create a valid TypeScript module that defines these items, ensuring they adhere to the structure and constraints specified by the schema.

Make the code self-contained and ready to be used as part of a TypeScript project.

Do not include any extraneous text or comments; output only valid TypeScript code.

Remember, the goal is to create new item definitions that comply with the existing schema based on the user's prompt. No additional text should be included.
`;

/**
 * Read the generator config file in the root where the
 * CLI is run
 */
export function getConfig(configPath?: string): GenerateConfig {
  // Read and parse the seeker.json file
  try {
    const configFile = fs.readFileSync(
      configPath ? configPath : path.join(process.cwd(), 'generator.json'),
      'utf8',
    );
    return JSON.parse(configFile);
  } catch (error) {
    throw new Error(`Failed to read or parse config file, ${error}`);
  }
}
