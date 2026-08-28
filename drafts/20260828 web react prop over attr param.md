why does react call it prop instead of param or attr

React uses the term **"props"** (short for properties) to align with JavaScript object terminology, maintain consistency with the Virtual DOM, and distinguish component data from native HTML behaviors.

Here is the breakdown of why "props" won out over "params" or "attrs":

### 📌 Properties vs. Attributes

In web development, HTML elements have **attributes** (defined in the markup), but JavaScript DOM elements have **properties** (defined in the object memory).

- React operates in **JavaScript** via the Virtual DOM.
- Components receive a single JavaScript **object** containing data.
- Calling them "props" reinforces that you are passing JavaScript object properties, not just text-based HTML attributes.

### 📌 Components vs. Functions

While React components look like regular JavaScript functions that accept **parameters** (params), they behave differently.

- A standard function can take multiple, ordered parameters (`function(a, b, c)`).
- A React component always takes a single, unified configuration object (`function(props)`).
- The term **"params"** is reserved for other concepts in the React ecosystem, such as URL parameters in React Router (`/user/:id`).

### 📌 Historical Influence

React was heavily influenced by older object-oriented programming paradigms, including **Desktop UI frameworks** (like Smalltalk, Mac OS Cocoa, or XAML). These frameworks traditionally used the concept of "properties" to describe the configurable characteristics of a user interface element.

***

To help you dive deeper into React architectures, let me know if you would like me to:

- Explain the difference between **props and state**

- Show how to **destructure props** for cleaner code

- Demonstrate how to enforce types using **TypeScript or PropTypes**

