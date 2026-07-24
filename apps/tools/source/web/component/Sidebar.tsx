type SidebarProps = {
  items: string[];
  focused: number;
  set_focused: (index: number) => void;
}

export default function Sidebar({ items, focused, set_focused }: SidebarProps) {
  return (
    <aside className="sidebar">
      <nav className="nav">
        {items.map((item, index) => {
          const isFocused = focused === index;
          return (
            <button
              key={index}
              onClick={() => set_focused(index)}
              className='item'
              data-focused={isFocused}
            >
              {item}
            </button>
          );
        })}
      </nav>
    </aside>
  );
}
