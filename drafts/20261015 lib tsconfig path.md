# .

```
 ~ % cd /home/fira/Documents/f/apps/tools/source
 ...apps/tools/source % b dev
$ trash .build && parcel serve 'source/index.html' --open --dist-dir .build --cache-dir .build/.parcel-cache
Server running at http://localhost:1234
✨ Built in 1.47s
 ...apps/tools/source % b dev
$ trash .build && parcel serve 'source/index.html' --open --dist-dir .build --cache-dir .build/.parcel-cache
🚨 Build failed.


@parcel/core: Failed to resolve 'web/component/icon' from '/home/fira/Documents/f/lib/web/global.ts'

  /home/fira/Documents/f/lib/web/global.ts:23:23
    22 |
  > 23 | import * as icon from 'web/component/icon'
  >    |                       ^^^^^^^^^^^^^^^^^^^^
    24 | use(icon)
    25 |
@parcel/resolver-default: Cannot find module 'web'

@parcel/reporter-dev-server: Could not shutdown devserver because it does not exist.
 ...apps/tools/source % b dev
$ trash .build && parcel serve 'source/index.html' --open --dist-dir .build --cache-dir .build/.parcel-cache
🚨 Build failed.


@parcel/core: Failed to resolve 'web/component/icon' from '/home/fira/Documents/f/lib/web/global.ts'

  /home/fira/Documents/f/lib/web/global.ts:23:23
    22 |
  > 23 | import * as icon from 'web/component/icon'
  >    |                       ^^^^^^^^^^^^^^^^^^^^
    24 | use(icon)
    25 |
@parcel/resolver-default: Cannot find module 'web'

@parcel/reporter-dev-server: Could not shutdown devserver because it does not exist.
 ...apps/tools/source % b dev
$ trash .build && parcel serve 'source/index.html' --open --dist-dir .build --cache-dir .build/.parcel-cache
🚨 Build failed.



@parcel/core: Failed to resolve 'web/component/toast' from '/home/fira/Documents/f/lib/web/clipboard.ts'
  /home/fira/Documents/f/lib/web/clipboard.ts:1:23
  > 1 | import { toast } from "web/component/toast"
  >   |                       ^^^^^^^^^^^^^^^^^^^^^
    2 |
    3 | async function copy_text(text: string) {
@parcel/resolver-default: Cannot find module 'web'

@parcel/reporter-dev-server: Could not shutdown devserver because it does not exist.
 ...apps/tools/source % b dev
$ trash .build && parcel serve 'source/index.html' --open --dist-dir .build --cache-dir .build/.parcel-cache
Server running at http://localhost:1234
✨ Built in 1.71s
 ...apps/tools/source % b dev
$ trash .build && parcel serve 'source/index.html' --open --dist-dir .build --cache-dir .build/.parcel-cache
🚨 Build failed.


@parcel/core: Failed to resolve 'react' from '/home/fira/Documents/f/lib/web/global.ts'

  /home/fira/Documents/f/lib/web/global.ts:5:24
    4 | // Prelude for Web
  > 5 | import * as react from 'react'
  >   |                        ^^^^^^^
    6 | import * as react_use from 'react-use'
    7 | import * as react_hooks from 'lib/web/react'
@parcel/resolver-default: Cannot find module 'react'

@parcel/reporter-dev-server: Could not shutdown devserver because it does not exist.
```

```
 ...Documents/f/lib % cd "/home/fira/Documents/f/lib/test/" && b 'test.ts'
2026-10-15 00:49:51+08:00
2026-10-14 16:49:51
2026-10-14 19:35:51
4 |       "lib/*": ["lib/*"]
                    ^
warn: Non-relative path "lib/*" is not allowed when "baseUrl" is not set (did you forget a leading "./"?)
   at /home/fira/Documents/f/tsconfig.json:4:17
 ...f/lib/test % cd "/home/fira/Documents/f/lib/test/" && b 'test.ts'
2026-10-15 00:50:43+08:00
2026-10-14 16:50:43
2026-10-14 19:36:43
```

```
 ...apps/tools/source % cd /home/fira/Documents/f
 ~/Documents/f % touch tsconfig.json
 ~/Documents/f % code tsconfig.json
 ~/Documents/f % code tsconfig.json
```

