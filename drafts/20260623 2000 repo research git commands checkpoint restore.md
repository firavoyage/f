<!-- google ai mode is weird, removing some content upon paste. fixed via mhtml. -->

# all git commands

1:04 AM

The official [Git Documentation](https://git-scm.com/docs) tracks well over 150 unique plumbing and porcelain commands. However, daily development relies heavily on a core subset of about 30 essential commands. [link](https://git-scm.com/docs)

Below is a comprehensive categorization of Git commands sorted by function, ranging from basic setup to advanced history rewriting.

### Setup and Initialization

- `git init`: Initializes a brand new local Git repository in the current folder.
- `git clone <url>`: Copies an existing remote repository to your local system, downloading all history and branches.
- `git config --global user.name "Name"`: Sets the author name configuration globally across your machine.
- `git config --global user.email "email@example.com"`: Sets the author email configuration globally across your machine. [link](https://www.geeksforgeeks.org/git/useful-github-commands/)

### The Core Staging and Committing Workflow

- `git status`: Displays the status of your working tree, listing files that are modified, staged, or untracked.
- `git add <file>`: Moves changes from your working directory to the staging area.
- `git add .`: Stages all modified and untracked file changes in the current directory.
- `git commit -m "message"`: Permanently saves your staged changes as a snapshot in the local version history.
- `git commit -am "message"`: Shortcuts the staging (`git add`) and committing process for already tracked files. [link](https://www.youtube.com/watch?v=2ldhr1vQtoI)

### Branching and Merging

- `git branch`: Lists all the local branches available in your current repository.
- `git branch -a`: Lists all local and remote-tracking branches together.
- `git branch <branch-name>`: Creates a new parallel timeline branch referencing your current HEAD.
- `git branch -d <branch-name>`: Deletes a local branch, but only if it has already been safely merged.
- `git branch -D <branch-name>`: Forces the deletion of a local branch even if it contains unmerged changes.
- `git checkout <branch>`: Switches your working directory to an existing branch.
- `git checkout -b <branch>`: Simultaneously creates a new branch and switches your active working directory to it.
- `git switch <branch>`: A modern, safer alternative specifically dedicated to switching branches.
- `git merge <branch>`: Joins the historical timeline of a specified branch into your current active branch. [link](https://docs.gitlab.com/topics/git/commands/)

### Sharing and Syncing with Remote Repositories

- `git remote add <name> <url>`: Connects your local repository to a remote repository URL.
- `git remote -v`: Lists all linked remote connections along with their fetch and push URLs.
- `git fetch <remote>`: Downloads all branches, tags, and history from the remote repository without altering your local files.
- `git pull`: Downloads updates from the tracking remote branch and immediately merges them into your active branch.
- `git push <remote> <branch>`: Uploads your local branch commits up to the remote repository. [link](https://education.github.com/git-cheat-sheet-education.pdf)

### Inspection, Comparison, and History Exploration

- `git log`: Displays the full commit history list for your current active branch.
- `git log --oneline`: Simplifies the history view, printing each commit on a single line with a short hash and message.
- `git diff`: Shows the exact line-by-line differences of unstaged modifications in your working tree.
- `git diff --staged`: Shows line-by-line changes between your staged area and the last commit.
- `git blame <file>`: Annotates every single line of a file with information on who last changed it and when.
- `git show <commit>`: Displays the author details, timestamp, and specific code changes introduced by a single commit. [link](https://git-scm.com/cheat-sheet)

### Undoing and Repairing Mistakes

- `git restore <file>`: Discards unstaged modifications in your working directory, resetting the file to the last commit.
- `git commit --amend`: Modifies your absolute most recent commit, letting you append new files or fix a typo in the commit message.
- `git reset --soft HEAD~1`: Undoes the last commit but leaves your actual code changes intact and staged in the staging area.
- `git reset --hard HEAD~1`: Destroys the most recent commit, unstages the files, and completely deletes all associated code modifications.
- `git revert <commit-hash>`: Creates a completely new commit that applies the exact opposite changes of a specified historical commit.
- `git clean -fd`: Forces the deletion of all untracked files and untracked directories from your local directory workspace. [link](https://www.atlassian.com/git/glossary)

### Advanced and History Rewriting

- `git stash`: Temporarily shelves your current uncommitted changes so you can work on a clean directory without committing.
- `git stash pop`: Restores the changes stored at the top of your stash stack and clears it out.
- `git rebase <branch>`: Applies the commits of your current branch directly on top of another branch to form a perfectly linear timeline.
- `git cherry-pick <commit-hash>`: Extracts a single specific commit from another branch and applies it directly to your current branch.
- `git reflog`: Keeps a local log of every single movement your HEAD pointer has made, letting you recover deleted branches or broken rebases. [link](https://education.github.com/git-cheat-sheet-education.pdf)

To help me tailor this guide further, let me know:

- Are you looking for the syntax of a **specific command**?

- Do you need help solving a **particular issue** (like a merge conflict or accidental commit)?

- Would you like an explanation of a specific **Git workflow** (like Git Flow or Trunk-Based Development)?

- [link](https://git-scm.com/docs)\
  Reference - Git\
  Plumbing Commands \* cat-file. \* check-ignore. \* checkout-index. \* commit-tree. \* count-objects. \* diff-index. \* for-each-ref.\
  Git

- [link](https://www.youtube.com/watch?v=2ldhr1vQtoI)\
  How To Use git (basic commands for beginners)\
  and now if we do a get status you'll see that we are on the main branch. we don't have any commits yet and there is this one unttr...\
  9:36\
  YouTube·Tony Teaches Tech

- [link](https://www.atlassian.com/git/glossary)\
  Basic Git Commands | Atlassian Git Tutorial\
  Commands · Git add. Moves changes from the working directory to the staging area. This gives you the opportunity to prepare a snap...\
  Atlassian

Show all

# can i have another git alongside a git repo. like the user has a code repo. the agent saves automated checkpoints for undo redo wo making the original repo noisy.

<mark style="font-family: &quot;Google Sans&quot;, Roboto, Arial, sans-serif; font-size: 16px; font-weight: 500; margin: 0px; text-decoration: none solid rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);"><span style="font-family: &quot;Google Sans&quot;, Roboto, Arial, sans-serif; font-size: 16px; font-weight: 500; margin: 0px; text-decoration: none solid rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">Yes, you can absolutely maintain a separate Git repository for automated checkpoints without cluttering your main project history</span></mark>. \[[1](https://community.latenode.com/t/is-it-possible-to-create-a-duplicate-of-my-own-github-repository/20836), [2](https://github.com/actions/checkout/issues/1477)]

Here are the three best ways to achieve this, ranked from the cleanest to the most advanced.

### Option 1: Separate `.git` Directory (Recommended)

You can point Git to a different directory for its metadata using the `--git-dir` and `--work-tree` flags. This keeps the agent's history completely isolated. \[[1](https://productleadersdayindia.org/blogs/managing-ai-coding-agents/running-parallel-coding-agents.html), [2](https://www.mindstudio.ai/blog/parallel-ai-coding-agents-git-worktrees)]

- **Create the backup repository:**\
  Initialize a hidden tracking folder outside or inside your project (e.g., `.agent-git`).\
  bash

<!---->

```
git init --separate-git-dir=.agent-git
```

Use code with caution.

- **Run agent commands:**\
  The agent must use specific flags to commit changes so it doesn't touch the main `.git` folder.\
  bash

<!---->

```
git --git-dir=.agent-git --work-tree=. add .
git --git-dir=.agent-git --work-tree=. commit -m "Automated checkpoint"
```

Use code with caution.

- **Ignore the agent folder:**\
  Add `.agent-git/` to the main `.gitignore` file so the user never sees it.

### Option 2: Isolated Git Environment Variables

If your agent runs commands via script or a separate process, you can override Git's default paths using environment variables. This forces Git to look at a custom metadata folder.

- **Set the environment variables:**\
  bash

<!---->

```
export GIT_DIR=".agent-git"
export GIT_WORK_TREE="."
```

Use code with caution.

- **Run standard commands:**\
  Any standard `git add` or `git commit` command run in this environment will now log to `.agent-git` instead of `.git`.

### Option 3: Git Plumbing Commands (Lowest Overhead)

If you want maximum speed and zero extra files in the workspace, the agent can bypass the standard Git workflow entirely. It can write directly to Git's internal database as a shadow history.

- **Hash the files:**\
  bash

<!---->

```
git write-tree
```

Use code with caution.

- **Create a commit object:**\
  bash

<!---->

```
git commit-tree <tree-hash> -m "Agent checkpoint"
```

Use code with caution.

- **Update a custom reference:**\
  Save the commit to a custom hidden ref branch like `refs/agent/checkpoints` instead of `refs/heads/main`. \[[1](https://kilo.ai/docs/code-with-ai/features/checkpoints), [2](https://edofic.com/posts/2016-02-24-git-repair/)]

***

To help you implement this seamlessly, let me know:

- What **programming language** or framework is your agent built in?

- How **frequently** will these checkpoints be triggered?

- Do you need the agent to **restore** checkpoints automatically, or just save them?

- [link](https://community.latenode.com/t/is-it-possible-to-create-a-duplicate-of-my-own-github-repository/20836)\
  Is it possible to create a duplicate of my own GitHub repository?\
  Jun 6, 2025 — This method preserves the complete commit history and all branches while creating an entirely separate repository. I've done this ...\
  \
  \
  Latenode

- [link](https://github.com/actions/checkout/issues/1477)\
  Fetching an empty repository fails · Issue #1477 · actions/checkout\
  Sep 16, 2023 — To achieve this, I have a repo that contains all the scripts necessary for the task, and a separate repo containing only the git h...\
  \
  \
  GitHub

- [link](https://productleadersdayindia.org/blogs/managing-ai-coding-agents/running-parallel-coding-agents.html)\
  Run 5 Parallel AI Coding Agents Without Chaos (June 2026)\
  Jun 4, 2026 — Yes, absolute isolation is mandatory. Best practice dictates giving every single parallel agent its own Git worktree. This guarant...\
  \
  \
  Product Leaders Day India

Show all

## You said: how to use option 3. checkpoint. get the hash. restore.

Using Option 3 (Git Plumbing) is highly efficient because it bypasses the working directory indexes and stores data directly in the existing `.git` folder under a custom hidden reference namespace. This keeps the user's `git status` completely clean. \[[1](https://git.github.io/git-reference/basic/)]

Here is the exact step-by-step workflow to create, track, and restore these shadow checkpoints.

### Step 1: Create a Checkpoint

To save the current state of the workspace without using `git add` or `git commit`, you bypass the index and write directly to Git's object database.

1. **Stage the current files to a temporary index:**\
   bash

<!---->

```
# Copy the index safely so you don't corrupt the user's current staging area
export GIT_INDEX_FILE=.git/agent_index

# Add all modified files to this temporary index
git update-index --add --remove --refresh
```

Use code with caution.
2\. **Write the tree object:**\
This records the exact snapshot of the directory and outputs a unique .\
bash

```
git write-tree
```

Use code with caution.
3\. **Create the commit object:**\
Pass the tree hash you just generated. If there is a previous agent checkpoint, pass it as a parent using the `-p` flag to build an isolated history chain.\
bash

```
# For the first checkpoint:
git commit-tree <tree-hash> -m "Agent checkpoint"

# For subsequent checkpoints (linking to previous agent commit hash):
git commit-tree <tree-hash> -p <prev-commit-hash> -m "Agent checkpoint"
```

Use code with caution.
4\. **Save the commit to a custom hidden reference:**\
Instead of updating `refs/heads/main`, save the resulting to a custom namespace like `refs/agent/head`.\
bash

```
git update-ref refs/agent/head <commit-hash>
```

Use code with caution.
5\. **Clean up the environment variable:**\
bash

```
unset GIT_INDEX_FILE
```

Use code with caution.\
\[[1](https://mindmajix.com/git-plumbing-commands), [2](https://initialcommit.com/blog/git-cheat-sheet-expert), [3](https://initialcommit.com/blog/git-cheat-sheet-expert)]

### Step 2: Get the Checkpoint Hash

You can easily view, query, or log your automated checkpoints without the user knowing.

- **Get the latest agent checkpoint hash:**\
  bash

<!---->

```
git rev-parse refs/agent/head
```

Use code with caution.

- **View the full history of agent checkpoints:**\
  bash

<!---->

```
git log refs/agent/head --oneline
```

Use code with caution.

### Step 3: Restore a Checkpoint

When you want to perform an "undo" or "redo" action to a specific checkpoint hash, you read that snapshot back into the workspace.

1. **Force the workspace to match the checkpoint tree:**\
   This updates the physical files in the directory to match the exact state of that specific checkpoint commit.\
   bash

<!---->

```
git read-tree --reset -u <checkpoint-commit-hash>
```

Use code with caution.
2\. **Update the agent tracking head:**\
If you rolled back to an older checkpoint (an "undo"), update your reference pointer to point to this hash so the next save builds from here.\
bash

```
git update-ref refs/agent/head <checkpoint-commit-hash>
```

Use code with caution.

***

To help you automate this perfectly, let me know:

- Do you need a mechanism to **handle untracked/new files** that are not yet tracked by the main repo?

- Should the restoration process **overwrite the user's uncommitted work**, or should it safety-check first?

- [link](https://git.github.io/git-reference/basic/)\
  Git Reference\
  Now we have recorded the snapshot. If we run git status again, we will see that we have a "clean working directory", which means t...\
  \
  GitHub

- [link](https://mindmajix.com/git-plumbing-commands)\
  Learn Git Plumbing Commands - Mindmajix\
  Apr 4, 2023 — A tree object is Git's representation of the “snapshots”, which we've been talking about since the beginning of this tutorial. The...\
  \
  \
  MindMajix

- [link](https://initialcommit.com/blog/git-cheat-sheet-expert)\
  Git Cheat Sheet: 14 Essential Git Commands for Experts\
  Feb 4, 2021 — The git write-tree command creates a new tree in the object database based on the staging staging index. To create a tree based on...\
  \
  \
  initialcommit.com

# how to use git to checkpoint and restore for a specific subdir later

To checkpoint a specific subdirectory and restore it later without affecting the rest of your project, you can use <mark style="font-family: &quot;Google Sans&quot;, Roboto, Arial, sans-serif; font-size: 16px; font-weight: 500; margin: 0px; text-decoration: none solid rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);"><strong style="font-family: &quot;Google Sans&quot;, Roboto, Arial, sans-serif; font-size: 16px; font-weight: 600; margin: 0px; text-decoration: none solid rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">Git stash</strong> with a pathspec, or use a <strong style="font-family: &quot;Google Sans&quot;, Roboto, Arial, sans-serif; font-size: 16px; font-weight: 600; margin: 0px; text-decoration: none solid rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">temporary commit</strong></mark>. \[[1](https://www.janbasktraining.com/community/devops/how-can-i-rollback-a-git-repository-to-a-specific-commit)]

Here is how to do both methods.

### Method 1: Using Git Stash (Recommended)

This isolates the subdirectory, saves it to your stash list, and keeps your main working tree clean. \[[1](https://labex.io/tutorials/git-git-interview-questions-and-answers-593681), [2](https://warrenmarkham.hashnode.dev/you-can-split-commits)]

**To Checkpoint:**

- Run `git stash push -m "my-checkpoint" -- path/to/dir`
- This saves your changes.
- It reverts the directory to `HEAD`. \[[1](https://medium.com/fintechexplained/top-git-practical-concepts-and-commands-with-examples-for-developer-technical-jobs-3035cf49699b), [2](https://labex.io/tutorials/git-how-to-use-git-stash-commands-510771)]

**To Restore Later:**

- Run `git stash list` to find your stash ID (e.g., `stash@{0}`).
- Run `git stash apply stash@{0}` to restore the changes. \[[1](https://labex.io/questions/how-to-restore-untracked-files-from-stash-387492), [2](https://www.youtube.com/watch?v=urSlkC-6lZE), [3](https://graphite.com/guides/git-stash-one-file), [4](https://medium.com/sysf/become-a-git-pro-in-just-one-blog-a-thorough-guide-to-git-architecture-and-command-line-interface-93fbe9bdb395)]

### Method 2: Using a Temporary Commit (Safest)

This creates a hard copy in your Git history that you can pull files from at any time. \[[1](https://dev.to/clickpesa/how-to-appropriately-git-stash-1ed3)]

**To Checkpoint:**

- Run `git add path/to/dir`
- Run `git commit -m "CHKPNT: my subdirectory backup"` \[[1](https://graphite.com/guides/git-staging-area)]

**To Restore Later:**

- Run `git log` to find the checkpoint commit hash.
- Run
- This overwrites the directory with your checkpoint.
- Run `git reset HEAD~1` if you want to undo the temporary commit itself while keeping the restored files. \[[1](https://www.geeksforgeeks.org/git/reverting-a-file-to-previous-commit/), [2](https://gitprotect.io/blog/git-revert-file-to-previous-commit/), [3](https://mukulrathi.com/git-beginner-cheatsheet/), [4](https://www.datacamp.com/tutorial/git-reset-soft-complete-guide), [5](https://labex.io/tutorials/git-git-interview-questions-and-answers-593681)]

Would you like help writing a **custom bash alias** to automate this with a single command, or are you troubleshooting a **merge conflict** within that specific directory?

- [link](https://www.janbasktraining.com/community/devops/how-can-i-rollback-a-git-repository-to-a-specific-commit)\
  How can I rollback a git repository to a specific commit?\
  Sep 25, 2025 — You can temporarily check out a specific commit without changing the branch.\
  \
  janbasktraining.com
- [link](https://labex.io/tutorials/git-git-interview-questions-and-answers-593681)\
  Git Interview Questions and Answers | 2025\
  Use git stash to save your uncommitted changes. This cleans your working directory, allowing you to switch branches. After fixing ...\
  \
  \
  LabEx
- [link](https://warrenmarkham.hashnode.dev/you-can-split-commits)\
  Interactive Rebasing: Split a Git commit\
  Jan 14, 2024 — d. Use git stash to temporarily move the uncommitted changes off the working tree. This has the effect of isolating the subcommit ...\
  \
  \
  warrenmarkham.hashnode.dev

Show all

# how to git commit and get the commit hash

To save your staged changes and retrieve the unique commit identifier, you must first run the **`git commit`** command and then use a retrieval command like **`git rev-parse HEAD`**. \[[1](https://www.geeksforgeeks.org/git/how-to-retrieve-the-hash-for-the-current-commit-in-git/), [2](https://labex.io/tutorials/git-how-to-check-if-a-git-commit-is-the-latest-560066), [3](https://initialcommit.com/blog/Git-Cheat-Sheet-Beginner), [4](https://help.crio.do/support/solutions/articles/82000898181-how-to-revert-to-a-previous-commit-in-git-)]

### 1. Stage and Commit Your Changes

Before committing, you must tell Git which modified files you want to include. \[[1](https://www.youtube.com/watch?v=bQv0k3nptFw\&t=64), [2](https://www.git-tower.com/learn/git/commands/git-commit)]

bash

```
# Step 1: Stage your modified files
git add .

# Step 2: Commit the files with a descriptive message
git commit -m "Your descriptive commit message"
```

Use code with caution.

### 2. Get the Commit Hash

Once the commit is created, choose one of the following terminal commands to retrieve its unique SHA-1 hash: \[[1](https://www.youtube.com/watch?v=bQv0k3nptFw\&t=64)]

- **Get the full 40-character hash**:\
  bash

<!---->

```
git rev-parse HEAD
```

Use code with caution.\
_Output example:_ `a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0`

- **Get the short 7-character hash** (most common for daily tasks):\
  bash

<!---->

```
git rev-parse --short HEAD
```

Use code with caution.\
_Output example:_ `a1b2c3d`

- **Get the hash along with details** (author, date, and message):\
  bash

<!---->

```
git log -n 1
```

Use code with caution.\
\[[1](https://stackoverflow.com/questions/949314/how-do-i-get-the-hash-for-the-current-commit-in-git), [2](https://stackoverflow.com/questions/15677439/command-to-get-latest-git-commit-hash-from-a-branch), [3](https://www.geeksforgeeks.org/git/how-to-retrieve-the-hash-for-the-current-commit-in-git/), [4](https://github.com/git-commit-id/git-commit-id-maven-plugin/issues/505), [5](https://labex.io/tutorials/git-how-to-check-if-a-git-commit-exists-560054)]

### Shortcut: Do It in a Single Line \[[1](https://stackoverflow.com/questions/15677439/command-to-get-latest-git-commit-hash-from-a-branch)]

If you want to immediately print out the new short hash right after committing, combine the actions using the `&&` operator:

bash

```
git commit -m "Your commit message" && git rev-parse --short HEAD
```

Use code with caution.

Are you looking to use this commit hash **inside a script/automation flow**, or do you need to **share it with a teammate** for a code review?

- [link](https://stackoverflow.com/questions/949314/how-do-i-get-the-hash-for-the-current-commit-in-git)\
  How do I get the hash for the current commit in Git?\
  Jun 4, 2009 — Adding to what Thane, Tyson, and Jakub said, you can print the full hash, but highlight the hexits necessary to identify the commi...\
  Stack Overflow
- [link](https://stackoverflow.com/questions/15677439/command-to-get-latest-git-commit-hash-from-a-branch)\
  Command to get latest Git commit hash from a branch - Stack Overflow\
  Mar 28, 2013 — --online is a shorthand for --pretty=oneline --abbrev-commit . But you are using --pretty as well, which reverts --pretty=oneline ...\
  Stack Overflow
- [link](https://www.geeksforgeeks.org/git/how-to-retrieve-the-hash-for-the-current-commit-in-git/)\
  How to Retrieve the Hash for the Current Commit in Git?\
  Jul 23, 2025 — How to Retrieve the Hash for the Current Commit in Git? \* Approach 1: Using 'git rev-parse HEAD' \* Approach 2: Using 'git log -n 1...\
  GeeksforGeeks

Show all

# .

```sh
 ~ % cd Projects
 ~/Projects % cd temp
 ~/Projects/temp % git init
hint: Using 'master' as the name for the initial branch. This default branch name
hint: is subject to change. To configure the initial branch name to use in all
hint: of your new repositories, which will suppress this warning, call:
hint:
hint:   git config --global init.defaultBranch <name>
hint:
hint: Names commonly chosen instead of 'master' are 'main', 'trunk' and
hint: 'development'. The just-created branch can be renamed via this command:
hint:
hint:   git branch -m <name>
Initialized empty Git repository in /home/fira/Projects/temp/.git/
 ~/Projects/temp % git status
On branch master

No commits yet

nothing to commit (create/copy files and use "git add" to track)
 ~/Projects/temp % echo 'hello world' > temp.txt
 ~/Projects/temp % git status
On branch master

No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        temp.txt

nothing added to commit but untracked files present (use "git add" to track)
 ~/Projects/temp % git add . && git commit -m '.'
[master (root-commit) eacf137] .
 1 file changed, 1 insertion(+)
 create mode 100644 temp.txt
 ~/Projects/temp % git rev-parse HEAD
eacf1378005382ec8acf52509595c766360f8ff8
 ~/Projects/temp % echo 'foo' > bar.txt
 ~/Projects/temp % git add . && git commit -m '.'
[master dd535b3] .
 1 file changed, 1 insertion(+)
 create mode 100644 bar.txt
 ~/Projects/temp % git rev-parse HEAD
dd535b318529ee5762bbb64cac64796bde125c34
 ~/Projects/temp % git checkout eacf1378005382ec8acf52509595c766360f8ff8 -- .
 ~/Projects/temp % git checkout eacf1378005382ec8acf52509595c766360f8ff8 -- .
 ~/Projects/temp % git checkout eacf1378005382ec8acf52509595c766360f8ff8
Note: switching to 'eacf1378005382ec8acf52509595c766360f8ff8'.

You are in 'detached HEAD' state. You can look around, make experimental
changes and commit them, and you can discard any commits you make in this
state without impacting any branches by switching back to a branch.

If you want to create a new branch to retain commits you create, you may
do so (now or later) by using -c with the switch command. Example:

  git switch -c <new-branch-name>

Or undo this operation with:

  git switch -

Turn off this advice by setting config variable advice.detachedHead to false

HEAD is now at eacf137 .
 ~/Projects/temp % git status
HEAD detached at eacf137
nothing to commit, working tree clean
 ~/Projects/temp % git checkout master
Previous HEAD position was eacf137 .
Switched to branch 'master'
 ~/Projects/temp % git checkout eacf1378005382ec8acf52509595c766360f8ff8
Note: switching to 'eacf1378005382ec8acf52509595c766360f8ff8'.

You are in 'detached HEAD' state. You can look around, make experimental
changes and commit them, and you can discard any commits you make in this
state without impacting any branches by switching back to a branch.

If you want to create a new branch to retain commits you create, you may
do so (now or later) by using -c with the switch command. Example:

  git switch -c <new-branch-name>

Or undo this operation with:

  git switch -

Turn off this advice by setting config variable advice.detachedHead to false

HEAD is now at eacf137 .
 ~/Projects/temp % git add . && git commit -m '.'
HEAD detached at eacf137
nothing to commit, working tree clean
 ~/Projects/temp % git checkout master
Previous HEAD position was eacf137 .
Switched to branch 'master'
 ~/Projects/temp % git reset --hard eacf1378005382ec8acf52509595c766360f8ff8
HEAD is now at eacf137 .
 ~/Projects/temp % git add . && git commit -m '.'
On branch master
nothing to commit, working tree clean
 ~/Projects/temp % git ls
git: 'ls' is not a git command. See 'git --help'.

The most similar command is
        log
 ~/Projects/temp % echo 'foo' > bar.txt
 ~/Projects/temp % git add . && git commit -m '.'
[master 2307467] .
 1 file changed, 1 insertion(+)
 create mode 100644 bar.txt
 ~/Projects/temp % git checkout eacf1378005382ec8acf52509595c766360f8ff8
Note: switching to 'eacf1378005382ec8acf52509595c766360f8ff8'.

You are in 'detached HEAD' state. You can look around, make experimental
changes and commit them, and you can discard any commits you make in this
state without impacting any branches by switching back to a branch.

If you want to create a new branch to retain commits you create, you may
do so (now or later) by using -c with the switch command. Example:

  git switch -c <new-branch-name>

Or undo this operation with:

  git switch -

Turn off this advice by setting config variable advice.detachedHead to false

HEAD is now at eacf137 .
 ~/Projects/temp % echo 'bar' > foo.txt
 ~/Projects/temp % git add . && git commit -m '.'
[detached HEAD d188b8d] .
 1 file changed, 1 insertion(+)
 create mode 100644 foo.txt
 ~/Projects/temp % git log
commit d188b8ddcca2e46d5a958927cc7b046cc366f7ac (HEAD)
Author: Fira <xoyage@gmail.com>
Date:   Tue Jun 23 21:15:38 2026 +0800

    .

commit eacf1378005382ec8acf52509595c766360f8ff8
Author: Fira <xoyage@gmail.com>
Date:   Tue Jun 23 21:02:47 2026 +0800

    .
 ~/Projects/temp % git checkout 2307467
Warning: you are leaving 1 commit behind, not connected to
any of your branches:

  d188b8d .

If you want to keep it by creating a new branch, this may be a good time
to do so with:

 git branch <new-branch-name> d188b8d

HEAD is now at 2307467 .
```

```

```

