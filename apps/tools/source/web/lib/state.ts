type NonFunction = object & { [K in any]: any } & { (): never; new (): never };

function use_update() {
  const [name, toggle_name] = useToggle({: false})
}

/**
 * store a global state, return a hook
 * 
 * to persist, data must be serializable
 * 
 * do not accept fn value
 * 
 * a setter fn must not return undefined
 */
export function state<T extends NonFunction>(initial: T, options: {persist?: string} = {}) {
  let data = initial

  const subs: Set<Function> = new Set()

  function set(new_value: T | ((old_value: T) => T)) {
    if (typeof new_value == 'function') {
      const result = new_value(data)

      if (typeof result != 'undefined') {
        data = result
      } 
    } else {
      data = new_value
    } 

    for (const sub of subs) {
      sub()      
    }
  }

  function subscribe(listener) {
    subs.add(listener)
  }

  function result(path?: string) {
    
  }
}

