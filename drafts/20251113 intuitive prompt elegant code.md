<!-- pursuit of elegance in programming. -->

<!-- design patterns look weird. without classes i could have better code. feeling good in fp. i mean factory functions. -->

<!-- fp: predictable -->

# a

describe how to write elegant code to an llm. answer in brief.

---

To write elegant code with an LLM, provide clear, specific prompts that focus on:

1.  **Clarity & Readability:** Request self-documenting code, meaningful names, and simple logic over cleverness.
2.  **Conciseness:** Ask for "concise" or "minimal" solutions that avoid redundancy.
3.  **Structure:** Specify adherence to principles like **SOLID**, **DRY (Don't Repeat Yourself)**, and design patterns if appropriate.
4.  **Constraints:** Define performance, memory, or stylistic requirements upfront.

**Example Prompt:**
"Write a Python function to validate an email address. Prioritize readability and conciseness. Use a clear, descriptive function name and avoid overly complex regular expressions."

Essentially, you describe the _qualities_ of elegance you want, and the LLM will generate code to match that intent.

# b

describe how to write clever code to an llm. answer in brief.

---

To write "clever" code that an LLM understands and appreciates, focus on:

1.  **Clarity over Obscurity:** Use descriptive names and clear logic. The LLM recognizes elegant algorithms, not cryptic hacks.
2.  **Conciseness with Built-ins:** Leverage language features (e.g., list comprehensions, `map`, `filter`) for compact, idiomatic code.
3.  **Efficiency:** Choose optimal algorithms and data structures (e.g., using a set for O(1) lookups). The LLM understands time/space complexity.
4.  **Readability:** Clever code should be immediately understandable to a skilled programmer, not require extensive deciphering.

**In short:** Write efficient, idiomatic, and elegant code that solves the problem in a non-obvious but clearly superior way. Avoid "clever" code that is just unnecessarily complex or obscure.

# c

describe elegant code. answer in brief.

---

Elegant code is code that is:

- **Readable and clear:** It is easy for humans to understand, almost like well-written prose.
- **Concise but not cryptic:** It solves the problem with a minimal amount of code, without being clever for cleverness sake.
- **Efficient:** It uses the right algorithms and data structures for the task.
- **Simple and obvious:** The solution feels inevitable, making it easy to maintain and modify.

In short, it is code that is both **pleasing to read** and **effective**, achieving maximum clarity with minimum complexity.

# d

describe clever code. answer in brief.

---

Clever code is code that solves a problem in a highly efficient, elegant, or unexpected way. It's characterized by:

- **Simplicity & Conciseness:** Achieving a lot with very little code.
- **Algorithmic Ingenuity:** Using a smart algorithm or a novel application of logic.
- **Leveraging Language Features:** Expertly using a language's built-in functions or paradigms.

**The Catch:** Clever code can often be _too_ clever, becoming cryptic and unreadable for others (or your future self). The best clever code is also **clear** code.

# e

explain design patterns

---

Of course! Let's break down design patterns in a clear, structured way.

### The Big Idea: What is a Design Pattern?

Imagine you're an architect designing a house. You don't invent the concept of a "door" or a "window" from scratch every time. You use well-understood, reusable solutions for common problems: doors for entry, windows for light. These are _architectural patterns_.

In software engineering, **a design pattern is a general, reusable solution to a commonly occurring problem within a given context in software design.** It is not a finished piece of code that you can directly copy and paste. Instead, it's a **template or a blueprint** for how to solve a problem in a way that is proven to be effective.

---

### The Core Purpose: Why Should We Use Them?

Design patterns exist to:

1.  **Solve Common Problems:** They provide a shared vocabulary for solutions that have been refined by experienced developers over time.
2.  **Promote Reusability:** They help you write code that is more modular and easier to reuse in different parts of an application or in different projects.
3.  **Improve Communication:** When a developer says, "Let's use a Singleton here," everyone on the team immediately understands the intended structure and constraints, without needing a long explanation.
4.  **Increase Maintainability:** Code built with well-known patterns is typically easier to understand, modify, and debug because it follows a recognizable structure.
5.  **Speed Up Development:** You don't have to reinvent the wheel. You can apply a proven solution and focus on the unique aspects of your problem.

---

### The Historical Origin: The "Gang of Four" (GoF)

The concept was popularized and formalized in the 1994 book, **"Design Patterns: Elements of Reusable Object-Oriented Software"** by Erich Gamma, Richard Helm, Ralph Johnson, and John Vlissides. This group is affectionately known as the **"Gang of Four" (GoF)**. They cataloged 23 foundational design patterns, which are the basis for most patterns used today.

---

### The Three Main Categories of GoF Patterns

The GoF patterns are divided into three categories based on their purpose:

#### 1. Creational Patterns

These patterns deal with **object creation mechanisms**, trying to create objects in a manner suitable to the situation. They aim to provide flexibility and reuse in how objects are instantiated.

- **Singleton:** Ensures a class has only one instance and provides a global point of access to it.
  - _Analogy:_ The President of a country. There's only one at a time.
- **Factory Method:** Defines an interface for creating an object, but lets subclasses alter the type of objects that will be created.
  - _Analogy:_ A hiring manager. You (the client) ask for a "interviewer," and the manager decides whether to give you a DevelopmentManager or a MarketingManager.
- **Abstract Factory:** Provides an interface for creating families of related or dependent objects without specifying their concrete classes.
  - _Analogy:_ A furniture store. You choose a "Modern" factory, and you get a modern chair, a modern sofa, and a modern table that all match stylistically.
- **Builder:** Separates the construction of a complex object from its representation, allowing the same construction process to create different representations.
  - _Analogy:_ Building a house. The same general process (foundation, frame, roof) can create a Tudor-style house or a Modern-style house.
- **Prototype:** Creates new objects by copying an existing object (the prototype).

#### 2. Structural Patterns

These patterns concern **how classes and objects are composed** to form larger structures. They ensure that if one part of the system changes, the entire structure doesn't need to change.

- **Adapter:** Allows incompatible interfaces to work together. It acts as a bridge between two interfaces.
  - _Analogy:_ A power plug adapter. It allows a US plug (client) to work with a European socket (service).
- **Decorator:** Attaches additional responsibilities to an object dynamically. Provides a flexible alternative to subclassing for extending functionality.
  - _Analogy:_ Adding toppings to a pizza. You start with a plain pizza and can dynamically add cheese, pepperoni, or mushrooms without creating subclasses like `CheesePizza`, `PepperoniPizza`, etc.
- **Facade:** Provides a simplified, higher-level interface to a complex subsystem.
  - _Analogy:_ The front desk of a hotel. It provides a simple interface (check-in, check-out) for you, hiding the complexities of the hotel's internal systems (housekeeping, billing, reservations).
- **Proxy:** Provides a placeholder for another object to control access to it.
  - _Analogy:_ A bank check. It is a proxy for cash, controlling access to the money in your account.

#### 3. Behavioral Patterns

These patterns are about **communication between objects**, how they interact, and how responsibilities are assigned.

- **Observer:** Defines a one-to-many dependency between objects so that when one object changes state, all its dependents are notified and updated automatically.
  - _Analogy:_ Subscribing to a newspaper. You (the observer) get notified whenever a new edition is published (the subject changes state).
- **Strategy:** Defines a family of algorithms, encapsulates each one, and makes them interchangeable. It lets the algorithm vary independently from the clients that use it.
  - _Analogy:_ Choosing a route on a map app. You can choose different strategies (fastest route, most scenic route, avoid highways) for the same journey.
- **Command:** Encapsulates a request as an object, thereby allowing for parameterization of clients with queues, requests, and operations.
  - _Analogy:_ A restaurant order. The waiter (invoker) takes the order (command object) and gives it to the chef (receiver), decoupling the customer from the chef.
- **Iterator:** Provides a way to access the elements of an aggregate object sequentially without exposing its underlying representation.
  - _Analogy:_ A TV remote. You can cycle through channels (the elements) without knowing how they are stored internally in the TV.

---

### A Simple Code Example: The Singleton Pattern

Here's a classic example in Python:

```python
class Singleton:
    _instance = None

    def __new__(cls):
        if cls._instance is None:
            cls._instance = super(Singleton, cls).__new__(cls)
        return cls._instance

# Usage
obj1 = Singleton()
obj2 = Singleton()

print(obj1 is obj2)  # Output: True
# Both variables point to the *exact same* instance.
```

---

### Important Caveats and Modern Context

- **Not a Silver Bullet:** Don't force a pattern where it doesn't fit. "When you have a hammer, everything looks like a nail." Overusing patterns can lead to unnecessarily complex code.
- **They Evolve:** The original 23 GoF patterns are foundational, but new patterns have emerged for specific domains like web development (e.g., MVC, MVVM), concurrency, and data access.
- **Language Relevance:** Some patterns are more or less relevant depending on your programming language. For example, the Singleton pattern is often considered an anti-pattern in languages that favor functional programming or dependency injection.

### Conclusion

Design patterns are an essential part of a software engineer's toolkit. They provide a **shared vocabulary** and a set of **proven blueprints** for solving common design problems, leading to more robust, maintainable, and communicative code. Start by learning the most common ones (Singleton, Factory, Observer, Adapter, etc.) and you'll quickly see opportunities to apply them in your own projects.

# e 2

deep dive

---

Absolutely! Let's do a deep dive into design patterns. We'll explore their anatomy, delve into the nuances of key patterns, discuss advanced concepts, and examine their evolution in modern software development.

## The Anatomy of a Design Pattern

A well-defined pattern typically includes:

1. **Pattern Name** - A handle we can use to discuss the pattern
2. **Intent** - What problem does it solve?
3. **Motivation** - Scenario illustrating the problem
4. **Applicability** - When to use the pattern
5. **Structure** - UML diagrams and relationships
6. **Participants** - Classes/objects and their responsibilities
7. **Collaborations** - How participants work together
8. **Consequences** - Trade-offs and results of using the pattern
9. **Implementation** - Techniques, pitfalls, hints
10. **Sample Code** - Concrete examples
11. **Known Uses** - Real-world examples
12. **Related Patterns** - Similar patterns and differences

---

## Deep Dive into Key Patterns

### 1. **Singleton Pattern - Beyond the Basics**

**The Double-Checked Locking Problem:**

```java
public class ThreadSafeSingleton {
    private static volatile ThreadSafeSingleton instance;

    private ThreadSafeSingleton() {}

    public static ThreadSafeSingleton getInstance() {
        if (instance == null) { // First check (no locking)
            synchronized (ThreadSafeSingleton.class) {
                if (instance == null) { // Second check (with locking)
                    instance = new ThreadSafeSingleton();
                }
            }
        }
        return instance;
    }
}
```

**The Modern Approach - Enum Singleton:**

```java
public enum EnumSingleton {
    INSTANCE;

    public void doSomething() {
        // implementation
    }
}
// Usage: EnumSingleton.INSTANCE.doSomething();
```

**Dependency Injection vs Singleton:**

```java
// Traditional Singleton
public class Database {
    private static Database instance;
    private Database() {}

    public static Database getInstance() {
        if (instance == null) {
            instance = new Database();
        }
        return instance;
    }
}

// Dependency Injection Approach
public class Database {
    // No static instance, constructor can be package-private or public
    Database() {}
}

// In your dependency configuration
@Bean
@Scope("singleton") // Framework manages the singleton
public Database database() {
    return new Database();
}
```

### 2. **Factory Method vs Abstract Factory**

**Factory Method:**

```python
from abc import ABC, abstractmethod

class Document(ABC):
    @abstractmethod
    def open(self): pass

class PDFDocument(Document):
    def open(self):
        return "Opening PDF document"

class WordDocument(Document):
    def open(self):
        return "Opening Word document"

class Application(ABC):
    def new_document(self) -> Document:
        doc = self.create_document()
        # Additional common operations
        return doc

    @abstractmethod
    def create_document(self) -> Document: pass

class PDFApplication(Application):
    def create_document(self) -> Document:
        return PDFDocument()

class WordApplication(Application):
    def create_document(self) -> Document:
        return WordDocument()
```

**Abstract Factory:**

```python
class Button(ABC):
    @abstractmethod
    def render(self): pass

class Checkbox(ABC):
    @abstractmethod
    def render(self): pass

# Concrete products
class WindowsButton(Button):
    def render(self): return "Windows button"

class MacButton(Button):
    def render(self): return "Mac button"

class WindowsCheckbox(Checkbox):
    def render(self): return "Windows checkbox"

class MacCheckbox(Checkbox):
    def render(self): return "Mac checkbox"

# Abstract Factory
class GUIFactory(ABC):
    @abstractmethod
    def create_button(self) -> Button: pass

    @abstractmethod
    def create_checkbox(self) -> Checkbox: pass

# Concrete factories
class WindowsFactory(GUIFactory):
    def create_button(self) -> Button: return WindowsButton()
    def create_checkbox(self) -> Checkbox: return WindowsCheckbox()

class MacFactory(GUIFactory):
    def create_button(self) -> Button: return MacButton()
    def create_checkbox(self) -> Checkbox: return MacCheckbox()

# Client code
def create_ui(factory: GUIFactory):
    button = factory.create_button()
    checkbox = factory.create_checkbox()
    return f"{button.render()} and {checkbox.render()}"
```

### 3. **Observer Pattern - Advanced Implementation**

**Generic Type-Safe Observer:**

```java
import java.util.*;
import java.util.concurrent.CopyOnWriteArrayList;

// Generic observable class
public class Observable<T> {
    private final List<Observer<T>> observers = new CopyOnWriteArrayList<>();
    private T value;

    public void addObserver(Observer<T> observer) {
        observers.add(observer);
        observer.update(value); // Notify with current value
    }

    public void removeObserver(Observer<T> observer) {
        observers.remove(observer);
    }

    public void setValue(T newValue) {
        this.value = newValue;
        notifyObservers();
    }

    private void notifyObservers() {
        for (Observer<T> observer : observers) {
            observer.update(value);
        }
    }
}

// Functional interface for observers
@FunctionalInterface
public interface Observer<T> {
    void update(T value);
}

// Usage
public class StockMarket {
    public static void main(String[] args) {
        Observable<Double> stockPrice = new Observable<>();

        // Add observers using lambda expressions
        stockPrice.addObserver(price ->
            System.out.println("Trader 1: Price changed to " + price));

        stockPrice.addObserver(price -> {
            if (price > 100.0) {
                System.out.println("Trader 2: Selling at " + price);
            }
        });

        stockPrice.setValue(95.0);
        stockPrice.setValue(105.0);
    }
}
```

### 4. **Strategy Pattern with Functional Programming**

**Traditional OOP Approach:**

```java
interface CompressionStrategy {
    byte[] compress(byte[] data);
}

class ZipCompression implements CompressionStrategy {
    public byte[] compress(byte[] data) {
        // ZIP compression logic
        return data;
    }
}

class RarCompression implements CompressionStrategy {
    public byte[] compress(byte[] data) {
        // RAR compression logic
        return data;
    }
}

class Compressor {
    private CompressionStrategy strategy;

    public void setStrategy(CompressionStrategy strategy) {
        this.strategy = strategy;
    }

    public byte[] compress(byte[] data) {
        return strategy.compress(data);
    }
}
```

**Functional Approach (Java):**

```java
import java.util.function.Function;

public class Compressor {
    private Function<byte[], byte[]> compressionStrategy;

    public Compressor(Function<byte[], byte[]> strategy) {
        this.compressionStrategy = strategy;
    }

    public byte[] compress(byte[] data) {
        return compressionStrategy.apply(data);
    }
}

// Usage with lambdas
Compressor zipCompressor = new Compressor(data -> {
    // ZIP compression logic
    return data;
});

Compressor rarCompressor = new Compressor(data -> {
    // RAR compression logic
    return data;
});
```

---

## Advanced Pattern Concepts

### 1. **Patterns of Patterns (Meta-Patterns)**

**Composite + Visitor:**

```python
from abc import ABC, abstractmethod
from typing import List

# Component
class FileSystemComponent(ABC):
    @abstractmethod
    def accept(self, visitor): pass

# Leaf
class File(FileSystemComponent):
    def __init__(self, name, size):
        self.name = name
        self.size = size

    def accept(self, visitor):
        return visitor.visit_file(self)

# Composite
class Directory(FileSystemComponent):
    def __init__(self, name):
        self.name = name
        self.children: List[FileSystemComponent] = []

    def add(self, component: FileSystemComponent):
        self.children.append(component)

    def accept(self, visitor):
        return visitor.visit_directory(self)

# Visitor
class FileSystemVisitor(ABC):
    @abstractmethod
    def visit_file(self, file: File): pass

    @abstractmethod
    def visit_directory(self, directory: Directory): pass

# Concrete Visitor
class SizeCalculatorVisitor(FileSystemVisitor):
    def visit_file(self, file: File):
        return file.size

    def visit_directory(self, directory: Directory):
        total_size = 0
        for child in directory.children:
            total_size += child.accept(self)
        return total_size
```

### 2. **Null Object Pattern**

```java
public interface Logger {
    void log(String message);
}

// Real implementation
class ConsoleLogger implements Logger {
    public void log(String message) {
        System.out.println("LOG: " + message);
    }
}

// Null object implementation
class NullLogger implements Logger {
    public void log(String message) {
        // Do nothing - null behavior
    }
}

// Usage - no null checks needed
public class Service {
    private Logger logger;

    public Service(Logger logger) {
        this.logger = logger; // Could be NullLogger or ConsoleLogger
    }

    public void doWork() {
        logger.log("Work started"); // Safe to call, no NPE
        // ... do work
    }
}
```

### 3. **Specification Pattern**

```java
public interface Specification<T> {
    boolean isSatisfiedBy(T candidate);

    default Specification<T> and(Specification<T> other) {
        return candidate -> this.isSatisfiedBy(candidate) &&
                           other.isSatisfiedBy(candidate);
    }

    default Specification<T> or(Specification<T> other) {
        return candidate -> this.isSatisfiedBy(candidate) ||
                           other.isSatisfiedBy(candidate);
    }

    default Specification<T> not() {
        return candidate -> !this.isSatisfiedBy(candidate);
    }
}

// Concrete specifications
class PriceSpecification implements Specification<Product> {
    private final double minPrice;
    private final double maxPrice;

    public PriceSpecification(double min, double max) {
        this.minPrice = min;
        this.maxPrice = max;
    }

    public boolean isSatisfiedBy(Product product) {
        return product.getPrice() >= minPrice &&
               product.getPrice() <= maxPrice;
    }
}

class CategorySpecification implements Specification<Product> {
    private final String category;

    public CategorySpecification(String category) {
        this.category = category;
    }

    public boolean isSatisfiedBy(Product product) {
        return category.equals(product.getCategory());
    }
}

// Usage
Specification<Product> spec = new PriceSpecification(100, 500)
    .and(new CategorySpecification("Electronics"))
    .and(new NameSpecification("Phone").not());

List<Product> filtered = products.stream()
    .filter(spec::isSatisfiedBy)
    .collect(Collectors.toList());
```

---

## Modern Pattern Evolution

### 1. **Microservices Patterns**

**Circuit Breaker Pattern:**

```java
public class CircuitBreaker {
    private enum State { CLOSED, OPEN, HALF_OPEN }

    private State state = State.CLOSED;
    private int failureCount = 0;
    private final int failureThreshold;
    private final long timeout;
    private long lastFailureTime;

    public CircuitBreaker(int failureThreshold, long timeout) {
        this.failureThreshold = failureThreshold;
        this.timeout = timeout;
    }

    public <T> T execute(Supplier<T> supplier) {
        if (state == State.OPEN) {
            if (System.currentTimeMillis() - lastFailureTime > timeout) {
                state = State.HALF_OPEN;
            } else {
                throw new CircuitBreakerOpenException();
            }
        }

        try {
            T result = supplier.get();
            if (state == State.HALF_OPEN) {
                state = State.CLOSED;
                failureCount = 0;
            }
            return result;
        } catch (Exception e) {
            handleFailure();
            throw e;
        }
    }

    private void handleFailure() {
        failureCount++;
        lastFailureTime = System.currentTimeMillis();
        if (failureCount >= failureThreshold) {
            state = State.OPEN;
        }
    }
}
```

### 2. **Reactive Patterns**

**Observer Pattern Evolved:**

```java
// Reactive Streams (Project Reactor)
public class ReactiveStockMonitor {
    public static void main(String[] args) {
        Flux<StockPrice> stockStream = Flux.interval(Duration.ofSeconds(1))
            .map(tick -> getCurrentStockPrice())
            .distinctUntilChanged()
            .filter(price -> price.changePercent() > 5.0);

        stockStream
            .subscribe(price ->
                System.out.println("Significant change: " + price));

        stockStream
            .buffer(Duration.ofMinutes(1))
            .subscribe(prices ->
                System.out.println("Minute summary: " + prices.size() + " changes"));
    }
}
```

### 3. **Cloud-Native Patterns**

**Sidecar Pattern:**

```yaml
# Kubernetes deployment with sidecar
apiVersion: apps/v1
kind: Deployment
metadata:
  name: main-application
spec:
  template:
    spec:
      containers:
        - name: main-app
          image: my-application:latest
          ports:
            - containerPort: 8080
        - name: sidecar-logger # Sidecar container
          image: logger-sidecar:latest
          volumeMounts:
            - name: shared-logs
              mountPath: /var/log
      volumes:
        - name: shared-logs
          emptyDir: {}
```

---

## Anti-Patterns and Pattern Misuse

### Common Anti-Patterns:

1. **Singleton Abuse** - Using singleton for everything, creating hidden dependencies
2. **Pattern Over-Engineering** - Applying patterns where simple code would suffice
3. **Golden Hammer** - Using the same pattern for every problem
4. **Abstractio** - Creating unnecessary abstraction layers

### When NOT to Use Patterns:

- **Simple problems** that don't need complex solutions
- **Performance-critical code** where pattern overhead matters
- **Temporary code** or prototypes
- **When the pattern doesn't fit** the problem domain

---

## Testing Patterns

**Testing Strategy Pattern:**

```java
public class CompressionTest {
    @Test
    public void testZipCompression() {
        Compressor compressor = new Compressor(new ZipCompression());
        byte[] testData = "Hello World".getBytes();

        byte[] compressed = compressor.compress(testData);

        assertNotNull(compressed);
        // Additional assertions
    }

    @Test
    public void testStrategySwitching() {
        Compressor compressor = new Compressor(new ZipCompression());
        // Test with ZIP
        compressor.setStrategy(new RarCompression());
        // Test with RAR - same interface, different behavior
    }
}
```

This deep dive shows that design patterns are not just cookie-cutter solutions but represent fundamental principles of good software design. The most effective use of patterns comes from understanding the underlying problems they solve and adapting them to your specific context, rather than applying them dogmatically.

# e 3

write in js

---

## Deep Dive into Design Patterns in JavaScript

Let's explore design patterns with comprehensive JavaScript examples, including modern ES6+ features, functional programming approaches, and real-world scenarios.

### Table of Contents

1. [Creational Patterns](#creational-patterns)
2. [Structural Patterns](#structural-patterns)
3. [Behavioral Patterns](#behavioral-patterns)
4. [Modern JavaScript Patterns](#modern-javascript-patterns)
5. [Anti-Patterns and Best Practices](#anti-patterns-and-best-practices)

---

### Creational Patterns

#### 1. **Singleton Pattern**

**Basic Singleton:**

```javascript
class DatabaseConnection {
  constructor() {
    if (DatabaseConnection.instance) {
      return DatabaseConnection.instance;
    }

    this.connection = this.createConnection();
    DatabaseConnection.instance = this;

    // Freeze the instance to prevent modification
    Object.freeze(this);
  }

  createConnection() {
    // Simulate connection creation
    return { connected: true, id: Math.random() };
  }

  query(sql) {
    console.log(`Executing: ${sql}`);
    return { results: [] };
  }
}

// Usage
const db1 = new DatabaseConnection();
const db2 = new DatabaseConnection();

console.log(db1 === db2); // true
```

**Module Pattern Singleton (Common in JS):**

```javascript
const Logger = (() => {
  let instance;
  const logs = [];

  const createInstance = () => ({
    log: (message) => {
      const entry = { timestamp: new Date(), message };
      logs.push(entry);
      console.log(`[LOG] ${entry.timestamp.toISOString()}: ${message}`);
    },
    getLogs: () => [...logs], // Return copy to prevent mutation
    clearLogs: () => (logs.length = 0),
  });

  return {
    getInstance: () => {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
  };
})();

// Usage
const logger1 = Logger.getInstance();
const logger2 = Logger.getInstance();

logger1.log("Application started");
logger2.log("User logged in");
console.log(logger1 === logger2); // true
```

#### 2. **Factory Pattern**

**Simple Factory:**

```javascript
class User {
  constructor(name, role, permissions = []) {
    this.name = name;
    this.role = role;
    this.permissions = permissions;
  }

  hasPermission(permission) {
    return this.permissions.includes(permission);
  }
}

class UserFactory {
  static createUser(type, name) {
    switch (type) {
      case "admin":
        return new User(name, "admin", [
          "read",
          "write",
          "delete",
          "manage_users",
        ]);
      case "editor":
        return new User(name, "editor", ["read", "write"]);
      case "viewer":
        return new User(name, "viewer", ["read"]);
      default:
        throw new Error("Invalid user type");
    }
  }
}

// Usage
const admin = UserFactory.createUser("admin", "Alice");
const editor = UserFactory.createUser("editor", "Bob");

console.log(admin.hasPermission("delete")); // true
console.log(editor.hasPermission("delete")); // false
```

**Factory with Composition:**

```javascript
// Functional factory approach
const createPermission = (actions) => ({
  can: (action) => actions.includes(action),
});

const createRole = (name, permissions) => ({
  name,
  permissions: createPermission(permissions),
  hasAccess: function (action) {
    return this.permissions.can(action);
  },
});

const RoleFactory = {
  admin: () => createRole("admin", ["read", "write", "delete", "manage"]),
  editor: () => createRole("editor", ["read", "write"]),
  viewer: () => createRole("viewer", ["read"]),
};

// Usage
const adminRole = RoleFactory.admin();
console.log(adminRole.hasAccess("delete")); // true
```

#### 3. **Builder Pattern**

**Fluent Builder:**

```javascript
class QueryBuilder {
  constructor() {
    this.reset();
  }

  reset() {
    this.query = {
      select: [],
      where: [],
      orderBy: [],
      limit: null,
      offset: null,
    };
  }

  select(...fields) {
    this.query.select.push(...fields);
    return this;
  }

  where(field, operator, value) {
    this.query.where.push({ field, operator, value });
    return this;
  }

  orderBy(field, direction = "ASC") {
    this.query.orderBy.push({ field, direction });
    return this;
  }

  limit(count) {
    this.query.limit = count;
    return this;
  }

  offset(count) {
    this.query.offset = count;
    return this;
  }

  build() {
    const builtQuery = { ...this.query };
    this.reset(); // Reset for next build
    return builtQuery;
  }
}

// Usage
const query = new QueryBuilder()
  .select("id", "name", "email")
  .where("age", ">", 18)
  .where("status", "=", "active")
  .orderBy("name", "ASC")
  .limit(10)
  .offset(0)
  .build();

console.log(query);
```

#### 4. **Prototype Pattern**

**Using JavaScript's Built-in Prototype:**

```javascript
class Shape {
  constructor(x, y, color) {
    this.x = x;
    this.y = y;
    this.color = color;
  }

  clone() {
    // Create a new instance with the same prototype
    const cloned = Object.create(Object.getPrototypeOf(this));
    // Copy all properties
    Object.assign(cloned, this);
    return cloned;
  }

  // Alternative using constructor
  cloneWithConstructor() {
    const constructor = this.constructor;
    return new constructor(this.x, this.y, this.color);
  }
}

class Circle extends Shape {
  constructor(x, y, color, radius) {
    super(x, y, color);
    this.radius = radius;
  }

  draw() {
    console.log(
      `Drawing circle at (${this.x}, ${this.y}) with radius ${this.radius}`
    );
  }

  // Override clone for proper inheritance
  clone() {
    const cloned = super.clone();
    cloned.radius = this.radius;
    return cloned;
  }
}

// Usage
const originalCircle = new Circle(10, 20, "red", 5);
const clonedCircle = originalCircle.clone();

originalCircle.draw(); // Drawing circle at (10, 20) with radius 5
clonedCircle.x = 30; // Modify clone
clonedCircle.draw(); // Drawing circle at (30, 20) with radius 5

console.log(originalCircle === clonedCircle); // false
```

---

### Structural Patterns

#### 1. **Adapter Pattern**

**Class Adapter:**

```javascript
// Old interface
class LegacyPaymentSystem {
  makePayment(amount, cardNumber, expiry) {
    console.log(`Processing payment of $${amount} with card ${cardNumber}`);
    return { success: true, transactionId: Math.random().toString(36) };
  }
}

// New interface
class ModernPaymentGateway {
  processPayment(paymentDetails) {
    const { amount, paymentMethod } = paymentDetails;
    console.log(`Processing $${amount} via ${paymentMethod.type}`);
    return {
      success: true,
      transactionId: Math.random().toString(36),
      amount,
      method: paymentMethod.type,
    };
  }
}

// Adapter
class PaymentAdapter {
  constructor(legacySystem) {
    this.legacySystem = legacySystem;
  }

  processPayment(paymentDetails) {
    // Convert modern payment details to legacy format
    const { amount, paymentMethod } = paymentDetails;

    if (paymentMethod.type === "credit_card") {
      const legacyResult = this.legacySystem.makePayment(
        amount,
        paymentMethod.cardNumber,
        paymentMethod.expiry
      );

      // Convert legacy result to modern format
      return {
        success: legacyResult.success,
        transactionId: legacyResult.transactionId,
        amount,
        method: paymentMethod.type,
      };
    }

    throw new Error("Unsupported payment method");
  }
}

// Usage
const legacySystem = new LegacyPaymentSystem();
const adapter = new PaymentAdapter(legacySystem);

const paymentDetails = {
  amount: 100,
  paymentMethod: {
    type: "credit_card",
    cardNumber: "1234-5678-9012-3456",
    expiry: "12/25",
  },
};

const result = adapter.processPayment(paymentDetails);
console.log(result);
```

#### 2. **Decorator Pattern**

**Class-based Decorators:**

```javascript
// Base component
class Coffee {
  cost() {
    return 5;
  }

  description() {
    return "Simple coffee";
  }
}

// Base decorator
class CoffeeDecorator {
  constructor(coffee) {
    this.coffee = coffee;
  }

  cost() {
    return this.coffee.cost();
  }

  description() {
    return this.coffee.description();
  }
}

// Concrete decorators
class MilkDecorator extends CoffeeDecorator {
  cost() {
    return this.coffee.cost() + 2;
  }

  description() {
    return this.coffee.description() + ", with milk";
  }
}

class SugarDecorator extends CoffeeDecorator {
  cost() {
    return this.coffee.cost() + 1;
  }

  description() {
    return this.coffee.description() + ", with sugar";
  }
}

class WhippedCreamDecorator extends CoffeeDecorator {
  cost() {
    return this.coffee.cost() + 3;
  }

  description() {
    return this.coffee.description() + ", with whipped cream";
  }
}

// Usage
let myCoffee = new Coffee();
console.log(`${myCoffee.description()} costs $${myCoffee.cost()}`);

myCoffee = new MilkDecorator(myCoffee);
console.log(`${myCoffee.description()} costs $${myCoffee.cost()}`);

myCoffee = new SugarDecorator(myCoffee);
console.log(`${myCoffee.description()} costs $${myCoffee.cost()}`);

myCoffee = new WhippedCreamDecorator(myCoffee);
console.log(`${myCoffee.description()} costs $${myCoffee.cost()}`);
```

**Functional Decorators:**

```javascript
// Higher-order function decorators
const withLogging = (fn) => {
  return (...args) => {
    console.log(`Calling function with arguments:`, args);
    const result = fn(...args);
    console.log(`Function returned:`, result);
    return result;
  };
};

const withTiming = (fn) => {
  return (...args) => {
    const start = performance.now();
    const result = fn(...args);
    const end = performance.now();
    console.log(`Function took ${(end - start).toFixed(2)}ms`);
    return result;
  };
};

const withRetry = (fn, maxRetries = 3) => {
  return async (...args) => {
    let lastError;

    for (let attempt = 1; attempt <= maxRetries; attempt++) {
      try {
        console.log(`Attempt ${attempt}/${maxRetries}`);
        return await fn(...args);
      } catch (error) {
        lastError = error;
        console.log(`Attempt ${attempt} failed:`, error.message);

        if (attempt < maxRetries) {
          // Wait before retry (exponential backoff)
          await new Promise((resolve) =>
            setTimeout(resolve, Math.pow(2, attempt) * 100)
          );
        }
      }
    }

    throw lastError;
  };
};

// Usage
const fetchData = async (url) => {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  return response.json();
};

// Decorate the function
const robustFetch = withRetry(withLogging(withTiming(fetchData)));

// robustFetch('https://api.example.com/data').then(console.log);
```

#### 3. **Facade Pattern**

```javascript
// Complex subsystems
class CPU {
  start() {
    console.log("CPU: Starting...");
    return "CPU ready";
  }

  execute(instruction) {
    console.log(`CPU: Executing ${instruction}`);
    return `Executed: ${instruction}`;
  }

  shutdown() {
    console.log("CPU: Shutting down");
  }
}

class Memory {
  load(position, data) {
    console.log(`Memory: Loading data at position ${position}`);
    return `Data loaded at ${position}`;
  }

  free(position) {
    console.log(`Memory: Freeing position ${position}`);
  }
}

class HardDrive {
  read(sector, size) {
    console.log(`HardDrive: Reading sector ${sector}`);
    return `Data from sector ${sector}`;
  }

  write(sector, data) {
    console.log(`HardDrive: Writing to sector ${sector}`);
    return `Data written to ${sector}`;
  }
}

// Facade
class ComputerFacade {
  constructor() {
    this.cpu = new CPU();
    this.memory = new Memory();
    this.hardDrive = new HardDrive();
    this.isRunning = false;
  }

  start() {
    if (this.isRunning) {
      console.log("Computer is already running");
      return;
    }

    console.log("=== Starting Computer ===");
    this.cpu.start();
    this.memory.load(0, "bootloader");
    this.hardDrive.read(0, 512);
    this.isRunning = true;
    console.log("=== Computer Ready ===");
  }

  executeProgram(program) {
    if (!this.isRunning) {
      throw new Error("Computer is not running");
    }

    console.log(`=== Executing Program: ${program} ===`);
    this.memory.load(0x1000, program);
    this.cpu.execute(program);
    console.log("=== Program Finished ===");
  }

  shutdown() {
    if (!this.isRunning) {
      console.log("Computer is already off");
      return;
    }

    console.log("=== Shutting Down Computer ===");
    this.memory.free(0x1000);
    this.hardDrive.write(0, "shutdown log");
    this.cpu.shutdown();
    this.isRunning = false;
    console.log("=== Computer Off ===");
  }
}

// Usage
const computer = new ComputerFacade();
computer.start();
computer.executeProgram("Calculator App");
computer.shutdown();
```

#### 4. **Proxy Pattern**

**Virtual Proxy:**

```javascript
// Expensive object
class HighResolutionImage {
  constructor(filename) {
    this.filename = filename;
    this.loadImageFromDisk();
  }

  loadImageFromDisk() {
    console.log(`Loading ${this.filename} from disk... (expensive operation)`);
    // Simulate expensive operation
    this.imageData = `Image data for ${this.filename}`;
  }

  display() {
    console.log(`Displaying: ${this.filename}`);
    return this.imageData;
  }
}

// Virtual Proxy
class ImageProxy {
  constructor(filename) {
    this.filename = filename;
    this.realImage = null;
  }

  display() {
    if (!this.realImage) {
      this.realImage = new HighResolutionImage(this.filename);
    }
    return this.realImage.display();
  }
}

// Usage
const image1 = new ImageProxy("photo1.jpg");
const image2 = new ImageProxy("photo2.jpg");

// Image not loaded yet
console.log("Images created, but not loaded");

// Load on demand
console.log(image1.display()); // Loads and displays
console.log(image1.display()); // Uses cached instance
```

**Protection Proxy:**

```javascript
// Subject interface
class BankAccount {
  constructor(balance = 0) {
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
    return this.balance;
  }

  withdraw(amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
      return amount;
    }
    throw new Error("Insufficient funds");
  }

  getBalance() {
    return this.balance;
  }
}

// Protection Proxy
class BankAccountProxy {
  constructor(realAccount, userRole) {
    this.realAccount = realAccount;
    this.userRole = userRole;
  }

  deposit(amount) {
    return this.realAccount.deposit(amount);
  }

  withdraw(amount) {
    if (this.userRole === "admin") {
      return this.realAccount.withdraw(amount);
    } else if (this.userRole === "user" && amount <= 1000) {
      return this.realAccount.withdraw(amount);
    } else {
      throw new Error("Permission denied: Cannot withdraw more than 1000");
    }
  }

  getBalance() {
    if (this.userRole === "admin") {
      return this.realAccount.getBalance();
    } else {
      throw new Error("Permission denied: Cannot view balance");
    }
  }
}

// Usage
const account = new BankAccount(5000);
const adminProxy = new BankAccountProxy(account, "admin");
const userProxy = new BankAccountProxy(account, "user");

console.log(adminProxy.getBalance()); // 5000
adminProxy.withdraw(2000); // OK
// userProxy.getBalance(); // Error: Permission denied
userProxy.withdraw(500); // OK
// userProxy.withdraw(1500); // Error: Permission denied
```

---

### Behavioral Patterns

#### 1. **Observer Pattern**

**Modern EventEmitter Approach:**

```javascript
class EventEmitter {
  constructor() {
    this.events = new Map();
  }

  on(event, listener) {
    if (!this.events.has(event)) {
      this.events.set(event, new Set());
    }
    this.events.get(event).add(listener);

    // Return unsubscribe function
    return () => this.off(event, listener);
  }

  off(event, listener) {
    if (this.events.has(event)) {
      this.events.get(event).delete(listener);
    }
  }

  emit(event, data) {
    if (this.events.has(event)) {
      this.events.get(event).forEach((listener) => {
        try {
          listener(data);
        } catch (error) {
          console.error(`Error in event listener for ${event}:`, error);
        }
      });
    }
  }

  once(event, listener) {
    const onceWrapper = (data) => {
      this.off(event, onceWrapper);
      listener(data);
    };
    return this.on(event, onceWrapper);
  }
}

// Observable subject
class Stock extends EventEmitter {
  constructor(symbol, price) {
    super();
    this.symbol = symbol;
    this._price = price;
    this.history = [price];
  }

  get price() {
    return this._price;
  }

  set price(newPrice) {
    const oldPrice = this._price;
    this._price = newPrice;
    this.history.push(newPrice);

    // Notify observers
    this.emit("priceChange", {
      symbol: this.symbol,
      oldPrice,
      newPrice,
      change: newPrice - oldPrice,
      changePercent: ((newPrice - oldPrice) / oldPrice) * 100,
    });

    // Specific events for significant changes
    if (Math.abs(newPrice - oldPrice) / oldPrice > 0.05) {
      // 5% change
      this.emit("significantChange", {
        symbol: this.symbol,
        oldPrice,
        newPrice,
      });
    }
  }
}

// Usage
const appleStock = new Stock("AAPL", 150);

// Subscribe to events
const unsubscribe1 = appleStock.on("priceChange", (data) => {
  console.log(
    `Price update: ${data.symbol} $${data.oldPrice} -> $${data.newPrice}`
  );
});

const unsubscribe2 = appleStock.on("significantChange", (data) => {
  console.log(
    `🚨 Significant change: ${data.symbol} $${data.oldPrice} -> $${data.newPrice}`
  );
});

// One-time listener
appleStock.once("priceChange", (data) => {
  console.log("First price change detected!");
});

// Simulate price changes
appleStock.price = 155; // +5
appleStock.price = 162; // +7 (significant)
appleStock.price = 158; // -4

// Unsubscribe
unsubscribe1();
appleStock.price = 160; // No logging from first subscriber
```

#### 2. **Strategy Pattern**

**Functional Strategy Pattern:**

```javascript
// Strategy definitions
const paymentStrategies = {
  creditCard: (amount, details) => {
    const { cardNumber, expiry, cvv } = details;
    console.log(`Processing $${amount} via Credit Card ${cardNumber}`);
    // Process credit card payment
    return { success: true, method: "credit_card", amount };
  },

  paypal: (amount, details) => {
    const { email } = details;
    console.log(`Processing $${amount} via PayPal to ${email}`);
    // Process PayPal payment
    return { success: true, method: "paypal", amount };
  },

  crypto: (amount, details) => {
    const { walletAddress } = details;
    console.log(`Processing $${amount} via Crypto to ${walletAddress}`);
    // Process cryptocurrency payment
    return { success: true, method: "crypto", amount };
  },
};

// Payment processor using strategies
class PaymentProcessor {
  constructor() {
    this.strategy = null;
  }

  setStrategy(strategy) {
    if (paymentStrategies[strategy]) {
      this.strategy = paymentStrategies[strategy];
    } else {
      throw new Error(`Unknown payment strategy: ${strategy}`);
    }
  }

  processPayment(amount, details) {
    if (!this.strategy) {
      throw new Error("Payment strategy not set");
    }

    return this.strategy(amount, details);
  }
}

// Usage
const processor = new PaymentProcessor();

// Use credit card
processor.setStrategy("creditCard");
processor.processPayment(100, {
  cardNumber: "1234-5678-9012-3456",
  expiry: "12/25",
  cvv: "123",
});

// Switch to PayPal
processor.setStrategy("paypal");
processor.processPayment(50, {
  email: "user@example.com",
});

// Strategy with context
const createDiscountStrategy = (discountPercent) => (amount) =>
  amount * (1 - discountPercent / 100);

const pricingStrategies = {
  regular: createDiscountStrategy(0),
  student: createDiscountStrategy(20),
  senior: createDiscountStrategy(15),
  bulk: createDiscountStrategy(10),
};

class ShoppingCart {
  constructor() {
    this.items = [];
    this.discountStrategy = pricingStrategies.regular;
  }

  addItem(price) {
    this.items.push(price);
  }

  setDiscountStrategy(strategy) {
    this.discountStrategy = strategy;
  }

  getTotal() {
    const subtotal = this.items.reduce((sum, price) => sum + price, 0);
    return this.discountStrategy(subtotal);
  }
}

// Usage
const cart = new ShoppingCart();
cart.addItem(100);
cart.addItem(50);

console.log("Regular price:", cart.getTotal()); // 150

cart.setDiscountStrategy(pricingStrategies.student);
console.log("Student price:", cart.getTotal()); // 120
```

#### 3. **Command Pattern**

**Undo/Redo System:**

```javascript
// Command interface
class Command {
  execute() {
    throw new Error("execute method must be implemented");
  }

  undo() {
    throw new Error("undo method must be implemented");
  }
}

// Concrete commands
class AddTextCommand extends Command {
  constructor(document, text, position) {
    super();
    this.document = document;
    this.text = text;
    this.position = position;
    this.previousContent = null;
  }

  execute() {
    this.previousContent = this.document.getContent();
    this.document.addText(this.text, this.position);
    return `Added "${this.text}" at position ${this.position}`;
  }

  undo() {
    this.document.setContent(this.previousContent);
    return `Undo: Added "${this.text}"`;
  }
}

class DeleteTextCommand extends Command {
  constructor(document, position, length) {
    super();
    this.document = document;
    this.position = position;
    this.length = length;
    this.deletedText = null;
  }

  execute() {
    this.deletedText = this.document.deleteText(this.position, this.length);
    return `Deleted "${this.deletedText}" from position ${this.position}`;
  }

  undo() {
    this.document.addText(this.deletedText, this.position);
    return `Undo: Deleted "${this.deletedText}"`;
  }
}

// Receiver
class TextDocument {
  constructor() {
    this.content = "";
  }

  addText(text, position) {
    this.content =
      this.content.slice(0, position) + text + this.content.slice(position);
  }

  deleteText(position, length) {
    const deleted = this.content.slice(position, position + length);
    this.content =
      this.content.slice(0, position) + this.content.slice(position + length);
    return deleted;
  }

  setContent(content) {
    this.content = content;
  }

  getContent() {
    return this.content;
  }
}

// Invoker
class CommandManager {
  constructor() {
    this.history = [];
    this.redoStack = [];
  }

  execute(command) {
    const result = command.execute();
    this.history.push(command);
    this.redoStack.length = 0; // Clear redo stack on new command
    console.log(result);
    return result;
  }

  undo() {
    if (this.history.length > 0) {
      const command = this.history.pop();
      const result = command.undo();
      this.redoStack.push(command);
      console.log(result);
      return result;
    }
    console.log("Nothing to undo");
  }

  redo() {
    if (this.redoStack.length > 0) {
      const command = this.redoStack.pop();
      const result = command.execute();
      this.history.push(command);
      console.log(result);
      return result;
    }
    console.log("Nothing to redo");
  }

  getHistory() {
    return this.history.map(
      (cmd, index) => `${index + 1}. ${cmd.constructor.name}`
    );
  }
}

// Usage
const document = new TextDocument();
const commandManager = new CommandManager();

// Execute commands
commandManager.execute(new AddTextCommand(document, "Hello", 0));
commandManager.execute(new AddTextCommand(document, " World", 5));
commandManager.execute(new AddTextCommand(document, " Beautiful", 6));

console.log("Document:", document.getContent()); // "Hello Beautiful World"

// Undo last command
commandManager.undo(); // Removes " Beautiful"

// Redo
commandManager.redo(); // Adds " Beautiful" back

// Execute delete command
commandManager.execute(new DeleteTextCommand(document, 6, 10)); // Delete " Beautiful"

console.log("Final Document:", document.getContent()); // "Hello World"
console.log("History:", commandManager.getHistory());
```

#### 4. **Iterator Pattern**

**Custom Collection Iterator:**

```javascript
// Custom collection
class TreeNode {
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  addChild(node) {
    this.children.push(node);
    return this;
  }

  // Depth-first iterator
  *[Symbol.iterator]() {
    yield this.value;
    for (const child of this.children) {
      yield* child;
    }
  }

  // Breadth-first iterator
  *bfs() {
    const queue = [this];
    while (queue.length > 0) {
      const node = queue.shift();
      yield node.value;
      queue.push(...node.children);
    }
  }

  // Filter iterator
  *filter(predicate) {
    for (const value of this) {
      if (predicate(value)) {
        yield value;
      }
    }
  }

  // Map iterator
  *map(transform) {
    for (const value of this) {
      yield transform(value);
    }
  }
}

// Usage
const root = new TreeNode("root");
const child1 = new TreeNode("child1");
const child2 = new TreeNode("child2");
const grandchild1 = new TreeNode("grandchild1");
const grandchild2 = new TreeNode("grandchild2");

root.addChild(child1).addChild(child2);
child1.addChild(grandchild1);
child2.addChild(grandchild2);

console.log("Depth-first traversal:");
for (const value of root) {
  console.log(value);
}

console.log("\nBreadth-first traversal:");
for (const value of root.bfs()) {
  console.log(value);
}

console.log('\nFiltered (values containing "child"):');
for (const value of root.filter((val) => val.includes("child"))) {
  console.log(value);
}

console.log("\nMapped (uppercase):");
for (const value of root.map((val) => val.toUpperCase())) {
  console.log(value);
}
```

**Async Iterator:**

```javascript
class AsyncDataStream {
  constructor(dataSource) {
    this.dataSource = dataSource;
    this.index = 0;
  }

  async [Symbol.asyncIterator]() {
    while (this.index < this.dataSource.length) {
      // Simulate async operation
      await new Promise(resolve => setTimeout(resolve, 100));
      yield this.dataSource[this.index++];
    }
  }

  // Batch processing
  async *inBatches(batchSize) {
    for (let i = 0; i < this.dataSource.length; i += batchSize) {
      const batch = this.dataSource.slice(i, i + batchSize);
      // Simulate async batch processing
      await new Promise(resolve => setTimeout(resolve, 200));
      yield batch;
    }
  }
}

// Usage
(async () => {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const stream = new AsyncDataStream(data);

  console.log('Streaming data:');
  for await (const item of stream) {
    console.log('Processed:', item);
  }

  console.log('\nBatch processing:');
  const stream2 = new AsyncDataStream(data);
  for await (const batch of stream2.inBatches(3)) {
    console.log('Batch:', batch);
  }
})();
```

---

### Modern JavaScript Patterns

#### 1. **Module Pattern with ES6 Modules**

```javascript
// utils.js
export const generateId = () => Math.random().toString(36).substr(2, 9);

export const debounce = (fn, delay) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn(...args), delay);
  };
};

export const throttle = (fn, limit) => {
  let inThrottle;
  return (...args) => {
    if (!inThrottle) {
      fn(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

// apiService.js
class ApiService {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  async get(endpoint) {
    const response = await fetch(`${this.baseURL}${endpoint}`);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    return response.json();
  }

  async post(endpoint, data) {
    const response = await fetch(`${this.baseURL}${endpoint}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    return response.json();
  }
}

export default ApiService;
```

#### 2. **React Hooks as Patterns**

```javascript
import { useState, useEffect, useCallback, useMemo } from "react";

// Custom hook for API calls
const useApi = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url);
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

// Custom hook for local storage
const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  });

  const setValue = useCallback(
    (value) => {
      try {
        setStoredValue(value);
        window.localStorage.setItem(key, JSON.stringify(value));
      } catch (error) {
        console.error(`Error setting localStorage key "${key}":`, error);
      }
    },
    [key]
  );

  return [storedValue, setValue];
};

