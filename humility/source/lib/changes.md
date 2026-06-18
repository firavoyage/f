changes

jun 2026

18

16 20 result handle from result. it does not actually make anything explicit.

whether handle or not, you dont know if it could err, and you dont know the possible error types as well. it's just a blind try catch, yet it eats the error stack, prevents the default behavior or the engine, and makes debugging much more frustrating.

better to research and abstract explicitly, when you want to handle. it's ok to let it panic sometimes.

16 20 rename `rescue` to `is_error`

gradually, as i adopt react. react has state and setstate.

you could not overcome the structure barrier of the language itself.

you should enforce structural clarity and consistency over saving a few typings on dx on naming. well, rescue conflicts with return, which does not make it actually clearer.

another option is `did_err`, obviously it's no good.

16 20 rename `type err` to `error`

from rust, we have `result = ok | err`

it does not have to be like that. result is noun. error is noun. simple thing, right?

also, it eliminates the need of `var err: err_fn`.

16 40 make things explicit.

be clear and explicit. avoid magic. it works, but it might return undefined instead of false.

p

```ts
export function is_error<T>(result: result<T>): result is error {
  return result?.[err_symbol]
  // return (result as any)?.[err_symbol]
}
```

c

```ts
export function is_error<T>(result: result<T>): result is error {
  return Object.hasOwn(result, error_symbol)
}
```

<!-- you could not have an error with error symbol false -->

16 40 remove some comments.

```ts
// it's a default comment

/**
 * it's docs syntax.
 * 
 * it adds visual noise right?
 */
```

p

```ts
const error_symbol = Symbol("error");
// const error_symbol = "__error";
// const error_symbol = "d9eb253e06987fa74a5d3189f73d9f7a8104cca786fafbb52bc9555972f5477f"; // sha256 of "err"
```

c

<!-- symbol is the defacto standard for symbol like stuff. (it might not be well serialized, but it's not a current concern.) -->

```ts
const error_symbol = Symbol("error");
```

<!-- i might give llms the full `result` code rather than docs (guide or reference). -->

p

```ts
type Optional<Type, Keys extends keyof Type> = Omit<Type, Keys> & Partial<Pick<Type, Keys>>
// type Optional<Type, Keys extends keyof any> = Omit<Type, Keys> & Partial<Pick<Type, Keys>>
```

c

```ts
type Optional<Type, Keys extends keyof Type> = Omit<Type, Keys> & Partial<Pick<Type, Keys>>
```

p

```ts
export function err(error: Optional<error, typeof error_symbol | 'message'> | number | string | symbol | Error): error {
  if (error instanceof Error) {
    /**
     * it's simpler to say
     * foo.type == SyntaxError
     * than
     * foo.type == 'SyntaxError' or foo.type instanceof SyntaxError
     * 
     * if rescue, it's already an error.
     * you match known errors, otherwise it's an unexpected error.
     * 
     * you dont need nested error types on the prototype chain. separate them.
     */
    return merge(error, { type: error.constructor, message: error.stack ?? error.message, [error_symbol]: true })

    // return Object.defineProperty({
    //   /**
    //    * it's simpler to say
    //    * foo.type == SyntaxError
    //    * than
    //    * foo.type == 'SyntaxError' or foo.type instanceof SyntaxError
    //    * 
    //    * if rescue, it's already an error.
    //    * you match known errors, otherwise it's an unexpected error.
    //    * 
    //    * you dont need nested error types on the prototype chain. separate them.
    //    */
    //   type: error.constructor,
    //   // type: error.name,
    //   message: error.stack ?? error.message,
    // }, err_symbol, { value: true }) as err
  } else if (typeof error == 'object' && Object.hasOwn(error, 'type')) {
    return merge(error, { [error_symbol]: true })
    // return Object.defineProperty(error, err_symbol, { value: true }) as err
    // return Object.defineProperty({
    //   // it must have a type. you should not throw anything.
    //   type: error.type,
    //   message: error.message ?? 'no message',
    // }, err_symbol, { value: true }) as err
  } else {
    /**
     * more flexible
     */
    return {
      type: error,
      /**
       * type => message
       */
      message: error,
      [error_symbol]: true
    }
    // // why not be more flexible
    // return Object.defineProperty({
    //   type: error,
    //   // message is implied by the type
    //   message: error,
    // }, err_symbol, { value: true }) as err
  }
}
```

c

<!-- if you are dedicated to pass an error object, you should have both type and msg. otherwise, pass a string instead. -->

<!-- do not keep dead code if the current version is objectively better. (keep if you might uncomment one day as a toggle.) -->

```ts
export function err(error: Optional<error, typeof error_symbol> | PropertyKey | Error): error {
  if (error instanceof Error) {
    return merge(error, { type: error.constructor, message: error.stack ?? error.message, [error_symbol]: true })
  } else if (typeof error == 'object' && has(error, 'type')) {
    return merge(error, { [error_symbol]: true })
  } else {
    // flexible
    return {
      type: error,
      message: error,
      [error_symbol]: true
    }
  }
}
```

16 40 remove `option`

another rust mimic

```ts
/**
 * if needed
 */
type option<T> = T | undefined;
```

seems ts has a simpler `value?` alias.

also, some types do not have to be global.

17 00 complete some todos. secure result error type.

p

```ts
/**
 * todo: E should be subset of err
 */
type result<T, E = error> = ok<T> | E;
```

c

```ts
type result<T, E extends error = error> = ok<T> | E;
```

17 00 simplify std.

p

```ts
export function has<K>(obj, key: K): key is K & PropertyKey {
  return (key ?? false) !== false && Object.hasOwn(obj, key as PropertyKey)
}
```

(d)

```ts
export function has<K>(obj, key: K): key is K & PropertyKey {
  return key != null && Object.hasOwn(obj, key as PropertyKey)
}
```

~~c~~ (d)

<!-- no idea what K is doing. -->

<!-- != null is hacky. i want to default to != and ==, but when it comes to "excluding invalid values", i want to be explicit. -->

```ts
export function has(obj, key): key is PropertyKey {
  return key !== null && key !== undefined && Object.hasOwn(obj, key as PropertyKey)
}
```

c

<!-- i do not always type check when running. just play safe. -->

```ts
export function has<K>(obj: object, key: K): key is K & PropertyKey {
  return key !== null && key !== undefined && Object.hasOwn(obj, key as PropertyKey);
}
```

17 20 separate temp (various poc) and test.

rename for humans. "space case".

apply `is_error` rename. for handle... i might reconsider. like, just deprecate prev code.

18 00 research. fix `ok`.

p

```ts
type ok<T> = Exclude<T, error>
```

c

```ts
type ok<T> = Exclude<T, error>
```

