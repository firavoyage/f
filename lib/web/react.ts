// everything from react and react-use is available
// these are the ones you would actually use

import { useEffect, useState, useRef, useCallback } from "react";
import { useAsync, useAsyncFn, useMeasure, useToggle, useMount } from "react-use";
import { use_keyboard } from 'web/lib/use keyboard'
import { use_sync_theme } from 'web/lib/use sync theme'
import { use_window_active } from 'web/lib/use window active'
import { use_variants } from 'web/lib/use variants'
import { use_event } from 'web/lib/use event'
import { use_mouse_glitch } from "web/lib/use mouse glitch";

export * from 'web/lib/use keyboard'
export * from 'web/lib/use sync theme'
export * from 'web/lib/use window active'
export * from 'web/lib/use variants'
export * from 'web/lib/use event'
export * from "web/lib/use mouse glitch";

export function use_measure(options?: Parameters<typeof useMeasure>) {
  const [measureRef, bounds] = useMeasure(options);
  const internalRef = useRef<HTMLElement | null>(null);

  const mergedCallback = useCallback((node: HTMLElement | null) => {
    internalRef.current = node;
    measureRef(node);
  }, [measureRef]);

  const mergedRef = Object.assign(mergedCallback, {
    get current() {
      return internalRef.current;
    }
  });

  return [mergedRef, bounds] as const;
}

type useRef = typeof useRef
type useState = typeof useState
type useEffect = typeof useEffect
type useToggle = typeof useToggle
type useAsync = typeof useAsync
type useAsyncFn = typeof useAsyncFn
type use_measure = typeof use_measure
type use_keyboard = typeof use_keyboard
type use_sync_theme = typeof use_sync_theme
type use_window_active = typeof use_window_active
type use_variants = typeof use_variants
type useMount = typeof useMount
type use_event = typeof use_event
type use_mouse_glitch = typeof use_mouse_glitch
declare global {
  var useRef: useRef
  var useState: useState
  var useEffect: useEffect
  var useToggle: useToggle
  var useAsync: useAsync
  var useAsyncFn: useAsyncFn
  var use_measure: use_measure
  var use_keyboard: use_keyboard
  var use_sync_theme: use_sync_theme
  var use_window_active: use_window_active
  var use_variants: use_variants
  var useMount: useMount
  var use_event: use_event
  var use_mouse_glitch: use_mouse_glitch
}
