#

how to append or edit a file via fs in nodejs

The Node.js `fs` (File System) module provides built-in methods to edit and append data to files. You can use either the promise-based API (recommended), synchronous methods, or asynchronous callback methods. \[[1](https://geshan.com.np/blog/2022/04/nodejs-append-to-file/), [2](https://heynode.com/tutorial/what-fs-file-system-module/), [3](https://www.educative.io/answers/what-is-fsstat-in-nodejs), [4](https://transloadit.com/devtips/efficiently-read-files-in-node-js-with-the-fs-module/), [5](https://dev.to/hellonehha/2-nodejs-what-is-fs-module-5bjj)]

📌 Append Data to a File \[[1](https://www.geeksforgeeks.org/node-js/node-js-file-system/)]

Appending adds new content to the end of an existing file without deleting its current contents. \[[1](https://backendless.com/docs/js/file%5Fappend.html), [2](https://www.scaler.com/topics/linux-append-to-file/)]

Using Promises (`fs/promises`)

- Best for modern asynchronous JavaScript.
- Prevents blocking the main execution thread. \[[1](https://ioflood.com/blog/npm-fs/), [2](https://www.linkedin.com/pulse/exploring-file-system-fs-module-nodejs-ewerton-bonfim-jsfjc)]

javascript

```
import { appendFile } from 'fs/promises';

try {
  await appendFile('log.txt', 'New log entry\n');
  console.log('Data appended.');
} catch (err) {
  console.error(err);
}
```

Use code with caution.

Using Synchronous Methods (`fs.appendFileSync`)

- Blocks execution until the operation completes.
- Useful for simple scripts or initialization steps. \[[1](https://geshan.com.np/blog/2022/04/nodejs-append-to-file/), [2](https://medium.com/@filjoseph/exploring-node-js-a994b4ff2fee)]

javascript

```
import fs from 'fs';

try {
  fs.appendFileSync('log.txt', 'New log entry\n');
  console.log('Data appended.');
} catch (err) {
  console.error(err);
}
```

Use code with caution.

***

📌 Edit or Overwrite a File \[[1](https://medium.com/@qhivam.dev/the-fs-module-in-node-js-5d6fc0131436)]

Editing a specific part of a file usually requires reading the file into memory, modifying the string or buffer, and writing it back. \[[1](https://bun.com/docs/guides/write-file/append)]

Overwriting Entire Content (`fs/promises`)

- Replaces all existing content with new data. \[[1](https://www.memberstack.com/blog/write-files-in-node-js)]

javascript

```
import { writeFile } from 'fs/promises';

await writeFile('config.json', JSON.stringify({ status: 'active' }));
```

Use code with caution.

Modifying Existing Content (Read-Modify-Write)

- Loads the content first to target specific text or data structures.

javascript

```
import { readFile, writeFile } from 'fs/promises';

try {
  // 1. Read the file
  const data = await readFile('user.txt', 'utf8');

  // 2. Modify the content in memory
  const updatedData = data.replace('Status: Pending', 'Status: Approved');

  // 3. Write the modified content back
  await writeFile('user.txt', updatedData, 'utf8');
  console.log('File edited successfully.');
} catch (err) {
  console.error(err);
}
```

Use code with caution.

***

📌 Advanced: Write at a Specific Position

For large files where loading the whole file into memory is inefficient, use a file handle to write data at a specific byte offset. \[[1](https://medium.com/@sunnywilson.veshapogu/node-js-fs-readfile-vs-fs-createreadstream-understanding-the-difference-70a24143c518)]

javascript

```
import { open } from 'fs/promises';

let fileHandle;
try {
  // Open file for reading and writing ('r+')
  fileHandle = await open('data.bin', 'r+');

  const buffer = Buffer.from('XYZ');
  const offset = 0;         // Where to start reading from the buffer
  const length = buffer.length; // Number of bytes to write
  const position = 10;      // Byte position in the file to start writing

  await fileHandle.write(buffer, offset, length, position);
} finally {
  await fileHandle?.close();
}
```

Use code with caution.

***

To help narrow down the best approach, tell me:

- What is the **approximate size** of the file you are editing?
- What **file format** are you working with (e.g., .txt, .json, .csv)?
- Do you need to modify data **concurrently** from multiple users or processes?

I can provide a tailored code snippet or suggest optimal streaming options for your exact use case.

- [link](https://geshan.com.np/blog/2022/04/nodejs-append-to-file/)\
  How to append contents to a file using Node.js\
  Apr 26, 2022 — js. To append to an existing or a new file with Node. js we can use the native fs module, there is no need to install any NPM pack...\
  \
  \
  geshan.com.np
- [link](https://heynode.com/tutorial/what-fs-file-system-module/)\
  What Is the Node.js fs (File System) Module?\
  The built-in Node. js file system module helps us store, access, and manage data on our operating system. Commonly used features o...\
  \
  \
  HeyNode
- [link](https://www.educative.io/answers/what-is-fsstat-in-nodejs)\
  What is fs.stat() in Node.js?\
  Node. js libraries provide a number of ways to interact with our file system and process them in several ways. We use Node ( Node ...\
  \
  Educative

Show all

#

in ts in node fs, it says nonshareablebuffer is not assignable to string how to fix

The error occurs because TypeScript strictly differentiates between raw binary data buffers and character strings. The `fs` module functions (like `fs.writeFileSync` or `fs.readFile`) expect a standard string, a `Buffer`, or a shared typed array, while a `NonShareableBuffer` cannot be safely coerced automatically.

Solution 1: Convert the Buffer to a String

If the file expects text content, decode the buffer using the appropriate character encoding.

typescript

```
import * as fs from 'fs';

// Convert the buffer explicitly to a UTF-8 string
const dataString = nonShareableBuffer.toString('utf8');

fs.writeFileSync('output.txt', dataString);
```

Use code with caution.

Solution 2: Pass an Explicit Encoding Option

If you are reading a file, passing an encoding configuration forces Node.js to return a native JavaScript string instead of a raw buffer. \[[1](https://www.reddit.com/r/typescript/comments/hej52r/assigning%5Fbuffer%5Fto%5Fstring%5Fissue/)]

typescript

```
import * as fs from 'fs';

// Specifying 'utf8' ensures the output is typed as a string
const content: string = fs.readFileSync('input.txt', { encoding: 'utf8' });
```

Use code with caution.

Solution 3: Cast through Uint8Array \[[1](https://github.com/nodejs/node/issues/42228)]

Node's file system methods accept standard Uint8Array views. If your object satisfies this structure, cast it to guide the compiler.

typescript

```
import * as fs from 'fs';

// Cast the object if it implements the Uint8Array interface
const binaryData = nonShareableBuffer as unknown as Uint8Array;

fs.writeFileSync('output.bin', binaryData);
```

Use code with caution.

To provide the exact code syntax, could you tell me:

- Are you trying to **read** or **write** a file?

- What **library or API** is generating the `NonShareableBuffer`?

- Is the file content **plain text** or **binary data**?

- [link](https://www.reddit.com/r/typescript/comments/hej52r/assigning%5Fbuffer%5Fto%5Fstring%5Fissue/)\
  Assigning Buffer to string issue : r/typescript\
  Jun 23, 2020 — Providing an encoding argument to readFileSync (in this case the encoding is "utf8" ) causes TypeScript to apply an overloaded sig...\
  \
  Reddit

- [link](https://github.com/nodejs/node/issues/42228)\
  Allow ArrayBuffer as argument to writeFile and friends · Issue #42228 · nodejs/node\
  Mar 5, 2022 — The implementation literally just casts any TypedArray into a Uint8Array : ( https://github.com/nodejs/node/blob/master/lib/intern...\
  \
  \
  GitHub