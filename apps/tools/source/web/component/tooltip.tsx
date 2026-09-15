import Dropdown from "./dropdown"

const default_delay = 500

type tooltip = {
  ref
  tooltip
  delay?: number
}

export function Tooltip(props: tooltip) {
  const { ref, tooltip, delay = default_delay } = props
  
  const [open, toggle_open] = useToggle(false)
  
  let timeout = useRef()

  use_event('mouseenter', () => {
    log('mouseenter')

    timeout.current = setTimeout(() => {
      toggle_open(true)
    }, delay);
  }, ref)  

  use_event('mouseleave', () => {
    clearTimeout(timeout.current);

    toggle_open(false)
  }, ref);

  use_event('click', () => {
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