// Custom hook for undo/redo
const useUndo = (initialValue) => {
  const [state, setState] = useState({
    past: [],
    present: initialValue,
    future: [],
  });

  const canUndo = state.past.length > 0;
  const canRedo = state.future.length > 0;

  const undo = useCallback(() => {
    if (!canUndo) return;

    const previous = state.past[state.past.length - 1];
    const newPast = state.past.slice(0, state.past.length - 1);

    setState({
      past: newPast,
      present: previous,
      future: [state.present, ...state.future],
    });
  }, [canUndo, state]);

  const redo = useCallback(() => {
    if (!canRedo) return;

    const next = state.future[0];
    const newFuture = state.future.slice(1);

    setState({
      past: [...state.past, state.present],
      present: next,
      future: newFuture,
    });
  }, [canRedo, state]);

  const set = useCallback(
    (newValue) => {
      setState({
        past: [...state.past, state.present],
        present: newValue,
        future: [],
      });
    },
    [state]
  );

  return [state.present, set, undo, redo, canUndo, canRedo];
};
```

#### 3. **Functional Composition**

```javascript
// Utility functions
const pipe =
  (...fns) =>
  (value) =>
    fns.reduce((acc, fn) => fn(acc), value);

const compose =
  (...fns) =>
  (value) =>
    fns.reduceRight((acc, fn) => fn(acc), value);

