compare

```ts
const ErrSymbol = Symbol("parse_error");

// 1. The generic ternary utility type
type IsAnyExceptErr<T> = (0 extends 1 & T ? never : T) extends object
  ? (typeof ErrSymbol extends keyof T ? never : T)
  : T;

// 2. The generic function that forces evaluation
function validate<T>(data: IsAnyExceptErr<T>): T {
  return data as T;
}

// --- VERIFICATION ---

// ✅ OK: Primitives and normal objects pass
const a = validate("hello"); 
const b = validate({ name: "Alice" }); 

// ❌ BLOCKED: Objects with the symbol turn into 'never' and trigger an error
validate({ [ErrSymbol]: true, msg: "failed" }); 
// Error: Argument of type '{ [ErrSymbol]: boolean; msg: string; }' is not assignable to parameter of type 'never'

// ❌ BLOCKED: Using 'any' to bypass the check is caught and blocked
validate({} as any); 
// Error: Argument of type 'any' is not assignable to parameter of type 'never'
```

```ts
// 1. Declare the symbol as a unique symbol
const ErrSymbol: unique symbol = Symbol("parse_error");

// 2. Build the broad object type that allows any dynamic key
type OpenObject = { [key: string | number | symbol]: any };

// 3. The fix: Use a Mapped Type [K in typeof ErrSymbol] instead of a direct computed key
type AnyExceptErr = 

  | string | number | boolean | bigint | symbol | null | undefined
  | any[]
  | (Omit<OpenObject, typeof ErrSymbol> & { [K in typeof ErrSymbol]?: never });

// --- VERIFICATION ---

// ✅ OK: Primitives compile perfectly
const a: AnyExceptErr = "hello";
const b: AnyExceptErr = 42;

// ✅ OK: Normal objects compile perfectly
const c: AnyExceptErr = { name: "Alice", age: 30 };

// ❌ BLOCKED: Objects containing the error symbol fail to compile (as desired!)
const d: AnyExceptErr = {
  [ErrSymbol]: true, // 👈 Error: Type 'boolean' is not assignable to type 'undefined'
  message: "Failed to parse"
};
```

