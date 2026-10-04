# multiple unordered optional param example in different pl

## multiple unordered optional param example in different pl

To achieve **multiple unordered optional parameters**, <mark>a programming language must support<span> </span><strong>named arguments</strong><span> </span>(keyword arguments) alongside default values</mark>. Without named arguments, you are forced to pass arguments in the exact position they are defined. [link](https://www.youtube.com/watch?v=a4H%5FXCrKvj8\&t=1)

Here is how different programming languages implement this feature, or work around it if they don't natively support it.

***

### 1. Python (Native Support)

Python has first-class support for keyword arguments (`kwargs`). You can define default values and call them in any order by specifying the parameter name. [link](https://stackoverflow.com/questions/56882413/multiple-optional-parameters-it-is-possible-to-use-different-order)

python

```
def configure_user(name, role="Guest", active=True, theme="Light"):
    print(f"{name}: {role}, Active: {active}, Theme: {theme}")

# Order does not matter, and you can skip parameters
configure_user("Alice", theme="Dark", active=False)
```

Use code with caution.

### 2. JavaScript / TypeScript (Object Destructuring)

JavaScript doesn't have named arguments natively, but it achieves the exact same result cleanly using **Object Destructuring**. By passing a single object and assigning defaults inside the destructuring syntax, you get unordered optional parameters. [link](https://bagusbudicahyono.medium.com/a-better-approach-to-organize-optional-function-parameter-in-javascript-6c8fc516d593)

javascript

```
function configureUser(name, { role = "Guest", active = true, theme = "Light" } = {}) {
    console.log(`${name}: ${role}, Active: ${active}, Theme: ${theme}`);
}

// Pass an object with only the properties you want to override, in any order
configureUser("Bob", { theme: "Dark", active: false });
```

Use code with caution.

### 3. C# (Native Named Arguments)

C# supports both optional parameters (using `=` syntax) and named arguments (using the `parameterName:` syntax). [link](https://medium.com/@virat.ayush.58/a-deep-dive-into-optional-parameters-in-c-simplifying-method-calls-with-flexibility-c100fa966b78)

csharp

```
void ConfigureUser(string name, string role = "Guest", bool active = true, string theme = "Light")
{
    Console.WriteLine($"{name}: {role}, Active: {active}, Theme: {theme}");
}

// Call using named arguments to skip or reorder parameters
ConfigureUser("Charlie", theme: "Dark", active: false);
```

Use code with caution.

### 4. Java (The Builder Pattern workaround)

Java **does not support** named or optional parameters natively. If you have multiple optional parameters, the standard workaround is to use the **Builder Pattern**. [link](https://stackify.com/optional-parameters-java/)

java

```
public class UserConfiguration {
    private final String name; // Required
    private String role = "Guest"; // Optional
    private boolean active = true; // Optional
    private String theme = "Light"; // Optional

    private UserConfiguration(Builder builder) {
        this.name = builder.name;
        this.role = builder.role;
        this.active = builder.active;
        this.theme = builder.theme;
    }

    public static class Builder {
        private final String name;
        private String role = "Guest";
        private boolean active = true;
        private String theme = "Light";

        public Builder(String name) { this.name = name; }
        public Builder role(String role) { this.role = role; return this; }
        public Builder active(boolean active) { this.active = active; return this; }
        public Builder theme(String theme) { this.theme = theme; return this; }
        public UserConfiguration build() { return new UserConfiguration(this); }
    }
}

// Usage: Fluent API allows setting optional parameters in any order
UserConfiguration user = new UserConfiguration.Builder("Diana")
    .theme("Dark")
    .active(false)
    .build();
```

Use code with caution.

***

### Direct Comparison

| Language       | Native Syntax        | Order-Independent?      | Workaround Required?              |
| -------------- | -------------------- | ----------------------- | --------------------------------- |
| **Python**     | `param=default`      | Yes (via `name=value`)  | No                                |
| **JavaScript** | Object Destructuring | Yes (via object keys)   | No (Idiomatic pattern)            |
| **C#**         | `param = default`    | Yes (via `name: value`) | No                                |
| **Java**       | Not supported        | No                      | Yes (Builder Pattern / Overloads) |

Would you like to see how to implement this in a **different programming language** (like Go, Rust, or C++), or do you need help **refactoring a specific function** you are currently writing?

- [link](https://stackoverflow.com/questions/56882413/multiple-optional-parameters-it-is-possible-to-use-different-order)\
  Stack Overflow\
  Multiple optional parameters: it is possible to use different order?\
  Yes, you can! You just need to add the parameter names to your arguments to indicate which one you are passing the arguments to: M...
- [link](https://www.youtube.com/watch?v=a4H%5FXCrKvj8\&t=1)\
  YouTube·TutorialGenius.com\
  18-1. Named and Optional Parameters | C# Programming for ...\
  Mar 7, 2023 — Optional parameters allow you to define a default value for a parameter in a method signature. appear after all required parameter...\
  9m
- [link](https://stackoverflow.com/questions/79836759/how-can-i-use-multiple-optional-parameters)\
  Stack Overflow\
  How can I use multiple optional parameters?\
  Dec 3, 2025 — I want the user to have the option to pass in parameters for each model individually but otherwise enter default parameters.

Show all

## ruby

### Ruby (Native Support)

Ruby has <mark>excellent native support for unordered optional parameters using<span> </span><strong>Keyword Arguments</strong></mark>. You can assign default values using a colon (`:`) syntax, allowing you to pass them in any order or omit them entirely.

ruby

```
def configure_user(name, role: "Guest", active: true, theme: "Light")
  puts "#{name}: #{role}, Active: #{active}, Theme: #{theme}"
end

# Order does not matter, and you can skip parameters
configure_user("Elena", theme: "Dark", active: false)
```

Use code with caution.

### Key Features in Ruby:

- **Required Keywords:** If you want a keyword argument to be _required_ instead of optional, simply omit the default value (e.g., `def configure_user(name:, role: "Guest")`).
- **Double Splat Operator (`**`):** You can capture any arbitrary, unexpected keyword arguments by using `\*\*options` at the end of your parameter list.

Would you like to see how Ruby handles **required keyword arguments**, or are you looking to implement this pattern in **another language**?

## haskell

### Haskell (Workaround Required)

Haskell **does not natively support** named arguments or traditional optional parameters because functions are curried by default (arguments must be passed in a specific position).

To achieve unordered optional parameters, Haskell developers use three primary workarounds: **Record Syntax**, **Algebraic Data Types (ADTs)**, or **Type Classes** (like the _Optional_ pattern).

***

### Method 1: The Record Pattern (Most Common)

The most standard and idiomatic way is to pass a single config record. You define a `defaultConfig` object and use **Record Update Syntax** to override only the fields you care about in any order.

haskell

```
-- Define the configuration record
data UserConfig = UserConfig
  { role   :: String
  , active :: Bool
  , theme  :: String
  } deriving Show

-- A default instance serving as the baseline
defaultConfig :: UserConfig
defaultConfig = UserConfig
  { role = "Guest"
  , active = True
  , theme = "Light"
  }

-- The function taking the required name and the optional config record
configureUser :: String -> UserConfig -> IO ()
configureUser name config =
  putStrLn $ name ++ ": " ++ role config ++
             ", Active: " ++ show (active config) ++
             ", Theme: " ++ theme config

main :: IO ()
main = do
  -- Unordered & optional: modify only what you need from the default
  let myConfig = defaultConfig { theme = "Dark", active = False }
  configureUser "Felix" myConfig
```

Use code with caution.

***

### Method 2: Monoid / Identity Pattern (Using `Maybe`)

If you want to explicitly signal whether a parameter was provided or not without providing a hardcoded default record upfront, you can pass a record wrapped in `Maybe` values and resolve them using the `Alternative` operators.

haskell

```
import Data.Maybe (fromMaybe)

data OptionalParams = OptionalParams
  { optRole   :: Maybe String
  , optActive :: Maybe Bool
  , optTheme  :: Maybe String
  }

-- Empty structure representing "no changes"
emptyParams :: OptionalParams
emptyParams = OptionalParams Nothing Nothing Nothing

configureUserMaybe :: String -> OptionalParams -> IO ()
configureUserMaybe name opts = do
  let role   = fromMaybe "Guest" (optRole opts)
      active = fromMaybe True    (optActive opts)
      theme  = fromMaybe "Light" (optTheme opts)
  putStrLn $ name ++ ": " ++ role ++ ", Active: " ++ show active ++ ", Theme: " ++ theme

main :: IO ()
main = do
  -- Update syntax allows modifying only specific parameters
  configureUserMaybe "Grace" emptyParams { optTheme = Just "Dark", optActive = Just False }
```

Use code with caution.

***

### Quick Comparison to Other PLs

- **Unlike Python or Ruby:** You cannot pass keywords directly in the function call syntax like `configureUser "Felix" theme="Dark"`.
- **Like JavaScript:** It leverages object/record syntax to simulate named arguments, though Haskell ensures complete type safety at compile time.

Would you like to see how this problem is tackled using **advanced type-level techniques** (like the `OverloadedLabels` language extension) in Haskell, or do you want to jump to **another language**?

## how does it work in py and rb

In both Python and Ruby, <mark>unordered optional parameters work by turning arguments into<span> </span><strong>key-value pairs</strong><span> </span>(like a dictionary or hash) behind the scenes, matching them by their name rather than their position in the function call</mark>.

Here is exactly how they handle this under the hood.

***

### 1. In Python: Dictionary Mapping (`kwargs`)

Python uses **keyword arguments**. When a function executes, Python maps named arguments directly to their parameter variables or packs them into a standard dictionary.

#### The Code

python

```
def configure_user(name, role="Guest", active=True, theme="Light"):
    pass

configure_user("Alice", theme="Dark", active=False)
```

Use code with caution.

#### How it works under the hood:

1. **Positional Resolution First:** Python looks at `"Alice"` and maps it to the first parameter, `name`, because it has no keyword attached.
2. **Keyword Evaluation:** Python evaluates `theme="Dark"` and `active=False`. It checks if those parameter names exist in the function signature. Because they do, it assigns the values directly to those specific variables, ignoring the order they were typed in.
3. **Default Filling:** Python detects that `role` was omitted. It automatically fills it in with the pre-compiled default value `"Guest"`.
4. **The `**kwargs` Mechanism:** If you use a double-asterisk (`def func(\*\*kwargs)`), Python dynamically creates a real dictionary containing all unmatched keyword arguments.

***

### 2. In Ruby: Symbol-Keyed Hashes

Ruby achieves this using **Keyword Arguments** (introduced in Ruby 2.0 and strictly isolated in Ruby 3.0). Historically, Ruby simulated this by passing a single `Hash` object as the last argument; modern Ruby optimizes this but conceptually treats keywords like **Symbol keys**.

#### The Code

ruby

```
def configure_user(name, role: "Guest", active: true, theme: "Light")
end

configure_user("Elena", theme: "Dark", active: false)
```

Use code with caution.

#### How it works under the hood:

1. **Syntactic Isolation:** The parameters with colons (`role:`, `active:`, `theme:`) are explicitly flagged as keyword parameters.
2. **Symbol Mapping:** When you call `theme: "Dark"`, Ruby interprets `theme:` as a Symbol key (`:theme`). It searches the method's keyword table for a matching symbol.
3. **Order Independence:** Because it is doing a hash/table lookup by symbol name rather than counting positions from left to right, the order in which you pass them doesn't matter.
4. **The `**` (Double Splat) Mechanism:** Similar to Python, if a user passes unexpected keywords, they can be captured into a standard Ruby Hash using the double splat operator (`def func(\*\*options)`).

***

### Core Mechanics Comparison

| Feature                | Python                              | Ruby                                 |
| ---------------------- | ----------------------------------- | ------------------------------------ |
| **Lookup Mechanism**   | Variable assignment by string/name  | Keyword table lookup by Symbol key   |
| **Fallback Capture**   | Dict (`**kwargs`)                   | Hash (`**options`)                   |
| **Enforcing Keywords** | Use `*` separator (`def f(*, a=1)`) | Omit the default value (`def f(a:)`) |

Would you like to see how to enforce **keyword-only** arguments in Python and Ruby so that positional arguments are strictly banned, or should we look at how **performance** differs between the two?

## can you pass positional args

<mark><span>Yes, you can pass positional arguments in both languages</span></mark>, but **how they mix** with optional keyword parameters depends entirely on the language rules.

Here is exactly how positional arguments interact with optional parameters in Python and Ruby.

***

### 1. In Python: Flexibly (With Restrictions)

By default, Python allows you to pass regular arguments **either** positionally or by keyword. However, once you use a keyword argument, **all arguments to the right of it must also be keyword arguments.**

python

```
def configure_user(name, role="Guest", active=True, theme="Light"):
    print(f"{name}: {role}, {active}, {theme}")

# ✅ Valid: Mixing positional and keyword (Python resolves "Guest" positionally)
configure_user("Alice", "Guest", theme="Dark")

# ❌ SyntaxError: Positional argument follows keyword argument
# configure_user("Alice", role="Guest", "Dark")
```

Use code with caution.

#### Enforcing Restrictions (`/` and `*`)

Python allows you to strictly control which arguments can be passed positionally using special separators:

- **`/` (Positional-Only):** Arguments to the _left_ of `/` cannot be called with keywords.
- **`*` (Keyword-Only):** Arguments to the _right_ of `*` cannot be passed positionally.

python

```
# 'name' MUST be positional | 'theme' MUST be a keyword argument
def configure_user(name, /, role="Guest", *, theme="Light"):
    pass

configure_user("Alice", theme="Dark") # ✅ Valid
# configure_user(name="Alice", theme="Dark") # ❌ TypeError: positional-only argument passed as keyword
```

Use code with caution.

***

### 2. In Ruby: Strictly Separated

Historically, Ruby allowed messy mixing of positional arguments and hashes. However, **Ruby 3.0 strictly separated positional and keyword arguments**. Positional arguments must always come first, and they can never satisfy a keyword parameter slot.

ruby

```
def configure_user(name, role = "Guest", active: true, theme: "Light")
  puts "#{name}: #{role}, #{active}, #{theme}"
end

# ✅ Valid: Positional arguments come first, followed by keywords
configure_user("Elena", "Admin", theme: "Dark")

# ❌ ArgumentError: Ruby will treat "Dark" as a positional argument, but the
# method only expects 1 or 2 positional arguments (name, role).
# configure_user("Elena", theme: "Dark", "Admin")
```

Use code with caution.

#### Enforcing Restrictions (`*` and `**`)

- **Positional-Only:** Ruby does not have a native `/` operator like Python to ban keyword syntax on regular variables. However, any argument defined without a trailing colon (like `name`) accepts positional values.
- **Keyword-Only:** To force arguments to be keyword-only, you simply use the colon syntax (`role:`). If you want _no_ positional arguments at all, you can use a lone splat (`*`):

ruby

```
# This function accepts ZERO positional arguments; everything must be a keyword
def configure_user(*, name:, theme: "Light")
  pass
end

configure_user(name: "Elena", theme: "Dark") # ✅ Valid
# configure_user("Elena", theme: "Dark")      # ❌ ArgumentError: wrong number of arguments
```

Use code with caution.

***

### Quick Comparison

| Rule                                         | Python                                         | Ruby                                                                              |
| -------------------------------------------- | ---------------------------------------------- | --------------------------------------------------------------------------------- |
| **Can mix them?**                            | Yes, but positional arguments must come first. | Yes, but positional arguments must come first.                                    |
| **Can a positional param accept a keyword?** | **Yes** by default (unless `/` is used).       | **No**. Positional and keywords are strictly separated.                           |
| **Banning keyword usage**                    | Use the `/` separator.                         | Not natively supported (positional parameters can always be called positionally). |
| **Banning positional usage**                 | Use the `*` separator.                         | Define parameters with a trailing `:` (e.g., `param:`).                           |

Would you like to see how **argument unpacking** (passing a list/array positionally using `*` or `*args`) behaves alongside these optional keyword parameters?

## does the default value on fn definition matter on how it can be called

Yes, **absolutely**. <mark>The presence—and the way you define—a default value completely dictates how a function can be called</mark>.

Here is exactly how default values change the calling rules in both languages.

***

### 1. In Python: Defining Default vs. No Default

In Python, any parameter without a default value is **required**. Any parameter with a default value becomes **optional**.

However, Python enforces a strict structural rule: **All required parameters must be placed before optional parameters** in the function definition.

python

```
# ✅ Valid: Required first, then optional
def greet(name, message="Hello"):
    pass

greet("Alice") # ✅ Valid

# ❌ SyntaxError: non-default argument follows default argument
def greet(message="Hello", name):
    pass
```

Use code with caution.

#### The "Keyword-Only" Escape Hatch (`*`)

If you want to have an optional parameter followed by a required parameter, you **must** use the `*` separator. This forces the subsequent required parameter to be called as a **keyword-only** argument.

python

```
# ✅ Valid because '*' separates them
def greet(message="Hello", *, name):
    pass

greet(name="Alice") # ✅ Valid (message defaults to "Hello")
# greet("Alice")    # ❌ TypeError: missing 1 required keyword-only argument: 'name'
```

Use code with caution.

***

### 2. In Ruby: The "Optional" Syntax Controls the Call Type

In Ruby, how you write the default value dictates whether the argument must be passed **positionally** or **by keyword**.

- **`param = default` (Optional Positional):** Can only be filled by order/position.
- **`param:` (Required Keyword):** No default value, but _must_ be called by name.
- **`param: default` (Optional Keyword):** Has a default value, and _must_ be called by name.

ruby

```
# Mixing all three types
def configure(name, role = "Guest", status:, theme: "Light")
  # name:   Required Positional
  # role:   Optional Positional
  # status: Required Keyword (No default, but must use 'status:')
  # theme:  Optional Keyword
end

# Calling it correctly:
configure("Alice", status: "Active")
# ✅ 'name' gets "Alice", 'role' defaults to "Guest", 'theme' defaults to "Light"
```

Use code with caution.

Unlike Python, Ruby allows you to place optional positional arguments _before_ required positional arguments, though it can lead to confusing code because Ruby will try to greedily map arguments from left to right.

***

### Direct Rule Comparison

| Behavior                           | Python                                                                 | Ruby                                                                                               |
| ---------------------------------- | ---------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| **Omitting a value**               | Parameter is strictly required.                                        | If it has a `:`, it is a **required keyword**. Otherwise, it's a **required positional** argument. |
| **Adding `=` or `:` with a value** | Parameter becomes optional.                                            | `=` makes it an optional positional. `:` makes it an optional keyword.                             |
| **Order Restrictions**             | Required parameters must come before optional ones (unless using `*`). | Highly flexible, but positional arguments must always be typed before keyword arguments.           |

Would you like to look at how **mutable default values** (like passing an empty list `=[]` or hash `={}`) can cause tricky bugs in Python vs. Ruby, or do you have a **specific function signature** you are trying to design right now?

## pros cons in pl design

When designing a programming language, deciding how to implement **multiple unordered optional parameters** involves a direct trade-off between **developer expressiveness** and **compiler/runtime simplicity**.

Here is a breakdown of the architectural **pros and cons** of the different language design approaches.

***

### Approach 1: Native Keyword Arguments (Python, Ruby, Swift, C#)

The language engine explicitly maps arguments to parameters using string or symbol identifiers rather than memory layout positions.

- **🚀 Pros:**
  - **Self-Documenting Code:** Calls like `configure(theme: "Dark", active: false)` are immediately readable without checking the source definition.
  - **Immune to Argument Order Swaps:** Developers can reorder parameters in the function definition later without breaking client code (as long as names don't change).
  - **Perfect for Complex APIs:** Ideal for UI frameworks or configuration objects with dozens of configuration knobs.
- **⚠️ Cons:**
  - **Name Lock-in:** Parameter names become a strict part of the public API. If a language designer renames a parameter from `active` to `isEnabled`, it introduces a **breaking change** for users.
  - **Runtime/Compile Overhead:** The engine must perform dictionary lookups (by string or symbol) instead of simple, fast pointer offsets to find where an argument lives in memory.

***

### Approach 2: Object / Record Passing (JavaScript, TypeScript, Haskell)

The language completely avoids named parameters. Instead, it forces developers to pass a **single structured object, dictionary, or record literal** as a single positional argument.

- **🚀 Pros:**
  - **Language Simplicity:** The language grammar remains simple. It doesn't need complex syntax rules for keyword mixing, positional boundaries, or explicit keyword separators (like Python's `/` and `*`).
  - **Easily Extensible:** Passing a configuration object makes it easy to forward parameters across multiple function layers (e.g., `apiCall(options) -> formatData(options) -> save(options)`).
- **⚠️ Cons:**
  - **Boilerplate and Defaults Burden:** The language must rely on syntactic sugar (like JS destructuring) or manual fallback resolution (like Haskell's `fromMaybe` or JS `|| default`) to handle omitted fields cleanly.
  - **Allocation Overhead:** Calling a function forces the runtime to allocate a temporary object or map in memory just to pass arguments, which can hurt performance in tight loops.

***

### Approach 3: Strict Positional Only (Java, Go, C)

The language forces a strict 1-to-1 mapping based solely on the positional order of elements in memory.

- **🚀 Pros:**
  - **Blazing Fast Performance:** The compiler knows exactly which CPU register or stack offset holds each argument. There are zero name lookups or object allocations.
  - **Refactoring Freedom:** Developers can rename parameters inside the function at any time without breaking anyone else's code.
- **⚠️ Cons:**
  - **The "Boolean Trap":** Calls look like `configure("Alice", "Guest", true, false)`. It is impossible to know what `true` and `false` mean without a tool tip or reading documentation.
  - **Overloading Explosion:** To support optional parameters, languages like Java require multiple function overloads (e.g., `func(a)`, `func(a, b)`, `func(a, b, c)`), leading to massive boilerplate.

***

### Summary Table for Language Designers

| Approach                          | Performance                 | API Stability                  | Code Readability | Implementation Complexity       |
| --------------------------------- | --------------------------- | ------------------------------ | ---------------- | ------------------------------- |
| **Native Keywords** (Python/Ruby) | 🔴 Slower (lookups)         | 🟡 Rigid (Names locked)        | 🟢 Excellent     | 🔴 High                         |
| **Record Passing** (JS/Haskell)   | 🟡 Medium (Allocations)     | 🟡 Rigid (Keys locked)         | 🟢 Great         | 🟢 Low (Uses existing features) |
| **Strict Positional** (Java/Go)   | 🟢 Fastest (Direct offsets) | 🟢 Flexible (Internal renames) | 🔴 Poor          | 🟢 Lowest                       |

If you are designing a language or architecture right now, let me know:

- What is the **primary goal** of your language? (High performance, developer ergonomics, or strict type safety?)
- Is it **compiled or interpreted**?

I can help you sketch out the exact syntax or parsing rules that fit your design goals.

## what about go and rust

<mark><span>Both<span> </span></span><strong>Go</strong><span> </span>and<span> </span><strong>Rust</strong><span> </span>chose a<span> </span><strong>Strict Positional Only</strong><span> </span>design approach</mark>. Neither language supports native keyword arguments or native optional parameters.

The language designers of both Go and Rust intentionally omitted these features to keep the language grammars simple, avoid runtime name-lookup overhead, and maintain strict type safety.

However, because developers still need to handle multiple unordered optional parameters, both ecosystems have evolved distinct, highly idiomatic workarounds.

***

###

### 1. Go (Golang) Idiomatic Patterns

Go favors simplicity above all else. Because Go does not support function overloading or default arguments, developers rely on two primary patterns: **Option Structs** and **Functional Options**.

#### Pattern A: The Options Struct (Simple)

You pass a configuration struct where omitted fields default to their type's "zero value" (`""`, `0`, `false`).

go

```
type Config struct {
    Role   string // Defaults to ""
    Active bool   // Defaults to false
    Theme  string // Defaults to ""
}

func ConfigureUser(name string, cfg Config) {
    // Manually handle zero-value fallbacks if needed
    if cfg.Role == "" {
        cfg.Role = "Guest"
    }
    // ...
}

func main() {
    // Unordered and optional: specify only what you want
    ConfigureUser("Ivan", Config{Theme: "Dark"})
}
```

Use code with caution.

#### Pattern B: Functional Options (Advanced & Idiomatic)

For robust APIs (like setting up web servers or database connections), the Go community widely uses the **Functional Options Pattern**. It uses closures to modify a configuration state dynamically.

go

```
type User struct {
    name, role, theme string
    active            bool
}

// Define a type for the modifier function
type Option func(*User)

// Functions that return an Option closure
func WithRole(r string) Option  { return func(u *User) { u.role = r } }
func WithActive(a bool) Option  { return func(u *User) { u.active = a } }
func WithTheme(t string) Option  { return func(u *User) { u.theme = t } }

func NewUser(name string, opts ...Option) *User {
    // Set up default configuration
    u := &User{name: name, role: "Guest", active: true, theme: "Light"}

    // Apply every provided option in order
    for _, opt := range opts {
        opt(u)
    }
    return u
}

func main() {
    // Completely optional, unordered, and self-documenting
    user := NewUser("Ivan", WithTheme("Dark"), WithActive(false))
}
```

Use code with caution.

***

###

### 2. Rust Idiomatic Patterns

Rust emphasizes absolute safety and zero-cost abstractions. Because it has no native optional arguments, the community relies heavily on the **Builder Pattern** or the `Default` trait.

#### Pattern A: The Builder Pattern (Most Common)

Rust leverages its powerful type system and method chaining to create fluent builder structures. This incurs zero runtime performance penalty.

rust

```
#[derive(Debug)]
pub struct UserConfig {
    name: String,
    role: String,
    active: bool,
    theme: String,
}

pub struct UserConfigBuilder {
    name: String,
    role: String,
    active: bool,
    theme: String,
}

impl UserConfigBuilder {
    pub fn new(name: String) -> Self {
        UserConfigBuilder {
            name,
            role: String::from("Guest"),
            active: true,
            theme: String::from("Light"),
        }
    }

    pub fn role(mut self, role: String) -> Self { self.role = role; self }
    pub fn active(mut self, active: bool) -> Self { self.active = active; self }
    pub fn theme(mut self, theme: String) -> Self { self.theme = theme; self }

    pub fn build(self) -> UserConfig {
        UserConfig { name: self.name, role: self.role, active: self.active, theme: self.theme }
    }
}

fn main() {
    // Unordered, optional chaining
    let config = UserConfigBuilder::new(String::from("Jack"))
        .theme(String::from("Dark"))
        .active(false)
        .build();
}
```

Use code with caution.

#### Pattern B: Struct Update Syntax with `Default`

If a struct implements the `Default` trait, Rust provides a built-in syntactic sugar (the `..` operator) to fill in omitted fields with their defaults, mimicking JavaScript's spread or Haskell's record updates.

rust

```
struct UserConfig {
    role: String,
    active: bool,
    theme: String,
}

impl Default for UserConfig {
    fn default() -> Self {
        UserConfig {
            role: String::from("Guest"),
            active: true,
            theme: String::from("Light"),
        }
    }
}

fn configure_user(name: &str, config: UserConfig) { /* ... */ }

fn main() {
    // Explicitly override specific fields, pull the rest from defaults
    configure_user("Jack", UserConfig {
        theme: String::from("Dark"),
        ..Default::default()
    });
}
```

Use code with caution.

***

###

### Pros & Cons in Go vs. Rust Design

- **Go's Trade-off:** By keeping the language simple, Go avoids complex compiler optimizations for syntax sugar. However, patterns like **Functional Options** add boilerplate that developers must write manually for every major configurable entity.
- **Rust's Trade-off:** The compiler handles patterns like **Struct Update Syntax** safely and with zero runtime cost. However, implementing the full **Builder Pattern** manually requires a lot of structural code duplication (though many developers use crates like [derive\_builder](https://crates.io/crates/derive%5Fbuilder) to auto-generate this code via macros).

If you are weighing these choices for your own project, tell me:

- Are you writing an **application API** where developer ergonomics matter most?
- Or are you building a **low-level system** where memory allocation costs are critical?

I can help you choose or generate the ideal pattern for your specific use case.

