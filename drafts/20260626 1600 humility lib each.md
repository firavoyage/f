## how to overload a function in ts

To overload a function in TypeScript, you must <mark>declare<span> </span><strong>multiple "overload signatures"</strong><span> </span>followed by a<span> </span><strong>single "implementation signature"</strong></mark>. [link](https://dev.to/thinkster/typescript-function-overloading-k9i)

Because TypeScript compiles down to standard JavaScript (which does not support native function overloading), you can only write one actual function body. This single body uses runtime type-checking to decide how to handle the inputs. [link](https://stackoverflow.com/questions/13212625/typescript-function-overloading)

***

### Step-by-Step Implementation

1. **Write the Overload Signatures**: Define the different ways your function can be called. These have parameter types and return types but **no function body**.
2. **Write the Implementation Signature**: This is the final signature that includes the actual function body. Its types must be broad enough to encompass all previous overloads.
3. **Add Runtime Validation**: Use `typeof`, `Array.isArray`, or other type guards inside the function body to run the appropriate code path. [link](https://dev.to/thinkster/typescript-function-overloading-k9i)

### Example: String Concatenation or Number Addition

typescript

```
// 1. Overload Signatures (No function bodies)
function combine(a: number, b: number): number;
function combine(a: string, b: string): string;

// 2. Implementation Signature (Handles all cases)
function combine(a: any, b: any): any {
  // 3. Runtime conditional check
  if (typeof a === 'string' && typeof b === 'string') {
    return a.trim() + " " + b.trim();
  }
  return a + b;
}

// How to call it:
const numResult = combine(10, 20);      // Infers type: number
const strResult = combine("Hello", "World"); // Infers type: string

// const errorResult = combine(10, "Hello");
// Error: No overload matches this call.
```

Use code with caution.

***

### Overloading with Different Parameter Counts

If your overloads have a different number of arguments, parameters that are not shared by all signatures **must be marked as optional (`?`)** in your final implementation signature. [link](https://www.bennadel.com/blog/3339-using-method-and-function-overloading-in-typescript.htm)

typescript

```
// Overload Signatures
function makeDate(timestamp: number): Date;
function makeDate(m: number, d: number, y: number): Date;

// Implementation Signature (y and d must be optional)
function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
  if (d !== undefined && y !== undefined) {
    return new Date(y, mOrTimestamp, d);
  } else {
    return new Date(mOrTimestamp);
  }
}
```

Use code with caution.

Watch this short breakdown to see how to properly handle optional parameters and complex configurations in TypeScript function overloads:

1m

[What are Function Overloads in TypeScript?TomDoesTechYouTube · Jun 20, 2022](https://www.youtube.com/watch?v=WIetWVmHzSM\&t=667)

***

### Important Rules to Remember

- **The implementation signature is hidden**: External code can only call the patterns defined by your _overload_ signatures. You cannot call the implementation signature directly if it doesn't match an overload.
- **Order matters**: TypeScript matches overloads from **top to bottom**. Place your most specific signatures at the very top and more general ones lower down.
- **Compatibility**: The implementation signature must accept all combinations of arguments specified by the overloads, or TypeScript will throw an `Overload signature is not compatible with function implementation` compiler error. [link](https://www.reddit.com/r/typescript/comments/15oabfc/function%5Foverloading%5Fyes%5For%5Fno/)

If your overloads are getting too complicated, consider using **Union Types** (e.g., `param: string | number`) or **Generics**, which can often achieve the same goal with less repetitive code. [link](https://www.typescriptlang.org/docs/handbook/2/functions.html)

What **types of arguments** are you trying to pass to your function? If you share your specific use case, I can write the exact overload template you need.

- [link](https://stackoverflow.com/questions/13212625/typescript-function-overloading)\
  TypeScript function overloading - Stack Overflow\
  Nov 3, 2012 — Short answer: method overloading to dispatch to different implementations is not possible in TS, regardless of number of params or...\
  Stack Overflow
- [link](https://www.reddit.com/r/typescript/comments/15oabfc/function%5Foverloading%5Fyes%5For%5Fno/)\
  Function overloading - yes or no : r/typescript - Reddit\
  Aug 11, 2023 — Yes and no. Yes. I would like to use function overloading for TypeScript. Especially for functional programming. It would be great...\
  Reddit·r/typescript
- [link](https://dev.to/thinkster/typescript-function-overloading-k9i)\
  TypeScript Function Overloading - DEV Community\
  Mar 25, 2020 — This works just fine, but it doesn't communicate through the signature what the parameters are, and the various configurations. Yo...\
  DEV Community

Show all

## overload it export function each (begin: number, end: number, step: number) {

if (typeof end != "number") {\
end = begin;\
begin = 0;\
}\
if (typeof step != "number") {\
step = 1;\
}

const iterate = (begin: number, end: number, step: number) => {\
let index = begin;\
const iterator = {\
next() {\
if ((index - end) \* step <= 0) {\
const value = index;\
index += step;\
return { value, done: false };\
} else {\
return { value: false, done: true };\
}\
},\
\[Symbol.iterator]\() {\
return iterator;\
},\
};\
return iterator;\
};\
return iterate(begin, end, step);\
};

Here is how to overload your `each` function correctly in TypeScript.

The original code shifts arguments dynamically at runtime (e.g., swapping `begin` and `end` if only one number is provided). To make this safe, we must define three separate overload signatures, then change the implementation types to `number | undefined` so they can all coexist.

### Overloaded Implementation

typescript

```
// 1. Overload Signatures
export function each(end: number): IterableIterator<number | boolean>;
export function each(begin: number, end: number): IterableIterator<number | boolean>;
export function each(begin: number, end: number, step: number): IterableIterator<number | boolean>;

// 2. Implementation Signature (with optional parameters)
export function each(begin: number, end?: number, step?: number): IterableIterator<number | boolean> {
  // 3. Runtime Argument Shifting
  let actualBegin = begin;
  let actualEnd = end;
  let actualStep = step;

  if (typeof actualEnd !== "number") {
    actualEnd = actualBegin;
    actualBegin = 0;
  }
  if (typeof actualStep !== "number") {
    actualStep = 1;
  }

  // 4. Core Logic
  const iterate = (b: number, e: number, s: number) => {
    let index = b;
    const iterator = {
      next() {
        if ((index - e) * s <= 0) {
          const value = index;
          index += s;
          return { value, done: false };
        } else {
          return { value: false as const, done: true as const };
        }
      },
      [Symbol.iterator]() {
        return iterator;
      },
    };
    return iterator;
  };

  return iterate(actualBegin, actualEnd, actualStep);
}
```

Use code with caution.

### Key Changes Explained

- **Order of Signatures**: The single-argument version `each(end: number)` is placed first. TypeScript evaluates overloads from top to bottom, making sure `each(5)` correctly maps to a single-variable input.
- **Parameter Rename**: In the runtime logic, variables were renamed (`actualBegin`, `actualEnd`, `actualStep`) using `let`. This prevents reassigning parameters directly, which is a cleaner pattern and avoids type widening conflicts.
- **Return Type**: The built-in type `IterableIterator<number | boolean>` was added. This tells TypeScript exactly how to type-check loops or manual `.next()` calls on the returned object.
- **Type Casting**: `as const` was added to `false` and `true` inside the `next()` return object. This satisfies TypeScript's built-in `Iterator` standard layout, which expects exact boolean literals for the `done` property.

Are you looking to use this in a **standard `for...of` loop**, or do you need to adjust the return type so it strictly yields **only numbers**? Let me know if you want to optimize the iterator type definitions.

## why number | boolean

The return type includes `boolean` because of how the iterator's `next()` method is structured when the loop finishes.

Look closely at your original completion logic:

typescript

```
else {
  return { value: false, done: true };
}
```

Use code with caution.

In a standard JavaScript/TypeScript iterator, when a loop is done, the `value` property should ideally be `undefined`. However, because your code explicitly returns `value: false` at the end, TypeScript infers that this function can yield **either** a `number` (while iterating) **or** a `boolean` (when finished).

***

### How to Fix It (Make it strictly `number`)

If you want the iterator to be strictly typed as `IterableIterator<number>`, you should change `value: false` to `value: undefined` to match the native JavaScript standard.

Here is the clean, strictly-typed version:

typescript

```
// 1. Cleaner Signatures (Strictly returning numbers)
export function each(end: number): IterableIterator<number>;
export function each(begin: number, end: number): IterableIterator<number>;
export function each(begin: number, end: number, step: number): IterableIterator<number>;

export function each(begin: number, end?: number, step?: number): IterableIterator<number> {
  let actualBegin = begin;
  let actualEnd = end;
  let actualStep = step;

  if (typeof actualEnd !== "number") {
    actualEnd = actualBegin;
    actualBegin = 0;
  }
  if (typeof actualStep !== "number") {
    actualStep = 1;
  }

  const iterate = (b: number, e: number, s: number) => {
    let index = b;
    const iterator = {
      next(): IteratorResult<number> { // <- Uses TS built-in Iterator type
        if ((index - e) * s <= 0) {
          const value = index;
          index += s;
          return { value, done: false };
        } else {
          // Changed from 'false' to 'undefined' to match standard JS behavior
          return { value: undefined, done: true };
        }
      },
      [Symbol.iterator]() {
        return iterator;
      },
    };
    return iterator;
  };

  return iterate(actualBegin, actualEnd, actualStep);
}
```

Use code with caution.

### Why this is better

1. **Standard Compliance**: Native loops (like `for...of`) ignore the final `value` when `done` is `true`. Returning `undefined` follows this native behavior perfectly.
2. **Cleaner Code downstream**: Anyone using your function won't have to check if the loop variable accidentally becomes a boolean.

Would you like to see how to convert this entire function into a native **Generator function (`assign*`)**, which handles all this iterator boilerplate code automatically?