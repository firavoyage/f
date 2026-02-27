## journal

> 志 (こころざし)

for journaling

### install

on ubuntu x11

```
# go to the project root first

# install system packages
sudo apt install -y python3 pip xdotool x11-utils

# install Python packages
pip install -r requirements.txt

# make run.sh executable (if not already)
chmod +x run.sh
```

### run

on ubuntu x11 with systemd

```
# copy service file
sudo cp extensions/systemd/journal.service /etc/systemd/system/journal.service

# ensure run.sh is executable and points at correct python path
chmod +x /home/fira/Documents/f/journal/run.sh

# reload systemd, enable and start service
sudo systemctl daemon-reload
sudo systemctl enable --now journal.service

# view status and logs
sudo systemctl status journal.service
sudo journalctl -u journal.service -f
```

### test


