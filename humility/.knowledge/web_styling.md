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


