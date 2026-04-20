const err_hash = "__err";
// const err_hash = "d9eb253e06987fa74a5d3189f73d9f7a8104cca786fafbb52bc9555972f5477f"; // sha256 of "err"

type ok<T> = Exclude<T, err>
type err = Readonly<{ type: string | number | symbol, message: string | object, [err_hash]: true }>
// todo: type and message are string?

type Optional<Type, Keys extends keyof Type> = Omit<Type, Keys> & Partial<Pick<Type, Keys>>

declare global {
  type result<T, E = err> = ok<T> | E;
  // todo: E should be subset of err
}

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
  // return (result as any)?.[err_hash]
  return result?.[err_hash]
}

function foo(): result<boolean> {
  if (Math.random() > 0.5) {
    return true
  } else {
    return err({ type: "bad luck", message: "damn" })
  }
}

function test() {
  let bar = foo()

  if (rescue(bar)) {
    console.log(bar);
    return;
  }

  console.log(bar);
}

test()

// // note: always check type before accessing value or error
// // note: be careful with the number of `../` (parent folders) 

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

// /**
//  * foo
//  * @param value hello
//  * @returns hi
//  */
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

// // why: feel right to check if err (a verb) and print error (a noun).

// // type ok = { err: false; value?: any }
// // type err = { err: object }
// // export type result = ok | err

// // why: hacky (js feature: truthy/falsy). 

// // type ok = { type: 'ok'; value?: any }
// // type err = { type: 'err'; error: string }
// // export type result = ok | err

// // why: verbose to write if (type==="err"). 
// // most time we only check if err and then return (avoid nesting hells)

// // todo: deprecate it itself, or move to the project types (not the std types)


// note: always check type before accessing value or error
// note: be careful with the number of `../` (parent folders) 

