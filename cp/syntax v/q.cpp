#include <bits/stdc++.h>

#define repeat(n) for (int _ = 0; _ < n; _ += 1)
// closed interval
#define each(i, a, b) for (int i = (a); i <= (b); i += 1)
#define reveach(i, a, b) for (int i = (a); i >= (b); i -= 1)

#define int long long
#define float double
#define seq(a, n) vector<int> a(n + 5)
#define dict unordered_map<int, int>

#define readint(...) \
  int __VA_ARGS__;   \
  read(__VA_ARGS__);
#define readfloat(...) \
  float __VA_ARGS__;   \
  read(__VA_ARGS__);
#define readstr(...)  \
  string __VA_ARGS__; \
  read(__VA_ARGS__);
#define readchar(...)  \
  char __VA_ARGS__; \
  read(__VA_ARGS__);
#define readseq(v, a, b) \
  seq(v, b);        \
  read_vec(v, a, b);

#define last(a) ((a).size() - 1)
// #define append push_back

const int modulo = 1e9 + 7;

const int nil = -1;

const int inf = 1e18;

using namespace std;

// utils

auto read(auto&&... variables) {
  (cin >> ... >> variables);
}

#define read_vec(vec, l, r) \
  each(i, l, r) {           \
    read(vec[i]);           \
  }

auto readline(auto&&... s) {
  cin >> ws;  // ignore any trailing whitespace
  ((getline(cin, s)), ...);
}

auto write(auto&&... items) {
  (cout << ... << items);
}

auto pr(auto&&... items) {
  (write(items, ' '), ...);
}

auto prn() {
  write('\n');
}

auto prn(auto&&... items) {
  pr(items...);

  write('\n');
}

#define print prn

#define prn_vec(vec, l, r) \
  each(i, l, r) {          \
    pr(vec[i]);            \
  }                        \
  write('\n');

// debug

#define info(...)             \
  if (should_debug) {         \
    prn("info", __VA_ARGS__); \
  }

auto force_tle() {
  while (true) {
  }
}

auto force_re() {
  assert(false);
}

auto force_mle() {
  vector<vector<int>> leak;
  while (true) {
    leak.push_back(vector<int>(1000000, 42));
  }
}

auto force_wa() {
  // cout << "wrong answer";
  exit(0);
}

// std

#define parse_int stoi
#define parse_float stod

// iterables

auto sort_arr(auto&& arr, auto l, auto r) {
  sort((arr) + (l), (arr) + (r) + 1);
}

auto sort_arr(auto&& arr, auto l, auto r, auto cmp) {
  sort((arr) + (l), (arr) + (r) + 1, cmp);
}

auto sort_vec(auto&& vec, auto l, auto r) {
  sort(vec.begin() + (l), vec.begin() + (r) + 1);
}

auto sort_vec(auto&& vec, auto l, auto r, auto cmp) {
  sort(vec.begin() + (l), vec.begin() + (r) + 1, cmp);
}

#define sort sort_vec

// string

auto format_float(auto number, auto precision) {
  char buf[64];
  std::snprintf(buf, sizeof(buf), "%.*f", (precision), (double)(number));
  return std::string(buf);
}

// math

auto truediv = [](auto a, auto b) { return double(a) / b; };

auto floordiv = [](auto a, auto b) { return std::floor(double(a) / b); };

auto divmod = [](auto numerator, auto denominator) {
  auto quotient = numerator / denominator, remainder = numerator % denominator;
  return pair{quotient, remainder};
};

auto pow_(int base, int exp, int mod = modulo) {
  int res = 1;
  base %= mod;

  while (exp > 0) {
    if (exp & 1) {  // exp % 2 == 1
      res = res * base % mod;
    }
    base = base * base % mod;
    exp >>= 1;  // exp /= 2;
  }
  return res;
}

auto mod_inverse(int n, int mod = modulo) {
  return pow_(n, mod - 2, mod);
}

auto ln = [](auto a) { return log(a); };

