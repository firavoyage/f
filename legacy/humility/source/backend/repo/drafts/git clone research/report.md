# git clone research

## how it works

git clone is a porcelain command that uses underlying plumbing commands to copy a repository. the process differs based on the protocol used.

### protocols

#### dumb protocol (http)

used for read-only access. client makes http get requests.

1. get `info/refs` to discover refs and their sha-1s
2. get `HEAD` to know what to checkout
3. for each object:
   - try loose format first
   - if 404, check `info/packs` for packfiles
   - download packfile + idx using range requests
4. checkout working copy

#### smart protocol (ssh, https)

requires git-specific code on server.

**upload (push)**: `send-pack` (client) ↔ `receive-pack` (server)

**download (fetch)**: `fetch-pack` (client) ↔ `upload-pack` (server)

1. client connects and exchanges capabilities
2. server sends refs + their sha-1s + head symref
3. client sends "have" (objects it already has) + "want" (objects needed)
4. server generates packfile with needed objects
5. server sends packfile
6. client checkout

### objects

- **blob**: file content
- **tree**: directory structure (pointers to blobs + subtrees)
- **commit**: snapshot metadata (tree, parent, author, message)
- **packfile**: compressed bundle of objects

### internal flow

1. create empty `.git` directory
2. discover remote refs via protocol
3. fetch objects (blobs, trees, commits)
4. write objects to `.git/objects`
5. update refs in `.git/refs`
6. setup remote tracking branches
7. checkout working copy

---

## modern improvements

### progressive clone

clone in chunks instead of all at once. user can start working before full clone.

implementation:

1. fetch shallow (depth=1 or specific refs)
2. lazily fetch objects on demand
3. background sync for remaining objects

### parallel fetch

fetch multiple packfiles or object ranges concurrently.

implementation:

1. split objects into shards
2. fetch shards in parallel
3. merge into single object database

### auto retry

automatic retry on transient network failures.

implementation:

1. detect network errors (timeout, connection reset)
2. exponential backoff
3. configurable max retries
4. resume from last successful state