/**
 * idk if it could work well 
 */

import { exec } from 'node:child_process';
import { promisify } from 'node:util';

// const non_zero_exit = 'non_zero_exit'
// const non_empty_stderr = 'stderr'
// // const non_empty_stderr = 'non_empty_stderr'

// todo: ?
export async function run(command: string, options?: any) {
  const { stdout, stderr } = promisify(exec)(command, options);

  /**
   * todo: combine both, as if inside a normal terminal
   */

  // if (stderr) {
  //   throw err({ type: non_empty_stderr, message: stderr })
  // }

  // todo: ?
  return stdout as unknown as string
}
