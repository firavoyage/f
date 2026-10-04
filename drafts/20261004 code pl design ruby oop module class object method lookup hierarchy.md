# concepts in ruby

**Ruby is a pure, open-source, object-oriented programming language** designed by Yukihiro "Matz" Matsumoto with the philosophy of making programmers happy and code highly readable. In Ruby, <mark><strong>everything is an object</strong>—including primitive numbers, strings, and even classes themselves</mark>. [link](https://www.reddit.com/r/ruby/comments/10qoefl/if%5Fyou%5Fwant%5Fto%5Flearn%5Foop%5Flearn%5Fruby%5Fsome%5Fcomments/)

Understanding Ruby involves mastering its unique combination of expressive syntax, Object-Oriented Programming (OOP) fundamentals, and advanced meta-programming capabilities.

***

### 1. The Core Fundamentals

- **Implicit Returns**: Ruby methods automatically return the value of the last evaluated expression. You do not need to explicitly type `return`.
- **Truthiness**: Only `false` and `nil` are falsy in Ruby. Everything else (including `0`, empty strings `""`, and empty arrays `[]`) evaluates to true.
- **Dynamic Typing**: You do not declare variable types. Ruby determines types dynamically at runtime. [link](https://www.youtube.com/watch?v=zQJKDCsvhUk\&t=25)

### 2. Object-Oriented Pillars in Ruby

Because Ruby is purely object-oriented, it handles standard OOP design patterns seamlessly: [link](https://medium.com/@andrewowino/basic-concepts-of-object-oriented-programming-oop-in-ruby-6c628aba814b)

- **Encapsulation**: Object state is securely stored inside instance variables (prefixed with `@`, like `@name`). To read or write them from outside the object, Ruby uses getter/setter methods, typically streamlined via attributes: `attr_reader`, `attr_writer`, or `attr_accessor`.
- **Single Inheritance**: A class can inherit behavior from exactly one superclass using the `<` symbol (e.g., `class Dog < Animal`).
- **Polymorphism**: Different objects can respond to the exact same method call in their own unique way. [link](https://medium.com/launch-school/the-basics-of-oop-ruby-26eaa97d2e98)

### 3. Ruby-Specific Crucial Concepts

#### Blocks, Procs, and Lambdas (Closures)

Ruby handles chunks of code that can be passed around using three closely related structures:

- **Blocks**: A block is a piece of code enclosed by `do...end` or `{...}`. They are passed to methods anonymously (e.g., `.each { |x| puts x }`).
- **Procs**: Short for _Procedures_. A Proc is a block bound to a local variable, turning it into a reusable object (e.g., `my_proc = Proc.new { puts "Hello" }`).
- **Lambdas**: A stricter type of Proc. Lambdas strictly enforce the number of arguments passed to them and handle the `return` keyword differently by passing execution back to the calling method rather than exiting it entirely. [link](https://www.pluralsight.com/paths/ruby-3)

#### Modules and Mixins

Ruby does not support multiple inheritance directly, but it solves this using **Modules**. Modules are collections of methods and constants that cannot be instantiated. [link](https://railsdrop.com/2025/05/19/mastering-rubys-core-concepts-modules-mixins-meta-programming/)

- **Include**: Injects the module’s methods as _instance methods_ inside a class. This approach is called a **Mixin**.
- **Extend**: Injects the module’s methods as _class methods_. [link](https://medium.com/launch-school/the-basics-of-oop-ruby-26eaa97d2e98)

#### Metaprogramming & Dynamic Methods

Ruby is famous for "code that writes code". Programs can alter their own structure and operations at runtime. [link](https://www.ruby-lang.org/en/documentation/ruby-from-other-languages/to-ruby-from-c-and-cpp/)

- **`method_missing`**: A fallback method invoked by Ruby when a called method does not exist. This is heavily utilized in frameworks like Ruby on Rails to dynamically generate database search helpers on the fly. [link](https://www.youtube.com/watch?v=PIWSQT-ujzU)
- **Singleton Classes (Eigenclasses)**: Ruby allows you to define methods that belong to one solitary object instance rather than the whole class. [link](https://railsdrop.com/2025/05/19/mastering-rubys-core-concepts-modules-mixins-meta-programming/)

***

### Direct Overview of Concepts

To understand how Ruby routes a simple instruction compared to how it handles class structures, notice the structural flow of execution when a class object uses a Mixin:

Would you like to dive deeper into one of these specific concepts, such as **how blocks and lambdas differ**, or see a **practical code example** of Modules and Mixins?

- [link](https://medium.com/launch-school/the-basics-of-oop-ruby-26eaa97d2e98)\
  Medium\
  The Basics of OOP Ruby. An overview of key concepts | by William Mills | Launch School | Medium\
  Core Concepts: Classes (blueprints for objects with states/attributes and behaviors/methods); Objects (basic building blocks stori...
- [link](https://www.reddit.com/r/ruby/comments/10qoefl/if%5Fyou%5Fwant%5Fto%5Flearn%5Foop%5Flearn%5Fruby%5Fsome%5Fcomments/)\
  Reddit\
  If you want to learn OOP, learn Ruby. -some comments about ...\
  "primitives" are mostly means basic numeric/byte data types. in ruby many "language structures" are objects too -- like Classes th...
- [link](https://www.youtube.com/watch?v=VmAwsJ2lfBY\&t=34)\
  YouTube·Edward Tanguay\
  Introduction to Object-Oriented Programming using Ruby\
  Jun 1, 2025 — Introduction to Object-Oriented Programming using Ruby the finished code is here in this repository. so if there's something that ...\
  20m

Show all

# ruby oop concepts

**Ruby is a pure object-oriented programming (OOP) language** where practically everything—including strings, numbers, arrays, and even classes themselves—is an object. [link](https://www.honeybadger.io/blog/ruby-object-model/)

***

### 🧱 The Core Building Blocks

#### 1. Classes and Objects

- **Class:** A reusable blueprint or template used to construct an object.
- **Object (Instance):** An individual, real-world entity generated from a class blueprint that contains its own specific data. [link](https://www.geeksforgeeks.org/ruby/object-oriented-programming-in-ruby-set-1/)

ruby

```
class Book
  # The constructor method called when you run Book.new
  def initialize(title, author)
    @title = title   # Instance variable
    @author = author # Instance variable
  end
end

# Creating an object (instantiation)
my_book = Book.new("POODR", "Sandi Metz")
```

Use code with caution.

#### 2. Variables and Scope

- **Instance Variables (`@name`):** Tied to a specific instance of an object. They are inaccessible from the outside world without getter and setter methods.
- **Class Variables (`@@count`):** Shared across the entire class and all of its subclasses. [link](https://www.codecademy.com/learn/learn-ruby/modules/learn-ruby-object-oriented-programming-part-i-u/cheatsheet)

#### 3. Attribute Accessors (Macros)

Instead of manually typing out getter and setter methods for every instance variable, Ruby provides convenient built-in macros: [link](https://www.geeksforgeeks.org/ruby/object-oriented-programming-in-ruby-set-1/)

- `attr_reader` : Creates a getter method (read-only).
- `attr_writer` : Creates a setter method (write-only).
- `attr_accessor` : Creates both getter and setter methods. [link](https://medium.com/launch-school/the-basics-of-oop-ruby-26eaa97d2e98)

***

### 🏛️ The 4 Pillars of OOP in Ruby

| Pillar            | What it Means                                                                                        | How Ruby Implements It                                                                           |
| ----------------- | ---------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| **Encapsulation** | Bundling data and methods together while hiding the inner workings from the outside world.           | Using `private` and `protected` access modifiers to control visibility.                          |
| **Inheritance**   | Allowing a subclass to inherit attributes and methods from a parent superclass to keep code DRY.     | Single inheritance via the `<` operator, and using the `super` keyword to invoke parent methods. |
| **Polymorphism**  | Giving a single interface (method name) the ability to trigger different underlying implementations. | Inheritance method overriding and Ruby's dynamic **Duck Typing**.                                |
| **Abstraction**   | Hiding complex execution details and only showing essential, high-level functionality.               | Exposing a clean public interface via methods, hiding background logic.                          |

***

### 🛠️ Code Examples for Each Pillar

#### 🔒 Encapsulation

By default, methods in Ruby are `public`. You can use access control modifiers to protect internal object behavior: [link](https://medium.com/@marwan.zaarab/rb120-oop-part-1-encapsulation-inheritance-and-polymorphism-179e095d26ba)

ruby

```
class BankAccount
  attr_reader :balance

  def initialize(amount)
    @balance = amount
  end

  def display_statement
    "Your balance is: $#{balance}. #{audit_log}"
  end

  private

  # Can only be called internally by this object
  def audit_log
    "[LOG] Statement accessed at #{Time.now}"
  end
end
```

Use code with caution.

#### 🌿 Inheritance & `super`

Ruby supports **single inheritance** (a class can only inherit directly from one parent class). [link](https://medium.com/launch-school/the-basics-of-oop-ruby-26eaa97d2e98)

ruby

```
class Animal
  def speak
    "Hello!"
  end
end

class Dog < Animal
  def speak
    # 'super' invokes the 'speak' method from Animal first
    super + " Woof!"
  end
end

puts Dog.new.speak # Output: "Hello! Woof!"
```

Use code with caution.

#### 🦆 Polymorphism & Duck Typing

Ruby is dynamically typed, leading to a core philosophy: _"If it walks like a duck and quacks like a duck, it's a duck."_ You don't need objects to share a parent class to achieve polymorphism; they just need to share a method name. [link](https://medium.com/launch-school/the-basics-of-oop-ruby-26eaa97d2e98)

ruby

```
class Car
  def drive
    "Driving a car on the road."
  end
end

class Boat
  def drive
    "Sailing a boat on the water."
  end
end

# A generic controller that doesn't care about the class type, only the capability
def operate_vehicle(vehicle)
  puts vehicle.drive
end

operate_vehicle(Car.new)  # Output: Driving a car on the road.
operate_vehicle(Boat.new) # Output: Sailing a boat on the water.
```

Use code with caution.

***

### 🧩 Modules and Mixins (Multiple Inheritance Bypass)

Because Ruby enforces single inheritance, it uses **Modules** to share behaviors across unrelated classes. When you import a module into a class using `include` or `prepend`, it is referred to as a **Mixin**. [link](https://launchschool.com/books/oo%5Fruby)

ruby

```
module Flyable
  def fly
    "I am flying high!"
  end
end

class Bird < Animal
  include Flyable # Mixin
end

class Airplane
  include Flyable # Mixin
end
```

Use code with caution.

Both `Bird` and `Airplane` can now call the `.fly` method, even though they belong to entirely different class inheritance hierarchies.

Would you like to explore a specific pillar in deeper detail, or see how **self** or **method lookup paths** work under the hood in Ruby's Object Model? [link](https://medium.com/launch-school/the-basics-of-oop-ruby-26eaa97d2e98)

- [link](https://medium.com/launch-school/the-basics-of-oop-ruby-26eaa97d2e98)\
  Medium\
  The Basics of OOP Ruby. An overview of key concepts | by William Mills | Launch School | Medium\
  Encapsulation (restricting access via public, private, protected methods and attribute methods like attr\_reader, attr\_writer, attr...
- [link](https://www.geeksforgeeks.org/ruby/object-oriented-programming-in-ruby-set-1/)\
  GeeksforGeeks\
  Object-Oriented Programming in Ruby | Set 1 - GeeksforGeeks\
  Access and modification methods read or update attributes, though attr\_reader, attr\_writer, and attr\_accessor provide shorthand ac...
- [link](https://www.youtube.com/watch?v=VmAwsJ2lfBY\&t=176)\
  YouTube·Edward Tanguay\
  Introduction to Object-Oriented Programming using Ruby\
  Jun 1, 2025 — Introduction to Object-Oriented Programming using Ruby um to solve most programming problems uh Ruby is designed to make programme...\
  4m

Show all

# compare ruby module and class

In Ruby, <mark><strong>every class is a module, but not every module is a class</strong></mark>. Under the hood, the `Class` class inherits directly from the `Module` class. This means classes inherit all the behavior of modules but add specialized features for object-oriented programming. [link](https://stackoverflow.com/questions/9054233/ruby-modules-and-classes)

Here is a direct comparison of their differences, use cases, and technical characteristics.

### Quick Comparison

| Feature             | Module (`module`)                                             | Class (`class`)                                         |
| ------------------- | ------------------------------------------------------------- | ------------------------------------------------------- |
| **Instantiation**   | ❌ **No**. Cannot create instances (`.new` doesn't work).     | **Yes**. Built specifically to instantiate objects.     |
| **Inheritance**     | ❌ **No**. Cannot inherit from another module or class.       | **Yes**. Inherits from a superclass using `<`.          |
| **Multiple Mixins** | **Yes**. A class/module can mix in **multiple** modules.      | ❌ **No**. Ruby only supports single class inheritance. |
| **Primary Intent**  | Sharing behaviors (mixins) and organizing code (namespacing). | Defining data structures, state, and identity.          |

***

### Core Conceptual Differences

#### 1. Identity ("Is A") vs. Ability ("Can Do")

- **Classes** define **what an object is**. They dictate identity and hold state (via instance variables).
- **Modules** define **what an object can do**. They are collections of standalone methods and constants injected into a class to give it functional abilities.
- _Example:_ A `Dog` **is a** type of `Animal` (Class Inheritance), but a `Dog` **can** `Swim` (Module Mixin). [link](https://www.ruby-lang.org/en/documentation/faq/8/)

#### 2. Namespacing vs. Object Blueprints

- **Modules** act as containers to prevent naming collisions. They let you group related classes, methods, or constants together safely.
- **Classes** act as specific blueprints to manufacture individual objects with unique states. [link](https://stackoverflow.com/questions/151505/difference-between-a-class-and-a-module)

***

### Code Examples

#### When to use a Module (Mixins & Namespaces)

Use a module when you have utilities or behaviors that multiple unrelated classes need to share. [link](https://dev.to/abbiecoghlan/class-inheritance-vs-modules-in-ruby-1fha)

ruby

```
# Module providing a "Mixin" ability
module Flyer
  def fly
    "I am flying high!"
  end
end

# Module serving as a Namespace
module Logistics
  class Drone
    include Flyer # Mixing in ability
  end
end

class Bird
  include Flyer   # The same ability shared with an unrelated class
end

# Usage
bird = Bird.new
puts bird.fly # => "I am flying high!"
```

Use code with caution.

#### When to use a Class (State & Instantiation)

Use a class when you need to maintain unique records, hold specific attributes, or initialize distinct data types. [link](https://stackoverflow.com/questions/151505/difference-between-a-class-and-a-module)

ruby

```
class User
  attr_reader :name

  def initialize(name)
    @name = name # Each instance tracks its own state
  end
end

# Usage
user1 = User.new("Alice")
user2 = User.new("Bob")
puts user1.name # => "Alice"
```

Use code with caution.

***

### Guidelines: When to choose which?

- **Choose a Class if:**
  - You need to create individual objects (`User.new`, `Product.new`).
  - You need to track unique individual state using `@instance_variables`.
  - You have a natural hierarchical structure (e.g., an `Admin` is a special type of `User`). [link](https://www.reddit.com/r/ruby/comments/9c8469/a%5Fmodule%5Fis%5Fa%5Fcollection%5Fof%5Fmethods%5Fand%5Fconstants/)
- **Choose a Module if:**
  - You are writing a collection of standalone utility methods (like `Math` or a string formatter).
  - You want to share a specific behavior across completely different, unrelated classes.
  - You want to group code into a clean package to avoid stepping on other libraries' class names. [link](https://stackoverflow.com/questions/151505/difference-between-a-class-and-a-module)

Are you trying to decide **how to architect a specific feature** in your current project? If you tell me **what kind of behavior or data** you're modeling, I can suggest the cleanest way to structure your modules and classes.

- [link](https://stackoverflow.com/questions/151505/difference-between-a-class-and-a-module)\
  Stack Overflow\
  Difference between a class and a module - ruby - Stack Overflow\
  Sep 30, 2008 — Comments. Add a comment. This answer is useful. 3. This answer is not useful. Save this answer. Loading when this answer was accep...
- [link](https://www.ruby-lang.org/en/documentation/faq/8/)\
  Ruby Programming Language\
  Classes and modules\
  What is the difference between a class and a module? Modules are collections of methods and constants. They cannot generate instan...
- [link](https://www.reddit.com/r/ruby/comments/9c8469/a%5Fmodule%5Fis%5Fa%5Fcollection%5Fof%5Fmethods%5Fand%5Fconstants/)\
  Reddit·r/ruby\
  A Module is a collection of methods and constants, but what ...\
  Sep 2, 2018 — Modules are a method of code reuse in Ruby. Ruby classes may add modules to their inheritance chain by include ing them, allowing ...

Show all

# ruby object method lookup hierarchy example

In Ruby, when you call a method on an object, Ruby traverses a strict, sequential path called the **ancestor chain** to find that method's definition. You can inspect this lookup order at any time by calling `Object#singleton_class.ancestors` on your instance. [link](https://www.honeybadger.io/blog/ruby-method-lookup/)

### The Core Lookup Order

From first checked to last, the method resolution path travels through: [link](https://www.honeybadger.io/blog/ruby-method-lookup/)

1. **Singleton Methods** (methods defined directly on that specific individual object)
2. **Prepended Modules** (modules added via `prepend`, which intercept the class's own methods)
3. **The Object's Class** (the standard instance methods defined inside its class)
4. **Included Modules** (modules added via `include`)
5. **Superclasses / Parent Classes** (bubbling up single-inheritance parents, repeating steps 2-4 for each parent)
6. **Object Class** (the base class for standard objects)
7. **Kernel Module** (automatically mixed into `Object`)
8. **BasicObject Class** (the root of all Ruby hierarchies) [link](https://www.leighhalliday.com/object-hierarchy-in-ruby)

_If it hits `BasicObject` and still hasn't found the method, Ruby starts the path all over again looking for `method_missing`._ [link](https://stackoverflow.com/questions/50286933/what-are-the-actual-steps-in-rubys-method-lookup)

***

### Comprehensive Code Example

Here is a full breakdown showing exactly how Ruby weaves classes, prepends, and includes together.

ruby

```
module Swimmable
  def move; "Swimming..."; end
end

module Flyable
  def move; "Flying..."; end
end

class Animal
  def move; "Moving like an animal..."; end
end

class Duck < Animal
  # Prepend inserts functionality BEFORE the Duck class itself
  prepend Flyable

  # Include inserts functionality AFTER the Duck class, but before the superclass
  include Swimmable

  def move
    "Waddling..."
  end
end

# 1. Create a specific instance
donald = Duck.new

# 2. Add a singleton method directly to 'donald'
def donald.move
  "Driving a cartoon car!"
end
```

Use code with caution.

### Visualizing the Hierarchy Chain

If we call `.ancestors` on `donald`'s singleton class, we can print the exact array of where Ruby looks first to last: [link](https://stackoverflow.com/questions/50286933/what-are-the-actual-steps-in-rubys-method-lookup)

ruby

```
puts donald.singleton_class.ancestors
```

Use code with caution.

**Output / Lookup Path:**

1. `#<Class:#<Duck:0x000...>>` _(The Singleton Class for this one specific object)_
2. `Flyable` _(Prepended Module overrides Duck)_
3. `Duck` _(The Instantiated Class)_
4. `Swimmable` _(Included Module)_
5. `Animal` _(The Superclass)_
6. `Object`
7. `Kernel`
8. `BasicObject` [link](https://bparanj.gitbooks.io/ruby-basics/content/chapter%5F8-2.html)

### Testing the Priority

If we evaluate `donald.move`, it will immediately return `"Driving a cartoon car!"` because the **Singleton Class** matches first. [link](https://www.naukri.com/code360/library/method-lookup-and-constant-lookup-in-ruby)

If we remove the singleton method, Ruby advances to step 2 and returns `"Flying..."` from `Flyable`. If we remove `Flyable`, it falls back to the class method (`"Waddling..."`), then down to `Swimmable`, and so on. [link](https://medium.com/@%5Fillusionist%5F/method-lookup-and-execution-in-ruby-63aae3b9f6fe)

Would you like to explore how the **`super` keyword** allows you to navigate up this chain, or see how **class-level methods** (rather than instance methods) change this hierarchy lookup?

- [link](https://www.honeybadger.io/blog/ruby-method-lookup/)\
  www.honeybadger.io\
  Understanding Ruby Method Lookup - Honeybadger Developer Blog\
  Ruby determines method execution by searching a structured hierarchy. prepended modules (inserted before the class); prepend inser...
- [link](https://noelrappin.com/2025/03/better-know-a-ruby-thing-method-lookup/)\
  noelrappin.com\
  Better Know A Ruby Thing: Method Lookup | Noel Rappin Writes Here\
  Mar 9, 2025 — Ruby traverses an object's ancestor list sequentially from \`r.singleton\_class.ancestors\`, checking each element for the method and...
- [link](https://stackoverflow.com/questions/50286933/what-are-the-actual-steps-in-rubys-method-lookup)\
  Stack Overflow\
  What are the \*actual\* steps in ruby's method lookup?\
  Ruby will start at the singleton\_class and work its way up the ancestors looking for that method. Using your diagram: fido.singlet...

Show all

# criticism on ruby object method lookup hierarchy

While Ruby’s **object method lookup hierarchy** provides immense dynamic power and architectural flexibility, it has faced notable criticism from language designers, enterprise developers, and performance engineers. [link](https://news.ycombinator.com/item?id=25158901)

The core of the criticism revolves around **unpredictability, runtime overhead, and cognitive fatigue**. [link](https://blog.headius.com/2012/09/avoiding-hash-lookups-in-ruby.html)

***

### 1. Performance Overhead ("Slow" by Design)

Because Ruby resolves methods dynamically at runtime, every method invocation kicks off a sequential search through a linked list of ancestors. [link](https://blog.headius.com/2012/09/avoiding-hash-lookups-in-ruby.html)

- **The "Tree of Hashes" problem:** Every class, module, and singleton class maintains its own internal method dictionary. If a method is defined deep in an inheritance tree or missing altogether, Ruby must traverse all the way up to `BasicObject`. [link](https://stackoverflow.com/questions/28359048/ruby-method-lookup-comparison-with-javascript)
- **Optimization Complexity:** To bypass this slow sequential traversal, production-grade Ruby engines (like YJIT or CRuby) must rely on highly complex caching mechanisms (like inline caching and global method caches). When code is dynamically altered, these caches invalidate, causing performance drops. [link](https://www.infoworld.com/article/2159005/avoiding-hash-lookups-in-a-ruby-implementation.html)

### 2. "Action at a Distance" and Invisible Classes

Ruby doesn't just look up standard classes; it injects implicit, hidden structures into the lookup chain. [link](https://stackoverflow.com/questions/28359048/ruby-method-lookup-comparison-with-javascript)

- **The Singleton Class (Eigenclass) Layer:** Every single object in Ruby has an unstated, lazily-allocated "singleton class" positioned right before its actual class in the lookup chain. This invisible layer can store unique overrides, making it difficult to inspect exactly where a method behaves uniquely at runtime. [link](https://medium.com/rubyinside/class-methods-in-ruby-a-thorough-review-and-why-i-define-them-using-class-self-af677ede9596)
- **Transclusion via Mixins:** When a module is brought in using `include` or `prepend`, Ruby creates internal virtual "include classes" (`ICLASS`) and stitches them directly into the ancestor chain. [link](https://news.ycombinator.com/item?id=25158901)

### 3. Collision and Shadowing in Large Taxonomies

Because multiple modules can be mixed into a single class hierarchy, the order of `include` and `prepend` dictates behavioral precedence. [link](https://blog.unathichonco.com/ruby-method-lookup-demystified-inheritance-mixins-and-super)

- **Linearization Flaws:** Unlike languages with true multiple inheritance that use explicit C3 linearization algorithms, Ruby relies on linear sequence tracking. If two distinct third-party modules define a method with the same name, whichever module was loaded last completely shadows the other without throwing a compiler warning or explicit error. This frequently introduces silent bugs in sprawling production systems like Ruby on Rails. [link](https://www.ruby-forum.com/t/ruby-method-lookup-flow/70379)

### 4. Code Comprehensibility and Tooling Issues

The extreme fluidity of the hierarchy reduces the capability of Static Analysis and Integrated Development Environments (IDEs). [link](https://news.ycombinator.com/item?id=25158901)

- **Static Blindness:** Since an object’s hierarchy can change dynamically at runtime via reflection (`Module#prepend`, monkey-patching, or opening classes), static analysis tools and IDEs often cannot reliably determine what code will actually execute when you command `object.method`.
- **The `method_missing` Black Hole:** If the search reaches the top of the hierarchy without a hit, Ruby runs the entire chain a second time looking for `method_missing`. Metaprogramming that abuses `method_missing` can create invisible dispatch logic, rendering standard stack traces and code navigation incredibly confusing. [link](https://www.linkedin.com/pulse/managing-method-lookup-chains-large-ruby-applications-david-raja-ahxgc)

***

### Comparison: Ruby Lookup vs. Other Paradigms

| Feature              | Ruby (`ancestors` chain)                                         | Prototype-based (JavaScript)                       | Multiple Inheritance (Python C3)                    |
| -------------------- | ---------------------------------------------------------------- | -------------------------------------------------- | --------------------------------------------------- |
| **Lookup Driver**    | Virtualized linear ancestor list (`ICLASS` & single inheritance) | Prototype delegation links (`__proto__`)           | Directed Acyclic Graph (DAG) using C3 Linearization |
| **Hidden Layers**    | Yes (Singleton classes, anonymous modules)                       | No (Direct prototype links)                        | No (Explicit MRO resolution)                        |
| **Failure Trapping** | Re-traverses tree for `method_missing`                           | Immediately returns `undefined` (raises TypeError) | Throws `AttributeError` at initial lookup point     |

Are you exploring this from a **performance optimization** perspective, or are you looking to resolve a specific **metaprogramming / debugging** issue in a codebase? Let me know and I can tailor the deep dive.

- [link](https://noelrappin.com/2025/03/better-know-a-ruby-thing-method-lookup/)\
  noelrappin.com\
  Better Know A Ruby Thing: Method Lookup | Noel Rappin Writes Here\
  Starts with the inheritance … inserting prepended modules before the class, included modules after the class, and refinements befo...
- [link](https://blog.headius.com/2012/09/avoiding-hash-lookups-in-ruby.html)\
  Headius Enterprises\
  Avoiding Hash Lookups in a Ruby Implementation\
  Sep 4, 2012 — Ruby's class hierarchy is essentially a tree of hash tables. This is also known as "slow". In Ruby, you do not declare ahead of ti...
- [link](https://news.ycombinator.com/item?id=25158901)\
  Hacker News\
  What I didn't know about Ruby Classes\
  Nov 21, 2020 — Ruby's flexibility makes it great for going fast and hacking things, crazy class hierarchies and transclusion, endpoints with refl...

Show all

