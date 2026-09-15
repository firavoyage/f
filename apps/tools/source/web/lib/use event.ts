export function use_event(event: keyof HTMLElementEventMap | keyof WindowEventMap | keyof DocumentEventMap, fn: (e: Event) => any, ref: any = window) {
  useEffect(() => {
    const element = ref.current ?? ref
    if (!element) {
      return
    }

    element.addEventListener(event, fn);
    return () => element.removeEventListener(event, fn);
  })
}