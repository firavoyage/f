#!/bin/bash
install="$(realpath "$0")"

# 2. Find and replace a string within that path
# Example: replacing "/home/user/old_dir" with "/var/www/new_dir"
script="${install/old_string/new_string}"

# 3. Define your source template file and the systemd destination path
TEMPLATE_FILE="/path/to/your/service.template"
SYSTEMD_DEST="/etc/systemd/system/my_custom_service.service"

# 4. Find and replace a placeholder in the template file with the modified path,
# and write it directly to systemd (requires sudo for the systemd directory)
# Note: Using '|' as a delimiter in sed instead of '/' because paths contain slashes.
sed "s|YOUR_PLACEHOLDER_STRING|$script|g" "$TEMPLATE_FILE" | sudo tee "$SYSTEMD_DEST" > /dev/null

# 5. Reload systemd to recognize the new service file
sudo systemctl daemon-reload

echo "Service successfully created at: $SYSTEMD_DEST"


sudo systemctl daemon-reload
sudo systemctl enable --now autostart
# sudo journalctl -u autostart -f