type item = string | { name: string, id: string }

type items = item[] | { [key: string]: items }

type List = {
  items: items
  focused?: number
  set_focused?: (index: number) => void
}

export function List({ items, focused, set_focused }: List) {
  return (
    <nav className="nav">
      {items.map((item, index) => {
        const is_focused = focused == index;
        return (
          <button
            key={index}
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
  );
}
