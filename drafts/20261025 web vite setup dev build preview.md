<!-- bg: i want to calc contrast of cli colored output... -->

# .

```
 ~ % cd /home/fira/Documents/f/apps/tools
 ...f/apps/tools % b dev
$ trash .build && parcel serve 'source/index.html' --open --dist-dir .build --cache-dir .build/.parcel-cache
Server running at http://localhost:1234
Installing @parcel/resolver-default...

@parcel/package-manager: yarn: package.json: No license field
🚨 Build failed.


Error: Failed to install @parcel/resolver-default: Yarn failed to
install modules:Child process failed

Server running at http://localhost:1234
🚨 Build failed.


Error: ENOENT: no such file or directory, open
'/home/fira/Documents/f/apps/tools/node_modules/.pnpm/@parcel+config-default@2.16.4_@parcel+core@2.16.4_@swc+helpers@0.5.23__@swc+helpers@0.5.23/node_modules/@parcel/config-default/index.json'

  Error: ENOENT: no such file or directory, open
  '/home/fira/Documents/f/apps/tools/node_modules/.pnpm/@parcel+config-default@2.16.4_@parcel+core@2.16.4_@swc+helpers@0.5.23__@swc+helpers@0.5.23/node_modules/@parcel/config-default/index.json'
Error: ENOENT: no such file or directory, open '/home/fira/Documents/f/apps/tools/.build/.parcel-cache/5c7043c7c2bc988e-BundleGraph.701618.6'
    at async open (node:internal/fs/promises:637:25)
    at async Object.writeFile (node:internal/fs/promises:1239:14)
    at async $2a386c23470d420c$export$c4e0ef2ab73c21e7.writeFile (/home/fira/Documents/f/apps/tools/node_modules/.pnpm/@parcel+fs@2.16.4_@parcel+core@2.16.4_@swc+helpers@0.5.23_/node_modules/@parcel/fs/lib/index.js:1148:9)
    at async LMDBCache.setLargeBlob (/home/fira/Documents/f/apps/tools/node_modules/.pnpm/@parcel+cache@2.16.4_@parcel+core@2.16.4_@swc+helpers@0.5.23_/node_modules/@parcel/cache/lib/LMDBCache.js:117:5)
    at async Promise.all (index 0)
    at async RequestTracker.writeToCache (/home/fira/Documents/f/apps/tools/node_modules/.pnpm/@parcel+core@2.16.4_@swc+helpers@0.5.23/node_modules/@parcel/core/lib/RequestTracker.js:868:7)
    at async Parcel._end (/home/fira/Documents/f/apps/tools/node_modules/.pnpm/@parcel+core@2.16.4_@swc+helpers@0.5.23/node_modules/@parcel/core/lib/Parcel.js:221:5)
    at async unsubscribe (/home/fira/Documents/f/apps/tools/node_modules/.pnpm/@parcel+core@2.16.4_@swc+helpers@0.5.23/node_modules/@parcel/core/lib/Parcel.js:279:9)
    at async exit (/home/fira/Documents/f/apps/tools/node_modules/.pnpm/parcel@2.16.4_@swc+helpers@0.5.23/node_modules/parcel/lib/cli.js:284:7)
    at async ReadStream.<anonymous> (/home/fira/Documents/f/apps/tools/node_modules/.pnpm/parcel@2.16.4_@swc+helpers@0.5.23/node_modules/parcel/lib/cli.js:318:11) {
  errno: -2,
  code: 'ENOENT',
  syscall: 'open',
  path: '/home/fira/Documents/f/apps/tools/.build/.parcel-cache/5c7043c7c2bc988e-BundleGraph.701618.6'
}
error: script "dev" exited with code 1
 ...f/apps/tools % b dev
$ trash .build && parcel serve 'source/index.html' --open --dist-dir .build --cache-dir .build/.parcel-cache
trash: cannot trash non existent '.build'
error: script "dev" exited with code 74
 ...f/apps/tools % b dev
$ trash .build && parcel serve 'source/index.html' --open --dist-dir .build --cache-dir .build/.parcel-cache
trash: cannot trash non existent '.build'
error: script "dev" exited with code 74
 ...f/apps/tools % b dev
$ trash .build && parcel serve 'source/index.html' --open --dist-dir .build --cache-dir .build/.parcel-cache
trash: cannot trash non existent '.build'
error: script "dev" exited with code 74
 ...f/apps/tools % trash .build; parcel serve 'source/index.html' --open --dist-dir .build --cache-dir .build/.parcel-cache
trash: cannot trash non existent '.build'
Server running at http://localhost:1234
✨ Built in 20ms
Error: ENOENT: no such file or directory, open '/home/fira/Documents/f/apps/tools/.build/.parcel-cache/5c7043c7c2bc988e-BundleGraph.704395.o'
    at async open (node:internal/fs/promises:637:25)
    at async Object.writeFile (node:internal/fs/promises:1239:14)
    at async $2a386c23470d420c$export$c4e0ef2ab73c21e7.writeFile (/home/fira/.local/bin/global/5/.pnpm/@parcel+fs@2.16.4_@parcel+core@2.16.4_@swc+helpers@0.5.21_/node_modules/@parcel/fs/lib/index.js:1148:9)
    at async LMDBCache.setLargeBlob (/home/fira/.local/bin/global/5/.pnpm/@parcel+cache@2.16.4_@parcel+core@2.16.4_@swc+helpers@0.5.21_/node_modules/@parcel/cache/lib/LMDBCache.js:117:5)
    at async Promise.all (index 0)
    at async RequestTracker.writeToCache (/home/fira/.local/bin/global/5/.pnpm/@parcel+core@2.16.4_@swc+helpers@0.5.21/node_modules/@parcel/core/lib/RequestTracker.js:868:7)
    at async Parcel._end (/home/fira/.local/bin/global/5/.pnpm/@parcel+core@2.16.4_@swc+helpers@0.5.21/node_modules/@parcel/core/lib/Parcel.js:221:5)
    at async unsubscribe (/home/fira/.local/bin/global/5/.pnpm/@parcel+core@2.16.4_@swc+helpers@0.5.21/node_modules/@parcel/core/lib/Parcel.js:279:9)
    at async exit (/home/fira/.local/bin/global/5/.pnpm/parcel@2.16.4_@swc+helpers@0.5.21/node_modules/parcel/lib/cli.js:284:7)
    at async ReadStream.<anonymous> (/home/fira/.local/bin/global/5/.pnpm/parcel@2.16.4_@swc+helpers@0.5.21/node_modules/parcel/lib/cli.js:318:11) {
  errno: -2,
  code: 'ENOENT',
  syscall: 'open',
  path: '/home/fira/Documents/f/apps/tools/.build/.parcel-cache/5c7043c7c2bc988e-BundleGraph.704395.o'
}
 ...f/apps/tools % b dev
$ trash .build; parcel serve 'source/index.html' --open --dist-dir .build --cache-dir .build/.parcel-cache
trash: cannot trash non existent '.build'
Server running at http://localhost:1234
✨ Built in 27ms
Error: ENOENT: no such file or directory, open '/home/fira/Documents/f/apps/tools/.build/.parcel-cache/5c7043c7c2bc988e-BundleGraph.708234.c'
    at async open (node:internal/fs/promises:637:25)
    at async Object.writeFile (node:internal/fs/promises:1239:14)
    at async $2a386c23470d420c$export$c4e0ef2ab73c21e7.writeFile (/home/fira/.local/bin/global/5/.pnpm/@parcel+fs@2.16.4_@parcel+core@2.16.4_@swc+helpers@0.5.21_/node_modules/@parcel/fs/lib/index.js:1148:9)
    at async LMDBCache.setLargeBlob (/home/fira/.local/bin/global/5/.pnpm/@parcel+cache@2.16.4_@parcel+core@2.16.4_@swc+helpers@0.5.21_/node_modules/@parcel/cache/lib/LMDBCache.js:117:5)
    at async Promise.all (index 0)
    at async RequestTracker.writeToCache (/home/fira/.local/bin/global/5/.pnpm/@parcel+core@2.16.4_@swc+helpers@0.5.21/node_modules/@parcel/core/lib/RequestTracker.js:868:7)
    at async Parcel._end (/home/fira/.local/bin/global/5/.pnpm/@parcel+core@2.16.4_@swc+helpers@0.5.21/node_modules/@parcel/core/lib/Parcel.js:221:5)
    at async unsubscribe (/home/fira/.local/bin/global/5/.pnpm/@parcel+core@2.16.4_@swc+helpers@0.5.21/node_modules/@parcel/core/lib/Parcel.js:279:9)
    at async exit (/home/fira/.local/bin/global/5/.pnpm/parcel@2.16.4_@swc+helpers@0.5.21/node_modules/parcel/lib/cli.js:284:7)
    at async ReadStream.<anonymous> (/home/fira/.local/bin/global/5/.pnpm/parcel@2.16.4_@swc+helpers@0.5.21/node_modules/parcel/lib/cli.js:318:11) {
  errno: -2,
  code: 'ENOENT',
  syscall: 'open',
  path: '/home/fira/Documents/f/apps/tools/.build/.parcel-cache/5c7043c7c2bc988e-BundleGraph.708234.c'
}
error: script "dev" exited with code 1
 ...f/apps/tools % parcel build 'source/index.html' --dist-dir build --cache-dir build/.parcel-cache --no-content-hash
✨ Built in 2.19s

build/index.html                  349 B     88ms
build/favicon.9a883d83.svg        227 B     73ms
build/source.14f289f2.js      633.38 kB    861ms
build/source.6ab9e212.css      18.64 kB     82ms
 ...f/apps/tools % cd source
 ...apps/tools/source % parcel build 'index.html' --dist-dir build --cache-dir build/.parcel-cache --no-content-hash
✨ Built in 2.20s

build/index.html                  349 B     85ms
build/favicon.2f05075b.svg        227 B     77ms
build/source.b5e331b5.js      633.38 kB    836ms
build/source.be7097c4.css      18.64 kB     78ms
```

