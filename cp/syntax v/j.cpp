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

const bool is_single_task = true;

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

dejavu...

> 清楚姐姐



ah, interesting, i can select both the title and some problem desc
on problem page on vjudge

<iframe src="/problem/description/450862592550185?3574683297507" width="100%" height="2048px" frameborder="0" scrolling="no" style="height: 1024px;"></iframe>

no wonder it fouc.

clearly flawed engineering. rather ssr or api call.
it's equivalent to api call actually if you know how to manipulate innerhtml.

and inside such html "html" is always flashing. interval 1? time?



1 to n should appear on every column.
order is irrelevant.

let's make 1 to n column heading.
such heading must be minimum in the column to be gcd.
and all others must be multiples.

1 2
2 4

1 2 3
5 4 6
7 8 9

1  2  3  4
7  x  6  8 # 5
11 10 9  12
13 14 15 16

1 2 3 4 5
      8 10
      12 15
      [16, ii] 20
      [24, i] 25

i. typically n-1 n+1
ii. typically skipping n-1 n

1 2 3 4 5 6



n in 100.

greedy.

(assign first line as 1 to n.)

for each column rtl, bottom to top,
always take the maximal mulitple existing
when it comes to first line skip.
when reaching heading before first line, prn -1 return



wa.

typically, only work on test 1 to 3 (likely 1 to 3).



1  2  3  4
7  x  6  8 # 5
11 10 9  12
13 14 15 16



ive come up w an idea after dinner.
gcd n ... = n means n is the least.
gcd ... = n doesnt mean n has to appear.
and gcd n ... doesnt mean it = n when n is the least

1  2  3  4
7  x  6  8
11 10 9  12
13 14 15 16
that wont work anyway

~~1 2 3 4 5 6~~
4 8 16 28 32
5 10 15 20 25 35
6 12 18 24 30 36

currently it reports -1 for any n >= 4 it seems.

4 8 16 32 44 (4)
10 15 20 25 35 40 45 (5)
6 12 18 24 30 36 48
7 14 21 28 35 42 49

idk, let's just see whether we can fastpass.

doesnt seem it would fastpass. worth a try.



yeah, still wa except 1 ~ 3. same.

*/

void solve() {
  readint(n);

  // row column 1 indexed
  int a[100 + 5][100 + 5];

  dict is_used;

  // each(j, 1, n){
  //   a[1][j] = j;
  //   is_used[j] = true;
  // }
  
  reveach(j, n, 1){
    reveach(i, n, 1){
      reveach(value, n * n, j - 1){
        if(value == j - 1){
          prn(-1);
          return ;
        }

        if(is_used.count(value)){
          continue;
        }

        if(value % j == 0){
          is_used[value] = true;
          a[i][j] = value;
          break;
        }
      }
    }
  }

  each(i, 1, n){
    each(j, 1, n){
      pr(a[i][j]);
    }
    prn();
  }
}
// void solve() {
//   readint(n);

//   // row column 1 indexed
//   int a[100 + 5][100 + 5];

//   dict is_used;

//   each(j, 1, n){
//     a[1][j] = j;
//     is_used[j] = true;
//   }
  
//   reveach(j, n, 1){
//     reveach(i, n, 2){
//       reveach(value, n * n, j){
//         if(value == j){
//           prn(-1);
//           return ;
//         }

//         if(is_used.count(value)){
//           continue;
//         }

//         if(value % j == 0){
//           is_used[value] = true;
//           a[i][j] = value;
//           break;
//         }
//       }
//     }
//   }

//   each(i, 1, n){
//     each(j, 1, n){
//       pr(a[i][j]);
//     }
//     prn();
//   }
// }
