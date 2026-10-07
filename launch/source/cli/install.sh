sudo cp launch.service /etc/systemd/system/launch.service

sudo systemctl daemon-reload
sudo systemctl enable --now launch
