## firascript - the programming language

a script language fira would like.

### syntax

see syntax.md

### compiler

will fira implement this?

probably not.

coz the choices available are (not ideal but) good enough

so, it's just an idea.

### upd 2025.10.06

i suddenly realized that some syntax "boilerplates" do benefit readability.

like "=>" between params and fn.

sometimes idk whether it's good.

when reading, is it good to place ";" at the end of each line?

i will continue using javascript es6.

split "=" and "==" may also enhance readability

### upd 2025.10.07

```js
for (const _ of repeat(constants.initialcardnumber)) {
  player.hand.push(player.deck.pop());
}
```

my brain auto ignored the boilerplates, like practicing english reading.

i know i can have

```js fira
// as a macro, `{}` inside its params will be auto converted to fn `(){}`
repeat constants.initialcardnumber {
  player.hand.push(player.deck.pop())
  // or push player.hand (pop player.deck)
  // which is generally discouraged, coz it disables chaining
}
```


