import { Cli } from 'clipanion';

import { name, version } from '../package.json';

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

const cli = new Cli({
  binaryLabel: `${name}`,
  binaryName: `foundry-bot`,
  binaryVersion: `${version}`,
});

export default cli;
