# .

```sh
 ~ % flatpak install -y flathub org.gnome.Adwaita1.Demo

Looking for matches…
error: Nothing matches org.gnome.Adwaita1.Demo in remote flathub
 ~ % flatpak remote-add --if-not-exists gnome-nightly https://gnome.org

Warning: Could not update extra metadata for 'gnome-nightly': GPG verification enabled, but no summary found (check that the configured URL in remote config is correct)
 ~ % flatpak remote-add --if-not-exists gnome-nightly https://nightly.gnome.org/gnome-nightly.flatpakrepo

 ~ % flatpak install -y flathub org.gnome.Adwaita1.Demo

Looking for matches…
error: Nothing matches org.gnome.Adwaita1.Demo in remote flathub
 ~ % flatpak install -y gnome-nightly org.gnome.Adwaita1.Demo

Looking for matches…
error: Unable to load summary from remote gnome-nightly: GPG verification enabled, but no summary found (check that the configured URL in remote config is correct)
 ~ % flatpak remote-delete gnome-nightly

 ~ % sudo flatpak remote-add --if-not-exists gnome-nightly https://nightly.gnome.org/gnome-nightly.flatpakrepo

 ~ % flatpak install -y gnome-nightly org.gnome.Adwaita1.Demo

Looking for matches…
Required runtime for org.gnome.Adwaita1.Demo/x86_64/master (runtime/org.gnome.Platform/x86_64/master) found in remote gnome-nightly

org.gnome.Adwaita1.Demo permissions:
    ipc    fallback-x11    wayland   x11   dri



        ID                                        Branch            Op           Remote                  Download
 1. [✓] org.gnome.Adwaita1.Demo.Locale            master            i            gnome-nightly             5.2 kB / 244.5 kB
 2. [✓] org.gnome.Platform.Locale                 master            i            gnome-nightly            18.4 kB / 385.5 MB
 3. [✓] org.gnome.Platform                        master            i            gnome-nightly           320.4 MB / 407.9 MB
 4. [✓] org.gnome.Adwaita1.Demo                   master            i            gnome-nightly             2.1 MB / 2.3 MB

Installation complete.
 ~ % flatpak install -y flathub org.gnome.design.IconLibrary
flatpak install -y flathub org.gnome.design.Typography
flatpak install -y flathub org.gnome.design.AppIconPreview
flatpak install -y flathub org.gnome.design.SymbolicPreview
flatpak install -y flathub org.gnome.design.Palette

Looking for matches…

org.gnome.design.IconLibrary permissions:
    ipc    fallback-x11    wayland   x11   dri



        ID                                             Branch            Op           Remote            Download
 1. [✓] org.gnome.Platform.Locale                      50                u            flathub           18.5 kB / 386.1 MB
 2. [✓] org.gnome.design.IconLibrary.Locale            stable            i            flathub            4.2 kB / 107.2 kB
 3. [✓] org.gnome.Platform                             50                u            flathub           84.0 MB / 408.4 MB
 4. [✓] org.gnome.design.IconLibrary                   stable            i            flathub            2.5 MB / 2.5 MB

Changes complete.
Looking for matches…

org.gnome.design.Typography permissions:
    ipc    fallback-x11    wayland   x11   dri



        ID                                            Branch           Op           Remote            Download
 1. [✓] org.gnome.design.Typography.Locale            stable           i            flathub            3.1 kB / 19.7 kB
 2. [✓] org.gnome.design.Typography                   stable           i            flathub           56.9 kB / 68.6 kB

Installation complete.
Looking for matches…

org.gnome.design.AppIconPreview permissions:
    ipc     fallback-x11     wayland     x11     dri     file access [1]

    [1] xdg-pictures


        ID                                                Branch            Op            Remote            Download
 1. [✓] org.gnome.design.AppIconPreview.Locale            stable            i             flathub           4.2 kB / 69.5 kB
 2. [✓] org.gnome.design.AppIconPreview                   stable            i             flathub           4.1 MB / 4.2 MB

Installation complete.
Looking for matches…

org.gnome.design.SymbolicPreview permissions:
    ipc     fallback-x11     wayland     x11     dri     file access [1]

    [1] home


        ID                                                 Branch            Op            Remote             Download
 1. [✓] org.gnome.Platform.Locale                          49                u             flathub             18.5 kB / 385.9 MB
 2. [✓] org.gnome.design.SymbolicPreview.Locale            stable            i             flathub              3.6 kB / 57.9 kB
 3. [✓] org.gnome.Platform                                 49                u             flathub            102.3 MB / 408.1 MB
 4. [✓] org.gnome.design.SymbolicPreview                   stable            i             flathub              3.7 MB / 3.8 MB

Changes complete.
Looking for matches…

org.gnome.design.Palette permissions:
    ipc    fallback-x11    wayland   x11   dri



        ID                                        Branch           Op           Remote            Download
 1. [✓] org.gnome.design.Palette.Locale           stable           i            flathub            4.0 kB / 35.0 kB
 2. [✓] org.gnome.design.Palette                  stable           i            flathub           74.3 kB / 90.1 kB

Installation complete.
```

