changes

# nov 2026

## 14

- fetch: + symlink based cas
- fetch: use 64 char standard sha256
  - no idea why slicing to 16 chars
- fetch: make first few chars of hash as folder
  - could be over engineering, but at least increases perf a lot
  - using two level sweet spot
