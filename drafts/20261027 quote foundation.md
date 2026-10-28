# how to build static site via react

To build a static site with React, you have two primary paths: using a **modern framework** (recommended for performance and features) or exporting a **pure client-side single-page application (SPA)**. [](https://react.dev/learn/creating-a-react-app)

Here are the best ways to build a static site using React, ranked from the most popular industry standards to lightweight alternatives:

---

### Method 1: Using Next.js (The Modern Standard)

Next.js is currently the most popular React framework for **Static Site Generation (SSG)**. It pre-renders pages into static HTML and CSS files at build time. [](https://crystallize.com/blog/react-static-site-generators)

1. **Create the project:**  
bash  
```  
npx create-next-app@latest my-static-site  
cd my-static-site  
```  

2. **Configure Static Export:** Open `next.config.mjs` (or `.js`) and add the `output: 'export'` option:  
javascript  
```  
/** @type {import('Next').NextConfig} */  
const nextConfig = {  
  output: 'export', // Tells Next.js to generate static HTML/CSS/JS  
};  
export default nextConfig;  
```  

3. **Build the site:**  
bash  
```  
npm run build  
```  
  
This will output a standalone `out` folder containing pure static assets that you can host anywhere.

AI can make mistakes, so double-check responses 

* [](https://crystallize.com/blog/react-static-site-generators)  
crystallize.com  
React-based Static Site Generators in 2025  
Next js: a Versatile React Framework Next. js is a versatile React framework for building static sites and dynamic web application...
* [](https://react.dev/learn/creating-a-react-app)  
React  
Creating a React App  
All the frameworks on this page support client-side rendering (CSR), single-page apps (SPA), and static-site generation (SSG). The...
* [](https://www.youtube.com/shorts/xS3TsZRozbU)  
YouTube·Cosden Solutions  
Static Site Generation in React  
May 27, 2024 — the server that is going to build the initial HTML at build time that means whenever you're running. HTML is going to get sent dir...  
0:56

# how to build static site via react wo next

To build a static site using **React without Next.js**, you have two main approaches depending on whether you want a **Single Page Application (SPA)** that runs entirely in the browser, or true **Static Site Generation (SSG)** where individual HTML files are pre-built for every route.

Here is how to achieve both using modern tools.

---

### Option 1: The Modern SPA Approach (Vite + React Router)

This is the easiest and most popular way to build React apps without Next.js. It creates a single `index.html` file that loads a JavaScript bundle.

# how to build static site via react wo next

To build a static site using **React without Next.js**, you have three main paths depending on your project's needs: use a modern alternative framework, utilize standard build tools like Vite to create a Single Page Application (SPA), or use React's built-in server DOM utilities to compile your markup into true pre-rendered HTML files.

---

### Option 1: Use a Modern Static Framework (Astro or Gatsby)

If you want **true Static Site Generation (SSG)** where every page compiles into an individual, SEO-friendly HTML file at build time, you should use an alternative framework designed for this.

* **Astro:** This is the most popular, modern choice for static sites. It lets you write UI components using React but ships **zero JavaScript to the client by default**, injecting it only when a component needs interactivity (a process called hydration).
* **Gatsby:** A classic React-based static site generator. It compiles your entire React application into pre-rendered static HTML files. [](https://dev.to/bholmesdev/before-building-your-next-static-site-with-react-consider-this-2b60)

---

### Option 2: Build a Single Page Application (SPA) with Vite

If your goal is simply to deploy a static bundle of files to a CDN (like Netlify, Vercel, or GitHub Pages) without needing a traditional server, you can create a standard Client-Side Rendered (CSR) SPA.

While it technically ships a single boilerplate `index.html` file that relies on JavaScript to render pages on the client side, the output is entirely static.

1. **Scaffold the project** using Vite:  
bash  
```  
npm create vite@latest my-static-site -- --template react  
cd my-static-site  
npm install  
```  

2. **Add a client-side router** like React Router to manage multiple pages:  
bash  
```  
npm install react-router-dom  
```  

3. **Build the site:**  
bash  
```  
npm run build  
```  
  
This generates a `dist/` folder containing static HTML, CSS, and JS assets that can be hosted anywhere. [](https://medium.com/codetodeploy/next-js-static-export-and-dynamic-routing-optimization-045560a7408d)

---

### Option 3: Roll Your Own SSG using `react-dom/server`

If you want to convert React components into literal `.html` files at build time without any heavy framework overhead, you can create a custom build script using Node.js and React’s `renderToString` or `renderToStaticMarkup` utilities. [](https://dev.to/ndesmic/building-a-react-static-site-generator-in-20-lines-of-code-4-dependencies-and-no-transpilers-486i)

1. **Install the dependencies:**  
bash  
```  
npm install react react-dom  
```  

2. **Create a build script** (e.g., `build.js`):  
javascript  
```  
import React from 'react';  
import ReactDOMServer from 'react-dom/server';  
import fs from 'fs';  
// 1. Define a React component  
function MyPage() {  
  return (  
    <html>  
      <head><title>My Static React Site</title></head>  
      <body>  
        <h1>Hello from pure React static generation!</h1>  
      </body>  
    </html>  
  );  
}  
// 2. Render the component to an HTML string  
const htmlOutput = ReactDOMServer.renderToStaticMarkup(<MyPage />);  
// 3. Write it to a file  
fs.writeFileSync('./dist/index.html', htmlOutput);  
console.log('Static page generated successfully!');  
```  

3. **Execute the script** via Node (`node build.js`) during your deployment pipeline to output raw static HTML files ready for hosting.

---

### Comparison Matrix

| Approach           | True Static HTML?        | Good for SEO? | Ideal For                                                     |
| ------------------ | ------------------------ | ------------- | ------------------------------------------------------------- |
| **Astro / Gatsby** | **Yes**                  | **Excellent** | Blogs, portfolios, marketing sites, content-heavy sites.      |
| **Vite SPA**       | **No** (Client-rendered) | **Moderate**  | Dashboards, web apps, tools behind a login screen.            |
| **Custom Script**  | **Yes**                  | **Excellent** | Ultra-lightweight landing pages with zero framework overhead. |

To help narrow down the best setup, tell me:

* What is the **primary purpose** of the website (e.g., a blog, marketing portfolio, or a dynamic web application)?
* Is **SEO (Search Engine Optimization)** a critical priority for this project?

* [](https://dev.to/bholmesdev/before-building-your-next-static-site-with-react-consider-this-2b60)  
DEV Community  
Before building your next static site with React, consider this  
hydration basically lets us write a dynamic, state-driven webpage, but also render as much of the page ahead-of-time as possible u...
* [](https://stackoverflow.com/questions/47001555/how-can-i-use-reactjs-as-a-static-website)  
Stack Overflow  
How can I use ReactJS as a static website? - Stack Overflow  
It's a static site generator for React. Run npm run build or yarn build and see the output in the build folder. It generates stati...
* [](https://medium.com/codetodeploy/next-js-static-export-and-dynamic-routing-optimization-045560a7408d)  
Medium  
Next.js Static Export and Dynamic Routing Optimization  
Nov 20, 2025 — Let's create a simple static site with a homepage and an about page. Run npm run build to generate the out/ directory with static ...

Show all

# how to build a single static react page by injecting data as json

To build a single static React page that dynamically populates its content from a JSON payload, you have two primary architectural approaches depending on your goals:

1. **The Build-Time Approach (Recommended for Static Sites/SEO):** Import the JSON directly into your React components. When you run your build script (`npm run build`), the build tool (like Vite or Webpack) bakes the data directly into your static HTML/JS assets.
2. **The Client-Side Approach (For runtime updates):** Keep the JSON in your `public/` folder or fetched from an external source, allowing you to update the data _without_ recompiling your React source code.

Below is a complete, step-by-step guide to achieving both approaches using a modern **React + Vite** setup.

---

### Method 1: The Build-Time Approach (Simplest)

This method imports JSON like a standard JavaScript module. The output is a highly optimized, fully static page. [](https://dev.to/bholmesdev/before-building-your-next-static-site-with-react-consider-this-2b60)

#### 1\. Define Your JSON Data

Create a file named `data.json` inside your project's `src/` directory.

json

```
{
  "title": "My Static Portfolio",
  "description": "Welcome to my fast, data-driven single page app.",
  "skills": ["React", "Vite", "JavaScript", "JSON Injection"]
}

```



#### 2\. Inject and Map the Data in Your Component

In your main component (e.g., `App.jsx`), import the JSON file directly. You don't need `JSON.parse()`; modern bundlers automatically parse imported JSON files into JavaScript objects. [](https://www.linkedin.com/pulse/rendering-react-page-based-json-structure-mohideen-risvi-y)

jsx

```
import React from 'react';
// 1. Directly import the JSON data
import pageData from './data.json'; 

function App() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      {/* 2. Inject individual string fields */}
      <h1>{pageData.title}</h1>
      <p>{pageData.description}</p>
      
      <h3>Skills Matrix</h3>
      <ul>
        {/* 3. Map over arrays to generate list elements dynamically */}
        {pageData.skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;

```



#### 3\. Export as a Static Page

Run your build command in your terminal:

bash

```
npm run build

```



This generates a `dist/` folder containing a fully optimized, production-ready static page where the data is pre-compiled.

---

### Method 2: The Client-Side Approach (Decoupled Data)

If you want to swap out the JSON data file on your web server independently without triggering a brand new code compilation, store the JSON in the `public/` directory and fetch it at runtime. [](https://stackoverflow.com/questions/72969913/how-to-add-dynamic-json-in-a-build-in-react-js)

#### 1\. Place the JSON in the `public` Directory

Save your `data.json` file inside the `public/` folder of your project root.  
_(Anything in `public/` gets served raw at the root domain URL, e.g., `https://example.com`)_.

#### 2\. Fetch the Data into State

Use React's `useState` and `useEffect` hooks to fetch the file asynchronously when the page loads. [](https://avelaga.medium.com/how-to-dynamically-render-react-pages-and-content-from-json-eac7e83a4c22)

jsx

```
import React, { useState, useEffect } from 'react';

function App() {
  const [pageData, setPageData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch the asset relative to the root URL
    fetch('/data.json')
      .then((response) => response.json())
      .then((data) => {
        setPageData(data);
        setLoading(false);
      })
      .catch((error) => console.error("Error loading JSON data:", error));
  }, []);

  if (loading) return <div>Loading page architecture...</div>;

  return (
    <div style={{ padding: '2rem' }}>
      <h1>{pageData.title}</h1>
      <p>{pageData.description}</p>
    </div>
  );
}

export default App;

```



---

### Architectural Design Matrix

| Feature            | Method 1: Build-Time Import                | Method 2: Client-Side Fetch                       |
| ------------------ | ------------------------------------------ | ------------------------------------------------- |
| **Data Location**  | src/data.json                              | public/data.json                                  |
| **Update Process** | Must re-run npm run build                  | Swap out the JSON file on the hosting server      |
| **Page Speed**     | Instant loading (no extra server requests) | Tiny loading delay while file is grabbed          |
| **Best Used For**  | Portfolios, Landing Pages, Documentation   | Configuration files, multi-tenant UI layout swaps |

Would you like to explore **Static Site Generation (SSG)** frameworks like Next.js or Astro to compile this into a zero-JavaScript pure HTML file, or do you need help **structuring the JSON data schemas** for more complex layouts?

* [](https://mgalen.medium.com/react-data-visualization-project-with-json-data-fetched-from-a-server-44205ffbf33)  
Medium·Michaelpgalen  
React Data Visualization Project with JSON Data Fetched from ...  
First, I had to use the useState and useEffect hooks right away to fetch the JSON data from my local server. Press enter or click ...
* [](https://dev.to/bholmesdev/before-building-your-next-static-site-with-react-consider-this-2b60)  
DEV Community  
Before building your next static site with React, consider this  
Jul 7, 2020 — We can turn JSON objects into static HTML with a one-line script. We can break up our layout into multiple files using imports. ✓ ...
* [](https://avelaga.medium.com/how-to-dynamically-render-react-pages-and-content-from-json-eac7e83a4c22)  
Medium  
Medium  
Apr 14, 2021 — \`useEffect\` to match the URL parameter to the corresponding JSON object, updating state to dynamically render the specific text an...

Show all

# ubuntu shell command to check availability of a specific port

The fastest and most modern command to check if a specific port is available (not in use) on Ubuntu is **`ss`**, which has replaced the obsolete `netstat` utility. [](https://askubuntu.com/questions/9368/how-can-i-see-what-ports-are-open-on-my-machine)

You can check a specific port by running the following command in your terminal (replace `8080` with your target port): [](https://stackoverflow.com/questions/21897119/how-do-i-determine-if-a-port-is-in-use-e-g-via-netstat)

bash

```
sudo ss -tulpn | grep :8080

```



* **If the command returns no output:** The port is **available** and free to use.
* **If it returns a line of text:** The port is **occupied**.

---

### Alternative Methods

Depending on what utilities you have installed or your specific workflow, you can also use these common alternatives:

#### 1\. Using `lsof` (Best for finding the responsible process)

The `lsof` (List Open Files) command targets a specific port directly and will tell you exactly what application is using it if it isn't available: [](https://www.tecmint.com/find-out-which-process-listening-on-a-particular-port/)

bash

```
sudo lsof -i :8080

```



* **Available:** Returns nothing.
* **Occupied:** Returns a detailed table showing the application name (`COMMAND`), the Process ID (`PID`), and the user. [](https://www.akamai.com/cloud/guides/check-linux-ports-in-use/)

#### 2\. Using `netcat` (Best for checking remote servers)

If you want to check if a port is open/accessible on another machine (or even your own via localhost) from the outside network, use `nc`: [](https://www.youtube.com/watch?v=EGREw7MveH0&t=62)

bash

```
nc -zv localhost 8080

```



* **Available:** Will output `Connection refused` (meaning nothing is listening on it).
* **Occupied:** Will output `Connection to localhost 8080 port [tcp/*] succeeded!`. [](https://www.youtube.com/watch?v=80m9OQuQfLs&t=132)

### Command Flag Breakdown for `ss -tulpn`

* **`-t`**: Displays **T**CP sockets.
* **`-u`**: Displays **U**DP sockets.
* **`-l`**: Shows only **L**istening sockets (active applications waiting for a connection).
* **`-p`**: Shows the **P**rocess name/PID using the socket.
* **`-n`**: Shows **N**umeric port numbers instead of resolving them to names (e.g., `80` instead of `http`). [](https://superuser.com/questions/529830/get-a-list-of-open-ports-in-linux)

Are you checking this port to **troubleshoot an application that won't start**, or are you trying to **verify if a firewall is blocking external access** to it?

* [](https://askubuntu.com/questions/9368/how-can-i-see-what-ports-are-open-on-my-machine)  
Ask Ubuntu  
How can I see what ports are open on my machine?  
Description ss = another utility to investigate sockets -l, --listening Display only listening sockets (these are omitted by defau...
* [](https://stackoverflow.com/questions/21897119/how-do-i-determine-if-a-port-is-in-use-e-g-via-netstat)  
Stack Overflow  
How do I determine if a port is in use, e.g. via netstat?  
So in a script, you could use ! to negate the value to test for availability: if ! -i:8080 then echo 8080 is free else echo 8080 i...
* [](https://superuser.com/questions/529830/get-a-list-of-open-ports-in-linux)  
Super User  
Get a list of Open Ports in Linux - Super User  
Jan 8, 2013 — services running on your system on tcp and udp ports -u = udp ports; -p = name of the program. This only shows which ports on your...

Show all

# npm libs to get selection on web

Depending on whether you mean **text/range selection** (like a user highlighting text with their mouse) or **visual drag-to-select** (like selecting items on a desktop grid), the right tool for the job changes.

Here are the best npm libraries grouped by what you are trying to build:

### 1\. Visual Drag-to-Select (Mouse Box Selection)

If you want to create a feature where users can click and drag a visual bounding box to highlight or select multiple grid items, files, or elements:

* **[@simonwep/selection-js](https://www.npmjs.com/package/@simonwep/selection-js)**: The industry standard for visual selection. It is tiny, completely dependency-free, supports touch devices, and is highly performant for complex grids or lists. [](https://www.npmjs.com/package/@simonwep/selection-js)
* **react-selectable-fast**: If you are using React, this package optimizes performance by ensuring components inside the drag-selection box don't trigger massive re-renders while dragging.

### 2\. Text Selection & Highlighting

If you want to track, manipulate, or save what text a user has physically selected with their cursor:

* **[web-highlighter](https://npmjs.com/package/web-highlighter)**: An excellent library if you are building a tool like Kindle or Medium where users highlight sentences. It easily handles converting standard browser `window.getSelection()` ranges into a minimal JSON payload you can save to a backend database and render back later. [](https://npmjs.com/package/web-highlighter)
* **[@alidev/text-select](https://www.npmjs.com/package/@alidev/text-select)**: A minimal (\~1 KB) utility meant primarily to help you select whole HTML elements or exact string segments on a web page programmatically. [](https://www.npmjs.com/package/@alidev/text-select)

### 3\. Native Browser Alternative (No NPM Package Needed)

If you just want to grab the string a user has currently highlighted on your page, you can actually use the native Web API without any external dependencies at all:

javascript

```
// Get the highlighted text string
const selectedText = window.getSelection().toString();

// Get the actual DOM data and coordinates of the selection
const selection = window.getSelection();
if (!selection.isCollapsed) {
    const range = selection.getRangeAt(0);
    console.log(range.getBoundingClientRect()); // Gets screen position coordinates
}

```



To give you the exact implementation details, let me know:

* Are you looking to create a **visual drag-and-select box** or capture **highlighted text**?
* What frontend **framework** (React, Vue, vanilla JS) are you using?

* [](https://npmjs.com/package/web-highlighter)  
NPM  
web-highlighter  
Only two lines, highlighted when texts are selected. retrieve data from backend, then highlight it on the page … listen for highli...
* [](https://www.npmjs.com/package/@simonwep/selection-js)  
NPM  
simonwep/selection-js  
@simonwep/selection-js Via yarn: $ yarn. Include via jsdelivr.net: using ES6 modules: basic styles to make your selection-area vis...
* [](https://www.npmjs.com/package/@alidev/text-select)  
NPM  
alidev/text-select - NPM  
text-select is a tiny library to select text on web page. text-select can not only select text of HTML elements but you can also s...

# how to use npm mousetrap

**Mousetrap** is a lightweight JavaScript library used to easily bind keyboard shortcuts, combinations, and key sequences to your web applications. [](https://ourcodeworld.com/articles/read/394/the-right-way-to-add-keyboard-shortcuts-in-javascript-with-mousetrap)

Here is a step-by-step guide on how to install and use it in your project:

### 1\. Installation

Install the package into your project using **npm**:

bash

```
npm install mousetrap

```



### 2\. Basic Setup & Usage

Import the library into your JavaScript or TypeScript file and start binding keys. By default, bindings apply globally to the `document`. [](https://craig.is/killing/mice)

javascript

```
import Mousetrap from 'mousetrap';

// 1. Single key binding
Mousetrap.bind('4', () => { 
    console.log('The 4 key was pressed'); 
});

// 2. Key combinations (using '+' sign)
Mousetrap.bind('ctrl+shift+k', (e) => {
    // Prevent the default browser behavior if needed
    e.preventDefault(); 
    console.log('Trigged a combination!');
});

// 3. Sequential keys (Konami code style, separated by spaces)
Mousetrap.bind('g a', () => {
    console.log('You pressed "g", then "a"');
});

```



### 3\. Advanced Features

* **Cross-Platform Shortcuts (`mod`):** Instead of writing separate bindings for Mac (`command`) and Windows/Linux (`ctrl`), use the `mod` keyword. Mousetrap handles the translation automatically: [](https://medium.com/@345490675/mousetrap-a-javascript-library-for-creating-an-efficient-keyboard-shortcut-experience-dfe2dbcd3a56)  
javascript  
```  
Mousetrap.bind('mod+s', (e) => {  
    e.preventDefault();  
    console.log('Saved! (Triggered by Ctrl+S or Cmd+S)');  
});  
```  

* **Binding to Specific Elements:** If you don't want global shortcuts, you can restrict Mousetrap to a specific element (like a text form or a dashboard widget): [](https://stackoverflow.com/questions/16169645/using-mousetrap-on-a-specific-element)  
javascript  
```  
const formElement = document.querySelector('.my-form');  
// Apply a shortcut only when focused inside this form  
Mousetrap(formElement).bind('enter', () => {  
    console.log('Submitted form via Enter key');  
});  
```  

* **Unbinding Keys:** To clean up or disable a shortcut later, use `unbind`:  
javascript  
```  
Mousetrap.unbind('ctrl+shift+k');  
```  


### 4\. Working inside Forms (`input`, `textarea`)

By default, Mousetrap **ignores** shortcuts triggered inside `input`, `select`, or `textarea` elements so it doesn't disrupt user typing.

If you _want_ your shortcuts to work inside form fields, add the class name `mousetrap` to those HTML elements: 

html

```
<textarea class="mousetrap">Typing here will still trigger shortcuts...</textarea>

```



Are you using this in a **vanilla JavaScript** project, or are you working within a framework like **React** or **Vue**? I can provide tailored implementation patterns (like custom React Hooks or lifecycle cleanups) depending on your tech stack.

* [](https://craig.is/killing/mice)  
craig.is  
Mousetrap - Keyboard shortcuts in Javascript - Craig Campbell  
By default all bindings are applied to document , but if you have a form that you wanted to apply specific events to you could do ...
* [](https://ourcodeworld.com/articles/read/394/the-right-way-to-add-keyboard-shortcuts-in-javascript-with-mousetrap)  
Our Code World  
The Right Way to add keyboard shortcuts in Javascript with ...  
1\. Download and install Mousetrap The source of MouseTrap is available on Github. download the distributable minified version here...
* [](https://stackoverflow.com/questions/16169645/using-mousetrap-on-a-specific-element)  
Stack Overflow  
Using mousetrap on a specific element?  
Mousetrap(element). bind('enter', You can also create a new instance of mousetrap to bind multiple things. var mousetrap = new Mou...

Show all

# npm libs for text selection on web

The best npm packages for handling web text selection depend on your exact use case, such as showing a "Medium-style" popup menu, highlighting text, or managing selections within a specific framework like React.

Here are the top npm libraries grouped by functionality:

### 1\. Selection Popups & Tooltips (Medium-style Menus)

If you want to show an action menu (like "Highlight", "Tweet", or "Copy") right above the user's selected text:

* **[react-text-selection-popover](https://www.npmjs.com/package/react-text-selection-popover)**: A popular React component that uses React portals to cleanly render a popover relative to the user's current text selection. [](https://www.npmjs.com/package/react-text-selection-popover)
* **use-text-selection**: A lightweight React hook that extracts the exact bounding box (`clientRect`) and state of a selection, making it easy to position custom UI components. [](https://www.npmjs.com/package/use-text-selection?activeTab=dependencies)
* **[selection-popup](https://npms.io/search?q=text-selection)**: A lightweight, framework-agnostic JavaScript utility designed specifically for building selection-triggered popup menus.

### 2\. Highlighting & Persistence

If your goal is to let users highlight passages and save those highlights for their next visit:

* **[web-highlighter](https://npmjs.com/package/web-highlighter)**: A powerful, zero-dependency library built specifically to replicate Medium's text highlighting. It handles complex DOM structures, applies customizable background styles, and allows you to serialize/deserialize highlights easily so they can be saved to a database and restored later. [](https://npmjs.com/package/web-highlighter)

### 3\. Programmatic & Utility Selection

If you need a utility to programmatically select specific pieces of text or substrings on a page:

* **[@alidev/text-select](https://github.com/ali-kamalizade/text-select)**: A tiny (\~1 KB), dependency-free TypeScript library built for selecting whole elements or specific substrings. It is highly useful for building custom copy-to-clipboard buttons or setting up text selections inside automated E2E testing environments (like TestCafe or Protractor). [](https://github.com/ali-kamalizade/text-select)

---

### 💡 Do you even need an npm package?

If you only need to **get** the text the user highlighted, vanilla JavaScript handles this perfectly with minimal code. You can listen for the native `selectionchange` event: [](https://www.youtube.com/watch?v=db-yKV1%5FEy4)

javascript

```
document.addEventListener('selectionchange', () => {
  const selectedText = window.getSelection().toString();
  console.log(selectedText); 
});

```



To help narrow down the best choice, could you tell me:

* What **framework** are you using (e.g., React, Vue, Vanilla JS)?
* What do you want to happen **after** the user selects the text (e.g., show a popup menu, highlight it permanently, or copy it)?

* [](https://npmjs.com/package/web-highlighter)  
NPM  
web-highlighter - NPM  
Jun 24, 2021 — A no-runtime dependency lib for text highlighting & persistence on any website … highlight texts on the website and save the highl...
* [](https://www.npmjs.com/package/react-text-selection-popover)  
NPM  
react-text-selection-popover - npm  
React component rendering a popover relative to current text selection using React portals. Installation: npm install --save react...
* [](https://www.npmjs.com/package/use-text-selection?activeTab=dependencies)  
NPM  
use-text-selection  
useTextSelection() // to constrain text selection events to an element // just add the element as a an argument like \`useTextSelec...

Show all

# how to use npm @alidev/text-select

The **`@alidev/text-select`** library is a lightweight, \~1 KB utility designed to programmatically **select text or text fragments on a web page**. It is highly flexible and works in both standard browser environments and modern frameworks like React, Angular, or TypeScript-based setups. [](https://www.npmjs.com/package/@alidev/text-select)

Here is how to install and use it in your project:

### 1\. Installation

Install the package via [npm](https://www.npmjs.com/package/@alidev/text-select):

bash

```
npm install @alidev/text-select

```



---

### 2\. Usage in NPM Projects (React, Angular, Vue, etc.)

You can import the functions directly from the package distribution folder. [](https://www.npmjs.com/package/@alidev/text-select)

#### Selecting an entire element's text:

javascript

```
import { selectElementText } from '@alidev/text-select/dist';

// Select all text inside an element with ID "intro-header"
const element = document.getElementById('intro-header');
selectElementText(element);

```



#### Selecting a specific substring / range (Advanced):

Unlike standard solutions, you can target specific parts of the text: [](https://www.npmjs.com/package/@alidev/text-select)

javascript

```
import { selectText } from '@alidev/text-select/dist';

const element = document.getElementById('paragraph');
// selectText(element, startOffset, endOffset)
selectText(element, 0, 10); // Selects the first 10 characters

```



---

### 3\. Usage Directly in the Browser (No Bundler)

If you are not using a framework, download the script from the `dist` folder and include it via a script tag: [](https://www.npmjs.com/package/@alidev/text-select)

html

```
<!-- Include the library -->
<script src="text-select.bundle.js"></script>

<script>
  // Access it via the global TextSelect object
  const element = document.getElementById('intro-header');
  TextSelect.selectElementText(element);
</script>

```



### Key Highlights

* **E2E Testing:** This library is highly useful in end-to-end testing frameworks like **Protractor** or **TestCafe** to trigger and simulate user text selections during tests.
* **TypeScript Support:** Out-of-the-box TypeScript types make it fully compatible with Angular and modern TS build setups. [](https://www.npmjs.com/package/@alidev/text-select)

Would you like assistance setting this up inside a specific framework like **React** (using refs) or implementing it for an **E2E automation test**?

* [](https://www.npmjs.com/package/@alidev/text-select)  
NPM  
alidev/text-select - NPM  
text-select can also be used in end-to-end tests (e.g. using Protractor or TestCafe) to select text during tests. Features Works i...

# how to use getselection in js

The **`window.getSelection()`** method in JavaScript returns a **`Selection`** object, which represents the range of text selected by a user or the current position of the text cursor. [](https://developer.mozilla.org/en-US/docs/Web/API/Window/getSelection)

### 1\. Get the Selected Text as a String

To grab the plain text that a user has highlighted on the screen, call `window.getSelection().toString()`. [](https://developer.mozilla.org/en-US/docs/Web/API/Window/getSelection)

javascript

```
// Get the highlighted text on the page
const selectedText = window.getSelection().toString();
console.log(selectedText); 

```



### 2\. Capture Selection on a User Event (Example)

Typically, you want to get the text right after a user finishes highlighting it. You can listen for the `mouseup` or `selectionchange` event. [](https://developer.mozilla.org/en-US/docs/Web/API/Document/getSelection)

javascript

```
document.addEventListener('mouseup', () => {
  const selection = window.getSelection();
  const text = selection.toString();

  if (text.length > 0) {
    console.log(`The user selected: "${text}"`);
  }
});

```



### 3\. Dig Deeper: Properties of the Selection Object

The `Selection` object contains metadata beyond just the text string: [](https://www.desarrollolibre.net/blog/javascript/window-get-selection-in-javascript-the-torment-of-text-selection)

* **`anchorNode` & `anchorOffset`**: Where the user _started_ selecting text.
* **`focusNode` & `focusOffset`**: Where the user _ended_ selecting text (where they let go of the mouse).
* **`isCollapsed`**: Returns `true` if no text is highlighted (it's just a blinking cursor caret). [](https://www.freecodecamp.org/news/use-the-javascript-selection-api-to-build-a-rich-text-editor/)

### 4\. Working with the HTML/DOM (Ranges)

If you want to modify, copy, or wrap the selected HTML structure (e.g., building a text editor), you can extract a `Range` object using `getRangeAt(0)`. [](https://developer.mozilla.org/en-US/docs/Web/API/Window/getSelection)

javascript

```
const selection = window.getSelection();

if (selection.rangeCount > 0) { // Check if a selection exists
  const range = selection.getRangeAt(0); // Get the 1st selected area
  
  // Example: Surround the highlighted text with a <span> to highlight it red
  const span = document.createElement('span');
  span.style.backgroundColor = 'red';
  
  range.surroundContents(span);
}

```



### ⚠️ A Quick Note on Form Inputs

`window.getSelection()` **does not work** on text inside standard HTML `<input>` or `<textarea>` tags in some major browsers like Firefox. To get selected text inside those elements, you should use the element's properties instead: [](https://developer.mozilla.org/en-US/docs/Web/API/Document/getSelection)

javascript

```
const textarea = document.getElementById('myTextarea');
const insideText = textarea.value.substring(textarea.selectionStart, textarea.selectionEnd);

```



For more advanced manipulation capabilities, check out the [MDN Web Docs on Selection API](https://developer.mozilla.org/en-US/docs/Web/API/Window/getSelection).

What are you trying to build with the selection tool? I can help you write the logic for:

* Creating a **"Click to Tweet" / pop-up menu** over selected text
* Building custom **bold/italic buttons** for a text editor
* **Highlighting and saving** user selections

* [](https://developer.mozilla.org/en-US/docs/Web/API/Window/getSelection)  
MDN Web Docs  
Window: getSelection() method - Web APIs | MDN  
getRangeAt(0); // do stuff with the range } when an object is passed to a function expecting a string … object appear to be a stri...
* [](https://developer.mozilla.org/en-US/docs/Web/API/Document/getSelection)  
MDN Web Docs  
Document: getSelection() method - Web APIs | MDN  
It is worth noting that currently getSelection() doesn't work on the content of elements in Firefox. HTMLInputElement. setSelectio...
* [](https://www.freecodecamp.org/news/use-the-javascript-selection-api-to-build-a-rich-text-editor/)  
freeCodeCamp  
How to Use the JavaScript Selection API: Build a Rich Text ...  
Sep 16, 2024 — getSelection() method is used to retrieve the current text selection on the webpage. It returns an Selection object, which represe...

Show all

# how to send requests on web in js

The modern and standard way to send web requests in JavaScript is by using the built-in **`fetch()` API**. It is built on Promises, making it clean and easy to use with modern `async/await` syntax. [](https://developer.mozilla.org/en-US/docs/Learn%5Fweb%5Fdevelopment/Core/Scripting/Network%5Frequests)

Here is how you can send both `GET` and `POST` requests.

---

### 1\. Sending a GET Request (Fetching Data)

A `GET` request retrieves data from a server. By default, `fetch()` performs a `GET` request. [](https://www.youtube.com/watch?v=aNDfsHQ5Gts&t=29)

javascript

```
async function getData() {
  try {
    // 1. Send the request
    const response = await fetch('https://example.com');
    
    // 2. Check if the response is successful (status 200-299)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    
    // 3. Parse the data as JSON
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Failed to fetch data:', error);
  }
}

getData();

```



### 2\. Sending a POST Request (Sending Data)

A `POST` request sends new data to the server (e.g., submitting a form or creating a new user). You need to provide an options object specifying the `method`, `headers`, and the `body`. [](https://www.freecodecamp.org/news/here-is-the-most-popular-ways-to-make-an-http-request-in-javascript-954ce8c95aaa/)

javascript

```
async function sendData() {
  const url = 'https://example.com';
  const userData = {
    name: 'Alex',
    email: 'alex@example.com'
  };

  try {
    const response = await fetch(url, {
      method: 'POST', // Specify the HTTP method
      headers: {
        'Content-Type': 'application/json' // Tell the server we are sending JSON data
      },
      body: JSON.stringify(userData) // Convert the JS object into a string payload
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const result = await response.json();
    console.log('Success:', result);
  } catch (error) {
    console.error('Error sending data:', error);
  }
}

sendData();

```



---

### Other Alternatives You Might See

* **Axios (Third-Party Library):** A highly popular external library. It automatically transforms data to JSON and has better built-in error handling, though it requires installation (`npm install axios`). [](https://dev.to/ayako%5Fyk/different-ways-to-make-http-requests-in-javascript-mc3)
* **`XMLHttpRequest` (Legacy):** The older, traditional way of making requests before `fetch()` existed. Avoid using this unless you are maintaining ancient legacy code bases. [](https://developer.mozilla.org/en-US/docs/Learn%5Fweb%5Fdevelopment/Core/Scripting/Network%5Frequests)

To give you the most relevant code, could you tell me:

* What **API endpoint or URL** are you trying to connect to?
* Do you need to include any specific authentication headers, like an **API Key or Bearer Token**?
* Are you sending special data like **file uploads or images**?

* [](https://developer.mozilla.org/en-US/docs/Learn%5Fweb%5Fdevelopment/Core/Scripting/Network%5Frequests)  
MDN Web Docs  
Making network requests with JavaScript - Learn web development | MDN  
JavaScript retrieves server data to update specific webpage sections asynchronously without reloading entire pages, improving perf...
* [](https://dev.to/ayako%5Fyk/different-ways-to-make-http-requests-in-javascript-mc3)  
DEV Community  
Different Ways to Make HTTP Requests in JavaScript  
Fetch API is a modern JavaScript method that replaces the older XMLHttpRequest . It provides a cleaner and more powerful interface...
* [](https://www.freecodecamp.org/news/here-is-the-most-popular-ways-to-make-an-http-request-in-javascript-954ce8c95aaa/)  
freeCodeCamp  
Here are the most popular ways to make an HTTP request in ...  
Ajax Ajax is the traditional way to make an asynchronous HTTP request. Data can be sent using the HTTP POST method and received us...

Show all

# npm libs to send requests on web in js

The most popular and effective **npm libraries to send HTTP requests** depend on whether you are working purely in the browser, in Node.js, or across both environments. [](https://blog.appsignal.com/2024/09/11/top-5-http-request-libraries-for-nodejs.html)

Before installing a third-party library, note that the **native Fetch API** is built into all modern browsers and Node.js (v18+), meaning you often do not need to install an npm package at all. [](https://stackoverflow.com/questions/61359918/making-http-requests-using-typescript-or-nodejs)

---

### 🌐 Cross-Platform (Browser & Node.js)

These libraries work seamlessly in both client-side web apps and backend servers. [](https://javascriptaicentric.medium.com/top-7-open-source-http-request-libraries-for-node-js-076124772161)

* **Axios:** The most widely used third-party HTTP client. It is promise-based, features automatic JSON data transformation, and supports request/response interceptors. [](https://dev.to/rohitkhokhar/top-5-npm-libraries-every-web-developer-should-know-ioc)
* **[Ky](https://www.npmjs.com/package/got):** A lightweight, elegant wrapper around the native Fetch API. It provides features like automatic retries, hooks, and a clean syntax for modern environments. [](https://blog.appsignal.com/2024/09/11/top-5-http-request-libraries-for-nodejs.html)
* **SuperAgent:** A mature, flexible, and chainable client library with a heavy emphasis on readability and stream handling. [](https://blog.appsignal.com/2024/09/11/top-5-http-request-libraries-for-nodejs.html)

### 💻 Node.js-Only (Backend)

If you are strictly writing backend code and want maximum performance, these options excel. [](https://blog.appsignal.com/2024/09/11/top-5-http-request-libraries-for-nodejs.html)

* **Got:** A powerful, human-friendly HTTP client built specifically for Node.js. It features native HTTP/2 support, complex retry mechanisms, and advanced caching. [](https://www.npmjs.com/package/got)
* **Undici:** A fast, low-overhead HTTP/1.1 client written from scratch for Node.js. It acts as the backbone powering Node's native fetch implementation.

---

### Direct Comparison

| Library          | Platform     | Automatic JSON?     | Key Advantage                                                 |
| ---------------- | ------------ | ------------------- | ------------------------------------------------------------- |
| **Native Fetch** | Both         | No (Manual .json()) | No installation or bundle bloat required.                     |
| **Axios**        | Both         | Yes                 | Robust interceptors and wide ecosystem support.               |
| **Ky**           | Both         | Yes                 | Tiny footprint built on modern Fetch standards.               |
| **Got**          | Node.js only | Yes                 | Native HTTP/2, RFC-compliant caching, and great retry limits. |

To help narrow down the best choice, could you tell me:

* Are you building a **frontend app** (React, Vue, vanilla JS), a **backend server**, or **both**?
* Do you need advanced features like **request interceptors**, **automatic retries**, or **file upload tracking**?

* [](https://blog.appsignal.com/2024/09/11/top-5-http-request-libraries-for-nodejs.html)  
AppSignal  
Top 5 HTTP Request Libraries for Node.js | AppSignal Blog  
Native Node.js. Most popular third-party client, browser/Node.js, retry/HTTP2 via plugins, configurable timeouts. native HTTP2, fi...
* [](https://javascriptaicentric.medium.com/top-7-open-source-http-request-libraries-for-node-js-076124772161)  
Medium·Ravi Sharma  
Top 7 Open-Source HTTP Request Libraries for Node.js  
Built-in support for the Promise API. Transform request/response data. Intercepts and cancels requests. Automatically transforms J...
* [](https://www.npmjs.com/package/got)  
NPM  
got - npm  
Got (v16.1.0) is a native ESM, human-friendly, powerful HTTP/HTTPS request library for Node.js (CommonJS not supported; v11 unmain...

Show all

# all window.getselection methods params examples

The `window.getSelection()` method **takes no parameters**. It returns a [Selection Object](https://developer.mozilla.org/en-US/docs/Web/API/Window/getSelection) representing the text range selected by the user or the current caret position. [](https://developer.mozilla.org/en-US/docs/Web/API/Window/getSelection)

While `window.getSelection()` itself doesn't take parameters, the **Selection object methods** it returns do. [](https://medium.com/@alexandrawilll/window-getselection-and-range-in-javascript-5a13453d22)

Below is a comprehensive guide to all methods available on the `Selection` object, organized by functionality, along with their parameters and clear examples.

---

### 1\. Retrieving Ranges

| Method            | Parameters                                                     | Description                                                               |
| ----------------- | -------------------------------------------------------------- | ------------------------------------------------------------------------- |
| getRangeAt(index) | **index**: A 0-based integer representing the range to return. | Returns a Range Object representing one of the currently selected ranges. |

javascript

```
const selection = window.getSelection();

if (selection.rangeCount > 0) {
  // Pass 0 to get the first (and usually only) active selection range
  const range = selection.getRangeAt(0); 
  console.log(range.toString());
}

```



---

### 2\. Modifying Selection Regions (Adding/Removing)

| Method             | Parameters                                                  | Description                                         |
| ------------------ | ----------------------------------------------------------- | --------------------------------------------------- |
| addRange(range)    | **range**: A Range object to be added to the selection.     | Adds a specified Range Object to the selection.     |
| removeRange(range) | **range**: A Range object to be removed from the selection. | Removes a specific range from the selection object. |
| removeAllRanges()  | None.                                                       | Clears all text selections from the document.       |

javascript

```
const selection = window.getSelection();

// Create a new manual range
const newRange = document.createRange();
newRange.selectNodeContents(document.getElementById("my-paragraph"));

// 1. Clear existing selection
selection.removeAllRanges();

// 2. Select the new target node
selection.addRange(newRange);

// 3. Remove that targeted range specifically
selection.removeRange(newRange);

```



---

### 3\. Setting Carat or Selection Point (Collapse)

"Collapsing" a selection reduces it to a single point (blinking text cursor), removing active highlighting. [](https://www.youtube.com/watch?v=T2fflxvBsWs)

| Method                 | Parameters                                                                                                                                            | Description                                                                            |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| collapse(node, offset) | **node**: The DOM Element where the caret will land.**offset** _(optional)_: The character index/child node index inside the element (Defaults to 0). | Collapses the current selection to a single target point.                              |
| collapseToStart()      | None.                                                                                                                                                 | Collapses the selection directly to the beginning of the existing selection highlight. |
| collapseToEnd()        | None.                                                                                                                                                 | Collapses the selection directly to the end of the existing selection highlight.       |

javascript

```
const selection = window.getSelection();
const targetParagraph = document.querySelector("p");

// Place the text caret after the 5th character inside the paragraph
selection.collapse(targetParagraph, 5);

// Move the cursor directly to the end of whatever selection point currently exists
selection.collapseToEnd();

```



---

### 4\. Continuous Text Selection Adjustments

These methods allow programmatic selection highlighting, behaving exactly like a user clicking and dragging their cursor.

| Method                                                             | Parameters                                                                                                                                                                                                         | Description                                                                                         |
| ------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------- |
| extend(node, offset)                                               | **node**: The boundary element where you want the selection to end.**offset** _(optional)_: Character index within the end node where selection terminates (Defaults to 0).                                        | Moves the focus (end point) of the selection to a new node, keeping the anchor (start point) fixed. |
| setBaseAndExtent(anchorNode, anchorOffset, focusNode, focusOffset) | **anchorNode**: The element where selection starts.**anchorOffset**: Character index where selection starts.**focusNode**: The element where selection ends.**focusOffset**: Character index where selection ends. | Selects a clean slice of text directly across two DOM positions in a single command.                |

javascript

```
const selection = window.getSelection();
const p1 = document.getElementById("start-para");
const p2 = document.getElementById("end-para");

// Highlighting text block programmatically from point A to point B
selection.setBaseAndExtent(p1, 0, p2, 15);

// Keep the start point of 'p1', but drag the select cursor into a third element
const p3 = document.getElementById("extended-para");
selection.extend(p3, 5);

```



---

### 5\. Node Containment Checks

| Method                                 | Parameters                                                                                                                                                                        | Description                                                                 |
| -------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| containsNode(node, partialContainment) | **node**: The element you are checking.**partialContainment**: true if any part of the node is highlighted; false requires the element to be completely covered by the highlight. | Checks whether a specific DOM element is inside the current user selection. |

javascript

```
const selection = window.getSelection();
const importantSpan = document.getElementById("alert-text");

// Returns true if the user highlighted even one character of our span element
const isHighlighted = selection.containsNode(importantSpan, true); 
console.log("Is user selecting the element?", isHighlighted);

```



---

### 6\. Utility Methods

| Method                                | Parameters                                                                                                                                                                           | Description                                                                                                |
| ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------- |
| toString()                            | None.                                                                                                                                                                                | Returns the raw plain text contained inside the selection.                                                 |
| empty()                               | None.                                                                                                                                                                                | An alias/deprecated alternative to removeAllRanges(). Clears selections (primarily Safari/legacy support). |
| modify(alter, direction, granularity) | **alter**: "move" (move cursor) or "extend" (expand highlight).**direction**: "forward", "backward", "left", or "right".**granularity**: "character", "word", "sentence", or "line". | _Non-standard/Experimental:_ Changes the current selection relative to the current position.               |

javascript

```
const selection = window.getSelection();

// Retrieve pure string value text selected by user
console.log(selection.toString()); 

// Experimental: Move the current selection highlight forward by one word
selection.modify("extend", "forward", "word");

```



Would you like to see a complete, working HTML demo implementing a specific selection feature (like an **inline text highlighter** or a **medium-style popup bubble tool**)?

* [](https://developer.mozilla.org/en-US/docs/Web/API/Window/getSelection)  
MDN Web Docs  
Window: getSelection() method - Web APIs | MDN  
Window.getSelection() (also Document.getSelection()) returns a Selection object representing user-selected text range or caret pos...
* [](https://developer.mozilla.org/en-US/docs/Web/API/Document/getSelection)  
MDN Web Docs  
Document: getSelection() method - Web APIs | MDN  
Image & Video API Real-time URL transforms, global CDN delivery & easy integration with existing storage. Start Free Ad Don't want...
* [](https://mdn2.netlify.app/en-us/docs/web/api/window/getselection/)  
Netlify  
Window.getSelection() - Web APIs | MDN  
Window Window.getSelection() Table of contents Table of contents Notes Browser compatibility Window. getSelection() The Window. ge...

Show all

# all window.getselection return props methods params examples

The **`window.getSelection()`** method returns a [Selection](https://developer.mozilla.org/en-US/docs/Web/API/Window/getSelection) object representing the range of text selected by the user or the current position of the caret (cursor). [](https://developer.mozilla.org/en-US/docs/Web/API/Window/getSelection)

---

### 📥 Parameters & Return Value

* **Parameters:** None.
* **Return Value:** A **`Selection` object**, or `null` if the associated document has no browsing context (e.g., an unattached or hidden `<iframe>`). [](https://github.com/mdn/content/blob/main/files/en-us/web/api/window/getselection/index.md?plain=1)

---

### 📋 Selection Object Properties

The Selection object returned by `window.getSelection()` contains the following read-only properties: [](https://www.desarrollolibre.net/blog/javascript/window-get-selection-in-javascript-the-torment-of-text-selection)

* **`anchorNode`**: The DOM `Node` where the user started making the selection. [](https://www.desarrollolibre.net/blog/javascript/window-get-selection-in-javascript-the-torment-of-text-selection)
* **`anchorOffset`**: The number of characters (for text nodes) or child nodes (for element nodes) from the start of the `anchorNode` where the selection began. [](https://www.desarrollolibre.net/blog/javascript/window-get-selection-in-javascript-the-torment-of-text-selection)
* **`focusNode`**: The DOM `Node` where the user finished making the selection. [](https://www.desarrollolibre.net/blog/javascript/window-get-selection-in-javascript-the-torment-of-text-selection)
* **`focusOffset`**: The offset within the `focusNode` where the selection ended. [](https://www.desarrollolibre.net/blog/javascript/window-get-selection-in-javascript-the-torment-of-text-selection)
* **`isCollapsed`**: A boolean that is `true` if the selection's start and end points are at the exact same position (i.e., a cursor/caret sitting there without text highlighted). [](https://dev.to/saurabh%5Fraj%5Fafaabe1844a4c/mastering-selection-and-ranges-in-javascript-never-to-look-back-again-2mkk)
* **`rangeCount`**: The number of `Range` objects in the selection. Except on Firefox (which supports multi-range selections via the `Ctrl` key), this number is almost always `0` (no selection) or `1`. [](https://www.desarrollolibre.net/blog/javascript/window-get-selection-in-javascript-the-torment-of-text-selection)
* **`type`**: A string describing the type of selection. Possible values are `"None"`, `"Caret"`, or `"Range"`.

---

### 🛠️ Selection Object Methods

You can invoke the following methods on the returned `Selection` object to inspect or modify the highlighted content: [](https://dev.to/saurabh%5Fraj%5Fafaabe1844a4c/mastering-selection-and-ranges-in-javascript-never-to-look-back-again-2mkk)

#### Inspection & Retrieval

* **`toString()`**: Returns the plain text contained within the selection.
* **`getRangeAt(index)`**: Returns the DOM `Range` object at the specified index (usually `0`). This allows you to extract or modify the precise HTML structure.
* **`containsNode(node, allowPartial)`**: Returns a boolean indicating whether the specified node is part of the selection. [](https://mdn2.netlify.app/en-us/docs/web/api/window/getselection/)

#### Modification & Control

* **`removeAllRanges()`**: Clears the current selection, deselecting all text.
* **`addRange(range)`**: Adds a specific DOM `Range` object to the selection.
* **`removeRange(range)`**: Removes a specific `Range` from the selection.
* **`collapse(node, offset)`**: Collapses the selection to a single point (cursor) at the specified node and offset position.
* **`collapseToStart()`**: Moves the cursor to the beginning of the current selection.
* **`collapseToEnd()`**: Moves the cursor to the end of the current selection.
* **`extend(node, offset)`**: Moves the focus (end point) of the selection to a new node and offset while leaving the anchor (start point) where it was.
* **`deleteFromDocument()`**: Deletes the selected text/HTML directly from the web page DOM. [](https://dev.to/saurabh%5Fraj%5Fafaabe1844a4c/mastering-selection-and-ranges-in-javascript-never-to-look-back-again-2mkk)

---

### 💻 Code Examples

#### 1\. Getting Selected Text

To extract text as a clean string, you must call `.toString()` explicitly if the environment doesn't automatically cast it. [](https://developer.mozilla.org/en-US/docs/Web/API/Document/getSelection)

javascript

```
document.addEventListener("mouseup", () => {
  const selection = window.getSelection();
  
  if (selection && selection.toString().length > 0) {
    console.log("Selected text:", selection.toString());
  }
});

```



#### 2\. Getting the Selected HTML Content

To extract the actual HTML elements (not just raw text) selected by the user, you must request the underlying `Range` object: [](https://stackoverflow.com/questions/49867273/get-all-elements-in-selection-highlight-using-window-getselection)

javascript

```
function getSelectedHTML() {
  const selection = window.getSelection();
  
  if (selection.rangeCount > 0) {
    const range = selection.getRangeAt(0);
    const container = document.createElement("div");
    
    // Clones the HTML structure inside the selection
    container.appendChild(range.cloneContents()); 
    return container.innerHTML;
  }
  return "";
}

```



#### 3\. Programmatically Selecting a Specific Element

You can force the browser to highlight a specific element on your page by combining the `Selection` API with the `Range` API: [](https://dev.to/saurabh%5Fraj%5Fafaabe1844a4c/mastering-selection-and-ranges-in-javascript-never-to-look-back-again-2mkk)

javascript

```
function selectElementById(elementId) {
  const element = document.getElementById(elementId);
  const selection = window.getSelection();
  
  // Create a new visual range
  const range = document.createRange();
  range.selectNodeContents(element);
  
  // Clear any existing user selections and apply the new one
  selection.removeAllRanges();
  selection.addRange(range);
}

```



⚠️ **Note:** `window.getSelection()` does not track text highlights inside standard `<input>` or `<textarea>` form components in several browsers (like Firefox). For input boxes, use the element's direct properties: `selectionStart` and `selectionEnd`. [](https://developer.mozilla.org/en-US/docs/Web/API/Window/getSelection)

Would you like to see how to **wrap the selected text in a custom HTML tag** (like a custom highlighter utility), or do you need help **tracking changes** using the `selectionchange` event?

* [](https://dev.to/saurabh%5Fraj%5Fafaabe1844a4c/mastering-selection-and-ranges-in-javascript-never-to-look-back-again-2mkk)  
DEV Community  
Mastering Selection and Ranges in JavaScript: Never to look back again - DEV Community  
Range API: document.createRange() instantiates Range; key properties include startContainer, startOffset, endContainer, endOffset,
* [](https://developer.mozilla.org/en-US/docs/Web/API/Window/getSelection)  
MDN Web Docs  
Window: getSelection() method - Web APIs | MDN  
Window.getSelection() returns a Selection object representing user-selected text range or caret position. Does not work on textare...
* [](https://www.tutorialspoint.com/javascript/javascript%5Fselection%5Fapi.htm)  
TutorialsPoint  
JavaScript - Selection API  
accessing/modifying user-selected page content via Selection and Range objects, excluding Web Workers. deleteFromDocument(), exten...

Show all

# all hono methods params examples

In **Hono**, parameters (path parameters, query parameters, headers, and request bodies) are extracted using the **Context object (`c`)** passed into every route handler. [](https://hono.dev/docs/api/request)

Here is a complete breakdown of all parameter extraction methods available in the `c.req` object, along with practical examples. [](https://hono.dev/docs/api/context)

---

### 1\. Path Parameters (`c.req.param()`)

Used to fetch dynamic segments defined directly in your route path. [](https://hono.dev/docs/api/routing)

* **Single Param:** Pass the parameter name as a string.
* **All Params:** Call the method with no arguments to get an object of all parameters.
* **Optional / RegEx Params:** Hono supports custom regex rules directly inside the path definition. [](https://devsheets.io/sheets/hono)

ts

```
import { Hono } from 'hono'
const app = new Hono()

// 1. Single & Multiple Path Parameters
app.get('/user/:id', (c) => c.json({ userId: c.req.param('id') }))
app.get('/shop/:category/item/:itemId', (c) => {
  const { category, itemId } = c.req.param()
  return c.json({ category, itemId })
})
// Support for RegEx, Optional, and Wildcards (*) via c.req.param()

```



---

#### 2\. Query Parameters (`c.req.query()` & `c.req.queries()`)

Used to fetch parameters appended to the end of a URL (e.g., `?search=hono&limit=10`). [](https://www.youtube.com/watch?v=IkrP0FtLR38&t=35)

* **`query()`**: Fetches a single string value or all parameters as single strings.
* **`queries()`**: Fetches parameters that contain multiple values grouped into an array (e.g., `?tags=tech&tags=news`). [](https://hono.dev/docs/api/request)

ts

```
app.get('/search', (c) => c.json({ 
  searchTerm: c.req.query('q'), 
  allQueries: c.req.query() 
}))
app.get('/posts', (c) => c.json({ filterTags: c.req.queries('tags') }))

```



---

#### 3\. Request Headers (`c.req.header()`)

Used to fetch incoming request headers in a case-insensitive manner. [](https://hono.dev/docs/api/request)

ts

```
app.get('/dashboard', (c) => c.json({ 
  authHeader: c.req.header('Authorization'), 
  userAgent: c.req.header('user-agent') 
}))

```



---

#### 4\. Request Body Parameters (`json()`, `text()`, `formData()`)

Used to parse payload parameters sent inside HTTP requests like `POST`, `PUT`, or `PATCH`. Remember to `await` these asynchronous body parsing methods. [](https://www.youtube.com/watch?v=lvjSuPMXu28)

ts

```
app.post('/api/users', async (c) => c.json({ received: await c.req.json() }))
app.post('/api/upload', async (c) => {
  const formData = await c.req.formData()
  return c.json({ username: formData.get('username'), hasFile: !!formData.get('file') })
})
app.post('/api/raw', async (c) => c.text(`You sent: ${await c.req.text()}`))

```



---

#### 💡 Summary Cheat Sheet Table

| Method               | Target Parameter        | Example Input            | Code Sample                              |
| -------------------- | ----------------------- | ------------------------ | ---------------------------------------- |
| c.req.param('id')    | Path Segment            | /user/42                 | c.req.param('id') // "42"                |
| c.req.param()        | All Path Segments       | /user/42/post/1          | c.req.param() // {id: "42", postId: "1"} |
| c.req.query('q')     | Single Query String     | ?q=hello                 | c.req.query('q') // "hello"              |
| c.req.queries('t')   | Multi-value Query Array | ?t=a&t=b                 | c.req.queries('t') // \["a", "b"\]       |
| c.req.header('name') | Request Header          | Authorization: Bearer... | c.req.header('Authorization')            |
| await c.req.json()   | JSON Payload body       | {"status": "ok"}         | const data = await c.req.json()          |

Are you setting up input validation or schema parsing for these parameters? If so, I can show you how to use **Zod** alongside the official **[@hono/zod-validator](https://hono.dev/docs/guides/validation)** middleware to make all these inputs completely type-safe. Let me know!

* [](https://hono.dev/docs/api/request)  
Hono  
HonoRequest  
which wraps a Request object. \* param() Get the values of path parameters. header() Get the request header value. header ('User-Ag...
* [](https://hono.dev/docs/api/routing)  
Hono  
Routing - Hono  
HTTP Methods: app.get(), app.post(), app.put(), Parameters: Named parameters (:name), multiple extraction. Routing Features: Chain...
* [](https://hono.dev/docs/api/context)  
Hono  
Context - Hono  
Methods and Properties: req (HonoRequest instance); status (set HTTP status code, default 200); header (set HTTP headers); body (r...

Show all
