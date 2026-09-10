import { useEvent } from "react-use"
import Dropdown from "./dropdown"

const default_delay = 1000

type tooltip = {
  ref
  tooltip
  delay: number
}

/**
 * @param delay hover delay in ms, default 1000
 */
export function Tooltip(props: tooltip) {
  const { ref, tooltip, delay = default_delay } = props

  const [open, toggle_open] = useToggle(false)

  let timeout = useRef()

  const trigger = ref.current
  
  useEvent('mouseenter', () => {
    timeout.current = setTimeout(() => {
      toggle_open(true)
    }, delay);
  }, trigger)

  useEvent('mouseleave', () => {
    clearTimeout(timeout.current);

    toggle_open(false)
  }, trigger);

  useEvent('click', () => {
    clearTimeout(timeout.current);

    toggle_open(false)
  });

  return (
    open &&
    <Dropdown {...p({ ref, align: 'center' })}>
      <span className="tooltip" {...p({ open })}>
        {tooltip}
      </span>
    </Dropdown>
  )
}
