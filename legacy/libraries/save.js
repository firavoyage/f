(() => {
  /**
   * Saves a file with the given content, allowing the user to choose directory if supported,
   * otherwise falls back to default download directory.
   *
   * @param {string} filename - The name of the file to be saved
   * @param {string} content - The content to write to the file
   * @returns {Promise<boolean>} True if the file was successfully saved, false if the user canceled or an error occurred
   *
   * @example
   * // Save a text file with simple content
   * save('example.txt', 'Hello, world!')
   *   .then(success => {
   *     if (success) {
   *       console.log('File saved successfully');
   *     } else {
   *       console.log('Save canceled by user');
   *     }
   *   });
   *
   * @example
   * // Save a JSON file
   * const data = { name: 'John', age: 30 };
   * save('data.json', JSON.stringify(data, null, 2))
   *   .then(success => console.log(success ? 'Saved!' : 'Canceled'));
   *
   * @example
   * // Save HTML content
   * save('page.html', '<html><body><h1>Hello</h1></body></html>');
   */
  const save = async (filename, content) => {
    try {
      // Check if the File System Access API is supported
      if (!("showSaveFilePicker" in window)) {
        console.warn(
          "File System Access API is not supported in this browser, using fallback download method"
        );
        return await fallbackSave(filename, content);
      }

      // Open the save file picker dialog
      const fileHandle = await window.showSaveFilePicker({
        suggestedName: filename,
        types: [
          {
            description: "Text Files",
            accept: { "text/plain": [".txt"] },
          },
        ],
      });

      // Create a FileSystemWritableFileStream to write to
      const writableStream = await fileHandle.createWritable();

      // Write the content to the stream
      await writableStream.write(content);

      // Close the file and write the contents to disk
      await writableStream.close();

      return true;
    } catch (error) {
      // The user canceled the dialog or an error occurred
      if (error.name === "AbortError") {
        return false;
      }
      console.error("Error saving file:", error);

      // If modern API fails, try fallback
      return await fallbackSave(filename, content);
    }
  };

  /**
   * Fallback method to save file using traditional download approach
   * @param {string} filename - The name of the file to be saved
   * @param {string} content - The content to write to the file
   * @returns {boolean} Always returns true since user can't cancel this method
   * @private
   */
  const fallbackSave = (filename, content) => {
    try {
      // Create a blob with the content
      const blob = new Blob([content], { type: "text/plain" });
      const url = URL.createObjectURL(blob);

      // Create a temporary anchor element to trigger download
      const a = document.createElement("a");
      a.href = url;
      a.download = filename;
      a.style.display = "none";

      // Append to body, click, and cleanup
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);

      // Clean up the URL object
      URL.revokeObjectURL(url);

      console.log(`File "${filename}" saved to downloads folder`);
      return true;
    } catch (error) {
      console.error("Error in fallback save method:", error);
      return false;
    }
  };
  globalThis.save = save;
})();
