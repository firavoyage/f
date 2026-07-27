import { use_bind } from "web/lib/keyboard.use"
import { use_global } from "./app"

type SidebarProps = {
  items: string[]
  focused: number
  set_focused: (index: number) => void,
  children?: any
}

export default function Sidebar({ items, focused, set_focused, variant, children }: any) {
  variant ??= 'push'

  const [on, toggle] = to_toggle(use_global('is_sidebar_on'))

  use_bind('ctrl+b', toggle)

  return (
    <>
      <div className="backdrop"></div>
      <aside {...p({ class: 'sidebar', visible: on })}>
        {children}
        <nav className="nav">
          {items.map((item, index) => {
            const is_focused = focused == index;
            return (
              <button
                {...p({
                  class: 'item',
                  onclick: () => set_focused(index), focused: is_focused
                })}
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