```
 ...f/apps/tools % parcel build '/home/fira/Documents/f/apps/tools/source/index.html' --dist-dir build  --no-content-hash               ✨ Built in 4.42s

build/index.html                  349 B    166ms
build/favicon.9a883d83.svg        227 B    120ms
build/source.14f289f2.js      633.38 kB    1.45s
build/source.6ab9e212.css      18.64 kB    155ms
 ...f/apps/tools % parcel build '/home/fira/Documents/f/apps/tools/source/index.html' --dist-dir build  --no-content-hash
✨ Built in 876ms

build/index.html                  349 B    166ms
build/favicon.9a883d83.svg        227 B    120ms
build/source.14f289f2.js      633.38 kB    1.45s
build/source.6ab9e212.css      18.64 kB    155ms
 ...f/apps/tools % b i
bun install v1.3.14 (0d9b296a)

+ @eslint/js@10.0.1
+ @parcel/transformer-sass@2.16.4
+ @parcel/transformer-stylus@2.16.4
+ @types/node@25.6.0
+ @types/react@19.2.17
+ @types/react-dom@19.2.3
+ @typescript-eslint/eslint-plugin@8.60.0
+ @typescript-eslint/parser@8.60.0
+ @typescript-eslint/rule-tester@8.62.0
+ @typescript-eslint/utils@8.62.0
+ @typescript/native-preview@7.0.0-dev.20260515.1
+ buffer@6.0.3
+ chokidar@5.0.0
+ crypto-browserify@3.12.1
+ eslint@10.3.0
+ events@3.3.0
+ os-browserify@0.3.0
+ path-browserify@1.0.1
+ process@0.11.10
+ stream-browserify@3.0.0
+ tsx@4.21.0
+ typescript@6.0.3
+ typescript-eslint@8.59.3
+ url@0.11.4
+ util@0.12.5
+ @floating-ui/react@0.27.20
+ @folder/xdg@4.0.1
+ clsx@2.1.1
+ css.escape@1.5.1
+ fuzzysort@4.0.2
+ lib@github:firahq/lib#b863439
+ lodash-es@4.18.1
+ mousetrap@1.6.5
+ mousetrap-global-bind@1.1.0
+ react@19.2.7
+ react-dom@19.2.7
+ react-use@17.6.1
+ style-to-js@2.0.2
+ tabbable@6.5.0
+ the-new-css-reset@1.11.3
+ trash@10.1.1
+ yaml@2.9.0

421 packages installed [818.00ms]
 ...f/apps/tools % parcel build '/home/fira/Documents/f/apps/tools/source/index.html' --dist-dir build  --no-content-hash
✨ Built in 3.93s

build/index.html                  349 B    167ms
build/favicon.9a883d83.svg        227 B    128ms
build/source.14f289f2.js      633.38 kB    1.52s
build/source.6ab9e212.css      18.64 kB    154ms
 ...f/apps/tools % parcel build '/home/fira/Documents/f/apps/tools/source/index.html' --dist-dir build  --no-content-hash
✨ Built in 3.93s

build/index.html                  349 B    170ms
build/favicon.9a883d83.svg        227 B    184ms
build/source.14f289f2.js      633.38 kB    1.48s
build/source.6ab9e212.css      18.64 kB    154ms
 ...f/apps/tools % parcel build '/home/fira/Documents/f/apps/tools/source/index.html' --dist-dir build --cache-dir build/.parcel-cache --no-content-hash
✨ Built in 4.04s

build/index.html                  349 B    167ms
build/favicon.9a883d83.svg        227 B    139ms
build/source.14f289f2.js      633.38 kB    1.54s
build/source.6ab9e212.css      18.64 kB    154ms
 ...f/apps/tools % vite build 'source/index.html' --outDir build --emptyOutDir
vite v8.0.12 building client environment for production...
✓ 1 modules transformed.
✗ Build failed in 36ms
error during build:
Build failed with 1 error:

[UNRESOLVED_ENTRY] Error: Cannot resolve entry module source/index.html/index.html.

    at aggregateBindingErrorsIntoJsError (file:///home/fira/.local/bin/global/5/.pnpm/rolldown@1.0.0/node_modules/rolldown/dist/shared/error-BrnLyQ-g.mjs:48:18)
    at unwrapBindingResult (file:///home/fira/.local/bin/global/5/.pnpm/rolldown@1.0.0/node_modules/rolldown/dist/shared/error-BrnLyQ-g.mjs:18:128)
    at #build (file:///home/fira/.local/bin/global/5/.pnpm/rolldown@1.0.0/node_modules/rolldown/dist/shared/rolldown-build-D_ShytiL.mjs:3257:34)
    at async buildEnvironment (file:///home/fira/.local/bin/global/5/.pnpm/vite@8.0.12_@types+node@25.7.0_esbuild@0.27.7_jiti@2.7.0_terser@5.47.1_tsx@4.21.0_yaml@2.9.0/node_modules/vite/dist/node/chunks/node.js:33052:64)
    at async Object.build (file:///home/fira/.local/bin/global/5/.pnpm/vite@8.0.12_@types+node@25.7.0_esbuild@0.27.7_jiti@2.7.0_terser@5.47.1_tsx@4.21.0_yaml@2.9.0/node_modules/vite/dist/node/chunks/node.js:33474:19)
    at async Object.buildApp (file:///home/fira/.local/bin/global/5/.pnpm/vite@8.0.12_@types+node@25.7.0_esbuild@0.27.7_jiti@2.7.0_terser@5.47.1_tsx@4.21.0_yaml@2.9.0/node_modules/vite/dist/node/chunks/node.js:33471:153)
    at async CAC.<anonymous> (file:///home/fira/.local/bin/global/5/.pnpm/vite@8.0.12_@types+node@25.7.0_esbuild@0.27.7_jiti@2.7.0_terser@5.47.1_tsx@4.21.0_yaml@2.9.0/node_modules/vite/dist/node/cli.js:778:3) {
  errors: [Getter/Setter]
}
 ...f/apps/tools % vite build 'source' --outDir build --emptyOutDir
vite v8.0.12 building client environment for production...

Unable to parse HTML; parse5 error code end-tag-without-matching-open-element
 at /home/fira/Documents/f/apps/tools/source/index.html:9:66
7  |      console.info = () => {}
8  |    </script>
9  |    <link rel="icon" type="image/svg+xml" href='asset/favicon.svg'></link>
   |                                                                   ^^^^^^^
10 |  </head>
11 |  <body>
✓ 1295 modules transformed.
computing gzip size...
source/build/assets/favicon-CNrbILRy.svg    0.28 kB │ gzip:   0.20 kB
source/build/index.html                     0.47 kB │ gzip:   0.32 kB
source/build/assets/index-CTPI4-Jz.css     21.03 kB │ gzip:   4.56 kB
source/build/assets/index-CvlJMKCN.js     635.07 kB │ gzip: 204.71 kB

✓ built in 328ms
[plugin builtin:vite-reporter]
(!) Some chunks are larger than 500 kB after minification. Consider:
- Using dynamic import() to code-split the application
- Use build.rolldownOptions.output.codeSplitting to improve chunking: https://rolldown.rs/reference/OutputOptions.codeSplitting
- Adjust chunk size limit for this warning via build.chunkSizeWarningLimit.
 ...f/apps/tools % vite build 'source' --outDir build --emptyOutDir
vite v8.0.12 building client environment for production...

Unable to parse HTML; parse5 error code end-tag-without-matching-open-element
 at /home/fira/Documents/f/apps/tools/source/index.html:9:66
7  |      console.info = () => {}
8  |    </script>
9  |    <link rel="icon" type="image/svg+xml" href='asset/favicon.svg'></link>
   |                                                                   ^^^^^^^
10 |  </head>
11 |  <body>
✓ 1295 modules transformed.
computing gzip size...
source/build/assets/favicon-CNrbILRy.svg    0.28 kB │ gzip:   0.20 kB
source/build/index.html                     0.47 kB │ gzip:   0.32 kB
source/build/assets/index-CTPI4-Jz.css     21.03 kB │ gzip:   4.56 kB
source/build/assets/index-CvlJMKCN.js     635.07 kB │ gzip: 204.71 kB

✓ built in 292ms
[plugin builtin:vite-reporter]
(!) Some chunks are larger than 500 kB after minification. Consider:
- Using dynamic import() to code-split the application
- Use build.rolldownOptions.output.codeSplitting to improve chunking: https://rolldown.rs/reference/OutputOptions.codeSplitting
- Adjust chunk size limit for this warning via build.chunkSizeWarningLimit.
 ...f/apps/tools % vite build 'source/web' --outDir build --emptyOutDir
vite v8.0.12 building client environment for production...

Unable to parse HTML; parse5 error code end-tag-without-matching-open-element
 at /home/fira/Documents/f/apps/tools/source/web/index.html:9:69
7  |      console.info = () => {}
8  |    </script>
9  |    <link rel="icon" type="image/svg+xml" href='../asset/favicon.svg'></link>
   |                                                                      ^^^^^^^
10 |  </head>
11 |  <body>
✓ 1295 modules transformed.
computing gzip size...
source/web/build/assets/favicon-CNrbILRy.svg    0.28 kB │ gzip:   0.20 kB
source/web/build/index.html                     0.47 kB │ gzip:   0.32 kB
source/web/build/assets/index-CTPI4-Jz.css     21.03 kB │ gzip:   4.56 kB
source/web/build/assets/index-CvlJMKCN.js     635.07 kB │ gzip: 204.71 kB

✓ built in 288ms
[plugin builtin:vite-reporter]
(!) Some chunks are larger than 500 kB after minification. Consider:
- Using dynamic import() to code-split the application
- Use build.rolldownOptions.output.codeSplitting to improve chunking: https://rolldown.rs/reference/OutputOptions.codeSplitting
- Adjust chunk size limit for this warning via build.chunkSizeWarningLimit.
```

