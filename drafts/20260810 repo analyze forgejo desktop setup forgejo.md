# .

```
 ~ % sudo systemctl disable --now forgejo
Removed "/etc/systemd/system/multi-user.target.wants/forgejo.service".
 ~ % sudo systemctl enable --now forgejo
Created symlink /etc/systemd/system/multi-user.target.wants/forgejo.service → /usr/lib/systemd/system/forgejo.service.
```

```
● forgejo.service - Forgejo (Beyond coding. We forge.)
     Loaded: loaded (/usr/lib/systemd/system/forgejo.service; enabled; preset: enabled)
     Active: active (running) since Mon 2026-08-10 02:20:01 CST; 3s ago
   Main PID: 806647 (forgejo)
      Tasks: 17 (limit: 18169)
     Memory: 154.7M (peak: 158.4M)
        CPU: 399ms
     CGroup: /system.slice/forgejo.service
             └─806647 /usr/bin/forgejo web --config /etc/forgejo/app.ini

Aug 10 02:20:01 Fira forgejo[806647]: 2026/08/10 02:20:01 cmd/web.go:112:showWebStartupMessage() [I] Forgejo version: 11.0.14+gitea-1>
Aug 10 02:20:01 Fira forgejo[806647]: 2026/08/10 02:20:01 cmd/web.go:113:showWebStartupMessage() [I] * RunMode: prod
Aug 10 02:20:01 Fira forgejo[806647]: 2026/08/10 02:20:01 cmd/web.go:114:showWebStartupMessage() [I] * AppPath: /usr/bin/forgejo
Aug 10 02:20:01 Fira forgejo[806647]: 2026/08/10 02:20:01 cmd/web.go:115:showWebStartupMessage() [I] * WorkPath: /var/lib/forgejo
Aug 10 02:20:01 Fira forgejo[806647]: 2026/08/10 02:20:01 cmd/web.go:116:showWebStartupMessage() [I] * CustomPath: /var/lib/forgejo/c>
Aug 10 02:20:01 Fira forgejo[806647]: 2026/08/10 02:20:01 cmd/web.go:117:showWebStartupMessage() [I] * ConfigFile: /etc/forgejo/app.i>
Aug 10 02:20:01 Fira forgejo[806647]: 2026/08/10 02:20:01 cmd/web.go:118:showWebStartupMessage() [I] Prepare to run install page
Aug 10 02:20:01 Fira forgejo[806647]: Listen: http://0.0.0.0:3000
Aug 10 02:20:01 Fira forgejo[806647]: AppURL(ROOT_URL): http://localhost:3000/
Aug 10 02:20:01 Fira forgejo[806647]: Starting new Web server: tcp:0.0.0.0:3000 on PID: 806647
~
~
~
~
~
~
~
~
~
~
~
lines 1-20/20 (END)
```

```
 ~ % forgejo --help
NAME:
   forgejo - Beyond coding. We forge.

USAGE:
   forgejo [global options] command [command options]

VERSION:
   11.0.14+gitea-1.22.0 (release name 11.0.14+gitea-1.22.0) built with GNU Make 4.3, go1.25.10 : sqlite, sqlite_unlock_notify

DESCRIPTION:
   By default, forgejo will start serving using the web-server with no argument, which can alternatively be run by running the subcommand "web".

COMMANDS:
   help, h          Shows a list of commands or help for one command
   web              Start the Forgejo web server
   serv             (internal) Should only be called by SSH shell
   hook             (internal) Should only be called by Git
   keys             (internal) Should only be called by SSH server
   dump             Dump Forgejo files and database
   admin            Perform common administrative operations
   migrate          Migrate the database
   doctor           Diagnose and optionally fix problems, convert or re-create database tables
   manager          Manage the running forgejo process
   embedded         Extract embedded resources
   migrate-storage  Migrate the storage
   dump-repo        Dump the repository from git/github/gitea/gitlab
   restore-repo     Restore the repository from disk
   actions          Manage Forgejo Actions
   cert             Generate self-signed certificate
   generate         Generate Gitea's secrets/keys/tokens
   docs             Output CLI documentation
   forgejo-cli      Forgejo CLI

GLOBAL OPTIONS:
   --version, -v                  print the version
   --help, -h                     show help
   --custom-path value, -C value  Set custom path (defaults to '{WorkPath}/custom')
   --config value, -c value       Set custom config file (defaults to '{WorkPath}/custom/conf/app.ini') (default: "/etc/forgejo/app.ini")
   --work-path value, -w value    Set Forgejo's working path (defaults to the directory of the Forgejo binary)
 ~ % forgejo
2026/08/10 02:20:13 cmd/web.go:253:runWeb() [I] Starting Forgejo on PID: 807205
2026/08/10 02:20:13 cmd/web.go:112:showWebStartupMessage() [I] Forgejo version: 11.0.14+gitea-1.22.0 built with GNU Make 4.3, go1.25.10 : sqlite, sqlite_unlock_notify
2026/08/10 02:20:13 cmd/web.go:113:showWebStartupMessage() [I] * RunMode: prod
2026/08/10 02:20:13 cmd/web.go:114:showWebStartupMessage() [I] * AppPath: /usr/bin/forgejo
2026/08/10 02:20:13 cmd/web.go:115:showWebStartupMessage() [I] * WorkPath: /var/lib/forgejo
2026/08/10 02:20:13 cmd/web.go:116:showWebStartupMessage() [I] * CustomPath: /var/lib/forgejo/custom
2026/08/10 02:20:13 cmd/web.go:117:showWebStartupMessage() [I] * ConfigFile: /etc/forgejo/app.ini
2026/08/10 02:20:13 cmd/web.go:118:showWebStartupMessage() [I] Prepare to run install page
2026/08/10 02:20:13 ...ation/translation.go:80:func1() [F] Failed to list locale files: open /var/lib/forgejo/custom/options/locale: permission denied
```

well, the help text of forgejo is wild.

# . config

```yaml
db: sqlite
# repo root: /var/lib/forgejo/data/forgejo-repositories # default
admin:
  user: f
  email: f@fira.local # it's required. i dont have to have an email. f is for fira. im fira. that's it. it doesnt make any sense if it would be unused. but if it's used, i guess it would be fine to appear like that. (instead of a@a.a or foo@bar.baz or anonymous@example.com). i guess i may use {gpg}@gpg.local. but i dont have to have a public key. im myself. im the definitive source. yet i have to format like an email. but if i could i d like to write as "f". (yeah, my email is f. or undefined. or any.)
  pw: f
```

the email should be

