<!-- anaconda?! -->

## how to install anaconda on ubuntu

To install Anaconda on Ubuntu, you need to <mark><strong>download the official installation shell script, execute it in your terminal, and initialize the environment</strong></mark>. You do not need root (`sudo`) privileges for the main installation. [link](https://www.anaconda.com/docs/getting-started/anaconda/install/linux-install)

Follow this step-by-step guide to get it up and running:

### Step 1: Update System Packages & Install Dependencies

Open your terminal (`Ctrl + Alt + T`) and make sure your system is up to date. If you plan to use Anaconda's graphical user interface (Anaconda Navigator), you should also install its required visual dependencies: [link](https://www.youtube.com/watch?v=792d3oJaX0k)

bash

```
sudo apt update && sudo apt upgrade -y
sudo apt install curl libgl1-mesa-glx libegl1-mesa libxrandr2 libxrender1 libxtst6 libxi6 libglapi-mesa libglu1-mesa -y
```

Use code with caution.

### Step 2: Download the Latest Anaconda Installer

1. Move to your `Downloads` directory:\
   bash

<!---->

```
cd ~/Downloads
```

Use code with caution.
2\. Use `curl` to pull the installation script directly from the official Anaconda Installer Archive.\
_(Note: As of mid-2026, the current standard release is `Anaconda3-2026.07-1`. You can replace this specific file name if a newer version is visible on their site)_: [link](https://www.anaconda.com/docs/getting-started/anaconda/install/linux-install)\
bash

```
curl -O https://anaconda.com
```

Use code with caution.

### Step 3: Run the Installation Script

1. Execute the installer script using `bash`:\
   bash

<!---->

```
bash Anaconda3-2026.07-1-Linux-x86_64.sh
```

Use code with caution.
2\. **Review License Terms:** Press **Enter** to start reviewing the license. Hold down the **Spacebar** or press **Page Down** to scroll through the text.
3\. **Accept Terms:** When asked if you accept the license terms, type `yes` and press **Enter**.
4\. **Choose Location:** The installer will recommend a default path (usually `~/anaconda3`). Press **Enter** to accept and confirm this location. [link](https://askubuntu.com/questions/505919/how-to-install-anaconda-on-ubuntu)

### Step 4: Initialize Anaconda

At the very end of the installation process, the script will ask if you want to initialize Anaconda Distribution by running `conda init`. [link](https://www.youtube.com/watch?v=dGm10q%5Fy3xw\&t=4)

- Type `yes` and press **Enter**.

- To apply the changes immediately without restarting your terminal, refresh your shell profile: [link](https://www.youtube.com/watch?v=XW6OV8IpOeA)\
  bash

<!---->

```
source ~/.bashrc
```

Use code with caution.

Once activated, you will see `(base)` appear at the beginning of your terminal prompt line. [link](https://www.youtube.com/watch?v=6i8Bf9Xv9C0)

***

### Step 5: (Optional) Turn Off Automatic Activation

By default, Anaconda will now auto-activate its base environment every single time you open a terminal. If you prefer your standard Ubuntu terminal configuration, you can turn this behavior off: [link](https://www.youtube.com/watch?v=hEBQQU7wKEE)

bash

```
conda config --set auto_activate_base false
source ~/.bashrc
```

Use code with caution.

If you turn it off, you can manually enter your environment whenever you need it by running: [link](https://www.youtube.com/watch?v=6i8Bf9Xv9C0)

bash

```
conda activate
```

Use code with caution.

### Step 6: Verify and Launch Navigator

To double-check that the installation worked smoothly, call the package list tool: [link](https://www.youtube.com/watch?v=792d3oJaX0k)

bash

```
conda list
```

Use code with caution.

If you want to pull up the desktop app dashboard to manage your virtual environments or open apps like Jupyter Notebook and Spyder, launch the graphical navigator: [link](https://www.anaconda.com/docs/getting-started/concepts/anaconda-or-miniconda)

bash

```
anaconda-navigator
```

Use code with caution.

For a complete visual walkthrough showing exactly what the command terminal prompts look like during this setup process, check out this video tutorial:

5:56

[link](https://www.youtube.com/watch?v=hEBQQU7wKEE)

Installing Anaconda on Ubuntu!

3.8K views · 2 years ago

YouTube · Adrian Dolinay

Would you like assistance **creating your first isolated virtual environment** for a project, or are you looking to install specific data science packages like **PyTorch** or **TensorFlow**?

- [link](https://www.anaconda.com/docs/getting-started/anaconda/install/linux-install)\
  www.anaconda.com\
  Linux installer - Anaconda\
  Open a terminal and run the following command: Hash comparison command. with the file path to the downloaded installer file. Downl...
- [link](https://askubuntu.com/questions/505919/how-to-install-anaconda-on-ubuntu)\
  Ask Ubuntu\
  apt - How to install Anaconda on Ubuntu?\
  you will be asked to specify the install location (which defaults to ~/anaconda ). you should add the anaconda binary directory to...
- [link](https://www.youtube.com/watch?v=6i8Bf9Xv9C0)\
  YouTube·Aleksandar Haber PhD\
  Correctly Install Anaconda On Linux Ubuntu\
  Feb 7, 2025 — To manually activate the base environment, type \`conda activate\`. To deactivate the current environment, type \`deactivate\`.\
  8:26

Show all

## what is it for

**Anaconda** is an all-in-one software platform designed specifically for **data science, machine learning, and scientific computing**. Think of it as a toolkit that provides everything you need to write and run code for data analysis without having to set up complex infrastructure manually.

Here is a breakdown of what Anaconda is actually used for:

### 1. Simplifies Package Management

In data science, you constantly rely on external libraries (like NumPy for math, Pandas for data processing, and Scikit-Learn for machine learning). Installing these manually can be a nightmare because different libraries often conflict with each other.

- Anaconda includes **`conda`**, a powerful package manager.
- It automatically figures out which software versions are compatible and installs them safely with a single command.

### 2. Creates Isolated Environments

If Project A requires an older version of Python (e.g., Python 3.8) and Project B requires the newest version (e.g., Python 3.12), they will break each other if installed globally on your Ubuntu system.

- Anaconda lets you create **virtual environments**, which act like isolated "bubbles" on your computer.
- You can switch between environments seamlessly, ensuring that a change in one project never breaks another.

### 3. Comes Pre-Loaded with Data Tools

Instead of downloading dozens of separate tools, Anaconda installs a massive ecosystem out of the box. It gives you immediate access to popular environments like:

- **Jupyter Notebook / JupyterLab:** A web-based interactive workspace widely used by data scientists to mix live code, equations, and data visualizations.
- **Spyder:** A powerful scientific development environment for writing and debugging complex Python scripts.
- **RStudio:** Support for data analysis using the R programming language.

### 4. Cross-Platform Consistency

Anaconda works exactly the same way on **Ubuntu (Linux), Windows, and macOS**. This makes it incredibly easy to share your code or environments with team members. If your code runs inside an Anaconda environment on your Ubuntu machine, you can export that environment configuration, and your teammate can replicate it exactly on their Windows machine.

***

### Who uses Anaconda?

- **Data Analysts** cleaning up spreadsheet data or building business intelligence dashboards.
- **AI/Machine Learning Engineers** building and training deep learning models (like neural networks).
- **Researchers & Scientists** handling large numbers, running simulations, or plotting massive datasets.
- **Students & Beginners** who want to learn Python without wasting hours trying to configure their computer's terminal.

What are you planning to build or learn? I can show you how to **create an environment** tailored exactly to your goals, whether it is for **basic Python learning**, **web scraping**, or **machine learning**.

## how to install it in an easier way

If you want a much faster, easier, and less bloated way to get the exact same benefits, you should install **Miniconda** instead of Anaconda. [link](https://www.hostzealot.com/blog/about-vps/setting-up-anaconda-on-ubuntu-or-debian-a-comprehensive-guide)

**Miniconda is the lightweight version of Anaconda**. It includes the exact same `conda` package manager and environment system, but it drops the 4GB+ of pre-installed software you might never use. You get a clean slate and install packages only as you need them. [link](https://github.com/snap-contrib/snap-conda)

You can install it instantly using a fast **three-command terminal script**:

### The 1-Minute Miniconda Install

Open your terminal and paste these three lines one by one:

1. **Download the installer script:**\
   bash

<!---->

```
mkdir -p ~/miniconda3
curl https://anaconda.com -o ~/miniconda3/miniconda.sh
```

Use code with caution.
2\. **Run the script automatically (skips reading the long text license):**\
bash

```
bash ~/miniconda3/miniconda.sh -b -u -p ~/miniconda3
```

Use code with caution.
3\. **Initialize and clean up:**\
bash

```
~/miniconda3/bin/conda init bash
rm ~/miniconda3/miniconda.sh
```

Use code with caution.

**To start using it:** Close your terminal and open a new one. You will instantly see `(base)` next to your cursor, meaning it is successfully active.

***

### What if I strictly want a Graphical User Interface (GUI)?

Because Linux is built natively for command-line tools, **there is no one-click "App Store" style installer** (`.deb` or `snap`) for full Anaconda. The terminal script is the official path. [link](https://askubuntu.com/questions/505919/how-to-install-anaconda-on-ubuntu)

However, if you want the visual **Anaconda Navigator** dashboard without doing heavy terminal setups, you can install the lightweight Miniconda using the fast method above, and then pull down the graphical interface with a single command: [link](https://s4.ad.brown.edu/python2020/software.html)

bash

```
conda install anaconda-navigator -y
```

Use code with caution.

Once that finishes downloading, simply type `anaconda-navigator` to launch the full desktop app. [link](https://www.youtube.com/watch?v=792d3oJaX0k\&t=37)

Would you prefer to stick with **Miniconda** to keep your hard drive clean, or should I help you build a **custom visual shortcut** on your Ubuntu desktop to open the Navigator app?

- [link](https://s4.ad.brown.edu/python2020/software.html)\
  Brown University\
  Python Environment Setup (Anaconda)\
  It provides a user-friendly interface for users to manage packages, environments and channels, without bothering to use terrifying...
- [link](https://askubuntu.com/questions/505919/how-to-install-anaconda-on-ubuntu)\
  Ask Ubuntu\
  apt - How to install Anaconda on Ubuntu?\
  These instructions explain how to install Anaconda on a Linux system. After downloading the Anaconda installer, run the following ...
- [link](https://www.youtube.com/watch?v=792d3oJaX0k\&t=37)\
  YouTube·Aleksandar Haber PhD\
  Correctly Install Anaconda with Navigator in Linux Ubuntu\
  Jun 29, 2024 — To start Anaconda Navigator, open a new terminal, activate the base environment with \`conda activate\`, and then run \`anaconda-navi...\
  2m

Show all

## how do ppl use it

In practice, people use Anaconda (or Miniconda) through a very standard daily workflow. Instead of dumping everything into one place, they treat it like a digital toolbox where they **create a new, isolated environment for every new project** they start.

Here is exactly how a developer or data scientist uses it on a daily basis:

### 1. The Daily Workflow (The 4-Step Cycle)

When starting a new project (for example, a web scraper or a data analysis script), a user opens their Ubuntu terminal and follows these steps:

- **Step 1: Create a clean environment**\
  They create a brand new, isolated box and specify the Python version they want.\
  bash

<!---->

```
conda create --name my_project python=3.11 -y
```

Use code with caution.

- **Step 2: Activate the environment**\
  They switch into that box. Notice how the terminal prompt changes from `(base)` to `(my_project)`.\
  bash

<!---->

```
conda activate my_project
```

Use code with caution.

- **Step 3: Install specific tools**\
  They download only the libraries needed for _this specific project_ (e.g., Pandas for data or Requests for web scraping).\
  bash

<!---->

```
conda install pandas requests -y
```

Use code with caution.

- **Step 4: Do the work**\
  They open their code editor (like VS Code or Jupyter) and write their program. When they are completely finished for the day, they exit the environment:\
  bash

<!---->

```
conda deactivate
```

Use code with caution.

***

### 2. How People Write and Run the Code

Once the environment is active, people usually write their code using one of two popular setups:

#### Approach A: The Interactive Way (Jupyter Notebooks)

Great for data exploration, cleaning data, and viewing charts instantly.

1. They install it inside their active environment: `conda install jupyterlab -y`
2. They launch it: `jupyter lab`
3. A web browser opens up. They can write a line of code, press `Shift + Enter`, and see the data or graph generate right beneath that line instantly.

#### Approach B: The Traditional Way (VS Code or Spyder)

Great for building large applications, automation scripts, or software tools.

1. They open **VS Code** or launch **Spyder** (`spyder`).
2. They point the code editor to use the specific Anaconda environment they just created.
3. They write standard `.py` script files and run them sequentially.

***

### 3. How People Share Their Work

When a developer finishes a project and wants to give it to a coworker or deploy it to a cloud server, they use Conda to perfectly clone their setup:

1. **Export the blueprint:** They run a command that saves a list of every single package they used into a tiny text file:\
   bash

<!---->

```
conda env export > environment.yml
```

Use code with caution.
2\. **Share it:** They send that `environment.yml` file to a teammate.
3\. **Recreate it:** The teammate runs one command on _their_ computer to perfectly replicate the environment:\
bash

```
conda env create -f environment.yml
```

Use code with caution.

What kind of project are you looking to work on? If you want, tell me:

- What **programming language or topic** you are exploring (e.g., learning basic Python, web scraping, data analytics)
- Whether you prefer working in a **web browser notebook** or a **traditional code editor**

I can give you the exact terminal commands to set up your very first project environment.

## what is it, why isnt it a pypi pkg to import

Anaconda (along with its package manager, `conda`) is an **entire software distribution and ecosystem system**, whereas a PyPI (Python Package Index) package is just <mark>a<span> </span><strong>compressed folder of Python code</strong></mark>.

You cannot `import conda` or `import anaconda` into a Python script because **Conda is what installs Python itself**, not the other way around.

Here is why Anaconda cannot just be a standard PyPI package you install with `pip`:

### 1. Conda Installs Things Beyond Python

PyPI packages (`pip`) are strictly designed to install Python libraries. However, data science projects heavily rely on software written in other languages—like **C, C++, Fortran, and CUDA** (used for graphics cards and AI).

- **`pip`** installs Python files and _tries_ to compile external C code on your system, which frequently fails on Ubuntu if you are missing system libraries.
- **`conda`** downloads pre-compiled binaries. It can install non-Python software, system-level libraries, and graphics drivers seamlessly.

### 2. Conda Manages the Python Version Itself

A PyPI package requires Python to already be running so it can install inside it. Conda operates at a higher level—**it treats Python as just another package**.\
Because it sits above Python, you can use Conda to create one environment running Python 3.9 and another running Python 3.12. A PyPI package cannot swap out or install the underlying Python engine running your machine.

### 3. Direct Comparison

| Feature                     | PyPI (`pip`)                                            | Anaconda (`conda`)                                          |
| --------------------------- | ------------------------------------------------------- | ----------------------------------------------------------- |
| **What is it?**             | A package manager **strictly for Python libraries**.    | A **system-level package manager** and environment manager. |
| **Can it install Python?**  | No. Python must already be installed on Ubuntu.         | **Yes.** It installs and manages multiple Python versions.  |
| **Languages supported**     | Python only.                                            | Python, R, C/C++, Java, Fortran, and more.                  |
| **How it handles binaries** | Often compiles from source (can cause errors on Linux). | Downloads pre-compiled, optimized binaries ready to run.    |

### How they work together

They aren't enemies; they actually work together! When people use Anaconda, they use `conda` to install the foundation (Python, heavy data science frameworks, graphics card drivers). If they need a niche, specific Python library that isn't on Anaconda's servers, they use `pip` _inside_ their active Conda environment to fetch it from PyPI.

Are you running into a specific **installation error** where your terminal is telling you a package can't be found, or are you trying to figure out whether to use **pip** or **conda** for a package you need right now?