```
 ...f/apps/tools % sudo systemctl restart launch

 ...f/apps/tools % sudo systemctl restart launch
```

```
 ...f/apps/tools % vite --help
vite/8.0.12

Usage:
  $ vite [root]

Commands:
  [root]           start dev server
  build [root]     build for production
  optimize [root]  pre-bundle dependencies (deprecated, the pre-bundle process runs automatically and does not need to be called)
  preview [root]   locally preview production build

For more info, run any command with the `--help` flag:
  $ vite --help
  $ vite build --help
  $ vite optimize --help
  $ vite preview --help

Options:
  --host [host]            [string] specify hostname
  --port <port>            [number] specify port
  --open [path]            [boolean | string] open browser on startup
  --cors                   [boolean] enable CORS
  --strictPort             [boolean] exit if specified port is already in use
  --force                  [boolean] force the optimizer to ignore the cache and re-bundle
  --experimentalBundle     [boolean] use experimental full bundle mode (this is highly experimental)
  -c, --config <file>      [string] use specified config file
  --base <path>            [string] public base path (default: /)
  -l, --logLevel <level>   [string] info | warn | error | silent
  --clearScreen            [boolean] allow/disable clear screen when logging
  --configLoader <loader>  [string] use 'bundle' to bundle the config with Rolldown, or 'runner' (experimental) to process it on the fly, or 'native' (experimental) to load using the native runtime (default: bundle)
  -d, --debug [feat]       [string | boolean] show debug logs
  -f, --filter <filter>    [string] filter debug logs
  -m, --mode <mode>        [string] set env mode
  -h, --help               Display this message
  -v, --version            Display version number
```

