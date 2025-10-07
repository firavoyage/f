write a js fn.

- use const arrow fn. write jsdoc with examples.
- name: download
- param: string filename, string content
- download it
- returns: void

---

Here's the JavaScript function that meets your requirements:

```javascript
/**
 * Downloads a file with the given filename and content
 * @param {string} filename - The name of the file to download
 * @param {string} content - The content of the file
 * @returns {void}
 * @example
 * // Downloads a file named "example.txt" with text content
 * download('example.txt', 'This is the file content');
 *
 * @example
 * // Downloads a JSON file
 * download('data.json', JSON.stringify({ name: 'John', age: 30 }));
 */
const download = (filename, content) => {
  // Create a Blob with the content
  const blob = new Blob([content], { type: "text/plain" });

  // Create a temporary anchor element
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = filename;

  // Programmatically click the link to trigger download
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  // Clean up the URL object
  URL.revokeObjectURL(link.href);
};
```

This function:

1. Creates a Blob object from the string content
2. Generates a temporary URL for the Blob
3. Creates an invisible anchor element with download attributes
4. Programmatically triggers a click on the anchor
5. Cleans up the DOM and URL objects after download

Note that this implementation:

- Works in modern browsers
- Requires the content to be a string (for other types, you'd need to modify the Blob type)
- Immediately triggers the download when called
- Properly cleans up created resources