const curry = (fn) => {
  const curried = (...args) => {
    if (args.length >= fn.length) {
      return fn(...args);
    }
    return (...moreArgs) => curried(...args, ...moreArgs);
  };
  return curried;
};

// Data processing pipeline
const users = [
  { id: 1, name: "Alice", age: 25, active: true },
  { id: 2, name: "Bob", age: 30, active: false },
  { id: 3, name: "Charlie", age: 35, active: true },
  { id: 4, name: "Diana", age: 28, active: true },
];

// Pure functions
const filterActive = (users) => users.filter((user) => user.active);
const filterByAge = curry((minAge, users) =>
  users.filter((user) => user.age >= minAge)
);
const mapNames = (users) => users.map((user) => user.name);
const sortAlphabetically = (names) => names.sort();

// Compose pipeline
const getActiveUserNames = pipe(
  filterActive,
  filterByAge(26),
  mapNames,
  sortAlphabetically
);

console.log(getActiveUserNames(users)); // ['Diana']

// Alternative with compose
const getActiveUserNamesAlt = compose(
  sortAlphabetically,
  mapNames,
  filterByAge(26),
  filterActive
);

console.log(getActiveUserNamesAlt(users)); // ['Diana']
```

---

### Anti-Patterns and Best Practices

#### Common JavaScript Anti-Patterns:

**1. Callback Hell:**

```javascript
// ❌ Anti-pattern
getUser(userId, (user) => {
  getPosts(user.id, (posts) => {
    getComments(posts[0].id, (comments) => {
      // Nested callback hell
    });
  });
});

