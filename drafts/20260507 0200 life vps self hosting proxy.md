# .

```
ssh username@server_ip
```

_If your VPS uses a non-standard port (e.g., 2222), use:_ `ssh username@server_ip -p 2222`.

1. **Generate Keys**: On your **local** machine, run `ssh-keygen -t rsa -b 4096`.

2. **Copy Public Key**: Use the [ssh-copy-id tool](https://www.cloudpanel.io/tutorial/set-up-ssh-keys-on-ubuntu-20-04/) to send your public key to the VPS:\
   bash

<!---->

```
ssh-copy-id username@server_ip
```


1\. Install 3X-UI on your VPS

Run this command in your SSH terminal. It installs a web dashboard where you can manage your VPN without touching more code: \[[1](https://github.com/MHSanaei/3x-ui), [2](https://www.youtube.com/watch?v=aAy3p7d3O9w)]

bash

```
bash <(curl -Ls https://raw.githubusercontent.com/mhsanaei/3x-ui/master/install.sh)
```

Use code with caution.

- **Setup**: During installation, it will ask for a **username**, **password**, and **port** (e.g., 2053).
- **Access**: Open your browser and go to `http://YOUR_VPS_IP:PORT`. \[[1](https://www.youtube.com/watch?v=aAy3p7d3O9w), [2](https://github.com/aphrco/x-ui/blob/main/README%5FEN.md), [3](https://www.youtube.com/watch?v=ltDxGM0%5F%5FXU)]

2\. Create the VLESS REALITY Connection \[[1](https://www.youtube.com/watch?v=ltDxGM0%5F%5FXU)]

Once in the dashboard:

1. Go to **Inbounds** -> **Add Inbound**.
2. Set **Protocol** to `vless` and **Port** to `443`.
3. Turn on **Reality**.
4. For **Dest**, use a common site like `://microsoft.com` or `://apple.com`.
5. Click **Get New Cert** (this generates your private keys automatically).
6. Click **Add**. \[[1](https://www.reddit.com/r/dumbclub/comments/1powgrs/is%5Fsetting%5Fup%5Fa%5Fselfhosted%5Fvless%5Freality%5Fserver/), [2](https://www.youtube.com/watch?v=aAy3p7d3O9w), [3](https://extravm.com/blog/xray-core-vlessxtls-reality-vpn-server-install-script-ubuntu-2404-lts), [4](https://seakfind.github.io/2021/10/10/X-UI/)]

3\. Connect to Clash Verge

1. In the 3X-UI dashboard, click the **QR code icon** or **Copy link** icon next to your new inbound to get a `vless://` link.
2. Because Clash Verge uses `.yaml` files, the easiest way is to use a "Subconverter" service to turn your `vless://` link into a Clash subscription URL.
3. In **Clash Verge**, go to **Profiles**, paste the converted URL, and click **Import**. \[[1](https://extravm.com/blog/xray-core-vlessxtls-reality-vpn-server-install-script-ubuntu-2404-lts), [2](https://gist.github.com/khizar1556/79915256e3b0c6c11d8b268ffd702dae), [3](https://gist.github.com/StarWishsama/b70f0d327c8d52813aa38f24a9be98af), [4](https://www.youtube.com/watch?v=1oSc5k%5FG79c)]

```
sudo ufw disable
```

#

how to connect my vps via ssh on ubuntu

To connect to your VPS via SSH on Ubuntu, you use the `ssh` command in your terminal. This establishes a secure, encrypted connection to your remote server. \[[1](https://www.cloudpanel.io/tutorial/set-up-ssh-keys-on-ubuntu-20-04/), [2](https://bluevps.com/blog/how-to-install-and-enable-ssh-on-ubuntu), [3](https://www.linkedin.com/pulse/how-connect-your-vps-using-ssh-hostnoc-babde)]

Quick Connection Steps

1. **Open Terminal**: Use the shortcut **Ctrl+Alt+T** on your local Ubuntu machine.

2. **Run SSH Command**: Type the following command, replacing `username` with your VPS username (often `root` or `ubuntu`) and `server_ip` with your VPS's IP address:\
   bash

<!---->

```
ssh username@server_ip
```

Use code with caution.\
_If your VPS uses a non-standard port (e.g., 2222), use:_ `ssh username@server_ip -p 2222`.
3\. **Confirm Authenticity**: If this is your first time connecting, you will see a message about the host's authenticity. Type **yes** and press Enter to continue.
4\. **Enter Password**: Type your VPS password when prompted. **Note:** Characters will not appear on the screen while you type; this is normal. \[[1](https://help.ovhcloud.com/csm/en-dedicated-servers-ssh-introduction?id=kb%5Farticle%5Fview\&sysparm%5Farticle=KB0044021), [2](https://truehost.com/support/how-to-connect-to-vps-via-ssh/), [3](https://www.linkedin.com/pulse/how-connect-your-vps-using-ssh-hostnoc-babde), [4](https://hosting.international/blog/how-to-connect-to-your-linux-server-via-ssh-a-beginners-guide/), [5](https://bluevps.com/blog/how-to-install-and-enable-ssh-on-ubuntu)]

Prerequisites for Connection

Before connecting, ensure your VPS is configured to accept SSH traffic: \[[1](https://1gbits.com/blog/how-to-login-to-vps/)]

- **OpenSSH Server**: Most VPS providers include this by default. If not, you must install it on the **server** using `sudo apt install openssh-server`.
- **Firewall**: Ensure the VPS firewall (like UFW) allows traffic on port 22 (default SSH port) with `sudo ufw allow ssh`.
- **Credentials**: Have your server's IP address and login credentials (username and password/key) ready, which are usually provided in your VPS deployment email. \[[1](https://truehost.com/support/how-to-connect-to-vps-via-ssh/), [2](https://dev.to/jajera/enabling-ssh-in-ubuntu-server-61b), [3](https://bluevps.com/blog/how-to-install-and-enable-ssh-on-ubuntu), [4](https://www.linkedin.com/pulse/how-connect-your-vps-using-ssh-hostnoc-babde), [5](https://solvps.com/how-to-ssh-connect-to-linux-vps-with-windows-mac-linux/)]

Enhanced Security with SSH Keys \[[1](https://alexhost.com/faq/how-to-add-ssh-keys-to-new-or-existing-vps/)]

For better security than passwords, it is recommended to use SSH key-based authentication. \[[1](https://www.cloudpanel.io/tutorial/set-up-ssh-keys-on-ubuntu-20-04/), [2](https://www.linkedin.com/pulse/how-connect-your-vps-using-ssh-hostnoc-babde)]

1. **Generate Keys**: On your **local** machine, run `ssh-keygen -t rsa -b 4096`.

2. **Copy Public Key**: Use the [ssh-copy-id tool](https://www.cloudpanel.io/tutorial/set-up-ssh-keys-on-ubuntu-20-04/) to send your public key to the VPS:\
   bash

<!---->

```
ssh-copy-id username@server_ip
```

Use code with caution.
3\. **Login**: Future logins will now use your key instead of a password. \[[1](https://www.cloudpanel.io/tutorial/set-up-ssh-keys-on-ubuntu-20-04/), [2](https://blackflow.co.uk/entreprise-software-development/linux/complete-guide-secure-ssh-setup-on-your-vps/), [3](https://hosting.international/blog/how-to-connect-to-your-linux-server-via-ssh-a-beginners-guide/), [4](https://www.ssdnodes.com/blog/connecting-vps-ssh-security/), [5](https://www.cloudbolt.io/blog/linux-how-to-login-with-a-ssh-private-key/)]

Would you like to know how to **disable password authentication** entirely for maximum security once your keys are set up?

- [link](https://help.ovhcloud.com/csm/en-dedicated-servers-ssh-introduction?id=kb%5Farticle%5Fview\&sysparm%5Farticle=KB0044021)\
  How to get started with SSH connections - OVHcloud\
  Dec 3, 2024 — Open the command line application (Terminal) and connect to the server with the following command: \* ssh username@server\_IP. If yo...\
  OVHcloud
- [link](https://www.cloudpanel.io/tutorial/set-up-ssh-keys-on-ubuntu-20-04/)\
  How to Set Up SSH Keys on Ubuntu 20.04 | Guide - CloudPanel\
  Steps to Creating SSH Keys on Ubuntu 20.04 \* 1. Create the Key Pair. To create a new SSH key on Linux, run the following command o...\
  CloudPanel
- [link](https://truehost.com/support/how-to-connect-to-vps-via-ssh/)\
  HOW TO CONNECT TO VPS VIA SSH. - - Truehost Cloud\
  HOW TO CONNECT TO VPS VIA SSH. \* Step 2 – Prepare the application. Based on the OS you are using on your laptop or desktop, the ne...\
  truehost.com

Show all

it shows nothing

If you run the `ssh` command and see "nothing" (no error message, but also no prompt for a password), it usually means the connection is hanging or being silently dropped. \[[1](https://linuxcert.guru/blog/?name=how-fix-ssh-connection-hangs), [2](https://linuxconfig.org/how-to-fix-ssh-not-working-on-ubuntu-26-04)]

1\. Check for a Silent Hang (Verbose Mode)

Use **verbose mode** to see exactly where it is getting stuck. Add `-vvv` to your command:

bash

```
ssh -vvv username@server_ip
```

Use code with caution.

- **Stuck at "Connecting to..."**: This is a network or firewall issue. Your computer can't reach the server.
- **Stuck at "Waiting for banner..."**: The connection reached the server, but the SSH service isn't responding. \[[1](https://linuxcert.guru/blog/?name=how-fix-ssh-connection-hangs), [2](https://oneuptime.com/blog/post/2026-03-02-troubleshoot-ssh-connection-refused-errors-ubuntu/view), [3](https://www.rcac.purdue.edu/knowledge/bell/faq/login/errors/sshsessionhangs), [4](https://askubuntu.com/questions/398955/ssh-stopped-working)]

2\. Verify Server Reachability \[[1](https://docs.digitalocean.com/support/how-to-troubleshoot-ssh-connectivity-issues/)]

Test if your computer can "see" the VPS at all using `ping`: \[[1](https://linuxcert.guru/blog/?name=how-fix-ssh-connection-hangs)]

bash

```
ping -c 4 server_ip
```

Use code with caution.

- **If ping fails**: There is a general network issue or the server is completely down.
- **If ping works but SSH hangs**: The server is online, but port 22 is likely blocked by a firewall. \[[1](https://askubuntu.com/questions/398955/ssh-stopped-working), [2](https://linuxcert.guru/blog/?name=how-fix-ssh-connection-hangs), [3](https://oneuptime.com/blog/post/2026-03-02-troubleshoot-ssh-connection-refused-errors-ubuntu/view)]

3\. Check for Common Blocks \[[1](https://oneuptime.com/blog/post/2026-03-02-troubleshoot-ssh-connection-refused-errors-ubuntu/view)]

- **Firewall**: Ensure your VPS provider's control panel (e.g., [DigitalOcean's Firewall](https://docs.digitalocean.com/products/networking/firewalls/), [AWS Security Groups](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/authorizing-access-to-an-instance.html)) has port 22 open.

- **Wrong Port**: Some VPS providers change the default port from **22** to something else for security. Check your welcome email for a specific port number.

- **SSH Not Running**: If you have access to a web-based console in your VPS dashboard, log in there and check the service status:\
  bash

<!---->

```
sudo systemctl status ssh
```

Use code with caution.\
\[[1](https://repost.aws/questions/QUAB0em54XSyKE-7QJ8kAKcw/blank-screen-on-web-based-ssh-console-and-terminal-ssh), [2](https://oneuptime.com/blog/post/2026-03-02-troubleshoot-ssh-connection-refused-errors-ubuntu/view), [3](https://www.reddit.com/r/linuxquestions/comments/yyrb8s/suddenly%5Fcant%5Fssh%5Finto%5Flinux%5Fserver/), [4](https://docs.digitalocean.com/support/how-to-troubleshoot-ssh-connectivity-issues/), [5](https://linuxconfig.org/how-to-fix-ssh-not-working-on-ubuntu-26-04)]

4\. Ensure SSH Client is Installed \[[1](https://www.youtube.com/watch?v=F1%5FfkOYgu8g)]

In rare cases, if you type `ssh` and get no output at all (not even "command not found"), check if it's properly installed: \[[1](https://stackoverflow.com/questions/47079224/how-do-i-check-if-openssh-is-installed-on-ubuntu), [2](https://www.youtube.com/watch?v=F1%5FfkOYgu8g)]

bash

```
ssh -V
```

Use code with caution.

This should return the version number (e.g., `OpenSSH_9.6p1`).

Do you have access to a **web console** through your VPS provider's website to check the server status directly?

- [link](https://repost.aws/questions/QUAB0em54XSyKE-7QJ8kAKcw/blank-screen-on-web-based-ssh-console-and-terminal-ssh)\
  Blank screen on web based SSH console and terminal SSH\
  May 22, 2025 — The issue you're experiencing with the black screen on the web-based SSH console and the connection timeout in the terminal is a c...\
  AWS re:Post
- [link](https://www.reddit.com/r/linuxquestions/comments/yyrb8s/suddenly%5Fcant%5Fssh%5Finto%5Flinux%5Fserver/)\
  Suddenly can't ssh into linux server : r/linuxquestions - Reddit\
  Nov 18, 2022 — Comments Section \* beeritis. • 4y ago. Quick fix : reboot it. Sure that'll probably resolve it but like others above said make sur...\
  Reddit·r/linuxquestions
- [link](https://docs.digitalocean.com/support/how-to-troubleshoot-ssh-connectivity-issues/)\
  How to Troubleshoot SSH Connectivity Issues\
  Mar 18, 2026 — If you've decided that troubleshooting is right for your situation, go through the following steps: \* Check the control panel. Bef...\
  DigitalOcean Docs

Show all

Connection closed by

The message `Connection closed by [IP Address]` (or `ssh_exchange_identification: Connection closed by remote host`) usually means the server's SSH daemon (sshd) rejected your connection before the login prompt could even appear. \[[1](https://serverfault.com/questions/1093505/sshd-difference-between-connection-closed-and-disconnected-from-in-lo), [2](https://builtin.com/articles/ssh-connection-refused)]

This "early rejection" often happens for the following reasons:

1\. Too Many Failed Attempts (Fail2Ban) \[[1](https://superuser.com/questions/100525/connection-closed-by-remote-host)]

If you tried a wrong password several times, the server's security software (like **Fail2Ban**) may have automatically banned your IP address. \[[1](https://unix.stackexchange.com/questions/19378/ssh-server-reasons-for-sudden-connection-closed-by-remote-host), [2](https://askubuntu.com/questions/739164/ssh-connection-refused)]

- **Fix:** Try connecting from a different network (like a mobile hotspot) to see if you can reach the login prompt. If that works, your primary IP is banned. \[[1](https://linuxconfig.org/sshexchangeidentification-connection-closed-by-remote-host), [2](https://support.remote.it/hc/en-us/articles/360016240431-ssh-exchange-identification-Connection-closed-by-remote-host)]

2\. SSH Access Denied (TCP Wrappers) \[[1](https://superuser.com/questions/772239/connection-closed-by-server-ip)]

Your server might have security files (`/etc/hosts.deny` or `/etc/hosts.allow`) configured to block all IP addresses except those explicitly allowed. \[[1](https://superuser.com/questions/772239/connection-closed-by-server-ip)]

- **Fix:** Check with your VPS provider’s support or documentation to see if they have a "default deny" policy for new servers. \[[1](https://clientarea.emwd.com/knowledgebase/94/Unable-to-SSH----Connection-closed-by-remote-host.html)]

3\. Server-Side Resource Exhaustion

The server may be under a "brute-force" attack from bots, filling up all available connection slots. \[[1](https://unix.stackexchange.com/questions/19378/ssh-server-reasons-for-sudden-connection-closed-by-remote-host), [2](https://unix.stackexchange.com/questions/102502/meaning-of-connection-closed-by-xxx-preauth-in-sshd-logs)]

- **Fix:** Use your VPS provider's **Web Console** (a browser-based terminal in their dashboard) to log in and restart the SSH service:\
  bash

<!---->

```
sudo systemctl restart ssh
```

Use code with caution.

4\. Incorrect Permissions on Server \[[1](https://usdkb.sandiego.edu/s/article/How-to-troubleshoot-SSH-connections), [2](https://vsys.host/how-to/how-to-resolve-common-ssh-connection-issues)]

SSH is very strict about security. If the permissions on your server's home directory or `.ssh` folder are too "open" (e.g., world-writable), the server will refuse to connect for safety. \[[1](https://docs.digitalocean.com/support/how-to-troubleshoot-ssh-authentication-issues/), [2](https://usdkb.sandiego.edu/s/article/How-to-troubleshoot-SSH-connections)]

- **Required Settings:**
  - **Home Directory**: `chmod 755 ~`
  - **SSH Folder**: `chmod 700 ~/.ssh`
  - **Authorized Keys**: `chmod 600 ~/.ssh/authorized_keys` \[[1](https://usdkb.sandiego.edu/s/article/How-to-troubleshoot-SSH-connections)]

5\. Host Identification Change

If you recently reinstalled your VPS, your local machine may still have the "old" server key saved.

- **Fix:** Clear the old key from your local machine with this command:\
  bash

<!---->

```
ssh-keygen -R your_server_ip
```

Use code with caution.

Does the error appear **instantly** after you run the command, or does it take a few seconds?

- [link](https://usdkb.sandiego.edu/s/article/How-to-troubleshoot-SSH-connections)\
  How to troubleshoot SSH connections - University of San Diego\
  Verify that the permissions are correct on the destination system. \* SSH is extremely sensitive to permissions. \* The $HOME direct...\
  University of San Diego
- [link](https://superuser.com/questions/772239/connection-closed-by-server-ip)\
  Connection closed by \[SERVER\_IP] - ssh - Super User\
  Jun 23, 2014 — There are several things you could check: \* Check for access lists/other security controls in /etc/ssh/sshd\_config. \* Check TCP wr...\
  Super User
- [link](https://unix.stackexchange.com/questions/19378/ssh-server-reasons-for-sudden-connection-closed-by-remote-host)\
  ssh server: reasons for sudden "Connection closed by remote ...\
  Aug 25, 2011 — This is a normal situation if multiple clients try to authenticate in the same time. This is configured by the MaxStartups option ...\
  Unix & Linux Stack Exchange

Show all

why it does not work with clash verge

Clash Verge and other proxy clients often cause SSH connections to fail because <mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">standard <strong>System Proxy</strong> settings in Linux typically only handle HTTP/HTTPS traffic</mark>, leaving TCP protocols like SSH in a "half-redirected" state that servers reject for security reasons. \[[1](https://www.youtube.com/watch?v=M3HWlnyP%5FmI), [2](https://support.remote.it/hc/en-us/articles/360016240431-ssh-exchange-identification-Connection-closed-by-remote-host)]

Why it Fails

- **Protocol Interference:** SSH handshakes on port 22 are often terminated or reset when forced through a SOCKS5 proxy that isn't configured for full TCP passthrough.
- **IP Latching Security:** Many servers detect two different source IP addresses (your real IP and the proxy IP) during the handshake and close the connection as a "Security Violation".
- **DNS Hijacking:** If Clash Verge is intercepting DNS, it might resolve your VPS hostname to an incorrect IP internal to the proxy network. \[[1](https://github.com/clash-verge-rev/clash-verge-rev/issues/3286), [2](https://support.remote.it/hc/en-us/articles/360016240431-ssh-exchange-identification-Connection-closed-by-remote-host), [4](http://www.csl.cool/2026/01/12/clash-verge-advanced-configuration/)]

How to Fix It

You have two main options to resolve this:

Option 1: Enable TUN Mode (Recommended) \[[1](https://www.reddit.com/r/linuxquestions/comments/1m3zl45/why%5Fis%5Fit%5Fsuch%5Fa%5Fpain%5Fin%5Fthe%5Fass%5Fto%5Fuse%5Fproxy%5Fon/)]

TUN mode creates a virtual network interface that handles all traffic at the IP level, making it much more compatible with SSH than the standard System Proxy. \[[1](https://01.me/en/2025/12/clash-verge-tun-vless/), [2](https://www.youtube.com/watch?v=1oSc5k%5FG79c)]

1. Open **Clash Verge**.
2. Go to the **Settings** or **General** tab.
3. Find and toggle on **TUN Mode**.
4. (On Ubuntu) You may need to run Clash Verge as **sudo** or with administrator privileges for TUN mode to create the network interface. \[[1](https://01.me/en/2025/12/clash-verge-tun-vless/), [2](https://www.reddit.com/r/linuxquestions/comments/1m3zl45/why%5Fis%5Fit%5Fsuch%5Fa%5Fpain%5Fin%5Fthe%5Fass%5Fto%5Fuse%5Fproxy%5Fon/)]

Option 2: Configure SSH to Use the Proxy Specifically

Instead of letting the system proxy handle it, tell SSH exactly how to talk to Clash using a `ProxyCommand`. \[, [2](https://github.com/clash-verge-rev/clash-verge-rev/issues/3558)]

1. Open your local SSH config file: `nano ~/.ssh/config`.

2. Add the following block (assuming Clash is on its default port `7890`):\
   bash

<!---->

```
Host *
    ProxyCommand nc -X 5 -x 127.0.0.1:7890 %h %p
```

Use code with caution.
3\. Save and try your SSH command again. This uses the `nc` (netcat) tool to tunnel the connection correctly through the SOCKS5 proxy. \[[1](https://github.com/clash-verge-rev/clash-verge-rev/issues/3558)]

Community Insight

Users have noted that SSH stability can be inconsistent when using proxies: \[[1](https://github.com/clash-verge-rev/clash-verge-rev/issues/2968)]

“SSH connection often disconnects, but there is no problem when not using a proxy.”

[GitHub · 1 year ago](https://github.com/clash-verge-rev/clash-verge-rev/issues/2968#:~:text=SSH%20connection%20often%20disconnects%2C%20but%20there%20is%20no%20problem%20when%20not%20using%20a%20proxy.)

**Are you able to reach the VPS login prompt if you temporarily turn off Clash Verge entirely?**

- [link](https://www.reddit.com/r/linuxquestions/comments/1m3zl45/why%5Fis%5Fit%5Fsuch%5Fa%5Fpain%5Fin%5Fthe%5Fass%5Fto%5Fuse%5Fproxy%5Fon/)\
  Why is it such a pain in the ass to use proxy on linux? - Reddit\
  Jul 19, 2025 — I wasted like 10 hours today trying to find a solution and you're saying I don't look very hard?? You just showed me that whats Wr...\
  Reddit·r/linuxquestions
- [link](https://github.com/clash-verge-rev/clash-verge-rev/issues/3286)\
  \[BUG] git ssh无法使用SOCKS链接Github #3286\
  Apr 9, 2025 — The fact that nc works but ssh fails suggests protocol-level interference or misrouting. There are no firewall or network blocks a...\
  GitHub
- [link](https://www.youtube.com/watch?v=M3HWlnyP%5FmI)\
  How to Setup Clash VPN and Configure Proxies (Mac ...\
  Dec 15, 2025 — in this video you will get to know how to install Clash X or Clash Pro or ClashVPN on Mac OS subscribe to Nodes and Proxies. and u...\
  6:48\
  YouTube·AttiqueStic

Show all

i already have tun mode on ubuntu.

Something went wrong and the content wasn't generated.

i already have tun mode on ubuntu.

Something went wrong and the content wasn't generated.

i already have tun mode on ubuntu.

If **TUN mode** is enabled on Ubuntu and you still get "Connection closed," it usually means Clash is still capturing the SSH traffic but the handshake is failing because the remote server detects a "mismatch" between your real IP and the proxy IP, or the proxy itself is terminating the connection. \[[1](https://github.com/clash-verge-rev/clash-verge-rev/issues/2968), [2](https://support.remote.it/hc/en-us/articles/360016240431-ssh-exchange-identification-Connection-closed-by-remote-host), [3](https://www.linkedin.com/pulse/error-kexexchangeidentification-connection-closed-remote-harsh-sharma-7wtpc)]

To fix this, you need to tell Clash Verge to **bypass** (ignore) your VPS's IP address so that it uses your direct local internet connection instead of the proxy tunnel. \[[1](https://4xpl0r3r.com/Experience/Deal-with-the-network-issue-of-UDP-services-with-Clash-TUN-mode-enabled/), [2](https://github.com/MetaCubeX/mihomo/issues/2617)]

1\. Add your VPS IP to the Bypass List

The most effective way is to exclude your VPS IP from the TUN interface's routing. \[[1](https://4xpl0r3r.com/Experience/Deal-with-the-network-issue-of-UDP-services-with-Clash-TUN-mode-enabled/)]

1. Open **Clash Verge**.
2. Go to **Settings** > **Clash Settings**.
3. Find the **Bypass** or **Skip Proxy** section.
4. Add your VPS IP address (e.g., `1.2.3.4`) or the entire subnet (e.g., `1.2.3.0/24`) to the list.
5. **Save** and **Restart** Clash Verge to apply the new routing rules. \[[1](https://4xpl0r3r.com/Experience/Deal-with-the-network-issue-of-UDP-services-with-Clash-TUN-mode-enabled/), [2](https://github.com/clash-verge-rev/clash-verge-rev/issues/4431)]

2\. Configure TUN "Route Exclude" (Advanced)

If the bypass list doesn't work, you can explicitly tell the Clash core to ignore specific addresses in your configuration file. \[[1](https://4xpl0r3r.com/Experience/Deal-with-the-network-issue-of-UDP-services-with-Clash-TUN-mode-enabled/), [2](https://github.com/MetaCubeX/mihomo/issues/2617)]

1. Edit your active profile (Right-click profile > **Edit as Text**).

2. In the `tun:` section, add the `inet4-route-exclude-address` field:\
   yaml

<!---->

```
tun:
  enable: true
  stack: system # or gvisor
  auto-route: true
  inet4-route-exclude-address:
    - 1.2.3.4/32  # REPLACE with your VPS IP
```

Use code with caution.
3\. **Save** and update the profile. \[[1](https://4xpl0r3r.com/Experience/Deal-with-the-network-issue-of-UDP-services-with-Clash-TUN-mode-enabled/)]

3\. Clear Local Conflict (Known Hosts)

Sometimes "Connection closed" is caused by a corrupted host key on your local machine that Clash's routing makes worse. \[[1](https://www.budgetvm.com/kb/connection-closed-by-remote-host/), [2](https://linuxconfig.org/sshexchangeidentification-connection-closed-by-remote-host)]

- Run: `ssh-keygen -R [your_vps_ip]` to clear any old identification. \[[1](https://www.budgetvm.com/kb/connection-closed-by-remote-host/), [2](https://linuxconfig.org/sshexchangeidentification-connection-closed-by-remote-host)]

4\. Check for SSH Timeout \[[1](https://www.youtube.com/watch?v=kFYqJC8cXR0\&t=15)]

Proxies often close "idle" connections very quickly. If you connect but it drops almost immediately, try forcing the connection to stay alive: \[[1](https://www.youtube.com/watch?v=kFYqJC8cXR0\&t=15)]

bash

```
ssh -o "ServerAliveInterval 60" username@server_ip
```

Use code with caution.

If you **disable Clash Verge entirely**, does the SSH connection work immediately, or do you still see the same error?

- [link](https://4xpl0r3r.com/Experience/Deal-with-the-network-issue-of-UDP-services-with-Clash-TUN-mode-enabled/)\
  Deal with the network issue of UDP services with Clash TUN ...\
  Feb 29, 2024 — Solve it. Now we have located the root cause - UDP service outgoing traffic flow through the TUN NIC, which made the source port c...\
  4xpl0r3r.com
- [link](https://www.youtube.com/watch?v=kFYqJC8cXR0\&t=15)\
  SSH Tutorial | Fix ssh connection timeout or broken pipe\
  Jun 24, 2025 — have you ever experienced having SSH connection timeout when you're connecting to a server. like after a minute or few without int...\
  2m\
  YouTube·Autodidact Space
- [link](https://www.budgetvm.com/kb/connection-closed-by-remote-host/)\
  connection closed by remote host - BudgetVM\
  Jul 5, 2022 — Here's a snippet to get a sense of what the error looks like. \* The error stops you right in your tracks from logging into the rem...\
  BudgetVM

Show all

how to let ssh remember my password

Standard SSH does not have a "remember password" feature because it is considered a security risk. Instead, the standard way to achieve passwordless login on Ubuntu is by using **SSH Keys**. \[[1](https://askubuntu.com/questions/46930/how-can-i-set-up-password-less-ssh-login), [2](https://serverfault.com/questions/836061/remember-ssh-password-after-once-entered-without-ssh-keys), [3](https://hpc-discourse.usc.edu/t/how-to-set-up-ssh-keys-for-faster-login-w-o-password/128), [4](https://www.hostzealot.com/blog/how-to/streamlined-two-step-passwordless-ssh-setup-on-ubuntu), [5](https://sh.readthedocs.io/en/latest/tutorials/interacting%5Fwith%5Fprocesses.html)]

1\. The Standard Way: SSH Keys (Best Practice) \[[1](https://www.youtube.com/watch?v=fgaFm%5FGyEUo)]

This method replaces your password with a secure cryptographic key pair. \[[1](https://www.portnox.com/cybersecurity-101/authentication/ssh-passwordless-login/), [2](https://linuxize.com/post/how-to-setup-passwordless-ssh-login/)]

1. **Generate a Key Pair**: On your local machine, run:\
   bash

<!---->

```
ssh-keygen -t rsa -b 4096
```

Use code with caution.\
Press **Enter** to accept all defaults. When asked for a passphrase, you can leave it empty for true passwordless login.
2\. **Copy the Key to your VPS**: Run the following, replacing your details:\
bash

```
ssh-copy-id username@server_ip
```

Use code with caution.\
Enter your VPS password one last time.
3\. **Log In**: You can now connect simply by typing `ssh username@server_ip` without being prompted for a password. \[[1](https://superuser.com/questions/8077/how-do-i-set-up-ssh-so-i-dont-have-to-type-my-password), [2](https://www.youtube.com/watch?v=j2vBT3T79Pg\&t=138), [3](https://www.strongdm.com/blog/ssh-passwordless-login), [4](https://www.ssh.com/academy/ssh/copy-id), [5](https://askubuntu.com/questions/46930/how-can-i-set-up-password-less-ssh-login)]

2\. The Scripting Way: `sshpass` (Not Recommended for Security) \[[1](https://serverfault.com/questions/836061/remember-ssh-password-after-once-entered-without-ssh-keys)]

If you must use your actual password, you can use a utility called `sshpass` to provide it automatically. **Caution:** This stores your password in plain text, which is visible to other users on your system. \[[1](https://askubuntu.com/questions/786879/remember-ssh-passphrase-until-user-logs-off), [2](https://manpages.ubuntu.com/manpages/xenial/man1/sshpass.1.html), [3](https://www.redhat.com/fr/blog/ssh-automation-sshpass), [4](https://serverfault.com/questions/836061/remember-ssh-password-after-once-entered-without-ssh-keys)]

1. **Install sshpass**: `sudo apt install sshpass`.

2. **Connect**:\
   bash

<!---->

```
sshpass -p 'YOUR_PASSWORD' ssh username@server_ip
```

Use code with caution.
3\. **Alias it**: To "remember" it for future sessions, add an alias to your `~/.bashrc` file:\
bash

```
alias myvps="sshpass -p 'YOUR_PASSWORD' ssh username@server_ip"
```

Use code with caution.\
\[[1](https://askubuntu.com/questions/786879/remember-ssh-passphrase-until-user-logs-off), [2](http://www.micheledallatorre.it/blog/2009/01/10/how-to-save-ssh-passwords-in-terminal-on-linux-ubuntu/)]

3\. Session Re-use: SSH Multiplexing

If you just want to avoid re-entering your password during a single active session, you can use **SSH Multiplexing** to reuse an existing connection. Add this to your local `~/.ssh/config` file: \[[1](https://serverfault.com/questions/841831/ssh-ask-password-once-reuse-password-until-timeout-finishes)]

bash

```
Host *
    ControlMaster auto
    ControlPath ~/.ssh/sockets/%r@%h:%p
    ControlPersist 600
```

Use code with caution.

This keeps the first connection open in the background for 10 minutes (600 seconds) so subsequent logins to the same server don't ask for a password. \[[1](https://serverfault.com/questions/841831/ssh-ask-password-once-reuse-password-until-timeout-finishes)]

Would you like to see how to create an **SSH config file** to give your VPS a short nickname so you don't have to type the IP address every time?

- [link](https://superuser.com/questions/8077/how-do-i-set-up-ssh-so-i-dont-have-to-type-my-password)\
  How do I set up SSH so I don't have to type my password?\
  Jul 18, 2009 — Upload the public key to the remote server. Again, seahorse can often do that for you - in My Personal Keys, right-click on your S...\
  Super User
- [link](https://www.youtube.com/watch?v=j2vBT3T79Pg\&t=138)\
  How to SSH Without a Password (like a boss)\
  Mar 10, 2021 — so let's get back out of there we don't want to be able we don't want to have to type in the password. so let's generate that publ...\
  51s\
  YouTube·Tony Teaches Tech
- [link](https://askubuntu.com/questions/46930/how-can-i-set-up-password-less-ssh-login)\
  How can I set up password-less SSH login? - Ask Ubuntu\
  Jun 4, 2011 — Explanation. This assumes you already can successfully connect to your server via SSH. You'll need to generate an SSH Keypair whic...\
  Ask Ubuntu

Show all

#

i already have a vps connected by ssh. i want to download something from github and make it work as a vpn i could put into clash verge.

11:24 AM

To set up a VPN on your VPS that works with **Clash Verge**, you should use protocols supported by its core (Mihomo/Clash Meta), such as **VLESS with REALITY**, **Shadowsocks**, or **Hysteria2**. \[[1](https://github.com/clash-verge-rev/clash-verge-rev/blob/dev/docs/README%5Fen.md), [2](https://www.youtube.com/watch?v=1oSc5k%5FG79c), [3](https://github.com/topics/clash-verge-rev?l=dart)]

1\. Install a Proxy Server on your VPS \[[1](https://gist.github.com/justiceformahsa/f440307c83ffe1679074dbf691ca7e54)]

The most reliable way is to use an automated script from GitHub to install **Xray-core** (for VLESS/Shadowsocks) or **Hysteria2**.

- **Option A: Xray-core (VLESS + REALITY)**\
  This is highly recommended for stability and bypassing restrictions. Run this command in your SSH terminal:\
  bash

<!---->

```
bash <(curl -Ls https://raw.githubusercontent.com/v2fly/fhs-install-v2ray/master/install-release.sh)
```

Use code with caution.\
Alternatively, many users use a comprehensive script like [X-UI](https://github.com/vaxilu/x-ui) which provides a web dashboard to manage your VPN.

- **Option B: Hysteria2**\
  Known for extreme speed on high-latency connections. You can install it using their official script:\
  bash

<!---->

```
bash <(curl -fsSL https://hysteria.network)
```

Use code with caution.\
\[[1](https://gist.github.com/khizar1556/79915256e3b0c6c11d8b268ffd702dae), [2](https://gist.github.com/justiceformahsa/9c746f95ed067cdfdccea1f16c37d47a), [3](https://www.youtube.com/watch?v=ltDxGM0%5F%5FXU), [4](https://www.youtube.com/watch?v=1oSc5k%5FG79c)]

2\. Get your Connection Details

After installation, the script or dashboard will provide a **sharing link** (e.g., `vless://...` or `hysteria2://...`). Copy this link. \[[1](https://github.com/piephai/V2Ray), [2](https://gist.github.com/justiceformahsa/9c746f95ed067cdfdccea1f16c37d47a)]

3\. Add to Clash Verge \[[1](https://docs.wannaflix.net/windows/clash-verge-recommended)]

Clash Verge typically requires a `.yaml` configuration file rather than a raw link. \[[1](https://www.youtube.com/watch?v=4zrkYjbifGE), [2](https://docs.wannaflix.net/windows/clash-verge-recommended)]

1. **Use a Subconverter**: Use a tool like [SubConverter](https://github.com/tindy2013/subconverter) to turn your sharing link into a Clash subscription URL.
2. **Import to Clash Verge**:

- Open Clash Verge.
- Go to the **Profiles** tab.
- Paste your converted subscription URL into the "Profile URL" box and click **Import**.
- Select the newly created profile to activate it. \[[1](https://github.com/zzzgydi/clash-verge/issues/760), [3](https://docs.wannaflix.net/windows/clash-verge-recommended), [4](https://www.youtube.com/watch?v=4zrkYjbifGE)]

4\. Enable the VPN \[[1](https://gist.github.com/lockness-Ko/6ae573d507cb4787d7275ad85d577563)]

- Go to the **Proxies** tab and select your server.
- Toggle on **System Proxy** or **TUN Mode** (recommended for gaming/full system traffic) in the settings. \[[1](https://www.youtube.com/watch?v=1oSc5k%5FG79c), [2](https://docs.wannaflix.net/windows/clash-verge-recommended)]

**Tip**: If you are in a region with heavy internet censorship, prioritize **VLESS + REALITY** protocols as they are harder to detect. \[[1](https://gist.github.com/khizar1556/79915256e3b0c6c11d8b268ffd702dae), [2](https://github.com/piephai/V2Ray), [3](https://www.youtube.com/watch?v=1oSc5k%5FG79c)]

Do you need help **generating the specific YAML configuration** for your server details?

- [link](https://github.com/clash-verge-rev/clash-verge-rev/blob/dev/docs/README%5Fen.md)\
  clash-verge-rev/docs/README\_en.md at dev - GitHub\
  Built on high-performance Rust with the Tauri 2 framework. Ships with the embedded Clash.Meta (mihomo) core and supports switching...\
  GitHub
- [link](https://gist.github.com/justiceformahsa/9c746f95ed067cdfdccea1f16c37d47a)\
  Secure VPN Setup Guide - for Iranians, Chinese, Russians, etc.\
  3\. Install the VPN on the server \* 3.1 (Windows) Connect to Server. Skip to below step if using MacOS or Linux. On windows, instal...\
  Gist
- [link](https://docs.wannaflix.net/windows/clash-verge-recommended)\
  Clash Verge (Recommended - WannaFlix\
  This means it can run games without needing additional software. \* STEP 1: Download and install Clash Verge. Version: v2. 4.7. Cli...\
  WannaFlix

Show all

pick one for me

If you want a single, reliable recommendation for a private VPN on your VPS, go with **VLESS with REALITY** managed by **3X-UI**. \[[1](https://github.com/MHSanaei/3x-ui), [2](https://seakfind.github.io/2021/10/10/X-UI/)]

It is currently the "gold standard" for personal use because it is extremely hard for firewalls to detect and requires almost no manual coding. \[[1](https://extravm.com/blog/xray-core-vlessxtls-reality-vpn-server-install-script-ubuntu-2404-lts), [2](https://www.youtube.com/watch?v=4TYffXhDYTo\&t=66), [3](https://pinggy.io/blog/top%5F5%5Fbest%5Fself%5Fhosted%5Fvpns/)]

1\. Install 3X-UI on your VPS

Run this command in your SSH terminal. It installs a web dashboard where you can manage your VPN without touching more code: \[[1](https://github.com/MHSanaei/3x-ui), [2](https://www.youtube.com/watch?v=aAy3p7d3O9w)]

bash

```
bash <(curl -Ls https://raw.githubusercontent.com/mhsanaei/3x-ui/master/install.sh)
```

Use code with caution.

- **Setup**: During installation, it will ask for a **username**, **password**, and **port** (e.g., 2053).
- **Access**: Open your browser and go to `http://YOUR_VPS_IP:PORT`. \[[1](https://www.youtube.com/watch?v=aAy3p7d3O9w), [2](https://github.com/aphrco/x-ui/blob/main/README%5FEN.md), [3](https://www.youtube.com/watch?v=ltDxGM0%5F%5FXU)]

2\. Create the VLESS REALITY Connection \[[1](https://www.youtube.com/watch?v=ltDxGM0%5F%5FXU)]

Once in the dashboard:

1. Go to **Inbounds** -> **Add Inbound**.
2. Set **Protocol** to `vless` and **Port** to `443`.
3. Turn on **Reality**.
4. For **Dest**, use a common site like `://microsoft.com` or `://apple.com`.
5. Click **Get New Cert** (this generates your private keys automatically).
6. Click **Add**. \[[1](https://www.reddit.com/r/dumbclub/comments/1powgrs/is%5Fsetting%5Fup%5Fa%5Fselfhosted%5Fvless%5Freality%5Fserver/), [2](https://www.youtube.com/watch?v=aAy3p7d3O9w), [3](https://extravm.com/blog/xray-core-vlessxtls-reality-vpn-server-install-script-ubuntu-2404-lts), [4](https://seakfind.github.io/2021/10/10/X-UI/)]

3\. Connect to Clash Verge

1. In the 3X-UI dashboard, click the **QR code icon** or **Copy link** icon next to your new inbound to get a `vless://` link.
2. Because Clash Verge uses `.yaml` files, the easiest way is to use a "Subconverter" service to turn your `vless://` link into a Clash subscription URL.
3. In **Clash Verge**, go to **Profiles**, paste the converted URL, and click **Import**. \[[1](https://extravm.com/blog/xray-core-vlessxtls-reality-vpn-server-install-script-ubuntu-2404-lts), [2](https://gist.github.com/khizar1556/79915256e3b0c6c11d8b268ffd702dae), [3](https://gist.github.com/StarWishsama/b70f0d327c8d52813aa38f24a9be98af), [4](https://www.youtube.com/watch?v=1oSc5k%5FG79c)]

**Why this one?**

- **Invisible**: Your traffic looks like normal web browsing to sites like Microsoft.
- **Simple**: No need to buy a domain or manage SSL certificates yourself.
- **Fast**: It uses the modern Xray-core, which is faster and lighter than older OpenVPN or WireGuard setups. \[[1](https://www.reddit.com/r/dumbclub/comments/1powgrs/is%5Fsetting%5Fup%5Fa%5Fselfhosted%5Fvless%5Freality%5Fserver/), [2](https://extravm.com/blog/xray-core-vlessxtls-reality-vpn-server-install-script-ubuntu-2404-lts), [3](https://thebestvpn.com/pptp-l2tp-openvpn-sstp-ikev2-protocols/), [4](https://surfshark.com/blog/vpn-protocols?srsltid=AfmBOopyzttWAfRO9HTRreV0p5vAKvVWDyN-SE%5Fubo1r2a7IkudSj2sr)]

Would you like help **converting that VLESS link** into the specific format Clash Verge needs?

- [link](https://www.reddit.com/r/dumbclub/comments/1powgrs/is%5Fsetting%5Fup%5Fa%5Fselfhosted%5Fvless%5Freality%5Fserver/)\
  Is setting up a self-hosted VLESS + Reality server on a cheap ...\
  Dec 17, 2025 — Is setting up a self-hosted VLESS + Reality server on a cheap VPS really this simple? I've been reading a ton here and finally dec...\
  Reddit·r/dumbclub
- [link](https://github.com/MHSanaei/3x-ui)\
  GitHub - MHSanaei/3x-ui: Xray panel supporting multi ...\
  Nov 1, 2025 — Release · Build GO Version Downloads · License · Go Reference · Go Report Card. 3X-UI — advanced, open-source web-based control pa...\
  GitHub
- [link](https://seakfind.github.io/2021/10/10/X-UI/)\
  X-UI, a multi-user Xray graphical management panel ...\
  Oct 10, 2021 — Preparation. Update Server. Install Acme Script. Get Free SSL Certificate. Run the X-UI Install Script. Common Panel Commands. Fir...\
  seakfind

Show all

#

how to convert a vless link to a subscription url

Converting a single VLESS link (`vless://...`) into a subscription URL involves <mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">hosting the link in a format that VPN clients can periodically "pull" from</mark>. A subscription URL is essentially just a plain text file (often Base64 encoded) hosted on a web server. \[[1](https://github.com/NoisyCake/3x-ui%5Fsubscriptions%5Faggregator), [2](https://github.com/tindy2013/subconverter), [3](https://xray-checker.kutovoy.dev/configuration/subscription/)]

Option 1: Use a Subscription Converter (Easiest) \[[1](https://www.raycast.com/JakeYu/update-clash-subscription)]

Online converters can take your raw VLESS link and generate a subscription link compatible with various clients (like Clash, Shadowrocket, or v2rayN).

- **SubConverter**: A popular open-source tool. You can use public instances like [SubConverter Web UI](https://subconverter-rs.netlify.app/).
  1. Paste your `vless://` link into the **Source/URL** box.
  2. Select your **Target Client** (e.g., Clash, V2Ray).
  3. Click **Generate** to get a subscription URL. \[[1](https://crates.io/crates/subconverter), [2](https://github.com/tindy2013/subconverter), [3](https://blog.torguard.net/beyond-vpns-how-v2ray-vmess-vless-trojan-powers-the-next-gen-stealth-proxy/), [4](https://www.dtcc.com/products/training/helpfiles/asset%5Fservices/spr/help/spr%5Ftransfer%5Fsub.htm)]

Option 2: GitHub Gist (Best for Privacy/Control)

You can manually create a subscription by hosting the link on a text-sharing site.

1. **Base64 Encode**: Many clients require the subscription content to be Base64 encoded. Copy your VLESS link and use an online tool to convert it to a Base64 string.
2. **Host on GitHub**: Go to [GitHub Gists](https://gist.github.com/) and paste either the raw link or the Base64 string.
3. **Get Raw URL**: Save the Gist and click the **"Raw"** button. The resulting URL is your subscription link. \[[1](https://gist.github.com/zjx20/25dff5a670ca55d8aba223f508691dfb), [2](https://github.com/throneproj/Throne/issues/1170), [3](https://maestra.ai/blogs/how-to-generate-url-for-srt-vtt-files), [4](https://maestra.ai/blogs/how-to-generate-url-for-srt-vtt-files), [5](https://www.v2fly.org/en%5FUS/v5/config/service/subscription.html)]

Option 3: Use a Panel (Automated)

If you manage your own server, using a web-based panel like **3X-UI** is the most professional method.

- **3X-UI**: This panel automatically generates subscription URLs for every user you create.
- **Self-Hosting**: You can deploy a simple Cloudflare Worker script to act as a subscription generator for your nodes. \[[1](https://habr.com/en/articles/990128/), [2](https://medium.com/@nikitagroshin/the-ghost-in-the-machine-setting-up-a-vless-reality-vpn-for-perfect-stealth-00802a2f9561), [3](https://sourceforge.net/projects/workervless2sub.mirror/)]

Why convert to a subscription?

- **Auto-Update**: If you change your server's IP or SNI, you only update it once in your file/panel, and all connected clients will sync automatically.
- **Multi-Node Management**: It allows you to group multiple VLESS, VMess, or Trojan nodes into a single link. \[[1](https://github.com/shabane/kamaji), [2](https://www.reddit.com/r/dumbclub/comments/1fv4smb/vless%5Fsubscription/), [3](https://sourceforge.net/projects/workervless2sub.mirror/), [4](https://github.com/tindy2013/subconverter), [5](https://github.com/NoisyCake/3x-ui%5Fsubscriptions%5Faggregator)]

Are you trying to set this up for a **specific client** like Clash or v2rayN?

- [link](https://github.com/NoisyCake/3x-ui%5Fsubscriptions%5Faggregator)\
  NoisyCake/vless\_config\_aggregator - GitHub\
  May 16, 2025 — Configuration file To get the service up and running, you'll also need a plain . txt file with your list configurations available ...\
  GitHub
- [link](https://gist.github.com/zjx20/25dff5a670ca55d8aba223f508691dfb)\
  Convert v2ray config.json (client side) to a subscription content\
  Feb 6, 2024 — Select an option \* Embed Embed this gist in your website. \* Share Copy sharable link for this gist. \* Clone via HTTPS Clone using ...\
  Gist
- [link](https://www.reddit.com/r/dumbclub/comments/1fv4smb/vless%5Fsubscription/)\
  Vless subscription : r/dumbclub - Reddit\
  Oct 3, 2024 — I made a custom solution where I have an nginx proxy config that requests each 3xui server with the same subscription ID, compiles...\
  Reddit·r/dumbclub

Show all

# .

https://github.com/clash-verge-rev/clash-verge-rev/discussions/4060

set merge.yaml first on profile.

```
rules:
  - DOMAIN-SUFFIX,local,DIRECT
  - IP-CIDR,192.168.0.0/16,DIRECT,no-resolve
  - GEOIP,CN,DIRECT
  - MATCH,PROXY
```

add subscription later.

#

how to create rules for clash verge from 3x-ui

12:13 PM

To create rules for Clash Verge using [3x-ui](https://github.com/MHSanaei/3x-ui) configuration, you must first <mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">generate a compatible subscription or node link in the <span style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);"><a rel="noopener" href="https://3x-ui.com/how-to-set-routing-rules-in-3x-ui/" style="margin: 0px; text-decoration-thickness: 1px; text-decoration-style: solid; text-decoration-color: rgb(153, 195, 255); border-bottom: 0px none rgb(153, 195, 255);">3x-ui dashboard</a></span> and then add custom routing rules directly within the Clash Verge client</mark>. \[[1](https://github.com/clash-verge-rev/clash-verge-rev/discussions/4060), [2](https://3x-ui.com/how-to-set-routing-rules-in-3x-ui/)]

1\. Export Connection from 3x-ui

Before setting rules, you need the proxy server details from your **3x-ui** panel.

- **Generate Node**: Go to the **Inbounds** page in your 3x-ui panel.
- **Get Link**: Find your created inbound (e.g., VLESS or Trojan) and click the **QR Code** or **Copy Link** icon.
- **Copy Subscription (Optional)**: If you use the [Subscription management feature](https://github.com/MHSanaei/3x-ui/issues/3879), copy the "Subscription URL" to sync multiple nodes at once. \[[1](https://github.com/MHSanaei/3x-ui/issues/3879), [2](https://wiki.senko.digital/vpn/3x-ui), [3](https://help.ishosting.com/en/3x-ui-on-your-server-for-android-installation-and-basic-configuration), [4](https://hostkey.com/documentation/marketplace/security/3x%5Fui/)]

2\. Import into Clash Verge

1. Open Clash Verge and navigate to the **Profiles** tab.
2. Paste your 3x-ui link into the **Import via URL** field and click **Import**.
3. Right-click the newly imported profile and select **Use** to activate it. \[[1](https://clashx.tech/en/clash-verge-rev-guide), [2](https://proxy-seller.com/blog/setting%5Fup%5Fa%5Fproxy%5Fin%5Fthe%5Fclash%5Ffor%5Fwindows/)]

3\. Creating Rules in Clash Verge

Clash Verge allows you to define rules using a **Merge** or **Script** approach to ensure they persist after subscription updates. \[[1](https://en.clash.wiki/premium/script.html), [2](https://github.com/clash-verge-rev/clash-verge-rev/discussions/4060)]

Adding Simple Rules (Merge Config)

1. Go to the **Profiles** section.
2. Right-click your profile and select **Edit Rules**.
3. Add rules following the YAML format. It is recommended to use **Prepend Rules** so they are checked before the subscription's default rules.
4. **Common Rule Examples**:

- **Direct Traffic (Bypass VPN)**: `DOMAIN-SUFFIX,google.com,DIRECT`
- **Proxy Traffic (Force VPN)**: `DOMAIN-KEYWORD,netflix,Proxy`
- **Block Ads**: `DOMAIN-SUFFIX,ads.com,REJECT` \[[1](https://proxy-seller.com/blog/setting%5Fup%5Fa%5Fproxy%5Fin%5Fthe%5Fclash%5Ffor%5Fwindows/), [2](https://github.com/MHSanaei/3x-ui/issues/2743), [3](https://support.riverbed.com/bin/support/static/ctnr28gk5ckpg1p549hp2vb84b/html/ibe80vo6j696nonksoftu0aoct/sh%5Fcx%5F9.9.1%5Fug%5Fhtml/sh%5Fcx%5F9.9.1%5Fug%5Fhtml/setupServiceInpathRules.html), [4](https://github.com/clash-verge-rev/clash-verge-rev/discussions/4060), [5](https://hostkey.com/documentation/marketplace/security/3x%5Fui/)]

Using Global External Config

If you have multiple subscriptions and want rules to apply to all of them:

1. Navigate to **Settings** -> **External Config**.
2. Edit the **Global External Config**.
3. Insert your rules under the `rules:` section in YAML format. \[[1](https://github.com/clash-verge-rev/clash-verge-rev/discussions/4060)]

Summary of Rule Types

| Rule Type \[[1](https://proxy-seller.com/blog/setting%5Fup%5Fa%5Fproxy%5Fin%5Fthe%5Fclash%5Ffor%5Fwindows/), [2](https://en.clash.wiki/configuration/rules.html), [3](https://github.com/clash-verge-rev/clash-verge-rev/discussions/4060)] | Description                                  | Example                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- | -------------------------------- |
| **DOMAIN-SUFFIX**                                                                                                                                                                                                                           | Matches the end of a domain                  | `DOMAIN-SUFFIX,apple.com,DIRECT` |
| **DOMAIN-KEYWORD**                                                                                                                                                                                                                          | Matches a keyword anywhere in the domain     | `DOMAIN-KEYWORD,youtube,Proxy`   |
| **GEOIP**                                                                                                                                                                                                                                   | Matches traffic from a specific country code | `GEOIP,CN,DIRECT`                |
| **MATCH**                                                                                                                                                                                                                                   | Default action for all remaining traffic     | `MATCH,Proxy`                    |

**Would you like a sample YAML configuration** to copy and paste into your Clash Verge settings?

- [link](https://github.com/MHSanaei/3x-ui/issues/3879)\
  \[Feature request] Adding routing rules subscription #3879 - GitHub\
  vitlyc commented. ... @hkctkuy It works only with Happ app. Crate routing in app settings - routing and export it. The link looks ...\
  GitHub
- [link](https://wiki.senko.digital/vpn/3x-ui)\
  Installation and Usage Guide for 3X-UI Panel\
  Creating a New Connection ​ Go to the "Inbounds" page. Click the "Add inbound" button to create a new connection. In the opened wi...\
  Senko Digital Wiki
- [link](https://help.ishosting.com/en/3x-ui-on-your-server-for-android-installation-and-basic-configuration)\
  3X-UI on Your Server for Android: Installation and Basic ...\
  Connect to the panel via a browser using the link ipserver:port. In our case, the link looks like this: http://38.xxx.xxx.xxx:xxxx...\
  is\*hosting

Show all

import a default for chinese

12:14 PM

To import a default configuration for Chinese traffic (frequently called "China Bypass"), you should add a [Rule Provider](https://github.com/clash-verge-rev/clash-verge-rev/discussions/4060) that directs all domestic Chinese domains and IP addresses to connect directly while sending everything else through your 3x-ui proxy. \[[1](https://github.com/clash-verge-rev/clash-verge-rev/discussions/4060)]

1\. Enable Global External Config \[]

Instead of editing your 3x-ui subscription directly—which would be overwritten on every update—you should use the **Global External Config** in Clash Verge. \[]

- Go to **Settings** -> **External Config**.
- Click **Edit** on the Global configuration.

2\. Paste the Chinese Rule Template

Copy and paste the following YAML block into the `rules:` section. This uses standard [GEOIP](https://en.clash.wiki/configuration/getting-started.html) and [domain list](https://github.com/clash-verge-rev/clash-verge-rev/issues/5334) providers to handle Chinese traffic: \[[1](https://github.com/clash-verge-rev/clash-verge-rev/issues/5334), [2](https://www.ipdeep.com/resources/clash-proxy-setup)]

yaml

```
rules:
  # Bypass local traffic
  - DOMAIN-SUFFIX,local,DIRECT
  - IP-CIDR,192.168.0.0/16,DIRECT,no-resolve

  # Direct Chinese domains (using internal Clash database)
  - GEOIP,CN,DIRECT

  # Forward everything else to your 3x-ui Proxy
  - MATCH,Proxy
```

Use code with caution.

_Note: Replace `Proxy` with the exact name of your 3x-ui node or proxy group as it appears in your client._ \[[1](https://www.ipdeep.com/resources/clash-proxy-setup)]

3\. Change App Interface to Chinese

If you meant importing the **Chinese language** for the application itself: \[[1](https://www.youtube.com/watch?v=M3HWlnyP%5FmI), [2](https://github.com/clash-verge-rev/clash-verge-rev/issues/1693)]

1. Navigate to the **Settings** (gear icon) on the left sidebar.
2. Look for the **Language** dropdown menu.
3. Select **简体中文** (Simplified Chinese) to change the entire UI immediately.

4\. Advanced: Use Remote Rule Sets

For more precise routing, many users import a remote "China List." You can add this under a `rule-providers:` section in your configuration: \[[1](https://www.coursehero.com/file/242791602/a7b4d382a577470ebb409bc2895a3851pdf/), [2](https://github.com/clash-verge-rev/clash-verge-rev/issues/5334)]

- **Source**: ACL4SSR China Domain List
- **Rule**: `- RULE-SET,ChinaDomain,DIRECT`

**Would you like me to provide the full code** for a `rule-provider` that automatically updates these Chinese domain lists daily?

- [link](https://www.youtube.com/watch?v=M3HWlnyP%5FmI)\
  How to Setup Clash VPN and Configure Proxies (Mac & Windows)\
  and here we go we got Clash app open it give your passcode. and it will look like this everything is in Chinese. but you can insta...\
  YouTube
- [link](https://github.com/clash-verge-rev/clash-verge-rev/issues/1693)\
  \[Feature] Set app language to same as system one #1693\
  功能描述 / Feature description. By default, set the application language to the same as the system language. 使用场景 / Use case. I don't ...\
  GitHub
- [link](https://github.com/clash-verge-rev/clash-verge-rev/discussions/4060)\
  Extending the current config to add sites to be tunneled #4060\
  If you have only 1 subscription, you can simply right-click on that subscription and select "Edit Rules". Then you can add your cu...\
  GitHub

Show all

how to do it step by step

12:17 PM

To set up a default Chinese bypass rule in Clash Verge for your 3x-ui connection, follow these steps.

Step 1: Open Global External Config

Using the [Global External Config](https://github.com/clash-verge-rev/clash-verge-rev/discussions/4060) ensures your custom rules won't be deleted when you update your 3x-ui subscription. \[[1](https://github.com/clash-verge-rev/clash-verge-rev/discussions/4060), [2](https://github.com/clash-verge-rev/clash-verge-rev/discussions/4060)]

1. Launch **Clash Verge**.
2. Click **Settings** (gear icon) on the left sidebar.
3. Scroll down to find **External Config**.
4. Click the **Edit** (pencil icon) next to **Global External Config**.

Step 2: Add the Chinese Routing Code

In the editor window that opens, paste the following YAML code. This tells Clash to send local and Chinese traffic directly (bypassing the proxy) and send everything else to your 3x-ui server. \[[1](https://en.clash.wiki/premium/rule-providers.html), [2](https://www.ipdeep.com/resources/clash-proxy-setup)]

yaml

```
# Add these rules to the top of your configuration
rules:
  # 1. Bypass local network traffic
  - DOMAIN-SUFFIX,local,DIRECT
  - IP-CIDR,192.168.0.0/16,DIRECT,no-resolve

  # 2. Bypass all Chinese traffic using GEOIP
  - GEOIP,CN,DIRECT

  # 3. Everything else goes to your proxy
  # IMPORTANT: Change "Proxy" to match your actual 3x-ui group name
  - MATCH,Proxy
```

Use code with caution.

Step 3: Save and Apply

1. Click the **Save** (floppy disk icon) in the editor window.
2. Go back to the **Profiles** tab.
3. Right-click your active 3x-ui profile and select **Refresh** to ensure it pulls in the new global settings.
4. Ensure **System Proxy** is turned on in the main dashboard. \[[1](https://docs.wannaflix.net/windows/clash-verge-recommended)]

Step 4: Verify the Setup

1. Visit a Chinese website (like `baidu.com`) and check the **Logs** tab in Clash Verge; it should show "DIRECT".
2. Visit an international site (like `google.com`); it should show "Proxy" or the name of your 3x-ui node. \[[1](https://www.youtube.com/watch?v=f6m826lyrzs)]

For a visual walkthrough on managing these profiles and ensuring they connect correctly, watch this guide:

06:48

[How to Setup Clash VPN and Configure Proxies (Mac ...AttiqueSticYouTube• Dec 15, 2025](https://www.youtube.com/watch?v=M3HWlnyP%5FmI)

**Would you like me to show you how to use a Rule Provider** to automatically update these Chinese domain lists every day?

- [link](https://en.clash.wiki/premium/rule-providers.html)\
  Rule Providers | Clash Knowledge\
  To define a Rule Provider, add the rule-providers field to the main configuration: yaml rule-providers: apple: behavior: "domain" ...\
  Clash Knowledge
- [link](https://github.com/clash-verge-rev/clash-verge-rev/discussions/4060)\
  Extending the current config to add sites to be tunneled #4060\
  If you have only 1 subscription, you can simply right-click on that subscription and select "Edit Rules". Then you can add your cu...\
  GitHub
- [link](https://www.ipdeep.com/resources/clash-proxy-setup)\
  Clash Proxy Configuration (Step-by-Step Guide) - IPDeep\
  You can replace it with other domains like youtube.com or facebook.com . The second rule MATCH,DIRECT is the default rule, meaning...\
  IPDeep

Show all

where is external config

12:18 PM

In **Clash Verge**, the "External Config" (now more commonly labeled as [Global External Config](https://github.com/clash-verge-rev/clash-verge-rev/discussions/4060)) is located within the main Settings menu. \[[1](https://github.com/clash-verge-rev/clash-verge-rev/discussions/4060)]

Step-by-Step Location

1. **Sidebar**: Open Clash Verge and look at the left-hand vertical menu bar.
2. **Settings**: Click the **Settings icon** (the gear symbol ⚙️) at the bottom left.
3. **Clash Settings Section**: In the main settings window, scroll down until you reach the section labeled **Clash Settings**.
4. **External Config**: Look for the **External Config** or **Global External Config** card.
5. **Edit**: Click the **pencil/edit icon** 📝 on that card to open the YAML editor where you can paste your 3x-ui rules. \[[1](http://www.csl.cool/2026/01/12/clash-verge-advanced-configuration/), [2](https://github.com/clash-verge-rev/clash-verge-rev/issues/4431), [3](https://github.com/clash-verge-rev/clash-verge-rev/discussions/4060)]

Alternative: Per-Profile Rules

If you only want rules to apply to your specific 3x-ui connection rather than everything:

1. Go to the **Profiles** tab.
2. **Right-click** your imported 3x-ui profile.
3. Select **Edit Rules** from the context menu. \[[1](https://github.com/clash-verge-rev/clash-verge-rev/discussions/4060)]

**Did you find the icon**, or would you like a screenshot-style description of what the "Clash Settings" section looks like?

- [link](https://github.com/clash-verge-rev/clash-verge-rev/discussions/4060)\
  Extending the current config to add sites to be tunneled #4060\
  If you have only 1 subscription, you can simply right-click on that subscription and select "Edit Rules". Then you can add your cu...\
  GitHub
- [link](https://github.com/clash-verge-rev/clash-verge-rev/issues/4431)\
  \[BUG] TUN Mode doesn't work on Windows !! #4431 - GitHub\
  Dragon1573 commented \* Go to "Settings > Clash Settings > DNS Overwrite", click on the gear icon ⚙️ \* Click the "ADVANCED" button ...\
  GitHub
- [link](http://www.csl.cool/2026/01/12/clash-verge-advanced-configuration/)\
  Clash Verge Troubleshooting\
  You can find the DNS Overwrite section in the Settings page. Click the Setting icon to open the DNS Overwrite page as you can see ...\
  www.csl.cool

does not work. # Profile Enhancement Merge Template for Clash Verge

profile:\
store-selected: true\
\# Add these rules to the top of your configuration\
rules:\
\# 1. Bypass local network traffic\
\- DOMAIN-SUFFIX,local,DIRECT\
\- IP-CIDR,192.168.0.0/16,DIRECT,no-resolve

\# 2. Bypass all Chinese traffic using GEOIP\
\- GEOIP,CN,DIRECT

\# 3. Everything else goes to your proxy\
\# IMPORTANT: Change "Proxy" to match your actual 3x-ui group name\
\- MATCH,Proxy

The reason it "does not work" is likely because the **Proxy Group name** in your code (which you labeled `Proxy`) doesn't match the exact name 3x-ui gave your node group. If they don't match exactly, Clash gets confused and defaults to a "Fail" state.

To fix this, follow these three steps:

1\. Find your exact Proxy Group Name

1. Go to the **Proxies** tab in Clash Verge.
2. Look at the top of the screen. You will see a "Group" name (usually it is **`🚀 节点选择`**, **`Proxy`**, or **`Default`**).
3. **Note down the exact name** including any emojis or special characters.

2\. Update your Code

In your Profile Enhancement, change that last line to match your group name.

**Example (if your group name is `🚀 节点选择`):**

yaml

```
# ... (rest of your code above)
  - MATCH,🚀 节点选择
```

Use code with caution.

3\. Check YAML Formatting (Indentation)

Clash is very picky about spaces. Ensure your code looks exactly like this (with the `rules:` tag properly aligned):

yaml

```
profile:
  store-selected: true

prepend-rules: # Use 'prepend-rules' to ensure these stay at the top
  - DOMAIN-SUFFIX,local,DIRECT
  - IP-CIDR,192.168.0.0/16,DIRECT,no-resolve
  - GEOIP,CN,DIRECT
  - MATCH,YOUR_GROUP_NAME_HERE
```

Use code with caution.

Pro Tip: Use "Merge" instead of "Script"

If you are using the **Merge** feature (right-click profile > Merge), make sure the type is set to **Merge** and not **Script**.

**What is the exact name of the group you see in your "Proxies" tab?** I can give you the corrected code immediately.

AI can make mistakes, so double-check responses

only one group, PROXY. research Merge.yaml.

Something went wrong and the content wasn't generated.

only one group, PROXY. research Merge.yaml.

Something went wrong and the content wasn't generated.

only one group, PROXY. research Merge.yaml.

If your proxy group is exactly named **`PROXY`**, the configuration must use the `prepend-rules` key to ensure your custom rules take priority over the ones automatically generated by your 3x-ui subscription. \[[1](https://github.com/clash-verge-rev/clash-verge-rev/discussions/4060)]

Corrected Merge.yaml Template

Paste this exactly into your **Profile Enhancement** or **Merge** editor:

yaml

```
profile:
  store-selected: true

prepend-rules:
  # 1. Bypass local network traffic
  - DOMAIN-SUFFIX,local,DIRECT
  - IP-CIDR,192.168.0.0/16,DIRECT,no-resolve

  # 2. Bypass all Chinese traffic using GEOIP
  - GEOIP,CN,DIRECT

  # 3. Everything else goes to your proxy group
  - MATCH,PROXY
```

Use code with caution.

Why this works

- **`prepend-rules`**: Most 3x-ui subscriptions end with a `MATCH,DIRECT` or `MATCH,Proxy` rule. If you use standard `rules:`, your custom rules might be ignored because Clash stops at the first match it finds. `prepend-rules` forces yours to the top.
- **`MATCH,PROXY`**: This must match your group name exactly. Since yours is all caps, `PROXY` is required. \[[1](https://github.com/clash-verge-rev/clash-verge-rev/discussions/4060)]

How to Apply

1. Go to the **Profiles** tab in Clash Verge.
2. Right-click your profile and select **Enhance** or **Merge**.
3. Ensure the **Type** is set to **Merge**.
4. Paste the code above and click **Save**.
5. Right-click the profile again and select **Use** or **Refresh** to activate the new logic. \[[1](https://github.com/clash-verge-rev/clash-verge-rev/blob/dev/docs/README%5Fen.md)]

**Is your connection still failing**, or are you seeing "DIRECT" now when you visit Chinese sites?

- [link](https://github.com/clash-verge-rev/clash-verge-rev/blob/dev/docs/README%5Fen.md)\
  clash-verge-rev/docs/README\_en.md at dev - GitHub\
  Features \* Built on high-performance Rust with the Tauri 2 framework. \* Ships with the embedded Clash.Meta (mihomo) core and suppo...\
  GitHub
- [link](https://github.com/clash-verge-rev/clash-verge-rev/discussions/4060)\
  Extending the current config to add sites to be tunneled #4060\
  Jul 13, 2025 — If you have only 1 subscription, you can simply right-click on that subscription and select "Edit Rules". Then you can add your cu...\
  GitHub

there is no enhance/merge in context menu of a profile. research.

<mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);"><span style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">In the latest versions of </span><strong><span style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);"><u style="margin: 0px; text-decoration-style: dotted; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);"><span tabindex="0" role="button" style="margin: 0px; text-decoration-line: none; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);"><span style="margin: 0px; text-decoration-line: none; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">Clash Verge Rev</span></span></u></span></strong>, the "Merge" or "Enhance" option is no longer a simple context menu item</mark>. Instead, it is managed through a more powerful feature called **Merge Profiles** or **Global External Config**.

If you cannot see "Enhance" or "Merge" when you right-click a profile, follow these steps to achieve the same result:

1\. The Modern Way: Create a New "Merge" Profile

Instead of modifying your subscription, you create a "Merge" type profile that acts as a wrapper for it.

1. Go to the **Profiles** tab.
2. Click the **New** button (top right).
3. For **Type**, select **Merge**.
4. Give it a name (e.g., "3x-ui with Rules").
5. In the editor that appears, paste your code. It must use the `prepend-rules` key to work properly: \[[1](https://github.com/clash-next/clash-verge/blob/main/UPDATELOG.md)]

yaml

```
# Select your base 3x-ui subscription here
# Clash Verge will ask you which profile to 'merge' this onto
prepend-rules:
  - DOMAIN-SUFFIX,local,DIRECT
  - IP-CIDR,192.168.0.0/16,DIRECT,no-resolve
  - GEOIP,CN,DIRECT
  - MATCH,PROXY
```

Use code with caution.

1. Save it, then right-click this new Merge profile and select **Use**.

2\. The "Global" Way: External Config

If you want these rules to apply to **every** profile you ever import (so you don't have to do it step-by-step for each one):

1. Go to **Settings** (gear icon) -> **Clash Settings**.
2. Look for **Global External Config**.
3. Click the **Edit** (pencil icon).
4. Paste your rules there. This "merges" your custom rules into whatever profile is currently active. \[[1](https://github.com/clash-verge-rev/clash-verge-rev/discussions/4060)]

Why the menu item is missing

- **Version Update**: Newer versions (Rev branch) moved these to the "New Profile" dialog to avoid cluttering the context menu.
- **Profile Type**: If the profile is a "Local" type file you manually imported, some "Enhance" options are disabled because you can already edit the file directly by right-clicking and selecting **Edit**. \[[1](https://github.com/clash-verge-rev/clash-verge-rev/blob/dev/docs/README%5Fen.md)]

**Which version of Clash Verge are you using** (found in Settings > About)? I can give you the exact UI labels for that specific version.

- [link](https://github.com/clash-verge-rev/clash-verge-rev/blob/dev/docs/README%5Fen.md)\
  clash-verge-rev/docs/README\_en.md at dev - GitHub\
  Built on high-performance Rust with the Tauri 2 framework. Ships with the embedded Clash.Meta (mihomo) core and supports switching...\
  GitHub
- [link](https://github.com/clash-verge-rev/clash-verge-rev/discussions/4060)\
  Extending the current config to add sites to be tunneled #4060 - GitHub\
  Jul 13, 2025 — Collaborator. ... If I add a rule to the downloaded config, it wont be removed? ... If you add extra rules as commented above, the...\
  GitHub
- [link](https://github.com/clash-next/clash-verge/blob/main/UPDATELOG.md)\
  clash-verge/UPDATELOG.md at main - GitHub\
  Features \* update clash and clash meta core. \* profiles page add paste button. \* subscriptions url textfield use multi lines. \* se...\
  \
  GitHub

no "merge" in types. only remote and local.

In newer versions of **Clash Verge Rev**, the "Merge" option has been replaced by a more flexible feature called **Global Extension** (or **Global External Config**). This is the only way to apply custom rules to a "Remote" subscription without them being deleted when the profile updates. \[[1](https://github.com/clash-verge-rev/clash-verge-rev/discussions/4060), [2](https://github.com/clash-verge-rev/clash-verge-rev/discussions/4060)]

Step-by-Step for Newest Version

Since you only see "Remote" and "Local" in the profiles tab, follow this method:

1. **Go to Settings**: Click the **Settings** (gear icon) on the left sidebar.
2. **Find Clash Settings**: Scroll down to the section titled **Clash Settings**.
3. **Open Global Extension**: Look for the card labeled **Global Extension** (some versions call it **Global External Config**).
4. **Edit the Code**: Click the **pencil icon** to open the YAML editor.
5. **Paste the Chinese Bypass Rules**: Enter the following code exactly. This will merge these rules into your active 3x-ui profile: \[[1](https://github.com/clash-verge-rev/clash-verge-rev/discussions/4060), [2](http://www.csl.cool/2026/01/12/clash-verge-advanced-configuration/), [3](https://github.com/clash-verge-rev/clash-verge-rev/issues/2454)]

yaml

```
# This adds rules to the beginning of your active profile
prepend-rules:
  - DOMAIN-SUFFIX,local,DIRECT
  - IP-CIDR,192.168.0.0/16,DIRECT,no-resolve

  # Sends all Chinese traffic directly
  - GEOIP,CN,DIRECT

  # Matches everything else to your 3x-ui proxy group
  - MATCH,PROXY
```

Use code with caution.

1. **Save**: Click the **Save** icon at the top of the editor.
2. **Refresh Profile**: Go back to the **Profiles** tab, right-click your 3x-ui profile, and select **Refresh** (or just click the refresh circle icon). \[[1](https://clashx.tech/en/clash-verge-rev-guide)]

Why this is better than "Edit Rules"

If you right-click and select **Edit Rules** on a "Remote" profile, those changes might be [wiped out](https://github.com/clash-verge-rev/clash-verge-rev/discussions/4060) the next time the app fetches updates from your 3x-ui server. The **Global Extension** method acts as a permanent "layer" that stays active regardless of subscription updates. \[[1](https://github.com/clash-verge-rev/clash-verge-rev/discussions/4060)]

**Is your 3x-ui group name definitely `PROXY` in all caps?** If you still get errors, go to the **Proxies** tab and verify that the group name matches exactly—even a space at the end will cause it to fail.

- [link](https://github.com/clash-verge-rev/clash-verge-rev/discussions/4060)\
  Extending the current config to add sites to be tunneled #4060\
  Jul 13, 2025 — If you have only 1 subscription, you can simply right-click on that subscription and select "Edit Rules". Then you can add your cu...\
  GitHub
- [link](https://github.com/clash-verge-rev/clash-verge-rev/issues/2454)\
  \[BUG] Unable to use PROXY in rule configurations of Global ...\
  Dec 25, 2024 — and no rules added; \* Open Global Extended Config again; \* Replace "PROXY" to "DIRECT" or "REJECT":\
  GitHub
- [link](http://www.csl.cool/2026/01/12/clash-verge-advanced-configuration/)\
  Clash Verge Troubleshooting\
  Jan 12, 2026 — You can find the DNS Overwrite section in the Settings page. Click the Setting icon to open the DNS Overwrite page as you can see ...\
  www.csl.cool

Show all

it does not appear in rules. it's still only one "-" and to Proxy

If you only see one rule (the one from your subscription) and your custom rules aren't appearing, it means <mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">the <strong>Global Extension</strong> is not merging correctly with your active profile</mark>. In newer versions of Clash Verge Rev, the `prepend-rules` feature in the Global Extension YAML editor has been known to be finicky or even broken in some builds. \[[1](https://github.com/clash-verge-rev/clash-verge-rev/issues/1325), [2](https://github.com/clash-verge-rev/clash-verge-rev/issues/3150)]

Try these two methods to force the rules to appear:

Method 1: Use the "Edit Rules" Panel (Most Reliable)

Instead of using the Global Extension, add the rules directly to the profile's dedicated rule editor. This is often the most direct way to see the rules in the list. \[[1](https://github.com/clash-verge-rev/clash-verge-rev/discussions/4060)]

1. Go to the **Profiles** tab.
2. **Right-click** your 3x-ui subscription.
3. Select **Edit Rules** (this opens a visual rule editor).
4. Switch to the **Prepend** tab (this is critical—it ensures these rules go above the subscription's default ones).
5. Add your rules here one by one:

- `GEOIP, CN, DIRECT`
- `MATCH, PROXY`

6. Click **Save**. Now, check the **Rules** tab in the main sidebar; they should finally appear at the top. \[[1](https://www.clashverge.dev/guide/extend.html)]

Method 2: Fix the Global Extension Syntax

If you prefer the Global Extension, ensure your syntax is absolutely perfect. Some versions require a specific `rules:` block rather than `prepend-rules:` in the extension. \[[1](https://github.com/clash-verge-rev/clash-verge-rev/issues/2873), [2](https://github.com/clash-verge-rev/clash-verge-rev/issues/1715), [3](https://github.com/clash-verge-rev/clash-verge-rev/issues/2454)]

1. Go to **Settings** -> **Clash Settings** -> **Global Extension**.
2. Replace your current code with this specific structure:

yaml

```
# Note: Use 'rules:' if 'prepend-rules:' isn't being recognized
rules:
  - GEOIP,CN,DIRECT
  - MATCH,PROXY
```

Use code with caution.

1. **Crucial Step**: After saving, you **must** right-click your profile in the **Profiles** tab and select **Refresh**. The rules will not update until the profile is reloaded into the core.

How to verify it worked

- Go to the **Rules** tab (sidebar icon).
- If it worked, you will see your `GEOIP, CN` rule listed at the **very top** (index 0 or 1).
- If you still only see one rule, it means your subscription's "Remote" configuration is likely overriding the extension. \[, [2](https://github.com/clash-verge-rev/clash-verge-rev/issues/2454)]

**Does the "Edit Rules" panel show your rules** under the "Prepend" section after you add them?

AI can make mistakes, so double-check responses

- [link](https://github.com/clash-verge-rev/clash-verge-rev/issues/2873)\
  \[BUG] Rules for "Tun(udp)" are not working · Issue #2873\
  Mar 3, 2025 — 复现步骤 / To Reproduce. Setup Global Extend Config: profile: store-selected: true dns: use-system-hosts: false rules: - GEOIP,ru,DIRE...\
  GitHub
- [link](https://github.com/clash-verge-rev/clash-verge-rev/discussions/4060)\
  Extending the current config to add sites to be tunneled #4060\
  Jul 13, 2025 — If you have only 1 subscription, you can simply right-click on that subscription and select "Edit Rules". Then you can add your cu...\
  GitHub
- [link](https://www.clashverge.dev/guide/extend.html)\
  Extend - Clash Verge Rev Docs\
  Changelog. v1.7.x 版本的 Merge配置 改名为 扩展配置 ，且prepend/append功能移动至订阅右键菜单中的可视化编辑器中实现（例如：prepend-rules移动至订阅右键菜单的 编辑规则 中的 prepend ）。 扩展配置仅用...\
  Clash Verge Rev Docs

Show all

edit rules like this: prepend: \[]\
append: \[]\
delete: \[]\
use the advanced, not visualized one by one.

Something went wrong and the content wasn't generated.

edit rules like this: prepend: \[]\
append: \[]\
delete: \[]\
use the advanced, not visualized one by one.

To apply this via the **Advanced (YAML)** rule editor, paste this exact block. This uses the `prepend` and `append` logic you requested to ensure Chinese traffic bypasses the proxy correctly.

yaml

```
prepend:
  - DOMAIN-SUFFIX,local,DIRECT
  - IP-CIDR,192.168.0.0/16,DIRECT,no-resolve
  - GEOIP,CN,DIRECT
append:
  - MATCH,PROXY
delete:
  # This deletes the original final rule from 3x-ui to avoid conflicts
  - MATCH
```

Use code with caution.

Steps to make it stick:

1. **Paste** the block above into the advanced editor.
2. **Save** the window.
3. Go back to the **Profiles** tab, **right-click** your profile, and select **Refresh**.
4. Open the **Rules** tab in the sidebar. You should now see the rules listed in this order: `DOMAIN-SUFFIX`, `IP-CIDR`, `GEOIP`, then any subscription rules, and finally `MATCH`.

**Note:** If the **Rules** tab still shows only one line, ensure the `delete: [- MATCH]` line matches the exact type of the original rule (usually just `MATCH`).

**Is the "Rules" tab now showing multiple entries?**

proxy group\[0]: direct use or proxies missing conf file

This error <mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">usually occurs because the <strong>Proxy Group name</strong> in your rules doesn't match the one defined in your 3x-ui config</mark>, or the "Advanced Rule" editor is looking for a group that hasn't been loaded yet.

Since you are seeing "Proxy Group\[0]" errors or "missing conf," try this exact format in your **Advanced Rule Editor**:

yaml

```
prepend:
  - DOMAIN-SUFFIX,local,DIRECT
  - IP-CIDR,192.168.0.0/16,DIRECT,no-resolve
  - GEOIP,CN,DIRECT
append:
  # This uses a lowercase 'proxy' which is often the 3x-ui default
  - MATCH,PROXY
delete: []
```

Use code with caution.

Why it's failing:

1. **Case Sensitivity**: If your group is named `Proxy` in the Proxies tab, but your rule says `PROXY`, it will fail. They must be identical.
2. **Missing "DIRECT" group**: Clash always has a built-in `DIRECT` group. Ensure `DIRECT` is in all caps in your `GEOIP` rule.
3. **Core Mismatch**: If you just saved the rules but didn't **Refresh** the profile, the "conf file" Clash is running is different from the one you just edited.

The Fix:

1. Check the **Proxies** tab. Look for the main group name (e.g., `PROXY`, `Proxy`, or `🚀 节点选择`).
2. Go back to **Edit Rules (Advanced)** and make sure the `MATCH` line uses that exact name.
3. **Refresh** the profile (Right-click profile -> Refresh).

If it still says "missing conf," try changing `MATCH,PROXY` to `MATCH,DIRECT` just to see if it starts. If it works with `DIRECT`, the issue is 100% the **name** of your proxy group.

**What is the exact name of the Proxy Group shown in your "Proxies" tab?** (Capitalization and emojis matter!)

there is no "DIRECT" group

If you don't see a `DIRECT` group in your **Proxies** tab, it’s because Clash handles direct connections as a built-in outbound rather than a visible UI group. However, the "missing conf file" error in your rule editor usually means you are trying to route to a group name that Clash doesn't recognize as a valid destination. \[[1](https://github.com/vernesong/OpenClash/issues/1878), [2](https://en.clash.wiki/configuration/rules.html), [3](https://proxy-seller.com/blog/setting%5Fup%5Fa%5Fproxy%5Fin%5Fthe%5Fclash%5Ffor%5Fwindows/)]

To fix this, follow these specific steps in the **Advanced (YAML)** rule editor:

1\. Correct the Target Names

In Clash, `DIRECT` must always be in **ALL CAPS** when used in a rule. If your proxy group is named `PROXY`, ensure it matches the exact case you see in your **Proxies** tab. \[, [2](https://en.clash.wiki/configuration/rules.html), [3](https://proxy-seller.com/blog/setting%5Fup%5Fa%5Fproxy%5Fin%5Fthe%5Fclash%5Ffor%5Fwindows/), [4](https://forum.cursor.com/t/can-not-use-cursor-because-of-clash-verge/150785)]

Paste this corrected block:

yaml

```
prepend:
  - DOMAIN-SUFFIX,local,DIRECT
  - IP-CIDR,192.168.0.0/16,DIRECT,no-resolve
  - GEOIP,CN,DIRECT
append:
  # If 'PROXY' gives an error, your group might be named 'Proxy' or 'Default'
  - MATCH,PROXY
delete:
  - MATCH
```

Use code with caution.

2\. Verify the Proxy Group Name

If the error `proxy group[0]: 'PROXY' not found` persists, do this:

1. Go to the **Proxies** tab.
2. Look at the name of the first selectable card (your main group).
3. If it has an emoji (like `🚀 PROXY`) or lowercase letters (`Proxy`), you **must** include those in your `MATCH` rule exactly. \[[1](https://github.com/vernesong/OpenClash/issues/1878), [3](https://github.com/clash-verge-rev/clash-verge-rev/issues/2634)]

3\. Clear the Core Cache \[[1](https://github.com/clash-verge-rev/clash-verge-rev/issues/2634)]

Sometimes the "missing conf" error is a ghost from a previous bad save. \[[1](https://github.com/clash-verge-rev/clash-verge-rev/issues/2634)]

1. **Save** your advanced rules.
2. Go to **Settings** -> **Clash Settings**.
3. Click **Actions** -> **Clear Core Configuration** (or simply restart Clash Verge completely).
4. Go to **Profiles**, right-click your 3x-ui profile, and select **Refresh**. \[[1](https://blog.l3zc.com/en/2025/02/what-i-have-done-on-my-dns/), [2](https://github.com/clash-verge-rev/clash-verge-rev/issues/2634)]

4\. Switch to "Rule" Mode \[]

Even with perfect rules, they won't work if you are in "Global" mode. \[]

- Go to the **Proxies** tab.
- At the top, ensure the mode is set to **Rule** (not Global or Direct). \[]

**What is the exact text written on the group card in your Proxies tab?** If it's something like `🚀 节点选择`, the `MATCH` rule needs to use that exact string.

AI responses may include mistakes. For legal advice, consult a professional. [Learn more](https://support.google.com/websearch?p=aimode\&gl=us)

- [link](https://proxy-seller.com/blog/setting%5Fup%5Fa%5Fproxy%5Fin%5Fthe%5Fclash%5Ffor%5Fwindows/)\
  How to Set Up a Proxy in Clash for Windows\
  May 17, 2025 — Routing Traffic By Domain in Clash for Windows. Clash lets you define custom routing rules to send traffic from certain domains th...\
  Proxy-Seller
- [link](https://en.clash.wiki/configuration/rules.html)\
  Rules | Clash Knowledge\
  When encountering this rule, Clash will resolve the domain name to an IP address and then look up the country code of the IP addre...\
  Clash Knowledge
- [link](https://github.com/vernesong/OpenClash/issues/1878)\
  \[Bug]Parse config error #1878 - vernesong/OpenClash - GitHub\
  Dec 27, 2021 — Description. djoeni. opened on Dec 27, 2021 · edited by djoeni. When create proxy through GUI Servers and Groups if there is 2 pro...\
  GitHub

Show all
