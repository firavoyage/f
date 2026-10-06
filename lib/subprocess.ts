import { execSync, spawn as _spawn } from "node:child_process"

type run = Partial<{
  cwd: string
  userspace: boolean | string
}>

/**
 * run a command
 * 
 * returns string stdout
 * 
 * userspace is linux specific, get the primary user (or fiven) and their 
 * 
 * better to 
 */
export function run(command: string, options: run) {

  return execSync(command, { encoding: 'utf-8', ...options })
}

type spawn = Partial<{
  cwd: string
  userspace: boolean | string
  stdout: fn
  stderr: fn
  finish: fn
}>

export function spawn(command: string, options: spawn) {
  const { stdout, stderr, finish } = options

  const process = _spawn(command, options)

  if (stdout) {
    process.stdout.on('data', (data) => {
      stdout(str(data))
    })
  }

  if (stderr) {
    process.stderr.on('data', (data) => {
      stderr(str(data))
    })
  }

  if (finish) {
    process.on('close', (code, signal) => {
      finish(code, signal)
    })
  }

  return process
}
