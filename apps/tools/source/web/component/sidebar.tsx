import { useToggle } from "react-use"
import { use_bind } from "web/lib/keyboard.use"

type SidebarProps = {
  items: string[]
  focused: number
  set_focused: (index: number) => void,
  children?: any
}

export default function Sidebar({ items, focused, set_focused, children }: SidebarProps) {
  const [on, toggle] = useToggle(true)

  use_bind('ctrl+b', toggle)

  return (
    <>
      <div className="backdrop"></div>
      <aside className="sidebar" data-visible={on}>
        {children}
        <nav className="nav">
          {items.map((item, index) => {
            const is_focused = focused == index;
            return (
              <button
                key={index}
                onClick={() => set_focused(index)}
                className='item'
                data-focused={is_focused}
              >
                {item}
              </button>
            );
          })}
        </nav>
      </aside>
    </>
  );
}