// ✅ Better - Use async/await
const getUserData = async (userId) => {
  const user = await getUser(userId);
  const posts = await getPosts(user.id);
  const comments = await getComments(posts[0].id);
  return { user, posts, comments };
};
```

**2. God Object:**

```javascript
// ❌ Anti-pattern
class GodObject {
  constructor() {
    this.users = [];
    this.products = [];
    this.orders = [];
    // ... many unrelated responsibilities
  }

  // Methods handling users, products, orders, payments, etc.
}

// ✅ Better - Single Responsibility
class UserService {
  /* User-related methods */
}
class ProductService {
  /* Product-related methods */
}
class OrderService {
  /* Order-related methods */
}
```

**3. Modifying Built-in Prototypes:**

```javascript
// ❌ Anti-pattern
Array.prototype.last = function () {
  return this[this.length - 1];
};

// ✅ Better - Utility function
const last = (array) => array[array.length - 1];
```

#### Best Practices:

**1. Use Composition Over Inheritance:**

```javascript
// ❌ Deep inheritance
class Animal {}
class Mammal extends Animal {}
class Dog extends Mammal {}

// ✅ Composition
const canEat = (state) => ({
  eat: (food) => console.log(`${state.name} eats ${food}`),
});

const canBark = (state) => ({
  bark: () => console.log(`${state.name} barks!`),
});

const createDog = (name) => {
  const state = { name };
  return {
    ...state,
    ...canEat(state),
    ...canBark(state),
  };
};

const dog = createDog("Rex");
dog.eat("bone"); // Rex eats bone
dog.bark(); // Rex barks!
```

**2. Prefer Immutable Data:**

```javascript
// ✅ Using immutability
const addUser = (users, newUser) => [...users, newUser];
const removeUser = (users, userId) =>
  users.filter((user) => user.id !== userId);
const updateUser = (users, userId, updates) =>
  users.map((user) => (user.id === userId ? { ...user, ...updates } : user));

// ✅ Using Immer for complex updates
import produce from "immer";

const updatedState = produce(originalState, (draft) => {
  draft.users.push(newUser);
  draft.timestamp = Date.now();
});
```

**3. Use Dependency Injection:**

```javascript
// ✅ Dependency injection for testability
class UserService {
  constructor(database, logger, emailService) {
    this.database = database;
    this.logger = logger;
    this.emailService = emailService;
  }

  async createUser(userData) {
    const user = await this.database.create(userData);
    this.logger.info(`User created: ${user.id}`);
    await this.emailService.sendWelcomeEmail(user.email);
    return user;
  }
}

// Easy to test with mocked dependencies
const mockDatabase = { create: jest.fn() };
const mockLogger = { info: jest.fn() };
const mockEmailService = { sendWelcomeEmail: jest.fn() };

const userService = new UserService(mockDatabase, mockLogger, mockEmailService);
```

This comprehensive deep dive into JavaScript design patterns demonstrates how to apply these concepts effectively in modern JavaScript development, leveraging the language's unique features like first-class functions, prototypes, and modern ES6+ syntax.

# e 4

write without classes

---

## Deep Dive into Design Patterns in JavaScript (Without Classes)

Let's explore design patterns using functional programming, object composition, closures, and modern JavaScript features without relying on class syntax.

### Creational Patterns

#### 1. **Singleton Pattern**

**Closure-based Singleton:**

```javascript
const createDatabaseConnection = () => {
  let instance = null;

  const createConnection = () => {
    console.log("Creating new database connection...");
    return {
      query: (sql) => {
        console.log(`Executing: ${sql}`);
        return { results: [] };
      },
      close: () => console.log("Connection closed"),
    };
  };

  return {
    getInstance: () => {
      if (!instance) {
        instance = createConnection();
      }
      return instance;
    },
  };
};

