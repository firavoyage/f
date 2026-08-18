const halt_symbol = Symbol('halt')
export function halt(value: any) {
  return { [halt_symbol]: true, value }
}
// export const halt = Symbol('halt')
// export const halt = Symbol('break')

export function map<T>(items: T[], fn: (item: T, index?: number, array?: T[]) => any): any[]
export function map(items: object, fn: (item: ReturnType<typeof Object.entries>[0], index?: number, array?: ReturnType<typeof Object.entries>) => any): object
// export function map<T>(items: object & T, fn: (item: ObjectENt T, index?: number, array?: T[]) => any): any[]

/**
 * map an array to a fn
 * 
 * return void to continue
 * 
 * return halt to break
 * 
 * return halt(value) to break after the last value
 */
export function map(items: any, fn: (item: any, index?: number, array?: any[]) => any) {
  let is_object = false

  if (typeof items == 'object' && !Array.isArray(items)) {
    items = Object.entries(items)

    is_object = true
  } 

  const result = []

  for (const [index, item] of Object.entries(items)) {
    const value = fn(item, +index, items)

    if (!is_given(value)) {
      continue
    }

    if (value == halt) {
      break
    }

    if (has(value, halt_symbol)) {
      // @ts-expect-error 
      result.push(value.value)
      break
    } 

    result.push(value);
  }

  if (is_object) {
    return Object.fromEntries(result)
  } 

  return result
}

type halt = typeof halt
type map = typeof map
declare global {
  var halt: halt
  var map: map
}
