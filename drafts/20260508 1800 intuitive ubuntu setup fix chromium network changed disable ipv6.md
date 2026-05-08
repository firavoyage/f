how to remove annoying "network changed" on chromium ubuntu

3:45 AM

To remove the "Network Changed" (`ERR_NETWORK_CHANGED`) error on Chromium in Ubuntu, you can try <mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">enabling a specific internal flag designed to reduce these notifications or addressing common system-level triggers like IPv6 or background virtualization services</mark>. \[[1](https://bugs.chromium.org/p/chromium/issues/detail?id=974711)]

1\. Enable Chromium's Experimental Flag

Chromium has a specific flag that can suppress these sensitive network change notifications. This is often the most direct fix for modern versions. \[[1](https://thorium.rocks/docs/cmdline%5Fflags.html)]

- Open Chromium and go to `chrome://flags`.
- Search for **Reduce IP address change notification**.
- Set it to **Enabled** and restart the browser. \[[1](https://www.reddit.com/r/chrome/comments/17zi2og/macos%5Ferr%5Fnetwork%5Fchanged%5Ferror%5Fconstantly%5Fin%5F119/), [2](https://askubuntu.com/questions/760042/chrome-flickering-on-ubuntu), [3](https://www.reddit.com/r/chrome/comments/17zi2og/macos%5Ferr%5Fnetwork%5Fchanged%5Ferror%5Fconstantly%5Fin%5F119/)]

2\. Disable IPv6 (Common Ubuntu Fix) \[[1](https://www.linuxbabe.com/ubuntu/disable-ipv6-on-ubuntu)]

On Ubuntu, many users find that Chromium’s network stack is overly sensitive to IPv6 address refreshes. Disabling IPv6 often resolves the issue. \[[1](https://stackoverflow.com/questions/44678168/docker-and-chromium-neterr-network-changed), [2](https://askubuntu.com/questions/886107/google-chrome-error-21-neterr-network-changed)]

- **Temporary Test**: Run the following in your terminal to see if it stops the error immediately:\
  bash

<!---->

```
sudo sysctl -w net.ipv6.conf.all.disable_ipv6=1
sudo sysctl -w net.ipv6.conf.default.disable_ipv6=1
```

Use code with caution.

- **Permanent Fix**: If the above works, add those lines to `/etc/sysctl.conf` to keep the setting after reboot. \[[1](https://operavps.com/docs/disable-ipv6-in-linux/), [2](https://linux-audit.com/networking/linux-security-guide-for-hardening-ipv6/), [3](https://stackoverflow.com/questions/44678168/docker-and-chromium-neterr-network-changed)]

3\. Check for Docker or VirtualBox

If you use **Docker** or **VirtualBox**, these tools frequently create and destroy virtual network interfaces, which Chromium interprets as a complete network change. \[[1](https://www.reddit.com/r/Fedora/comments/k0t4ws/chrome%5Fconstantly%5Ferrors%5Fyour%5Fconnection%5Fwas/), [2](https://bugs.chromium.org/p/chromium/issues/detail?id=974711), [3](https://github.com/TibixDev/winboat/issues/588), [4](https://superuser.com/questions/747735/regularly-getting-err-network-changed-errors-in-chrome), [5](https://stackoverflow.com/questions/44678168/docker-and-chromium-neterr-network-changed)]

- **Docker**: Try stopping the Docker service to see if the error persists: `sudo service docker stop`.
- **Container Loops**: Ensure no Docker containers are stuck in a **restart loop**, as every restart can trigger a network event in Ubuntu.
- **Unused Adapters**: Disable any virtual network adapters (like `vboxnet0`) that you aren't currently using. \[[1](https://superuser.com/questions/747735/regularly-getting-err-network-changed-errors-in-chrome), [2](https://www.reddit.com/r/Fedora/comments/k0t4ws/chrome%5Fconstantly%5Ferrors%5Fyour%5Fconnection%5Fwas/), [3](https://stackoverflow.com/questions/44678168/docker-and-chromium-neterr-network-changed), [4](https://askubuntu.com/questions/886107/google-chrome-error-21-neterr-network-changed)]

4\. Clear Browser and DNS Caches \[[1](https://serveravatar.com/fix-err-network-changed-error-in-chrome/)]

Sometimes stale network data causes the browser to "panic" when your IP changes even slightly.

- **Clear Host Cache**: Go to `chrome://net-internals/#dns` and click **Clear host cache**.

- **Flush Ubuntu DNS**: Open your terminal and run:\
  bash

<!---->

```
sudo systemd-resolve --flush-caches
```

Use code with caution.\
\[[1](https://docs.nexthink.com/platform/user-guide/applications/configuring-applications/configuring-web-applications/common-web-application-errors/err%5Fnetwork%5Fchanged), [2](https://wpexperts.io/blog/fix-chrome-net-internals-dns-error/), [3](https://www.cloudways.com/blog/fix-err-network-changed-error/), [4](https://serveravatar.com/fix-err-network-changed-error-in-chrome/), [5](https://www.quora.com/How-do-I-flush-the-DNS-cache-on-Ubuntu)]

5\. Check Physical Stability \[[1](https://www.reddit.com/r/chrome/comments/avdypa/chrome%5Fconstantly%5Ftells%5Fme%5Fa%5Fnetwork%5Fchange%5Fwas/)]

If the error occurs only while on Wi-Fi, your system might be oscillating between different access points or switching between Wi-Fi and Ethernet. \[[1](https://runcloud.io/blog/err%5Fnetwork%5Fchanged)]

- **Wi-Fi Power Management**: In Ubuntu, Wi-Fi power saving can cause the card to momentarily drop, triggering the error.
- **Ethernet Cable**: Ensure your Ethernet cable is seated firmly; a "flickering" physical connection is a frequent culprit. \[[1](https://www.reddit.com/r/eero/comments/vfc0qh/constantly%5Fgetting%5Ferr%5Fnetwork%5Fchanged%5Fon/), [2](https://superuser.com/questions/747735/regularly-getting-err-network-changed-errors-in-chrome)]

Are you currently running **Docker** or a **VPN** while browsing?

- [link](https://www.reddit.com/r/Fedora/comments/k0t4ws/chrome%5Fconstantly%5Ferrors%5Fyour%5Fconnection%5Fwas/)\
  Chrome constantly errors - "Your connection was interrupted"\
  Good grief, I just finally tracked this one down on my Ubuntu 21.10 machine - and it was caused by a docker container (django web ...\
  Reddit
- [link](https://superuser.com/questions/747735/regularly-getting-err-network-changed-errors-in-chrome)\
  Regularly getting ERR\_NETWORK\_CHANGED errors in ...\
  I'm assuming this was happening because I have other virtual network drivers installed (Hyper-V and Virtual Box). To fix it, I jus...\
  Super User
- [link](https://stackoverflow.com/questions/44678168/docker-and-chromium-neterr-network-changed)\
  Docker and Chromium net::ERR\_NETWORK\_CHANGED\
  Disabled IPv6 from my wired Network. Commands: sudo sysctl -w net.ipv6.conf.default.disable\_ipv6=1. sudo sysctl -w net.ipv6.conf.a...\
  Stack Overflow

Show all

i have clash verge

3:47 AM

When using **Clash Verge** on Ubuntu, the "Network Changed" error in Chromium is almost always caused by how the system handles the virtual network interface (TUN) or IPv6 routing. Chromium is extremely sensitive to any changes in the network stack, and Clash Verge triggers these when it updates its routing table or refreshes connections. \[[1](https://10web.io/blog/err%5Fnetwork%5Fchanged-error/), [2](https://itsfoss.com/network-change-detected/)]

1\. The "GVisor" Stack Fix

If you are using **TUN Mode**, switching the TUN stack can resolve compatibility issues that trigger Chromium's network detection.

- Go to **Settings** in Clash Verge.
- Find the **TUN Mode** section.
- Change the **Stack** from `system` or `mixed` to `gvisor`.
- Restart Clash Verge and Chromium. \[[1](https://github.com/zzzgydi/clash-verge/issues/535), [2](https://docs.wannaflix.net/windows/clash-verge-recommended)]

2\. Disable IPv6 (Most Effective Linux Fix)

Chromium frequently detects "network changes" on Linux when IPv6 addresses refresh or conflict with the proxy tunnel. Disabling IPv6 is the most common resolution for this specific environment. \[]

- **Quick Test**: Run these commands in your terminal to see if the error stops:\
  bash

<!---->

```
sudo sysctl -w net.ipv6.conf.all.disable_ipv6=1
sudo sysctl -w net.ipv6.conf.default.disable_ipv6=1
```

Use code with caution.

- **Permanent Fix**: If it works, open `/etc/sysctl.conf` with `sudo nano` and add those two lines to the end of the file. \[[1](https://github.com/brave/brave-browser/issues/5958), [2](https://support.google.com/chrome/thread/51653144/i-keep-getting-err-network-changed-error-message-when-trying-to-access-websites-via-chrome-why?hl=en\&gl=us)]

3\. Switch to TUN Mode (If using System Proxy) \[[1](https://docs.wannaflix.net/windows/clash-verge-recommended)]

If you are currently using the **System Proxy** toggle, Chromium may be seeing a conflict between the system settings and the browser's own proxy handling. \[[1](https://github.com/clash-verge-rev/clash-verge-rev/issues/6529)]

- In Clash Verge, disable **System Proxy**.
- Enable **TUN Mode** instead. This creates a virtual network card that routes _all_ system traffic, which Chromium often handles more gracefully than a manual proxy setting. \[[1](https://docs.wannaflix.net/windows/clash-verge-recommended)]

4\. Adjust Chromium Flags \[[1](https://github.com/NixOS/nixpkgs/issues/477636)]

If the system-level changes don't fully stop the notifications, use Chromium's built-in suppression flag.

- Navigate to `chrome://flags/#reduce-ip-address-change-notification`.
- Set **Reduce IP address change notification** to **Enabled**.
- Relaunch the browser.

Are you using **TUN Mode** or **System Proxy** mode right now?

- [link](https://github.com/zzzgydi/clash-verge/issues/535)\
  Problem with enabling TUN mode of Clash Verge on Majaro ...\
  Replacing sudo with pkexec might be a better choice, because it pops up a window asking permission and allows users in the wheel g...\
  GitHub
- [link](https://docs.wannaflix.net/windows/clash-verge-recommended)\
  Clash Verge (Recommended - WannaFlix\
  If you want to play games with Clash or have all apps go through Clash, you need to use TUN Mode instead of System Proxy \* Go to t...\
  WannaFlix
- [link](https://github.com/clash-verge-rev/clash-verge-rev/issues/6529)\
  \[BUG] System Proxy silently breaks on Wi-Fi network switch\
  Describe the bug. When using System Proxy mode on macOS, switching Wi-Fi networks causes all proxy settings to be silently lost. T...\
  GitHub

Show all

when is the flag introduced. will the permanent ipv6 disable cost me something as a dev?

The `ReduceIPAddressChangeNotification` flag was introduced in **Chromium v124** (April 2024) specifically to address issues where system-level network fluctuations—common with VPNs or virtual interfaces—cause unnecessary browser errors. \[[1](https://github.com/electron/electron/issues/42546), [2](https://chromium.googlesource.com/chromium/src/+/59ce0c9e0f2cabf4ff64ff9de588f1e58ecec593)]

As for disabling IPv6 permanently on Ubuntu, here is the cost breakdown for a developer:

Potential Costs for Developers

- **Inability to Test IPv6-Only Scenarios**: You won't be able to test how your local apps or websites behave on IPv6-only networks, which are becoming the standard for some mobile ISPs.
- **Kubernetes Issues**: If you use Kubernetes locally (e.g., Minikube or Kind), disabling IPv6 can break internal cluster networking, as Kubernetes often relies on its own dual-stack handling.
- **Broken Local Discovery**: Some local development tools or services that use **mDNS** (like `.local` hostnames) or peer-to-peer connectivity may fail or become harder to configure.
- **Modern API Compatibility**: Certain newer web APIs and cloud-native services are optimized for IPv6. While they usually fall back to IPv4, you may occasionally encounter higher latency or "silent" connection failures if the app specifically prefers IPv6. \[[1](https://discuss.privacyguides.net/t/any-security-privacy-downside-to-disabling-ipv6-on-ubuntu/23553), [2](https://www.expressvpn.com/blog/disable-ipv6-for-better-vpn-protection/), [3](https://hostsailor.com/blog/ipv6-disable-ubuntu), [4](https://oneuptime.com/blog/post/2026-03-02-how-to-disable-ipv6-on-ubuntu-when-not-needed/view), [6](https://www.linkedin.com/pulse/should-you-disable-ipv6-why-patching-smarter-move-reza-arya-gohar-qlfac)]

Is it worth it?

For most web developers working in an IPv4-dominant environment, there is **no immediate functional cost** to disabling it; standard tools like Git, Docker (mostly), and common web frameworks will continue to work fine over IPv4. \[[1](https://serverfault.com/questions/880537/disadvantage-of-disabling-ipv6), [2](https://serverfault.com/questions/1045825/is-it-safe-to-disable-ipv6-on-my-debian-server)]

If you want to avoid these "costs" but still fix the Chromium error, try the **Chromium flag first** and see if it stabilizes things without a system-wide IPv6 ban. \[[1](https://github.com/electron/electron/issues/42546)]

Do you often test **locally hosted sites** on other devices on your network?

- [link](https://discuss.privacyguides.net/t/any-security-privacy-downside-to-disabling-ipv6-on-ubuntu/23553)\
  Any security/privacy downside to disabling IPv6 on Ubuntu?\
  Dec 29, 2024 — ignoramous January 1, 2025, 1:59pm 13. If you use P2P apps often, then IPv6 will always get you better connectivity. Otherwise, yo...\
  Privacy Guides Community
- [link](https://serverfault.com/questions/880537/disadvantage-of-disabling-ipv6)\
  Disadvantage of disabling IPv6? - Server Fault\
  Oct 27, 2017 — This doesn't only apply to home / company users behind an on-premises firewall, it also applies to various other scenarios, e.g. I...\
  Server Fault
- [link](https://github.com/electron/electron/issues/42546)\
  ReduceIPAddressChangeNotific...\
  Jun 17, 2024 — Chromium fixed a bug in v124 where network requests on macOS would often fail due to the frequent creation and teardown of network...\
  GitHub

Show all

im exactly on 124. and No matching experiments

The `ReduceIPAddressChangeNotification` flag was specifically introduced and **enabled by default in Chromium v124**. Because it is already active by default in your version, it no longer appears as a searchable "experiment" in `chrome://flags`. \[[1](https://github.com/electron/electron/issues/42546), [2](https://chromium.googlesource.com/chromium/src/+/59ce0c9e0f2cabf4ff64ff9de588f1e58ecec593), [3](https://github.com/electron/electron/issues/42546), [4](https://github.com/win32ss/supermium/issues/838)]

Since the default behavior isn't solving the issue with **Clash Verge**, you'll need to use more surgical methods to stop the interruptions.

1\. The "Dev-Safe" IPv6 Disable \[[1](https://itsfoss.com/network-change-detected/)]

To avoid the "costs" of a permanent system-wide disable, you can disable IPv6 **only for the specific network interface** you are using (e.g., your Wi-Fi or Ethernet card) rather than the whole kernel. This leaves IPv6 available for Docker, Kubernetes, or virtual bridges if you need them later.

- **Identify your interface**: Run `ip link show` (usually `wlan0` or `eth0`).

- **Apply the restriction**:\
  bash

<!---->

```
sudo sysctl -w net.ipv6.conf.[INTERFACE_NAME].disable_ipv6=1
```

Use code with caution.\
_Replace `[INTERFACE_NAME]` with your actual device name._ \[[1](https://chromium.googlesource.com/chromium/src/+/59ce0c9e0f2cabf4ff64ff9de588f1e58ecec593)]

2\. Adjust Clash Verge TUN Stack

If you are using **TUN Mode**, Clash creates a virtual interface that Chromium is likely "detecting" every time a routing rule updates. Switching the internal driver can make this interface more stable:

1. Open **Clash Verge** -> **Settings**.
2. Locate **TUN Mode Settings**.
3. Change **Stack** to `gvisor`. This implementation is often less "noisy" to the Linux kernel's network notifier than the `system` stack.

3\. Launch via Command Line (The Force Fix) \[[1](https://itsfoss.com/network-change-detected/)]

Since the flag is hidden, you can explicitly force Chromium to ignore these notifications by launching it with a specific command-line switch. Close all Chromium instances and run: \[[1](https://github.com/electron/electron/issues/42546)]

bash

```
chromium-browser --disable-features=NetworkChangeNotifier
```

Use code with caution.

_Note: If this works, you can permanently add this flag to your `.desktop` launcher file or your `~/.bashrc` aliases._

Summary of Dev Costs for IPv6

If you do choose a permanent system-wide disable via [GRUB](https://itsfoss.com/network-change-detected/), it is easily reversible. \[[1](https://itsfoss.com/network-change-detected/)]

- **What breaks**: Testing local dual-stack apps, some peer-to-peer discovery protocols (like AirPlay/mDNS equivalents), and certain Kubernetes networking plugins.
- **What stays fine**: Git, standard web dev (React/Node/Go), SSH, and 99% of internet traffic. \[[1](https://forum.vivaldi.net/topic/84874/continuous-error-err%5Fnetwork%5Fchanged)]

**Would you like the steps to modify your `.desktop` file so Chromium always opens with the notifier disabled?**

- [link](https://github.com/electron/electron/issues/42546)\
  ReduceIPAddressChangeNotific...\
  Jun 17, 2024 — mlaurencin. added. 32-x-y. on Jun 26, 2024. github-project-automation. added this to 32-x-y on Jun 26, 2024. github-project-automa...\
  GitHub
- [link](https://chromium.googlesource.com/chromium/src/+/59ce0c9e0f2cabf4ff64ff9de588f1e58ecec593)\
  59ce0c9e0f2cabf4ff64ff9de588f1...\
  May 10, 2024 — Check the primary interface for ReduceIPAddressChangeNotification The ReduceIPAddressChangeNotification flag was introduced and en...\
  Google Open Source
- [link](https://itsfoss.com/network-change-detected/)\
  Chrome Browser Keeps Detecting Network Change in Linux ...\
  Jan 11, 2023 — Step 1: Open GRUB config file for editing. Open the terminal. Now use the following command to edit the GRUB config file in Nano e...\
  It's FOSS

Show all

make it permanent. ~ % ip link show\
1: lo: \<loopback,up,lower\_up> mtu 65536 qdisc noqueue state UNKNOWN mode DEFAULT group default qlen 1000\
link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00\
2: wlp1s0: \<broadcast,multicast,up,lower\_up> mtu 1500 qdisc noqueue state UP mode DORMANT group default qlen 1000\
link/ether 10:6f:d9:9d:4f:91 brd ff:ff:ff:ff:ff:ff\
3: virbr0: \<no-carrier,broadcast,multicast,up> mtu 1500 qdisc noqueue state DOWN mode DEFAULT group default qlen 1000\
link/ether 52:54:00:70:3b:b0 brd ff:ff:ff:ff:ff:ff\
4: br-2d38b086b0b3: \<broadcast,multicast,up,lower\_up> mtu 1500 qdisc noqueue state UP mode DEFAULT group default\
link/ether c6:fe:49:ed:8b:ab brd ff:ff:ff:ff:ff:ff\
5: docker0: \<no-carrier,broadcast,multicast,up> mtu 1500 qdisc noqueue state DOWN mode DEFAULT group default\
link/ether aa:52:93:65:0b:66 brd ff:ff:ff:ff:ff:ff\
6: br-78a1ae864036: \<no-carrier,broadcast,multicast,up> mtu 1500 qdisc noqueue state DOWN mode DEFAULT group default\
link/ether 22:fb:8f:32:2d:03 brd ff:ff:ff:ff:ff:ff\
9: vethecf49e7@if2: \<broadcast,multicast,up,lower\_up> mtu 1500 qdisc noqueue master br-2d38b086b0b3 state UP mode DEFAULT group default\
link/ether 0a:78:34:c6:e0:c4 brd ff:ff:ff:ff:ff:ff link-netnsid 2\
11: veth0202207@if2: \<broadcast,multicast,up,lower\_up> mtu 1500 qdisc noqueue master br-2d38b086b0b3 state UP mode DEFAULT group default\
link/ether 5e:f4:96:dc:fb:46 brd ff:ff:ff:ff:ff:ff link-netnsid 4\
8825: Meta: \<pointopoint,multicast,noarp,up,lower\_up> mtu 9000 qdisc fq\_codel state UNKNOWN mode DEFAULT group default qlen 500\
link/none\</pointopoint,multicast,noarp,up,lower\_up>\</broadcast,multicast,up,lower\_up>\</broadcast,multicast,up,lower\_up>\</no-carrier,broadcast,multicast,up>\</no-carrier,broadcast,multicast,up>\</broadcast,multicast,up,lower\_up>\</no-carrier,broadcast,multicast,up>\</broadcast,multicast,up,lower\_up>\</loopback,up,lower\_up>

To make the fix permanent while protecting your dev environment (Docker and virtual bridges), we will target only your physical Wi-Fi card (`wlp1s0`) and the Clash interface (`Meta`).

By only disabling IPv6 on these two, you stop the Chromium error without breaking the networking for your Docker containers or `lo` (loopback).

1\. Disable IPv6 for specific interfaces

Open the configuration file:

bash

```
sudo nano /etc/sysctl.conf
```

Use code with caution.

Scroll to the bottom and paste these lines:

text

```
# Disable IPv6 on Wi-Fi to stop Chromium Network Changed errors
net.ipv6.conf.wlp1s0.disable_ipv6 = 1

# Disable IPv6 on Clash Verge TUN interface
net.ipv6.conf.Meta.disable_ipv6 = 1
```

Use code with caution.

Save and exit (`Ctrl+O`, `Enter`, `Ctrl+X`), then apply the changes:

bash

```
sudo sysctl -p
```

Use code with caution.

2\. Make the Chromium flag permanent

Since you are on v124 and the flag isn't in the GUI, you need to append the "disable" command to your shortcut.

1. Copy the default launcher to your local folder:\
   bash

<!---->

```
cp /usr/share/applications/chromium-browser.desktop ~/.local/share/applications/
```

Use code with caution.
2\. Edit the local copy:\
bash

```
nano ~/.local/share/applications/chromium-browser.desktop
```

Use code with caution.
3\. Find the line starting with `Exec=` and add the flag. It should look like this:\
`Exec=chromium-browser --disable-features=NetworkChangeNotifier %U`\
_(Note: There are usually 2 or 3 `Exec` lines in the file for different modes; update all of them)._

Why this is the "Dev-Safe" way:

- **Interface 4, 5, 6 (Docker/Bridges):** These are untouched. Your containers can still use IPv6 internally if they need to.
- **Interface 1 (lo):** Loopback remains dual-stack, so local services bound to `::1` won't crash.
- **Chromium:** By disabling the `NetworkChangeNotifier` feature, you're telling the browser to stop listening to the "noise" created when Clash Verge switches nodes or refreshes the `Meta` interface.

**Did the error stop immediately after running `sudo sysctl -p` and restarting Chromium?**