```
 ...f/apps/tools % cd source/web
 ...tools/source/web % vite dev

  VITE v8.0.12  ready in 130 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
(!) Failed to run dependency scan. Skipping dependency pre-bundling. Error: The following dependencies are imported but could not be resolved:

  web/design/app.css (imported by /home/fira/Documents/f/apps/tools/source/web/component/app.tsx)
  web/component/toast (imported by /home/fira/Documents/f/apps/tools/source/web/component/app.tsx)
  web/component/list (imported by /home/fira/Documents/f/apps/tools/source/web/component/app.tsx)
  web/component/icon (imported by /home/fira/Documents/f/apps/tools/source/web/component/app.tsx)
  web/design/utilitarian/utilitarian.css (imported by /home/fira/Documents/f/apps/tools/source/web/component/app.tsx)
  action/tools (imported by /home/fira/Documents/f/apps/tools/source/web/component/app.tsx)
  web/component/menu (imported by /home/fira/Documents/f/apps/tools/source/web/component/app.tsx)
  web/component/main (imported by /home/fira/Documents/f/apps/tools/source/web/component/app.tsx)
  web/component/sidebar (imported by /home/fira/Documents/f/apps/tools/source/web/component/app.tsx)
  web/component/shortcuts (imported by /home/fira/Documents/f/apps/tools/source/web/component/app.tsx)
  web/component/app (imported by /home/fira/Documents/f/apps/tools/source/web/component/commands.tsx)

Are they installed?
    at file:///home/fira/.local/bin/global/5/.pnpm/vite@8.0.12_@types+node@25.7.0_esbuild@0.27.7_jiti@2.7.0_terser@5.47.1_tsx@4.21.0_yaml@2.9.0/node_modules/vite/dist/node/chunks/node.js:31432:33
    at async file:///home/fira/.local/bin/global/5/.pnpm/vite@8.0.12_@types+node@25.7.0_esbuild@0.27.7_jiti@2.7.0_terser@5.47.1_tsx@4.21.0_yaml@2.9.0/node_modules/vite/dist/node/chunks/node.js:23221:15
^C
```

