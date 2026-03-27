changes

---

language design: error handling: result.

```js
// first
if result.ok do something
else handle error.

// second
if !result.ok handle return

do something

// third
if result.err handle return

do something

// fourth
if result.type === "ok" ...

else if result.type === "err" ...
```

i feel the third one is the best.

```ts
// simpler
type result

- err: false | whatever truthy
- value

// better

type result

- err: bool
- value?
- error?

// flexible

type result

- ok: bool
- err: bool
- value?
- error?

```

you would never write if else with many layers which is dirty.

if result ok sounds good. it carries delight. but you would not like it.

normally if ok you just proceed, if err you handle and return. you could not return in ok block.

and you wont like `!ok`. since you dont if ok, let's accept the tradeoff.

`type == "ok" | "err"` is akin to rust. rust is loved. but simplicity is better. also, it avoids the `===` syntax of js.

you can also just access the value. if err, value does not exist, so it will fail loudly. (or undefined, actually)

result on d.ts are available everywhere.

decision: 

```ts
type ok = { err: false; value?: any }
type err = { err: true; error?: string | object }
export type result = ok | err
```

---
