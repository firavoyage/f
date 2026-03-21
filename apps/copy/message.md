follow these:

- use:
  - ubuntu
  - zsh
  - pnpm
  - typescript
  - parceljs
  - dont reinvent wheels, prefer modern proven tech
- naming:
  - snake case
  - verb noun for actions and predicate for bools
- style:
  - functional programming
  - modular and cohesive
  - object params
  - async if needed
  - modern es module
  - no `undefined` or `null`
  - no `typeof` or `instanceof`.
  - no `try catch` unless external libraries need
  - no `throw`
- notes:
  - add simple logging
  - give me full working code of all changed files.

---

write a html page. 

no react. be simple.

blank page. black background. one always focused textarea of opacity zero.

learn from this (only for making it always focused):

```js
// Focus the div immediately
editableDiv.focus();

// Re-focus whenever window gains focus
window.addEventListener("focus", function () {
  editableDiv.focus();
});

// Handle paste event with HTML content
editableDiv.addEventListener("paste", function (e) {
  e.preventDefault();
  const html = e.clipboardData.getData("text/html");
  const text = e.clipboardData.getData("text/plain");

  if (html || text) {
    // Process content
    const markdown = htmlToMarkdown(html || text);
    markdownOutput.textContent = markdown;

    // Copy to clipboard
    navigator.clipboard.writeText(markdown).then(() => {
      // Show "Copied!" feedback
      editableDiv.classList.remove("placeholder");
      editableDiv.classList.add("copied");
      editableDiv.innerHTML = "";

      // Reset after animation
      setTimeout(() => {
        editableDiv.classList.remove("copied");
        editableDiv.classList.add("placeholder");
        editableDiv.focus();
      }, 500);
    });
  }
});

// Keep focus on the editable div when clicking anywhere
document.addEventListener("click", function (e) {
  if (e.target !== editableDiv) {
    editableDiv.focus();
  }
});
});
```

one text. paste at first. copied for a while after that.

when anything (likely to be rich text) is pasted, copy the converted html.

use DOMPurify to do that. tell me to install.

keep everything related to its display (width height of image, style), remove nonsense (classes, data, whatever non standard attr)

research on the list of "necessary attrs". dont guess or try to curate yourself.
