## start

stick to the cwd. do not touch anything outside.

know the full file structure of cwd.

have a `todo.md` on cwd to be changed. when complete, move and append the exact todo to `changes.md` w the time using imperative sentences in present tense.

consider writing a `spec.md` for complex tasks. think what and how you will do, focus only on the expected behavior or usage. create spec_foo.md, spec_bar.md for new tasks wo chaning the previous one.

if it can be tested, create a test subfolder on cwd. declare some example inputs and outputs in an object and loop through it. avoid running and reading the output directly.

search for documentation if needed.

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
  - for react components, pascal case
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
  - prefer modern proven libraries, do not reinvent wheels

## test

always run tests before finishing

- logics (in test subfolder)
- linting

  ```sh
  br eslint
  ```

- type check, use `// @ts-expect-error` if needed

  ```sh
  br tsgo
  ```
