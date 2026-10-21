#include <iostream>
#include <print>
#include <sstream>
#include <string>
#include <variant>

// 1. A smart wrapper around our dynamic data
struct DynamicBox {
  std::variant<int, double, std::string> data;

  // Implicitly convert to any type T when assigned!
  template <typename T>
  operator T() const {
    // std::get forces the assertion. It extracts T or crashes immediately.
    return std::get<T>(data);
  }
};

// 2. The read function now returns our smart box
DynamicBox read() {
  std::string input;
  std::getline(std::cin, input);

  std::stringstream ss(input);
  int int_val;
  if (ss >> int_val && ss.eof()) return DynamicBox{int_val};
  return DynamicBox{input};
}

int main() {
  std::print("Enter an integer: ");

  // 🔥 SYNTAX COPIED: Looks completely dynamic, but fully asserts at runtime!
  int var = read();

  std::print("Variable locked in as int: {}\n", var);
}
