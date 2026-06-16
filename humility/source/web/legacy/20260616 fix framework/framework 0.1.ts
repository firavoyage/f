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

export function signal(initialValue = false) {
  let value = initialValue;

  if (activeInstance) {
    const instance = activeInstance

    return function (...args) {
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

      instance.update();
      // return value; // not needed
    };
  } else {
    return function (...args) {
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
      } else {
        value = newValue;
      }
      // return value; // not needed
    };
  }
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

// Life Cycle
function component(component_fn, props) {
  const instance = {
    ComponentFunc: component_fn,
    props,
    mountHooks: [],
    cleanupHooks: [],
    vnode: false,
    dom: false,
    isMounted: false,

    renderTree() {
      const prevInstance = activeInstance;
      activeInstance = instance;
      const newVNode = instance.ComponentFunc(instance.props);
      activeInstance = prevInstance;
      return newVNode;
    },

    update() {
      const newVNode = instance.renderTree();
      const oldDom = instance.dom;

      instance.dom = patch(oldDom, instance.vnode, newVNode);
      instance.vnode = newVNode;

      if (oldDom && oldDom !== instance.dom && oldDom.parentNode) {
        oldDom.parentNode.replaceChild(instance.dom, oldDom);
      }
    },

    mount() {
      if (instance.isMounted) return;
      instance.isMounted = true;
      instance.mountHooks.forEach(fn => fn());
    },

    dispose() {
      instance.cleanupHooks.forEach(fn => fn());
      instance.cleanupHooks = [];
      instance.mountHooks = [];
      instance.isMounted = false;
    }
  };

  return instance;
}

// Diff & Patch
function unmountVNode(vnode) {
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
  if (!newVNode && newVNode !== 0 && newVNode !== '') return dom;
  if (typeof newVNode !== 'object') {
    const textStr = String(newVNode);
    if (dom && dom.nodeType === Node.TEXT_NODE) {
      if (dom.nodeValue !== textStr) dom.nodeValue = textStr;
      return dom;
    }
    return document.createTextNode(textStr);
  }

  if (typeof newVNode.tag === 'function') {
    if (oldVNode && oldVNode.tag === newVNode.tag && oldVNode.instance) {
      newVNode.instance = oldVNode.instance;
      newVNode.instance.props = newVNode.props;
      newVNode.instance.update();
      return newVNode.instance.dom;
    }

    if (oldVNode) unmountVNode(oldVNode);

    const instance = component(newVNode.tag, newVNode.props);
    newVNode.instance = instance;

    const childVNode = instance.renderTree();
    instance.vnode = childVNode;
    instance.dom = patch(false, false, childVNode);
    instance.mount();
    return instance.dom;
  }

  if (oldVNode && oldVNode.tag !== newVNode.tag) {
    unmountVNode(oldVNode);
    dom = false;
  }

  let el = dom;
  if (!el || el.tagName?.toLowerCase() !== newVNode.tag) {
    el = document.createElement(newVNode.tag);
  }

  // Handle properties and specific ref tracking assignments
  for (const [key, value] of Object.entries(newVNode.props)) {
    if (key === 'ref' && typeof value === 'function') {
      value(el); // Assign raw DOM element to your ref signal silently
    } else if (key.startsWith('on')) {
      el[key.toLowerCase()] = value;
    } else {
      el[key] = value;
    }
  }

  const newChildren = newVNode.children || [];
  const oldChildren = oldVNode?.children || [];

  // Remove extra children
  while (el.children.length > newChildren.length) {
    el.removeChild(el.lastChild);
  }

  for (let i = 0; i < newChildren.length; i++) {
    const oldChild = oldChildren[i];
    const childDom = el.children[i];
    const patchedChild = patch(childDom, oldChild, newChildren[i]);
    if (patchedChild !== childDom) {
      if (childDom) {
        el.replaceChild(patchedChild, childDom);
      } else {
        el.appendChild(patchedChild);
      }
    }
  }

  return el;
}

export function render(vnode, rootElement) {
  const oldVNode = rootElement._vnode;
  const oldDom = rootElement._dom;
  const instance = oldVNode?.instance;
  if (instance) {
    vnode.instance = instance;
    activeInstance = instance;
    instance.props = vnode.props;
    instance.update();
    activeInstance = false;
  } else {
    activeInstance = component(vnode.tag, vnode.props);
    vnode.instance = activeInstance;
    const childVNode = activeInstance.renderTree();
    activeInstance.vnode = childVNode;
    activeInstance.dom = patch(oldDom, oldVNode, childVNode);
    activeInstance.mount();
    activeInstance = false;
  }
  rootElement._vnode = vnode;
  rootElement._dom = vnode.instance.dom;
  if (oldDom && oldDom !== vnode.instance.dom && oldDom.parentNode) {
    oldDom.parentNode.replaceChild(vnode.instance.dom, oldDom);
  } else if (!oldDom) {
    rootElement.appendChild(vnode.instance.dom);
  }
}
