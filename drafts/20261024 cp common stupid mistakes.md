# common mistakes in cp cpp

In **C++ Competitive Programming (CP)**, small code inefficiencies or logical oversights frequently lead to frustrating verdicts like **Time Limit Exceeded (TLE)**, **Wrong Answer (WA)**, or **Runtime Error (RTE)**. [](https://codeforces.com/blog/entry/111217)

---

### 1\. ⏱️ Mistakes Leading to Time Limit Exceeded (TLE)

#### Splitting/Passing Containers by Value

When passing vectors or strings into functions, omitting the ampersand (`&`) causes C++ to deep-copy the entire container. Doing this inside a recursive function (like a DFS) will degrade an O(N) algorithm into O(N²), immediately causing a TLE. [](https://www.youtube.com/watch?v=0pG%5F45ZIZOs)

* ❌ **Bad:** `void dfs(int u, vector<int> adj)`
* **Good:** `void dfs(int u, const vector<int>& adj)`

#### Using `std::endl` Instead of `\n`

The `std::endl` manipulator forces a physical flush of the output buffer. When printing thousands of lines, this introduces massive I/O overhead. [](https://codeforces.com/blog/entry/111217)

* ❌ **Bad:** `cout << ans << endl;`
* **Good:** `cout << ans << "\n";`

#### Forgetting Fast I/O

By default, C++ syncs its standard streams with C streams (`scanf`/`printf`), which slows down processing. [](https://codeforces.com/blog/entry/111217)

* **Fix:** Always include these lines at the beginning of your `main()` function:  
cpp  
```  
ios_base::sync_with_stdio(false);  
cin.tie(NULL);  
```  


#### Incorrect Use of `std::lower_bound` on Sets

Using the generic `std::lower_bound(s.begin(), s.end(), val)` on an `std::set` takes O(N) time because set iterators are not random-access. [](https://codeforces.com/blog/entry/111217)

* ❌ **Bad:** `auto it = lower_bound(my_set.begin(), my_set.end(), x);` // O(N)
* **Good:** `auto it = my_set.lower_bound(x);` //  
𝑂  
(  
log  
𝑁  
)  
[](https://codeforces.com/blog/entry/111217)

---

### 2\. 🧮 Mistakes Leading to Wrong Answer (WA)

#### Integer Overflow in Intermediate Multiplications

Even if your result variable is a `long long`, multiplying two `int` variables can overflow _before_ the assignment occurs. [](https://www.geeksforgeeks.org/cpp/common-mistakes-avoided-competitive-programming-c-beginners/)

* ❌ **Bad:** `long long area = width * height;` (If both are 10⁵, this overflows `int`).
* **Good:** `long long area = 1LL * width * height;` [](https://www.geeksforgeeks.org/cpp/common-mistakes-avoided-competitive-programming-c-beginners/)

#### Misunderstanding `std::multiset::erase()`

Passing a value to `erase` on a `multiset` deletes **all** instances of that value, not just one. [](https://codeforces.com/blog/entry/111217)

* ❌ **Bad:** `my_multiset.erase(x);` // Deletes every single `x`
* **Good:** `my_multiset.erase(my_multiset.find(x));` // Deletes only one `x` [](https://codeforces.com/blog/entry/111217)

#### Negatives in Modulo Arithmetic

In C++, the `%` operator can return negative numbers (e.g., `-5 % 3 = -2`). In CP problems requiring answers modulo 10⁹+7, negative remainders will yield a WA.

* ❌ **Bad:** `long long ans = (a - b) % MOD;`
* **Good:** `long long ans = ((a - b) % MOD + MOD) % MOD;`

#### The `pow()` Precision Trap

The `std::pow()` function works with floating-point types (`double`). Due to precision errors, `pow(5, 2)` might compute to `24.999999`, which truncates to `24` if cast directly to an integer. [](https://codeforces.com/blog/entry/111217)

* **Fix:** Use custom loops for integer exponentiation (like binary exponentiation) or use `round(pow(a, b))`.

---

### 3\. 💥 Mistakes Leading to Runtime Error (RTE)

#### Not Clearing Global Arrays Between Test Cases

Multi-testcase problems (`while(t--)`) are standard. Forgetting to reset your global arrays, vectors, or sets before processing the next testcase causes data to leak across tests, triggering WA or out-of-bounds RTEs. [](https://codeforces.com/blog/entry/111217)

* **Fix:** Use `memset()` or clear structures at the start of each test case loop. Note that `memset` is only reliable for setting values to `0` or `-1`. [](https://codeforces.com/blog/entry/111217)

#### Accidental Map Insertion Using `[]`

Simply checking for a key's existence using the subscript operator `mp[key]` will implicitly insert that key with a default value if it doesn't exist, unexpectedly bloating map size and memory. [](https://codeforces.com/blog/entry/111217)

* ❌ **Bad:** `if (mp[x] == 5)` // Inserts `x` if it wasn't there
* **Good:** `if (mp.count(x) && mp[x] == 5)` or `if (auto it = mp.find(x); it != mp.end() && it->second == 5)`

#### Bitwise Operator Precedence

Relational operators (like `==`, `<`, `+`) have higher precedence than bitwise operators (like `&`, `|`, `^`, `<<`). [](https://codeforces.com/blog/entry/111217)

* ❌ **Bad:** `if (x & 1 == 0)` // Evaluated as `x & (1 == 0)`
* **Good:** `if ((x & 1) == 0)` [](https://codeforces.com/blog/entry/111217)

---

Are you running into a specific issue right now (like **TLE** on a particular algorithm)? If you want, paste the snippet or mention the **topic** (e.g., Graphs, DP, Bitmasking) and I can help you optimize it.

* [](https://codeforces.com/blog/entry/111217)  
Codeforces  
\[Tutorial\] Common Mistakes in Competitive Programming and How to Avoid Them - Codeforces  
Integer overflow in multiplication requires typecasting (long long) before operations; keeping variables in \`\[0, mod-1\]\` and avoid...
* [](https://www.geeksforgeeks.org/cpp/common-mistakes-avoided-competitive-programming-c-beginners/)  
GeeksforGeeks  
Common mistakes to be avoided in Competitive Programming in C++ | Beginners - GeeksforGeeks  
Integer overflow prevention requires using 1LL or 1ll prefixes (e.g., 1LL \* x \* y) before multiplication or bit shifts to promote ...
* [](https://www.youtube.com/watch?v=0pG%5F45ZIZOs)  
YouTube·ByteClocker  
10 C++ Mistakes You're Probably Making (And How to Fix ...  
May 16, 2025 — intentional copy when passing a parameter. C++ creates a copy of the argument. when passing a temporary object by value to a funct...  
5:47

# common stupid mistakes in cp cpp

In Competitive Programming (CP) using C++, minor oversights routinely lead to frustrating **Wrong Answer (WA)**, **Time Limit Exceeded (TLE)**, or **Runtime Error (RTE)** verdicts. [](https://codeforces.com/blog/entry/111217)

---

### 1\. Integer & Arithmetic Blunders

* **Implicit `int` Overflows:** Writing `long long ans = a * b;` when `a` and `b` are `int`s will still overflow. The multiplication happens as a standard 32-bit `int` _before_ it is assigned.
  * _Fix:_ Typecast upfront: `long long ans = 1LL * a * b;`. [](https://www.youtube.com/watch?v=GsQM0nJhXws&t=10)
* **Bitwise Shifts on 32-bit Integers:** Writing `1 << 40` or `1 << n` (where `n >= 32`) triggers undefined behavior or overflows because `1` defaults to a 32-bit integer.
  * _Fix:_ Use `1LL << 40`. [](https://www.linkedin.com/posts/priyansh-agarwal%5Fthe-worst-thing-in-a-contest-is-when-you-activity-7410284736234835968-SQCu)
* **Floating-Point Precision Issues:** Using `pow(x, y)` or `sqrt(x)` for integer math yields precision bugs. For instance, `pow(5, 2)` might return `24.99999`, which truncates to `24` when cast to an integer.
  * _Fix:_ Use basic loops or native multiplication for integer exponents. [](https://codeforces.com/blog/entry/111217)
* **Negative Modulo Handling:** In C++, `-5 % 3` yields `-2`, not `1`. If your problem requires positive modular arithmetic, this will break your logic.
  * _Fix:_ Use `(a % MOD + MOD) % MOD`.

---

### 2\. Time Limit Exceeded (TLE) Traps

* **Using `std::endl` Instead of `\n`:** `std::endl` forces a physical flush of the output buffer. In problems requiring 10⁵ or more output operations, this results in a guaranteed TLE.
  * _Fix:_ Stick exclusively to `\n`. [](https://codeforces.com/blog/entry/111217)
* **Copying Containers in Loops:** Writing `for (auto x : vec)` or passing a vector to a function via `void solve(vector<int> v)` creates a full copy of the container every single time. Inside a loop, this turns an O(N) algorithm into O(N²).
  * _Fix:_ Pass by reference: `for (const auto &x : vec)` or `void solve(vector<int> &v)`. [](https://codeforces.com/blog/entry/111217)
* **Standard `std::lower_bound` on Sets:** Using `std::lower_bound(s.begin(), s.end(), x)` on a `std::set` takes O(N) time because set iterators are not random-access.
  * _Fix:_ Use the member function `s.lower_bound(x)`, which executes in  
  𝑂  
  (  
  log  
  𝑁  
  )  
  . [](https://codeforces.com/blog/entry/111217)

---

### 3\. Container & STL Quirks

* **Erasing from a `std::multiset`:** Writing `ms.erase(val)` removes **all** copies of that value from the multiset.
  * _Fix:_ To remove only a single instance, erase by iterator: `ms.erase(ms.find(val));`. [](https://codeforces.com/blog/entry/111217)
* **Accidental Map Insertion:** Merely accessing an element using `my_map[key]` automatically inserts that key with a default value if it doesn't already exist. This blows up memory usage and alters the map's size.
  * _Fix:_ Use `my_map.count(key)` or `my_map.find(key)` to safely check for existence. [](https://codeforces.com/blog/entry/111217)
* **Using `memset` for Arbitrary Values:** `memset` works on a **byte-by-byte** basis. It safely sets arrays to `0` or `-1`, but using it to set an array to `1` will result in unexpected, massive integers.
  * _Fix:_ Use `std::fill(arr, arr + n, val)` for any number other than `0` or `-1`. [](https://codeforces.com/blog/entry/111217)

---

### 4\. Logic & Multi-Testcase Pitfalls

* **Failing to Clear Globals:** When a problem includes multiple test cases (T), forgetting to clear or reinitialize global arrays, vectors, or sets between runs will bleed data from the previous test case into the next. [](https://codeforces.com/blog/entry/111217)
* **Early Returns and Fast I/O Desync:** If you return early from a testcase function (`if (condition) return;`) before reading all the inputs provided for that specific test case, the remaining inputs will get misaligned and corrupt the subsequent test cases. [](https://codeforces.com/blog/entry/111217)
* **Uninitialized Local Variables:** Global variables in C++ are automatically zero-initialized, but local variables contain random garbage memory. Relying on an uninitialized local counter triggers unpredictable Runtime Errors or random calculations. [](https://www.youtube.com/watch?v=GsQM0nJhXws&t=10)

Are you currently hunting down a **specific bug** (like a mysterious **WA** or **RTE**) in one of your solutions? If you share the **problem statement** or the **code snippet**, I can help you spot the mistake!

* [](https://codeforces.com/blog/entry/111217)  
Codeforces  
\[Tutorial\] Common Mistakes in Competitive Programming and How to Avoid Them - Codeforces  
I/O & Logic: mixing \`cout\` and \`printf\` after disabling sync fails; clear global arrays between multi-tests; avoid early returns b...
* [](https://www.youtube.com/watch?v=GsQM0nJhXws&t=10)  
YouTube·Colin Galen  
C++ Mistakes Noobs Make (and how to prevent them)  
Sep 11, 2021 — Global variables are initialized to zero, but other variables are not; uninitialized variables result in undefined behavior, often...  
12m
* [](https://www.linkedin.com/posts/priyansh-agarwal%5Fthe-worst-thing-in-a-contest-is-when-you-activity-7410284736234835968-SQCu)  
LinkedIn·Priyansh Agarwal  
Common Implementation Mistakes in Competitive Programming  
Dec 26, 2025 — Using st.erase(x) removes all elements with value x. To erase only a single occurrence, use: st.erase(st.find(x));

# what if you use %d to output long long in cp

Using `%d` instead of `%lld` to output a `long long` in Competitive Programming (CP) triggers **Undefined Behavior (UB)**. Because most modern CP judges run on 64-bit Linux architectures, an `int` is **32 bits** (4 bytes) while a `long long` is **64 bits** (8 bytes). [](https://stackoverflow.com/questions/2270966/printing-unsigned-long-long-using-d)

Depending on the compiler, optimization levels, and what else you are printing, this mismatch usually causes one of three major failures:

### 1\. Wrong Answer (WA) due to Data Truncation

The `printf` function reads only the first 32 bits from the register or stack where your 64-bit integer resides. [](https://www.quora.com/In-the-C-language-why-are-we-taught-to-use-d-for-integers-while-i-also-works-the-same)

* If your answer is small (fits in a standard 32-bit int), it _might_ print correctly by pure chance.
* If your answer exceeds 2 ⋅ 10⁹, it will either print a completely garbled number, a negative number, or just `0`. [](https://www.quora.com/Why-does-printing-an-%E2%80%9Clong-long-integer%E2%80%9D-with-format-specifier-%E2%80%9C-d%E2%80%9D-give-result-as-zero-even-if-they-are-both-integers)

### 2\. Runtime Error (RE) or Stack Corruption

When you pass a `long long` but tell `printf` to expect an `int`, the internal argument pointer gets misaligned. If you try to print multiple variables in the same `printf` statement, **all subsequent variables will print completely wrong data**, or the program might crash entirely with a segmentation fault.

### 3\. Compilation Error / Warnings

Most modern judges compile C++ code using strict flags like `-Wall -Wextra -O2`. If you use GCC, using `%d` for a `long long` will trigger a compiler warning: [](https://stackoverflow.com/questions/2270966/printing-unsigned-long-long-using-d)

text

```
warning: format '%d' expects argument of type 'int', but argument 2 has type 'long long int' [-Wformat=]

```



Depending on the platform (like Codeforces or AtCoder), warnings usually won't block compilation, but they always point to runtime bugs.

---

### 💡 The CP-Safe Solutions

To avoid messing up your format specifiers entirely, use one of these approaches:

* **The C++ Way (Recommended):** Use `std::cout`. It is type-safe and automatically detects `long long`. Just make sure to optimize it at the top of your `main()` function.  
cpp  
```  
ios_base::sync_with_stdio(false);  
cin.tie(NULL);  
long long ans = 1e18;  
cout << ans << "\n";  
```  

* **The Correct C Specifier:** If you prefer `printf`, use **`%lld`**. [](https://www.thecodingforums.com/threads/how-to-output-long-long-or-int64.440107/)  
cpp  
```  
long long ans = 1e18;  
printf("%lld\n", ans);  
```  


Are you currently hunting down a **Wrong Answer (WA)** or **Runtime Error** bug on a specific problem right now, or are you just optimizing your template? I can help you debug your code if you share it!

* [](https://stackoverflow.com/questions/2270966/printing-unsigned-long-long-using-d)  
Stack Overflow  
Printing unsigned long long using %d  
Feb 16, 2010 — type unsigned long long int , you should print it with the right format specifier, which is "%llu" $ gcc -std=c99 … warning: forma...
* [](https://stackoverflow.com/questions/38561/what-is-the-conversion-specifier-for-printf-that-formats-a-long)  
Stack Overflow  
What is the conversion specifier for printf that formats a long?  
Sep 1, 2008 — it does have its own format specifier: printf("%ld", n); For 64 bits, you'd want a long … printf("%lld", n); it's different in Win...
* [](https://www.thecodingforums.com/threads/how-to-output-long-long-or-int64.440107/)  
Coding Forums  
How to output long long or int64? | C Programming  
Nov 11, 2005 — If you have C99, "%lld" will output a long long, and "%"PRId64 will print an int64\_t. Other macros in will provide similar specifi...

Show all

