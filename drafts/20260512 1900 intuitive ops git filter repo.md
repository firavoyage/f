#

how to extract a folder from a big git repo and preserve its git history

To extract a folder from a Git repository while preserving its history, the most recommended modern method is using <mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);"><strong>git-filter-repo</strong></mark>. This tool is faster and safer than the older `git filter-branch` command, which is now deprecated by the Git project. \[[1](https://github.com/newren/git-filter-repo), [2](https://medium.com/@ruqaiya.beguwala/day-16-30-git-filter-branch-rewrite-git-history-5fa5650650d7), [3](https://stackoverflow.com/questions/25274614/how-can-i-extract-a-portion-of-a-git-repository-into-its-own-repo-while-retaini)]

Option 1: Using git-filter-repo (Recommended) \[[1](https://www.deployhq.com/git/faqs/removing-large-files-from-git-history), [2](https://www.geeksforgeeks.org/git/how-to-move-subdirectory-into-separate-git-repository-1/)]

This tool rewrites the repository history to include only the commits that touched your specific folder, moving its contents to the root of the new repository. \[[1](https://www.youtube.com/watch?v=HV8hfmwDlPY), [2](https://dev.to/jayesh%5Fverma%5F9cff177f8fff/how-i-moved-a-subfolder-to-a-new-github-repo-with-full-git-history-1dh2)]

1. **Install the tool**: You may need to install it first (e.g., via `pip install git-filter-repo` or your package manager).

2. **Clone a fresh copy**: Always work on a fresh clone to avoid accidental data loss in your main project.\
   bash

<!---->

```
git clone <original-repo-url> new-repo-folder
cd new-repo-folder
```

Use code with caution.
3\. **Extract the folder**: Run the following command, replacing `path/to/folder` with your directory path.\
bash

```
git filter-repo --subdirectory-filter path/to/folder
```

Use code with caution.
4\. **Push to a new remote**: The local repo now contains only the folder's history. Add a new remote and push.\
bash

```
git remote add origin <new-repo-url>
git push -u origin main
```

Use code with caution.\
\[[1](https://docs.github.com/en/get-started/using-git/splitting-a-subfolder-out-into-a-new-repository), [2](https://boyersnet.com/blog/2021/02/11/moving-a-folder-between-two-git-repos/), [3](https://www.youtube.com/watch?v=KXPmiKfNlZE\&t=13), [4](https://jeffkreeftmeijer.com/git-extract/)]

Option 2: Using git subtree split

If you cannot install external tools, `git subtree` is built into most Git installations. It extracts the folder history into a new branch within your current repository. \[[1](https://medium.com/@jeevansathisocial/extract-subdirectory-from-git-repository-without-losing-history-3de8aed359a4), [2](https://www.youtube.com/watch?v=Dl6THeXcwVk\&t=89)]

1. **Split the branch**: This creates a new branch named `split-branch` containing only the history of the specified folder.\
   bash

<!---->

```
git subtree split --prefix=path/to/folder -b split-branch
```

Use code with caution.
2\. **Create and pull into a new repo**:\
bash

```
mkdir new-repo && cd new-repo
git init
git pull /path/to/original-repo split-branch
```

Use code with caution.\
\[[1](https://coreui.io/answers/how-to-subtree-split-in-git/), [2](https://cjohansen.no/git-subtree-multiple-dirs/), [3](https://kakearney.github.io/2015/02/02/using-git-subtrees-to-manage-files-with-overlapping-dependencies.html), [4](https://stackoverflow.com/questions/359424/detach-move-subdirectory-into-separate-git-repository), [5](https://medium.com/codenlp/git-folder-relocation-2373a085b200)]

Comparison of Methods

- **[git-filter-repo](https://github.com/newren/git-filter-repo)**: Best for large repositories; significantly faster and automatically handles complex history rewriting.
- **git subtree**: Good for quick tasks without extra installations; keeps the new history as a branch in the existing repo if desired.
- **git filter-branch**: **Avoid this** unless you are on a very old Git version, as it is slow and prone to errors. \[[1](https://github.com/newren/git-filter-repo), [2](https://www.digestafrica.com/vintage-brief/git-filter-branch-vs-filter-repo-choosing-the-right-tool-1767647948), [3](https://www.youtube.com/watch?v=2gKjZAEY7WE\&t=14), [4](https://coreui.io/answers/how-to-subtree-split-in-git/), [5](https://medium.com/@ruqaiya.beguwala/day-16-30-git-filter-branch-rewrite-git-history-5fa5650650d7), [6](https://www.digestafrica.com/vintage-brief/git-filter-branch-vs-filter-repo-whats-the-difference-1767647948)]

Do you need help **installing git-filter-repo** on your specific operating system?

AI can make mistakes, so double-check responses

- [link](https://medium.com/@jeevansathisocial/extract-subdirectory-from-git-repository-without-losing-history-3de8aed359a4)\
  Extract subdirectory from git repository without losing history\
  May 9, 2022 — Splitting-out the Subdirectory into a separate branch. The \`git subtree\` command provides a \`split\` sub-command that extracts a ne...\
  Medium·Jeevansathi Engineering
- [link](https://stackoverflow.com/questions/25274614/how-can-i-extract-a-portion-of-a-git-repository-into-its-own-repo-while-retaini)\
  How can I extract a portion of a git repository into it's own repo while ...\
  Aug 12, 2014 — \* 2 Answers. Sorted by: git clone initial final cd final git filter-branch --tree-filter 'rm -rf ' HEAD. Above commands will remov...\
  Stack Overflow
- [link](https://www.youtube.com/watch?v=HV8hfmwDlPY)\
  Create a new repo for a subdirectory | Git filter-repo\
  Mar 9, 2022 — hello this video is about git filter repo and how it is used to extract a subdirectory into its own repo whilst keeping the commit...\
  4:26\
  YouTube·Craig Davison

Show all

i want to extract to another folder and make it a new separate repo

To extract a specific subfolder into its own standalone repository while preserving its full Git history, the most efficient method is using <mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);"><strong>git-filter-repo</strong></mark>. \[[1](https://www.youtube.com/watch?v=HV8hfmwDlPY), [2](https://docs.github.com/en/get-started/using-git/splitting-a-subfolder-out-into-a-new-repository)]

Standard Extraction Method (git-filter-repo)

This approach transforms a local clone of your repository so that it only contains the history and files of the target folder, moving those files to the root level. \[, [2](https://dev.to/jayesh%5Fverma%5F9cff177f8fff/how-i-moved-a-subfolder-to-a-new-github-repo-with-full-git-history-1dh2)]

1. **Clone your original repository**: Create a fresh, temporary clone to avoid altering your current work.\
   bash

<!---->

```
git clone <original-repo-url> temp-repo-extract
cd temp-repo-extract
```

Use code with caution.
2\. **Filter the subfolder**: Use the `--subdirectory-filter` flag. Replace `FOLDER-NAME` with the path to your folder.\
bash

```
git filter-repo --subdirectory-filter FOLDER-NAME
```

Use code with caution.
3\. **Prepare the new repository**: Create a new empty repository on your hosting service (e.g., [GitHub](https://github.com/) or GitLab) and copy its URL.
4\. **Connect and push**: Add the new remote and push your filtered history.\
bash

```
git remote add origin <new-repo-url>
git push -u origin main
```

Use code with caution.\
\[, [2](https://stackoverflow.com/questions/69946651/selectively-move-files-and-directories-to-a-new-repository-preserving-history), [3](https://dev.to/jayesh%5Fverma%5F9cff177f8fff/how-i-moved-a-subfolder-to-a-new-github-repo-with-full-git-history-1dh2)]

Alternative Method (git subtree)

If you prefer not to install external tools, you can use the built-in **git subtree split** command. \[[1](https://medium.com/@jeevansathisocial/extract-subdirectory-from-git-repository-without-losing-history-3de8aed359a4), [2](https://medium.com/@jeevansathisocial/extract-subdirectory-from-git-repository-without-losing-history-3de8aed359a4)]

- **Split the folder history**: This isolates the folder's history into a new local branch.\
  bash

<!---->

```
git subtree split --prefix=FOLDER-NAME -b new-branch
```

Use code with caution.

- **Move to a new directory**: Create a new folder, initialize it as a Git repo, and pull the history from the original repo's split branch.\
  bash

<!---->

```
mkdir ../new-repo && cd ../new-repo
git init
git pull ../temp-repo-extract new-branch
```

Use code with caution.\
\[[1](https://medium.com/@jeevansathisocial/extract-subdirectory-from-git-repository-without-losing-history-3de8aed359a4), [2](https://making.close.com/posts/splitting-sub-folders-out-into-new-git-repository/), [3](https://dev.to/jayesh%5Fverma%5F9cff177f8fff/how-i-moved-a-subfolder-to-a-new-github-repo-with-full-git-history-1dh2)]

Key Considerations

- **Destructive Change**: Filtering history is a permanent change to the local repository where you run it. Always work in a **fresh clone**.
- **Clean History**: `git-filter-repo` automatically handles removing empty commits and cleaning up the repository.
- **GitHub/GitLab**: If you are using [GitHub](https://docs.github.com/en/get-started/using-git/splitting-a-subfolder-out-into-a-new-repository), they officially recommend `git-filter-repo` for this task. \[, [2](https://www.youtube.com/watch?v=KXPmiKfNlZE\&t=13)]

Would you like help **cleaning up the original repo** after extracting the folder?

- [link](https://medium.com/@jeevansathisocial/extract-subdirectory-from-git-repository-without-losing-history-3de8aed359a4)\
  Extract subdirectory from git repository without losing history\
  May 9, 2022 — The challenge of preserving the git history helped me learn about \`git subtree\`. With some research and experiments, I found out t...\
  Medium·Jeevansathi Engineering
- [link](https://docs.github.com/en/get-started/using-git/splitting-a-subfolder-out-into-a-new-repository)\
  Splitting a subfolder out into a new repository - GitHub Docs\
  Tip. Windows users should use / to delimit folders. $ git filter-repo --path FOLDER-NAME/ # Filter the specified branch in your di...\
  GitHub Docs
- [link](https://www.youtube.com/watch?v=HV8hfmwDlPY)\
  Create a new repo for a subdirectory | Git filter-repo\
  Mar 9, 2022 — hello this video is about git filter repo and how it is used to extract a subdirectory into its own repo whilst keeping the commit...\
  4:26\
  YouTube·Craig Davison

Show all

install git filter repo on ubuntu

Installing `git-filter-repo` on Ubuntu depends on your version, as it is included in official repositories for newer releases but requires manual steps for older ones. \[[1](https://github.com/newren/git-filter-repo/issues/5)]

Method 1: Using APT (Ubuntu 21.10 and Newer)

On newer versions of Ubuntu, you can install it directly from the official universe repository. \[[1](https://askubuntu.com/questions/1423729/how-to-install-git-filter-repo)]

bash

```
sudo apt update
sudo apt install git-filter-repo
```

Use code with caution.

Method 2: Using pip (Ubuntu 20.04 and Older)

If the APT package is not found, use the Python package manager. It is recommended to use `pipx` on newer systems to keep global packages isolated, or a standard user-level `pip` install for older ones. \[[1](https://superuser.com/questions/1563034/how-do-you-install-git-filter-repo)]

- **Using pipx (Recommended for 23.04+)**:\
  bash

<!---->

```
sudo apt install pipx
pipx install git-filter-repo
```

Use code with caution.

- **Using standard pip**:\
  bash

<!---->

```
python3 -m pip install --user git-filter-repo
```

Use code with caution.

Method 3: Manual Installation (Any Version)

Since `git-filter-repo` is essentially a single-file Python script, you can install it manually by placing it in your system's execution path. \[[1](https://github.com/newren/git-filter-repo/blob/main/INSTALL.md)]

1. **Download the script** from the [official GitHub repository](https://github.com/newren/git-filter-repo/blob/main/INSTALL.md).

2. **Move it to your path**:\
   bash

<!---->

```
# Find your git executive path
git --exec-path

# Move the downloaded file to that path (example assuming /usr/lib/git-core)
sudo mv ~/Downloads/git-filter-repo /usr/lib/git-core/
sudo chmod +x /usr/lib/git-core/git-filter-repo
```

Use code with caution.\
\[[1](https://github.com/newren/git-filter-repo/blob/main/INSTALL.md), [2](https://superuser.com/questions/1563034/how-do-you-install-git-filter-repo), [3](https://github.com/newren/git-filter-repo/issues/5)]

Verification

After installation, verify it works by running: \[[1](https://github.com/newren/git-filter-repo/blob/main/INSTALL.md)]

bash

```
git filter-repo --version
```

Use code with caution.

Do you have a **specific version of Ubuntu** (like 20.04 or 22.04) so I can provide the exact commands for your system?

- [link](https://superuser.com/questions/1563034/how-do-you-install-git-filter-repo)\
  How do you install git-filter-repo? - Super User\
  Jun 22, 2020 — 2. The repo's INSTALL.md says to use your package manager, and lists a version for Ubuntu 20.04. I tried APT with no luck. ndemarc...\
  Super User
- [link](https://github.com/newren/git-filter-repo/blob/main/INSTALL.md)\
  git-filter-repo/INSTALL.md at main - GitHub\
  Simple Installation. All you need to do is download one file: the git-filter-repo script in this repository (direct link to raw fi...\
  GitHub
- [link](https://askubuntu.com/questions/1423729/how-to-install-git-filter-repo)\
  How to install git-filter-repo? - Ask Ubuntu\
  Aug 15, 2022 — 1. The package is only available for 21.10 and newer. Even the link you have is for 22.04. muru. – muru ♦ 2022-08-15 16:19:41 +00:\
  Ask Ubuntu

Show all

#

is git a ci tool

<mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);"><span style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">No, </span><strong>Git is not a Continuous Integration (CI) tool</strong></mark>. It is a **Version Control System (VCS)** used to track changes in source code during software development. \[[1](https://www.coursera.org/articles/what-is-git), [2](https://www.quora.com/Is-GIT-a-continuous-integration-tool), [3](https://en.wikipedia.org/wiki/Git)]

While Git itself doesn't perform CI tasks—like automatically building or testing code—it is the **foundation** that CI tools rely on to function. \[[1](https://github.com/resources/articles/ci-cd), [2](https://www.youtube.com/watch?v=nz2Zv18%5FP9A), [3](https://learn.microsoft.com/en-us/devops/develop/git/what-is-git), [4](https://kaopiz.com/en/articles/git-vs-github-vs-gitlab/), [5](https://www.geeksforgeeks.org/git/the-impact-of-git-on-modern-software-development/)]

How Git Relates to CI

- **Trigger**: A CI pipeline is typically "triggered" by a Git event, such as a `git push` or a pull request.
- **Source of Truth**: The [Git repository](https://git-scm.com/) provides the exact version of the code that the CI tool needs to build and test.
- **Version Control**: If a CI test fails, developers use Git to revert to a previous, stable version of the code. \[[1](https://www.youtube.com/watch?v=gqXLu7JFetQ), [2](https://www.youtube.com/watch?v=nz2Zv18%5FP9A)]

Actual CI Tools

These are platforms that integrate with Git to automate the building, testing, and deployment process: \[[1](https://learn.microsoft.com/en-us/devops/develop/git/what-is-git)]

- **[GitHub Actions](https://docs.github.com/en/actions/get-started/continuous-integration)**: Built directly into GitHub to automate workflows.
- **[GitLab CI/CD](https://about.gitlab.com/solutions/continuous-integration/)**: A native part of the GitLab platform.
- **[Jenkins](https://www.atlassian.com/continuous-delivery/continuous-integration/tools)**: An open-source automation server that works with Git repositories.
- **CircleCI**: A cloud-based platform for fast automation and testing. \[[1](https://about.gitlab.com/solutions/continuous-integration/), [2](https://docs.github.com/en/actions/get-started/continuous-integration), [3](https://docs.github.com/articles/getting-started-with-github-actions), [4](https://www.g2.com/discussions/best-ci-platforms-for-integrating-with-git-repositories), [5](https://www.atlassian.com/continuous-delivery/continuous-integration/tools)]

In short: **Git** is the library where your books (code) are stored and tracked; **CI tools** are the automated printers and proofreaders that check those books every time you add a new page. \[[1](https://www.youtube.com/watch?v=YLtlz88zrLg), [2](https://www.youtube.com/shorts/JnU6vIXruUU), [3](https://docs.appsmith.com/advanced-concepts/version-control-with-git/cd-with-git), [4](https://levelup.gitconnected.com/build-test-ship-simplifying-ios-ci-cd-with-fastlane-and-github-actions-194e461d44d9)]

Would you like to know how to **set up a basic CI pipeline** using one of these tools?

- [link](https://www.quora.com/Is-GIT-a-continuous-integration-tool)\
  Is GIT a continuous integration tool? - Quora\
  Nov 13, 2019 — No, it's not. GIT is strictly a Version Control System (VCS). It's an opensource Version-control system used for keeping track of ...\
  Quora
- [link](https://github.com/resources/articles/ci-cd)\
  What is CI/CD? - GitHub\
  Nov 7, 2024 — Building your CI/CD toolkit \* Version control: CI begins in shared repositories, where teams collaborate on code using version con...\
  GitHub
- [link](https://about.gitlab.com/solutions/continuous-integration/)\
  Continuous Integration and Delivery (CI/CD) - GitLab\
  GitLab delivers CI/CD in a single platform with integrated generative AI at every stage of the software development lifecycle. Sec...\
  about.gitlab.com

Show all

i want a broader term for all non code programming works, like ci, vcs, etc.

There isn't a single universal word, but the most common umbrella terms for non-coding technical work like CI/CD, version control, and infrastructure management are **DevOps** and **Software Configuration Management (SCM)**. \[[1](https://digitalcloud.training/do-non-coders-have-a-career-in-cloud-computing/), [2](https://english.stackexchange.com/questions/463131/is-there-a-better-term-for-non-developer)]

Primary Terms

- **DevOps (Development + Operations)**: This is the most popular term today. It covers the entire lifecycle of software delivery, including automation, integration, and infrastructure.
- **Software Configuration Management (SCM)**: A broader, more formal term that encompasses everything needed to build, package, and deploy software. While often used interchangeably with "Version Control," SCM technically includes the entire management process of which version control is just one part.
- **Operations (Ops)**: Often used to describe the "keeping the lights on" (KTLO) side of software—managing servers, environments, and deployment pipelines rather than the application code itself. \[[1](https://stackoverflow.com/questions/4127425/whats-the-difference-between-vcs-and-scm), [2](https://about.gitlab.com/topics/devops/), [3](https://www.coursera.org/articles/devops-vs-cicd), [4](https://azure.microsoft.com/en-us/resources/cloud-computing-dictionary/what-is-devops), [5](https://www.forbes.com/sites/adrianbridgwater/2023/08/18/the-13-types-of-ops/), [6](https://www.reddit.com/r/learnprogramming/comments/17kcng7/what%5Fis%5Fthe%5Fword%5Ffor%5Fall%5Fof%5Fthe%5Fnonprogramming/)]

Related Categories

Depending on the specific "work" you are doing, you might use more targeted terms:

- **Infrastructure-as-Code (IaC)**: Treating infrastructure setup (like provisioning servers) as a repeatable process using tools like [Terraform](https://www.sentinelone.com/cybersecurity-101/cloud-security/infrastructure-as-code-platforms/).
- **Platform Engineering**: A newer term for creating the "internal developer platforms" that house CI/CD and VCS tools so that developers don't have to manage them manually.
- **Tooling**: Often used in job titles (e.g., "Tooling Engineer") to describe the work of building and maintaining the internal systems that support the main product's development. \[[1](https://portworx.com/knowledge-hub/platform-engineering-vs-devops-ci-cd-pipeline/), [2](https://www.youtube.com/watch?v=wg%5FVDHftvtU), [3](https://www.sentinelone.com/cybersecurity-101/cloud-security/infrastructure-as-code-platforms/), [4](https://digitalcloud.training/do-non-coders-have-a-career-in-cloud-computing/)]

In a professional setting, people often refer to these combined tasks as the **Delivery Pipeline** or **Developer Experience (DevEx)**. \[[1](https://www.planview.com/resources/articles/devops-terminology/)]

Are you looking for a term to use on a **resume** or to better organize a **project's documentation**?

- [link](https://portworx.com/knowledge-hub/platform-engineering-vs-devops-ci-cd-pipeline/)\
  Platform Engineering vs. DevOps: CI/CD Pipeline - Portworx\
  Oct 23, 2024 — What is DevOps? DevOps, a blend of “Development” and “Operations,” encompasses practices that bridge the gap between software deve...\
  Portworx
- [link](https://www.youtube.com/watch?v=wg%5FVDHftvtU)\
  Infrastructure-as-Code (IaC): Best Cloud Native Languages to ...\
  Aug 14, 2024 — hello everybody and welcome to our Tech talk today on essentially looking at various Cloud native languages to treat infrastructur...\
  44:30\
  YouTube·Mirantis
- [link](https://www.reddit.com/r/learnprogramming/comments/17kcng7/what%5Fis%5Fthe%5Fword%5Ffor%5Fall%5Fof%5Fthe%5Fnonprogramming/)\
  What is the word for all of the non-programming technical ...\
  Oct 31, 2023 — Software engineering, system design, analysis, probably more. The broadest one that captures many of these would be "software engi...\
  Reddit·r/learnprogramming

Show all