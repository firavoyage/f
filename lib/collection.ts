const halt_symbol = Symbol('halt')
export function halt(value: any) {
  return { [halt_symbol]: true, value }
}

type pair<K = any, V = any> = [key: K, value: V]

export function map<T>(items: T[], fn: (item: T, index: number, array: T[]) => any): any[]
export function map<K, V>(items: Map<K, V>, fn: (item: pair<K, V>, index: number, array: pair<K, V>[]) => any): any[]
export function map<T>(items: Set<T>, fn: (item: T, index: number, array: T[]) => any): any[]
export function map<K extends Key, V>(items: Record<K, V>, fn: (item: pair<K, V>, index: number, array: pair<K, V>[]) => any): any[]
// export function map(items: any, fn: (item: any, index: number, array: any[]) => any): any[]

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
// export function map(items: any, fn: (item: any, index: number, array: any[]) => any) {
  if (is(items, Map)) {
    items = Array.from(items.entries())
  } else if (is(items, Set)) {
    items = Array.from(items)
  }  else if (is(items, 'object')) {
    items = Object.entries(items)
  }

  const result = []

  for (const [index, item] of Object.entries(items)) {
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
      // @ts-expect-error 
      result.push(value.value)
      break
    }

    result.push(value);
  }

  return result
}

/**
 * Toggle the presense of an element in a set
 */
export function toggle_set<T>(set: Set<T>, element: T) {
  if (set.has(element)) {
    set.delete(element)
  } else {
    set.add(element)
  }
}

export function reverse_map(obj: object) {
  return Object.fromEntries(map(obj, ([key, value]) => [value, key]))
}

type halt = typeof halt
type map = typeof map
type toggle = typeof toggle_set
type reverse_map = typeof reverse_map
declare global {
  var halt: halt
  var map: map
  var toggle_set: toggle
  var reverse_map: reverse_map
}
