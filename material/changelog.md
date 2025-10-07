# changelog

## 0.1

- initial release

## 1.0

material was once a plain scratch pad for teaching math.

it does not have any "advanced" features coz students can not do so in exams.

it's even not possible to create a segment with given length, or place a point on exact somewhere. you can only do rough things.

later i realized that i was wrong.

i wanna have some beautiful precise images. 

and im not willing to draw the image when making a presentation.

i will do so in preparation and only change some variables (or just let it be static) in teaching.

it could be at its best embed into pre, a powerful markdown presentation web app. 

i remember that it was designed as an image editor (like canva, ps, ai, merge image online) at first.

then the math feature will be part of it. since it converts math geometry into svg.

- refactor!: i thought geogebra can do anything that material can do.
  - ref drafts/material inspirations
  - material should be a language for geometry/graphing like precious for algebra
  - it can be embed in pre (a presentation app)
  - as an image with changeable variables
  - another usage is as photoshop/illustrator/canva
  - but then what features may it have?

the version 1.0 design:

format: .material and .json

material:

a list of fn params separated by linebreaks

fn params are separated by spaces.

```material
view -100 100 -100 100 // x.from .to y.from .to
point x y
circle x y r
ellipse x y rx ry // rx = a, ry = b
hyp // ...
```

only impl the basics (static image, a few geometry elements, no variable)

output: svg

that's simple, isnt it?

<!-- ds api sk-73d207fa058845348639b6b4038fbb66 -->

design and write a static svg library?

interupted: project lsv?! interesting! can i do it in a day?!

design fn:

```js fira
[
{type: point, props: [1,1]}
{type: circle, props: [0, 0, 1]}
]
```

to an image rendered by fabric.js

(config like color theme is in another param)


