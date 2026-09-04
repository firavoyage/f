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

type flatten = {
  separator?: string;
  preserve?: (value: any, key: string) => boolean;
};

export function flatten(obj: Map<string, any>, options: flatten = {}) {
  const { separator = ".", preserve = () => false } = options;
  const result = new Map();

  function traverse(item: Map<any, any>, prefix: string = ""): void {
    for (const [key] of item) {
      const value = item.get(key);
      const path = prefix ? `${prefix}${separator}${key}` : key;

      if (value instanceof Map && !preserve(value, key)) {
        traverse(value, path);
      } else {
        result.set(path, value);
      }
    }
  }

  traverse(obj);
  return result;
}