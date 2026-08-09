type item = string | { name: string, id: string }

type items = item[] | { [key: string]: items }

type list = {
  items: items
  focused?: string
  set_focused?: (focused: string) => void
}

type row = {
  type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p'
  name: string
  id: Key
  parents: Key[]
}

export function List({ items, focused, set_focused }: list) {
  

  return (
    <nav className="nav">
      {/* {items.map((item, index) => {
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
      })} */}
    </nav>
  );
}
