changes

nov 2026

02

deprecate fp templates.

rarely do you need `reduce` `reduce_right` `map`...

you can do it imperatively by just adding a line of loop.

---

deprecate redundant math fn like `add` `sub` (which basically wraps they operator, since cpp doesnt expose them like py operators i guess). deprecate `summation`.

you do need summation occasionally, but you would likely to prefix sum it, it's o(n) worst case aw, but avoids all messy tles.

it's easy to prefix sum.
