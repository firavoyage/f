/**
 * you can definitely parse from yaml
 */
const cli = {
  name: "hello",
  description: "Say hello",
  version: "0.0.0",
  options: [{flag: '-v, --version', description: 'print version' }],
  commands: {
    hello:{
      desc: 'say hello'
    }
  }
}

export function help(cli, command?) {
  const message = `${cli.description}

Usage: ${cli.name} <command> [options]

Commands:
  foo    do foo
  bar    do bar

Options:
  -h, --help       print help
  -v, --version    print version`

  log(message)
}

help(cli)
