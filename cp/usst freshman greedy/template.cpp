#include <bits/stdc++.h>
#define macro(_1, _2, _3, _4, name, ...) name

// #define all(v) v.begin(), v.end()
// #define reverse(v) v.rbegin(), v.rend()
#define len(x) (int)(x).size()
#define append push_back
// #define push push_back

#define repeat(n) for (int __i = 0; __i < n; __i += 1)
// closed interval
#define each(i, a, b) for (int i = (a); i <= (b); i += 1)
#define reveach(i, a, b) for (int i = (a); i >= (b); i -= 1)
#define rev_each reveach

#define enum std::views::enumerate  // dict items, object entries

#define int long long

using namespace std;

void read(auto&&... variables) {
  (cin >> ... >> variables);
}

template <typename T>
void read(vector<T>& vec) {
  for (auto& element : vec) {
    read(element);
  }
}
template <typename T>
void read_vec(vector<T>& vec, int l, int r) {
  each(i, l, r) {
    read(vec[i]);
  }
}

void readline(auto&&... s) {
  cin >> ws;  // ignore any trailing whitespace
  ((getline(cin, s)), ...);
}

void write(auto&&... items) {
  (cout << ... << items);
}

void __print(auto&& scalar) {
  write(scalar, ' ');
}
template <typename T>
void __print(vector<T>& elements) {
  for (auto& element : elements) {
    write(element, ' ');
  }
}

void pr(auto&&... items) {
  (__print(items), ...);
}

void prn() {
  write('\n');
}

void prn(auto&&... items) {
  pr(items...);

  write('\n');
}

template <typename T>
void prn_vec(vector<T>& elements, int l, int r) {
  each(i, l, r) {
    pr(elements[i]);
  }

  write('\n');
}

inline auto print(auto&&... items) {
  return prn(items...);
}

void solve();

const bool single_task = true;

signed main() {
  ios_base::sync_with_stdio(false);
  cin.tie(nullptr);

  int t = 1;

  if (!single_task) {
    cin >> t;
  }
  repeat(t) {
    solve();
  }
  return 0;
}

// solution

/*



*/

void solve() {
  int n;
  read(n);

  vector<int> a(n);

  read(a);
  prn(a);

  // vector<int> a(n + 5);

  // read_vec(a, 1, n);
  // prn_vec(a, 1, n);
}