```
 ...apps/tools/source % b dev
$ trash .build && parcel serve 'source/index.html' --open --dist-dir .build --cache-dir .build/.parcel-cache
🚨 Build failed.


@parcel/core: Failed to resolve 'react-use' from '/home/fira/Documents/f/lib/web/global.ts'

  /home/fira/Documents/f/lib/web/global.ts:6:28
    5 | import * as react from 'react'
  > 6 | import * as react_use from 'react-use'
  >   |                            ^^^^^^^^^^^
    7 | import * as react_hooks from 'lib/web/react'
    8 | import * as p from 'lib/web/props'
@parcel/resolver-default: Cannot find module 'react-use'

@parcel/reporter-dev-server: Could not shutdown devserver because it does not exist.
 ...apps/tools/source % cd lib
 ...tools/source/lib % b i
bun install v1.3.14 (0d9b296a)

+ @eslint/js@10.0.1
+ @types/node@25.6.0
+ @typescript-eslint/eslint-plugin@8.60.0
+ @typescript-eslint/parser@8.60.0
+ @typescript-eslint/rule-tester@8.62.0
+ @typescript-eslint/utils@8.62.0
+ @typescript/native-preview@7.0.0-dev.20260515.1
+ eslint@10.3.0
+ process@0.11.10
+ tsx@4.21.0
+ typescript@6.0.3
+ typescript-eslint@8.59.3
+ @date-fns/tz@1.5.0
+ chalk@6.0.1
+ date-fns@4.4.0
+ date-fns-tz@3.2.0
+ @floating-ui/react@0.27.20
+ @folder/xdg@4.0.1
+ clsx@2.1.1
+ css.escape@1.5.1
+ fuzzysort@4.0.2
+ lodash-es@4.18.1
+ mousetrap@1.6.5
+ mousetrap-global-bind@1.1.0
+ react@19.2.7
+ react-dom@19.2.7
+ react-use@17.6.1
+ style-to-js@2.0.2
+ tabbable@6.5.0
+ the-new-css-reset@1.11.3
+ yaml@2.9.0

182 packages installed [297.00ms]
 ...tools/source/lib % b dev
error: Script not found "dev"
 ...tools/source/lib % cd ..
 ...apps/tools/source % b dev
$ trash .build && parcel serve 'source/index.html' --open --dist-dir .build --cache-dir .build/.parcel-cache
🚨 Build failed.


@parcel/core: Failed to resolve 'react' from '/home/fira/Documents/f/lib/web/global.ts'

  /home/fira/Documents/f/lib/web/global.ts:5:24
    4 | // Prelude for Web
  > 5 | import * as react from 'react'
  >   |                        ^^^^^^^
    6 | import * as react_use from 'react-use'
    7 | import * as react_hooks from 'lib/web/react'
@parcel/resolver-default: Cannot find module 'react'

@parcel/reporter-dev-server: Could not shutdown devserver because it does not exist.
 ...apps/tools/source % b dev
$ trash .build && parcel serve 'source/index.html' --open --dist-dir .build --cache-dir .build/.parcel-cache
🚨 Build failed.


@parcel/core: Failed to resolve 'react' from '/home/fira/Documents/f/lib/web/global.ts'

  /home/fira/Documents/f/lib/web/global.ts:5:24
    4 | // Prelude for Web
  > 5 | import * as react from 'react'
  >   |                        ^^^^^^^
    6 | import * as react_use from 'react-use'
    7 | import * as react_hooks from 'lib/web/react'
@parcel/resolver-default: Cannot find module 'react'

@parcel/reporter-dev-server: Could not shutdown devserver because it does not exist.
 ...apps/tools/source % b dev
$ trash .build && parcel serve 'source/index.html' --open --dist-dir .build --cache-dir .build/.parcel-cache
🚨 Build failed.


@parcel/core: Failed to resolve 'react' from '/home/fira/Documents/f/lib/web/global.ts'

  /home/fira/Documents/f/lib/web/global.ts:5:24
    4 | // Prelude for Web
  > 5 | import * as react from 'react'
  >   |                        ^^^^^^^
    6 | import * as react_use from 'react-use'
    7 | import * as react_hooks from 'lib/web/react'
@parcel/resolver-default: Cannot find module 'react'

@parcel/reporter-dev-server: Could not shutdown devserver because it does not exist.
 ...apps/tools/source % b dev
$ trash .build && parcel serve 'source/index.html' --open --dist-dir .build --cache-dir .build/.parcel-cache
🚨 Build failed.



@parcel/core: source/lib/web/clipboard.ts does not export 'init_clipboard'
  /home/fira/Documents/f/apps/tools/source/web/component/app.tsx:27:10
    26 |
  > 27 | import { init_clipboard } from 'lib/web/clipboard';
  >    |          ^^^^^^^^^^^^^^
    28 | init_clipboard({toast})
    29 |

@parcel/reporter-dev-server: Could not shutdown devserver because it does not exist.
 ...apps/tools/source % b dev
$ trash .build && parcel serve 'source/index.html' --open --dist-dir .build --cache-dir .build/.parcel-cache
Server running at http://localhost:1234
✨ Built in 1.44s
```

```
 ...apps/tools/source % b i
bun install v1.3.14 (0d9b296a)

Checked 455 installs across 485 packages (no changes) [91.00ms]
```



# . add and update

```
export GIT_DIR="/home/fira/Documents/f/.git/.git_lib"
export GIT_WORK_TREE="/home/fira/Documents/f/lib"

git init
git remote add g https://github.com/firahq/lib.git

git add .
git commit -m '.' || true

git push -f g
```

```
 ~ % export GIT_DIR="/home/fira/Documents/f/.git/.git_lib"
export GIT_WORK_TREE="/home/fira/Documents/f/lib"

git init
git remote add g https://github.com/firahq/lib.git

git add .
git commit -m '.' || true

git push -f g

Reinitialized existing Git repository in /home/fira/Documents/f/.git/.git_lib/
error: remote g already exists.
On branch master
nothing to commit, working tree clean
Enumerating objects: 83, done.
Counting objects: 100% (83/83), done.
Delta compression using up to 12 threads
Compressing objects: 100% (75/75), done.
Writing objects: 100% (83/83), 56.44 KiB | 5.13 MiB/s, done.
Total 83 (delta 1), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (1/1), done.
To https://github.com/firahq/lib.git
 * [new branch]      master -> master
branch 'master' set up to track 'g/master'.
```


