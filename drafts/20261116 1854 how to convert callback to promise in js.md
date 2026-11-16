# how to convert callback to promise in js

## how to convert callback to promise in js

For a Node-style callback that uses the `(error, result)` convention, wrap it in a `Promise`:

```js
function readFilePromise(path) {
  return new Promise((resolve, reject) => {
    readFile(path, (error, result) => {
      if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    });
  });
}

readFilePromise("notes.txt")
  .then(contents => console.log(contents))
  .catch(error => console.error(error));
```

In Node.js, `util.promisify` can do this for you:

```js
const { promisify } = require("node:util");

const readFilePromise = promisify(readFile);
```

Then use it with `async`/`await`:

```js
try {
  const contents = await readFilePromise("notes.txt");
  console.log(contents);
} catch (error) {
  console.error(error);
}
```

`promisify` expects a callback as the last argument, with the signature `(error, result)`. If the function needs a particular `this` value, bind it first:

```js
const getDataPromise = promisify(api.getData.bind(api));
```

## sleep

A promise-based `sleep` function:

```js
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

async function run() {
  console.log("Starting");
  await sleep(1000); // wait 1 second
  console.log("Done");
}

run();
```

`setTimeout` doesn’t need `promisify`; wrap it directly like this.