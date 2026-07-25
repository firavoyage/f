# overlay or push sidebar in css

July 21, 2026

<mark><span>An<span> </span></span><strong>overlay sidebar</strong><span> </span>sits on top of the main webpage content using absolute or fixed positioning, while a<span> </span><strong>push sidebar</strong><span> </span>physically shifts the main content to the side when it opens</mark>.

Here is how to build both patterns using clean HTML and modern CSS.

***

### Option 1: Overlay Sidebar (Slides over content)

This method keeps the main layout fixed in place. The sidebar slides over the top of your text and media, which is the preferred choice for mobile screens.

html

```
<!-- HTML Structure -->
<div class="sidebar" id="sidebar">Sidebar Content</div>
<div class="main-content">
  <button onclick="toggleSidebar()">Toggle Menu</button>
  <p>Main website content goes here...</p>
</div>
```

Use code with caution.

css

```
/* CSS Styling */
.sidebar {
  position: fixed;       /* Pins it over the layout */
  top: 0;
  left: -250px;          /* Hidden offscreen by default */
  width: 250px;
  height: 100vh;
  z-index: 1000;         /* Keeps it on top of other content */
  background: #333;
  transition: transform 0.3s ease;
}

/* Add this class via JS to open */
.sidebar.open {
  transform: translateX(250px); /* Slides into view */
}
```

Use code with caution.

***

### Option 2: Push Sidebar (Shifts main content)

This method moves both the sidebar and the main content simultaneously. It provides an app-like feel and is ideal for desktop dashboards where you want everything visible.

html

```
<!-- HTML Structure -->
<div class="wrapper" id="layoutWrapper">
  <div class="sidebar">Sidebar Content</div>
  <div class="main-content">
    <button onclick="toggleSidebar()">Toggle Menu</button>
    <p>Main website content goes here...</p>
  </div>
</div>
```

Use code with caution.

css

```
/* CSS Styling */
.wrapper {
  display: flex;
  width: calc(100% + 250px); /* Canvas accommodates both areas */
  margin-left: -250px;       /* Conceals sidebar offscreen */
  transition: transform 0.3s ease;
}

/* Add this class to the wrapper via JS to open */
.wrapper.open {
  transform: translateX(250px); /* Shifts everything right */
}

.sidebar {
  width: 250px;
  height: 100vh;
  background: #333;
}

.main-content {
  width: 100vw;              /* Keeps content exactly screen-wide */
  height: 100vh;
}
```

Use code with caution.

***

### The JavaScript Toggle

Both layouts require a minimal snippet of JavaScript to toggle the `.open` class.

javascript

```
function toggleSidebar() {
  // For Overlay pattern:
  document.getElementById('sidebar').classList.toggle('open');

  // For Push pattern:
  // document.getElementById('layoutWrapper').classList.toggle('open');
}
```

Use code with caution.

If you want to make your project fully adaptive, you can easily combine these methods. You can utilize a CSS `@media` query to apply the **overlay style on small screens** and the **push style on desktop viewports**. [link](https://www.youtube.com/watch?v=fIR3isyFV8s\&t=183)

To help optimize this for your project, let me know:

- Are you building a **mobile-first** or a **desktop-first** layout?

- Do you want to include a dim, semi-transparent **background backdrop** when it opens?

- [link](https://stackoverflow.com/questions/41878577/how-would-i-push-content-without-overlapping-using-sidebar-menu)\
  How would I push content without overlapping using sidebar ...\
  I have looked over the site and found that he is using class='img-responsive' on all the images. And also he is using bootstrap gr...\
  Stack Overflow

- [link](https://codefronts.com/navigation/css-side-menu/)\
  17 CSS Side Menu Designs — Free Live Demos - CodeFronts\
  Three elements, one CSS rule pair, infinite variations. \* Off-canvas overlay (Demo #01, #02, #13) — the drawer slides in OVER the ...\
  CodeFronts

- [link](https://www.youtube.com/watch?v=fIR3isyFV8s\&t=183)\
  How To Create An Expandable Sidebar\
  now the top margin on the last item works as expected. let's add some presentational styles for hover and active states including ...\
  3m\
  YouTube·Optimistic Web

Show all

# 