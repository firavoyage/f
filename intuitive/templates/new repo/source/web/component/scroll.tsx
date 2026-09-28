import { useScroll } from "react-use"

type scroll = {
  children
  // scroll_top?: number
  // set_scroll_top?: fn
  toggle_is_on_top?: fn
  // set_is_top?: fn
  scrollbar?: boolean
}

export function Scroll(props: scroll) {
  const { children, toggle_is_on_top, scrollbar = true } = props

  const ref = useRef()

  const scroll_top = useScroll(ref)

  useEffect(() => {
    toggle_is_on_top?.(scroll_top.y == 0)
  })

  return (
    <div className="scroll" {...p({ ref })} {...p(!scrollbar && { noscrollbar: true })}>
      {children}
    </div>
  )
}