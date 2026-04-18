// note: always check type before accessing value or error
// note: be careful with the number of `../` (parent folders) 

type ok = { err: false; value?: any }
type err = { err: true; error?: string | object }

// or error {type, message}? 

/**
 * you either
 * 
 * - err, panics
 * - err, logs
 * - err, handle each error types
 */

declare global {
  type result = ok | err
}

export function ok(value: any): ok {
  return {
    err: false, value
  }
}

export function err(error: any): err {
  return {
    err: true, error
  }
}

// why: feel right to check if err (a verb) and print error (a noun).

// type ok = { err: false; value?: any }
// type err = { err: object }
// export type result = ok | err

// why: hacky (js feature: truthy/falsy). 

// type ok = { type: 'ok'; value?: any }
// type err = { type: 'err'; error: string }
// export type result = ok | err

// why: verbose to write if (type==="err"). 
// most time we only check if err and then return (avoid nesting hells)

// todo: deprecate it itself, or move to the project types (not the std types)

