import { stringify } from 'yaml';
import { append, cache } from 'lib/file';

type log = typeof log
type log_info = typeof log_info
type log_warn = typeof log_warn
type log_error = typeof log_error
declare global {
  var log: log
  var log_info: log_info
  var log_warn: log_warn
  var log_error: log_error
}

/**
 * remove all non enumerable keys in an object awa any nested object inside
 * 
 * breaks prototype chain
 */
function clean_non_enum(obj: any, seen = new WeakSet()): any {
  // Return primitives, functions, and null immediately
  if (typeof obj !== 'object' || obj === null) { // eslint-disable-line
    return obj;
  }

  // do not process non native object
  if (Object.getPrototypeOf(obj).constructor != Object) {
    return obj
  }

  // Prevent infinite loops from circular references
  if (seen.has(obj)) {
    return '[Circular]';
  }
  seen.add(obj);

  // Handle arrays by recursively cleaning their elements
  if (Array.isArray(obj)) {
    return obj.map(item => clean_non_enum(item, seen));
  }

  // Handle special built-in objects that JSON or spreads break
  if (obj instanceof Date) return new Date(obj.getTime());
  if (obj instanceof RegExp) return new RegExp(obj);

  const cleanObj: Record<string, any> = {};

  // Object.keys() natively extracts ONLY string-based, enumerable keys
  const visibleKeys = Object.keys(obj);

  for (const key of visibleKeys) {
    cleanObj[key] = clean_non_enum(obj[key], seen);
  }

  return cleanObj;
}

/**
 * log into console
 * 
 * todo: capure state of an object?
 */
export function log(...args: any[]): void {
  const processedArgs = args.map(arg => clean_non_enum(arg));
  console.log(...processedArgs);
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

