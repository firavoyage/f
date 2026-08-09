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

function normalize_item(item: item) {
  if (typeof item == 'string') {
    return { name: item, id: item.toLowerCase().replaceAll(' ', '_') }
  } else {
    return item
  }
}

function traverse(items: items, parents: Key[] = []): row[] {
  if (Array.isArray(items)) {
    return map(items, (item) => ({type: 'p', parents, ...normalize_item(item)}))
  }

  const rows: row[] = []
  for (const [key, value] of Object.entries(items)) {
    rows.push({
      // @ts-expect-error 
      type: `h${parents.length+1}`,
      name: key,
      id: [...parents, key].join('.'),
      parents
    })

    rows.push(...traverse(items, [...parents, key]))
  }

  return rows
}

export function List({ items, focused, set_focused }: list) {
  const [is_collapsed, set_is_collapsed] = useState(new Set())

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
