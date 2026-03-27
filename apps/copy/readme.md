copy

---

from anything anywhere, in the messy world,

to simplicity.

---

it's progressive.

- you can choose from the common methods to apply, even none.
- you can config.

it's flexible.

- you can define what you have in hand.

it's pragmatic.

- you see a extremely minimal ui.
- you can extend by writing code, not installing something of extension spec. it's modular, though.

it's reliable.

- you use proven tech under the hood.

assume (what you wanna copy is):

- web based
- static, no progressive loading

---

install

```sh
pnpm install
```

run

```sh
pnpm add -g parcel
parcel serve 'app.html' --open --dist-dir .build --cache-dir .build/.parcel-cache
```

```sh
# or
pnpm add -g vite
vite --open 'app.html'
```

---
