export function structure(component = 'app', tag = 'div') {  
  return new Proxy(
    {},
    {
      get(_, prop) {
        const class_name = `${component}_${prop}`

        return (...args) => {
          const { props, children } = parse(...args)

          if (has(props, 'className')) {
            props.className += ` ${class_name}`
          } else {
            props.className = class_name
          } 

          return h(tag, props, ...children)
        }
      },
    },
  )
}

// const children_symbol = Symbol()

function h(tag, props, ...children) {
  // props = p(props)

  if (is(tag, 'string') && has(props, 'html')) {
    props.dangerouslySetInnerHTML = { __html: props.html }
    props.html = nil
  } 

  const result = createElement(tag, props, ...children)
  // result[children_symbol] = true

  return result
}

function parse(...args) {
  let props = {},
    children = []

  // if (is(args[0], 'object') && !has(args[0], children_symbol)) {
  if (is(args[0], 'object') && !(args[0].$$typeof == Symbol.for('react.element'))) {
    ;[props, ...children] = args
  } else {
    children = args
  }

  props = p(props)

  return { props, children }
}
