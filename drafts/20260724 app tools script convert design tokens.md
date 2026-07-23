# use snake case. write a ts fn to flatten an object. params obj, options. options separator = . (dot), fn preserve. if preserve is given, do not flatten the props when it returns true. return the flattened object.

typescript

```
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
```

Use code with caution.

### Key Features

- **Snake Case**: The function name `flatten_object` and internal variables use snake\_case formatting.
- **Custom Separator**: Defaults to a dot (`.`) but accepts any string configuration.
- **Preserve Callback**: Skips flattening for specific objects (e.g., Dates, Arrays, or custom classes) when the function evaluates to true.
- **Safe Check**: Uses `hasOwnProperty` to avoid processing inherited prototype properties.

To tailor this code to your project, let me know if you want to **handle arrays** explicitly or add **strict TypeScript return types** based on the input object.

- [link](https://www.youtube.com/watch?v=Myz4tuHgDo0)\
  Using hasOwnProperty() method in JavaScript | JavaScript Made Easy - Session 43\
  Jul 17, 2025 — In this video, you'll learn how to use the hasOwnProperty() method in JavaScript to check whether an object contains a specific pr...\
  \
  \
  YouTube

# 
