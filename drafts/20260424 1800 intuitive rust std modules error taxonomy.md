#

rust std modules

Quick results from the web:

[link](https://doc.rust-lang.org/std/)

**std** - Rust Documentation

**Modules' documentation** typically includes an overview of the module along with examples, and are a smart place to start familiarizing yourself with the library.

Rust Documentation·https://doc.rust-lang.org

[link](https://www.reddit.com/r/rust/comments/sg484i/rust%5Fhas%5Fa%5Fsmall%5Fstandard%5Flibrary%5Fand%5Fthats%5Fok/)

**Rust** has a small **standard** library (and that's ok) - Reddit

I think having a small stdlib is one of **Rust's** big advantages compared to for example Java and .NET. Both those **stdlibs** have collected a lot of cruft that ...

Reddit·https://www.reddit.com

The Rust Standard Library (`std`) is organized into focused modules that provide portable, battle-tested abstractions for core programming tasks. These modules serve as the foundation for nearly all Rust applications.

Rust Documentation +1

Key Modules and Functionalities

- **Data Structures & Collections**
  - **[`std::collections`](https://doc.rust-lang.org/std/collections/index.html)**: Provides efficient implementations for common data structures like `HashMap`, `BTreeMap`, `VecDeque`, `HashSet`, and `BinaryHeap`.
  - **[`std::vec`](https://doc.rust-lang.org/std/net/index.html)**: Defines the heap-allocated, resizable `Vec<T>`.
  - **[`std::string`](https://doc.rust-lang.org/std/sync/index.html)**: Implements the growable, UTF-8 encoded `String` type.
- **Error Handling & Control Flow**
  - **[`std::option`](https://doc.rust-lang.org/std/ops/index.html)**: Defines `Option<T>` for optional values.
  - **[`std::result`](https://doc.rust-lang.org/std/prelude/index.html)**: Defines `Result<T, E>` for error handling.
  - **`std::iter`**: Contains the `Iterator` trait and various adaptors for composable iteration.
- **I/O and System Interaction**
  - **[`std::io`](https://doc.rust-lang.org/std/io/index.html)**: Core traits like `Read`, `Write`, and `Seek` for standard input/output operations.
  - **[`std::fs`](https://doc.rust-lang.org/std/fs/index.html)**: Functionality for filesystem manipulation, including file creation, reading, and metadata.
  - **`std::env`**: Utilities for inspecting and manipulating the process's environment, such as arguments and environment variables.
  - **`std::net`**: Networking primitives for TCP and UDP communication.
- **Concurrency & Memory**
  - **`std::thread`**: Support for native threads.
  - **`std::sync`**: Synchronization primitives like `Mutex`, `Arc`, and `Condvar` for thread-safe shared state.
  - **[`std::mem`](https://doc.rust-lang.org/std/mem/index.html)**: Basic functions for dealing with memory, including sizes, swapping, and alignment.
- **Traits & Primitives**
  - **`std::ops`**: Overloadable operators like addition and indexing.
  - **`std::convert`**: Traits for type conversions, such as `From` and `Into`.
  - **[`std::cmp`](https://doc.rust-lang.org/std/cmp/index.html)**: Functionality for ordering and comparison (`PartialEq`, `Eq`, `PartialOrd`, `Ord`).
  - **`std::fmt`**: Utilities for formatting and printing strings.\
    Rust Documentation +9

The Prelude

The **`std::prelude`** is a small collection of items that are automatically imported into every Rust program, including frequently used types like `Option`, `Result`, and traits like `Clone` and `Copy`.

Rust Documentation +4

Would you like to see a code example for a **specific module** or learn how to use **custom modules** in your project?

15 sites

- [link](https://doc.rust-lang.org/std/#:~:text=Data%20may%20be%20shared%20by,channel%20types%20for%20message%20passing.)\
  std - Rust Documentation\
  What is in the standard library documentation? First of all, The Rust Standard Library is divided into a number of focused modules...\
  Rust Documentation
- [link](https://doc.rust-lang.org/std/fs/#:~:text=Module%20fs,-1.0.0%20%C2%B7%20Source&text=Filesystem%20manipulation%20operations.,std::os::$platform%20.)\
  std::fs - Rust\
  Modules \* alloc. \* any. \* array. \* cell. \* char. \* clone. \* default. \* env. \* error. \* f128. \* f16. \* f32. \* f64. \* fs. \* hash. \* ...\
  Rust Documentation
- [link](https://doc.rust-lang.org/std/collections/index.html#:~:text=Module%20collections,-1.0.0%20%C2%B7%20Source&text=Collection%20types.,Misc:%20BinaryHeap)\
  std::collections - Rust Documentation\
  Modules \* alloc. \* any. \* array. \* cell. \* char. \* clone. \* default. \* env. \* error. \* f128. \* f16. \* f32. \* f64. \* fs. \* hash. \* ...\
  Rust Documentation

Show all

#

rust std error types

Rust standard library error handling is built around two categories: **recoverable errors**, managed via the `Result<T, E>` enum, and **unrecoverable errors**, triggered by the `panic!` macro.

Rust Documentation +2

The Core `Error` Trait

The [`std::error::Error` trait](https://doc.rust-lang.org/std/error/trait.Error.html) is the standard interface for error types. Implementing it requires your type to also implement:

Rust Documentation +3

- **`Debug`**: For programmer-facing output.
- **`Display`**: For user-facing descriptions.
- **`source()`**: An optional method that returns the underlying cause of an error, allowing for error chaining.\
  Rust Documentation +4

Common Built-in Error Types

Many standard library modules provide their own specialized error structs or enums:

| Error Type                                                        | Module      | Purpose                                                    |
| ----------------------------------------------------------------- | ----------- | ---------------------------------------------------------- |
| [`io::Error`](https://doc.rust-lang.org/std/io/struct.Error.html) | `std::io`   | Handles filesystem, network, and other I/O failures.       |
| `ParseIntError`                                                   | `std::num`  | Returned when string-to-integer conversion fails.          |
| `Utf8Error`                                                       | `std::str`  | Occurs when a byte slice is not valid UTF-8.               |
| `AddrParseError`                                                  | `std::net`  | Triggered by invalid IP address strings.                   |
| `PoisonError<T>`                                                  | `std::sync` | Indicates a thread panicked while holding a mutex or lock. |

Specialized `Result` Aliases

To reduce verbosity, many modules define a [type alias](https://doc.rust-lang.org/std/io/type.Result.html) for `Result` that defaults the error type. For example:

Stack Overflow +1

- `std::io::Result<T>` is an alias for `Result<T, std::io::Error>`.
- `std::fmt::Result` is an alias for `Result<(), std::fmt::Error>`.\
  Rust Documentation +1

Error Propagation and Composition

- **Question Mark Operator (`?`)**: Used to propagate errors up the call stack. It automatically converts between error types if a valid `From` implementation exists.
- **Trait Objects (`Box<dyn Error>`)**: Used when a function might return multiple different types of errors that all implement the `Error` trait.
- **`ErrorKind`**: Some errors, like `io::Error`, provide a `.kind()` method that returns an enum (e.g., `ErrorKind::NotFound`) to help programs react differently to specific failure modes.\
  Rust Documentation +5

Would you like to see how to **implement the `Error` trait** for a custom struct, or do you need help with a **specific library's error**?

25 sites

- [link](https://doc.rust-lang.org/std/error/trait.Error.html#:~:text=in%20string%22%29;-,Error%20source,impl%20Error%20for%20ReadConfigError%20%7B%7D)\
  Error in std::error - Rust\
  Error source. Errors may provide cause information. Error::source() is generally used when errors cross “abstraction boundaries”. ...\
  Rust Documentation
- [link](https://stackoverflow.com/questions/57488387/what-are-all-the-different-error-types-in-rust#:~:text=context%20in%20comments.-,Comments,6621%208%207)\
  What are all the different error types in Rust? - Stack Overflow\
  Aug 14, 2019 — Comments. Add a comment. 5. Result types are often aliased in the standard library. If you see a function in the standard library ...\
  Stack Overflow
- [link](https://www.reddit.com/r/rust/comments/1fnj4st/why%5Fdoes%5Fsome%5Ferrortypes%5Fin%5Fthe%5Fstd%5Flibrary%5Fnot/#:~:text=I%20use%20an%20error%2Dhandling,related%20to%20Send%20/%20Sync%20traits?)\
  Why does some error-types in the std library not implement ...\
  Sep 23, 2024 — I use an error-handling library that depends on the errors returned from functions implement the \`std::error::Error\` trait. Of cou...\
  Reddit·r/rust

Show all

#

rust std file error types

In Rust, file operations (found in [`std::fs`](https://doc.rust-lang.org/std/error/index.html)) primarily return errors of the type [**`std::io::Error`**](https://doc.rust-lang.org/std/io/struct.Error.html). This is a general-purpose struct used for any input/output operation that might fail, such as reading from a file, writing to a socket, or managing directories.

Rust Documentation +3

Core Error Types & Traits

- **`std::io::Error`**: The specific struct returned by functions like `File::open` or `File::create`. It encapsulates errors originating from the underlying operating system.
- **`std::io::ErrorKind`**: A companion enum that categorizes `io::Error` into high-level, cross-platform variants. You can access it by calling `.kind()` on an `io::Error` instance.
- **`std::error::Error`**: The base trait that all standard library error types implement. It allows different error types to be treated uniformly, which is useful when using tools like `Box<dyn Error>`.\
  Rust Documentation +7

Common `ErrorKind` Variants

When handling file errors, you will most frequently encounter these variants from [**`std::io::ErrorKind`**](https://doc.rust-lang.org/std/io/enum.ErrorKind.html):

- **`NotFound`**: The requested file does not exist at the specified path.
- **`PermissionDenied`**: The process lacks the necessary permissions to access the file.
- **`AlreadyExists`**: A file already exists at a path where you are trying to create a new one.
- **`Interrupted`**: The operation was interrupted (e.g., by a signal) before completion.
- **`InvalidData`**: The data being read is not valid for the operation (common when reading text files that aren't UTF-8).
- **`UnexpectedEof`**: The end of the file was reached before the expected amount of data was read.\
  Reddit +4

Usage Example

Rust uses the [`Result<T, E>`](https://doc.rust-lang.org/std/result/enum.Result.html) enum for recoverable errors. A specialized [**`std::io::Result<T>`**](https://doc.rust-lang.org/std/io/type.Result.html) is often used as a shorthand for `Result<T, std::io::Error>`.

rust

    use std::fs::File;
    use std::io::{self, ErrorKind};

    fn main() -> io::Result<()> {
        let file = File::open("test.txt");

        match file {
            Ok(_) => println!("File opened!"),
            Err(error) => match error.kind() {
                ErrorKind::NotFound => println!("File not found!"),
                ErrorKind::PermissionDenied => println!("Permission denied!"),
                _ => println!("Another error: {:?}", error),
            },
        }
        Ok(())
    }

Use code with caution.

Would you like to see how to define **custom error types** for your own file-processing functions?

14 sites

- [link](https://www.reddit.com/r/rust/comments/jbdk5x/blog%5Fpost%5Fstudy%5Fof%5Fstdioerror/#:~:text=It%20feels%20similar%20to%20the,%E2%80%A2%206y%20ago)\
  Blog Post: Study of std::io::Error : r/rust - Reddit\
  Oct 15, 2020 — It feels similar to the case of error kitchensinkosis I've described in the post. On the other hand, serialization causing io erro...\
  Reddit·r/rust
- [link](https://doc.rust-lang.org/std/result/#:~:text=Module%20result,-1.0.0%20%C2%B7%20Source&text=Error%20handling%20with%20the%20Result,and%20containing%20an%20error%20value.&text=Functions%20return%20Result%20whenever%20errors,prominently%20used%20for%20I/O.&text=Pattern%20matching%20on%20Result%20s,working%20with%20it%20more%20succinct.)\
  std::result - Rust\
  Module result. ... Error handling with the Result type. Result is the type used for returning and propagating errors. It is an enu...\
  Rust Documentation
- [link](https://doc.rust-lang.org/book/ch09-02-recoverable-errors-with-result.html#:~:text=For%20this%2C%20we%20add%20an,shown%20in%20Listing%209%2D5.&text=The%20type%20of%20the%20value%20that%20File::open%20returns,besides%20the%20missing%20file%20error.)\
  Recoverable Errors with Result - The Rust Programming Language\
  For this, we add an inner match expression, shown in Listing 9-5. ... The type of the value that File::open returns inside the Err...\
  Rust Documentation

Show all