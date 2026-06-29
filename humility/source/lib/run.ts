import { exec as callback_exec } from 'node:child_process';
import { promisify } from 'node:util';

const non_zero_exit = 'non_zero_exit'
const non_empty_stderr = 'stderr'
// const non_empty_stderr = 'non_empty_stderr'

// todo: ?
export async function run(command: string, options?: any): Promise<string> {
  let exec_result;
  try {
    exec_result = await promisify(callback_exec)(command, options)
  } catch (e) {
    throw err({ type: non_zero_exit, message: e.message })
  }

  const { stdout, stderr } = exec_result

  if (stderr) {
    throw err({ type: non_empty_stderr, message: stderr })
  }

  // todo: ?
  return stdout as unknown as string
}
