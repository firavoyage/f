import chalk from 'chalk';

// --- 1. MODIFIERS ---
console.log(chalk.bold('Bold text'));
console.log(chalk.dim('Dim/faint text'));
console.log(chalk.italic('Italic text'));
console.log(chalk.underline('Underlined text'));
console.log(chalk.inverse('Inversed background and foreground'));
console.log(chalk.hidden('Hidden text (invisible but occupies space)'));
console.log(chalk.strikethrough('Strikethrough text'));
console.log(chalk.visible('Visible only if terminal supports color'));

// --- 2. FOREGROUND (TEXT) COLORS ---
console.log(chalk.black('Black text'));
console.log(chalk.red('Red text'));
console.log(chalk.green('Green text'));
console.log(chalk.yellow('Yellow text'));
console.log(chalk.blue('Blue text'));
console.log(chalk.magenta('Magenta text'));
console.log(chalk.cyan('Cyan text'));
console.log(chalk.white('White text'));
console.log(chalk.gray('Gray text'));

// --- 3. BRIGHT FOREGROUND COLORS ---
console.log(chalk.blackBright('Bright black'));
console.log(chalk.redBright('Bright red'));
console.log(chalk.greenBright('Bright green'));
console.log(chalk.yellowBright('Bright yellow'));
console.log(chalk.blueBright('Bright blue'));
console.log(chalk.magentaBright('Bright magenta'));
console.log(chalk.cyanBright('Bright cyan'));
console.log(chalk.whiteBright('Bright white'));

// --- 4. BACKGROUND COLORS ---
console.log(chalk.bgBlack.white('Black BG'));
console.log(chalk.bgRed('Red BG'));
console.log(chalk.bgGreen('Green BG'));
console.log(chalk.bgYellow.black('Yellow BG'));
console.log(chalk.bgBlue('Blue BG'));
console.log(chalk.bgMagenta('Magenta BG'));
console.log(chalk.bgCyan.black('Cyan BG'));
console.log(chalk.bgWhite.black('White BG'));
console.log(chalk.bgGray('Gray BG'));

// --- 5. BRIGHT BACKGROUND COLORS ---
console.log(chalk.bgBlackBright('Bright black BG'));
console.log(chalk.bgRedBright('Bright red BG'));
console.log(chalk.bgGreenBright('Bright green BG'));
console.log(chalk.bgYellowBright.black('Bright yellow BG'));
console.log(chalk.bgBlueBright('Bright blue BG'));
console.log(chalk.bgMagentaBright('Bright magenta BG'));
console.log(chalk.bgCyanBright.black('Bright cyan BG'));
console.log(chalk.bgWhiteBright.black('Bright white BG'));

// --- 6. ADVANCED CUSTOM COLORS ---
console.log(chalk.hex('#DEADED').bold('Custom Hex Color'));
console.log(chalk.rgb(15, 100, 204)('Custom RGB Color'));
console.log(chalk.bgHex('#333333').hex('#00FF00')('Custom Hex BG & FG'));
console.log(chalk.bgRgb(255, 220, 0).black('Custom RGB BG'));

// --- 7. CHAINING & NESTING ---
console.log(chalk.blue.bgRed.bold.underline('Chained: Blue text, Red BG, Bold, Underline'));
console.log(
  chalk.green(
    'Outer text is green ' + 
    chalk.blue.underline('inner text is blue and underlined') + 
    ' back to green'
  )
);

// --- 8. MULTIPLE ARGUMENTS & TEMPLATE LITERALS ---
console.log(chalk.yellow('Hello', 'World', 'with', 'multiple', 'arguments'));
console.log(chalk.cyan(`Template literal using variables: ${process.version}`));

// --- 9. UTILITIES (LEVELS & FORCE DISABLE) ---
// View system color support level (0 = None, 1 = Basic, 2 = 256 colors, 3 = Truecolor)
console.log(`Color Support Level: ${chalk.level}`);
