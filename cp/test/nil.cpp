#include <bits/stdc++.h>

auto nil = std::nullopt;

// A function that might return a string, or might return "None"
std::optional<std::string> get_user_nickname(int user_id) {
  if (user_id == 42) {
    return "The Answer";  // Returns a value
  }
  return nil;  // Returns the equivalent of Python's None
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
