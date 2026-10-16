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
      const bytesRead = require('fs').readSync(
        0,
        buffer,
        0,
        buffer.length,
        null,
      )
      return buffer.toString('utf8', 0, bytesRead).trimEnd()
    }
    function write(...args) {
      process.stdout.write(str(args.join('')))
    }

    command_write = write
    command_print = console.log
    command_readline = readline
  } else {
    // no window/global/global_this it seems
    command_write = this.write
    command_print = this.print
    command_readline = this.readline
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
  return command_readline(...args)
}

// fn statement hoists, and let/const just doesnt break "this"
const print = function print(...args) {
  if (is(args[0], 'number')) {
    command_print(args.join(' '))
  } else {
    command_print(args.join(''))
  } 
}

const log = print

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
  if (is(obj, 'array')) {
    return obj.includes(key)
  }

  if (is(obj, 'string')) {
    if (!is(key, 'string')) {
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
    return (
      is_given(key) &&
      (is(key, 'string') || is(key, 'number') || is(key, 'symbol')) &&
      Object.hasOwn(obj, key)
    )
  }
}

function entries(obj) {
  if (is(obj, Map)) {
    return Array.from(obj.entries())
  } else if (is(obj, 'object')) {
    /**
     * entries: enumerable non symbol
     * names: non symbol
     * symbol: non string
     */
    const keys = [
      // ...Object.entries(obj),
      ...Object.getOwnPropertyNames(obj),
      ...Object.getOwnPropertySymbols(obj),
    ]

    return map(keys, (key) => [key, obj[key]])
  } else if (is(obj, 'array')) {
    return obj.map((item, index) => [index, item])
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
    return type == 'nil' || type === nil
  } else if (type == 'numeric') {
    return is(v, 'number') || is(v, 'bigint')
  } else if (type == 'iterable') {
    return is(v[Symbol.iterator], 'function') && !is(v, 'string')
  } else if (typeof type == 'function') {
    return v instanceof type
  } else {
    return real_type(v) == type
  }
}

function real_type(v) {
  if (v === nil || Number.isNaN(v)) {
    return 'nil'
  } else if (Array.isArray(v)) {
    return 'array'
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
  if (args.length == 1 && is(args[0], 'iterable')) {
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
  if (!is(v, 'iterable')) {
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

const halt_symbol = Symbol('halt')
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
 * @param {(item: any, index: number, array: any[]) => any} f
 */
function map(items, f) {
  if (is(items, Map)) {
    items = Array.from(items.entries())
  } else if (is(items, Set)) {
    items = Array.from(items)
  } else if (is(items, 'object')) {
    items = entries(items)
  }

  const result = []

  for (const [index, item] of entries(items)) {
    const value = f(item, index, items)

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

/**
 * Generate an array from begin = 0 to end (excluded) by step = 1
 *
 * @param {number[]} args
 */
function each(...args) {
  let begin = 0,
    end,
    step = 1

  if (args.length == 1) {
    end = args[0]
  } else if (args.length == 2) {
    begin = args[0]
    end = args[1]
  } else if (args.length == 3) {
    begin = args[0]
    end = args[1]
    step = args[2]
  }

  const numbers = []

  let index = begin
  while ((index - end) * step < 0) {
    numbers.push(index)
    index += step
  }

  return numbers
}

// thoughts

/**
 * 
 */

// solution

pr(`1*1= 1
1*2= 2 2*2= 4
1*3= 3 2*3= 6 3*3= 9
1*4= 4 2*4= 8 3*4=12 4*4=16
1*5= 5 2*5=10 3*5=15 4*5=20 5*5=25
1*6= 6 2*6=12 3*6=18 4*6=24 5*6=30 6*6=36
1*7= 7 2*7=14 3*7=21 4*7=28 5*7=35 6*7=42 7*7=49
1*8= 8 2*8=16 3*8=24 4*8=32 5*8=40 6*8=48 7*8=56 8*8=64
1*9= 9 2*9=18 3*9=27 4*9=36 5*9=45 6*9=54 7*9=63 8*9=72 9*9=81`)
