install_script="$(realpath "$0")"
autostart_script="${install_script/script\/install.sh/autostart.ts}"
# service_template="autostart.service"
systemd_path="/etc/systemd/system/autostart.service"

sudo tee "$systemd_path" > /dev/null <<EOF
[Unit]
Description=Autostart
After=network.target

[Service]
Type=simple
User=$(whoami)
ExecStart=/bin/zsh -ic 'b ${autostart_script}'
Restart=on-failure

[Install]
WantedBy=multi-user.target
EOF
# sed "s|{autostart_path}|${autostart_script}|g" "$service_template" | sudo tee "$systemd_path" > /dev/null

sudo systemctl daemon-reload
sudo systemctl enable --now autostart

# sudo systemctl disable --now autostart
# sudo journalctl -u autostart -f