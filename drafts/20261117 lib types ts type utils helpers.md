# all ts type helpers

# **TypeScript Type Helpers Cheat Sheet**

TypeScript provides a rich set of built-in utility types (type helpers) for transforming, extracting, and composing types.

Here is a comprehensive reference, including built-in utility types, advanced patterns, and custom helpers.

## **1. Built-in utility types**

### **Object transformation**

| Utility        | Description                                    |
| -------------- | ---------------------------------------------- |
| `Partial<T>`   | Makes all properties optional                  |
| `Required<T>`  | Makes all properties required                  |
| `Readonly<T>`  | Makes all properties readonly                  |
| `Pick<T, K>`   | Selects specific properties                    |
| `Omit<T, K>`   | Removes specific properties                    |
| `Record<K, T>` | Creates an object with keys `K` and values `T` |

```
type User = {
  id: number;
  name: string;
  email?: string;
};

type A = Partial<User>;
type B = Required<User>;
type C = Readonly<User>;
type D = Pick<User, "id" | "name">;
type E = Omit<User, "email">;
type F = Record<string, User>;
```

### **Union and intersection helpers**

| Utility          | Description                       |
| ---------------- | --------------------------------- |
| `Exclude<T, U>`  | Removes types assignable to `U`   |
| `Extract<T, U>`  | Keeps types assignable to `U`     |
| `NonNullable<T>` | Removes `null` and `undefined`    |
| `Awaited<T>`     | Recursively unwraps Promise types |

```
type Status = "success" | "error" | "loading";

type A = Exclude<Status, "loading">;
// "success" | "error"

type B = Extract<Status, "success" | "error">;
// "success" | "error"

type C = NonNullable<string | null | undefined>;
// string

type D = Awaited<Promise<Promise<number>>>;
// number
```

### **Function helpers**

| Utility                    | Description                        |
| -------------------------- | ---------------------------------- |
| `Parameters<T>`            | Extracts function parameters       |
| `ConstructorParameters<T>` | Extracts constructor parameters    |
| `ReturnType<T>`            | Extracts function return type      |
| `InstanceType<T>`          | Extracts constructor instance type |
| `ThisParameterType<T>`     | Extracts explicit `this` parameter |
| `OmitThisParameter<T>`     | Removes explicit `this` parameter  |
| `ThisType<T>`              | Provides contextual `this` typing  |

```
function createUser(name: string, age: number): boolean {
  return true;
}

type Params = Parameters<typeof createUser>;
// [name: string, age: number]

type Result = ReturnType<typeof createUser>;
// boolean

class User {
  constructor(public name: string) {}
}

type ConstructorArgs = ConstructorParameters<typeof User>;
type UserInstance = InstanceType<typeof User>;
```

### **String manipulation helpers**

| Utility           | Description                          |
| ----------------- | ------------------------------------ |
| `Uppercase<T>`    | Converts string literal to uppercase |
| `Lowercase<T>`    | Converts string literal to lowercase |
| `Capitalize<T>`   | Capitalizes first character          |
| `Uncapitalize<T>` | Lowercases first character           |

```
type A = Uppercase<"hello">;    // "HELLO"
type B = Lowercase<"HELLO">;    // "hello"
type C = Capitalize<"hello">;   // "Hello"
type D = Uncapitalize<"Hello">; // "hello"
```

## **2. Advanced TypeScript patterns**

These are custom helpers, not built-in utility types.

### **Object helpers**

```
type Mutable<T> = {
  -readonly [K in keyof T]: T[K];
};

type DeepReadonly<T> = {
  readonly [K in keyof T]: DeepReadonly<T[K]>;
};

type DeepPartial<T> = {
  [K in keyof T]?: T[K] extends object
    ? DeepPartial<T[K]>
    : T[K];
};

type DeepRequired<T> = {
  [K in keyof T]-?: T[K] extends object
    ? DeepRequired<T[K]>
    : T[K];
};

type Nullable<T> = {
  [K in keyof T]: T[K] | null;
};

type Optional<T, K extends keyof T> =
  Omit<T, K> & Partial<Pick<T, K>>;

type RequiredKeys<T> = {
  [K in keyof T]-?: {} extends Pick<T, K> ? never : K;
}[keyof T];

type OptionalKeys<T> = {
  [K in keyof T]-?: {} extends Pick<T, K> ? K : never;
}[keyof T];

type ValueOf<T> = T[keyof T];

type KeysOfType<T, V> = {
  [K in keyof T]: T[K] extends V ? K : never;
}[keyof T];
```

### **Union helpers**

```
type UnionToIntersection<U> =
  (U extends unknown ? (arg: U) => void : never) extends
  (arg: infer I) => void
    ? I
    : never;

type UnionToTuple<T> =
  UnionToIntersection<
    T extends unknown ? (t: T) => T : never
  > extends (_: unknown) => infer W
    ? [...UnionToTuple<Exclude<T, W>>, W]
    : [];

type IsUnion<T, C = T> =
  T extends C
    ? [C] extends [T]
      ? false
      : true
    : never;
```

### **Tuple and array helpers**

```
type First<T extends readonly unknown[]> =
  T extends readonly [infer F, ...unknown[]] ? F : never;

type Last<T extends readonly unknown[]> =
  T extends readonly [...unknown[], infer L] ? L : never;

type Tail<T extends readonly unknown[]> =
  T extends readonly [unknown, ...infer R] ? R : [];

type Head<T extends readonly unknown[]> = First<T>;

type Prepend<T extends readonly unknown[], V> =
  [V, ...T];

type Append<T extends readonly unknown[], V> =
  [...T, V];

type Length<T extends readonly unknown[]> = T["length"];

type ElementOf<T extends readonly unknown[]> = T[number];
```

