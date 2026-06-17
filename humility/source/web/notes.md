notes

jun 2026

17 

03 20 the object might have changed when you open on console.log

04 00 lodash deep clone is not so flexible. it could not handle primitive function directly.

04 20 arrays are objects. i should have implemented "log params and return" earlier on all possibly relevant fn.

props are objects. hyperscript returns objects as well.

<!-- there are times when im determined. like, i were determined to beat a song in a rhythm game. it's generally unwise i guess. you need concentration. you could not always do that. you should rest. i could not rest when i dont feel right. -->

13 00 i guess i could put export functions together as i could navigate easier.

esm works however fn are arranged. i could create a simple ast parser to create a docs readme or something.

like,

- tag based: all functions, with labels (export or not, only used for one export fn?)
- tree based: export functions as roots, deps as children in order

i might put the entry function at first, or the deps at first. it does not matter much i guess.

currently it's almost strictly dep based, deps first.

18 00 this does not work

```ts
let a = 'foo'
a.foo = 'bar'
log(a.foo)
```


