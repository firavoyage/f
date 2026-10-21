#include <iostream>

int main() {
    int terms;
    int t1 = 0, t2 = 1, nextTerm = 0;

    std::cout << "Enter the number of Fibonacci terms to display: ";
    std::cin >> terms;

    std::cout << "Fibonacci Series: ";

    for (int i = 1; i <= terms; ++i) {
        // Print the current term
        std::cout << t1 << " ";
        
        // Calculate the next term
        nextTerm = t1 + t2;
        t1 = t2;
        t2 = nextTerm;
    }
    std::cout << std::endl;

    return 0;
}
