import { stringify } from 'yaml';
import { append, cache } from 'lib/file';

type log_info = typeof log_info
type log_warn = typeof log_warn
type log_error = typeof log_error
declare global {
  var log_info: log_info
  var log_warn: log_warn
  var log_error: log_error
}

/**
 * log into log file
 * 
 * todo: wrap in handle to slience file writing errors? (non critical)
 * 
 * log could not fail
 */
async function log_into_file(type: 'info' | 'warn' | 'error', message: string, ...payloads: object[]) {
  const log_file = cache('log.log')
  // vscode renders uppercase well out of the box
  await append(log_file, `${new Date().toISOString()} ${type.toUpperCase()} ${message}\n`)
  for (const payload of payloads) {
    // yaml stringify always appends a newline at the end
    await append(log_file, stringify(payload))
  }
}

export async function log_info(message: string, ...payloads: object[]) {
  await log_into_file('info', message, ...payloads)
}

export async function log_warn(message: string, ...payloads: object[]) {
  await log_into_file('warn', message, ...payloads)
}

export async function log_error(message: string, ...payloads: object[]) {
  await log_into_file('error', message, ...payloads)
}
