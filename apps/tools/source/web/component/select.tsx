type select = {
  value?: any
  placeholder?: any
  items: items
}

type item = string | { name: string, id: string }

type items = item[] | Record<string, string>
