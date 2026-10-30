export function structure(component = 'app', tag = 'div') {
  return new Proxy(
    {},
    {
      get(_, prop) {
        const class_name = `${component}_${prop}`

        return (...args) => {
          const { props, children } = parse(...args)

          props.class = class_name

          return h(tag, props, ...children)
        }
      },
    },
  )
}

const children_symbol = Symbol()

function h(tag, props, ...children) {
  props = p(props)

  if (is(tag, 'string') && has(props, 'html')) {
    props.dangerouslySetInnerHTML = 
  } 

  const result = createElement(tag, props, ...children)
  result[children_symbol] = true

  return result
}

function parse(...args) {
  let props = {},
    children = []

  if (is(arg[0], 'object') && !has(arg[0], children_symbol)) {
    ;[props, ...children] = arg
  } else {
    children = arg
  }

  return { props, children }
}
