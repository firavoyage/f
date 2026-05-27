#

what will happen if i clone a git repo inside a git repo

Cloning a Git repository inside an existing Git repository <mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">creates a nested repository structure</mark>. Git handles this by treating the inner repository as untracked content, which can lead to tracking issues if not managed correctly. \[[1](https://www.ajonit.com/git/git-clone/)]

What Actually Happens

- **Independent Operations**: The inner repository remains fully functional. Running Git commands inside its folder will only affect the inner repository.
- **Untracked Directory**: The outer repository will see the inner repository's folder as a single untracked file or directory.
- **Ignored History**: The outer repository cannot see or track the commit history, branches, or files inside the inner repository.
- **Commit Warnings**: If you try to add (`git add`) the inner folder to the outer repository, Git will warn you that you are adding an embedded repository. \[[1](https://www.datacamp.com/tutorial/git-clone-command), [2](https://gist.github.com/claraj/e5563befe6c2fb108ad0efb6de47f265), [3](https://www.reddit.com/r/git/comments/aak1pm/how%5Fto%5Fmanage%5Ftwo%5Frepo%5Fwith%5Fparent%5Ffolder%5Fat%5Fthe/), [4](https://erlangforums.com/t/issue-committing-git-repository-warning-adding-embedded-git-repository-lib-cf/1345), [5](https://learn.microsoft.com/en-us/azure/devops/repos/git/mapping-my-tfvc-actions-to-git?view=azure-devops)]

The Problem It Creates

If you force-add the inner directory to your outer repository, Git only records the directory name and a specific commit reference (a gitlink). It **will not** upload the actual files of the inner repository to your remote host (like GitHub). Anyone who clones your outer repository later will just see an empty, unclickable folder. \[[1](https://www.ciraltos.com/get-started-with-git-remote/)]

Three Ways to Fix It

Depending on your goal, you should use one of these standard methods to manage the code:

1\. Use Git Submodules (Recommended for separate projects) \[[1](https://medium.com/@rohansen856/git-submodules-its-a-hidden-gem-2ff950062d17), [2](https://medium.com/@python-javascript-php-html-css/specific-git-subdirectory-cloning-12e14ac1f809)]

Use this if you want to keep the inner repository as a separate, independent project but still link it to your main project. \[[1](https://git-scm.com/book/en/v2/Git-Tools-Submodules), [2](https://www.reddit.com/r/learnprogramming/comments/18ommrh/integrate%5Ffrontend%5Fand%5Fbackend%5Fin%5Ftwo%5Fdifferent/)]

- Run:
- This tells Git to track the exact commit version of the inner repo cleanly. \[[1](https://www.reddit.com/r/github/comments/16kpk2x/how%5Fcan%5Fi%5Fuse%5Fsomeone%5Felses%5Frepo%5Fin%5Fa%5Frepo/)]

2\. Merge the History (Recommended for combining projects)

Use this if you want to permanently absorb the inner repository into the outer one and keep all of its history.

- Use the `git subtree` command to merge the project.
- This keeps all files and history in a single, unified repository. \[[1](https://www.reddit.com/r/git/comments/99qwxl/migrating%5Fa%5Fsubversion%5Frepo%5Fwith%5Fmultiple/), [2](https://jashezan.hashnode.dev/how-to-move-a-git-repository-into-a-sub-folder-of-another-repository), [3](https://dev.to/gabeguz/git-bundle-2l5o)]

3\. Track Files Only (Recommended for templates)

Use this if you just want the files from the inner repo and do not care about its independent Git history. \[[1](https://www.jvt.me/posts/2023/10/23/import-subtree-git-repo/), [2](https://medium.com/@python-javascript-php-html-css/specific-git-subdirectory-cloning-12e14ac1f809)]

- Delete the hidden `.git` folder inside the inner repository.
- Run `git add .` from the outer repository to track all the files normally. \[[1](https://github.com/git-lfs/git-lfs/discussions/5235), [2](https://erlangforums.com/t/issue-committing-git-repository-warning-adding-embedded-git-repository-lib-cf/1345)]

To help find the right solution, tell me:

- Do you need to **push changes back** to the inner repository?
- Do you want to **keep the commit history** of both repositories?
- Is this for a **temporary template** or a **permanent project structure**?

I can provide the exact commands for the path you choose.

- [link](https://www.ajonit.com/git/git-clone/)\
  git clone – Make an identical copy of a repo\
  Aug 12, 2024 — Note: When you use a git clone command, ensure that you are in the correct directory. Clone command will create a new directory an...\
  \
  \
  Ajonit
- [link](https://www.datacamp.com/tutorial/git-clone-command)\
  Git Clone Command: From Basic Usage to Advanced Techniques\
  Jul 9, 2025 — Git's design and function mean that once cloning is complete, your local repository is a fully independent copy with the same capa...\
  \
  DataCamp
- [link](https://gist.github.com/claraj/e5563befe6c2fb108ad0efb6de47f265)\
  Fixing git submodule AKA git repo inside another git repo\
  Dec 23, 2024 — hint: You've added another git repository inside your current repository. hint: Clones of the outer repository will not contain th...\
  \
  \
  Gist

Show all

You said: i have git add commit all in ci. will it work and upload everything normally as if i rm the dot git folder after cloning

<mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);"><span style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">No, it will not work normally</span></mark> and your files will not upload.

What Will Happen

Because you left the `.git` folder inside, the outer repository views the inner folder as a **submodule marker (gitlink)**, not as regular files.

When your CI pipeline runs `git add .` and `git commit`:

- It only commits a **reference pointer** to the inner repository's current commit.
- It **ignores** all the actual files and subfolders inside that inner directory.
- Your remote repository (e.g., GitHub or GitLab) will show an empty folder icon that you cannot click.

Why Removing `.git` is Different

If you delete the `.git` folder _before_ running your CI script, the outer repository no longer recognizes it as a separate repository. It treats it as a normal folder, allowing `git add .` to successfully track and upload every single file inside it.

How to Fix Your CI Script

To make it upload everything normally, you must explicitly delete the inner `.git` folder in your CI configuration file _before_ the staging step.

Add this line to your script right after the clone command:

bash

```
rm -rf path/to/inner-repo/.git
```

Use code with caution.

If you share your **CI configuration file** (like `.github/workflows/main.yml` or `.gitlab-ci.yml`), I can show you exactly where to insert this line.

You said: how to change git behavior to work like that even w dot git there

You cannot force a single Git repository to natively track the files of an active inner repository while keeping its `.git` folder intact. Git’s core architecture strictly prevents this to avoid tracking conflicts.

However, you can achieve the exact workflow you want using native Git features or automation scripts.

Option 1: Use Git Subtrees (The Native Way)

If you want to keep the inner `.git` history but still force the outer repository to upload all the actual files normally, use `git subtree`. This merges the inner project into your main repository as a normal folder.

Run this command instead of `git clone`:

bash

```
git subtree add --prefix=folder-name <inner-repo-url> main --squash
```

Use code with caution.

- **Why it works**: It downloads all files and commits them directly to your outer repository.
- **The Result**: The files upload perfectly in your CI pipeline, and you can still pull updates later.

Option 2: Automate the Removal via Git Hooks

If you want this behavior to happen locally on your machine automatically without modifying your CI config file, use a local Git hook. This deletes the `.git` folder automatically right before you commit.

1. Open your outer repository.
2. Navigate to the hidden hooks folder: `.git/hooks/`
3. Create a file named `pre-commit` (no file extension).
4. Paste the following script into it:

bash

```
#!/bin/sh
# Automatically remove the inner .git folder before committing
if [ -d "path/to/inner-repo/.git" ]; then
    rm -rf "path/to/inner-repo/.git"
    git add "path/to/inner-repo/"
fi
```

Use code with caution.

1. Make the file executable by running: `chmod +x .git/hooks/pre-commit`

Option 3: Use a Custom Git Command Alias

You can create a custom shortcut command that clones the repository and immediately strips the `.git` folder in a single step.

Run this command in your terminal to set up the alias:

bash

```
git config --global alias.clone-clean '!f() { git clone "$1" "$2" && rm -rf "$2/.git"; }; f'
```

Use code with caution.

To use it, just type:

bash

```
git clone-clean <repository-url> <folder-name>
```

Use code with caution.

To give you the cleanest setup, let me know:

- Do you need to **pull downstream updates** from that inner repo in the future?
- Are you looking for a solution that applies **only to your local machine** or across your **entire team**?