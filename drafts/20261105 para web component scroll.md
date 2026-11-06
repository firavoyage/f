#

# how to let an element take all height left on its parent in css

The easiest way is to use Flexbox.

Set the parent to `display: flex` with `flex-direction: column`, then give the element `flex: 1`.

```
.parent {
  display: flex;
  flex-direction: column;
  height: 500px;
}

.child {
  flex: 1;
}
```

This makes `.child` take all the remaining height in the parent.

Example:

```
<div class="parent">
  <div class="header">Header (100px)</div>
  <div class="content">Takes remaining height</div>
  <div class="footer">Footer (50px)</div>
</div>
```

```
.parent {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.header {
  height: 100px;
  flex-shrink: 0;
}

.content {
  flex: 1;
  min-height: 0;
  overflow: auto;
}

.footer {
  height: 50px;
  flex-shrink: 0;
}
```

Key point:

- `flex: 1` → takes all remaining space.
- `min-height: 0` → allows the element to shrink below its content's natural height.
- `overflow: auto` → adds scrolling when content overflows.

If you're building a layout with a header, content, and footer, this is usually the best approach.

# wo flex

Without Flexbox, you can use CSS Grid:

```
.parent {
  display: grid;
  grid-template-rows: auto 1fr auto;
  height: 100vh;
}

.header {
  /* Takes its natural height */
}

.content {
  min-height: 0;
  overflow: auto;
}

.footer {
  /* Takes its natural height */
}
```

`1fr` makes the content take all remaining height.

If you don't want Grid either, you can use absolute positioning:

```
.parent {
  position: relative;
  height: 100vh;
}

.child {
  position: absolute;
  top: 100px;
  bottom: 50px;
}
```

Here, the child fills the space between the top and bottom offsets.

# 

# tailwind css flex