auto logab = [](auto a, auto b) { return ln(a) / ln(b); };

auto comb(int n, int r, int mod = modulo) {
  if (r < 0 || r > n) return 0;
  if (r == 0 || r == n) return 1;

  if (r > n - r) {
    r = n - r;
  }

  auto result = 1;
  each(i, 1, r) {
    result = (result * (n - r + i) * mod_inverse(i, mod)) % mod;
  }
  return result;
}

auto perm(int n, int r, int mod = modulo) {
  if (r < 0 || r > n) return 0;

  auto result = 1;
  each(i, n, n - r + 1) {
    result = (result * i) % mod;
  }
  return result;
}

auto min_vec(auto&& vec, auto l, auto r) {
  auto minimum = vec[l];
  each(i, l, r) {
    if (vec[i] < minimum) {
      minimum = vec[i];
    }
  }
  return minimum;
}

auto min_(auto first, auto... rest) {
  auto minimum = first;

  ((minimum = (rest < minimum) ? rest : minimum), ...);

  return minimum;
}

auto max_vec(auto&& vec, auto l, auto r) {
  auto maximum = vec[l];
  each(i, l, r) {
    if (vec[i] > maximum) {
      maximum = vec[i];
    }
  }
  return maximum;
}

auto max_(auto first, auto... rest) {
  auto maximum = first;

  ((maximum = (rest > maximum) ? rest : maximum), ...);

  return maximum;
}

auto floor_ = [](auto x) {
  int result = std::floor(x);
  return result;
};
auto ceil_ = [](auto x) {
  int result = std::ceil(x);
  return result;
};

// fix

#define pow pow_
#define floor floor_
#define ceil ceil_
#define min min_
#define max max_

void solve();

// entry

const bool is_single_task = false;

const bool should_debug = true;

signed main() {
  ios_base::sync_with_stdio(false);
  cin.tie(nullptr);

  int t = 1;

  if (!is_single_task) {
    read(t);
  }
  repeat(t) {
    solve();
  }
  return 0;
}

// solution

/*

from 1 to n,
let's say n = 

100010010
0|11111111 -> pick any 2
10000|1111 -> pick any 1 among 1111
10001000|1 -> pick any 0 among 1
100010010 -> check, though impossible

for any n,
you convert to binary,
from left to right (until the rev second digit), you count the number of prev 1,
when you see 1, you "make it zero" and pick required rem from the right, comb
specifically (possible rem is small)
if rem = 2, n(n-1)/2
if rem = 1, n
if rem = 0, 1 (make all right 0)
if rem < 0, break

notice you avoid the exact n. you actually you count for n - 1.

so, for n you do that for n + 1.



wa 1/10



still wa 1/10?!

idk.



ah, i missed it.

若存在两个非负整数 x,y（可以相同）



seg fault 8/10?!

array access/set out of bound?!



it's not about 500...



well...

l r in 0 ll...

what about 0?

*/

// auto binary(int n){

// }

