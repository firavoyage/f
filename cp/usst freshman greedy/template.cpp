#include <bits/stdc++.h>
#define macro(_1, _2, _3, _4, name, ...) name

// #define all(v) v.begin(), v.end()
// #define reverse(v) v.rbegin(), v.rend()
#define len(x) (int)(x).size()
#define append push_back
// #define push push_back

#define repeat(n) for (int i = 0; i < n; i += 1)
// closed interval
#define each(i, a, b) for (int i = a; i <= b; i += 1)
#define reveach(i, a, b) for (int i = a; i >= b; i -= 1)

#define int long long

using namespace std;

void read(auto&&... args) {
  (cin >> ... >> args);
}

template <typename T>
void read(vector<T>& vec) {
  for (auto& element : vec) {
    read(element);
  }
}

void readline(auto&&... s) {
  cin >> ws;  // ignore any trailing whitespace
  ((getline(cin, s)), ...);
}

void write(auto&&... args) {
  (cout << ... << args);
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

void pr(auto&&... args) {
  (__print(args), ...);
}

void prn() {
  write('\n');
}

void prn(auto&&... args) {
  pr(args...);

  write('\n');
}

inline auto print(auto&&... args) {
  return prn(args...);
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
  while (t--) {
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

  vector<int> a(n + 5);
  // read(a);

  // prn(a);

  // prn("The final array is:", a);

  // prn(n, n + 1, n + 2);
}
