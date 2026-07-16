export async function send(message) {
  return `
\`\`\`yaml
- tool: write
  name: "shapes.cpp"
  content: |
    #include <iostream>
    #include <vector>
    #include <cmath>
    
    struct Point {
        float x, y, z;
    };

    class Shape {
    public:
        virtual void draw() = 0;
    };

    class Circle : public Shape {
    private:
        float radius;
        Point center;

    public:
        Circle(float r, Point c) : radius(r), center(c) {}

        void draw() override {
            std::cout << "Drawing a 2D Circle at (" 
                      << center.x << ", " 
                      << center.y << ") with radius " 
                      << radius << "\\n";
        }
    };

    class Sphere : public Shape {
    private:
        float radius;
        Point center;

    public:
        Sphere(float r, Point c) : radius(r), center(c) {}

        void draw() override {
            std::cout << "Drawing a 3D Sphere at (" 
                      << center.x << ", " 
                      << center.y << ", " 
                      << center.z << ") with radius " 
                      << radius << "\\n";
        }
    };

    void run_tests() {
        std::cout << "Running tests...\\n";
        
        Point circle_center = {0.0f, 0.0f, 0.0f};
        Circle c(5.0f, circle_center);
        c.draw();

        Point sphere_center = {1.0f, 2.0f, 3.0f};
        Sphere s(10.0f, sphere_center);
        s.draw();
    }

    int main() {
        run_tests();
        return 0;
    }
- tool: shell
  command: "g++ shapes.cpp -o shapes && ./shapes"
- tool: write
  name: "progress.md"
  content: |
    # Progress Log

    **Iteration 1:**
    - Created a basic implementation of 2D Circle and 3D Sphere classes.
    - Implemented draw methods to print their attributes to the console.
    - Ran initial tests, confirmed that Circle and Sphere are drawing correctly.
- tool: stop
\`\`\`
  `;
}