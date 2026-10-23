#include <bits/stdc++.h>

using namespace std;

auto read_ints() {
  std::string line;
  std::getline(std::cin >> std::ws, line);

  std::vector<int> res;
  res.reserve(line.size() / 2);  // Avoid reallocation

  std::string_view sv(line);
  while (!sv.empty()) {
    // Skip leading spaces
    size_t first_non_space = sv.find_first_not_of(' ');
    if (first_non_space == std::string_view::npos) break;
    sv.remove_prefix(first_non_space);

    int value;
    // Low-level hardware conversion
    auto [ptr, ec] = std::from_chars(sv.data(), sv.data() + sv.size(), value);

    if (ec == std::errc{}) {
      res.push_back(value);
      // Move string view forward past parsed segment
      sv.remove_prefix(ptr - sv.data());
    } else {
      break;
    }
  }
  return res;
}

void solve() {
  // Your CP logic goes here
}

int main() {
  // Fast I/O
  ios_base::sync_with_stdio(false);
  cin.tie(nullptr);

  int t = 1;
  cin >> t;
  while (t--) {
    solve();
  }
  return 0;
}
