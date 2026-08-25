## how to order css props

To order CSS properties within a declaration block, you should <mark>follow either the<span> </span><strong>"Outside-In" Grouped approach</strong><span> </span>or the<span> </span><strong>Alphabetical approach</strong></mark>, as CSS does not enforce a strict native property order. [link](https://css-tricks.com/poll-results-how-do-you-order-your-css-properties/)

### 1. Grouped by Type (Outside-In / Concentric)

This is the most popular method used by major style guides (like Bootstrap). It follows a logical flow from the structural layout down to cosmetics and interactive behaviors. [link](https://css-tricks.com/poll-results-how-do-you-order-your-css-properties/)

- **Layout & Positioning**: Controls where the element sits on the page (`position`, `display`, `top`, `z-index`, `flex`, `grid`).
- **Box Model**: Controls the structural size of the element itself (`width`, `height`, `margin`, `padding`, `border`).
- **Typography**: Sets how the text inside looks (`font-size`, `font-family`, `line-height`, `text-align`, `color`).
- **Visuals & Cosmetics**: Applies decorative details (`background`, `border-radius`, `box-shadow`, `opacity`).
- **Misc & Transitions**: Handles animations and user interactions (`transition`, `transform`, `cursor`). [link](https://www.matuzo.at/blog/ordering-css-properties)

css

```
.card {
  /* 1. Layout & Positioning */
  position: relative;
  display: flex;
  justify-content: center;

  /* 2. Box Model */
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;

  /* 3. Typography */
  font-family: sans-serif;
  font-size: 1.2rem;
  line-height: 1.5;

  /* 4. Visuals & Cosmetics */
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  /* 5. Misc & Transitions */
  cursor: pointer;
  transition: transform 0.2s ease;
}
```

Use code with caution.

### 2. Alphabetical Order (ABCSS)

This approach completely eliminates guesswork and is favored by companies like Google. It is highly predictable and very easy to enforce via linters or text editor sorting tools, though it does separate related properties like `width` and `height`. [link](https://stackoverflow.com/questions/19093689/what-order-should-you-put-css-properties-in)

css

```
.card {
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  display: flex;
  font-family: sans-serif;
  font-size: 1.2rem;
  justify-content: center;
  line-height: 1.5;
  margin: 0 auto;
  max-width: 400px;
  padding: 20px;
  position: relative;
  transition: transform 0.2s ease;
  width: 100%;
}
```

Use code with caution.

### 3. Let Automation Handle It (Best Practice)

Manually sorting properties is tedious and prone to human error. Most modern teams use **Stylelint**, a CSS linting tool, to format code automatically on save. [link](https://www.reddit.com/r/css/comments/1m4gciq/an%5Forder%5Fsystem%5Ffor%5Fwriting%5Fcss%5Fproperties/)

- **Stylelint**: Install the stylelint-order plugin to strictly enforce either alphabetical or a custom grouped order.
- **Prettier**: A code formatter that can sort your CSS properties automatically if configured with community plugins.
- **VS Code**: You can highlight your CSS properties, open the Command Palette (`Ctrl+Shift+P` or `Cmd+Shift+P`), and type **"Sort Lines Ascending"** to instantly alphabetize them. [link](https://www.youtube.com/watch?v=3Y03OSNw6zo)

### Important Architectural Cascading Rules

While the aesthetic order inside a block is up to you, the cascading order of your code dictates how styles render: [link](https://stackoverflow.com/questions/13078431/is-there-a-specific-order-for-css-properties)

- **Shorthands First**: Always write a shorthand property _before_ its specific longhand override. For example, put `background: red;` _above_ `background-image: url();`, otherwise the shorthand will wipe out the image. [link](https://stackoverflow.com/questions/13078431/is-there-a-specific-order-for-css-properties)
- **The Last One Wins**: If the exact same property is defined twice inside a block or further down the stylesheet with equal specificity, the last one written takes precedence. [link](https://stackoverflow.com/questions/13078431/is-there-a-specific-order-for-css-properties)

If you are looking to control the visual placement of layout items using the flexbox or grid container properties rather than sorting your code text, watch this quick guide on how the CSS layout engine renders those elements:

5:33

[link](https://www.youtube.com/watch?v=oj8hD8FX0mI)

CSS order made easy

10 months ago

YouTube · Code With Indra

If you are setting up code conventions for a project, tell me:

- Are you writing **pure CSS**, **SCSS/Sass**, or using a framework like **Tailwind**?
- Are you looking for a **Stylelint configuration template** you can copy and paste?
- Are you working **alone** or with a **team**?

25 sites

- [link](https://www.matuzo.at/blog/ordering-css-properties)\
  Ordering CSS properties - Manuel Matuzovic\
  Jan 4, 2021 — Here's an example of an approach to ordering CSS properties: \* \*\*Box model\*\* \* Width \* Height \* Min-/max-width \* Min-/max-height \*\
  Manuel Matuzović
- [link](https://css-tricks.com/poll-results-how-do-you-order-your-css-properties/)\
  Poll Results: How do you order your CSS properties?\
  Aug 5, 2012 — The most popular way to order CSS properties is by type. In a poll, the order was: \* \*\*Grouped by type\*\* 45% \* \*\*Randomly\*\* 39% \* ...\
  CSS-Tricks
- [link](https://dev.to/thekashey/happy-potter-and-the-order-of-css-5ec)\
  Harry Potter and the Order of CSS - DEV Community\
  Mar 25, 2019 — The ordering principle is known as "Outside-in": \* Layout Properties (position, float, clear, display) \* Box Model Properties (wid...\
  DEV Community

Show all

## why typography before visuals, what if after

Placing typography before visuals follows the **"outside-in" logical reading order**, but reversing them does not break your website. CSS reads both properties at the same time when rendering.

The choice between these two approaches depends on how you prefer to read your code.

### Why Typography Before Visuals?

This setup follows a logical flow from structural layout down to internal content details.

- **Content-first mindset**: Text is the most critical element of almost any webpage. Styling the typography first prioritizes the core content.
- **Size dependency**: Font size, line height, and font family change the physical size of an element. Visual details like backgrounds or box shadows simply wrap around that final text size.
- **Industry convention**: Major design systems and tools (like Bootstrap or WordPress Gutenberg) use this sequence in their official style guides.

### What If Visuals Are Placed First?

Placing visuals before typography is also a perfectly valid approach.

- **Box-first mindset**: You might prefer to define the "box" completely (its size, margins, background, and borders) before styling the text inside it.
- **Zero rendering impact**: Browser engines do not care about this order. A background color will look exactly the same whether it is written above or below the font size.

### The Single Rule That Actually Matters

You can choose either order, but you must avoid mixing shorthand and longhand properties incorrectly.

- **Shorthands must come first**: Always place a shorthand property (like `background`) **above** its specific longhand modifier (like `background-image`).
- **The risk**: If you write `background-image: url('pattern.png');` and then put `background: blue;` beneath it, the shorthand will completely erase your image.

If you are setting up guidelines for a project, tell me:

- Are you writing styles in **pure CSS**, **SCSS/Sass**, or using a utility framework like **Tailwind**?

- Do you want a **Stylelint configuration template** to automatically enforce your preferred layout choice?

- Are you working on this project **alone** or with a **dev team**?

