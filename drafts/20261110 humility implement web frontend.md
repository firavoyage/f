# how to let textarea have fit content size on css

To make a `<textarea>` fit its content size using only CSS, use the **`field-sizing: content;`** property. This native CSS feature automatically adjusts the height (and width, if not constrained) of the textarea based on what the user types, completely eliminating the need for JavaScript hacks. [](https://stackoverflow.com/questions/2803880/is-there-a-way-to-get-a-textarea-to-stretch-to-fit-its-content-without-using-php)

Because it is supported across all major modern evergreen browsers (including Chrome, Safari, Firefox, and Edge), you can implement it safely with appropriate fallbacks. [](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/field-sizing)

### Modern CSS-Only Solution

css

```
textarea {
  /* 1. The magic property that shrinks/grows to fit content */
  field-sizing: content;

  /* 2. Set bounds so it doesn't collapse to 0px when empty */
  min-inline-size: 200px; /* Minimum width */
  min-block-size: 3lh;    /* Minimum height (3 lines tall) */

  /* 3. Optional: Prevent user manual resizing from breaking it */
  resize: none; 
}

```



### Key Properties Explained

* **`field-sizing: content;`**: This overrides the browser's default fixed-size box behavior for form controls. It instructs the element to behave like a standard `<div>` with `height: auto`. [](https://github.com/whatwg/html/issues/6807)
* **`lh` (Line Height Unit)**: Instead of arbitrary pixels, using `min-block-size: 3lh` guarantees your textarea starts exactly **three lines of text tall**, regardless of how your font scales. [](https://www.youtube.com/shorts/Z1d428X-6rU)
* **`resize: none;`**: Disabling manual drag resizing is highly recommended. If a user manually drags the corner of the textarea, the explicit pixels they set will override the `field-sizing` calculations.

---

### Backward Compatibility Fallback (Pre-2026 Browsers)

If you need to support users on older browser versions where `field-sizing` isn't available, the cleanest fallback is a tiny snippet of inline JavaScript on the element. [](https://www.reddit.com/r/reactjs/comments/twmild/autoresize%5Ftextarea%5Fheight%5Fto%5Ffit%5Fthe%5Fcontent/)

html

```
<textarea 
  style="field-sizing: content; min-height: 3lh;" 
  oninput="this.style.height = ''; this.style.height = this.scrollHeight + 'px';"
></textarea>

```



_The `oninput` trick resets the height first to let it shrink, then assigns the `scrollHeight` so it grows dynamically to perfectly frame the text._ [](https://www.reddit.com/r/reactjs/comments/twmild/autoresize%5Ftextarea%5Fheight%5Fto%5Ffit%5Fthe%5Fcontent/)

Would you like to see how to configure **maximum boundaries** (like limiting growth to 10 lines max before showing a scrollbar), or are you styling this inside a specific framework like **React or Tailwind**? [](https://www.youtube.com/shorts/GTOPzCPV7ps)

* [](https://stackoverflow.com/questions/2803880/is-there-a-way-to-get-a-textarea-to-stretch-to-fit-its-content-without-using-php)  
Stack Overflow  
html - Is there a way to get a textarea to stretch to fit its content ...  
May 10, 2010 — is supported by Chrome, Edge, Opera, However, it is an experimental feature and lacks support in browsers like Safari/iOS and Fire...
* [](https://www.reddit.com/r/reactjs/comments/twmild/autoresize%5Ftextarea%5Fheight%5Fto%5Ffit%5Fthe%5Fcontent/)  
Reddit·r/reactjs  
autoresize textarea height to fit the content : r/reactjs - Reddit  
April 5, 2022 — A common approach to make a textarea auto-resize is to set its height property to \`scrollHeight\` using JavaScript.
* [](https://github.com/whatwg/html/issues/6807)  
GitHub  
Allow <textarea> to size to its contents like <div contenteditable>  
June 25, 2021 — This min/max clamping logic is exactly the same as the logic within CSS, and specifically is how the clamp() function works in CSS...

Show all