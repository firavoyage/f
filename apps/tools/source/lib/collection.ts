/**
 * Toggle the presense of an element in a set
 */
export function toggle<T>(set: Set<T>, element: T) {
  if (set.has(element)) {
    set.delete(element)
  } else {
    set.add(element)
  } 
}

export function reverse_map(obj: object) {
  return Object.fromEntries(map(obj, ([key, value]) => [value, key]))
}

export function flatten(object: object) {
// export function flatten(object: object, is_leaf?: fn) {
  const result = []

  let should_append_hr = false

  function traverse(object: object, depth = 1) {
    if (is(object, 'array')) {
      map(object, (v) => {
        if (is(v, 'array')) {
          if (result[result.length - 1][0] == 'p') {
            result.push(['hr'])
          } 

          

          should_append_hr = true
        } 
        result.push(['p', v])
      })
    } 

    map(object, (k, v) => {


      result.push([`h${depth}`, k])


    })
  }

  map(object, (k, v) => {
    
  })
}

type toggle = typeof toggle
type reverse_map = typeof reverse_map
declare global {
  var toggle: toggle
  var reverse_map: reverse_map
}
