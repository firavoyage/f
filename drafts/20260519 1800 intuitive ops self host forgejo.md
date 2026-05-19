how to self host forgejo on my local laptop and push as if it's a remote

To self-host Forgejo locally and use it like a remote server, you need to <mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">run the Forgejo application, create a repository, and link your local project to it using its local network address</mark>. Docker is the fastest and cleanest way to set this up.

Step 1: Run Forgejo via Docker

Run this command in your terminal to start a Forgejo container. This maps Forgejo's web interface to port `3000` and SSH to port `2222`. \[[1](https://wiki.crowncloud.net/?How%5Fto%5FInstall%5FForgejo%5Fon%5FDebian%5F12)]

bash

```
docker run -d --name my-forgejo \
  -p 3000:3000 \
  -p 2222:22 \
  -v forgejo_data:/data \
  --restart always \
  codeberg.org/forgejo/forgejo:10
```

Use code with caution.

Step 2: Complete the Web Setup

1. Open your browser and go to `http://localhost:3000`.
2. Review the initial configuration settings.
3. Change **SSH Server Port** to `2222` (matching your Docker command).
4. Change **SSH Server Domain** to `localhost`.
5. Scroll down and create your **Administrator Account**.
6. Click **Install Forgejo**. \[[1](https://wiki.crowncloud.net/?How%5Fto%5FInstall%5FForgejo%5Fon%5FDebian%5F12), [2](https://pimylifeup.com/raspberry-pi-forgejo/)]

Step 3: Create a New Repository \[[1](https://medium.com/@gaurawsingh/i-had-never-heard-of-forgejo-until-i-started-writing-this-series-065d33644a91)]

1. Log into your new Forgejo dashboard.
2. Click the **+** icon in the top right.
3. Select **New Repository**.
4. Name your repository and click **Create Repository**.
5. Copy the **HTTP** or **SSH** clone URL provided on the screen.

- _HTTP Example:_ `http://localhost:3000/username/repo.git`

Step 4: Link Your Code and Push

Open your terminal, navigate to your existing local project folder, and run these commands to add Forgejo as a remote destination.

bash

```
# Initialize git if you haven't already
git init

# Add your local Forgejo as a remote named 'origin'
git remote add origin http://localhost:3000/username/repo.git

# Stage and commit your files
git add .
git commit -m "Initial commit to local Forgejo"

# Push your code to your local remote
git push -u origin main
```

Use code with caution.

Step 5: Verify the Push

Refresh your browser page at `http://localhost:3000/username/repo`. Your project files, commit history, and branches will now appear in your self-hosted web interface exactly like GitHub or GitLab.

To help tailor this setup, would you prefer to use **SSH keys instead of HTTP passwords** for authentication, or do you need instructions on how to **access this Forgejo instance from other devices** on your local Wi-Fi?

- [link](https://wiki.crowncloud.net/?How%5Fto%5FInstall%5FForgejo%5Fon%5FDebian%5F12)\
  How To Install Forgejo On Debian 12\
  Initial Configuration Setting Recommended Value (Debian 12 Setup) SSH server port 22 (keep default unless you use a custom SSH por...\
  \
  \
  CrownCloud Wiki
- [link](https://wiki.crowncloud.net/?How%5Fto%5FInstall%5FForgejo%5Fon%5FDebian%5F12)\
  How To Install Forgejo On Debian 12\
  Initial Configuration After starting Forgejo for the first time, open http://your-server-ip:3000 in your browser. Scroll down to A...\
  \
  \
  CrownCloud Wiki
- [link](https://pimylifeup.com/raspberry-pi-forgejo/)\
  Setting up and Running Forgejo on the Raspberry Pi\
  May 11, 2026 — Once you have entered a username and password, click the “ Install Forgejo ” button (2.) to complete the installation.\
  \
  \
  Pi My Life Up

well, docker feels heavy. can i do something like pnpm -g, and see it on localhost

**Forgejo cannot be installed via Node package managers like `pnpm -g`** because it is written in Go, not JavaScript. However, you can run it as a **single, lightweight standalone binary** directly on your laptop without any background services, heavy containers, or complex databases.

It is incredibly fast and uses an embedded SQLite database by default.

Step 1: Download the Binary

Fetch the single executable file for your operating system:

- **macOS:** Run `brew install forgejo` (The fastest route if you use Homebrew).
- **Windows:** Download the `windows-amd64.exe` file from the Forgejo Releases Page.
- **Linux:** Download the `linux-amd64` binary from the same releases page.

_Note: For Windows or Linux, rename the downloaded file to just `forgejo` (or `forgejo.exe`) and grant it execution permissions (`chmod +x forgejo` on Linux)._

Step 2: Run it Instantly

Open your terminal, navigate to the folder where you saved the binary, and start the built-in web server:

bash

```
./forgejo web
```

Use code with caution.

Step 3: Fast Web Configuration

1. Open your browser and go to `http://localhost:3000`.
2. **Database Settings**: Select **SQLite3** to automatically create a tiny `.db` file in your current directory.
3. **Admin Account**: Scroll to the bottom, create a username and password, and click **Install**.

Step 4: Add as a Git Remote

Create a blank repository on your new `localhost` web dashboard, then open a terminal pane in your project folder to link and push your code:

bash

```
git init
git remote add origin http://localhost:3000/your_username/your_repo.git
git add .
git commit -m "Direct push to binary forgejo"
git push -u origin main
```

Use code with caution.

When you close the terminal running `./forgejo web`, the application shuts down completely and consumes zero system memory or background CPU.

Would you like to know how to set this binary up to **automatically launch in the background** when your laptop turns on, or do you need help setting up **SSH keys for passwordless pushing**?

i can accept apt on ubuntu

**You can absolutely install Forgejo using `apt` on Ubuntu** by utilizing the community-maintained Forgejo Debian Repository. For a lightweight local laptop setup, the `forgejo-sqlite` package is perfect because it integrates directly with `systemd` and requires zero manual database configuration. \[[1](https://codeberg.org/forgejo-contrib/forgejo-deb)]

Step 1: Add the Forgejo Repository

Open your Ubuntu terminal and run these commands to import the repository's GPG key and add it to your sources list: \[[1](https://forgejo.org/docs/next/user/packages/debian/), [2](https://codeberg.org/forgejo-contrib/forgejo-deb)]

bash

```
# Create the directory for keyrings if it doesn't exist
sudo mkdir -p /etc/apt/keyrings

# Download and add the repository GPG key
sudo curl -fsSL -o /etc/apt/keyrings/forgejo.asc https://forgejo.org

# Add the Forgejo APT repository to your sources
echo "deb [signed-by=/etc/apt/keyrings/forgejo.asc] https://apt.forgejo.org/ alpine main" | sudo tee /etc/apt/sources.list.d/forgejo.list
```

Use code with caution.

Step 2: Update and Install `forgejo-sqlite` \[[1](https://forgejo.org/docs/next/user/packages/debian/)]

Update your local package index and install the SQLite-specific package: \[[1](https://forgejo.org/docs/next/user/packages/debian/), [2](https://codeberg.org/forgejo-contrib/forgejo-deb)]

bash

```
sudo apt update
sudo apt install forgejo-sqlite -y
```

Use code with caution.

_(This automatically handles creating a system user, directories, and a background systemd service for you)._ \[, [2](https://codeberg.org/forgejo-contrib/forgejo-deb)]

Step 3: Verify the Background Service

Because it installs as a native Ubuntu service, it is already running silently in the background. You can check its status using: \[[1](https://codeberg.org/forgejo-contrib/forgejo-deb)]

bash

```
sudo systemctl status forgejo
```

Use code with caution.

Step 4: Access and Push

1. Open your web browser and navigate to `http://localhost:3000`.
2. Click through the initial config web screen (the defaults are pre-configured optimally for your system directories).
3. Create your admin user account at the bottom and click **Install**.
4. Create a new repository on the web interface, and copy its link.
5. Go to your local project directory in the terminal and push your code like a normal remote: \[[1](https://forgejo.org/docs/next/admin/config-cheat-sheet/), [2](https://forgejo.org/docs/next/user/first-repository/)]

bash

```
git remote add origin http://localhost:3000/your_username/your_repo.git
git push -u origin main
```

Use code with caution.

Controlling the Service

Since this is running on your local laptop, you might not want it running when you are not coding. You can turn it off or on at any time using standard `systemctl` commands:

- **Stop Forgejo:** `sudo systemctl stop forgejo`
- **Start Forgejo:** `sudo systemctl start forgejo`
- **Disable auto-start on laptop boot:** `sudo systemctl disable forgejo`

Would you like help configuring **local SSH keys** so you can push via `git@localhost:...` without typing your HTTP password, or are you interested in **how to back up your data** from `/var/lib/forgejo`? \[]

- [link](https://codeberg.org/forgejo-contrib/forgejo-deb)\
  Debian packages for Forgejo - Codeberg.org\
  Project to bring Forgejo to Debian/Ubuntu as a system package with full systemd integration. This project is relatively stable for...\
  Codeberg.org
- [link](https://forgejo.org/docs/next/user/packages/debian/)\
  Debian Package Registry | Forgejo – Beyond coding. We forge.\
  If the registry is private, provide credentials in the URL. You can use a password or a personal access token: echo "deb \[signed-b...\
  Forgejo
- [link](https://forgejo.org/docs/next/admin/config-cheat-sheet/)\
  Configuration Cheat Sheet | Forgejo – Beyond coding. We forge.\
  This is a cheat sheet for the Forgejo configuration file. It contains most of the settings that can be configured as well as their...\
  Forgejo

Show all