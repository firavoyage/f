# css where selector

## css where selector

`:where()` is a CSS pseudo-class that matches elements using a selector list, but adds **zero specificity**—even if the selectors inside it are highly specific.

```css
:where(article, section) h2 {
  color: navy;
}
```

This styles `<h2>` elements inside `<article>` or `<section>`. The whole selector has the specificity of `h2` alone, so it’s easy to override.

Compare with `:is()`, which matches similarly but takes the specificity of its most specific argument:

```css
:is(#main, article) h2 { /* higher specificity */ }
:where(#main, article) h2 { /* only the specificity of h2 */ }
```

Use `:where()` for low-specificity defaults, such as resets or base styles.

## how does css native nesting expand

CSS native nesting lets you write a selector inside another rule. The nested selector is matched relative to the outer selector.

```css
.card {
  color: black;

  &:hover {
    color: blue;
  }

  .title {
    font-weight: bold;
  }
}
```

Conceptually, that becomes:

```css
.card {
  color: black;
}

.card:hover {
  color: blue;
}

.card .title {
  font-weight: bold;
}
```

Use `&` to refer explicitly to the outer selector. Without `&`, CSS treats the nested selector as a descendant:

```css
.button {
  &.active { }  /* .button.active */
  .icon { }     /* .button .icon */
}
```

One detail: nesting isn’t always a simple textual expansion. If the outer rule has a selector list, nested selectors inherit the specificity of its most specific selector—similar to `:is()`.

## how does it actually expand, like for complex selectors on parent and children

Think of each `&` as the **entire parent selector list wrapped in `:is()`**. It isn’t generally expanded into every possible selector combination.

```css
.card > .heading,
#dialog .heading {
  & .icon {
    color: red;
  }
}
```

Conceptually:

```css
:is(.card > .heading, #dialog .heading) .icon {
  color: red;
}
```

A nested selector without `&` means a descendant:

```css
.card,
#dialog {
  .icon { color: red; }
}
```

Conceptually:

```css
:is(.card, #dialog) .icon {
  color: red;
}
```

The position of `&` determines the relationship:

```css
.parent {
  & > .child {}  /* parent > child */
  &.active {}    /* parent.active */
  .theme & {}    /* .theme parent */
}
```

If you use `&` more than once, each occurrence represents the parent list:

```css
.item,
.featured {
  & + & {}
}
```

Conceptually:

```css
:is(.item, .featured) + :is(.item, .featured) {}
```

So this matches any of those elements next to any of those elements. The `:is()` behavior also affects specificity: it uses the specificity of the most specific selector in the parent list. CSS doesn’t necessarily create literal expanded rules—the examples show the equivalent matching behavior.

## for many parents and many children

With multiple parents and multiple children, each child selector is matched against the **parent selector list as a whole**. Conceptually, the parent list becomes `:is(...)`; the browser doesn’t need to generate every parent–child pair.

```css
.parent-a,
.parent-b {
  & > .child-a,
  & > .child-b {
    color: red;
  }
}
```

Equivalent selector behavior:

```css
:is(.parent-a, .parent-b) > .child-a,
:is(.parent-a, .parent-b) > .child-b {
  color: red;
}
```

Without `&`, the child selectors are descendants:

```css
.parent-a,
.parent-b {
  .child-a,
  .child-b {
    color: red;
  }
}
```

Equivalent behavior:

```css
:is(.parent-a, .parent-b) .child-a,
:is(.parent-a, .parent-b) .child-b {
  color: red;
}
```

So each child selector can follow **either** parent selector. For a parent list of *n* selectors and a child list of *m* selectors, that’s conceptually *m* selectors, each referring to the parent list—not *n × m* separately written selectors. (Specificity still reflects the most specific parent selector, as with `:is()`.)

## can you write :is(.father, .mother) :is(.foo, .bar)

Yes. This is valid CSS:

```css
:is(.father, .mother) :is(.foo, .bar) {
  /* styles */
}
```

It matches `.foo` or `.bar` elements that are descendants of `.father` or `.mother`—equivalent in what it matches to:

```css
.father .foo,
.father .bar,
.mother .foo,
.mother .bar {
  /* styles */
}
```

The space between the two `:is()` groups means “descendant.” `:is()` takes the specificity of its most specific argument; here, both groups have class-level specificity.