In **Tailwind CSS**, the **`flex`** class is the foundation for creating one-dimensional layouts. It applies `display: flex` to a container, instantly turning all its direct children into flexible items. [](https://tailwindcss.com/docs/display)

You can reference the official [Tailwind CSS Flexbox Documentation](https://tailwindcss.com/docs/flex) to see how these utilities function together. [](https://tailwindcss.com/docs/flex)

---

### 🧱 1\. Container Utilities (The Parent)

These classes go on the parent element to define how the children behave as a group. [](https://www.geeksforgeeks.org/css/tailwind-css-flex/)

| Feature                                       | Tailwind Class                               | CSS Equivalent                                                                        | What it does                                                                                |
| --------------------------------------------- | -------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| **Display**                                   | flex inline-flex                             | display: flex; display: inline-flex;                                                  | Makes the element a flex container.                                                         |
| **Direction**                                 | flex-row _(default)_ flex-col                | flex-direction: row; flex-direction: column;                                          | Aligns items horizontally.  Stacks items vertically.                                        |
| **Wrapping**                                  | flex-wrap flex-nowrap                        | flex-wrap: wrap; flex-wrap: nowrap;                                                   | Allows items to wrap to a new line.  Forces items to stay on one line.                      |
| **Main-Axis Alignment** _(Horizontal if row)_ | justify-start justify-center justify-between | justify-content: flex-start; justify-content: center; justify-content: space-between; | Aligns items to the left.  Centers items.  Pushes items to the edges with space between.    |
| **Cross-Axis Alignment** _(Vertical if row)_  | items-start items-center items-stretch       | align-items: flex-start; align-items: center; align-items: stretch;                   | Aligns items to the top.  Centers items vertically.  Stretches items to fill the container. |
| **Spacing**                                   | gap-4                                        | gap: 1rem; (16px)                                                                     | Adds uniform spacing between items.                                                         |

---

### 📐 2\. Item Utilities (The Children)

These classes control how an individual item grows, shrinks, or sizes itself inside the container. [](https://tailscan.com/blog/tailwind-css-flex-a-quick-overview)

| Tailwind Class          | CSS Equivalent                  | What it does                                                                                   |
| ----------------------- | ------------------------------- | ---------------------------------------------------------------------------------------------- |
| **flex-1**              | flex: 1 1 0%;                   | **Grows and shrinks** to fill remaining space, completely ignoring the content's initial size. |
| **flex-auto**           | flex: 1 1 auto;                 | **Grows and shrinks** to fill remaining space, but respects the initial size of the content.   |
| **flex-initial**        | flex: 0 1 auto;                 | **Shrinks if needed**, but won't grow past its natural size. _(Default browser behavior)_.     |
| **flex-none**           | flex: none;                     | **Locks size**. Prevents the item from growing or shrinking, keeping its exact width/height.   |
| **grow** / **shrink-0** | flex-grow: 1; / flex-shrink: 0; | Forces an item to expand, or prevents it from squishing.                                       |

---

### 💻 Quick Code Examples

#### A. A Centered Navbar Layout

A classic layout with a logo on the left and navigation links on the right, perfectly aligned vertically. [](https://www.youtube.com/watch?v=lTWR%5FDuQAvw&t=42)

html

```
<nav class="flex justify-between items-center p-4 bg-gray-800 text-white">
  <div class="text-xl font-bold">Logo</div>
  <div class="flex gap-4">
    <a href="#">Home</a>
    <a href="#">About</a>
    <a href="#">Contact</a>
  </div>
</nav>

```



#### B. The Sidebar + Content Layout

Using `flex-1` to make the main content area take up all the leftover screen space while the sidebar stays fixed. [](https://tailwindcss.com/docs/flex)

html

```
<div class="flex h-screen">
  <!-- Sidebar -->
  <aside class="w-64 flex-none bg-gray-200">
    Sidebar Content (Fixed Width)
  </aside>

  <!-- Main Content -->
  <main class="flex-1 bg-white p-6">
    Main Content (Expands to fill the rest of the screen)
  </main>
</div>

```



Are you trying to build a **specific layout component** (like a card grid, header, or dashboard split)? Let me know what you are designing, and I can write the exact **Tailwind CSS code snippet** for you!

AI can make mistakes, so double-check responses 

* [](https://tailwindcss.com/docs/flex)  
Tailwind CSS  
flex - Flexbox & Grid - Tailwind CSS  
Use flex- utilities like flex-1 to allow a flex item to grow and shrink as needed, ignoring its initial size: Learn more about usi...
* [](https://tailwindcss.com/docs/display)  
Tailwind CSS  
display - Layout - Tailwind CSS  
to prevent the text inside from extending beyond its parent. Use the flex utility to create a block-level flex container:
* [](https://www.youtube.com/watch?v=rRzeygfoHI4&t=18)  
YouTube·Code With Dary  
Learn Flexbox In 8 Minutes | Tailwind CSS Tutorial  
Jun 16, 2021 — Learn Flexbox In 8 Minutes | Tailwind CSS Tutorial | Tailwind Tutorial | Learn Tailwind 2 CSS if you are interested to join the li...  
7m

Show all

# how to disable an input from password manager in html

To disable or block password managers from interacting with a specific HTML input field, you have to use a combination of **standard HTML attributes** and **extension-specific ignore tags**. [](https://www.linkedin.com/pulse/preventing-password-manager-programmatically-sandeep-machiraju-nffgc)

Because modern browsers frequently ignore standard rules like `autocomplete="off"` to enforce password security, relying on a single attribute is no longer enough. [](https://developer.mozilla.org/en-US/docs/Web/Security/Practical%5Fimplementation%5Fguides/Turning%5Foff%5Fform%5Fautocompletion)

### 1\. Standard HTML Attributes

For fields where you want to prevent the browser's native password manager from suggesting or saving passwords (like a confirmation or a multi-factor authentication pin field), use the `new-password` or `one-time-code` values: [](https://developer.mozilla.org/en-US/docs/Web/Security/Practical%5Fimplementation%5Fguides/Turning%5Foff%5Fform%5Fautocompletion)

html

```
<!-- For a field that shouldn't save a password (e.g., repeating a new password) -->
<input type="password" autocomplete="new-password">

<!-- For credit cards, PINs, or verification codes -->
<input type="text" autocomplete="one-time-code">

```



### 2\. Third-Party Password Manager Attributes

Popular third-party password managers look for specific data attributes on the HTML element. To bypass them, add their custom "ignore" tags directly to your `<input>`: [](https://www.linkedin.com/pulse/preventing-password-manager-programmatically-sandeep-machiraju-nffgc)

html

```
<input 
  type="password" 
  autocomplete="new-password"
  data-1p-ignore        <!-- 1Password -->
  data-bwignore         <!-- Bitwarden -->
  data-lpignore="true"  <!-- LastPass -->
  data-form-type="other"
>

```



### 3\. The JavaScript Readonly Trick (The Nuclear Option)

If a browser completely ignores your markup and continues to autofill credentials anyway, you can temporarily make the field `readonly`. This blocks password managers on page load, and you can unlock the field as soon as a human clicks into it: [](https://www.reddit.com/r/webdev/comments/1bxen2x/disable%5Fpassword%5Fautocomplete/)

html

```
<input 
  type="password" 
  readonly 
  onfocus="this.removeAttribute('readonly');" 
  onblur="this.setAttribute('readonly', true);"
>

```



### Summary of Attributes

| Target Manager                         | Attribute to Add                                            |
| -------------------------------------- | ----------------------------------------------------------- |
| **Browsers (Chrome, Firefox, Safari)** | autocomplete="new-password" or autocomplete="one-time-code" |
| **1Password**                          | data-1p-ignore                                              |
| **Bitwarden**                          | data-bwignore                                               |
| **LastPass**                           | data-lpignore="true"                                        |

To help fine-tune this, let me know:

* What **specific password manager** (like Chrome Autofill, 1Password, or LastPass) is giving you trouble?
* What **type of data** belongs in this input field (e.g., a security PIN, a new password, or a standard text field)?

I can provide a script or specific workaround tailored to that environment.

* [](https://www.reddit.com/r/webdev/comments/1bxen2x/disable%5Fpassword%5Fautocomplete/)  
Reddit·r/webdev  
Disable password autocomplete : r/webdev - Reddit  
Apr 6, 2024 — You cannot disable this behaviour. Use autocomplete=“current-password” and autocomplete=“new-password” where appropriate. only aut...
* [](https://www.linkedin.com/pulse/preventing-password-manager-programmatically-sandeep-machiraju-nffgc)  
LinkedIn·Sandeep Machiraju  
Preventing Password Manager Programmatically - LinkedIn
* [](https://developer.mozilla.org/en-US/docs/Web/Security/Practical%5Fimplementation%5Fguides/Turning%5Foff%5Fform%5Fautocompletion)  
MDN Web Docs  
How to turn off form autocompletion - Security | MDN  
Use \`autocomplete="new-password"\` to prevent autofilling on third-party password creation pages, though browser compliance varies.

Show all

# how to disable a text non password input from password manager in html

To disable a text input field from triggering password managers in HTML, you must combine standard HTML attributes with proprietary password manager exclusion tags. [](https://www.linkedin.com/pulse/preventing-password-manager-programmatically-sandeep-machiraju-nffgc)

Because modern web browsers and extensions frequently ignore `autocomplete="off"` to enforce password manager usage, the most robust solution is to apply a comprehensive mix of native attributes and popular extension ignore-tags: [](https://developer.mozilla.org/en-US/docs/Web/Security/Practical%5Fimplementation%5Fguides/Turning%5Foff%5Fform%5Fautocompletion)

html

```
<input 
  type="text" 
  name="search_query" 
  id="search_query"
  
  <!-- Native HTML overrides -->
  autocomplete="off" 
  
  <!-- Extension-specific ignore tags -->
  data-lpignore="true" 
  data-1p-ignore
  data-bwignore
  data-bitwarden-ignore
  data-dashlane-ignore
  data-form-type="other"
/>

```



### Why this combination works:

* **`autocomplete="off"` / `"nope"`:** Tells standard browsers not to cache the text or provide basic form history dropdowns.
* **`data-lpignore="true"`:** Explicitly commands LastPass to ignore the input element.
* **`data-1p-ignore`:** Instructs 1Password not to show its inline autofill menu.
* **`data-bwignore` / `data-bitwarden-ignore`:** Tells Bitwarden to skip the field.
* **`data-dashlane-ignore`:** Stops Dashlane from displaying its logo badge inside the box.
* **`data-form-type="other"`:** A generic heuristic hint utilized by various semantic parsers to classify the field as non-credential data. [](https://stackoverflow.com/questions/41945535/html-disable-password-manager)

### Additional Strategies if Password Managers Persist:

1. **Avoid Aggressive Names:** Password managers scan your code for attributes like `name="user"`, `id="email"`, or `name="login"`. Ensure your `name`, `id`, and `<label>` text do not contain keyword fragments that resemble authentication strings. [](https://developer.mozilla.org/en-US/docs/Web/Security/Practical%5Fimplementation%5Fguides/Turning%5Foff%5Fform%5Fautocompletion)
2. **Break Form Context:** If this text input sits directly above a `<input type="password">`, browsers will automatically assume your text field is a username input. You can disrupt this behavior by placing an invisible dummy element between them: [](https://gist.github.com/runspired/b9fdf1fa74fc9fb4554418dea35718fe?permalink%5Fcomment%5Fid=4772315)  
html  
```  
<!-- Trick the browser's credential scanner -->  
<input type="text" name="prevent_autofill" id="prevent_autofill" value="" style="display:none;" />  
```  


If the field is still acting up, let me know:

* Which **specific browser** or **password extension** is still trying to fill it?
* What are the **name and id attributes** currently used on the input?

I can help you pinpoint the exact rule the password manager is using to target your form.

* [](https://stackoverflow.com/questions/41945535/html-disable-password-manager)  
Stack Overflow  
HTML - Disable Password Manager - Stack Overflow  
Our security team requires us to disable the password manager for protected fields on the HTML form. Bitwarden insists on giving m...
* [](https://developer.mozilla.org/en-US/docs/Web/Security/Practical%5Fimplementation%5Fguides/Turning%5Foff%5Fform%5Fautocompletion)  
MDN Web Docs  
How to turn off form autocompletion - Security | MDN  
Disabling Autocompletion: Set \`autocomplete="off"\` on \` \` or specific \` \` elements to prevent browser data saving and session hist...
* [](https://www.linkedin.com/pulse/preventing-password-manager-programmatically-sandeep-machiraju-nffgc)  
LinkedIn·Sandeep Machiraju  
Preventing Password Manager Programmatically - LinkedIn  
data-form-type="other">

Show all



# does bitwarden extension appear on html input unless explicitly ignored even if not password related

**Yes, the Bitwarden extension can aggressively appear on HTML `<input>` fields** even if they are entirely unrelated to passwords, credentials, or usernames. [](https://github.com/bitwarden/clients/issues/1469)

The extension scans the DOM of a page and attempts to match fields for its **Inline Autofill** menu (which covers passwords, TOTP codes, cards, and identities). Because it heavily ignores standard HTML `autocomplete="off"` attributes to circumvent websites trying to block password managers, it frequently injects its overlay icon on unrelated inputs—like search bars, administrative fields, or API key textboxes. [](https://bitwarden.com/blog/bitwarden-adds-auto-fill-option-inside-form-fields/)

### How to Ignore/Disable It

#### 1\. For Developers (On Your Website)

If you are developing a website and want to completely block Bitwarden from attaching itself to a specific field, use Bitwarden's proprietary HTML attribute: [](https://bitwarden.com/help/releasenotes/)

html

```
<input type="text" name="api_key" data-bwignore="true" />

```



_Note: Bitwarden merely checks for the **existence** of the attribute. Simply writing `data-bwignore` or `data-bwignore="true"` will make the extension completely bypass that field._ [](https://github.com/sct/overseerr/issues/4079)

#### 2\. For Users (In Your Browser Settings)

If you are a user annoyed by Bitwarden appearing on random text fields across the web, you can modify its behavior: [](https://www.reddit.com/r/Bitwarden/comments/1ffqx5a/is%5Fthere%5Fa%5Fway%5Fto%5Fdisable%5Fbitwardens%5Fauto%5Ffield/)

1. Open your **Bitwarden Browser Extension**.
2. Navigate to **Settings** → **Autofill**.
3. Find the setting **Show autofill menu on form fields**.
4. Change it from _When field is focused_ to **When autofill icon is selected** (or turn it off entirely). This forces the popup to wait until you actively click the shield icon, keeping it from blocking text inputs out of nowhere. [](https://www.reddit.com/r/Bitwarden/comments/1ffqx5a/is%5Fthere%5Fa%5Fway%5Fto%5Fdisable%5Fbitwardens%5Fauto%5Ffield/)

Are you seeing this issue on a **website you are developing**, or are you a **user** trying to stop the extension from popping up on external sites you visit?

* [](https://www.reddit.com/r/Bitwarden/comments/1ffqx5a/is%5Fthere%5Fa%5Fway%5Fto%5Fdisable%5Fbitwardens%5Fauto%5Ffield/)  
Reddit·r/Bitwarden  
Is there a way to disable Bitwarden's auto field if it's ... - Reddit  
Sep 13, 2024 — Open the extension, go to the Settings tab, then click on Autofill. In the dropdown menu "Show autofill menu on form fields", sele...
* [](https://bitwarden.com/blog/bitwarden-adds-auto-fill-option-inside-form-fields/)  
Bitwarden  
Bitwarden autofill option right inside form fields | Bitwarden  
Bitwarden inline autofill menu displays credentials directly inside form fields upon user interaction, supporting logins, cards, i...
* [](https://github.com/bitwarden/clients/issues/1469)  
GitHub  
\[Major annoying\] Bitwarden does not obey autocomplete="off" · Issue #1469 · bitwarden/clients  
Bitwarden browser extension ignores \`autocomplete="off"\` attributes on form and input fields, causing unwanted autofills on non-cr...

Show all

# how to select the parent in css

In CSS, you can select a parent element using the `:has()` pseudo-class.

### 1. Using `:has()` (modern CSS)

```
<div class="parent">
  <p class="child">Hello</p>
</div>
```

```
/* Select parent if it contains .child */
.parent:has(.child) {
  background-color: lightblue;
}
```

You can also select a parent based on a specific child:

```
div:has(> p) {
  border: 1px solid red;
}
```

This selects every `div` that has a direct child `p`.

### 2. Select parent when hovering over child

```
.parent:has(.child:hover) {
  background: yellow;
}
```

### 3. Can I use `parent` or `..`?

No. CSS doesn't support direct parent traversal like `..` in file paths or `parent()` in some languages.

Quick reference:

| Selector                     | Meaning                         |
| ---------------------------- | ------------------------------- |
| `.parent:has(.child)`        | Parent containing a child       |
| `div:has(> p)`               | Div with direct child paragraph |
| `.parent:has(.child:hover)`  | Parent when child is hovered    |
| `.parent:has(input:checked)` | Parent containing checked input |

Tip: `:has()` is often called the CSS parent selector, and is supported by all modern major browsers.

# how to track mouseenter in js when it initially mounts and mouse hovers but doesnt move

The issue is that `mouseenter` only fires when the pointer enters an element. If the mouse is already stationary over the element when it mounts, the browser might not fire `mouseenter` again.

You can handle this by checking the pointer position when the element mounts.

### Solution: Check on mount + listen for mouseenter

```
const element = document.querySelector(".my-element");

function handleMouseEnter() {
  console.log("Mouse is inside!");
}

element.addEventListener("mouseenter", handleMouseEnter);

// Check if mouse is already inside on mount
const rect = element.getBoundingClientRect();

const isMouseInside =
  window.mouseX >= rect.left &&
  window.mouseX <= rect.right &&
  window.mouseY >= rect.top &&
  window.mouseY <= rect.bottom;

if (isMouseInside) {
  handleMouseEnter();
}
```

You'll need to track the pointer position globally:

```
window.addEventListener("mousemove", (e) => {
  window.mouseX = e.clientX;
  window.mouseY = e.clientY;
});
```

### Better approach: Use `elementFromPoint`

If you only care whether the mouse is currently over the element:

```
function isMouseOver(element) {
  const el = document.elementFromPoint(
    window.mouseX,
    window.mouseY
  );

  return el && (el === element || element.contains(el));
}
```

### Important

If you're using React, you can combine this with `useEffect`:

```
useEffect(() => {
  const el = ref.current;
  if (!el) return;

  const handleEnter = () => setHovered(true);
  const handleLeave = () => setHovered(false);

  el.addEventListener("mouseenter", handleEnter);
  el.addEventListener("mouseleave", handleLeave);

  return () => {
    el.removeEventListener("mouseenter", handleEnter);
    el.removeEventListener("mouseleave", handleLeave);
  };
}, []);
```

One catch: To detect a stationary mouse on initial mount, you need to know its last position (or have another way to query pointer position). Browsers don't expose the current mouse coordinates directly.

If you're using React, I can show you a reusable `useIsMouseOver` hook that handles this case.

# how to mimic flex grow 1 in js, check and filling all remaining width height of the parent given the child node

To mimic CSS `flex-grow: 1` in JavaScript, you need to calculate the remaining available width and height of the parent after accounting for the child's position and the other elements.

There are two approaches depending on what you're trying to achieve.

## 1. Recommended: Use `flex-grow: 1` directly

If you can modify CSS styles, this is the simplest solution:

```
child.style.flex = "1 1 0";
child.style.minWidth = "0";
child.style.minHeight = "0";
```

This automatically fills the remaining space in a flex container.

## 2. Calculate remaining width and height using JavaScript

If you need to implement this manually for an arbitrary child node:

```
function fillRemainingSpace(child) {
  const parent = child.parentElement;

  if (!parent) return;

  const parentRect = parent.getBoundingClientRect();
  const childRect = child.getBoundingClientRect();

  const parentStyle = getComputedStyle(parent);

  const width =
    parentRect.width -
    childRect.left + parentRect.left -
    parseFloat(parentStyle.paddingRight);

  const height =
    parentRect.height -
    childRect.top + parentRect.top -
    parseFloat(parentStyle.paddingBottom);

  child.style.width = `${Math.max(0, width)}px`;
  child.style.height = `${Math.max(0, height)}px`;
}
```

This assumes the child starts at its current position and should fill toward the parent's right and bottom edges.

## 3. More robust: Account for parent padding and child margins

If you want to calculate the remaining space based on the child's actual position:

```
function getRemainingSpace(child) {
  const parent = child.parentElement;

  if (!parent) return null;

  const p = parent.getBoundingClientRect();
  const c = child.getBoundingClientRect();

  const ps = getComputedStyle(parent);

  const right = p.right - parseFloat(ps.borderRightWidth)
    - parseFloat(ps.paddingRight);

  const bottom = p.bottom - parseFloat(ps.borderBottomWidth)
    - parseFloat(ps.paddingBottom);

  return {
    width: Math.max(0, right - c.left),
    height: Math.max(0, bottom - c.top),
  };
}
```

Usage:

```
const { width, height } = getRemainingSpace(child);

child.style.width = `${width}px`;
child.style.height = `${height}px`;
```

Important: This calculates the remaining space based on the child's current top-left position. It doesn't account for sibling elements that might affect layout or automatically recalculate when the parent resizes.

## My recommendation

If you're implementing a custom layout engine and want to mimic `flex-grow: 1`, I'd use this conceptual formula:

\\[ \text{remaining} = \text{parentSize} - \text{occupiedSpace} \\]

For horizontal layout:

\\[ W\_{\text{child}} = W\_{\text{parent}} - X\_{\text{child}} - X\_{\text{remaining padding}} \\]

For vertical layout:

\\[ H\_{\text{child}} = H\_{\text{parent}} - Y\_{\text{child}} - Y\_{\text{remaining padding}} \\]

One question: Are you implementing a custom layout engine (like a mini Flexbox), or do you simply want a DOM child to fill the remaining space after its siblings?

The implementation differs significantly, especially when handling multiple siblings with `flex-grow`.

# . thinking

interesting. so you wrap.

that's how we wrap. that's why we wrap.

# css box shadow

CSS `box-shadow` adds shadows around an element, such as a card, button, or container.

### Syntax

```
box-shadow: offset-x offset-y blur-radius spread-radius color;
```

### Common examples

1\. Soft shadow (subtle)

```
box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
```

2\. Medium shadow (card)

```
box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
```

3\. Strong shadow

```
box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25);
```

4\. Bottom shadow

```
box-shadow: 0 4px 6px -2px rgba(0, 0, 0, 0.2);
```

5\. Neumorphism shadow

```
box-shadow:
  8px 8px 16px #d1d9e6,
  -8px -8px 16px #ffffff;
```

6\. Inner shadow

```
box-shadow: inset 0 2px 6px rgba(0, 0, 0, 0.15);
```

### Interactive example

```
.card {
  background: white;
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
}
```

### Quick reference

| Property     | Meaning           |
| ------------ | ----------------- |
| First value  | Horizontal offset |
| Second value | Vertical offset   |
| Third value  | Blur              |
| Fourth value | Spread            |
| Fifth value  | Shadow color      |

Tip: For modern UI cards, try:

```
box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
```

# css box shadow for outline

Use CSS `box-shadow` to create an outline-like border without affecting element dimensions.

1\. Simple outline

```
.box {
  box-shadow: 0 0 0 1px #ccc;
}
```

2\. Thicker outline

```
.box {
  box-shadow: 0 0 0 2px #333;
}
```

3\. Inset outline (inside the element)

```
.box {
  box-shadow: inset 0 0 0 1px #ccc;
}
```

4\. Multiple outlines

```
.box {
  box-shadow:
    0 0 0 1px #ddd,
    0 0 0 4px #f0f0f0;
}
```

5\. Outline with subtle shadow

```
.box {
  box-shadow:
    0 0 0 1px #e5e7eb,
    0 2px 6px rgba(0, 0, 0, 0.08);
}
```

Tip: For a border-like effect, use `0 0 0 <spread-radius> <color>`. It creates a crisp outline without changing the element's layout.

# how to fix exceeding element in css, despite same claimed client width

If an element in CSS exceeds its parent/container width despite both elements reporting the same `clientWidth`, the issue is usually caused by something other than the content width itself.

Here are the most common causes and how to fix them.

## 1. `box-sizing: content-box` (most common)

By default, CSS calculates width without including padding and borders.

For example:

```
.parent {
  width: 500px;
}

.child {
  width: 100%;
  padding: 20px;
  border: 1px solid;
}
```

The child actually occupies:

\\[ 500 + 40 + 2 = 542px \\]

Fix:

```
*,
*::before,
*::after {
  box-sizing: border-box;
}
```

## 2. Flexbox children refusing to shrink

Flex items have `min-width: auto` by default, meaning they might refuse to shrink below their content's intrinsic width.

```
.parent {
  display: flex;
  width: 100%;
}

.child {
  min-width: 0;
}
```

This is particularly common with:

- Long text
- Nested flex containers
- Images
- Tables
- Code blocks

## 3. Overflow from descendants

Even if the element's `clientWidth` matches its parent's, its children might extend beyond its boundaries.

For example:

```
.container {
  width: 500px;
}

.child {
  width: 100%;
}

.child img {
  width: 600px;
}
```

Fix:

```
.child {
  max-width: 100%;
}

img,
video,
iframe {
  max-width: 100%;
}
```

## 4. Margin causing overflow

Margins aren't included in `clientWidth`.

```
.child {
  width: 100%;
  margin-left: 20px;
}
```

The child extends 20px beyond the parent.

Fix:

```
.child {
  width: auto;
  margin: 0;
}
```

Or account for the margin in your width calculation.

## 5. Transform or positioning

CSS transforms don't change `clientWidth`.

```
.child {
  width: 100%;
  transform: translateX(20px);
}
```

Likewise, absolute positioning can cause visual overflow.

Check:

```
.child {
  position: absolute;
  left: 20px;
}
```

## 6. Debug using JavaScript

This is particularly useful when `clientWidth` reports identical values but the element visually overflows.

```
const parent = document.querySelector('.parent');
const child = document.querySelector('.child');

console.table({
  parentClientWidth: parent.clientWidth,
  childClientWidth: child.clientWidth,

  parentScrollWidth: parent.scrollWidth,
  childScrollWidth: child.scrollWidth,

  parentRectWidth: parent.getBoundingClientRect().width,
  childRectWidth: child.getBoundingClientRect().width,

  childLeft: child.getBoundingClientRect().left,
  childRight: child.getBoundingClientRect().right,
});
```

Important differences:

| Property                        | What it measures                                               |
| ------------------------------- | -------------------------------------------------------------- |
| `clientWidth`                   | Inner width including padding, excluding borders and scrollbar |
| `scrollWidth`                   | Width needed to display all content, including overflow        |
| `offsetWidth`                   | Layout width including padding and borders                     |
| `getBoundingClientRect().width` | Actual rendered bounding-box width, accounting for transforms  |

## Let's narrow down your issue

One important question:

When you say the element exceeds its parent, what exactly happens?

1\. What is the symptom?

Horizontal scrollbar appears

Child visually extends beyond parent

Child content is clipped

Document body width exceeds viewport

2\. What layout are you using?

Flexbox

CSS Grid

Block layout

Absolute positioning

Not sure

3\. What have you observed?

Both `clientWidth` values are identical

Client widths match, but `scrollWidth` differs

Client widths match, but bounding rectangles differ

Submit

With these details, I can help identify the actual cause rather than just applying `overflow-x: hidden` and hiding the underlying problem.

# how to fix width 100% working as expected in css

In CSS, `width: 100%` means the element takes up 100% of its parent container's content width, not necessarily the entire screen width.

If `width: 100%` isn't working as expected, here are the most common fixes.

## 1. Use `box-sizing: border-box`

One of the most common issues is padding and borders making an element wider than its parent.

```
* {
  box-sizing: border-box;
}

.container {
  width: 100%;
  padding: 20px;
}
```

## 2. Check the parent container

A child with `width: 100%` cannot exceed its parent's width.

```
.parent {
  width: 100%;
}

.child {
  width: 100%;
}
```

## 3. Remove default body margin

Browsers normally add an 8px margin to the body.

```
html,
body {
  margin: 0;
  padding: 0;
  width: 100%;
}
```

## 4. Use `100vw` when you need full viewport width

```
.full-width {
  width: 100vw;
}
```

Important: `100vw` can cause horizontal scrolling because it may include the scrollbar width. Usually, `width: 100%` is better.

## 5. Check flexbox and grid constraints

If the element is inside a flex container:

```
.parent {
  display: flex;
  width: 100%;
}

.child {
  flex: 1;
  min-width: 0;
}
```

## 6. Check for max-width restrictions

Sometimes `max-width` prevents an element from expanding.

```
.element {
  width: 100%;
  max-width: none;
}
```

## Recommended CSS reset

You can start with this:

```
*,
*::before,
*::after {
  box-sizing: border-box;
}

html,
body {
  width: 100%;
  margin: 0;
  padding: 0;
}

.container {
  width: 100%;
  max-width: 100%;
}
```

One question: Where is `width: 100%` not working?

- Inside a `div`
- Inside Flexbox
- Inside CSS Grid
- Inside a Bootstrap container
- Inside an input or form
- Causing horizontal overflow / exceeding screen width

If you share your HTML and CSS, I can identify the exact issue.

# how to fix width 100% yet exceding parent in css

This usually happens because of the CSS box model. By default, `width: 100%` sets the content width to 100%, and padding/borders are added on top of that.

### 1. Best fix: `box-sizing: border-box`

```
* {
  box-sizing: border-box;
}

.child {
  width: 100%;
  padding: 20px;
  border: 1px solid black;
}
```

With `border-box`, padding and borders are included in the declared width.

### 2. Check for unwanted margins

```
.child {
  width: 100%;
  margin: 0;
}
```

Default margins or custom margins can cause overflow.

### 3. Check flexbox behavior

If the element is inside a flex container:

```
.parent {
  display: flex;
}

.child {
  width: 100%;
  min-width: 0;
}
```

Or, if you want it to fill the available space:

```
.child {
  flex: 1;
  min-width: 0;
}
```

### 4. Check viewport width issues

Avoid this inside a padded parent:

```
.child {
  width: 100vw; /* Can exceed parent */
}
```

Use:

```
.child {
  width: 100%;
}
```

### My recommendation

Start with this global reset:

```
*,
*::before,
*::after {
  box-sizing: border-box;
}
```

If it still overflows, share your parent and child CSS. I can help pinpoint exactly what's causing the width to exceed the parent.

# how to fix width 100% yet exceeding parent in css, after css reset, when margin applied

The issue is usually caused by the CSS box model. By default, `width: 100%` applies to the content width, and margins are added outside that width.

### 1. Use `box-sizing: border-box`

A common CSS reset is:

```
*,
*::before,
*::after {
  box-sizing: border-box;
}
```

However, note that `border-box` includes padding and borders in the width, but does not include margins.

### 2. If you're applying horizontal margins

For example:

```
.child {
  width: 100%;
  margin: 0 20px;
}
```

The actual width becomes:

`100% + 40px`

This causes overflow.

Fix: Use `calc()`:

```
.child {
  width: calc(100% - 40px);
  margin: 0 20px;
}
```

### 3. Alternative: Use parent padding (recommended)

Instead of applying margins to the child:

```
.parent {
  padding: 0 20px;
}

.child {
  width: 100%;
}
```

This is usually the cleanest solution.

### 4. Alternative: Use `max-width`

If you want the element to remain responsive:

```
.child {
  width: 100%;
  max-width: 100%;
}
```

This alone won't solve overflow caused by margins, though.

### Which solution should you use?

| Situation                      | Recommended fix          |
| ------------------------------ | ------------------------ |
| Child has horizontal margins   | `calc(100% - margins)`   |
| Need spacing inside parent     | Parent `padding`         |
| Padding/border causes overflow | `box-sizing: border-box` |
| Flex/grid child overflows      | Consider `min-width: 0`  |

My recommendation: If you're using `width: 100%` with horizontal margins, move those margins to the parent's padding. It avoids unnecessary width calculations and is easier to maintain.

# how to monitor size change of a node in js, like react use use measure

In vanilla JavaScript, the best way to monitor a DOM element's size changes is `ResizeObserver`.

It's essentially the browser-native equivalent of React's `useMeasure`.

### 1. Basic usage

```
const element = document.querySelector("#my-element");

const observer = new ResizeObserver((entries) => {
  for (const entry of entries) {
    const { width, height } = entry.contentRect;

    console.log("Size changed:", { width, height });
  }
});

observer.observe(element);

// Stop observing when no longer needed
// observer.disconnect();
```

Unlike listening to the `window.resize` event, `ResizeObserver` detects size changes caused by:

- Parent element resizing
- CSS changes
- Content changes
- Flexbox or Grid layout changes
- Element becoming visible or hidden

### 2. Create a reusable `useMeasure` React hook

If you want something similar to `react-use-measure`:

```
import { useState, useEffect, useRef } from "react";

function useMeasure() {
  const ref = useRef(null);
  const [bounds, setBounds] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;

      setBounds({ width, height });
    });

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return [ref, bounds];
}
```

Usage:

```
function App() {
  const [ref, bounds] = useMeasure();

  return (
    <div ref={ref}>
      <p>Width: {bounds.width}</p>
      <p>Height: {bounds.height}</p>
    </div>
  );
}
```

### 3. Which API should you use?

| API                    | What it monitors                    |
| ---------------------- | ----------------------------------- |
| `ResizeObserver`       | Element size changes                |
| `MutationObserver`     | DOM structure and attribute changes |
| `IntersectionObserver` | Element visibility/intersection     |
| `window.resize`        | Browser viewport size changes       |

My recommendation: Use `ResizeObserver` directly. It's performant, native, and specifically designed for this use case.

One important detail: `entry.contentRect` measures the content box. If you need the element's border-box dimensions, use `entry.borderBoxSize` instead.

# how to preserve scroll position after change dimension of a node in js

When you change a DOM node's dimensions (such as `width`, `height`, or content size), the browser may shift the scroll position because the layout is recalculated.

The best solution depends on what you want to preserve.

## 1. Preserve the scroll position using `scrollTop`

If you're changing the dimensions of a node inside a scrollable container:

```
const container = document.querySelector(".container");
const node = document.querySelector(".node");

// Save current scroll position
const scrollTop = container.scrollTop;
const scrollLeft = container.scrollLeft;

// Change dimensions
node.style.width = "500px";
node.style.height = "300px";

// Restore scroll position
container.scrollTop = scrollTop;
container.scrollLeft = scrollLeft;
```

## 2. Preserve the visual position of a specific node

If the node's dimensions change and you want it to remain at exactly the same visual position in the viewport:

```
const node = document.querySelector(".node");

const before = node.getBoundingClientRect();

// Change dimensions
node.style.width = "500px";
node.style.height = "300px";

// Restore its original viewport position
const after = node.getBoundingClientRect();

window.scrollBy({
  top: after.top - before.top,
  left: after.left - before.left,
});
```

This is useful when resizing elements dynamically.

## 3. Use `requestAnimationFrame` for asynchronous layout updates

If the dimension change involves rendering or DOM updates:

```
const scrollY = window.scrollY;

node.style.height = "500px";

requestAnimationFrame(() => {
  window.scrollTo({
    top: scrollY,
    behavior: "instant",
  });
});
```

## Which should you use?

| Scenario                                 | Recommended approach              |
| ---------------------------------------- | --------------------------------- |
| Scrollable div                           | Save and restore `scrollTop`      |
| Window scrolling                         | Save and restore `window.scrollY` |
| Keep a specific node visually stationary | Compare `getBoundingClientRect()` |
| React/Vue dynamic rendering              | Restore after DOM update          |

One important question: Are you changing the dimensions of a node inside a scrollable container, and do you want to preserve the container's scroll position or keep the resized node at exactly the same position on screen?

# how to preserve scroll position after changing dimension of a node in js, as if you resized the browser when reading an article

What you're looking for is scroll position preservation relative to an element, rather than preserving the absolute `scrollTop`.

When reading an article, if a node above the current reading position changes height, you want the browser to compensate for that change so the same content remains at the same visual position.

There are a few ways to achieve this in JavaScript.

## 1. Recommended: Preserve an anchor element's position

Before resizing the node, record the position of an element near the reader's current viewport. After resizing, adjust the scroll position by the difference.

```
function preserveScrollPosition(callback) {
  const scrollContainer = document.documentElement;

  // Find an anchor near the top of the viewport
  const anchor = document.elementFromPoint(
    window.innerWidth / 2,
    100
  );

  if (!anchor) {
    callback();
    return;
  }

  const before = anchor.getBoundingClientRect().top;

  // Change the DOM
  callback();

  requestAnimationFrame(() => {
    const after = anchor.getBoundingClientRect().top;

    // Compensate for layout shift
    window.scrollBy(0, after - before);
  });
}
```

Usage:

```
preserveScrollPosition(() => {
  document.querySelector("#my-node").style.height = "500px";
});
```

This keeps the anchor at approximately the same viewport position.

## 2. Simpler: Preserve scroll position by measuring height difference

If you know the node being resized is entirely above the reading position, you can simply compensate for its height change.

```
function resizeWithoutScrollJump(element, newHeight) {
  const oldHeight = element.offsetHeight;

  element.style.height = `${newHeight}px`;

  const newHeightActual = element.offsetHeight;

  window.scrollBy(0, newHeightActual - oldHeight);
}
```

This is simpler but doesn't work reliably if:

- The element is partially visible.
- Multiple elements change dimensions.
- Layout changes affect elements outside the resized node.

## 3. Browser-native solution: overflow-anchor

Modern browsers support CSS scroll anchoring.

```
html {
  overflow-anchor: auto;
}
```

The browser automatically tries to preserve the reader's visual position when content above the viewport changes size.

You can also disable it on specific elements:

```
.no-scroll-anchor {
  overflow-anchor: none;
}
```

This is often the best solution if your use case is dynamically loading images, expanding article sections, or changing content height.

## Which approach should you use?

| Situation                                   | Recommended                            |
| ------------------------------------------- | -------------------------------------- |
| Article content dynamically changes height  | `overflow-anchor: auto`                |
| You control the resize operation            | Anchor element compensation            |
| A single node above viewport changes height | Height difference compensation         |
| Multiple nodes resize asynchronously        | `ResizeObserver` + anchor compensation |

My recommendation: If you're implementing an article reader (similar to Medium or a news reader), use anchor-based compensation. It behaves most like resizing the browser window while keeping your reading position stable.

One important detail: if you're changing the width of a node, not just its height, anchor-based compensation is especially useful because text reflows and changes the heights of multiple elements.

# how does the browser preserve the scroll position when you resize the window, how to mimic that in js

Browsers generally preserve scroll position during window resizing by maintaining the document's scroll offset (`scrollY`) and adjusting the layout without intentionally resetting the scroll position.

However, there's a subtle distinction: the browser preserves the scroll offset, not necessarily the visual position of every element.

For example, if you resize the window and text wraps differently, the height of content above your current position may change. Your scroll offset might stay the same, but the content you were looking at moves.

There are a few mechanisms involved.

## 1. Browser-native scroll preservation

The browser maintains:

```
window.scrollY
window.scrollX
```

When the viewport resizes, CSS layout recalculates. Normally, the browser tries to retain the current scroll position.

Browsers also implement scroll anchoring. This is particularly important.

Scroll anchoring attempts to keep a visible element in approximately the same visual position when content above it changes size.

For example:

1. You're reading paragraph 50.
2. The window gets narrower.
3. Paragraphs above paragraph 50 wrap onto additional lines.
4. Their heights increase.
5. The browser adjusts the scroll offset to keep paragraph 50 in place.

You can control scroll anchoring with CSS:

```
.container {
  overflow-anchor: auto;
}

/* Disable anchoring */
.container {
  overflow-anchor: none;
}
```

## 2. Mimicking this behavior in JavaScript

If you want to preserve the exact visual position of an element during resizing, you can implement your own scroll anchoring.

The idea:

1. Find an element currently visible in the viewport.
2. Record its position relative to the viewport.
3. Allow the layout to resize.
4. Measure its new position.
5. Adjust `scrollY` by the difference.

Here's a practical implementation:

```
const anchor = document.querySelector(".content");

let previousTop = anchor.getBoundingClientRect().top;

const observer = new ResizeObserver(() => {
  const newTop = anchor.getBoundingClientRect().top;

  const delta = newTop - previousTop;

  window.scrollBy(0, delta);

  previousTop = anchor.getBoundingClientRect().top;
});

observer.observe(document.body);
```

This is a simplified implementation. For production, you'll want to handle anchor selection and avoid observing layout changes caused by your own scroll adjustments.

## 3. A more robust implementation

This version captures an anchor before resizing and restores its visual position afterward:

```
let anchor;
let previousTop;

function findAnchor() {
  const elements = document.querySelectorAll(".content-item");

  for (const el of elements) {
    const rect = el.getBoundingClientRect();

    if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
      return el;
    }
  }

  return null;
}

function beforeResize() {
  anchor = findAnchor();

  if (anchor) {
    previousTop = anchor.getBoundingClientRect().top;
  }
}

function afterResize() {
  if (!anchor) return;

  const newTop = anchor.getBoundingClientRect().top;
  const delta = newTop - previousTop;

  window.scrollBy(0, delta);

  anchor = null;
}

// Capture before resize using the previous frame's geometry.
window.addEventListener("resize", () => {
  requestAnimationFrame(afterResize);
});
```

For this approach, you'd need to capture the anchor before the resize starts (for example, on pointer interaction with the resize handle, where available). The browser's `resize` event itself fires after resizing has begun.

## 4. Which approach should you use?

| Scenario                                    | Recommended approach          |
| ------------------------------------------- | ----------------------------- |
| Normal document scrolling                   | Browser default               |
| Content dynamically inserted above viewport | Native scroll anchoring       |
| Custom scroll container                     | `overflow-anchor: auto`       |
| Complex responsive layout                   | JavaScript anchor restoration |
| Virtualized list                            | Preserve item ID + offset     |

My recommendation: If you're building something like a document editor, IDE, or responsive reader, use element-based anchoring rather than storing `window.scrollY`.

The key formula is:

\\[ \text{newScrollY} = \text{oldScrollY} + (\text{newAnchorTop} - \text{oldAnchorTop}) \\]

This preserves the visual position of the content, even when its height changes.

One important detail: if you're implementing this yourself, avoid fighting the browser's native scroll anchoring. Either let the browser handle it or disable it with `overflow-anchor: none` on the relevant container before implementing your own.

# does broswer gurantee unchanged scroll position when you resize back and forth

No. Browsers do not guarantee that the scroll position remains unchanged when you resize the viewport back and forth.

The behavior depends on several factors:

1. Viewport resizing: The browser generally tries to preserve the current scroll position, but it may adjust it when the document layout changes.
2. Responsive layouts: CSS media queries may change element dimensions, positioning, or visibility, shifting content.
3. Dynamic content: Images, fonts, and asynchronously loaded elements can change document height and cause scroll shifts.
4. Scroll anchoring: Browsers implement scroll anchoring to reduce unexpected jumps, but it is not an absolute guarantee.
5. Browser zoom vs. window resizing: These can produce different scroll-position behaviors.

### What is guaranteed?

There is no general browser specification guarantee that resizing from viewport A → B → A restores the exact original scroll position.

### How to preserve it yourself

If you need reliable restoration, explicitly save and restore the scroll position:

```
const savedY = window.scrollY;

// Resize or change layout...

window.scrollTo({
  top: savedY,
  behavior: "instant"
});
```

However, if the document layout changes, restoring the same `scrollY` does not necessarily restore the same visual content at the same position.

For stronger preservation: Save an element's identity and its offset relative to the viewport, then restore its position after resizing.

This is more robust than saving `scrollY` alone.

# why doesnt broswer scroll anchoring gurantee unchanged scroll position when you resize back and forth

Browser scroll anchoring doesn't guarantee that resizing back and forth restores the exact original scroll position because scroll anchoring preserves the position of an anchor element, not the numerical scroll offset or the entire layout state.

There are several reasons for this.

### 1. Scroll anchoring is relative, not absolute

The browser selects an anchor node in the document and tries to keep that node at approximately the same visual position when layout changes.

For example:

- Initial state: anchor is 200px from the top of the viewport.
- You resize the window: content reflows, and the browser adjusts `scrollY` to keep the anchor at 200px.
- You resize back: the browser attempts to preserve the anchor's position again.

But this doesn't mean the browser restores the exact original `scrollY`.

### 2. Layout changes aren't necessarily reversible

Suppose resizing causes text wrapping:

```
Before:
Line 1
Line 2
Line 3

After:
Line 1 wraps
Line 2
Line 3
```

When you resize back, the browser recalculates layout. Even if the viewport dimensions return to their original values, other factors might have changed:

- Font loading or font metrics.
- Image dimensions becoming available.
- Dynamic content insertion or removal.
- Subpixel rounding.
- Different anchor selection.

Consequently, the final layout might not have exactly the same geometry.

### 3. The browser can select a different anchor

Anchor selection is dynamic.

During the first resize, the browser might select element A. During the second resize, it might select element B.

Since these elements have different positions and layout behavior, the adjustments won't necessarily cancel each other out.

### 4. Scroll anchoring has limitations

The browser may also suppress anchoring adjustments in certain situations, such as when:

- The anchor is inside an excluded subtree.
- The scrolling box is being actively scrolled.
- The layout change falls under certain suppression triggers.
- The browser determines that an adjustment should not be performed.

### 5. Subpixel rounding accumulates

Layout calculations often involve fractional CSS pixels.

For example:

```
element.getBoundingClientRect().top
// 123.4375
```

After several layout recalculations, rounding and geometry changes can produce small differences.

### The fundamental distinction

There are two different guarantees:

| Behavior                 | What it guarantees                                                  |
| ------------------------ | ------------------------------------------------------------------- |
| Scroll anchoring         | Attempts to keep an anchor visually stable during layout changes    |
| Exact scroll restoration | Restores the same scroll offset or the same visual content position |

Scroll anchoring implements the first, not the second.

If you need exact restoration across resize operations, you should explicitly capture and restore a reference position.

For example:

```
const anchor = document.querySelector("#my-anchor");

const originalTop = anchor.getBoundingClientRect().top;

// Perform resize/layout changes...

const newTop = anchor.getBoundingClientRect().top;

window.scrollBy(0, newTop - originalTop);
```

This attempts to restore the element to its original viewport position, assuming the element still exists and the layout has stabilized.

One important caveat: if you're investigating this for a browser layout engine, scroll anchoring is intentionally not a transactional mechanism. It doesn't maintain a history of previous layouts that it can roll back to.

# write ts type for a fn that takes another fn as the first arg, the single object param of the passed fn as the second, and any rest arg

You can use a generic function type with `Parameters` to infer the second argument and `...args` for the rest:

```
type Wrapper = <
  F extends (params: object) => any,
  R extends unknown[]
>(
  fn: F,
  params: Parameters<F>[0],
  ...args: R
) => void;
```

If the passed function can also have its own return type, or you want to preserve it:

```
type Wrapper = <
  F extends (params: object) => any,
  R extends unknown[]
>(
  fn: F,
  params: Parameters<F>[0],
  ...args: R
) => ReturnType<F>;
```

Example:

```
const wrapper: Wrapper = (fn, params, ...args) => {
  return fn(params);
};
```

Note: If the rest arguments are intended to be arguments of the passed function after its object parameter, rather than extra arguments to the wrapper, the type can be simplified using `Parameters<F>`.

# how much does each key scroll in vimium

In [Vimium](https://vimium.github.io/), the default scroll distance depends entirely on the specific navigation key you press: [](https://keycombiner.com/collections/vimium/)

* **`j` / `k` (Scroll Down / Up):** Scrolls by **60 pixels** per keypress.
* **`h` / `l` (Scroll Left / Right):** Scrolls horizontally by **40 pixels** per keypress.
* **`d` / `u` (Scroll Half-Page Down / Up):** Scrolls exactly **0.5 (half) of the window's height**.
* **`gg` / `G` (Top / Bottom):** Scrolls **100%** to the absolute edge of the document. [](https://www.youtube.com/watch?v=7x9Zc05TfDI)

### ⚙️ How to Change the Scroll Distance

If 60 pixels feels too slow or too fast, you can easily customize the exact step size in Vimium's advanced settings: 

1. Type **`?`** on any webpage to bring up the Vimium help dialog, and click **Options** in the top right.
2. Scroll to the bottom and click **Show Advanced Options**.
3. Look for the **"Scroll step size"** field (set to `60` by default) and change it to your preferred pixel value.
4. Click **Save Changes** at the bottom of the page. [](https://www.youtube.com/watch?v=7x9Zc05TfDI)

Would you like to know how to adjust the **smooth scrolling animation speed**, or do you need help mapping custom keys to scroll by specific pixel intervals?

* [](https://keycombiner.com/collections/vimium/)  
KeyCombiner  
Vimium Keyboard Shortcuts - KeyCombiner  
Scroll down | j or ctrl + e | | Scroll up | k or ctrl + y. Scroll all the way to the left. Scroll Lookup up/down
* [](https://maketecheasier.com/use-vim-shortcuts-navigate-web-browser/)  
Make Tech Easier  
How to Use Vim Shortcuts to Navigate Your Web Browser  
To see the advanced options, select “Show Advanced Options” on the Vimium Options page. You can also download the configuration fi...
* [](https://www.youtube.com/watch?v=7x9Zc05TfDI)  
YouTube·Igor Babko  
Vim In The Browser - #1 Remaps  
Sep 19, 2025 — changes saved by pressing "save" or \`command +. To jump to the bottom of the page, press \`shift + G\`, and to jump to the top, pres...  
7:00

Show all

# does vimium scroll by px or rem why

**Vimium scrolls by pixels (px), not rem.** [](https://lifehacker.com/make-chrome-less-distracting-with-vimium-and-these-set-5925220)

### Why Pixels?

* **Browser API Architecture:** Vimium interacts directly with the browser's JavaScript engine to trigger movements. Standard web API commands like `window.scrollBy()` or modern variations that handle target positions accept numbers mapping directly to **CSS pixels**, not relative layout units like `rem`. [](https://github.com/philc/vimium/issues/4306)
* **Predictable Viewport Control:** A pixel maps directly to the visible viewport dimensions. Vimium defaults to a specific pixel value (e.g., `scrollStepSize = 60` or `100`) so that tapping `j` or `k` moves the page down or up by a consistent, predictable physical distance. [](https://github.com/philc/vimium/issues/1862)
* **Independence from Site Styles:** The `rem` unit stands for "root em" and is tied entirely to a website's base font size (typically `16px`). If Vimium used `rem`, the physical distance a page moves would change drastically depending on the design choices of the web developer. A site with a giant base font size would fly down the page wildly, while a site with tiny font settings would barely move at all.

You can customize this exact distance inside the Vimium options menu under the **Scroll step size** setting, where the value you provide specifies the exact number of pixels per step. [](https://lifehacker.com/make-chrome-less-distracting-with-vimium-and-these-set-5925220)

Are you trying to **adjust your scrolling speed**, or are you running into an issue where **scrolling feels stuttered** on specific websites?

* [](https://lifehacker.com/make-chrome-less-distracting-with-vimium-and-these-set-5925220)  
Lifehacker  
Make Chrome Less Distracting with Vimium (and These ...  
Jul 11, 2012 — Head to your Chrome settings, change to the Extensions section, and scroll down to find the "Options" link for Vimium. The "Scroll...
* [](https://github.com/gdh1995/vimium-c/issues/518)  
GitHub  
Precise scrolling with scrollPxDown/Up · Issue #518 - GitHub  
When scrolling pixel by pixel, Vimium C will do a first scrolling action and then wait for a while, and it will do a second one if...
* [](https://www.youtube.com/watch?v=uFUwk2fWU7k&t=7)  
YouTube·AdamFrenzen  
Control the Browser With Vim (Vimium Extension)  
Jul 20, 2025 — Vimium allows scrolling with the J and K keys and searching within a page using the slash key, with N and capital N for navigating...  
6m

Show all

# would it be better if vimium scroll by px or rem why

For a browser extension like Vimium, it is significantly better to scroll by **pixels (`px`)** rather than root ems (`rem`).

While `rem` units are essential for accessible website design and responsive typography, they are poorly suited for controlling browser window movement. [](https://www.youtube.com/watch?v=xCSw6bPXZks)

---

### Direct Comparison

| Feature              | Scrolling by Pixels (px)                                                    | Scrolling by rem                                                                               |
| -------------------- | --------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| **Predictability**   | **Excellent.** 50px is always the same physical distance on a given screen. | **Poor.** The actual distance changes depending on a website's custom CSS font sizes.          |
| **Performance**      | **High.** Browsers handle absolute pixel offsets natively and efficiently.  | **Lower.** Forces the extension to calculate the root font-size before moving.                 |
| **Website Immunity** | **Immune.** Works perfectly regardless of how poorly a website is coded.    | **Fragile.** Breaks entirely if a website sets html { font-size: 0; } or uses extreme sizes.   |
| **Consistency**      | **High.** Pressing j feels identical across all tabs and websites.          | **Low.** Pressing j will scroll a tiny distance on one site and a massive distance on another. |

---

### Why Pixels Win for Vimium Scrolling

#### 1\. Consistency Across the Web

The primary goal of Vimium is to provide a seamless, muscle-memory-driven browsing experience. If you configure Vimium to scroll by `60px` per keypress, pressing `j` will move the page down by exactly 60 physical pixels on every single website. [](https://www.reddit.com/r/vim/comments/l1bl0l/adding%5Fvimium%5Fto%5Fchrome%5Fwas%5Fa%5Fgamechanger%5Fit/)

If Vimium used `rem`, the distance would depend on the target website's CSS. On a site with a standard root font size (16px), a `4rem` scroll would move the page 64 pixels. However, if a developer sets the root font size to a mini scale (like the popular 62.5% hack to make 1rem = 10px), that same `4rem` scroll would only move the page 40 pixels. Your scrolling speed would constantly change as you click between different browser tabs. [](https://austingil.com/px-or-rem-in-css/)

#### 2\. Protection Against Bad Website Code

Browser extensions have to execute on millions of unpredictably designed websites. If a website has broken, missing, or weirdly scaled root `html` styles, `rem` calculations can yield unexpected results. If a site hides text by setting the root font size to `0`, a `rem`\-based scroll step would evaluate to `0px`—effectively **breaking Vimium's ability to scroll at all**. Pixels bypass the website's stylesheet entirely, ensuring the extension always works.

#### 3\. True UX Intent

Web developers use `rem` so that text elements scale beautifully when a visually impaired user zooms in or changes their system font settings. [](https://www.youtube.com/watch?v=pKX7YnkyR8g&t=26)

However, scrolling isn't text—it is a viewport interaction. When you scroll, you want to move the screen relative to the physical window dimensions, not relative to how large the paragraphs are.

Are you trying to **tweak your Vimium custom key mappings** to change your step size, or are you looking into **how the Vimium codebase handles** scrolling defaults? Let me know and I can give you the exact configuration snippets or details!

* [](https://www.youtube.com/watch?v=pKX7YnkyR8g&t=26)  
YouTube·Frontend FYI – by Jeroen  
Why You Should Use REM Instead of Pixels  
Nov 16, 2022 — The \`rem\` unit is relative to the root HTML element, allowing all page elements to scale proportionally when the base font size ch...  
7m
* [](https://www.bighuman.com/blog/px-rem-in-website-design-and-development)  
Big Human  
How and Why You Should Use REM Instead of PX In Your ...  
If you designate sizes and spacing using Rem, font size can be scaled by users in their browser settings. When they adjust the roo...
* [](https://www.reddit.com/r/vim/comments/l1bl0l/adding%5Fvimium%5Fto%5Fchrome%5Fwas%5Fa%5Fgamechanger%5Fit/)  
Reddit·Suboptimal Engineer  
Adding Vimium to Chrome was a game-changer, it added a lot ...  
Jan 20, 2021 — The Vimium Chrome extension enables Vim commands for internet browsing, allowing faster navigation and improved ergonomics by keep...  
[6:38](https://www.reddit.com/r/vim/comments/l1bl0l/adding%5Fvimium%5Fto%5Fchrome%5Fwas%5Fa%5Fgamechanger%5Fit/)

Show all

# how to scroll smoothly or discretely in js

To scroll **smoothly** or **discretely** (instantly) in JavaScript, you can pass a configuration object containing the `behavior` property to the browser's native scroll methods. [](https://www.youtube.com/watch?v=vCBl%5FbJUCKE)

You can use the native methods `window.scrollTo()`, `window.scrollBy()`, or `element.scrollIntoView()` depending on your use case. [](https://www.sitepoint.com/smooth-scrolling-vanilla-javascript/)

---

### 1\. Scrolling to Specific Coordinates

To move the window or a specific container to an absolute coordinate, use `scrollTo`. [](https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollTo)

#### Smooth Scroll

javascript

```
window.scrollTo({
  top: 500,       // Distance from top in pixels
  left: 0,
  behavior: 'smooth' // Animated transition
});

```



#### Discrete (Instant) Scroll

javascript

```
window.scrollTo({
  top: 500,
  left: 0,
  behavior: 'instant' // Snaps directly to the position
});

```



_(Note: You can also use `behavior: 'auto'`, which defaults to the element's CSS `scroll-behavior` setting)._ [](https://stackoverflow.com/questions/51689653/how-to-smoothly-scroll-to-an-element-in-pure-javascript)

---

### 2\. Scrolling by a Relative Amount

If you want to scroll _relative_ to the user's current scroll position (e.g., a "Scroll Down 200px" button), use `scrollBy`. [](https://www.youtube.com/watch?v=MjHlltcA-nA)

#### Smooth Scroll

javascript

```
window.scrollBy({
  top: 200,       // Scrolls down 200px from current position
  behavior: 'smooth'
});

```



#### Discrete Scroll

javascript

```
window.scrollBy({
  top: 200,
  behavior: 'instant'
});

```



---

### 3\. Scrolling an Element into View

If you want the page to move so that a specific HTML element becomes visible to the user, use `scrollIntoView`. [](https://www.youtube.com/watch?v=vCBl%5FbJUCKE)

javascript

```
const targetElement = document.querySelector('#my-section');

```



#### Smooth Scroll

javascript

```
targetElement.scrollIntoView({ 
  behavior: 'smooth', 
  block: 'start' // Aligns element to top of viewport
});

```



#### Discrete Scroll

javascript

```
targetElement.scrollIntoView({ 
  behavior: 'instant', 
  block: 'start'
});

```



---

### Alternative: Global CSS Configuration

If you want **all** JavaScript scroll movements (and standard anchor link clicks) to be smooth by default without specifying it in your script every time, you can apply it directly via CSS: [](https://www.w3schools.com/howto/howto%5Fcss%5Fsmooth%5Fscroll.asp)

css

```
html {
  scroll-behavior: smooth;
}

```



If you do this, calling `window.scrollTo(0, 500)` will automatically be smooth. To force a discrete/instant scroll while the global CSS is active, you must explicitly pass `behavior: 'instant'`. [](https://stackoverflow.com/questions/51689653/how-to-smoothly-scroll-to-an-element-in-pure-javascript)

Are you trying to implement this for a specific feature, like a **sticky navigation menu**, a **"back to top" button**, or a **full-page snap scrolling slider**? Let me know and I can provide the exact code snippet for it!

* [](https://www.youtube.com/watch?v=vCBl%5FbJUCKE)  
YouTube·dcode  
Want Smooth Scrolling? You Can Have It  
Dec 21, 2023 — For smooth scrolling to an element, use \`dotscroll.intoView\` with \`behavior: 'smooth'\` in the argument object.  
6:43
* [](https://stackoverflow.com/questions/51689653/how-to-smoothly-scroll-to-an-element-in-pure-javascript)  
Stack Overflow  
How to smoothly scroll to an element in pure JavaScript  
Modern browsers support the scroll-behavior CSS property, which can be used to make scrolling in the document smooth (without the ...
* [](https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollTo)  
MDN Web Docs  
Window: scrollTo() method - Web APIs - MDN Web Docs  
scrollTo() can be used to respond to the end of a scrolling operation. This technique is mostly useful in cases where the scrollin...

Show all

# css scroll behavior

The **`scroll-behavior`** CSS property sets the behavior for a scrolling box when a scroll is triggered by anchor navigation links or JavaScript scrolling APIs. [](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/scroll-behavior)

### 💡 Syntax and Values

css

```
/* Core Values */
scroll-behavior: auto;
scroll-behavior: smooth;

/* Global Values */
scroll-behavior: inherit;
scroll-behavior: initial;
scroll-behavior: revert;
scroll-behavior: unset;

```



* **`auto` (Default):** The scrolling box jumps **instantly** to the target element or position.
* **`smooth`:** The browser transitions to the target position using a **smooth, fluid animation**. [](https://www.w3schools.com/cssref/pr%5Fscroll-behavior.php)

---

### 🛠️ Common Implementations

#### 1\. Page-Wide Smooth Scroll

To make all anchor links (e.g., `<a href="#section-id">`) glide smoothly down the page, apply the property directly to the `html` root element: [](https://samuellawrentz.com/blog/smooth-scrolling-css-scroll-behavior/)

css

```
html {
  scroll-behavior: smooth;
}

```



#### 2\. Specific Scroll Container

You can also restrict smooth scrolling to a specific container, like a custom carousel or sidebar gallery: [](https://tillitsdone.com/blogs/css-property-scroll-behavior/)

css

```
.carousel-container {
  overflow-x: auto;
  scroll-behavior: smooth;
}

```



---

### ⚠️ Critical Best Practices

* **Respect Accessibility Preference (`prefers-reduced-motion`):** Sudden or unexpected screen motion can cause nausea or disorientation for users with vestibular disorders. You should always wrap your smooth scroll behavior in a media query that checks if the user has disabled animations in their operating system: [](https://samuellawrentz.com/blog/smooth-scrolling-css-scroll-behavior/)  
css  
```  
html {  
  scroll-behavior: smooth;  
}  
@media (prefers-reduced-motion: reduce) {  
  html {  
    scroll-behavior: auto;  
  }  
}  
```  

* **Handling Fixed Headers:** If you use `scroll-behavior: smooth` alongside a fixed/sticky navigation header, your target content might get cut off or hidden beneath the header when you click a link. You can fix this by adding `scroll-margin-top` to your target sections: [](https://www.youtube.com/watch?v=HXIHpDnsizk)  
css  
```  
/* Offset targets by the height of your fixed nav header */  
section {  
  scroll-margin-top: 70px;  
}  
```  

* **JavaScript Control:** The CSS property controls how the browser handles jumps. However, if you are writing custom JavaScript and want to trigger a one-off smooth scroll, you can pass it directly via the `scrollTo` options: [](https://www.coddykit.com/courses/css/scroll-behavior-smooth-4532902)  
javascript  
```  
window.scrollTo({  
  top: 1000,  
  behavior: 'smooth'  
});  
```  


For full browser details and interactive test cases, you can reference the comprehensive [MDN Web Docs Scroll Behavior Guide](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/scroll-behavior).

Are you trying to fix an issue with a **fixed navbar covering content**, or are you building something specific like a **carousel or table of contents**? Let me know and I can write out the exact HTML and CSS setup for you!

* [](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/scroll-behavior)  
MDN Web Docs  
scroll-behavior CSS property - MDN Web Docs - Mozilla  
The scroll-behavior CSS property sets the behavior for a scrolling box when scrolling is triggered by the navigation or CSSOM scro...
* [](https://www.w3schools.com/cssref/pr%5Fscroll-behavior.php)  
W3Schools  
CSS scroll-behavior property  
auto | Allows a straight jump "scroll effect" between elements within the scrolling box. This is default | | smooth
* [](https://www.coddykit.com/courses/css/scroll-behavior-smooth-4532902)  
CoddyKit  
scroll  
scroll-behavior controls whether scrolling that is triggered by navigation (anchor links, JavaScript scrollTo() ) should animate s...

Show all

# how to check whether some input field is focused in js

To check if a specific input field is currently focused in JavaScript, compare the element directly to **`document.activeElement`**. [](https://stackoverflow.com/questions/36430561/how-can-i-check-if-my-element-id-has-focus)

Here are the three best ways to handle focus depending on your needs.

### 1\. Check a Specific Element Immediately

If you already have a reference to your input element, you can check if it is focused using a strict equality comparison (`===`): [](https://stackoverflow.com/questions/36430561/how-can-i-check-if-my-element-id-has-focus)

javascript

```
const myInput = document.getElementById('my-input-id');

// Check if it is currently focused
if (document.activeElement === myInput) {
    console.log('The input field is focused!');
} else {
    console.log('The input field is NOT focused.');
}

```



### 2\. Check if _Any_ Input is Focused

If you want to know if the user is currently typing in _any_ input or textarea on the page, check the tag name of the active element: [](https://www.htmlgoodies.com/javascript/javascript-element-focus/)

javascript

```
const isAnyInputFocused = 
  document.activeElement.tagName === 'INPUT' || 
  document.activeElement.tagName === 'TEXTAREA';

if (isAnyInputFocused) {
    console.log('The user is typing in an input field.');
}

```



### 3\. Track Focus Fluently (Event Listeners)

If you need to trigger an action the exact moment an input gains or loses focus, add `focus` and `blur` event listeners to the element: [](https://github.com/alpinejs/alpine/discussions/1951)

javascript

```
const myInput = document.getElementById('my-input-id');

myInput.addEventListener('focus', () => {
    console.log('Input just gained focus');
});

myInput.addEventListener('blur', () => {
    console.log('Input just lost focus');
});

```



### 💡 Pro-Tip for CSS

If you only need to change the style of the input when it is focused, you do not need JavaScript at all. Use the **`:focus`** pseudo-class in your CSS:

css

```
input:focus {
    border-color: blue;
    background-color: #f0f8ff;
}

```



Are you trying to run this check **inside a framework** like React or Vue, or do you need to **prevent a specific behavior** (like closing a dropdown) when the input is active? Let me know so I can tailor the solution!

* [](https://stackoverflow.com/questions/36430561/how-can-i-check-if-my-element-id-has-focus)  
Stack Overflow  
How can I check if my Element ID has focus? - Stack Overflow  
activeElement with the element you want to check for focus. If they are the same, the element is focused; otherwise, it isn't.
* [](https://www.htmlgoodies.com/javascript/javascript-element-focus/)  
HTML Goodies  
How to Determine Which Element Has Focus in JavaScript | HTML Goodies  
Focusable Elements: Form controls (input, select, textarea, button), visible objects, anchors with href/tabindex, and elements wit...
* [](https://github.com/alpinejs/alpine/discussions/1951)  
GitHub  
How to check if input has focus? #1951 - alpinejs alpine  
In v3, only properties in x-data are reactive by default. You can do something like this instead …

Show all

