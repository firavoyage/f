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

type ok<T> = Exclude<T, err>
type err = { type: string, message: string }

declare global {
  type result<T> = ok<T> | err;
}

export function ok<T>(value: ok<T>): ok<T> {
  return value
}

const err_prototype = {}

export function err(error: err): err {
  return Object.create(err_prototype, {
    type: {
      value: error.type,
      writable: false,
      enumerable: true
    },
    message: {
      value: error.message,
      writable: false,
      enumerable: true
    }
  })
}

export function rescue<T>(result: result<T>): result is err {
  return Object.getPrototypeOf(result) === err_prototype
}

function foo(): result<boolean> {
  if (Math.random() > 0.5) {
    return ok(true)
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
