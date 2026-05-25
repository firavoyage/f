naming: pascal case for react components

styling: have a global css file. 

example:

```jsx
export function Card({ active }) {
  return (
    <div className="Card" data-active={active}>
      <h1 className="Card-title">Component Title</h1>
      <p className="Card-desc">Perfect, flat string literals.</p>
    </div>
  );
}
```

```css
.Card { padding: var(--...); }
.Card-title { font-size: var(--...); }
.Card-desc { color: var(--...); } /* oklch */

/* Handle your state clean and fast */
.Card[data-active="true"] .Card-title { color: var(--...); }
```

