<!-- avoid tsism. it's solving a different problem by making the opinionated tradeoff resulting in syntactic constraints. -->

## how to make a prop readonly but its subprops writable

To make an object property read-only while keeping its sub-properties writable, you cannot use `Object.freeze()` because it freezes the entire nested structure. Instead, you must use **`Object.defineProperty()`** to configure the specific property's descriptor.

Here is how to do it in JavaScript and TypeScript.

### JavaScript Solution

Use `Object.defineProperty()` and set `writable: false`.

javascript

```
const userProfile = {
  details: {
    name: "Alex",
    age: 30
  }
};

// Make the 'details' property read-only
Object.defineProperty(userProfile, 'details', {
  writable: false,
  configurable: false // Prevents redefining the property
});

// ❌ This will fail (silently, or throws in strict mode)
userProfile.details = { name: "Bob", age: 40 };

//   This works perfectly
userProfile.details.age = 31;

console.log(userProfile.details.age); // Output: 31
```

Use code with caution.

### TypeScript Solution

In TypeScript, you can enforce this at compile-time using the `readonly` modifier on the parent property only.

typescript

```
interface UserProfile {
  readonly details: {
    name: string;
    age: number;
  };
}

const user: UserProfile = {
  details: {
    name: "Alex",
    age: 30
  }
};

// ❌ TypeScript Error: Cannot assign to 'details' because it is a read-only property.
user.details = { name: "Bob", age: 40 };

//   Valid TypeScript
user.details.age = 31;
```

Use code with caution.

### Key Takeaways

- **`writable: false`** stops the parent reference from being overwritten.
- **Nested objects** remain mutable because their internal pointers do not change.
- **Strict mode** (`"use strict";`) will throw an explicit error on disallowed mutations.

To help tailor this, let me know:

- Are you working in **JavaScript** or **TypeScript**?

- Do you need this to work on a **class instance** or a **plain object**?

- Should the sub-properties be **validated** before they are updated?

