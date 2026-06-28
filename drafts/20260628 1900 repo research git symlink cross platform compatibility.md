## how well is symlink supported across platforms if i use it in git repo

1:03 AM

Using symlinks in a Git repository works, but it offers <mark><strong>inconsistent cross-platform support</strong></mark>, especially between Unix-like systems (macOS, Linux) and Windows.

Here is how symlink support breaks down across platforms and how Git handles it.

### Platform Breakdown

- **Linux & macOS**: Perfect, native support. Git stores symlinks as small text files with a special file mode (`120000`).
- **Windows**: Poor default support. Windows requires special permissions to create actual symlinks.

### How Git Behaves by Default on Windows

If a teammate clones a repository containing a symlink onto a Windows machine:

- **Without admin rights**: Git cannot create a real symlink. It falls back to creating a plain text file containing the target path. This breaks the link.
- **With standard settings**: Even with admin rights, Git for Windows leaves the `core.symlinks` configuration set to `false` by default during installation.

### How to Fix Windows Support

To make symlinks work properly for Windows users, they must take two specific actions:

1. **Enable Developer Mode**: Windows users must turn on "Developer Mode" in their Windows OS settings. This allows non-administrators to create symlinks.

2. **Configure Git**: Users must run the following command in their terminal before cloning the repository:\
   bash

<!---->

```
git config --global core.symlinks true
```

Use code with caution.

### Recommended Alternatives

If your team has many Windows users, avoiding Git symlinks altogether is often the safest path. Consider these alternatives:

- **Relative Paths**: Structure your project configuration files to use relative directory paths.
- **Git Submodules**: Use submodules if you are using symlinks to reference code from another repository.
- **Build Scripts**: Use a script (like an npm script, Python script, or Makefile) to generate shortcuts or copy files locally after cloning.

To help determine the best path forward, tell me:

- What **programming language or framework** is your project using?
- What **types of files** (code, assets, configuration) are you trying to link?
- Do you know if your team members use **Windows, Mac, or Linux**?

I can suggest a specific, hassle-free alternative for your exact setup.

- [link](https://blogs.windows.com/windowsdeveloper/2016/12/02/symlinks-windows-10/)\
  Symlinks in Windows 10! - Windows Developer Blog\
  Many popular development tools like git and package managers like npm recognize and persist symlinks when creating repos or packag...\
  \
  \
  Windows Blog
- [link](https://www.joshkel.com/2018/01/18/symlinks-in-windows/)\
  Symlinks in Windows, MinGW, Git, and Cygwin · Josh Kelley\
  Symlinks ( Symbolic links ) are a commonly used feature in Linux and macOS, but Windows traditionally either hasn't supported them...\
  \
  www.joshkel.com
- [link](https://experienceleague.adobe.com/en/docs/experience-manager-learn/ams/dispatcher/git-symlinks)\
  Adding Symlinks into GIT properly | Adobe Experience Manager\
  Enable Symlinks in GIT If core. symlinks is false, symbolic links are checked out as small plain files that contain the link text.\
  \
  \
  Adobe Experience League

Show all

## what will happen if they do nothing and start working

If Windows users do nothing and start working, the repository will break for them, and they will likely corrupt it for everyone else.

Here is exactly what happens if they clone the repo and start working without fixing their settings.

### 1. Broken Local Files

- Windows cannot create the symlink.
- Git creates a plain text file instead.
- The file contains only the text path (e.g., `../assets/logo.png`).
- The local application or compiler will crash because it cannot find the actual target data.

### 2. Accidental Git Corruption

- The developer will see the text file and think the code is missing.
- They might replace the text file with the actual copied folder or file.
- Git will see this change as a massive modification.
- If they commit this change, they will overwrite the symlink in the remote repository.

### 3. Broken Repo for the Team

- Once the Windows user pushes their changes, the symlink is deleted on GitHub/GitLab.
- It is replaced by a hard copy of the files or a modified text file.
- When Mac and Linux users pull the latest changes, their working symlinks will break.

If you want to avoid this headache, tell me:

- Are you linking **code files** or **static assets** (images, data)?
- Do you use a **build tool** (Webpack, Vite, CMake, Gradle)?

I can show you how to automate this so your Windows developers do not have to configure anything.