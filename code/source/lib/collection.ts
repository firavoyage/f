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

export function flatten(object: object, is_leaf: fn = () => false) {
  const result = []

  // 'hr' | type, label | type, content
  function append(...args) {
    result.push(args)
  }

  function flatten_array(array: any[]) {
    let result = []

    // flatten any array while prepending and appending a hr for each array
    map(array, (item) => {
      if (is(item, 'array')) {
        result.push(['hr'])
        result.push(...flatten_array(item))
        result.push(['hr'])
      } else {
        result.push(['p', item])
      }
    })

    // merge duplicate consecutive hr into one, omit the starting and trailing hr
    result = map(result, (item, index) => {
      if (item[0] == 'hr') {
        if (result[index - 1][0] == 'hr' || index == 0 || index == result.length - 1) {
          return
        }
      }

      return item
    })

    return result
  }

  function traverse(object: object, depth = 1) {
    if (is_leaf(object)) {
      // see as primitive
      append('p', object)
    } else if (is(object, 'array')) {
      result.push(...flatten_array(object))
    } else if (is(object, 'object')) {
      map(object, ([k, v]) => {
        append(`h${depth}`, k)
        traverse(v, depth + 1)
      })
    } else {
      // primitive
      append('p', object)
    }
  }

  traverse(object)

  return result
}

type toggle = typeof toggle
type reverse_map = typeof reverse_map
type flatten = typeof flatten
declare global {
  var toggle: toggle
  var reverse_map: reverse_map
  var flatten: flatten
}
