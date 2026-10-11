import chalk, { Options } from 'chalk';

type cli = {
  name: string
  version: string
  description: string
  usage: Record<string, string>
  commands?: command[]
  options?: option[]
  tip?: string
}

type command = {
  command: string
  description: string
  action: fn
  args?: arg[]
  options?: option[]
}

type arg = {
  name: string
  type?: fn
  is_rest?: boolean
}

type option = {
  name: string
  type?: 'boolean' | fn // = string? or boolean?
}

export function evaluate(cli: cli, args?: any) {

}

type help = Options<{
  // desc gap in spaces
  description_gap: number
  indentation: number
  align: 'all' | 'heading' | 'off'
}>

function help(cli: cli, options_: help = {}) {
  const { name, description, usage, commands = [], options = [], tip } = cli
  const { description_gap = 4, align = 'all' } = options_

  // Modifiers
  const bold = chalk.bold;
  const italic = chalk.italic;
  const underline = chalk.underline;

  // Standard Foreground Colors
  const black = chalk.black;
  const red = chalk.red;
  const green = chalk.green;
  const yellow = chalk.yellow;
  const blue = chalk.blue;
  const magenta = chalk.magenta;
  const cyan = chalk.cyan;
  const white = chalk.white;

  // Bright Foreground Colors
  const bright_black = chalk.blackBright; // or chalk.gray / chalk.grey
  const bright_red = chalk.redBright;
  const bright_green = chalk.greenBright;
  const bright_yellow = chalk.yellowBright;
  const bright_blue = chalk.blueBright;
  const bright_magenta = chalk.magentaBright;
  const bright_cyan = chalk.cyanBright;
  const bright_white = chalk.whiteBright;

  // Combined Themes
  const heading = chalk.bold.greenBright;
  const cmd = chalk.bold.cyanBright; // command or flag
  const arg = chalk.cyan;            // argument

  let help_text = `${description}\n\n`

  help_text += heading('Usage:\n')


}

log(help().trim())
