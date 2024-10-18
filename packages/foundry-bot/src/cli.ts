import { Cli } from 'clipanion';

import { name, version } from '../package.json';

export interface GeneratConfig {
  // Either a filepath or a prompt to use
  prompt: string;
  // The files that defines the base item schemas to provide to the code generator
  baseItemSchemas: string[];
  // The test template to use to validate an item
  testTemplate: string;
}

const cli = new Cli({
  binaryLabel: `${name}`,
  binaryName: `foundry-bot`,
  binaryVersion: `${version}`,
});

export default cli;
