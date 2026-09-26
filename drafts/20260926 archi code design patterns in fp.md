# code design patterns

### Quick results from the web:

[link](https://refactoring.guru/design-patterns)

**Design Patterns** - Refactoring.Guru

Design Patterns. Design patterns are typical solutions to common problems in software design. Each pattern is like a blueprint that you can customize to solve a particular design problem in your code.

Refactoring.Guru·https://refactoring.guru

[link](https://www.reddit.com/r/learnprogramming/comments/1i2olwx/what%5Fare%5Fdesign%5Fpatterns/)

What are **design patterns**? : r/learnprogramming - Reddit

Simply put, design patterns are ways of solving problems that are common enough to have been identified by several programmers working in different codebases who solved the issue in a similar way, or

Reddit·https://www.reddit.com

**Code design patterns** are <mark>reusable blueprints that help developers solve recurring problems in software engineering</mark>. Rather than acting as exact code snippets you can copy and paste, they serve as structured concepts or templates tailored to optimize modularity, flexibility, and code maintainability. [link](https://refactoring.guru/design-patterns)

Popularized by the seminal 1994 book _Design Patterns: Elements of Reusable Object-Oriented Software_ by the **Gang of Four (GoF)**, these 23 foundational patterns are categorized into three distinct buckets: [link](https://www.youtube.com/watch?v=tAuRQs%5Fd9F8\&t=13)

***

### 1. Creational Patterns

These patterns handle **object creation mechanisms**, trying to create objects in a manner suitable to the situation instead of instantiating them directly. [link](https://www.youtube.com/watch?v=BJatgOiiht4)

- **Singleton**: Ensures a class has only one instance and provides a global access point to it (e.g., database connection pool or global app logger). [link](https://www.youtube.com/watch?v=BJatgOiiht4)
- **Factory Method**: Provides an interface for creating objects in a superclass but allows subclasses to alter the type of objects that will be created. [link](https://www.geeksforgeeks.org/system-design/software-design-patterns/)
- **Builder**: Separates the construction of a complex object from its representation, allowing you to produce different types and representations step-by-step. [link](https://sourcemaking.com/design%5Fpatterns)
- **Abstract Factory** & **Prototype**. [link](https://www.geeksforgeeks.org/system-design/software-design-patterns/)

### 2. Structural Patterns

These blueprints explain how to **assemble objects and classes** into larger structures while keeping the architectures flexible and efficient. [link](https://refactoring.guru/design-patterns/catalog)

- **Adapter**: Acts as a bridge between two incompatible interfaces (e.g., converting XML data formats into JSON).
- **Facade**: Provides a simplified interface to a complex library, desktop subsystem, or framework.
- **Decorator**: Dynamically attaches new behaviors and responsibilities to objects without modifying their base code.
- **Proxy**, **Composite**, **Bridge**, & **Flyweight**. [link](https://www.youtube.com/watch?v=tv-%5F1er1mWI\&t=16)

### 3. Behavioral Patterns

These focus specifically on **algorithms, object communication**, and the assignment of responsibilities between disparate objects. [link](https://www.youtube.com/shorts/zfM1G3ys-d8)

- **Strategy**: Defines a family of interchangeable algorithms and encapsulates each one, enabling client code to swap behaviors at runtime.
- **Observer**: Establishes a one-to-many dependency so that when one object changes state, all its subscribers are notified automatically (e.g., UI event listeners).
- **Command**: Encapsulates a request as a standalone object, making it easy to handle operations like undo/redo systems.
- **State**, **Iterator**, **Template Method**, **Mediator**, **Memento**, & **Visitor**. [link](https://www.linkedin.com/pulse/3-design-patterns-every-developer-should-learn-noor-ahmed)

***

### 🛠️ Real-World Application

To dive deeper into full implementation code, visual guides, and interactive visual catalogs, check out [Refactoring.Guru](https://refactoring.guru/design-patterns) or browse the frontend-focused architectures map on [Patterns.dev](https://www.patterns.dev/).

Are you studying these patterns for a **coding interview**, or are you trying to solve a **specific architectural problem** in your project? Let me know, and I can provide practical **code examples** in your preferred programming language!

- [link](https://refactoring.guru/design-patterns)\
  Refactoring.Guru\
  Design Patterns\
  Design patterns are solutions to common problems in software design. They are like blueprints that can be customized to solve spec...
- [link](https://www.youtube.com/watch?v=BJatgOiiht4)\
  YouTube·ForrestKnight\
  7 Design Patterns EVERY Developer Should Know\
  Dec 6, 2024 — directly these patterns give you more flexibility on how objects come into existence structural patterns that's the second categor...\
  22:01
- [link](https://en.wikipedia.org/wiki/Software%5Fdesign%5Fpattern)\
  Wikipedia\
  Software design pattern - Wikipedia\
  A software design pattern describes a reusable solution to a commonly needed behavior in software. A design pattern is not a rigid...

Show all

# code design patterns examples

**Software design patterns** are reusable, time-tested templates used to solve common problems in software development. Popularized by the **"Gang of Four" (GoF)** in 1994, these 23 classic patterns are universally split into **three core categories** based on their underlying purpose: creational, structural, and behavioral. [link](https://refactoring.guru/design-patterns)

Here is an overview of the three categories, followed by practical, multi-language examples of the most frequently used patterns in the industry.

***

### The Three Design Pattern Categories

| Category       | Primary Focus                                                                             | Everyday Analogy                                     | Key Examples                       |
| -------------- | ----------------------------------------------------------------------------------------- | ---------------------------------------------------- | ---------------------------------- |
| **Creational** | Controlling **how and when objects are instantiated**                                     | A blueprint or assembly line in a factory            | Singleton, Factory Method, Builder |
| **Structural** | Organizing **how classes and objects relate to each other** to build larger architectures | Adapters, wrappers, or lego blocks snapping together | Adapter, Facade, Decorator, Proxy  |
| **Behavioral** | Managing **communication, algorithms, and responsibilities** between objects              | A broadcast station or a workflow checklist          | Observer, Strategy, Command, State |

***

### 1. Creational Pattern Example: The Singleton

The **Singleton pattern** ensures that a class has **only one single instance** throughout the entire application lifespan, providing a global access point to it. [link](https://medium.com/@hariomsingh2007/top-10-design-patterns-every-developer-should-know-part-1-ffe3e07b9cb0)

- **Real-World Use Case:** Database connection pools, configuration managers, or application-wide logging systems.
- **Code Example (Python):** [link](https://www.youtube.com/watch?v=BJatgOiiht4)

python

```
class DatabaseConnection:
    _instance = None

    def __new__(cls):
        # Create the instance only if it doesn't exist yet
        if cls._instance is None:
            cls._instance = super(DatabaseConnection, cls).__new__(cls)
            # Simulate opening an expensive connection resource
            cls._instance.connection_string = "mongodb://localhost:27017/prod"
        return cls._instance

# Both variables point to the exact same instance in memory
db1 = DatabaseConnection()
db2 = DatabaseConnection()

print(db1 is db2)  # Output: True
```

Use code with caution.

***

### 2. Structural Pattern Example: The Adapter

The **Adapter pattern** acts as a translator. It allows two objects with **incompatible interfaces to work together** by wrapping one of the objects in an intermediate "adapter" layer. [link](https://www.youtube.com/watch?v=tAuRQs%5Fd9F8\&t=13)

- **Real-World Use Case:** Integrating a new third-party payment gateway or analytics API without rewriting your core app code.
- **Code Example (JavaScript):**

javascript

```
// Old interface your app relies on
class OldNotificationSystem {
    sendLegacyText(msg) { console.log(`Legacy Text: ${msg}`); }
}

// New third-party interface you want to migrate to
class ModernSMSProvider {
    dispatchModernPayload(payload) { console.log(`Modern SMS: ${payload.text}`); }
}

// The Adapter maps the old method call to the new system's structure
class NotificationAdapter {
    constructor(modernSystem) {
        this.modernSystem = modernSystem;
    }

    sendLegacyText(msg) {
        // Translate the simple string parameter into the modern payload object
        this.modernSystem.dispatchModernPayload({ text: msg });
    }
}

// Usage
const modernProvider = new ModernSMSProvider();
const clientApp = new NotificationAdapter(modernProvider);
clientApp.sendLegacyText("Hello World!"); // Output: Modern SMS: Hello World!
```

Use code with caution.

***

### 3. Behavioral Pattern Example: The Strategy

The **Strategy pattern** defines a family of algorithms, encapsulates each one, and **makes them interchangeable at runtime** based on user selection or environment. [link](https://www.youtube.com/watch?v=YMAwgRwjEOQ\&t=212)

- **Real-World Use Case:** A navigation app offering different routing formulas (Driving, Walking, Public Transit), or an e-commerce checkout page processing various payment types (Credit Card, PayPal, Crypto).
- **Code Example (C#):** [link](https://www.youtube.com/watch?v=YMAwgRwjEOQ\&t=212)

csharp

```
using System;

// The common interface all strategy algorithms must implement
public interface IPaymentStrategy {
    void ProcessPayment(double amount);
}

// Concrete Strategy A
public class CreditCardPayment : IPaymentStrategy {
    public void ProcessPayment(double amount) => Console.WriteLine($"Paid ${amount} via Credit Card.");
}

// Concrete Strategy B
public class PayPalPayment : IPaymentStrategy {
    public void ProcessPayment(double amount) => Console.WriteLine($"Paid ${amount} via PayPal.");
}

// The Context class that interacts with the client app
public class ShoppingCart {
    private IPaymentStrategy _paymentStrategy;

    public void SetPaymentMethod(IPaymentStrategy strategy) => _paymentStrategy = strategy;

    public void Checkout(double total) {
        _paymentStrategy.ProcessPayment(total);
    }
}

// Usage
var cart = new ShoppingCart();
cart.SetPaymentMethod(new PayPalPayment()); // Switch strategies on the fly
cart.Checkout(45.99); // Output: Paid $45.99 via PayPal.
```

Use code with caution.

***

### Interactive Visual Resources

If you want to explore class diagrams, deep dives, or language-specific code snippets for all 23 patterns, check out these popular reference platforms:

- Browse comprehensive multi-language repositories on the official [Refactoring.Guru Design Patterns Directory](https://refactoring.guru/design-patterns/examples).
- Study structural breakdowns and implementation exercises on the [SourceMaking Patterns Index](https://sourcemaking.com/design%5Fpatterns).
- View web-framework patterns and interactive JavaScript examples via [Patterns.dev Web Architecture Guide](https://www.patterns.dev/).

Are you working in a **specific programming language** (like Java, TypeScript, or C++) or trying to solve a **particular architecture problem**? Let me know, and I can provide an example tailored directly to your project.

- [link](https://refactoring.guru/design-patterns)\
  Refactoring.Guru\
  Design Patterns\
  Design patterns are solutions to common problems in software design. They are like blueprints that can be customized to solve spec...
- [link](https://www.youtube.com/watch?v=BJatgOiiht4)\
  YouTube\
  7 Design Patterns EVERY Developer Should Know - YouTube\
  directly these patterns give you more flexibility on how objects come into existence structural patterns that's the second categor...
- [link](https://www.geeksforgeeks.org/system-design/software-design-patterns/)\
  GeeksforGeeks\
  Design Patterns Tutorial - GeeksforGeeks\
  They help you control how and when objects are instantiated. \* Singleton Pattern. \* Factory Method Pattern. \* Abstract Factory Pat...

Show all

# code design patterns examples in fp js

In **Functional Programming (FP) with JavaScript**, classic object-oriented design patterns (like those from the Gang of Four) are often radically simplified. Because functions are **first-class citizens** in JavaScript, many OOP patterns disappear entirely, transforming into simple function composition, currying, or high-order functions. [link](https://dev.to/patferraggi/do-you-need-design-patterns-in-functional-programming-370c)

Here are the most common functional programming design patterns in JavaScript, along with practical examples.

***

### 1. The Strategy Pattern (Functions as Arguments)

In OOP, the Strategy pattern requires an interface and multiple concrete strategy classes. In FP, a strategy is just a **pure function** passed as an argument to another function. [link](https://fsharpforfunandprofit.com/fppatterns/)

javascript

```
// Strategies are just pure functions
const regularPrice = (amount) => amount;
const premiumDiscount = (amount) => amount * 0.85;
const holidaySale = (amount) => amount * 0.50;

// The context runner
const calculateTotal = (amount, discountStrategy) => {
  return discountStrategy(amount);
};

// Usage
console.log(calculateTotal(100, premiumDiscount)); // 85
console.log(calculateTotal(100, holidaySale));     // 50
```

Use code with caution.

### 2. The Decorator Pattern (Higher-Order Functions)

Instead of wrapping objects in other objects to extend behavior, the FP approach uses **Higher-Order Functions (HOFs)** to wrap a function inside another function, adding behavior without mutating the original code. [link](https://javascript.plainenglish.io/functional-programming-patterns-that-made-my-code-cleaner-bfa27a4228bc)

javascript

```
// Base operation
const multiply = (a, b) => a * b;

// Decorator: Adds logging capability
const withLogging = (fn) => {
  return (...args) => {
    console.log(`Calling ${fn.name || 'anonymous'} with args:`, args);
    const result = fn(...args);
    console.log(`Result:`, result);
    return result;
  };
};

// Usage
const loggedMultiply = withLogging(multiply);
loggedMultiply(4, 5);
// Logs: Calling multiply with args: [4, 5]
// Logs: Result: 20
```

Use code with caution.

### 3. Factory Pattern (Closure-based Closures & Object Literals)

OOP factories instantiate objects from specialized factory classes. In FP, factories are simple functions that return new object literals without using the `new` keyword or `this`, protecting data via standard JavaScript **closures**. [link](https://dev.to/twinfred/design-patterns-in-javascript-1l2l)

javascript

```
const createUser = (name, role) => {
  // Private variable inaccessible outside this closure scope
  const createdAt = new Date();

  return {
    // Return a fresh, frozen object to ensure immutability
    ...Object.freeze({
      name,
      role,
      getProfile: () => `${name} is a ${role} created on ${createdAt.toLocaleDateString()}`
    })
  };
};

// Usage
const admin = createUser('Alice', 'Admin');
console.log(admin.getProfile());
```

Use code with caution.

### 4. Monads / Pipelines (Function Composition & Chaining)

Instead of maintaining mutable internal state inside a single massive class instance, FP pipelines chain single-purpose operations together using pipelines or custom container structures (often referred to as **Monads** or Pipe operators). [link](https://medium.com/@augustbright/a-couple-of-useful-functional-patterns-for-javascript-ebd1cacfb780)

javascript

```
// Simple utility pipe function
const pipe = (...fns) => (x) => fns.reduce((v, f) => f(v), x);

// Small, pure operations
const trim = (str) => str.trim();
const capitalize = (str) => str.toUpperCase();
const exclaim = (str) => `${str}!`;

// Composed Pipeline
const formatAlert = pipe(trim, capitalize, exclaim);

// Usage
console.log(formatAlert('   system error   ')); // "SYSTEM ERROR!"
```

Use code with caution.

### 5. Memoization Pattern (Caching Pure Functions)

Because functional programming prioritizes **pure functions** (which always yield the exact same output for a given input), caching execution results becomes trivial. The memoization pattern intercepts execution to pull results from an internal cache. [link](https://medium.com/@augustbright/a-couple-of-useful-functional-patterns-for-javascript-ebd1cacfb780)

javascript

```
const memoize = (fn) => {
  const cache = new Map();

  return (...args) => {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key); // Return cached result
    }

    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
};

// Expensive calculation
const slowSquare = (n) => {
  // Pretend this takes massive CPU cycles
  return n * n;
};

const fastSquare = memoize(slowSquare);
fastSquare(10); // Calculated
fastSquare(10); // Retrieved from cache immediately
```

Use code with caution.

***

### Direct Summary Comparison

| Pattern Name  | Object-Oriented Approach (OOP)                           | Functional Approach (FP)                             |
| ------------- | -------------------------------------------------------- | ---------------------------------------------------- |
| **Strategy**  | Classes implementing a shared structural Interface.      | Passing raw functions directly into arguments.       |
| **Decorator** | Wrapping an instance with a decorator sub-class wrapper. | Passing a function through a Higher-Order Function.  |
| **Factory**   | Creators instantiated to yield specific class instances. | Standard functions returning frozen object literals. |

Would you like to dive deeper into one of these specific patterns, or see how to handle asynchronous data workflows using **Functional Reactive Programming (FRP)** patterns?

- [link](https://dev.to/patferraggi/do-you-need-design-patterns-in-functional-programming-370c)\
  DEV Community\
  Do you need Design Patterns in Functional Programming?\
  Sep 6, 2020 — Introduction Since the ending of last year, I have been getting into Functional Programming(FP), I am still very bad at it. I find...
- [link](https://dev.to/twinfred/design-patterns-in-javascript-1l2l)\
  DEV Community\
  Design Patterns In JavaScript - DEV Community\
  So, based on the way the pattern is implemented in the Lambda Test post, it seems like the name is perfect. It is literally a patt...
- [link](https://fsharpforfunandprofit.com/fppatterns/)\
  F# for fun and profit\
  Functional Programming Design Patterns | F# for fun and profit\
  Nov 24, 2014 — Functional Programming Design Patterns. Slides and video from my talk. This page contains links to the slides and code from my tal...

Show all

# 