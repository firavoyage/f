let active_instance: object | false = false;

type vnode = {
  // tag: string,
  tag: string | Function,
  props: object,
  children: Array<vnode>
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

  if (typeof tag == 'function') {
    return create_component(tag, { ...props, children })
  } else if (typeof tag == 'string') {
    // count the number of . in tag
    if (tag.split(".").length - 1 > 1) {
      throw new Error('tag must have at most one dot');
    }
    const tag_parts = tag.split(".")
    tag = tag_parts[0] || 'div'
    if (tag_parts[1]) {
      props.class = tag_parts[1]
    }

    return { tag, props, children };
  } else {
    throw new Error('Tag must be a component or a string')
  } 
}

function create_component(component_fn, props): vnode {
  const prev_instance = active_instance;
  active_instance = {
    dispose: new Set(),
    update() {

    }
    // ...
  }

  const component = component_fn(props)

  active_instance = prev_instance; // restore layout context

  return component
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

  if (active_instance) {
    const instance = active_instance

    subscribers.add(instance.update)
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

}

function diff(old_vnode, new_vnode, container) {

}

export function render(component, root) {

}
