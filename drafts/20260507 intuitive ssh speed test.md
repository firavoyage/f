how to speed test in ssh

To perform a speed test over SSH, you can <mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">use specialized command-line tools like <strong><span style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);"><span style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">Speedtest CLI</span></span></strong> for general internet speeds or <strong>iPerf3</strong> for testing the direct connection between two specific machines</mark>. \[[1](https://www.speedtest.net/apps/cli), [2](https://kb.ct-group.com/using-iperf3-to-test-network-throughput-and-speed/), [3](https://community.synology.com/enu/forum/2/post/137618), [4](https://superuser.com/questions/1483272/how-can-one-test-their-1gbps-server-connection-via-ssh), [5](https://www.youtube.com/watch?v=YC8YHaVaY8U)]

1\. Test Internet Speed (using Speedtest CLI)

The most common way to check a server's internet speed is with the [Ookla Speedtest CLI](https://www.speedtest.net/apps/cli). It provides a reliable measure of download, upload, and latency directly in your terminal. \[[1](https://www.speedtest.net/apps/cli), [2](https://www.youtube.com/watch?v=THbIqdwbuzk), [3](https://netbeez.net/blog/speedtest-comparison-ookla-ndt-google-netflix-fast-com-open-source-html-iperf/)]

- **Installation (Debian/Ubuntu):**\
  bash

<!---->

```
sudo apt update
sudo apt install speedtest-cli
```

Use code with caution.\
_Note: On newer systems like Ubuntu 24.04, you may need to use `sudo snap install speedtest` if the APT package is unavailable._

