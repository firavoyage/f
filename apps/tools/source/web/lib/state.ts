type NonFunction = all & { [K in any]: any } & { (): never; new(): never };
// type NonFunction<T> = T extends Function ? never : T;

function use_update() {
  const [, update] = useState(false)

  return () => update(v => !v)
}

function is_inside_react() {
  // @ts-expect-error things should adapt to humans
  const internals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE || React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  return !!internals?.ReactCurrentDispatcher?.current;
}

/**
 * store a global state, return a hook
 * 
 * to persist, data must be serializable
 * 
 * do not accept fn value
 * 
 * a setter fn must not return undefined
 * 
 * path can not exceed one nesting level
 */
export function state<T extends NonFunction>(initial: T, { persist }: { persist?: string } = {}) {
  let data = initial

  if () {
    
  } 

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

  function subscribe(listener: Function) {
    subs.add(listener)
  }

  function result(path?: string) {
    const update = use_update()

    useEffect(() => {
      subs.add(update)

      return () => { subs.delete(update) }
    })

    return [is_given(path) ? data[path] : data, set]
  }

  result.get = function (path?: string) {
    if (is_inside_react()) {
      return result(path)[0]
    } else {
      return is_given(path) ? data[path] : data
    }
  }

  result.set = set

  result.sub = subscribe

  return result
}



