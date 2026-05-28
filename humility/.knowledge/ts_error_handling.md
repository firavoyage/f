## 0.0

- handle errors:

  - no `try catch`, wrap inside handle if external libraries throw
  - no `throw`, use err instead

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

## 0.1

- handle errors:

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

## 0.2

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

