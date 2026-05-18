import { Command } from 'commander';

const program = new Command();

// 1. Global CLI Configuration
program
  .name('fileutil')
  .description('A robust Node.js CLI tool for processing text files')
  .version('2.1.0')
  .option('-v, --verbose', 'Print detailed execution logs', false);

// 2. Subcommand: "count"
program
  .command('count')
  .description('Count lines or words in a target file')
  .argument('<filepath>', 'Path to the target file to analyze')
  .option('-w, --words', 'Count words instead of lines', false)
  .option('-m, --min <number>', 'Filter out lines with fewer characters than this number', parseInt)
  .action((filepath, options) => {
    // Access global options from the parent command
    const globalOptions = program.opts();
    
    if (globalOptions.verbose) {
      console.log(`[LOG] Starting analysis on: ${filepath}`);
    }

    console.log(`Analyzing file: ${filepath}`);
    console.log(`Mode: ${options.words ? 'Word Count' : 'Line Count'}`);
    
    if (options.min) {
      console.log(`Minimum character threshold: ${options.min}`);
    }
  });

// 3. Subcommand: "backup"
program
  .command('backup')
  .description('Create a secured copy of a directory')
  .requiredOption('-d, --destination <path>', 'Directory where the backup ZIP will be saved')
  .option('--dry-run', 'Simulate the backup without writing files')
  .action((options) => {
    if (options.dryRun) {
      console.log(`[DRY RUN] Would backup to: ${options.destination}`);
      return;
    }
    console.log(`Backup successfully created at: ${options.destination}`);
  });

// 4. Parse Terminal Arguments
program.parse(process.argv);
