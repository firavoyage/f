import { p } from 'lib/web/props'

export function h<
  F extends (params: any) => any
>(
  fn: F,
  params: Partial<Parameters<F>[0]>,
  // params: Parameters<F>[0],
  ...children: any[]
)

export function h(tag: string, ...children: any[])

export function h(tag: any[], ...children: any[])

// export function h(tag: object, ...children: any[])

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
    given_tag = Fragment

    children = args
  }

  if (is(given_tag, 'string')) {
    props = p(given_props)

    const { tag: parsed_tag, classname: parsed_classname } =
      parse_tag(given_tag)

    if (parsed_tag) {
      tag = parsed_tag
    }

    if (parsed_classname) {
      props.className = `${props.className ?? ''} ${parsed_classname}`.trim()
    }
  } else {
    tag = given_tag

    props = given_props
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
    let [tag, ...classname] = s.split('.')

    tag = tag || 'div'
    classname = classname.join(' ')

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