```
 ...tools/source/web % vite --open 'index.html'

  VITE v8.0.12  ready in 118 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help

Unable to parse HTML; parse5 error code end-tag-without-matching-open-element
 at /home/fira/Documents/f/apps/tools/source/web/index.html:9:69
7  |      console.info = () => {}
8  |    </script>
9  |    <link rel="icon" type="image/svg+xml" href='../asset/favicon.svg'></link>
   |                                                                      ^^^^^^^
10 |  </head>
11 |  <body>
11:35:36 PM [vite] (client) Pre-transform error: Failed to resolve import "web/design/utilitarian/utilitarian.css" from "component/app.tsx". Does the file exist?
  Plugin: vite:import-analysis
  File: /home/fira/Documents/f/apps/tools/source/web/component/app.tsx:1:7
  1  |  import "web/design/utilitarian/utilitarian.css";
     |          ^
  2  |  import "web/design/app.css";
  3  |  import { cloneDeep } from "lodash-es";
11:35:36 PM [vite] (client) Pre-transform error: Failed to resolve import "web/component/app" from "component/commands.tsx". Does the file exist?
  Plugin: vite:import-analysis
  File: /home/fira/Documents/f/apps/tools/source/web/component/commands.tsx:1:24
  1  |  import { command } from "web/component/app";
     |                           ^
  2  |  import { Scroll } from "./scroll";
  3  |  import { Button } from "./button";
11:35:36 PM [vite] (client) Pre-transform error: Failed to resolve import "web/design/utilitarian/utilitarian.css" from "component/app.tsx". Does the file exist?
  Plugin: vite:import-analysis
  File: /home/fira/Documents/f/apps/tools/source/web/component/app.tsx:1:7
  1  |  import "web/design/utilitarian/utilitarian.css";
     |          ^
  2  |  import "web/design/app.css";
  3  |  import { cloneDeep } from "lodash-es";
11:35:36 PM [vite] (client) Pre-transform error: Failed to resolve import "web/design/utilitarian/utilitarian.css" from "component/app.tsx". Does the file exist?
  Plugin: vite:import-analysis
  File: /home/fira/Documents/f/apps/tools/source/web/component/app.tsx:1:7
  1  |  import "web/design/utilitarian/utilitarian.css";
     |          ^
  2  |  import "web/design/app.css";
  3  |  import { cloneDeep } from "lodash-es"; (x2)
11:35:36 PM [vite] (client) Pre-transform error: Failed to resolve import "web/component/app" from "component/commands.tsx". Does the file exist?
  Plugin: vite:import-analysis
  File: /home/fira/Documents/f/apps/tools/source/web/component/commands.tsx:1:24
  1  |  import { command } from "web/component/app";
     |                           ^
  2  |  import { Scroll } from "./scroll";
  3  |  import { Button } from "./button";

Unable to parse HTML; parse5 error code end-tag-without-matching-open-element
 at /home/fira/Documents/f/apps/tools/source/web/index.html:9:69
7  |      console.info = () => {}
8  |    </script>
9  |    <link rel="icon" type="image/svg+xml" href='../asset/favicon.svg'></link>
   |                                                                      ^^^^^^^
10 |  </head>
11 |  <body>
11:35:37 PM [vite] Internal server error: Failed to resolve import "web/design/utilitarian/utilitarian.css" from "component/app.tsx". Does the file exist?
  Plugin: vite:import-analysis
  File: /home/fira/Documents/f/apps/tools/source/web/component/app.tsx:1:7
  1  |  import "web/design/utilitarian/utilitarian.css";
     |          ^
  2  |  import "web/design/app.css";
  3  |  import { cloneDeep } from "lodash-es";
      at TransformPluginContext._formatLog (file:///home/fira/.local/bin/global/5/.pnpm/vite@8.0.12_@types+node@25.7.0_esbuild@0.27.7_jiti@2.7.0_terser@5.47.1_tsx@4.21.0_yaml@2.9.0/node_modules/vite/dist/node/chunks/node.js:30408:39)
      at TransformPluginContext.error (file:///home/fira/.local/bin/global/5/.pnpm/vite@8.0.12_@types+node@25.7.0_esbuild@0.27.7_jiti@2.7.0_terser@5.47.1_tsx@4.21.0_yaml@2.9.0/node_modules/vite/dist/node/chunks/node.js:30405:14)
      at normalizeUrl (file:///home/fira/.local/bin/global/5/.pnpm/vite@8.0.12_@types+node@25.7.0_esbuild@0.27.7_jiti@2.7.0_terser@5.47.1_tsx@4.21.0_yaml@2.9.0/node_modules/vite/dist/node/chunks/node.js:27662:18)
      at async file:///home/fira/.local/bin/global/5/.pnpm/vite@8.0.12_@types+node@25.7.0_esbuild@0.27.7_jiti@2.7.0_terser@5.47.1_tsx@4.21.0_yaml@2.9.0/node_modules/vite/dist/node/chunks/node.js:27725:30
      at async Promise.all (index 0)
      at async TransformPluginContext.transform (file:///home/fira/.local/bin/global/5/.pnpm/vite@8.0.12_@types+node@25.7.0_esbuild@0.27.7_jiti@2.7.0_terser@5.47.1_tsx@4.21.0_yaml@2.9.0/node_modules/vite/dist/node/chunks/node.js:27693:4)
      at async EnvironmentPluginContainer.transform (file:///home/fira/.local/bin/global/5/.pnpm/vite@8.0.12_@types+node@25.7.0_esbuild@0.27.7_jiti@2.7.0_terser@5.47.1_tsx@4.21.0_yaml@2.9.0/node_modules/vite/dist/node/chunks/node.js:30193:14)
      at async loadAndTransform (file:///home/fira/.local/bin/global/5/.pnpm/vite@8.0.12_@types+node@25.7.0_esbuild@0.27.7_jiti@2.7.0_terser@5.47.1_tsx@4.21.0_yaml@2.9.0/node_modules/vite/dist/node/chunks/node.js:24511:26)
      at async viteTransformMiddleware (file:///home/fira/.local/bin/global/5/.pnpm/vite@8.0.12_@types+node@25.7.0_esbuild@0.27.7_jiti@2.7.0_terser@5.47.1_tsx@4.21.0_yaml@2.9.0/node_modules/vite/dist/node/chunks/node.js:24305:20)
11:35:37 PM [vite] (client) Pre-transform error: Failed to resolve import "web/component/app" from "component/commands.tsx". Does the file exist?
  Plugin: vite:import-analysis
  File: /home/fira/Documents/f/apps/tools/source/web/component/commands.tsx:1:24
  1  |  import { command } from "web/component/app";
     |                           ^
  2  |  import { Scroll } from "./scroll";
  3  |  import { Button } from "./button";

Unable to parse HTML; parse5 error code end-tag-without-matching-open-element
 at /home/fira/Documents/f/apps/tools/source/web/index.html:9:69
7  |      console.info = () => {}
8  |    </script>
9  |    <link rel="icon" type="image/svg+xml" href='../asset/favicon.svg'></link>
   |                                                                      ^^^^^^^
10 |  </head>
11 |  <body>
11:35:37 PM [vite] (client) ✨ new dependencies optimized: @floating-ui/react, fuzzysort, lib/web/clipboard, lib/web/global, lib/web/use keyboard, lib/web/use sync theme, lib/web/use window active, lodash-es, react-dom/client, react-use, react, react/jsx-dev-runtime, tabbable

Unable to parse HTML; parse5 error code end-tag-without-matching-open-element
 at /home/fira/Documents/f/apps/tools/source/web/index.html:9:69
7  |      console.info = () => {}
8  |    </script>
9  |    <link rel="icon" type="image/svg+xml" href='../asset/favicon.svg'></link>
   |                                                                      ^^^^^^^
10 |  </head>
11 |  <body>
11:35:50 PM [vite] Internal server error: Failed to resolve import "web/design/utilitarian/utilitarian.css" from "component/app.tsx". Does the file exist?
  Plugin: vite:import-analysis
  File: /home/fira/Documents/f/apps/tools/source/web/component/app.tsx:1:7
  1  |  import "web/design/utilitarian/utilitarian.css";
     |          ^
  2  |  import "web/design/app.css";
  3  |  import { cloneDeep } from "lodash-es";
      at TransformPluginContext._formatLog (file:///home/fira/.local/bin/global/5/.pnpm/vite@8.0.12_@types+node@25.7.0_esbuild@0.27.7_jiti@2.7.0_terser@5.47.1_tsx@4.21.0_yaml@2.9.0/node_modules/vite/dist/node/chunks/node.js:30408:39)
      at TransformPluginContext.error (file:///home/fira/.local/bin/global/5/.pnpm/vite@8.0.12_@types+node@25.7.0_esbuild@0.27.7_jiti@2.7.0_terser@5.47.1_tsx@4.21.0_yaml@2.9.0/node_modules/vite/dist/node/chunks/node.js:30405:14)
      at normalizeUrl (file:///home/fira/.local/bin/global/5/.pnpm/vite@8.0.12_@types+node@25.7.0_esbuild@0.27.7_jiti@2.7.0_terser@5.47.1_tsx@4.21.0_yaml@2.9.0/node_modules/vite/dist/node/chunks/node.js:27662:18)
      at async file:///home/fira/.local/bin/global/5/.pnpm/vite@8.0.12_@types+node@25.7.0_esbuild@0.27.7_jiti@2.7.0_terser@5.47.1_tsx@4.21.0_yaml@2.9.0/node_modules/vite/dist/node/chunks/node.js:27725:30
      at async Promise.all (index 0)
      at async TransformPluginContext.transform (file:///home/fira/.local/bin/global/5/.pnpm/vite@8.0.12_@types+node@25.7.0_esbuild@0.27.7_jiti@2.7.0_terser@5.47.1_tsx@4.21.0_yaml@2.9.0/node_modules/vite/dist/node/chunks/node.js:27693:4)
      at async EnvironmentPluginContainer.transform (file:///home/fira/.local/bin/global/5/.pnpm/vite@8.0.12_@types+node@25.7.0_esbuild@0.27.7_jiti@2.7.0_terser@5.47.1_tsx@4.21.0_yaml@2.9.0/node_modules/vite/dist/node/chunks/node.js:30193:14)
      at async loadAndTransform (file:///home/fira/.local/bin/global/5/.pnpm/vite@8.0.12_@types+node@25.7.0_esbuild@0.27.7_jiti@2.7.0_terser@5.47.1_tsx@4.21.0_yaml@2.9.0/node_modules/vite/dist/node/chunks/node.js:24511:26)
      at async viteTransformMiddleware (file:///home/fira/.local/bin/global/5/.pnpm/vite@8.0.12_@types+node@25.7.0_esbuild@0.27.7_jiti@2.7.0_terser@5.47.1_tsx@4.21.0_yaml@2.9.0/node_modules/vite/dist/node/chunks/node.js:24305:20)
11:35:50 PM [vite] (client) Pre-transform error: Failed to resolve import "web/component/app" from "component/commands.tsx". Does the file exist?
  Plugin: vite:import-analysis
  File: /home/fira/Documents/f/apps/tools/source/web/component/commands.tsx:1:24
  1  |  import { command } from "web/component/app";
     |                           ^
  2  |  import { Scroll } from "./scroll";
  3  |  import { Button } from "./button";

Unable to parse HTML; parse5 error code end-tag-without-matching-open-element
 at /home/fira/Documents/f/apps/tools/source/web/index.html:9:69
7  |      console.info = () => {}
8  |    </script>
9  |    <link rel="icon" type="image/svg+xml" href='../asset/favicon.svg'></link>
   |                                                                      ^^^^^^^
10 |  </head>
11 |  <body>
^C
```

# how to fix Uncaught ReferenceError: $1ca87bfdf671a1ae$import$3c7b5cc2d282a88c is not defined // \`export \* as default from ...\` fails on Webpack v4

 // https://github.com/eemeli/yaml/issues/228 

 import \* as YAML from './dist/index.js' 

 export default YAML 

 export \* from './dist/index.js' 

 the dev server works 

######   

The error `Uncaught ReferenceError: <hash>$import$<id> is not defined` typically happens due to a **bundler scope-hoisting or static analysis bug**.

When you use the workaround snippet (`import * as YAML` \+ `export default` \+ `export * from`) to bypass Webpack v4's lack of support for `export * as default from`, it tricks the development server. However, during production bundling (where minification and scope-hoisting kick in), the bundler fails to correctly map the generated internal identifiers, resulting in a runtime `ReferenceError`.

Here are the best ways to fix this issue depending on your stack:

### Method 1: Use Babel to Transpile Namespace Exports (Recommended for Webpack 4)

Instead of manually hacking the import/export statements—which breaks bundler optimization—allow Babel to handle the modern syntax safely.

