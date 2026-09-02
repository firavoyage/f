const halt_symbol = Symbol('halt')
export function halt(value: any) {
  return { [halt_symbol]: true, value }
}

type entry = [key: any, value: any]

export function map<T>(items: T[], fn: (item: T, index: number, array: T[]) => any): any[]
export function map(items: Map<any, any>, fn: (item: entry, index: number, array: entry[]) => any): any[]
export function map(items: object, fn: (item: entry, index: number, array: entry[]) => any): any[]

/**
 * Map an array to a fn
 * 
 * return void to continue
 * 
 * return halt(value?) to break (or after pushing the last value)
 * 
 * auto convert to entries for objects
 */
export function map(items: any, fn: (item: any, index: number, array: any[]) => any) {
  if (items instanceof Map) {
    items = Array.from(items.entries())
  } else if (typeof items == 'object' && !Array.isArray(items)) {
    items = Object.entries(items)
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

  return result
}

type halt = typeof halt
type map = typeof map

declare global {
  var halt: halt
  var map: map
}