// Usage
const DatabaseManager = createDatabaseConnection();
const db1 = DatabaseManager.getInstance();
const db2 = DatabaseManager.getInstance();

console.log(db1 === db2); // true
db1.query("SELECT * FROM users");
```

**Module Pattern Singleton:**

```javascript
const Logger = (() => {
  const logs = [];
  let instance = null;

  const createLogger = () => ({
    log: (message) => {
      const entry = {
        timestamp: new Date(),
        message,
        id: Math.random().toString(36).substr(2, 9),
      };
      logs.push(entry);
      console.log(`[${entry.timestamp.toISOString()}] ${message}`);
    },

    getLogs: () => [...logs],

    clear: () => {
      logs.length = 0;
      console.log("Logs cleared");
    },

    getInstance: () => instance,
  });

  instance = createLogger();
  return instance;
})();

// Usage
Logger.log("Application started");
Logger.log("User logged in");
console.log(Logger.getLogs());
```

#### 2. **Factory Pattern**

**Functional Factory:**

```javascript
const createUser = (type, name) => {
  const baseUser = {
    name,
    createdAt: new Date(),
    id: Math.random().toString(36).substr(2, 9),
  };

  const roleConfigs = {
    admin: {
      role: "admin",
      permissions: ["read", "write", "delete", "manage_users"],
      can: (action) =>
        ["read", "write", "delete", "manage_users"].includes(action),
    },
    editor: {
      role: "editor",
      permissions: ["read", "write"],
      can: (action) => ["read", "write"].includes(action),
    },
    viewer: {
      role: "viewer",
      permissions: ["read"],
      can: (action) => action === "read",
    },
  };

  const config = roleConfigs[type];
  if (!config) {
    throw new Error(`Invalid user type: ${type}`);
  }

  return {
    ...baseUser,
    ...config,
    // Methods
    hasPermission: (permission) => config.permissions.includes(permission),
    describe: () => `${name} (${config.role})`,
  };
};

// Usage
const admin = createUser("admin", "Alice");
const editor = createUser("editor", "Bob");

console.log(admin.describe());
console.log(admin.hasPermission("delete")); // true
console.log(editor.hasPermission("delete")); // false
```

**Factory with Composition:**

```javascript
const withPermissions = (permissions) => ({
  hasPermission: (permission) => permissions.includes(permission),
  getPermissions: () => [...permissions],
});

const withRole = (role) => ({
  role,
  describe: () => `Role: ${role}`,
});

const createMember = (name, role, permissions) => {
  return {
    name,
    id: Math.random().toString(36).substr(2, 9),
    ...withRole(role),
    ...withPermissions(permissions),
    // Additional methods
    toString: () => `${name} - ${role}`,
  };
};

// Specialized factories
const createAdmin = (name) =>
  createMember(name, "admin", ["read", "write", "delete", "manage_users"]);

const createEditor = (name) => createMember(name, "editor", ["read", "write"]);

const createViewer = (name) => createMember(name, "viewer", ["read"]);

// Usage
const admin = createAdmin("Alice");
console.log(admin.toString());
console.log(admin.hasPermission("manage_users")); // true
```

#### 3. **Builder Pattern**

**Fluent Builder with Closures:**

```javascript
const createQueryBuilder = () => {
  let query = {
    select: [],
    where: [],
    orderBy: [],
    limit: null,
    offset: null,
  };

  const builder = {
    select: (...fields) => {
      query.select.push(...fields);
      return builder;
    },

    where: (field, operator, value) => {
      query.where.push({ field, operator, value });
      return builder;
    },

    orderBy: (field, direction = "ASC") => {
      query.orderBy.push({ field, direction });
      return builder;
    },

    limit: (count) => {
      query.limit = count;
      return builder;
    },

    offset: (count) => {
      query.offset = count;
      return builder;
    },

    build: () => {
      const result = { ...query };
      // Reset for potential reuse
      query = { select: [], where: [], orderBy: [], limit: null, offset: null };
      return result;
    },
  };

  return builder;
};

// Usage
const query = createQueryBuilder()
  .select("id", "name", "email")
  .where("age", ">", 18)
  .where("status", "=", "active")
  .orderBy("name", "ASC")
  .limit(10)
  .offset(0)
  .build();

console.log(query);
```

**Advanced Builder with Validation:**

```javascript
const createPersonBuilder = () => {
  let person = {};

  const validators = {
    name: (name) => typeof name === "string" && name.length > 0,
    age: (age) => Number.isInteger(age) && age >= 0,
    email: (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email),
  };

  const builder = {
    setName: (name) => {
      if (!validators.name(name)) {
        throw new Error("Invalid name");
      }
      person.name = name;
      return builder;
    },

    setAge: (age) => {
      if (!validators.age(age)) {
        throw new Error("Invalid age");
      }
      person.age = age;
      return builder;
    },

    setEmail: (email) => {
      if (!validators.email(email)) {
        throw new Error("Invalid email");
      }
      person.email = email;
      return builder;
    },

    setAddress: (address) => {
      person.address = address;
      return builder;
    },

    build: () => {
      // Required fields validation
      const required = ["name", "age", "email"];
      const missing = required.filter((field) => !person[field]);

      if (missing.length > 0) {
        throw new Error(`Missing required fields: ${missing.join(", ")}`);
      }

      const result = {
        ...person,
        id: Math.random().toString(36).substr(2, 9),
        createdAt: new Date(),
      };

      // Reset builder
      person = {};
      return result;
    },
  };

  return builder;
};

// Usage
try {
  const person = createPersonBuilder()
    .setName("John Doe")
    .setAge(30)
    .setEmail("john@example.com")
    .setAddress("123 Main St")
    .build();

  console.log(person);
} catch (error) {
  console.error("Error building person:", error.message);
}
```

#### 4. **Prototype Pattern**

**Object Composition with Prototype Cloning:**

```javascript
const createShape = (x, y, color) => ({
  x,
  y,
  color,
  clone: function () {
    return {
      ...this,
      // Deep copy for nested objects if needed
      id: Math.random().toString(36).substr(2, 9), // New ID for clone
    };
  },
});

const createCircle = (x, y, color, radius) => {
  const base = createShape(x, y, color);
  return {
    ...base,
    radius,
    draw: function () {
      console.log(
        `Drawing circle at (${this.x}, ${this.y}) with radius ${this.radius}`
      );
    },
    // Override clone for proper inheritance
    clone: function () {
      return {
        ...base.clone(),
        radius: this.radius,
        draw: this.draw,
      };
    },
  };
};

const createRectangle = (x, y, color, width, height) => {
  const base = createShape(x, y, color);
  return {
    ...base,
    width,
    height,
    draw: function () {
      console.log(
        `Drawing rectangle at (${this.x}, ${this.y}) ${this.width}x${this.height}`
      );
    },
    clone: function () {
      return {
        ...base.clone(),
        width: this.width,
        height: this.height,
        draw: this.draw,
      };
    },
  };
};

// Usage
const originalCircle = createCircle(10, 20, "red", 5);
const clonedCircle = originalCircle.clone();

originalCircle.draw();
clonedCircle.x = 30; // Modify clone
clonedCircle.draw();

console.log(originalCircle === clonedCircle); // false
```

### Structural Patterns

#### 1. **Adapter Pattern**

**Function Adapter:**

```javascript
// Legacy system
const legacyPayment = (amount, cardNumber, expiry) => {
  console.log(`Legacy: Processing $${amount} with card ${cardNumber}`);
  return {
    success: true,
    transactionId: "legacy_" + Math.random().toString(36).substr(2, 9),
  };
};

// Modern system expects this format
const modernPayment = (paymentDetails) => {
  const { amount, paymentMethod } = paymentDetails;
  console.log(`Modern: Processing $${amount} via ${paymentMethod.type}`);
  return {
    success: true,
    transactionId: "modern_" + Math.random().toString(36).substr(2, 9),
    amount,
    method: paymentMethod.type,
  };
};

// Adapter function
const createPaymentAdapter = (legacyPaymentFn) => {
  return (paymentDetails) => {
    const { amount, paymentMethod } = paymentDetails;

    if (paymentMethod.type === "credit_card") {
      // Convert modern format to legacy format
      const legacyResult = legacyPaymentFn(
        amount,
        paymentMethod.cardNumber,
        paymentMethod.expiry
      );

      // Convert legacy result to modern format
      return {
        success: legacyResult.success,
        transactionId: legacyResult.transactionId,
        amount,
        method: paymentMethod.type,
      };
    }

    // For non-legacy methods, use modern system directly
    return modernPayment(paymentDetails);
  };
};

// Usage
const adaptedPayment = createPaymentAdapter(legacyPayment);

const paymentDetails = {
  amount: 100,
  paymentMethod: {
    type: "credit_card",
    cardNumber: "1234-5678-9012-3456",
    expiry: "12/25",
  },
};

const result = adaptedPayment(paymentDetails);
console.log(result);
```

#### 2. **Decorator Pattern**

**Higher-Order Function Decorators:**

```javascript
// Base function
const simpleCoffee = () => ({
  cost: () => 5,
  description: () => "Simple coffee",
});

// Decorator functions
const withMilk = (coffee) => ({
  ...coffee,
  cost: () => coffee.cost() + 2,
  description: () => coffee.description() + ", with milk",
});

const withSugar = (coffee) => ({
  ...coffee,
  cost: () => coffee.cost() + 1,
  description: () => coffee.description() + ", with sugar",
});

const withWhippedCream = (coffee) => ({
  ...coffee,
  cost: () => coffee.cost() + 3,
  description: () => coffee.description() + ", with whipped cream",
});

const withCaramel = (coffee) => ({
  ...coffee,
  cost: () => coffee.cost() + 2,
  description: () => coffee.description() + ", with caramel",
});

// Usage
let myCoffee = simpleCoffee();
console.log(`${myCoffee.description()} costs $${myCoffee.cost()}`);

myCoffee = withMilk(myCoffee);
console.log(`${myCoffee.description()} costs $${myCoffee.cost()}`);

myCoffee = withSugar(myCoffee);
console.log(`${myCoffee.description()} costs $${myCoffee.cost()}`);

myCoffee = withWhippedCream(myCoffee);
console.log(`${myCoffee.description()} costs $${myCoffee.cost()}`);

myCoffee = withCaramel(myCoffee);
console.log(`${myCoffee.description()} costs $${myCoffee.cost()}`);
```

**Functional Decorators for API Calls:**

```javascript
// Base fetch function
const fetchData = async (url, options = {}) => {
  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error(`HTTP ${response.status}: ${response.statusText}`);
  }
  return response.json();
};

// Decorator functions
const withLogging = (fn) => {
  return async (...args) => {
    console.log(`Calling ${fn.name} with:`, args);
    try {
      const result = await fn(...args);
      console.log(`Success:`, result);
      return result;
    } catch (error) {
      console.error(`Error:`, error.message);
      throw error;
    }
  };
};

const withTiming = (fn) => {
  return async (...args) => {
    const start = performance.now();
    try {
      const result = await fn(...args);
      const end = performance.now();
      console.log(`Execution time: ${(end - start).toFixed(2)}ms`);
      return result;
    } catch (error) {
      const end = performance.now();
      console.log(`Failed after: ${(end - start).toFixed(2)}ms`);
      throw error;
    }
  };
};

const withRetry = (fn, maxRetries = 3, delay = 1000) => {
  return async (...args) => {
    let lastError;

    for (let attempt = 1; attempt <= maxRetries; attempt++) {
      try {
        console.log(`Attempt ${attempt}/${maxRetries}`);
        return await fn(...args);
      } catch (error) {
        lastError = error;
        console.log(`Attempt ${attempt} failed:`, error.message);

        if (attempt < maxRetries) {
          const waitTime = delay * Math.pow(2, attempt - 1); // Exponential backoff
          console.log(`Waiting ${waitTime}ms before retry...`);
          await new Promise((resolve) => setTimeout(resolve, waitTime));
        }
      }
    }

    throw lastError;
  };
};

const withCaching = (fn, ttl = 60000) => {
  // 1 minute TTL
  const cache = new Map();

  return async (...args) => {
    const key = JSON.stringify(args);
    const cached = cache.get(key);

    if (cached && Date.now() - cached.timestamp < ttl) {
      console.log("Returning cached result");
      return cached.result;
    }

    console.log("Cache miss, fetching fresh data");
    const result = await fn(...args);
    cache.set(key, { result, timestamp: Date.now() });
    return result;
  };
};

// Compose decorators
const createRobustFetcher = (baseFn) => {
  return withLogging(withTiming(withRetry(withCaching(baseFn))));
};

// Usage
const robustFetch = createRobustFetcher(fetchData);

// robustFetch('https://api.example.com/data')
//   .then(data => console.log('Final result:', data))
//   .catch(error => console.error('Final error:', error));
```

#### 3. **Facade Pattern**

**Simplified API Facade:**

```javascript
// Complex subsystems
const createCPU = () => ({
  start: () => console.log("CPU: Starting..."),
  execute: (instruction) => console.log(`CPU: Executing ${instruction}`),
  shutdown: () => console.log("CPU: Shutting down"),
});

const createMemory = () => ({
  load: (position, data) => console.log(`Memory: Loading at ${position}`),
  free: (position) => console.log(`Memory: Freeing ${position}`),
});

const createHardDrive = () => ({
  read: (sector) => console.log(`HardDrive: Reading sector ${sector}`),
  write: (sector, data) => console.log(`HardDrive: Writing to ${sector}`),
});

// Facade
const createComputer = () => {
  const cpu = createCPU();
  const memory = createMemory();
  const hardDrive = createHardDrive();
  let isRunning = false;

  return {
    start: () => {
      if (isRunning) {
        console.log("Computer is already running");
        return;
      }

      console.log("=== Starting Computer ===");
      cpu.start();
      memory.load(0, "bootloader");
      hardDrive.read(0);
      isRunning = true;
      console.log("=== Computer Ready ===");
    },

    execute: (program) => {
      if (!isRunning) {
        throw new Error("Computer is not running");
      }

      console.log(`=== Executing: ${program} ===`);
      memory.load(0x1000, program);
      cpu.execute(program);
      console.log("=== Execution Complete ===");
    },

    shutdown: () => {
      if (!isRunning) {
        console.log("Computer is already off");
        return;
      }

      console.log("=== Shutting Down ===");
      memory.free(0x1000);
      hardDrive.write(0, "shutdown log");
      cpu.shutdown();
      isRunning = false;
      console.log("=== Computer Off ===");
    },

    getStatus: () => ({
      isRunning,
      components: ["CPU", "Memory", "HardDrive"],
    }),
  };
};

