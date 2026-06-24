why. pros and cons.

approach 1 (all global methods and vars are available)

```ts
export function handle<F extends (...args: any[]) => any>(fn: F): (...args: Parameters<F>) => result<ReturnType<F>> {
  return (...args) => {
    try {
      const result = fn(...args);

      if (result instanceof Promise || typeof result?.then == 'function') {
        return (result as Promise<result<any>>)
          // async ok
          .then((data) => data)
          // async err
          .catch((e) => err(e));
      }

      // sync ok
      return result;
    } catch (error) {
      return err(error);
    }
  }
}

const read_file = handle(readFile)

export async function read({ path }) {
  const content = await read_file(path, 'utf8');

  if (is_error(content)) {
    if (has(map, content.code)) {
      return err({ type: map[content.code], message: content })
    }
  }

  return content
}
```

approach 2

deprecate handle. no wrapping. use try catch directly in read.
