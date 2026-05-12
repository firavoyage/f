<!-- js is so flexible. too flexible. -->

#

ruby file methods

April 18, 2026

The **File** class in Ruby provides a wide range of methods for interacting with the filesystem, including reading, writing, and querying file properties. Because `File` is a subclass of [IO](https://ruby-doc.org/core-3.1.0/File.html), it inherits many low-level input/output operations.

Core File Operations

These are the most common methods used for basic file handling:

- **`File.open(path, mode)`**: Opens a file. If used with a block, it automatically closes the file after the block executes.
- **`File.read(path)`**: A shortcut that opens, reads the entire content into a string, and closes the file in one step.
- **`File.write(path, string)`**: Writes content to a file, overwriting existing data by default.
- **`File.readlines(path)`**: Reads the entire file and returns an array where each element is a line.
- **`File.foreach(path) { |line| ... }`**: Efficiently iterates through a file line-by-line without loading the whole file into memory.
- **`File.delete(path)`** / **`File.unlink(path)`**: Permanently removes the specified file.

Path and Name Inquiries

Use these class methods to parse or manipulate file paths:

- **`File.basename(path)`**: Returns the last component of the filename (e.g., `"ruby.rb"`).
- **`File.dirname(path)`**: Returns the directory portion of the path.
- **`File.extname(path)`**: Extracts the file extension (e.g., `".rb"`).
- **`File.expand_path(path)`**: Converts a relative path into an absolute path.
- **`File.join(item1, item2, ...)`**: Combines strings into a single path using the platform-specific separator.

Testing File Attributes

These methods return `true` or `false` to check the status of a file:

- **`File.exist?(path)`**: Checks if a file or directory exists at the given path.
- **`File.file?(path)`**: Returns true if the path is a regular file.
- **`File.directory?(path)`**: Returns true if the path is a directory.
- **`File.zero?(path)`**: Checks if the file is empty (size 0).
- **`File.readable?(path)`**, **`File.writable?(path)`**, **`File.executable?(path)`**: Checks for specific user permissions.

File Metadata and Permissions

- **`File.size(path)`**: Returns the file size in bytes.
- **`File.mtime(path)`**: Returns the last modification time as a `Time` object.
- **`File.chmod(mode, path)`**: Changes the permission bits of the file (e.g., `0644`).
- **`File.rename(old_name, new_name)`**: Renames or moves a file.

For more advanced filesystem tasks like copying or moving entire directory trees, you may want to explore the FileUtils module, which is part of the Ruby standard library.

Would you like to see a code example for a **specific file operation**, like reading a large file or changing permissions?

- [link](https://ruby-doc.org/core-2.5.5/File.html)\
  Class: File (Ruby 2.5.5)\
  Returns all components of the filename given in file\_name except the last one (after first stripping trailing separators). The fil...\
  Ruby-Doc
- [link](https://ruby-doc.org/core-2.6.9/File.html)\
  Class: File (Ruby 2.6.9)\
  Returns true if the named file exists and the effective group id of the calling process is the owner of the file. Returns false on...\
  Ruby-Doc
- [link](https://stackoverflow.com/questions/5545068/what-are-all-the-common-ways-to-read-a-file-in-ruby)\
  What are all the common ways to read a file in Ruby?\
  You can read the file all at once: content = File.readlines 'file.txt' content.each\_with\_index{|line, i| puts "#{i+1}: #{line}"} W...\
  Stack Overflow

Show all

example

April 18, 2026

Here is a practical example showing how to combine several of these methods into a single workflow, from checking if a file exists to reading and modifying it.

ruby

```
filename = "data.txt"

# 1. Check if the file exists
if File.exist?(filename)
  puts "Found #{filename} (#{File.size(filename)} bytes)" # Get size
else
  # 2. Write content to a new file
  File.write(filename, "First line\nSecond line\n")
  puts "Created #{filename}"
end

# 3. Append more data using block form (safely closes automatically)
File.open(filename, "a") do |file|
  file.puts "Third line added at #{Time.now}"
end

# 4. Read and process line-by-line (memory efficient)
puts "--- File Contents ---"
File.foreach(filename).with_index do |line, index|
  puts "#{index + 1}: #{line.chomp}" # chomp removes the trailing newline
end

# 5. Extract path information
puts "--- Metadata ---"
puts "Full Path: " + File.expand_path(filename)
puts "Extension: " + File.extname(filename)

# 6. Rename the file
# File.rename("data.txt", "backup_data.txt")

# 7. Delete the file
# File.delete("backup_data.txt")
```

Use code with caution.

Key Highlights from this Example:

- **`File.write`**: Best for quick, one-off writes to a file.
- **`File.open` with a block**: The standard "safe" way to handle files because it ensures the file is closed even if an error occurs.
- **`File.foreach`**: Much better for large files than `File.read` or `File.readlines` because it doesn't load everything into RAM at once.
- **`chomp`**: Used frequently when reading files to remove the automatic newline character (`\n`) from the end of each line.

Would you like to see how to handle **specific file types**, such as parsing a **CSV** or **JSON** file?

- [link](https://www.railscarma.com/sv/blogg/how-to-read-and-write-files-in-ruby-with-examples/)\
  How To Read and Write Files in Ruby (With Examples) - RailsCarma\
  How To Read and Write Files in Ruby (With Examples) \* Basic Concepts. In Ruby, file operations are typically performed using the F...\
  RailsCarma
- [link](https://stackoverflow.com/questions/5545068/what-are-all-the-common-ways-to-read-a-file-in-ruby)\
  What are all the common ways to read a file in Ruby?\
  You can read the file all at once: content = File.readlines 'file.txt' content.each\_with\_index{|line, i| puts "#{i+1}: #{line}"} W...\
  Stack Overflow
- [link](https://www.railscarma.com/blog/how-to-read-and-write-files-in-ruby-with-examples/)\
  How To Read and Write Files in Ruby (With Examples)\
  ruby data = \[ \["Name", "Age", "City"], \["Alice", 30, "New York"], \["Bob", 25, "London"] ] File.open("people.csv", "w") do |file| d...\
  RailsCarma

Show all

read a file

April 18, 2026

The best way to read a file in Ruby depends on the file's size and how you plan to use the data.

1\. For Small Files: "Slurping"

If the file is small enough to fit comfortably in your computer's RAM, you can "slurp" it—reading the entire contents into a single variable at once.

- **As a String**: Use File.read for a quick, one-line read. Ruby automatically opens and closes the file for you.\
  ruby

<!---->

```
content = File.read("example.txt")
```

Use code with caution.

- **As an Array of Lines**: Use File.readlines to get an array where each entry is one line.\
  ruby

<!---->

```
lines = File.readlines("example.txt")
```

Use code with caution.

2\. For Large Files: Streaming

For large files (megabytes or gigabytes), loading everything into memory can cause your program to slow down or crash. Instead, you should "stream" the file line-by-line.

- **Line-by-Line (Recommended)**: File.foreach is the most memory-efficient way to process each line individually.\
  ruby

<!---->

```
File.foreach("large_data.log") do |line|
  puts line if line.include?("ERROR")
end
```

Use code with caution.

3\. Advanced Control: Manual Handling

If you need fine-grained control (like reading exactly 1024 bytes at a time), use the block form of File.open.

- **Safe Block Form**: The file is **automatically closed** when the block finishes, which prevents memory leaks.\
  ruby

<!---->

```
File.open("example.txt", "r") do |file|
  # Read the first 20 characters
  chunk = file.read(20)
  puts chunk
end
```

Use code with caution.

Comparison Summary

| Method           | Output       | Memory Usage       | Best For...                              |
| ---------------- | ------------ | ------------------ | ---------------------------------------- |
| `File.read`      | String       | High (whole file)  | Small config files                       |
| `File.readlines` | Array        | Very High          | Small files where you need random access |
| `File.foreach`   | Yields lines | **Low (constant)** | Large logs or CSVs                       |
| `File.open`      | File Object  | Low/Varies         | Complex logic or binary data             |

Do you need to **filter or search** for specific text within the file while reading it?

- [link](https://stackoverflow.com/questions/5545068/what-are-all-the-common-ways-to-read-a-file-in-ruby)\
  What are all the common ways to read a file in Ruby?\
  \* 11 Answers. Sorted by: 387. The easiest way if the file isn't too long is: puts File.read(file\_name) Indeed, IO. read or File. r...\
  Stack Overflow
- [link](https://www.reddit.com/r/ruby/comments/37dbye/reading%5Fvery%5Flarge%5Ffiles%5Fwith%5Fruby/)\
  Reading very large files with Ruby - Reddit\
  that line of code does read the whole file into memory. Look into using IO. foreach. it will stream each line and not keep the who...\
  Reddit
- [link](https://writesoftwarewell.com/how-to-read-file-in-ruby)\
  How to Read a File in Ruby - Write Software Well\
  So in this post, we'll explore a few different ways to read data from file and when to choose which. \* TL; DR. \* Using File. new. ...\
  Write Software Well

Show all

what will happen if file.read errs

April 18, 2026

If `File.read` fails, <mark style="border-radius: 4px; background-size: 200% 100%; padding: 0px 2px; animation: 0.75s cubic-bezier(0.05, 0.7, 0.1, 1) 0.25s 1 normal forwards running highlight-animation;">Ruby will <strong>raise an exception</strong> and, unless you handle it, your program will immediately stop and print an error message (backtrace) to the console</mark>.

The specific error raised depends on the cause of the failure:

Common Exceptions

- **`Errno::ENOENT` (No such file or directory)**: This is the most common error, occurring if the file path is incorrect or the file doesn't exist.
- **`Errno::EACCES` (Permission denied)**: Raised if you don't have the required system permissions to read the file.
- **`Errno::EISDIR` (Is a directory)**: Raised if you point `File.read` to a directory instead of a file.
- **`IOError`**: A more general error for input/output operation failures, such as trying to read from a closed file stream.

How to Handle These Errors

To prevent your program from crashing, you can "rescue" these exceptions using a `begin...rescue` block. It is best practice to rescue specific errors rather than all errors.

ruby

```
filename = "data.txt"

begin
  content = File.read(filename)
  puts content
rescue Errno::ENOENT
  puts "Error: File '#{filename}' not found."
rescue Errno::EACCES
  puts "Error: You don't have permission to read '#{filename}'."
rescue StandardError => e
  puts "An unexpected error occurred: #{e.message}"
end
```

Use code with caution.

Proactive Checks

Instead of waiting for an error, you can use **predicate methods** to check the file's status beforehand:

- `File.exist?(path)` – Returns `true` if the file exists.
- `File.readable?(path)` – Returns `true` if your user has permission to read it.

Would you like a more detailed breakdown of how to use **error backtraces** to debug your file-reading code?

- [link](https://stackoverflow.com/questions/22898310/what-is-the-clearest-way-to-open-a-file-and-do-rescue-when-it-cannot-be-opened)\
  What is the clearest way to open a file and do "rescue" when it ...\
  I also pointed out the differences between the behavior of the perl function and ruby method in order to explain why "the perl way...\
  Stack Overflow
- [link](https://blog.appsignal.com/2016/10/18/ruby-magic-exceptions-primer.html)\
  Rescuing Exceptions in Ruby: A Primer - AppSignal Blog\
  The default exception class caught by a begin .. rescue block is StandardError. If we don't pass in a specific class, Ruby will re...\
  AppSignal Blog
- [link](https://skorks.com/2009/09/ruby-exceptions-and-exception-handling/)\
  Ruby Exceptions And Exception Handling - Skorks\
  This is because exceptions that inherit from StandardError deal with application level errors, while if you inherit Exception dire...\
  Skorks

Show all

can you rescue as early return, and not indent the main process of reading

April 18, 2026

Yes, this is a common pattern in Ruby called a **guard clause**. Instead of wrapping your entire logic in a `begin...rescue` block (which adds indentation), you can rescue the error on a single line and return early.

Here are the two best ways to do it:

1\. The "Inline Rescue" Pattern

You can attach a `rescue` to the end of the `File.read` assignment. If it fails, it returns `nil` (or whatever value you provide), and you can return from the method immediately.

ruby

```
def process_file(path)
  # Try to read; if it fails, return nil
  content = File.read(path) rescue nil

  # Guard clause: return early if content is nil
  return puts "Could not read file." if content.nil?

  # Main process (no extra indentation)
  puts "Processing #{content.length} characters..."
  puts content.upcase
end
```

Use code with caution.

2\. The "Begin/Rescue" Guard

If you need to handle specific errors (like permissions vs. missing files) without indenting the rest of your code, you can use a `begin/rescue` block that only covers the read operation.

ruby

```
def process_file(path)
  content = begin
    File.read(path)
  rescue Errno::ENOENT, Errno::EACCES => e
    puts "Error: #{e.message}"
    return # Early exit
  end

  # Main process starts here (flat structure)
  puts "Successfully loaded file."
  puts content.reverse
end
```

Use code with caution.

Why use this?

- **Readability**: The "happy path" (your main logic) stays at the top level of the method.
- **Efficiency**: You don't waste resources trying to process data that didn't load.
- **Cleanliness**: It avoids the "arrow shape" (deep nesting) that makes code hard to follow.

Would you like to see how to use **`File.exist?`** as a guard clause to avoid using `rescue` entirely?

#

ruby FileUtils methods

April 24, 2026

Ruby's **FileUtils** module provides a set of Unix-like file management methods for copying, moving, and deleting files or directories. To use them, you must first include the module with `require 'fileutils'`.

Common FileUtils Methods

The following methods are organized by their primary function as documented in the [Ruby 3.4 FileUtils Documentation](https://docs.ruby-lang.org/en/3.4/FileUtils.html):

1\. Copying & Moving

- **`cp(src, dest)`**: Copies a file or a list of files to a destination.
- **`cp_r(src, dest)`**: Recursively copies directories and their contents.
- **`mv(src, dest)`**: Moves files or directories; works across different filesystems.
- **`install(src, dest)`**: Copies files and optionally sets permissions (mode, owner, group).

2\. Deleting

- **`rm(list)`**: Removes a file or a list of files.
- **`rm_rf(list)`**: Force-removes files and directories recursively (equivalent to `rm -rf`).
- **`rmdir(list)`**: Removes empty directories.
- **`remove_entry(path)`**: Deletes an entry, including descendants if it is a directory.

3\. Creating & Directory Management

- **`mkdir(dir)`**: Creates a single directory.
- **`mkdir_p(dir)`**: Creates a directory and any missing parent directories (equivalent to `mkdir -p`).
- **`cd(dir)`** / **`chdir(dir)`**: Changes the current working directory.
- **`pwd()`** / **`getwd()`**: Returns the current working directory.

4\. File Attributes & Permissions

- **`chmod(mode, list)`**: Changes the permission mode of files.
- **`chown(user, group, list)`**: Changes the owner and group of files.
- **`touch(list)`**: Updates access and modification times; creates the file if it doesn't exist.

Global Options

Most methods accept a final `options` hash to modify behavior:

- **`:force`**: Forces the operation (e.g., overwrites files or ignores non-existent targets).
- **`:verbose`**: Prints the command being executed to standard output.
- **`:noop`**: "No Operation"—shows what would happen without actually making changes.
- **`:preserve`**: Maintains the original file's owner, group, and time stamps when copying.

Utility Modules

You can also use specialized sub-modules to apply these options globally to all calls:

- **`FileUtils::Verbose`**: Automatically applies `:verbose => true`.
- **`FileUtils::NoWrite`**: Automatically applies `:noop => true`.
- **`FileUtils::DryRun`**: Applies both `:verbose` and `:noop` for testing scripts.

Do you need a **code example** for a specific task like recursively copying a folder or managing file permissions?

- [link](https://ruby-doc.org/stdlib-2.4.8/libdoc/fileutils/rdoc/FileUtils.html)\
  Module: FileUtils (Ruby 2.4.8) - Ruby-Doc.org\
  You can distribute/modify this program under the same terms of ruby. \* module FileUtils ¶ ↑ Namespace for several file utility met...\
  Ruby-Doc.org
- [link](https://ruby-doc.org/stdlib-2.7.2/libdoc/fileutils/rdoc/FileUtils.html)\
  Module: FileUtils (Ruby 2.7.2)\
  You can distribute/modify this program under the same terms of ruby. \* module FileUtils¶ ↑ Namespace for several file utility meth...\
  Ruby-Doc.org
- [link](https://ruby-doc.org/stdlib-3.0.0/libdoc/fileutils/rdoc/FileUtils.html)\
  Module: FileUtils (Ruby 3.0.0)\
  You can distribute/modify this program under the same terms of ruby. \* module FileUtils ¶ ↑ Namespace for several file utility met...\
  Ruby-Doc

Show all

#

ruby pathname methods

April 24, 2026

Ruby's **Pathname** class provides a cleaner, object-oriented way to handle file system paths by combining functionality from `File`, `Dir`, and `FileUtils`. Unlike standard strings, **Pathname objects are immutable**; methods that modify the path return a _new_ Pathname object instead of changing the original.

Core Pathname Methods

You must `require 'pathname'` to use this class.

- **Creation & Navigation**
  - `Pathname.new(path)`: Creates a new instance from a string.
  - `join(*args)` or `/`: Appends path fragments. `path / 'subdir' / 'file.txt'` is a common shorthand.
  - `parent`: Returns the parent directory as a Pathname object.
  - `relative_path_from(base)`: Calculates the path to the current object relative to the provided base.
- **Information & Status**
  - `absolute?` / `relative?`: Checks if the path is absolute or relative.
  - `exist?`: Returns `true` if the file or directory actually exists on the system.
  - `file?` / `directory?`: Predicate methods to check the type of the path.
  - `basename` / `dirname`: Returns the last component or the directory part, respectively.
  - `extname`: Returns the file extension (e.g., `.txt`).
- **File Operations (Facades)**
  - `read` / `write(content)`: Quickly read from or write to a file.
  - `each_line`: Iterates over the lines of a file.
  - `mkdir` / `rmdir`: Creates or removes directories.
  - `children`: Returns an array of Pathname objects for every entry in a directory (excluding `.` and `..`).
- **Traversal**
  - `ascend`: Iterates upward from the current path to the root.
  - `descend`: Iterates downward from the root to the current path.

Key Benefits

| Feature             | Description                                                                                                 |
| ------------------- | ----------------------------------------------------------------------------------------------------------- |
| **Object-Oriented** | Methods like `exist?` are called directly on the path object rather than passing strings to `File.exists?`. |
| **Immutability**    | Operations like `join` or `dirname` always return new objects, preventing accidental side effects.          |
| **Unified API**     | Combines features that are otherwise scattered across File, Dir, and FileUtils.                             |

For a complete list of all 80+ methods, refer to the [official Pathname documentation](https://docs.ruby-lang.org/en/3.4/Pathname.html).

Do you need a **code example** showing how to use these methods to clean up a specific file-handling task?

- [link](http://ruby-doc.org/stdlib-2.4.1/libdoc/pathname/rdoc/Pathname.html)\
  Class: Pathname (Ruby 2.4.1)\
  Pathname \* Pathname represents the name of a file or directory on the filesystem, but not the file itself. \* A Pathname can be rel...\
  Ruby-Doc
- [link](https://docs.ruby-lang.org/en/3.4/Pathname.html)\
  class Pathname - Documentation for Ruby 3.4\
  class Pathname \* Pathname represents the name of a file or directory on the filesystem, but not the file itself. \* A Pathname can ...\
  Ruby Programming Language
- [link](https://www.sitepoint.com/rubys-pathname-api/)\
  Ruby's Pathname API - SitePoint\
  Key Takeaways \* The Pathname class in Ruby's standard library represents a path on the file system, providing a convenient way to ...\
  SitePoint

Show all

#

ruby dir methods

April 24, 2026

In Ruby, the `Dir` class provides a set of tools for interacting with directory streams and performing filesystem operations like creating, deleting, and navigating folders.

Class Methods (Common Operations)

These are called directly on the `Dir` class (e.g., `Dir.pwd`).

- **`Dir.pwd`** (or **`Dir.getwd`**): Returns the current working directory path as a string.
- **`Dir.chdir(path)`**: Changes the current working directory to the specified path. If a block is given, it changes the directory for the duration of that block and then reverts back.
- **`Dir.entries(path)`**: Returns an array of all filenames (including `.` and `..`) in the given directory.
- **`Dir.children(path)`**: Similar to `entries`, but excludes the `.` and `..` directory references.
- **`Dir.glob(pattern)`** (or **`Dir[pattern]`**): Returns an array of filenames that match a shell-like pattern (e.g., `Dir["*.rb"]` for all Ruby files).
- **`Dir.mkdir(path, mode)`**: Creates a new directory at the given path with optional permissions.
- **`Dir.rmdir(path)`** (or **`Dir.delete`**, **`Dir.unlink`**): Removes the specified directory; the directory must be empty.
- **`Dir.exist?(path)`**: Returns `true` if the named file is a directory, `false` otherwise.

Instance Methods (Directory Streams)

These are called on a `Dir` object created via `Dir.new` or `Dir.open`.

- **`read`**: Reads the next entry from the directory stream and returns it as a string.
- **`each { |file| ... }`**: Iterates over every entry in the directory.
- **`rewind`**: Repositions the directory stream back to the first entry.
- **`pos`** (or **`tell`**): Returns the current position in the directory stream.
- **`seek(position)`**: Moves the stream to a specific position (previously obtained by `pos`).
- **`close`**: Closes the directory stream.

For more detailed technical specifications, you can refer to the official [Ruby-Doc for the Dir class](https://ruby-doc.org/core-3.1.1/Dir.html).

Do you need an **example script** showing how to use these methods together to manage files?

- [link](https://ruby-doc.org/core-3.0.0/Dir.html)\
  Class: Dir (Ruby 3.0.0)\
  Objects of class Dir are directory streams representing directories in the underlying file system. They provide a variety of ways ...\
  Ruby-Doc
- [link](https://docs.ruby-lang.org/en/master/Dir.html)\
  class Dir - Documentation for Ruby 4.1\
  class Dir. An object of class Dir represents a directory in the underlying file system. It consists mainly of: \* A string path, gi...\
  Ruby Programming Language
- [link](https://rubyapi.org/3.4/o/dir)\
  Dir | Ruby API (v3.4)\
  Instance Methods \* # fileno. \* # path. \* # to\_path. \* # read. \* # each\_child. \* # children. \* # rewind. \* # tell. \* # seek. \* # po...\
  Ruby API

Show all

#

rust file methods

April 18, 2026

In Rust, file operations are primarily handled through the `std::fs::File` struct and the `std::fs` module. Because file I/O can fail, these methods return a `Result` type, requiring explicit error handling.

Core File Operations

- **`File::open(path)`**: Opens an existing file in **read-only** mode.
- **`File::create(path)`**: Opens a file in **write-only** mode. If the file exists, its content is truncated (deleted); if not, a new file is created.
- **`fs::remove_file(path)`**: Deletes a file from the filesystem.
- **`fs::copy(from, to)`**: Copies the entire contents of one file to another.
- **`fs::rename(from, to)`**: Renames or moves a file to a new path.

Reading and Writing Data

To read or write content, the `File` struct implements the **`Read`** and **`Write`** traits from `std::io`.

- **Reading Content**:
  - **`read_to_string(&mut string)`**: Reads the entire file into a `String`.
  - **`read_to_end(&mut vector)`**: Reads the entire file into a `Vec<u8>` (byte vector).
  - **`fs::read_to_string(path)`**: A convenient one-liner to read an entire file into a string without manually opening it.
- **Writing Content**:
  - **`write_all(bytes)`**: Writes an entire buffer (slice of bytes) to the file.
  - **`fs::write(path, content)`**: A one-liner that creates or overwrites a file with the provided content.

Advanced Control

- **`OpenOptions`**: Used for more complex requirements like **appending** to a file or setting specific permissions.\
  rust

<!---->

```
use std::fs::OpenOptions;
let file = OpenOptions::new().append(true).open("data.txt");
```

Use code with caution.

- **`File::metadata()`**: Retrieves information such as file size, permissions, and timestamps.
- **`File::sync_all()`**: Forces the operating system to flush all buffered data to the physical disk.

**Note on Closing Files:** Rust does not have a dedicated `close()` method. Instead, it uses its ownership system; the file is automatically closed when the `File` variable goes out of scope.

Would you like to see a complete **code example** for a specific task, such as reading a file line-by-line?

- [link](https://doc.rust-lang.org/rust-by-example/std%5Fmisc/file.html)\
  File I/O - Rust By Example - Rust Documentation\
  The File struct represents a file that has been opened (it wraps a file descriptor), and gives read and/or write access to the und...\
  Rust Documentation
- [link](https://doc.rust-lang.org/std/fs/)\
  std::fs - Rust\
  Creates a new, empty directory at the provided path. ... Recursively create a directory and all of its parent components if they a...\
  Rust Documentation
- [link](https://doc.rust-lang.org/std/io/trait.Read.html)\
  Read in std::io - Rust Documentation\
  Provided Methods \* by\_ref. \* bytes. \* chain. \* is\_read\_vectored. \* read\_array. \* read\_buf. \* read\_buf\_exact. \* read\_exact. \* read\_\
  Rust Documentation

Show all

example

April 18, 2026

Here is a comprehensive example demonstrating common file operations in Rust, including **writing**, **appending**, and **reading line-by-line**.

rust

```
use std::fs::{File, OpenOptions};
use std::io::{self, BufRead, BufReader, Write};

fn main() -> io::Result<()> {
    let path = "example.txt";

    // 1. CREATE and WRITE to a file
    // File::create overwrites the file if it already exists
    let mut file = File::create(path)?;
    file.write_all(b"Hello, Rust!\n")?;
    writeln!(file, "Writing a new line using a macro.")?;

    // 2. APPEND to an existing file
    // Use OpenOptions to keep existing content and add to the end
    let mut file = OpenOptions::new()
        .append(true)
        .open(path)?;
    writeln!(file, "This line is appended.")?;

    // 3. READ line-by-line (Memory Efficient)
    // BufReader is preferred for large files to avoid loading everything at once
    let file = File::open(path)?;
    let reader = BufReader::new(file);

    println!("File contents:");
    for line in reader.lines() {
        // Each line is wrapped in a Result in case of I/O errors during reading
        let line = line?;
        println!("> {}", line);
    }

    Ok(())
}
```

Use code with caution.

Key Concepts in This Example

- **Error Propagation (`?`)**: Most file methods return `io::Result`. Using the `?` operator at the end of a call will return the error early from the function if something goes wrong.
- **`BufReader`**: Instead of reading the entire file into a `String` at once, `BufReader` reads it in chunks, making it much safer for large files.
- **Automatic Closing**: You do not need to call a `close()` method. Rust automatically closes the file handle when the `file` variable goes out of scope.
- **One-Liners**: For very simple tasks where you don't mind loading the whole file into memory, you can use `std::fs::read_to_string("path")` or `std::fs::write("path", "content")`.

Would you like to explore how to handle specific **filesystem errors**, like "Permission Denied" or "File Not Found"?

- [link](https://doc.rust-lang.org/rust-by-example/std%5Fmisc/file/read%5Flines.html)\
  read\_lines - Rust By Example\
  We also update read\_lines to return an iterator instead of allocating new String objects in memory for each line. use std::fs::Fil...\
  Rust Documentation
- [link](https://stackoverflow.com/questions/45882329/read-large-files-line-by-line-in-rust)\
  Read large files line by line in Rust \[duplicate] - Stack Overflow\
  Sorted by: 174. You want to use the buffered reader, BufRead , and specifically the function BufReader.lines() : use std::fs::File...\
  Stack Overflow
- [link](https://rust-lang-nursery.github.io/rust-cookbook/file/read-write.html)\
  Read & Write - Rust Cookbook\
  Read lines of strings from a file. Writes a three-line message to a file, then reads it back a line at a time with the Lines itera...\
  GitHub Pages documentation

Show all

#

ruby file error types

April 20, 2026

In Ruby, file-related errors are primarily handled through the `Errno` family of exceptions, which map low-level operating system errors to specific Ruby classes. These typically inherit from `SystemCallError` or `IOError`.

Common File and I/O Errors

- **Errno::ENOENT**: Raised when a file or directory is not found at the specified path.
- **Errno::EACCES**: Occurs when permission is denied for the attempted file operation.
- **Errno::EEXIST**: Raised when trying to create a file that already exists in a context that requires a new one.
- **EOFError**: A subclass of `IOError` raised when an I/O operation reaches the end of a file unexpectedly.
- **IOError**: The base class for errors involving input/output operation failures.
- **Errno::ENOSPC**: Raised when there is no space left on the device during a write operation.
- **Errno::EISDIR**: Occurs when a directory is specified where a regular file was expected (e.g., trying to open a directory for writing).

General Script and Loading Errors

These often occur before a file is even fully processed:

- **LoadError**: Raised when a `require` or `load` statement fails to find or load the specified file.
- **SyntaxError**: Raised if the file being executed contains invalid Ruby syntax.

Standard Exception Hierarchy

Most application-level errors inherit from `StandardError`. Rescuing `StandardError` is the default behavior for a simple `rescue` block and will catch most I/O and argument-related issues.

| Error Class        | Typical Cause                                               |
| ------------------ | ----------------------------------------------------------- |
| `Errno::ENOENT`    | File or directory does not exist.                           |
| `Errno::EACCES`    | Insufficient permissions to access the file.                |
| `LoadError`        | Unable to find a file specified in `require`.               |
| `EOFError`         | Reached end of file unexpectedly.                           |
| `Errno::ENOTEMPTY` | Attempting to delete a directory that still contains files. |

Are you looking for a **specific code snippet** to handle one of these errors using `begin/rescue`?

- [link](https://medium.com/@nerdplusdog/how-to-read-and-resolve-common-error-codes-in-ruby-9a3ae4bfb0db)\
  How to Read and Resolve Common Error Codes in Ruby\
  Reading Error Messages. ... Every Ruby error message is comprised of three important elements: a type, a location, and a descripti...\
  Medium
- [link](https://rubyreferences.github.io/rubyref/builtin/exception/exception-classes.html)\
  Exception Classes - Ruby Reference\
  Errno. Ruby exception objects are subclasses of Exception. However, operating systems typically report errors using plain integers...\
  GitHub
- [link](https://docs.ruby-lang.org/en/3.4/Errno.html)\
  module Errno - Documentation for Ruby 3.4\
  Each such class is: A nested class in this module, Errno . A subclass of class SystemCallError . Associated with an error code.\
  Ruby Programming Language

Show all

example

April 20, 2026

The most common way to handle file errors in Ruby is using a `begin...rescue` block. This allows your script to fail gracefully—for example, by printing a friendly message instead of crashing—if a file is missing or locked.

Basic File Handling Example

In this example, we attempt to read a file and handle the two most frequent issues: the file not existing (`Errno::ENOENT`) and not having permission to read it (`Errno::EACCES`).

ruby

```
filename = "data.txt"

begin
  # Attempt to open and read the file
  content = File.read(filename)
  puts "File content: #{content}"

rescue Errno::ENOENT
  # Specifically handle "File Not Found"
  puts "Error: The file '#{filename}' could not be found."

rescue Errno::EACCES
  # Specifically handle "Permission Denied"
  puts "Error: You do not have permission to read '#{filename}'."

rescue StandardError => e
  # Catch-all for any other unexpected issues
  puts "An unexpected error occurred: #{e.message}"

ensure
  # This block runs no matter what (optional)
  puts "Attempted file access completed."
end
```

Use code with caution.

Key Components

1. **`begin`**: Starts the protected section of code.
2. **`rescue [ErrorClass]`**: If an error occurs that matches the class (like `Errno::ENOENT`), Ruby jumps straight to this block.
3. **`StandardError => e`**: Assigns the error object to the variable `e` so you can inspect the specific message using `e.message`.
4. **`ensure`**: Guaranteed to run whether an error happened or not; it's often used to close file handles if you opened them manually using `File.open`.

Would you like to see how to **automatically retry** the operation if a specific error occurs?

errno, enoent, eacces... seems unfriendly

April 20, 2026

it definitely feels like "computer speak" from the 70s. That’s because these names come directly from **C and Unix system headers**.

In the original C programming language (which Ruby is built on), `Errno` stands for **"Error Number."** The weird abbreviations are short for specific phrases:

- **ENOENT**: Error NO ENTitity (No such file or directory).
- **EACCES**: Error ACCESs (Permission denied).
- **EISDIR**: Error IS a DIRectory (You tried to open a folder like a file).
- **ENOSPC**: Error NO SPaCe (Disk is full).

Making it "Friendly"

Since Ruby is all about developer happiness, you don't have to show these cryptic codes to your users. You can use a `rescue` block to "translate" them into human language:

ruby

```
begin
  File.open("secret_plans.txt")
rescue Errno::ENOENT
  puts "Whoops! That file is missing."
rescue Errno::EACCES
  puts "Hold up! You aren't allowed in there."
end
```

Use code with caution.

Pro-Tip: The "Sugar" Way

If you just want to check if a file exists before even trying (and avoid the error entirely), Ruby provides a much friendlier method:

ruby

```
if File.exist?("data.csv")
  # Proceed safely
else
  puts "File's gone, boss."
end
```

Use code with caution.

Would you like to know how to **find a list** of all these cryptic codes inside your Ruby terminal?

why errno, not error

April 20, 2026

It feels like a typo or a lazy abbreviation, but it’s actually a very specific technical "handshake" between Ruby and your computer's Operating System.

Here is the breakdown of why it’s `Errno` instead of `Error`:

1\. It stands for "Error Number"

Back in the 1970s, when the **C programming language** and **Unix** were being created, memory was incredibly expensive. Programmers couldn't afford to pass around long, descriptive text strings like `"File Not Found Error"`. Instead, they passed around a simple **integer** (a number).

- If a function returned `2`, it meant "No such file."
- If it returned `13`, it meant "Permission denied."

The variable that held this number was named `errno`.

2\. Ruby is "C-Powered"

Ruby is written in C. When you ask Ruby to delete a file, it asks the underlying Operating System (OS) to do it. If the OS fails, it hands Ruby back one of those numbers.

- Ruby takes that number and wraps it in a class so you can use it.
- To stay consistent with the global standards used by Linux, macOS, and Windows, Ruby kept the original name: `Errno`.

3\. "Error" was already taken

In Ruby, `Error` is a generic term used in many places (like `NoMethodError` or `ArgumentError`). By using `Errno`, Ruby makes it clear that **this specific error came from the System/Kernel**, not from the Ruby code itself.

How to see the "Number" inside the `Errno`

If you want to see the actual number Ruby is hiding behind those letters, you can check the `Errno` constant:

ruby

```
puts Errno::ENOENT::Errno   # Output: 2
puts Errno::EACCES::Errno   # Output: 13
```

Use code with caution.

**Think of `Errno` as the "Translator"** between the raw, numbered language of your hardware and the object-oriented language of Ruby.

Would you like to see the **shortcut** for finding out what a specific `Errno` number actually means?

#

nodejs file error types

April 20, 2026

In Node.js, file-related errors primarily fall under <mark style="border-radius: 4px; background-size: 200% 100%; padding: 0px 2px; animation: 0.75s cubic-bezier(0.05, 0.7, 0.1, 1) 0.25s 1 normal forwards running highlight-animation;"><strong>System Errors</strong></mark>. These occur when the underlying operating system cannot fulfill a request, such as opening or writing to a file.

Common File System Error Codes

When an `fs` operation fails, the error object typically includes a `code` property (e.g., `ENOENT`) that identifies the specific issue:

- **`ENOENT` (No such file or directory)**: The most common error, raised when a file or directory at the specified path cannot be found.
- **`EACCES` (Permission denied)**: Occurs when you attempt to access a file in a way forbidden by its access permissions (e.g., writing to a read-only file).
- **`EEXIST` (File exists)**: Thrown when an operation requires the target file to _not_ exist, but it already does (common with `fs.mkdir` or specific flags).
- **`EISDIR` (Is a directory)**: Raised when an operation expects a file, but the given path is actually a directory.
- **`ENOTDIR` (Not a directory)**: Occurs when a component of the given path exists but is not a directory as expected (e.g., trying to read a sub-path of a file).
- **`EMFILE` (Too many open files)**: The system has reached its maximum limit for open file descriptors. This often happens when opening many files in parallel without closing them.
- **`EPERM` (Operation not permitted)**: An attempt was made to perform an action that requires elevated (root/admin) privileges.

Higher-Level Categories

Beyond specific system codes, Node.js errors are often grouped by their cause:

- **Operational Errors**: Runtime problems like the ones listed above (e.g., "file not found"). These are expected and should be handled gracefully in your code.
- **Programmer Errors**: Bugs in your code, such as **`TypeError`** (passing a number instead of a path string) or **`SyntaxError`** (malformed code). These should be fixed in development rather than "handled" at runtime.
- **Assertion Errors**: Raised by the `assert` module when a logic violation occurs that should never happen.

Identifying the Error

You can determine the error type by checking the `code` or `name` property of the error object in a callback or `catch` block:

javascript

```
const fs = require('fs');

fs.readFile('non-existent.txt', (err, data) => {
  if (err) {
    if (err.code === 'ENOENT') {
      console.error('File not found!');
    } else if (err.code === 'EACCES') {
      console.error('Permission denied!');
    }
  }
});
```

Use code with caution.

Are you trying to **debug** a specific error code, or do you need help setting up a **global error handler** for your project?

- [link](https://nodejs.org/download/release/v8.8.1/docs/api/errors.html)\
  Errors | Node.js v8.8.1 Documentation\
  Table of Contents \* Class: System Error. error.code. error.errno. error.syscall. error.path. error.address. error.port. \* Common S...\
  Node.js
- [link](https://nodejs.org/download/rc/v8.0.0-rc.0/docs/api/errors.html)\
  Errors | Node.js v8.0.0-rc.0 Documentation\
  \* Errors. Error Propagation and Interception. Node.js style callbacks. Class: Error. new Error(message) Error.captureStackTrace(ta...\
  Node.js
- [link](https://nodejs.org/download//rc/v4.0.0-rc.3/docs/api/errors.html)\
  Errors Node.js v4.0.0-rc.3 Manual & Documentation\
  Table of Contents \* JavaScript Errors. Class: Error. new Error(message) error.message. error.stack. Error.captureStackTrace(target...\
  Node.js

Show all

example

April 20, 2026

Here is an example of handling common file system errors using the modern **`async/await`** pattern with `fs/promises`. This approach uses a `try/catch` block to intercept errors and checks the specific `err.code` to handle different failure scenarios gracefully.

Implementation Example

This code attempts to read a configuration file. If the file is missing (`ENOENT`) or inaccessible (`EACCES`), it logs a specific message instead of crashing the application.

javascript

```
const fs = require('node:fs/promises');

async function loadConfig(filePath) {
  try {
    // Attempt to read the file
    const data = await fs.readFile(filePath, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    // Check system error codes to handle specific issues
    if (err.code === 'ENOENT') {
      console.error(`Error: File not found at ${filePath}. Using defaults.`);
      return { theme: 'light', port: 3000 }; // Fallback values
    }

    if (err.code === 'EACCES') {
      console.error(`Error: Permission denied for ${filePath}.`);
    }

    // If it's a different error (like a SyntaxError from JSON.parse),
    // re-throw it to be handled by a higher-level function
    throw err;
  }
}

// Usage
loadConfig('./config.json')
  .then(config => console.log('Config loaded:', config))
  .catch(err => console.error('A critical error occurred:', err.message));
```

Use code with caution.

Key Practices Used

- **Checking `err.code`**: System errors (like those from `fs`) provide a stable string code that is better for logic than checking the `message` string.
- **Fallback values**: For operational errors like `ENOENT`, providing a default value allows the app to continue running.
- **Re-throwing**: If the error is not one you expected (e.g., a logic bug like `TypeError`), it is best to `throw` it again so it can be logged and fixed.
- **Avoid "Access Before Open"**: It is generally recommended to try the operation directly and handle the error in the `catch` block rather than using `fs.access()` first, as the file status could change between the check and the action.

Would you like to see how to handle these errors in an **Express.js middleware** or using the older **callback-style** pattern?

- [link](https://nodejs.org/api/errors.html)\
  Errors | Node.js v25.9.0 Documentation\
  Node.js v25.9.0. Table of contents. Errors. Error propagation and interception. Class: Error. new Error(message\[, options]) Error.\
  Node.js
- [link](https://bun.com/reference/node/fs/promises)\
  Node.js fs/promises module | API Reference - Bun\
  Tests a user's permissions for the file or directory specified by path . The mode argument is an optional integer that specifies t...\
  Bun
- [link](https://www.honeybadger.io/blog/errors-nodejs/)\
  A comprehensive guide to error handling In Node.js\
  Here are five essential practices you should adopt: \* 1. Always use error objects. Never throw strings, numbers, or plain objects ...\
  www.honeybadger.io

Show all

#

nodejs write file error types example

April 22, 2026

In Node.js, file-writing errors typically fall into two main categories: **system errors** (operational issues like missing folders or locked files) and **JavaScript errors** (coding mistakes like passing the wrong data type).

Common System Errors (`err.code`)

System errors are triggered by underlying operating system constraints. You can identify these by checking the `.code` property on the error object.

- **`ENOENT` (No such file or directory)**: Occurs if you try to write to a path where a parent directory does not exist.
- **`EACCES` (Permission denied)**: Occurs when the user running the Node script doesn't have permission to write to that specific folder or file.
- **`EISDIR` (Is a directory)**: Thrown if you try to write data to a path that is actually a folder rather than a file.
- **`EEXIST` (File exists)**: Common when using specific flags (like `x` for exclusive) that prevent overwriting an existing file.
- **`ENOSPC` (No space left on device)**: Triggered when the drive is full and cannot accept more data.

JavaScript Error Types

These usually occur before Node.js even attempts to talk to the operating system.

- **`TypeError`**: Thrown when you pass an invalid argument type to the writing function (e.g., passing an object instead of a string or buffer).
- **`RangeError`**: Occurs if the data you are trying to write exceeds the maximum size allowed for a buffer or string.

Code Example: Handling Specific Errors

This example uses the fs/promises module to catch and identify different error types.

javascript

```
const { writeFile } = require('fs/promises');

async function saveData(path, data) {
  try {
    await writeFile(path, data);
    console.log('File saved successfully!');
  } catch (err) {
    // Handling System Errors via 'code'
    if (err.code === 'ENOENT') {
      console.error('Error: The directory for this path does not exist.');
    } else if (err.code === 'EACCES') {
      console.error('Error: Permission denied.');
    }
    // Handling JavaScript Errors via 'name' or 'instanceof'
    else if (err instanceof TypeError) {
      console.error('Error: Invalid data type provided for writing.');
    } else {
      console.error(`An unexpected error occurred: ${err.message}`);
    }
  }
}

saveData('/invalid/path/test.txt', 'Hello World');
```

Use code with caution.

For more detailed information on error codes, you can refer to the official [Node.js Errors documentation](https://nodejs.org/api/errors.html).

Would you like to see how to handle these errors using **streams** for larger files?

- [link](https://nodejs.org/api/errors.html)\
  Errors | Node.js v25.9.0 Documentation\
  Node.js v25.9.0. Table of contents. Errors. Error propagation and interception. Class: Error. new Error(message\[, options]) Error.\
  Node.js
- [link](https://stackoverflow.com/questions/2496710/writing-to-files-in-node-js)\
  Writing to files in Node.js - Stack Overflow\
  9 Comments. ... I've tested this script using Node, and I tried changing the file path to "/home/", but I got the following error:\
  Stack Overflow
- [link](https://stackoverflow.com/questions/22700597/fs-writefile-has-no-errors-but-fails-to-write-file)\
  fs.writeFile has no errors, but fails to write file - Stack Overflow\
  Comments. ... If you want to write your file asynchronously, try using fs/promises instead of fs . const { writeFile } = require("\
  Stack Overflow

Show all

#

nodejs write file error types example

April 22, 2026

In Node.js, file-writing errors typically fall into two main categories: **system errors** (operational issues like missing folders or locked files) and **JavaScript errors** (coding mistakes like passing the wrong data type).

Common System Errors (`err.code`)

System errors are triggered by underlying operating system constraints. You can identify these by checking the `.code` property on the error object.

- **`ENOENT` (No such file or directory)**: Occurs if you try to write to a path where a parent directory does not exist.
- **`EACCES` (Permission denied)**: Occurs when the user running the Node script doesn't have permission to write to that specific folder or file.
- **`EISDIR` (Is a directory)**: Thrown if you try to write data to a path that is actually a folder rather than a file.
- **`EEXIST` (File exists)**: Common when using specific flags (like `x` for exclusive) that prevent overwriting an existing file.
- **`ENOSPC` (No space left on device)**: Triggered when the drive is full and cannot accept more data.

JavaScript Error Types

These usually occur before Node.js even attempts to talk to the operating system.

- **`TypeError`**: Thrown when you pass an invalid argument type to the writing function (e.g., passing an object instead of a string or buffer).
- **`RangeError`**: Occurs if the data you are trying to write exceeds the maximum size allowed for a buffer or string.

Code Example: Handling Specific Errors

This example uses the fs/promises module to catch and identify different error types.

javascript

```
const { writeFile } = require('fs/promises');

async function saveData(path, data) {
  try {
    await writeFile(path, data);
    console.log('File saved successfully!');
  } catch (err) {
    // Handling System Errors via 'code'
    if (err.code === 'ENOENT') {
      console.error('Error: The directory for this path does not exist.');
    } else if (err.code === 'EACCES') {
      console.error('Error: Permission denied.');
    }
    // Handling JavaScript Errors via 'name' or 'instanceof'
    else if (err instanceof TypeError) {
      console.error('Error: Invalid data type provided for writing.');
    } else {
      console.error(`An unexpected error occurred: ${err.message}`);
    }
  }
}

saveData('/invalid/path/test.txt', 'Hello World');
```

Use code with caution.

For more detailed information on error codes, you can refer to the official [Node.js Errors documentation](https://nodejs.org/api/errors.html).

Would you like to see how to handle these errors using **streams** for larger files?

- [link](https://nodejs.org/api/errors.html)\
  Errors | Node.js v25.9.0 Documentation\
  Node.js v25.9.0. Table of contents. Errors. Error propagation and interception. Class: Error. new Error(message\[, options]) Error.\
  Node.js
- [link](https://stackoverflow.com/questions/2496710/writing-to-files-in-node-js)\
  Writing to files in Node.js - Stack Overflow\
  9 Comments. ... I've tested this script using Node, and I tried changing the file path to "/home/", but I got the following error:\
  Stack Overflow
- [link](https://stackoverflow.com/questions/22700597/fs-writefile-has-no-errors-but-fails-to-write-file)\
  fs.writeFile has no errors, but fails to write file - Stack Overflow\
  Comments. ... If you want to write your file asynchronously, try using fs/promises instead of fs . const { writeFile } = require("\
  Stack Overflow

Show all

#

## Variants (Non-exhaustive)

<details open="" style="box-sizing: border-box; scrollbar-width: initial; scrollbar-color: var(--scrollbar-color); contain: layout; position: relative; margin-bottom: 8px; color: rgb(221, 221, 221); font-family: &quot;Source Serif 4&quot;, NanumBarunGothic, serif; font-size: 16px; white-space-collapse: collapse; background-color: rgb(53, 53, 53);"><summary style="box-sizing: border-box; scrollbar-width: initial; scrollbar-color: var(--scrollbar-color); font-family: &quot;Fira Sans&quot;, Arial, NanumBarunGothic, sans-serif; list-style-position: initial; list-style-type: none; outline: none; cursor: pointer; font-size: 1rem; position: absolute;"></summary><div style="box-sizing: border-box; scrollbar-width: initial; scrollbar-color: var(--scrollbar-color); margin-left: var(--docblock-indent); position: relative;">Non-exhaustive enums could have additional variants added in future. Therefore, when matching against variants of non-exhaustive enums, an extra wildcard arm must be added to account for any future variants.</div></details>

1.0.0

### NotFound

An entity was not found, often a file.

1.0.0

### PermissionDenied

The operation lacked the necessary privileges to complete.

1.0.0

### ConnectionRefused

The connection was refused by the remote server.

1.0.0

### ConnectionReset

The connection was reset by the remote server.

1.83.0

### HostUnreachable

The remote host is not reachable.

1.83.0

### NetworkUnreachable

The network containing the remote host is not reachable.

1.0.0

### ConnectionAborted

The connection was aborted (terminated) by the remote server.

1.0.0

### NotConnected

The network operation failed because it was not connected yet.

1.0.0

### AddrInUse

A socket address could not be bound because the address is already in use elsewhere.

1.0.0

### AddrNotAvailable

A nonexistent interface was requested or the requested address was not local.

1.83.0

### NetworkDown

The system’s networking is down.

1.0.0

### BrokenPipe

The operation failed because a pipe was closed.

1.0.0

### AlreadyExists

An entity already exists, often a file.

1.0.0

### WouldBlock

The operation needs to block to complete, but the blocking operation was requested to not occur.

1.83.0

### NotADirectory

A filesystem object is, unexpectedly, not a directory.

For example, a filesystem path was specified where one of the intermediate directory components was, in fact, a plain file.

1.83.0

### IsADirectory

The filesystem object is, unexpectedly, a directory.

A directory was specified when a non-directory was expected.

1.83.0

### DirectoryNotEmpty

A non-empty directory was specified where an empty directory was expected.

1.83.0

### ReadOnlyFilesystem

The filesystem or storage medium is read-only, but a write operation was attempted.

### FilesystemLoop

🔬This is a nightly-only experimental API. (`io_error_more` [#86442](https://github.com/rust-lang/rust/issues/86442))

Loop in the filesystem or IO subsystem; often, too many levels of symbolic links.

There was a loop (or excessively long chain) resolving a filesystem object or file IO object.

On Unix this is usually the result of a symbolic link loop; or, of exceeding the system-specific limit on the depth of symlink traversal.

1.83.0

### StaleNetworkFileHandle

Stale network file handle.

With some network filesystems, notably NFS, an open file (or directory) can be invalidated by problems with the network or server.

1.0.0

### InvalidInput

A parameter was incorrect.

1.2.0

### InvalidData

Data not valid for the operation were encountered.

Unlike [`InvalidInput`](https://doc.rust-lang.org/std/io/enum.ErrorKind.html#variant.InvalidInput "variant std::io::ErrorKind::InvalidInput"), this typically means that the operation parameters were valid, however the error was caused by malformed input data.

For example, a function that reads a file into a string will error with `InvalidData` if the file’s contents are not valid UTF-8.

1.0.0

### TimedOut

The I/O operation’s timeout expired, causing it to be canceled.

1.0.0

### WriteZero

An error returned when an operation could not be completed because a call to [`write`](https://doc.rust-lang.org/std/io/trait.Write.html#tymethod.write "method std::io::Write::write") returned [`Ok(0)`](https://doc.rust-lang.org/std/result/enum.Result.html#variant.Ok "variant std::result::Result::Ok").

This typically means that an operation could only succeed if it wrote a particular number of bytes but only a smaller number of bytes could be written.

1.83.0

### StorageFull

The underlying storage (typically, a filesystem) is full.

This does not include out of quota errors.

1.83.0

### NotSeekable

Seek on unseekable file.

Seeking was attempted on an open file handle which is not suitable for seeking - for example, on Unix, a named pipe opened with `File::open`.

1.85.0

### QuotaExceeded

Filesystem quota or some other kind of quota was exceeded.

1.83.0

### FileTooLarge

File larger than allowed or supported.

This might arise from a hard limit of the underlying filesystem or file access API, or from an administratively imposed resource limitation. Simple disk full, and out of quota, have their own errors.

1.83.0

### ResourceBusy

Resource is busy.

1.83.0

### ExecutableFileBusy

Executable file is busy.

An attempt was made to write to a file which is also in use as a running program. (Not all operating systems detect this situation.)

1.83.0

### Deadlock

Deadlock (avoided).

A file locking operation would result in deadlock. This situation is typically detected, if at all, on a best-effort basis.

1.85.0

### CrossesDevices

Cross-device or cross-filesystem (hard) link or rename.

1.83.0

### TooManyLinks

Too many (hard) links to the same filesystem object.

The filesystem does not support making so many hardlinks to the same file.

1.87.0

### InvalidFilename

A filename was invalid.

This error can also occur if a length limit for a name was exceeded.

1.83.0

### ArgumentListTooLong

Program argument list too long.

When trying to run an external program, a system or process limit on the size of the arguments would have been exceeded.

1.0.0

### Interrupted

This operation was interrupted.

Interrupted operations can typically be retried.

1.53.0

### Unsupported

This operation is unsupported on this platform.

This means that the operation can never succeed.

1.6.0

### UnexpectedEof

An error returned when an operation could not be completed because an “end of file” was reached prematurely.

This typically means that an operation could only succeed if it read a particular number of bytes but only a smaller number of bytes could be read.

1.54.0

### OutOfMemory

An operation could not be completed, because it failed to allocate enough memory.

### InProgress

🔬This is a nightly-only experimental API. (`io_error_inprogress` [#130840](https://github.com/rust-lang/rust/issues/130840))

The operation was partially successful and needs to be checked later on due to not blocking.

1.0.0

### Other

A custom error that does not fall under any other I/O error kind.

This can be used to construct your own [`Error`](https://doc.rust-lang.org/std/io/struct.Error.html "struct std::io::Error")s that do not match any [`ErrorKind`](https://doc.rust-lang.org/std/io/enum.ErrorKind.html "enum std::io::ErrorKind").

This [`ErrorKind`](https://doc.rust-lang.org/std/io/enum.ErrorKind.html "enum std::io::ErrorKind") is not used by the standard library.

Errors from the standard library that do not fall under any of the I/O error kinds cannot be `match`ed on, and will only match a wildcard (`_`) pattern. New [`ErrorKind`](https://doc.rust-lang.org/std/io/enum.ErrorKind.html "enum std::io::ErrorKind")s might be added in the future for some of those.

#

i have a js lib. init with a name. hello to say that name. how to write that.

javascript

```
class MyLib {
  constructor(name) {
    this.name = name;
  }

  hello() {
    console.log(`Hello, ${this.name}!`);
  }
}

// Usage:
const greet = new MyLib("Alice");
greet.hello(); // Hello, Alice!
```

Use code with caution.

Would you like to see how to export this as a **module** for use in other files?

functional. node module.

To write this in a functional style as a Node.js module, you can <mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">use a <strong>Factory Function</strong></mark>. This approach uses closures to maintain state instead of the `this` keyword or classes.

1\. The Module File (`myLib.js`)

In Node.js, you assign your factory function to `module.exports` so other files can `require` it.

javascript

```
// myLib.js
function createGreeter(name) {
  // The 'name' variable is "captured" in this scope (closure)
  return {
    hello: () => {
      console.log(`Hello, ${name}!`);
    }
  };
}

module.exports = createGreeter;
```

Use code with caution.

2\. Using the Module (`app.js`)

You import the factory function and call it to initialize your instance.

javascript

```
// app.js
const createGreeter = require('./myLib');

const greeter = createGreeter("Alice");
greeter.hello(); // Output: Hello, Alice!
```

Use code with caution.

Why use this pattern?

- **Encapsulation**: The `name` variable is truly private and cannot be accessed or modified from outside the object.
- **No `this` context**: You avoid common bugs related to the [this keyword](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import) in JavaScript.
- **Lightweight**: It is a standard pattern for small to medium Node.js libraries that prioritize simplicity.

Would you like to know how to add **private helper functions** that only the `hello` method can see?

- [link](https://www.sitepoint.com/understanding-module-exports-exports-node-js/)\
  Understanding module.exports and exports in Node.js - SitePoint\
  Jan 29, 2024 — Requiring a Module Node. js comes with a set of built-in modules that we can use in our code without having to install them. To do...\
  SitePoint
- [link](https://stackify.com/node-js-module-exports/)\
  Node.js Module Exports - Demystified - Stackify\
  Dec 27, 2018 — How to structure your module exports. So now you know that you can apply different bits of code to your module exports object. But...\
  Stackify
- [link](https://www.freecodecamp.org/news/module-exports-how-to-export-in-node-js-and-javascript/)\
  module.exports – How to Export in Node.js and JavaScript\
  Apr 25, 2022 — Here's how: // utility.js const replaceStr = (str, char, replacer) => { const regex = new RegExp(char, "g") const replaced = str. ...\
  freeCodeCamp

Show all

i want to init() and hello(). not a = init, a.hello

Something went wrong and the content wasn't generated.

i want to init() and hello(). not a = init, a.hello

Something went wrong and the content wasn't generated.

i want to init() and hello(). not a = init, a.hello

javascript

```
// myLib.js
module.exports = {
  init(name) {
    this.name = name;
    return this; // Allows chaining
  },

  hello() {
    console.log(`Hello, ${this.name}!`);
    return this;
  }
};
```

Use code with caution.

Usage:

javascript

```
const myLib = require('./myLib');

myLib.init("Alice").hello();
```

Use code with caution.

Keep in mind:

Because Node.js **caches** modules, `myLib` acts like a "singleton." If you call `.init()` in one part of your app, it changes the name for the whole app.

Would you like to see how to make it **reusable** so you can have multiple independent chains at the same time?

no this

To avoid `this` while keeping the `init().hello()` chain, you can use a **Factory Function** that returns an object where each function returns the same API.

The Module (`myLib.js`)

javascript

```
const myLib = () => {
  let state = {};

  const api = {
    init: (name) => {
      state.name = name;
      return api; // Returns the collection of functions
    },
    hello: () => {
      console.log(`Hello, ${state.name}!`);
      return api;
    }
  };

  return api;
};

module.exports = myLib();
```

Use code with caution.

Usage (`app.js`)

javascript

```
const myLib = require('./myLib');

myLib.init("Alice").hello();
```

Use code with caution.

Why this works:

- **No `this`**: It uses **Closures**. The `state` and `api` variables are "remembered" by the functions without needing a context pointer.
- **Chaining**: Since `init` returns the `api` object, you can call `hello` immediately after.
- **Privacy**: The `state` variable is completely inaccessible from the outside; you can only interact with it through the functions.

Do you want to see how to make it **immutable**, so `init` returns a brand new object instead of updating the existing one?

can i just write and read from a variable

Yes, you can use a top-level variable in your module. This is the simplest way to do it in Node.js.

The Module (`myLib.js`)

javascript

```
let currentName = "";

const init = (name) => {
  currentName = name;
  return module.exports; // Return the whole module for chaining
};

const hello = () => {
  console.log(`Hello, ${currentName}!`);
  return module.exports;
};

module.exports = { init, hello };
```

Use code with caution.

Usage (`app.js`)

javascript

```
const myLib = require('./myLib');

myLib.init("Alice").hello();
```

Use code with caution.

How it works:

- **Module Scope**: `currentName` lives inside `myLib.js`. It’s shared by all functions in that file but hidden from the outside.
- **The "Variable"**: You are just reading and writing to `currentName`.
- **Chaining**: By returning `module.exports`, you allow the `init().hello()` syntax you want.

Would you like to see how to handle a **default name** if `init` isn't called first?

you dont chain.

If you want to call `init()` and `hello()` separately without chaining or using `this`, you can use a variable at the top level of your module. \[[1](https://oneuptime.com/blog/post/2026-01-22-nodejs-module-exports-require/view), [2](https://stackify.com/node-js-module-exports/)]

1\. The Module File (`myLib.js`)

By defining `name` at the top of the file, it is shared by all functions in that module but hidden from the outside world.

javascript

```
// Variable stored in the module's scope
let currentName = "";

const init = (name) => {
  currentName = name;
};

const hello = () => {
  console.log(`Hello, ${currentName}!`);
};

// Exporting an object with multiple functions
module.exports = { init, hello };
```

Use code with caution.

2\. Using the Module (`app.js`)

You simply call the functions one after another. \[[1](https://stackoverflow.com/questions/57108371/exporting-multiple-functions-with-arguments)]

javascript

```
const myLib = require('./myLib');

myLib.init("Alice");
myLib.hello(); // Output: Hello, Alice!
```

Use code with caution.

Key Details

- **No `this`**: The functions directly read and write to the `currentName` variable in their scope.
- **No Chaining**: `init` does not need to return anything; it just updates the variable.
- **Module Caching**: In Node.js, modules are cached. If you `require('./myLib')` in two different files, they will share the same `currentName` variable. \[[1](https://www.sitepoint.com/understanding-module-exports-exports-node-js/), [2](https://www.youtube.com/watch?v=hvOrwICaEJY\&t=5), [3](https://medium.com/@osiolabs/use-module-exports-to-keep-node-js-code-organized-9379526ebac8), [4](https://oneuptime.com/blog/post/2026-01-22-nodejs-module-exports-require/view)]

Do you need this to work with **multiple names** at once, or is one name for the whole app enough?

- [link](https://www.sitepoint.com/understanding-module-exports-exports-node-js/)\
  Understanding module.exports and exports in Node.js\
  Jan 29, 2024 — Requiring a Module. Node. js comes with a set of built-in modules that we can use in our code without having to install them. To d...\
  SitePoint
- [link](https://oneuptime.com/blog/post/2026-01-22-nodejs-module-exports-require/view)\
  How to Use module.exports and require Properly in Node.js\
  Jan 22, 2026 — The Basics. Every Node. js file has access to a module object. The module. exports property determines what the file exports when ...\
  OneUptime
- [link](https://medium.com/@osiolabs/use-module-exports-to-keep-node-js-code-organized-9379526ebac8)\
  Use Module.exports to Keep Node.js Code Organized | by Osio Labs\
  Dec 18, 2018 — What is module. exports? To export code from a file, we assign values to the file's module. exports object. Each JavaScript file i...\
  Medium·Osio Labs

Show all

what does cached mean

In Node.js, **cached** means that the first time you `require()` a file, Node loads it, runs the code, and **remembers the result** in memory. Every time you `require()` that same file again from anywhere in your app, Node doesn't reload the file; it just hands you back the exact same object it already has in its memory. \[[1](https://www.reddit.com/r/node/comments/x90rjn/eli5%5Fwhat%5Fis%5Fmodule%5Fcaching%5Fin%5Fnodejs/), [2](https://medium.com/yavar/what-is-the-node-module-in-node-js-19ef41820af8), [3](https://www.linkedin.com/posts/prince-verma-edignite%5Fnodejs-backenddevelopment-javascript-activity-7372625150350934016-aTOm), [4](https://stackoverflow.com/questions/8887318/understanding-node-js-modules-multiple-requires-return-the-same-object), [5](https://javascript.plainenglish.io/understanding-module-caching-in-node-js-7bc0a22ce948)]

How it affects your library:

If you use a top-level variable like `let currentName = ""`, it becomes a **shared state** across your whole app. \[[1](https://www.reddit.com/r/node/comments/x90rjn/eli5%5Fwhat%5Fis%5Fmodule%5Fcaching%5Fin%5Fnodejs/), [3](https://www.linkedin.com/posts/prince-verma-edignite%5Fnodejs-backenddevelopment-javascript-activity-7372625150350934016-aTOm)]

1. **File A** calls `myLib.init("Alice")`. The variable `currentName` is now "Alice".
2. **File B** calls `myLib.hello()`. It will print "Hello, Alice!" because it is using the same "remembered" version of your library from File A.
3. **File C** calls `myLib.init("Bob")`. Now, if File A or B calls `hello()` again, they will both see "Bob". \[[1](https://bambielli.com/til/2017-04-30-node-require-cache/), [2](https://www.youtube.com/watch?v=JQfOtwfDohY\&t=191), [3](https://javascript.plainenglish.io/understanding-module-caching-in-node-js-7bc0a22ce948)]

Why does Node do this?

- **Speed**: It’s much faster to pull a file from memory than to read it from the hard drive every time.
- **Consistency**: It allows you to share things like database connections or configurations easily across different files. \[[1](https://piyushcv.hashnode.dev/singleton-nature-of-nodejs-modules), [3](https://gemmablack.dev/nodejs-refreshing-a-module-using-requirecache), [4](https://www.honeybadger.io/blog/nodejs-caching/), [5](https://www.linkedin.com/posts/prince-verma-edignite%5Fnodejs-backenddevelopment-javascript-activity-7372625150350934016-aTOm)]

If you want to allow different files to have their **own** names without interfering with each other, you would need to use the **Factory Function** approach where you return a fresh object each time.

Do you want to see how to **clear the cache** if you ever need to force a module to reload?

- [link](https://www.reddit.com/r/node/comments/x90rjn/eli5%5Fwhat%5Fis%5Fmodule%5Fcaching%5Fin%5Fnodejs/)\
  ELI5 : what is module caching in nodejs : r/node - Reddit\
  Sep 8, 2022 — Go to node. r/node 4y ago. AdershAthreya. ELI5 : what is module caching in nodejs. Upvote 22 Downvote 28 Go to comments Share. Com...\
  Reddit·r/node
- [link](https://stackoverflow.com/questions/8887318/understanding-node-js-modules-multiple-requires-return-the-same-object)\
  Understanding Node.js modules: multiple requires return the ...\
  Jan 16, 2012 — js modules: multiple requires return the same object? Ask Question. Asked 14 years, 3 months ago. Modified 6 years ago. Viewed 50k...\
  Stack Overflow
- [link](https://piyushcv.hashnode.dev/singleton-nature-of-nodejs-modules)\
  Singleton Nature of Node.js Modules - Hashnode\
  Jul 12, 2024 — Node. js modules are a fundamental part of any Node. js application, providing a way to structure code, share functionality, and m...\
  Hashnode

Show all
