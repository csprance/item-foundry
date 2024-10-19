import { ItemFoundry } from '@qtg/base-foundry';
import { SerializationFormat } from '@qtg/item-foundry';
import { Option } from 'clipanion';

import { FBCommand } from '../FBCommand.ts';
import { CommandName } from '../lib';

export class ExportFoundry extends FBCommand {
  static paths = [[CommandName.ExportFoundry]];
  static usage = FBCommand.Usage({
    category: 'Utility',
    details: 'Exports the foundry',
    description:
      'Exports the foundry to the correct location using the specified serializer',
  });

  exportDir = Option.String('-d,--dir', './export', {
    description: 'Where to export to',
  });
  serializer: SerializationFormat = Option.String('-s,--serializer', 'json', {
    description: 'What serializer to use',
  });
  includeMetadata = Option.Boolean('-m,--includeMetadata', false, {
    description: 'Should we export the metadata also',
  });

  async execute() {
    this.log(`Executing Export to ${this.exportDir} - as ${this.serializer}`);
    const foundry = new ItemFoundry();
    foundry.export(this.exportDir, this.serializer, this.includeMetadata);
  }
}
