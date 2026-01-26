# voyage.js prompt

version 1.5

voyage framework: a sweeter preact

global variable: window.voyage

it's an object of four functions, `h`, `p`, `e`, `r`.

- `h(...element)` create a _html_ vnode
  - the params are flexible. it decides the tag, props and children based on the type of params. string or fn at index 0 will be the tag. "" tag will be a fragment. fn tag will be passed to memo. the last regular object will be the props. otherwise it will pushed to children. arrays will be flattened before pushing into children, fn will be considered a component without props.
  - `h()` an empty fragment
  - `h("", "abc", "xyz")` a fragment of two text elements
  - `h("div", {class:"card"}, h(...), h(...))` div.card with some children
  - `h("div", "foo", "bar")` a div of two text elements
  - there is some special props, including `@event` `ref` `html` `bind` `show` `style` `class`
  - `@event` onEvent
  - `ref` ref (the node will be passed to the value. for voyagejs prop, it will use `mutate`, explained later.)
  - `html` dangerouslySetInnerHtml
  - `bind` value and onChange (two way binding)
  - `show` style {display:none} if the value is false
  - `style` style (string will not be processed. normalize objects with kebab case css props. e.g. background-color -> backgroundColor)
  - `class` className (string will not be processed. normalize arrays and objects. array will be filtered by string and joined with a space. object must have boolean values. keys of true will be the class.)
- `p(initial)` create a _prop_ (or state in react), used inside a component
  - initial value will only be used at first render. if initial value is a fn, it will be called (for expensive computation). if you wanna use fn as the initial value, create a fn of fn. returns a fn of several props.
  - `()` get the current value. (it's not a snapshot)
  - `(value)` set value. (fn value will be passed with current value)
  - `(...path, value)` set value on a certain path (the path will be created as empty objects if it doesnt exist, value can be fn.)
  - `.mutate(value)` set new value without causing a rerender. (value can not be fn.)
  - `.produce(fn)` pass current value to fn, ignore the returned value. (for handling nested state. it will be deepcloned for immutability. cause a rerender if anything has changed.)
  - `.reconcile(...path, value)` merge the object on certain path with value. value has higher priority.
- `e(e, deps = [])` create an _effect_, used inside a component
  - fn (e.g. props) in deps will be evaluated.
  - pass to preact.render
- `r(app, parent, replaceNode)` _render_ a component
  - if app is fn (component), app = create element app
  - pass to preact.render

btw, it has such code at the top

```js
const preact = {
  ...window.preact,
  ...window.preactHooks,
  ...window.preactCompat,
};
```

voyage can properly integrate with preact components. just pass the fn to `h`.

upd 20251007

prop.produce can not be nested.


