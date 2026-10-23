#include <bits/stdc++.h>
using namespace std;

void read(auto&&... args) {
  (std::cin >> ... >> args);
}

void write(auto&&... args) {
  size_t n{0};
  ((std::cout << args << (++n == sizeof...(args) ? "" : " ")), ...);
  std::cout << '\n';
}

void prn(auto&&... args) {
  size_t n{0};
  ((std::cout << args << (++n == sizeof...(args) ? "" : " ")), ...);
  std::cout << '\n';
}

void print = prn;

void solve();

signed main() {
  ios_base::sync_with_stdio(false);
  cin.tie(nullptr);

  int t = 1;
  cin >> t;
  while (t--) {
    solve();
  }
  return 0;
}

// solution

/*



*/

void solve() {
  int t;
  read(t);

  print(t, t);
}
