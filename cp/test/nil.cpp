#include <bits/stdc++.h>

auto nil = std::nullopt;

// A function that might return a string, or might return "None"
std::optional<std::string> get_user_nickname(int user_id) {
  if (user_id == 42) {
    return "The Answer";  // Returns a value
  }
  return nil;  // Returns the equivalent of Python's None
}

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

int main() {
  auto result = get_user_nickname(4);

  if (result == nil) {
    std::cout << "User has no nickname (Python: None)" << std::endl;
  } else {
    std::cout << "Nickname: " << result.value() << std::endl;
  }

  // Fallback default value (similar to Python's: result or "Guest")
  std::string name = result.value_or("Guest");
  return 0;
}
