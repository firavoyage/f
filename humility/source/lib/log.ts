import { stringify } from 'yaml';
import { append, cache } from 'lib/file';
import { app_name } from './env';

type log = typeof log
declare global {
  var log: log
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
export function log(...args): void {
  const processedArgs = args.map(arg => clean_non_enum(arg));
  console.log(...processedArgs);
}

const log_file = cache('log.log')

/**
 * log into log file
 */
export async function log_info(message: string, ...payloads: object[]) {
  await append(log_file, `${new Date().toISOString()} INFO ${message}\n`)
  for (const payload of payloads) {
    await append(log_file, )
  }
}
