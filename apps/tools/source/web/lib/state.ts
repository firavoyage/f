import * as React from 'react';

const { parse, stringify } = JSON

type NonFunction = any
// type NonFunction = all & { (): never; new(): never } | void | string | number | boolean | bigint | symbol | null | undefined;
// type NonFunction = all & { [K in any]: any } & { (): never; new(): never };
// type NonFunction<T> = T extends Function ? never : T;

function use_update() {
  const [, update] = useState(false)

  return () => update(v => !v)
}

type state<T> = {
  persist?: string
  version?: string
  sync_url_options?: {
    should_sync_url?: boolean
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
export function state<T extends NonFunction>(initial: T, options: state<T> = {}) {
  type key = string & keyof T

  const {
    persist,
    version,
    sync_url_options = {},
    init,
    change,
  } = options
  
  const {
    should_sync_url = false,
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

  const subs: Set<Function> = new Set()
  function subscribe(listener: Function) {
    subs.add(listener)
  }

  function trigger() {
    for (const sub of subs) {
      sub(data)
    }
  }

  function init_from_localstorage() {
    if (!is_given(persist) || !has(globalThis, 'localStorage')) {
      return
    }

    const old_data_text = localStorage.getItem(persist)

    if (is_given(old_data_text)) {
      const old_data = parse(old_data_text)

      if (is_given(version) && localStorage.getItem(`${persist}.version`) != version) {
        for (const [key,] of Object.entries(data)) {
          if (has(old_data, key)) {
            data[key] = old_data[key]
          }
        }

        sync_localstorage()
      } else {
        data = old_data
      }
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
      if (is_given(version)) {
        localStorage.setItem(`${persist}.version`, version)
      }
      is_syncing_localstorage = false

      if (should_sync_localstorage_again) {
        should_sync_localstorage_again = false
        sync_localstorage()
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

    for (const [key, value] of Object.entries(params)) {
      if (!has(data, key)) {
        continue
      }

      // @ts-expect-error 
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
    const new_path = is_given(path_mapping) ? data[path_mapping] : old_path

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
    } else {
      push_url(url)
    }
  }

  function push_url(url: URL) {
    history.pushState({}, '', url)
  }

  function correct_url(url: URL) {
    history.replaceState({}, '', url)
  }

  function set(...args: any[]) {
    const new_value = args.length == 0 ? (v: boolean) => !v : args[0]

    if (typeof new_value == 'function') {
      const result = new_value(data)

      if (typeof result != 'undefined') {
        data = result
      }
    } else {
      data = new_value
    }

    trigger()
  }

  function set_prop(path: key, ...args: any[]) {
    const new_value = args.length == 0 ? (v: boolean) => !v : args[0]

    if (typeof new_value == 'function') {
      const result = new_value(data[path])

      if (typeof result != 'undefined') {
        data[path] = result
      }
    } else {
      data[path] = new_value
    }

    trigger()
  }

  function use_global(path?: key): [any, (new_value: any) => any] {
    const update = use_update()

    useEffect(() => {
      subs.add(update)

      return () => { subs.delete(update) }
    })

    if (is_given(path)) {
      return [data[path], (...new_value: any[]) => set_prop(path, ...new_value)]
    } else {
      return [data, set]
    }
  }

  // result.data = data
  Object.defineProperty(use_global, 'data', {
    value: data,
    writable: false,
    configurable: false
  })

  use_global.set = set

  use_global.sub = subscribe

  function keep(item: key): void
  function keep(addition: key[] | Set<key>): void
  function keep(item: any) {
    if (typeof item == 'object') {
      for (const key of item) {
        keys_to_sync.add(key)
      }
    } else {
      keys_to_sync.add(item)
    }
  }

  function omit(item: key): void
  function omit(deduction: key[] | Set<key>): void
  function omit(item: any) {
    if (typeof item == 'object') {
      for (const key of item) {
        keys_to_sync.delete(key)
      }
    } else {
      keys_to_sync.delete(item)
    }
  }

  function replace(item: key): void
  function replace(new_keys: key[] | Set<key>): void
  function replace(item: any) {
    if (typeof item == 'object') {
      keys_to_sync.clear()

      for (const key of item) {
        keys_to_sync.add(key)
      }
    } else {
      if (keys_to_sync.has(item)) {
        keys_to_sync.delete(item)
      } else {
        keys_to_sync.add(item)
      }
    }
  }

  // expose these apis regardless, in case ts is not intelligent enough
  use_global.keys_to_sync = { keep, omit, replace }

  function correct_next() {
    should_correct_url = true
  }

  use_global.correct_next = correct_next

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

  return use_global
}

type state_fn = typeof state
declare global {
  var state: state_fn
}
