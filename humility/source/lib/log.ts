type log = typeof log
declare global {
  var log: log  
}

function clean_non_enum(obj: any, seen = new WeakSet()): any {
  // Return primitives, functions, and null immediately
  if (typeof obj !== 'object' || obj === null) {
    return obj;
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

// Custom log function that accepts any number of arguments
export function log(...args: any[]): void {
  const processedArgs = args.map(arg => clean_non_enum(arg));
  console.log(...processedArgs);
}