- **Running the test:**\
  Simply type `speedtest` (or `speedtest-cli` depending on the package) and follow the prompts to accept the license.
  - **Simple output:** `speedtest-cli --simple`.
  - **Specify a server:** Use `speedtest -L` to list nearby servers and `speedtest -s [ID]` to test against a specific one. \[[1](https://www.kamatera.com/knowledgebase/how-to-run-a-speed-test-on-a-headless-linux-server/), [2](https://www.omglinux.com/test-internet-speed-from-the-command-line/), [3](https://www.youtube.com/watch?v=THbIqdwbuzk)]

2\. Test Point-to-Point Speed (using iPerf3) \[[1](https://superuser.com/questions/1483272/how-can-one-test-their-1gbps-server-connection-via-ssh)]

If you want to measure the maximum bandwidth between your local computer and the remote server you are SSH'd into, use [iPerf3](https://iperf.fr/). \[[1](https://superuser.com/questions/1483272/how-can-one-test-their-1gbps-server-connection-via-ssh), [2](https://stackoverflow.com/questions/4297835/how-do-i-test-the-net-speed-from-the-command-line-on-a-linux-serverno-gui)]

- **Installation:** Install it on **both** the client and the server using `sudo apt install iperf3`.

- **On the Server:** Start it in server mode:\
  bash

<!---->

```
iperf3 -s
```

Use code with caution.

- **On the Local Machine:** Run the test against the server's IP:\
  bash

<!---->

```
iperf3 -c [SERVER_IP]
```

Use code with caution.\
_Note: By default, iPerf3 uses port 5201, which must be open in your firewall._ \[[1](https://www.jeffgeerling.com/blog/2023/testing-iperf-through-ssh-tunnel/), [2](https://superuser.com/questions/1483272/how-can-one-test-their-1gbps-server-connection-via-ssh), [3](https://www.worldstream.com/en/article/how-to-do-a-speedtest/)]

3\. Alternative "Quick and Dirty" Methods

If you cannot install new software, you can estimate speed using native tools:

- **Transfer with scp:** Start a file transfer and watch the progress bar for the current transfer rate.

- **Using dd and SSH:** Pipe a stream of data to the remote server to see the throughput:\
  bash

<!---->

```
yes | pv | ssh [USER]@[HOST] "cat > /dev/null"
```

Use code with caution.\
_Note: Use `/dev/urandom` instead of `yes` if SSH compression is enabled, as zeros will compress and give an artificially high speed reading._ \[[1](https://unix.stackexchange.com/questions/622330/how-can-dd-over-ssh-report-read-speeds-exceeding-the-network-bandwidth), [2](https://askubuntu.com/questions/14910/what-terminal-based-network-speed-tests-are-available), [3](https://www.cyberciti.biz/faq/linux-unix-test-internet-connection-download-upload-speed/), [4](https://news.ycombinator.com/item?id=21583452), [5](https://superuser.com/questions/1483272/how-can-one-test-their-1gbps-server-connection-via-ssh)]

Would you like instructions for a **different operating system** or help **troubleshooting a firewall** for iPerf3?

- [link](https://www.speedtest.net/apps/cli)\
  Speedtest CLI: Internet speed test for the command line\
  sudo pkg update && sudo pkg install -g libidn2 ca\_root\_nss # Example how to remove conflicting or old versions using pkg # sudo pk...\
  Speedtest by Ookla
- [link](https://www.jeffgeerling.com/blog/2023/testing-iperf-through-ssh-tunnel/)\
  Testing iperf through an SSH tunnel - Jeff Geerling\
  Aug 16, 2023 — Aug 16, 2023. I recently had a server with some bandwidth limitations (tested using scp and rsync -P ), where I was wondering if t...\
  Jeff Geerling
- [link](https://www.youtube.com/watch?v=THbIqdwbuzk)\
  How to Speed Test Your Internet with a Linux Command ...\
  Dec 22, 2022 — in this video I'm going to show you how to test the speed of your internet with a speed test command on Linux. so let's go ahead a...\
  5:43\
  YouTube·Tony Teaches Tech

Show all

how to test my connection speed to the ssh

To test your connection speed directly to a specific SSH server, the most accurate method is a timed file transfer using `scp` or `rsync`, or using `iperf3` for a raw throughput test.

1\. The Simple SCP Test

This measures the actual speed of transferring a file over the encrypted SSH protocol.

1. **Generate a large test file** (e.g., 100MB) on your local machine:
2. **Upload the file** to the server:\
   `scp testfile.img user@remote_host:/tmp/`
3. **Watch the transfer rate** displayed in the terminal (e.g., `12.5MB/s`).

2\. Using iPerf3 (Most Accurate)

This bypasses disk I/O and encryption overhead to show your raw network bandwidth.

1. **On the Remote Server:** Start the iPerf3 listener:\
   `iperf3 -s`
2. **On your Local Machine:** Connect to that listener:\
   `iperf3 -c your_server_ip`
3. **Analyze the results:** It will provide a table showing intervals and the calculated bits per second (e.g., `940 Mbits/sec`).

3\. Estimate Latency with Ping

Speed isn't just throughput; it's also responsiveness.

- Run `ping your_server_ip` to check your round-trip time (RTT).
- **Under 50ms:** Excellent for interactive terminal work.
- **Over 200ms:** You will notice a "lag" when typing.

***

Calculation Logic: Speed vs. Time

To understand how your bandwidth relates to transfer time, we use the formula:\
\\(Speed=\frac{DataSize\times 8}{Time}\\)\
_(The \\(\times 8\\) converts Bytes to bits, which is how network speeds are usually measured)._

1\. Calculate Data in Bits

If you transfer a \\(1\text{ GB}\\) file, that is:\
\\(1\text{\ GB}\times 8=8\times 10^{9}\text{\ bits}\\)

2\. Determine Bandwidth

- **Fast Connection:** If that \\(1\text{ GB}\\) file takes \\(8\text{ seconds}\\) to upload:\
  \\(\frac{8\times 10^{9}\text{\ bits}}{8\text{\ s}}=1\text{\ Gbps}\\)
- **Standard Connection:** If it takes \\(160\text{ seconds}\\) (\\(2\text{ mins } 40\text{ s}\\)):\
  \\(\frac{8\times 10^{9}\text{\ bits}}{160\text{\ s}}=50\text{\ Mbps}\\)

✅ Result Summary

To calculate your speed, divide the **total bits transferred** (\\(Bytes \times 8\\)) by the **time in seconds**.

Do you want to know how to **optimize your SSH configuration** to make a slow connection feel faster?

how to install iperf3 via apt while automatically selecting no

To install `iperf3` while automatically selecting "no" for any interactive prompts, you should use the `DEBIAN_FRONTEND=noninteractive` environment variable along with the `--assume-yes` flag. \[[1](https://askubuntu.com/questions/556385/how-can-i-install-apt-packages-non-interactively)]

In a non-interactive installation, `apt` will automatically choose the **default answer** for any configuration questions. For `iperf3` specifically, the most common prompt asks if you want to start the `iperf3` daemon automatically—where the **default answer is "no"**. \[[1](https://askubuntu.com/questions/556385/how-can-i-install-apt-packages-non-interactively), [2](https://askubuntu.com/questions/1556153/automated-iperf3-installation-without-demon-question), [3](https://askubuntu.com/questions/1251443/start-iperf3-deamon-at-startup)]

Recommended Command

Use the following command to install `iperf3` silently:

bash

```
sudo DEBIAN_FRONTEND=noninteractive apt-get install -y iperf3
```

Use code with caution.

Why this works:

- **`DEBIAN_FRONTEND=noninteractive`**: This prevents the installer from opening any interactive text-based UI (like the blue daemon service prompt).
- **`-y` (or `--assume-yes`)**: This automatically answers "yes" to the standard "Do you want to continue? \[Y/n]" prompt so the installation doesn't stop.
- **Automatic "No"**: Because `iperf3` sets "no" as the default for its daemon configuration question, the non-interactive mode will automatically apply that default choice. \[[1](https://askubuntu.com/questions/805067/is-there-a-way-to-force-yes-to-any-prompts-when-installing-from-apt-get-from), [2](https://askubuntu.com/questions/556385/how-can-i-install-apt-packages-non-interactively), [3](https://askubuntu.com/questions/1556153/automated-iperf3-installation-without-demon-question), [4](https://stackoverflow.com/questions/69745803/how-to-make-apt-assume-yes-and-force-yes-for-all-installations-in-a-bash-script)]

Alternative: Force "No" with Debconf

If you want to be 100% explicit about selecting "no" (false) for the daemon question regardless of the default, you can pre-seed the answer before installing:

bash

```
echo 'iperf3 iperf3/start_daemon boolean false' | sudo debconf-set-selections
sudo apt-get install -y iperf3
```

Use code with caution.

This ensures the `iperf3/start_daemon` setting is set to **false** in the system's configuration database before the installation even starts. \[[1](https://stackoverflow.com/questions/73094837/how-to-make-apt-get-upgrade-y-not-interactive)]

Do you need to **start the iperf3 server manually** after this installation, or are you setting up a custom service?

- [link](https://stackoverflow.com/questions/73094837/how-to-make-apt-get-upgrade-y-not-interactive)\
  How to make apt-get upgrade -y not interactive - Stack Overflow\
  Jul 23, 2022 — apt-get -y upgrade , apt-get -y install \[package] , etc. automatically assumes "yes" to boolean yes/no prompts. Unfortunately, whe...\
  Stack Overflow
- [link](https://askubuntu.com/questions/556385/how-can-i-install-apt-packages-non-interactively)\
  How can I install apt packages non-interactively? - Ask Ubuntu\
  Dec 4, 2014 — \* 1 Answer. Sorted by: 66. Set the DEBIAN\_FRONTEND to noninteractive : DEBIAN\_FRONTEND=noninteractive apt-get ... This is also app...\
  Ask Ubuntu
- [link](https://askubuntu.com/questions/1556153/automated-iperf3-installation-without-demon-question)\
  Automated iperf3 installation without demon question\
  Sep 16, 2025 — You can install iperf3 in Ubuntu directly from the Ubuntu repository. If not using Ubuntu then your question is off-topic. Changan...\
  Ask Ubuntu

Show all