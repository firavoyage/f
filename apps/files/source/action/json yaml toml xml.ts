import { parse as standard_json } from 'json5';
import * as jsonic from 'jsonic';
const flexible_json = jsonic.default || jsonic;
import { jsonrepair } from 'jsonrepair'
function forgiving_json(json: string) {
  return rigid_json(jsonrepair(json))
}
const { parse: rigid_json, stringify: serialize_json } = JSON
import { parse as standard_yaml, stringify as serialize_yaml } from "yaml"

type json_to_yaml = {
  json: string
  parsing: Union<['rigid', 'standard', 'flexible', 'forgiving']>
}

export function json_to_yaml({ json, parsing }: json_to_yaml) {
  const obj = parsing == 'rigid' ? rigid_json(json) :
    parsing == 'standard' ? standard_json(json) :
      parsing == 'flexible' ? flexible_json(json) :
        parsing == 'forgiving' ? forgiving_json(json) : {}

  return serialize_yaml(obj)
}

export function yaml_to_json({ yaml }: text) {
  return serialize_json(standard_yaml(yaml))
}

type table_object = object[]
export type table = string[][]

export function object_to_table(table_object: table_object) {
  const headings: string[] = []

  // Curate Table Headings
  map(table_object, (row) => map(row, ([k, v]) => {
    if (!has(headings, k)) {
      headings.push(k)
    }
  }))

  const table = []

  table.push(headings)

  table.push(...map(table_object, (row) => map(headings, (heading) => row[heading] ?? nil)))

  return table
}

// log(object_to_table([{a:1, b:2, c:3},{a:1, c:2}]))

