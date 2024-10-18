#!/bin/env node
import cli from "./cli";
import * as Commands from "./commands";
import { importToArray } from "./lib";

// Assuming each command is a function exported by name
// Loop over the keys of the exported commands
for (const command of importToArray(Commands)) {
  cli.register(command);
}

// Run and exit the CLI
cli.runExit(process.argv.slice(2));
