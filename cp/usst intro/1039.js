// utils

let command_print
let command_readline
let command_write
let log

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
    log = console.log
  } else {
    // no window/global/global_this it seems
    command_write = this.write
    command_print = this.print
    command_readline = this.readline
    log = () => {}
  }
} catch (e) {
  // bun not defined
  command_write = this.write
  command_print = this.print
  command_readline = this.readline
  log = () => {}
}

function prn(...args) {
  pr(...args)
  pr('\n')
}

function pr(...args) {
  if (is(args[0], 'number')) {
    command_write(args.join(' '))
  } else {
    command_write(args.join(''))
  }
}

function read() {
  const line = read_line()

  const items = map(line.split(' '), (v) => num(v) || v)

  if (items.length == 1) {
    return items[0]
  } else {
    return items
  }
}

const input = read

/**
 * @returns {string}
 */
function read_line() {
  return command_readline()
}

/**
 * must take a whole line or rest input will be dropped, likely not what you want
 *
 * @returns {number}
 */
function read_int() {
  const ints = map(read().split(' '), int)

  return ints[0]
}

/**
 * @returns {number[]}
 */
function read_ints() {
  const ints = map(read().split(' '), int)

  return ints
}

/**
 * must take a whole line or rest input will be dropped, likely not what you want
 *
 * @returns {number}
 */
function read_num() {
  const numbers = map(read().split(' '), num)

  return numbers[0]
}

/**
 * @returns {number[]}
 */
function read_nums() {
  const numbers = map(read().split(' '), num)

  return numbers
}

// fn statement hoists, and let/const just doesnt break "this"
const print = function print(...args) {
  prn(...args)
}

// std

const nil = null

function is_given(v) {
  return v !== nil && v !== undefined
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

// const in = has
const contains = has

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

function merge(target, ...sources) {
  for (const source of sources) {
    for (const key of Object.keys(source)) {
      target[key] = source[key]
    }
  }
  return target
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

function arr(v) {
  return Array.from(v)
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

// fmt

/**
 * @param {number} precision digits to keep after decimal point
 */
function format_float(n, precision) {
  return n.toFixed(precision)
}
Number.prototype.format = curry(format_float)

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
 * @param {(accumulator: any, item: any, index: number, array: any[]) => any} f
 */
function reduce(items, f, initial_value) {
  let result
  let index = 0

  if (!is_given(initial_value)) {
    result = items[0]
    index++
  } else {
    result = initial_value
  }

  while (index <= items.length - 1) {
    result = f(result, items[index], index, items)
    index++
  }

  return result
}

/**
 * @param {(accumulator: any, item: any, index: number, array: any[]) => any} f
 */
function reduce_right(items, f, initial_value) {
  const last_index = items.length - 1

  let result
  let index = last_index

  if (!is_given(initial_value)) {
    result = items[last_index]
    index--
  } else {
    result = initial_value
  }

  while (index >= 0) {
    result = f(result, items[index], index, items)
    index--
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

function curry(f) {
  return function (...args) {
    return f(this, ...args)
  }
}

function chainable(data, methods) {
  return merge(
    data,
    obj(
      map(methods, ([name, method]) => [
        name,
        (...args) => method(data, ...args),
      ]),
    ),
  )
}

// math

function add(a, b) {
  return a + b
}

function sub(a, b) {
  return a - b
}

function mul(a, b) {
  return a * b
}

function pow(a, b) {
  return a ** b
}

function divmod(a, b) {
  return [floordiv(a, b), mod(a, b)]
}

function truediv(a, b) {
  return a / b
}

function floordiv(a, b) {
  return (a - (a % b)) / b
}

function mod(a, b) {
  return a % b
}

function sum(...args) {
  const numbers = list(...args)

  return reduce(numbers, add)
}

function prod(...args) {
  const numbers = list(...args)

  return reduce(numbers, mul)
}

// lt
function less(a, b) {
  return a < b
}

// gt
function greater(a, b) {
  return a > b
}

function eq(a, b) {
  return a === b
}

// ne
function neq(a, b) {
  return a !== b
}

// le
function leq(a, b) {
  return a <= b
}

// ge
function geq(a, b) {
  return a >= b
}

function approx_eq(a, b, tolerance = pow(0.1, 5)) {
  return abs(sub(a, b)) < tolerance
}

function mod_eq(a, b, modular) {
  // feels modular is more natural and less pedantic than modulo
  return eq(mod(mod(a, modular) - mod(b, modular), modular), 0)
}

function and(a, b) {
  return a && b
}

function or(a, b) {
  return a || b
}

function not(a) {
  return !a
}

function xor(a, b) {
  // ?!
  return a ^ b
}

// feels i debug (i.e. log) way more often than logab
const { abs, floor, ceil, sqrt, log: ln } = Math

const math = {
  pi: Math.PI,
  e: Math.E
}

function logab(a, b) {
  // so confusing of js math.log
  // look at py math.log, which is what you expect
  return ln(a) / ln(b)
}

/**
 * Maximum in a list
 *
 * you may pass an array of spread args
 *
 * you may pass numbers and fn that should return a < b (useful for structs)
 */
function max(...args) {
  const numbers_ = list(...args)

  if (is(numbers_[0], 'iterable') && is(numbers_[1], 'function')) {
    const [numbers, f] = numbers_

    return reduce(numbers, (maximum, current) =>
      f(maximum, current) ? current : maximum,
    )
  } else {
    return max(numbers_, less)
  }
}

/**
 * Minimum in a list
 *
 * you may pass an array of spread args
 *
 * you may pass numbers and fn that should return a < b (useful for structs)
 */
function min(...args) {
  const numbers_ = list(...args)

  if (is(numbers_[0], 'iterable') && is(numbers_[1], 'function')) {
    const [numbers, f] = numbers_

    return reduce(numbers, (minimum, current) =>
      f(minimum, current) ? minimum : current,
    )
  } else {
    return min(numbers_, less)
  }
}

/**
 * @param {number} [timeout=pow(10, 5)] maximum number of updates before it's returned
 */
function improve(update, close, guess = 1, timeout = pow(10, 5)) {
  let times = 0

  while (!close(guess) && times < timeout) {
    const prev_guess = guess
    guess = update(guess)

    times++
  }

  return guess
}

/**
 * solve the root of an eq using the newton method
 */
function solve_equation(term, derivative) {
  // or you may call it find root, or find closest root, if feasible
  function update(x) {
    return x - term(x)/derivative(x)
  }

  function close(x) {
    return approx_eq(term(x), 0)
  }

  return improve(update, close)
}

// thoughts

/**
 * 保证1 ≤ n ≤ 1000000000
 * 
 * ---
 * 
 * not a simple ceil or floor as i guess
 * 
 * ---
 * 
 * i 0.5 -> 0.5 1
 * 
 * ii 0.5 -> 0.5 0.5
 * 
 * iii 0.5 -> 0 0.5
 * 
 * ---
 * 
 * i x in [0, 1] -> 1 1-x
 * 
 * ii y (0, 1 - x) -> 1-y 1-x
 * 
 * iii z = max -> 1-y min(1, 1-x - (1-y))
 * 
 */

// solution

// log(logab(1000000000, 10).format(0)) == 9

const n = input()

// pr(ceil(n/4))

// pr(floor(n/4))


