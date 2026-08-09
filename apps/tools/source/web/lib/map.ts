import React from 'react';

export const halt = Symbol('halt')
// export const halt = Symbol('break')

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

type halt = typeof halt
type map = typeof map
declare global {
  var halt: halt
  var map: map
}
