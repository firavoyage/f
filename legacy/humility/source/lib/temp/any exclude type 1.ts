// 1. Declare the symbol as a unique type
const ErrSymbol: unique symbol = Symbol("parse_error");

// 2. The generic utility type with the 'any' detection hack
type IsAnyExceptErr<T> = (0 extends 1 & T ? never : T) extends object
  ? (typeof ErrSymbol extends keyof T ? never : T)
  : T;

// 3. The generic validation function wrapper
function validateData<T>(data: IsAnyExceptErr<T>): T {
  return data as T;
}

// --- HOW TO USE IT ---

// ✅ THESE COMPILE PROPERLY
const validString = validateData("Hello World");
const validObject = validateData({ name: "Bob", age: 25 });

// ❌ THIS WILL FAIL TO COMPILE (Blocks the forbidden object)
validateData({ 
  [ErrSymbol]: true, 
  message: "Failed to parse" 
});

// ❌ THIS WILL FAIL TO COMPILE (Actively blocks the 'any' keyword cheat)
validateData({} as any);
