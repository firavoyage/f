import { parse } from "../cli";

const hello = {
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
};

const args = process.argv.slice(2);
parse(hello, args);