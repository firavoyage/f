import chalk from "chalk";

type flag = string;
type alias = string;

type option = {
  flag: flag;
  description: string;
  alias?: alias;
  has_value?: boolean;
};

type command = {
  description: string;
  options?: option[];
  arguments_?: argument[];
  handler: (args: args) => void | Promise<void>;
};

type argument = {
  name: string;
  required?: boolean;
  variadic?: boolean;
};

type args = Record<string, any>;

type declaration = {
  name: string;
  description: string;
  version: string;
  options?: option[];
  commands: Record<string, command>;
};

function parse_flag(flag: flag): { name: string; has_value: boolean } {
  const parts = flag.split(" ");
  const name = parts[parts.length - 1];
  const has_value = flag.includes("<") || flag.includes("[");
  return { name, has_value };
}

export function parse(declaration: declaration, args: string[]) {
  const global_options = [
    { flag: "-h, --help", description: "print help" },
    ...(declaration.options ?? [])
  ];

  function help(
    command_name?: string,
    terminal_width = 80
  ): string {
    if (command_name) {
      const cmd = declaration.commands[command_name];
      if (!cmd) {
        return `error: unknown command '${command_name}'\n\nUsage: ${declaration.name} ${command_name} [OPTIONS]\n\nOptions:\n  -h, --help       print help`;
      }

      const options_lines = [
        { flag: "-h, --help", description: "print help" },
        ...(cmd.options ?? [])
      ].map((opt) => {
        const { name, has_value } = parse_flag(opt.flag);
        const opt_str = opt.alias ? chalk.bold(`-${opt.alias}, `) : "  ";
        const flag_str = has_value ? chalk.bold(opt.flag) : chalk.bold(opt.flag);
        return `${opt_str}${flag_str}  ${opt.description}`;
      });

      const args_line = cmd.arguments_?.length
        ? ` ${cmd.arguments_.map((a) => a.required ? chalk.bold(`<${a.name}>`) : chalk.bold(`[${a.name}]`)).join(" ")}`
        : "";

      return `${cmd.description}

${chalk.bold("Usage")}: ${chalk.bold(declaration.name)} ${chalk.bold(command_name)}${args_line} [OPTIONS]

${chalk.bold("Options")}:
${options_lines.join("\n")}`;
    }

    const commands_lines = Object.entries(declaration.commands).map(
      ([name, cmd]) => `  ${chalk.bold(name)}    ${cmd.description}`
    );

    const options_lines = global_options.map((opt) => {
      const { name, has_value } = parse_flag(opt.flag);
      const opt_str = opt.alias ? chalk.bold(`-${opt.alias}, `) : "  ";
      const flag_str = has_value ? chalk.bold(opt.flag) : chalk.bold(opt.flag);
      return `${opt_str}${flag_str}  ${opt.description}`;
    });

    return `${declaration.description}

${chalk.bold("Usage")}: ${chalk.bold(declaration.name)} ${chalk.bold("<command>")} [options]

${chalk.bold("Commands")}:
${commands_lines.join("\n")}

${chalk.bold("Options")}:
${options_lines.join("\n")}`;
  }

  function parse_flags(
    arg_list: string[],
    available_options: option[],
    start_idx: number
  ): { opts: Record<string, any>; new_idx: number } {
    const opts: Record<string, any> = {};
    let i = start_idx;

    while (i < arg_list.length) {
      const arg = arg_list[i];

      if (arg === "-h" || arg === "--help") {
        return { opts: { ...opts, __help: true }, new_idx: i };
      }

      if (arg === "-v" || arg === "--version") {
        return { opts: { ...opts, __version: true }, new_idx: i };
      }

      if (!arg.startsWith("-")) {
        break;
      }

      const opt_name = arg.replace(/^-+/, "").split("=")[0];
      const opt_value = arg.includes("=") ? arg.split("=")[1] : arg_list[i + 1];

      const opt = available_options.find((o) => {
        const { name } = parse_flag(o.flag);
        return name === opt_name || o.alias === opt_name;
      });

      if (opt) {
        const { name } = parse_flag(opt.flag);
        opts[name] = opt_value ?? true;
        if (!opt_value && !arg.includes("=")) i++;
      } else {
        opts[opt_name] = opt_value ?? true;
      }
      i++;
    }

    return { opts, new_idx: i };
  }

  function find_command(args_list: string[]): { name: string; idx: number } | null {
    for (let i = 0; i < args_list.length; i++) {
      if (args_list[i] in declaration.commands) {
        return { name: args_list[i], idx: i };
      }
    }
    return null;
  }

  const processed: string[] = [];

  const cmd_info = find_command(args);
  if (cmd_info) {
    const cmd_name = cmd_info.name;
    const cmd = declaration.commands[cmd_name];
    const cmd_args: string[] = [];

    const idx = cmd_info.idx;

    let pre_cmd_idx = 0;
    const pre_cmd_opts: Record<string, any> = {};
    while (pre_cmd_idx < idx) {
      const arg = args[pre_cmd_idx];
      if (arg.startsWith("-")) {
        const opt_name = arg.replace(/^-+/, "").split("=")[0];
        const opt_value = arg.includes("=") ? arg.split("=")[1] : args[pre_cmd_idx + 1];

        const opt = cmd.options?.find((o) => {
          const { name } = parse_flag(o.flag);
          return name === opt_name || o.alias === opt_name;
        });

        if (opt) {
          const { name } = parse_flag(opt.flag);
          pre_cmd_opts[name] = opt_value ?? true;
          if (!opt_value && !arg.includes("=")) pre_cmd_idx++;
        } else {
          const global_opt = global_options.find((o) => {
            const { name } = parse_flag(o.flag);
            return name === opt_name || o.alias === opt_name;
          });
          if (global_opt) {
            const { name } = parse_flag(global_opt.flag);
            pre_cmd_opts[name] = opt_value ?? true;
            if (!opt_value && !arg.includes("=")) pre_cmd_idx++;
          } else {
            pre_cmd_opts[opt_name] = opt_value ?? true;
          }
        }
      }
      pre_cmd_idx++;
    }

    let cmd_start = idx + 1;
    while (cmd_start < args.length && !args[cmd_start].startsWith("-")) {
      cmd_args.push(args[cmd_start]);
      cmd_start++;
    }

    const { opts: global_opts } = parse_flags(args, global_options, 0);

    let cmd_flags_idx = cmd_start;
    const cmd_opts: Record<string, any> = {};
    while (cmd_flags_idx < args.length) {
      const arg = args[cmd_flags_idx];
      if (arg === "-h" || arg === "--help") {
        log(help(cmd_name));
        return;
      }
      if (arg === "-v" || arg === "--version") {
        log(declaration.version);
        return;
      }
      if (!arg.startsWith("-")) {
        cmd_flags_idx++;
        continue;
      }

      const opt_name = arg.replace(/^-+/, "").split("=")[0];
      const opt_value = arg.includes("=") ? arg.split("=")[1] : args[cmd_flags_idx + 1];

      const opt = cmd.options?.find((o) => {
        const { name } = parse_flag(o.flag);
        return name === opt_name || o.alias === opt_name;
      });

      if (opt) {
        const { name } = parse_flag(opt.flag);
        cmd_opts[name] = opt_value ?? true;
        if (!opt_value && !arg.includes("=")) cmd_flags_idx++;
      } else {
        const global_opt = global_options.find((o) => {
          const { name } = parse_flag(o.flag);
          return name === opt_name || o.alias === opt_name;
        });
        if (global_opt) {
          const { name } = parse_flag(global_opt.flag);
          cmd_opts[name] = opt_value ?? true;
          if (!opt_value && !arg.includes("=")) cmd_flags_idx++;
        } else {
          cmd_opts[opt_name] = opt_value ?? true;
        }
      }
      cmd_flags_idx++;
    }

    const cmd_arguments: args = {};

    if (cmd.arguments_) {
      cmd.arguments_.forEach((arg_def, idx) => {
        if (arg_def.variadic) {
          cmd_arguments[arg_def.name] = cmd_args.slice(idx);
        } else if (idx < cmd_args.length) {
          cmd_arguments[arg_def.name] = cmd_args[idx];
        }
      });
    }

    const final_args = { ...global_opts, ...pre_cmd_opts, ...cmd_arguments, ...cmd_opts };
    cmd.handler(final_args);
    return;
  }

  log(help());
}