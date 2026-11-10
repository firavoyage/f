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

# when is css field sizing content supported

The **`field-sizing: content`** CSS property is fully **Baseline Newly Available** as of **June 2026**. This means it is supported by default in the latest stable releases of all major web browser engines (Chromium, WebKit, and Gecko). [](https://rolandfranke.nl/frontend-stories/css-field-sizing-content/)

### Browser Support Breakdown

| Browser                        | Supported Version | Release Date  |
| ------------------------------ | ----------------- | ------------- |
| **Google Chrome**              | Chrome 123+       | March 2024    |
| **Microsoft Edge**             | Edge 123+         | March 2024    |
| **Apple Safari (macOS & iOS)** | Safari 26.2+      | December 2025 |
| **Mozilla Firefox**            | Firefox 152+      | June 2026     |

### Why use `field-sizing: content`?

Before this feature, making an input field or a `<textarea>` grow and shrink automatically as a user types required complex JavaScript event listeners or tricky CSS hacks. With this property, you can handle auto-growing form elements natively with a single line of CSS: [](https://www.reddit.com/r/css/comments/1vz0mc4/fieldsizing%5Fis%5Fbaseline%5Fnewly%5Favailable%5Fsince/)

css

```
textarea {
  field-sizing: content;
}

```



### Best Practices for Older Browsers

Because this feature crossed the baseline threshold relatively recently, you may still have users on older browser versions that won't recognize it. [](https://rolandfranke.nl/frontend-stories/css-field-sizing-content/)

* **Progressive Enhancement:** In older browsers, the elements will simply fall back to their standard, fixed-size behavior.
* **Safe Limits:** Always pair `field-sizing: content` with `min-width`/`max-width` (or `min-inline-size`/`max-inline-size`) so your inputs don't shrink to zero or grow completely off the screen. [](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/field-sizing)

You can find the most up-to-date tracking information on the official [MDN Web Docs Field Sizing Page](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/field-sizing) or check current global usage percentages on [Can I use...](https://caniuse.com/mdn-css%5Fproperties%5Ffield-sizing%5Fcontent).

Are you planning to use this for a **specific project**, or would you like to see a quick code example showing how to safely implement **min/max limits and a JavaScript fallback** for older browsers?

* [](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/field-sizing)  
MDN Web Docs  
field-sizing CSS property - MDN Web Docs - Mozilla  
Jul 26, 2026 — The field-sizing CSS property enables you to control the sizing behavior of elements that are given a default preferred size, such...
* [](https://caniuse.com/?search=field-sizing)  
CanIUse  
"field-sizing" | Can I use... Support tables for HTML5, CSS3, etc  
field-sizing. Baseline 2026: Newly available across major browsers. The field-sizing CSS property allows form controls such as <te...
* [](https://rolandfranke.nl/frontend-stories/css-field-sizing-content/)  
rolandfranke.nl  
CSS field-sizing: content Is Finally Baseline  
August 26, 2026 — older browsers may not support it. In those browsers, the form control simply falls back to its default sizing behaviour, making f...

Show all

# . thinking

well... really.

Chromium	124.0.6367.118 (Official Build) snap (64-bit) 

my firefox nightly: 152.0a1 (2026-05-08) (64-bit)

dangerous isnt it.


