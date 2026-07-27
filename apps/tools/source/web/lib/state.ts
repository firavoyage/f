const { parse, stringify } = JSON

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
 * value can be undefined, a setter fn must not return undefined
 * 
 * path can not exceed one nesting level
 * 
 * local storage sync is best effort. 
 */
export function state<T extends NonFunction>(initial: T, { persist }: { persist?: string } = {}) {
  let data = initial

  function init() {
    // @ts-expect-error 
    const keys_string = localStorage.getItem(persist)

    if (!is_given(keys_string)) {
      return
    }

    const keys: string[] = parse(keys_string)

    for (const key of keys) {
      const item = localStorage.getItem(`${persist}.${key}`)

      if (!is_given(item)) {
        continue
      }

      // even though things will be converted to strings, json will normalize it
      // e.g. JSON.parse(JSON.stringify(1)), JSON.parse(JSON.stringify("1"))
      data[key] = parse(item)
    }
  }

  if (is_given(persist) && has(globalThis, 'localStorage')) {
    init()
  }

  const subs: Set<Function> = new Set()

  function set(new_value: T | ((old_value: T) => T), path?: string) {
    if (is_given(path)) {
      if (typeof new_value == 'function') {
        const result = new_value(data[path])

        if (typeof result != 'undefined') {
          data[path] = result
        }
      } else {
        data[path] = new_value
      }
    } else {
      if (typeof new_value == 'function') {
        const result = new_value(data)

        if (typeof result != 'undefined') {
          data = result
        }
      } else {
        data = new_value
      }
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

    if (is_given(path)) {
      return [data[path], (new_value: Parameters<typeof set>[0]) => set(new_value, path)]
    } else {
      return [data, set]
    }
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