// Usage
const computer = createComputer();
computer.start();
console.log(computer.getStatus());
computer.execute("Calculator App");
computer.shutdown();
```

#### 4. **Proxy Pattern**

**Virtual Proxy with Lazy Loading:**

```javascript
const createImageProxy = (filename) => {
  let realImage = null;

  const loadRealImage = () => {
    console.log(`Loading ${filename} from network... (expensive operation)`);
    return {
      filename,
      data: `Image data for ${filename}`,
      display: () => console.log(`Displaying: ${filename}`),
      getSize: () => `${(Math.random() * 5000) | 0}KB`,
    };
  };

  return {
    display: () => {
      if (!realImage) {
        realImage = loadRealImage();
      }
      return realImage.display();
    },

    getSize: () => {
      if (!realImage) {
        return "Unknown (not loaded)";
      }
      return realImage.getSize();
    },

    // Force load if needed
    preload: () => {
      if (!realImage) {
        realImage = loadRealImage();
      }
    },
  };
};

// Usage
const image1 = createImageProxy("photo1.jpg");
const image2 = createImageProxy("photo2.jpg");

console.log("Image proxies created");
console.log("Size before loading:", image1.getSize());

image1.display(); // Loads and displays
console.log("Size after loading:", image1.getSize());

image1.display(); // Uses cached instance
```

**Protection Proxy:**

```javascript
const createBankAccount = (initialBalance = 0) => {
  let balance = initialBalance;

  return {
    deposit: (amount) => {
      balance += amount;
      return balance;
    },

    withdraw: (amount) => {
      if (amount <= balance) {
        balance -= amount;
        return amount;
      }
      throw new Error("Insufficient funds");
    },

    getBalance: () => balance,
  };
};

const createAccountProxy = (realAccount, userRole) => {
  const isAdmin = userRole === "admin";
  const isUser = userRole === "user";

  return {
    deposit: (amount) => realAccount.deposit(amount),

    withdraw: (amount) => {
      if (isAdmin) {
        return realAccount.withdraw(amount);
      } else if (isUser && amount <= 1000) {
        return realAccount.withdraw(amount);
      } else {
        throw new Error("Permission denied: Withdrawal limit exceeded");
      }
    },

    getBalance: () => {
      if (isAdmin) {
        return realAccount.getBalance();
      }
      throw new Error("Permission denied: Cannot view balance");
    },

    // Proxy-specific method
    getUserRole: () => userRole,
  };
};

// Usage
const account = createBankAccount(5000);
const adminProxy = createAccountProxy(account, "admin");
const userProxy = createAccountProxy(account, "user");

console.log("Admin balance:", adminProxy.getBalance()); // 5000
adminProxy.withdraw(2000); // OK

try {
  userProxy.getBalance(); // Error
} catch (error) {
  console.error(error.message);
}

userProxy.withdraw(500); // OK

try {
  userProxy.withdraw(1500); // Error
} catch (error) {
  console.error(error.message);
}
```

### Behavioral Patterns

#### 1. **Observer Pattern**

**Event Emitter Implementation:**

```javascript
const createEventEmitter = () => {
  const events = new Map();

  return {
    on: (event, listener) => {
      if (!events.has(event)) {
        events.set(event, new Set());
      }
      events.get(event).add(listener);

      // Return unsubscribe function
      return () => events.get(event)?.delete(listener);
    },

    off: (event, listener) => {
      events.get(event)?.delete(listener);
    },

    emit: (event, data) => {
      const listeners = events.get(event);
      if (listeners) {
        listeners.forEach((listener) => {
          try {
            listener(data);
          } catch (error) {
            console.error(`Error in event listener for ${event}:`, error);
          }
        });
      }
    },

    once: (event, listener) => {
      const onceWrapper = (data) => {
        this.off(event, onceWrapper);
        listener(data);
      };
      return this.on(event, onceWrapper);
    },

    // Get all registered events
    getEventNames: () => Array.from(events.keys()),

    // Get listener count for an event
    listenerCount: (event) => events.get(event)?.size || 0,
  };
};

// Observable subject
const createStock = (symbol, initialPrice) => {
  const emitter = createEventEmitter();
  let price = initialPrice;
  const history = [initialPrice];

  return {
    ...emitter,

    setPrice: (newPrice) => {
      const oldPrice = price;
      price = newPrice;
      history.push(newPrice);

      // Notify observers
      emitter.emit("priceChange", {
        symbol,
        oldPrice,
        newPrice,
        change: newPrice - oldPrice,
        changePercent: ((newPrice - oldPrice) / oldPrice) * 100,
      });

      // Specific events
      if (Math.abs(newPrice - oldPrice) / oldPrice > 0.05) {
        emitter.emit("significantChange", {
          symbol,
          oldPrice,
          newPrice,
          threshold: "5%",
        });
      }

      if (newPrice > oldPrice) {
        emitter.emit("priceIncrease", { symbol, oldPrice, newPrice });
      } else {
        emitter.emit("priceDecrease", { symbol, oldPrice, newPrice });
      }
    },

    getPrice: () => price,
    getHistory: () => [...history],
    getSymbol: () => symbol,
  };
};

// Usage
const appleStock = createStock("AAPL", 150);

// Subscribe to events
const unsubscribe1 = appleStock.on("priceChange", (data) => {
  console.log(
    `📈 ${data.symbol}: $${data.oldPrice} → $${
      data.newPrice
    } (${data.changePercent.toFixed(2)}%)`
  );
});

const unsubscribe2 = appleStock.on("significantChange", (data) => {
  console.log(
    `🚨 SIGNIFICANT: ${data.symbol} $${data.oldPrice} → $${data.newPrice}`
  );
});

// Simulate price changes
appleStock.setPrice(155);
appleStock.setPrice(162); // Significant change
appleStock.setPrice(158);

// Unsubscribe and test
unsubscribe1();
appleStock.setPrice(160); // Only significant change listeners remain

console.log("Active listeners:", appleStock.listenerCount("priceChange"));
```

#### 2. **Strategy Pattern**

**Functional Strategy Pattern:**

```javascript
// Strategy implementations
const paymentStrategies = {
  creditCard: (amount, details) => {
    console.log(
      `Processing $${amount} via Credit Card (${details.cardNumber})`
    );
    return {
      success: true,
      method: "credit_card",
      amount,
      transactionId: "cc_" + Math.random().toString(36).substr(2, 9),
    };
  },

  paypal: (amount, details) => {
    console.log(`Processing $${amount} via PayPal (${details.email})`);
    return {
      success: true,
      method: "paypal",
      amount,
      transactionId: "pp_" + Math.random().toString(36).substr(2, 9),
    };
  },

  crypto: (amount, details) => {
    console.log(`Processing $${amount} via Crypto (${details.walletAddress})`);
    return {
      success: true,
      method: "crypto",
      amount,
      transactionId: "crypto_" + Math.random().toString(36).substr(2, 9),
    };
  },
};

// Payment processor
const createPaymentProcessor = () => {
  let currentStrategy = null;

  return {
    setStrategy: (strategyName) => {
      if (paymentStrategies[strategyName]) {
        currentStrategy = paymentStrategies[strategyName];
        console.log(`Strategy set to: ${strategyName}`);
      } else {
        throw new Error(`Unknown strategy: ${strategyName}`);
      }
    },

    processPayment: (amount, details) => {
      if (!currentStrategy) {
        throw new Error("No payment strategy set");
      }
      return currentStrategy(amount, details);
    },

    getCurrentStrategy: () => currentStrategy?.name || "None",
  };
};

// Usage
const processor = createPaymentProcessor();

processor.setStrategy("creditCard");
processor.processPayment(100, {
  cardNumber: "1234-5678-9012-3456",
  expiry: "12/25",
  cvv: "123",
});

processor.setStrategy("paypal");
processor.processPayment(50, {
  email: "user@example.com",
});
```

**Discount Strategy with Composition:**

```javascript
const createDiscountStrategy = (discountPercent) => (amount) =>
  amount * (1 - discountPercent / 100);

const discountStrategies = {
  regular: createDiscountStrategy(0),
  student: createDiscountStrategy(20),
  senior: createDiscountStrategy(15),
  bulk: createDiscountStrategy(10),
  vip: createDiscountStrategy(25),
};

const createShoppingCart = () => {
  const items = [];
  let discountStrategy = discountStrategies.regular;

  return {
    addItem: (name, price) => {
      items.push({ name, price, id: Math.random().toString(36).substr(2, 9) });
      console.log(`Added: ${name} - $${price}`);
    },

    removeItem: (id) => {
      const index = items.findIndex((item) => item.id === id);
      if (index !== -1) {
        const removed = items.splice(index, 1)[0];
        console.log(`Removed: ${removed.name}`);
      }
    },

    setDiscountStrategy: (strategyName) => {
      if (discountStrategies[strategyName]) {
        discountStrategy = discountStrategies[strategyName];
        console.log(`Discount strategy set to: ${strategyName}`);
      } else {
        throw new Error(`Unknown discount strategy: ${strategyName}`);
      }
    },

    getSubtotal: () => items.reduce((sum, item) => sum + item.price, 0),

    getTotal: () => discountStrategy(this.getSubtotal()),

    getItems: () => [...items],

    clear: () => {
      items.length = 0;
      discountStrategy = discountStrategies.regular;
    },
  };
};

// Usage
const cart = createShoppingCart();
cart.addItem("Laptop", 1000);
cart.addItem("Mouse", 50);

console.log("Regular price:", cart.getTotal()); // 1050

cart.setDiscountStrategy("student");
console.log("Student price:", cart.getTotal()); // 840

cart.setDiscountStrategy("vip");
console.log("VIP price:", cart.getTotal()); // 787.5
```

#### 3. **Command Pattern**

**Undo/Redo System:**

```javascript
const createCommandManager = () => {
  const history = [];
  const redoStack = [];

  return {
    execute: (command) => {
      const result = command.execute();
      history.push(command);
      redoStack.length = 0; // Clear redo stack
      console.log(`✅ Executed: ${command.description}`);
      return result;
    },

    undo: () => {
      if (history.length === 0) {
        console.log("Nothing to undo");
        return null;
      }

      const command = history.pop();
      const result = command.undo();
      redoStack.push(command);
      console.log(`↩️  Undone: ${command.description}`);
      return result;
    },

    redo: () => {
      if (redoStack.length === 0) {
        console.log("Nothing to redo");
        return null;
      }

      const command = redoStack.pop();
      const result = command.execute();
      history.push(command);
      console.log(`↪️  Redone: ${command.description}`);
      return result;
    },

    getHistory: () => history.map((cmd) => cmd.description),
    getRedoStack: () => redoStack.map((cmd) => cmd.description),
    canUndo: () => history.length > 0,
    canRedo: () => redoStack.length > 0,
  };
};

// Text document
const createTextDocument = () => {
  let content = "";

  return {
    getContent: () => content,
    setContent: (newContent) => (content = newContent),

    insertText: (text, position) => {
      const before = content.slice(0, position);
      const after = content.slice(position);
      content = before + text + after;
      return content;
    },

    deleteText: (position, length) => {
      const deleted = content.slice(position, position + length);
      const before = content.slice(0, position);
      const after = content.slice(position + length);
      content = before + after;
      return deleted;
    },
  };
};

// Command factories
const createInsertCommand = (document, text, position) => {
  let previousContent = "";

  return {
    description: `Insert "${text}" at position ${position}`,
    execute: () => {
      previousContent = document.getContent();
      return document.insertText(text, position);
    },
    undo: () => {
      document.setContent(previousContent);
      return previousContent;
    },
  };
};

const createDeleteCommand = (document, position, length) => {
  let previousContent = "";
  let deletedText = "";

  return {
    description: `Delete ${length} chars from position ${position}`,
    execute: () => {
      previousContent = document.getContent();
      deletedText = document.deleteText(position, length);
      return deletedText;
    },
    undo: () => {
      document.setContent(previousContent);
      return previousContent;
    },
  };
};

// Usage
const document = createTextDocument();
const commandManager = createCommandManager();

// Execute commands
commandManager.execute(createInsertCommand(document, "Hello", 0));
commandManager.execute(createInsertCommand(document, " World", 5));
commandManager.execute(createInsertCommand(document, " Beautiful", 6));

console.log("Document:", document.getContent());

// Undo/Redo
commandManager.undo();
console.log("After undo:", document.getContent());

commandManager.redo();
console.log("After redo:", document.getContent());

// Delete command
commandManager.execute(createDeleteCommand(document, 6, 10));
console.log("After delete:", document.getContent());

console.log("History:", commandManager.getHistory());
```

#### 4. **Iterator Pattern**

**Custom Collection with Iterators:**

```javascript
const createTree = (value) => {
  const children = [];

  const tree = {
    value,
    children,

    addChild: (childValue) => {
      const child = createTree(childValue);
      children.push(child);
      return child;
    },

    // Depth-first iterator
    [Symbol.iterator]: function* () {
      yield this.value;
      for (const child of this.children) {
        yield* child;
      }
    },

    // Breadth-first iterator
    bfs: function* () {
      const queue = [this];
      while (queue.length > 0) {
        const node = queue.shift();
        yield node.value;
        queue.push(...node.children);
      }
    },

    // Filter iterator
    filter: function* (predicate) {
      for (const value of this) {
        if (predicate(value)) {
          yield value;
        }
      }
    },

    // Find specific value
    find: function* (value) {
      for (const nodeValue of this) {
        if (nodeValue === value) {
          yield nodeValue;
        }
      }
    },

    // Map iterator
    map: function* (transform) {
      for (const value of this) {
        yield transform(value);
      }
    },

    // Get depth
    getDepth: () => {
      if (children.length === 0) return 1;
      return 1 + Math.max(...children.map((child) => child.getDepth()));
    },

    // Print structure
    print: (indent = 0) => {
      console.log(" ".repeat(indent) + value);
      children.forEach((child) => child.print(indent + 2));
    },
  };

  return tree;
};

