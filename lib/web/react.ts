import { useEffect, useLayoutEffect, useState, useRef } from 'react'
import { useAsync, useAsyncFn, useToggle, useMount } from 'react-use'
import { use_keyboard } from 'lib/web/use keyboard'
import { use_sync_theme } from 'lib/web/use sync theme'
import { use_window_active } from 'lib/web/use window active'
import { use_variants } from 'lib/web/use variants'
import { use_event } from 'lib/web/use event'
import { use_mouse_glitch } from 'lib/web/use mouse glitch'

export * from 'lib/web/use keyboard'
export * from 'lib/web/use sync theme'
export * from 'lib/web/use window active'
export * from 'lib/web/use variants'
export * from 'lib/web/use event'
export * from 'lib/web/use mouse glitch'

export const use_ref = useRef

export function use_state<T>(
  initial_value?: T,
): [state: T, set_state: typeof set_state] {
  const [state, _set_state] = useState(initial_value)
  const update = use_update()

  function set_state(
    new_value: T | Promise<T> | ((old_value: T) => T | Promise<T>) = toggle,
  ) {
    let prev_state = state
    let new_state

    if (is(new_value, 'function')) {
      new_state = new_value(state)
    } else if (!is(new_value, 'undefined')) {
      new_state = new_value
    } else {
      return
    }

    if (is(new_state, 'literal') && new_state == prev_state) {
      return
    }

    if (is(new_state, Promise)) {
      new_state.then((new_value) => set_state(new_value))
      return
    }

    _set_state(new_state)
    update()
  }

  return [state, set_state]
}

function use_update() {
  const [, update] = useState(false)

  return () => update((v) => !v)
}

function toggle(v: boolean) {
  return !v
}

let cleanups: Set<fn> = set()

export function use_effect(fn: fn, deps?: any[]) {
  useEffect(effect(fn), normalize_deps(deps))
}

export function use_layout_effect(fn: fn, deps?: any[]) {
  useLayoutEffect(effect(fn), normalize_deps(deps))
}

function effect(fn: fn) {
  return () => {
    cleanups = set()

    let effect_cleanup = fn()

    if (is(effect_cleanup, Promise)) {
      effect_cleanup = () => {
        effect_cleanup.then((fn) => fn?.())
      }
    }

    cleanups.add(effect_cleanup)

    let current_cleanups = cleanups

    return () => {
      for (const cleanup of current_cleanups) {
        cleanup?.()
      }
    }
  }
}

function normalize_deps(deps?: any[]) {
  if (!is_given(deps)) {
    return nil
  } else {
    return [JSON.stringify(deps)]
  }
}

export function set_timeout(fn: fn, delay: number) {
  const timer = setTimeout(fn, delay)

  cleanups.add(() => clearTimeout(timer))

  return timer
}

export function set_interval(fn: fn, interval: number) {
  const timer = setInterval(fn, interval)

  cleanups.add(() => clearInterval(timer))

  return timer
}

type event =
  | keyof HTMLElementEventMap
  | keyof WindowEventMap
  | keyof DocumentEventMap

export function listen(event: event, fn: (e: Event) => any, ref: any = window) {
  const element = ref.current ?? ref

  if (!element) {
    return
  }

  element.addEventListener(event, fn)

  cleanups.add(() => element.removeEventListener(event, fn))
}

type use_ref = typeof use_ref
type use_state = typeof use_state
type use_effect = typeof use_effect
type use_layout_effect = typeof use_layout_effect
type set_timeout = typeof set_timeout
type set_interval = typeof set_interval
type listen = typeof listen
type useToggle = typeof useToggle
type useAsync = typeof useAsync
type useAsyncFn = typeof useAsyncFn
type useMount = typeof useMount
type use_keyboard = typeof use_keyboard
type use_sync_theme = typeof use_sync_theme
type use_window_active = typeof use_window_active
type use_variants = typeof use_variants
type use_event = typeof use_event
type use_mouse_glitch = typeof use_mouse_glitch
declare global {
  var use_ref: use_ref
  var use_state: use_state
  var use_effect: use_effect
  var use_layout_effect: use_layout_effect
  var set_timeout: set_timeout
  var set_interval: set_interval
  var listen: listen
  var useToggle: useToggle
  var useAsync: useAsync
  var useAsyncFn: useAsyncFn
  var useMount: useMount
  var use_keyboard: use_keyboard
  var use_sync_theme: use_sync_theme
  var use_window_active: use_window_active
  var use_variants: use_variants
  var use_event: use_event
  var use_mouse_glitch: use_mouse_glitch
}
