# how to use cpp map in cp

In C++, `std::map` stores **key–value pairs** with **unique keys**, kept in sorted order by key.

```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    map<int, int> mp;

    mp[5] = 10;   // set key 5 to value 10
    mp[2]++;      // create key 2 with value 0, then increment it

    cout << mp[5] << '\n'; // 10

    for (auto [key, value] : mp) { // C++17
        cout << key << " " << value << '\n';
    }
}
```

### Common operations

```cpp
map<int, int> mp;

mp[key] = value;       // insert or update
mp[key]++;             // useful for counting
mp.count(key);         // 1 if present, otherwise 0
mp.find(key);          // iterator to key, or mp.end() if absent
mp.erase(key);         // remove key
mp.size();             // number of keys
mp.empty();            // whether it has no keys
```

**Note:** `mp[key]` inserts the key if it isn’t already present, using a default value for the mapped type. To check without inserting:

```cpp
if (mp.find(key) != mp.end()) {
    cout << "Found\n";
}
```

### Example: count frequencies

```cpp
int n;
cin >> n;

map<int, int> freq;
for (int i = 0; i < n; i++) {
    int x;
    cin >> x;
    freq[x]++;
}

for (auto [value, count] : freq) {
    cout << value << " appears " << count << " times\n";
}
```

The output is in **sorted key order**. Most `map` operations, including insertion, lookup, and deletion, take **O(log n)** time.

Use `map` when you need sorted keys or ordered searches. If you only need fast key lookup and don’t need ordering, `unordered_map` is another option, with average **O(1)** operations.

You can also use compound keys:

```cpp
map<pair<int, int>, int> mp;
mp[{2, 3}] = 7;
```

# map or unordered map

Choose based on what you need:

| Feature | `map` | `unordered_map` |
|---|---|---|
| Key order | Sorted | No order |
| Typical operations | `O(log n)` | Average `O(1)` |
| Worst case | `O(log n)` | `O(n)` |
| Useful for | Ordered keys, predecessor/successor, predictable performance | Frequency counts and lookups when order doesn’t matter |

**Rule of thumb for competitive programming:**
- Use **`unordered_map`** for simple counting or lookup when order is irrelevant.
- Use **`map`** when you need sorted iteration or operations like `lower_bound` / `upper_bound`, or want reliable worst-case time.

Example frequency count:

```cpp
unordered_map<int, int> freq;
for (int x : a) freq[x]++;
```

If an `unordered_map` is too slow or behaves poorly on a problem’s tests, try `map`. You can also call `reserve()` when you know roughly how many entries you’ll store:

```cpp
unordered_map<int, int> freq;
freq.reserve(n);
```