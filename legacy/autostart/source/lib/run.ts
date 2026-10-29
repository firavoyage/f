import { exec } from 'node:child_process';
import { promisify } from 'node:util';

/**
 * Run a command and get the string of stdout
 */
export async function run(command: string, options?: any) {
  // @ts-expect-error stupid ts
  const { stdout, stderr } = promisify(exec)(command, options);

  // stderr generally does not matter when the exit code is zero, 
  // and it will throw when non zero

  // if (stderr) {
  //   throw err({ type: non_empty_stderr, message: stderr })
  // }

  return stdout as unknown as string
}
