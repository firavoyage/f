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

type StateOptions<T> = {
  persist?: string
  should_sync_url?: boolean
  sync_url_options?: {
    should_apply_all_given_params?: boolean
    should_cleanup_omitted_params_after_init?: boolean
    should_sync_after_init?: boolean
    keys_to_sync?: (keyof T)[] | Set<keyof T>
    param_mapping?: Record<string, keyof T>
    path_mapping?: keyof T
  },
  init?: (state: T) => void,
  change?: (state: T) => void
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
export function state<T extends NonFunction>(initial: T, options: StateOptions<T> = {}) {
  type path = string & keyof T

  const {
    persist,
    should_sync_url = false,
    sync_url_options = {},
    init,
    change,
  } = options

  const {
    should_apply_all_given_params = true,
    should_cleanup_omitted_params_after_init = false,
    should_sync_after_init = true,
    keys_to_sync: flexible_keys_to_sync = new Set(),
    param_mapping = {},
    path_mapping
  } = sync_url_options

  const keys_to_sync = Array.isArray(flexible_keys_to_sync) ?
    new Set(flexible_keys_to_sync) : flexible_keys_to_sync

  const key_to_param_mapping: any = {}
  for (const [key, value] of Object.entries(param_mapping)) {
    key_to_param_mapping[value] = key
  }

  let data: any = initial

  function init_from_localstorage() {
    if (!is_given(persist) || !has(globalThis, 'localStorage')) {
      return
    }

    const key = localStorage.getItem(persist)

    if (is_given(key)) {
      data = parse(key)
    }
  }

  let is_syncing_localstorage = false
  let should_sync_localstorage_again = false
  function sync_localstorage() {
    if (!is_given(persist)) {
      return
    }

    if (is_syncing_localstorage) {
      should_sync_localstorage_again = true
      return
    }

    is_syncing_localstorage = true

    setTimeout(function () {
      localStorage.setItem(persist, stringify(data))

      if (should_sync_localstorage_again) {
        should_sync_localstorage_again = false
        sync_localstorage()
      } else {
        is_syncing_localstorage = false
      }
    }, 0)
  }

  function init_from_url() {
    if (!should_sync_url) {
      return
    }

    const url = new URL(window.location.href)

    if (is_given(path_mapping)) {
      // remove the nonsensical forward slash
      // when sth is always existing, it's just boilerplate and means nothing
      data[path_mapping] = url.pathname.slice(1)
    }

    /**
     * all params mapped incl. href as `#`
     */
    const params: any = {}

    function mapped(key: string) {
      return param_mapping[key] ?? key
    }

    for (const [key, value] of url.searchParams) {
      params[mapped(key)] = value
    }

    params[mapped('#')] = url.hash

    for (const [key, value] of params) {
      if (!has(data, key)) {
        continue
      }

      if (keys_to_sync.has(key) || should_apply_all_given_params) {
        data[key] = value
      }
    }

    if (should_cleanup_omitted_params_after_init) {
      for (const [key] of url.searchParams) {
        if (!keys_to_sync.has(mapped(key))) {
          url.searchParams.delete(key)
        }
      }

      correct_url(url)
    }

    if (should_sync_after_init) {
      sync_url()
    }
  }

  let should_correct_url = false
  /**
   * sync url from the latest state
   * 
   * push to navigation history only if path changes
   */
  function sync_url() {
    const url = new URL(window.location.href)
    const old_path = url.pathname.slice(1)
    const new_path = is_given(path_mapping)? data[path_mapping]: old_path

    url.pathname = new_path

    for (const key of keys_to_sync) {
      const param = key_to_param_mapping[key] ?? key

      url.searchParams.set(param, data[key])
    }
    
    if (old_path == new_path) {
      correct_url(url)
    } else if (should_correct_url) {
      should_correct_url = false
      correct_url(url)
    }  else {
      push_url(url)
    } 
  }

  function push_url(url: URL) {
    history.pushState({}, '', url)
  }

  function correct_url(url: URL) {
    history.replaceState({}, '', url)
  }

  function set(new_value: T | ((old_value: T) => T), path?: path) {
    if (is_given(path)) {
      if (typeof new_value == 'function') {
        // @ts-expect-error 
        const result = new_value(data[path])

        if (typeof result != 'undefined') {
          data[path] = result
        }
      } else {
        data[path] = new_value
      }
    } else {
      if (typeof new_value == 'function') {
        // @ts-expect-error 
        const result = new_value(data)

        if (typeof result != 'undefined') {
          data = result
        }
      } else {
        data = new_value
      }
    }

    for (const sub of subs) {
      sub(data)
    }
  }

  const subs: Set<Function> = new Set()
  function subscribe(listener: Function) {
    subs.add(listener)
  }

  function result(path?: path) {
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

  function get(path?: path) {
    if (is_inside_react()) {
      return result(path)[0]
    } else {
      return is_given(path) ? data[path] : data
    }
  }

  result.get = get

  result.set = set

  result.sub = subscribe

  function keep() {
    
  }

  function omit() {

  }

  function replace() {

  }

  // expose these apis regardless, in case ts is not intelligent enough
  result.keys_to_sync = { keep, omit, replace }

  function correct_next() {
    should_correct_url = true
  }

  result.correct_next = correct_next

  // set maintains insertion order, change should fire first
  // e.g. derive path from other props, then sync
  if (is_given(change)) {
    subscribe(change)
  }

  init_from_localstorage()
  if (is_given(persist)) {
    subscribe(sync_localstorage)
  }

  init_from_url()
  if (should_sync_url) {
    subscribe(sync_url)
  }

  init?.(data)

  return result
}

export function to_toggle([on, set]: any) {
  function toggle(new_value?: any): any {
    // function toggle(new_value?: boolean | ((old_value: boolean) => boolean)) {
    if (!is_given(new_value) || typeof new_value != 'boolean' && typeof new_value != 'function') {
      set((v: boolean) => !v)
    } else {
      set(new_value)
    }
  }

  return [on, toggle]
}

type state = typeof state
type to_toggle = typeof to_toggle
declare global {
  var state: state
  var to_toggle: to_toggle
}
