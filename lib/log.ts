import { format, now } from "lib/time"

type log = typeof log
declare global {
  var log: log
}

/**
 * Alias console.log as log
 * 
 * it might block stack trace (i.e. all errors are from log.ts) when wrapped in a fn
 */
export const log = console.log

export function format_log(message: string, type: 'info' | 'warn' | 'error' = 'info') {
  let line = `${log_time()} [${type}] ${message}`
  if (!line.endsWith('\n')) {
    line += '\n'
  }

  return line
}

function log_time() {
  return format(now(), '%F %T%:z')
}
