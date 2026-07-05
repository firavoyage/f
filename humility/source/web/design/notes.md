notes

jun 2026

23

css might be powerful enough for theming. one page. all themes.

you could ofc create a dedicated app in material you along all of its pages.

jul 2026

05

tailwindcss...

it could save some keystrokes. well, you should not try to save keystrokes.

better to be strategic than tactical. dx > ergonomics

i could alias a word to one or more prop value pairs. and parse the "word" magically, making it asap.

well why not?

```css
.ProductCard {
  display: grid;
  gap: var();

  &[data-status="featured"] {
    border: var();
  }
}

.ProductCard_image {
  width: 100%;
  aspect-ratio: 16 / 9;
}

.ProductCard_content {
  display: flex;
  flex-direction: column;
}

.ProductCard_main_title {
  font-size: var();
  font-weight: var();
}

.ProductCard_sub_title {
  font-size: var();
  color: var();
}

.ProductCard_buy_button {
  padding: var();

  &[data-variant="primary"] {
    background: var();
    color: var();
  }
}
```

```yaml
ProductCard:
  - grid
  - gap-4
  - display: flex
  - status featured:
    - border-4
ProductCard_image:
  width: 100%
  aspect-ratio: 16 / 9
ProductCard_content:
  - flex
  - flex-direction: column
ProductCard_content: flex flex-column
ProductCard_content flex flex-column:
  flex-direction: column
```

does not seem easy. i could not mix list and obj.

dsl? maybe too much.

the easiest approach is

```yaml
classname: tailwind classes # eliminate noise
```

maybe like this

```yaml
ProductCard: 
  .: grid gap-4
  - status featured:
    - border-4
ProductCard_image:
  width: 100%
  aspect-ratio: 16 / 9
ProductCard_content:
  - flex
  - flex-direction: column
ProductCard_content: flex flex-column
```

