## journal

> 志 (こころざし)

### install

install deps

```sh
pnpm add -g tsx

# x11
sudo apt install -y scrot
sudo apt install -y xdotool xautomation
sudo apt install -y imagemagick # compress with mogrify

# wayland (not supported)
# sudo apt install -y grim gnome-screenshot
```

### run

on ubuntu gnome x11 with systemd

```sh
# cd to the project root

# normalize the script
chmod +x run.sh

# copy service file
cp extensions/systemd/journal.service ~/.config/systemd/user/journal.service

# normalize systemd
systemctl --user daemon-reload

# enable and start service
systemctl --user enable --now journal.service
```

### debug

check

```sh
# view status and logs
systemctl --user status journal.service
journalctl --user -u journal.service -f
```

stop

```sh
systemctl --user stop journal.service
```

restart

```sh
systemctl --user restart journal.service
```

### disable

```sh
systemctl --user disable --now journal.service
```