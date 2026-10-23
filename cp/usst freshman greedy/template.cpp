#include <bits/stdc++.h>
using namespace std;

void read(auto&&... args) {
  (std::cin >> ... >> args);
}

void write(auto&&... args) {
  (std::cout << ... << args);
}

// void pr(auto&&... args) {
//   ((std::cout << args << ' '), ...);
// }
void pr(auto&&... args) {
  size_t n{0};
  ((std::cout << args << (++n == sizeof...(args) ? "" : " ")), ...);
}

// void prn(auto&&... args) {
//   ((std::cout << args << ' '), ...);
//   std::cout << '\n';
// }
void prn(auto&&... args) {
  size_t n{0};
  ((std::cout << args << (++n == sizeof...(args) ? "" : " ")), ...);
  std::cout << '\n';
}

inline auto print(auto&&... args) {
  return prn(args...);
}

// constexpr auto print = [](auto&&... args) noexcept(
//                            noexcept(prn(std::forward<decltype(args)>(args)...))) ->
//                            decltype(auto) {
//   return prn(std::forward<decltype(args)>(args)...);
// };

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
  int t;
  read(t);

  write(t, t + 1, t + 2);
}
