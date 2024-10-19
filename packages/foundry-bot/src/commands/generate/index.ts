import { Option } from 'clipanion';
import ollama from 'ollama';

import { FBCommand } from '../../FBCommand.ts';
import { CommandName, getConfig, itemGeneratorPrompt } from '../../lib.ts';

export class GenerateFoundry extends FBCommand {
  static paths = [[CommandName.Generate]];
  static usage = FBCommand.Usage({
    category: 'Utility',
    details: 'Generate Foundry Items based on the prompt',
    description: 'Generate foundry items based on the prompt using ollama',
  });

  configPath = Option.String('-c,--config', 'generate.json', {
    description: 'The path to the config file to use for generation',
  });

  async execute() {
    const config = getConfig(this.configPath);
    this.log(config);
    const response = await ollama.chat({
      messages: [
        {
          role: 'system',
          content: itemGeneratorPrompt,
        },
      ],
      model: 'llama3',
      options: undefined,
      tools: [],
    });

    this.log(`Executing Generate with model `, response.message);
    // Collect all of the item schema from base item and vectorize them
    // Get Base item Schemas Text
    // Get the User Prompt
    // Generate new items based on quantity specified
    // Give a way to test the new items added that they pass the test
    // Allow items that pass to be added
    // Send items that fail back through until they pass
  }
}