int count(int n){
  if(n <= 1){
    return 0;
  }

  int current_count = 0;

  seq(binary, 100 + 5);
  int last_index = 100; // even/odd
  int current = last_index + 1;

  int temp_n = n; // you solve for n + 1 to count from 1 to n
  while(temp_n > 0){
    current -= 1;
    if(temp_n % 2 == 1){
    // if(temp_n % 2 == 0){
      binary[current] = 1;
      temp_n -= 1;
    } else {
      binary[current] = 0;
    }
    temp_n /= 2;
  }

  int first_index = current;

  assert(first_index >= 1);
 
  // info("binary", n);
  // each(i, first_index, last_index){
  //   pr(binary[i]);
  // }
  // prn();

  // each(i, first_index, last_index - 1){
  //   if(binary[i] == 1){
  //     current_count += 1;
  //   }
  // }
  current_count += max(last_index - first_index, 0);

  last_index = 100; // even/odd
  current = last_index + 1;

  temp_n = n + 1; // you solve for n + 1 to count from 1 to n
  while(temp_n > 0){
    current -= 1;
    if(temp_n % 2 == 1){
    // if(temp_n % 2 == 0){
      binary[current] = 1;
      temp_n -= 1;
    } else {
      binary[current] = 0;
    }
    temp_n /= 2;
  }

  first_index = current;
 
  // info("binary", n + 1);
  // each(i, first_index, last_index){
  //   pr(binary[i]);
  // }
  // prn();

  int current_one_count = 0;
  each(i, first_index, last_index){
  // each(i, first_index, last_index - 1){
    int digit = binary[i];

    if(digit == 0){
      continue;
    }

    // assume it zero
    int right = last_index - i;
    if(current_one_count == 0){
      int addition = right * (right - 1) / 2;
      // each(x, i + 1, last_index){
      //   if(binary[x] == 1){
      //     addition += 1;
      //   }
      // }
      // if(binary[last_index] == 0){
      //   // odd previously
      //   addition -= 1;
      // }

      // addition += right;
      // addition += max(right - 1, 0);

      current_count += addition;
      // info("pick two", i - first_index + 1, right, addition)
    } else if (current_one_count == 1){
      int addition = right;
      current_count += addition;
      // info("pick one", i - first_index + 1, right, addition)
    } else if (current_one_count == 2){
      int addition = 1;
      current_count += addition;
      // info("pick zero", i - first_index + 1, right, addition)
    } else {
      break;
    }

    current_one_count += 1;
  }

  return current_count;
}
// int count(int n){
//   int current_count = 0;

//   seq(binary, 1000);
//   int last_index = 500; // even/odd
//   // int last_index = 100; // even/odd
//   int current = last_index + 1;

//   int temp_n = n; // you solve for n + 1 to count from 1 to n
//   while(temp_n > 0){
//     current -= 1;
//     if(temp_n % 2 == 1){
//     // if(temp_n % 2 == 0){
//       binary[current] = 1;
//       temp_n -= 1;
//     } else {
//       binary[current] = 0;
//     }
//     temp_n /= 2;
//   }

//   int first_index = current;

//   assert(first_index >= 1);
 
//   // info("binary", n);
//   // each(i, first_index, last_index){
//   //   pr(binary[i]);
//   // }
//   // prn();

//   // each(i, first_index, last_index - 1){
//   //   if(binary[i] == 1){
//   //     current_count += 1;
//   //   }
//   // }
//   current_count += max(last_index - first_index, 0);

//   last_index = 500; // even/odd
//   // last_index = 100; // even/odd
//   current = last_index + 1;

//   temp_n = n + 1; // you solve for n + 1 to count from 1 to n
//   while(temp_n > 0){
//     current -= 1;
//     if(temp_n % 2 == 1){
//     // if(temp_n % 2 == 0){
//       binary[current] = 1;
//       temp_n -= 1;
//     } else {
//       binary[current] = 0;
//     }
//     temp_n /= 2;
//   }

//   first_index = current;
 
//   // info("binary", n + 1);
//   // each(i, first_index, last_index){
//   //   pr(binary[i]);
//   // }
//   // prn();

//   int current_one_count = 0;
//   each(i, first_index, last_index){
//   // each(i, first_index, last_index - 1){
//     int digit = binary[i];

//     if(digit == 0){
//       continue;
//     }

//     // assume it zero
//     int right = last_index - i;
//     if(current_one_count == 0){
//       int addition = right * (right - 1) / 2;
//       // each(x, i + 1, last_index){
//       //   if(binary[x] == 1){
//       //     addition += 1;
//       //   }
//       // }
//       // if(binary[last_index] == 0){
//       //   // odd previously
//       //   addition -= 1;
//       // }

//       // addition += right;
//       // addition += max(right - 1, 0);

