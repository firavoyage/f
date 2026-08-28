# (d) compare object types in ts

In TypeScript, comparing object types typically means one of two things: <mark><strong>checking type compatibility at compile time</strong><span> </span>using structural typing, or<span> </span><strong>narrowing down an object's type at runtime</strong></mark>. [link](https://www.typescriptlang.org/docs/handbook/type-compatibility.html)

Because TypeScript is erased at compile time, you cannot check a raw interface or type alias directly using JavaScript's `typeof` operator, as it will simply return `"object"`. [link](https://www.convex.dev/typescript/typescript-101/control-flow-operators/typescript-check-type)

***

### 1. Compile-Time: Structural Typing vs. Branded Types

TypeScript uses **structural typing** (duck typing). If two different types or interfaces share the exact same properties, TypeScript considers them completely identical and compatible. [link](https://www.youtube.com/watch?v=VBtenVZ13zI\&t=585)

typescript

```
interface User { id: number; name: string; }
interface Product { id: number; name: string; }

let user: User = { id: 1, name: "Alice" };
let product: Product = user; //  No compile error! Types are structurally identical.
```

Use code with caution.

If you want to prevent TypeScript from treating distinct object structures as equal, you must use **branded types** (nominal typing simulation) by appending a unique, fake identifier. [link](https://www.reddit.com/r/typescript/comments/14vpd8k/how%5Fto%5Fensure%5Fthat%5Fthe%5Ftypescript%5Fgives%5Fa/)

typescript

```
type User = { id: number; name: string; __brand: "User" };
type Product = { id: number; name: string; __brand: "Product" };

let user = { id: 1, name: "Alice" } as User;
let product: Product = user; // ❌ Compile Error: Type '"User"' is not assignable to '"Product"'.
```

Use code with caution.

***

### 2. Runtime: Discriminating and Checking Types

Since types do not exist when the JavaScript code executes, you must use specific patterns to compare and check the type of an object during runtime. [link](https://stackoverflow.com/questions/52948985/typescript-compare-if-the-object-that-is-the-type-of-an-interface-is-equal-to-a)

| Method                   | Best Used For                                                 | Code Example                           |
| ------------------------ | ------------------------------------------------------------- | -------------------------------------- |
| **Discriminated Unions** | Differentiating similar objects via a common literal property | `if (obj.kind === "circle")`           |
| **`in` Operator**        | Checking if a unique property field exists inside the object  | `if ("radius" in obj)`                 |
| **`instanceof`**         | Verifying if an object was built from a specific `class`      | `if (obj instanceof UserClass)`        |
| **Custom Type Guards**   | Encapsulating complex object validation rules safely          | `function isCar(obj: any): obj is Car` |

#### Detailed Runtime Examples

- **Discriminated Unions (Recommended)**:\
  typescript

<!---->

```
type Circle = { kind: "circle"; radius: number };
type Square = { kind: "square"; side: number };

function getArea(shape: Circle | Square) {
    if (shape.kind === "circle") {
        return Math.PI * shape.radius ** 2; // TS safely narrows type to Circle
    }
}
```

Use code with caution.

- **The `in` Operator**:\
  typescript

<!---->

```
function process(item: Circle | Square) {
    if ("radius" in item) {
        console.log(item.radius); // TS safely narrows type to Circle
    }
}
```

Use code with caution.

- **Custom Type Guards**:\
  typescript

<!---->

```
interface Car { make: string; model: string; }

function isCar(obj: any): obj is Car {
    return obj && typeof obj.make === "string" && typeof obj.model === "string";
}
```

Use code with caution.\
[link](https://javascript.plainenglish.io/how-to-check-if-an-object-is-a-certain-type-in-typescript-97e6a72c8e57)

***

### 3. Utility Type: Testing for Exact Type Equality

If you are writing advanced generic utilities and want to statically verify if two types are **100% identical**, you can use a conditional mapped type comparison trick. [link](https://www.geeksforgeeks.org/typescript/how-to-test-if-two-types-are-exactly-the-same-in-typescript/)

typescript

```
type IsEqual<X, Y> =
    (<T>() => T extends X ? 1 : 2) extends (<T>() => T extends Y ? 1 : 2)
    ? true
    : false;

type Test1 = IsEqual<{ a: string }, { a: string }>; // true
type Test2 = IsEqual<{ a: string }, { readonly a: string }>; // false (catches modifiers!)
```

Use code with caution.

***

To help give you the perfect snippet, let me know:

- Are you trying to compare **runtime data values** or match **compile-time types**?
- Are your objects generated from **classes** or plain **interfaces/types**?
- Do your objects share a **common property** (like `type` or `kind`) you can use to tell them apart?

14 sites

- [link](https://gbahdeyboh.medium.com/a-guide-to-object-based-comparison-in-javascript-e57d6f244f48)\
  A Guide To Object Based Comparison In JavaScript - Medium\
  Jun 15, 2019 — Things become a bit more interesting, when the value is an array. An array could contain any type of object. It could contain anot...\
  Medium·Gbadebo Bello
- [link](https://www.reddit.com/r/typescript/comments/14vpd8k/how%5Fto%5Fensure%5Fthat%5Fthe%5Ftypescript%5Fgives%5Fa/)\
  How to ensure that the typescript gives a compilation error ...\
  Jul 10, 2023 — Comparing two objects in your scenario is a mistake, but it is useful in others. TypeScript can infer types, but not intentions. I...\
  Reddit·r/typescript
- [link](https://stackoverflow.com/questions/54131284/typescript-compare-types-of-two-objects)\
  (Typescript) compare types of two objects\
  Jan 10, 2019 — Here are some ways to compare types of two objects in TypeScript: \* \*\*typeof\*\* Returns "object". For example, you can use \`compare...\
  Stack Overflow

Show all

# (d) object types in ts

In TypeScript, **object types** are used to group and describe the shape of data. They specify exactly which properties an object must have and what data types those properties should hold. [link](https://codefinity.com/courses/v2/3c6ec5e9-886b-465a-b174-93d7470b0c0c/55bada62-f978-4c4f-bed0-c9e19e1e1e8c/eab91c02-a6ca-4aef-8804-9d4d2e417484)

### 1. Ways to Define Object Types

You can define an object type using three main syntaxes: [link](https://www.totaltypescript.com/concepts/object-types)

- **Type Aliases (`type`)**: Best for complex types, unions, or tuples.\
  typescript

<!---->

```
type User = {
  name: string;
  age: number;
};
```

Use code with caution.

- **Interfaces (`interface`)**: Best for defining object shapes in object-oriented structures and supporting extension or declaration merging.\
  typescript

<!---->

```
interface User {
  name: string;
  age: number;
}
```

Use code with caution.

- **Inline (Anonymous) Types**: Defined directly where the variable or function argument is declared.\
  typescript

<!---->

```
const user: { name: string; age: number } = { name: "Alice", age: 30 };
```

Use code with caution.\
[link](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)

***

### 2. Property Modifiers

You can control how properties within an object behave using special modifiers: [link](https://www.typescriptlang.org/fr/docs/handbook/2/objects.html)

- **Optional Properties (`?`)**: Marks a property as optional so it does not throw an error if omitted.\
  typescript

<!---->

```
type Product = {
  id: number;
  description?: string; // Optional
};
```

Use code with caution.

- **Read-only Properties (`readonly`)**: Prevents a property from being reassigned after the object is created.\
  typescript

<!---->

```
type Point = {
  readonly x: number;
  readonly y: number;
};
```

Use code with caution.\
[link](https://www.youtube.com/watch?v=EgrmylxfmQI)

***

### 3. Dynamic Keys (Index Signatures)

When you do not know all the property names in advance, you can use an **index signature** to define the types of unknown keys: [link](https://hyperskill.org/university/typescript/typescript-object-types)

typescript

```
type StringMap = {
  [key: string]: string; // Any string key must map to a string value
};

const translations: StringMap = {
  hello: "bonjour",
  goodbye: "au revoir",
};
```

Use code with caution.

***

### 4. Built-in Utility Object Types

TypeScript provides several [built-in global utility types](https://www.typescriptlang.org/docs/handbook/utility-types.html) to transform existing object structures quickly: [link](https://mimo.org/glossary/typescript/object-type)

| Utility Type       | Description                                          | Example                  |
| ------------------ | ---------------------------------------------------- | ------------------------ |
| **`Partial<T>`**   | Makes all properties in `T` optional.                | `Partial<User>`          |
| **`Required<T>`**  | Makes all properties in `T` mandatory.               | `Required<User>`         |
| **`Readonly<T>`**  | Makes all properties in `T` immutable.               | `Readonly<User>`         |
| **`Pick<T, K>`**   | Selects a subset of keys `K` from object `T`.        | `Pick<User, "name">`     |
| **`Omit<T, K>`**   | Removes a subset of keys `K` from object `T`.        | `Omit<User, "age">`      |
| **`Record<K, T>`** | Creates an object type with keys `K` and values `T`. | `Record<string, number>` |

***

### 5. `object` vs. `Object` vs. `{}`

TypeScript features three broad, distinct global representations for objects that behave differently: [link](https://www.typescriptlang.org/docs/handbook/declaration-files/do-s-and-don-ts.html)

- **`object` (lowercase)**: Represents any **non-primitive type**. This includes structural objects, arrays, and functions, but excludes primitives like `string`, `number`, or `boolean`. [link](https://www.typescriptlang.org/docs/handbook/basic-types.html)
- **`{}` (empty object literal)**: Represents any value _except_ `null` and `undefined`. You can technically assign primitives to it, but you cannot access custom properties on them. [link](https://www.totaltypescript.com/books/total-typescript-essentials/objects)
- **`Object` (uppercase)**: Represents the functionality of the global JavaScript `Object` prototype instance. **Avoid using this** in type annotations. [link](https://www.typescriptlang.org/docs/handbook/declaration-files/do-s-and-don-ts.html)

If you are looking to define a specific scenario or need help **migrating a JavaScript object** to TypeScript, let me know:

- What your **data looks like** (or a sample object)
- Whether properties need to be **optional or dynamic**
- If you plan to use **classes or pure data shapes**

16 sites

- [link](https://www.youtube.com/watch?v=EgrmylxfmQI)\
  09 Object Type - TypeScript Tutorial for Beginners\
  Jan 19, 2024 — In this video, we are going to have a look at the object type on Typescript. We will first declare an object in Typescript and see...\
  8:39\
  YouTube·Tony Xhepa
- [link](https://www.totaltypescript.com/concepts/object-types)\
  Object Types | Total TypeScript\
  In TypeScript, object types define the shape of an object. They are one of the most commonly used annotations in a TypeScript code...\
  Total TypeScript
- [link](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)\
  TypeScript: Documentation - Everyday Types\
  Aug 14, 2026 — Table\_title: Differences Between Type Aliases and Interfaces Table\_content: | Interface | Type | | --- | --- | | Extending an inte...\
  TypeScript

Show all

# compare object Object and {} in ts

In TypeScript, **`object`**, **`Object`**, and **`{}`** represent three distinct types with overlapping but crucially different assignability rules. [link](https://medium.com/@zong8498/exploring-the-differences-between-object-and-object-in-typescript-927b50c9e0de)

The direct takeaway is that **`object`** represents any non-primitive value, whereas **`Object`** and **`{}`** represent any value that is not `null` or `undefined` (including primitives). [link](https://stackoverflow.com/questions/49464634/difference-between-object-and-object-in-typescript)

***

### Core Structural Breakdown

| Feature                      | `object` (Lowercase)                 | `{}` (Empty Object Type)             | `Object` (Uppercase)                 |
| ---------------------------- | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| **Represents**               | Any **non-primitive** type.          | Any value except `null`/`undefined`. | The JS `Object.prototype` interface. |
| **Accepts Primitives?**      | ❌ No (e.g., fails on `42`, `"hi"`). | Yes (auto-boxes primitives).         | Yes (auto-boxes primitives).         |
| **Accepts `null` / `void`?** | ❌ No                                | ❌ No                                | ❌ No                                |
| **Property Access**          | Cannot access any custom fields.     | Cannot access custom fields.         | Cannot access custom fields.         |

***

### 1. `object` (Lowercase)

This represents **non-primitive** structures. Use it when you want to enforce that a value is a structural object, array, or function, and explicitly exclude strings, numbers, booleans, or symbols. [link](https://www.reddit.com/r/typescript/comments/eac7ca/vs%5Fobject/)

typescript

```
let nonPrimitive: object;

nonPrimitive = { name: "Alice" }; // OK
nonPrimitive = [1, 2, 3];        // OK (Arrays are objects)
nonPrimitive = () => {};         // OK (Functions are objects)

nonPrimitive = "hello";          // Error! Primitives are rejected.
```

Use code with caution.

### 2. `{}` (Empty Object)

Contrary to how it looks, `{}` does **not** mean "an empty object literal" in type space. Instead, it describes a type that **has no properties of its own**. TypeScript permits any value to be assigned here _except_ `null` and `undefined` because primitives can be safely boxed into objects with prototype methods. [link](https://type-level-typescript.com/articles/difference-between-object-types-in-typescript)

typescript

```
let emptyObj: {};

emptyObj = { name: "Alice" }; // OK
emptyObj = "hello";          // OK (Boxed string has methods like .toString())
emptyObj = 42;               // OK

emptyObj = null;             // Error!
emptyObj.name;               // Error! Property 'name' does not exist on type '{}'.
```

Use code with caution.

### 3. `Object` (Uppercase)

`Object` describes the runtime JavaScript `Object` instance and its prototype methods (`toString()`, `hasOwnProperty()`, etc.). In almost all compilation scenarios, it behaves identically to `{}`. The slight nuance is that `Object` enforces stricter type compatibility rules for inherited prototype methods if you try to override them. [link](https://stackoverflow.com/questions/51075413/what-is-the-difference-between-the-type-object-and-and-when-to-use-which)

typescript

```
let objInstance: Object;
objInstance = "hello"; // OK

// Nuanced difference: Override compatibility
let a: {} = { toString() { return 3; } };     // OK
let b: Object = { toString() { return 3; } }; // Error! Type 'number' is not assignable to 'string'.
```

Use code with caution.

***

### Key Recommendation

- **Do not use `{}` or `Object`** to type generic object structures; they allow accidental bugs by accepting strings or numbers.
- Use **`object`** if you only care that the data is not a primitive.
- Use **`Record<string, unknown>`** or custom **`interfaces`** if you intend to map out an actual object structure with dynamic or explicit key-value sets. [link](https://www.youtube.com/watch?v=vTy881CvEgM\&t=17)

If you are trying to handle a specific code implementation, let me know:

- What **kind of data** are you passing to this type?
- Do you need to **read or write properties** dynamically?

I can provide the exact type configuration or custom utility type for your use case.

11 sites

- [link](https://gbahdeyboh.medium.com/a-guide-to-object-based-comparison-in-javascript-e57d6f244f48)\
  A Guide To Object Based Comparison In JavaScript - Medium\
  Jun 15, 2019 — As shown above, comparing two different numbers of the same value will evaluate to true as expected but why does comparing two Obj...\
  Medium·Gbadebo Bello
- [link](https://stackoverflow.com/questions/49464634/difference-between-object-and-object-in-typescript)\
  Difference between 'object', {}, and Object in TypeScript\
  Mar 24, 2018 — {}. {} contains non-nullish values, that is any values except undefined and null . Note that {} does not refer to objects with no ...\
  Stack Overflow
- [link](https://stackoverflow.com/questions/51075413/what-is-the-difference-between-the-type-object-and-and-when-to-use-which)\
  What is the difference between the type Object and ... - Stack Overflow\
  Jun 28, 2018 — 1 Answer. ... Granted, it does not make much sense - implements Empty does not add any information for the users of B , and does n...\
  Stack Overflow

Show all

