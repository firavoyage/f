import { vnode } from "./ref/mithril"

let app: false | vnode = false
let vdom: false | vnode = false
let root: false | Node = false

let effects = new Set()
let current_vnode: false | vnode = false

type vnode = {
  tag: string | Function,
  props: object,
  children: Array<vnode>
  dispose: undefined | Set<Function>
} | string

export function h(tag, ...args): vnode {
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
  }

  return { tag, props, children };
}

export function p(initial_value = false) {
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
export function ref(initial_value = false) {
  const prev_instance = active_instance;
  active_instance = false; // unbind to prevent binding rerender
  const reference = p(initial_value);
  active_instance = prev_instance; // restore layout context
  return reference;
}

export function effect(e) {
  effects.add({ effect: e, vnode: current_vnode })
}

function dispose(vnode) {
  for (const cleanup of vnode) {
    cleanup()
  }
}

function diff(old_vnode, new_vnode, container, index = 0) {
  const current_dom = container.childNodes[index];

  if (!old_vnode) {
    container.appendChild(create_node(new_vnode));
    return;
  }

  if (typeof old_vnode === 'string' || typeof new_vnode === 'string') {
    if (old_vnode !== new_vnode) {
      const next_dom = create_node(new_vnode);
      dispose(old_vnode);
      container.replaceChild(next_dom, current_dom);
    }
    return;
  }

  if (old_vnode.tag !== new_vnode.tag) {
    const next_dom = create_node(new_vnode);
    dispose(old_vnode);
    container.replaceChild(next_dom, current_dom);
    return;
  }

  patch_props(current_dom, old_vnode.props || {}, new_vnode.props || {});

  const old_children = old_vnode.children || [];
  const new_children = new_vnode.children || [];
  const max_length = Math.max(old_children.length, new_children.length);

  for (let i = max_length - 1; i >= 0; i--) {
    diff(old_children[i], new_children[i], current_dom, i);
  }
}

function patch_props(dom, old_props, new_props) {
  // Remove outdated attributes
  for (const key in old_props) {
    if (!(key in new_props)) {
      if (key.startsWith('on')) {
        const event_name = key.slice(2).toLowerCase();
        dom.removeEventListener(event_name, old_props[key]);
      } else {
        dom.removeAttribute(key);
      }
    }
  }

  // Add or update attributes
  for (const key in new_props) {
    if (old_props[key] !== new_props[key]) {
      // no need to update ref

      if (key.startsWith('on')) {
        const event_name = key.slice(2).toLowerCase();
        if (old_props[key]) {
          dom.removeEventListener(event_name, old_props[key]);
        }
        dom.addEventListener(event_name, new_props[key]);
      } else {
        dom.setAttribute(key, new_props[key]);
      }
    }
  }
}

function create_node(vnode: vnode) {
  if (typeof vnode === 'string') {
    return document.createTextNode(vnode);
  }

  if (typeof vnode.tag === 'function') {
    const prev_vnode = current_vnode
    current_vnode = vnode
    const node = create_node(vnode.tag({ ...vnode.props, children: vnode.children }))
    current_vnode = prev_vnode
    return node
  }

  const element = document.createElement(vnode.tag);

  const isEvent = (key) => key.startsWith('on');
  const toEventName = (key) => key.toLowerCase().substring(2);
  for (const [prop, value] of Object.entries(vnode.props)) {
    if (isEvent(prop)) {
      element.addEventListener(toEventName(prop), () => { value(); redraw() })
    } else if (prop == 'ref') {
      value(element)
    } else {
      element.setAttribute(prop, value)
    }
  }

  for (const child of vnode.children) {
    element.appendChild(create_node(child))
  }
  return element;
}

export function redraw() {
  effects.clear()

  const old_vdom = vdom
  const new_vdom = h(app)

  diff(old_vdom, new_vdom, root)

  for (const effect of effects) {
    const cleanup = effect.effect()

    if (typeof cleanup == 'function') {
      if (!vnode.dispose) {
        vnode.dispose = new Set()
      }
      vnode.dispose.add(cleanup)
    }
  }
}

export function render(component, root_selector) {
  app = component
  root = document.querySelector(root_selector)

  redraw()
}
