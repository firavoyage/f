#!/usr/bin/env bash
set -e

APP_DIR="$(cd "$(dirname "$0")" && pwd)"
SERVICE_NAME="localhost.service"
SYSTEMD_PATH="/etc/systemd/system/localhost.service"

echo "Installing from: $APP_DIR"

# Replace placeholder in service file with actual path
sed "s|__APP_DIR__|$APP_DIR|g" "$APP_DIR/localhost.service" > /tmp/localhost.service

# normalize the script
chmod +x localhost.sh

# Copy service into systemd
sudo cp /tmp/localhost.service $SYSTEMD_PATH

# Reload systemd
sudo systemctl daemon-reload

# Enable and start immediately
sudo systemctl enable --now localhost
sudo systemctl restart localhost

echo "Installed and running."