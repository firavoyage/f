write a js fn.

- use const arrow fn. write jsdoc with examples.
- name: open
- no param
- create a select file dialog. select one file.
- no file selected: return false
- returns the string of the text content.
- name: save
- params: filename, content
- create a file of that text content. download the file.
- returns void

---

```javascript
/**
 * Opens a file selection dialog and returns the text content of the selected file.
 *
 * @example
 * // Using async/await
 * const fileContent = await open();
 * if (fileContent) {
 *   console.log('File content:', fileContent);
 * } else {
 *   console.log('No file selected');
 * }
 *
 * @example
 * // Using promises
 * open().then(content => {
 *   if (content) {
 *     console.log('File content:', content);
 *   } else {
 *     console.log('No file selected');
 *   }
 * });
 *
 * @returns {Promise<string|false>} A promise that resolves to the file content as a string if a file is selected, or false if no file is selected
 */
const open = () => {
  return new Promise((resolve) => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "*/*";

    input.onchange = (event) => {
      const file = event.target.files[0];
      if (!file) {
        resolve(false);
        return;
      }

      const reader = new FileReader();
      reader.onload = (e) => {
        resolve(e.target.result.toString());
      };
      reader.onerror = () => {
        resolve(false);
      };
      reader.readAsText(file);
    };

    input.click();
  });
};

/**
 * Creates and downloads a file with the specified text content.
 *
 * @example
 * // Download a text file with simple content
 * save('example.txt', 'Hello, World!');
 *
 * @example
 * // Download a JSON file
 * const data = { name: 'John', age: 30 };
 * save('data.json', JSON.stringify(data, null, 2));
 *
 * @param {string} filename - The name of the file to download
 * @param {string} content - The text content to save in the file
 * @returns {void}
 */
const save = (filename, content) => {
  const blob = new Blob([content], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};
```