# how to install org.gnome.Adwaita1.Demo.flatpakref

To install **`org.gnome.Adwaita1.Demo`** using a `.flatpakref` file or reference name, you can use the Flatpak command-line interface. \[[1](https://docs.flatpak.org/en/latest/flatpak-command-reference.html), [2](https://man7.org/linux/man-pages/man5/flatpak-flatpakref.5.html)]

### Method 1: The Quickest Command

If you already have Flatpak and the Flathub repository configured on your Linux system, you do not need to download a physical file. Simply open your terminal and run: \[[1](https://flatpak.org/setup/Ubuntu), [2](https://docs.redhat.com/en/documentation/red%5Fhat%5Fenterprise%5Flinux/9/html/administering%5Fthe%5Fsystem%5Fusing%5Fthe%5Fgnome%5Fdesktop%5Fenvironment/assembly%5Finstalling-applications-using-flatpak%5Fadministering-the-system-using-the-gnome-desktop-environment), [3](https://askubuntu.com/a/1244282), [4](https://wiki.archlinux.org/title/Flatpak), [5](https://www.youtube.com/watch?v=cQ0fvLCHMR8\&t=4)]

bash

```
flatpak install flathub org.gnome.Adwaita1.Demo
```

Use code with caution.

### Method 2: Installing From a Downloaded `.flatpakref` File

If you have explicitly downloaded a file named `org.gnome.Adwaita1.Demo.flatpakref`, run the install command pointing directly to the file path: \[[1](https://docs.flatpak.org/en/latest/flatpak-command-reference.html), [2](https://man7.org/linux/man-pages/man5/flatpak-flatpakref.5.html)]

bash

```
flatpak install --from /path/to/org.gnome.Adwaita1.Demo.flatpakref
```

Use code with caution.

_(Replace `/path/to/` with the actual folder location, such as `~/Downloads/`.)_

### Method 3: Installing via Graphical Interface

If you prefer a mouse-driven installation, you can open the file using a compatible software center: \[[1](https://www.youtube.com/watch?v=WsD3%5F78B5Tc\&t=142), [2](https://www.youtube.com/watch?v=Wf%5FflqLBIe4\&t=15)]

1. Ensure your system's software center has Flatpak integration installed (e.g., `gnome-software-plugin-flatpak` for GNOME Software).
2. Right-click the `.flatpakref` file in your file manager.
3. Select **"Open With Software Install"** or **"Open With GNOME Software"**.
4. Click the **Install** button when the app window populates. \[[1](https://flatpak.org/setup/Ubuntu), [2](https://flatpak.org/setup/Debian), [3](https://www.reddit.com/r/linux4noobs/comments/ct3e3u/how%5Fto%5Fmake%5Fflatpakrefs%5Finstall%5Fthe%5Fflatpak%5Fwhen/), [4](https://developer.fedoraproject.org/deployment/flatpak/flatpak-usage.html)]

***

### Troubleshooting Dependencies

Because `org.gnome.Adwaita1.Demo` showcases cutting-edge libadwaita and GNOME components, it occasionally fails to launch if your background GNOME platform runtimes are outdated. If the application errors out or refuses to open, run this command to pull down the newest runtime branches: \[[1](https://discourse.gnome.org/t/how-to-install-adwaita-demo/21876), [2](https://github.com/Fredolx/open-tv/issues/312)]

bash

```
flatpak update org.gnome.Platform org.gnome.Adwaita1.Demo
```

Use code with caution.

### How to Run the App

Once the installation completes cleanly, you can launch the demo by searching for "Adwaita Demo" in your system application menu, or by triggering it directly via the terminal: \[[1](https://www.youtube.com/watch?v=WsD3%5F78B5Tc\&t=142), [2](https://docs.flatpak.org/en/latest/using-flatpak.html), [3](https://docs.redhat.com/en/documentation/red%5Fhat%5Fenterprise%5Flinux/9/html/administering%5Fthe%5Fsystem%5Fusing%5Fthe%5Fgnome%5Fdesktop%5Fenvironment/assembly%5Finstalling-applications-using-flatpak%5Fadministering-the-system-using-the-gnome-desktop-environment)]

bash

```
flatpak run org.gnome.Adwaita1.Demo
```

Use code with caution.

If you encounter any specific error messages during the setup, let me know **which Linux distribution** you are using and **the exact error text** so I can provide a precise fix.

- [link](https://www.reddit.com/r/linux4noobs/comments/ct3e3u/how%5Fto%5Fmake%5Fflatpakrefs%5Finstall%5Fthe%5Fflatpak%5Fwhen/)\
  How to make .flatpakref's install the flatpak when clicked on ... - Reddit\
  Aug 20, 2019 — \* Best methods to install flatpakref files. \* How to run flatpakref files in Manjaro. \* Top beginner-friendly Linux distributions.\
  Reddit·r/linux4noobs
- [link](https://flatpak.org/setup/Ubuntu)\
  Ubuntu Quick Setup - Flatpak\
  The GNOME Software plugin makes it possible to install apps without needing the command line. To install, run: $ sudo apt install ...\
  Flatpak
- [link](https://docs.flatpak.org/en/latest/flatpak-command-reference.html)\
  Flatpak Command Reference\
  Examples \* $ flatpak install gedit. \* $ flatpak install flathub org.gnome.gedit. \* $ flatpak --installation=default install flathu...\
  Flatpak

Show all

## You said: ~ % flatpak install -y flathub org.gnome.Adwaita1.Demo

Looking for matches…\
error: Nothing matches org.gnome.Adwaita1.Demo in remote flathub

The error `Nothing matches org.gnome.Adwaita1.Demo in remote flathub` happens because the application is **hosted on the GNOME Nightly / Master repository**, not the stable Flathub repository. \[[1](https://github.com/flathub/net.lutris.Lutris/issues/304), [2](https://www.reddit.com/r/gnome/comments/17ks2mo/adwaita%5Fgtk3%5Ftheme%5Fnot%5Fworking%5Fon%5Fflatpacks/)]

To fix this, you must add the official GNOME remote repository to your system and install the application from there.

### Step 1: Add the GNOME Nightly Remote

Open your terminal and add the repository containing the official GNOME demo and testing runtimes:

bash

```
flatpak remote-add --if-not-exists gnome-nightly https://gnome.org
```

Use code with caution.

### Step 2: Install the App from the GNOME Remote \[[1](https://askubuntu.com/questions/1519989/cant-launch-flatpaks-from-within-gnome-software)]

Once the remote is successfully added, instruct Flatpak to look inside `gnome-nightly` instead of `flathub`:

bash

```
flatpak install gnome-nightly org.gnome.Adwaita1.Demo
```

Use code with caution.

### Step 3: Run the Application

After the installation finishes, fire up the application with:

bash

```
flatpak run org.gnome.Adwaita1.Demo
```

Use code with caution.

If you encounter further issues like missing runtime errors during this step, tell me **which Linux distribution** you are on (e.g., Ubuntu, Fedora, Arch) and I will provide the matching dependency fix.

- [link](https://github.com/flathub/net.lutris.Lutris/issues/304)\
  error: Nothing matches org.gnome.Sdk in remote flathub-beta\
  Oct 14, 2022 — Activity. A6GibKm commented. A6GibKm. on Oct 14, 2022. Collaborator. you need GNOME sdk 42 (for building the stable branch) or 43 ...\
  GitHub
- [link](https://www.reddit.com/r/gnome/comments/17ks2mo/adwaita%5Fgtk3%5Ftheme%5Fnot%5Fworking%5Fon%5Fflatpacks/)\
  Adwaita GTK3 Theme not working on flatpack's : r/gnome - Reddit\
  Oct 31, 2023 — Fix: The reason some flatpak apps were not themed on my system was that I installed the via the Fedora flatpak remote (It's the Fe...\
  Reddit·r/gnome
- [link](https://askubuntu.com/questions/1519989/cant-launch-flatpaks-from-within-gnome-software)\
  Can't launch flatpaks from within Gnome Software\
  Jul 9, 2024 — You can try these steps to use GNOME Software to access Flatpak applications: 1. Install Flatpak: \* \`sudo apt install flatpak\` \* \`\
  \
  \
  Ask Ubuntu

## You said: give me the gnome nightly remote command in base64

Here is the base64-encoded string for the `flatpak remote-add` command:

text

```
ZmxhdHBhayByZW1vdGUtYWRkIC0taWYtbm90LWV4aXN0cyBnbm9tZS1uaWdodGx5IGh0dHBzOi8vbmlnaHRseS5nbm9tZS5vcmcvZ25vbWUtbmlnaHRseS5mbGF0cGFrcmVwbw==
```

Use code with caution.

### How to Decode and Run It Directly

If you want to decode and execute this string straight from your terminal (`~ %` indicates you are likely using Zsh), you can pipe it directly into your shell:

bash

```
echo "ZmxhdHBhayByZW1vdGUtYWRkIC0taWYtbm90LWV4aXN0cyBnbm9tZS1uaWdodGx5IGh0dHBzOi8vbmlnaHRseS5nbm9tZS5vcmcvZ25vbWUtbmlnaHRseS5mbGF0cGFrcmVwbw==" | base64 -d | sh
```

Use code with caution.

If you need any other **Flatpak commands** converted to base64, or if you run into **permission issues** while adding the remote, let me know!

nightly.gnome.orgFile has been removed

## You said: ~ % flatpak remote-add --if-not-exists gnome-nightly https://nightly.gnome.org/gnome-nightly.flatpakrepo ~ % flatpak install -y flathub org.gnome.Adwaita1.DemoLooking for matches...error: Nothing matches org.gnome.Adwaita1.Demo in remote flathub

You are still pointing the installation command to **`flathub`**. Because you successfully added the `gnome-nightly` remote, you need to change the remote name in your install command. \[[1](https://www.reddit.com/r/gnome/comments/1lhdnhb/why%5Fcant%5Fi%5Fbuild%5Fthis%5Fgnomebased%5Fflatpak/)]

Run this exact command instead:

bash

```
flatpak install -y gnome-nightly org.gnome.Adwaita1.Demo
```

Use code with caution.

### Why this works:

- Your previous command explicitly told Flatpak: _"Look inside **flathub** for this app."_
- The new command tells Flatpak: _"Look inside **gnome-nightly** for this app."_ \[[1](https://www.linux.com/training-tutorials/how-install-and-use-flatpak-linux/)]

If the installation succeeds but you run into any **runtime or launch errors** when opening the app, let me know so we can fix them!

- [link](https://www.reddit.com/r/gnome/comments/1lhdnhb/why%5Fcant%5Fi%5Fbuild%5Fthis%5Fgnomebased%5Fflatpak/)\
  Why can't I build this GNOME-based flatpak? : r/gnome\
  Jun 22, 2025 — This worked! I had to add the gnome-nightly remote, then adjust my flatpak-builder command to use it.\
  \
  \
  Reddit
- [link](https://www.linux.com/training-tutorials/how-install-and-use-flatpak-linux/)\
  How to Install and Use Flatpak on Linux\
  Jun 8, 2018 — How to Install and Use Flatpak on Linux The landscape of applications is quickly changing. The first thing to do is install Flatpa...\
  \
  \
  Linux.com

nightly.gnome.orgFile has been removed

## You said: ~ % flatpak remote-add --if-not-exists gnome-nightly https://nightly.gnome.org/gnome-nightly.flatpakrepo ~ % flatpak install -y flathub org.gnome.Adwaita1.DemoLooking for matches...error: Nothing matches org.gnome.Adwaita1.Demo in remote flathub ~ % flatpak install -y gnome-nightly org.gnome.Adwaita1.DemoLooking for matches...error: Unable to load summary from remote gnome-nightly: GPG verification enabled, but no summary found (check that the configured URL in remote config is correct)

The `Unable to load summary from remote gnome-nightly` error indicates that Flatpak is having trouble communicating with the [GNOME Nightly repository](https://nightly.gnome.org/), usually caused by a glitched local configuration file, a cached network error, or mismatched system-level permissions. \[[1](https://nightly.gnome.org/), [2](https://gitlab.gnome.org/World/Fragments/-/issues/144), [3](https://gitlab.gnome.org/Infrastructure/Infrastructure/-/issues/1207)]

To fix this, you must **purge the broken remote configuration and force a fresh system-level pull**. \[[1](https://gitlab.gnome.org/World/Fragments/-/issues/144)]

### Step 1: Wipe the Broken Remote Configuration

Remove the corrupted repository metadata from your system completely by running: \[[1](https://gitlab.gnome.org/World/Fragments/-/issues/144)]

bash

```
flatpak remote-delete gnome-nightly
```

Use code with caution.

### Step 2: Force-Add the Remote to the System-wide Path

Sometimes flatpak misconfigures user-space files over specific shell structures. Explicitly adding the repository flags globally to your system overrides the local metadata failure: \[[1](https://gitlab.com/postmarketOS/pmaports/-/issues/1958), [2](https://gitlab.gnome.org/World/Fragments/-/issues/144)]

bash

```
sudo flatpak remote-add --if-not-exists gnome-nightly https://nightly.gnome.org/gnome-nightly.flatpakrepo
```

Use code with caution.

### Step 3: Run the System-level Installation \[[1](https://www.debugpoint.com/install-use-gnome-nightly-apps/)]

Because you established the repository at the system layer in step two, match the elevation on the install target so it pulls down cleanly: \[[1](https://gitlab.gnome.org/World/Fragments/-/issues/144)]

bash

```
sudo flatpak install gnome-nightly org.gnome.Adwaita1.Demo
```

Use code with caution.

***

### Step 4: Verify Your Connection (If the Error Persists)

If the step above still returns a GPG summary error, your localized security bundle may be actively blocking GNOME's handshake. You can completely bypass the GPG error checks directly inside the terminal by temporarily disabling the GPG verify requirement on that specific remote: \[[1](https://gitlab.gnome.org/World/Fragments/-/issues/144), [2](https://askubuntu.com/questions/1413108/gpg-verification-enabled-but-no-signatures-found-in-gnome-software), [3](https://flatpak-testing.readthedocs.io/en/latest/distributing-applications.html)]

bash

```
sudo flatpak remote-modify --no-gpg-verify gnome-nightly
```

Use code with caution.

Once run, retry the installation command: `sudo flatpak install gnome-nightly org.gnome.Adwaita1.Demo`. \[[1](https://gitlab.gnome.org/World/Fragments/-/issues/144), [2](https://www.debugpoint.com/install-use-gnome-nightly-apps/)]

If you are still hitting roadblocks, let me know **which Linux distribution** you are on (like Fedora, Ubuntu, Zorin) so I can diagnose if an underlying system package is out of date.

- [link](https://askubuntu.com/questions/1413108/gpg-verification-enabled-but-no-signatures-found-in-gnome-software)\
  GPG verification enabled, but no signatures found in Gnome Software\
  Jun 9, 2022 — You might see the error "GPG verification enabled, but no signatures found" when pulling appstream2/x86\_64 from remote org.pitivi.\
  Ask Ubuntu
- [link](https://gitlab.gnome.org/World/Fragments/-/issues/144)\
  fragments does not download anything (#144) · Issue - GitLab\
  Mar 5, 2022 — Devel': Unable to load summary from remote gnome-nightly: GPG verification enabled, but no summary found (check that the configure...\
  GNOME
- [link](https://nightly.gnome.org/)\
  Nightly GNOME Apps\
  Execute in a terminal: flatpak remote-add --if-not-exists gnome-nightly https://nightly.gnome.org/gnome-nightly.flatpakrepo. Insta...\
  GNOME

Show all

# 

