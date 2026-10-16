let command_print = print
let command_readline = readline
let command_write = write

log(command_print)

function prn(...args) {
  command_print(...args)
}

function pr(...args) {
  command_write(...args)
}

function read(...args) {
  command_readline(...args)
}

function print(...args) {
  command_print(...args)
}

const nil = null

function is_given(v) {
  return v === nil || v === undefined
  // const missing_symbol = Symbol('missing')

  // if ((v ?? missing_symbol) == missing_symbol) {
  //   return false
  // } else {
  //   return true
  // }
}

function has(obj, key) {
  if (is(obj, 'array')) {
    return obj.includes(key)
  }

  if (is(obj, 'string')) {
    if (typeof key != 'string') {
      return false
    }

    return obj.includes(key)
  }

  if (is(obj, Set)) {
    return obj.has(key)
  }

  if (is(obj, Map)) {
    return obj.has(key)
  }

  if (is(obj, 'object')) {
    return is_given(key) && (is(key, 'string') || is(key, 'number') || is(key, 'symbol')) && Object.hasOwn(obj, key)
  } 
}

// type entries = [k: any, v: any][]
// function entries(obj: object | Map<any, any>): entries {
//   // type entries<T> = [k: keyof T, v: T[keyof T]][]
//   // function entries<T>(obj: object | Map<any, any>): entries<T> {
//   if (obj instanceof Map) {
//     return Array.from(obj.entries())
//   } else if (typeof obj == 'object') {
//     const keys = [
//       ...Object.getOwnPropertyNames(obj),
//       ...Object.getOwnPropertySymbols(obj)
//     ];

//     // @ts-expect-error stupid ts
//     return keys.map(key => [key, obj[key]]);
//   } else {
//     return []
//   }
// }

// // type variable_type = 'nil' | 'array' | "string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function" | Function |
// //   'numeric' | 'iterable'
// /**
//  * @param {'nil' | 'array' | "string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function" | Function |'numeric' | 'iterable'} type
//  */
// function is(v, type) {
//   if (v === nil) {
//     return type == 'nil' || type === nil
//   } else if (type == 'numeric') {
//     return is(v, 'number') || is(v, 'bigint')
//   } else if (type == 'iterable') {
//     return is(v[Symbol.iterator], 'function') && !is(v, 'string')
//   } else if (typeof type == 'function') {
//     return v instanceof type
//   } else {
//     return real_type(v) == type
//   }
// }

// function real_type(v) {
//   if (v === nil || Number.isNaN(v)) {
//     return 'nil'
//   } else if (Array.isArray(v)) {
//     return 'array'
//   } else {
//     return typeof v
//   }
// }

// // numeric
// function num(n) {
//   const result = Number(n)
//   if (Number.isNaN(result)) {
//     return nil
//   }

//   return result
// }

// function int(n) {
//   const result = parseInt(n)
//   if (Number.isNaN(result)) {
//     return nil
//   }

//   return result
// }

// function float(n) {
//   const result = parseFloat(n)
//   if (Number.isNaN(result)) {
//     return nil
//   }

//   return result
// }

// function bool(v) {
//   return Boolean(v)
// }

// function str(s) {
//   return String(s)
// }

// /**
//  * you may pass spread args or an array
//  * 
//  * you should not spread it if it can contain iterable elements, pass an array instead
//  */
// function list(...args) {
//   if (args.length == 1 && is(args[0], 'iterable')) {
//     const [v] = args
//     return Array.from(v)
//   } else {
//     const v = args
//     return Array.from(v)
//   }
// }

// function set(v) {
//   return new Set(v)
// }

// function dict(v) {
//   if (!is(v, 'iterable')) {
//     v = entries(v)
//   }
//   // if (is(v, 'object')) {
//   //   v = entries(v)    
//   // }

//   return new Map(v)
// }

// function obj(v) {
//   return Object.fromEntries(v)
// }


