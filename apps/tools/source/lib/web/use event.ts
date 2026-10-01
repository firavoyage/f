type use_event = Partial<{
  when: boolean
}>

export function use_event(event: keyof HTMLElementEventMap | keyof WindowEventMap | keyof DocumentEventMap, fn: (e: Event) => any, ref: any = window,
  options: use_event = {}
) {
  const { when = true } = options

  useEffect(() => {
    if (!when) {
      return
    }

    const element = ref.current ?? ref
    if (!element) {
      return
    }

    element.addEventListener(event, fn);
    return () => element.removeEventListener(event, fn);
  })
}