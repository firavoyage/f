type item = string | { name: string, id: string }

type items = item[] | { [key: string]: items }

type list = {
  items: items
  focused?: Key
  set_focused?: (focused: Key) => void
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

function flatten(items: items, parents: Key[] = []): row[] {
  if (Array.isArray(items)) {
    return map(items, (item) => ({type: 'p', parents, ...normalize_item(item)}))
  }

  const rows: row[] = []
  for (const [key, value] of Object.entries(items)) {
    const heading = {
      type: `h${parents.length+1}`,
      name: key,
      id: [...parents, key].join('.'),
      parents
    }

    const children = flatten(items, [...parents, heading.id])

    // @ts-expect-error 
    rows.push(heading, ...children)
  }

  return rows
}

export function List({ items, focused, set_focused }: list) {
  const [is_collapsed] = useState(s())

  const rows = flatten(items)

  return (
    <nav className="nav">
      {
        map(rows, (row) => {
          const { type, name, id, parents } = row

          for (const parent of parents) {
            if (has(is_collapsed, parent)) {
              return 
            } 
          }

          const Tag = type

          return <Tag {...p({ class: type, onclick(){
            if (type == 'p') {
              set_focused?.(id)
            } else {
              
            } 
          } })}>{name}</Tag>
        })
      }
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
