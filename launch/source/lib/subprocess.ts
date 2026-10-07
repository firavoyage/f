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

  return trim_trailing_newline(str(execSync(command, { encoding: 'utf-8', ...options })))
}

type spawn = Partial<{
  cwd: string
  userspace: boolean | string
  stdout: fn
  stderr: fn
  finish: fn
}>

export function spawn(command: string, options: spawn = {}) {
  const { userspace = false, stdout, stderr, finish } = options
  if (userspace) {
    const primary_user = run("awk -F: '$3 >= 1000 && $3 < 60000 {print $1; exit}' /etc/passwd")
    const user = is(userspace, 'string') ? userspace : primary_user

    const default_shell = run(`getent passwd "${user}" | cut -d: -f7`)

    return spawn(`sudo -u '${user}' -i '${default_shell}' -c '${command}'`, { ...options, userspace: false })
  }

  const process = _spawn(command, { shell: true, ...options })

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

function trim_trailing_newline(s: string) {
  if (s.endsWith('\r\n')) {
    return s.slice(0, -2) // Remove last 2 characters
  }
  if (s.endsWith('\n') || s.endsWith('\r')) {
    return s.slice(0, -1) // Remove last 1 character
  }
  return s // Return unchanged if no trailing newline
}
