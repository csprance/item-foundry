import { FBCommand } from '../FBCommand.ts';
import { CommandName } from '../lib';

export class GenerateFoundry extends FBCommand {
  static paths = [[CommandName.Generate]];
  static usage = FBCommand.Usage({
    category: 'Utility',
    details: 'Generate Foundry Items based on the prompt',
    description: 'Generate foundry items based on the prompt using ollama',
  });

  async execute() {
    this.log(`Executing Generate with model `);
    // Step 1 - Collect all of the item schema from base item
  }
}
