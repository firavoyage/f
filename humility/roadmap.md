humility

readme · roadmap · notes

---

see drafts/todo

---

long term roadmap

wip.

---

connect/send

- parallel (fire, could be fake)
- continue chat
- advanced context management

---

create a design system...

protect intention.

- vercel. google material design. chatgpt. claude.
- duolingo. chess. posthog.
- brawlstars. zenless zone zero.
- google reader. v2ex.
- iphone os 4.

design a button first.

choose the style i will use at last. the peaceful and human one, combining chess and gmail classic.

- think what a chat app should have.
- write down.
- give llms the context (components, design). generate everything.
- generate layout.
- iterate.
- (test, docs)

how to describe a design system.

chess/duolingo + gmail classic.

---

chem project.

style. detail level. ...

---

act: 

secure, runtime type check. params. if invalid, err. dont call.

---

send:

secure, cleanup after timeout failure.

---

maybe it should close browser.

like when the tests complete.

---

llms dont follow.

lint: no nulls or undefined.

---

load: many folders. like python.

---

send:

dynamic loading.

---

(git?) version control.

store

```
fira@Fira ~ % sudo apt update

sudo apt install -y \
  libglu1-mesa libglu1-mesa-dev \
  libhidapi-hidraw0 libhidapi-dev \
  libpulse0 libpulse-dev \
  libudev1 libudev-dev \
  libxext6 libxext-dev \
  mesa-common-dev \
  qt6-base-dev qt6-base-private-dev \
  libenet7 libenet-dev \
  libfmt9 libfmt-dev \
  liblz4-1 liblz4-dev \
  libzstd1 libzstd-dev \
  libavfilter9 libavfilter-dev libavcodec60 libavcodec-dev libswscale7 libswscale-dev \
  libva2 libva-dev libvdpau1 libvdpau-dev \
  libvulkan1 libvulkan-dev spirv-tools \
  libusb-1.0-0 libusb-1.0-0-dev \
  libsdl2-2.0-0 libsdl2-dev \
  libqt6core5compat6 \
  libquazip1t64-qt6 libquazip1-qt6-dev \
  libopus0 libopus-dev \
  qt6-charts6 qt6-charts-dev \
  libboost-context1.83.0 libboost-fiber1.83.0 libboost-context-dev libboost-fiber-dev \
  libcpp-httplib-dev libcubeb-dev

# Now fix the half-installed package
sudo apt install -f -y
Hit:1 http://security.ubuntu.com/ubuntu noble-security InRelease                                                                             
Hit:3 https://download.docker.com/linux/ubuntu noble InRelease                                                                               
Hit:4 http://archive.ubuntu.com/ubuntu noble InRelease                                                                                       
Hit:5 https://repo.waydro.id noble InRelease                                                                                                 
Hit:2 http://mirrors.tuna.tsinghua.edu.cn/ubuntu noble InRelease                                                                             
Hit:6 https://ppa.launchpadcontent.net/flatpak/stable/ubuntu noble InRelease                                                    
Hit:7 https://ppa.launchpadcontent.net/kisak/kisak-mesa/ubuntu noble InRelease                            
Hit:8 https://ppa.launchpadcontent.net/oibaf/graphics-drivers/ubuntu noble InRelease                      
Hit:9 https://downloads.cursor.com/aptrepo stable InRelease                                               
Hit:10 https://deb.nodesource.com/node_20.x nodistro InRelease                      
Reading package lists... Done
Building dependency tree... Done
Reading state information... Done
95 packages can be upgraded. Run 'apt list --upgradable' to see them.
Reading package lists... Done
Building dependency tree... Done
Reading state information... Done
E: Unable to locate package libquazip1t64-qt6
E: Unable to locate package qt6-charts6
Reading package lists... Done
Building dependency tree... Done
Reading state information... Done
Correcting dependencies... Done
The following packages were automatically installed and are no longer required:
  attr fluidsynth gir1.2-gnomeautoar-0.1 gir1.2-gnomedesktop-3.0 gir1.2-javascriptcoregtk-4.1 gir1.2-webkit2-4.1 libcephfs2 libcue2 libei1
  libexiv2-27 libflatpak0 libfreerdp-server3-3 libfreerdp3-3 libgexiv2-2 libgsf-1-114 libgsf-1-common libostree-1-1 libportal-gtk4-1
  libproxychains3 librados2 liburing2 libwinpr3-3 nautilus-data python3-evdev python3-magic python3-protobuf python3-setproctitle qsynth
  samba samba-ad-provision samba-vfs-modules tdb-tools tracker tracker-extract tracker-miner-fs vulkan-tools xwayland
Use 'sudo apt autoremove' to remove them.
The following packages will be REMOVED:
  eden
0 upgraded, 0 newly installed, 1 to remove and 95 not upgraded.
1 not fully installed or removed.
After this operation, 0 B of additional disk space will be used.
(Reading database ... 309681 files and directories currently installed.)
Removing eden (0.2.0.rc1-1) ...
Processing triggers for hicolor-icon-theme (0.17-2) ...
Processing triggers for gnome-menus (3.36.0-1.1ubuntu3) ...
Processing triggers for shared-mime-info (2.4-4) ...
Processing triggers for desktop-file-utils (0.27-2build1) ...
fira@Fira ~ % sudo dpkg -i Downloads/Eden-Ubuntu-24.04-v0.2.0-rc1-amd64.deb
Selecting previously unselected package eden.
(Reading database ... 309675 files and directories currently installed.)
Preparing to unpack .../Eden-Ubuntu-24.04-v0.2.0-rc1-amd64.deb ...
Unpacking eden (0.2.0.rc1-1) ...
dpkg: dependency problems prevent configuration of eden:
 eden depends on libglu1-mesa-dev; however:
  Package libglu1-mesa-dev is not installed.
 eden depends on libhidapi-dev; however:
  Package libhidapi-dev is not installed.
 eden depends on libpulse-dev; however:
  Package libpulse-dev is not installed.
 eden depends on libudev-dev; however:
  Package libudev-dev is not installed.
 eden depends on libxext-dev; however:
  Package libxext-dev is not installed.
 eden depends on mesa-common-dev; however:
  Package mesa-common-dev is not installed.
 eden depends on qt6-base-private-dev; however:
  Package qt6-base-private-dev is not installed.
 eden depends on libenet-dev; however:
  Package libenet-dev is not installed.
 eden depends on libsimpleini-dev; however:
  Package libsimpleini-dev is not installed.
 eden depends on libcpp-jwt-dev; however:
  Package libcpp-jwt-dev is not installed.
 eden depends on libfmt-dev; however:
  Package libfmt-dev is not installed.
 eden depends on liblz4-dev; however:
  Package liblz4-dev is not installed.
 eden depends on libzstd-dev; however:
  Package libzstd-dev is not installed.
 eden depends on libavfilter-dev; however:
  Package libavfilter-dev is not installed.
 eden depends on libavcodec-dev; however:
  Package libavcodec-dev is not installed.
 eden depends on libswscale-dev; however:
  Package libswscale-dev is not installed.
 eden depends on libva-dev; however:
  Package libva-dev is not installed.
 eden depends on libvdpau-dev; however:
  Package libvdpau-dev is not installed.
 eden depends on libcpp-httplib-dev; however:
  Package libcpp-httplib-dev is not installed.
 eden depends on libcubeb-dev; however:
  Package libcubeb-dev is not installed.
 eden depends on libvulkan-dev; however:
  Package libvulkan-dev is not installed.
 eden depends on spirv-tools; however:
  Package spirv-tools is not installed.
 eden depends on libusb-1.0-0-dev; however:
  Package libusb-1.0-0-dev is not installed.
 eden depends on libsdl2-dev; however:
  Package libsdl2-dev is not installed.
 eden depends on libqt6core5compat6; however:
  Package libqt6core5compat6 is not installed.
 eden depends on libquazip1-qt6-dev; however:
  Package libquazip1-qt6-dev is not installed.
 eden depends on libopus-dev; however:
  Package libopus-dev is not installed.
 eden depends on qt6-charts-dev; however:
  Package qt6-charts-dev is not installed.
 eden depends on libboost-context-dev; however:
  Package libboost-context-dev is not installed.
 eden depends on libboost-fiber-dev; however:
  Package libboost-fiber-dev is not installed.

dpkg: error processing package eden (--install):
 dependency problems - leaving unconfigured
Processing triggers for shared-mime-info (2.4-4) ...
Processing triggers for gnome-menus (3.36.0-1.1ubuntu3) ...
Processing triggers for desktop-file-utils (0.27-2build1) ...
Processing triggers for hicolor-icon-theme (0.17-2) ...
Errors were encountered while processing:
 eden
```
