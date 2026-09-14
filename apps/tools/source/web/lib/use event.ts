export function use_event(event, fn: (e: Event) => any, ref = window) {
  useEffect(() => {
    const element = ref.current ?? ref
    if (!element) {
      return
    }

    element.addEventListener(event, fn);
    return () => element.removeEventListener(event, fn);
  })
}