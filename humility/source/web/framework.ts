import { ChildProcess } from "node:child_process"
import { cloneDeep } from 'lodash';
import { invalid_input } from "lib/file";
import chalk from "chalk";

let app
let vdom
let current_vnode

const pending_effects = new Set()

type vnode = {
  tag: string | Function,
  props: Object,
  children: vnode[],
  node: Node,
  dispose?: Set<Function>,
  states?
}

function log(...args) {
  console.log(...args.map((arg) => typeof arg == 'object' ? cloneDeep(arg) : arg))
  // console.log(...args)
}

const hyperscript_symbol = Symbol('h')

export function h(tag, ...args) {
  log('h params', tag, ...args)
  let props = {};
  let children = [];

  for (const arg of args) {
    if (Array.isArray(arg)) {
      children.push(...arg);
    } else if (has(arg, hyperscript_symbol)) {
      children.push(arg)
    } else if (typeof arg === 'object') {
      props = arg;
    } else {
      children.push(arg);
    }
  }

  children = children.filter(c => c !== false && c !== null && c !== undefined);

  if (typeof tag == 'string') {
    // count the number of . in tag
    if (tag.split(".").length - 1 > 1) {
      throw new Error('tag must have at most one dot');
    }
    const tag_parts = tag.split(".")
    tag = tag_parts[0] || 'div'
    if (tag_parts[1]) {
      props.class = tag_parts[1]
    }
  } else if (typeof tag == 'function') {
    if (children.length > 0) {
      props = { ...props, children }
    }
    children = [] // reserved for the vdom it actually renders
  }

  log('h return', { tag, props, children })
  return { tag, props, children, [hyperscript_symbol]: true };
}

export function p(initial_value) {
  let value = initial_value;
  const subscribers = new Set()

  const signal = function (...args) {
    if (args.length === 0) {
      return value;
    }

    const new_value = args[0]

    // update regardless of equality for predictability
    if (typeof new_value === 'function') {
      const result = new_value(value);
      if (result === undefined) {
        // immer pattern
        // example: store(store => {store.foo = 'bar'})
      } else {
        value = result
        // example: count(c => c + 1)
      }
    } else {
      value = new_value;
    }

    for (const item of subscribers) {
      item()
    }
    // return value; // not needed
  };

  if (app) {
    subscribers.add(redraw)
  }

  return signal
}

// signal wo default rerender
export function ref(initial_value) {
  const prev_vnode = current_vnode;
  current_vnode = false; // unbind to prevent binding rerender
  const reference = p(initial_value);
  current_vnode = prev_vnode; // restore layout context
  return reference;
}

export function effect(e) {
  pending_effects.add({ effect: e, vnode: current_vnode })
}

function trigger_effects() {
  for (const effect of pending_effects) {
    const cleanup = effect.effect()
    if (typeof cleanup == 'function') {
      if (!effect.vnode.dispose) {
        effect.vnode.dispose = new Set()
      }
      effect.vnode.dispose.add(cleanup)
    }
  }
}

export function render(component, root_selector) {
  log('render component', component, root_selector)
  app = component
  vdom = h(app)

  log('render vdom', vdom)

  const root = document.querySelector(root_selector)
  const app_node = create_node(vdom)

  append_node(root, app_node)

  // trigger_effects()
}

function is_event(key) {
  return key.startsWith('on');
}

function to_event_name(key) {
  return key.toLowerCase().substring(2)
};

function create_node(vnode: vnode | string) {
  log('create node params', vnode, typeof vnode)

  if (typeof vnode == 'string') {
    return document.createTextNode(vnode)
  }

  if (typeof vnode.tag == 'function') {
    const prev_vnode = current_vnode
    current_vnode = vnode
    vnode.children = [vnode.tag(vnode.props)]
    current_vnode = prev_vnode
    vnode.node = create_node(vnode.children[0])

    return vnode.node
  }

  const node = document.createElement(vnode.tag)
  vnode.node = node

  for (const [key, value] of Object.entries(vnode.props ?? {})) {
    if (is_event(key)) {
      node.addEventListener(to_event_name(key), value)
    } else if (key == 'ref') {
      value(node)
    } else {
      node.setAttribute(key, value)
    }
  }

  for (const child of vnode.children ?? []) {
    node.appendChild(create_node(child))
  }

  log('create node return vnode', vnode)

  return node
}

