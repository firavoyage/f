# 0.0

every element should have one class at most

use data attr for variant, size, style, state, etc.

use pascal case as the component name and single underscore snake case for children after that

use native css nesting

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
  gap: 16px;

  &[data-status="featured"] {
    border: 2px solid gold;
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
  font-size: 1.5rem;
  font-weight: 700;
}

.ProductCard_sub_title {
  font-size: 1rem;
  color: gray;
}

.ProductCard_buy_button {
  padding: 8px 16px;

  &[data-variant="primary"] {
    background: blue;
    color: white;
  }
}
```

use predefined design tokens as css variables from the global css file of a design system in practice. 

if not existing, define them. never hardcode.


