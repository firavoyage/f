let current_instance = null;

class Instance {
  constructor() {
    this.root = null;
    this.vnode = null;
    this.dom = null;
    this.cleanups = [];
  }

  update = () => {
    if (!this.root || !this.vnode) return;
    const new_vnode = this.vnode();
    patch(this.dom, this.vnode, new_vnode);
    this.vnode = new_vnode;
  }

  run_effects = () => {
    for (const cleanup of this.cleanups) {
      cleanup();
    }
    this.cleanups = [];
  }
}

export function h(tag, ...args) {
  if (typeof tag === 'function') {
    const props = args[0] || {};
    return tag(props);
  }

  if (typeof tag != 'string') {
    throw new Error('tag must be a string or function');
  }

  let props = {};
  let children = [];

  // count the number of . in tag
  if (tag.split(".").length - 1 > 1) {
    throw new Error('tag must have at most one dot');
  }

  const tag_parts = tag.split(".")
  tag = tag_parts[0] || 'div'
  if (tag_parts[1]) {
    props.class = tag_parts
  }

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

  return { tag, props, children };
}

export function p(initial_value = false) {
  let value = initial_value;
  const subscribers = new Set()

  const signal = function (...args) {
    if (args.length === 0) {
      return value;
    }

    const newValue = args[0]

    if (typeof newValue === 'function') {
      const result = newValue(value);
      if (newValue === undefined) {
      } else {
        value = result;
      }

      current_instance?.update();
    } else {
      value = newValue;
    }

    for (const item of subscribers) {
      item()
    }
  };

  if (current_instance) {
    subscribers.add(current_instance.update);
  }

  return signal;
}

export function ref(initial_value = false) {
  const prev_instance = current_instance;
  current_instance = null;
  const reference = p(initial_value);
  current_instance = prev_instance;
  return reference;
}

export function effect(fn) {
  if (!current_instance) return;

  const cleanup = fn();
  if (typeof cleanup === 'function') {
    current_instance.cleanups.push(cleanup);
  }
}

function unmount(vnode) {
  if (!vnode || typeof vnode !== 'object') return;

  if (vnode.dom && vnode.dom.remove) {
    vnode.dom.remove();
  }
}

function create_dom(vnode) {
  if (!vnode || typeof vnode !== 'object') {
    return document.createTextNode(String(vnode || ''));
  }

  const dom = document.createElement(vnode.tag);

  for (const [key, value] of Object.entries(vnode.props || {})) {
    if (key === 'ref') {
      value(dom);
    } else if (key === 'onclick') {
      dom.addEventListener('click', value);
    } else if (key.startsWith('on')) {
      dom.addEventListener(key.slice(2).toLowerCase(), value);
    } else if (key === 'class') {
      dom.className = Array.isArray(value) ? value.join(' ') : value;
    } else {
      dom.setAttribute(key, value);
    }
  }

  for (const child of vnode.children || []) {
    dom.appendChild(create_dom(child));
  }

  vnode.dom = dom;
  return dom;
}

export function patch(dom, old_vnode, new_vnode) {
  if (!old_vnode && !new_vnode) return;

  if (!old_vnode || old_vnode.tag !== new_vnode?.tag) {
    const new_dom = create_dom(new_vnode);
    dom.replaceWith(new_dom);
    return;
  }

  if (old_vnode.tag === new_vnode.tag && !old_vnode.tag.includes('.')) {
    const el = dom;
    const old_props = old_vnode.props || {};
    const new_props = new_vnode.props || {};

    for (const key of Object.keys(old_props)) {
      if (!(key in new_props)) {
        if (key === 'class') {
          el.className = '';
        } else {
          el.removeAttribute(key);
        }
      }
    }

    for (const [key, value] of Object.entries(new_props)) {
      if (key === 'ref') {
        value(el);
      } else if (key === 'class') {
        el.className = Array.isArray(value) ? value.join(' ') : value;
      } else if (old_props[key] !== value) {
        el.setAttribute(key, value);
      }
    }

    const old_children = old_vnode.children || [];
    const new_children = new_vnode.children || [];
    const max_len = Math.max(old_children.length, new_children.length);

    for (let i = 0; i < max_len; i++) {
      const old_child = old_children[i];
      const new_child = new_children[i];
      const child_dom = el.childNodes[i];

      if (old_child && new_child) {
        patch(child_dom, old_child, new_child);
      } else if (new_child) {
        el.appendChild(create_dom(new_child));
      } else if (old_child) {
        el.removeChild(child_dom);
      }
    }
  }
}

export function render(component, root) {
  const instance = new Instance();
  instance.root = root;
  current_instance = instance;

  const vnode = component();

  instance.vnode = vnode;
  const dom = create_dom(vnode);
  instance.dom = dom;

  root.appendChild(dom);

  current_instance = null;
}