// Usage
const root = createTree("root");
const child1 = root.addChild("child1");
const child2 = root.addChild("child2");
child1.addChild("grandchild1");
child2.addChild("grandchild2");
child2.addChild("grandchild3");

console.log("Depth-first traversal:");
for (const value of root) {
  console.log(value);
}

console.log("\nBreadth-first traversal:");
for (const value of root.bfs()) {
  console.log(value);
}

console.log('\nFiltered (values containing "child"):');
for (const value of root.filter((val) => val.includes("child"))) {
  console.log(value);
}

console.log("\nMapped (uppercase):");
for (const value of root.map((val) => val.toUpperCase())) {
  console.log(value);
}

console.log("\nTree structure:");
root.print();
```

**Async Iterator for Data Streams:**

```javascript
const createAsyncDataStream = (dataSource) => {
  let index = 0;

  return {
    [Symbol.asyncIterator]: async function* () {
      while (index < dataSource.length) {
        // Simulate async operation (API call, file read, etc.)
        await new Promise((resolve) => setTimeout(resolve, 100));
        yield {
          value: dataSource[index],
          index: index++,
          timestamp: new Date(),
        };
      }
    },

    // Reset stream
    reset: () => (index = 0),

    // Get progress
    getProgress: () => ({
      current: index,
      total: dataSource.length,
      percent: ((index / dataSource.length) * 100).toFixed(1) + "%",
    }),
  };
};

// Usage
(async () => {
  const data = Array.from({ length: 10 }, (_, i) => `Item ${i + 1}`);
  const stream = createAsyncDataStream(data);

  console.log("Streaming data:");
  for await (const item of stream) {
    console.log(`Processed: ${item.value} (${item.timestamp.toISOString()})`);
    console.log("Progress:", stream.getProgress());
  }

  console.log("Stream completed");
})();
```

### Modern JavaScript Patterns

#### 1. **Functional Composition**

```javascript
// Utility functions
const pipe =
  (...fns) =>
  (value) =>
    fns.reduce((acc, fn) => fn(acc), value);

const compose =
  (...fns) =>
  (value) =>
    fns.reduceRight((acc, fn) => fn(acc), value);

const curry = (fn) => {
  const curried = (...args) => {
    if (args.length >= fn.length) {
      return fn(...args);
    }
    return (...moreArgs) => curried(...args, ...moreArgs);
  };
  return curried;
};

// Data processing
const users = [
  { id: 1, name: "Alice", age: 25, active: true, department: "Engineering" },
  { id: 2, name: "Bob", age: 30, active: false, department: "Marketing" },
  { id: 3, name: "Charlie", age: 35, active: true, department: "Engineering" },
  { id: 4, name: "Diana", age: 28, active: true, department: "Sales" },
];

// Pure transformation functions
const filterActive = (users) => users.filter((user) => user.active);
const filterByAge = curry((minAge, users) =>
  users.filter((user) => user.age >= minAge)
);
const filterByDepartment = curry((dept, users) =>
  users.filter((user) => user.department === dept)
);
const mapNames = (users) => users.map((user) => user.name);
const sortAlphabetically = (names) => [...names].sort();
const take = curry((count, array) => array.slice(0, count));
const unique = (array) => [...new Set(array)];

// Compose processing pipelines
const getActiveEngineeringUsers = pipe(
  filterActive,
  filterByDepartment("Engineering"),
  mapNames,
  sortAlphabetically
);

const getTopActiveUsers = pipe(
  filterActive,
  filterByAge(26),
  take(2),
  mapNames
);

console.log("Active Engineering Users:", getActiveEngineeringUsers(users));
console.log("Top Active Users:", getTopActiveUsers(users));

// More complex composition
const processUserData = pipe(
  filterActive,
  filterByAge(25),
  (users) =>
    users.map((user) => ({
      ...user,
      name: user.name.toUpperCase(),
      isSenior: user.age > 30,
    })),
  (users) => users.sort((a, b) => b.age - a.age)
);

console.log("Processed Users:", processUserData(users));
```

#### 2. **Memoization and Caching**

```javascript
const createMemoized = (fn, keyGenerator = JSON.stringify) => {
  const cache = new Map();

  return (...args) => {
    const key = keyGenerator(args);

    if (cache.has(key)) {
      console.log("Cache hit for:", key);
      return cache.get(key);
    }

    console.log("Cache miss for:", key);
    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
};

// Example: Expensive calculation
const fibonacci = (n) => {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
};

const memoizedFibonacci = createMemoized(fibonacci);

console.log("Fibonacci 10:", memoizedFibonacci(10));
console.log("Fibonacci 10:", memoizedFibonacci(10)); // Cached

// Memoize with TTL (Time To Live)
const createTTLMemoized = (fn, ttl = 60000) => {
  const cache = new Map();

  return (...args) => {
    const key = JSON.stringify(args);
    const cached = cache.get(key);

    if (cached && Date.now() - cached.timestamp < ttl) {
      console.log("TTL Cache hit");
      return cached.value;
    }

    console.log("TTL Cache miss");
    const value = fn(...args);
    cache.set(key, { value, timestamp: Date.now() });
    return value;
  };
};

// API call simulation
const fetchUserData = async (userId) => {
  console.log(`Fetching data for user ${userId}...`);
  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return {
    userId,
    name: `User ${userId}`,
    data: Math.random(),
  };
};

const memoizedFetch = createTTLMemoized(fetchUserData, 5000); // 5 second TTL

(async () => {
  console.log(await memoizedFetch(1));
  console.log(await memoizedFetch(1)); // Cached
})();
```

#### 3. **Dependency Injection**

```javascript
const createUserService = (dependencies) => {
  const { database, logger, emailService } = dependencies;

  return {
    createUser: async (userData) => {
      logger.info("Creating user:", userData);

      try {
        const user = await database.create("users", userData);
        logger.info("User created:", user.id);

        await emailService.sendWelcomeEmail(user.email);
        logger.info("Welcome email sent");

        return user;
      } catch (error) {
        logger.error("Failed to create user:", error);
        throw error;
      }
    },

    getUser: async (userId) => {
      logger.info("Fetching user:", userId);
      return database.find("users", userId);
    },

    updateUser: async (userId, updates) => {
      logger.info("Updating user:", userId);
      return database.update("users", userId, updates);
    },
  };
};

const createEmailService = () => ({
  sendWelcomeEmail: async (email) => {
    console.log(`Sending welcome email to: ${email}`);
    // Simulate email sending
    await new Promise((resolve) => setTimeout(resolve, 500));
    return { success: true, email };
  },
});

const createDatabase = () => {
  const data = new Map();
  let nextId = 1;

  return {
    create: async (collection, item) => {
      const id = nextId++;
      const record = { ...item, id, createdAt: new Date() };
      const key = `${collection}:${id}`;
      data.set(key, record);
      return record;
    },

    find: async (collection, id) => {
      const key = `${collection}:${id}`;
      return data.get(key) || null;
    },

    update: async (collection, id, updates) => {
      const key = `${collection}:${id}`;
      const existing = data.get(key);
      if (!existing) throw new Error("Record not found");

      const updated = { ...existing, ...updates, updatedAt: new Date() };
      data.set(key, updated);
      return updated;
    },
  };
};

const createLogger = () => ({
  info: (message, ...args) => console.log(`[INFO] ${message}`, ...args),
  error: (message, ...args) => console.error(`[ERROR] ${message}`, ...args),
  warn: (message, ...args) => console.warn(`[WARN] ${message}`, ...args),
});

// Dependency configuration
const dependencies = {
  database: createDatabase(),
  logger: createLogger(),
  emailService: createEmailService(),
};

// Usage
const userService = createUserService(dependencies);

(async () => {
  try {
    const user = await userService.createUser({
      name: "John Doe",
      email: "john@example.com",
    });

    console.log("Created user:", user);
  } catch (error) {
    console.error("Error:", error);
  }
})();
```

This comprehensive guide demonstrates how to implement all major design patterns in JavaScript without using classes, leveraging the language's strengths in functional programming, closures, and object composition.

# f (d)

compare js with and without classes

---

Here's a comparison of JavaScript with classes (ES6+) and without classes (pre-ES6 prototype-based approach):

## With Classes (ES6+)

### Syntax

```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Instance method
  greet() {
    return `Hello, I'm ${this.name}`;
  }

  // Static method
  static species() {
    return "Homo sapiens";
  }
}

// Inheritance
class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }

  study() {
    return `${this.name} is studying ${this.major}`;
  }
}

// Usage
const student = new Student("Alice", 20, "Computer Science");
console.log(student.greet()); // "Hello, I'm Alice"
console.log(Student.species()); // "Homo sapiens"
```

## Without Classes (Prototype-based)

### Syntax

```javascript
// Constructor function
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Instance method via prototype
Person.prototype.greet = function () {
  return `Hello, I'm ${this.name}`;
};

// Static method
Person.species = function () {
  return "Homo sapiens";
};

// Inheritance
function Student(name, age, major) {
  Person.call(this, name, age); // Call parent constructor
  this.major = major;
}

// Set up prototype chain
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.study = function () {
  return `${this.name} is studying ${this.major}`;
};

// Usage
const student = new Student("Alice", 20, "Computer Science");
console.log(student.greet()); // "Hello, I'm Alice"
console.log(Student.species()); // "Homo sapiens"
```

## Key Differences

| Aspect                | With Classes                   | Without Classes                   |
| --------------------- | ------------------------------ | --------------------------------- |
| **Syntax**            | Clean, declarative             | More verbose, imperative          |
| **Inheritance**       | `extends` and `super` keywords | Manual prototype chain setup      |
| **Method Definition** | Inside class body              | Added to prototype object         |
| **Static Methods**    | `static` keyword               | Direct assignment to constructor  |
| **Private Fields**    | `#privateField` syntax         | Closures or naming conventions    |
| **Readability**       | More intuitive                 | Requires prototype knowledge      |
| **Hoisting**          | Not hoisted                    | Function declarations are hoisted |

## Additional Features with Classes

### Private Fields

```javascript
class Person {
  #secret; // Private field

  constructor(name) {
    this.name = name;
    this.#secret = "my secret";
  }

  getSecret() {
    return this.#secret;
  }
}
```

### Getters/Setters

```javascript
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  set fullName(name) {
    [this.firstName, this.lastName] = name.split(" ");
  }
}
```

## Under the Hood

**Important**: Classes are primarily syntactic sugar over JavaScript's existing prototype-based inheritance. Both approaches ultimately create the same prototype chain structure.

```javascript
// Both approaches create similar structures
class MyClass {}
function MyConstructor() {}

console.log(typeof MyClass); // "function"
console.log(typeof MyConstructor); // "function"

console.log(MyClass.prototype.constructor === MyClass); // true
console.log(MyConstructor.prototype.constructor === MyConstructor); // true
```

## When to Use Each

### Use Classes when:

- Writing new code in modern environments
- Team prefers OOP-style syntax
- Working with frameworks that use classes (React, Angular)
- Need private fields or clean inheritance

### Use Prototype approach when:

- Maintaining legacy code
- Need fine-grained control over prototype chain
- Working in environments without ES6+ support
- Performance-critical scenarios (though difference is usually negligible)

## Performance Notes

Modern JavaScript engines optimize both approaches well. The performance difference is typically minimal, with readability and maintainability being more important considerations.

Both approaches ultimately create the same underlying prototype-based structure - classes just provide a cleaner, more familiar syntax for developers coming from class-based languages.

# f.b

compare functions and classes

---

**Functions vs. Classes in Programming**

### **1. Definition & Purpose**

- **Functions**:

  - Blocks of reusable code that perform a specific task.
  - Accept inputs (parameters), process them, and return a result.
  - Focus on **behavior** or **actions** (e.g., `calculate_area(radius)`).

- **Classes**:
  - Blueprints for creating objects (instances) that encapsulate **data** and **behavior**.
  - Model real-world entities by grouping related variables (attributes) and functions (methods).
  - Enable object-oriented programming (OOP) concepts like inheritance and polymorphism.

---

### **2. Structure & Components**

- **Functions**:

  - Defined using `def` (Python), `function` (JavaScript), etc.
  - Standalone or nested within other functions/classes.

  ```python
  def greet(name):
      return f"Hello, {name}!"
  ```

- **Classes**:
  - Defined using `class` (Python, Java, C++).
  - Contain **attributes** (data) and **methods** (functions).
  - Use `__init__` (Python) or constructors to initialize objects.
  ```python
  class Person:
      def __init__(self, name):
          self.name = name
      def greet(self):
          return f"Hello, {self.name}!"
  ```

---

### **3. State Management**

- **Functions**:

  - Typically **stateless**: Output depends only on input (in pure functions).
  - Cannot natively retain data between calls (unless using global variables or closures).

- **Classes**:
  - **Stateful**: Instances hold internal state via attributes (e.g., `self.name`).
  - Methods can modify or use the object’s state.
  ```python
  person = Person("Alice")
  person.greet()  # Output: "Hello, Alice!"
  ```

---

### **4. Reusability & Organization**

- **Functions**:

  - Promote modularity for specific tasks.
  - Ideal for procedural or functional programming.

- **Classes**:
  - Group related data and behaviors into a single unit.
  - Support inheritance, encapsulation, and polymorphism for complex systems.
  - Example: A `Vehicle` class can have subclasses `Car` and `Bike` sharing common methods.

---

### **5. Use Cases**

- **Use Functions When**:

  - You need a simple, reusable operation (e.g., `sort_list(data)`).
  - Working in a functional programming paradigm.
  - Stateless behavior is sufficient.

- **Use Classes When**:
  - Modeling entities with identity and state (e.g., users, bank accounts).
  - You require inheritance or polymorphism.
  - Complex systems benefit from encapsulation (e.g., hiding internal details).

---

### **6. Memory & Performance**

- **Functions**:

  - Generally lightweight; memory is freed after execution.

- **Classes**:
  - Objects consume memory to store attributes.
  - Methods are shared across instances, but each instance has its own data.

---

### **7. Example Comparison**

