const { parse: parse_json, stringify: to_json } = JSON
import { parse as parse_yaml, stringify as to_yaml } from "yaml"

export function json_to_yaml(json: string) {
  return to_yaml(parse_json(json))
}