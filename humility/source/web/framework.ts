import { ChildProcess } from "node:child_process"
import { vnode } from "./ref/mithril"

let app
let vdom
let current_vnode

const pending_effects = new Set()

type vnode = {
  tag,
  props,
  children,
  node,
  dispose?,
  states?
}

export function h(tag, ...args) {
  let props = {};
  let children = [];

  for (const arg of args) {
    if (Array.isArray(arg)) {
      children.push(...arg);
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
    props = { ...props, children }
    children = [] // reserved for the vdom it actually renders
  }

  return { tag, props, children };
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
  const prev_instance = active_instance;
  active_instance = false; // unbind to prevent binding rerender
  const reference = p(initial_value);
  active_instance = prev_instance; // restore layout context
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
  app = component
  root = document.querySelector(root_selector)

  vdom = h(app)
  node = create_node(vdom)

  trigger_effects()
}

function is_event(key) {
  return key.startsWith('on');
}

function to_event_name(key) {
  return key.toLowerCase().substring(2)
};

function create_node(vnode) {
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

  for (const [key, value] of Object.entries(vnode.props)) {
    if (is_event(key)) {
      node.addEventListener(to_event_name(key), value)
    } else if (key == 'ref') {
      value(node)
    } else {
      node.setAttribute(key, value)
    }
  }

  for (const child of vnode.children) {
    node.appendChild(create_node(vnode.children))
  }

  return node
}

function diff(old_vdom, new_vdom) {
  if (old_vdom.tag != new_vdom.tag) {
    vnode.node.parent
  }
}

export function redraw() {
  const old_vdom = vdom
  const new_vdom = h(app)
  vdom = new_vdom

  diff(old_vdom, new_vdom)
}
