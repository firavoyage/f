spec_modernize_demo

read only these files:

- index.html
- index.tsx
- app.tsx

todo:

- make index.tsx only as an entry place. it should never change. move all logics to app.
- avoid dom selectors at all
- for cards, given a variable name, put that onto the element via inline style, so it will auto change based on theme. for the text below, inject a style element, pointing to the exact card for that variable, create a pseudo element with the variable as the content
