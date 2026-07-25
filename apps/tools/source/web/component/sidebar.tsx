type SidebarProps = {
  items: string[]
  focused: number
  set_focused: (index: number) => void,
  children?: any
}

export default function Sidebar({ items, focused, set_focused, children }: SidebarProps) {
  // const [name, set_name] = useState()

  return (
    <>
      <div className="backdrop"></div>
      <aside className="sidebar">
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
