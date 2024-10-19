import { Cli } from 'clipanion';

import { name, version } from '../package.json';

const cli = new Cli({
  binaryLabel: `${name}`,
  binaryName: `foundry-bot`,
  binaryVersion: `${version}`,
});

export default cli;