//       current_count += addition;
//       // info("pick two", i - first_index + 1, right, addition)
//     } else if (current_one_count == 1){
//       int addition = right;
//       current_count += addition;
//       // info("pick one", i - first_index + 1, right, addition)
//     } else if (current_one_count == 2){
//       int addition = 1;
//       current_count += addition;
//       // info("pick zero", i - first_index + 1, right, addition)
//     } else {
//       break;
//     }

//     current_one_count += 1;
//   }

//   return current_count;
// }
// int count(int n){
//   int current_count = 0;

//   seq(binary, 1000);
//   int last_index = 100; // even/odd
//   int current = last_index + 1;

//   int temp_n = n; // you solve for n + 1 to count from 1 to n
//   while(temp_n > 0){
//     current -= 1;
//     if(temp_n % 2 == 1){
//     // if(temp_n % 2 == 0){
//       binary[current] = 1;
//       temp_n -= 1;
//     } else {
//       binary[current] = 0;
//     }
//     temp_n /= 2;
//   }

//   int first_index = current;
 
//   // info("binary", n);
//   // each(i, first_index, last_index){
//   //   pr(binary[i]);
//   // }
//   // prn();

//   // each(i, first_index, last_index - 1){
//   //   if(binary[i] == 1){
//   //     current_count += 1;
//   //   }
//   // }
//   current_count += max(last_index - first_index, 0);

//   last_index = 100; // even/odd
//   current = last_index + 1;

//   temp_n = n + 1; // you solve for n + 1 to count from 1 to n
//   while(temp_n > 0){
//     current -= 1;
//     if(temp_n % 2 == 1){
//     // if(temp_n % 2 == 0){
//       binary[current] = 1;
//       temp_n -= 1;
//     } else {
//       binary[current] = 0;
//     }
//     temp_n /= 2;
//   }

//   first_index = current;
 
//   // info("binary", n + 1);
//   // each(i, first_index, last_index){
//   //   pr(binary[i]);
//   // }
//   // prn();

//   int current_one_count = 0;
//   each(i, first_index, last_index){
//   // each(i, first_index, last_index - 1){
//     int digit = binary[i];

//     if(digit == 0){
//       continue;
//     }

//     // assume it zero
//     int right = last_index - i;
//     if(current_one_count == 0){
//       int addition = right * (right - 1) / 2;
//       // each(x, i + 1, last_index){
//       //   if(binary[x] == 1){
//       //     addition += 1;
//       //   }
//       // }
//       // if(binary[last_index] == 0){
//       //   // odd previously
//       //   addition -= 1;
//       // }

//       // addition += right;
//       // addition += max(right - 1, 0);

//       current_count += addition;
//       // info("pick two", i - first_index + 1, right, addition)
//     } else if (current_one_count == 1){
//       int addition = right;
//       current_count += addition;
//       // info("pick one", i - first_index + 1, right, addition)
//     } else if (current_one_count == 2){
//       int addition = 1;
//       current_count += addition;
//       // info("pick zero", i - first_index + 1, right, addition)
//     } else {
//       break;
//     }

//     current_one_count += 1;
//   }

//   return current_count;
// }
// int count(int n){
//   seq(binary, 1000);
//   int last_index = 100; // even/odd
//   int current = last_index + 1;

//   int temp_n = n; // you solve for n + 1 to count from 1 to n
//   while(temp_n > 0){
//     current -= 1;
//     if(temp_n % 2 == 1){
//     // if(temp_n % 2 == 0){
//       binary[current] = 1;
//       temp_n -= 1;
//     } else {
//       binary[current] = 0;
//     }
//     temp_n /= 2;
//   }

//   int first_index = current;
 
//   // info("binary", n);
//   // each(i, first_index, last_index){
//   //   pr(binary[i]);
//   // }
//   // prn();

//   last_index = 100; // even/odd
//   current = last_index + 1;

//   temp_n = n + 1; // you solve for n + 1 to count from 1 to n
//   while(temp_n > 0){
//     current -= 1;
//     if(temp_n % 2 == 1){
//     // if(temp_n % 2 == 0){
//       binary[current] = 1;
//       temp_n -= 1;
//     } else {
//       binary[current] = 0;
//     }
//     temp_n /= 2;
//   }

