import { use_event } from 'web/lib/use event'

export function use_mouse_glitch() {
  const [is_glitched, toggle_is_glitched] = useToggle(false)

  use_event('mouseenter', (e: MouseEvent) => {
    if (e.clientX == 0 && e.clientY == 0 && e.screenX == 0 && e.screenY == 0) {
      toggle_is_glitched(true)
    }
  }, document.body)

  use_event('mousemove', (e: MouseEvent) => {
    if (!(e.clientX == 0 && e.clientY == 0 && e.screenX == 0 && e.screenY == 0)) {
      toggle_is_glitched(false)
    }
  })

  use_event('mouseleave', () => {
    toggle_is_glitched(false)
  }, document.body)

  return is_glitched
}