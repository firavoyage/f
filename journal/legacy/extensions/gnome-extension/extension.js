// extension.js — GNOME 45+ ESModule style, minimal and safe
import GLib from "gi://GLib";
import { Extension } from "resource:///org/gnome/shell/extensions/extension.js";

export default class JournalExtension extends Extension {
  // MUST accept metadata and pass it to super()
  constructor(metadata) {
    super(metadata); // <- critical: forward metadata to parent
    this._timeoutId = 0;
    this._pollSeconds = 5; // conservative default
    this._outPath = GLib.build_filenamev([
      GLib.get_user_cache_dir(),
      "journal-windows.json",
    ]);
  }

  _buildSnapshot() {
    try {
      let actors = global.get_window_actors();
      let windows = [];

      for (let i = 0; i < actors.length; i++) {
        let actor = actors[i];
        let w = actor.meta_window;
        if (!w) continue;

        let wmclass = "";
        try {
          wmclass = w.get_wm_class() || "";
        } catch (e) {
          wmclass = "";
        }

        let title = "";
        try {
          title = w.get_title() || "";
        } catch (e) {
          title = "";
        }

        let hasFocus = false;
        try {
          hasFocus = w.has_focus ? !!w.has_focus() : false;
        } catch (e) {
          hasFocus = false;
        }

        windows.push({ class: wmclass, title: title, has_focus: hasFocus });
      }

      let focused = null;
      for (let i = 0; i < windows.length; i++) {
        if (windows[i].has_focus) {
          focused = windows[i];
          break;
        }
      }

      return JSON.stringify({
        time: new Date().toISOString(),
        windows: windows,
        focused: focused,
      });
    } catch (err) {
      try {
        return JSON.stringify({
          time: new Date().toISOString(),
          error: String(err),
        });
      } catch (_) {
        return '{"time":"' + new Date().toISOString() + '","error":"unknown"}';
      }
    }
  }

  enable() {
    if (this._timeoutId !== 0) return;

    const tick = () => {
      const content = this._buildSnapshot();
      try {
        GLib.file_set_contents(this._outPath, content);
      } catch (e) {
        // conservative: don't throw — log for debugging
        log("journal@journal.fira: write error: " + e);
      }
      return true; // keep the timeout source
    };

    // schedule and run immediately
    this._timeoutId = GLib.timeout_add_seconds(
      GLib.PRIORITY_DEFAULT,
      this._pollSeconds,
      tick
    );
    tick();
    log("journal@journal.fira: enabled, writing to " + this._outPath);
  }

  disable() {
    if (this._timeoutId !== 0) {
      try {
        GLib.source_remove(this._timeoutId);
      } catch (e) {
        log("journal@journal.fira: remove error: " + e);
      }
      this._timeoutId = 0;
    }
    log("journal@journal.fira: disabled");
  }
}
