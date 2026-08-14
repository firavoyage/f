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

    const children = flatten(value, [...parents, heading.id])

    // @ts-expect-error it's fine if i accidentally set row.type as 'h7'
    rows.push(heading, ...children)
  }

  return rows
}

export function List({ items, focused, set_focused }: list) {
  const [is_collapsed] = useState(s())

  const rows = flatten(items)

  return (
    <nav {...p({ class: 'list' })}>
      {
        map(rows, (row) => {
          const { type, name, id, parents } = row

          for (const parent of parents) {
            if (has(is_collapsed, parent)) {
              return 
            } 
          }

          const is_focused = focused == id
          
          const Tag = 'button'
          // const Tag = type
          return <Tag {...p({ class: type, focused: is_focused, onclick(){
            if (type == 'p') {
              set_focused?.(id)
            } else {
              toggle(is_collapsed, id)
            } 
          } })}>{name}</Tag>
        })
      }
    </nav>
  );
}
