const { parse, stringify } = JSON

type NonFunction = any
// type NonFunction = all & { (): never; new(): never } | void | string | number | boolean | bigint | symbol | null | undefined;
// type NonFunction = all & { [K in any]: any } & { (): never; new(): never };
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
 * it performs a complete sync, w nested set time out for each key, before the next one
 */
export function state<T extends NonFunction>(initial: T, { persist }: { persist?: string } = {}) {
  let data = initial
  const subs: Set<Function> = new Set()
  let is_syncing = false
  let should_sync_again = false

  if (is_given(persist) && has(globalThis, 'localStorage')) {
    const key = localStorage.getItem(persist)
    
    if (is_given(key)) {
      data = parse(key)
    }
  }

  function sync() {
    is_syncing = true

    setTimeout(function () {
      // @ts-expect-error 
      localStorage.setItem(persist, stringify(data))

      if (should_sync_again) {
        should_sync_again = false
        sync()
      } else {
        is_syncing = false
      }
    }, 0)
  }

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

    if (is_given(persist)) {
      if (is_syncing) {
        should_sync_again = true
      } else {
        sync()
      }
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

export function to_toggle([on, set]: [boolean, any]) {
  function toggle(new_value?: boolean | ((old_value: boolean) => boolean)) {
    if (!is_given(new_value)) {
      set((v: boolean) => !v)
    }

    set(new_value)
  }

  return [on, toggle]
}

type state = typeof state
type to_toggle = typeof to_toggle
declare global {
  var state: state
  var to_toggle: to_toggle
}