1. Install the Babel plugin for namespace exports:  
Bash  
```  
npm install --save-dev @babel/plugin-proposal-export-namespace-from  
```  
_(Or `@babel/plugin-syntax-export-namespace-from`)_
2. Add it to your `.babelrc` or Babel configuration file:  
JSON  
```  
{  
  "plugins": ["@babel/plugin-proposal-export-namespace-from"]  
}  
```
3. Revert the file back to its original syntax (or let the library use its original code):  
JavaScript  
```  
export * as default from './dist/index.js'  
export * from './dist/index.js'  
```  
Babel will compile this down into code that Webpack v4 can parse without crashing or breaking scope hoisting.

### Method 2: Disable Scope Hoisting (Quick Workaround)

If you are running into this because of aggressive module concatenation (scope hoisting) in production builds:

* **If using Webpack:** Turn off module concatenation for that specific module or globally in your `webpack.config.js`:  
JavaScript  
```  
module.exports = {  
  optimization: {  
    concatenateModules: false, // Disables scope hoisting  
  },  
};  
```
* **If using Parcel:** Run your build command with scope hoisting disabled:  
Bash  
```  
npx parcel build src/index.html --no-scope-hoist  
```

> _Note: Disabling scope hoisting bypasses the mangled variable bug, though it may slightly impact bundle optimization._

### Method 3: Upgrade to Webpack 5 (Long-term Fix)

Webpack v4 has been deprecated for a long time and lacks native support for modern ECMAScript module features (like ES2020 export extensions).

Upgrading your project to **Webpack 5** natively supports `export * as default from`, meaning you won't need any wrapper hacks or custom loaders for packages like `yaml`.

##### ive used parcel build 'source/index.html' --dist-dir build --cache-dir build/.parcel-cache --no-cont… 

 ive used parcel build 'source/index.html' --dist-dir build --cache-dir build/.parcel-cache --no-content-hash 

######   

When running a **Parcel** production build (`parcel build`), the bundler performs aggressive scope analysis, tree-shaking, and symbol mangling.

Because the workaround snippet uses syntax constructs (`export * as default from ...`) that standard CommonJS/ESM interop handles differently during static code analysis, Parcel fails to resolve the internal generated reference hash (`$1ca87bfdf671a1ae$import$3c7b5cc2d282a88c`), causing it to crash at runtime. (This also explains why `parcel serve` works fine, as dev mode skips these optimizations).

To resolve this in Parcel, avoid the custom manual re-export hack and let Parcel handle the module correctly.

### Step 1: Clean Your Build Directory

Parcel caches heavily. Before testing a fix, clear your custom cache folder to prevent it from reading old, broken artifacts:

Bash

```
rm -rf build/.parcel-cache build/*

```

### Step 2: Fix the Import/Export Approach

Instead of mixing `export default` and `export * from` on a CommonJS/UMD distribution file like `./dist/index.js`, choose one of the following methods:

#### Option A: Import and export explicitly (Recommended)

If you just want to expose the contents of the package cleanly, import it normally and re-export its components without the broken namespace hack:

JavaScript

```
import YAML from './dist/index.js';

export default YAML;
export const { 
  parse, 
  stringify, 
  // list other specific exports you need from YAML if necessary
} = YAML;

```

#### Option B: Point directly to the source code (If available)

If you are bundling a library locally, pointing to its compiled entry point (`./dist/index.js`) often forces Parcel to deal with legacy interop code. If the package provides an ES module source field in its `package.json`, let Parcel resolve it naturally:

JavaScript

```
// Just import the package directly if it's installed via npm, 
// or point to its uncompiled module source if it's a local workspace:
export * as YAML from 'yaml';
export { default } from 'yaml';

```

#### Option C: Use Babel to transpile the file

If your project uses a `.babelrc` or `babel.config.json` for Parcel, ensure you have the export namespace plugin installed so Parcel's parser doesn't choke on it:

1. Install the plugin:  
Bash  
```  
npm install --save-dev @babel/plugin-proposal-export-namespace-from  
```
2. Add it to your Babel configuration:  
JSON  
```  
{  
  "plugins": ["@babel/plugin-proposal-export-namespace-from"]  
}  
```

##### i never write flawed code myself. it's inside node modules/yaml/browser/index.js 

 i never write flawed code myself. it's inside node modules/yaml/browser/index.js 

######   

Ah, that makes total sense! My apologies—you're dealing with an upstream issue inside `node_modules/yaml/browser/index.js`.

The package author uses `export * as default from './dist/index.js'` in the browser build, which trips up Parcel's production minifier and scope-hoisting compiler, turning generated identifiers into undefined references at runtime.

Since you can't change the package source directly in production builds, here are the two cleanest ways to bypass or fix it:

### Option 1: Force Parcel to use the CommonJS entry point (Easiest)

You can use Parcel's `alias` feature in your root `package.json` to force it to bypass the broken browser index file and point straight to the stable `dist` bundle instead:

JSON

```
{
  "alias": {
    "yaml": "./node_modules/yaml/dist/index.js"
  }
}

```

_Why this works:_ It forces Parcel to resolve `yaml` using its main compiled bundle rather than the browser-specific index that contains the problematic namespace syntax.

### Option 2: Use `patch-package` to fix it permanently

If the alias workaround doesn't fit your setup, you can patch the file inside `node_modules` so that it uses a safe import/export structure instead of the broken syntax.

1. Install `patch-package`:  
Bash  
```  
npm install --save-dev patch-package  
```
2. Open **`node_modules/yaml/browser/index.js`** and change the top lines from:  
JavaScript  
```  
export * as default from './dist/index.js'  
export * from './dist/index.js'  
```  
To this safe syntax:  
JavaScript  
```  
import * as YAML from './dist/index.js'  
export default YAML  
export * from './dist/index.js'  
```
3. Generate a patch file by running:  
Bash  
```  
npx patch-package yaml  
```
4. Add a `postinstall` script to your root `package.json` so the fix stays applied whenever dependencies are re-installed:  
JSON  
```  
"scripts": {  
  "postinstall": "patch-package"  
}  
```

##### is yaml npm lib flawed 

 is yaml npm lib flawed 

######   

Technically speaking, **no, the `yaml` library isn't flawed**—it is using valid, modern ECMAScript syntax (`export * as default from ...`), which is part of the ES2020 standard.

However, from a developer experience standpoint, it often _feels_ flawed because it acts as a silent trap for older or strict bundler setups (like Webpack 4 or certain configurations of Parcel).

### Why this happens:

1. **Modern Code in an Older Pipeline:** Library authors are increasingly writing code targeting modern JavaScript environments to improve performance and native ES Module support.
2. **The Bundler Bug:** When aggressive production optimizations like **scope hoisting** and **symbol mangling** run on syntax like `export * as default from`, older or less robust bundlers fail to track the internal variable mappings correctly. They generate a mangled hash (like `$1ca87bfdf671a1ae$import$3c7b5cc2d282a88c`) during compilation, but fail to actually declare or export that variable at runtime, throwing the `ReferenceError`.

### The Verdict

The library isn't broken; it's just **too modern for the build tool version you are using**. If you are locked into an older version of Parcel or Webpack that doesn't fully support modern export extension specs during minification, packages using these patterns will continue to cause production crashes until overridden via an alias or patch-package.

##### how to use vite 

 how to use vite 

######   

