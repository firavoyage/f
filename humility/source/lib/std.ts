const err_hash = Symbol("err");
// const err_hash = "__err";
// const err_hash = "d9eb253e06987fa74a5d3189f73d9f7a8104cca786fafbb52bc9555972f5477f"; // sha256 of "err"

type ok<T> = Exclude<T, err>
// access an optional message wont cause any issue
type err = Readonly<{ type: any, message?: any, [err_hash]: true }>
// type err = Readonly<{ type: string | number | symbol, message: string | object, [err_hash]: true }>
// todo: type and message are string?

type Optional<Type, Keys extends keyof Type> = Omit<Type, Keys> & Partial<Pick<Type, Keys>>

declare global {
  type result<T, E = err> = ok<T> | E;
  // todo: E should be subset of err

  type option<T> = T | undefined;
}

/**
 * redundant.
 * 
 * just return value directly.
 */

// export function ok<T>(value: ok<T>): ok<T> {
//   return value
// }

export function err(error: Optional<err, typeof err_hash>): err {
  return Object.defineProperty({
    type: error.type,
    message: error.message,
  }, err_hash, { value: true }) as err
}

export function rescue<T>(result: result<T>): result is err {
  return result?.[err_hash]
  // return (result as any)?.[err_hash]
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
 * ref: https://gist.github.com/t3dotgg/a486c4ae66d32bf17c09c73609dacc5b
 * 
 * just use the word handle (i will wrap it to handle the errors gracefully),
 * 
 * not attempt (i attempt to do this even if it might fail.).
 */
export function handle<T, E = err>(fn: Function): () => result<T, E> {
  return (...args) => {
    try {
      return fn(...args);
    } catch (error) {
      return err({ type: error, message: error });
    }
  }
}

export function handle_async<T, E = err>(fn: () => Promise<any>): () => Promise<result<T, E>> {
  return async (...args) => {
    try {
      return await fn(...args);
    } catch (error) {
      return err({ type: error, message: error });
    }
  }
}
