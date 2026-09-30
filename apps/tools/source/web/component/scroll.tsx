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
  const [is_vertically_scrollable, toggle_is_vertically_scrollable] = useToggle(false)
  const [is_horizontally_scrollable, toggle_is_horizontally_scrollable] = useToggle(false)

  const ref = useRef()

  const scroll_top = useScroll(ref)

  useLayoutEffect(() => {
    toggle_is_on_top?.(scroll_top.y == 0)
  })

  useLayoutEffect(() => {
    if (!ref.current) {
      return 
    } 

    const view = ref.current

    toggle_is_vertically_scrollable(view.scrollHeight > view.clientHeight)
    toggle_is_horizontally_scrollable(view.scrollWidth > view.clientWidth)
  })

  return (
    <div className="scroll" {...p({ ref })} {...p(!scrollbar && { noscrollbar: true })}>
      {children}
    </div>
  )
}