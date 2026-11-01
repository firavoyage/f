export function h(...args) {
  let tag,
    props,
    children = []
  let given_tag = 'div',
    given_props = {}

  if (is_tag(args[0]) && is_plain_object(args[1])) {
    ;[given_tag, given_props, ...children] = args
  } else if (is_tag(args[0])) {
    ;[given_tag, ...children] = args
  } else if (is_plain_object(args[0])) {
    ;[given_props, ...children] = args
  } else {
    tag = Fragment

    children = args
  }

  const { tag: parsed_tag, classname: parsed_classname } = parse_tag(given_tag)
  if (parsed_tag) {
    tag = parsed_tag
  }

  props = p(given_props)

  if (parsed_classname) {
    props.className = `${(props.className ?? '')} ${parsed_classname}`
  } 

  return createElement(tag, props, ...children)
}

function is_tag(v) {
  return is(v, 'string') || is(v, 'function')
}

function is_plain_object(v) {
  return is(v, 'object') && !has(v, '$$typeof')
}

function parse_tag(s) {
  if (s == '') {
    return Fragment
  }

  if (!has(s, '.')) {
    return { tag: 'div', classname: s }
  } else {
    const [tag, classname] = s.split('.')

    return {
      tag,
      classname,
    }
  }
}

type h = typeof h
declare global {
  var h: h
}
