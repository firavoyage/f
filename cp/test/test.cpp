#include <iostream>

// Your original macro
#define repeat_i(n) for (int __i = 0; __i < (n); __i += 1)

// The single underscore macro
#define repeat_under(n) for (int _ = 0; _ < (n); _ += 1)

int main() {
    std::cout << "--- Testing original macro (repeat_i) ---" << std::endl;
    int count_i = 0;
    
    repeat_i(3) {
        repeat_i(2) {
            count_i++;
        }
    }
    // Expected output: 6 (3 * 2)
    std::cout << "Total iterations with __i: " << count_i << "\n\n";


    std::cout << "--- Testing single underscore macro (repeat_under) ---" << std::endl;
    int count_under = 0;
    
    repeat_under(3) {
        repeat_under(2) {
            count_under++;
        }
    }
    // Expected output: 6 (3 * 2)
    std::cout << "Total iterations with _: " << count_under << "\n\n";

    
    std::cout << "--- Why they fail WITHOUT braces ---" << std::endl;
    std::cout << "Uncomment the code in main() to see the compiler error!" << std::endl;
    
    // /* 
    // This will fail to compile because the second declaration of '__i' 
    // happens in the same scope block as the first one.
    
    repeat_i(3)
        repeat_i(2)
            std::cout << "This won't compile\n"; 
    // */

    return 0;
}
