# how to listen for resize on react-use

To listen for resize events using the popular `react-use` library, you can <mark>choose between two main hooks depending on whether you are tracking the<span> </span><strong>entire browser window</strong><span> </span>or a<span> </span><strong>specific DOM element</strong></mark>.

### 1. Tracking the Browser Window (`useWindowSize`)

If you want your component to track and react to changes in the overall viewport size, use the **`useWindowSize`** hook. It automatically handles attaching and cleaning up the window event listener under the hood. [link](https://usehooks.com/usewindowsize)

tsx

```
import { useWindowSize } from 'react-use';

function WindowResizeDemo() {
  // Automatically updates whenever the browser window is resized
  const { width, height } = useWindowSize();

  return (
    <div>
      <h3>Window Dimensions</h3>
      <p>Width: {width}px</p>
      <p>Height: {height}px</p>
    </div>
  );
}
```

Use code with caution.

### 2. Tracking a Specific HTML Element (`useMeasure` or `useResizeObserver`)

If you need to listen for when a specific element resizes (for example, a responsive sidebar, text area, or a card container), standard window event listeners won't work perfectly. Instead, `react-use` offers hooks built on top of the native **ResizeObserver API**: [link](https://reactuse.com/element/useresizeobserver/)

#### Option A: `useMeasure` (Recommended for simple layout metrics)

`useMeasure` provides an easy-to-use ref and updates whenever the element's layout changes. [link](https://reactuse.com/element/useresizeobserver/)

tsx

```
import { useRef } from 'react';
import { useMeasure } from 'react-use';

function ElementResizeDemo() {
  // useMeasure provides a ref to attach to your element and the live dimensions
  const [ref, { x, y, width, height, top, right, bottom, left }] = useMeasure<HTMLDivElement>();

  return (
    <div
      ref={ref}
      style={{ width: '50%', resize: 'both', overflow: 'auto', border: '1px solid black' }}
    >
      <h3>Resize this box using the corner handle</h3>
      <p>Element Width: {width}px</p>
      <p>Element Height: {height}px</p>
    </div>
  );
}
```

Use code with caution.

#### Option B: `useResizeObserver` (Best for running custom callback logic)

If you want to execute a specific function or callback when an element resizes rather than just extracting state, use **`useResizeObserver`**. [link](https://reactuse.com/element/useresizeobserver/)

tsx

```
import { useRef } from 'react';
import { useResizeObserver } from 'react-use';

function CustomCallbackDemo() {
  const elementRef = useRef<HTMLDivElement>(null);

  useResizeObserver(elementRef, (entries) => {
    for (let entry of entries) {
      const { width, height } = entry.contentRect;
      console.log(`Element resized to ${width}x${height}`);
      // Perform your custom calculations or conditional logic here
    }
  });

  return (
    <div ref={elementRef} style={{ border: '1px solid blue' }}>
      Monitoring this element's size in the console...
    </div>
  );
}
```

Use code with caution.

Would you like to see how to **debounce or throttle** these resize updates to prevent performance lag, or are you looking to conditionally trigger **responsive UI breakpoints**?

- [link](https://reactuse.com/element/useresizeobserver/)\
  ReactUse\
  useResizeObserver – Element Hook Usage & Examples\
  useResizeObserver wraps the native ResizeObserver API to watch for size changes on a DOM element. It invokes a callback with the f...
- [link](https://usehooks.com/usewindowsize)\
  useHooks\
  useWindowSize React Hook\
  The useWindowSize hook is a useful for retrieving and tracking the dimensions of the browser window within a React component.
- [link](https://www.youtube.com/watch?v=xVvb3qddCVQ)\
  YouTube·Daily Tuition\
  What is Resize Observer? Where you can use it?\
  Jan 17, 2022 — The Resize Observer API addresses the issue of dynamically resizing HTML elements in response to user input, It works by observing...

