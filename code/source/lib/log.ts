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