### **String helpers**

```
type Split<S extends string, D extends string> =
  S extends `${infer F}${D}${infer R}`
    ? [F, ...Split<R, D>]
    : [S];

type Join<T extends readonly string[], D extends string> =
  T extends readonly [infer F extends string, ...infer R extends string[]]
    ? R extends []
      ? F
      : `${F}${D}${Join<R, D>}`
    : "";

type Trim<S extends string> =
  S extends ` ${infer R}` ? Trim<R> :
  S extends `${infer R} ` ? Trim<R> :
  S;

type Replace<
  S extends string,
  From extends string,
  To extends string
> = S extends `${infer A}${From}${infer B}`
  ? `${A}${To}${B}`
  : S;

type StartsWith<S extends string, P extends string> =
  S extends `${P}${string}` ? true : false;

type EndsWith<S extends string, P extends string> =
  S extends `${string}${P}` ? true : false;
```

## **3. Conditional type helpers**

```
type IsNever<T> = [T] extends [never] ? true : false;

type IsAny<T> = 0 extends (1 & T) ? true : false;

type IsUnknown<T> =
  IsAny<T> extends true ? false :
  unknown extends T
    ? [keyof T] extends [never] ? true : false
    : false;

type IsEqual<A, B> =
  (<T>() => T extends A ? 1 : 2) extends
  (<T>() => T extends B ? 1 : 2)
    ? true
    : false;

type If<C extends boolean, A, B> =
  C extends true ? A : B;

type Not<T extends boolean> =
  T extends true ? false : true;
```

## **4. Path and nested object helpers**

```
type Paths<T> = T extends object
  ? {
      [K in keyof T & string]:
        K | `${K}.${Paths<T[K]>}`
    }[keyof T & string]
  : never;

type PathValue<T, P extends string> =
  P extends `${infer K}.${infer R}`
    ? K extends keyof T
      ? PathValue<T[K], R>
      : never
    : P extends keyof T
      ? T[P]
      : never;

type DeepPick<T, P extends string> =
  P extends `${infer K}.${infer R}`
    ? K extends keyof T
      ? { [Key in K]: DeepPick<T[K], R> }
      : never
    : P extends keyof T
      ? Pick<T, P>
      : never;
```

## **5. React and component type helpers**

Useful when working with React and TypeScript.

```
import type {
  ComponentProps,
  ComponentPropsWithRef,
  ComponentPropsWithoutRef,
  ElementType,
  ReactNode,
  ReactElement,
  PropsWithChildren,
  PropsWithRef,
  Ref,
  CSSProperties,
  HTMLAttributes,
  ButtonHTMLAttributes,
  InputHTMLAttributes,
  ForwardRefExoticComponent,
  ComponentRef,
} from "react";
```

| Helper                        | Description                      |
| ----------------------------- | -------------------------------- |
| `ComponentProps<T>`           | Gets component props             |
| `ComponentPropsWithRef<T>`    | Props including ref              |
| `ComponentPropsWithoutRef<T>` | Props excluding ref              |
| `ElementType`                 | Valid JSX element/component type |
| `ReactNode`                   | Any renderable React content     |
| `ReactElement`                | React element type               |
| `PropsWithChildren<T>`        | Adds children                    |
| `Ref<T>`                      | Ref type                         |
| `CSSProperties`               | CSS properties                   |
| `ComponentRef<T>`             | Gets component instance/ref type |

Example:

```
type ButtonProps = ComponentProps<"button">;

type InputProps = ComponentPropsWithoutRef<"input">;

type CustomButtonProps = PropsWithChildren<{
  variant: "primary" | "secondary";
}>;
```

## **6. Type helpers quick reference**

| Category               | Helpers                                                             |
| ---------------------- | ------------------------------------------------------------------- |
| Object                 | `Partial`, `Required`, `Readonly`, `Pick`, `Omit`, `Record`         |
| Union                  | `Exclude`, `Extract`, `NonNullable`                                 |
| Functions              | `Parameters`, `ReturnType`, `ConstructorParameters`, `InstanceType` |
| Async                  | `Awaited`                                                           |
| Strings                | `Uppercase`, `Lowercase`, `Capitalize`, `Uncapitalize`              |
| Object keys            | `keyof`, `ValueOf`, `RequiredKeys`, `OptionalKeys`                  |
| Object transformations | `DeepPartial`, `DeepReadonly`, `Mutable`, `DeepRequired`            |
| Tuples                 | `First`, `Last`, `Tail`, `Length`, `ElementOf`                      |
| Conditional            | `IsNever`, `IsAny`, `IsUnknown`, `IsEqual`, `If`                    |
| Strings advanced       | `Split`, `Join`, `Trim`, `Replace`, `StartsWith`                    |
| Nested objects         | `Paths`, `PathValue`, `DeepPick`                                    |
| React                  | `ComponentProps`, `ReactNode`, `PropsWithChildren`, `ElementType`   |

**Note:** Built-in utilities are part of TypeScript itself. Advanced helpers above are custom implementations and may need adjustments for recursive types, unions, arrays, optional properties, and edge cases.

Official reference: [TypeScript Utility Types](https://www.typescriptlang.org/docs/handbook/utility-types.html?utm_source=chatgpt.com).
