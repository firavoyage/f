# 1

write a js fn.

- use const arrow fn. write jsdoc with examples.
- param: {value, children, ...props}
- all preact methods (h, use state, use ref...) are already available in the scope.
- no need to export. i do not use a bundler.
- it's a preact based file uploader, a button.
- whenever a file is uploaded, call value(file.text content)
- the button should have .file class.
- returns: vnode

---

```javascript
/**
 * File upload button component that reads file content and passes it to a callback
 * @param {Object} props - Component properties
 * @param {Function} props.value - Callback function that receives file text content
 * @param {any} props.children - Button content (text or elements)
 * @param {Object} props... - Additional props to spread onto the button element
 * @returns {import('preact').VNode} Button element that triggers file selection
 *
 * @example
 * // Basic usage
 * FileUpload({
 *   value: (content) => console.log('File content:', content),
 *   children: 'Upload File'
 * })
 *
 * @example
 * // With additional props
 * FileUpload({
 *   value: (content) => processFile(content),
 *   children: [h('span', null, '📁'), ' Choose File'],
 *   disabled: false,
 *   title: 'Select a text file'
 * })
 */
const FileUpload = ({ value, children, ...props }) => {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current?.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      value(e.target?.result);
    };
    reader.onerror = () => {
      console.error("Error reading file");
    };
    reader.readAsText(file);

    // Reset input to allow selecting same file again
    event.target.value = "";
  };

  return h(
    "div",
    null,
    h(
      "button",
      {
        type: "button",
        class: "file",
        onClick: handleClick,
        ...props,
      },
      children
    ),
    h("input", {
      ref: inputRef,
      type: "file",
      style: { display: "none" },
      onChange: handleFileChange,
    })
  );
};
```
