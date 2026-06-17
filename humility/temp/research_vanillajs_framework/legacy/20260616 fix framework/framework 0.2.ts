let active_instance = false;

export function h(tag, ...args) {
  if (typeof tag != 'string') {
    throw new Error('tag must be a string');
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
      if (result === undefined) {
        // immer pattern
        // example: store(store => {store.foo = 'bar'})
      } else {
        value = result
        // example: count(c => c + 1)
      }

      instance.update();
    } else {
      value = newValue;
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

export function effect(fn) {

}

function unmount(vnode) {

}

export function patch(dom, old_vnode, new_vnode) {

}

export function render(component, root) {

}
