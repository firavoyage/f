<!-- https://gemini.google.com/app/4bf5360ed331b7f2 -->

<!-- pro, "gemini 3" -->

<!-- it does add some elements. it has some thoughts. yeah. -->

<!-- gemini's inherited problem still exists, the copy button does not work well, copying things after a few secs after clicking. i want the retro google reader style back! no material 3 (it's good, but kind of not grounded). -->

# a

create an html previer. dark theme. no react. no dependencies.

first there is a textarea, something pasted, then the full page becomes the html.

no more unnecessary elements.

---

Here is a complete, single-file HTML solution. It contains no libraries, frameworks, or external CSS.

### How it works:

1. **Input:** A minimalist dark-mode textarea allows you to paste or type code.
2. **Render:** Click the **"Run"** button (bottom right) to render the HTML.
3. **Full Page:** The preview takes over the entire screen.
4. **Edit:** Press **`ESC`** on your keyboard to go back to the code editor.

Save the following code as an `.html` file (e.g., `preview.html`).

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Minimal HTML Preview</title>
    <style>
      /* CSS Reset & Dark Theme Base */
      * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
      }

      body,
      html {
        height: 100%;
        width: 100%;
        background-color: #121212;
        color: #e0e0e0;
        font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
        overflow: hidden; /* Prevent body scroll, handle inside elements */
      }

      /* The Editor Container */
      #editor-view {
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 100%;
        padding: 20px;
        transition: opacity 0.3s ease;
      }

      /* The Textarea */
      textarea {
        flex-grow: 1;
        width: 100%;
        background-color: #1e1e1e;
        color: #a9b7c6; /* Monokai-ish text color */
        border: 1px solid #333;
        padding: 15px;
        font-family: "Consolas", "Courier New", monospace;
        font-size: 14px;
        outline: none;
        resize: none;
        border-radius: 4px;
        box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.5);
      }

      textarea::placeholder {
        color: #555;
      }

      /* The Run Button */
      #run-btn {
        position: absolute;
        bottom: 30px;
        right: 40px;
        background-color: #007acc;
        color: white;
        border: none;
        padding: 10px 20px;
        font-size: 14px;
        cursor: pointer;
        border-radius: 4px;
        opacity: 0.8;
        transition: opacity 0.2s;
      }

      #run-btn:hover {
        opacity: 1;
      }

      /* The Preview Container (Iframe) */
      #preview-container {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: white; /* Default HTML background */
        z-index: 100;
        display: none; /* Hidden by default */
      }

      iframe {
        width: 100%;
        height: 100%;
        border: none;
      }

      /* Utility class to hide editor */
      .hidden {
        display: none !important;
      }

      /* Notification helper */
      #notification {
        position: fixed;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: rgba(0, 0, 0, 0.7);
        color: white;
        padding: 8px 16px;
        border-radius: 20px;
        font-size: 12px;
        pointer-events: none;
        opacity: 0;
        transition: opacity 0.5s;
        z-index: 200;
      }
    </style>
  </head>
  <body>
    <div id="editor-view">
      <textarea id="code-input" placeholder="" spellcheck="false"></textarea>
      <button id="run-btn">Run</button>
    </div>

    <div id="preview-container">
      <iframe id="viewer"></iframe>
    </div>

    <div id="notification">Press ESC to edit</div>

    <script>
      const editorView = document.getElementById("editor-view");
      const codeInput = document.getElementById("code-input");
      const runBtn = document.getElementById("run-btn");
      const previewContainer = document.getElementById("preview-container");
      const viewer = document.getElementById("viewer");
      const notification = document.getElementById("notification");

      // Function to Render HTML
      function render() {
        const htmlContent = codeInput.value;

        // Open the iframe document and write the content
        const doc = viewer.contentWindow.document;
        doc.open();
        doc.write(htmlContent);
        doc.close();

        // Toggle Views
        editorView.classList.add("hidden");
        previewContainer.style.display = "block";

        // Show instruction briefly
        showNotification();
      }

      // Return to Edit Mode
      function closePreview() {
        previewContainer.style.display = "none";
        editorView.classList.remove("hidden");
        codeInput.focus();
      }

      // Show "Press ESC" toast
      function showNotification() {
        notification.style.opacity = "1";
        setTimeout(() => {
          notification.style.opacity = "0";
        }, 3000);
      }

      // Event Listeners
      runBtn.addEventListener("click", render);

      // Listen for ESC key to close preview
      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && previewContainer.style.display === "block") {
          closePreview();
        }
      });
    </script>
  </body>
</html>
```
