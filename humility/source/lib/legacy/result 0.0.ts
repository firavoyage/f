type ok<T> = Exclude<T, err>
/**
 * no need to readonly, you wont modify it by default
 * 
 * todo
 * 
 * type and message are string?
 */
type err = { type: any, message: any, [err_symbol]: true } & Partial<err_fs>
// type err = Readonly<{ type: any, message: any, [err_symbol]: true }> & Partial<err_fs>
// type err = Readonly<{ type: string | number | symbol, message: string | object, [err_symbol]: true }>
type err_fs = { code: string, path: string, syscall: string, errno: number }

/**
 * todo: dry?
 * 
 * (impossible in ts)
 */
type err_fn = typeof err
type rescue = typeof rescue
type handle = typeof handle
declare global {
  type Optional<Type, Keys extends keyof Type> = Omit<Type, Keys> & Partial<Pick<Type, Keys>>
  // type Optional<Type, Keys extends keyof any> = Omit<Type, Keys> & Partial<Pick<Type, Keys>>

  /**
   * todo: E should be subset of err
   */
  type result<T, E = err> = ok<T> | E;

  /**
   * if needed
   */
  type option<T> = T | undefined;

  var err: err_fn
  var rescue: rescue
  var handle: handle
}

const err_symbol = Symbol("err");
// const err_symbol = "__err";
// const err_symbol = "d9eb253e06987fa74a5d3189f73d9f7a8104cca786fafbb52bc9555972f5477f"; // sha256 of "err"

/**
 * not needed.
 * 
 * just return value directly.
 */

// export function ok<T>(value: ok<T>): ok<T> {
//   return value
// }

export function err(error: Optional<err, typeof err_symbol | 'message'> | number | string | symbol | Error): err {
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
    return merge(error, { type: error.constructor, message: error.stack ?? error.message, [err_symbol]: true })

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
    return merge(error, { [err_symbol]: true })
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
      [err_symbol]: true
    }
    // // why not be more flexible
    // return Object.defineProperty({
    //   type: error,
    //   // message is implied by the type
    //   message: error,
    // }, err_symbol, { value: true }) as err
  }
}

export function rescue<T>(result: result<T>): result is err {
  return result?.[err_symbol]
  // return (result as any)?.[err_symbol]
}

// /**
//  * deprecated.
//  *
//  * you often want to process the data, which need to be unwrapped.
//  *
//  * while ts does not allow
//  * 
//  * - change the type halfway in the same scope `data = data.value`
//  * - shadow the type with the same name even with indentation `const data = data.value`
//  * 
//  * as a result, you will have `data_result` and `data`.
//  * 
//  * or, you could build heavier oop chaining, which is completely unnecessary.
//  *
//  */

// type ok<T> = { err: false; value?: T, unwrap(): T }
// type err = { err: true; error?: string | object}

// // or error {type, message}? 

// /**
//  * you either
//  * 
//  * - err, panics
//  * - err, logs
//  * - err, handle each error types
//  */

// declare global {
//   type result<T> = ok<T> | err;
// }

// export function ok<T>(value: T): ok<T> {
//   return {
//     err: false, value, unwrap() {
//       return value
//     }
//   }
// }

// export function err(error: any): err {
//   return {
//     err: true, error, unwrap() {
//       throw error;
//     }
//   }
// }

// /**
//  * hacky (js feature: truthy/falsy).
//  */

// type ok = { err: false; value?: any }
// type err = { err: object }
// export type result = ok | err

// /**
//  * verbose `if (type==="err")`
//  *
//  * most time we only check if err and early return (avoid nesting hells)
//  *
//  * we dont check ok
//  */

// type ok = { type: 'ok'; value?: any }
// type err = { type: 'err'; error: string }
// export type result = ok | err

/**
 * handle possible errors
 * 
 * just use the word handle ("i will wrap it to handle the errors gracefully"),
 * not attempt (i attempt to do this even if it might fail.).
 * 
 * it does not preserve fn overloads as ts does not support it.
 * 
 * ref: https://gist.github.com/t3dotgg/a486c4ae66d32bf17c09c73609dacc5b
 */
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

// function wrapper<F extends (...args: any[]) => any>(fn: F): (...args: Parameters<F>) => ReturnType<F> {
//   return function(...args: Parameters<F>): ReturnType<F> {
//     // Add custom wrapper logic here
//     const result = fn(...args);
//     // Add custom wrapper logic here
//     return result;
//   };
// }

// export function handle<T, E = err>(fn: Function): () => result<T, E> {
//   return (...args) => {
//     try {
//       return fn(...args);
//     } catch (error) {
//       return err({ type: error, message: error });
//     }
//   }
// }

// export function handle_async<T, E = err>(fn: () => Promise<any>): () => Promise<result<T, E>> {
//   return async (...args) => {
//     try {
//       return await fn(...args);
//     } catch (error) {
//       return err({ type: error, message: error });
//     }
//   }
// }

// type SyncResult<T, E = Error> = [E, null] | [null, T];
// type AsyncResult<T, E = Error> = Promise<SyncResult<T, E>>;

// export function safe<Args extends any[], R>(
//   fn: (...args: Args) => R
// ): (...args: Args) => R extends Promise<infer U> ? AsyncResult<U> : SyncResult<R> {
//   return (...args: Args): any => {
//     try {
//       const result = fn(...args);

//       // Check if the result is a Promise
//       if (result instanceof Promise || (result && typeof (result as any).then === 'function')) {
//         return (result as Promise<any>)
//           .then((data) => [null, data])
//           .catch((err) => [err, null]);
//       }

//       // Synchronous success
//       return [null, result];
//     } catch (err) {
//       // Synchronous error
//       return [err, null];
//     }
//   };
// }
