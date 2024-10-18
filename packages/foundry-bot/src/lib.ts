import * as fs from 'node:fs';
import * as path from 'node:path';

import type { GeneratConfig } from './cli.ts';

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

/**
 * Read the seeker.json config file in the root where the
 * CLI is run
 */
export function getConfig(configPath?: string): GeneratConfig {
  // Read and parse the seeker.json file
  try {
    const configFile = fs.readFileSync(
      configPath ? configPath : path.join(process.cwd(), 'seeker.json'),
      'utf8',
    );
    return JSON.parse(configFile);
  } catch (error) {
    throw new Error('Failed to read or parse seeker.json');
  }
}
