changes

# nov 2026

## 14

- fetch: + symlink based cas
- fetch: use 64 char standard sha256
  - no idea why slicing to 16 chars
- fetch: make first few chars of hash as folder
  - could be over engineering, but at least increases perf a lot
  - using two level sweet spot
- fetch: + setup_browser
  - use a persistent always on browser and close page rather than closing the browser
  - fix unknown weird issue (timeout after 10s, and get stuck forever, while the browser exits after 1s, which doesnt reproduce on manual testing but consistently happen on traversal)
