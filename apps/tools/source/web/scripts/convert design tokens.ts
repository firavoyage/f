type InputObject = Record<string, any>;
type FlattenOptions = {
  separator?: string;
  preserve?: (value: any, key: string) => boolean;
};

export function flatten_object(obj: InputObject, options: FlattenOptions = {}): InputObject {
  const { separator = ".", preserve } = options;
  const result: InputObject = {};

  function recurse(current_item: any, current_prefix: string): void {
    for (const key in current_item) {
      if (!Object.prototype.hasOwnProperty.call(current_item, key)) continue;

      const value = current_item[key];
      const new_key = current_prefix ? `${current_prefix}${separator}${key}` : key;

      if (preserve && preserve(value, key)) {
        result[new_key] = value;
        continue;
      }

      if (typeof value === "object" && value !== null && !Array.isArray(value)) {
        recurse(value, new_key);
      } else {
        result[new_key] = value;
      }
    }
  }

  recurse(obj, "");
  return result;
}

log(flatten_object({ foo: { bar: 'hello world' }, baz: { bar: 'hello world' }, }, {preserve(value, key){
  if (key == 'foo') {
    return true
  } 
}}))