[Vite](https://vite.dev/) (French for "fast", pronounced `/viːt/`) is a modern, ultra-fast frontend build tool created by Evan You. It serves source files over native ES modules during development (giving you instant server startup and blazing-fast Hot Module Replacement) and bundles your code using optimized tools like Rollup/Rolldown for production.

Here is a step-by-step guide on how to get started and use Vite.

### Step 1: Create a Vite Project

Make sure you have [Node.js](https://nodejs.org/) installed, then run the official scaffolding command in your terminal:

Bash

```
npm create vite@latest

```

_(Or if you prefer Yarn, pnpm, or Bun: `yarn create vite`, `pnpm create vite`, or `bun create vite`)_

1. Enter your project name when prompted.
2. Select a framework (e.g., **React**, **Vue**, **Svelte**, **Vanilla**, etc.).
3. Select a variant (e.g., **JavaScript** or **TypeScript**).

### Step 2: Install Dependencies and Start the Dev Server

Navigate into your newly created project folder and install the dependencies:

Bash

```
cd <your-project-name>
npm install

```

Then, fire up the local development server:

Bash

```
npm run dev

```

Vite will instantly launch a local development server (usually at `http://localhost:5173`). Any changes you make to your code will reflect in the browser instantly via HMR.

### Understanding the Vite Project Structure

Unlike older tools (like Create React App), Vite puts `index.html` right at the **root directory** of your project, not hidden inside a `public` folder.

* **`index.html`**: The entry point of your application. It links directly to your main JavaScript/TypeScript entry file (e.g., `<script type="module" src="/src/main.js"></script>`).
* **`src/`**: Where your component files, styles, and core logic live.
* **`public/`**: Static assets that should be served as-is without being bundled (like raw favicons or images).
* **`vite.config.js`**: The configuration file where you can customize plugins, server ports, build options, and path aliases.

### Essential Daily Commands

* **Run Development Server:**  
Bash  
```  
npm run dev  
```
* **Build for Production:**Compiles and minifies your code into static files inside a `dist/` folder, ready for deployment (to Vercel, Netlify, AWS, etc.).  
Bash  
```  
npm run build  
```
* **Preview Production Build Locally:**Spins up a local server to test the production build before pushing it live.  
Bash  
```  
npm run preview  
```

### Key Things to Keep in Mind

1. **Environment Variables:** Unlike older setups that used `REACT_APP_`, Vite exposes environment variables on a special `import.meta.env` object and requires them to be prefixed with `VITE_` to be exposed to your client-side code:  
JavaScript  
```  
const apiUrl = import.meta.env.VITE_API_URL;  
```
2. **Plugins:** Vite has a rich ecosystem of plugins (compatible with Rollup plugins). You can add support for Vue, React, Tailwind CSS, SVG loading, and more by modifying your `vite.config.js`:  
JavaScript  
```  
import { defineConfig } from 'vite'  
import react from '@vitejs/plugin-react'  
export default defineConfig({  
  plugins: [react()],  
})  
```

##### how to build it via vite directly 

 how to build it via vite directly 

######   

Switching your project to Vite will completely bypass this issue because Vite relies on Rollup/Rolldown under the hood, which handles modern ECMAScript module syntax (like `export * as default from`) seamlessly during production bundling without crashing.

Here is how to set up, run, and build your project directly using Vite:

### Step 1: Install Vite

In your existing project root, install Vite as a development dependency:

Bash

```
npm install --save-dev vite

```

### Step 2: Create a `vite.config.js` File

Create a configuration file in your root directory to define your build options. If you want to mirror the custom output directories you used previously (`--dist-dir build`):

JavaScript

```
// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'build',          // Equivalent to --dist-dir build
    emptyOutDir: true,        // Clears the build folder before building
    sourcemap: false,         // Optional: disable if you don't need sourcemaps
  },
});

```

### Step 3: Update `index.html` Location

Vite requires `index.html` to sit at the **root of your project** (e.g., `./index.html`), rather than nested inside a source folder.

Make sure your root `index.html` points directly to your main JavaScript entry file as a module:

HTML

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>My App</title>
  </head>
  <body>
    <div id="app"></div>
    <!-- Point this to your main JS/TS entry file -->
    <script type="module" src="/source/index.js"></script> 
  </body>
</html>

```

### Step 4: Add Scripts to `package.json`

Open your `package.json` and add convenient shortcut scripts for Vite:

JSON

```
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  }
}

```

### Step 5: Run Vite

* **To test locally (Development Server):**  
Bash  
```  
npm run dev  
```  
This launches an instant local dev server with Hot Module Replacement (HMR).
* **To build directly for production:**  
Bash  
```  
npm run build  
```  
This will bundle your application cleanly into your `build/` directory, resolving the upstream `yaml` package cleanly without throwing any `ReferenceError` crashes.

##### what is dev build preview 

 what is dev build preview 

######   

When working with modern build tools like **Vite**, **Next.js**, or **Nuxt**, your application moves through three distinct phases. `dev`, `build`, and `preview` are the three standard CLI commands used to run each phase:

### 1\. `dev` (Development Mode)

* **Command:** `npm run dev` (or `npx vite`)
* **Purpose:** For active coding and debugging on your computer.
* **How it works:** Starts a local web server (usually at `localhost:5173`) that provides **Hot Module Replacement (HMR)**. When you edit and save a file, only that specific component updates instantly in your browser without reloading the entire page.
* **Key characteristic:** Code is **not compiled or optimized for production**. It runs raw ES modules directly for maximum speed while editing.

### 2\. `build` (Production Build)

* **Command:** `npm run build` (or `npx vite build`)
* **Purpose:** Prepares your project for actual deployment to production web hosts (e.g., Vercel, Netlify, AWS).
* **How it works:** Runs your code through a bundler (like Rollup or Esbuild). It minifies JavaScript/CSS, strips out debug code, splits code into optimized chunks, handles asset hashing, and outputs static files into a output directory (usually named `dist/` or `build/`).
* **Key characteristic:** **Does not start a web server.** It simply generates the finalized static assets on your disk.

### 3\. `preview` (Production Preview Server)

* **Command:** `npm run preview` (or `npx vite preview`)
* **Purpose:** To test the compiled production build locally _before_ pushing it live to users.
* **How it works:** Spins up a minimal, lightweight local web server to serve the static files generated inside your `dist/` or `build/` folder.
* **Key characteristic:** **Requires running `npm run build` first.** It does **not** support instant reloads or code editing—it serves your app exactly as a production web server would, allowing you to verify that minification, routing, scope hoisting, and bundler optimizations work correctly without crashes.

### Summary Comparison Table

| Feature                     | npm run dev                  | npm run build                          | npm run preview                   |
| --------------------------- | ---------------------------- | -------------------------------------- | --------------------------------- |
| **Primary Goal**            | Writing code quickly         | Generating bundle for deployment       | Testing production bundle locally |
| **Output**                  | In-memory server             | Static files on disk (/dist or /build) | Serves files on disk              |
| **Hot Reload / HMR**        | ✅ Yes (Instant)              | ❌ No                                   | ❌ No                              |
| **Minified Code**           | ❌ No                         | ✅ Yes                                  | ✅ Yes                             |
| **Catches Bundler Errors?** | ❌ No (Bypasses optimization) | ✅ Yes                                  | ✅ Yes                             |

##### parceljs command equivalents 

 parceljs command equivalents 

######   

Unlike Vite, which uses a distinct 3-command setup (`dev`, `build`, `preview`), **Parcel v2** handles things with fewer built-in commands. It relies heavily on flags and configuration rather than a dedicated local production preview command.

Here is how Parcel commands map directly to Vite's workflow:

### 1\. The Development Server (`dev`)

* **Vite:** `npm run dev` (`vite`)
* **Parcel Equivalent:** `npx parcel src/index.html` (or just `npx parcel`)

Parcel's default command is `serve`. Running `parcel <entry-file>` fires up the development server with live HMR (Hot Module Replacement).

### 2\. The Production Build (`build`)

* **Vite:** `npm run build` (`vite build`)
* **Parcel Equivalent:** `npx parcel build src/index.html`

Performs a one-time production build, applying minification, scope hoisting, and optimizations. If you specify custom options like you did previously, it looks like this:

Bash

```
npx parcel build source/index.html --dist-dir build --cache-dir build/.parcel-cache --no-content-hash

