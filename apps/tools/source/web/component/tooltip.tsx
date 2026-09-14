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
  
  const trigger = ref.current
  log(tooltip, ref)
  useEffect(() => {
    log(tooltip, ref)
  })

  useEvent('mouseenter', () => {
    timeout.current = setTimeout(() => {
      toggle_open(true)
    }, delay);
  }, ref.current)

  

  useEvent('mouseleave', () => {
    clearTimeout(timeout.current);

    toggle_open(false)
  }, ref.current);

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