function dispose(vnode: vnode) {
  log('dispose', vnode)

  if (vnode.dispose) {
    for (const cleanup of vnode.dispose) {
      cleanup()
    }
  }
}

function replace_node(old_node: Node, new_node: Node) {
  log('replace_node', old_node, new_node)

  dispose(old_node)
  old_node.parentNode?.replaceChild(old_node, new_node)
}

function append_node(old_node: Node, child: Node) {
  old_node.appendChild(child)
}

function remove_node(old_node: Node) {
  dispose(old_node)
  old_node.remove()
}

function has(obj, key) {
  return Object.hasOwn(obj, key)
}

function each(n) {
  // 0 .. n - 1
  return Array.from(Array(n).keys())
}

function remove_prop(vnode, prop) {
  const node = vnode.node
  if (is_event(prop)) {
    node.removeEventListener(to_event_name(prop), vnode.props[prop])
  } else {
    node.removeAttribute(prop)
  }
}

function add_prop(vnode, prop, value) {
  const node = vnode.node
  if (is_event(prop)) {
    node.addEventListener(to_event_name(prop), value)
  } else {
    node.setAttribute(prop, value)
  }
}

function update_prop(vnode, prop, value) {
  const node = vnode.node
  if (is_event(prop)) {
    node.removeEventListener(to_event_name(prop), vnode.props[prop])
    node.addEventListener(to_event_name(prop), value)
  } else {
    node.setAttribute(prop, value)
  }
}

function diff(old_vdom: vnode, new_vdom: vnode) {
  log('diff', old_vdom, new_vdom)

  new_vdom.node = create_node(new_vdom) // all children will also be created

  if (old_vdom.tag != new_vdom.tag) {
    log('diff replace node', old_vdom, new_vdom)
    // 
    replace_node(old_vdom.node, new_vdom.node)
    return
  }

  // update attrs
  if (typeof new_vdom.tag != 'function') {
    const all_keys = new Set([...Object.keys(old_vdom.props), ...Object.keys(new_vdom.props)])

    for (const key of all_keys) {
      if (!has(new_vdom.props, key)) {
        remove_prop(old_vdom, key)
      }
      else if (!has(old_vdom.props, key)) {
        add_prop(old_vdom, key, new_vdom.props[key])
      } else {
        update_prop(old_vdom, key, new_vdom.props[key])
      }
    }
  }

  // diff children
  log('diff children', old_vdom.children, new_vdom.children)
  for (const index of each(Math.max(old_vdom.children.length, new_vdom.children.length))) {
    if (!has(old_vdom.children, index)) {
      append_node(old_vdom.node, new_vdom.children[index].node)
    } else if (!has(new_vdom.children, index)) {
      remove_node(old_vdom.children[index].node)
    } else if (typeof new_vdom.children[index] == 'string' || typeof old_vdom.children[index] == 'string') {
      // string could not have props. 'text'.node does not work. Object('foo') is too hacky.      
      if (new_vdom.children[index] != old_vdom.children[index]) {
        // standard replace_node has no effect
        old_vdom.node.replaceChild(document.createTextNode(new_vdom.children[index]), old_vdom.children[index])
      }
    } else {
      diff(old_vdom.children[index], new_vdom.children[index])
    }
  }
}

export function redraw() {
  log('redraw')

  const old_vdom = vdom
  const new_vdom = h(app)
  vdom = new_vdom

  diff(old_vdom, new_vdom)
}
