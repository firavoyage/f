let current_instance: any = null;

type vnode = {
  tag: string | ((props: object) => vnode),
  props: object,
  children: Array<vnode>,
  dom?: Node,
  instance?: vnode,
  instance_data?: { dispose: Set<() => void>, update: () => void }
} | string

export function h(tag, ...args): vnode {
  let props = {};
  const children: Array<vnode> = [];

  for (const arg of args) {
    if (Array.isArray(arg)) {
      children.push(...arg);
    } else if (typeof arg === 'object' && arg !== null) {
      props = arg;
    } else if (arg !== false && arg !== null && arg !== undefined) {
      children.push(arg as vnode);
    }
  }

  if (typeof tag == 'function') {
    const instance_data = {
      dispose: new Set<() => void>(),
      update() {}
    };
    const prev_instance = current_instance;
    current_instance = instance_data;

    const inner_vnode = tag({ ...props, children });

    current_instance = prev_instance;

    return {
      tag,
      props: { ...props, children },
      children: [],
      instance: inner_vnode,
      instance_data
    };
  } else if (typeof tag == 'string') {
    if (tag.split(".").length - 1 > 1) {
      throw new Error('tag must have at most one dot');
    }
    const tag_parts = tag.split(".")
    tag = tag_parts[0] || 'div'
    if (tag_parts[1]) {
      props = { ...props, class: tag_parts[1] };
    }

    return { tag, props, children };
  } else {
    throw new Error('Tag must be a component or a string')
  }
}

function is_event(key: string): boolean {
  return key.startsWith('on');
}

function to_event_name(key: string): string {
  return key.slice(2).toLowerCase();
}

function create_node(vnode: vnode): Node {
  if (typeof vnode === 'string') {
    const dom = document.createTextNode(vnode);
    vnode.dom = dom;
    return dom;
  }

  if (typeof vnode.tag === 'function') {
    const inner_vnode = vnode.instance;
    const dom = create_node(inner_vnode);
    vnode.dom = dom;
    return dom;
  }

  const element = document.createElement(vnode.tag);
  vnode.dom = element;

  for (const [prop, value] of Object.entries(vnode.props)) {
    if (prop === 'ref' && typeof value === 'function') {
      value(element);
    } else if (prop === 'className') {
      element.setAttribute('class', value as string);
    } else if (prop === 'class') {
      element.setAttribute('class', value as string);
    } else if (prop === 'style' && typeof value === 'object') {
      Object.assign(element.style, value);
    } else if (is_event(prop)) {
      element.addEventListener(to_event_name(prop), value as EventListener);
    } else {
      element.setAttribute(prop, value as string);
    }
  }

  for (const child of vnode.children) {
    element.appendChild(create_node(child));
  }
  return element;
}

export function p(initial_value = false) {
  let value = initial_value;
  const subscribers = new Set<() => void>();

  const signal = function (...args: any[]) {
    if (args.length === 0) {
      return value;
    }

    const new_value = args[0];

    if (typeof new_value === 'function') {
      const result = new_value(value);
      if (result !== undefined) {
        value = result;
      }
    } else {
      value = new_value;
    }

    for (const item of subscribers) {
      item();
    }
  };

  if (current_instance) {
    subscribers.add(current_instance.update);
  }

  return signal;
}

export function ref(initial_value = false) {
  const prev_instance = current_instance;
  current_instance = false as any;
  const reference = p(initial_value);
  current_instance = prev_instance;
  return reference;
}

export function effect(effect_fn: () => void | (() => void)) {
  if (!current_instance) return;

  const cleanup = effect_fn();
  if (typeof cleanup === 'function') {
    current_instance.dispose.add(cleanup);
  }
}

function run_dispose(instance: any) {
  if (instance && instance.dispose) {
    for (const cleanup of instance.dispose) {
      if (typeof cleanup === 'function') {
        cleanup();
      }
    }
  }
}

function diff(old_vnode: vnode | undefined, new_vnode: vnode, parent: Element): void {
  if (typeof new_vnode === 'string') {
    if (!old_vnode || old_vnode !== new_vnode) {
      const dom = document.createTextNode(new_vnode);
      parent.textContent = '';
      parent.appendChild(dom);
      new_vnode.dom = dom;
    } else {
      new_vnode.dom = old_vnode.dom;
    }
    return;
  }

  if (typeof new_vnode.tag === 'function') {
    if (typeof (old_vnode as vnode)?.tag === 'function') {
      const old_inner = old_vnode?.instance;
      const new_inner = new_vnode.instance;
      const element = old_vnode?.dom || parent;
      diff(old_inner, new_inner, element as Element);
      new_vnode.dom = new_inner.dom;
    } else {
      parent.textContent = '';
      const inner_vnode = new_vnode.instance;
      parent.appendChild(create_node(inner_vnode));
      new_vnode.dom = inner_vnode.dom;
    }
    return;
  }

  const element = (old_vnode as vnode)?.dom as Element || parent;
  new_vnode.dom = element;

  const new_props = new_vnode.props;
  const old_props = (old_vnode as vnode)?.props || {} as Record<string, any>;

  for (const [prop, value] of Object.entries(new_props)) {
    if (prop === 'ref' || prop === 'children' || prop === 'key') continue;

    if (old_props[prop] !== value) {
      if (prop === 'className') {
        element.setAttribute('class', value as string);
      } else if (prop === 'class') {
        element.setAttribute('class', value as string);
      } else if (prop === 'style' && typeof value === 'object') {
        Object.assign(element.style, value);
      } else if (is_event(prop)) {
        element.addEventListener(to_event_name(prop), value as EventListener);
      } else {
        element.setAttribute(prop, value as string);
      }
    }
  }

  const old_children = ((old_vnode as vnode)?.children || []) as vnode[];
  const new_children = new_vnode.children as vnode[];

  const old_len = old_children.length;
  const new_len = new_children.length;
  const max_len = Math.max(old_len, new_len);

  for (let i = 0; i < max_len; i++) {
    const old_child = old_children[i];
    const new_child = new_children[i];
    
    if (new_child === undefined && old_child !== undefined) {
      if ((old_child as any).dom) {
        (old_child as any).dom.remove();
      }
      if ((old_child as any).instance_data) {
        run_dispose((old_child as any).instance_data);
      }
    } else if (new_child !== undefined) {
      if (old_child !== undefined) {
        diff(old_child, new_child, element);
      } else {
        element.appendChild(create_node(new_child));
      }
    }
  }
}

export function render(component: (props: object) => vnode, root: Element | string) {
  if (typeof root === 'string') {
    root = document.querySelector(root) as Element;
  }

  let current_vnode: vnode | null = null;
  let mounted = false;

  function redraw() {
    const prev_instance = current_instance;
    current_instance = {
      dispose: new Set(),
      update: redraw
    };

    const new_vnode = component({});

    if (!mounted) {
      root.textContent = '';
      root.appendChild(create_node(new_vnode));
      mounted = true;
    } else if (current_vnode) {
      diff(current_vnode, new_vnode, root);
    }

    current_vnode = new_vnode;
    current_instance = prev_instance;
  }

  redraw();
}