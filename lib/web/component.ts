export function structure(component = 'app', tag = 'div') {
  return new Proxy({}, {
    get(_, prop){
      const class_name = `${component}_${prop}`

      return (...args) => h(tag, ...args)
    }
  })
}

const children_symbol = Symbol()

function h(tag, ...args) {
  let props = {}, children = []

  if (is(arg[0], 'object') && !has(arg[0], children_symbol)) {
    [props, ...children] = arg
  } else {
    children = arg
  } 

  props = p(props)

  const result = createElement(tag, props, children)
  result[children_symbol] = true

  return result
}


