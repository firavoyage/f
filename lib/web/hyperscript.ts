import { p } from 'lib/web/props'

export function h<F extends (params: any) => any>(
  component: F,
  props?: Partial<Parameters<F>[0]>,
  // params: Parameters<F>[0],
  ...children: any[]
)

type props = object

export function h(tag: string, props: props, ...children: any[])

export function h(tag: string, ...children: any[])

export function h(...args) {
  let { flexible_tag, props, children } = parse_hyperscript(...args)

  let tag
  if (is(flexible_tag, 'string')) {
    props = p(props)

    const { tag: parsed_tag, classname: parsed_classname } =
      parse_tag(flexible_tag)

    tag = parsed_tag

    props.className = [props.className, parsed_classname]

    props = p(props)
  } else {
    // component
    tag = flexible_tag
  }

  return createElement(tag, props, ...children)
}

function parse_hyperscript(...args) {
  if (is_plain_object(args[1])) {
    const [flexible_tag, props, ...children] = args

    return { flexible_tag, props, children }
  } else {
    const [flexible_tag, ...children] = args

    return { flexible_tag, props: {}, children }
  }
}

function is_plain_object(v) {
  return is(v, 'object') && !has(v, '$$typeof')
}

function parse_tag(s) {
  if (s == '') {
    return { tag: Fragment, classname: '' }
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
