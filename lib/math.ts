export const math = Math

export function max(...args) {
  const numbers = array(...args)

  return math.max(...numbers)
}

export function min(...args) {
  const numbers = array(...args)

  return math.min(...numbers)
}

export const { abs, floor, ceil } = Math

type max = typeof max
type min = typeof min
type abs = typeof abs
type floor = typeof floor
type ceil = typeof ceil
type math = typeof math
declare global {
  var max: max
  var min: min
  var abs: abs
  var floor: floor
  var ceil: ceil
  var math: math
}