- [link](https://www.youtube.com/watch?v=hzb5FrJm-nA)\
  Defining Read Only Properties in JavaScript | JavaScript Objects Tutorial\
  Apr 5, 2018 — By using the Object. defineProperty method you are able to define properties as 'read only' in JavaScript - this is done by settin...\
  \
  \
  YouTube

- [link](https://neetishop.medium.com/immutable-objects-with-property-descriptors-in-javascript-31693faaf03)\
  Medium\
  Sep 24, 2018 — In previous example descriptor values for key1 and key2 was set by default, lets set the descriptor values ourselves in next examp...\
  \
  \
  Medium

- [link](https://medium.com/@skull-sage/immutability-usefulness-of-readonly-in-typescript-ed2a122d7fd4)\
  Immutability: Usefulness of readonly in Typescript | by Rashed Alam\
  Sep 19, 2023 — We can use Object. defineProperty to mark a property writable: false .\
  \
  \
  Medium

Show all

## writable configurable

When you set both **`writable: false`** and **`configurable: false`** on a property, you lock it down completely while keeping its sub-properties editable.

Here is how those two settings work together to achieve your goal.

### What the Combination Does

- **`writable: false`** prevents changing the value (the reference to the sub-object).
- **`configurable: false`** prevents deleting the property or changing its settings later.
- **Sub-properties remain writable** because these restrictions only apply to the parent key, not the object it points to.

### Code Example

javascript

```
const app = {};

Object.defineProperty(app, 'config', {
  value: { theme: "dark", version: 1.0 },
  writable: false,      // Cannot overwrite app.config
  configurable: false,   // Cannot delete or redefine app.config
  enumerable: true      // Keeps it visible in loops/logs
});

// ❌ Cannot overwrite the property
app.config = { theme: "light" };

// ❌ Cannot delete the property
delete app.config;

// ❌ Cannot reconfigure it (Throws TypeError)
Object.defineProperty(app, 'config', { writable: true });

// ✅ CAN update the sub-properties
app.config.theme = "light";

console.log(app.config.theme); // Output: "light"
```

Use code with caution.

### Why This works

In JavaScript, objects are stored as references (pointers). By locking the parent property, you are telling JavaScript: _"You can never point `app.config` to a different memory address."_ However, the data inside that memory address is still completely open for modifications.

If you are building an architecture around this, let me know:

- Do you need to **dynamically add** new sub-properties later?

- Should the sub-properties be **hidden** from console logs (`enumerable: false`)?

- Do you want to enforce **strict mode** to throw loud errors when a write fails?

- [link](https://medium.com/@AlexanderObregon/property-descriptors-and-hidden-attributes-in-javascript-50741502a2c0)\
  Property Descriptors and Hidden Attributes in JS\
  May 11, 2025 — Locking Down a Property If you want a property to stay exactly as it is, including its descriptor, you can use the configurable fl...\
  \
  \
  Medium

- [link](https://medium.com/@ayusharma.in/objects-writable-configurable-enumerable-365cdff6a408)\
  Objects — Writable, Configurable & Enumerable | by Ayush\
  May 15, 2017 — Set Property but, you know that all the properties above are writable, configurable & enumerable, I mean : writable: I can modify ...\
  \
  \
  Medium

- [link](https://codefinity.com/courses/v2/be84f695-d048-4034-98c4-3164f5acd047/87e8e4d3-e23c-469f-8951-14c7cda1ba9b/a870523a-869a-4fd8-9345-3ac93688aaf9)\
  Learn Property Descriptors | Understanding and Working with Objects\
  What is the effect of setting the 'writable' descriptor to false for a property in a JavaScript object? The property will not show...\
  \
  \
  Codefinity

Show all

## can i define it readonly on obj.prop instead of obj in ts

<mark><span>Yes, you can do this by using TypeScript's type casting features</span></mark>.

You cannot use the standard `readonly` keyword directly on an existing object instance like `obj.prop`, because `readonly` is a type modifier, not runtime code. However, you can achieve this behavior at compile-time using the **`as const`** assertion or an **inline type cast**.

Here are the two ways to do it.

### Option 1: Use `as const` (Best for initial design)

If you apply `as const` to the parent object but want the sub-properties to remain writable, you have to explicitly tell TypeScript that only the parent key is frozen.

typescript

```
const obj = {
  // Cast the inner object to a specific type, leaving fields mutable
  prop: { status: "active" } as { status: string }
} as const; // 'as const' makes the 'prop' key itself readonly

// ❌ TypeScript Error: Cannot assign to 'prop' because it is a read-only property.
obj.prop = { status: "inactive" };

// ✅ Valid: The sub-property remains writable
obj.prop.status = "complete";
```

Use code with caution.

### Option 2: Inline Type Casting (Best for existing objects)

If you already have a standard object but want to pass it or use it somewhere with `obj.prop` locked down, you can cast it using an inline utility type.

typescript

```
interface MyObj {
  prop: { status: string };
}

const obj: MyObj = {
  prop: { status: "active" }
};

// Create a typed reference where 'prop' is readonly, but sub-props are not
const lockedObj: Omit<MyObj, 'prop'> & { readonly prop: MyObj['prop'] } = obj;

// ❌ TypeScript Error: Cannot assign to 'prop'
lockedObj.prop = { status: "inactive" };

// ✅ Valid: Modifying the sub-property works fine
lockedObj.prop.status = "complete";
```

Use code with caution.

### Summary of what happens

- At **compile-time**, TypeScript blocks you from replacing `obj.prop`.
- At **runtime**, JavaScript will still allow the overwrite unless you also use `Object.defineProperty()` as shown previously.

To help refine this, let me know:

- Is `obj` a **plain object** or an instance of a **class**?

- Do you need this restriction **globally** across your app, or just in **one specific function**?

- Would you prefer a **reusable utility type** to handle this mapping automatically?

- [link](https://egghead.io/lessons/typescript-make-properties-and-index-signatures-readonly-in-typescript)\
  Make Properties and Index Signatures Readonly in TypeScript\
  TypeScript 2.0 introduced the readonly modifier which can be added to a property or index signature declaration. It helps prevent ...\
  \
  \
  Egghead.io

- [link](https://mariusschulz.com/blog/read-only-properties-in-typescript)\
  Read-Only Properties in TypeScript — Marius Schulz\
  Oct 31, 2016 — readonly vs. Immutability # The readonly modifier is part of TypeScript's type system. It's only used by the compiler to check for...\
  \
  \
  Marius Schulz

- [link](https://www.typescriptlang.org/docs/handbook/2/objects.html)\
  Documentation - Object Types\
  Jun 10, 2026 — readonly Properties Properties can also be marked as readonly for TypeScript. While it won't change any behavior at runtime, a pro...\
  \
  TypeScript

Show all

## can i define the type of a prop on the prop instead of the obj

<mark><span>No, you cannot attach a type definition directly to a property value itself</span></mark> (like `obj.prop: Type`). In TypeScript, types must always be defined on the identifier or container holding the value.

However, you can achieve the exact same result by **casting the value inline** as you assign it. This forces TypeScript to type the property based solely on the right-hand side of the assignment.

Here are the three ways to do this.

### Option 1: Inline Type Casting (`as`)

You can use the `as` keyword directly on the value you are assigning to the property.

typescript

```
const obj = {
  // The type is defined directly on this specific property's value
  prop: { status: "active", count: 0 } as { status: string; count: number }
};

// TypeScript knows 'prop' has 'status' and 'count'
obj.prop.status = "pending";
```

Use code with caution.

### Option 2: Satisfies Operator (Best for validation)

If you want to ensure the property matches a specific shape but keep its specific inferred types, use the `satisfies` operator on the property value.

typescript

```
interface StatusTemplate {
  status: string;
}

const obj = {
  // Validates against StatusTemplate without changing the resulting type
  prop: { status: "active", extraData: true } satisfies StatusTemplate
};

// Works perfectly, and TypeScript remembers 'extraData' exists
obj.prop.extraData = false;
```

Use code with caution.

### Option 3: Using a Generic Helper Function

If you want a cleaner syntax without writing `as` everywhere, you can use a simple identity function to type the property inline.

typescript

```
const defineProp = <T>(value: T) => value;

const obj = {
  prop: defineProp<{ status: string }>({ status: "active" })
};

obj.prop.status = "complete";
```

Use code with caution.

### Why TypeScript requires this

TypeScript is a structural type system. It determines the type of an object by looking at the entire shape of the declaration. Because of this, it cannot process a type annotation placed inside an object literal's key-value pair (e.g., `prop: Type = ...` is invalid syntax).

To help narrow down the best approach, let me know:

- Are you trying to **restrict** what values can be put there, or **expand** the inferred type?

- Is this object being created **statically**, or is it generated **dynamically** inside a function?

- Do you want to enforce **readonly rules** on this property at the same time?

- [link](https://codefinity.com/courses/v2/c6febdce-d397-4311-8400-f377ace2247d/d632d4c5-3f89-4279-b52f-075ca0b349d7/7e661f2b-d775-433a-9e0a-5dbf64c72adb)\
  Learn Object Types Basics | Section\
  Object Types Basics ➤ Section 1 Chapter 10 ➤ Course "TypeScript for React Development" ⭐ Level up your coding skills with Codefini...\
  \
  \
  Codefinity