```

### 3\. The Production Preview (`preview`)

* **Vite:** `npm run preview` (`vite preview`)
* **Parcel Equivalent:** **Parcel has no built-in `parcel preview` command.**

Because Parcel outputs static files directly to disk, to preview your production build locally you have to use a lightweight third-party static HTTP server (like `serve`) pointed at your output directory:

1. Install a simple static server:  
Bash  
```  
npm install --save-dev serve  
```
2. Add a preview script to your `package.json`:  
JSON  
```  
"scripts": {  
  "dev": "parcel source/index.html",  
  "build": "parcel build source/index.html --dist-dir build",  
  "preview": "serve build"  
}  
```
3. Run it after building:  
Bash  
```  
npm run build  
npm run preview  
```

##### replace w vite, no config, parcel build '/home/fira/Documents/f/apps/tools/source/index.html' --dist… 

 replace w vite, no config, parcel build '/home/fira/Documents/f/apps/tools/source/index.html' --dist-dir build --cache-dir build/.parcel-cache --no-content-hash 

######   

To replace your Parcel build command with **Vite** without using a `vite.config.js` file, you can pass all options directly via the **Vite CLI**.

### Direct Command Equivalent

Run this command directly in your project root:

Bash

```
npx vite build /home/fira/Documents/f/apps/tools/source/index.html --outDir build --emptyOutDir

```

### How the flags map:

* `/home/fira/Documents/f/apps/tools/source/index.html` → Points Vite directly to your entry `index.html`.
* `--outDir build` → Replaces `--dist-dir build` (outputs files into the `./build` folder).
* `--emptyOutDir` → Clears the output folder before building.
* _(Note on cache)_: Vite automatically manages its cache inside `node_modules/.vite` during dependencies pre-bundling and doesn't require a custom `--cache-dir` or `--no-content-hash` flag.

### Adding to `package.json`

For convenience, you can save this straight to your `package.json` scripts:

JSON

```
{
  "scripts": {
    "dev": "vite /home/fira/Documents/f/apps/tools/source/index.html",
    "build": "vite build /home/fira/Documents/f/apps/tools/source/index.html --outDir build --emptyOutDir",
    "preview": "vite preview --outDir build"
  }
}

```

##### on vite 'index.html' \[plugin:vite:import-analysis\] Failed to resolve import "web/design/utilitarian/… 

 on vite 'index.html' \[plugin:vite:import-analysis\] Failed to resolve import "web/design/utilitarian/utilitarian.css" from "component/app.tsx". Does the file exist? 

######   

This error happens because **Parcel and Vite handle path resolution differently**.

Parcel automatically allows non-relative root imports (like `web/...` or `component/...`) by guessing where things are. **Vite is stricter**: it requires either proper relative paths (`./` or `../`) or explicitly configured path aliases.

Here are the two ways to fix this:

### Option 1: Use Relative Paths (Quickest Fix)

Change the import inside `component/app.tsx` to use a standard relative path pointing to the actual location of the CSS file:

TypeScript

```
// Instead of this:
import "web/design/utilitarian/utilitarian.css";

// Change it to a relative path (adjust the ../ depth based on your folder structure):
import "../web/design/utilitarian/utilitarian.css";

```

### Option 2: Add Path Aliases in `vite.config.js` (To keep absolute paths)

If you have a lot of imports like `web/...` or `component/...` and don't want to rewrite all of them, you can tell Vite how to resolve them by adding a minimal `vite.config.js` file:

JavaScript

```
// vite.config.js
import { defineConfig } from 'vite';
import { fileURLToPath, URL } from 'node:url';

export default defineConfig({
  resolve: {
    alias: {
      // Maps 'web/' to your source/web folder (adjust path as needed)
      'web': fileURLToPath(new URL('./source/web', import.meta.url)),
      'component': fileURLToPath(new URL('./source/component', import.meta.url)),
    },
  },
  build: {
    outDir: 'build',
    emptyOutDir: true,
  },
});

```

Once configured like this, Vite will seamlessly understand `web/design/utilitarian/utilitarian.css` without throwing an error.

##### does it respect tsconfig baseurl 

 does it respect tsconfig baseurl 

######   

**No, by default Vite does not automatically read or respect `tsconfig.json`’s `baseUrl` or `paths`.**

While TypeScript uses those settings for type-checking in your editor, Vite's core bundler doesn't look at `tsconfig.json` on its own when resolving module imports at build time.

If you want Vite to automatically respect your `tsconfig.json` without manually writing aliases in a config file, you can drop in a community plugin that bridges the gap.

### The Easiest Fix: Use `vite-tsconfig-paths`

Instead of manually mapping aliases, you can use a plugin that reads your `tsconfig.json` automatically.

1. **Install the plugin:**  
Bash  
```  
npm install --save-dev vite-tsconfig-paths  
```
2. **Add it to a minimal `vite.config.js`:**  
JavaScript  
```  
import { defineConfig } from 'vite';  
import tsconfigPaths from 'vite-tsconfig-paths';  
export default defineConfig({  
  plugins: [tsconfigPaths()],  
  build: {  
    outDir: 'build',  
    emptyOutDir: true,  
  },  
});  
```

Once you add that plugin, Vite will automatically respect whatever `baseUrl` and `paths` you have defined in your `tsconfig.json`, making absolute imports or custom base URLs work seamlessly.

##### how to let vite serve on a random port 

 how to let vite serve on a random port 

######   

To have Vite serve on a random available port, you can configure it in one of two ways depending on your exact goal:

### Method 1: Force a Completely Random Port (`port: 0`)

If you want the operating system to assign a truly random, free port every single time you start the dev server, set `port: 0` inside a `vite.config.js` file: 

JavaScript

```
// vite.config.js
export default {
  server: {
    port: 0, // Tells the OS to pick any available random port
  },
};

```

When you run `npm run dev`, Vite will print out whatever random port the OS allocated (e.g., `http://localhost:54698`).

### Method 2: Let Vite Auto-Increment (Default Behavior)

By default, Vite doesn't crash if its preferred port (`5173`) is busy. Instead, it **automatically tries the next available port** (`5174`, `5175`, etc.) until it finds one that is free. 

_Note: Make sure you **do not** have `strictPort: true` set in your configuration, as `strictPort: true` forces Vite to exit immediately if the port is taken rather than stepping up to the next one._

