import React from 'react';
import { map as map_util } from 'lib/map';

const halt_symbol = Symbol('halt')
export function halt(value: any) {
  return { [halt_symbol]: true, value }
}
// export const halt = Symbol('halt')
// export const halt = Symbol('break')

export function map<T>(items: T[], fn: (item: T, index: number, array: T[]) => any): any[]
export function map(items: object, fn: (item: ReturnType<typeof Object.entries>[0], index: number, array: ReturnType<typeof Object.entries>) => any): object
// export function map<T>(items: object & T, fn: (item: ObjectENt T, index?: number, array?: T[]) => any): any[]

/**
 * map an array to a fn
 * 
 * return void to continue
 * 
 * return halt to break
 * 
 * return halt(value) to break after the last value
 * 
 * for react elements, it will use index as a explicit key if key does not exist
 * to silence warning (irrelevant wo hidden states or perf issues)
 */
export function map(...args: any) {
  // @ts-expect-error 
  return map_util(map_util(...args), (value, index) =>
    !React.isValidElement(value) || value.key !== null ?
      value :
      React.cloneElement(value, {
        key: `${index}`
        // key: `fallback-key-${index}`
      }))
}

// no need to redeclare

// type halt = typeof halt
// type map = typeof map
// declare global {
//   var halt: halt
//   var map: map
// }
