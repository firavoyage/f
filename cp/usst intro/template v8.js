// utils

let command_print
let command_readline
let command_write

try {
  // if (Bun || Deno || process.version) {
  // if (process.version) {
  if (Bun) {
    function readline() {
      const buffer = Buffer.alloc(1024)
      const bytesRead = require("fs").readSync(
        0,
        buffer,
        0,
        buffer.length,
        null,
      )
      return buffer.toString("utf8", 0, bytesRead).trimEnd()
    }
    function write(...args) {
      process.stdout.write(str(args.join(" ")))
    }

    command_write = write
    command_print = console.log
    command_readline = readline
  } else {
    command_write = write
    command_print = print
    command_readline = readline
  }
} catch (e) {
  // bun not defined
  command_write = this.write
  command_print = this.print
  command_readline = this.readline
}

function prn(...args) {
  command_print(...args)
}

function pr(...args) {
  command_write(...args)
}

function read(...args) {
  command_readline(...args)
}

let print = function print(...args) {
  command_print(...args)
}

print(1)

// const log = command_print

// std

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
  if (is(obj, "array")) {
    return obj.includes(key)
  }

  if (is(obj, "string")) {
    if (typeof key != "string") {
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

  if (is(obj, "object")) {
    return (
      is_given(key) &&
      (is(key, "string") || is(key, "number") || is(key, "symbol")) &&
      Object.hasOwn(obj, key)
    )
  }
}

function entries(obj) {
  if (is(obj, Map)) {
    return Array.from(obj.entries())
  } else if (typeof obj == "object") {
    const keys = [
      ...Object.getOwnPropertyNames(obj),
      ...Object.getOwnPropertySymbols(obj),
    ]

    return keys.map((key) => [key, obj[key]])
  } else {
    return []
  }
}

// type variable_type = 'nil' | 'array' | "string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function" | Function |
//   'numeric' | 'iterable'
/**
 * @param {'nil' | 'array' | "string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function" | Function |'numeric' | 'iterable'} type
 */
function is(v, type) {
  if (v === nil) {
    return type == "nil" || type === nil
  } else if (type == "numeric") {
    return is(v, "number") || is(v, "bigint")
  } else if (type == "iterable") {
    return is(v[Symbol.iterator], "function") && !is(v, "string")
  } else if (typeof type == "function") {
    return v instanceof type
  } else {
    return real_type(v) == type
  }
}

function real_type(v) {
  if (v === nil || Number.isNaN(v)) {
    return "nil"
  } else if (Array.isArray(v)) {
    return "array"
  } else {
    return typeof v
  }
}

// numeric
function num(n) {
  const result = Number(n)
  if (Number.isNaN(result)) {
    return nil
  }

  return result
}

function int(n) {
  const result = parseInt(n)
  if (Number.isNaN(result)) {
    return nil
  }

  return result
}

function float(n) {
  const result = parseFloat(n)
  if (Number.isNaN(result)) {
    return nil
  }

  return result
}

function bool(v) {
  return Boolean(v)
}

function str(s) {
  return String(s)
}

/**
 * to pass spread args or an array
 *
 * it may not be used when individual items are be iterable
 */
function list(...args) {
  if (args.length == 1 && is(args[0], "iterable")) {
    const [v] = args
    return Array.from(v)
  } else {
    const v = args
    return Array.from(v)
  }
}

function set(v) {
  return new Set(v)
}

function dict(v) {
  if (!is(v, "iterable")) {
    v = entries(v)
  }
  // if (is(v, 'object')) {
  //   v = entries(v)
  // }

  return new Map(v)
}

function obj(v) {
  return Object.fromEntries(v)
}

// fp

const halt_symbol = Symbol("halt")
function halt(value) {
  return { [halt_symbol]: true, value }
}

/**
 * Map an array to a fn
 *
 * return void to continue
 *
 * return halt(v?) to break (or after pushing the last value)
 *
 * auto convert to entries for objects
 *
 * return v? <=> next v? in ruby
 *
 * halt v? <=> break v? in ruby
 *
 * @param {(item: any, index: number, array: any[]) => any} fn
 */
function map(items, fn) {
  if (is(items, Map)) {
    items = Array.from(items.entries())
  } else if (is(items, Set)) {
    items = Array.from(items)
  } else if (is(items, "object")) {
    items = entries(items)
  }

  const result = []

  for (const [index, item] of entries(items)) {
    const value = fn(item, +index, items)

    if (value === undefined) {
      continue
    }
    // if (!is_given(value)) {
    //   continue
    // }

    if (value == halt) {
      break
    }

    if (has(value, halt_symbol)) {
      result.push(value.value)
      break
    }

    result.push(value)
  }

  return result
}

// print(map([1, 2, 3], (v) => v * v))
