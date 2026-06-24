import { exec as callback_exec } from 'node:child_process';
import { promisify } from 'node:util';

/**
 * execa does not do much. just write it myself.
 * 
 * handle does not expect error would have non standard props like code and stderr. 
 */
const exec = handle(promisify(callback_exec));

const non_zero_exit = 'non_zero_exit'
const non_empty_stderr = 'stderr'
// const non_empty_stderr = 'non_empty_stderr'

// todo: ?
export async function run(command: string, options?: any): Promise<Result<string>> {
  const exec_result = await exec(command, options);

  if (is_error(exec_result)) {
    return err({ type: non_zero_exit, message: exec_result.message })
  }

  const { stdout, stderr } = exec_result

  if (stderr) {
    return err({ type: non_empty_stderr, message: stderr })
  }

  // todo: ?
  return stdout as string
}
