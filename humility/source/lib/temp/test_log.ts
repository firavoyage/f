const secretSymbol = Symbol('hidden-symbol');
const testObject = {
  visibleProp: "I am visible",
  nested: {
    visibleChild: 123,
    [secretSymbol]: "hidden-nested-symbol"
  }
};

// Define a non-enumerable property
Object.defineProperty(testObject, 'hiddenNonEnum', {
  value: 'secret-string',
  enumerable: false
});

// 1. Standard console.log still shows everything
console.log("Standard log:", testObject); 

// 2. Your custom log strips them perfectly
log("Custom log:", testObject);
// Output: Custom log: { visibleProp: 'I am visible', nested: { visibleChild: 123 } }

class bar {
  foo = 'bar'
}

const foo = new bar()

/**
 * remove all non enumerable keys in an object awa any nested object inside
 * 
 * breaks prototype chain
 */
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

log(temp instanceof bar, clean_non_enum(temp) instanceof bar)
