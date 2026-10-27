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