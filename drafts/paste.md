react component library template

6:12 AM

To build a modern **React component library**, the fastest approach is using a **Vite-based TypeScript starter template** configured for library mode. \[[1](https://dev.to/receter/how-to-create-a-react-component-library-using-vites-library-mode-4lma), [2](https://dev.to/nicolaserny/create-a-react-component-library-with-vite-and-typescript-1ih9)]

Below is a complete, production-ready blueprint for a React component library template using Vite, TypeScript, and Storybook. \[[1](https://github.com/IgnacioNMiranda/vite-component-library-template)]

***

📦 1. Project Initialization & Dependencies

Create a new directory and initialize your project with these necessary peer and development dependencies. \[[1](https://www.youtube.com/watch?v=c6eP0LKzGrQ)]

json

```
{
  "name": "my-react-component-library",
  "version": "1.0.0",
  "type": "module",
  "main": "./dist/index.umd.js",
  "module": "./dist/index.js",
  "types": "./dist/index.d.ts",
  "exports": {
    ".": {
      "import": "./dist/index.js",
      "require": "./dist/index.umd.js",
      "types": "./dist/index.d.ts"
    }
  },
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "storybook": "storybook dev -p 6006",
    "build-storybook": "storybook build"
  },
  "peerDependencies": {
    "react": "^18.0.0 || ^19.0.0",
    "react-dom": "^18.0.0 || ^19.0.0"
  },
  "devDependencies": {
    "@types/react": "^19.0.0",
    "typescript": "^5.0.0",
    "vite": "^6.0.0",
    "vite-plugin-dts": "^4.0.0"
  }
}
```

Use code with caution.

***

⚙️ 2. Vite Configuration (`vite.config.ts`)

Configure Vite to use **Library Mode**. This settings configuration prevents bundling `react` into your final package, forcing the consumer's application to provide it instead. \[[1](https://www.youtube.com/watch?v=ESkD6Ouvs2s), [2](https://dev.to/receter/how-to-create-a-react-component-library-using-vites-library-mode-4lma)]

typescript

```
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import { resolve } from 'path';

export default defineConfig({
  plugins: [
    react(),
    dts({ include: ['src'], insertTypesEntry: true }) // Generates type files (.d.ts)
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'MyComponentLibrary',
      formats: ['es', 'umd'],
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom'], // Peer dependencies excluded from bundling
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
});
```

Use code with caution.

***

📐 3. TypeScript Configuration (`tsconfig.json`) \[[1](https://medium.com/stackanatomy/react-architecture-patterns-for-your-projects-6f495448f04b)]

Configure TypeScript to target modern JavaScript standards and emit components with accurate JSX properties. \[[1](https://www.youtube.com/watch?v=c6eP0LKzGrQ)]

json

```
{
  "compilerOptions": {
    "target": "ES2022",
    "useDefineForClassFields": true,
    "lib": ["DOM", "DOM.Iterable", "ES2022"],
    "module": "ESNext",
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",

    /* Linting */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noImplicitReturns": true
  },
  "include": ["src"]
}
```

Use code with caution.

***

🗂️ 4. Recommended Directory Structure

Structure your code cleanly to allow for clean individual component exports. \[[1](https://blog.logrocket.com/how-to-build-component-library-react-typescript/)]

text

```
├── .storybook/
├── src/
│   ├── components/
│   │   └── Button/
│   │       ├── Button.tsx
│   │       ├── Button.stories.tsx
│   │       └── index.ts
│   └── index.ts (Central export point)
├── package.json
├── tsconfig.json
└── vite.config.ts
```

Use code with caution.

Sample Component File (`src/components/Button/Button.tsx`) \[[1](https://medium.com/@90mandalchandan/building-reusable-ui-components-a-guide-to-creating-a-react-shared-library-with-storybook-and-a1d2949ccad0)]

typescript

```
import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

export const Button = ({ label, ...props }: ButtonProps) => {
  return (
    <button style={{ padding: '8px 16px', borderRadius: '4px' }} {...props}>
      {label}
    </button>
  );
};
```

Use code with caution.

Central Export Point (`src/index.ts`) \[[1](https://articles.wesionary.team/react-component-library-with-vite-and-deploy-in-npm-579c2880d6ff)]

typescript

```
export * from './components/Button';
```

Use code with caution.

***

🚀 5. Quick-Start Pre-made Templates \[[1](https://tsdown.dev/recipes/react-support)]

If you prefer cloning an established setup instead of configuring manually, utilize these community-vouched template repositories:

- **Vite + Storybook + Tailwind Template**: For modern development setups, clone the [IgnacioNMiranda GitHub Template](https://github.com/IgnacioNMiranda/vite-component-library-template) which supports Node 22, React 19, Tailwind CSS v4, and Biome.
- **Vite Basic Starter**: For a lightweight foundation, check out the [rayyamhk Vite Starter](https://github.com/rayyamhk/vite-react-component-library-starter).
- **Classic Rollup Starter**: For a traditional architecture setup, review the popular [Alex Eagleson Tutorial Template](https://github.com/alexeagleson/template-react-component-library). \[[1](https://github.com/rayyamhk/vite-react-component-library-starter), [2](https://github.com/alexeagleson/template-react-component-library), [3](https://docs.baselinejs.com/Main%20Concepts/web-clients), [4](https://github.com/IgnacioNMiranda/vite-component-library-template)]

***

If you have a preference, let me know:

- Which **styling solution** you prefer (e.g., Tailwind CSS, CSS Modules, Styled Components)?
- Whether you want to build a **headless** library or use a base design system? \[[1](https://www.reddit.com/r/reactjs/comments/14bij34/do%5Fyou%5Fusually%5Fstart%5Ffrom%5Fscratch%5Fa%5Fui%5Flibrary%5For/), [2](https://primereact.org/), [3](https://medium.com/@ioana.echim/react-component-libraries-the-secret-to-rapid-ui-development-58078889f274), [4](https://www.youtube.com/watch?v=ESkD6Ouvs2s), [5](https://github.com/IgnacioNMiranda/vite-component-library-template)]

I can add the specific configuration code to your template setup.

- [link](https://www.reddit.com/r/reactjs/comments/14bij34/do%5Fyou%5Fusually%5Fstart%5Ffrom%5Fscratch%5Fa%5Fui%5Flibrary%5For/)\
  Do you usually start from scratch, a UI library, or a template? : r/reactjs\
  There should be enough unstyled component libraries and many component libraries also have this option like material. ... Exactly.\
  Reddit
- [link](https://github.com/alexeagleson/template-react-component-library)\
  alexeagleson/template-react-component-library - GitHub\
  React Component Library Template. This project is part of a blog & video tutorial on how to create and publish your own component ...\
  GitHub
- [link](https://github.com/IgnacioNMiranda/vite-component-library-template)\
  IgnacioNMiranda/vite-component-library-template - GitHub\
  ⚛️⚡ Vite + React + Typescript Component Library Template \* ♥️ Node 22. \* ⚛️ React 19. \* 📚 Storybook 9 - Components preview. \* 🖌️...\
  GitHub

Show all

You said: be as simple as possible. use parceljs. do not edit package json manually. use semantic css classes the same as component names. no storybook. just make it work.

To build your component library with Parcel as simply as possible, follow these step-by-step terminal commands and files.

1\. Terminal Setup (No manual package.json edits)

Run these commands in your terminal to create the project, initialize the configuration, and install dependencies automatically:

bash

```
# Create and enter directory
mkdir my-react-lib && cd my-react-lib

# Initialize a default package.json
npm init -y

# Install React and required developer tools
npm install react react-dom
npm install --save-dev parcel process typescript @types/react @types/react-dom
```

Use code with caution.

***

2\. Configure TypeScript (`tsconfig.json`)

Create a `tsconfig.json` file in your root folder to support React and modern JavaScript bundling:

json

```
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "commonjs",
    "jsx": "react-jsx",
    "declaration": true,
    "outDir": "./dist",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true
  },
  "include": ["src/**/*"]
}
```

Use code with caution.

***

3\. Create the Components

Create a `src` folder containing your components and style sheets. The CSS classes match the component names exactly.

`src/MyButton.css`

css

```
.MyButton {
  background: #0070f3;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
}
```

Use code with caution.

`src/MyButton.tsx`

typescript

```
import React from 'react';
import './MyButton.css';

interface Props {
  text: string;
  onClick?: () => void;
}

export const MyButton = ({ text, onClick }: Props) => {
  return <button className="MyButton" onClick={onClick}>{text}</button>;
};
```

Use code with caution.

Central Library Entrypoint (`src/index.ts`)

typescript

```
export * from './MyButton';
```

Use code with caution.

***

4\. Build Your Library

Parcel handles the bundle automatically using its built-in library features. Run this command in your terminal to generate your compiled production files:

bash

```
npx parcel build src/index.ts --dist-dir dist
```

Use code with caution.

Your compiled, ready-to-publish library files will appear inside the generated `dist/` folder.

***

If you need help testing this bundle locally, let me know if you want to:

- Set up a **local testing app** to see it work?
- Configure npm links for **local installation testing**?

You said: i want components to be feature rich like mui, chakra, or shadcnui

To make your custom components feature-rich like **MUI**, **Chakra UI**, or **Shadcn UI** without rewriting thousands of lines of complex accessibility logic (like keyboard navigation, ARIA attributes, and focus management), the standard industry approach is to <mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">wrap <strong>unstyled headless primitive libraries</strong></mark>.

**Radix Primitives** (the engine behind Shadcn UI) or **React Aria** (the engine behind Adobe's design systems) are ideal choices because they provide full functionality out of the box, allowing you to easily style them with your custom semantic CSS classes.

Here is how to update your simple Parcel setup to support fully accessible, feature-rich components.

***

1\. Install Feature-Rich Headless Primitives

Run this command in your terminal to install the accessible foundation primitives:

bash

```
npm install @radix-ui/react-dialog @radix-ui/react-popover
```

Use code with caution.

***

2\. Feature-Rich Component Example: Dialog / Modal

Here is a complete example of a feature-rich, fully accessible Dialog component. It includes focus trapping, `Escape` key closing, overlay management, and screen-reader accessibility, while maintaining your requested architecture:

`src/MyDialog.css`

css

```
/* Background tint that blurs the page */
.MyDialogOverlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  animation: fadeIn 150ms cubic-bezier(0.16, 1, 0.3, 1);
}

/* Centered modal container window */
.MyDialogContent {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 24px;
  border-radius: 8px;
  width: 90vw;
  max-width: 450px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.2);
}

.MyDialogTitle {
  margin: 0 0 10px 0;
  font-weight: 500;
  font-size: 18px;
}

.MyDialogDescription {
  margin: 0 0 20px 0;
  color: #666;
  font-size: 15px;
}

.MyDialogCloseButton {
  background: #eee;
  border: none;
  padding: 6px 12px;
  border-radius: 4px;
  cursor: pointer;
}
```

Use code with caution.

`src/MyDialog.tsx`

typescript

```
import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import './MyDialog.css';

interface MyDialogProps {
  triggerText: string;
  title: string;
  description: string;
  children?: React.ReactNode;
}

export const MyDialog = ({ triggerText, title, description, children }: MyDialogProps) => {
  return (
    <Dialog.Root>
      {/* Trigger element using native button semantics */}
      <Dialog.Trigger asChild>
        <button className="MyButton">{triggerText}</button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="MyDialogOverlay" />
        <Dialog.Content className="MyDialogContent">
          <Dialog.Title className="MyDialogTitle">{title}</Dialog.Title>
          <Dialog.Description className="MyDialogDescription">
            {description}
          </Dialog.Description>

          <div className="MyDialogBody">
            {children}
          </div>

          <Dialog.Close asChild>
            <button className="MyDialogCloseButton">Close</button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
```

Use code with caution.

***

3\. Update the Library Entrypoint

Update your `src/index.ts` file to export your new feature-rich component alongside your previous button.

`src/index.ts`

typescript

```
export * from './MyButton';
export * from './MyDialog';
```

Use code with caution.

***

4\. Build Your Production Library

Compile your updated library bundle using Parcel:

bash

```
npx parcel build src/index.ts --dist-dir dist
```

Use code with caution.

***

If you want to keep expanding this setup, tell me:

- Which **specific complex UI component** do you need next (e.g., Dropdown Menus, Tooltips, Tabs, or Accordions)?
- Do you want to see how to bundle a **global reset CSS style** into the build?

I will provide the lightweight primitive implementation and corresponding semantic CSS code.