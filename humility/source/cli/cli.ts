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

export function cli(declaration: declaration) {
  const global_options = declaration.options ?? [];

  function help(
    command_name?: string,
    terminal_width = 80
  ): string {
    if (command_name) {
      const cmd = declaration.commands[command_name];
      if (!cmd) {
        return `error: unknown command '${command_name}'\n\nUsage: ${declaration.name} ${command_name} [OPTIONS]\n\nOptions:\n  -h, --help       print help`;
      }

      const options_lines = (cmd.options ?? []).map((opt) => {
        const { name, has_value } = parse_flag(opt.flag);
        const opt_str = opt.alias ? `-${opt.alias}, ` : "  ";
        return `${opt_str}${opt.flag}  ${opt.description}`;
      });

      const args_line = cmd.arguments_?.length
        ? ` ${cmd.arguments_.map((a) => a.required ? `<${a.name}>` : `[${a.name}]`).join(" ")}`
        : "";

      return `${cmd.description}

Usage: ${declaration.name} ${command_name}${args_line} [OPTIONS]

Options:
${options_lines.join("\n")}`;
    }

    const commands_lines = Object.entries(declaration.commands).map(
      ([name, cmd]) => `  ${name}    ${cmd.description}`
    );

    const options_lines = global_options.map((opt) => {
      const { name, has_value } = parse_flag(opt.flag);
      const opt_str = opt.alias ? `-${opt.alias}, ` : "  ";
      return `${opt_str}${opt.flag}  ${opt.description}`;
    });

    return `${declaration.name} ${declaration.version}

${declaration.description}

Usage: ${declaration.name} <command> [options]

Commands:
${commands_lines.join("\n")}

Options:
${options_lines.join("\n")}`;
  }

  function parse(args: string[]) {
    const processed: string[] = [];
    let i = 0;

    while (i < args.length) {
      const arg = args[i];

      if (arg === "-v" || arg === "--version") {
        log(declaration.version);
        return;
      }

      if (arg === "-h" || arg === "--help") {
        log(help());
        return;
      }

      if (arg.startsWith("-")) {
        const opt_name = arg.replace(/^-+/, "").split("=")[0];
        const opt_value = arg.includes("=") ? arg.split("=")[1] : args[i + 1];

        const opt = global_options.find((o) => {
          const { name } = parse_flag(o.flag);
          return name === opt_name || o.alias === opt_name;
        });

        if (opt) {
          const { name } = parse_flag(opt.flag);
          processed[name] = opt_value ?? true;
          if (!opt_value && !arg.includes("=")) i++;
        } else {
          processed[opt_name] = true;
        }
        i++;
        continue;
      }

      if (arg in declaration.commands) {
        const cmd_name = arg;
        const cmd = declaration.commands[cmd_name];
        const cmd_args: string[] = [];
        i++;

        while (i < args.length && !args[i].startsWith("-")) {
          cmd_args.push(args[i]);
          i++;
        }

        const cmd_opts: Record<string, any> = {};
        while (i < args.length) {
          const opt_arg = args[i];

          if (opt_arg === "-h" || opt_arg === "--help") {
            log(help(cmd_name));
            return;
          }

          if (opt_arg.startsWith("-")) {
            const opt_name = opt_arg.replace(/^-+/, "").split("=")[0];
            const opt_value = opt_arg.includes("=")
              ? opt_arg.split("=")[1]
              : args[i + 1];

            const opt = cmd.options?.find((o) => {
              const { name } = parse_flag(o.flag);
              return name === opt_name || o.alias === opt_name;
            });

            if (opt) {
              const { name } = parse_flag(opt.flag);
              cmd_opts[name] = opt_value ?? true;
              if (!opt_value && !opt_arg.includes("=")) i++;
            } else {
              cmd_opts[opt_name] = opt_value ?? true;
            }
          }
          i++;
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

        const final_args = { ...processed, ...cmd_arguments, ...cmd_opts };
        cmd.handler(final_args);
        return;
      }

      processed.push(arg);
      i++;
    }

    log(help());
  }

  return { declaration, help, parse };
}

const hello = cli({
  name: "hello",
  description: "Say hello",
  version: "0.0.0",
  options: [{ flag: "-v, --version", description: "print version" }],
  commands: {
    hello: {
      description: "say hello",
      arguments_: [{ name: "name", required: false }],
      options: [{ flag: "--name <name>", description: "name to greet" }],
      handler: (args) => {
        const name = args.name ?? args["name"] ?? "world";
        log(`Hello, ${name}!`);
      },
    },
  },
});

const args = process.argv.slice(2);
hello.parse(args);