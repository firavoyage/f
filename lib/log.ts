import { format, now } from 'lib/time'

/**
 * Alias console.log as log
 *
 * it might block stack trace (i.e. all errors are from log.ts) when wrapped in a fn
 */
export const { log, warn } = console

export function format_log(
  message: string,
  type: 'info' | 'warn' | 'error' = 'info',
) {
  let line = `${log_time()} [${type}] ${message}`
  if (!line.endsWith('\n')) {
    line += '\n'
  }

  return line
}

function log_time() {
  return format(now())
  // return format(now(), '%F %T%:z')
}

type log = typeof log
type warn = typeof warn
declare global {
  var log: log
  var warn: warn
}

