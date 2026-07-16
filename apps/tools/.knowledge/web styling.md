<!-- just use markdown heading. more scannable when rendered almost everywhere. i would still use "category:" on `all.md` though. -->

<!-- margin inline or margin lr does not matter. rtl is easy. -->

<!-- it's wise to just use breakpoints and rem. no viewports or clamp. -->

<!-- i might not need opacity. no need to explicitly include color mix i guess. -->

# 0.2

every element should have one class at most. name classes like `MyComponent_child_element`. start with pascal case as the component name and always connect with only one single underscore after that.

use data attr for variant, size, style, state, etc. use native css nesting for data attr.

never write aria attr.

reference the value from predefined design tokens on the global css file of the design system. 

example:

```html
<div class="ProductCard" data-status="featured">
  <img class="ProductCard_image" src="product.jpg" alt="" />

  <div class="ProductCard_content">
    <h3 class="ProductCard_main_title">Wireless Mouse</h3>
    <p class="ProductCard_sub_title">Ergonomic design</p>

    <button class="ProductCard_buy_button" data-variant="primary">
      Add to Cart
    </button>
  </div>
</div>
```

```css
.ProductCard {
  display: grid;
  gap: var(...);

  &[data-status="featured"] {
    border: var(...);
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
  font-size: var(...);
  font-weight: var(...);
}

.ProductCard_sub_title {
  font-size: var(...);
  color: var(...);
}

.ProductCard_buy_button {
  padding: var(...);

  &[data-variant="primary"] {
    background: var(...);
    color: var(...);
  }
}
```

# 0.3

## design token units

convert if any other units are used

### color

- color `oklch`

### typography

- font size `rem`
- line height `[raw number, unitless]`
- letter spacing `em`

### spacing

- padding, margin, and gaps `rem`
- grid flexbox columns `%`
- breakpoints `em`
- max width for text `ch`
- max width for general grids `rem`

### shape

- borders `px`
- border radius `px`
- box shadows `px`

### motion

- duration `ms`
- timing curves `cubic-bezier()`

## class naming

every element should have one class at most. name classes like `MyComponent_child_element`. start with pascal case as the component name and always connect with only one single underscore after that.

use data attr for variant, size, style, state, etc. use native css nesting.

only use class selector and attr selector.

never write any aria attr.

reference the value from predefined design tokens on the global css file of the design system. 

example:

```html
<div class="ProductCard" data-status="featured">
  <img class="ProductCard_image" src="product.jpg" alt="" />

  <div class="ProductCard_content">
    <h3 class="ProductCard_main_title">Wireless Mouse</h3>
    <p class="ProductCard_sub_title">Ergonomic design</p>

    <button class="ProductCard_buy_button" data-variant="primary">
      Add to Cart
    </button>
  </div>
</div>
```

```css
.ProductCard {
  display: grid;
  gap: var(...);

  &[data-status="featured"] {
    border: var(...);
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
  font-size: var(...);
  font-weight: var(...);
}

.ProductCard_sub_title {
  font-size: var(...);
  color: var(...);
}

.ProductCard_buy_button {
  padding: var(...);

  &[data-variant="primary"] {
    background: var(...);
    color: var(...);
  }
}
```

## theming

keep css dry. script to apply theme attrs.

```css
/* 1. Base / Light Mode */
:root {
  --bg-color
  --text-color
}

/* 2. Manual Dark Override */
[data-theme="dark"] {
  --bg-color
  --text-color
}
```

```ts
type ThemeMode = "system" | "light" | "dark";

export async function change_theme(theme: ThemeMode): Promise<void> {
  if (theme == "light" || theme == "dark") {
    document.documentElement.setAttribute("data-theme", theme);
    return;
  }

  const query = window.matchMedia("(prefers-color-scheme: dark)");
  
  async function sync_system(): Promise<void> {
    document.documentElement.setAttribute("data-theme", query.matches ? "dark" : "light");
  }

  await sync_system();
  query.addEventListener("change", sync_system);
}
```

# 0.4

## design token units

convert if any other units are used

### color

- color `oklch`

### typography

- font size `rem`
- line height `[raw number, unitless]`
- letter spacing `em`

### spacing

- padding, margin, and gaps `rem`
- grid flexbox columns `%`
- breakpoints `em`
- max width for text `ch`
- max width for general grids `rem`

### shape

- borders `px`
- border radius `px`
- box shadows `px`

### motion

- duration `ms`
- timing curves `cubic-bezier()`

## class naming

every element must have exact one class. name like `MyComponent_child_element`.

use data attr for variant, size, style, state, etc. use native css nesting.

only use class selector and attr selector.

never write any aria attr.

example:

```html
<div class="ProductCard" data-status="featured">
  <img class="ProductCard_image" src="product.jpg" alt="" />

  <div class="ProductCard_content">
    <h3 class="ProductCard_main_title">Wireless Mouse</h3>
    <p class="ProductCard_sub_title">Ergonomic design</p>

    <button class="ProductCard_buy_button" data-variant="primary">
      Add to Cart
    </button>
  </div>
</div>
```

```css
.ProductCard {
  display: grid;
  gap: var(...);

  &[data-status="featured"] {
    border: var(...);
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
  font-size: var(...);
  font-weight: var(...);
}

.ProductCard_sub_title {
  font-size: var(...);
  color: var(...);
}

.ProductCard_buy_button {
  padding: var(...);

  &[data-variant="primary"] {
    background: var(...);
    color: var(...);
  }
}
```

# 0.5

<!-- deprecate. separate into design token unit and component classname -->
