import Dropdown from "./dropdown"

type tooltip = {
  ref
  tooltip
  delay: number
}

export function Tooltip(props: tooltip) {
  const { ref, tooltip, delay = 1000 } = props

  const [open, toggle_open] = useToggle(false)

  let timeout = nil

  useEffect(() => {
    const trigger = ref.current

    if (!trigger) {
      return 
    } 

    
  })

  return (
    <Dropdown {...p({ ref })}>
      <span className="tooltip" {...p({ open })}>
        {tooltip}
      </span>
    </Dropdown>
  )
}
