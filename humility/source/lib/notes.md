notes

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

```ts
export function is_error<T>(result: result<T>): result is error {
  return result?.[err_symbol]
  // return (result as any)?.[err_symbol]
}
```

be clear and explicit. avoid magic. it works, but it might return undefined instead of false.

16 40 remove some comments.

```ts
// it's a default comment

/**
 * it's docs syntax.
 * 
 * it adds visual noise right?
 */
```
