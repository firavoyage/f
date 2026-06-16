let activeInstance = false;

export function h(tag, ...args) {
  let props = {};
  let children = [];

  // 1. Parse argument omissions (Check if the first trailing argument is a props object)
  if (args[0] && typeof args[0] === 'object' && !args[0].tag && !Array.isArray(args[0])) {
    props = args.shift();
  }

  // 2. Normalize children inputs (Handles both flat lists and deep arrays)
  children = args.flat().filter(c => c !== false);

  // 3. Resolve Emmet CSS string parsing (e.g., ".Foo" or "input.MyInput")
  if (typeof tag === 'string') {
    const dotIndex = tag.indexOf('.');

    if (dotIndex !== -1) {
      const parsedTag = tag.slice(0, dotIndex);
      const parsedClass = tag.slice(dotIndex + 1);

      // Fallback to div if tag is omitted (starts with a dot)
      tag = parsedTag || 'div';

      if (parsedClass) {
        props.className = props.className ? `${props.className} ${parsedClass}` : parsedClass;
      }
    } else if (tag === '') {
      tag = 'div';
    }
  }

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

// --- CORE LIFE-CYCLE ENGINE ---
function createComponentInstance(ComponentFunc, props) {
  const instance = {
    ComponentFunc,
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

    destroy() {
      instance.cleanupHooks.forEach(fn => fn());
      instance.cleanupHooks = [];
      instance.mountHooks = [];
      instance.isMounted = false;
    }
  };

  return instance;
}

// --- VDOM DIFFING & DOM PATCH LAYER ---
function unmountVNode(vnode) {
  if (!vnode) return;
  if (vnode.instance) {
    vnode.instance.destroy();
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

    const instance = createComponentInstance(newVNode.tag, newVNode.props);
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
    activeInstance = createComponentInstance(vnode.tag, vnode.props);
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
