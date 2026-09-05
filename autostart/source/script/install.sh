install_script="$(realpath "$0")"

autostart_script="${install_script/script\/install.sh/autostart.ts}"

service_template="autostart.service"
systemd_path="/etc/systemd/system/autostart.service"

sed "s|{autostart_path}|${autostart_script}|g" "$service_template" | sudo tee "$systemd_path" > /dev/null

sudo systemctl daemon-reload
sudo systemctl enable --now autostart

# sudo systemctl disable --now autostart
# sudo journalctl -u autostart -f