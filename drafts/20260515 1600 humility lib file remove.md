<!-- no need to have pathname (dirname, extname, ...) for now i think. crud is enough. (write, read, edit, remove). i have auto mkdir. -->

<!-- i suppose i dont need mv cp ... use run instead. rn and mv are the same thing. -->

<!-- use run for ruby pathname. -->

<!-- use run (ls, find/rg, ...) for ruby dir methods. -->

#

ruby file methods

April 18, 2026

The **File** class in Ruby provides a wide range of methods for interacting with the filesystem, including reading, writing, and querying file properties. Because `File` is a subclass of [IO](https://ruby-doc.org/core-3.1.0/File.html), it inherits many low-level input/output operations. \[[1](https://www.tutorialspoint.com/ruby/ruby%5Ffile%5Fmethods.htm), [2](https://www.tutorialspoint.com/ruby/ruby%5Finput%5Foutput.htm)]

Core File Operations

These are the most common methods used for basic file handling:

- **`File.open(path, mode)`**: Opens a file. If used with a block, it automatically closes the file after the block executes.
- **`File.read(path)`**: A shortcut that opens, reads the entire content into a string, and closes the file in one step.
- **`File.write(path, string)`**: Writes content to a file, overwriting existing data by default.
- **`File.readlines(path)`**: Reads the entire file and returns an array where each element is a line.
- **`File.foreach(path) { |line| ... }`**: Efficiently iterates through a file line-by-line without loading the whole file into memory.
- **`File.delete(path)`** / **`File.unlink(path)`**: Permanently removes the specified file. \[[1](https://stackoverflow.com/questions/5545068/what-are-all-the-common-ways-to-read-a-file-in-ruby), [2](https://www.rubyguides.com/2015/05/working-with-files-ruby/), [3](https://shalingamanasinghe.medium.com/ruby-working-with-files-1f1a8d3190c4), [4](https://ruby-doc.org/core-1.8.6/File.html), [5](https://www.tutorialspoint.com/ruby/ruby%5Finput%5Foutput.htm), [6](https://www.tutorialspoint.com/ruby/ruby%5Ffile%5Fmethods.htm)]

Path and Name Inquiries

Use these class methods to parse or manipulate file paths: \[[1](https://www.scaler.com/topics/ruby-cheat-sheets/)]

- **`File.basename(path)`**: Returns the last component of the filename (e.g., `"ruby.rb"`).
- **`File.dirname(path)`**: Returns the directory portion of the path.
- **`File.extname(path)`**: Extracts the file extension (e.g., `".rb"`).
- **`File.expand_path(path)`**: Converts a relative path into an absolute path.
- **`File.join(item1, item2, ...)`**: Combines strings into a single path using the platform-specific separator. \[[1](https://ruby-doc.org/core-2.5.5/File.html), [2](https://ruby-doc.org/core-2.6.9/File.html), [3](https://ruby-doc.org/core-1.8.6/File.html), [4](https://www.tutorialspoint.com/ruby/ruby%5Ffile%5Fmethods.htm)]

Testing File Attributes

These methods return `true` or `false` to check the status of a file:

- **`File.exist?(path)`**: Checks if a file or directory exists at the given path.
- **`File.file?(path)`**: Returns true if the path is a regular file.
- **`File.directory?(path)`**: Returns true if the path is a directory.
- **`File.zero?(path)`**: Checks if the file is empty (size 0).
- **`File.readable?(path)`**, **`File.writable?(path)`**, **`File.executable?(path)`**: Checks for specific user permissions. \[[1](https://ruby-doc.org/core-1.8.6/File.html), [2](https://www.tutorialspoint.com/ruby/ruby%5Ffile%5Fmethods.htm), [3](https://www.tutorialspoint.com/ruby/ruby%5Finput%5Foutput.htm)]

File Metadata and Permissions

- **`File.size(path)`**: Returns the file size in bytes.
- **`File.mtime(path)`**: Returns the last modification time as a `Time` object.
- **`File.chmod(mode, path)`**: Changes the permission bits of the file (e.g., `0644`).
- **`File.rename(old_name, new_name)`**: Renames or moves a file. \[[1](https://ruby-doc.org/docs/ruby-doc-bundle/Manual/man-1.4/File.html), [2](https://ruby-doc.org/core-3.1.0/File.html), [3](https://ruby-doc.org/core-1.8.6/File.html), [4](https://www.tutorialspoint.com/ruby/ruby%5Ffile%5Fmethods.htm)]

For more advanced filesystem tasks like copying or moving entire directory trees, you may want to explore the FileUtils module, which is part of the Ruby standard library. \[[1](https://rubyreferences.github.io/rubyref/builtin/system-cli/filesystem.html)]

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
- **`chomp`**: Used frequently when reading files to remove the automatic newline character (`\n`) from the end of each line. \[[1](https://www.railscarma.com/sv/blogg/how-to-read-and-write-files-in-ruby-with-examples/), [2](https://jeromedalbert.com/dead-simple-file-handling-in-ruby/), [3](https://stackoverflow.com/questions/5545068/what-are-all-the-common-ways-to-read-a-file-in-ruby), [4](https://www.railscarma.com/blog/how-to-read-and-write-files-in-ruby-with-examples/), [5](https://jeromedalbert.com/dead-simple-file-handling-in-ruby/)]

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

If the file is small enough to fit comfortably in your computer's RAM, you can "slurp" it—reading the entire contents into a single variable at once. \[[1](https://stackoverflow.com/questions/5545068/what-are-all-the-common-ways-to-read-a-file-in-ruby), [2](https://www.reddit.com/r/ruby/comments/37dbye/reading%5Fvery%5Flarge%5Ffiles%5Fwith%5Fruby/)]

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

Use code with caution.\
\[[1](https://writesoftwarewell.com/how-to-read-file-in-ruby), [2](https://medium.com/@jagiweb/how-to-read-write-files-in-ruby-8201fb77c2d4), [3](https://stackoverflow.com/questions/4846394/how-to-efficiently-parse-large-text-files-in-ruby), [4](https://stackoverflow.com/questions/5545068/what-are-all-the-common-ways-to-read-a-file-in-ruby)]

2\. For Large Files: Streaming

For large files (megabytes or gigabytes), loading everything into memory can cause your program to slow down or crash. Instead, you should "stream" the file line-by-line. \[[1](https://weiyuan-liu.medium.com/til-how-reading-a-file-in-ruby-caused-a-major-memory-leak-issue-c377ba6c2e40), [2](https://www.railscarma.com/blog/how-to-read-and-write-files-in-ruby-with-examples/), [3](https://stackoverflow.com/questions/5545068/what-are-all-the-common-ways-to-read-a-file-in-ruby), [4](https://writesoftwarewell.com/how-to-read-file-in-ruby)]

- **Line-by-Line (Recommended)**: File.foreach is the most memory-efficient way to process each line individually.\
  ruby

<!---->

```
File.foreach("large_data.log") do |line|
  puts line if line.include?("ERROR")
end
```

Use code with caution.\
\[[1](https://www.kartikey.dev/2020/10/02/memory-efficient-way-reading-and-downloading-file-in-ruby.html), [2](https://stackoverflow.com/questions/5545068/what-are-all-the-common-ways-to-read-a-file-in-ruby)]

3\. Advanced Control: Manual Handling

If you need fine-grained control (like reading exactly 1024 bytes at a time), use the block form of File.open. \[[1](https://www.naukri.com/code360/library/read-and-write-files-in-ruby), [2](https://www.railscarma.com/blog/how-to-read-and-write-files-in-ruby-with-examples/)]

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

Use code with caution.\
\[[1](https://writesoftwarewell.com/how-to-read-file-in-ruby), [2](https://www.railscarma.com/blog/how-to-read-and-write-files-in-ruby-with-examples/)]

Comparison Summary

| Method \[[1](https://tjay.dev/howto-working-efficiently-with-large-files-in-ruby/), [2](https://stackoverflow.com/questions/5545068/what-are-all-the-common-ways-to-read-a-file-in-ruby), [3](https://www.reddit.com/r/ruby/comments/37dbye/reading%5Fvery%5Flarge%5Ffiles%5Fwith%5Fruby/), [4](https://www.kartikey.dev/2020/10/02/memory-efficient-way-reading-and-downloading-file-in-ruby.html), [5](https://www.railscarma.com/blog/how-to-read-and-write-files-in-ruby-with-examples/)] | Output       | Memory Usage       | Best For...                              |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | ------------------ | ---------------------------------------- |
| `File.read`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | String       | High (whole file)  | Small config files                       |
| `File.readlines`                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Array        | Very High          | Small files where you need random access |
| `File.foreach`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Yields lines | **Low (constant)** | Large logs or CSVs                       |
| `File.open`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | File Object  | Low/Varies         | Complex logic or binary data             |

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

If `File.read` fails, <mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">Ruby will <strong>raise an exception</strong> and, unless you handle it, your program will immediately stop and print an error message (backtrace) to the console</mark>. \[[1](https://www.honeybadger.io/blog/a-beginner-s-guide-to-exceptions-in-ruby/), [2](https://www.appsignal.com/learning-center/understanding-ruby-error-messages)]

The specific error raised depends on the cause of the failure: \[[1](https://www.ruby-forum.com/t/file-open-failure-test/177869), [2](https://rubyreferences.github.io/rubyref/builtin/exception/exception-classes.html)]

Common Exceptions

- **`Errno::ENOENT` (No such file or directory)**: This is the most common error, occurring if the file path is incorrect or the file doesn't exist.
- **`Errno::EACCES` (Permission denied)**: Raised if you don't have the required system permissions to read the file.
- **`Errno::EISDIR` (Is a directory)**: Raised if you point `File.read` to a directory instead of a file.
- **`IOError`**: A more general error for input/output operation failures, such as trying to read from a closed file stream. \[[1](https://stackoverflow.com/questions/22898310/what-is-the-clearest-way-to-open-a-file-and-do-rescue-when-it-cannot-be-opened), [2](https://skorks.com/2009/09/ruby-exceptions-and-exception-handling/), [3](https://rubytalk.org/t/in-read-no-such-file-or-directory-rb-sysopen-d-errno-enoent/73646), [4](https://blog.appsignal.com/2016/10/18/ruby-magic-exceptions-primer.html), [5](https://stackoverflow.com/questions/48584491/ruby-rescue-any-error-related-to-file-or-directory-handling)]

How to Handle These Errors

To prevent your program from crashing, you can "rescue" these exceptions using a `begin...rescue` block. It is best practice to rescue specific errors rather than all errors. \[[1](https://stackify.com/rescue-exceptions-ruby/), [2](https://blog.appsignal.com/2016/10/18/ruby-magic-exceptions-primer.html), [3](https://www.honeybadger.io/blog/a-beginner-s-guide-to-exceptions-in-ruby/)]

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

ruby file detete file unlink

In Ruby, **`File.delete` and `File.unlink` are exactly the same function**. `File.delete` is simply a [built-in alias for `File.unlink`](https://ruby-doc.org/core-3.1.0/File.html). Both methods invoke the underlying operating system `unlink` system call to remove the file from the filesystem directory entry. \[[1](https://stackoverflow.com/questions/8678086/is-it-okay-to-unlink-files-without-closing-them-in-ruby), [2](https://ruby-doc.org/core-3.1.0/File.html), [3](https://www.ibm.com/docs/en/zos/2.5.0?topic=functions-unlink-remove-directory-entry)]

🛠️ Basic Usage

You can pass one or multiple file paths as string arguments to either method: \[[1](https://rubydoc.info/stdlib/core/1.9.3/File.unlink), [2](https://ruby-doc.org/stdlib-1.8.6/libdoc/ftools/rdoc/File.html)]

ruby

```
# Deleting a single file
File.delete("path/to/file.txt")
File.unlink("path/to/file.txt")

# Deleting multiple files at once
File.delete("file1.txt", "file2.txt", "file3.txt")
```

Use code with caution.

⚠️ Error Handling

If a specified file does not exist, both methods will throw an **`Errno::ENOENT` exception**. To avoid crashes, you should safely check for existence or handle the error: \[[1](https://www.ruby-forum.com/t/deleting-a-file-is-there-a-less-clumsy-way-to-do-this/105907), [2](https://stackoverflow.com/questions/12808988/rails-how-to-delete-a-file-without-failing-on-error), [3](https://www.scaler.com/topics/ruby-file/)]

ruby

```
filename = "data.txt"

# Approach 1: Check if file exists first
File.delete(filename) if File.exist?(filename)

# Approach 2: Rescue the missing file error
begin
  File.unlink(filename)
rescue Errno::ENOENT
  # File already did not exist, safe to ignore
end
```

Use code with caution.

📂 Advanced Directory Deletion \[[1](https://www.ruby-forum.com/t/deleting-a-file-is-there-a-less-clumsy-way-to-do-this/105907)]

Neither `File.delete` nor `File.unlink` can delete folders/directories. To remove folders, use the standard FileUtils library: \[[1](https://ruby-doc.org/docs/ruby-doc-bundle/Manual/man-1.4/File.html), [2](https://programmingresources.fandom.com/wiki/Ruby:%5FDeleting%5FFiles), [3](https://beyondjapan.com/en/blog/2022/10/why-sl-unlink/), [4](https://stackoverflow.com/questions/12758117/how-to-delete-a-file-from-the-file-system-using-ruby-on-rails-2-3-9-and-ruby-1-8)]

ruby

```
require 'fileutils'

# Remove an empty directory
Dir.rmdir("empty_folder")

# Forcefully remove a directory and all of its contents (like rm -rf)
FileUtils.rm_rf("folder_to_delete")
```

Use code with caution.

If you would like to proceed, let me know:

- Are you trying to handle **permissions errors (`Errno::EACCES`)**?

- Are you working with **temporary files (`Tempfile`)** that need automatic cleanup?

- Do you need to delete files matching a specific **pattern/extension**? \[[1](https://stackoverflow.com/questions/25269803/how-to-close-and-delete-a-file-in-ruby), [2](https://stackoverflow.com/questions/12758117/how-to-delete-a-file-from-the-file-system-using-ruby-on-rails-2-3-9-and-ruby-1-8), [3](https://ruby-doc.org/stdlib-2.6.2/libdoc/tempfile/rdoc/Tempfile.html), [4](https://rubytalk.org/t/how-do-i-delete-files-in-particular-directoryin-ruby/60307)]

- [link](https://www.ruby-forum.com/t/deleting-a-file-is-there-a-less-clumsy-way-to-do-this/105907)\
  Deleting a file - is there a less clumsy way to do this?\
  Jun 4, 2007 — Ruby. ronaldfischer June 4, 2007, 3:15pm 1. In my application, I often have blocks of code, where during preparation. code, I need...\
  Ruby-Forum

- [link](https://stackoverflow.com/questions/8678086/is-it-okay-to-unlink-files-without-closing-them-in-ruby)\
  Is it okay to unlink files without closing them in ruby? - Stack Overflow\
  Dec 30, 2011 — \* 1 Answer. Sorted by: This answer is not useful. Loading when this answer was accepted… On linux this is safe and is often used t...\
  Stack Overflow

- [link](https://stackoverflow.com/questions/12808988/rails-how-to-delete-a-file-without-failing-on-error)\
  Rails how to delete a file without failing on error - Stack Overflow\
  Oct 9, 2012 — 2 Answers \* File.delete(path\_to\_file) if File.exist?(path\_to\_file) Another thing: make sure that you always close files that you h...\
  Stack Overflow

Show all

#

how to async delete a file in nodejs

To asynchronously delete a file in Node.js, you should use the **`unlink` function** provided by the built-in `fs` (File System) module. \[[1](https://dev.to/mccallum91/nodejs-file-system-utilizing-unlink-and-unlinksync-for-file-deletion-595e), [2](https://www.esparkinfo.com/qanda/nodejs/remove-file-in-node-js-using-fs-module)]

There are two common asynchronous approaches: using **`async/await`** (recommended for modern code) or using a **traditional callback function**. \[[1](https://futurestud.io/tutorials/node-js-delete-a-file-from-disk), [2](https://medium.com/@noel.benji/harnessing-the-power-of-asynchronous-programming-in-node-js-for-enhanced-server-performance-b30c86857f5f), [3](https://www.freecodecamp.org/news/how-to-read-and-write-files-with-nodejs/), [4](https://coreui.io/answers/how-to-delete-files-in-nodejs/), [5](https://dev.to/mccallum91/nodejs-file-system-utilizing-unlink-and-unlinksync-for-file-deletion-595e)]

1\. Using `async/await` (Recommended) \[[1](https://coreui.io/answers/how-to-delete-files-in-nodejs/)]

This approach leverages the promise-based File System API (`node:fs/promises`), keeping your asynchronous code clean and linear. \[[1](https://www.youtube.com/watch?v=pWRcazOOf-g), [2](https://futurestud.io/tutorials/node-js-delete-a-file-from-disk)]

javascript

```
import { unlink } from 'node:fs/promises';

async function deleteFile(filePath) {
  try {
    await unlink(filePath);
    console.log(`Successfully deleted ${filePath}`);
  } catch (error) {
    console.error(`Error deleting file: ${error.message}`);
  }
}

// Usage Example
deleteFile('./path/to/file.txt');
```

Use code with caution.

2\. Using Callbacks

If you are working in an older codebase or prefer callbacks, use the standard `fs.unlink()` method. The final argument is a callback function that handles any potential runtime errors. \[[1](https://coreui.io/answers/how-to-delete-files-in-nodejs/), [2](https://www.youtube.com/watch?v=kcQWzRX37ag), [3](https://conermurphy.com/blog/deleting-files-node-js-promises/), [4](https://coreui.io/answers/how-to-delete-files-in-nodejs/), [5](https://dev.to/mccallum91/nodejs-file-system-utilizing-unlink-and-unlinksync-for-file-deletion-595e)]

javascript

```
import fs from 'node:fs';

const filePath = './path/to/file.txt';

fs.unlink(filePath, (err) => {
  if (err) {
    console.error(`Error deleting file: ${err.message}`);
    return;
  }
  console.log('File deleted successfully!');
});
```

Use code with caution.

3\. Alternative for Modern Node.js: `fs.rm()` \[[1](https://coreui.io/answers/how-to-delete-directories-in-nodejs/), [2](https://hackernoon.com/mastering-nodejs-how-to-delete-files-inside-a-nested-folder)]

You can also use `fs.rm()` (or `rm` from `node:fs/promises`). While primarily used for directories, it functions identically to `unlink` for files when used with its default configuration. \[[1](https://futurestud.io/tutorials/node-js-delete-a-file-from-disk)]

javascript

```
import { rm } from 'node:fs/promises';

// Acts exactly like unlink on standard files
await rm('./path/to/file.txt');
```

Use code with caution.

Key Considerations

- **File Permissions:** Ensure your application process holds the proper read/write privileges to modify the directory contents.
- **Missing Files:** If the target file does not exist, Node.js will throw an `ENOENT` error. Always wrap your logic in `try/catch` block or check the callback error object.
- **Symbolic Links:** If the targeted path points to a symbolic link, `unlink` only deletes the link itself, leaving the original source file untouched. \[[1](https://www.ibm.com/docs/en/aix/7.1.0?topic=files-deleting-rm-command), [2](https://www.youtube.com/watch?v=kcQWzRX37ag), [3](https://futurestud.io/tutorials/node-js-delete-a-file-from-disk), [4](https://www.youtube.com/watch?v=pWRcazOOf-g)]

If you would like to expand on this implementation, let me know if you need to **delete multiple files concurrently**, handle **recursive folder cleanup**, or adjust code specifically for **CommonJS (`require`)** syntax. \[[1](https://stackoverflow.com/questions/66456409/trying-to-delete-a-file-using-node-js-should-i-use-asynchronously-fs-unlinkpat), [2](https://stackoverflow.com/questions/30417595/how-can-i-delete-multiple-files-asynchronously), [3](https://coreui.io/answers/how-to-delete-directories-in-nodejs/)]

- [link](https://stackoverflow.com/questions/66456409/trying-to-delete-a-file-using-node-js-should-i-use-asynchronously-fs-unlinkpat)\
  Trying to delete a file using Node.js. Should I ... - Stack Overflow\
  Mar 3, 2021 — Special note: you may not want your API request to fail if you failed to unlink the directory, as you did in fact delete the produ...\
  Stack Overflow
- [link](https://dev.to/mccallum91/nodejs-file-system-utilizing-unlink-and-unlinksync-for-file-deletion-595e)\
  Node.js File System – Utilizing unlink() and unlinkSync() for ...\
  Sep 13, 2023 — js File System – Utilizing unlink() and unlinkSync() for File Deletion. #javascript #webdev #node. In Node. js, you can delete fil...\
  DEV Community
- [link](https://conermurphy.com/blog/deleting-files-node-js-promises/)\
  How to Delete Multiple Files in NodeJS using Promises\
  May 29, 2020 — To accomplish this seemingly mundane task we are going to use the fs.unlink() method from nodeJS' File System package, here is the...\
  Coner Murphy

Show all

#

is undefined the same as void in ts

<mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);"><strong><span style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">No, </span><code dir="ltr" style="font-size: 14px; margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 1px solid rgb(44, 46, 53);">void</code> and <code dir="ltr" style="font-size: 14px; margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 1px solid rgb(44, 46, 53);">undefined</code> are not the same in TypeScript</strong></mark>**.** \[[1](https://www.typescriptlang.org/docs/handbook/2/functions.html)]

While they behave similarly at JavaScript runtime—because a function without a `return` statement implicitly returns `undefined`—they have very different meanings and assignment rules during TypeScript compilation: \[[1](https://dev.to/itsmearka/void-vs-undefined-in-typescript-runtime-vs-compile-time-explained-3k37), [2](https://www.typescriptlang.org/docs/handbook/2/functions.html), [3](https://www.reddit.com/r/typescript/comments/ipowhp/why%5Fdoes%5Fts%5Fhave%5Fa%5Freturn%5Ftype%5Ffor%5Fvoid%5Finstead/), [4](https://mimo.org/glossary/typescript/void), [5](https://dev.to/itsmearka/void-vs-undefined-in-typescript-runtime-vs-compile-time-explained-3k37)]

- **`void`** means the return value **will not be observed or used**. It allows a function to return _anything_, but tells the caller to completely ignore it.
- **`undefined`** is a strict type. It means the function **must explicitly return the literal value `undefined`** (or have no return statement under modern TypeScript versions), and _cannot_ return any other data type. \[[1](https://stackoverflow.com/questions/58885485/why-does-typescript-have-both-void-and-undefined), [2](https://stackoverflow.com/questions/74932375/what-is-the-difference-between-void-never-null-and-undefined-in-typescript-wh), [3](https://stackoverflow.com/questions/66190346/difference-between-unknown-and-void), [4](https://mimo.org/glossary/typescript/void), [5](https://www.reddit.com/r/typescript/comments/ipowhp/why%5Fdoes%5Fts%5Fhave%5Fa%5Freturn%5Ftype%5Ffor%5Fvoid%5Finstead/), [6](https://stackoverflow.com/questions/78095165/typescript-return-vs-return-undefined), [7](https://brunoscopelliti.com/blog/whats-the-difference-between-undefined-and-void-in-typescript/)]

Key Behavior Differences

| Feature \[[1](https://dev.to/keento0809/void-and-never-in-typescript-95b), [2](https://www.youtube.com/watch?v=Q-OKB%5FbRZzM), [3](https://stackoverflow.com/questions/58885485/why-does-typescript-have-both-void-and-undefined), [4](https://stackoverflow.com/questions/74932375/what-is-the-difference-between-void-never-null-and-undefined-in-typescript-wh), [5](https://www.reddit.com/r/typescript/comments/ipowhp/why%5Fdoes%5Fts%5Fhave%5Fa%5Freturn%5Ftype%5Ffor%5Fvoid%5Finstead/), [6](https://brunoscopelliti.com/blog/whats-the-difference-between-undefined-and-void-in-typescript/)] | `void`                                                                 | `undefined`                                           |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------- | ----------------------------------------------------- |
| **Intent**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Ignore the return value.                                               | Expect the literal value `undefined`.                 |
| **Callback Flexibility**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Accepts functions returning _any_ type.                                | Rejects functions returning any non-`undefined` type. |
| **Variable Assignment**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Can only be assigned `undefined` (or `null` if strict checks are off). | Can only be assigned `undefined`.                     |

Why This Difference Matters (The Callback Rule)

The most critical operational difference occurs when you pass functions as callbacks. \[[1](https://stackoverflow.com/questions/58885485/why-does-typescript-have-both-void-and-undefined), [2](https://brunoscopelliti.com/blog/whats-the-difference-between-undefined-and-void-in-typescript/)]

1\. The `void` Type Ignored Return Values \[[1](https://dev.to/keento0809/void-and-never-in-typescript-95b)]

If a callback is typed to return `void`, TypeScript allows you to pass a function that returns a real value. The type system simply ignores that returned value. \[[1](https://stackoverflow.com/questions/58885485/why-does-typescript-have-both-void-and-undefined), [2](https://dev.to/keento0809/void-and-never-in-typescript-95b)]

typescript

```
// TS accepts this because void means "ignore whatever is returned"
const printAndTrack = (callback: () => void) => callback();

const numbers: number[] = [];
printAndTrack(() => numbers.push(1)); // Valid! Array.push returns a number.
```

Use code with caution.

2\. The `undefined` Type Enforces Strict Returns \[[1](https://dev.to/itsmearka/void-vs-undefined-in-typescript-runtime-vs-compile-time-explained-3k37)]

If you alter that callback type to require `undefined`, passing the exact same function will break your build. \[[1](https://stackoverflow.com/questions/58885485/why-does-typescript-have-both-void-and-undefined), [2](https://brunoscopelliti.com/blog/whats-the-difference-between-undefined-and-void-in-typescript/)]

typescript

```
// TS forces this callback to strictly return undefined
const printAndTrackStrict = (callback: () => undefined) => callback();

const numbers: number[] = [];
printAndTrackStrict(() => numbers.push(1));
// ❌ Compilation Error: Type 'number' is not assignable to type 'undefined'.
```

Use code with caution.

Because `Array.prototype.push()` returns a `number`, TypeScript flags an error to prevent you from returning a numeric value where an explicit `undefined` was promised. \[[1](https://stackoverflow.com/questions/58885485/why-does-typescript-have-both-void-and-undefined), [2](https://brunoscopelliti.com/blog/whats-the-difference-between-undefined-and-void-in-typescript/)]

Rule of Thumb

- Use `void` for function return types when the function is executed purely for its side effects and you do not care about its output.
- Use `undefined` for variables, optional parameters, or when a function must explicitly communicate a missing or uninitialized state. \[[1](https://betterprogramming.pub/what-is-void-in-typescript-2d21d4936537), [2](https://dev.to/itsmearka/void-vs-undefined-in-typescript-runtime-vs-compile-time-explained-3k37), [3](https://stackoverflow.com/questions/60700656/is-it-ok-to-cast-undefined-to-void-in-ts), [4](https://spin.atomicobject.com/optional-undefined-typescript/), [5](https://www.reddit.com/r/typescript/comments/1gtnwsh/does%5Fvoid%5Fmake%5Fsense%5Fin%5Fa%5Freturn%5Ftype%5Funion/)]

Would you like to see how to configure your **`tsconfig.json`** to handle strict null checks, or do you need help writing a custom **type guard** to safely handle `undefined` values? \[[1](https://www.youtube.com/watch?v=Q-OKB%5FbRZzM), [2](https://www.youtube.com/watch?v=YpT0rCWdCaE\&t=95)]

- [link](https://stackoverflow.com/questions/58885485/why-does-typescript-have-both-void-and-undefined)\
  Why does TypeScript have both \`void\` and \`undefined\`?\
  Nov 15, 2019 — 2 Answers. Sorted by: 227. This answer is not useful. Loading when this answer was accepted… void has special meaning in function ...\
  Stack Overflow
- [link](https://brunoscopelliti.com/blog/whats-the-difference-between-undefined-and-void-in-typescript/)\
  What's the difference between undefined and void in ...\
  May 17, 2021 — My misunderstanding of undefined and void in TypeScript was based on the meaning undefined and void have in JavaScript. In JavaScr...\
  brunoscopelliti.com
- [link](https://www.reddit.com/r/typescript/comments/ipowhp/why%5Fdoes%5Fts%5Fhave%5Fa%5Freturn%5Ftype%5Ffor%5Fvoid%5Finstead/)\
  Why does TS have a return type for void instead of ... - Reddit\
  Sep 9, 2020 — void means it does not have a return statement. undefined means it is returning the value “undefined” embar5. OP • 6y ago. I think...\
  Reddit·r/typescript

Show all

#

ruby FileUtils methods

April 24, 2026

Ruby's **FileUtils** module provides a set of Unix-like file management methods for copying, moving, and deleting files or directories. To use them, you must first include the module with `require 'fileutils'`. \[[1](https://ruby-doc.org/stdlib-2.4.8/libdoc/fileutils/rdoc/FileUtils.html), [2](https://docs.ruby-lang.org/en/3.4/FileUtils.html), [3](https://docs.ruby-lang.org/en/3.1/FileUtils.html)]

Common FileUtils Methods

The following methods are organized by their primary function as documented in the [Ruby 3.4 FileUtils Documentation](https://docs.ruby-lang.org/en/3.4/FileUtils.html): \[[1](https://docs.ruby-lang.org/en/3.4/FileUtils.html)]

1\. Copying & Moving

- **`cp(src, dest)`**: Copies a file or a list of files to a destination.
- **`cp_r(src, dest)`**: Recursively copies directories and their contents.
- **`mv(src, dest)`**: Moves files or directories; works across different filesystems.
- **`install(src, dest)`**: Copies files and optionally sets permissions (mode, owner, group). \[[1](https://ruby-doc.org/stdlib-2.7.2/libdoc/fileutils/rdoc/FileUtils.html), [2](https://www.rubydoc.info/stdlib/fileutils/FileUtils.cp%5Fr), [3](https://www.rubydoc.info/stdlib/fileutils/FileUtils.move), [4](https://docs.ruby-lang.org/en/2.0.0/FileUtils.html), [5](https://ruby-doc.org/stdlib-2.4.8/libdoc/fileutils/rdoc/FileUtils.html), [6](https://docs.ruby-lang.org/en/3.4/FileUtils.html)]

2\. Deleting

- **`rm(list)`**: Removes a file or a list of files.
- **`rm_rf(list)`**: Force-removes files and directories recursively (equivalent to `rm -rf`).
- **`rmdir(list)`**: Removes empty directories.
- **`remove_entry(path)`**: Deletes an entry, including descendants if it is a directory. \[[1](https://rubyapi.org/o/fileutils), [2](https://ruby-doc.org/stdlib-2.4.8/libdoc/fileutils/rdoc/FileUtils.html), [3](https://docs.ruby-lang.org/en/3.4/FileUtils.html)]

3\. Creating & Directory Management

- **`mkdir(dir)`**: Creates a single directory.
- **`mkdir_p(dir)`**: Creates a directory and any missing parent directories (equivalent to `mkdir -p`).
- **`cd(dir)`** / **`chdir(dir)`**: Changes the current working directory.
- **`pwd()`** / **`getwd()`**: Returns the current working directory. \[[1](https://ruby-doc.org/stdlib-3.0.0/libdoc/fileutils/rdoc/index.html), [2](https://ruby-doc.org/stdlib-2.4.8/libdoc/fileutils/rdoc/FileUtils.html), [3](https://docs.ruby-lang.org/en/3.4/FileUtils.html), [4](https://docs.ruby-lang.org/en/3.1/FileUtils.html)]

4\. File Attributes & Permissions \[[1](https://wiki.archlinux.org/title/File%5Fpermissions%5Fand%5Fattributes)]

- **`chmod(mode, list)`**: Changes the permission mode of files.
- **`chown(user, group, list)`**: Changes the owner and group of files.
- **`touch(list)`**: Updates access and modification times; creates the file if it doesn't exist. \[[1](https://ruby-doc.org/stdlib-2.4.8/libdoc/fileutils/rdoc/FileUtils.html), [2](https://ruby-doc.org/stdlib-2.7.2/libdoc/fileutils/rdoc/FileUtils.html), [3](https://docs.ruby-lang.org/en/3.4/FileUtils.html), [4](https://rubyapi.org/o/fileutils)]

Global Options

Most methods accept a final `options` hash to modify behavior: \[[1](https://ruby-doc.org/stdlib-2.4.8/libdoc/fileutils/rdoc/FileUtils.html), [2](https://ruby-doc.org/stdlib-2.7.2/libdoc/fileutils/rdoc/FileUtils.html), [3](https://docs.ruby-lang.org/en/3.1/FileUtils.html)]

- **`:force`**: Forces the operation (e.g., overwrites files or ignores non-existent targets).
- **`:verbose`**: Prints the command being executed to standard output.
- **`:noop`**: "No Operation"—shows what would happen without actually making changes.
- **`:preserve`**: Maintains the original file's owner, group, and time stamps when copying. \[[1](https://ruby-doc.org/stdlib-3.0.0/libdoc/fileutils/rdoc/FileUtils.html), [2](https://ruby-doc.org/stdlib-2.7.5/libdoc/fileutils/rdoc/FileUtils.html), [3](https://docs.ruby-lang.org/en/3.2/FileUtils.html), [4](https://ruby-doc.org/stdlib-2.4.8/libdoc/fileutils/rdoc/FileUtils.html), [5](https://ruby-doc.org/stdlib-2.7.2/libdoc/fileutils/rdoc/FileUtils.html)]

Utility Modules

You can also use specialized sub-modules to apply these options globally to all calls: \[[1](https://ruby-doc.org/stdlib-2.4.8/libdoc/fileutils/rdoc/FileUtils.html), [2](https://docs.ruby-lang.org/en/3.1/FileUtils.html)]

- **`FileUtils::Verbose`**: Automatically applies `:verbose => true`.
- **`FileUtils::NoWrite`**: Automatically applies `:noop => true`.
- **`FileUtils::DryRun`**: Applies both `:verbose` and `:noop` for testing scripts. \[[1](https://ruby-doc.org/stdlib-2.6/libdoc/fileutils/rdoc/FileUtils.html), [2](https://ruby-doc.org/stdlib-2.4.8/libdoc/fileutils/rdoc/FileUtils.html), [3](https://ruby-doc.org/stdlib-3.0.0/libdoc/fileutils/rdoc/FileUtils.html), [4](https://docs.ruby-lang.org/en/3.1/FileUtils.html), [5](https://ruby-doc.org/stdlib-2.7.5/libdoc/fileutils/rdoc/FileUtils.html), [6](https://ruby-doc.org/stdlib-2.7.2/libdoc/fileutils/rdoc/FileUtils.html)]

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

rust file methods

April 18, 2026

In Rust, file operations are primarily handled through the `std::fs::File` struct and the `std::fs` module. Because file I/O can fail, these methods return a `Result` type, requiring explicit error handling. \[[1](https://doc.rust-lang.org/rust-by-example/std%5Fmisc/file.html), [2](https://www.programiz.com/rust/file-handling), [3](https://sagecode.hashnode.dev/rust-files), [4](https://www.tutorialspoint.com/rust/rust%5Ffile%5Finput%5Foutput.htm)]

Core File Operations

- **`File::open(path)`**: Opens an existing file in **read-only** mode.
- **`File::create(path)`**: Opens a file in **write-only** mode. If the file exists, its content is truncated (deleted); if not, a new file is created.
- **`fs::remove_file(path)`**: Deletes a file from the filesystem.
- **`fs::copy(from, to)`**: Copies the entire contents of one file to another.
- **`fs::rename(from, to)`**: Renames or moves a file to a new path. \[[1](https://doc.rust-lang.org/std/fs/), [2](https://www.geeksforgeeks.org/rust/file-i-o-in-rust/), [3](https://www.w3resource.com/rust/error%5Fhandling/rust-error-propagation-exercise-2.php), [4](https://www.programiz.com/rust/file-handling), [5](https://www.tutorialspoint.com/rust/rust%5Ffile%5Finput%5Foutput.htm)]

Reading and Writing Data

To read or write content, the `File` struct implements the **`Read`** and **`Write`** traits from `std::io`. \[[1](https://stevedonovan.github.io/rust-gentle-intro/3-filesystem.html)]

- **Reading Content**:
  - **`read_to_string(&mut string)`**: Reads the entire file into a `String`.
  - **`read_to_end(&mut vector)`**: Reads the entire file into a (byte vector).
  - **`fs::read_to_string(path)`**: A convenient one-liner to read an entire file into a string without manually opening it.
- **Writing Content**:
  - **`write_all(bytes)`**: Writes an entire buffer (slice of bytes) to the file.
  - **`fs::write(path, content)`**: A one-liner that creates or overwrites a file with the provided content. \[[1](https://doc.rust-lang.org/std/io/trait.Read.html), [2](https://doc.rust-lang.org/std/io/trait.Write.html), [3](https://doc.rust-lang.org/std/fs/), [4](https://www.programiz.com/rust/file-handling), [5](https://stevedonovan.github.io/rust-gentle-intro/3-filesystem.html), [6](https://www.geeksforgeeks.org/rust/file-i-o-in-rust/), [7](https://www.tutorialspoint.com/rust/rust%5Ffile%5Finput%5Foutput.htm)]

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
- **`File::sync_all()`**: Forces the operating system to flush all buffered data to the physical disk. \[[1](https://doc.rust-lang.org/std/fs/struct.File.html), [2](https://www.youtube.com/watch?v=mkFFtO6WA8I), [3](https://docs.rs/async-fs/latest/async%5Ffs/struct.File.html), [4](https://www.geeksforgeeks.org/rust/file-i-o-in-rust/), [5](https://sagecode.hashnode.dev/rust-files)]

**Note on Closing Files:** Rust does not have a dedicated `close()` method. Instead, it uses its ownership system; the file is automatically closed when the `File` variable goes out of scope. \[[1](https://opensource.com/article/23/1/read-write-files-rust), [2](https://codesignal.com/learn/courses/fundamentals-of-text-data-manipulation-in-rust/lessons/writing-and-appending-text-files-in-rust-1), [3](https://www.reddit.com/r/rust/comments/1p7by82/standard%5Flibrary%5Ffile%5Fwriting%5Fcan%5Flead%5Fto%5Fsilent/)]

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

Here is a comprehensive example demonstrating common file operations in Rust, including **writing**, **appending**, and **reading line-by-line**. \[[1](https://rust-lang-nursery.github.io/rust-cookbook/file/read-write.html), [2](https://github.com/alanvardy/gpto/issues/23)]

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
- **One-Liners**: For very simple tasks where you don't mind loading the whole file into memory, you can use `std::fs::read_to_string("path")` or `std::fs::write("path", "content")`. \[[1](https://doc.rust-lang.org/rust-by-example/std%5Fmisc/file/read%5Flines.html), [2](https://www.w3resource.com/rust/error%5Fhandling/rust-error-propagation-exercise-1.php), [3](https://stackoverflow.com/questions/45882329/read-large-files-line-by-line-in-rust), [4](https://blog.logrocket.com/how-to-read-files-rust/), [5](https://opensource.com/article/23/1/read-write-files-rust), [6](https://codesignal.com/learn/courses/fundamentals-of-text-data-manipulation-in-rust/lessons/writing-and-appending-text-files-in-rust-1), [7](https://blog.logrocket.com/how-to-read-files-rust/), [8](https://dev.to/aniket%5Fbotre/day20-navigating-rusts-file-system-a-journey-into-file-handling-5ghg)]

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

ruby pathname methods

April 24, 2026

Ruby's **Pathname** class provides a cleaner, object-oriented way to handle file system paths by combining functionality from `File`, `Dir`, and `FileUtils`. Unlike standard strings, **Pathname objects are immutable**; methods that modify the path return a _new_ Pathname object instead of changing the original. \[[1](https://www.sitepoint.com/rubys-pathname-api/), [2](https://rubyreferences.github.io/rubyref/builtin/system-cli/filesystem.html), [3](https://docs.ruby-lang.org/en/2.4.0/Pathname.html), [4](https://docs.ruby-lang.org/en/master/Pathname.html)]

Core Pathname Methods

You must `require 'pathname'` to use this class. \[[1](https://rubyreferences.github.io/rubyref/builtin/system-cli/filesystem.html)]

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
  - `descend`: Iterates downward from the root to the current path. \[[1](http://ruby-doc.org/stdlib-2.4.1/libdoc/pathname/rdoc/Pathname.html), [2](https://www.rubydoc.info/stdlib/pathname/Pathname), [3](https://blog.rebased.pl/2016/02/03/so-you-want-to-use-pathnames.html), [4](https://stackoverflow.com/questions/31000888/using-ruby-pathname-to-access-relative-directory), [5](https://ruby-doc.org/stdlib-2.6/libdoc/pathname/rdoc/Pathname.html), [6](https://docs.ruby-lang.org/en/3.0/Pathname.html), [7](https://www.sitepoint.com/rubys-pathname-api/), [8](https://docs.ruby-lang.org/en/2.4.0/Pathname.html)]

Key Benefits

| Feature \[[1](https://www.sitepoint.com/rubys-pathname-api/), [2](https://www.sitepoint.com/rubys-pathname-api/), [3](http://ruby-doc.org/stdlib-2.4.1/libdoc/pathname/rdoc/Pathname.html)] | Description                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| **Object-Oriented**                                                                                                                                                                         | Methods like `exist?` are called directly on the path object rather than passing strings to `File.exists?`. |
| **Immutability**                                                                                                                                                                            | Operations like `join` or `dirname` always return new objects, preventing accidental side effects.          |
| **Unified API**                                                                                                                                                                             | Combines features that are otherwise scattered across File, Dir, and FileUtils.                             |

For a complete list of all 80+ methods, refer to the [official Pathname documentation](https://docs.ruby-lang.org/en/3.4/Pathname.html). \[[1](https://docs.ruby-lang.org/en/3.4/Pathname.html), [2](https://www.sitepoint.com/rubys-pathname-api/)]

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

In Ruby, the `Dir` class provides a set of tools for interacting with directory streams and performing filesystem operations like creating, deleting, and navigating folders. \[[1](https://ruby-doc.org/core-3.0.0/Dir.html), [2](https://www.geeksforgeeks.org/ruby/ruby-directories/)]

Class Methods (Common Operations)

These are called directly on the `Dir` class (e.g., `Dir.pwd`). \[[1](https://code.tutsplus.com/ruby-for-newbies-working-with-directories-and-files--net-18810t), [2](https://rubyapi.org/3.4/o/dir)]

- **`Dir.pwd`** (or **`Dir.getwd`**): Returns the current working directory path as a string.
- **`Dir.chdir(path)`**: Changes the current working directory to the specified path. If a block is given, it changes the directory for the duration of that block and then reverts back.
- **`Dir.entries(path)`**: Returns an array of all filenames (including `.` and `..`) in the given directory.
- **`Dir.children(path)`**: Similar to `entries`, but excludes the `.` and `..` directory references.
- **`Dir.glob(pattern)`** (or **`Dir[pattern]`**): Returns an array of filenames that match a shell-like pattern (e.g., `Dir["*.rb"]` for all Ruby files).
- **`Dir.mkdir(path, mode)`**: Creates a new directory at the given path with optional permissions.
- **`Dir.rmdir(path)`** (or **`Dir.delete`**, **`Dir.unlink`**): Removes the specified directory; the directory must be empty.
- **`Dir.exist?(path)`**: Returns `true` if the named file is a directory, `false` otherwise. \[[1](https://docs.ruby-lang.org/en/master/Dir.html), [2](https://medium.com/swlh/files-directories-in-ruby-a-primer-b146cb17d4b9), [3](https://ruby-doc.org/core-1.8.6/Dir.html), [4](https://rubyapi.org/3.4/o/dir), [5](https://hegwin.me/en/posts/different-methods-in-ruby-to-manipulate-directories-and-files), [6](https://railsinsights.com/blog/exploring-the-%60dir%60-class-in-ruby), [7](https://ruby-doc.org/core-2.6.8/Dir.html), [8](https://ruby-doc.org/core-2.6/Dir.html), [9](https://www.linkedin.com/learning/complete-guide-to-ruby/create-directories), [10](https://www.geeksforgeeks.org/ruby/ruby-dir-class-and-its-methods/), [11](https://www.geeksforgeeks.org/ruby/ruby-directories/)]

Instance Methods (Directory Streams)

These are called on a `Dir` object created via `Dir.new` or `Dir.open`. \[[1](https://docs.ruby-lang.org/en/3.4/Dir.html), [2](https://docs.ruby-lang.org/en/master/Dir.html)]

- **`read`**: Reads the next entry from the directory stream and returns it as a string.
- **`each { |file| ... }`**: Iterates over every entry in the directory.
- **`rewind`**: Repositions the directory stream back to the first entry.
- **`pos`** (or **`tell`**): Returns the current position in the directory stream.
- **`seek(position)`**: Moves the stream to a specific position (previously obtained by `pos`).
- **`close`**: Closes the directory stream. \[[1](http://ruby-doc.org/core-2.5.5/Dir.html), [2](https://ruby-doc.org/core-2.4.0/Dir.html), [3](https://ruby-doc.org/core-3.1.1/Dir.html), [4](https://ruby-doc.org/core-2.7.5/Dir.html), [5](https://ruby-doc.org/core-2.6.8/Dir.html), [6](https://docs.ruby-lang.org/en/master/Dir.html)]

For more detailed technical specifications, you can refer to the official [Ruby-Doc for the Dir class](https://ruby-doc.org/core-3.1.1/Dir.html). \[[1](https://rubyapi.org/3.4/o/dir)]

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

ruby file error types

April 20, 2026

In Ruby, file-related errors are primarily handled through the `Errno` family of exceptions, which map low-level operating system errors to specific Ruby classes. These typically inherit from `SystemCallError` or `IOError`. \[[1](https://rubyreferences.github.io/rubyref/builtin/exception/exception-classes.html), [2](https://ruby-doc.org/core-2.5.1/Errno.html), [3](https://ruby-doc.org/core-3.0.0/Exception.html), [4](https://docs.ruby-lang.org/en/3.4/Errno.html)]

Common File and I/O Errors

- **Errno::ENOENT**: Raised when a file or directory is not found at the specified path.
- **Errno::EACCES**: Occurs when permission is denied for the attempted file operation.
- **Errno::EEXIST**: Raised when trying to create a file that already exists in a context that requires a new one.
- **EOFError**: A subclass of `IOError` raised when an I/O operation reaches the end of a file unexpectedly.
- **IOError**: The base class for errors involving input/output operation failures.
- **Errno::ENOSPC**: Raised when there is no space left on the device during a write operation.
- **Errno::EISDIR**: Occurs when a directory is specified where a regular file was expected (e.g., trying to open a directory for writing). \[[1](https://www.honeybadger.io/blog/understanding-rubys-strange-errno-exceptions/), [2](https://skorks.com/2009/09/ruby-exceptions-and-exception-handling/), [3](https://rollbar.com/blog/ruby-exception-handling-primer-for-dealing-with-errors-in-ruby/), [4](https://rubyreferences.github.io/rubyref/builtin/exception/exception-classes.html), [5](https://ruby-doc.org/core-3.0.0/Exception.html)]

General Script and Loading Errors

These often occur before a file is even fully processed:

- **LoadError**: Raised when a `require` or `load` statement fails to find or load the specified file.
- **SyntaxError**: Raised if the file being executed contains invalid Ruby syntax. \[[1](https://medium.com/@nerdplusdog/how-to-read-and-resolve-common-error-codes-in-ruby-9a3ae4bfb0db), [2](https://launchschool.medium.com/getting-started-with-ruby-exceptions-d6318975b8d1), [3](https://ruby-doc.org/core-3.0.0/Exception.html), [4](https://rollbar.com/blog/ruby-exception-handling-primer-for-dealing-with-errors-in-ruby/)]

Standard Exception Hierarchy

Most application-level errors inherit from `StandardError`. Rescuing `StandardError` is the default behavior for a simple `rescue` block and will catch most I/O and argument-related issues. \[[1](https://ruby-doc.org/core-2.5.7/StandardError.html), [2](https://docs.ruby-lang.org/en/3.2/Exception.html), [3](https://launchschool.medium.com/getting-started-with-ruby-exceptions-d6318975b8d1), [4](https://www.exceptionalcreatures.com/bestiary/Exception.html), [5](https://courses.bigbinaryacademy.com/learn-rubyonrails/exception-handling-in-ruby/)]

| Error Class \[[1](https://www.honeybadger.io/blog/understanding-rubys-strange-errno-exceptions/), [2](https://rollbar.com/blog/ruby-exception-handling-primer-for-dealing-with-errors-in-ruby/)] | Typical Cause                                               |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------- |
| `Errno::ENOENT`                                                                                                                                                                                  | File or directory does not exist.                           |
| `Errno::EACCES`                                                                                                                                                                                  | Insufficient permissions to access the file.                |
| `LoadError`                                                                                                                                                                                      | Unable to find a file specified in `require`.               |
| `EOFError`                                                                                                                                                                                       | Reached end of file unexpectedly.                           |
| `Errno::ENOTEMPTY`                                                                                                                                                                               | Attempting to delete a directory that still contains files. |

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
