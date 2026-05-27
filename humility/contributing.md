## start

stick to the cwd. do not touch anything outside.

1. know the full file structure of cwd. read through.
2. write `todo.md` on cwd. when complete, move and append to `changes.md` w the time. always use imperative sentences in simple present tense even if unnatural. no need to include "test".
3. make sure `readme.md` exists on each folder (except build and deps), be simple and concise
4. write a static `spec.md` for every task. if existing, never overwrite, write `spec_foo.md`, `spec_bar.md` instead.
5. if logics exist and can be tested this way, create a `test` subfolder on cwd. declare inputs and expected outputs in an object and loop through it.
6. if you have any observation, write `notes.md`.
7. if needed, search for documentation (references or guides) of libraries used using the direct URL via playwright mcp
8. always run tests
9. make sure `todo.md` is empty after work

search:

- duckduckgo (baseline reference) https://html.duckduckgo.com/html/?q=search+keyword&kp=-2&kl=us-en&k1=-1&kd=1&ia=web
- mojeek (cookieless plain html format)	https://www.mojeek.com/search?q=search+keyword&safe=0&reg=us&t=50&dlen=160&theme=light&view=classic&ui=simple
- brave search (direct server-rendered query) https://search.brave.com/search?q=search+keyword&source=web&offset=0&spell=1
- searxng (public metasearch instance) https://searx.be/search?q=search+keyword&category_general=1&language=en-us

read pages:

- jina https://r.jina.ai/https://en.wikipedia.org/wiki/Philosophy
- direct via browser (not recommended)
- direct via curl (fast but fragile)

## write

follow the style guide:

- use:
  - ubuntu
  - x11
  - zsh
  - flexible typescript
  - es module
  - pnpm
  - bun (command: `br` instead of `bun`)
  - react and parceljs (command: `parcel serve 'app.html' --open --dist-dir .build --cache-dir .build/.parcel-cache`, use `tmux` to run in the background)
- naming:
  - snake case
  - verb noun for actions (`get_data`, not `data_getter`), predicate for bools (`is_prime`, not `check_primality`), noun for factory functions (`time`, not `create_time`)
  - for react components and their filenames, pascal case
  - for filenames, lowercase
- style:
  - functional programming
  - modular and cohesive
  - object params by default, positional params if there is only one param (`factorial(n)`) or params are interchangeable (`add(a,b)`), mixed if there is only one param and optional flags (`fetch(url, options)`)
  - always async, only sync for pure and quick methods
  - always function statement, only arrow function for props
  - always type, never interface
  - no `undefined` or `null`
  - no `typeof` or `instanceof`
- error handling:

  - no `try catch`, use rescue instead, wrap inside handle if external libraries throw
  - no `throw`, use err instead

  ```ts
  /**
   * err, rescue, and handle are preloaded into global this, reference directly
   */

  // define possible errors on top
  export const failed_to_read = "failed_to_read";
  export const permission_denied = "permission_denied";

  const parse = handle(JSON.parse);

  async function read(path: string): Promise<result<string>> {
    let failed = true;

    if (failed) {
      return err({
        type: failed_to_read,
        message: `failed to read file on ${path}`,
      });
    } else {
      return `some data on ${path}`;
    }
  }

  async function write(path: string): Promise<result<void>> {
    let failed = true;

    if (failed) {
      return err(permission_denied);
    } else {
      // write something
    }
  }

  /**
   * no need to err if it just checks wo doing anything real
   */
  function is_even(n: number): boolean {
    return n % 2 == 0;
  }

  export async function test() {
    const data = parse("{");

    if (rescue(data)) {
      if (data.type == SyntaxError) {
        log("expected");
      } else {
        log("will not run");
      }

      return; // early return to narrow
    }

    const valid_data = parse('{"key":123}');
    if (rescue(valid_data)) {
      log("unexpected");

      return;
    }
    log(valid_data.key);

    const content = await read("somewhere");
    if (rescue(content)) {
      if (content.type == failed_to_read) {
        log(content.message); // will output failed to read file on somewhere
      }

      return;
    }
    // process content

    const write_result = await write("somewhere");
    if (rescue(write_result)) {
      if (write_result.type == permission_denied) {
        log("try again with sudo");
      }

      return;
    }
    // tell the user write successfully
  }
  ```

- comment:
  - self explanatory over commenting
  - comments before or on the right of code, commented code below
- notes:
  - avoid typescriptism, only define types on function params and return, never write `type message = string`
  - use `// @ts-expect-error` if needed
  - prefer modern proven libraries, do not reinvent wheels

## test

1. linting

  ```sh
  br eslint
  ```

2. type check

  ```sh
  br tsgo
  ```

3. logics (in `test` subfolder, if existing)
