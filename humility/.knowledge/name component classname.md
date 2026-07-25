# 0.0

every element must have exact one class. name like `MyComponent_child_element`.

use data attr for variant, size, style, state, etc.

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

expect only class selector and attr selector (native nesting) usage in css.

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

# 0.1

every element must have exact one class. use snake case. name as itself. do not mention its parent.

use attr for variant, size, style, state, etc. no `data-` prefix.

no aria attr.

example:

```html
<div class="product_card" status="featured">
  <img class="image" src="product.jpg" alt="" />

  <div class="content">
    <h3 class="main_title">Wireless Mouse</h3>
    <p class="sub_title">Ergonomic design</p>

    <button class="buy_button" variant="primary">
      Add to Cart
    </button>
  </div>
</div>
```

expect only class selector and attr selector (native nesting) usage in css.

```scss
.product_card {
  display: grid;
  gap: var();

  &[status="featured"] {
    border: var();
  }

  .image {
    width: 100%;
    aspect-ratio: 16 / 9;
  }

  .content {
    display: flex;
    flex-direction: column;

    .main_title {
      font: var(--...);
    }

    .sub_title {
      font: var();
      color: var();
    }

    .buy_button {
      padding: var();

      &[variant="primary"] {
        background: var();
        color: var();
      }
    }
  }
}
```
