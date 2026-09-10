import Dropdown from "./dropdown"

type tooltip = {
  ref
  tooltip
  delay: number
}

/**
 * @param delay hover delay in ms, default 1000
 */
export function Tooltip(props: tooltip) {
  const { ref, tooltip, delay = 1000 } = props

  const [open, toggle_open] = useToggle(false)

  let timeout = nil

  useEffect(() => {
    const trigger = ref.current

    if (!trigger) {
      return
    }

    trigger.addEventListener('mouseenter', () => {
      timeout = setTimeout(() => {
        toggle_open(true)
      }, delay);
    });

    trigger.addEventListener('mouseleave', () => {
      clearTimeout(timeout);

      toggle_open(false)
    });

  })

  return (
    open &&
    <Dropdown {...p({ ref, align: 'center' })}>
      <span className="tooltip" {...p({ open })}>
        {tooltip}
      </span>
    </Dropdown>
  )
}
