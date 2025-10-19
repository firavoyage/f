# 1

my ubuntu is out of memory after several days of uptime. it could be fixed by regular restart, but i dont wanna do that. after a restart, although i opened the same apps, the memory is quite lower. while ubuntu does not have a decent sandbox, when the maximum memory is reached, sometimes my mouse can not move, sometimes it closes all apps.

---

This is a common issue with Linux systems where memory isn't being properly reclaimed over time. Here are several solutions to try without restarting:

## Immediate Fixes

**Clear cached memory:**

```bash
sudo sync && echo 3 | sudo tee /proc/sys/vm/drop_caches
```

This clears pagecache, dentries, and inodes without affecting running applications.

**Clear swap:**

```bash
sudo swapoff -a && sudo swapon -a
```

This clears and recreates swap space.

## Long-term Solutions

### 1. Adjust VM Settings

Add to `/etc/sysctl.conf`:

```bash
# More aggressive memory reclaim
vm.vfs_cache_pressure=500
vm.swappiness=10
vm.dirty_ratio=15
vm.dirty_background_ratio=5

# Apply immediately
sudo sysctl -p
```

### 2. Install Early OOM

```bash
sudo apt update
sudo apt install earlyoom
sudo systemctl enable earlyoom
sudo systemctl start earlyoom
```

Early OOM kills processes before the system becomes completely unresponsive.

### 3. Memory Monitoring Script

Create a script to automatically clear caches when memory gets low:

```bash
#!/bin/bash
# Save as /usr/local/bin/memory-manager

THRESHOLD=85
CURRENT=$(free | grep Mem | awk '{print $3/$2 * 100.0}')

if (( $(echo "$CURRENT > $THRESHOLD" | bc -l) )); then
    sync
    echo 3 > /proc/sys/vm/drop_caches
    logger "Auto-cleared memory caches at ${CURRENT}% usage"
fi
```

Make it executable and add to cron:

```bash
sudo chmod +x /usr/local/bin/memory-manager
sudo crontab -e
# Add: */10 * * * * /usr/local/bin/memory-manager
```

### 4. Identify Memory Leaks

```bash
# Monitor memory usage by process
sudo apt install smem
smem -s rss -r

# Check for memory leaks
sudo apt install valgrind

# Monitor over time
watch -n 5 'free -h; echo; ps aux --sort=-%mem | head -10'
```

### 5. Application-specific Solutions

**For browsers:**

- Use extensions like "The Great Suspender" for Chrome
- Limit tabs and use bookmark sessions
- Restart browser periodically instead of whole system

**Use systemd services:**

```bash
# Create a service to restart problematic apps daily
sudo systemctl edit --force --full memory-hog-app.service
```

### 6. Alternative: Use ZRAM

```bash
sudo apt install zram-config
sudo service zram-config restart
```

ZRAM compresses memory in RAM, effectively increasing available memory.

## Monitoring Tools

**Install htop for better process monitoring:**

```bash
sudo apt install htop
htop
```

**Use GNOME System Monitor:**

```bash
gnome-system-monitor
```

## Quick Status Check

```bash
# Check current memory status
free -h
cat /proc/meminfo

# Check what's using memory
ps aux --sort=-%mem | head -10

# Check for memory leaks
cat /proc/sys/vm/vfs_cache_pressure
```

The combination of adjusting VM settings, installing Early OOM, and setting up periodic cache clearing should significantly reduce your memory issues without requiring regular restarts. Start with the VM settings and Early OOM, as these provide the most immediate benefit.
