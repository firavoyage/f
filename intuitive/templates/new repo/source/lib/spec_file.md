file.

abstract fs like ruby.

change name: snake case. single word.

change behavior: create path when needed, like vscode. handle common issues like dangerous/invalid characters.

<!-- kv. -->

xdg spec.

folders on all platforms.

...

file lib.

tell it how to handle errors (div zero pattern)

(you might repeat div zero on var/prop name and type. but that's generally acceptable?)

(you dont have to wrap, but it's good to avoid magic consts and export the errors)

> rust builtin error types in std (e.g. file)

...

rm the "files" tab.

- success.
- fail.

just list all the failures.

name the methods.

you know them.

awa some non standard ones.

- file name too long (trim?)
- invalid name (convert? how?)
- no space
- no ram
- non existing (auto create the path.)

xdg desktop? (i think so. if we always combine two abstractions, we could simplify it as a pattern.) compatible?

symlink hash?

...

when you store a file

- calc the hash
- store it somewhere in the data folder
- symlink

...

precious, [5/2/26 12:03 PM]
Clear:

Get birth time 

Set birth time. 

Hacky:

Birth time

Birth time arg 1

precious, [5/2/26 12:55 PM]
Path. Data. Config. Cache. You will likely have a string, a node path, or something r/writable. Ofc, you can have path directly which is relative or absolute and ~ will be expanded as home.

Write path. Read path. Stream if needed. 

Append. Edit. Common things.

Get/Set {metadata} Path.

Copy. Move. Remove. 

Non existing path will be created. 

You can config like illegal filename/too long path.

Db/hash symlink might be overkill.

