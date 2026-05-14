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
