#include <bits/stdc++.h>

// #define append push_back

#define repeat(n) for (int _ = 0; _ < n; _ += 1)
// closed interval
#define each(i, a, b) for (int i = (a); i <= (b); i += 1)
#define reveach(i, a, b) for (int i = (a); i >= (b); i -= 1)

#define int long long
#define float double
#define seq vector<int>

#define readint(...) \
  int __VA_ARGS__;   \
  read(__VA_ARGS__);
#define readfloat(...) \
  float __VA_ARGS__;   \
  read(__VA_ARGS__);
#define readstr(...)  \
  string __VA_ARGS__; \
  read(__VA_ARGS__);
#define readseq(v, a, b) \
  seq v((b) + 5);        \
  read_vec(v, (a), (b));

const int modulo = 1e9 + 7;

const int nil = -1;

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

// fp

template <typename T, typename Func>
auto map_vec(const vector<T>& vec, Func f) {
  using ReturnType = decltype(f(declval<T>()));
  vector<ReturnType> res;
  res.reserve(vec.size());
  for (const auto& x : vec) {
    res.push_back(f(x));
  }
  return res;
}

template <typename T, typename Func>
auto reduce_vec(const vector<T>& vec, Func f) {
  using ReturnType = decltype(f(declval<T>(), declval<T>()));

  ReturnType acc = vec[0];
  for (size_t i = 1; i < vec.size(); ++i) {
    acc = f(acc, vec[i]);
  }
  return acc;
}

template <typename T, typename Func, typename InitType>
auto reduce_vec(const vector<T>& vec, Func f, InitType initial_value) {
  using ReturnType = decltype(f(declval<InitType>(), declval<T>()));
  ReturnType acc = initial_value;
  for (const auto& x : vec) {
    acc = f(acc, x);
  }
  return acc;  // Returns pure type directly since an initial seed guarantees a
               // value
}

template <typename T, typename Func>
auto reduce_right_vec(const vector<T>& vec, Func f) {
  using ReturnType = decltype(f(declval<T>(), declval<T>()));
  if (vec.empty()) return optional<ReturnType>(nullopt);

  ReturnType acc = vec.back();
  for (size_t i = vec.size() - 1; i > 0; --i) {
    acc = f(vec[i - 1], acc);  // Element first, Accumulator second
  }
  return optional<ReturnType>(acc);
}

template <typename T, typename Func, typename InitType>
auto reduce_right_vec(const vector<T>& vec, Func f, InitType initial_value) {
  using ReturnType = decltype(f(declval<T>(), declval<InitType>()));
  ReturnType acc = initial_value;
  for (size_t i = vec.size(); i > 0; --i) {
    acc = f(vec[i - 1], acc);  // Element first, Accumulator second
  }
  return acc;  // Returns pure type directly
}

// iterables

#define sort_vec(vec, l, r) \
  std::sort((vec).begin() + (l), (vec).begin() + (r) + 1)

#define sort sort_vec

// string

#define format_float(number, precision)                                     \
  ([&]() {                                                                  \
    char buf[64];                                                           \
    std::snprintf(buf, sizeof(buf), "%.*f", (precision), (double)(number)); \
    return std::string(buf);                                                \
  }())

// math

auto add = [](auto a, auto b) { return a + b; };

auto sub = [](auto a, auto b) { return a - b; };

auto mul = [](auto a, auto b) { return a * b; };

auto truediv = [](auto a, auto b) { return double(a) / b; };

auto floordiv = [](auto a, auto b) { return std::floor(double(a) / b); };

auto divmod = [](auto numerator, auto denominator) {
  auto quotient = numerator / denominator, remainder = numerator % denominator;
  return std::pair{quotient, remainder};
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

auto and_ = [](auto a, auto b) { return a & b; };
auto or_ = [](auto a, auto b) { return a | b; };
auto not_ = [](auto a) { return !a; };
auto xor_ = [](auto a, auto b) { return a ^ b; };

auto summation = [](auto numbers) { return reduce_vec(numbers, add); };

auto multiplication = [](auto numbers) { return reduce_vec(numbers, mul); };

auto ln = [](auto a) { return log(a); };

auto logab = [](auto a, auto b) { return ln(a) / ln(b); };

auto combinations(int n, int r, int mod = modulo) {
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

auto permutations(int n, int r, int mod = modulo) {
  if (r < 0 || r > n) return 0;

  auto result = 1;
  each(i, n, n - r + 1) {
    result = (result * i) % mod;
  }
  return result;
}

#define min_vec(vec, l, r)    \
  [&]() {                     \
    auto minimum = vec[l];    \
    each(i, l, r) {           \
      if (vec[i] < minimum) { \
        minimum = element;    \
      }                       \
    }                         \
    return minimum            \
  }()

auto min_(auto first, auto... rest) {
  auto minimum = first;

  ((minimum = (rest < minimum) ? rest : minimum), ...);

  return minimum;
}

#define max_vec(vec, l, r)    \
  [&]() {                     \
    auto maximum = vec[l];    \
    each(i, l, r) {           \
      if (vec[i] > maximum) { \
        maximum = element;    \
      }                       \
    }                         \
    return maximum            \
  }()

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

ah, yeah, readline doesnt make it 1, n;



re on 4.

maybe string is tricky.



"this submit method is not currently allowed"

*/

void solve() {
  string first_line;

  readline(first_line);

  int n = first_line.size();

  int lines[n + 5][n + 5];
  // vector<string> lines(n + 5);

  each(i, 1, n) {
    lines[1][i] = first_line[i - 1] - '0';
    // lines[1][i] = first_line[i - 1];
  }
  // lines[1] = first_line;

  each(i, 2, n) {
    string s;
    readline(s);
    each(j, 1, n) {
      lines[i][j] = s[j - 1] - '0';
      // lines[i][j] = s[j - 1];
    }
    // readline(lines[i]);
  }

  // each(i, 1, n){
  //   each(j, 1, n){
  //     pr(lines[i][j]);
  //   }
  //   prn();
  // }

  pr(n);

  int combo = 0;
  // int combo = 1;

  // it wants the number of consecutive zero as the first number...
  // and lines[1][0], lines[0][n] is clearly 0

  // idk, maybe lines[0][n] is unreadable mess or int 0;
  lines[0][n] = 0;
  // lines[0][n] = '0';

  each(row, 1, n) {
    each(column, 1, n) {
      auto prev = column == 1 ? lines[row - 1][n] : lines[row][column - 1];
      auto current = lines[row][column];

      // info(row, column, prev, current);

      if (current != prev) {
        pr(combo);
        combo = 1;
        // combo = 0;
      } else {
        combo += 1;
      }
    }
  }

  if (combo != 0) {
    pr(combo);
  }
}
