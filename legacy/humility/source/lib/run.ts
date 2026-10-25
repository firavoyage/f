import { exec } from 'node:child_process';
import { promisify } from 'node:util';

/**
 * it will throw for non zero exit.
 * 
 * stderr is non critical for zero exit
 * 
 * i will not process it generally (likely no exceptions or abstraction leak)
 * 
 * no need to return
 */
export async function run(command: string, options?: any) {
  const { stdout, stderr } = promisify(exec)(command, options);

  // if (stderr) {
  //   throw err({ type: non_empty_stderr, message: stderr })
  // }

  return stdout as unknown as string
}
