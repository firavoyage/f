# . script

```sh
# disable fullscreen logout prompt overlay when gnome shell lies that it could not recover
systemctl --user disable gnome-session-failed.service
systemctl --user mask gnome-session-failed.service
# killall gnome-session-failed
```

# . result

```
 ~ % journalctl --user -u gnome-session-failed.service

Sep 30 18:04:46 Fira systemd[1747]: Started gnome-session-failed.service - GNOME Session Failed lockdown screen (user).
Sep 30 18:05:29 Fira systemd[1747]: Stopped gnome-session-failed.service - GNOME Session Failed lockdown screen (user).
```

```
 ~ % journalctl --user -b 0 | grep -i gnome-shell
Sep 16 19:04:31 Fira gnome-shell[3177]: Running GNOME Shell (using mutter 46.2) as a X11 window and compositing manager
Sep 16 19:04:32 Fira at-spi-bus-launcher[3071]: dbus-daemon[3071]: Activating service name='org.a11y.atspi.Registry' requested by ':1.1' (uid=1000 pid=3177 comm="/usr/bin/gnome-shell" label="unconfined")
Sep 16 19:04:32 Fira gnome-shell[3177]: Unset XDG_SESSION_ID, getCurrentSessionProxy() called outside a user session. Asking logind directly.
Sep 16 19:04:32 Fira gnome-shell[3177]: Will monitor session 3
Sep 16 19:04:32 Fira dbus-daemon[2056]: [session uid=1000 pid=2056] Activating service name='org.gnome.Shell.Screencast' requested by ':1.39' (uid=1000 pid=3177 comm="/usr/bin/gnome-shell" label="unconfined")
Sep 16 19:04:32 Fira dbus-daemon[2056]: [session uid=1000 pid=2056] Activating service name='org.gnome.Shell.CalendarServer' requested by ':1.39' (uid=1000 pid=3177 comm="/usr/bin/gnome-shell" label="unconfined")
Sep 16 19:04:32 Fira dbus-daemon[2056]: [session uid=1000 pid=2056] Activating via systemd: service name='org.gnome.evolution.dataserver.Sources5' unit='evolution-source-registry.service' requested by ':1.44' (uid=1000 pid=3307 comm="/usr/libexec/gnome-shell-calendar-server" label="unconfined")
Sep 16 19:04:33 Fira dbus-daemon[2056]: [session uid=1000 pid=2056] Activating via systemd: service name='ca.desrt.dconf' unit='dconf.service' requested by ':1.39' (uid=1000 pid=3177 comm="/usr/bin/gnome-shell" label="unconfined")
Sep 16 19:04:33 Fira dbus-daemon[2056]: [session uid=1000 pid=2056] Activating via systemd: service name='org.gtk.vfs.Metadata' unit='gvfs-metadata.service' requested by ':1.39' (uid=1000 pid=3177 comm="/usr/bin/gnome-shell" label="unconfined")
Sep 16 19:04:33 Fira dbus-daemon[2056]: [session uid=1000 pid=2056] Activating via systemd: service name='org.gnome.evolution.dataserver.Calendar8' unit='evolution-calendar-factory.service' requested by ':1.44' (uid=1000 pid=3307 comm="/usr/libexec/gnome-shell-calendar-server" label="unconfined")
Sep 16 19:04:33 Fira dbus-daemon[2056]: [session uid=1000 pid=2056] Activating service name='org.gnome.Shell.Notifications' requested by ':1.39' (uid=1000 pid=3177 comm="/usr/bin/gnome-shell" label="unconfined")
Sep 16 19:04:33 Fira gnome-shell[3177]: Failed to get METAR data: Error resolving “aviationweather.gov”: No address associated with hostname
Sep 16 19:04:33 Fira gnome-shell[3177]: Failed to get met.no forecast data: Error resolving “aa037rv1tsaszxi6o.api.met.no”: No address associated with hostname
Sep 16 19:04:33 Fira gnome-shell[3177]: Gio.UnixInputStream has been moved to a separate platform-specific library. Please update your code to use GioUnix.InputStream instead.
Sep 16 19:04:33 Fira gnome-shell[3177]: Error looking up permission: GDBus.Error:org.freedesktop.portal.Error.NotFound: No entry for geolocation
Sep 16 19:04:33 Fira dbus-daemon[2056]: [session uid=1000 pid=2056] Activating via systemd: service name='org.gtk.vfs.UDisks2VolumeMonitor' unit='gvfs-udisks2-volume-monitor.service' requested by ':1.39' (uid=1000 pid=3177 comm="/usr/bin/gnome-shell" label="unconfined")
Sep 16 19:04:33 Fira dbus-daemon[2056]: [session uid=1000 pid=2056] Activating via systemd: service name='org.gtk.vfs.GoaVolumeMonitor' unit='gvfs-goa-volume-monitor.service' requested by ':1.39' (uid=1000 pid=3177 comm="/usr/bin/gnome-shell" label="unconfined")
Sep 16 19:04:33 Fira dbus-daemon[2056]: [session uid=1000 pid=2056] Activating via systemd: service name='org.gtk.vfs.AfcVolumeMonitor' unit='gvfs-afc-volume-monitor.service' requested by ':1.39' (uid=1000 pid=3177 comm="/usr/bin/gnome-shell" label="unconfined")
Sep 16 19:04:33 Fira dbus-daemon[2056]: [session uid=1000 pid=2056] Activating via systemd: service name='org.gtk.vfs.MTPVolumeMonitor' unit='gvfs-mtp-volume-monitor.service' requested by ':1.39' (uid=1000 pid=3177 comm="/usr/bin/gnome-shell" label="unconfined")
Sep 16 19:04:33 Fira dbus-daemon[2056]: [session uid=1000 pid=2056] Activating via systemd: service name='org.gtk.vfs.GPhoto2VolumeMonitor' unit='gvfs-gphoto2-volume-monitor.service' requested by ':1.39' (uid=1000 pid=3177 comm="/usr/bin/gnome-shell" label="unconfined")
Sep 16 19:04:33 Fira gnome-shell[3177]: Lilypad extension started...
Sep 16 19:04:35 Fira gnome-shell[3177]: Update check failed: Error resolving “extensions.gnome.org”: No address associated with hostname
Sep 16 19:04:35 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 38 with keysym 38 (keycode 11).
Sep 16 19:04:35 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 38 with keysym 38 (keycode 11).
Sep 16 19:04:35 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 36 with keysym 36 (keycode f).
Sep 16 19:04:35 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 37 with keysym 37 (keycode 10).
Sep 16 19:04:35 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 32 with keysym 32 (keycode b).
Sep 16 19:04:35 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 39 with keysym 39 (keycode 12).
Sep 16 19:04:35 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 33 with keysym 33 (keycode c).
Sep 16 19:04:35 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 31 with keysym 31 (keycode a).
Sep 16 19:04:35 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 34 with keysym 34 (keycode d).
Sep 16 19:04:35 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 33 with keysym 33 (keycode c).
Sep 16 19:04:35 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 32 with keysym 32 (keycode b).
Sep 16 19:04:35 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 34 with keysym 34 (keycode d).
Sep 16 19:04:35 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 37 with keysym 37 (keycode 10).
Sep 16 19:04:35 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 36 with keysym 36 (keycode f).
Sep 16 19:04:35 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 39 with keysym 39 (keycode 12).
Sep 16 19:04:35 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 31 with keysym 31 (keycode a).
Sep 16 19:04:35 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 35 with keysym 35 (keycode e).
Sep 16 19:04:35 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 35 with keysym 35 (keycode e).
Sep 16 19:04:35 Fira gnome-shell[3177]: Can't update stage views actor unnamed [MetaWindowGroup] is on because it needs an allocation.
Sep 16 19:04:35 Fira gnome-shell[3177]: Can't update stage views actor unnamed [MetaWindowActorX11] is on because it needs an allocation.
Sep 16 19:04:35 Fira gnome-shell[3177]: Can't update stage views actor unnamed [MetaSurfaceActorX11] is on because it needs an allocation.
Sep 16 19:04:35 Fira gnome-shell[3177]: Can't update stage views actor unnamed [MetaWindowGroup] is on because it needs an allocation.
Sep 16 19:04:35 Fira gnome-shell[3177]: Can't update stage views actor unnamed [MetaWindowActorX11] is on because it needs an allocation.
Sep 16 19:04:35 Fira gnome-shell[3177]: Can't update stage views actor unnamed [MetaSurfaceActorX11] is on because it needs an allocation.
Sep 16 19:04:36 Fira gnome-shell[3177]: GNOME Shell started at Wed Sep 16 2026 19:04:33 GMT+0800 (Taipei Standard Time)
Sep 16 19:04:36 Fira gnome-shell[3177]: Registering session with GDM
Sep 16 19:04:36 Fira gnome-shell[3177]: Launching DING process
Sep 16 19:04:36 Fira gnome-shell[3177]: Can't update stage views actor unnamed [MetaWindowActorX11] is on because it needs an allocation.
Sep 16 19:04:36 Fira gnome-shell[3177]: Can't update stage views actor unnamed [MetaSurfaceActorX11] is on because it needs an allocation.
Sep 16 19:04:36 Fira gnome-shell[3177]: Can't update stage views actor unnamed [MetaWindowActorX11] is on because it needs an allocation.
Sep 16 19:04:36 Fira gnome-shell[3177]: Can't update stage views actor unnamed [MetaSurfaceActorX11] is on because it needs an allocation.
Sep 16 19:04:36 Fira dbus-daemon[2056]: [session uid=1000 pid=2056] Activating service name='org.gnome.Nautilus' requested by ':1.121' (uid=1000 pid=4656 comm="gjs /usr/share/gnome-shell/extensions/ding@rasters" label="desktop-icons-ng (unconfined)")
Sep 16 19:04:36 Fira dbus-daemon[2056]: [session uid=1000 pid=2056] Activating service name='org.gnome.ArchiveManager1' requested by ':1.121' (uid=1000 pid=4656 comm="gjs /usr/share/gnome-shell/extensions/ding@rasters" label="desktop-icons-ng (unconfined)")
Sep 16 19:04:36 Fira gnome-shell[3177]: DING: Detected async api for thumbnails
Sep 16 19:04:37 Fira gnome-shell[3177]: DING: (gjs:4656): Gjs-WARNING **: 19:04:37.010: GLib.unix_signal_add has been moved to a separate platform-specific library. Please update your code to use GLibUnix.signal_add instead.
Sep 16 19:04:37 Fira gnome-shell[3177]: DING: 0 DesktopManager() ["/usr/share/gnome-shell/extensions/ding@rastersoft.com/app/desktopManager.js":264:12]
Sep 16 19:04:37 Fira gnome-shell[3177]: DING: 1 anonymous() ["/usr/share/gnome-shell/extensions/ding@rastersoft.com/app/ding.js":180:25]
Sep 16 19:04:37 Fira gnome-shell[3177]: DING: 2 anonymous() ["/usr/share/gnome-shell/extensions/ding@rastersoft.com/app/ding.js":197:20]
Sep 16 19:04:37 Fira gnome-shell[3177]: DING: 3 <TOP LEVEL> ["/usr/share/gnome-shell/extensions/ding@rastersoft.com/app/ding.js":206:12]
Sep 16 19:04:37 Fira gnome-shell[3177]: DING: DBus interface for Switcheroo control (net.hadess.SwitcherooControl) is now available.
Sep 16 19:04:37 Fira gnome-shell[3177]: DING: DBus interface for Gvfs daemon (org.gtk.vfs.Metadata) is now available.
Sep 16 19:04:37 Fira gnome-shell[3177]: DING: ** Message: 19:04:37.093: Connecting to org.freedesktop.Tracker3.Miner.Files
Sep 16 19:04:37 Fira gnome-shell[3177]: DING: DBus interface for Nautilus (org.gnome.Nautilus.FileOperations2) is now available.
Sep 16 19:04:37 Fira gnome-shell[3177]: DING: DBus interface for Nautilus (org.freedesktop.FileManager1) is now available.
Sep 16 19:04:37 Fira gnome-shell[3177]: DING: DBus interface for File-roller (org.gnome.ArchiveManager1) is now available.
Sep 16 19:04:37 Fira gnome-shell[3177]: DING: GNOME nautilus 46.4
Sep 16 19:04:40 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 38 with keysym 38 (keycode 11).
Sep 16 19:04:40 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 38 with keysym 38 (keycode 11).
Sep 16 19:04:40 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 36 with keysym 36 (keycode f).
Sep 16 19:04:40 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 37 with keysym 37 (keycode 10).
Sep 16 19:04:40 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 32 with keysym 32 (keycode b).
Sep 16 19:04:40 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 39 with keysym 39 (keycode 12).
Sep 16 19:04:40 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 33 with keysym 33 (keycode c).
Sep 16 19:04:40 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 31 with keysym 31 (keycode a).
Sep 16 19:04:40 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 34 with keysym 34 (keycode d).
Sep 16 19:04:40 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 33 with keysym 33 (keycode c).
Sep 16 19:04:40 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 32 with keysym 32 (keycode b).
Sep 16 19:04:40 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 34 with keysym 34 (keycode d).
Sep 16 19:04:40 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 37 with keysym 37 (keycode 10).
Sep 16 19:04:40 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 36 with keysym 36 (keycode f).
Sep 16 19:04:40 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 39 with keysym 39 (keycode 12).
Sep 16 19:04:40 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 31 with keysym 31 (keycode a).
Sep 16 19:04:40 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 35 with keysym 35 (keycode e).
Sep 16 19:04:40 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 35 with keysym 35 (keycode e).
Sep 16 19:04:43 Fira gnome-shell[3177]: Window manager warning: Buggy client sent a _NET_ACTIVE_WINDOW message with a timestamp of 0 for 0x4c00004
Sep 16 19:04:43 Fira gnome-shell[3177]: Can't update stage views actor unnamed [MetaWindowActorX11] is on because it needs an allocation.
Sep 16 19:04:43 Fira gnome-shell[3177]: Can't update stage views actor unnamed [MetaSurfaceActorX11] is on because it needs an allocation.
Sep 16 19:04:44 Fira gnome-shell[3177]: Gio.DBusError: GDBus.Error:org.freedesktop.DBus.Error.UnknownProperty: Unknown interface org.freedesktop.IBus or property Engines.
Sep 16 19:04:56 Fira gnome-shell[3177]: Window manager warning: Buggy client sent a _NET_ACTIVE_WINDOW message with a timestamp of 0 for 0x4800004
Sep 16 19:05:40 Fira systemd[1747]: Started app-gnome-gnome\x2dwifi\x2dpanel-7751.scope - Application launched by gnome-shell.
Sep 16 19:05:41 Fira gnome-shell[3177]: Window manager warning: Buggy client sent a _NET_ACTIVE_WINDOW message with a timestamp of 0 for 0x4a00004
Sep 16 19:06:02 Fira gnome-shell[3177]: Can't update stage views actor unnamed [MetaWindowActorX11] is on because it needs an allocation.
Sep 16 19:06:02 Fira gnome-shell[3177]: Can't update stage views actor unnamed [MetaSurfaceActorX11] is on because it needs an allocation.
Sep 16 19:11:12 Fira dbus-daemon[2056]: [session uid=1000 pid=2056] Activating service name='org.gnome.Nautilus' requested by ':1.39' (uid=1000 pid=3177 comm="/usr/bin/gnome-shell" label="unconfined")
Sep 16 19:11:12 Fira dbus-daemon[2056]: [session uid=1000 pid=2056] Activating service name='org.gnome.Calculator.SearchProvider' requested by ':1.39' (uid=1000 pid=3177 comm="/usr/bin/gnome-shell" label="unconfined")
Sep 16 19:11:12 Fira dbus-daemon[2056]: [session uid=1000 pid=2056] Activating service name='org.gnome.Calendar' requested by ':1.39' (uid=1000 pid=3177 comm="/usr/bin/gnome-shell" label="unconfined")
Sep 16 19:11:12 Fira dbus-daemon[2056]: [session uid=1000 pid=2056] Activating service name='org.gnome.Characters' requested by ':1.39' (uid=1000 pid=3177 comm="/usr/bin/gnome-shell" label="unconfined")
Sep 16 19:11:12 Fira dbus-daemon[2056]: [session uid=1000 pid=2056] Activating service name='org.gnome.clocks' requested by ':1.39' (uid=1000 pid=3177 comm="/usr/bin/gnome-shell" label="unconfined")
Sep 16 19:11:12 Fira dbus-daemon[2056]: [session uid=1000 pid=2056] Activating service name='org.gnome.seahorse.Application' requested by ':1.39' (uid=1000 pid=3177 comm="/usr/bin/gnome-shell" label="unconfined")
Sep 16 19:11:12 Fira dbus-daemon[2056]: [session uid=1000 pid=2056] Activating service name='org.gnome.Settings.SearchProvider' requested by ':1.39' (uid=1000 pid=3177 comm="/usr/bin/gnome-shell" label="unconfined")
Sep 16 19:11:12 Fira gnome-shell[3177]: Received error from D-Bus search provider org.gnome.Terminal.desktop: Gio.IOErrorEnum: Cannot invoke method; proxy is for the well-known name org.gnome.Terminal without an owner, and proxy was constructed with the G_DBUS_PROXY_FLAGS_DO_NOT_AUTO_START flag
Sep 16 19:11:13 Fira gnome-shell[3177]: Received error from D-Bus search provider org.gnome.Terminal.desktop: Gio.IOErrorEnum: Cannot invoke method; proxy is for the well-known name org.gnome.Terminal without an owner, and proxy was constructed with the G_DBUS_PROXY_FLAGS_DO_NOT_AUTO_START flag
Sep 16 19:11:13 Fira systemd[1747]: Started app-gnome-Clash\x20Verge-9344.scope - Application launched by gnome-shell.
Sep 16 19:11:13 Fira gnome-shell[3177]: Window manager warning: Buggy client sent a _NET_ACTIVE_WINDOW message with a timestamp of 0 for 0x220001e
Sep 16 19:11:45 Fira dbus-daemon[2056]: [session uid=1000 pid=2056] Activating service name='org.gnome.Nautilus' requested by ':1.39' (uid=1000 pid=3177 comm="/usr/bin/gnome-shell" label="unconfined")
Sep 16 19:11:45 Fira dbus-daemon[2056]: [session uid=1000 pid=2056] Activating service name='org.gnome.Calculator.SearchProvider' requested by ':1.39' (uid=1000 pid=3177 comm="/usr/bin/gnome-shell" label="unconfined")
Sep 16 19:11:45 Fira dbus-daemon[2056]: [session uid=1000 pid=2056] Activating service name='org.gnome.Characters' requested by ':1.39' (uid=1000 pid=3177 comm="/usr/bin/gnome-shell" label="unconfined")
Sep 16 19:11:45 Fira dbus-daemon[2056]: [session uid=1000 pid=2056] Activating service name='org.gnome.clocks' requested by ':1.39' (uid=1000 pid=3177 comm="/usr/bin/gnome-shell" label="unconfined")
Sep 16 19:11:45 Fira dbus-daemon[2056]: [session uid=1000 pid=2056] Activating service name='org.gnome.seahorse.Application' requested by ':1.39' (uid=1000 pid=3177 comm="/usr/bin/gnome-shell" label="unconfined")
Sep 16 19:11:45 Fira gnome-shell[3177]: Received error from D-Bus search provider org.gnome.Terminal.desktop: Gio.IOErrorEnum: Cannot invoke method; proxy is for the well-known name org.gnome.Terminal without an owner, and proxy was constructed with the G_DBUS_PROXY_FLAGS_DO_NOT_AUTO_START flag
Sep 16 19:11:45 Fira gnome-shell[3177]: Received error from D-Bus search provider org.gnome.Terminal.desktop: Gio.IOErrorEnum: Cannot invoke method; proxy is for the well-known name org.gnome.Terminal without an owner, and proxy was constructed with the G_DBUS_PROXY_FLAGS_DO_NOT_AUTO_START flag
Sep 16 19:13:27 Fira dbus-daemon[2056]: [session uid=1000 pid=2056] Activating service name='org.gnome.Nautilus' requested by ':1.39' (uid=1000 pid=3177 comm="/usr/bin/gnome-shell" label="unconfined")
Sep 16 19:13:27 Fira dbus-daemon[2056]: [session uid=1000 pid=2056] Activating service name='org.gnome.Calculator.SearchProvider' requested by ':1.39' (uid=1000 pid=3177 comm="/usr/bin/gnome-shell" label="unconfined")
Sep 16 19:13:27 Fira dbus-daemon[2056]: [session uid=1000 pid=2056] Activating service name='org.gnome.Characters' requested by ':1.39' (uid=1000 pid=3177 comm="/usr/bin/gnome-shell" label="unconfined")
Sep 16 19:13:27 Fira dbus-daemon[2056]: [session uid=1000 pid=2056] Activating service name='org.gnome.clocks' requested by ':1.39' (uid=1000 pid=3177 comm="/usr/bin/gnome-shell" label="unconfined")
Sep 16 19:13:27 Fira dbus-daemon[2056]: [session uid=1000 pid=2056] Activating service name='org.gnome.seahorse.Application' requested by ':1.39' (uid=1000 pid=3177 comm="/usr/bin/gnome-shell" label="unconfined")
Sep 16 19:13:27 Fira dbus-daemon[2056]: [session uid=1000 pid=2056] Activating service name='org.gnome.Settings.SearchProvider' requested by ':1.39' (uid=1000 pid=3177 comm="/usr/bin/gnome-shell" label="unconfined")
Sep 16 19:13:27 Fira gnome-shell[3177]: Received error from D-Bus search provider org.gnome.Terminal.desktop: Gio.IOErrorEnum: Cannot invoke method; proxy is for the well-known name org.gnome.Terminal without an owner, and proxy was constructed with the G_DBUS_PROXY_FLAGS_DO_NOT_AUTO_START flag
Sep 16 19:13:27 Fira gnome-shell[3177]: Received error from D-Bus search provider org.gnome.Terminal.desktop: Gio.IOErrorEnum: Cannot invoke method; proxy is for the well-known name org.gnome.Terminal without an owner, and proxy was constructed with the G_DBUS_PROXY_FLAGS_DO_NOT_AUTO_START flag
Sep 16 19:13:27 Fira dbus-daemon[2056]: [session uid=1000 pid=2056] Activating service name='org.gnome.seahorse.Application' requested by ':1.39' (uid=1000 pid=3177 comm="/usr/bin/gnome-shell" label="unconfined")
Sep 16 19:13:27 Fira gnome-shell[3177]: Received error from D-Bus search provider org.gnome.Terminal.desktop: Gio.IOErrorEnum: Cannot invoke method; proxy is for the well-known name org.gnome.Terminal without an owner, and proxy was constructed with the G_DBUS_PROXY_FLAGS_DO_NOT_AUTO_START flag
Sep 16 19:13:31 Fira systemd[1747]: Started app-gnome-Clash\x20Verge-10706.scope - Application launched by gnome-shell.
Sep 16 19:13:33 Fira dbus-daemon[2056]: [session uid=1000 pid=2056] Activating service name='org.gnome.seahorse.Application' requested by ':1.39' (uid=1000 pid=3177 comm="/usr/bin/gnome-shell" label="unconfined")
Sep 16 19:13:33 Fira gnome-shell[3177]: Received error from D-Bus search provider org.gnome.Terminal.desktop: Gio.IOErrorEnum: Cannot invoke method; proxy is for the well-known name org.gnome.Terminal without an owner, and proxy was constructed with the G_DBUS_PROXY_FLAGS_DO_NOT_AUTO_START flag
Sep 16 19:13:34 Fira dbus-daemon[2056]: [session uid=1000 pid=2056] Activating service name='org.gnome.seahorse.Application' requested by ':1.39' (uid=1000 pid=3177 comm="/usr/bin/gnome-shell" label="unconfined")
Sep 16 19:13:34 Fira gnome-shell[3177]: Received error from D-Bus search provider org.gnome.Terminal.desktop: Gio.IOErrorEnum: Cannot invoke method; proxy is for the well-known name org.gnome.Terminal without an owner, and proxy was constructed with the G_DBUS_PROXY_FLAGS_DO_NOT_AUTO_START flag
Sep 16 19:13:34 Fira gnome-shell[3177]: Received error from D-Bus search provider org.gnome.Terminal.desktop: Gio.IOErrorEnum: Cannot invoke method; proxy is for the well-known name org.gnome.Terminal without an owner, and proxy was constructed with the G_DBUS_PROXY_FLAGS_DO_NOT_AUTO_START flag
Sep 16 19:13:35 Fira dbus-daemon[2056]: [session uid=1000 pid=2056] Activating service name='org.gnome.seahorse.Application' requested by ':1.39' (uid=1000 pid=3177 comm="/usr/bin/gnome-shell" label="unconfined")
Sep 16 19:13:35 Fira gnome-shell[3177]: Received error from D-Bus search provider org.gnome.Terminal.desktop: Gio.IOErrorEnum: Cannot invoke method; proxy is for the well-known name org.gnome.Terminal without an owner, and proxy was constructed with the G_DBUS_PROXY_FLAGS_DO_NOT_AUTO_START flag
Sep 16 19:13:35 Fira dbus-daemon[2056]: [session uid=1000 pid=2056] Activating service name='org.gnome.Extensions' requested by ':1.39' (uid=1000 pid=3177 comm="/usr/bin/gnome-shell" label="unconfined")
Sep 16 19:13:36 Fira gnome-shell[3177]: Window manager warning: Buggy client sent a _NET_ACTIVE_WINDOW message with a timestamp of 0 for 0x4a00004
Sep 16 19:13:39 Fira gnome-shell[3177]: JS ERROR: TypeError: this._containerService is null
                                        rearrange@file:///home/fira/.local/share/gnome-shell/extensions/lilypad@shendrew.github.io/extension.js:73:13
                                        enable/Panel.Panel.prototype.addToStatusArea/destroyID<@file:///home/fira/.local/share/gnome-shell/extensions/lilypad@shendrew.github.io/extension.js:84:17
                                        disable@file:///home/fira/.local/share/gnome-shell/extensions/lilypad@shendrew.github.io/extension.js:172:33
Sep 16 19:13:39 Fira gnome-shell[3177]: Object St.Icon (0x5ee144cb9120), has been already disposed — impossible to access it. This might be caused by the object having been destroyed from C code using something such as destroy(), dispose(), or remove() vfuncs.
                                        #0   5ee141f2f210 i   file:///home/fira/.local/share/gnome-shell/extensions/lilypad@shendrew.github.io/extension.js:175 (38325c9ceec0 @ 244)
Sep 16 19:13:39 Fira gnome-shell[3177]: Lilypad extension stopped.
Sep 16 19:13:39 Fira gnome-shell[3177]: Object .Gjs_ubuntu-appindicators_ubuntu_com_appIndicator_AppIndicatorsIconActor (0x5ee147bc8dc0), has been already disposed — impossible to access it. This might be caused by the object having been destroyed from C code using something such as destroy(), dispose(), or remove() vfuncs.
                                        #0   7ffe34ddf130 b   file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/appIndicator.js:984 (52b0500b290 @ 41)
                                        #1   7ffe34ddf850 b   file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/appIndicator.js:998 (52b0500b290 @ 312)
Sep 16 19:13:39 Fira gnome-shell[3177]: Object .Gjs_ubuntu-appindicators_ubuntu_com_appIndicator_AppIndicatorsIconActor (0x5ee147bc8dc0), has been already disposed — impossible to connect to any signal on it. This might be caused by the object having been destroyed from C code using something such as destroy(), dispose(), or remove() vfuncs.
                                        #1   7ffe34dde480 b   file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/promiseUtils.js:145 (52b0500c9c0 @ 23)
                                        #2   5ee141f2eec8 i   file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/promiseUtils.js:149 (52b0500c970 @ 97)
                                        #3   7ffe34ddef50 b   file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/promiseUtils.js:40 (52b0500c470 @ 299)
                                        #4   7ffe34ddf030 b   file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/promiseUtils.js:142 (52b0500c920 @ 349)
                                        #5   7ffe34ddf130 b   file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/appIndicator.js:985 (52b0500b290 @ 103)
                                        #6   7ffe34ddf850 b   file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/appIndicator.js:998 (52b0500b290 @ 312)
Sep 16 19:13:39 Fira gnome-shell[3177]: Object .Gjs_ubuntu-appindicators_ubuntu_com_appIndicator_AppIndicatorsIconActor (0x5ee147bc8dc0), has been already disposed — impossible to connect to any signal on it. This might be caused by the object having been destroyed from C code using something such as destroy(), dispose(), or remove() vfuncs.
                                        #1   7ffe34dde480 b   file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/promiseUtils.js:145 (52b0500c9c0 @ 23)
                                        #2   5ee141f2eec8 i   file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/promiseUtils.js:159 (52b0500c970 @ 232)
                                        #3   7ffe34ddef50 b   file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/promiseUtils.js:40 (52b0500c470 @ 299)
                                        #4   7ffe34ddf030 b   file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/promiseUtils.js:142 (52b0500c920 @ 349)
                                        #5   7ffe34ddf130 b   file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/appIndicator.js:985 (52b0500b290 @ 103)
                                        #6   7ffe34ddf850 b   file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/appIndicator.js:998 (52b0500b290 @ 312)
Sep 16 19:13:39 Fira gnome-shell[3177]: Object .Gjs_ubuntu-appindicators_ubuntu_com_appIndicator_AppIndicatorsIconActor (0x5ee147bc8dc0), has been already disposed — impossible to access it. This might be caused by the object having been destroyed from C code using something such as destroy(), dispose(), or remove() vfuncs.
                                        #0   7ffe34ddf7a0 b   file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/appIndicator.js:984 (52b0500b290 @ 41)
                                        #1   7ffe34ddf850 b   file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/appIndicator.js:998 (52b0500b290 @ 312)
Sep 16 19:13:39 Fira gnome-shell[3177]: Object .Gjs_ubuntu-appindicators_ubuntu_com_appIndicator_AppIndicatorsIconActor (0x5ee147bc8dc0), has been already disposed — impossible to connect to any signal on it. This might be caused by the object having been destroyed from C code using something such as destroy(), dispose(), or remove() vfuncs.
                                        #1   7ffe34ddeba0 b   file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/promiseUtils.js:145 (52b0500c9c0 @ 23)
                                        #2   5ee141f2eec8 i   file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/promiseUtils.js:149 (52b0500c970 @ 97)
                                        #3   7ffe34ddf5c0 b   file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/promiseUtils.js:40 (52b0500c470 @ 299)
                                        #4   7ffe34ddf6a0 b   file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/promiseUtils.js:142 (52b0500c920 @ 349)
                                        #5   7ffe34ddf7a0 b   file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/appIndicator.js:985 (52b0500b290 @ 103)
                                        #6   7ffe34ddf850 b   file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/appIndicator.js:998 (52b0500b290 @ 312)
Sep 16 19:13:39 Fira gnome-shell[3177]: Object .Gjs_ubuntu-appindicators_ubuntu_com_appIndicator_AppIndicatorsIconActor (0x5ee147bc8dc0), has been already disposed — impossible to connect to any signal on it. This might be caused by the object having been destroyed from C code using something such as destroy(), dispose(), or remove() vfuncs.
                                        #1   7ffe34ddeba0 b   file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/promiseUtils.js:145 (52b0500c9c0 @ 23)
                                        #2   5ee141f2eec8 i   file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/promiseUtils.js:159 (52b0500c970 @ 232)
                                        #3   7ffe34ddf5c0 b   file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/promiseUtils.js:40 (52b0500c470 @ 299)
                                        #4   7ffe34ddf6a0 b   file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/promiseUtils.js:142 (52b0500c920 @ 349)
                                        #5   7ffe34ddf7a0 b   file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/appIndicator.js:985 (52b0500b290 @ 103)
                                        #6   7ffe34ddf850 b   file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/appIndicator.js:998 (52b0500b290 @ 312)
Sep 16 19:13:39 Fira gnome-shell[3177]: Object .Gjs_ubuntu-appindicators_ubuntu_com_appIndicator_AppIndicatorsIconActor (0x5ee144bde240), has been already disposed — impossible to access it. This might be caused by the object having been destroyed from C code using something such as destroy(), dispose(), or remove() vfuncs.
                                        #0   7ffe34ddf7a0 b   file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/appIndicator.js:984 (52b0500b290 @ 41)
                                        #1   7ffe34ddf850 b   file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/appIndicator.js:998 (52b0500b290 @ 312)
Sep 16 19:13:39 Fira gnome-shell[3177]: Object .Gjs_ubuntu-appindicators_ubuntu_com_appIndicator_AppIndicatorsIconActor (0x5ee144bde240), has been already disposed — impossible to connect to any signal on it. This might be caused by the object having been destroyed from C code using something such as destroy(), dispose(), or remove() vfuncs.
                                        #1   7ffe34ddeba0 b   file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/promiseUtils.js:145 (52b0500c9c0 @ 23)
                                        #2   5ee141f2eec8 i   file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/promiseUtils.js:149 (52b0500c970 @ 97)
                                        #3   7ffe34ddf5c0 b   file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/promiseUtils.js:40 (52b0500c470 @ 299)
                                        #4   7ffe34ddf6a0 b   file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/promiseUtils.js:142 (52b0500c920 @ 349)
                                        #5   7ffe34ddf7a0 b   file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/appIndicator.js:985 (52b0500b290 @ 103)
                                        #6   7ffe34ddf850 b   file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/appIndicator.js:998 (52b0500b290 @ 312)
Sep 16 19:13:39 Fira gnome-shell[3177]: Object .Gjs_ubuntu-appindicators_ubuntu_com_appIndicator_AppIndicatorsIconActor (0x5ee144bde240), has been already disposed — impossible to connect to any signal on it. This might be caused by the object having been destroyed from C code using something such as destroy(), dispose(), or remove() vfuncs.
                                        #1   7ffe34ddeba0 b   file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/promiseUtils.js:145 (52b0500c9c0 @ 23)
                                        #2   5ee141f2eec8 i   file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/promiseUtils.js:159 (52b0500c970 @ 232)
                                        #3   7ffe34ddf5c0 b   file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/promiseUtils.js:40 (52b0500c470 @ 299)
                                        #4   7ffe34ddf6a0 b   file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/promiseUtils.js:142 (52b0500c920 @ 349)
                                        #5   7ffe34ddf7a0 b   file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/appIndicator.js:985 (52b0500b290 @ 103)
                                        #6   7ffe34ddf850 b   file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/appIndicator.js:998 (52b0500b290 @ 312)
Sep 16 19:13:39 Fira gnome-shell[3177]: Object .Gjs_ubuntu-appindicators_ubuntu_com_appIndicator_AppIndicatorsIconActor (0x5ee147be7e60), has been already disposed — impossible to access it. This might be caused by the object having been destroyed from C code using something such as destroy(), dispose(), or remove() vfuncs.
                                        #0   7ffe34ddf7a0 b   file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/appIndicator.js:984 (52b0500b290 @ 41)
                                        #1   7ffe34ddf850 b   file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/appIndicator.js:998 (52b0500b290 @ 312)
Sep 16 19:13:39 Fira gnome-shell[3177]: Object .Gjs_ubuntu-appindicators_ubuntu_com_appIndicator_AppIndicatorsIconActor (0x5ee147be7e60), has been already disposed — impossible to connect to any signal on it. This might be caused by the object having been destroyed from C code using something such as destroy(), dispose(), or remove() vfuncs.
                                        #1   7ffe34dde7d0 b   file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/promiseUtils.js:145 (52b0500c9c0 @ 23)
                                        #2   7ffe34ddef20 b   file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/promiseUtils.js:149 (52b0500c970 @ 97)
                                        #3   7ffe34ddf5c0 b   file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/promiseUtils.js:40 (52b0500c470 @ 299)
                                        #4   7ffe34ddf6a0 b   file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/promiseUtils.js:142 (52b0500c920 @ 349)
                                        #5   7ffe34ddf7a0 b   file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/appIndicator.js:985 (52b0500b290 @ 103)
                                        #6   7ffe34ddf850 b   file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/appIndicator.js:998 (52b0500b290 @ 312)
Sep 16 19:13:39 Fira gnome-shell[3177]: Object .Gjs_ubuntu-appindicators_ubuntu_com_appIndicator_AppIndicatorsIconActor (0x5ee147be7e60), has been already disposed — impossible to connect to any signal on it. This might be caused by the object having been destroyed from C code using something such as destroy(), dispose(), or remove() vfuncs.
                                        #1   7ffe34dde7d0 b   file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/promiseUtils.js:145 (52b0500c9c0 @ 23)
                                        #2   7ffe34ddef20 b   file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/promiseUtils.js:159 (52b0500c970 @ 232)
                                        #3   7ffe34ddf5c0 b   file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/promiseUtils.js:40 (52b0500c470 @ 299)
                                        #4   7ffe34ddf6a0 b   file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/promiseUtils.js:142 (52b0500c920 @ 349)
                                        #5   7ffe34ddf7a0 b   file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/appIndicator.js:985 (52b0500b290 @ 103)
                                        #6   7ffe34ddf850 b   file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/appIndicator.js:998 (52b0500b290 @ 312)
Sep 16 19:13:39 Fira gnome-shell[3177]: TypeError: this._indicator is null
                                          _waitForFullyReady@file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/appIndicator.js:989:13
                                          _waitForFullyReady@file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/appIndicator.js:998:21
                                          async*_invalidateIconWhenFullyReady@file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/appIndicator.js:1526:24
                                          _init/<@file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/appIndicator.js:935:24
                                          reset@file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/appIndicator.js:718:14
                                          _ensureItemRegistered@file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/statusNotifierWatcher.js:136:18
                                          RegisterStatusNotifierItemAsync@file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/statusNotifierWatcher.js:205:24
Sep 16 19:13:39 Fira gnome-shell[3177]: TypeError: this._indicator is null
                                          _waitForFullyReady@file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/appIndicator.js:989:13
                                          _waitForFullyReady@file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/appIndicator.js:998:21
                                          async*_updateWhenFullyReady@file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/appIndicator.js:1007:24
                                          _init/<@file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/appIndicator.js:962:22
                                          arrange/<@file:///home/fira/.local/share/gnome-shell/extensions/lilypad@shendrew.github.io/src/containerService.js:88:26
                                          arrange@file:///home/fira/.local/share/gnome-shell/extensions/lilypad@shendrew.github.io/src/containerService.js:78:19
                                          rearrange@file:///home/fira/.local/share/gnome-shell/extensions/lilypad@shendrew.github.io/extension.js:73:36
                                          enable/Panel.Panel.prototype.addToStatusArea/destroyID<@file:///home/fira/.local/share/gnome-shell/extensions/lilypad@shendrew.github.io/extension.js:84:17
                                          destroy@file:///usr/share/gnome-shell/extensions/tiling-assistant@ubuntu.com/src/extension/layoutsManager.js:93:30
                                          disable@file:///usr/share/gnome-shell/extensions/tiling-assistant@ubuntu.com/extension.js:241:30
Sep 16 19:13:39 Fira gnome-shell[3177]: TypeError: this._indicator is null
                                          _waitForFullyReady@file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/appIndicator.js:989:13
                                          _waitForFullyReady@file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/appIndicator.js:998:21
                                          async*_updateWhenFullyReady@file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/appIndicator.js:1007:24
                                          _init/<@file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/appIndicator.js:962:22
                                          arrange/<@file:///home/fira/.local/share/gnome-shell/extensions/lilypad@shendrew.github.io/src/containerService.js:88:26
                                          arrange@file:///home/fira/.local/share/gnome-shell/extensions/lilypad@shendrew.github.io/src/containerService.js:78:19
                                          rearrange@file:///home/fira/.local/share/gnome-shell/extensions/lilypad@shendrew.github.io/extension.js:73:36
                                          enable/Panel.Panel.prototype.addToStatusArea/destroyID<@file:///home/fira/.local/share/gnome-shell/extensions/lilypad@shendrew.github.io/extension.js:84:17
                                          destroy@file:///usr/share/gnome-shell/extensions/tiling-assistant@ubuntu.com/src/extension/layoutsManager.js:93:30
                                          disable@file:///usr/share/gnome-shell/extensions/tiling-assistant@ubuntu.com/extension.js:241:30
Sep 16 19:13:39 Fira gnome-shell[3177]: TypeError: this._indicator is null
                                          _waitForFullyReady@file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/appIndicator.js:989:13
                                          _waitForFullyReady@file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/appIndicator.js:998:21
                                          async*_waitForFullyReady@file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/appIndicator.js:998:21
                                          async*_waitForFullyReady@file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/appIndicator.js:998:21
                                          async*_waitForFullyReady@file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/appIndicator.js:998:21
                                          async*_waitForFullyReady@file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/appIndicator.js:998:21
                                          async*_updateWhenFullyReady@file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/appIndicator.js:1007:24
                                          _init@file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/appIndicator.js:965:14
                                          AppIndicatorsIconActor@file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/appIndicator.js:879:1
                                          _init@file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/indicatorStatusIcon.js:227:13
                                          IndicatorBaseStatusIcon@file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/indicatorStatusIcon.js:68:1
                                          IndicatorStatusIcon@file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/indicatorStatusIcon.js:224:1
                                          _registerItem@file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/statusNotifierWatcher.js:115:32
                                          async*_ensureItemRegistered@file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/statusNotifierWatcher.js:140:20
                                          RegisterStatusNotifierItemAsync@file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/statusNotifierWatcher.js:205:24
Sep 16 19:13:39 Fira gnome-shell[3177]: Launching DING process
Sep 16 19:13:39 Fira dbus-daemon[2056]: [session uid=1000 pid=2056] Activating service name='org.gnome.ArchiveManager1' requested by ':1.193' (uid=1000 pid=11001 comm="gjs /usr/share/gnome-shell/extensions/ding@rasters" label="desktop-icons-ng (unconfined)")
Sep 16 19:13:39 Fira gnome-shell[3177]: DING: Detected async api for thumbnails
Sep 16 19:13:39 Fira gnome-shell[3177]: DING: (gjs:11001): Gjs-WARNING **: 19:13:39.792: GLib.unix_signal_add has been moved to a separate platform-specific library. Please update your code to use GLibUnix.signal_add instead.
Sep 16 19:13:39 Fira gnome-shell[3177]: DING: 0 DesktopManager() ["/usr/share/gnome-shell/extensions/ding@rastersoft.com/app/desktopManager.js":264:12]
Sep 16 19:13:39 Fira gnome-shell[3177]: DING: 1 anonymous() ["/usr/share/gnome-shell/extensions/ding@rastersoft.com/app/ding.js":180:25]
Sep 16 19:13:39 Fira gnome-shell[3177]: DING: 2 anonymous() ["/usr/share/gnome-shell/extensions/ding@rastersoft.com/app/ding.js":197:20]
Sep 16 19:13:39 Fira gnome-shell[3177]: DING: 3 <TOP LEVEL> ["/usr/share/gnome-shell/extensions/ding@rastersoft.com/app/ding.js":206:12]
Sep 16 19:13:39 Fira gnome-shell[3177]: DING: DBus interface for Gvfs daemon (org.gtk.vfs.Metadata) is now available.
Sep 16 19:13:39 Fira gnome-shell[3177]: DING: DBus interface for Switcheroo control (net.hadess.SwitcherooControl) is now available.
Sep 16 19:13:39 Fira gnome-shell[3177]: DING: DBus interface for Nautilus (org.gnome.Nautilus.FileOperations2) is now available.
Sep 16 19:13:39 Fira gnome-shell[3177]: DING: DBus interface for Nautilus (org.freedesktop.FileManager1) is now available.
Sep 16 19:13:39 Fira gnome-shell[3177]: DING: ** Message: 19:13:39.842: Connecting to org.freedesktop.Tracker3.Miner.Files
Sep 16 19:13:39 Fira gnome-shell[3177]: DING: GNOME nautilus 46.4
Sep 16 19:13:39 Fira gnome-shell[3177]: DING: DBus interface for File-roller (org.gnome.ArchiveManager1) is now available.
Sep 16 19:13:39 Fira gnome-shell[3177]: Can't update stage views actor panelRight [StBoxLayout] is on because it needs an allocation.
Sep 16 19:13:39 Fira gnome-shell[3177]: Can't update stage views actor unnamed [StBin] is on because it needs an allocation.
Sep 16 19:13:39 Fira gnome-shell[3177]: Can't update stage views actor unnamed [Gjs_ubuntu-appindicators_ubuntu_com_indicatorStatusIcon_IndicatorTrayIcon] is on because it needs an allocation.
Sep 16 19:13:39 Fira gnome-shell[3177]: Can't update stage views actor unnamed [StBoxLayout] is on because it needs an allocation.
Sep 16 19:13:39 Fira gnome-shell[3177]: Can't update stage views actor unnamed [ShellTrayIcon] is on because it needs an allocation.
Sep 16 19:13:39 Fira gnome-shell[3177]: Can't update stage views actor unnamed [MetaWindowActorX11] is on because it needs an allocation.
Sep 16 19:13:39 Fira gnome-shell[3177]: Can't update stage views actor unnamed [MetaSurfaceActorX11] is on because it needs an allocation.
Sep 16 19:13:40 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 35 with keysym 35 (keycode e).
Sep 16 19:13:40 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 31 with keysym 31 (keycode a).
Sep 16 19:13:40 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 37 with keysym 37 (keycode 10).
Sep 16 19:13:40 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 33 with keysym 33 (keycode c).
Sep 16 19:13:40 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 38 with keysym 38 (keycode 11).
Sep 16 19:13:40 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 34 with keysym 34 (keycode d).
Sep 16 19:13:40 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 31 with keysym 31 (keycode a).
Sep 16 19:13:40 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 36 with keysym 36 (keycode f).
Sep 16 19:13:40 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 32 with keysym 32 (keycode b).
Sep 16 19:13:40 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 34 with keysym 34 (keycode d).
Sep 16 19:13:40 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 39 with keysym 39 (keycode 12).
Sep 16 19:13:40 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 33 with keysym 33 (keycode c).
Sep 16 19:13:40 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 35 with keysym 35 (keycode e).
Sep 16 19:13:40 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 36 with keysym 36 (keycode f).
Sep 16 19:13:40 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 38 with keysym 38 (keycode 11).
Sep 16 19:13:40 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 39 with keysym 39 (keycode 12).
Sep 16 19:13:40 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 37 with keysym 37 (keycode 10).
Sep 16 19:13:40 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 32 with keysym 32 (keycode b).
Sep 16 19:13:52 Fira dbus-daemon[2056]: [session uid=1000 pid=2056] Activating service name='org.gnome.Nautilus' requested by ':1.39' (uid=1000 pid=3177 comm="/usr/bin/gnome-shell" label="unconfined")
Sep 16 19:13:52 Fira dbus-daemon[2056]: [session uid=1000 pid=2056] Activating service name='org.gnome.Calculator.SearchProvider' requested by ':1.39' (uid=1000 pid=3177 comm="/usr/bin/gnome-shell" label="unconfined")
Sep 16 19:13:52 Fira dbus-daemon[2056]: [session uid=1000 pid=2056] Activating service name='org.gnome.Characters' requested by ':1.39' (uid=1000 pid=3177 comm="/usr/bin/gnome-shell" label="unconfined")
Sep 16 19:13:52 Fira dbus-daemon[2056]: [session uid=1000 pid=2056] Activating service name='org.gnome.clocks' requested by ':1.39' (uid=1000 pid=3177 comm="/usr/bin/gnome-shell" label="unconfined")
Sep 16 19:13:52 Fira dbus-daemon[2056]: [session uid=1000 pid=2056] Activating service name='org.gnome.seahorse.Application' requested by ':1.39' (uid=1000 pid=3177 comm="/usr/bin/gnome-shell" label="unconfined")
Sep 16 19:13:52 Fira gnome-shell[3177]: Received error from D-Bus search provider org.gnome.Terminal.desktop: Gio.IOErrorEnum: Cannot invoke method; proxy is for the well-known name org.gnome.Terminal without an owner, and proxy was constructed with the G_DBUS_PROXY_FLAGS_DO_NOT_AUTO_START flag
Sep 16 19:13:52 Fira gnome-shell[3177]: Received error from D-Bus search provider org.gnome.Terminal.desktop: Gio.IOErrorEnum: Cannot invoke method; proxy is for the well-known name org.gnome.Terminal without an owner, and proxy was constructed with the G_DBUS_PROXY_FLAGS_DO_NOT_AUTO_START flag
Sep 16 19:13:53 Fira dbus-daemon[2056]: [session uid=1000 pid=2056] Activating service name='org.gnome.seahorse.Application' requested by ':1.39' (uid=1000 pid=3177 comm="/usr/bin/gnome-shell" label="unconfined")
Sep 16 19:13:53 Fira gnome-shell[3177]: Received error from D-Bus search provider org.gnome.Terminal.desktop: Gio.IOErrorEnum: Cannot invoke method; proxy is for the well-known name org.gnome.Terminal without an owner, and proxy was constructed with the G_DBUS_PROXY_FLAGS_DO_NOT_AUTO_START flag
Sep 16 19:13:54 Fira systemd[1747]: Started app-gnome-net.nokyan.Resources-11281.scope - Application launched by gnome-shell.
Sep 16 19:13:55 Fira gnome-shell[3177]: Window manager warning: Buggy client sent a _NET_ACTIVE_WINDOW message with a timestamp of 0 for 0x4c00004
Sep 16 19:14:07 Fira gnome-shell[3177]: Lilypad extension started...
Sep 16 19:14:10 Fira dbus-daemon[2056]: [session uid=1000 pid=2056] Activating service name='org.gnome.Nautilus' requested by ':1.39' (uid=1000 pid=3177 comm="/usr/bin/gnome-shell" label="unconfined")
Sep 16 19:14:10 Fira dbus-daemon[2056]: [session uid=1000 pid=2056] Activating service name='org.gnome.Calculator.SearchProvider' requested by ':1.39' (uid=1000 pid=3177 comm="/usr/bin/gnome-shell" label="unconfined")
Sep 16 19:14:10 Fira dbus-daemon[2056]: [session uid=1000 pid=2056] Activating service name='org.gnome.Characters' requested by ':1.39' (uid=1000 pid=3177 comm="/usr/bin/gnome-shell" label="unconfined")
Sep 16 19:14:10 Fira dbus-daemon[2056]: [session uid=1000 pid=2056] Activating service name='org.gnome.clocks' requested by ':1.39' (uid=1000 pid=3177 comm="/usr/bin/gnome-shell" label="unconfined")
Sep 16 19:14:10 Fira dbus-daemon[2056]: [session uid=1000 pid=2056] Activating service name='org.gnome.seahorse.Application' requested by ':1.39' (uid=1000 pid=3177 comm="/usr/bin/gnome-shell" label="unconfined")
Sep 16 19:14:10 Fira gnome-shell[3177]: Received error from D-Bus search provider org.gnome.Terminal.desktop: Gio.IOErrorEnum: Cannot invoke method; proxy is for the well-known name org.gnome.Terminal without an owner, and proxy was constructed with the G_DBUS_PROXY_FLAGS_DO_NOT_AUTO_START flag
Sep 16 19:14:10 Fira gnome-shell[3177]: Received error from D-Bus search provider org.gnome.Terminal.desktop: Gio.IOErrorEnum: Cannot invoke method; proxy is for the well-known name org.gnome.Terminal without an owner, and proxy was constructed with the G_DBUS_PROXY_FLAGS_DO_NOT_AUTO_START flag
Sep 16 19:14:11 Fira gnome-shell[3177]: Received error from D-Bus search provider org.gnome.Terminal.desktop: Gio.IOErrorEnum: Cannot invoke method; proxy is for the well-known name org.gnome.Terminal without an owner, and proxy was constructed with the G_DBUS_PROXY_FLAGS_DO_NOT_AUTO_START flag
Sep 16 19:14:11 Fira systemd[1747]: Started app-gnome-Clash\x20Verge-11747.scope - Application launched by gnome-shell.
Sep 16 19:14:18 Fira gnome-shell[3177]: Received error from D-Bus search provider org.gnome.Terminal.desktop: Gio.IOErrorEnum: Cannot invoke method; proxy is for the well-known name org.gnome.Terminal without an owner, and proxy was constructed with the G_DBUS_PROXY_FLAGS_DO_NOT_AUTO_START flag
Sep 16 19:14:19 Fira gnome-shell[3177]: Received error from D-Bus search provider org.gnome.Terminal.desktop: Gio.IOErrorEnum: Cannot invoke method; proxy is for the well-known name org.gnome.Terminal without an owner, and proxy was constructed with the G_DBUS_PROXY_FLAGS_DO_NOT_AUTO_START flag
Sep 16 19:14:19 Fira systemd[1747]: Started app-gnome-Clash\x20Verge-11988.scope - Application launched by gnome-shell.
Sep 16 19:14:20 Fira gnome-shell[3177]: Window manager warning: Buggy client sent a _NET_ACTIVE_WINDOW message with a timestamp of 0 for 0x4e0000c
Sep 16 19:14:44 Fira gnome-shell[3177]: Window manager warning: Buggy client sent a _NET_ACTIVE_WINDOW message with a timestamp of 0 for 0x2400004
Sep 16 19:34:54 Fira gnome-shell[3177]: JS ERROR: TypeError: this._containerService is null
                                        rearrange@file:///home/fira/.local/share/gnome-shell/extensions/lilypad@shendrew.github.io/extension.js:73:13
                                        enable/Panel.Panel.prototype.addToStatusArea/destroyID<@file:///home/fira/.local/share/gnome-shell/extensions/lilypad@shendrew.github.io/extension.js:84:17
                                        disable@file:///home/fira/.local/share/gnome-shell/extensions/lilypad@shendrew.github.io/extension.js:172:33
Sep 16 19:34:54 Fira gnome-shell[3177]: Object St.Icon (0x5ee1449680d0), has been already disposed — impossible to access it. This might be caused by the object having been destroyed from C code using something such as destroy(), dispose(), or remove() vfuncs.
                                        #0   5ee141f2f580 i   file:///home/fira/.local/share/gnome-shell/extensions/lilypad@shendrew.github.io/extension.js:175 (38325c9ceec0 @ 244)
Sep 16 19:34:54 Fira gnome-shell[3177]: Lilypad extension stopped.
Sep 16 19:34:54 Fira gnome-shell[3177]: JS ERROR: TypeError: this._containerService is null
                                        rearrange@file:///home/fira/.local/share/gnome-shell/extensions/lilypad@shendrew.github.io/extension.js:73:13
                                        enable/Panel.Panel.prototype.addToStatusArea/destroyID<@file:///home/fira/.local/share/gnome-shell/extensions/lilypad@shendrew.github.io/extension.js:84:17
                                        _init/<@file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/indicatorStatusIcon.js:246:72
                                        destroy@file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/appIndicator.js:722:14
                                        destroy/<@file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/statusNotifierWatcher.js:259:52
                                        destroy@file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/statusNotifierWatcher.js:259:21
                                        disable@file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/extension.js:65:41
Sep 16 19:34:54 Fira gnome-shell[3177]: TypeError: this._cancellable is null
                                          _invalidateIcon@file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/appIndicator.js:1539:9
                                          _invalidateIconWhenFullyReady@file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/appIndicator.js:1527:18
                                          async*_init/<@file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/appIndicator.js:935:24
                                          reset@file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/appIndicator.js:718:14
                                          _ensureItemRegistered@file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/statusNotifierWatcher.js:136:18
                                          RegisterStatusNotifierItemAsync@file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/statusNotifierWatcher.js:205:24
Sep 16 19:34:54 Fira gnome-shell[3177]: TypeError: SettingsManager.getDefault() is null
                                          getDefaultGSettings@file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/settingsManager.js:54:28
                                          _updateIconSize@file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/appIndicator.js:1549:42
                                          _updateWhenFullyReady@file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/appIndicator.js:1009:18
                                          async*_init@file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/appIndicator.js:965:14
                                          AppIndicatorsIconActor@file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/appIndicator.js:879:1
                                          _init@file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/indicatorStatusIcon.js:227:13
                                          IndicatorBaseStatusIcon@file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/indicatorStatusIcon.js:68:1
                                          IndicatorStatusIcon@file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/indicatorStatusIcon.js:224:1
                                          _registerItem@file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/statusNotifierWatcher.js:115:32
                                          async*_ensureItemRegistered@file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/statusNotifierWatcher.js:140:20
                                          RegisterStatusNotifierItemAsync@file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/statusNotifierWatcher.js:205:24
Sep 16 19:43:03 Fira gnome-shell[3177]: Window manager warning: Event has no timestamp! You may be using a broken program such as xse.  Please ask the authors of that program to fix it.
Sep 16 19:43:03 Fira gnome-shell[3177]: Lilypad extension started...
Sep 16 19:43:04 Fira gnome-shell[3177]: Launching DING process
Sep 16 19:43:05 Fira dbus-daemon[2056]: [session uid=1000 pid=2056] Activating service name='org.gnome.Nautilus' requested by ':1.255' (uid=1000 pid=17773 comm="gjs /usr/share/gnome-shell/extensions/ding@rasters" label="desktop-icons-ng (unconfined)")
Sep 16 19:43:05 Fira dbus-daemon[2056]: [session uid=1000 pid=2056] Activating service name='org.gnome.ArchiveManager1' requested by ':1.255' (uid=1000 pid=17773 comm="gjs /usr/share/gnome-shell/extensions/ding@rasters" label="desktop-icons-ng (unconfined)")
Sep 16 19:43:05 Fira gnome-shell[3177]: DING: Detected async api for thumbnails
Sep 16 19:43:05 Fira gnome-shell[3177]: DING: (gjs:17773): Gjs-WARNING **: 19:43:05.429: GLib.unix_signal_add has been moved to a separate platform-specific library. Please update your code to use GLibUnix.signal_add instead.
Sep 16 19:43:05 Fira gnome-shell[3177]: DING: 0 DesktopManager() ["/usr/share/gnome-shell/extensions/ding@rastersoft.com/app/desktopManager.js":264:12]
Sep 16 19:43:05 Fira gnome-shell[3177]: DING: 1 anonymous() ["/usr/share/gnome-shell/extensions/ding@rastersoft.com/app/ding.js":180:25]
Sep 16 19:43:05 Fira gnome-shell[3177]: DING: 2 anonymous() ["/usr/share/gnome-shell/extensions/ding@rastersoft.com/app/ding.js":197:20]
Sep 16 19:43:05 Fira gnome-shell[3177]: DING: 3 <TOP LEVEL> ["/usr/share/gnome-shell/extensions/ding@rastersoft.com/app/ding.js":206:12]
Sep 16 19:43:05 Fira gnome-shell[3177]: DING: DBus interface for Switcheroo control (net.hadess.SwitcherooControl) is now available.
Sep 16 19:43:05 Fira gnome-shell[3177]: DING: DBus interface for Gvfs daemon (org.gtk.vfs.Metadata) is now available.
Sep 16 19:43:05 Fira gnome-shell[3177]: DING: ** Message: 19:43:05.485: Connecting to org.freedesktop.Tracker3.Miner.Files
Sep 16 19:43:05 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 31 with keysym 31 (keycode a).
Sep 16 19:43:05 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 32 with keysym 32 (keycode b).
Sep 16 19:43:05 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 33 with keysym 33 (keycode c).
Sep 16 19:43:05 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 34 with keysym 34 (keycode d).
Sep 16 19:43:05 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 35 with keysym 35 (keycode e).
Sep 16 19:43:05 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 31 with keysym 31 (keycode a).
Sep 16 19:43:05 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 36 with keysym 36 (keycode f).
Sep 16 19:43:05 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 32 with keysym 32 (keycode b).
Sep 16 19:43:05 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 37 with keysym 37 (keycode 10).
Sep 16 19:43:05 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 33 with keysym 33 (keycode c).
Sep 16 19:43:05 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 38 with keysym 38 (keycode 11).
Sep 16 19:43:05 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 34 with keysym 34 (keycode d).
Sep 16 19:43:05 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 39 with keysym 39 (keycode 12).
Sep 16 19:43:05 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 35 with keysym 35 (keycode e).
Sep 16 19:43:05 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 36 with keysym 36 (keycode f).
Sep 16 19:43:05 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 38 with keysym 38 (keycode 11).
Sep 16 19:43:05 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 39 with keysym 39 (keycode 12).
Sep 16 19:43:05 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 37 with keysym 37 (keycode 10).
Sep 16 19:43:05 Fira gnome-shell[3177]: DING: DBus interface for Nautilus (org.gnome.Nautilus.FileOperations2) is now available.
Sep 16 19:43:05 Fira gnome-shell[3177]: DING: DBus interface for Nautilus (org.freedesktop.FileManager1) is now available.
Sep 16 19:43:05 Fira gnome-shell[3177]: DING: DBus interface for File-roller (org.gnome.ArchiveManager1) is now available.
Sep 16 19:43:05 Fira gnome-shell[3177]: DING: GNOME nautilus 46.4
Sep 16 19:43:06 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 31 with keysym 31 (keycode a).
Sep 16 19:43:06 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 32 with keysym 32 (keycode b).
Sep 16 19:43:06 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 33 with keysym 33 (keycode c).
Sep 16 19:43:06 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 34 with keysym 34 (keycode d).
Sep 16 19:43:06 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 35 with keysym 35 (keycode e).
Sep 16 19:43:06 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 31 with keysym 31 (keycode a).
Sep 16 19:43:06 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 36 with keysym 36 (keycode f).
Sep 16 19:43:06 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 32 with keysym 32 (keycode b).
Sep 16 19:43:06 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 37 with keysym 37 (keycode 10).
Sep 16 19:43:06 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 33 with keysym 33 (keycode c).
Sep 16 19:43:06 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 38 with keysym 38 (keycode 11).
Sep 16 19:43:06 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 34 with keysym 34 (keycode d).
Sep 16 19:43:06 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 39 with keysym 39 (keycode 12).
Sep 16 19:43:06 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 35 with keysym 35 (keycode e).
Sep 16 19:43:06 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 36 with keysym 36 (keycode f).
Sep 16 19:43:06 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 38 with keysym 38 (keycode 11).
Sep 16 19:43:06 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 39 with keysym 39 (keycode 12).
Sep 16 19:43:06 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 37 with keysym 37 (keycode 10).
Sep 16 19:46:29 Fira gnome-shell[3177]: Window manager warning: Invalid WM_TRANSIENT_FOR window 0x2e0000a specified for 0x2e00008.
Sep 16 19:49:41 Fira gnome-shell[3177]: Window manager warning: Invalid WM_TRANSIENT_FOR window 0x2e0000a specified for 0x2e00008.
Sep 16 20:08:06 Fira gnome-shell[3177]: JS ERROR: TypeError: this._containerService is null
                                        rearrange@file:///home/fira/.local/share/gnome-shell/extensions/lilypad@shendrew.github.io/extension.js:73:13
                                        enable/Panel.Panel.prototype.addToStatusArea/destroyID<@file:///home/fira/.local/share/gnome-shell/extensions/lilypad@shendrew.github.io/extension.js:84:17
                                        disable@file:///home/fira/.local/share/gnome-shell/extensions/lilypad@shendrew.github.io/extension.js:172:33
Sep 16 20:08:06 Fira gnome-shell[3177]: Object St.Icon (0x5ee146b77f60), has been already disposed — impossible to access it. This might be caused by the object having been destroyed from C code using something such as destroy(), dispose(), or remove() vfuncs.
                                        #0   5ee141f2f580 i   file:///home/fira/.local/share/gnome-shell/extensions/lilypad@shendrew.github.io/extension.js:175 (38325c9ceec0 @ 244)
Sep 16 20:08:06 Fira gnome-shell[3177]: Lilypad extension stopped.
Sep 16 20:08:06 Fira gnome-shell[3177]: JS ERROR: TypeError: this._containerService is null
                                        rearrange@file:///home/fira/.local/share/gnome-shell/extensions/lilypad@shendrew.github.io/extension.js:73:13
                                        enable/Panel.Panel.prototype.addToStatusArea/destroyID<@file:///home/fira/.local/share/gnome-shell/extensions/lilypad@shendrew.github.io/extension.js:84:17
                                        _init/<@file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/indicatorStatusIcon.js:246:72
                                        destroy@file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/appIndicator.js:722:14
                                        destroy/<@file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/statusNotifierWatcher.js:259:52
                                        destroy@file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/statusNotifierWatcher.js:259:21
                                        disable@file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/extension.js:65:41
Sep 16 20:08:06 Fira gnome-shell[3177]: JS ERROR: TypeError: this._containerService is null
                                        rearrange@file:///home/fira/.local/share/gnome-shell/extensions/lilypad@shendrew.github.io/extension.js:73:13
                                        enable/Panel.Panel.prototype.addToStatusArea/destroyID<@file:///home/fira/.local/share/gnome-shell/extensions/lilypad@shendrew.github.io/extension.js:84:17
                                        _init/<@file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/indicatorStatusIcon.js:246:72
                                        destroy@file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/appIndicator.js:722:14
                                        destroy/<@file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/statusNotifierWatcher.js:259:52
                                        destroy@file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/statusNotifierWatcher.js:259:21
                                        disable@file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/extension.js:65:41
Sep 16 20:08:06 Fira gnome-shell[3177]: JS ERROR: TypeError: this._containerService is null
                                        rearrange@file:///home/fira/.local/share/gnome-shell/extensions/lilypad@shendrew.github.io/extension.js:73:13
                                        enable/Panel.Panel.prototype.addToStatusArea/destroyID<@file:///home/fira/.local/share/gnome-shell/extensions/lilypad@shendrew.github.io/extension.js:84:17
                                        _init/<@file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/indicatorStatusIcon.js:246:72
                                        destroy@file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/appIndicator.js:722:14
                                        destroy/<@file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/statusNotifierWatcher.js:259:52
                                        destroy@file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/statusNotifierWatcher.js:259:21
                                        disable@file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/extension.js:65:41
Sep 16 20:08:06 Fira gnome-shell[3177]: TypeError: SettingsManager.getDefault() is null
                                          getDefaultGSettings@file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/settingsManager.js:54:28
                                          _updateIconSize@file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/appIndicator.js:1549:42
                                          _updateWhenFullyReady@file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/appIndicator.js:1009:18
                                          async*_init@file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/appIndicator.js:965:14
                                          AppIndicatorsIconActor@file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/appIndicator.js:879:1
                                          _init@file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/indicatorStatusIcon.js:227:13
                                          IndicatorBaseStatusIcon@file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/indicatorStatusIcon.js:68:1
                                          IndicatorStatusIcon@file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/indicatorStatusIcon.js:224:1
                                          _registerItem@file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/statusNotifierWatcher.js:115:32
                                          async*_ensureItemRegistered@file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/statusNotifierWatcher.js:140:20
                                          RegisterStatusNotifierItemAsync@file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/statusNotifierWatcher.js:205:24
Sep 16 20:30:27 Fira gnome-shell[3177]: Window manager warning: Event has no timestamp! You may be using a broken program such as xse.  Please ask the authors of that program to fix it.
Sep 16 20:30:27 Fira gnome-shell[3177]: Lilypad extension started...
Sep 16 20:30:28 Fira gnome-shell[3177]: Launching DING process
Sep 16 20:30:29 Fira dbus-daemon[2056]: [session uid=1000 pid=2056] Activating service name='org.gnome.Nautilus' requested by ':1.298' (uid=1000 pid=24355 comm="gjs /usr/share/gnome-shell/extensions/ding@rasters" label="desktop-icons-ng (unconfined)")
Sep 16 20:30:29 Fira dbus-daemon[2056]: [session uid=1000 pid=2056] Activating service name='org.gnome.ArchiveManager1' requested by ':1.298' (uid=1000 pid=24355 comm="gjs /usr/share/gnome-shell/extensions/ding@rasters" label="desktop-icons-ng (unconfined)")
Sep 16 20:30:29 Fira gnome-shell[3177]: DING: Detected async api for thumbnails
Sep 16 20:30:29 Fira gnome-shell[3177]: DING: (gjs:24355): Gjs-WARNING **: 20:30:29.376: GLib.unix_signal_add has been moved to a separate platform-specific library. Please update your code to use GLibUnix.signal_add instead.
Sep 16 20:30:29 Fira gnome-shell[3177]: DING: 0 DesktopManager() ["/usr/share/gnome-shell/extensions/ding@rastersoft.com/app/desktopManager.js":264:12]
Sep 16 20:30:29 Fira gnome-shell[3177]: DING: 1 anonymous() ["/usr/share/gnome-shell/extensions/ding@rastersoft.com/app/ding.js":180:25]
Sep 16 20:30:29 Fira gnome-shell[3177]: DING: 2 anonymous() ["/usr/share/gnome-shell/extensions/ding@rastersoft.com/app/ding.js":197:20]
Sep 16 20:30:29 Fira gnome-shell[3177]: DING: 3 <TOP LEVEL> ["/usr/share/gnome-shell/extensions/ding@rastersoft.com/app/ding.js":206:12]
Sep 16 20:30:29 Fira gnome-shell[3177]: DING: DBus interface for Gvfs daemon (org.gtk.vfs.Metadata) is now available.
Sep 16 20:30:29 Fira gnome-shell[3177]: DING: DBus interface for Switcheroo control (net.hadess.SwitcherooControl) is now available.
Sep 16 20:30:29 Fira gnome-shell[3177]: DING: ** Message: 20:30:29.438: Connecting to org.freedesktop.Tracker3.Miner.Files
Sep 16 20:30:29 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 38 with keysym 38 (keycode 11).
Sep 16 20:30:29 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 38 with keysym 38 (keycode 11).
Sep 16 20:30:29 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 31 with keysym 31 (keycode a).
Sep 16 20:30:29 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 32 with keysym 32 (keycode b).
Sep 16 20:30:29 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 33 with keysym 33 (keycode c).
Sep 16 20:30:29 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 34 with keysym 34 (keycode d).
Sep 16 20:30:29 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 35 with keysym 35 (keycode e).
Sep 16 20:30:29 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 31 with keysym 31 (keycode a).
Sep 16 20:30:29 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 36 with keysym 36 (keycode f).
Sep 16 20:30:29 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 32 with keysym 32 (keycode b).
Sep 16 20:30:29 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 33 with keysym 33 (keycode c).
Sep 16 20:30:29 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 37 with keysym 37 (keycode 10).
Sep 16 20:30:29 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 34 with keysym 34 (keycode d).
Sep 16 20:30:29 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 39 with keysym 39 (keycode 12).
Sep 16 20:30:29 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 35 with keysym 35 (keycode e).
Sep 16 20:30:29 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 36 with keysym 36 (keycode f).
Sep 16 20:30:29 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 37 with keysym 37 (keycode 10).
Sep 16 20:30:29 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 39 with keysym 39 (keycode 12).
Sep 16 20:30:29 Fira gnome-shell[3177]: DING: DBus interface for Nautilus (org.gnome.Nautilus.FileOperations2) is now available.
Sep 16 20:30:29 Fira gnome-shell[3177]: DING: DBus interface for Nautilus (org.freedesktop.FileManager1) is now available.
Sep 16 20:30:29 Fira gnome-shell[3177]: DING: DBus interface for File-roller (org.gnome.ArchiveManager1) is now available.
Sep 16 20:30:29 Fira gnome-shell[3177]: DING: GNOME nautilus 46.4
Sep 16 20:30:30 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 38 with keysym 38 (keycode 11).
Sep 16 20:30:30 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 38 with keysym 38 (keycode 11).
Sep 16 20:30:30 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 31 with keysym 31 (keycode a).
Sep 16 20:30:30 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 32 with keysym 32 (keycode b).
Sep 16 20:30:30 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 33 with keysym 33 (keycode c).
Sep 16 20:30:30 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 34 with keysym 34 (keycode d).
Sep 16 20:30:30 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 35 with keysym 35 (keycode e).
Sep 16 20:30:30 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 31 with keysym 31 (keycode a).
Sep 16 20:30:30 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 36 with keysym 36 (keycode f).
Sep 16 20:30:30 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 32 with keysym 32 (keycode b).
Sep 16 20:30:30 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 33 with keysym 33 (keycode c).
Sep 16 20:30:30 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 37 with keysym 37 (keycode 10).
Sep 16 20:30:30 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 34 with keysym 34 (keycode d).
Sep 16 20:30:30 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 39 with keysym 39 (keycode 12).
Sep 16 20:30:30 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 35 with keysym 35 (keycode e).
Sep 16 20:30:30 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 36 with keysym 36 (keycode f).
Sep 16 20:30:30 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 37 with keysym 37 (keycode 10).
Sep 16 20:30:30 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 39 with keysym 39 (keycode 12).
Sep 16 20:43:18 Fira gnome-shell[3177]: Window manager warning: Invalid WM_TRANSIENT_FOR window 0x2e0000a specified for 0x2e00008.
Sep 16 21:08:25 Fira gnome-shell[3177]: Window manager warning: Invalid WM_TRANSIENT_FOR window 0x2e0000a specified for 0x2e00008.
Sep 16 21:38:31 Fira gnome-shell[3177]: JS ERROR: TypeError: this._containerService is null
                                        rearrange@file:///home/fira/.local/share/gnome-shell/extensions/lilypad@shendrew.github.io/extension.js:73:13
                                        enable/Panel.Panel.prototype.addToStatusArea/destroyID<@file:///home/fira/.local/share/gnome-shell/extensions/lilypad@shendrew.github.io/extension.js:84:17
                                        disable@file:///home/fira/.local/share/gnome-shell/extensions/lilypad@shendrew.github.io/extension.js:172:33
Sep 16 21:38:31 Fira gnome-shell[3177]: Object St.Icon (0x5ee141f58df0), has been already disposed — impossible to access it. This might be caused by the object having been destroyed from C code using something such as destroy(), dispose(), or remove() vfuncs.
                                        #0   5ee141f2f580 i   file:///home/fira/.local/share/gnome-shell/extensions/lilypad@shendrew.github.io/extension.js:175 (38325c9ceec0 @ 244)
Sep 16 21:38:31 Fira gnome-shell[3177]: Lilypad extension stopped.
Sep 16 21:38:31 Fira gnome-shell[3177]: JS ERROR: TypeError: this._containerService is null
                                        rearrange@file:///home/fira/.local/share/gnome-shell/extensions/lilypad@shendrew.github.io/extension.js:73:13
                                        enable/Panel.Panel.prototype.addToStatusArea/destroyID<@file:///home/fira/.local/share/gnome-shell/extensions/lilypad@shendrew.github.io/extension.js:84:17
                                        _init/<@file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/indicatorStatusIcon.js:246:72
                                        destroy@file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/appIndicator.js:722:14
                                        destroy/<@file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/statusNotifierWatcher.js:259:52
                                        destroy@file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/statusNotifierWatcher.js:259:21
                                        disable@file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/extension.js:65:41
Sep 16 21:38:31 Fira gnome-shell[3177]: JS ERROR: TypeError: this._containerService is null
                                        rearrange@file:///home/fira/.local/share/gnome-shell/extensions/lilypad@shendrew.github.io/extension.js:73:13
                                        enable/Panel.Panel.prototype.addToStatusArea/destroyID<@file:///home/fira/.local/share/gnome-shell/extensions/lilypad@shendrew.github.io/extension.js:84:17
                                        _init/<@file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/indicatorStatusIcon.js:246:72
                                        destroy@file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/appIndicator.js:722:14
                                        destroy/<@file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/statusNotifierWatcher.js:259:52
                                        destroy@file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/statusNotifierWatcher.js:259:21
                                        disable@file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/extension.js:65:41
Sep 16 21:38:31 Fira gnome-shell[3177]: JS ERROR: TypeError: this._containerService is null
                                        rearrange@file:///home/fira/.local/share/gnome-shell/extensions/lilypad@shendrew.github.io/extension.js:73:13
                                        enable/Panel.Panel.prototype.addToStatusArea/destroyID<@file:///home/fira/.local/share/gnome-shell/extensions/lilypad@shendrew.github.io/extension.js:84:17
                                        _init/<@file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/indicatorStatusIcon.js:246:72
                                        destroy@file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/appIndicator.js:722:14
                                        destroy/<@file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/statusNotifierWatcher.js:259:52
                                        destroy@file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/statusNotifierWatcher.js:259:21
                                        disable@file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/extension.js:65:41
Sep 16 21:38:31 Fira gnome-shell[3177]: TypeError: SettingsManager.getDefault() is null
                                          getDefaultGSettings@file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/settingsManager.js:54:28
                                          _updateIconSize@file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/appIndicator.js:1549:42
                                          _updateWhenFullyReady@file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/appIndicator.js:1009:18
                                          async*_init@file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/appIndicator.js:965:14
                                          AppIndicatorsIconActor@file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/appIndicator.js:879:1
                                          _init@file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/indicatorStatusIcon.js:227:13
                                          IndicatorBaseStatusIcon@file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/indicatorStatusIcon.js:68:1
                                          IndicatorStatusIcon@file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/indicatorStatusIcon.js:224:1
                                          _registerItem@file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/statusNotifierWatcher.js:115:32
                                          async*_ensureItemRegistered@file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/statusNotifierWatcher.js:140:20
                                          RegisterStatusNotifierItemAsync@file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/statusNotifierWatcher.js:205:24
Sep 16 22:23:04 Fira gnome-shell[3177]: Window manager warning: Event has no timestamp! You may be using a broken program such as xse.  Please ask the authors of that program to fix it.
Sep 16 22:23:04 Fira gnome-shell[3177]: Lilypad extension started...
Sep 16 22:23:04 Fira gnome-shell[3177]: Launching DING process
Sep 16 22:23:05 Fira dbus-daemon[2056]: [session uid=1000 pid=2056] Activating service name='org.gnome.Nautilus' requested by ':1.348' (uid=1000 pid=39971 comm="gjs /usr/share/gnome-shell/extensions/ding@rasters" label="desktop-icons-ng (unconfined)")
Sep 16 22:23:05 Fira dbus-daemon[2056]: [session uid=1000 pid=2056] Activating service name='org.gnome.ArchiveManager1' requested by ':1.348' (uid=1000 pid=39971 comm="gjs /usr/share/gnome-shell/extensions/ding@rasters" label="desktop-icons-ng (unconfined)")
Sep 16 22:23:05 Fira gnome-shell[3177]: DING: Detected async api for thumbnails
Sep 16 22:23:05 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 31 with keysym 31 (keycode a).
Sep 16 22:23:05 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 32 with keysym 32 (keycode b).
Sep 16 22:23:05 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 33 with keysym 33 (keycode c).
Sep 16 22:23:05 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 35 with keysym 35 (keycode e).
Sep 16 22:23:05 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 31 with keysym 31 (keycode a).
Sep 16 22:23:05 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 36 with keysym 36 (keycode f).
Sep 16 22:23:05 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 32 with keysym 32 (keycode b).
Sep 16 22:23:05 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 33 with keysym 33 (keycode c).
Sep 16 22:23:05 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 37 with keysym 37 (keycode 10).
Sep 16 22:23:05 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 38 with keysym 38 (keycode 11).
Sep 16 22:23:05 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 34 with keysym 34 (keycode d).
Sep 16 22:23:05 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 39 with keysym 39 (keycode 12).
Sep 16 22:23:05 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 35 with keysym 35 (keycode e).
Sep 16 22:23:05 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 36 with keysym 36 (keycode f).
Sep 16 22:23:05 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 38 with keysym 38 (keycode 11).
Sep 16 22:23:05 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 37 with keysym 37 (keycode 10).
Sep 16 22:23:05 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 34 with keysym 34 (keycode d).
Sep 16 22:23:05 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 39 with keysym 39 (keycode 12).
Sep 16 22:23:05 Fira gnome-shell[3177]: DING: (gjs:39971): Gjs-WARNING **: 22:23:05.331: GLib.unix_signal_add has been moved to a separate platform-specific library. Please update your code to use GLibUnix.signal_add instead.
Sep 16 22:23:05 Fira gnome-shell[3177]: DING: 0 DesktopManager() ["/usr/share/gnome-shell/extensions/ding@rastersoft.com/app/desktopManager.js":264:12]
Sep 16 22:23:05 Fira gnome-shell[3177]: DING: 1 anonymous() ["/usr/share/gnome-shell/extensions/ding@rastersoft.com/app/ding.js":180:25]
Sep 16 22:23:05 Fira gnome-shell[3177]: DING: 2 anonymous() ["/usr/share/gnome-shell/extensions/ding@rastersoft.com/app/ding.js":197:20]
Sep 16 22:23:05 Fira gnome-shell[3177]: DING: 3 <TOP LEVEL> ["/usr/share/gnome-shell/extensions/ding@rastersoft.com/app/ding.js":206:12]
Sep 16 22:23:05 Fira gnome-shell[3177]: DING: DBus interface for Gvfs daemon (org.gtk.vfs.Metadata) is now available.
Sep 16 22:23:05 Fira gnome-shell[3177]: DING: DBus interface for Switcheroo control (net.hadess.SwitcherooControl) is now available.
Sep 16 22:23:05 Fira gnome-shell[3177]: DING: ** Message: 22:23:05.358: Connecting to org.freedesktop.Tracker3.Miner.Files
Sep 16 22:23:05 Fira gnome-shell[3177]: DING: DBus interface for File-roller (org.gnome.ArchiveManager1) is now available.
Sep 16 22:23:05 Fira gnome-shell[3177]: DING: DBus interface for Nautilus (org.gnome.Nautilus.FileOperations2) is now available.
Sep 16 22:23:05 Fira gnome-shell[3177]: DING: DBus interface for Nautilus (org.freedesktop.FileManager1) is now available.
Sep 16 22:23:05 Fira gnome-shell[3177]: DING: GNOME nautilus 46.4
Sep 16 22:23:28 Fira gnome-shell[3177]: JS ERROR: TypeError: this._containerService is null
                                        rearrange@file:///home/fira/.local/share/gnome-shell/extensions/lilypad@shendrew.github.io/extension.js:73:13
                                        enable/Panel.Panel.prototype.addToStatusArea/destroyID<@file:///home/fira/.local/share/gnome-shell/extensions/lilypad@shendrew.github.io/extension.js:84:17
                                        disable@file:///home/fira/.local/share/gnome-shell/extensions/lilypad@shendrew.github.io/extension.js:172:33
Sep 16 22:23:28 Fira gnome-shell[3177]: Object St.Icon (0x5ee1479212f0), has been already disposed — impossible to access it. This might be caused by the object having been destroyed from C code using something such as destroy(), dispose(), or remove() vfuncs.
                                        #0   5ee141f2f580 i   file:///home/fira/.local/share/gnome-shell/extensions/lilypad@shendrew.github.io/extension.js:175 (38325c9ceec0 @ 244)
Sep 16 22:23:28 Fira gnome-shell[3177]: Lilypad extension stopped.
Sep 16 22:23:28 Fira gnome-shell[3177]: JS ERROR: TypeError: this._containerService is null
                                        rearrange@file:///home/fira/.local/share/gnome-shell/extensions/lilypad@shendrew.github.io/extension.js:73:13
                                        enable/Panel.Panel.prototype.addToStatusArea/destroyID<@file:///home/fira/.local/share/gnome-shell/extensions/lilypad@shendrew.github.io/extension.js:84:17
                                        _init/<@file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/indicatorStatusIcon.js:246:72
                                        destroy@file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/appIndicator.js:722:14
                                        destroy/<@file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/statusNotifierWatcher.js:259:52
                                        destroy@file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/statusNotifierWatcher.js:259:21
                                        disable@file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/extension.js:65:41
Sep 16 22:23:28 Fira gnome-shell[3177]: JS ERROR: TypeError: this._containerService is null
                                        rearrange@file:///home/fira/.local/share/gnome-shell/extensions/lilypad@shendrew.github.io/extension.js:73:13
                                        enable/Panel.Panel.prototype.addToStatusArea/destroyID<@file:///home/fira/.local/share/gnome-shell/extensions/lilypad@shendrew.github.io/extension.js:84:17
                                        _init/<@file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/indicatorStatusIcon.js:246:72
                                        destroy@file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/appIndicator.js:722:14
                                        destroy/<@file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/statusNotifierWatcher.js:259:52
                                        destroy@file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/statusNotifierWatcher.js:259:21
                                        disable@file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/extension.js:65:41
Sep 16 22:23:28 Fira gnome-shell[3177]: JS ERROR: TypeError: this._containerService is null
                                        rearrange@file:///home/fira/.local/share/gnome-shell/extensions/lilypad@shendrew.github.io/extension.js:73:13
                                        enable/Panel.Panel.prototype.addToStatusArea/destroyID<@file:///home/fira/.local/share/gnome-shell/extensions/lilypad@shendrew.github.io/extension.js:84:17
                                        _init/<@file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/indicatorStatusIcon.js:246:72
                                        destroy@file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/appIndicator.js:722:14
                                        destroy/<@file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/statusNotifierWatcher.js:259:52
                                        destroy@file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/statusNotifierWatcher.js:259:21
                                        disable@file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/extension.js:65:41
Sep 16 22:23:28 Fira gnome-shell[3177]: Object .Gjs_ubuntu-appindicators_ubuntu_com_appIndicator_AppIndicatorsIconActor (0x5ee144f7a5f0), has been already disposed — impossible to get any property from it. This might be caused by the object having been destroyed from C code using something such as destroy(), dispose(), or remove() vfuncs.
                                        #0   5ee141f2f048 i   file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/appIndicator.js:1377 (52b0500b920 @ 446)
                                        #1   5ee141f2ef88 i   file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/appIndicator.js:1435 (52b0500ba10 @ 467)
Sep 16 22:23:28 Fira gnome-shell[3177]: Object .Gjs_ubuntu-appindicators_ubuntu_com_appIndicator_AppIndicatorsIconActor (0x5ee144f7a5f0), has been already disposed — impossible to get any property from it. This might be caused by the object having been destroyed from C code using something such as destroy(), dispose(), or remove() vfuncs.
                                        #0   5ee141f2ef88 i   file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/appIndicator.js:1437 (52b0500ba10 @ 491)
Sep 16 22:23:28 Fira gnome-shell[3177]: Object .Gjs_ubuntu-appindicators_ubuntu_com_appIndicator_AppIndicatorsIconActor (0x5ee147c0bb70), has been already disposed — impossible to get any property from it. This might be caused by the object having been destroyed from C code using something such as destroy(), dispose(), or remove() vfuncs.
                                        #0   5ee141f2f048 i   file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/appIndicator.js:1377 (52b0500b920 @ 446)
                                        #1   5ee141f2ef88 i   file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/appIndicator.js:1435 (52b0500ba10 @ 467)
Sep 16 22:23:28 Fira gnome-shell[3177]: Object .Gjs_ubuntu-appindicators_ubuntu_com_appIndicator_AppIndicatorsIconActor (0x5ee144f7a5f0), has been already disposed — impossible to set any property on it. This might be caused by the object having been destroyed from C code using something such as destroy(), dispose(), or remove() vfuncs.
                                        #0   5ee141f2f048 i   file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/appIndicator.js:1368 (52b0500b920 @ 310)
                                        #1   5ee141f2ef88 i   file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/appIndicator.js:1435 (52b0500ba10 @ 467)
Sep 16 22:23:28 Fira gnome-shell[3177]: Object .Gjs_ubuntu-appindicators_ubuntu_com_appIndicator_AppIndicatorsIconActor (0x5ee144f7a5f0), has been already disposed — impossible to get any property from it. This might be caused by the object having been destroyed from C code using something such as destroy(), dispose(), or remove() vfuncs.
                                        #0   5ee141f2f048 i   file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/appIndicator.js:1377 (52b0500b920 @ 446)
                                        #1   5ee141f2ef88 i   file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/appIndicator.js:1435 (52b0500ba10 @ 467)
Sep 16 22:23:28 Fira gnome-shell[3177]: Object .Gjs_ubuntu-appindicators_ubuntu_com_appIndicator_AppIndicatorsIconActor (0x5ee144f7a5f0), has been already disposed — impossible to get any property from it. This might be caused by the object having been destroyed from C code using something such as destroy(), dispose(), or remove() vfuncs.
                                        #0   5ee141f2ef88 i   file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/appIndicator.js:1437 (52b0500ba10 @ 491)
Sep 16 22:23:28 Fira gnome-shell[3177]: Object .Gjs_ubuntu-appindicators_ubuntu_com_appIndicator_AppIndicatorsIconActor (0x5ee14833bb60), has been already disposed — impossible to get any property from it. This might be caused by the object having been destroyed from C code using something such as destroy(), dispose(), or remove() vfuncs.
                                        #0   5ee141f2f048 i   file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/appIndicator.js:1356 (52b0500b920 @ 54)
                                        #1   5ee141f2ef88 i   file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/appIndicator.js:1435 (52b0500ba10 @ 467)
Sep 16 22:23:28 Fira gnome-shell[3177]: Object .Gjs_ubuntu-appindicators_ubuntu_com_appIndicator_AppIndicatorsIconActor (0x5ee14833bb60), has been already disposed — impossible to get any property from it. This might be caused by the object having been destroyed from C code using something such as destroy(), dispose(), or remove() vfuncs.
                                        #0   5ee141f2f048 i   file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/appIndicator.js:1357 (52b0500b920 @ 79)
                                        #1   5ee141f2ef88 i   file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/appIndicator.js:1435 (52b0500ba10 @ 467)
Sep 16 22:23:28 Fira gnome-shell[3177]: Object .Gjs_ubuntu-appindicators_ubuntu_com_appIndicator_AppIndicatorsIconActor (0x5ee14833bb60), has been already disposed — impossible to set any property on it. This might be caused by the object having been destroyed from C code using something such as destroy(), dispose(), or remove() vfuncs.
                                        #0   5ee141f2f048 i   file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/appIndicator.js:1363 (52b0500b920 @ 225)
                                        #1   5ee141f2ef88 i   file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/appIndicator.js:1435 (52b0500ba10 @ 467)
Sep 16 22:23:28 Fira gnome-shell[3177]: Object .Gjs_ubuntu-appindicators_ubuntu_com_appIndicator_AppIndicatorsIconActor (0x5ee14833bb60), has been already disposed — impossible to get any property from it. This might be caused by the object having been destroyed from C code using something such as destroy(), dispose(), or remove() vfuncs.
                                        #0   5ee141f2f048 i   file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/appIndicator.js:1366 (52b0500b920 @ 271)
                                        #1   5ee141f2ef88 i   file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/appIndicator.js:1435 (52b0500ba10 @ 467)
Sep 16 22:23:28 Fira gnome-shell[3177]: Object .Gjs_ubuntu-appindicators_ubuntu_com_appIndicator_AppIndicatorsIconActor (0x5ee14833bb60), has been already disposed — impossible to get any property from it. This might be caused by the object having been destroyed from C code using something such as destroy(), dispose(), or remove() vfuncs.
                                        #0   5ee141f2f048 i   file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/appIndicator.js:1377 (52b0500b920 @ 446)
                                        #1   5ee141f2ef88 i   file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/appIndicator.js:1435 (52b0500ba10 @ 467)
Sep 16 22:23:28 Fira gnome-shell[3177]: Object .Gjs_ubuntu-appindicators_ubuntu_com_appIndicator_AppIndicatorsIconActor (0x5ee14833bb60), has been already disposed — impossible to get any property from it. This might be caused by the object having been destroyed from C code using something such as destroy(), dispose(), or remove() vfuncs.
                                        #0   5ee141f2f048 i   file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/appIndicator.js:1378 (52b0500b920 @ 466)
                                        #1   5ee141f2ef88 i   file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/appIndicator.js:1435 (52b0500ba10 @ 467)
Sep 16 22:23:28 Fira gnome-shell[3177]: Object .Gjs_ubuntu-appindicators_ubuntu_com_appIndicator_AppIndicatorsIconActor (0x5ee14833bb60), has been already disposed — impossible to get any property from it. This might be caused by the object having been destroyed from C code using something such as destroy(), dispose(), or remove() vfuncs.
                                        #0   5ee141f2f048 i   file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/appIndicator.js:1379 (52b0500b920 @ 511)
                                        #1   5ee141f2ef88 i   file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/appIndicator.js:1435 (52b0500ba10 @ 467)
Sep 16 22:23:28 Fira gnome-shell[3177]: Object .Gjs_ubuntu-appindicators_ubuntu_com_appIndicator_AppIndicatorsIconActor (0x5ee14833bb60), has been already disposed — impossible to get any property from it. This might be caused by the object having been destroyed from C code using something such as destroy(), dispose(), or remove() vfuncs.
                                        #0   5ee141f2ef88 i   file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/appIndicator.js:1437 (52b0500ba10 @ 491)
Sep 16 22:23:28 Fira gnome-shell[3177]: Setting GIcon failed: TypeError: this._indicator is null
                                          _createAndSetIcon@file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/appIndicator.js:1439:17
                                          async*_updateIconByType@file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/appIndicator.js:1412:24
                                          _updateIcon@file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/appIndicator.js:1489:24
                                          _invalidateIcon@file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/appIndicator.js:1544:14
                                          _updateWhenFullyReady@file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/appIndicator.js:1012:18
                                          async*_init@file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/appIndicator.js:965:14
                                          AppIndicatorsIconActor@file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/appIndicator.js:879:1
                                          _init@file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/indicatorStatusIcon.js:227:13
                                          IndicatorBaseStatusIcon@file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/indicatorStatusIcon.js:68:1
                                          IndicatorStatusIcon@file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/indicatorStatusIcon.js:224:1
                                          _registerItem@file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/statusNotifierWatcher.js:115:32
                                          async*_ensureItemRegistered@file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/statusNotifierWatcher.js:140:20
                                          RegisterStatusNotifierItemAsync@file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/statusNotifierWatcher.js:205:24
Sep 16 23:20:03 Fira gnome-shell[3177]: Lilypad extension started...
Sep 16 23:20:03 Fira gnome-shell[3177]: Window manager warning: last_focus_time (7480221) is greater than comparison timestamp (7480096).  This most likely represents a buggy client sending inaccurate timestamps in messages such as _NET_ACTIVE_WINDOW.  Trying to work around...
Sep 16 23:20:03 Fira gnome-shell[3177]: Launching DING process
Sep 16 23:20:04 Fira dbus-daemon[2056]: [session uid=1000 pid=2056] Activating service name='org.gnome.Nautilus' requested by ':1.354' (uid=1000 pid=40668 comm="gjs /usr/share/gnome-shell/extensions/ding@rasters" label="desktop-icons-ng (unconfined)")
Sep 16 23:20:04 Fira dbus-daemon[2056]: [session uid=1000 pid=2056] Activating service name='org.gnome.ArchiveManager1' requested by ':1.354' (uid=1000 pid=40668 comm="gjs /usr/share/gnome-shell/extensions/ding@rasters" label="desktop-icons-ng (unconfined)")
Sep 16 23:20:04 Fira gnome-shell[3177]: DING: Detected async api for thumbnails
Sep 16 23:20:04 Fira gnome-shell[3177]: DING: (gjs:40668): Gjs-WARNING **: 23:20:04.155: GLib.unix_signal_add has been moved to a separate platform-specific library. Please update your code to use GLibUnix.signal_add instead.
Sep 16 23:20:04 Fira gnome-shell[3177]: DING: 0 DesktopManager() ["/usr/share/gnome-shell/extensions/ding@rastersoft.com/app/desktopManager.js":264:12]
Sep 16 23:20:04 Fira gnome-shell[3177]: DING: 1 anonymous() ["/usr/share/gnome-shell/extensions/ding@rastersoft.com/app/ding.js":180:25]
Sep 16 23:20:04 Fira gnome-shell[3177]: DING: 2 anonymous() ["/usr/share/gnome-shell/extensions/ding@rastersoft.com/app/ding.js":197:20]
Sep 16 23:20:04 Fira gnome-shell[3177]: DING: 3 <TOP LEVEL> ["/usr/share/gnome-shell/extensions/ding@rastersoft.com/app/ding.js":206:12]
Sep 16 23:20:04 Fira gnome-shell[3177]: DING: DBus interface for Gvfs daemon (org.gtk.vfs.Metadata) is now available.
Sep 16 23:20:04 Fira gnome-shell[3177]: DING: DBus interface for Switcheroo control (net.hadess.SwitcherooControl) is now available.
Sep 16 23:20:04 Fira gnome-shell[3177]: DING: ** Message: 23:20:04.189: Connecting to org.freedesktop.Tracker3.Miner.Files
Sep 16 23:20:04 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 31 with keysym 31 (keycode a).
Sep 16 23:20:04 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 32 with keysym 32 (keycode b).
Sep 16 23:20:04 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 33 with keysym 33 (keycode c).
Sep 16 23:20:04 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 34 with keysym 34 (keycode d).
Sep 16 23:20:04 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 35 with keysym 35 (keycode e).
Sep 16 23:20:04 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 31 with keysym 31 (keycode a).
Sep 16 23:20:04 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 36 with keysym 36 (keycode f).
Sep 16 23:20:04 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 32 with keysym 32 (keycode b).
Sep 16 23:20:04 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 33 with keysym 33 (keycode c).
Sep 16 23:20:04 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 37 with keysym 37 (keycode 10).
Sep 16 23:20:04 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 38 with keysym 38 (keycode 11).
Sep 16 23:20:04 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 39 with keysym 39 (keycode 12).
Sep 16 23:20:04 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 35 with keysym 35 (keycode e).
Sep 16 23:20:04 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 37 with keysym 37 (keycode 10).
Sep 16 23:20:04 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 36 with keysym 36 (keycode f).
Sep 16 23:20:04 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 38 with keysym 38 (keycode 11).
Sep 16 23:20:04 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 39 with keysym 39 (keycode 12).
Sep 16 23:20:04 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 34 with keysym 34 (keycode d).
Sep 16 23:20:04 Fira gnome-shell[3177]: DING: DBus interface for Nautilus (org.gnome.Nautilus.FileOperations2) is now available.
Sep 16 23:20:04 Fira gnome-shell[3177]: DING: DBus interface for Nautilus (org.freedesktop.FileManager1) is now available.
Sep 16 23:20:04 Fira gnome-shell[3177]: DING: GNOME nautilus 46.4
Sep 16 23:20:04 Fira gnome-shell[3177]: DING: DBus interface for File-roller (org.gnome.ArchiveManager1) is now available.
Sep 16 23:20:26 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 31 with keysym 31 (keycode a).
Sep 16 23:20:26 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 32 with keysym 32 (keycode b).
Sep 16 23:20:26 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 33 with keysym 33 (keycode c).
Sep 16 23:20:26 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 34 with keysym 34 (keycode d).
Sep 16 23:20:26 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 35 with keysym 35 (keycode e).
Sep 16 23:20:26 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 31 with keysym 31 (keycode a).
Sep 16 23:20:26 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 36 with keysym 36 (keycode f).
Sep 16 23:20:26 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 32 with keysym 32 (keycode b).
Sep 16 23:20:26 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 33 with keysym 33 (keycode c).
Sep 16 23:20:26 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 37 with keysym 37 (keycode 10).
Sep 16 23:20:26 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 38 with keysym 38 (keycode 11).
Sep 16 23:20:26 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 39 with keysym 39 (keycode 12).
Sep 16 23:20:26 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 35 with keysym 35 (keycode e).
Sep 16 23:20:26 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 37 with keysym 37 (keycode 10).
Sep 16 23:20:26 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 36 with keysym 36 (keycode f).
Sep 16 23:20:26 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 38 with keysym 38 (keycode 11).
Sep 16 23:20:26 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 39 with keysym 39 (keycode 12).
Sep 16 23:20:26 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 34 with keysym 34 (keycode d).
Sep 16 23:22:51 Fira gnome-shell[3177]: Can't update stage views actor unnamed [MetaWindowActorX11] is on because it needs an allocation.
Sep 16 23:22:51 Fira gnome-shell[3177]: Can't update stage views actor unnamed [MetaSurfaceActorX11] is on because it needs an allocation.
Sep 16 23:22:51 Fira gnome-shell[3177]: Can't update stage views actor unnamed [MetaWindowActorX11] is on because it needs an allocation.
Sep 16 23:22:51 Fira gnome-shell[3177]: Can't update stage views actor unnamed [MetaSurfaceActorX11] is on because it needs an allocation.
Sep 16 23:22:51 Fira gnome-shell[3177]: Can't update stage views actor unnamed [MetaWindowActorX11] is on because it needs an allocation.
Sep 16 23:22:51 Fira gnome-shell[3177]: Can't update stage views actor unnamed [MetaSurfaceActorX11] is on because it needs an allocation.
Sep 16 23:22:51 Fira gnome-shell[3177]: Can't update stage views actor unnamed [MetaWindowActorX11] is on because it needs an allocation.
Sep 16 23:22:51 Fira gnome-shell[3177]: Can't update stage views actor unnamed [MetaSurfaceActorX11] is on because it needs an allocation.
Sep 16 23:22:55 Fira gnome-shell[3177]: Window manager warning: Invalid WM_TRANSIENT_FOR window 0x2e0000a specified for 0x2e00008.
Sep 16 23:30:11 Fira gnome-shell[3177]: Window manager warning: Invalid WM_TRANSIENT_FOR window 0x2e0000a specified for 0x2e00008.
Sep 17 00:37:09 Fira gnome-shell[3177]: JS ERROR: TypeError: this._containerService is null
                                        rearrange@file:///home/fira/.local/share/gnome-shell/extensions/lilypad@shendrew.github.io/extension.js:73:13
                                        enable/Panel.Panel.prototype.addToStatusArea/destroyID<@file:///home/fira/.local/share/gnome-shell/extensions/lilypad@shendrew.github.io/extension.js:84:17
                                        disable@file:///home/fira/.local/share/gnome-shell/extensions/lilypad@shendrew.github.io/extension.js:172:33
Sep 17 00:37:09 Fira gnome-shell[3177]: Object St.Icon (0x5ee1457615c0), has been already disposed — impossible to access it. This might be caused by the object having been destroyed from C code using something such as destroy(), dispose(), or remove() vfuncs.
                                        #0   5ee141f2f520 i   file:///home/fira/.local/share/gnome-shell/extensions/lilypad@shendrew.github.io/extension.js:175 (38325c9ceec0 @ 244)
Sep 17 00:37:09 Fira gnome-shell[3177]: Lilypad extension stopped.
Sep 17 00:37:09 Fira gnome-shell[3177]: JS ERROR: TypeError: this._containerService is null
                                        rearrange@file:///home/fira/.local/share/gnome-shell/extensions/lilypad@shendrew.github.io/extension.js:73:13
                                        enable/Panel.Panel.prototype.addToStatusArea/destroyID<@file:///home/fira/.local/share/gnome-shell/extensions/lilypad@shendrew.github.io/extension.js:84:17
                                        _init/<@file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/indicatorStatusIcon.js:246:72
                                        destroy@file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/appIndicator.js:722:14
                                        destroy/<@file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/statusNotifierWatcher.js:259:52
                                        destroy@file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/statusNotifierWatcher.js:259:21
                                        disable@file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/extension.js:65:41
Sep 17 00:37:09 Fira gnome-shell[3177]: JS ERROR: TypeError: this._containerService is null
                                        rearrange@file:///home/fira/.local/share/gnome-shell/extensions/lilypad@shendrew.github.io/extension.js:73:13
                                        enable/Panel.Panel.prototype.addToStatusArea/destroyID<@file:///home/fira/.local/share/gnome-shell/extensions/lilypad@shendrew.github.io/extension.js:84:17
                                        _init/<@file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/indicatorStatusIcon.js:246:72
                                        destroy@file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/appIndicator.js:722:14
                                        destroy/<@file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/statusNotifierWatcher.js:259:52
                                        destroy@file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/statusNotifierWatcher.js:259:21
                                        disable@file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/extension.js:65:41
Sep 17 00:37:09 Fira gnome-shell[3177]: JS ERROR: TypeError: this._containerService is null
                                        rearrange@file:///home/fira/.local/share/gnome-shell/extensions/lilypad@shendrew.github.io/extension.js:73:13
                                        enable/Panel.Panel.prototype.addToStatusArea/destroyID<@file:///home/fira/.local/share/gnome-shell/extensions/lilypad@shendrew.github.io/extension.js:84:17
                                        _init/<@file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/indicatorStatusIcon.js:246:72
                                        destroy@file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/appIndicator.js:722:14
                                        destroy/<@file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/statusNotifierWatcher.js:259:52
                                        destroy@file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/statusNotifierWatcher.js:259:21
                                        disable@file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/extension.js:65:41
Sep 17 00:37:09 Fira gnome-shell[3177]: Object .Gjs_ubuntu-appindicators_ubuntu_com_appIndicator_AppIndicatorsIconActor (0x5ee142c7f0f0), has been already disposed — impossible to get any property from it. This might be caused by the object having been destroyed from C code using something such as destroy(), dispose(), or remove() vfuncs.
                                        #0   5ee141f2eec8 i   file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/appIndicator.js:1377 (52b0500b920 @ 446)
                                        #1   7ffe34ddf820 b   file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/appIndicator.js:1435 (52b0500ba10 @ 467)
Sep 17 00:37:09 Fira gnome-shell[3177]: Object .Gjs_ubuntu-appindicators_ubuntu_com_appIndicator_AppIndicatorsIconActor (0x5ee142c7f0f0), has been already disposed — impossible to get any property from it. This might be caused by the object having been destroyed from C code using something such as destroy(), dispose(), or remove() vfuncs.
                                        #0   7ffe34ddf820 b   file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/appIndicator.js:1437 (52b0500ba10 @ 491)
Sep 17 00:37:09 Fira gnome-shell[3177]: TypeError: SettingsManager.getDefault() is null
                                          getDefaultGSettings@file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/settingsManager.js:54:28
                                          _updateIconSize@file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/appIndicator.js:1549:42
                                          _updateWhenFullyReady@file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/appIndicator.js:1009:18
                                          async*_init@file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/appIndicator.js:965:14
                                          AppIndicatorsIconActor@file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/appIndicator.js:879:1
                                          _init@file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/indicatorStatusIcon.js:227:13
                                          IndicatorBaseStatusIcon@file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/indicatorStatusIcon.js:68:1
                                          IndicatorStatusIcon@file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/indicatorStatusIcon.js:224:1
                                          _registerItem@file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/statusNotifierWatcher.js:115:32
                                          async*_ensureItemRegistered@file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/statusNotifierWatcher.js:140:20
                                          RegisterStatusNotifierItemAsync@file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/statusNotifierWatcher.js:205:24
Sep 17 00:37:09 Fira gnome-shell[3177]: Object .Gjs_ubuntu-appindicators_ubuntu_com_appIndicator_AppIndicatorsIconActor (0x5ee142c7f0f0), has been already disposed — impossible to set any property on it. This might be caused by the object having been destroyed from C code using something such as destroy(), dispose(), or remove() vfuncs.
                                        #0   5ee141f2eec8 i   file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/appIndicator.js:1368 (52b0500b920 @ 310)
                                        #1   7ffe34ddf820 b   file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/appIndicator.js:1435 (52b0500ba10 @ 467)
Sep 17 00:37:09 Fira gnome-shell[3177]: Object .Gjs_ubuntu-appindicators_ubuntu_com_appIndicator_AppIndicatorsIconActor (0x5ee142c7f0f0), has been already disposed — impossible to get any property from it. This might be caused by the object having been destroyed from C code using something such as destroy(), dispose(), or remove() vfuncs.
                                        #0   5ee141f2eec8 i   file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/appIndicator.js:1377 (52b0500b920 @ 446)
                                        #1   7ffe34ddf820 b   file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/appIndicator.js:1435 (52b0500ba10 @ 467)
Sep 17 00:37:09 Fira gnome-shell[3177]: Object .Gjs_ubuntu-appindicators_ubuntu_com_appIndicator_AppIndicatorsIconActor (0x5ee142c7f0f0), has been already disposed — impossible to get any property from it. This might be caused by the object having been destroyed from C code using something such as destroy(), dispose(), or remove() vfuncs.
                                        #0   7ffe34ddf820 b   file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/appIndicator.js:1437 (52b0500ba10 @ 491)
Sep 17 00:37:09 Fira gnome-shell[3177]: Object .Gjs_ubuntu-appindicators_ubuntu_com_appIndicator_AppIndicatorsIconActor (0x5ee147f9b9b0), has been already disposed — impossible to get any property from it. This might be caused by the object having been destroyed from C code using something such as destroy(), dispose(), or remove() vfuncs.
                                        #0   5ee141f2eec8 i   file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/appIndicator.js:1356 (52b0500b920 @ 54)
                                        #1   7ffe34ddf820 b   file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/appIndicator.js:1435 (52b0500ba10 @ 467)
Sep 17 00:37:09 Fira gnome-shell[3177]: Object .Gjs_ubuntu-appindicators_ubuntu_com_appIndicator_AppIndicatorsIconActor (0x5ee147f9b9b0), has been already disposed — impossible to get any property from it. This might be caused by the object having been destroyed from C code using something such as destroy(), dispose(), or remove() vfuncs.
                                        #0   5ee141f2eec8 i   file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/appIndicator.js:1357 (52b0500b920 @ 79)
                                        #1   7ffe34ddf820 b   file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/appIndicator.js:1435 (52b0500ba10 @ 467)
Sep 17 00:37:09 Fira gnome-shell[3177]: Object .Gjs_ubuntu-appindicators_ubuntu_com_appIndicator_AppIndicatorsIconActor (0x5ee147f9b9b0), has been already disposed — impossible to set any property on it. This might be caused by the object having been destroyed from C code using something such as destroy(), dispose(), or remove() vfuncs.
                                        #0   5ee141f2eec8 i   file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/appIndicator.js:1363 (52b0500b920 @ 225)
                                        #1   7ffe34ddf820 b   file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/appIndicator.js:1435 (52b0500ba10 @ 467)
Sep 17 00:37:09 Fira gnome-shell[3177]: Object .Gjs_ubuntu-appindicators_ubuntu_com_appIndicator_AppIndicatorsIconActor (0x5ee147f9b9b0), has been already disposed — impossible to get any property from it. This might be caused by the object having been destroyed from C code using something such as destroy(), dispose(), or remove() vfuncs.
                                        #0   5ee141f2eec8 i   file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/appIndicator.js:1366 (52b0500b920 @ 271)
                                        #1   7ffe34ddf820 b   file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/appIndicator.js:1435 (52b0500ba10 @ 467)
Sep 17 00:37:09 Fira gnome-shell[3177]: Object .Gjs_ubuntu-appindicators_ubuntu_com_appIndicator_AppIndicatorsIconActor (0x5ee147f9b9b0), has been already disposed — impossible to get any property from it. This might be caused by the object having been destroyed from C code using something such as destroy(), dispose(), or remove() vfuncs.
                                        #0   5ee141f2eec8 i   file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/appIndicator.js:1377 (52b0500b920 @ 446)
                                        #1   7ffe34ddf820 b   file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/appIndicator.js:1435 (52b0500ba10 @ 467)
Sep 17 00:37:09 Fira gnome-shell[3177]: Object .Gjs_ubuntu-appindicators_ubuntu_com_appIndicator_AppIndicatorsIconActor (0x5ee147f9b9b0), has been already disposed — impossible to get any property from it. This might be caused by the object having been destroyed from C code using something such as destroy(), dispose(), or remove() vfuncs.
                                        #0   5ee141f2eec8 i   file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/appIndicator.js:1378 (52b0500b920 @ 466)
                                        #1   7ffe34ddf820 b   file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/appIndicator.js:1435 (52b0500ba10 @ 467)
Sep 17 00:37:09 Fira gnome-shell[3177]: Object .Gjs_ubuntu-appindicators_ubuntu_com_appIndicator_AppIndicatorsIconActor (0x5ee147f9b9b0), has been already disposed — impossible to get any property from it. This might be caused by the object having been destroyed from C code using something such as destroy(), dispose(), or remove() vfuncs.
                                        #0   5ee141f2eec8 i   file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/appIndicator.js:1379 (52b0500b920 @ 511)
                                        #1   7ffe34ddf820 b   file:///usr/share/gnome-shell/extensions/ubuntu-appindicators@ubuntu.com/appIndicator.js:1435 (52b0500ba10 @ 467)
Sep 17 02:04:17 Fira gnome-shell[3177]: Lilypad extension started...
Sep 17 02:04:18 Fira gnome-shell[3177]: Launching DING process
Sep 17 02:04:18 Fira dbus-daemon[2056]: [session uid=1000 pid=2056] Activating service name='org.gnome.Nautilus' requested by ':1.421' (uid=1000 pid=76738 comm="gjs /usr/share/gnome-shell/extensions/ding@rasters" label="desktop-icons-ng (unconfined)")
Sep 17 02:04:18 Fira dbus-daemon[2056]: [session uid=1000 pid=2056] Activating service name='org.gnome.ArchiveManager1' requested by ':1.421' (uid=1000 pid=76738 comm="gjs /usr/share/gnome-shell/extensions/ding@rasters" label="desktop-icons-ng (unconfined)")
Sep 17 02:04:18 Fira gnome-shell[3177]: DING: Detected async api for thumbnails
Sep 17 02:04:18 Fira gnome-shell[3177]: DING: (gjs:76738): Gjs-WARNING **: 02:04:18.214: GLib.unix_signal_add has been moved to a separate platform-specific library. Please update your code to use GLibUnix.signal_add instead.
Sep 17 02:04:18 Fira gnome-shell[3177]: DING: 0 DesktopManager() ["/usr/share/gnome-shell/extensions/ding@rastersoft.com/app/desktopManager.js":264:12]
Sep 17 02:04:18 Fira gnome-shell[3177]: DING: 1 anonymous() ["/usr/share/gnome-shell/extensions/ding@rastersoft.com/app/ding.js":180:25]
Sep 17 02:04:18 Fira gnome-shell[3177]: DING: 2 anonymous() ["/usr/share/gnome-shell/extensions/ding@rastersoft.com/app/ding.js":197:20]
Sep 17 02:04:18 Fira gnome-shell[3177]: DING: 3 <TOP LEVEL> ["/usr/share/gnome-shell/extensions/ding@rastersoft.com/app/ding.js":206:12]
Sep 17 02:04:18 Fira gnome-shell[3177]: DING: DBus interface for Gvfs daemon (org.gtk.vfs.Metadata) is now available.
Sep 17 02:04:18 Fira gnome-shell[3177]: DING: DBus interface for Switcheroo control (net.hadess.SwitcherooControl) is now available.
Sep 17 02:04:18 Fira gnome-shell[3177]: DING: ** Message: 02:04:18.246: Connecting to org.freedesktop.Tracker3.Miner.Files
Sep 17 02:04:18 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 31 with keysym 31 (keycode a).
Sep 17 02:04:18 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 32 with keysym 32 (keycode b).
Sep 17 02:04:18 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 33 with keysym 33 (keycode c).
Sep 17 02:04:18 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 34 with keysym 34 (keycode d).
Sep 17 02:04:18 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 35 with keysym 35 (keycode e).
Sep 17 02:04:18 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 36 with keysym 36 (keycode f).
Sep 17 02:04:18 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 31 with keysym 31 (keycode a).
Sep 17 02:04:18 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 32 with keysym 32 (keycode b).
Sep 17 02:04:18 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 37 with keysym 37 (keycode 10).
Sep 17 02:04:18 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 33 with keysym 33 (keycode c).
Sep 17 02:04:18 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 38 with keysym 38 (keycode 11).
Sep 17 02:04:18 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 34 with keysym 34 (keycode d).
Sep 17 02:04:18 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 39 with keysym 39 (keycode 12).
Sep 17 02:04:18 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 35 with keysym 35 (keycode e).
Sep 17 02:04:18 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 36 with keysym 36 (keycode f).
Sep 17 02:04:18 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 38 with keysym 38 (keycode 11).
Sep 17 02:04:18 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 37 with keysym 37 (keycode 10).
Sep 17 02:04:18 Fira gnome-shell[3177]: Window manager warning: Overwriting existing binding of keysym 39 with keysym 39 (keycode 12).
Sep 17 02:04:18 Fira gnome-shell[3177]: DING: DBus interface for Nautilus (org.gnome.Nautilus.FileOperations2) is now available.
Sep 17 02:04:18 Fira gnome-shell[3177]: DING: DBus interface for Nautilus (org.freedesktop.FileManager1) is now available.
Sep 17 02:04:18 Fira gnome-shell[3177]: DING: DBus interface for File-roller (org.gnome.ArchiveManager1) is now available.
Sep 17 02:04:18 Fira gnome-shell[3177]: DING: GNOME nautilus 46.4
Sep 17 02:04:19 Fira dbus-daemon[2056]: [session uid=1000 pid=2056] Activating service name='org.gnome.Calculator.SearchProvider' requested by ':1.39' (uid=1000 pid=3177 comm="/usr/bin/gnome-shell" label="unconfined")
Sep 17 02:04:19 Fira dbus-daemon[2056]: [session uid=1000 pid=2056] Activating service name='org.gnome.Characters' requested by ':1.39' (uid=1000 pid=3177 comm="/usr/bin/gnome-shell" label="unconfined")
Sep 17 02:04:19 Fira dbus-daemon[2056]: [session uid=1000 pid=2056] Activating service name='org.gnome.clocks' requested by ':1.39' (uid=1000 pid=3177 comm="/usr/bin/gnome-shell" label="unconfined")
Sep 17 02:04:19 Fira dbus-daemon[2056]: [session uid=1000 pid=2056] Activating service name='org.gnome.Settings.SearchProvider' requested by ':1.39' (uid=1000 pid=3177 comm="/usr/bin/gnome-shell" label="unconfined")
Sep 17 02:04:19 Fira gnome-shell[3177]: Received error from D-Bus search provider org.gnome.Terminal.desktop: Gio.IOErrorEnum: Cannot invoke method; proxy is for the well-known name org.gnome.Terminal without an owner, and proxy was constructed with the G_DBUS_PROXY_FLAGS_DO_NOT_AUTO_START flag
Sep 17 02:04:19 Fira systemd[1747]: Started app-gnome-org.goldendict.GoldenDict-76918.scope - Application launched by gnome-shell.
Sep 17 02:17:15 Fira gnome-shell[3177]: Window manager warning: Buggy client sent a _NET_ACTIVE_WINDOW message with a timestamp of 0 for 0x2600004
Sep 17 02:22:13 Fira gnome-shell[3177]: Window manager warning: Buggy client sent a _NET_ACTIVE_WINDOW message with a timestamp of 0 for 0x2600004
Sep 17 02:22:20 Fira gnome-shell[3177]: Window manager warning: Buggy client sent a _NET_ACTIVE_WINDOW message with a timestamp of 0 for 0x2600004
Sep 17 02:22:20 Fira gnome-shell[3177]: Can't update stage views actor unnamed [MetaWindowActorX11] is on because it needs an allocation.
Sep 17 02:22:20 Fira gnome-shell[3177]: Can't update stage views actor unnamed [MetaSurfaceActorX11] is on because it needs an allocation.
Sep 17 03:01:05 Fira gnome-shell[3177]: Window manager warning: Buggy client sent a _NET_ACTIVE_WINDOW message with a timestamp of 0 for 0x2600004
Sep 17 03:01:59 Fira gnome-shell[3177]: Window manager warning: Buggy client sent a _NET_ACTIVE_WINDOW message with a timestamp of 0 for 0x2600004
Sep 17 03:02:54 Fira gnome-shell[3177]: Window manager warning: Buggy client sent a _NET_ACTIVE_WINDOW message with a timestamp of 0 for 0x2a00004
^C
```

