let activeInstance = false;

export function h(tag, ...args) {
  if (typeof tag !== 'string') {
    throw new Error('tag must be a string');
  }

  let props = {};
  let children = [];

  // count the number of . in tag
  if (tag.split(".").length - 1 > 1) {
    throw new Error('tag must have at most one dot');
  }

  const tag_split = tag.split(".")
  tag = tag_split[0] || 'div'
  if (tag_split[1]) {
    props.class = tag_split
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

export function p(initialValue = false) {
  let value = initialValue;
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

  if (activeInstance) {
    const instance = activeInstance

    subscribers.add(() => {
      instance.update();
    })
  }

  return signal
}

// signal wo default rerender
export function ref(initialValue = false) {
  const prevInstance = activeInstance;
  activeInstance = false; // Unbind the active instance to skip layout update cycles
  const refSignal = signal(initialValue);
  activeInstance = prevInstance; // Restore layout context
  return refSignal;
}

export function onMount(fn) {
  if (activeInstance) activeInstance.mountHooks.push(fn);
}

export function onCleanup(fn) {
  if (activeInstance) activeInstance.cleanupHooks.push(fn);
}

// Diff & Patch
function unmount(vnode) {
  if (!vnode) return;
  if (vnode.instance) {
    vnode.instance.dispose();
    unmountVNode(vnode.instance.vnode);
  }
  if (vnode.children) {
    vnode.children.forEach(unmountVNode);
  }
}

export function patch(dom, oldVNode, newVNode) {

}

export function render(vnode, rootElement) {

}
