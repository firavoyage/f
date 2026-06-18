// 1. Declare the symbol as a unique type
const ErrSymbol: unique symbol = Symbol("parse_error");

// 2. Build an open object signature that allows any standard dynamic key
type BroadObject = { [key: string | number | symbol]: any };

// 3. Create the direct type using Omit and a Mapped Type loop
type AnyExceptErr = 

  | string | number | boolean | bigint | symbol | null | undefined
  | any[]
  | (Omit<BroadObject, typeof ErrSymbol> & { [K in typeof ErrSymbol]?: never });

// --- HOW TO USE IT ---

// ✅ THESE COMPILE PROPERLY
const itemA: AnyExceptErr = "Hello World";
const itemB: AnyExceptErr = { name: "Alice", age: 30 };

// ❌ THIS WILL FAIL TO COMPILE (Blocks the forbidden object)
const itemC: AnyExceptErr = {
  [ErrSymbol]: true,
  message: "Failed to parse"
};
