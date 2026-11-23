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

what?

> www.com 有 n 个待调色的方格，
> www.com 希望每个方格最终的颜色都互不相同。



sort.

you dont wanna increase the first one.
you assert current >= prev.
if =, you increase current by 1. one op.

and
for any intermediate state,
it's generally increasing.

wait, that's not true for 1 1 1 1 1.

e.g. 1 2 1 1 1

anyway, i can prove the first is always min, and prev ones are consecutive ints.
so you have to inc anyway.

if current <= prev, you make it prev + 1.
to make 1 to 3, it takes 2 steps.

*/

void solve() {
  readint(n);
  readseq(a, 1, n);

  sort(a, 1, n);

  int count = 0;
  each(i, 1, n){
    if(i == 1){
      continue;
    }

    int current = a[i];
    int prev = a[i - 1];

    if(current <= prev){
      int new_value = prev + 1;
      int delta = new_value - current;

      count += delta;
      a[i] = new_value;
    }
  }
  prn(count);
}
