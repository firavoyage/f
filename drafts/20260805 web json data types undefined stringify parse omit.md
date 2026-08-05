# . background

```yaml
navigation:
  page: home # home | tool
  tool?: '' # '' | a tool # '' serializes better than ? i guess
```

# json data types

JSON (JavaScript Object Notation) natively supports exactly **six core data types**. These types are split into simple (primitive) values and complex (compound) structures. [link](https://www.geeksforgeeks.org/javascript/json-data-types/)

### Simple Data Types (Primitives)

- **String**: A sequence of Unicode characters enclosed in double quotation marks. Single quotes are not valid in JSON.
  - _Example:_ `"Hello, World"` [link](https://en.wikipedia.org/wiki/JSON)
- **Number**: A signed decimal number that can be an integer, a fraction (floating-point), or use scientific `E` notation. JSON does not distinguish between integers and floats.
  - _Example:_ `42`, `-9.5`, `2.5e3` [link](https://en.wikipedia.org/wiki/JSON)
- **Boolean**: A logical value that can only be either `true` or `false`. These values must be lowercase and are written without quotation marks.
  - _Example:_ `true` [link](https://www.w3schools.com/js/js%5Fjson%5Fdatatypes.asp)
- **Null**: A single, special value written as `null`. It is used to explicitly represent the complete absence of a value.
  - _Example:_ `null` [link](https://www.w3schools.com/js/js%5Fjson%5Fdatatypes.asp)

### Complex Data Types (Structures)

- **Object**: An unordered collection of key-value pairs wrapped in curly braces `{}`. Every key must be a string enclosed in double quotes, followed by a colon `:`.
  - _Example:_ `{"name": "Alice", "age": 30}` [link](https://www.w3schools.com/js/js%5Fjson%5Fdatatypes.asp)
- **Array**: An ordered list of zero or more values wrapped in square brackets `[]`. The items inside an array can belong to any valid JSON data type, including other arrays or objects.
  - _Example:_ `["apple", "banana", 100, true]` [link](https://www.w3schools.com/js/js%5Fjson%5Fdatatypes.asp)

### What JSON Cannot Contain

Because JSON is a lightweight text data format designed strictly for data exchange, it **cannot** contain complex application types like: [link](https://www.alachisoft.com/resources/docs/ncache/prog-guide/json-data.html)

- Functions or executable code
- Dates natively (dates must be passed as strings or numbers)
- `undefined`, `NaN`, or `Infinity`
- Comments [link](https://docs.oracle.com/en/database/oracle/oracle-database/21/adjsn/json-data.html)

Would you like to see a **complete code example** using all six types, or do you need help **validating a JSON file** structure?

- [link](https://www.w3schools.com/js/js%5Fjson%5Fdatatypes.asp)\
  JavaScript JSON Values - W3Schools\
  Table\_title: JSON Value Types Table\_content: | Type | Example | | --- | --- | | Object | {"name":"John"} | | Array | \["red","green...\
  W3Schools
- [link](https://en.wikipedia.org/wiki/JSON)\
  JSON - Wikipedia\
  Data types. JSON's basic data types are: Number: a signed decimal number that may contain a fractional part and may use exponentia...\
  Wikipedia
- [link](https://rel.relational.ai/rel/concepts/working-with-json/json-data-types)\
  JSON Data Types - RAI Documentation\
  Table\_title: JSON Data Types in Rel Table\_content: | JSON Data Type | Description | Rel Data Type | | --- | --- | --- | | Number |\
  Relational AI

Show all

## how will undefined be stringified and parsed

In standard JSON, `undefined` is **not a valid value**. Because of this, JavaScript's built-in `JSON.stringify()` handles `undefined` differently depending on where it is located inside your data structure.

Here is exactly how `undefined` behaves during stringification and parsing:

### 1. How `undefined` is Stringified

When you pass a value containing `undefined` to `JSON.stringify()`, JavaScript automatically sanitizes or strips it out based on these three rules:

- **Inside an Object**: The key-value pair is completely **removed** and omitted from the final string.
  - _Code:_ `JSON.stringify({ name: "Alice", age: undefined })`
  - _Result:_ `'{"name":"Alice"}'`
- **Inside an Array**: The `undefined` item is converted into a **`null`** literal to preserve the array's index positioning.
  - _Code:_ `JSON.stringify(["apple", undefined, "banana"])`
  - _Result:_ `'["apple",null,"banana"]'`
- **As a Standalone Value**: If you pass `undefined` directly by itself, the function returns **`undefined`** (the actual primitive value, _not_ a string containing the text `"undefined"`).
  - _Code:_ `JSON.stringify(undefined)`
  - _Result:_ `undefined`

### 2. How `undefined` is Parsed

Since `JSON.stringify()` strips or replaces `undefined`, a valid JSON string will **never** contain the literal word `undefined`.

If you try to parse a string that explicitly contains the text `"undefined"`, it will crash:

- _Code:_ `JSON.parse('undefined')`
- _Result:_ ❌ **SyntaxError**: Unexpected token u in JSON at position 0

However, when you parse a string that _originally_ had `undefined` before it was stringified, you will get back the modified structures:

- **Objects missing keys**: Parsing `'{"name":"Alice"}'` yields `{ name: "Alice" }`. The `age` key is permanently gone.
- **Arrays with nulls**: Parsing `'["apple",null,"banana"]'` yields `["apple", null, "banana"]`. The value is now permanently `null`.

***

### How to Preserve `undefined`

If you absolutely must preserve `undefined` values during a JSON round-trip, you can pass a custom **replacer** function to `stringify` and a **reviver** function to `parse` to swap the values safely:

javascript

```
// 1. Stringify while converting undefined to a temporary placeholder string
const originalObj = { name: "Alice", age: undefined };
const jsonString = JSON.stringify(originalObj, (key, value) =>
  value === undefined ? "__UNDEFINED__" : value
);
// Result string: '{"name":"Alice","age":"__UNDEFINED__"}'

// 2. Parse while converting the placeholder back to real undefined
const parsedObj = JSON.parse(jsonString, (key, value) =>
  value === "__UNDEFINED__" ? undefined : value
);
// Result object: { name: "Alice", age: undefined }
```

Use code with caution.

Would you like to see how to handle other unsupported types like **Dates** or **Functions**, or are you currently debugging a **specific piece of code**?

- [link](https://www.executeprogram.com/courses/modern-javascript/lessons/json-stringify-and-parse)\
  JSON Stringify and Parse Lesson\
  JavaScript object keys don't require quotes, but JSON ( JavaScript object notation ) keys do. If we try to parse a JSON ( JavaScri...\
  \
  \
  Execute Program
- [link](https://javascript.plainenglish.io/json-stringify-removes-all-values-with-undefined-13982cbc05cc)\
  JSON.stringify removes all values with undefined | by pandaquests\
  Feb 11, 2023 — JSON ( JavaScript Object Notation ) . stringify() removes properties with an undefined value because the JSON ( JavaScript Object ...\
  \
  \
  JavaScript in Plain English
- [link](https://javascript.plainenglish.io/json-stringify-removes-all-values-with-undefined-13982cbc05cc)\
  JSON.stringify removes all values with undefined | by pandaquests\
  Feb 11, 2023 — JSON ( JavaScript Object Notation ) . stringify() removes properties with an undefined value because the JSON ( JavaScript Object ...\
  \
  \
  JavaScript in Plain English

Show all

## how to use the omission behavior to handle implicitly

You can leverage JSON's automatic omission behavior to **safely strip unwanted keys**, **clean up payloads before API requests**, or <mark><strong>implement optional function parameters</strong><span> </span>implicitly</mark>.

Because `JSON.stringify()` completely removes object keys with `undefined` values, you can trigger this cleanup without writing manual loop deletes.

### 1. Stripping Optional Fields from API Payloads

When sending data to a backend database or API, sending fields with `null` values might accidentally overwrite existing data or fail database constraints. Assigning `undefined` allows you to strip them out implicitly.

javascript

```
// Data from a user profile form where 'bio' was left blank
const formInput = {
  username: "johndoe",
  email: "john@example.com",
  bio: ""
};

// Map blank inputs to undefined to trigger implicit omission
const payload = {
  username: formInput.username,
  email: formInput.email,
  bio: formInput.bio || undefined // Falls back to undefined if string is empty
};

// The payload sent over the network is automatically cleaned
const jsonToSend = JSON.stringify(payload);
// Result: '{"username":"johndoe","email":"john@example.com"}'
```

Use code with caution.

### 2. Creating an Implicit Deep-Clean Utility

You can create a reusable helper function that recursively strips out every `null`, empty string, or blacklisted value from a complex nested object by leveraging a custom `replacer` function in `JSON.stringify()`.

javascript

```
function deepCleanObject(obj) {
  const jsonString = JSON.stringify(obj, (key, value) => {
    // Treat nulls, empty strings, or empty arrays as undefined to omit them
    if (value === null || value === "" || (Array.isArray(value) && value.length === 0)) {
      return undefined;
    }
    return value;
  });

  return JSON.parse(jsonString);
}

const messyData = {
  id: 101,
  tags: [],
  meta: {
    description: "",
    draft: null,
    title: "My Post"
  }
};

const cleanData = deepCleanObject(messyData);
// Result: { id: 101, meta: { title: "My Post" } }
```

Use code with caution.

### 3. Setting Up Default Fallbacks on Parse

When you receive a JSON string that has already omitted a key, you can safely handle its absence on the parsing side using JavaScript's **logical OR (`||`)** or **nullish coalescing (`??`)** operators.

javascript

```
const incomingJson = '{"name": "Alice"}'; // 'age' was omitted during stringify
const user = JSON.parse(incomingJson);

// Read properties with implicit fallbacks
const userAge = user.age ?? 18; // Defaults to 18 because user.age evaluates to undefined

console.log(userAge); // Output: 18
```

Use code with caution.

### ⚠ Caveats to Keep in Mind

- **Performance:** Using `JSON.stringify` followed by `JSON.parse` strictly for object cleaning creates high memory overhead on massive datasets.
- **Arrays:** Remember that this omission trick **only works for object keys**. If you pass `undefined` inside an array, it turns into `null` rather than being skipped, which changes the array length.

Are you building an **API client/payload utility**, or are you trying to **sync data state** between a frontend application and a backend server?

# how does typescript handle optional keys in keyof object

In TypeScript, the `keyof` operator extracts **all keys** from an object type as a literal union, completely disregarding whether the keys are required or optional. [link](https://type-level-typescript.com/articles/how-to-get-optional-keys-from-object-types)

typescript

```
type User = {
  id: string;      // Required key
  email?: string;  // Optional key
};

type UserKeys = keyof User;
// Result: "id" | "email"
```

Use code with caution.

### Indexed Access Typing

While `keyof` retains the optional key in the resulting union type, the optionality changes the type when you look up the value using **indexed access syntax**: [link](https://javascript.plainenglish.io/how-to-use-the-keyof-operator-in-typescript-to-create-dynamic-types-e7ab88587637)

- **Required keys** resolve to their exact type (e.g., `User["id"]` is `string`).
- **Optional keys** automatically append `undefined` to their resolved type (e.g., `User["email"]` is `string | undefined`). [link](https://www.convex.dev/typescript/advanced/type-operators-manipulation/typescript-keyof)

***

### Extracting ONLY Optional Keys

If you want to isolate and extract only the keys that were explicitly marked as optional (`?`), you must use a conditional mapped type. [link](https://stackoverflow.com/questions/50829805/get-keyof-non-optional-property-names-in-typescript)

typescript

```
type OptionalKeysOf<T> = {
  [K in keyof T]-?: {} extends Pick<T, K> ? K : never;
}[keyof T];

type OnlyOptionals = OptionalKeysOf<User>;
// Result: "email"
```

Use code with caution.

#### How it works:

1. **`-?` Modifier**: Strips the optional flag during iteration so TypeScript evaluates the properties uniformly.
2. **`Pick<T, K>`**: Creates a mini-object containing only that single property.
3. **`{} extends Pick<T, K>`**: If a property is optional, its mini-object wrapper can be satisfied by an empty object `{}`. If it is required, an empty object fails the assignment check.
4. **`[keyof T]`**: Flattens the temporary object's values into a clean union type, filtering out the `never` results. [link](https://stackoverflow.com/questions/50829805/get-keyof-non-optional-property-names-in-typescript)

***

### Extracting ONLY Required Keys

Conversely, you can use a similar approach to weed out the optional properties and isolate the required ones. [link](https://stackoverflow.com/questions/50829805/get-keyof-non-optional-property-names-in-typescript)

typescript

```
type RequiredKeysOf<T> = {
  [K in keyof T]-?: {} extends Pick<T, K> ? never : K;
}[keyof T];

type OnlyRequired = RequiredKeysOf<User>;
// Result: "id"
```

Use code with caution.

If you need help building custom types with these keys, let me know **what operations you want to perform** with the extracted keys or **how you plan to transform** the original object type!

- [link](https://stackoverflow.com/questions/53276792/define-a-list-of-optional-keys-for-typescript-record)\
  Define a list of optional keys for Typescript Record\
  Nov 13, 2018 — I want to type an object which can only have keys 'a', 'b' or 'c'. So I can do it as follows: Interface IList { a?: string; b?: st...\
  Stack Overflow
- [link](https://stackoverflow.com/questions/50829805/get-keyof-non-optional-property-names-in-typescript)\
  get \`keyof\` non-optional property names in typescript - Stack Overflow\
  Jun 13, 2018 — Comments. ... While easier option of "key" is covered, I'd like to cover a less obvious option of "key" | "value" . It might be ne...\
  Stack Overflow
- [link](https://type-level-typescript.com/articles/how-to-get-optional-keys-from-object-types)\
  How to get optional keys from object types in TypeScript?\
  Oct 22, 2024 — How to get optional keys from objects in TypeScript? Type helper explained nº1. OptionalKeysOf. — by Gabriel Vergnaud · Oct 22, 20...\
  Type-Level TypeScript

Show all

# 

# . thinking

conclusion: no undefined. be explicit.

(see purpose)
