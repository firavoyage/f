import { Command, Option } from 'commander';
import chalk from 'chalk';

chalk.level = 1;

type cli_option = {
  flags: string;
  description: string;
  default?: any;
  choices?: string[];
};

type cli_command = {
  name: string;
  description: string;
  options?: cli_option[];
  action?: (...args: any[]) => void;
};

type cli_definition = {
  name: string;
  description: string;
  version?: string;
  options?: cli_option[];
  commands: cli_command[];
};

const bold = chalk.bold;

function bold_flags(flags: string): string {
  const parts = flags.split(',').map(p => p.trim());
  return parts.map(p => {
    const name = p.split(' ')[0];
    const rest = p.slice(name.length);
    return bold(name) + rest;
  }).join(', ');
}

function sub_help(definition: cli_definition, cmd: cli_command): void {
  console.log(cmd.description);
  console.log('');

  console.log(`${bold('Usage')}: ${bold(definition.name)} ${bold(cmd.name.split(' ')[0])}${cmd.name.includes('<') ? ' ' + cmd.name.split(' ').slice(1).join(' ') : ''} [options]`);
  console.log('');

  console.log(bold('Options') + ':');
  const max_opt_len = Math.max(
    ...(cmd.options || []).map((o) => o.flags.length)
  );

  for (const opt of cmd.options || []) {
    const padding = ' '.repeat(max_opt_len - opt.flags.length);
    let default_str = '';
    if (opt.default !== undefined) {
      if (typeof opt.default === 'string') {
        default_str = ` (default: "${opt.default}")`;
      } else {
        default_str = ` (default: ${opt.default})`;
      }
    }
    console.log(`  ${bold_flags(opt.flags)}${padding}  ${opt.description}${default_str}`);
  }

  console.log(`  ${bold('-h')}, ${bold('--help')}               display help for command`);
}

function help(definition: cli_definition): void {
  const { name, description, version, options, commands } = definition;

  console.log(description);
  console.log('');

  console.log(`${bold('Usage')}: ${bold(name)} [command] [options]`);
  console.log('');

  console.log(bold('Commands') + ':');
  const max_cmd_len = Math.max(
    ...commands.map((c) => {
      const parts = c.name.split(' ');
      return parts[0].length;
    })
  );

  for (const cmd of commands) {
    const cmd_name = cmd.name.split(' ')[0];
    const padding = ' '.repeat(max_cmd_len - cmd_name.length);
    console.log(`  ${bold(cmd_name)} ${cmd.name.slice(cmd_name.length + 1)}${padding}  ${cmd.description}`);
  }

  console.log('  ' + bold('help') + ' [command]           display help for command');
  console.log('');

  console.log(bold('Options') + ':');
  const max_opt_len = Math.max(
    ...(options || []).map((o) => o.flags.length)
  );

  for (const opt of options || []) {
    const padding = ' '.repeat(max_opt_len - opt.flags.length);
    let default_str = '';
    if (opt.default !== undefined) {
      default_str = ` (default: ${opt.default})`;
    }
    console.log(`  ${bold(opt.flags)}${padding}  ${opt.description}${default_str}`);
  }

  if (version) {
    console.log(`  ${bold('-v')}, ${bold('--version')}            output the version number`);
  }
  console.log(`  ${bold('-h')}, ${bold('--help')}               display help for command`);
}

export async function parse(definition: cli_definition, args: string[]): Promise<void> {
  const program = new Command();

  program
    .name(definition.name)
    .description(definition.description);

  if (definition.version) {
    program.version(definition.version, '-v, --version');
  }

  for (const opt of definition.options || []) {
    const commander_opt = new Option(opt.flags, opt.description);
    if (opt.default !== undefined) {
      commander_opt.default(opt.default);
    }
    if (opt.choices) {
      commander_opt.choices(opt.choices);
    }
    program.addOption(commander_opt);
  }

  for (const cmd of definition.commands) {
    const cmd_name = cmd.name.split(' ')[0];
    const command = new Command(cmd_name);
    command.description(cmd.description);

    const arg_part = cmd.name.slice(cmd_name.length).trim();
    if (arg_part) {
      command.arguments(arg_part);
    }

    for (const opt of cmd.options || []) {
      const commander_opt = new Option(opt.flags, opt.description);
      if (opt.default !== undefined) {
        commander_opt.default(opt.default);
      }
      if (opt.choices) {
        commander_opt.choices(opt.choices);
      }
      command.addOption(commander_opt);
    }

    if (cmd.action) {
      command.action(cmd.action);
    }

    command.outputHelp = () => {
      sub_help(definition, cmd);
    };

    program.addCommand(command);
  }

  program.outputHelp = () => {
    help(definition);
  };

  program.parse(args);
}