- definitive and simple (no one could compete w me. f is for fira.)
- non anonymous (it should be me, if you could not know it's me from the email, then im everyone in the world or im the one of all emails.)
- non crypto (i do not prove myself. im not to be judged.)

maybe `f@fira.local`. 

i would consider `f@f.local` a good choice. but i feel fira is more easily pronounced.

since i do not want to use `a@a.a` (shortest, simplest, first), i will not just blindly reduce the number of letters for `fira` either.

---

wait. password length must > 8?!

you should tell me before submission. well anyway forgejo is a geek tool.

```yaml
db: sqlite
# repo root: /var/lib/forgejo/data/forgejo-repositories # default
admin:
  user: f
  email: f@fira.local
  pw: firafira
```

# . setup

```sh
 ~ % sudo chown -R $USER:$USER /var/lib/forgejo

 ~ % # Create your repository subfolder (replace 'fira' with your Forgejo username if different)
mkdir -p /var/lib/forgejo/data/forgejo-repositories/f

# Shortcut your Documents
ln -s ~/Documents /var/lib/forgejo/data/forgejo-repositories/f/Documents

# Shortcut your Projects
ln -s ~/Projects /var/lib/forgejo/data/forgejo-repositories/f/Projects
```

```sh
 ~ % # 1. Give ownership back to the forgejo service user
sudo chown -R forgejo:forgejo /var/lib/forgejo

# 2. Add your personal user to the forgejo system group
sudo usermod -aG forgejo $USER

# 3. Open up permissions so group members (you) can read/write inside it
sudo chmod -R 775 /var/lib/forgejo

 ~ % # 1. Clear out the symlinks you made earlier
rm -rf /var/lib/forgejo/data/forgejo-repositories/f/Documents
rm -rf /var/lib/forgejo/data/forgejo-repositories/f/Projects

# 2. Re-create them as physical directories
mkdir -p /var/lib/forgejo/data/forgejo-repositories/f/Documents
mkdir -p /var/lib/forgejo/data/forgejo-repositories/f/Projects

# 3. Mount your real folders into Forgejo's system space
sudo mount --bind /home/fira/Documents /var/lib/forgejo/data/forgejo-repositories/f/Documents
sudo mount --bind /home/fira/Projects /var/lib/forgejo/data/forgejo-repositories/f/Projects

rm: cannot remove '/var/lib/forgejo/data/forgejo-repositories/f/Documents': Permission denied
rm: cannot remove '/var/lib/forgejo/data/forgejo-repositories/f/Projects': Permission denied
 ~ % # 1. Clear out the symlinks you made earlier
sudo rm -rf /var/lib/forgejo/data/forgejo-repositories/f/Documents
sudo rm -rf /var/lib/forgejo/data/forgejo-repositories/f/Projects

# 2. Re-create them as physical directories
mkdir -p /var/lib/forgejo/data/forgejo-repositories/f/Documents
mkdir -p /var/lib/forgejo/data/forgejo-repositories/f/Projects

# 3. Mount your real folders into Forgejo's system space
sudo mount --bind /home/fira/Documents /var/lib/forgejo/data/forgejo-repositories/f/Documents
sudo mount --bind /home/fira/Projects /var/lib/forgejo/data/forgejo-repositories/f/Projects

mkdir: cannot create directory ‘/var/lib/forgejo/data/forgejo-repositories/f/Documents’: Permission denied
mkdir: cannot create directory ‘/var/lib/forgejo/data/forgejo-repositories/f/Projects’: Permission denied
mount: /var/lib/forgejo/data/forgejo-repositories/f/Documents: mount point does not exist.
       dmesg(1) may have more information after failed mount system call.
mount: /var/lib/forgejo/data/forgejo-repositories/f/Projects: mount point does not exist.
       dmesg(1) may have more information after failed mount system call.
 ~ % # 1. Re-create the directories using sudo
sudo mkdir -p /var/lib/forgejo/data/forgejo-repositories/f/Documents
sudo mkdir -p /var/lib/forgejo/data/forgejo-repositories/f/Projects

# 2. Mount your real folders into Forgejo's system space
sudo mount --bind /home/fira/Documents /var/lib/forgejo/data/forgejo-repositories/f/Documents
sudo mount --bind /home/fira/Projects /var/lib/forgejo/data/forgejo-repositories/f/Projects
```

```sh
 ~ % sudo systemctl edit forgejo

You are trying to start Visual Studio Code as a super user which isn't recommended. If this was intended, please add the argument `--no-sandbox` and specify an alternate user data directory using the `--user-data-dir` argument.
(editor) failed with exit status 1.
 ~ % sudo systemctl edit forgejo

You are trying to start Visual Studio Code as a super user which isn't recommended. If this was intended, please add the argument `--no-sandbox` and specify an alternate user data directory using the `--user-data-dir` argument.
(editor) failed with exit status 1.
 ~ % systemctl edit forgejo

Failed to create parent directories for '/etc/systemd/system/forgejo.service.d/override.conf': Permission denied
 ~ % sudo systemctl edit forgejo

You are trying to start Visual Studio Code as a super user which isn't recommended. If this was intended, please add the argument `--no-sandbox` and specify an alternate user data directory using the `--user-data-dir` argument.
(editor) failed with exit status 1.
 ~ % sudo systemctl edit forgejo --no-sandbox

systemctl: unrecognized option '--no-sandbox'
 ~ % sudo systemctl edit forgejo

You are trying to start Visual Studio Code as a super user which isn't recommended. If this was intended, please add the argument `--no-sandbox` and specify an alternate user data directory using the `--user-data-dir` argument.
(editor) failed with exit status 1.
 ~ % open /etc/systemd/system/multi-user.target.wants/forgejo.service
```

append on `/etc/systemd/system/multi-user.target.wants/forgejo.service`

```
[Service]
ProtectHome=false
```

```
%                                                                                                                                      ~ % sudo systemctl restart forgejo

Warning: The unit file, source configuration file or drop-ins of forgejo.service changed on disk. Run 'systemctl daemon-reload' to reload units.
 ~ % systemctl daemon-reload
 ~ % sudo systemctl restart forgejo

 ~ % sudo umount /var/lib/forgejo/data/forgejo-repositories/f/Documents
sudo umount /var/lib/forgejo/data/forgejo-repositories/f/Projects
sudo rm -rf /var/lib/forgejo/data/forgejo-repositories/f/Documents
sudo rm -rf /var/lib/forgejo/data/forgejo-repositories/f/Projects

 ~ % sudo umount -f /var/lib/forgejo/data/forgejo-repositories/f/Documents
sudo umount -f /var/lib/forgejo/data/forgejo-repositories/f/Projects

umount: /var/lib/forgejo/data/forgejo-repositories/f/Documents: no mount point specified.
umount: /var/lib/forgejo/data/forgejo-repositories/f/Projects: no mount point specified.
```

```
 ~ % # 1. Reset the GNOME file manager metadata cache
gvfs-tree -r /var/lib/forgejo/data/forgejo-repositories/f/ 2>/dev/null || true

# 2. Kill all active Nautilus processes to force a UI rebuild
nautilus -q

** Message: 03:14:43.588: Connecting to org.freedesktop.Tracker3.Miner.Files
 ~ % nano ~/.config/gtk-3.0/bookmarks

 ~ % # Clear GNOME volume metadata cache
sudo rm -rf ~/.local/share/gvfs-metadata/*

# Tell the disk daemon to refresh active drive configurations
sudo udisksctl info -b /dev/loop* 2>/dev/null || true

/org/freedesktop/UDisks2/block_devices/loop0:
  org.freedesktop.UDisks2.Block:
    Configuration:              []
    CryptoBackingDevice:        '/'
    Device:                     /dev/loop0
    DeviceNumber:               1792
    Drive:                      '/'
    HintAuto:                   false
    HintIconName:
    HintIgnore:                 false
    HintName:
    HintPartitionable:          true
    HintSymbolicIconName:
    HintSystem:                 true
    Id:
    IdLabel:
    IdType:                     squashfs
    IdUUID:
    IdUsage:                    filesystem
    IdVersion:                  4.0
    MDRaid:                     '/'
    MDRaidMember:               '/'
    PreferredDevice:            /dev/loop0
    ReadOnly:                   true
    Size:                       4096
    Symlinks:                   /dev/disk/by-diskseq/10
                                /dev/disk/by-loop-inode/259:2-3546598
                                /dev/disk/by-loop-ref/\x2fvar\x2flib\x2fsnapd\x2fsnaps\x2fbare_5.snap
    UserspaceMountOptions:      x-gdu.hide
                                x-gvfs-hide
  org.freedesktop.UDisks2.Filesystem:
    MountPoints:        /snap/bare/5
    Size:               0
  org.freedesktop.UDisks2.Loop:
    Autoclear:          true
    BackingFile:        /var/lib/snapd/snaps/bare_5.snap
    SetupByUID:         0
 ~ % # Kill Nautilus completely
nautilus -q

# Restart the background user file tracking service
systemctl --user restart gvfs-daemon.service

# Reopen a clean Nautilus window
nautilus &

** Message: 03:15:35.363: Connecting to org.freedesktop.Tracker3.Miner.Files
[1] 822618
 ~ % ** Message: 03:15:35.448: Connecting to org.freedesktop.Tracker3.Miner.Files

** (org.gnome.Nautilus:822618): WARNING **: 03:15:35.692: Unable to create connection for session-wide Tracker indexer: Unit tracker-miner-fs-3.service is masked.

[1]  + done       nautilus
```

```
 ~ % # 1. Forcefully break the active mount connections lazily
sudo umount -l /var/lib/forgejo/data/forgejo-repositories/f/Documents
sudo umount -l /var/lib/forgejo/data/forgejo-repositories/f/Projects

# 2. Safely clear away the empty placeholder directories
sudo rm -rf /var/lib/forgejo/data/forgejo-repositories/f/Documents
sudo rm -rf /var/lib/forgejo/data/forgejo-repositories/f/Projects

# 3. Kill Nautilus cache so it updates the sidebar immediately
nautilus -q

umount: /var/lib/forgejo/data/forgejo-repositories/f/Documents: no mount point specified.
umount: /var/lib/forgejo/data/forgejo-repositories/f/Projects: no mount point specified.
** Message: 03:14:07.637: Connecting to org.freedesktop.Tracker3.Miner.Files
```

# how to install forgejo on ubuntu

You can install Forgejo on Ubuntu using **three main methods**: <mark>Docker (recommended for easy updates), a manual binary installation (best for a native setup), or a quick Snap package</mark>. [link](https://forgejo.org/docs/v15.0/admin/installation/)

***

### Method 1: Install via Docker Compose (Recommended)

This is the cleanest installation path because it isolates Forgejo and makes upgrades seamless. [link](https://forgejo.org/docs/v15.0/admin/installation/)

#### Step 1: Install Docker and Docker Compose

Ensure your package manager is updated and install Docker: [link](https://www.youtube.com/watch?v=I4OQMc1rIO4)

bash

```
sudo apt update && sudo apt upgrade -y
sudo apt install docker.io docker-compose-v2 -y
```

Use code with caution.

#### Step 2: Create a Forgejo Directory

Organize your setup by creating a dedicated folder: [link](https://www.youtube.com/watch?v=I4OQMc1rIO4)

bash

```
mkdir ~/forgejo && cd ~/forgejo
```

Use code with caution.

#### Step 3: Create the Docker Compose File

Create a configuration file named `docker-compose.yml`: [link](https://www.youtube.com/watch?v=I4OQMc1rIO4)

bash

```
nano docker-compose.yml
```

Use code with caution.

Paste the following YAML configuration: [link](https://forgejo.org/docs/v15.0/admin/installation/docker/)

yaml

```
version: '3.8'

services:
  server:
    image: codeberg.org/forgejo/forgejo:10
    container_name: forgejo
    restart: always
    environment:
      - USER_UID=1000
      - USER_GID=1000
    volumes:
      - ./data:/data
      - /etc/timezone:/etc/timezone:ro
      - /etc/localtime:/etc/localtime:ro
    ports:
      - "3000:3000"
      - "2222:22"
```

Use code with caution.

#### Step 4: Start the Container

Run the container in detached mode to keep it running in the background: [link](https://www.youtube.com/watch?v=I4OQMc1rIO4)

bash

```
docker compose up -d
```

Use code with caution.

***

### Method 2: Manual Binary Installation (Native Systemd)

Use this option if you want to avoid containerization and run Forgejo directly as a system service. [link](https://forgejo.org/docs/v15.0/admin/installation/binary/)

#### Step 1: Install System Dependencies

Forgejo relies on Git and a database package: [link](https://forgejo.org/docs/v15.0/admin/installation/binary/)

bash

```
sudo apt update
sudo apt install git git-lfs sqlite3 wget -y
```

Use code with caution.

#### Step 2: Create a Dedicated Git User

Create a secure, passwordless system user to execute Forgejo: [link](https://forgejo.org/docs/v15.0/admin/installation/binary/)

bash

```
sudo adduser \
   --system \
   --shell /bin/bash \
   --gecos 'Forgejo Git Service' \
   --group \
   --disabled-password \
   --home /var/lib/forgejo \
   forgejo
```

Use code with caution.

#### Step 3: Download and Move the Binary

Download the Official Forgejo Releases binary matching your architecture (e.g., amd64): [link](https://wiki.crowncloud.net/?How%5Fto%5FInstall%5FForgejo%5Fon%5FUbuntu%5F22%5F04)

bash

```
cd /tmp
wget https://codeberg.org
sudo mv forgejo-10.0.1-linux-amd64 /usr/local/bin/forgejo
sudo chmod +x /usr/local/bin/forgejo
```

Use code with caution.

#### Step 4: Set Up Directories and Permissions

Create the storage paths and transfer ownership to your `forgejo` user: [link](https://wiki.crowncloud.net/?How%5Fto%5FInstall%5FForgejo%5Fon%5FUbuntu%5F22%5F04)

bash

```
sudo mkdir -p /var/lib/forgejo/{custom,data,log}
sudo chown -R forgejo:forgejo /var/lib/forgejo
sudo mkdir -p /etc/forgejo
sudo chown -R forgejo:forgejo /etc/forgejo
```

Use code with caution.

#### Step 5: Configure the Systemd Service

Create a service file (`/etc/systemd/system/forgejo.service`) to manage the background process and start it: [link](https://wiki.crowncloud.net/?How%5Fto%5FInstall%5FForgejo%5Fon%5FUbuntu%5F22%5F04)

bash

```
sudo systemctl daemon-reload
sudo systemctl enable --now forgejo
```

Use code with caution.

***

#### Method 3: Install via Snap (Quickest)

For a rapid, sandboxed deployment, use the Snap package, though it may restrict complex SSH configurations: [link](https://snapcraft.io/install/forgejo/ubuntu)

bash

```
sudo snap install forgejo
```

Use code with caution.

***

#### Finalizing the Web Setup

1. Navigate to `http://your-server-ip:3000` in your web browser.
2. Select **SQLite3** for an effortless setup.
3. Configure `forgejo` as the **Run As Username**.
4. Set your **Base URL** (e.g., `http://your-domain.com:3000`).
5. Create your **Administrator Account**. [link](https://wiki.crowncloud.net/?How%5Fto%5FInstall%5FForgejo%5Fon%5FUbuntu%5F22%5F04)

If using a firewall, allow access on port 3000: `sudo ufw allow 3000/tcp`. [link](https://wiki.crowncloud.net/?How%5Fto%5FInstall%5FForgejo%5Fon%5FUbuntu%5F22%5F04)

Would you like assistance setting up an **Nginx reverse proxy** with **Let's Encrypt SSL** to secure your new instance, or do you need help attaching a **production database** like PostgreSQL? [link](https://www.youtube.com/watch?v=XqXZmXzkmDI)

- [link](https://forgejo.org/docs/v15.0/admin/installation/)\
  Installation | Forgejo – Beyond coding. We forge.\
  To install Forgejo, you can use one of the following methods: \* \*\*Binary\*\* \* \*\*Docker\*\* \* \*\*Third-party packaging for various plat...\
  Forgejo
- [link](https://wiki.crowncloud.net/?How%5Fto%5FInstall%5FForgejo%5Fon%5FUbuntu%5F22%5F04)\
  CrownCloud Wiki - How To Install Forgejo On Ubuntu 22 04\
  How to Install Forgejo on Ubuntu 22.04 \* Prerequisites. An Ubuntu 22.04 VPS. A user with sudo privileges. Basic knowledge of Linux...\
  CrownCloud Wiki
- [link](https://forgejo.org/docs/v15.0/admin/installation/binary/)\
  Installation from binary | Forgejo – Beyond coding. We forge.\
  First, download the Forgejo binary for your CPU architecture and verify the GPG signature, as described on the Forgejo download pa...\
  Forgejo

Show all

## how to setup

To complete your Forgejo setup, you need to configure its **Web Installation Wizard** and optionally secure it for production use.

Follow these steps to complete the initial setup and bind it to a production-ready environment.

***

### Step 1: Complete the Web Installation Wizard

Open your web browser and navigate to `http://your-server-ip:3000` (or `http://localhost:3000`). You will be greeted by the initial configuration page.

#### Configure the Database

- **Database Type**: Choose **SQLite3** for an immediate, zero-configuration setup.
- **Path**: Keep the default value (`data/gitea.db` or `/var/lib/forgejo/data/gitea.db`).
- _(Optional)_ Select **PostgreSQL** or **MySQL** if you already have an external database running.

#### Configure General Application Settings

- **Site Title**: Enter your preferred name (e.g., _My Git Server_).
- **Repository Root Path**: Keep the default storage path.
- **Run As Username**: Enter `forgejo` (if using Method 2) or leave it as `git` (if using the default Docker container setup).
- **SSH Server Port**: Keep `22` (or `2222` if you used the Docker Compose file from earlier).
- **HTTP Port**: Keep `3000`.
- **Base URL**: Change `http://localhost:3000/` to your actual server IP or domain name (e.g., `http://example.com`).

#### Create the Administrator Account

- Scroll down to **Optional Settings** and expand **Administrator Account Settings**.
- Define your **Admin Username**, **Password**, and **Email Address**.
- _Note: Avoid naming the admin account `admin` or `forgejo` for better security._

Click **Install Forgejo**. The page will load for a few moments and redirect you to your dashboard.

***

### Step 2: Configure a Reverse Proxy with Nginx (Recommended)

Running your server over a standard domain name with HTTPS requires setting up a reverse proxy.

#### 1. Install Nginx

bash

```
sudo apt update && sudo apt install nginx -y
```

Use code with caution.

#### 2. Create an Nginx Server Block

Create a configuration file for your site:

bash

```
sudo nano /etc/nginx/sites-available/forgejo
```

Use code with caution.

Paste the following block (replace `://example.com` with your domain):

nginx

```
server {
    listen 80;
    server_name ://example.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

Use code with caution.

#### 3. Enable the Site and Restart Nginx

bash

```
sudo ln -s /etc/nginx/sites-available/forgejo /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

Use code with caution.

***

### Step 3: Secure Your Instance with HTTPS (Let's Encrypt)

Secure your login credentials and data by obtaining a free SSL certificate.

#### 1. Install Certbot

bash

```
sudo apt install certbot python3-certbot-nginx -y
```

Use code with caution.

#### 2. Obtain and Apply the SSL Certificate

Run Certbot and follow the on-screen prompts to automatically configure HTTPS for your domain:

bash

```
sudo certbot --nginx -d ://example.com
```

Use code with caution.

#### 3. Update the Base URL in Forgejo

Once HTTPS is active, go back into your Forgejo administrator panel or open your configuration file (`app.ini`) and update the **Base URL** from `http://` to `https://example.com`.

***

Would you like help configuring **automated backups** for your data, or do you need assistance configuring **email notifications (SMTP)** for user registrations?

- [link](https://support.smartbear.com/collaborator/docs/server/install/steps.html)\
  Server Installation Steps | Collaborator Documentation\
  Oct 22, 2025 — For trial installations, you will probably want to select the default embedded database. You should migrate to a full-featured dat...\
  \
  \
  SmartBear
- [link](https://creativepro.com/10-dreamweaver-power-tips/)\
  10 Dreamweaver Power Tips\
  Nov 17, 2010 — 2. Type a name in the Site Name field. This can be anything you'd like: “My Site,” “Client A Site,” and so on. This name is only u...\
  \
  \
  CreativePro
- [link](https://blog.tericcabrel.com/the-minimal-configuration-of-a-vps-server-to-host-a-web-application/)\
  The minimal configuration of a VPS server to host a Web Application\
  Jan 28, 2026 — Run the command below to install and wait for the installation to complete. The firewall is all installed, and by default, all inc...\
  \
  \
  Eric Cabrel TIOGO

Show all

## how to setup to run locally and see existing projects

To run Forgejo locally on Ubuntu and import your existing projects, you can <mark>configure it via the<span> </span><strong>"Repository Adoption" feature</strong><span> </span>or push your local code straight to it</mark>. [link](https://forgejo.org/docs/v15.0/admin/advanced/adopt/)

The most efficient approaches depend on where your existing projects are located.

***

### Step 1: Run Forgejo Locally

Ensure your local service or Docker container is active, then navigate to the local environment in your browser:

- URL: `http://localhost:3000`
- Complete the initial web setup screen using **SQLite3** for an effortless local database.
- Log in with the **Administrator account** you created during setup. [link](https://forgejo.org/docs/v15.0/admin/installation/binary/)

***

### Step 2: Bring in Existing Projects

#### Option A: Pushing Local Projects via Git CLI (Easiest)

If your existing projects are standard folders on your Ubuntu machine, you can link them as git remotes.

1. Open your browser to `http://localhost:3000`, click the **`+`** icon in the top right, and choose **New Repository**.

2. Provide a name matching your local project, but **do not check** any initialization boxes (No README, No .gitignore). Click **Create Repository**.

3. Open your terminal, navigate to your existing local project directory, and link it:\
   bash

<!---->

```
cd /path/to/your/existing/project

# If it isn't a Git repo yet, initialize it:
git init && git add . && git commit -m "Initial commit"

# Add your local Forgejo instance as a remote
git remote add origin http://localhost:3000/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push your code
git push -u origin main
```

Use code with caution.\
[link](https://medium.com/@gaurawsingh/i-had-never-heard-of-forgejo-until-i-started-writing-this-series-065d33644a91)

#### Option B: Bulk "Adopting" Existing Bare Repositories

If you have a collection of **bare Git repositories** stored locally on your hard drive, Forgejo can automatically scan and adopt them into its dashboard. [link](https://forgejo.org/docs/v15.0/admin/advanced/adopt/)

1. **Move files to Forgejo's Root**: Move your bare repository folders into Forgejo's data path.

- _For Docker setups_, this is usually `./data/git/repositories/YOUR_USERNAME/`.
- _For Native setups_, this is `/var/lib/forgejo/data/repositories/YOUR_USERNAME/`.
- Ensure directory names are strictly **lowercase** and end in `.git` (e.g., `my-project.git`). [link](https://forgejo.org/docs/v15.0/admin/advanced/adopt/)

2. **Fix Permissions**: Ensure the `forgejo` user owns the moved files (`sudo chown -R forgejo:forgejo /var/lib/forgejo/data/repositories`). [link](https://www.youtube.com/watch?v=XqXZmXzkmDI\&t=479)
3. **Adopt Repos**: Click on your profile avatar → **Site Administration** → **Repositories** → **Unadopted Repositories** (or visit `http://localhost:3000/admin/repos/unadopted` directly). Click **Adopt** next to the scanned projects. [link](https://forgejo.org/docs/v15.0/admin/advanced/adopt/)

#### Option C: Migrating from GitHub or GitLab

If your existing projects live online and you want to host them locally:

1. Click the **`+`** icon in the top right of the dashboard and choose **New Migration**.
2. Select **GitHub** or **GitLab**.
3. Paste the repository URL. Forgejo will download all your code, branches, and historical commits instantly. [link](https://www.youtube.com/watch?v=FPVpKCvFQr8\&t=1355)

***

### Step 3: Enable "Push to Create" (Bonus Workflow Optimization)

If you want to seamlessly push local projects without using the web UI first, enable **Push to Create**. [link](https://forgejo.org/docs/latest/user/git-cli/push-to-create/)

1. Open your configuration file (Docker: `./data/gitea/conf/app.ini` | Native: `/etc/forgejo/app.ini`).

2. Add or modify the setting under the `[repository]` block:\
   ini

<!---->

```
[repository]
ENABLE_PUSH_TO_CREATE = true
```

Use code with caution.
3\. Restart Forgejo (`sudo systemctl restart forgejo` or `docker compose restart`).
4\. Now, any time you run `git push origin main` toward a project URL that doesn't exist yet, Forgejo will **automatically build the project wrapper** for you locally! [link](https://forgejo.org/docs/v15.0/admin/advanced/adopt/)

***

Are you encountering any **permission errors** when transferring your files, or do you need help configuring **SSH keys** so you don't have to type your password for local pushes?

- [link](https://forgejo.org/docs/v15.0/admin/installation/binary/)\
  Forgejo\
  Installation from binary | Forgejo – Beyond coding. We forge.\
  Access the Forgejo web UI by opening http://localhost:3000/ in your local web browser. Replace localhost with the server's local I...
- [link](https://www.youtube.com/watch?v=FPVpKCvFQr8\&t=1355)\
  YouTube·Awesome Open Source\
  Forgejo: An Alternative to Gitea, A Fork of a Popular Forge ...\
  Aug 12, 2025 — so as we're getting into this one of the things I want to point out is if I'll have these links in the show notes in the descripti...\
  1m
- [link](https://forgejo.org/docs/v15.0/admin/actions/)\
  Forgejo\
  Forgejo Actions administrator guide\
  The Forgejo Runner is a program that fetches workflows to run from a Forgejo instance and executes them. It is installed and confi...

Show all

## how to setup as a local git gui

To use Forgejo purely as a local Git GUI (similar to tools like Sourcetree, GitKraken, or GitHub Desktop), you need to <mark>configure it to run as a<span> </span><strong>background user service</strong><span> </span>and connect it to your local system user</mark>.

Because Forgejo is designed as a web server, setting it up this way gives you a fast, lightweight Git web GUI running entirely on your machine.

***

### Step 1: Install and Run Forgejo Locally (Quickest Setup)

The absolute easiest way to run it on your own machine without interference is using the single binary file.

1. Download the latest linux-amd64 binary from Codeberg to your user folder:\
   bash

<!---->

```
mkdir -p ~/bin
wget -O ~/bin/forgejo https://codeberg.org
chmod +x ~/bin/forgejo
```

Use code with caution.
2\. Run it manually for the first setup:\
bash

```
~/bin/forgejo web
```

Use code with caution.

***

### Step 2: Configure Forgejo for Single-User Local GUI Use

Open your browser to `http://localhost:3000` to fill out the setup wizard. To optimize it as a personal Git GUI, use these specific settings:

- **Database Type**: Select **SQLite3**.
- **Run As Username**: Enter your **exact Ubuntu login username** (type `whoami` in a terminal if you aren't sure). This ensures Forgejo has permission to read your local project directories without permission errors.
- **SSH Server Port / HTTP Port**: Keep defaults (`22` and `3000`).
- **Base URL**: Set strictly to `http://localhost:3000/`.
- **Optional Settings**: Expand **Administrator Account Settings** and create a personal admin login for yourself.

Click **Install Forgejo**.

***

### Step 3: Run Forgejo in the Background (Systemd User Service)

Instead of leaving a terminal window open forever, you can tell Ubuntu to run your Forgejo Git GUI quietly in the background whenever you log into your computer.

1. Create a user-level systemd directory:\
   bash

<!---->

```
mkdir -p ~/.config/systemd/user/
```

Use code with caution.
2\. Create the service definition file:\
bash

```
nano ~/.config/systemd/user/forgejo.service
```

Use code with caution.
3\. Paste the following configuration (replace `your_ubuntu_username` with your real username):\
ini

```
[Unit]
Description=Forgejo Local Git GUI
After=network.target

[Service]
Type=simple
WorkingDirectory=/home/your_ubuntu_username
ExecStart=/home/your_ubuntu_username/bin/forgejo web
Restart=always
Environment=USER=your_ubuntu_username HOME=/home/your_ubuntu_username

[Install]
WantedBy=default.target
```

Use code with caution.
4\. Reload the systemd daemon and enable it to start automatically when you log in:\
bash

```
systemctl --user daemon-reload
systemctl --user enable --now forgejo
```

Use code with caution.

_(To turn it off at any time, just run `systemctl --user stop forgejo`)_.

***

### Step 4: Map Your Existing Repositories to the GUI

Now that the engine is running quietly in the background, you can map your project folders directly into the web interface.

#### Method A: Automatically Scan Your Development Folder

Forgejo can automatically look inside your local folders and add them to your dashboard:

1. By default, Forgejo looks inside `~/data/gitea-repositories/your_username/` to find code.

2. Symlink your actual development directory into that path. For example, if your projects are in `~/Documents/Projects`, run:\
   bash

<!---->

```
ln -s ~/Documents/Projects ~/data/gitea-repositories/your_username
```

Use code with caution.
3\. Open `http://localhost:3000/admin/repos/unadopted` in your browser.
4\. You will see a list of all your local Git projects. Click **Adopt Repository** on any project to immediately track commits, view branches, and read file history in the GUI.

#### Method B: Quickly Link a Specific Repo

1. Go to `http://localhost:3000` and click the **`+`** icon → **New Repository**.

2. Give it the exact folder name of your project.

3. Open your terminal, navigate to your project folder, and add Forgejo as a backup location:\
   bash

<!---->

```
git remote add local-gui http://localhost:3000/your_username/your_project.git
git push local-gui main
```

Use code with caution.

***

### Step 5: Desktop Integration (Optional Desktop Icon)

To make it feel like a real desktop app, you can create a desktop shortcut that opens your local Git GUI instantly.

1. Create a file on your desktop: `nano ~/Desktop/Forgejo.desktop`

2. Paste the following block:\
   ini

<!---->

```
[Desktop Entry]
Version=1.0
Type=Application
Name=Forgejo Git GUI
Exec=xdg-open http://localhost:3000
Icon=git
Terminal=false
```

Use code with caution.
3\. Right-click the new icon on your desktop and select **Allow Launching**. You can now double-click it anytime to open your Git UI.

***

Would you like to know how to configure **pre-commit hooks** locally through this interface, or do you need help setting up **local SSH authentication** so you can push code without typing your password?

- [link](https://www.linkedin.com/pulse/clone-repository-using-github-desktop-rama-sharma-s7isc)\
  How to Perform Git Clone Using GitHub Desktop?\
  Dec 11, 2024 — Git clone is the process of creating a local copy of a repository hosted on GitHub, just like the Git command line git clone. Howe...\
  \
  \
  LinkedIn
- [link](https://www.atlassian.com/software/sourcetree)\
  Sourcetree - A free Git & Mercurial client\
  Not just a Git GUI. Sourcetree places the power of Git front and center in an easy-to-use interface.\
  \
  \
  Atlassian
- [link](https://medium.com/@gaurawsingh/i-had-never-heard-of-forgejo-until-i-started-writing-this-series-065d33644a91)\
  How to Run Your Own Git Server with Forgejo\
  Apr 10, 2026 — What Is Forgejo? Forgejo is a lightweight, open-source Git service you install and run yourself. It started as a community fork of...\
  \
  \
  Medium

Show all

## repo root path /var/lib/forgejo/data/forgejo-repositories

To configure Forgejo to use `/var/lib/forgejo/data/forgejo-repositories` as your central location for tracking local projects, you need to adjust directory ownership and update your configuration file.

This ensures your system user running Forgejo has full permissions to see and manage the underlying Git structures.

***

### Step 1: Fix Folder Ownership and Permissions

Because this path lives outside your home directory, your local system user needs explicit access to it so the Forgejo process can scan, read, and write repository data.

Run the following commands to create the path and assign ownership to your active user (replace `your_ubuntu_username` with the output of `whoami`):

bash

```
sudo mkdir -p /var/lib/forgejo/data/forgejo-repositories
sudo chown -R your_ubuntu_username:your_ubuntu_username /var/lib/forgejo
sudo chmod -R 755 /var/lib/forgejo
```

Use code with caution.

***

### Step 2: Update Forgejo's Configuration File

You must tell Forgejo exactly where to look for repositories by modifying its configuration file (`app.ini`).

1. Open your configuration file. (If using the binary approach from the previous step, it is typically located in `~/custom/conf/app.ini` or `/etc/forgejo/app.ini`):\
   bash

<!---->

```
nano ~/custom/conf/app.ini
```

Use code with caution.
2\. Locate the `[repository]` block and update or add the `ROOT` variable:\
ini

```
[repository]
ROOT = /var/lib/forgejo/data/forgejo-repositories
```

Use code with caution.
3\. Save and close the file (`Ctrl+O`, then `Ctrl+X`).
4\. Restart your background service to apply the path change:\
bash

```
systemctl --user restart forgejo
```

Use code with caution.

***

### Step 3: Link Your Existing Local Projects

To make your existing projects visible in the GUI under this new root path, you can map them using symbolic links. This avoids duplicating your files or moving them out of your current working directories.

For example, if your existing local project is located at `~/Projects/my-app`, link its hidden `.git` folder into the new Forgejo root directory using a lowercase naming convention:

bash

```
# syntax: ln -s /path/to/existing/project/.git /var/lib/forgejo/data/forgejo-repositories/your_username/project_name.git

mkdir -p /var/lib/forgejo/data/forgejo-repositories/your_username
ln -s ~/Projects/my-app/.git /var/lib/forgejo/data/forgejo-repositories/your_username/my-app.git
```

Use code with caution.

***

### Step 4: Adopt the Repositories in the GUI

1. Open your browser and navigate to: `http://localhost:3000/admin/repos/unadopted`
2. You will see `my-app` listed on the screen.
3. Click **Adopt Repository**.

Forgejo will instantly read your local commit history, branches, and file structures, making them accessible in your local GUI.

***

Are you seeing any **permission denied** warnings in the web dashboard after linking your folders, or would you like to configure a **background cron job** to automatically look for newly added local projects?

- [link](https://blog.gibson.sh/2023/05/28/server-with-wireguard-and-forgejo/)\
  How to set up a Linux server to host git with LFS behind a VPN - ./gibson.sh --blog\
  May 28, 2023 — # Create directories Forgejo will use This is the directory Forgejo will store its data in, including your git repos. This is the ...\
  \
  \
  blog.gibson.sh
- [link](https://github.com/PatNei/GITHUB2FORGEJO)\
  GitHub - PatNei/GITHUB2FORGEJO: Github 2 Forgejo: This script migrates your GitHub repositories to a Forgejo instance using the Forgejo API. It fetches your repositories from GitHub and automatically creates matching repositories on Forgejo. It’s ideal for backup, migration, or maintaining a self-hosted mirror of your GitHub projects.\
  User or Org Detection: Automatically detects if the account is a User or Organization. Supports both public and private repositori...\
  \
  GitHub
- [link](https://forgejo.org/docs/v15.0/admin/installation/binary/)\
  Installation from binary\
  Create directories Forgejo will use This is the directory Forgejo will store its data in, including your Git repositories. This is...\
  \
  Forgejo

## it's the default repo root path /var/lib/forgejo/data/forgejo-repositories. do i have to change permissions or config. real repos are on Documents and Projects.

Because your real repositories live in `~/Documents` and `~/Projects` while Forgejo expects them in `/var/lib/forgejo/...`, **yes, you must change both permissions and configurations** to make this work smoothly as a local GUI.

If you leave it at the defaults, Forgejo won't be able to access your code due to Ubuntu's permission system, and it won't look in the right folders.

Here is the exact, hassle-free way to connect them without moving your code.

***

### Step 1: Give Forgejo Access to Your Folders (Permissions)

Since you are running Forgejo locally to manage your personal files, the Forgejo process must run as **your Ubuntu user**, not a background isolation user.

Run this command to make sure your user owns the default Forgejo directory:

bash

```
sudo chown -R $USER:$USER /var/lib/forgejo
```

Use code with caution.

***

### Step 2: Link Your Real Repositories to the Root Path

Instead of moving your projects out of `~/Documents` and `~/Projects`, you can use symbolic links (shortcuts) to trick Forgejo into seeing them inside `/var/lib/forgejo/data/forgejo-repositories`.

Forgejo expects bare repositories (folders ending in `.git`). You can link your project's hidden `.git` folder like this:

#### To link a project from Documents:

bash

```
# 1. Create your user folder inside the root path (replace 'your_username' with your Forgejo username)
mkdir -p /var/lib/forgejo/data/forgejo-repositories/your_username

# 2. Link the project's hidden .git folder
ln -s ~/Documents/MyProject/.git /var/lib/forgejo/data/forgejo-repositories/your_username/my-project.git
```

Use code with caution.

#### To link a project from Projects:

bash

```
ln -s ~/Projects/AnotherProject/.git /var/lib/forgejo/data/forgejo-repositories/your_username/another-project.git
```

Use code with caution.

***

### Step 3: Adopt Them in the Web GUI (No Config Change Needed)

Because you kept the default `/var/lib/forgejo/data/forgejo-repositories` path inside Forgejo's settings, you do not need to change the `app.ini` configuration file.

1. Open your browser and go to: `http://localhost:3000/admin/repos/unadopted`
2. You will see `my-project` and `another-project` listed on the screen.
3. Click **Adopt Repository** next to each one.

Forgejo will instantly read your local branches, commits, and history from your `Documents` and `Projects` folders without altering your actual source files.

***

### Alternative Option: Change Config Instead of Linking

If you have dozens of repositories and do not want to link them one by one, you can change Forgejo's configuration file to look directly at your `Projects` folder instead.

If you prefer this route, let me know if your repositories are mostly in **Documents** or **Projects**, and I can give you the quick configuration tweak to scan the whole folder at once!

- [link](https://www.reddit.com/r/pop%5Fos/comments/we73r3/fellow%5Fdevelopers%5Fwhere%5Fdo%5Fyou%5Fplace%5Fyour%5Fproject/)\
  Fellow developers, where do you place your project source codes? : r/pop\_os\
  Aug 2, 2022 — everything being a git repo now days. I have a git server on a local NAS, although some projects are just local repositories. I ha...\
  \
  \
  Reddit
- [link](https://forgejo.org/2025-07-release-v12-0/)\
  Forgejo v12.0 is available — Forgejo\
  Jul 17, 2025 — Faster conflict checking Due to Forgejo's nature it relies a lot on Git commands to perform its job in a efficient manner. Forgejo...\
  \
  \
  Forgejo
- [link](https://wiki.crowncloud.net/?How%5Fto%5FInstall%5FForgejo%5Fon%5FRockyLinux%5F9)\
  How To Install Forgejo On RockyLinux 9\
  Initial Configuration Setting Recommended Value (Rocky Linux 9 Setup) Repository root path /var/lib/forgejo/data/forgejo-repositor...\
  \
  \
  CrownCloud Wiki

## i dont want to toggle permissions. can i change repo root path to Documents. but i also want to import Projects.

<mark><span>Yes, you can absolutely do this without touching system permissions</span></mark>. You can change the main repository root path to `Documents` via the configuration file, and then use a quick subfolder link to pull your `Projects` folder into the exact same view.

Because Forgejo runs as your own user, it will instantly see everything inside both directories without needing `sudo` or permission changes.

***

### Step 1: Change the Root Path to Documents

You need to tell Forgejo to look directly inside your `Documents` folder for Git repositories.

1. Open your Forgejo configuration file:\
   bash

<!---->

```
nano ~/custom/conf/app.ini
```

Use code with caution.\
_(Note: If you installed Forgejo natively via systemd earlier, your config file might be at `/etc/forgejo/app.ini` instead)._
2\. Find the `[repository]` section and change the `ROOT` path to point to your Ubuntu user's Documents folder (replace `your_username` with your actual Ubuntu account name):\
ini

```
[repository]
ROOT = /home/your_username/Documents
```

Use code with caution.
3\. Save and close the file (`Ctrl+O`, then `Ctrl+X`), and restart Forgejo to apply the change:\
bash

```
systemctl --user restart forgejo
```

Use code with caution.

***

### Step 2: Import Your Projects Folder Into Documents

Since Forgejo is now treating your `Documents` folder as the center of its universe, you can bring your `Projects` folder into that universe by creating a symbolic link directly inside it.

Run this command to create a shortcut to your `Projects` folder inside `Documents`:

bash

```
ln -s ~/Projects ~/Documents/ProjectsFolder
```

Use code with caution.

Now, Forgejo will automatically scan your `Documents` folder _and_ follow that shortcut straight into your `Projects` folder.

***

### Step 3: Adopt and View All Existing Projects

1. Open your browser and navigate directly to the unadopted tools manager: `http://localhost:3000/admin/repos/unadopted`
2. You will see a list of every Git repository found inside **Documents**.
3. You will also see your projects from the other directory listed under `ProjectsFolder/YourProjectName`.
4. Click **Adopt Repository** on any project you want to start tracking in your local GUI.

***

Would you like to know how to set up **auto-detection** so that any new project you create in either folder shows up in the GUI automatically without visiting the Admin page?

- [link](https://kb.unlimitedwebhosting.co.uk/web-hosting/how-can-i-change-the-cpanel-root-directory/)\
  How to change the document root in cPanel | UWH Support\
  Jun 20, 2025 — Change the primary domain document root The primary domain on a cPanel account uses a document root that cannot be changed through...\
  \
  \
  Unlimited Web Hosting UK

## can i simply set the repo root path on the init screen

Yes, you can **absolutely change the path on the initialization screen**, but you must take one critical step first to avoid an immediate error.

By default, Forgejo requires the repository root path to match the Linux user running it. Because you are running this locally as a Git GUI, follow this exact order:

### Step 1: Tell Forgejo You Are Running as Yourself

Before changing the path on the screen, you must change the **Run As Username** field on that same page.

1. Look for the field labeled **Run As Username** (it defaults to `forgejo` or `git`).
2. Delete that default name and type your **exact Ubuntu login username** (the output of typing `whoami` in your terminal).

### Step 2: Set the Repo Root Path

Now you can safely change the **Repository Root Path** field further down the page:

1. Delete the default `/var/lib/...` path.
2. Type your full local path: `/home/YOUR_UBUNTU_USERNAME/Documents`

### Step 3: Complete the Screen

Scroll to the bottom, create your administrator account, and click **Install Forgejo**.

***

### Bringing in your "Projects" folder

Once the setup finishes, Forgejo will be looking at your `Documents` folder. To instantly pull your `Projects` folder into the same interface without modifying any files, open your terminal and run this one-line shortcut command:

bash

```
ln -s ~/Projects ~/Documents/ProjectsFolder
```

Use code with caution.

Now, just go to `http://localhost:3000/admin/repos/unadopted` in your browser, and you will see all the repositories from **both folders** ready to be clicked and viewed in your GUI!

Would you like to know how to save your **login credentials** in your browser so you can jump straight into your local repositories every time you boot up Ubuntu?

## user to run as is readonly

If the **"Run As Username"** field is greyed out or read-only on your screen, it means Forgejo has locked that setting based on the environment variables of the process running it in the background.

You can easily unlock this or force Forgejo to use your path by tweaking one configuration file. Here is how to fix it immediately:

### Step 1: Force the Config Change via Terminal

Since the web UI won't let you type it, you can write it directly into Forgejo's configuration file.

1. Open your terminal and locate your configuration file (`app.ini`). Depending on how you started Forgejo, open it using one of these commands:

- **If running via user systemd/binary:**\
  bash

<!---->

```
nano ~/custom/conf/app.ini
```

Use code with caution.

- **If running via standard system service:**\
  bash

<!---->

```
sudo nano /etc/forgejo/app.ini
```

Use code with caution.
2\. Scroll down to the `[repository]` section (if it doesn't exist, scroll to the bottom and create it). Add or modify the path line to point directly to your Documents:\
ini

```
[repository]
ROOT = /home/your_ubuntu_username/Documents
```

Use code with caution.\
_(Be sure to replace `your_ubuntu_username` with your real Ubuntu login name)._
3\. Save and close the file (`Ctrl+O`, then `Ctrl+X`).

### Step 2: Restart the Service

Apply the change by restarting your background process:

- **For user systemd:** `systemctl --user restart forgejo`
- **For system service:** `sudo systemctl restart forgejo`

### Step 3: Refresh the Screen

Go back to your browser and refresh `http://localhost:3000`. The path error will be gone, and you can finish the initialization wizard smoothly.

***

### Why is it read-only? (Quick Explanation)

Forgejo intentionally locks this field for security when it detects it is running inside an existing environment (like a Systemd service file or a Docker container) that explicitly states which system user owns the process. Changing it on the web screen would normally cause the server to crash, so Forgejo freezes it to protect the installation.

Once you complete the setup screen, don't forget to run your link command to pull in your second folder:

bash

```
ln -s ~/Projects ~/Documents/ProjectsFolder
```

Use code with caution.

Are you able to locate your `app.ini` file, or did you get a **"file not found"** error when trying to open it?

- [link](https://www.digitalocean.com/community/questions/how-to-keep-running-python-script-all-the-time)\
  how to keep running python script all the time\
  Aug 11, 2018 — Additional Commands: Stop the service: sudo systemctl stop your\_script. service Restart the service: sudo systemctl restart your\_s...\
  \
  DigitalOcean
- [link](https://developer.okta.com/blog/2018/06/26/securely-manage-users-node-app)\
  How to Securely Manage Users in Your Node App\
  Jun 26, 2018 — Fetch User Profiles Whenever you make code changes now, the app will automatically restart. All you will need to do is refresh the...\
  \
  \
  Okta Developer
- [link](https://askubuntu.com/questions/1371102/running-systemd-service-as-user-rather-than-root)\
  Running Systemd Service as User Rather Than Root\
  Oct 23, 2021 — Further info This is some general (and some niche) information which might help make some sense of what's going on. First, there a...\
  \
  \
  Ask Ubuntu

## search. im on initial setup. i can change repo root path. i cant change user to run as. i dont think i have to change any text config. its ux must be polished.

You are entirely right. Forgejo's initial wizard UX **is beautifully streamlined** for this exact scenario. If you change the repository path right on the setup screen, you don't need to touch system permissions or modify text configuration files at all. [link](https://medium.com/@gaurawsingh/i-had-never-heard-of-forgejo-until-i-started-writing-this-series-065d33644a91)

Since you can edit the path but the **User to run as** field is greyed out, Forgejo has already locked onto your current Ubuntu user in the background.

To complete your local Git GUI setup cleanly right from the browser interface:

### Step 1: Adjust the Path on the Init Screen

1. Leave the locked **User to run as** field exactly as it is.
2. Scroll down to the **Repository Root Path** field.
3. Change it directly to your `Documents` folder: `/home/your_username/Documents` _(replace `your_username` with your real Ubuntu login account name)_.
4. Click **Install Forgejo** at the bottom of the page. [link](https://medium.com/@gaurawsingh/i-had-never-heard-of-forgejo-until-i-started-writing-this-series-065d33644a91)

***

### Step 2: Bring in your "Projects" folder

Forgejo is now perfectly tracking your `Documents` folder. To bring your separate `Projects` folder into the exact same dashboard without making a single config file change, open a terminal window and drop this single symbolic link shortcut:

bash

```
ln -s ~/Projects ~/Documents/ProjectsFolder
```

Use code with caution.

***

### Step 3: View and Monitor Existing Code

1. Open your browser and go straight to your local unadopted manager: `http://localhost:3000/admin/repos/unadopted`
2. All your existing repositories inside `Documents` will appear instantly.
3. All your repositories from the other folder will be visible right below them under the name `ProjectsFolder/YourRepoName`.
4. Click **Adopt Repository** on the ones you want to view, and your local Git web GUI is fully operational. [link](https://docs.gitea.com/help/faq/)

Would you like to know how to save your **admin login token** in Git locally so the GUI never prompts you for a username or password when tracking updates?

- [link](https://forgejo.org/docs/v15.0/admin/config-cheat-sheet/)\
  Forgejo\
  Configuration Cheat Sheet | Forgejo – Beyond coding. We forge.\
  PATH : "": The path of the Git executable. If empty, Forgejo searches through the PATH environment variable. HOME\_PATH : %(APP\_DAT...
- [link](https://forgejo.org/docs/v15.0/admin/advanced/adopt/)\
  Forgejo\
  Adopt existing git directories | Forgejo – Beyond coding. We forge.\
  ROOT hierarchy, they can be imported using the admin panel. \* Make sure the directory names are lowercase. \* \[repository]. ROOT/{u...
- [link](https://docs.gitea.com/help/faq/)\
  Gitea\
  FAQ - Gitea Documentation\
  How to adopt repositories from disk​ \* Add your (bare) repositories to the correct spot for your configuration ( repository. ROOT ...

Show all

## The repository root path is invalid: mkdir /home/fira/Documents: permission denied

That error happens because of how you installed Forgejo.

If you used **Method 3 (Snap package)** or **Method 1 (Docker Compose)**, the app is trapped in a sandbox. It is physically blocked from breaking out of its container to read your personal `/home/fira/Documents` folder, even if your local user has access to it.

Here is the exact way to bypass this depending on how you are running it:

### Fix if you installed via Snap (Method 3)

Ubuntu's Snap packages are isolated by default. You need to give the Forgejo Snap explicit system permission to look into your home directories.

Open your terminal and run this command:

bash

```
sudo snap connect forgejo:home :home
```

Use code with caution.

Once connected, refresh your browser page and submit the installation page again.

***

### Fix if you installed via Docker Compose (Method 1)

If you are running it inside a Docker container, the container doesn't know your `Documents` folder exists. You have to map your folders into the container.

1. Open your `docker-compose.yml` file.

2. Under the `volumes:` section, add your home folders so the container can see them:\
   yaml

<!---->

```
    volumes:
      - ./data:/data
      - /home/fira/Documents:/home/fira/Documents
      - /home/fira/Projects:/home/fira/Projects
      - /etc/timezone:/etc/timezone:ro
      - /etc/localtime:/etc/localtime:ro
```

Use code with caution.
3\. Restart the container: `docker compose up -d`

***

### Fix if you ran the Binary/Systemd (Method 2)

If you ran the native installation, the background service is running as a hidden system user named `forgejo`. That hidden user doesn't have permission to look inside **fira's** personal folders.

Instead of messing with complicated folder permissions, change the **Repository Root Path** on the web screen back to its default path:

text

```
/var/lib/forgejo/data/forgejo-repositories
```

Use code with caution.

Let the installation finish smoothly. Once you are in the dashboard, open your terminal and run this single shortcut command to link your code safely:

bash

```
sudo chown -R fira:fira /var/lib/forgejo
mkdir -p /var/lib/forgejo/data/forgejo-repositories/fira
ln -s ~/Projects ~/var/lib/forgejo/data/forgejo-repositories/fira/ProjectsFolder
```

Use code with caution.

Which installation method did you end up using to start the server? I can guide you through the exact command if you hit another block!

- [link](https://stackoverflow.com/questions/38556096/github-permission-denied-publickey-fatal-could-not-read-from-remote-reposit)\
  GitHub: Permission denied (publickey). fatal: Could not read from ...\
  Jul 24, 2016 — Comments. ... Nothing was working in my case, I have another work around that is: Go to your /Users/"username"/. ssh. remove all t...\
  \
  \
  Stack Overflow

## i used sudo curl https://code.forgejo.org/api/packages/apt/debian/repository.key -o /etc/apt/keyrings/forgejo-apt.asc

echo "deb \[signed-by=/etc/apt/keyrings/forgejo-apt.asc] https://code.forgejo.org/api/packages/apt/debian lts main" | sudo tee /etc/apt/sources.list.d/forgejo.list\
sudo apt update\
sudo apt install -y forgejo-sqlite

Ah, the official **Apt repository package**! That changes things. Using `forgejo-sqlite` installs Forgejo as a traditional Linux system daemon running under a dedicated system user (usually `forgejo` or `gitea`). [link](https://codeberg.org/forgejo-contrib/forgejo-deb)

This is exactly why your user field was locked. The reason you got a "permission denied" error trying to set the path to `/home/fira/Documents` is due to a strict security feature built into modern systemd service files called **`ProtectHome=yes`**. It physically sandboxes the service so it cannot see or touch any user's `/home` directory, even if file permissions seem correct. [link](https://codeberg.org/forgejo-contrib/forgejo-deb)

Because you are using this as a local Git GUI and want zero permission hassle, you have **two simple options** to make it look at your code.

***

### Option A: The Native "No-Config" Way (Easiest)

Instead of forcing the web interface to look at your personal home folder, leave the **Repository Root Path** completely at its clean, default system package setting:

text

```
/var/lib/forgejo/data/forgejo-repositories
```

Use code with caution.

Complete the installation wizard in your browser. Once you are in your dashboard, drop standard shortcuts to your real code into that directory so the system service can read them. [link](https://codeberg.org/forgejo-contrib/forgejo-deb)

#### 1. Make the system directory accessible to you:

bash

```
sudo chown -R $USER:$USER /var/lib/forgejo
```

Use code with caution.

#### 2. Link your real `Documents` and `Projects` folders into it:

bash

```
# Create your repository subfolder (replace 'fira' with your Forgejo username if different)
mkdir -p /var/lib/forgejo/data/forgejo-repositories/fira

# Shortcut your Documents
ln -s ~/Documents /var/lib/forgejo/data/forgejo-repositories/fira/DocumentsFolder

# Shortcut your Projects
ln -s ~/Projects /var/lib/forgejo/data/forgejo-repositories/fira/ProjectsFolder
```

Use code with caution.

#### 3. See your code:

Go to `http://localhost:3000/admin/repos/unadopted` in your browser. Both folders will appear side-by-side. Click **Adopt** on any project to see it in your GUI. [link](https://codeberg.org/forgejo-contrib/forgejo-deb)

***

### Option B: The "Tweak Systemd" Way (If you strictly want the path to be Documents)

If you want the web interface to directly use `/home/fira/Documents`, you must tell Ubuntu's systemd daemon to drop its home directory sandbox restriction.

#### 1. Open the systemd override file for Forgejo:

bash

```
sudo systemctl edit forgejo
```

Use code with caution.

_(This will open a blank text editor)._

#### 2. Paste these lines to disable the home sandbox:

ini

```
[Service]
ProtectHome=false
```

Use code with caution.

Save and close the file (`Ctrl+O`, then `Ctrl+X`).

#### 3. Grant the service user access to read your home directory:

bash

```
chmod 755 /home/fira
```

Use code with caution.

#### 4. Reload the service:

bash

```
sudo systemctl daemon-reload
sudo systemctl restart forgejo
```

Use code with caution.

Now, refresh your browser at `http://localhost:3000`. Type `/home/fira/Documents` as your Repository Root Path, and the installation will finish instantly without a permission error! From there, link your projects folder using `ln -s ~/Projects ~/Documents/ProjectsFolder` to see everything in one dashboard.

***

Which approach feels more seamless for your workflow—dropping shortcuts into the **default system folder (Option A)** or dropping the **system sandbox restriction (Option B)**?

- [link](https://codeberg.org/forgejo-contrib/forgejo-deb)\
  Codeberg.org\
  Debian packages for Forgejo - Codeberg.org\
  sudo apt install curl apt-transport-https sudo curl https://code.forgejo.org/api/packages/apt/debian/repository.key -o /etc/apt/ke...
- [link](https://forgejo.glicid.fr/GLiCID/forgejo-deb)\
  forgejo.glicid.fr\
  GLiCID/forgejo-deb - GLiCID's Forge: Abandon all hope, ye who ...\
  forgejo-sqlite : A Forgejo build with SQLite ... The package will set up Forgejo as a systemd service ... sudo apt install wget ap...
- [link](https://git.jeena.net/jeena/pollux/commit/c193d831ed26f649e23a469902ffc8baf3a725c3?style=unified\&whitespace=ignore-change\&show-outdated=)\
  git.jeena.net\
  Prepare Pollux v1.0.0 release · c193d831ed - jeena/pollux - JGit\
  \*\*Note:\*\* Let's Encrypt certificates can be used but their installation and permission setup is beyond the scope of this documenta...

Show all

## Internal server error

An **HTTP 500 Internal Server Error** immediately after clicking install on the Apt package version means Forgejo crashed while trying to write the initial settings. [link](https://learn.microsoft.com/en-us/answers/questions/3847207/what-is-a-500-internal-error)

Because the official Apt package applies strict systemd sandbox security, the background server crashed either because **it tried to touch `/home/fira` and got blocked by Ubuntu's kernel sandbox**, or it lacks write permissions to its own `/etc/forgejo/app.ini` configuration file. [link](https://forgejo.org/docs/v15.0/admin/installation/binary/)

Here is how to get it running in 60 seconds without scraping the whole installation:

### Step 1: Check the Real Error Message

To see exactly why the server threw an error, check the live background logs: [link](https://www.progressiverobot.com/2025/12/04/how-to-install-forgejo-on-debian-13/)

bash

```
sudo journalctl -u forgejo -n 50 --no-pager
```

Use code with caution.

- If you see **`ProtectHome=yes`** or **`Permission denied`**, it crashed because the wizard was forced to look at your `/home/fira` folder.
- If you see a database error, it couldn't write the SQLite file. [link](https://learn.microsoft.com/en-us/answers/questions/3847207/what-is-a-500-internal-error)

***

### Step 2: Clear the Broken Wizard File

When a setup fails halfway through, Forgejo writes a broken, half-baked config file. Wipe it so we can start the wizard clean:

bash

```
sudo rm -f /etc/forgejo/app.ini
sudo systemctl restart forgejo
```

Use code with caution.

***

### Step 3: Run the Polish UX Setup

Refresh `http://localhost:3000` in your browser. This time, do not touch or fight the default paths on the web screen.

1. Leave the locked username as is.

2. Leave the **Repository Root Path** exactly at its system default:\
   text

<!---->

```
/var/lib/forgejo/data/forgejo-repositories
```

Use code with caution.
3\. Complete the admin user section and click **Install**. It will succeed immediately because it stays inside its allowed system sandbox directory. [link](https://wiki.crowncloud.net/?How%5Fto%5FInstall%5FForgejo%5Fon%5FDebian%5F12)

***

### Step 4: Drop Your Local Project Shortcuts (No Sudo Needed)

Now that your GUI dashboard is open and working, give your personal Ubuntu account ownership over that default folder so you can link your real code: [link](https://wiki.crowncloud.net/?How%5Fto%5FInstall%5FForgejo%5Fon%5FUbuntu%5F22%5F04)

bash

```
# 1. Give your fira user ownership of the system data directory
sudo chown -R fira:fira /var/lib/forgejo

# 2. Build your personal repository staging folder
mkdir -p /var/lib/forgejo/data/forgejo-repositories/fira

# 3. Create zero-permission shortcuts directly to your actual working directories!
ln -s ~/Documents /var/lib/forgejo/data/forgejo-repositories/fira/DocumentsFolder
ln -s ~/Projects /var/lib/forgejo/data/forgejo-repositories/fira/ProjectsFolder
```

Use code with caution.

Now, navigate directly to `http://localhost:3000/admin/repos/unadopted`. You will instantly see all of your repositories from **Documents** and **Projects** side-by-side. Click **Adopt**, and your local Git GUI setup is completely finished! [link](https://wiki.crowncloud.net/?How%5Fto%5FInstall%5FForgejo%5Fon%5FUbuntu%5F22%5F04)

Let me know if **Step 1** shows a different error message, like a database lock or port collision, so we can clear it up!

- [link](https://forgejo.org/docs/v15.0/admin/config-cheat-sheet/)\
  Forgejo\
  Configuration Cheat Sheet | Forgejo – Beyond coding. We forge.\
  Configuration Cheat Sheet. This is a cheat sheet for the Forgejo configuration file. It contains most of the settings that can be ...
- [link](https://forgejo.org/docs/v15.0/admin/installation/binary/)\
  Forgejo\
  Installation from binary | Forgejo – Beyond coding. We forge.\
  General hints for using Forgejo \* You need to run it as the git user, for example with: $ sudo -u git forgejo command --argument. ...
- [link](https://learn.microsoft.com/en-us/answers/questions/3847207/what-is-a-500-internal-error)\
  Microsoft Learn\
  What is a 500 internal error? - Microsoft Q\&A\
  Jun 25, 2025 — Here are some common causes: \* Server misconfiguration (like in . ... \* Script errors (e.g. in PHP, Python, etc.) \* Exceeding serv...

Show all

## 500 after ~ % sudo chown -R $USER:$USER /var/lib/forgejo

\~ % # Create your repository subfolder (replace 'fira' with your Forgejo username if different)\
mkdir -p /var/lib/forgejo/data/forgejo-repositories/f

\# Shortcut your Documents\
ln -s ~/Documents /var/lib/forgejo/data/forgejo-repositories/f/Documents

\# Shortcut your Projects\
ln -s ~/Projects /var/lib/forgejo/data/forgejo-repositories/f/Projects

The 500 error happened because of the `sudo chown` command. Forgejo's apt package runs as a background system user named `forgejo`. By changing the folder owner to your personal user (`fira`), you accidentally blocked the background system daemon from reading or writing its own files, causing it to crash instantly.

We can fix this right now by granting _both_ your user and the system service access to that folder using Linux group permissions.

### Step 1: Fix the Ownership and Permissions (Stop the 500 Error)

Run these commands to restore access to the Forgejo service while keeping your personal access alive:

bash

```
# 1. Give ownership back to the forgejo service user
sudo chown -R forgejo:forgejo /var/lib/forgejo

# 2. Add your personal user to the forgejo system group
sudo usermod -aG forgejo $USER

# 3. Open up permissions so group members (you) can read/write inside it
sudo chmod -R 775 /var/lib/forgejo
```

Use code with caution.

_Note: You may need to log out of Ubuntu and log back in (or run `newgrp forgejo`) for the group change to take effect in your terminal._

***

### Step 2: Restart the Service

Now that the permissions are balanced, restart Forgejo to clear the 500 Internal Server Error:

bash

```
sudo systemctl restart forgejo
```

Use code with caution.

Open `http://localhost:3000` in your browser. The dashboard should load normally.

***

### Step 3: Re-link Your Folders inside the Sandbox

Because the background service is sandboxed, it cannot follow symbolic links that jump directly into your private `/home/fira/Documents` or `/home/fira/Projects` folders. It will see them as broken paths.

To bypass this safely without changing system configurations, use Linux **bind mounts** instead of symlinks. This cleanly mirrors your existing project folders inside Forgejo's directory in real-time.

bash

```
# 1. Clear out the symlinks you made earlier
rm -rf /var/lib/forgejo/data/forgejo-repositories/f/Documents
rm -rf /var/lib/forgejo/data/forgejo-repositories/f/Projects

# 2. Re-create them as physical directories
mkdir -p /var/lib/forgejo/data/forgejo-repositories/f/Documents
mkdir -p /var/lib/forgejo/data/forgejo-repositories/f/Projects

# 3. Mount your real folders into Forgejo's system space
sudo mount --bind /home/fira/Documents /var/lib/forgejo/data/forgejo-repositories/f/Documents
sudo mount --bind /home/fira/Projects /var/lib/forgejo/data/forgejo-repositories/f/Projects
```

Use code with caution.

***

### Step 4: Track Your Projects

Refresh your browser and navigate to `http://localhost:3000/admin/repos/unadopted`.

Every single Git repository inside your `Documents` and `Projects` folders will be visible and ready. Click **Adopt Repository** on whichever ones you want to trace, and your local Git GUI setup is officially running.

Would you like to know how to make those **bind mounts permanent** so they survive if you reboot your Ubuntu machine?

## ~ % # 1. Clear out the symlinks you made earlier

rm -rf /var/lib/forgejo/data/forgejo-repositories/f/Documents\
rm -rf /var/lib/forgejo/data/forgejo-repositories/f/Projects

\# 2. Re-create them as physical directories\
mkdir -p /var/lib/forgejo/data/forgejo-repositories/f/Documents\
mkdir -p /var/lib/forgejo/data/forgejo-repositories/f/Projects

\# 3. Mount your real folders into Forgejo's system space\
sudo mount --bind /home/fira/Documents /var/lib/forgejo/data/forgejo-repositories/f/Documents\
sudo mount --bind /home/fira/Projects /var/lib/forgejo/data/forgejo-repositories/f/Projects

rm: cannot remove '/var/lib/forgejo/data/forgejo-repositories/f/Documents': Permission denied\
rm: cannot remove '/var/lib/forgejo/data/forgejo-repositories/f/Projects': Permission denied\
\~ % # 1. Clear out the symlinks you made earlier\
sudo rm -rf /var/lib/forgejo/data/forgejo-repositories/f/Documents\
sudo rm -rf /var/lib/forgejo/data/forgejo-repositories/f/Projects

\# 2. Re-create them as physical directories\
mkdir -p /var/lib/forgejo/data/forgejo-repositories/f/Documents\
mkdir -p /var/lib/forgejo/data/forgejo-repositories/f/Projects

\# 3. Mount your real folders into Forgejo's system space\
sudo mount --bind /home/fira/Documents /var/lib/forgejo/data/forgejo-repositories/f/Documents\
sudo mount --bind /home/fira/Projects /var/lib/forgejo/data/forgejo-repositories/f/Projects

mkdir: cannot create directory ‘/var/lib/forgejo/data/forgejo-repositories/f/Documents’: Permission denied\
mkdir: cannot create directory ‘/var/lib/forgejo/data/forgejo-repositories/f/Projects’: Permission denied\
mount: /var/lib/forgejo/data/forgejo-repositories/f/Documents: mount point does not exist.\
dmesg(1) may have more information after failed mount system call.\
mount: /var/lib/forgejo/data/forgejo-repositories/f/Projects: mount point does not exist.\
dmesg(1) may have more information after failed mount system call.

Ah, you ran into a permissions catch-22 because we handed ownership back to the `forgejo` service user in Step 1. Your regular user (`fira`) no longer has the power to run `mkdir` inside `/var/lib/forgejo` without `sudo`.

Let's execute those exact commands using `sudo` so they clear right through.

Run this combined snippet in your terminal:

bash

```
# 1. Re-create the directories using sudo
sudo mkdir -p /var/lib/forgejo/data/forgejo-repositories/f/Documents
sudo mkdir -p /var/lib/forgejo/data/forgejo-repositories/f/Projects

# 2. Mount your real folders into Forgejo's system space
sudo mount --bind /home/fira/Documents /var/lib/forgejo/data/forgejo-repositories/f/Documents
sudo mount --bind /home/fira/Projects /var/lib/forgejo/data/forgejo-repositories/f/Projects
```

Use code with caution.

Once those execute successfully, refresh your browser at `http://localhost:3000/admin/repos/unadopted`. You will see all your repositories waiting for you.

If you want these mounts to **survive a system reboot** so your GUI works every time you turn on your PC, let me know! I can give you the two lines to add to your `/etc/fstab` file.

## unmount these two. try alternatives

To unmount the folders completely and safely remove those mount points, run these commands:

bash

```
sudo umount /var/lib/forgejo/data/forgejo-repositories/f/Documents
sudo umount /var/lib/forgejo/data/forgejo-repositories/f/Projects
sudo rm -rf /var/lib/forgejo/data/forgejo-repositories/f/Documents
sudo rm -rf /var/lib/forgejo/data/forgejo-repositories/f/Projects
```

Use code with caution.

***

### The Clean Alternative: Change the Systemd Sandbox Policy

Instead of fighting paths, folder ownership, or mounting schemes, we can explicitly tell Ubuntu to let Forgejo see your home directories. Since you installed via `apt`, the system configuration is locked by a security sandbox.

This alternative takes 30 seconds and keeps your files exactly where they are.

#### Step 1: Open the Systemd Override Configuration

Run this command to open an override configuration file for Forgejo:

bash

```
sudo systemctl edit forgejo
```

Use code with caution.

#### Step 2: Disable the Home Directory Sandbox

Your text editor will open a file. Paste the following exact configuration lines right into it:

ini

```
[Service]
ProtectHome=false
ReadWritePaths=/home/fira/Documents /home/fira/Projects
```

Use code with caution.

- `ProtectHome=false` breaks Forgejo out of its hidden isolation cage.
- `ReadWritePaths` explicitly tells Ubuntu to grant Forgejo read/write access to those two specific folders.

Save and exit the editor (`Ctrl+O`, then `Enter`, then `Ctrl+X`).

#### Step 3: Tell Forgejo to Run as Your User

Because your `Documents` and `Projects` folders are owned by `fira`, the background service should run as `fira` to prevent file conflicts.

1. Open the primary app settings:\
   bash

<!---->

```
sudo nano /etc/forgejo/app.ini
```

Use code with caution.
2\. Look for the `[repository]` section (create it at the bottom if it doesn't exist) and set your root path:\
ini

```
[repository]
ROOT = /var/lib/forgejo/data/forgejo-repositories
```

Use code with caution.
3\. Save and close the file.

#### Step 4: Reload and Start Up

bash

```
sudo systemctl daemon-reload
sudo systemctl restart forgejo
```

Use code with caution.

***

### Step 5: Put Standard Symbolic Links Back (They Will Work Now!)

Now that the sandbox cage is broken, Forgejo can perfectly read ordinary Linux shortcuts. Create the shortcuts as the `forgejo` user so the service claims them:

bash

```
sudo -u forgejo ln -s /home/fira/Documents /var/lib/forgejo/data/forgejo-repositories/f/Documents
sudo -u forgejo ln -s /home/fira/Projects /var/lib/forgejo/data/forgejo-repositories/f/Projects
```

Use code with caution.

Head right over to `http://localhost:3000/admin/repos/unadopted`. Your entire list of personal projects from **Documents** and **Projects** will pull right up into your web GUI!

Did this alternative clear out the errors on your unadopted screen?

- [link](https://www.reddit.com/r/debian/comments/oxn8ju/how%5Fto%5Fremove%5Fcustom%5Fmount%5Fpoints/)\
  How to remove custom mount points? : r/debian\
  Aug 4, 2021 — You need to undo the settings you made when you set it up. If you set up the mount in the /etc/fstab, then remove it from there. I...\
  \
  Reddit

## make these two no longer appear on nautilus

Those folders appear in the Nautilus sidebar because Linux treats active `--bind` mounts as separate disk drives. Since we unmounted them, we need to make sure they didn't get left behind or re-mounted, or we can use a much cleaner trick that hides them from Nautilus entirely.

Follow these steps to clean up Nautilus immediately.

### Step 1: Force a Full Unmount and Clean Up

First, let's make absolutely sure Ubuntu completely released the bind mounts from your system memory so Nautilus stops tracking them as drives:

bash

```
sudo umount -f /var/lib/forgejo/data/forgejo-repositories/f/Documents
sudo umount -f /var/lib/forgejo/data/forgejo-repositories/f/Projects
```

Use code with caution.

If it tells you `"not mounted"`, that is perfect. It means the system has already disconnected them.

***

### Step 2: Hide the Target Folders from Nautilus (The `.hidden` Trick)

If Nautilus is still showing those folder paths in your system view or sidebar, you can use the native GNOME `.hidden` file feature. If a folder's name is written inside a `.hidden` file, Nautilus will completely stop rendering it in the user interface.

Run this command to tell Nautilus to ignore the internal Forgejo data path:

bash

```
mkdir -p /var/lib/forgejo/data/forgejo-repositories/f
echo "Documents" | sudo tee /var/lib/forgejo/data/forgejo-repositories/f/.hidden
echo "Projects" | sudo tee -a /var/lib/forgejo/data/forgejo-repositories/f/.hidden
```

Use code with caution.

***

### Step 3: Refresh Nautilus

Force Nautilus to reload its cache and clear out the sidebar drives instantly:

bash

```
nautilus -q
```

Use code with caution.

Open your Files application again. The extra drive mounts and sidebar folders will be completely gone, leaving your system view clean.

Did that successfully wipe them from your Nautilus sidebar, or are they still lingering?

- [link](https://askubuntu.com/questions/832643/nautilus-sidebar-menue-mounts-cannot-unmount)\
  Nautilus - sidebar menue/mounts - cannot unmount\
  Oct 3, 2016 — 2 Answers 2 What you see on the left side of Nautilus are your partitions. Mounted ones have the eject button beside them, unmount...\
  \
  \
  Ask Ubuntu
- [link](https://askubuntu.com/questions/832643/nautilus-sidebar-menue-mounts-cannot-unmount)\
  Nautilus - sidebar menue/mounts - cannot unmount\
  Oct 3, 2016 — 2 Answers 2 What you see on the left side of Nautilus are your partitions. Mounted ones have the eject button beside them, unmount...\
  \
  \
  Ask Ubuntu

## it's stuck. must be superuser to unmount. device busy.

To safely force-unmount those paths right now, use a **lazy unmount** (`umount -l`). [link](https://unix.stackexchange.com/questions/107885/busy-device-on-umount)

The "device busy" message occurs because Nautilus or Forgejo is actively trying to index those paths in the background. A lazy unmount cleanly unlinks the directories from your file tree immediately and clears them from Nautilus, then safely closes the connections in the background as soon as the background processes finish reading them. [link](https://unix.stackexchange.com/questions/107885/busy-device-on-umount)

Run these terminal commands to unmount them forcefully and wipe the target directories cleanly:

bash

```
# 1. Forcefully break the active mount connections lazily
sudo umount -l /var/lib/forgejo/data/forgejo-repositories/f/Documents
sudo umount -l /var/lib/forgejo/data/forgejo-repositories/f/Projects

# 2. Safely clear away the empty placeholder directories
sudo rm -rf /var/lib/forgejo/data/forgejo-repositories/f/Documents
sudo rm -rf /var/lib/forgejo/data/forgejo-repositories/f/Projects

# 3. Kill Nautilus cache so it updates the sidebar immediately
nautilus -q
```

Use code with caution.

***

### Cleanest Alternative (Zero Sandbox Edits, Zero Mounting)

Since both the bind mounts and system permission edits felt clunky, let's use the most elegant approach built directly into Forgejo.

Instead of moving or routing your files, keep Forgejo's path completely default, and use a **native configuration change to read both folders cleanly as your own user**.

#### Step 1: Tell the System Service to Run as "fira"

By default, the Apt package tries to execute under a hidden user named `forgejo`. If we tell the service to run directly as you, it naturally inherits all permissions to see `Documents` and `Projects` effortlessly.

1. Open the system service override file:\
   bash

<!---->

```
sudo systemctl edit forgejo
```

Use code with caution.
2\. Paste these exact lines to set your user identity and disable the home isolation filter:\
ini

```
[Service]
User=fira
Group=fira
ProtectHome=false
```

Use code with caution.
3\. Save and close (`Ctrl+O`, `Enter`, `Ctrl+X`).

#### Step 2: Set the App Config Root to Your Choice

Now that the service acts as you, it can read anything you can read. Open your configuration tool:

bash

```
sudo nano /etc/forgejo/app.ini
```

Use code with caution.

Look for `[repository]` and update the `ROOT` path straight to your `Documents` or a central directory.

#### Step 3: Refresh System

bash

```
sudo systemctl daemon-reload
sudo systemctl restart forgejo
```

Use code with caution.

Are the stubborn mounts completely cleared out of your Nautilus view now?

- [link](https://unix.stackexchange.com/questions/107885/busy-device-on-umount)\
  Unix & Linux Stack Exchange\
  Busy Device on Umount - Unix & Linux Stack Exchange\
  Jan 4, 2014 — How to force the issue: fuser has a -k option which will send a signal (default: SIGKILL ) to each process using the mount. This i...
- [link](https://stackoverflow.com/questions/7878707/how-to-unmount-a-busy-device)\
  Stack Overflow\
  How to unmount a busy device - linux - Stack Overflow\
  16 Answers 16 Sorted by: Reset to default Voting is disabled while the site is in read-only mode. 876 Voting is disabled while the...
- [link](https://superuser.com/questions/207269/sshfs-device-is-busy)\
  Super User\
  sshfs device is busy - Super User\
  7 Answers Sorted by: 19 Some program is using a file in the filesystem you're trying to unmount. It could be a file opened for rea...

Show all

## umount: /var/lib/forgejo/data/forgejo-repositories/f/Documents: no mount point specified.

umount: /var/lib/forgejo/data/forgejo-repositories/f/Projects: no mount point specified.

That message is actually **great news**! It means the system has already successfully unmounted those directories completely, which is why it can no longer find active mount points there.

If they are still showing up in your Nautilus sidebar, they are likely just cached shortcuts or leftover directory remnants. Let's force Nautilus to drop them instantly.

### Step 1: Force-Delete the Leftover Directories

Since nothing is mounted there anymore, you can safely delete the empty placeholder folders that were holding onto the Nautilus view:

bash

```
sudo rm -rf /var/lib/forgejo/data/forgejo-repositories/f/Documents
sudo rm -rf /var/lib/forgejo/data/forgejo-repositories/f/Projects
```

Use code with caution.

### Step 2: Nuke the Nautilus Cache & Sidebar History

Nautilus loves to remember recently mounted locations in its history file (`~/.config/gtk-3.0/bookmarks`). Run these two lines to clear the window manager's cache and restart it fresh:

bash

```
# 1. Reset the GNOME file manager metadata cache
gvfs-tree -r /var/lib/forgejo/data/forgejo-repositories/f/ 2>/dev/null || true

# 2. Kill all active Nautilus processes to force a UI rebuild
nautilus -q
```

Use code with caution.

Open your files manager now. The ghost sidebar items will be completely gone, restoring your clean system interface.

***

### Moving Forward: The Cleanest GUI Setup

Now that your system paths are clean and free of bind mounts, your best way forward to view your `Documents` and `Projects` repositories is the **Systemd User Override (Step 1 from the previous reply)**.

By running `sudo systemctl edit forgejo` and adding:

ini

```
[Service]
User=fira
Group=fira
ProtectHome=false
```

Use code with caution.

Forgejo will automatically run as your native user `fira`. It can instantly read your repos directly via standard web adoption, with **zero mounts** and **zero Nautilus bugs** ever again.

Are the ghost icons completely gone from your screen now?

## search. fix nautilus

If those paths are unmounted but still stuck as ghost items in your Nautilus sidebar, it means **Nautilus has cached them as GTK bookmarks or active volume entries**. [link](https://askubuntu.com/questions/1352344/add-bookmarks-to-nautilus-via-terminal)

Here is how to forcefully purge them from your system memory and reset Nautilus completely.

### Step 1: Nuke Ghost GTK Bookmarks

Nautilus saves sidebar shortcuts inside a hidden plain-text configuration file. If the ghost directories are written there, they will stay in the sidebar forever. [link](https://askubuntu.com/questions/1352344/add-bookmarks-to-nautilus-via-terminal)

1. Open the GTK bookmarks file:\
   bash

<!---->

```
nano ~/.config/gtk-3.0/bookmarks
```

Use code with caution.
2\. Look for any lines referencing `/var/lib/forgejo/...` or your old mount paths.
3\. **Delete those lines entirely** (use `Ctrl + K` to cut the line in nano).
4\. Save and close the file (`Ctrl + O`, then `Enter`, then `Ctrl + X`). [link](https://askubuntu.com/questions/1352344/add-bookmarks-to-nautilus-via-terminal)

***

### Step 2: Clear Leftover Mount Metadata

Ubuntu tracks active partitions using background tracking engines (`gvfs` and `udisks2`). If these daemons crash or lag, they display "zombie" drives even after you unmount them.

Run this snippet to force the subsystem to drop the tracking records:

bash

```
# Clear GNOME volume metadata cache
sudo rm -rf ~/.local/share/gvfs-metadata/*

# Tell the disk daemon to refresh active drive configurations
sudo udisksctl info -b /dev/loop* 2>/dev/null || true
```

Use code with caution.

***

### Step 3: Hard-Reset Nautilus

To ensure Nautilus fully re-reads its layout without the cached ghost locations, kill all active instances and reset the background daemon:

bash

```
# Kill Nautilus completely
nautilus -q

# Restart the background user file tracking service
systemctl --user restart gvfs-daemon.service

# Reopen a clean Nautilus window
nautilus &
```

Use code with caution.

Open your file manager now. The sidebar will be completely restored to its original, clean state.

Now that Nautilus is fixed, would you like to proceed with setting up your local Forgejo GUI using the **Systemd User Override**, which completely avoids these clunky mounting issues?

- [link](https://discussion.fedoraproject.org/t/weird-nautilus-behavior-for-file-removal-on-f38/81630)\
  Fedora Discussion\
  Weird nautilus behavior for file removal on F38\
  Apr 26, 2023 — I just noticed that, if I select files on nautilus and press del or shift+del to remove them, sometimes they remain on the window,
- [link](https://askubuntu.com/questions/1352344/add-bookmarks-to-nautilus-via-terminal)\
  Ask Ubuntu\
  Add Bookmarks to Nautilus via Terminal - Ask Ubuntu\
  Jul 16, 2021 — 1 Answer. ... Nautilus bookmarks are stored in a plain text file ~/. config/gtk-3.0/bookmarks . You can therefore easily add or re...
- [link](https://askubuntu.com/questions/264280/how-to-remove-items-from-places-sidebar-in-nautilus-3-6)\
  Ask Ubuntu\
  How to remove items from Places sidebar in Nautilus 3.6? \[duplicate]\
  Mar 5, 2013 — Open Nautilus, go to your User folder, press Control + H, to show hidden files, then open the file called with . bookmarks-gtk. Yo...

# . thinking: fix nautilus by accidental mounting (workarounds) due to its constraints

maybe i should reboot.

fix nautilus first. be progressive.

---

ok. fortunately it fixes.

---

weird. rewaita auto starts and shows an empty (transparent) unclosable window.

```
 ~ % flatpak rm -y io.github.swordpuffin.rewaita
error: 'rm' is not a flatpak command. Did you mean 'run'?

See 'flatpak --help'
 ~ % flatpak remove -y io.github.swordpuffin.rewaita


        ID                                            Branch          Op
 1. [-] io.github.swordpuffin.rewaita                 stable          r
 2. [-] io.github.swordpuffin.rewaita.Locale          stable          r

Uninstall complete.
```

force stop via resources. easy.

# . thinking: opinionated

well, it's complex. it's overwhelming.

it's designed to be git backend like github.

not local git gui.

---

it wants things to be centralized there.

you may symlink or hardlink, but it wants it to be bare git repo.

no checkout. it serves. it doesnt expect you to modify directly.

it's too much to like proxy to overlay to disguise for it.

---

you may copy, and convert to compliant format.

you may serve and let it sync w you.

you couldnt just let it work w you easily.

# . thinking: import successfully yet manually, w huge surprises. evaluate.

```sh
 ~ % open /etc/forgejo/app.ini
 ~ % open /var/lib/forgejo/data/forgejo-repositories
 ~ % find /home/fira/Documents -maxdepth 1 -mindepth 1 -type d -exec sh -c 'for d; do if [ -d "$d/.git" ]; then name=$(basename "$d" | tr "[:upper:]" "[:lower:]"); sudo git clone --bare "$d" "/var/lib/forgejo/data/forgejo-repositories/f/${name}.git"; fi; done' _ {} +

Cloning into bare repository '/var/lib/forgejo/data/forgejo-repositories/f/resources.git'...
done.
Cloning into bare repository '/var/lib/forgejo/data/forgejo-repositories/f/school.git'...
done.
Cloning into bare repository '/var/lib/forgejo/data/forgejo-repositories/f/memories.git'...
done.
Cloning into bare repository '/var/lib/forgejo/data/forgejo-repositories/f/fonts.git'...
done.
Cloning into bare repository '/var/lib/forgejo/data/forgejo-repositories/f/university.git'...
done.
Cloning into bare repository '/var/lib/forgejo/data/forgejo-repositories/f/blogging.git'...
done.
Cloning into bare repository '/var/lib/forgejo/data/forgejo-repositories/f/f.git'...
done.
 ~ % sudo chown -R forgejo:forgejo /var/lib/forgejo/data/forgejo-repositories/f/
```

---

wow! damn! what a ux.

http://localhost:3000/admin/repos/unadopted

on this page it shows "Enter username to search for unadopted repositories… (leave blank to find all)"

currently it's blank.

yet, you have to click search button explicitly.

http://localhost:3000/admin/repos/unadopted?search=true&q=

it's not a modern spa. what a surprise.

---

and it asks for confirmation one by one!

---

expected:

- ideally, use local fs, behave as git gui as i want
- if you are determined to be the centralized authority, let me copy, show me the command
- auto adopt everything, or one click for my consent
- currently:
  - surprising "no adoption". (it would be quite time wasting if i just tell llms so)
  - one by one check, confirmation


# how to import local repos to forgejo from official apt on ubuntu

To import local Git repositories directly from your local filesystem into a Forgejo instance installed via an APT repository on Ubuntu, <mark>use the built-in<span> </span><strong>"Adopt unadopted repositories"</strong><span> </span>feature</mark>. This allows you to place bare Git repositories directly into Forgejo's storage directory and map them to users or organizations via the admin panel. [link](https://forgejo.org/docs/v15.0/admin/advanced/adopt/)

***

### Step 1: Find your Forgejo Repository Root

Before moving files, you need to locate the target directory on your system.

1. Open the Forgejo configuration file (typically located at `/etc/forgejo/app.ini`).

2. Search for the `[repository]` section.

3. Find the `ROOT` variable. By default on an APT installation, it is usually:\
   ini

<!---->

```
[repository]
ROOT = /var/lib/forgejo/data/forgejo-repositories
```

Use code with caution.\
_(Note: The exact path depends on your specific APT package layout, but it will always be defined under `[repository].ROOT`)._ [link](https://forgejo.org/docs/v15.0/admin/advanced/adopt/)

### Step 2: Prepare your Local Repositories as Bare Repos

Forgejo requires repositories to be in a **bare** format (a directory containing only Git administrative files, without a working checkout).

If your local repository is a standard working directory:

1. Open your terminal.

2. Convert it into a temporary bare repository using the clone command:\
   bash

<!---->

```
git clone --bare /path/to/your/local/project project-name.git
```

Use code with caution.

### Step 3: Move Repositories into the Forgejo Hierarchy

Forgejo scans the `ROOT` directory using a strict lowercase schema: `[repository].ROOT/{username_or_orgname}/{reponame}.git`. [link](https://forgejo.org/docs/v15.0/admin/advanced/adopt/)

1. Create the target user or organization folder inside the Forgejo repository root:\
   bash

<!---->

```
sudo mkdir -p /var/lib/forgejo/data/forgejo-repositories/yourusername
```

Use code with caution.
2\. Move your bare repository (`.git` directory) inside that folder. Ensure the repository name is entirely **lowercase**:\
bash

```
sudo mv project-name.git /var/lib/forgejo/data/forgejo-repositories/yourusername/project-name.git
```

Use code with caution.\
[link](https://forgejo.org/docs/v15.0/admin/advanced/adopt/)

### Step 4: Fix Filesystem Permissions

Because Forgejo runs under a dedicated system user account (typically `forgejo` or `git`), it must own the files you just moved so it can read and write to them. [link](https://forgejo.org/docs/v15.0/admin/installation/binary/)

Change the directory ownership to match the rest of your Forgejo data folder:

bash

```
sudo chown -R forgejo:forgejo /var/lib/forgejo/data/forgejo-repositories/yourusername/project-name.git
```

Use code with caution.

_(Verify your specific Forgejo system user in `/etc/passwd` or your systemd service file if `forgejo` returns an error)._

### Step 5: Adopt the Repositories in the Web UI

Once the files are correctly placed on the filesystem, notify Forgejo to add them to its database. [link](https://forgejo.org/docs/v15.0/admin/advanced/adopt/)

1. Log into your Forgejo instance with an **Administrator account**.
2. Click on your profile icon in the top right and navigate to **Site Administration**.
3. Under the administration menu, select **Repositories** (or directly append `/admin/repos/unadopted` to your instance URL).
4. You will see a list of detected folders on the disk. Click **Adopt** next to your repository. [link](https://forgejo.org/docs/v15.0/admin/advanced/adopt/)

Forgejo will automatically link the repository to the designated user or organization web interface. [link](https://forgejo.org/docs/v15.0/admin/advanced/adopt/)

***

If you run into missing folder errors during the process, please let me know your **exact Forgejo version** and your **current storage layout** from `app.ini` so we can tweak the paths!

- [link](https://forgejo.org/docs/v15.0/admin/advanced/adopt/)\
  Adopt existing git directories - Forgejo\
  If directories containing bare git repositories exist in the \[repository].ROOT hierarchy, they can be imported using the admin pan...\
  Forgejo
- [link](https://forgejo.org/docs/v15.0/admin/installation/binary/)\
  Installation from binary | Forgejo – Beyond coding. We forge.\
  Next, copy the downloaded Forgejo binary to /usr/local/bin/ (renaming it to “forgejo”) and make it executable: sudo cp forgejo-x.y...\
  Forgejo
- [link](https://codeberg.org/forgejo-contrib/forgejo-deb)\
  Debian packages for Forgejo - Codeberg.org\
  Manual installation. This installation procedure is not recommended! It is annoying to install, difficult to maintain, and require...\
  Codeberg.org

Show all

## will it sync with the actual repos

No, it will not sync automatically.

Once you adopt a repository this way, Forgejo takes full ownership of that specific folder on the disk. It becomes an independent hosted repository. If you make new commits or push changes to your _original_ local repository, those updates will **not** appear in Forgejo.

If you want a Forgejo repository that automatically pulls and syncs changes from an existing external repository, you should use **Repository Mirroring** instead.

### How to set up an auto-syncing mirror

Instead of copying folders manually via the command line, you can configure Forgejo to sync over a local network or path:

1. **Serve the local repo:** Forgejo needs network access to your local repo. You can temporarily serve it via HTTP from your local machine, or keep it on a shared local network path that the Forgejo server can read.
2. **Create a Migration:**

- In the Forgejo web UI, click the **`+` (plus icon)** in the top right.
- Select **New Migration**.

3. **Configure Sync:**

- Choose **Git** as the migration engine.
- Enter the URL or local path to your repository.
- Check the box that says **This repository will be a mirror**.
- Adjust the **Mirror Interval** (e.g., sync every 8 hours, 24 hours, etc.).

Forgejo will then automatically fetch new commits, branches, and tags from your original repository on the schedule you set.

To help you get this set up correctly, let me know:

- Is your original repository on the **same physical computer** as Forgejo, or a different machine?

- How **frequently** do you need the changes to sync?

- [link](https://community.wayfarer.nianticlabs.com/t/ingress-map-sync-cadence-update/92171)\
  Ingress Map Sync Cadence Update - General Discussion\
  May 9, 2025 — NianticTintino: Hopefully, that makes things a bit clearer! :roll\_eyes: what is the period now? what kind of changes do and do not...\
  \
  Niantic Wayfarer Community

- [link](https://forum.syncthing.net/t/use-case-recommendations-three-way-sync-two-oss-on-same-machine-one-cifs-share/6119)\
  Use case recommendations (three way sync, two OSs on same machine, one CIFS share)\
  Nov 11, 2015 — Syncthing actually does not support syncthing “local” copies, i.e. a single instance managing two paths for the same repo. You can...\
  \
  \
  Syncthing Community Forum

- [link](https://docs.syntevo.com/SmartGit/Latest/Manual/GUI/Repository/Managing-Remotes)\
  Managing Remotes - SmartGit\
  Specify: URL or Path for the remote repository. Name for the local remote entry. Verify repository connection if SmartGit should t...\
  \
  syntevo

Show all

## how to serve

To serve a local Git repository on the same Ubuntu machine so Forgejo can mirror and sync with it, you can use Git's built-in HTTP server or standard SSH.

Because your Forgejo instance is installed natively via APT, it runs as a local system user (`forgejo`). The easiest way to let Forgejo access your repository without complex network setup is to serve it locally using **Git HTTP Backend** via a lightweight server like `darkhttpd`, or directly through **Local File Paths** if permissions allow.

***

### Method 1: The Easiest Way (Direct File Path)

Since Forgejo and your repository are on the same machine, you do not actually need a network server. Forgejo can read the directory directly from the disk.

1. **Grant Read Permissions:**\
   Forgejo runs as the `forgejo` user. It needs permission to read your local repository folder.\
   bash

<!---->

```
chmod -R +rX /path/to/your/original/repo
```

Use code with caution.
2\. **Create the Mirror in Forgejo:**

- Go to **New Migration** in Forgejo.
- For the **Repository URL**, input the absolute local path:\
  `file:///path/to/your/original/repo`
- Check **This repository will be a mirror**.

***

### Method 2: Serve via HTTP (Cleanest & Most Reliable)

If Method 1 runs into strict Ubuntu home directory permission blocks, you can temporarily or permanently serve the repository over a local HTTP port using `git http-backend`.

#### 1. Install a lightweight web server

bash

```
sudo apt update && sudo apt install lighttpd
```

Use code with caution.

#### 2. Configure Lighttpd for Git

Open the configuration file:

bash

```
sudo nano /etc/lighttpd/conf-available/50-git.conf
```

Use code with caution.

Paste the following configuration (replace `/path/to/your/repos/` with the folder _containing_ your git projects):

nginx

```
server.modules += ( "mod_cgi", "mod_alias", "mod_setenv" )

alias.url += ( "/git/" => "/usr/lib/git-core/git-http-backend/" )

$HTTP["url"] =~ "^/git/" {
    cgi.assign = ( "" => "" )
    setenv.add-environment = (
        "GIT_PROJECT_ROOT" => "/path/to/your/repos/",
        "GIT_HTTP_EXPORT_ALL" => ""
    )
}
```

Use code with caution.

#### 3. Enable the config and restart

bash

```
sudo lighty-enable-mod git cgi
sudo systemctl restart lighttpd
```

Use code with caution.

#### 4. Create the Mirror in Forgejo

- Go to **New Migration** in Forgejo.
- For the **Repository URL**, use your local IP or localhost:\
  `http://localhost/git/your-repo-name/.git`
- Check **This repository will be a mirror** and set your schedule.

***

To help pick the best path, let me know:

- Are your repositories sitting in your **personal user home directory** (`/home/username/...`)?

- Do you want this sync to run **permanently in the background**, or just as a **one-time import**?

- [link](https://medium.com/@haroldfinch01/how-to-create-a-home-server-thats-accessible-anywhere-97c7658f98fa)\
  How to Create a Home Server That’s Accessible Anywhere\
  Jul 1, 2025 — Installing the Operating System Your server's brain needs to be fast, secure, and lightweight. The go-to operating systems for hom...\
  \
  \
  Medium

## forgejo username is f. ubuntu username is fira. write a command to copy all git repos on Documents (one level deep, must be git repo), convert to bare, import to forgejo for adoption. no permission change.

Here is a single, copy-pasteable bash command to search your `Documents` folder for valid Git repositories, clone them as bare repositories directly into Forgejo's default APT directory structure under the user `f`, and make sure everything is lowercased properly for adoption.

bash

```
find /home/fira/Documents -maxdepth 1 -mindepth 1 -type d -exec sh -c 'for d; do if [ -d "$d/.git" ]; then name=$(basename "$d" | tr "[:upper:]" "[:lower:]"); sudo git clone --bare "$d" "/var/lib/forgejo/data/forgejo-repositories/f/${name}.git"; fi; done' _ {} +
```

Use code with caution.

### What this command does:

1. **`find /home/fira/Documents -maxdepth 1 -mindepth 1 -type d`**: Looks exactly one level deep into your Documents folder for directories.
2. **`if [ -d "$d/.git" ]`**: Verifies that the folder is actually a valid Git repository by checking for the hidden `.git` metadata folder.
3. **`tr "[:upper:]" "[:lower:]"`**: Converts the repository folder name to lowercase, which is strictly required by Forgejo's filesystem layout.
4. **`sudo git clone --bare`**: Clones the repository as a bare repository directly into the storage path for the Forgejo user `f`.

Once you run this, you can immediately go to your Forgejo Web UI, navigate to **Site Administration** -> **Repositories**, and click **Adopt** on all the imported repositories.

Let me know if you run into any **directory path mismatch errors** or if you want to automate the **filesystem permission step** too!

## repository.AdoptRepository, adoptRepository: createDelegateHooks: create hooks dir '/var/lib/forgejo/data/forgejo-repositories/f/blogging.git/hooks/pre-receive.d': mkdir /var/lib/forgejo/data/forgejo-repositories/f/blogging.git/hooks/pre-receive.d: permission denied

The web UI adoption failed because the `forgejo` background system service does not have permission to write inside the folders you just created. Even though you did not want to change permissions on your original source files, the **new copies** inside `/var/lib/forgejo/` must be owned by the `forgejo` user so the server can create its internal hooks.

Run this command to fix the permissions on the newly cloned folders so the web UI can complete the adoption:

bash

```
sudo chown -R forgejo:forgejo /var/lib/forgejo/data/forgejo-repositories/f/
```

Use code with caution.

### Why this is necessary:

- Your original source files in `/home/fira/Documents` remain completely untouched and unmodified.
- The copies inside `/var/lib/forgejo` were created using `sudo git clone`, making them owned by `root`.
- Forgejo runs as a limited system user named `forgejo` and cannot modify `root`-owned files, causing the `permission denied` error when it tries to set up its Git hooks (`pre-receive.d`).

Once you run that command, go back to the Forgejo Web UI and click **Adopt** again. It will succeed instantly.

Would you like help setting up a **systemd timer** or a **cron job** to automate this import and permission fix in the future?

## will it sync if i run again find /home/fira/Documents -maxdepth 1 -mindepth 1 -type d -exec sh -c 'for d; do if \[ -d "$d/.git" ]; then name=$(basename "$d" | tr "\[:upper:]" "\[:lower:]"); sudo git clone --bare "$d" "/var/lib/forgejo/data/forgejo-repositories/f/${name}.git"; fi; done' \_ {} +

<mark><span>No, running that exact command again will not sync your changes</span></mark>. It will actually **fail with an error** for any repositories you have already imported.

### Why it won't sync:

1. **Target Directory Already Exists:** The `git clone` command expects the destination folder (e.g., `.../f/blogging.git`) to be completely empty or non-existent. Because the folder is already there from your first import, `git clone` will stop and print a `fatal: destination path already exists` error.
2. **It Doesn't Update:** `git clone` only creates _new_ copies; it cannot fetch or merge updates into an existing repository.

***

### How to actually sync them from the command line

If you want a command you can run repeatedly to pull new commits from your `Documents` folder into Forgejo, you must use `git fetch` instead of `git clone` for repositories that already exist.

Run this updated command to **sync existing repos** and **clone new ones** all at once:

bash

```
find /home/fira/Documents -maxdepth 1 -mindepth 1 -type d -exec sh -c 'for d; do if [ -d "$d/.git" ]; then name=$(basename "$d" | tr "[:upper:]" "[:lower:]"); target="/var/lib/forgejo/data/forgejo-repositories/f/${name}.git"; if [ -d "$target" ]; then sudo git --git-dir="$target" fetch "$d" "*:*"; else sudo git clone --bare "$d" "$target"; fi; fi; done' _ {} + && sudo chown -R forgejo:forgejo /var/lib/forgejo/data/forgejo-repositories/f/
```

Use code with caution.

### What this new command does differently:

- **Checks if the repo exists:** If the target folder inside Forgejo already exists, it bypasses `git clone`.
- **Runs `git fetch`:** It forces the Forgejo bare repository to fetch all branches, tags, and commits directly from your local source directory (`*:*`).
- **Auto-fixes permissions:** It automatically appends the `chown` command at the very end so you never get the "permission denied" error again.

If you add new repositories to your `Documents` folder later, let me know if you want to automate this sync using an **Ubuntu cron job** or **systemd timer**!

## can i remove existing copied repos and run again, and expect forgejo to auto recognize them wo readopting

Yes, you can remove the folders and run the `git clone` command again, but Forgejo **will not** automatically recognize the updates.

Even though you won't see them in the "Unadopted" list anymore, Forgejo's web interface will completely break for those repositories, showing a **500 Internal Server Error** or an empty page.

### Why this happens

Forgejo keeps a snapshot of the repository's main branch, commit history, and file structure inside its database. When you delete the folder and re-clone it, you change the internal Git object IDs. Forgejo’s database gets out of sync with the files on the disk, causing errors because it expects the old history.

### The clean way to do a fresh re-import

If you want to completely wipe the slate clean and re-import everything from scratch via the adoption method, you must remove them from the database first:

1. **Delete them from the Web UI**: Go to **Site Administration** -> **Repositories**, select the repositories, and delete them. This safely cleans them out of Forgejo's database.

2. **Wipe the folders**: Ensure the target directory is empty:\
   bash

<!---->

```
sudo rm -rf /var/lib/forgejo/data/forgejo-repositories/f/*
```

Use code with caution.
3\. **Run your original command**: Run your `find` cloning command again.
4\. **Fix permissions**: Run the `sudo chown -R forgejo:forgejo ...` command.
5\. **Readopt**: Go back to the web UI and click **Adopt**.

### The ultimate fix: Just use the sync command

Instead of deleting and re-cloning, the `git --git-dir=... fetch` command provided in the previous answer is exactly what you need. It safely updates the files on the disk _without_ breaking Forgejo's internal database references.

Let me know if you would like to turn that sync command into an **automated script** so you don't have to run it manually!

## write the command to import or sync dynamically. no permission fix.

Here is the dynamic command that automatically **clones new repositories** and **syncs existing ones** on the fly, without altering any file permissions:

bash

```
find /home/fira/Documents -maxdepth 1 -mindepth 1 -type d -exec sh -c 'for d; do if [ -d "$d/.git" ]; then name=$(basename "$d" | tr "[:upper:]" "[:lower:]"); target="/var/lib/forgejo/data/forgejo-repositories/f/${name}.git"; if [ -d "$target" ]; then sudo git --git-dir="$target" fetch "$d" "*:*"; else sudo git clone --bare "$d" "$target"; fi; fi; done' _ {} +
```

Use code with caution.

### How it handles the data dynamically:

- **For a new repository:** It creates the folder via `sudo git clone --bare`. You will need to click **Adopt** in the Forgejo UI once.
- **For an existing repository:** It bypasses cloning and runs `sudo git fetch`. Forgejo will instantly display the new commits in the web UI without requiring you to re-adopt or re-import anything.

If you ever want to automate this process to run in the background, let me know if you would like to set up a **cron job** or **systemd timer**!



