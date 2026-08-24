## how to make browser scrollbar dark mode

To make a browser scrollbar dark mode, you can use the native CSS **`color-scheme: dark;`** property on your root element. This tells the browser that your page supports a dark theme, forcing it to automatically render system-level UI components like scrollbars and form inputs in dark mode. [link](https://github.com/GoogleChrome/modern-web-guidance-src/blob/main/guides/visual-design/dark-mode/guide.md)

Here is a comprehensive breakdown of the most effective ways to implement dark mode scrollbars using CSS, depending on how much control you want over the exact colors.

### 1. The Easiest Way (Native Browser Automation)

Applying `color-scheme` is the cleanest approach because it does not require you to write complex vendor-prefixed code. The browser will automatically handle the rendering. [link](https://stackoverflow.com/questions/68360125/how-to-have-dark-mode-scrollbars)

css

```
/* Apply globally to the entire website */
:root {
  color-scheme: dark;
}
```

Use code with caution.

If your website toggles between light and dark modes dynamically (e.g., using a `.dark` class added to the HTML/body element), you can scope it like this:

css

```
/* Automatic switching based on system preferences */
@media (prefers-color-scheme: dark) {
  :root {
    color-scheme: dark;
  }
}

/* Or using a class name applied via JavaScript */
html.dark {
  color-scheme: dark;
}
```

Use code with caution.

### 2. The Modern Cross-Browser Way (Custom Colors)

If you want to define specific dark colors rather than relying on the browser's default dark gray, combine the standard `scrollbar-color` property (supported by modern versions of Chrome, Firefox, and Edge) with `color-scheme` to ensure Safari remains dark. [link](https://dev.to/whyang9701/browser-scrollbar-color-in-the-dark-mode-29db)

The `scrollbar-color` property accepts two values: **`[thumb-color] [track-color]`**. [link](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/scrollbar-color)

css

```
:root {
  /* Fallback & Safari support */
  color-scheme: dark;

  /* Modern Chrome, Edge, and Firefox support */
  /* Format: scrollbar-color: [Thumb Color] [Track Color]; */
  scrollbar-color: #4a4a4a #121212;
}
```

Use code with caution.

### 3. Fully Customized Way (Legacy WebKit Support)

If you require pixel-perfect control over scrollbar width, borders, and hover effects in Chromium browsers (Chrome, Edge, Opera) and Safari, you must use legacy pseudo-elements. [link](https://www.youtube.com/watch?v=%5F%5Fl2aTqBQ5o)

_Note: This method will ignore the standard `scrollbar-color` property if both are defined on the same element._ [link](https://code.onedev.io/onedev/server/~issues/2952)

css

```
/* 1. Define the width of the entire scrollbar */
::-webkit-scrollbar {
  width: 12px;
}

/* 2. Define the background of the scrollbar track */
::-webkit-scrollbar-track {
  background: #121212;
}

/* 3. Define the draggable scroll thumb */
::-webkit-scrollbar-thumb {
  background-color: #333333;
  border-radius: 6px;
  border: 3px solid #121212; /* Creates a padding effect around thumb */
}

/* 4. Change thumb color when hovering */
::-webkit-scrollbar-thumb:hover {
  background-color: #4a4a4a;
}
```

Use code with caution.

To see a live demonstration of tailoring these track and thumb settings with padding effects and gradients, you can watch this video:

8:57

[link](https://www.youtube.com/watch?v=mL0fYluyiQE)

Custom Dark Mode Page Scrollbar

2.7K views · 4 years ago

YouTube · Coding in Public

### Method Comparison

| Method                    | Target Browsers       | Pros                                                         | Cons                                                             |
| ------------------------- | --------------------- | ------------------------------------------------------------ | ---------------------------------------------------------------- |
| **`color-scheme: dark`**  | All modern browsers   | One line of code; seamless native performance.               | Cannot choose exact custom hex colors.                           |
| **`scrollbar-color`**     | Chrome, Firefox, Edge | Lightweight; allows choosing exact hex colors.               | Safari ignores this property (requires `color-scheme` fallback). |
| **`::-webkit-scrollbar`** | Chrome, Safari, Edge  | Total control over radius, padding, width, and hover states. | Verbose code; Firefox entirely ignores it.                       |

If you'd like, let me know:

- If your site uses a **JavaScript toggle switch** for dark mode
- What **CSS framework** you are using (like Tailwind CSS or Bootstrap)
- Whether you want to style **nested layout containers** or just the main window [link](https://www.youtube.com/watch?v=1Ervj3Y8SoY\&t=224)

I can provide the exact code block tailored to your stack!

22 sites

- [link](https://stackoverflow.com/questions/68360125/how-to-have-dark-mode-scrollbars)\
  How to have dark mode scrollbars?\
  Jul 13, 2021 — There are a few ways to have dark scrollbars in CSS: \* \*\*Use the color-scheme\*\* This works, but it can mess up inputs and form con...\
  Stack Overflow
- [link](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/scrollbar-color)\
  scrollbar-color CSS property - MDN Web Docs\
  Apr 20, 2026 — Defines the color of the scrollbar. ... Default platform rendering for the track portion of the scrollbar, in the absence of any o...\
  MDN Web Docs
- [link](https://dev.to/whyang9701/browser-scrollbar-color-in-the-dark-mode-29db)\
  Browser scrollbar color in the Dark mode. - DEV Community\
  Nov 1, 2025 — Browser scrollbar color in the Dark mode. #css #tutorial #ui · SoybeenAdmin is a dashboard template built with Vue 3, Pinia, and T...\
  DEV Community

Show all

## can i hide the triangles

Yes, you can hide the directional arrows (sometimes called "triangles" or "buttons") at the top and bottom of the scrollbar.

To achieve this, you must use the **`::-webkit-scrollbar-button`** pseudo-element. Setting its display properties to `none` will completely remove them in Chromium-based browsers (Chrome, Edge, Opera) and Safari.

### The CSS Solution

Add this snippet to your stylesheet alongside your existing custom scrollbar styles:

css

```
/* Hide the top and bottom arrows / triangles */
::-webkit-scrollbar-button {
  display: none;
  width: 0;
  height: 0;
}
```

Use code with caution.

### Important Platform Differences

- **Chromium & Safari (Chrome, Edge, Opera, macOS/iOS Safari)**: The snippet above works flawlessly. If you are already overriding the scrollbar with `::-webkit-scrollbar`, the browser often removes the arrows by default, but adding `display: none` explicitly ensures they stay hidden.
- **Firefox**: Firefox does not display scrollbar arrows by default on modern operating systems when using standard CSS properties like `scrollbar-width` or `scrollbar-color`. Because Firefox does not support `webkit` vendor prefixes, you do not need to write extra code for it—the arrows are already absent.

If you want to see how to apply this to a **specific sidebar** or if it's not hiding on a **particular browser**, let me know:

- Which **browser** you are testing this on
- The **operating system** you are using (Windows, macOS, Linux)

I can help you debug the exact style specificity!

## how to make it work ::-webkit-scrollbar-button {

display: none;\
width: 0;\
height: 0;\
}

To make `::-webkit-scrollbar-button { display: none; }` work, **you must explicitly define the rest of the custom scrollbar structure** using `::-webkit-scrollbar`.

Chromium browsers (Chrome and Edge) will ignore individual scrollbar sub-element rules unless the main scrollbar container style is activated first.

Here is the exact code required to activate the custom scrollbar and hide the triangles:

### The Complete Working CSS

Combine your button-hiding rule with a defined width, track, and thumb like this:

css

```
/* 1. REQUIRED: Turn on the custom scrollbar engine and set a width */
::-webkit-scrollbar {
  width: 12px;  /* Vertical scrollbar width */
  height: 12px; /* Horizontal scrollbar height */
}

/* 2. SUCCESS: This will now successfully target and hide the arrows */
::-webkit-scrollbar-button {
  display: none;
  width: 0;
  height: 0;
}

/* 3. REQUIRED: You must give the track and thumb a color, or they will become invisible */
::-webkit-scrollbar-track {
  background: #121212;
}

::-webkit-scrollbar-thumb {
  background: #333333;
  border-radius: 6px;
}

::-webkit-scrollbar-thumb:hover {
  background: #4a4a4a;
}
```

Use code with caution.

### Why It Wasn't Working Before

- **The WebKit Engine Rule:** WebKit browsers use an "all-or-nothing" rule for scrollbars. If you only try to change the buttons, the browser defaults to its native operating system scrollbar and blocks your custom button CSS.
- **Component Dependency:** Defining `::-webkit-scrollbar` forces the browser to drop its native layout, which instantly activates your `::-webkit-scrollbar-button` rules.

If you are trying to test this and still see arrows, let me know:

- If you are testing this on a **Mac** or a **Windows** machine
- If you want the scrollbar to be **completely invisible** except when scrolling

I can help adjust the behavior to match your exact design requirements!

