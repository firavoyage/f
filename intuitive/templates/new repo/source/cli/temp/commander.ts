// Import both Command and Option directly from the library
import { Command, Option } from 'commander';

const program = new Command();

// Global Configuration
program
  .name('greeter')
  .description('An advanced greeting utility for production environments')
  .version('2.0.0')
  .option('-q, --quiet', 'Suppress all console logs except errors', false)
  .hook('preAction', (thisCommand, actionCommand) => {
    // Global middleware: Silences console if --quiet flag is passed
    if (thisCommand.opts().quiet) {
      console.log = () => {}; 
    }
  });

// Subcommand 1: person 
program
  .command('person <name>')
  .description('Greet an individual person with customized styles')
  .option('-t, --title <type>', 'Professional title prefix', 'Mr./Ms.')
  .option('-l, --lang <code|name>', 'Language selection', 'en')
  // FIX: Instantiated as an independent class, not a property of program
  .addOption(
    new Option('-s, --style <type>', 'Text presentation style')
      .choices(['normal', 'uppercase', 'lowercase'])
      .default('normal')
  )
  .action((name, options) => {
    let greeting = 'Hello';
    
    if (options.lang === 'es') greeting = 'Hola';
    if (options.lang === 'fr') greeting = 'Bonjour';

    let message = `${greeting}, ${options.title} ${name}.`;

    if (options.style === 'uppercase') message = message.toUpperCase();
    if (options.style === 'lowercase') message = message.toLowerCase();

    console.log(message);
  });

// Subcommand 2: team 
program
  .command('team')
  .description('Greet the entire development team')
  .option('-i, --iterations <number>', 'Number of times to print the cheer', (val) => parseInt(val, 10), 1)
  .action((options) => {
    const company = process.env.COMPANY_NAME || 'Acme Corp';
    
    for (let i = 0; i < options.iterations; i++) {
      console.log(`Go team ${company}! 🎉`);
    }
  });

// Parse the arguments provided by the user
program.parse(process.argv);
