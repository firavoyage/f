## start

stick to the cwd. do not touch anything outside if not needed.

know the file structure of cwd. list the file tree. dont just rg some code.

there might be a todo.md on cwd.

if todo's not detailed or clear enough, consider write a spec.md or spec_foo.md. in spec, think what and how you will do, focus only on the expected behavior (usage). 

then create a test subfolder on cwd. be simple, declare some example inputs and outputs in an object and loop through it. avoid running and reading the output directly if possible.

search for documentation if needed

never modify todo.md, when you complete something, append to changes.md, using imperative sentences in present tense.

## write

follow the style guide:

- use:
  - ubuntu
  - x11
  - zsh
  - typescript with implicit any allowed
  - es module
  - pnpm to add packages
  - bun to run (command: `br` instead of `bun`)
  - parceljs
- naming:
  - snake case
  - verb noun for actions (`get_data`, not `data_getter`), predicate for bools (`is_prime`, not `check_primality`), noun for factory functions (`time`, not `create_time`)
  - for react components, one word (e.g. `Button`) if possible, use snake case w only the first letter in the whole variable (not every word) capitalized (e.g. `Date_picker`) if needed
- style:
  - functional programming
  - modular and cohesive
  - object params by default, positional params if there is only one param (`factorial(n)`) or params are interchangeable (`add(a,b)`), mixed if there is only one param and optional flags (`fetch(url, options)`)
  - always async, only sync for pure and quick methods
  - always function statement, only arrow function for props
  - always type, never interface
  - no `undefined` or `null`
  - no `typeof` or `instanceof`
  - no `===` `!==`, use `==` `!=` instead
  - no `try catch`, wrap inside handle if external libraries throw
  - no `throw`, use err instead
- handle errors:

  ```ts
  /**
   * handle, rescue, and err are global, reference directly
   */
  function handle<F extends (...args: any[]) => any>(
    fn: F
  ): (...args: Parameters<F>) => result<ReturnType<F>>;
  function rescue<T>(result: result<T>): result is err;
  function err(
    error: any | Optional<err, typeof err_symbol | "message"> | Error
  ): err;

  type result<T, E = err> = ok<T> | E;

  type ok<T> = Exclude<T, err>;
  type err = { type: any; message: any; [err_symbol]: true } & Partial<err_fs>;
  type err_fs = { code: string; path: string; syscall: string; errno: number };
  ```

  ```ts
  import { readFile } from "node:fs/promises";

  const read_file = handle(readFile);

  export const not_found = "not_found";

  /**
   * read a file
   *
   * use object params anyway for consistency
   */
  export async function read({ path }) {
    const content = await read_file(path, "utf8");

    /**
     * simplified example
     */
    if (rescue(content)) {
      if (content.code == "ENOENT") {
        return err({ type: not_found, message: content });
        // return err(not_found) // also acceptable
      }
    }
    // if (rescue(content)) {
    //   if (has(map, content.code)) {
    //     return err({ type: map[content.code], message: content })
    //   }
    // }

    return content;
  }
  ```

- log:

  ```ts
  /**
   * log is global, loaded before any code inside globalthis, no need to define again.
   */
  function log(...args): void
  ```

- comment:
  - lowercase by default, only standard mixed case for complete, non imperative sentences, never uppercase
  - in ts, `/** multi line */` by default, only `//` for commented code or if you really want to say something after a line
  - in shell, `# after a line` for why it does or what you might need to do, `# before a line` for where you are
  - documenting comments before or after, commented code below
  - self explanation over commenting
  - as simple as possible (`# for compatibility`, `sudo fc-cache -f -v # apply (log out if needed)`)
- import:
  - avoid error prone relative path
  - find the tsconfig on the parent folder and add to paths when exporting code in a new folder

    ```json
    "paths": {
      "lib/*": ["./source/lib/*"],
    },
    ```

- note:
  - avoid typescriptism, dont `type message = string`, only define types on function params and return, ignore compiler warnings
  - prefer modern proven libraries, dont reinvent wheels
  - avoid outdated or deprecated methods
  - no logging by default

## test

run the logical test

run linting

```sh
br eslint
```

run type check (ignore non critical noises)

```sh
br tsgo
```