```
 ~ % systemctl --user disable gnome-session-failed.service
systemctl --user mask gnome-session-failed.service

The unit files have no installation config (WantedBy=, RequiredBy=, UpheldBy=,
Also=, or Alias= settings in the [Install] section, and DefaultInstance= for
template units). This means they are not meant to be enabled or disabled using systemctl.

Possible reasons for having these kinds of units are:
• A unit may be statically enabled by being symlinked from another unit's
  .wants/, .requires/, or .upholds/ directory.
• A unit's purpose may be to act as a helper for some other unit which has
  a requirement dependency on it.
• A unit may be started when needed via activation (socket, path, timer,
  D-Bus, udev, scripted systemctl call, ...).
• In case of template units, the unit is meant to be enabled with some
  instance name specified.
Created symlink /home/fira/.config/systemd/user/gnome-session-failed.service → /dev/null.
```

# how to disable ubuntu gnome crash screen

## how to disable ubuntu gnome crash screen

Depending on what you mean by the "crash screen," you are likely dealing with one of two scenarios: the frequent **Apport popup dialogs** ("System program problem detected") or the full-screen **"Oh no! Something has gone wrong" overlay**. [link](https://discourse.gnome.org/t/solved-close-or-disable-oh-no-something-has-gone-wrong-screen-without-log-out/28204)

Here is how to disable both options.

***

### Scenario 1: Disable Apport Crash Reporting Popups

If you are trying to stop the annoying dialog boxes that appear every time an application crashes or when you boot into your desktop, you need to turn off Ubuntu's built-in crash reporter called **Apport**. [link](https://askubuntu.com/questions/93457/how-do-i-enable-or-disable-apport)

**Using the Command Line (Permanent Fix):**

1. Open your terminal (`Ctrl + Alt + T`).

2. Open the Apport configuration file:\
   bash

<!---->

```
sudo nano /etc/default/apport
```

Use code with caution.
3\. Look for the line that says `enabled=1` and change the value to `0`:\
text

```
enabled=0
```

Use code with caution.
4\. Press `Ctrl + O`, then `Enter` to save, and `Ctrl + X` to exit the text editor.
5\. Stop and disable the background service immediately without rebooting: [link](https://askubuntu.com/questions/93457/how-do-i-enable-or-disable-apport)\
bash

```
sudo systemctl stop apport && sudo systemctl disable apport
```

Use code with caution.

**Using the GUI:**

1. Open the **Settings** application.
2. Navigate to **Privacy & Security** > **Diagnostics**.
3. Toggle the **Send error reports to Canonical** option to **Never**. [link](https://discourse.ubuntu.com/t/how-to-delete-an-uploaded-crash-report/64118)

***

### Scenario 2: Disable the Full-Screen "Oh no! Something has gone wrong" Overlay

If GNOME Shell crashes, it throws a full-screen white/grey lock screen that forces you to log out, even if your underlying apps are still running perfectly in the background. You can bypass this blocking screen by masking the failure service. [link](https://discourse.gnome.org/t/solved-close-or-disable-oh-no-something-has-gone-wrong-screen-without-log-out/28204/16)

1. Open your terminal.

2. Run the following commands to disable and mask the user-level crash handler service:\
   bash

<!---->

```
systemctl --user disable gnome-session-failed.service
systemctl --user mask gnome-session-failed.service
```

Use code with caution.
3\. If you are currently stuck on that screen right now, you can kill the active overlay process via SSH or a TTY terminal (`Ctrl + Alt + F3`): [link](https://discourse.gnome.org/t/solved-close-or-disable-oh-no-something-has-gone-wrong-screen-without-log-out/28204)\
bash

```
killall gnome-session-failed
```

Use code with caution.

Are you disabling this to **bypass a specific error loop** keeping you from logging in, or are you just trying to get rid of **annoying notifications**? If you are stuck in a boot or login loop, let me know your **Ubuntu version** so we can look at the actual crash logs.

- [link](https://discourse.gnome.org/t/solved-close-or-disable-oh-no-something-has-gone-wrong-screen-without-log-out/28204)\
  GNOME Discourse\
  \[SOLVED] Close or Disable "Oh no! Something has gone ...\
  I found the source of the “Oh no!” overlay screen is the userland gnome-session-failed service. I took control over my session bac...
- [link](https://askubuntu.com/questions/93457/how-do-i-enable-or-disable-apport)\
  Ask Ubuntu\
  How do I enable or disable Apport?\
  Change enabled from "0" to a "1" so it looks like this: enabled=1 To turn it off make it: enabled=0 Now save your changes and clos...
- [link](https://discourse.gnome.org/t/solved-close-or-disable-oh-no-something-has-gone-wrong-screen-without-log-out/28204/16)\
  GNOME Discourse\
  \[SOLVED] Close or Disable "Oh no! Something has gone wrong" ...\
  Jun 7, 2026 — \[SOLVED] Close or Disable "Oh no! Something has gone wrong" screen without log out? Desktop nanderer (n'anderer) June 7, 2026, 7:0...

Show all

## what if i disabled gnome session failed service

If you disable and mask the `gnome-session-failed.service`, you change how your system behaves when the GNOME desktop environment encounters a fatal error.

Here is exactly what happens if you run those commands:

### 1. You will never see the "Oh no! Something has gone wrong" screen again

The primary effect is that the full-screen blocking overlay is **completely suppressed**. The system will no longer force you to see that specific warning page or force you into a manual logout button loop.

### 2. GNOME will try to silently restart

When a GNOME component crashes, the system will attempt to restart the window manager (`gnome-shell`) in the background automatically.

- **If it succeeds:** Your screen might flicker or go black for a few seconds, your open application windows might lose their window borders momentarily, but your desktop will reappear, and you can keep working exactly where you left off.
- **If it fails repeatedly:** Instead of showing you an error screen, you will likely be dropped directly back into the **GDM login screen**, or your screen will freeze entirely on a black screen or your frozen wallpaper.

### 3. Debugging becomes slightly harder

Because the crash screen is hidden, you lose the immediate visual cue that a system-level GNOME crash just occurred. If your system freezes or drops you to the login screen, you will have to manually look at the system logs to figure out what happened.

You can check the logs after a silent crash by opening a terminal and running:

bash

```
journalctl --user -u gnome-session-failed.service
# or check general gnome-shell errors
journalctl --user -b 0 | grep -i gnome-shell
```

Use code with caution.

### Is it safe to do?

**Yes, it is perfectly safe.** Masking this service does not damage your operating system, corrupt your files, or make your system unstable. It simply removes a safety/notification wrapper. If you ever want to undo it and get the crash screen back, you can run:

bash

```
systemctl --user unmask gnome-session-failed.service
systemctl --user enable gnome-session-failed.service
```

Use code with caution.

Are you considering disabling this because your system keeps **crashing frequently**, or are you setting up a headless/kiosk machine where you **never want error screens to show up** to a user? If it is crashing frequently, we can check your logs together to see if an **extension** or a **graphics driver** is causing it.

## what do ppl say

In the Linux and Ubuntu communities, people generally refer to `gnome-session-failed` as the **"Window of Doom."** [link](https://discourse.gnome.org/t/solved-close-or-disable-oh-no-something-has-gone-wrong-screen-without-log-out/28204)

Among users on [Reddit](https://www.reddit.com/) and the [GNOME Discourse forums](https://discourse.gnome.org/), the consensus is split between intense frustration with the default design and appreciation for this specific workaround. [link](https://discourse.gnome.org/t/solved-close-or-disable-oh-no-something-has-gone-wrong-screen-without-log-out/28204)

### 1. Intense Frustration with the "Worst UX Imaginable"

Many users complain that the screen is an aggressive overreaction. The overlay takes over the entire monitor, goes **fullscreen, and forces a logout**. [link](https://discourse.gnome.org/t/solved-close-or-disable-oh-no-something-has-gone-wrong-screen-without-log-out/28204)

- **The "Farce":** People point out that the screen says the system "cannot recover," but that is technically a lie. Often, the underlying apps (like a terminal rendering a video or an unsaved document) are still running perfectly fine in the background. The crash screen just traps you so you can't reach them.
- **No "Minimize" Button:** Users hate that GNOME doesn't let you just close the window, save your work, and _then_ log out gracefully. [link](https://discourse.gnome.org/t/solved-close-or-disable-oh-no-something-has-gone-wrong-screen-without-log-out/28204)

### 2. Relieved Users Sharing the `systemctl` Workaround

Because the screen is so hated, advanced users heavily recommend masking the service. [link](https://discourse.gnome.org/t/solved-close-or-disable-oh-no-something-has-gone-wrong-screen-without-log-out/28204)

- On forums, when someone discovers they can run `systemctl --user mask gnome-session-failed.service`, it is frequently treated as a **huge quality-of-life discovery**.
- Users report that after disabling it, if GNOME Shell bugs out (which happens occasionally due to experimental extensions or graphics driver hiccups), the desktop just flickers for two seconds, restarts silently, and they can **keep working without losing any unsaved data**. [link](https://discourse.gnome.org/t/solved-close-or-disable-oh-no-something-has-gone-wrong-screen-without-log-out/28204)

### 3. Kiosk & Headless Developers Love It

System administrators building **digital signage, public kiosks, or home theater PCs (HTPCs)** swear by disabling this. For them, a full-screen white error message completely ruins the user experience. Suppressing it ensures the machine stays as visually clean as possible, even during a minor background crash.

Are you asking because you **recently got locked out** by this screen and lost data, or are you just **curious about the best practices** before tweaking your system?

- [link](https://discourse.gnome.org/t/solved-close-or-disable-oh-no-something-has-gone-wrong-screen-without-log-out/28204)\
  GNOME Discourse\
  \[SOLVED] Close or Disable "Oh no! Something has gone ...\
  Gnome would allow closing the window, causes the window to be closed thus triggering a forced logout and data loss.

## why is it designed this way

The design of the **"Oh no! Something has gone wrong"** overlay is rooted in the specific interface philosophy of the **GNOME Design Team** and the technical architecture of Linux display management.

The rationale behind it—and why it feels so punishing to users—is a result of several deliberate engineering choices.

### 1. The Core Philosophy: "Shield the User"

The screen was introduced during the GNOME 3 era, a time when developers heavily shifted toward an opinionated, minimalist user experience. The design philosophy aims to **hide the gritty complexities of Linux** from the average user.\
Instead of dropping a user into a broken, flickering screen with a wall of technical terminal code or core dumps, the developers chose to display a clean, human-readable "friendly error message" similar to a Windows Blue Screen of Death or Google Chrome's "Aw, Snap!" page.

### 2. Guarding Against a Corrupted UI State

From an engineering standpoint, this screen acts as a **fail-safe lockdown mechanism**. When the desktop environment's window manager (`gnome-shell`) crashes repeatedly and fails to restart, the system enters an unpredictable, insecure state: [link](https://bbs.archlinux.org/viewtopic.php?id=294385)

- Without a functioning compositor or window manager, keyboard shortcuts might stop working, applications can lose window decorations, and security protocols (like screen locking) fail.
- To prevent you from being trapped in an unresponsive graphical state where you can't even safely click "Shutdown," GNOME spawns `gnome-session-failed`. It is a brutal, high-priority fallback window designed to overlay _everything else_ to guarantee that at least one functional button—**Log Out**—is clickable. [link](https://www.reddit.com/r/Ubuntu/comments/1c6dtky/oh%5Fno%5Fsomething%5Fhas%5Fgone%5Fwrong%5Fmessage%5Fwhile/)

### 3. The Forced Logout Logic

The reason it forces a logout, rather than providing a "Close" or "Ignore" option, comes down to stability. In the eyes of the developers, if the core shell has experienced a fatal, unrecoverable crash, **the current user session is thoroughly broken**.

- Any attempt to ignore the error and keep working inside a corrupted graphical stack could result in random application crashes, frozen workflows, or data loss.
- Terminating the session and sending you back to the display manager (GDM) clears the memory, kills frozen background graphical processes, and starts a fresh, stable workspace.

### Why the Design Backfires

While the logic is sound on paper for basic users, it is widely criticized in the Linux community for two main reasons: [link](https://discourse.gnome.org/t/solved-close-or-disable-oh-no-something-has-gone-wrong-screen-without-log-out/28204)

- **It isolates advanced users:** By hiding all details, a user cannot see _why_ it crashed (e.g., an outdated extension or an Nvidia driver bug) without dropping to a TTY terminal (`Ctrl + Alt + F3`) to dig through logs.
- **It causes data loss:** Because the window takes over the screen and demands a session termination, users are locked out of saving work in open apps (like a browser or text editor) that are actually still running normally in the background. [link](https://forum.endeavouros.com/t/standard-approach-for-fixing-oh-no-something-has-gone-wrong/53203)

By masking the service like you did earlier, you are essentially telling the operating system: _"I value keeping my open apps alive more than I value GNOME's safety net."_

Are you trying to decide whether to **leave the screen disabled permanently**, or did a **recent crash loop** force you to dig into why this happens?

- [link](https://forum.endeavouros.com/t/standard-approach-for-fixing-oh-no-something-has-gone-wrong/53203)\
  EndeavourOS\
  Standard approach for fixing "Oh no! Something has gone ...\
  It seems the “Oh no! Something has gone wrong.” screen is a catch-all for many kinds of errors. Try moving the extensions out of t...
- [link](https://www.reddit.com/r/Ubuntu/comments/1c6dtky/oh%5Fno%5Fsomething%5Fhas%5Fgone%5Fwrong%5Fmessage%5Fwhile/)\
  Reddit\
  "Oh no! Something has gone wrong " message while updating ...\
  I tried this and it worked: From the broken screen Hit : ctrl+shift+f4 Login with user id and pass Execute: sudo apt purge ubuntu-
- [link](https://discourse.gnome.org/t/solved-close-or-disable-oh-no-something-has-gone-wrong-screen-without-log-out/28204)\
  GNOME Discourse\
  \[SOLVED] Close or Disable "Oh no! Something has gone ...\
  "Oh no! Something has gone wrong" screen should include more info and details... Initial state is Normal State Displayed on all de...

Show all

## ~ % systemctl --user disable gnome-session-failed.service

systemctl --user mask gnome-session-failed.service

The unit files have no installation config (WantedBy=, RequiredBy=, UpheldBy=,\
Also=, or Alias= settings in the \[Install] section, and DefaultInstance= for\
template units). This means they are not meant to be enabled or disabled using systemctl.

Possible reasons for having these kinds of units are:\
• A unit may be statically enabled by being symlinked from another unit's\
.wants/, .requires/, or .upholds/ directory.\
• A unit's purpose may be to act as a helper for some other unit which has\
a requirement dependency on it.\
• A unit may be started when needed via activation (socket, path, timer,\
D-Bus, udev, scripted systemctl call, ...).\
• In case of template units, the unit is meant to be enabled with some\
instance name specified.\
Created symlink /home/fira/.config/systemd/user/gnome-session-failed.service → /dev/null.\
\~ %

The warning message you see for the first command is completely normal, but the second command **successfully worked!**

Here is what just happened with your system:

### 1. The `disable` command threw a warning (Normal)

The warning occurred because `gnome-session-failed.service` is a "static" systemd unit. It doesn't have an `[Install]` section because it isn't meant to be enabled on boot. Instead, GNOME triggers it dynamically on-demand only when a crash happens. Because it was never "enabled" in the traditional sense, telling systemd to `disable` it triggers that generic explanatory message. You can safely ignore it.

### 2. The `mask` command succeeded (Crucial Step)

The last line of your output is the success confirmation:

text

```
Created symlink /home/fira/.config/systemd/user/gnome-session-failed.service → /dev/null.
```

Use code with caution.

By symlinking the service to `/dev/null`, you have officially "masked" it. Now, even if GNOME encounters a fatal crash and frantically commands systemd to launch the "Oh no! Something has gone wrong" screen, systemd will look at this symlink, redirect the request into a black hole, and do absolutely nothing.

### What to expect next

The screen is now fully blocked for your user profile (`fira`). If GNOME Shell crashes in the future, it should silently flicker and attempt to restart itself without trapping you behind the forced-logout screen.

Would you like to **simulate a fake GNOME crash** right now to safely test and make sure the blocking screen stays gone, or are you all set?

## how to test

To test it safely without actually losing your work or rebooting, you can manually trigger a GNOME Shell restart.

Because you have masked the error service, the shell should just flicker for a moment and come right back, rather than bringing up the "Window of Doom."

### Method 1: The Safe Shell Restart (Wayland or X11)

The cleanest way to test how your system handles a shell interruption is to replace the current running shell process.

1. Open your terminal.

2. Run this command:\
   bash

<!---->

```
gnome-shell --replace & disown
```

Use code with caution.

- **What should happen:** Your desktop wallpaper and top panel will disappear for 1–2 seconds, your open windows might lose their borders briefly, and then everything will reappear. Your open applications will remain completely intact.

***

### Method 2: The "Fake Crash" Command

If you want to trick systemd into thinking a crash occurred to explicitly verify that the service is blocked, you can try to start the service manually.

1. Open your terminal.

2. Force-start the service by running:\
   bash

<!---->

```
systemctl --user start gnome-session-failed.service
```

Use code with caution.

- **What should happen:** You should see an error message in your terminal stating `Failed to start gnome-session-failed.service: Unit gnome-session-failed.service is masked.` The full-screen error overlay will **not** appear.

***

### Method 3: The Aggressive Test (X11 only)

If you are running on the older **X11 display server** (not Wayland) and want to simulate a hard, ungraceful crash of the window manager, you can crash it via keyboard shortcuts.

1. Press `Alt + F2`.
2. Type the letter `r` and press `Enter`.

- **What should happen:** This instantly kills and restarts the GNOME graphical stack. Just like Method 1, the screen will flash, and your desktop will reload cleanly without throwing the error screen.

Did the **desktop reload cleanly**, or did you get a **masked service error** in the terminal? Let me know if everything stayed alive as expected!

## why does it reload gracefully wo closing all apps on x11 via method 3

The reason Method 3 reloads gracefully without closing your apps comes down to a fundamental architectural difference between **X11** and **Wayland**: <mark>on X11, the<span> </span><strong>Window Manager</strong><span> </span>and the<span> </span><strong>Display Server</strong><span> </span>are two completely separate programs</mark>.

Here is exactly why it works so smoothly on X11:

### 1. The Separation of Church and State (XOrg vs. GNOME Shell)

On an X11 system, **Xorg** is the display server. It acts as the foundational layer that talks directly to your graphics card, manages your mouse/keyboard inputs, and actually holds the connection open for all your running applications (like Chrome, VS Code, or your terminal).

**GNOME Shell** is merely the _Window Manager_ running on top of Xorg. Its only job is to draw the top panel, manage window borders, and handle animations.

- When you press `Alt + F2` and type `r`, you are **only restarting GNOME Shell**.
- Because Xorg never dies, the foundational layer holding your applications alive remains perfectly intact. Your apps don't even realize anything happened; they just briefly lose their borders while GNOME Shell restarts and redraws itself.

### 2. Why this is impossible on Wayland

If you try this on a modern Wayland session, the option isn't even available (typing `r` does nothing).

On Wayland, the architecture is unified. GNOME Shell _is_ both the Window Manager **and** the Display Server (the compositor). Because they are fused together into a single process, if GNOME Shell crashes or restarts on Wayland, the entire display server collapses with it. When the server dies, every application connected to it is instantly terminated, dropping you back to the login screen.

### Summary

You are benefiting from X11's older, modular design. Because the window manager is just a client running on the display server, killing it is no different than restarting an app—the server keeps your actual workload alive in the background.

Are you planning on sticking with **X11** for this exact reason, or are you migrating your setup to **Wayland** in the future?

## would it have caused the crash screen if the service were not disabled

<mark><strong><span>No, it would not.</span></strong></mark> Even if you had left the service enabled, typing `Alt + F2` and `r` would still have reloaded your desktop gracefully without triggering the crash screen.

Here is the difference between a **controlled restart** and an **unrecoverable crash**:

### 1. It is a "Feature," Not a Failure

When you use `Alt + F2` -> `r`, you are triggering a built-in, developer-sanctioned command designed explicitly to let developers and users safely reload the UI shell (usually after updating a desktop extension).\
GNOME Shell exits cleanly, hands off its tasks, and immediately spawns a fresh instance of itself. Because it exits with a "success" state and restarts instantly, the system never flags it as a failure.

### 2. What actually triggers the "Window of Doom"?

The `gnome-session-failed.service` only wakes up when GNOME Shell exits with an **error code** (like a segmentation fault) **and fails to restart itself** after a few automatic background attempts.

Systemd monitors the GNOME session. It only pulls the emergency brake and throws up the fullscreen crash overlay if:

- GNOME Shell crashes ungracefully due to a bug or bad driver.
- Systemd tries to revive it.
- GNOME Shell crashes _again_ immediately upon reviving (a crash loop).

### Summary

Method 3 is a clean, intentional hand-off. The crash screen only triggers during a chaotic, unexpected structural collapse that GNOME cannot automatically recover from.

Are you currently experiencing **actual, random crashes** that you are trying to troubleshoot, or are you just **mapping out how Ubuntu handles stability**? If you have been getting the real crash screen lately, I can show you how to check your logs for the specific error causing it.

## how to test a real crash

To test how your system handles a **real, ungraceful crash** without waiting for a random error, you have to intentionally force GNOME Shell to fail in a way that systemd registers as a true system collapse.

Since you have already **masked** the failure service, a real crash should cause your desktop to flash, attempt a silent recovery, and either succeed or drop you directly to the GDM login screen—but it **will not** show the "Oh no! Something has gone wrong" window \[SOLVED Close or Disable Oh no Something has gone wrong screen without log out].

Here are the two best ways to force a real crash. **Save any open work before trying these!**

***

### Method 1: Send a Segmentation Fault Signal (The Best Test)

You can use the `kill` command to send a `SIGSEGV` (Segmentation Fault) or `SIGABRT` (Abort) signal directly to the running GNOME Shell process. This mimics a severe software bug or memory corruption.

1. Open your terminal.

2. Run the following command to abruptly terminate the shell with a fatal error signal:\
   bash

<!---->

```
kill -s SIGSEGV $(pidof gnome-shell)
```

Use code with caution.

- **What to look for:** On X11, your desktop will instantly blink out, systemd will catch the fatal exit code, bypass the masked error screen, and silently relaunch GNOME Shell. Your open apps should survive.

***

### Method 2: Trigger a Crash Loop via a Malicious Extension (The Ultimate Test)

The "Window of Doom" is specifically engineered to catch **crash loops**—situations where GNOME Shell restarts, but immediately crashes again because something inherent to the interface is broken. You can simulate this using a quick terminal loop.

1. Open your terminal.

2. Run this loop command, which continuously kills GNOME Shell the exact millisecond it tries to restart:\
   bash

<!---->

```
for i in {1..5}; do kill -9 $(pidof gnome-shell); sleep 0.2; done
```

Use code with caution.

- **What to look for:** This simulates an unrecoverable, fatal loop. Because you masked `gnome-session-failed.service`, the system cannot display the fallback error overlay \[SOLVED Close or Disable Oh no Something has gone wrong screen without log out]. Instead, you will watch the system hit a wall and drop you cleanly back out to the **Ubuntu User Login screen**.

***

### How to Verify It Worked in the Logs

After you perform one of the tests above and get back to your desktop, you can check your system logs to see systemd actively trying—and failing—to call the crash screen.

Run this command in your terminal:

bash

```
journalctl --user -b 0 | grep -E "gnome-session-failed|gnome-shell"
```

Use code with caution.

You will see logs showing that `gnome-shell` terminated unexpectedly, followed by systemd attempting to start `gnome-session-failed.service`, only to log that the unit is **masked** and cannot be loaded.

Did the system **silently recover** during the single crash test (Method 1), or did it **kick you back to the login screen**? Let me know if you want to inspect the **exact log output** to confirm systemd handled the block correctly!

