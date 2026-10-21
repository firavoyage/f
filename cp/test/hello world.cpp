#include <iostream>
#include <string>

int main() {
    // Print a message to the screen
    std::cout << "Enter your name: ";
    
    // Store user input in a string variable
    std::string userName;
    std::getline(std::cin, userName);
    
    // Greet the user
    std::cout << "Hello, " << userName << "! Welcome to C++ programming." << std::endl;
    
    return 0; // Signals that the program ran successfully
}
