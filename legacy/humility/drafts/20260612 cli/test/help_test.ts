import { spawn } from 'child_process';

const test_cases = [
  {
    name: 'main help',
    args: ['greet.ts', 'help'],
    check: (output: string) => {
      return output.includes('\x1b[1mUsage\x1b[22m') &&
        output.includes('\x1b[1mCommands\x1b[22m') &&
        output.includes('\x1b[1mOptions\x1b[22m');
    }
  },
  {
    name: 'person command help',
    args: ['greet.ts', 'help', 'person'],
    check: (output: string) => {
      return output.includes('\x1b[1mUsage\x1b[22m: \x1b[1mgreeter\x1b[22m \x1b[1mperson\x1b[22m <name> [options]') &&
        output.includes('\x1b[1m-t\x1b[22m, \x1b[1m--title\x1b[22m <type>') &&
        !output.includes('\x1b[1m<name>\x1b[22m');
    }
  },
  {
    name: 'team command help',
    args: ['greet.ts', 'help', 'team'],
    check: (output: string) => {
      return output.includes('\x1b[1mUsage\x1b[22m: \x1b[1mgreeter\x1b[22m \x1b[1mteam\x1b[22m [options]') &&
        output.includes('\x1b[1m-i\x1b[22m, \x1b[1m--iterations\x1b[22m <number>');
    }
  }
];

for (const tc of test_cases) {
  const output = spawn('bun', ['greet.ts', ...tc.args.slice(1)], { cwd: '/home/fira/Documents/f/humility/source/cli' })
    .stdout.toString();
  
  const result = tc.check(output);
  console.log(`${tc.name}: ${result ? 'PASS' : 'FAIL'}`);
}