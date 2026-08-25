## changes of codepen 2.0

Released in July 2026, **CodePen 2.0 is a complete ground-up rebuild** that <mark>shifts the platform from a simple code playground into a fully-featured, file-based cloud IDE</mark>. It consolidates the classic HTML/CSS/JS "Classic Pen" and the multi-file "Projects" setup into a single, unified environment. [link](https://blog.codepen.io/2026/07/23/two-point-oh/)

### 📁 Unified File System

- **No More Three-File Limit**: The classic restriction of having only one HTML, one CSS, and one JS pane is gone.
- **Custom Files and Folders**: You can now create, rename, delete, and organize multiple files and folders inside a single Pen.
- **Multi-Page Support**: You can build multi-page websites directly within the same project, complete with an updated preview address bar to navigate between them. [link](https://www.youtube.com/watch?v=0R4l8nlmCAQ\&t=1)

### 🛠️ The "Blocks" System & Modern Tooling

- **Compiler Blocks**: CodePen 2.0 uses a visual "Blocks" system to manage preprocessors and build chains. [link](https://www.youtube.com/watch?v=0R4l8nlmCAQ\&t=1)
- **Automatic Config**: Instead of searching through dropdown menus, simply adding file extensions like `.scss` or `.ts` will automatically add the Sass or TypeScript processing blocks. [link](https://daverupert.com/2026/07/codepen-2/)
- **Native Vite Support**: CodePen 2.0 utilizes Vite under the hood, natively supporting framework pipelines like Vue, Tailwind CSS, Lightning CSS, and MJML. [link](https://daily.dev/posts/the-launch-of-codepen-2-0-6duljcodh)
- **Package Management**: Includes a built-in `package.json` for managing standard npm dependencies with proper ES module imports. [link](https://daily.dev/posts/codepen-2-0-what-s-new-and-what-s-changed-us8bwgekd)

### 🌐 One-Click Live Deployment

- **Live Domains**: You can now deploy your Pen directly to a live `*.codepen.app` subdomain.
- **Custom Domains**: PRO users can map their own custom domains to their deployed pens.
- **Deploy on Save**: Code updates can be set to deploy instantly upon saving. [link](https://www.youtube.com/watch?v=0R4l8nlmCAQ\&t=1)

### ⏳ Full Version History

- **Time Travel Rollbacks**: Pens now feature a dedicated "Versions" history panel.
- **Logarithmic Rollups**: CodePen tracks saves frequently for recent edits, grouping older saves over time so you can easily revert accidental mistakes without navigating infinite lists. [link](https://www.youtube.com/watch?v=geY6xAOIosA\&t=120)

### 🤝 Upgraded Real-Time Collaboration

- **Integrated Collab Mode**: Real-time collaboration no longer requires a special URL.
- **Collaborator Tracking**: You can see exactly what file and what line your teammates are editing in real-time.
- **Offline Editing**: Collaborators can make changes while you are offline, and the files will automatically sync when you return. [link](https://blog.codepen.io/docs/what-changed/)

### 🖥️ New UI Features

- **The Omnibar**: A global command palette (triggered via `Cmd + K` or `Cmd + P`) that acts as a fast pass to find files, tweak settings, and activate shortcuts.
- **Left Sidebar**: Relocated controls, files, blocks, and privacy settings into a streamlined layout. [link](https://www.youtube.com/watch?v=0R4l8nlmCAQ\&t=1)

***

### 💡 Missing the Old Layout?

If you prefer the simplicity of the classic CodePen scratchpad, you can recreate it in CodePen 2.0 with two quick steps:

1. Open the **Omnibar** (`Cmd + U`) and turn on **Minimal UI** to hide the extra panels.
2. Set the **Blank Classic Template** as your default template to bypass the mandatory HTML doctype scaffolding. [link](https://www.reddit.com/r/css/comments/1v909z8/codepen%5F20%5Frip%5Fclassic%5Fpen/)

Would you like help setting up a specific **framework block** like Vue or Tailwind in CodePen 2.0, or are you looking to migrate an **older Project**?

14 sites

- [link](https://codepen.io/2/whats-new)\
  CodePen 2.0\
  Introducing. CodePen 2.0. Build effortlessly in the cloud with an all-new online code editor that seamlessly combines your favorit...\
  CodePen
- [link](https://www.youtube.com/watch?v=0R4l8nlmCAQ\&t=1)\
  Trying the new CodePen 2.0\
  Feb 27, 2026 — The speaker is exploring the newly released CodePen 2.0 and will go through the tour to see the new features, starting with creati...\
  8m\
  YouTube·Cassidy Williams
- [link](https://daverupert.com/2026/07/codepen-2/)\
  The new yet familiar CodePen 2.0 - daverupert.com\
  Jul 27, 2026 — There's more features, but everything feels more predictable. In the “classic” CodePen editor you'd have to surf through a handful...\
  Dave Rupert

Show all

## what were not possible

Before the launch of CodePen 2.0, the platform was essentially a flat scratchpad tailored for quick, single-file frontend snippets. [link](https://www.reddit.com/r/webdev/comments/1v4m99b/codepen%5F20/)

The following actions and architectures were **not possible** under the old system:

### ❌ File and Directory Architecture

- **Adding custom folders**: You could not create subdirectories or folder trees to group assets. [link](https://blog.codepen.io/docs/what-changed/)
- **Exceeding the three-file limit**: You were strictly bound to exactly one HTML file, one CSS file, and one JavaScript file. [link](https://daily.dev/posts/codepen-2-0-what-s-new-and-what-s-changed-us8bwgekd)
- **Building multi-page sites**: You could not natively add a `contact.html` or `about.html` file inside the same Pen and navigate between them using a preview browser. [link](https://blog.codepen.io/category/release/feed/)
- **Using JSX or TSX natively in HTML textboxes**: You could not easily mix these syntaxes directly into your HTML workspace without hitting major processing limitations. [link](https://www.reddit.com/r/css/comments/1v909z8/codepen%5F20%5Frip%5Fclassic%5Fpen/)

### ❌ Modern Build Tooling & Package Management

- **Installing npm dependencies via `package.json`**: Standard npm dependency management did not exist; you had to manually search for and paste external CDN URLs into your settings page.
- **Mixing multiple preprocessors seamlessly**: You were forced to choose just one processor per pane (e.g., just Sass for styling) rather than cascading multiple modern framework blocks like Tailwind CSS, Vite, and Vue together.
- **Using native ES Modules correctly**: Deeply nested or complex local ES Module imports would break without heavy configuration workaround chains. [link](https://blog.codepen.io/docs/pens/settings/)

### ❌ Versioning and Infrastructure

- **Rolling back text edits over time**: There was no native version history. If you broke your code and saved it, you could not look through a timeline to revert to an older state. [link](https://blog.codepen.io/docs/pens/versions/)
- **Deploying to custom live subdomains**: Pens could only be viewed in editor/iframe views (`/full/`, `/pen/`, `/details/`). You could not deploy your code as an independent, production-ready website on a `*.codepen.app` or custom root domain. [link](https://devops.com/codepen-2-0-turns-a-design-playground-into-a-real-deployment-tool/)

### ❌ Real-Time Collaboration

- **Collaborating smoothly without special URLs**: Real-time coding required launching a restrictive, separate "Collab Mode" session. You could not just invite a friend to your workspace globally while tracking their active line cursor across multiple files.
- **Syncing work while offline**: The old setup would instantly disconnect or fail to save if your internet dropped while collaborating. [link](https://blog.codepen.io/feed/podcast/codepen-radio/)

Are you running into any **specific limitations** from the old layout that you are struggling to replicate in the new version?

- [link](https://www.reddit.com/r/css/comments/1v909z8/codepen%5F20%5Frip%5Fclassic%5Fpen/)\
  Reddit·r/css\
  Codepen 2.0 - RIP classic Pen? : r/css - Reddit\
  Jul 28, 2026 — The old, minimal UI was actually a feature—it acted as a helpful indicator for when a concept was getting too complex. It had ever...
- [link](https://daily.dev/posts/codepen-2-0-what-s-new-and-what-s-changed-us8bwgekd)\
  daily.dev\
  CodePen 2.0: what's new and what's changed\
  Jul 30, 2026 — What changed. CodePen 2.0 is a ground-up rebuild, five years in the making. The old setup had three separate editors — Classic Pen...
- [link](https://blog.codepen.io/docs/what-changed/)\
  CodePen\
  Why Did Everything Change? - CodePen Blog\
  Jul 25, 2026 — Where are Projects? Projects are 2.0 Pens now. All Projects have been converted. The point of legacy Projects was that they gave y...

Show all

