# how to calc sigma i 1 n floor 1/i fast in cp cpp

To calculate 

∑𝑛𝑖\=1

⌊

𝑛𝑖

⌋

 fast in Competitive Programming (CP) using C++, you should use the **Square Root Decomposition (also known as the Division Block optimization)**. This reduces the time complexity from 

𝑂

(

𝑛

)

 to 

**𝑶**

**(**

**𝒏√**

**)**

.

### 💡 Core Intuition

The value of 

⌊

𝑛𝑖

⌋

 forms blocks of identical values. For instance, if 

𝑛

\=10

:

* For  
𝑖  
\=4  
⟹⌊10  
/4  
⌋  
\=2
* For  
𝑖  
\=5  
⟹⌊10  
/5  
⌋  
\=2

Instead of iterating through every single 

i

𝑖

, you can jump to the end of each block of identical quotients. For a given left bound 

l

𝑙

, the largest right bound 

r

𝑟

 sharing the exact same quotient value is given by:  

r\=⌊n⌊n/l⌋⌋

𝑟\=⌊𝑛⌊𝑛/𝑙⌋⌋

The number of elements in that block is 

(

𝑟

−𝑙

+1

)

, and their contribution to the total sum is 

(

𝑟

−𝑙

+1

)

×⌊

𝑛𝑙

⌋

.

### 🚀 C++ Implementation

cpp

```
#include <iostream>

using namespace std;

// Function to calculate sum of floor(n / i) from 1 to n in O(sqrt(n))
long long floor_sum(long long n) {
    long long ans = 0;
    
    for (long long l = 1, r; l <= n; l = r + 1) {
        // Find the right boundary where floor(n / l) remains the same
        r = n / (n / l);
        
        // Count of elements in the current block
        long long count = r - l + 1;
        
        // Value of floor(n / i) for this block
        long long val = n / l;
        
        ans += count * val;
    }
    
    return ans;
}

int main() {
    // Fast I/O for CP
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    
    long long n;
    if (cin >> n) {
        cout << floor_sum(n) << "\n";
    }
    return 0;
}

```



### ⚡ Complexity Analysis

* **Time Complexity:**  
𝑂  
(  
𝑛√  
)  
. The loop runs approximately  
2  
𝑛√  
 times because  
⌊  
𝑛𝑖  
⌋  
 can take at most  
2  
𝑛√  
 distinct values.
* **Space Complexity:**  
𝑂  
(  
1  
)  
. No auxiliary space needed.

### ⚠️ Common CP Pitfalls

1. **Integer Overflow:** Always use `long long` for the sum (`ans`), `n`, and the block boundaries. If  
𝑛  
\=1012  
, the final sum can easily exceed the limits of a standard 32-bit `int`.
2. **Dividing by Zero:** The line `r = n / (n / l);` works perfectly up to  
𝑙  
\=𝑛  
. If you ever need to sum up to a limit  
m  
𝑚  
 where  
𝑚  
\>𝑛  
, make sure to cap  
r  
𝑟  
 using `r = min(m, n / (n / l))` to avoid division by zero when  
𝑛  
/𝑙  
 hits  
0  
0  
.

Are you trying to solve a variation of this problem where you also have a linear function inside like 

⌊

𝑎𝑖+𝑏𝑐

⌋

, or do you need to combine this with **multiplicative functions** using a **Sieve**? Let me know, and I can provide the optimized 

𝑂

(

log

𝑛

)

 or 

𝑂

(

𝑛2/3

)

 algorithms for those variants.