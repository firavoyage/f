# cpp vector methods in cp

In **competitive programming (CP)**, `std::vector` is the most widely used container because it acts as a dynamic array with O(1) random access, features low memory overhead, and integrates perfectly with C++ STL algorithms. [](https://en.cppreference.com/cpp/container/vector)

The most important **C++ vector methods and operations** are categorized below by their actual utility and time complexity in CP.

---

### 1\. Initialization Tactics

How you initialize your vector can prevent execution timeouts (TLE).

cpp

```
vector<int> v;                // Empty vector
vector<int> v(n);             // Size n, initialized with 0
vector<int> v(n, -1);         // Size n, all elements initialized to -1
vector<int> v2(v);            // Copies v into v2 (O(n) - use sparingly!)
vector<int> adj[N];           // Array of vectors (Standard way to build Adjacency Lists for Graphs)
vector<vector<int>> matrix(R, vector<int>(C, 0)); // R x C 2D Grid

```



### 2\. Modifiers (Adding & Removing)

In CP, keeping operations at O(1) is crucial. [](https://www.geeksforgeeks.org/cpp/vector-in-cpp-stl/)

| Method              | Syntax              | Complexity     | CP Use Case                                                                       |
| ------------------- | ------------------- | -------------- | --------------------------------------------------------------------------------- |
| **push\_back()**    | v.push\_back(x);    | Amortized O(1) | Appends element x to the end.                                                     |
| **emplace\_back()** | v.emplace\_back(x); | Amortized O(1) | Faster than push\_back for objects/pairs because it constructs elements in-place. |
| **pop\_back()**     | v.pop\_back();      | O(1)           | Deletes the last element. Used heavily in backtracking.                           |
| **clear()**         | v.clear();          | O(n)           | Removes all elements but keeps capacity. Essential for multi-testcase problems.   |
| **resize()**        | v.resize(n, val);   | O(n)           | Resizes the container to n elements.                                              |
| **assign()**        | v.assign(n, val);   | O(n)           | Drops old data and fills vector with n copies of val.                             |

> ⚠️ **Avoid in CP:** `v.insert()` and `v.erase()` take **O(n) time** because they force elements to shift. If you need frequent internal insertions or deletions, use `std::list` or `std::set` instead. [](https://dev.to/mohosin2126/mastering-c-vectors-built-in-functions-usage-and-complexity-77e)

### 3\. Element Access & Capacity

Always use raw index notation `[]` over `.at()` because `.at()` performs boundary checking, making it slower. [](https://www.programiz.com/cpp-programming/vectors)

* **`v[i]`**: Accesses element at index `i` in O(1) time. [](https://en.cppreference.com/cpp/container/vector)
* **`v.front()` / `v.back()`**: Returns the first and last elements in O(1). Often used when treating the vector like a stack. [](https://www.w3schools.com/cpp/cpp%5Fref%5Fvector.asp)
* **`v.size()`**: Returns the number of elements. Note: It returns an **unsigned integer**, so doing `v.size() - 1` when the vector is empty causes an underflow bug. Cast it as `(int)v.size()`. [](https://www.w3schools.com/cpp/cpp%5Fvectors.asp)
* **`v.empty()`**: Returns `true` if size is 0\. Faster and safer than checking `v.size() == 0`. [](https://www.w3schools.com/cpp/cpp%5Fvectors.asp)
* **`v.reserve(n)`**: Pre-allocates memory for `n` elements. Use this if you know exactly how many elements you will `push_back()` to avoid expensive automatic re-allocations. [](https://en.cppreference.com/cpp/container/vector)

---

### 4\. Essential STL Algorithms on Vectors

Most CP problems require you to pass vector pointers/iterators into globally available `<algorithm>` functions. [](https://www.youtube.com/watch?v=DxwPhRxTvmY)

#### Sorting & Reversing

cpp

```
sort(v.begin(), v.end());                 // Sort ascending O(n log n)
sort(v.rbegin(), v.rend());               // Sort descending O(n log n)
reverse(v.begin(), v.end());              // Reverse the vector O(n)

```



#### Binary Search (Vector MUST be sorted)

cpp

```
bool present = binary_search(v.begin(), v.end(), target); // O(log n)

// Returns iterator to first element >= target. (Subtract v.begin() to get the index)
auto it = lower_bound(v.begin(), v.end(), target); 

// Returns iterator to first element > target
auto it = upper_bound(v.begin(), v.end(), target); 

```



#### Max/Min & Aggregates

cpp

```
int max_val = *max_element(v.begin(), v.end()); // O(n)
int min_val = *min_element(v.begin(), v.end()); // O(n)

// Sum of all elements (Requires #include <numeric>)
// Note: Use 0LL instead of 0 if the sum can overflow a standard 32-bit int
long long total_sum = accumulate(v.begin(), v.end(), 0LL); 

```



#### Removing Duplicates

A standard 2-step trick in CP to remove duplicate elements efficiently:

cpp

```
sort(v.begin(), v.end());
v.erase(unique(v.begin(), v.end()), v.end()); // O(n log n) total

```



---

### 5\. Iterating Efficiently

For printing or processing elements, standard loops are preferred. [](https://www.geeksforgeeks.org/cpp/different-ways-to-print-elements-of-vector/)

**Modern Range-based Loop (Recommended)**: [](https://www.geeksforgeeks.org/cpp/vector-in-cpp-stl/)

cpp

```
for (int &x : v) {
    // Use '&' to avoid copying elements, especially if v stores strings or pairs
    cin >> x; 
}
for (int x : v) cout << x << " ";

```



**Traditional Index Loop**:

cpp

```
for (int i = 0; i < (int)v.size(); i++) {
    cout << v[i] << " ";
}

```



Are you trying to optimize your vectors for a specific **graph structure (like adjacency lists)**, or do you need help optimizing a vector solution that is currently hitting a **Time Limit Exceeded (TLE)**?

* [](https://en.cppreference.com/cpp/container/vector)  
cppreference.com  
std::vector - cppreference.com  
is a sequence container encapsulating dynamic size contiguous arrays supporting automatic storage management. Complexity: Random a...
* [](https://www.geeksforgeeks.org/cpp/vector-in-cpp-stl/)  
GeeksforGeeks  
Vector in C++ STL - GeeksforGeeks  
Aug 26, 2026 — Vectors can dynamically grow or shrink during program execution. They provide constant-time random access and support efficient in...
* [](https://www.w3schools.com/cpp/cpp%5Fvectors.asp)  
W3Schools  
C++ Vectors  
Header: #include Creation: vector name; or vector name = {elements}; (type immutable). Access & Modification: 0-indexed via bracke...

Show all


# cpp vector methods in cp cpp23

In **Competitive Programming (CP)** using **C++23**, `std::vector` remains the most critical and frequently used sequence container. C++23 introduces several highly efficient member functions that drastically reduce boilerplate code when dealing with ranges. [](https://ruthhaephrati.medium.com/feel-the-change-meet-the-new-c-23-insert-range-42a77ca3b8aa)

---

### 🆕 New C++23 Vector Modifiers (Game Changers for CP)

Instead of writing explicit loops or relying on tedious `v.begin(), v.end()` iterator syntax, C++23 adds direct container range member functions. These allow you to directly pass another container, a sub-range, or a filtered view. [](https://ruthhaephrati.medium.com/feel-the-change-meet-the-new-c-23-insert-range-42a77ca3b8aa)

* **`assign_range(range)`**
  * **What it does:** Replaces the current contents of the vector with the elements from the specified range.
  * _Old Way:_ `v.assign(other.begin(), other.end());`
  * _C++23 Way:_ `v.assign_range(other);` [](https://en.cppreference.com/cpp/container/vector/assign)
* **`insert_range(pos, range)`**
  * **What it does:** Inserts elements from a range at a specific position iterator `pos`.
  * _Old Way:_ `v.insert(v.begin() + 2, other.begin(), other.end());`
  * _C++23 Way:_ `v.insert_range(v.begin() + 2, other);` [](https://en.cppreference.com/cpp/container/vector/assign)
* **`append_range(range)`**
  * **What it does:** Directly appends an entire range to the end of the vector. This is basically a bulk `push_back`.
  * _Old Way:_ `v.insert(v.end(), other.begin(), other.end());`
  * _C++23 Way:_ `v.append_range(other);` [](https://en.cppreference.com/cpp/container/vector/assign)

---

### ⚡ Essential Vector Operations for CP

Below is a consolidated summary of the most useful `std::vector` methods, categorised for easy tracking during code jams: [](https://en.cppreference.com/cpp/container/vector)

| Category      | Method                   | Time Complexity   | CP Use Case                                                                                                                     |
| ------------- | ------------------------ | ----------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| **Capacity**  | v.reserve(n)             | O(N) reallocation | **Crucial for CP.** Allocates memory beforehand. Prevents costly dynamic reallocations when you know the input size N.          |
|               | v.resize(n)              | O(N)              | Changes the actual vector size. Often used to reuse a global vector across multiple test cases.                                 |
|               | v.size()                 | O(1)              | Returns number of elements. (Note: Use std::ssize(v) if you need a signed integer to avoid overflow bugs).                      |
|               | v.empty()                | O(1)              | Checks if vector has 0 elements. Faster and cleaner than v.size() == 0.                                                         |
| **Modifiers** | v.push\_back(val)        | Amortized O(1)    | Appends an element to the back.                                                                                                 |
|               | v.emplace\_back(args...) | Amortized O(1)    | Constructs element in-place. Faster than push\_back for structures/pairs (e.g., v.emplace\_back(x, y) vs v.push\_back({x, y})). |
|               | v.pop\_back()            | O(1)              | Removes the last element.                                                                                                       |
|               | v.clear()                | O(N)              | Erases all elements but **keeps allocated capacity**. Essential for multi-test case problems.                                   |
| **Access**    | v\[i\]                   | O(1)              | Direct indexing without bounds checking (fastest approach).                                                                     |
|               | v.front() / v.back()     | O(1)              | Gets references to the first and last elements respectively.                                                                    |

---

### 🔥 Pro CP Combo: C++23 Ranges + Vector

In competitive programming, you frequently pair vectors with the `<algorithm>` and `<ranges>` libraries. C++23 lets you avoid typing `.begin()` and `.end()` almost entirely: [](https://blog.devgenius.io/modern-c-23-features-every-systems-programmer-should-know-5898bcf8f71d)

cpp

```
#include <iostream>
#include <vector>
#include <algorithm>
#include <ranges>

int main() {
    std::vector<int> v = {5, 2, 8, 1, 3};

    // C++20/23 Range Sorting (No v.begin(), v.end() required!)
    std::ranges::sort(v); 

    // C++23 Append Range
    std::vector<int> extensions = {10, 11, 12};
    v.append_range(extensions); 

    // C++23 Zip View - Loop through two vectors in lockstep cleanly
    std::vector<char> labels = {'a', 'b', 'c'};
    for (auto [val, label] : std::views::zip(v, labels)) {
        std::cout << label << ":" << val << " "; 
        // Output: a:1 b:2 c:3
    }
}

```



Would you like to see how to efficiently **clear and reuse nested multidimensional vectors** (like adjacency lists for graphs `vector<vector<int>>`) across multiple test cases without getting **Time Limit Exceeded (TLE)**?

* [](https://en.cppreference.com/cpp/container/vector)  
cppreference.com  
std::vector - cppreference.com  
is a sequence container encapsulating dynamic size contiguous arrays supporting automatic storage management. a space-efficient bi...
* [](https://learn.microsoft.com/en-us/cpp/standard-library/vector-class?view=msvc-170)  
Microsoft Learn  
vector class | Microsoft Learn  
Mar 10, 2025 — The C++ Standard Library vector class is a class template for sequence containers. A vector stores elements of a given type in a l...
* [](https://www.w3schools.com/cpp/cpp%5Fvectors.asp)  
W3Schools  
C++ Vectors  
Header: #include Creation: vector name; or vector name = {elements}; (type immutable). Access & Modification: 0-indexed via bracke...

Show all

# cpp vector methods in cp cpp23 regardless of old or new

Here is the comprehensive list of **`std::vector` member methods** available in **C++23** for competitive programming, grouped by functionality.

### Element Access

* `operator[]`: Accesses a specific element without bounds checking.
* `at()`: Accesses a specific element with bounds checking (throws an exception if out of range).
* `front()`: Returns a reference to the first element.
* `back()`: Returns a reference to the last element.
* `data()`: Returns a direct pointer to the underlying memory array.

### Iterators

* `begin()` / `end()`: Returns an iterator to the beginning / end.
* `rbegin()` / `rend()`: Returns a reverse iterator to the reverse beginning / reverse end.
* `cbegin()` / `cend()`: Returns a constant iterator to the beginning / end.
* `crbegin()` / `crend()`: Returns a constant reverse iterator to the reverse beginning / reverse end.

### Capacity

* `empty()`: Checks whether the vector is empty.
* `size()`: Returns the number of elements.
* `max_size()`: Returns the maximum possible number of elements.
* `reserve()`: Reserves storage capacity to prevent frequent reallocations.
* `capacity()`: Returns the number of elements that can be held in currently allocated storage.
* `shrink_to_fit()`: Reduces memory usage by freeing unused capacity.

### Modifiers

* `clear()`: Clears the contents, reducing size to 0.
* `insert()`: Inserts elements at a specified position.
* `insert_range()` _(New in C++23)_: Inserts a range of elements at a specified position.
* `emplace()`: Constructs an element in-place at a specified position.
* `erase()`: Erases elements at a specified position or range.
* `push_back()`: Appends an element to the end.
* `emplace_back()`: Constructs an element in-place at the end.
* `append_range()` _(New in C++23)_: Appends a range of elements to the end.
* `pop_back()`: Removes the last element.
* `resize()`: Changes the number of elements stored.
* `swap()`: Swaps the contents with another vector.
* `assign()`: Replaces vector contents with specified elements.
* `assign_range()` _(New in C++23)_: Replaces vector contents with a range of elements.

### Useful Global Functions (C++20/C++23)

* `std::erase(vector, value)`: Removes all elements matching a value (O(N)).
* `std::erase_if(vector, predicate)`: Removes all elements satisfying a condition (O(N)).

Would you like to see **code examples** of how to use the new C++23 range methods (`append_range`, `insert_range`) or tips on optimizing vector performance for **competitive programming**?

# cpp vector methods in cp cpp23, do not mention old or new

In competitive programming (CP), **`std::vector`** is the most widely used dynamic array container due to its performance, contiguous memory layout, and rich set of methods.

The primary member methods available on `std::vector` under the **C++23 standard**, grouped by their functional roles in CP, are detailed below.

### Element Access

These methods retrieve or view elements inside the container.

* **`operator[]`**: Accesses the element at a specific index without bounds checking. It is highly efficient for fast indexing loops.
* **`at()`**: Accesses the element at a specific index with bounds checking. It throws an exception if the index is out of bounds (rarely used in production CP due to overhead, but helpful for debugging).
* **`front()`**: Returns a reference to the first element in the container.
* **`back()`**: Returns a reference to the last element in the container.
* **`data()`**: Returns a direct pointer to the underlying memory array used internally by the vector.

### Iterators

These methods provide pointers or iterator objects used to traverse the container or pass to standard library algorithms like `std::sort`.

* **`begin()` / `end()`**: Returns iterators pointing to the first element and one-past-the-last element respectively.
* **`rbegin()` / `rend()`**: Returns reverse iterators used to traverse the container from back to front.
* **`cbegin()` / `cend()`**: Returns constant iterators pointing to the first and one-past-the-last element.
* **`crbegin()` / `crend()`**: Returns constant reverse iterators.

### Capacity

These methods manage and inspect the memory and sizes allocated for the container.

* **`empty()`**: Checks whether the container has no elements. It is preferred over `size() == 0`.
* **`size()`**: Returns the number of elements currently stored in the container.
* **`max_size()`**: Returns the maximum possible number of elements the container can hold due to system or library limitations.
* **`reserve()`**: Allocates enough memory space to hold a specified number of elements. Using this in CP avoids multiple reallocations when building a vector dynamically.
* **`capacity()`**: Returns the total number of elements that the vector can hold in its currently allocated storage.
* **`shrink_to_fit()`**: Requests the container to reduce its capacity to fit its actual size, freeing unused memory.

### Modifiers

These methods change the contents, size, or structure of the container.

* **`clear()`**: Removes all elements from the vector, leaving it with a size of 0.
* **`insert()`**: Inserts elements at a specified position given by an iterator.
* **`emplace()`**: Extends the vector by inserting a new element at a specified position, constructing the element in-place.
* **`erase()`**: Removes a single element or a range of elements using iterators.
* **`push_back()`**: Appends an element to the end of the vector.
* **`emplace_back()`**: Appends an element to the end of the vector by constructing it directly in-place.
* **`pop_back()`**: Removes the final element from the vector.
* **`resize()`**: Resizes the container to contain a specified number of elements, inserting default values or deleting elements as necessary.
* **`swap()`**: Swaps the contents of two vectors efficiently in constant O(1) time by swapping internal pointers.
* **`assign()`**: Replaces the current contents of the vector with a specified number of copies of an element or a range from another container.

### Non-Member Utility (Global Scope)

While not direct member methods, these standard global utilities operate specifically on `std::vector` and are vital in CP:

* **`std::erase()`**: A global function that removes all elements matching a specific value from the container.
* **`std::erase_if()`**: A global function that removes all elements matching a specific condition or predicate from the container.

Would you like an example of how to combine these **methods** with standard **algorithms** for common competitive programming tasks like coordinate compression or custom sorting?

# all cpp vector methods in cp cpp23

In **C++23**, `std::vector` remains the most fundamental container for competitive programming (CP). While C++23 didn't add major new member methods directly _inside_ the `std::vector` class layout, it introduced game-changing global utility functions (like `std::ranges::to`) and finalized `constexpr` support so vectors can be entirely evaluated at compile-time. [](https://en.cppreference.com/cpp/container/vector)

Here is the comprehensive list of all `std::vector` methods relevant to CP in C++23, categorized for scannability. [](https://www.w3schools.com/cpp/cpp%5Fref%5Fvector.asp)

---

### 1\. Element Access

These methods are used to read or modify specific elements in the vector. [](https://www.geeksforgeeks.org/cpp/vector-in-cpp-stl/)

* **`operator[]`**: Accesses an element at a specific index without bounds checking. _Fastest choice for CP._
* **`at()`**: Accesses an element with bounds checking (throws an `out_of_range` exception if invalid).
* **`front()`**: Returns a reference to the very first element.
* **`back()`**: Returns a reference to the last element.
* **`data()`**: Returns a direct raw pointer to the underlying contiguous memory array. [](https://www.w3schools.com/cpp/cpp%5Fvectors.asp)

---

### 2\. Modifiers

Crucial operations for adding, removing, or changing elements dynamically. [](https://www.geeksforgeeks.org/cpp/vector-in-cpp-stl/)

* **`push_back()`**: Appends an element to the end of the vector.
* **`pop_back()`**: Removes the last element.
* **`emplace_back()`**: Constructs an element in-place at the end. _Slightly faster than `pushback` for structs/pairs because it avoids a copy._
* **`insert()`**: Inserts elements at a specified iterator position (shifts subsequent elements).
* **`emplace()`**: Constructs an element in-place at a specified iterator position.
* **`erase()`**: Removes one or more elements using iterators.
* **`assign()`**: Replaces the current vector contents with new values.
* **`clear()`**: Drops all elements, resetting the size to 0.
* **`swap()`**: Exchanges the contents of two vectors efficiently in O(1) time. [](https://hackingcpp.com/cpp/std/vector)

---

### 3\. Capacity & Size

Essential for managing memory layout and avoiding slow reallocations. [](https://www.youtube.com/watch?v=iM%5FrIWmq6cE)

* **`empty()`**: Returns `true` if the vector holds 0 elements. _Preferred over `size() == 0`._
* **`size()`**: Returns the actual number of elements currently in the vector.
* **`reserve()`**: Pre-allocates memory capacity. _Crucial in CP to prevent multiple runtime reallocations when pushing thousands of elements._
* **`capacity()`**: Returns the maximum number of elements the vector can hold before needing a reallocation.
* **`resize()`**: Changes the size of the vector. New elements are default-initialized.
* **`shrink_to_fit()`**: Requests the container to reduce its capacity to match its size. _(Rarely used in CP)._
* **`max_size()`**: Returns the maximum theoretical limit of elements the vector can hold. [](https://learn.microsoft.com/en-us/cpp/standard-library/vector-class?view=msvc-170)

---

### 4\. Iterators

Used to traverse vectors or feed ranges into STL algorithms like `std::sort`. [](https://www.youtube.com/watch?v=DxwPhRxTvmY)

* **`begin()` / `end()`**: Returns iterators pointing to the first element and past-the-last element.
* **`cbegin()` / `cend()`**: Returns read-only **constant** iterators.
* **`rbegin()` / `rend()`**: Returns **reverse** iterators (used to traverse backwards).
* **`crbegin()` / `crend()`**: Returns read-only **constant reverse** iterators. [](https://en.cppreference.com/cpp/algorithm/for%5Feach)

---

### 🚀 C++23 Specific Ecosystem Features for Vectors

While not direct member methods, C++23 introduces global mechanisms that completely change how you interact with `std::vector`: [](https://en.cppreference.com/cpp/container/vector)

| C++23 Feature                         | Syntax / Example                                     | Why it helps in CP                                                                                     |
| ------------------------------------- | ---------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| **std::ranges::to**                   | auto vec = view \| std::ranges::to<std::vector>();   | Easily pipe and materialize filtered/transformed views directly back into a vector.                    |
| **std::views::enumerate**             | for (auto \[idx, val\] : std::views::enumerate(vec)) | Eliminates the need to manually track loop indices when iterating through a vector.                    |
| **Monadic std::optional Interaction** | N/A                                                  | Easily wrap vectors or vector search operations inside clean functional flows.                         |
| **Expanded constexpr**                | constexpr std::vector<int> v = {1, 2, 3};            | Allows you to perform complex look-up table generations using vector methods entirely at compile time. |

### 💡 Time Complexity Cheat Sheet for CP

* **Random Access (`[]`, `at()`)**: O(1)
* **End Insertion/Deletion (`push_back`, `pop_back`)**: Amortized O(1)
* **Arbitrary Insertion/Deletion (`insert`, `erase`)**: Linear O(N) relative to the distance to the end. [](https://medium.com/@gayakk/vectors-in-c-the-complete-guide-88e7e184215b)

Would you like to see how to use the new C++23 **`std::ranges::to`** pipeline with a vector, or do you need a template demonstrating **compile-time vector operations (`constexpr`)** for competitive programming? [](https://changkun.de/modern-cpp/en-us/11-cpp23/)

* [](https://en.cppreference.com/cpp/container/vector)  
cppreference.com  
std::vector - cppreference.com  
is a sequence container encapsulating dynamic size contiguous arrays supporting automatic storage management.
* [](https://www.w3schools.com/cpp/cpp%5Fref%5Fvector.asp)  
W3Schools  
C++ vector Library Reference (vector functions)  
front() returns first element; insert() adds elements; max\_size() returns maximum possible elements; pop\_back() removes last eleme...
* [](https://www.geeksforgeeks.org/cpp/vector-in-cpp-stl/)  
GeeksforGeeks  
Vector in C++ STL - GeeksforGeeks  
Aug 26, 2026 — C++ vectors provide several functions to insert, access, modify, and remove elements. The push\_back() function adds an element at ...

Show all

# all cpp stl in cp

The **C++ Standard Template Library (STL)** is an indispensable toolkit for **competitive programming (CP)**, enabling you to write fast, optimized, and bug-free code without rewriting basic data structures from scratch. [](https://www.geeksforgeeks.org/cpp/the-c-standard-template-library-stl/)

To use everything seamlessly in CP, include the umbrella header `#include <bits/stdc++.h>` at the beginning of your file.

---

### 📦 1\. Containers (Data Structures)

### Sequence Containers

* `vector`: **Dynamic array**. The default choice for arrays when sizes are dynamic.
  * _Time Complexity:_ O(1) random access, O(1) average insertion at the back.
  * _Functions:_ `.push_back()`, `.pop_back()`, `.size()`, `.resize()`, `.clear()`, `.empty()`. [](https://www.youtube.com/watch?v=UFHkmaa-s30&t=39)
* `deque`: Double-ended queue. Allows fast insertion and deletion at both ends.
  * _Time Complexity:_ O(1) random access and O(1) push/pop at both front and back.
  * _Functions:_ `.push_front()`, `.pop_front()`, `.push_back()`, `.pop_back()`. [](https://www.youtube.com/watch?v=9ubwYU8a8hg&t=68)
* `list`: Doubly linked list. Rarely used in CP due to high memory overhead and lack of random access, but useful for O(1) splicing. [](https://www.youtube.com/watch?v=9ubwYU8a8hg&t=68)

#### Associative & Unordered Containers

* `set` / `multiset`: Tree-based sorted containers storing unique or duplicate elements with  
𝑂  
(  
log  
𝑁  
)  
 operations.
* `map` / `multimap`: Sorted key-value pairs with  
𝑂  
(  
log  
𝑁  
)  
 complexity.
* `unordered_set` / `unordered_map`: Hash table-based containers offering O(1) average-case time, though vulnerable to O(N) worst-case anti-tests. [](https://abhiarrathore.medium.com/the-magic-of-c-stl-standard-template-library-e910f43379ea)

---

### 🛠️ 2\. Container Adaptors

* `stack` / `queue`: Standard LIFO and FIFO interfaces supporting basic operations like `.push()`, `.pop()`, and access methods.
* `priority_queue`: A heap structure (max-heap by default) with logarithmic insertions and deletions. [](https://www.geeksforgeeks.org/cpp/important-functions-of-stl-components-in-c/)

---

### ⚡ 3\. Essential Algorithms (`<algorithm>`)

Standard algorithms operate on iterators (`begin()` to `end()`): [](https://www.geeksforgeeks.org/cpp/c-magicians-stl-algorithms/)

* **Sorting & Reversing:** `sort` (  
𝑂  
(  
𝑁  
log  
𝑁  
)  
) and `reverse` (O(N)).
* **Searching:** `binary_search`, `lower_bound`, and `upper_bound` provide logarithmic queries.
* **Utilities:** `max_element`, `min_element`, and `count` process ranges in linear time. [](https://github.com/geeky01adarsh/CPP%5FSTL)

---

### 🧬 4\. Core Utilities & Miscellaneous

* `pair` and `tuple`: Group heterogeneous variables together.
* `bitset`: Compact and fast storage for boolean arrays. [](https://abhiarrathore.medium.com/the-magic-of-c-stl-standard-template-library-e910f43379ea)

---

### 🚀 Cheat Sheet: Time Complexities Reference

Containers generally offer O(1) back operations for vectors, logarithmic performance for balanced trees (`set`/`map`), and average O(1) scaling for hash tables (`unordered_map`). [](https://www.w3schools.com/cpp/cpp%5Fdata%5Fstructures.asp)

Would you like a specialized snippet breakdown for a specific topic, such as **how to implement custom sorting comparators** or **how to safely use unordered\_map without getting hacked**?

* [](https://www.geeksforgeeks.org/cpp/the-c-standard-template-library-stl/)  
GeeksforGeeks  
Standard Template Library (STL) in C++ - GeeksforGeeks  
Aug 31, 2026 — STL (Standard Template Library) is a collection of pre-built classes and functions in C++ used for efficient data handling and pro...
* [](https://www.geeksforgeeks.org/cpp/important-functions-of-stl-components-in-c/)  
GeeksforGeeks  
Important functions of STL Components in C++ - GeeksforGeeks  
Jul 28, 2025 — Other components: Pair (two heterogeneous elements .first/.second; sortable); Ordered Set (policy-based tree; find\_by\_order, order...
* [](https://abhiarrathore.medium.com/the-magic-of-c-stl-standard-template-library-e910f43379ea)  
Medium  
The Complete Practical Guide to C++ STL(Standard Template Library) | by Abhishek Rathore | Medium  
May 20, 2019 — Components: Algorithms. Containers: vector (array with methods like set (maintains sorted ascending order, bitset (bit manipulatio...

Show all