| Scenario             | Function Approach        | Class Approach             |
| -------------------- | ------------------------ | -------------------------- |
| Geometry Calculation | `area_of_circle(radius)` | `Circle(radius).area()`    |
| Managing User Data   | `get_user_name(user_id)` | `User(user_id).get_name()` |

---

### **When to Choose Which?**

- **Functions**: Short-lived tasks, utilities, or stateless operations.
- **Classes**: Modeling systems with multiple interacting entities, state persistence, or hierarchical relationships.

Both functions and classes are essential tools—choose based on the problem’s complexity and design goals!

# f.c (star)

compare fp and oop in js

---

Here's a comprehensive comparison of Functional Programming (FP) and Object-Oriented Programming (OOP) in JavaScript:

## Core Paradigms

### Object-Oriented Programming (OOP)

- **Focus**: Objects and classes
- **Key concepts**: Encapsulation, inheritance, polymorphism
- **State management**: Mutable state within objects
- **Primary abstraction**: Objects representing real-world entities

### Functional Programming (FP)

- **Focus**: Functions and data transformations
- **Key concepts**: Pure functions, immutability, composition
- **State management**: Immutable data structures
- **Primary abstraction**: Functions as first-class citizens

## Code Examples

### OOP Approach

```javascript
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  getName() {
    return this.name;
  }

  setEmail(email) {
    this.email = email;
    return this;
  }
}

class Admin extends User {
  constructor(name, email, permissions) {
    super(name, email);
    this.permissions = permissions;
  }

  hasPermission(permission) {
    return this.permissions.includes(permission);
  }
}

// Usage
const admin = new Admin("John", "john@test.com", ["read", "write"]);
admin.setEmail("new@test.com");
```

### FP Approach

```javascript
// Pure functions
const createUser = (name, email) => ({ name, email });

const setEmail = (email, user) => ({
  ...user,
  email,
});

const createAdmin = (user, permissions) => ({
  ...user,
  permissions,
});

const hasPermission = (permission, admin) =>
  admin.permissions.includes(permission);

// Usage
const user = createUser("John", "john@test.com");
const admin = createAdmin(user, ["read", "write"]);
const updatedAdmin = setEmail("new@test.com", admin);
```

## Key Differences

| Aspect                     | OOP                      | FP                            |
| -------------------------- | ------------------------ | ----------------------------- |
| **State**                  | Mutable state in objects | Immutable data                |
| **Primary building block** | Objects/Classes          | Functions                     |
| **Data & behavior**        | Combined in objects      | Separated                     |
| **Code reuse**             | Inheritance              | Composition                   |
| **Side effects**           | Common and expected      | Avoided when possible         |
| **Flow control**           | Methods and loops        | Function composition          |
| **Testing**                | May require mocking      | Easier to test pure functions |

## Modern JavaScript: Hybrid Approaches

### Using Both Paradigms

```javascript
// FP-style with OOP elements
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  // OOP method
  display() {
    return `${this.name}: $${this.price}`;
  }
}

// FP utilities
const calculateTotal = (products) =>
  products.reduce((total, product) => total + product.price, 0);

const applyDiscount = (discount, products) =>
  products.map((product) => ({
    ...product,
    price: product.price * (1 - discount),
  }));

// Usage
const products = [new Product("Book", 20), new Product("Pen", 5)];

const discounted = applyDiscount(0.1, products);
const total = calculateTotal(discounted);
```

## Pros and Cons

### OOP Advantages

- Intuitive for modeling real-world domains
- Easy to understand for many developers
- Good for complex state management
- Built-in language support with classes

### OOP Disadvantages

- Tight coupling through inheritance
- Can lead to complex hierarchies
- Shared mutable state can cause bugs
- Harder to test in isolation

### FP Advantages

- More predictable and testable code
- Easier debugging and reasoning
- Better for concurrent programming
- Encourages reusable, modular code

### FP Disadvantages

- Steeper learning curve
- Can be less intuitive for some problems
- May require more memory for immutable data
- Can lead to deep nesting in complex scenarios

## Best Practices for Each

### OOP Best Practices

```javascript
// Prefer composition over inheritance
class PaymentProcessor {
  process(payment) {
    // Process payment
  }
}

class Order {
  constructor(paymentProcessor) {
    this.paymentProcessor = paymentProcessor;
  }

  checkout() {
    return this.paymentProcessor.process(this);
  }
}
```

### FP Best Practices

```javascript
// Use function composition
const pipe =
  (...fns) =>
  (x) =>
    fns.reduce((v, f) => f(v), x);

const validateUser = (user) => ({ ...user, valid: true });
const logUser = (user) => {
  console.log(user);
  return user;
};

const processUser = pipe(validateUser, logUser);
```

## When to Use Each

### Use OOP When:

- Modeling real-world entities with clear relationships
- Working with complex state that changes over time
- Building frameworks or libraries with clear APIs
- Team is more comfortable with classical patterns

### Use FP When:

- Building data transformation pipelines
- Working with concurrent or asynchronous code
- Need high reliability and testability
- Processing streams of data
- Building utilities and helper functions

## Modern Trends

Many modern JavaScript codebases use a hybrid approach:

- React components (OOP-like) with hooks (FP-inspired)
- Redux with functional state management
- Classes for domain models with functional utilities
- Functional programming patterns in Node.js backend

The choice often depends on the specific problem domain, team experience, and project requirements rather than strict adherence to one paradigm.

# f.d (d)

compare functions returning objects and classes

---

When comparing **functions returning objects** and **classes** in JavaScript, both can create objects with state and behavior, but they differ in inheritance, syntax, memory usage, and design patterns. Here's a breakdown:

---

### **1. Syntax & Structure**

- **Function Returning Objects**  
  A factory function that explicitly returns an object. No `new` keyword needed.

  ```javascript
  function createPerson(name) {
    return {
      name,
      greet() {
        return `Hello, I'm ${this.name}`;
      },
    };
  }
  const alice = createPerson("Alice");
  ```

- **Classes**  
  Use the `class` keyword with a constructor. Requires `new` to instantiate.
  ```javascript
  class Person {
    constructor(name) {
      this.name = name;
    }
    greet() {
      return `Hello, I'm ${this.name}`;
    }
  }
  const bob = new Person("Bob");
  ```

---

### **2. Inheritance & Prototypes**

- **Function Returning Objects**

  - No built-in inheritance mechanism.
  - Use composition or manually link prototypes (e.g., `Object.create()`).

  ```javascript
  const studentPrototype = createPerson("Super");
  function createStudent(name, major) {
    const student = Object.create(studentPrototype);
    student.name = name;
    student.major = major;
    return student;
  }
  ```

- **Classes**
  - Supports `extends` for inheritance.
  - Prototype chain is handled automatically.
  ```javascript
  class Student extends Person {
    constructor(name, major) {
      super(name);
      this.major = major;
    }
  }
  ```

---

### **3. Memory Efficiency**

- **Function Returning Objects**

  - Each instance has its own copy of methods (less efficient if many instances are created).
  - Avoid this by storing methods in a shared prototype (e.g., via `Object.create`).

- **Classes**
  - Methods are stored on the prototype, so all instances share the same method (memory-efficient).

---

### **4. Encapsulation (Private Fields)**

- **Function Returning Objects**

  - Use closures to create private state:

  ```javascript
  function createCounter() {
    let count = 0; // Private
    return {
      increment() {
        count++;
      },
      getCount() {
        return count;
      },
    };
  }
  ```

- **Classes**
  - Support private fields with `#` (ES2022+):
  ```javascript
  class Counter {
    #count = 0;
    increment() {
      this.#count++;
    }
    getCount() {
      return this.#count;
    }
  }
  ```

---

### **5. `this` Context**

- **Function Returning Objects**

  - Methods must use `this` to access instance properties, but `this` is bound to the returned object.
  - Arrow functions can avoid `this` issues in nested methods.

- **Classes**
  - `this` refers to the instance.
  - Requires binding (e.g., in event handlers) or arrow methods to avoid context loss.

---

### **6. Design Patterns**

- **Function Returning Objects**

  - Favor **composition** over inheritance.
  - Flexible for factory patterns or modular design.

- **Classes**
  - Follow **classical inheritance** patterns.
  - Ideal for hierarchical structures.

---

### **7. Usage with `new` and `instanceof`**

- **Function Returning Objects**

  - `instanceof` doesn't work (unless manually set prototype).
  - No reliance on `new`.

- **Classes**
  - `instanceof` works natively.
  - Throws an error if called without `new`.

---

### **When to Use Which?**

- **Use Functions Returning Objects** when:

  - You need lightweight objects without inheritance.
  - Privacy via closures is critical.
  - Composition is preferred over inheritance.

- **Use Classes** when:
  - You need inheritance hierarchies.
  - Memory efficiency (shared methods) matters.
  - Integrating with frameworks/libraries that use classes (e.g., React, Angular).

---

### **Example Comparison**

| Feature              | Function Returning Objects      | Classes                    |
| -------------------- | ------------------------------- | -------------------------- |
| Inheritance          | Manual (composition/prototypes) | Built-in (`extends`)       |
| Memory Efficiency    | Lower (unless optimized)        | Higher (prototype methods) |
| Privacy              | Closures                        | `#` private fields         |
| `instanceof` Support | No (unless customized)          | Yes                        |
| `new` Required       | No                              | Yes                        |

Both approaches are valid; the choice depends on your project’s needs for structure, scalability, and design philosophy.

# f.d (star)

compare factory functions and classes

---

## Factory Functions vs. Classes in JavaScript

Both factory functions and classes are used to create objects in JavaScript, but they have different approaches and characteristics.

### Factory Functions

**Definition:** Functions that return new objects without using the `new` keyword.

```javascript
// Factory function example
function createUser(name, age) {
  return {
    name,
    age,
    greet() {
      return `Hello, I'm ${this.name}`;
    },
    // Private variable (closure)
    getBirthYear() {
      const currentYear = new Date().getFullYear();
      return currentYear - this.age;
    },
  };
}

const user1 = createUser("Alice", 30);
const user2 = createUser("Bob", 25);
```

### Classes

**Definition:** Blueprint for creating objects using the `class` syntax (ES6+).

```javascript
// Class example
class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Hello, I'm ${this.name}`;
  }

  getBirthYear() {
    const currentYear = new Date().getFullYear();
    return currentYear - this.age;
  }
}

const user1 = new User("Alice", 30);
const user2 = new User("Bob", 25);
```

### Key Differences

| Aspect              | Factory Functions                      | Classes                   |
| ------------------- | -------------------------------------- | ------------------------- |
| **Instantiation**   | No `new` keyword                       | Requires `new` keyword    |
| **Inheritance**     | Composition pattern                    | `extends` keyword         |
| **`this` context**  | Determined by calling context          | Always refers to instance |
| **Private fields**  | Closures                               | `#privateField` syntax    |
| **Prototype chain** | Objects don't share methods by default | Methods are on prototype  |
| **`instanceof`**    | Doesn't work                           | Works correctly           |

### Detailed Comparison

#### 1. Inheritance Patterns

**Factory Functions (Composition):**

```javascript
// Using composition instead of inheritance
function canFly({ name }) {
  return {
    fly() {
      return `${name} is flying!`;
    },
  };
}

function createBird(name) {
  const bird = createUser(name, 1); // Base object
  return Object.assign(bird, canFly(bird));
}

const bird = createBird("Tweety");
bird.greet(); // "Hello, I'm Tweety"
bird.fly(); // "Tweety is flying!"
```

**Classes (Inheritance):**

```javascript
class Bird extends User {
  constructor(name) {
    super(name, 1);
  }

  fly() {
    return `${this.name} is flying!`;
  }
}

const bird = new Bird("Tweety");
bird.greet(); // "Hello, I'm Tweety"
bird.fly(); // "Tweety is flying!"
```

#### 2. Memory Efficiency

**Factory Functions:**

- Each object gets its own copy of methods
- More memory usage with many instances

**Classes:**

- Methods are stored on the prototype
- More memory efficient for many instances

#### 3. Privacy Patterns

**Factory Functions (Closures):**

```javascript
function createCounter() {
  let count = 0; // Truly private

  return {
    increment() {
      count++;
      return count;
    },
    getCount() {
      return count;
    },
  };
}

const counter = createCounter();
counter.count; // undefined - truly private
```

**Classes (Private Fields):**

```javascript
class Counter {
  #count = 0; // Private field

  increment() {
    this.#count++;
    return this.#count;
  }

  getCount() {
    return this.#count;
  }
}

const counter = new Counter();
counter.#count; // SyntaxError - private field
```

#### 4. `this` Binding

**Factory Functions:**

```javascript
const user = createUser("Alice", 30);
const { greet } = user;
greet(); // Error: Cannot read property 'name' of undefined
```

**Classes:**

```javascript
class User {
  constructor(name) {
    this.name = name;
    this.greet = this.greet.bind(this); // Or use arrow functions
  }

  greet() {
    return `Hello, I'm ${this.name}`;
  }
}
```

### When to Use Each

#### Use Factory Functions When:

- You need true privacy through closures
- You prefer composition over inheritance
- You want to avoid `this` binding issues
- You're working with functional programming patterns

#### Use Classes When:

- You need inheritance hierarchies
- Memory efficiency is important (many instances)
- You want to use `instanceof` checks
- You're working with frameworks that expect classes (React, etc.)
- Team familiarity with classical OOP patterns

### Modern Patterns

**Factory Functions with Shared Methods:**

```javascript
const userMethods = {
  greet() {
    return `Hello, I'm ${this.name}`;
  },
};

function createUser(name, age) {
  return Object.create(userMethods, {
    name: { value: name },
    age: { value: age },
  });
}
```

**Classes with Composition:**

```javascript
// Mixin pattern with classes
const CanFly = (Base) =>
  class extends Base {
    fly() {
      return `${this.name} is flying!`;
    }
  };

class Bird extends CanFly(User) {
  constructor(name) {
    super(name, 1);
  }
}
```

### Conclusion

Both patterns are valid and useful. Factory functions offer more flexibility and avoid `this` issues, while classes provide better performance for many instances and familiar syntax for developers coming from classical OOP languages. The choice often depends on your specific use case, team preferences, and the programming paradigms you're following.
