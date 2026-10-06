import { execSync, spawn as _spawn } from "node:child_process"

type run = Partial<{
  cwd: string
  userspace: boolean | string
}>

/**
 * run a command
 * 
 * returns the trimmed stdout as string
 * 
 * userspace is linux specific, 
 * (if you are already root, e.g. in sudo systemd)
 * to get the primary user on single user desktop (or a given string) 
 * and their default shell,
 * and run commands "normally"
 * 
 * better to run the whole script inside userspace
 */
export function run(command: string, options: run = {}) {
  const { userspace = false } = options
  if (userspace) {
    const primary_user = run("awk -F: '$3 >= 1000 && $3 < 60000 {print $1; exit}' /etc/passwd")
    const user = is(userspace, 'string') ? userspace : primary_user

    const default_shell = run(`getent passwd "${user}" | cut -d: -f7`)

    return run(`sudo -u '${user}' -i '${default_shell}' -c '${command}'`, { ...options, userspace: false })
  }

  return str(execSync(command, { encoding: 'utf-8', ...options })).trim()
}

type spawn = Partial<{
  cwd: string
  userspace: boolean | string
  stdout: fn
  stderr: fn
  finish: fn
}>

export function spawn(command: string, options: spawn = {}) {
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

log(run('ls', { userspace: 'foo' }))


