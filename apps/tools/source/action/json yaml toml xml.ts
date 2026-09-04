const { parse: parse_json, stringify: to_json } = JSON
import { parse as parse_yaml, stringify as to_yaml } from "yaml"

export function json_to_yaml({ json, parsing }: text) {
  
  return to_yaml(parse_json(json))
}

export function yaml_to_json({ yaml }: text) {
  return to_json(parse_yaml(yaml))
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