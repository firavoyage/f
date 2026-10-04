# .

```
 ~ % ruby
he
^C-: Interrupt
 ~ % irb
irb(main):001:0> File
=> File
irb(main):002:0> File.write('a.txt')
(irb):2:in `write': wrong number of arguments (given 1, expected 2..3) (ArgumentError)
        from (irb):2:in `<main>'
        from /usr/lib/ruby/gems/3.2.0/gems/irb-1.6.2/exe/irb:11:in `<top (required)>'
        from /usr/bin/irb:25:in `load'
        from /usr/bin/irb:25:in `<main>'
irb(main):003:0> File.write('a.txt', '')
=> 0
irb(main):004:0> File.write('a.txt', 'hello world')
=> 11
irb(main):005:0> File.write('a.txt', 'hello world\n')
=> 13
```

```
 ~ % ls
 Android   Desktop     Downloads   Pictures   Public   Templates  'VirtualBox VMs'
 a.txt     Documents   Music       Projects   snap     Videos
 ~ % rm a.txt
 ~ % open a.txt
 ~ % cat a.txt
hello world%                                                                                                                           ~ % cat a.txt
hello world\n%                                                                                                                         ~ % rm a.txt
```

# py filesystem related modules

When working with the filesystem in Python, you can choose between <mark><strong>built-in standard library modules</strong></mark> (which handle native OS paths) or **third-party abstraction layers** (which let you treat local folders, ZIP files, and cloud buckets identically).

***

### 1. The Standard Library Modules (Built-in)

Python provides several core modules out of the box for handling local file and directory access.

- `pathlib`: The modern, **object-oriented approach** to path manipulation. It wraps paths in `Path` objects, allowing you to use intuitive syntax like `path / "subdirectory"` or `path.read_text()`. It is highly recommended over older alternatives. [link](https://www.youtube.com/watch?v=BGCdFaOq-IM\&t=4)
- `os` & `os.path`: The legacy, **string-based system**. The `os` module handles directory changes (`os.chdir`), environment variables, and folder creation (`os.mkdir`), while `os.path` handles pathname manipulations like parsing extensions or joining string paths. [link](https://www.youtube.com/watch?v=CWKYbaUCRUs\&t=289)
- `shutil`: A high-level **shell utility module** optimized for file copying, moving, renaming, and archiving/unpacking full directories.
- `glob`: Used for **pattern matching** file names using wildcards (e.g., finding all `*.txt` files in a folder).
- `tempfile`: Automatically generates secure, temporary files and directories that clean themselves up after use.

***

### 2. High-Level Abstraction Layers (Third-Party)

If your application needs to handle files stored across different mediums—like a local drive, an Amazon S3 bucket, a remote FTP server, or inside a compressed archive—using standard tools requires completely rewriting your code for each storage type. These packages solve that by providing a single, unified API: [link](https://github.com/pyfilesystem/pyfilesystem2)

- `PyFilesystem2` (`fs`): Provides a **universal interface** where any storage system can be opened using an FS URL (e.g., `open_fs('zip://projects.zip')` or `open_fs('ftp://ftp.example.org')`). Once opened, you use the exact same methods (`listdir`, `copydir`, `exists`) regardless of the underlying storage.
- `fsspec` (`filesystem_spec`): A widely used, unified **data-science-focused specification** for working with remote filesystems. It is the backbone under many popular data libraries like `pandas`, `dask`, and `huggingface_hub` to read files seamlessly from AWS S3, Google Cloud Storage (GCS), or Azure Blob. [link](https://pyfilesystem2.readthedocs.io/)

***

### 3. Testing and Mocking

- `pyfakefs`: A specialized testing module that **mocks the Python filesystem modules**. It tricks your code into interacting with a fake, in-memory directory structure during unit tests, ensuring your tests run instantly without touching or modifying your actual hard drive. [link](https://pytest-pyfakefs.readthedocs.io/en/latest/modules.html)

***

### Comparison: Pathlib vs. PyFilesystem2

| Feature                  | `pathlib` (Standard Library)              | `PyFilesystem2` (Third-Party)       |
| ------------------------ | ----------------------------------------- | ----------------------------------- |
| **Primary Use Case**     | Local OS file path manipulations          | Universal storage abstraction       |
| **API Style**            | Object-oriented (`Path` objects)          | Filesystem instances (`FS` objects) |
| **Cloud/Remote Support** | No (Local storage only)                   | Yes (S3, FTP, SFTP, WebDAV, etc.)   |
| **Archive Support**      | No (Requires `zipfile` module separately) | Yes (Treats ZIP/TAR as directories) |

To help narrow down the best solution for your project, tell me:

- Are you working strictly with **local files**, or do you need to touch **cloud storage / archives**?

- What **specific task** are you trying to build right now (e.g., searching for files, batch renaming, downloading data)?

- [link](https://www.youtube.com/watch?v=BGCdFaOq-IM\&t=4)\
  YouTube·BugBytes\
  Python Primers #3 - os vs pathlib modules for path/filesystem ...\
  Jan 20, 2022 — The \`os\` module and \`pathlib\` module are two Python standard library modules used for working with paths and file system operation...\
  9m

- [link](https://github.com/pyfilesystem/pyfilesystem2)\
  GitHub\
  PyFilesystem/pyfilesystem2: Python's Filesystem ... - GitHub\
  To count the lines of Python code in a zip file, we can make the following change: projects\_fs = open\_fs('zip://projects.zip') Or ...

- [link](https://news.ycombinator.com/item?id=13125254)\
  Hacker News\
  PyFilesystem 2.0 – A Python interface to filesystems of all kinds\
  Dec 7, 2016 — The ansible setup module returns the system information in json, ansible fetches the current value for you. Sort of a /proc filesy...

Show all

# ruby filesystem related modules

When working with the filesystem in Ruby, there are several core **modules and classes** built into the standard library that handle everything from basic file reading to complex directory operations and file traversals. [link](https://rubyreferences.github.io/rubyref/builtin/system-cli/filesystem.html)

Here is the comprehensive breakdown of Ruby's filesystem-related modules and core classes:

### 1. FileUtils (Module)

The [Ruby FileUtils Module](https://docs.ruby-lang.org/en/master/FileUtils.html) provides a comprehensive set of file utility methods that mimic standard Unix shell commands. It is part of the standard library and must be loaded using `require 'fileutils'`. [link](https://docs.ruby-lang.org/en/master/FileUtils.html)

- **Creating:** `FileUtils.mkdir`, `FileUtils.mkdir_p` (creates nested directory structures), and `FileUtils.ln_s` (creates symlinks).
- **Copying & Moving:** `FileUtils.cp`, `FileUtils.cp_r` (recursive copy for directories), and `FileUtils.mv`.
- **Deleting:** `FileUtils.rm`, `FileUtils.rm_r`, and `FileUtils.rm_rf` (safe and forced recursive removal).
- **Permissions:** `FileUtils.chmod`, `FileUtils.chmod_R`, and `FileUtils.chown`. [link](https://docs.ruby-lang.org/en/3.3/FileUtils.html)

### 2. Find (Module)

The [Ruby Find Module](http://ruby-doc.org/stdlib-2.4.1//libdoc/find/rdoc/Find.html) is a top-down filesystem traversal module. It is perfect for searching through directories recursively. It requires `require 'find'`. [link](http://ruby-doc.org/stdlib-2.4.1//libdoc/find/rdoc/Find.html)

- **`Find.find`:** Loops through all files and subdirectories within a given path.
- **`Find.prune`:** Skips the rest of the current directory tree during a loop (useful for ignoring hidden folders like `.git` or `.ssh`). [link](http://ruby-doc.org/stdlib-2.4.1//libdoc/find/rdoc/Find.html)

### 3. FileTest (Module)

The `FileTest` module contains low-level methods to query the state of a file or directory. It is also mixed directly into the `File` class. [link](https://docs.ruby-lang.org/en/master/File.html)

- **`FileTest.exist?`:** Checks if a file or directory exists.
- **`FileTest.directory?`:** Returns `true` if the target path is a directory.
- **`FileTest.file?`:** Returns `true` if the target path is a regular file.
- **`FileTest.size`:** Returns the size of the file in bytes. [link](http://ruby-doc.org/stdlib-2.4.1//libdoc/find/rdoc/Find.html)

### 4. File::Constants (Module)

The [File::Constants Module](https://docs.ruby-lang.org/en/master/File/Constants.html) defines bitwise flag constants used when opening streams. [link](https://docs.ruby-lang.org/en/master/File/Constants.html)

- **Access Modes:** `File::RDONLY` (Read-only), `File::WRONLY` (Write-only), and `File::CREAT` (Create file if it does not exist).
- **Sync Flags:** `File::SYNC` or `File::DSYNC` to force immediate data flushing directly to the hardware storage disk. [link](https://docs.ruby-lang.org/en/master/File/Constants.html)

***

### Closely Related Core Classes

While the options above are strictly _modules_, Ruby relies heavily on core classes to interact with the filesystem: [link](https://docs.ruby-lang.org/en/master/File.html)

| Class          | Primary Purpose                                                                                   | Example Usage                        |
| -------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------ |
| **`File`**     | Reading, writing, and querying individual files.                                                  | `File.read("log.txt")`               |
| **`Dir`**      | Navigating, opening, and globbing (matching patterns) directories.                                | `Dir.glob("*.rb")`                   |
| **`Pathname`** | Combines features of `File`, `Dir`, and `FileUtils` into an elegant object-oriented path wrapper. | `Pathname.new("/etc").join("hosts")` |

Are you looking to accomplish a specific task, such as **recursively searching for specific files**, **batch moving/renaming directories**, or **parsing file permissions**? I can provide a tailored code snippet.

- [link](https://docs.ruby-lang.org/en/master/File.html)\
  Ruby Programming Language\
  class File - Documentation for Ruby 4.1\
  Class File (Ruby 4.1): - Inherits IO, extends \`FileTest\`. Querying: paths, times. Settings: \`::chmod\`, \`x\`), Integer constants
- [link](https://rubyreferences.github.io/rubyref/builtin/system-cli/filesystem.html)\
  GitHub\
  Filesystem - Ruby Reference\
  The Find module supports the top-down traversal of a set of file paths.
- [link](https://docs.ruby-lang.org/en/master/File/Constants.html)\
  Ruby Programming Language\
  module File::Constants\
  File::SYNC specifies that all write operations (both data and metadata) are immediately to be flushed to the underlying storage de...

Show all

# ruby filesystem related classes

The **Ruby language features several core and standard library classes** explicitly designed for filesystem interaction and path manipulation. The most important ones are **`File`**, **`Dir`**, and **`Pathname`**. [link](https://www.youtube.com/watch?v=-mNch1l3P38)

Below is a breakdown of the primary filesystem-related classes and modules in Ruby.

### Core Classes (Built-in)

- **[`File`](https://docs.ruby-lang.org/en/master/File.html)**: Handles individual file operations. It provides methods to read, write, delete, and check properties of files (like size, permissions, and timestamps). It inherits directly from the `IO` class. [link](https://docs.ruby-lang.org/en/master/File.html)
- **[`Dir`](https://rubyreferences.github.io/rubyref/builtin/system-cli/filesystem.html)**: Handles directory-specific actions. It allows you to create or delete directories, change the current working directory, and list directory contents using globbing patterns. [link](https://rubyreferences.github.io/rubyref/builtin/system-cli/filesystem.html)
- **[`IO`](https://docs.ruby-lang.org/en/3.4/File.html)**: The basis for all input and output in Ruby. While not exclusively a filesystem class, `File` inherits from it, meaning `IO` methods handle the actual stream reading and writing loops. [link](https://docs.ruby-lang.org/en/3.4/File.html)

### Core Modules (Utility & Testing)

- **`FileTest`**: A module containing low-level methods to query the filesystem without instantiating objects. It includes methods like `FileTest.exist?`, `FileTest.directory?`, and `FileTest.writable?`. These methods are also mixed directly into the `File` class for ease of use. [link](https://ruby-doc.org/core-2.5.5/File.html)

### Standard Library (Requires Explicit Importing)

- **`Pathname`**: An object-oriented wrapper that combines functionality from `File`, `Dir`, and `FileUtils`. Instead of passing strings to class methods, you create a `Pathname` object representing a path and call chainable methods directly on it.
  - _Usage:_ `require 'pathname'` [link](https://rubyreferences.github.io/rubyref/builtin/system-cli/filesystem.html)
- **`FileUtils`**: A module providing sharp, high-level file management operations similar to Unix shell commands. It is used for tasks like copying files (`cp`), moving files (`mv`), and recursively creating directories (`mkdir_p`).
  - _Usage:_ `require 'fileutils'` [link](https://rubyreferences.github.io/rubyref/builtin/system-cli/filesystem.html)

***

### Comparison of Primary Options

| Class / Module | Primary Purpose                  | Common Methods                             | Best Used For                                                          |
| -------------- | -------------------------------- | ------------------------------------------ | ---------------------------------------------------------------------- |
| **`File`**     | Individual file interactions     | `.open`, `.read`, `.write`, `.delete`      | Creating, modifying, or querying individual file objects.              |
| **`Dir`**      | Directory stream operations      | `.mkdir`, `.rmdir`, `.entries`, `.glob`    | Navigating folders or scanning file patterns.                          |
| **`Pathname`** | Unified, object-oriented pathing | `#join`, `#exist?`, `#basename`, `#parent` | Modern Ruby scripts where you want cleaner, chainable filesystem code. |

Would you like to see **code examples** for a specific operation, or are you looking to use a particular wrapper class like **Pathname**?

- [link](https://www.youtube.com/watch?v=-mNch1l3P38)\
  YouTube·Envato Tuts+\
  Ruby for Newbies: Working with Directories and Files\
  Jan 5, 2015 — The \`File\` class inherits many of its file manipulation capabilities from Ruby's \`IO\` class. covering common operations like listi...\
  29:09
- [link](https://rubyreferences.github.io/rubyref/builtin/system-cli/filesystem.html)\
  GitHub\
  Filesystem\
  The goal of this class is to manipulate file path information in a neater way than standard Ruby provides. FileUtils is included,
- [link](https://docs.ruby-lang.org/en/master/File.html)\
  Ruby Programming Language\
  class File - Documentation for Ruby 4.1\
  Class File (Ruby 4.1): - Inherits IO, extends \`FileTest\`. Querying: paths, times … \`mtime\`), types, contents. Settings: \`::chmod\`,

Show all

# 
