import React from 'react';

const halt_symbol = Symbol('halt')
export function halt(value: any) {
  return { [halt_symbol]: true, value }
}
// export const halt = Symbol('halt')
// export const halt = Symbol('break')

/**
 * map an array to a fn
 * 
 * return void to continue
 * 
 * return halt to break
 * 
 * return halt(value) to break w the last value
 * 
 * for react elements, it will silence key non existing warning
 * by providing an explicit fallback of index
 */
export function map<T>(items: T[], fn: (item: T, index?: number, array?: T[]) => any) {
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

    // value.key is always defined (existing) by react
    if (!React.isValidElement(value) || value.key !== null) {
      result.push(value);
    } else {
      result.push(
        React.cloneElement(value, {
          key: `${index}`
          // key: `fallback-key-${index}`
        })
      );
    }
  }

  return result
}

export function flatten(items: any[]) {
  return items.flat()
}

type halt = typeof halt
type map = typeof map
type flatten = typeof flatten
declare global {
  var halt: halt
  var map: map
  var flatten: flatten
}