//   first_index = current;
 
//   // info("binary", n + 1);
//   // each(i, first_index, last_index){
//   //   pr(binary[i]);
//   // }
//   // prn();

//   int current_one_count = 0;
//   int current_count = 0;
//   each(i, first_index, last_index){
//   // each(i, first_index, last_index - 1){
//     int digit = binary[i];

//     if(digit == 0){
//       continue;
//     }

//     // assume it zero
//     int right = last_index - i;
//     if(current_one_count == 0){
//       int addition = right * (right - 1) / 2;
//       current_count += addition;
//       // info("pick two", i - first_index + 1, right, addition)
//     } else if (current_one_count == 1){
//       int addition = right;
//       current_count += addition;
//       // info("pick one", i - first_index + 1, right, addition)
//     } else if (current_one_count == 2){
//       int addition = 1;
//       current_count += addition;
//       // info("pick zero", i - first_index + 1, right, addition)
//     } else {
//       break;
//     }

//     current_one_count += 1;
//   }

//   return current_count;
// }
// int count(int n){
//   seq(binary, 1000);
//   int last_index = 100; // even/odd
//   int current = last_index + 1;

//   int temp_n = n + 1; // you solve for n + 1 to count from 1 to n
//   while(temp_n > 0){
//     current -= 1;
//     if(temp_n % 2 == 1){
//     // if(temp_n % 2 == 0){
//       binary[current] = 1;
//       temp_n -= 1;
//     } else {
//       binary[current] = 0;
//     }
//     temp_n /= 2;
//   }

//   int first_index = current;
 
//   // info("binary", n + 1);
//   // each(i, first_index, last_index){
//   //   pr(binary[i]);
//   // }
//   // prn();

//   int current_one_count = 0;
//   int current_count = 0;
//   each(i, first_index, last_index - 1){
//     int digit = binary[i];

//     if(digit == 0){
//       continue;
//     }

//     // assume it zero
//     int right = last_index - i;
//     if(current_one_count == 0){
//       current_count += right * (right - 1) / 2;
//     } else if (current_one_count == 1){
//       current_count += right;
//     } else if (current_one_count == 2){
//       current_count += 1;
//     } else {
//       break;
//     }

//     current_one_count += 1;
//   }

//   return current_count;
// }

void solve() {
  // int prev = 0;

  // each(i, 0, 100){
  //   int current = count(i);
  //   info("count", i, current, current - prev);
  //   prev = current;
  // }
  // int prev = 0;

  // each(i, 1, 20){
  //   int current = count(i);
  //   info("count", i, current, current - prev);
  //   prev = current;
  // }

  // info(count(1e18));

  readint(l, r);

  prn(count(r) - count(l - 1));
}
// void solve() {
//   // int prev = 0;

//   // each(i, 0, 100){
//   //   int current = count(i);
//   //   info("count", i, current, current - prev);
//   //   prev = current;
//   // }
//   // int prev = 0;

//   // each(i, 1, 20){
//   //   int current = count(i);
//   //   info("count", i, current, current - prev);
//   //   prev = current;
//   // }

//   readint(l, r);

//   prn(count(r) - count(l - 1));
// }
// void solve() {
//   // int prev = 0;

//   // each(i, 0, 20){
//   //   int current = count(i);
//   //   info("count", i, current, current - prev);
//   //   prev = current;
//   // }
//   // int prev = 0;

//   // each(i, 1, 20){
//   //   int current = count(i);
//   //   info("count", i, current, current - prev);
//   //   prev = current;
//   // }

//   readint(l, r);

//   prn(count(r) - count(l - 1));
// }
// void solve() {
//   // each(i, 1, 10){
//   //   info("count", i, count(i));
//   // }

//   readint(l, r);

//   prn(count(r) - count(l - 1));
// }
