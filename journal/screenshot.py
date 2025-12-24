# screenshot.py
from __future__ import annotations

import shutil
import subprocess
import time
from datetime import datetime
from pathlib import Path
from typing import Optional
import re
import os
import select

def _screenshot_path(base: Path, when: datetime) -> Path:
    y = f"{when.year:04d}"
    m = f"{when.month:02d}"
    d = f"{when.day:02d}"
    hhmmss = when.strftime("%H-%M-%S")
    target_dir = base / y / m / d
    target_dir.mkdir(parents=True, exist_ok=True)
    return target_dir / f"{hhmmss}.png"

class Screenshotter:
    def __init__(
        self,
        screenshot_base: Path,
        *,
        portal_timeout: float = 12.0,
        monitor_cmd_timeout: float = 12.0,
        logger = None,
    ) -> None:
        self.screenshot_base = Path(screenshot_base)
        self.portal_timeout = float(portal_timeout)
        self.monitor_cmd_timeout = float(monitor_cmd_timeout)
        self.logger = logger

    def _log(self, *parts):
        if self.logger:
            try:
                self.logger.log(" ".join(str(p) for p in parts))
            except Exception:
                pass

    def _run_cmd(self, argv: list[str], capture: bool = True, timeout: Optional[float] = None) -> tuple[int, str, str]:
        try:
            proc = subprocess.run(argv, stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True, timeout=timeout)
            return proc.returncode, proc.stdout or "", proc.stderr or ""
        except subprocess.TimeoutExpired:
            return 124, "", f"timeout after {timeout}s"
        except FileNotFoundError:
            return 127, "", f"command not found: {argv[0]}"
        except Exception as e:
            return 1, "", f"failed to run {argv}: {e}"

    def _call_portal(self) -> Optional[str]:
        argv = [
            "gdbus", "call", "--session",
            "--dest", "org.freedesktop.portal.Desktop",
            "--object-path", "/org/freedesktop/portal/desktop",
            "--method", "org.freedesktop.portal.Screenshot.Screenshot",
            "",  # parent_window
            "{}"  # empty options dictionary
        ]
        rc, out, err = self._run_cmd(argv, timeout=self.portal_timeout)
        if rc != 0:
            self._log("portal call failed", rc, err.strip())
            return None

        # parse objectpath from gdbus output
        m = re.search(r"objectpath\s+'([^']+)'", out)
        if not m:
            m2 = re.search(r"\'(/org/freedesktop/portal/desktop/request/[^\']+)\'", out)
            if m2:
                return m2.group(1)
            self._log("could not parse portal handle from gdbus output:", out.strip())
            return None
        return m.group(1)

    def _wait_for_response_uri(self, handle: str, timeout: float) -> Optional[str]:
        """
        Use dbus-monitor and select() to avoid blocking readline forever.
        Returns first file:// URI found in the message payload for the given handle.
        """
        argv = ["dbus-monitor", "--session", "type='signal',interface='org.freedesktop.portal.Request',member='Response'"]
        try:
            proc = subprocess.Popen(argv, stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True, bufsize=1)
        except FileNotFoundError:
            self._log("dbus-monitor not found; cannot wait for portal response.")
            return None

        start = time.time()
        uri = None
        try:
            fd = proc.stdout.fileno()
            while True:
                remaining = timeout - (time.time() - start)
                if remaining <= 0:
                    break
                r, _, _ = select.select([fd], [], [], remaining)
                if not r:
                    # timeout slice expired, loop to check overall timeout
                    continue
                # safe readline now (there's data)
                line = proc.stdout.readline()
                if not line:
                    # process ended or no data
                    if proc.poll() is not None:
                        break
                    continue

                # check if this line mentions our handle and the Response signal
                if handle in line and "org.freedesktop.portal.Request.Response" in line:
                    # read a block of subsequent lines that contain payload
                    payload = ""
                    for _ in range(80):
                        pl = proc.stdout.readline()
                        if not pl:
                            break
                        payload += pl
                        muri = re.search(r'file://[^\s"\)]+', pl)
                        if muri:
                            uri = muri.group(0)
                            break
                        muri2 = re.search(r'string\s+"(file://[^"]+)"', pl)
                        if muri2:
                            uri = muri2.group(1)
                            break
                    if uri:
                        break

                # also tolerate a file:// anywhere
                muri = re.search(r'file://[^\s"\)]+', line)
                if muri:
                    uri = muri.group(0)
                    break

                # continue until overall timeout
        finally:
            try:
                proc.kill()
            except Exception:
                pass

        return uri

    def _copy_uri_to_target(self, uri: str, target: Path) -> Optional[Path]:
        if not uri.startswith("file://"):
            self._log("portal returned non-file URI:", uri)
            return None
        src = Path(uri[len("file://"):])
        if not src.exists():
            self._log("portal-file-not-found:", src)
            return None
        try:
            shutil.move(str(src), str(target))
            return target
        except Exception as e:
            self._log("failed to move portal file:", e)
            try:
                shutil.copy(str(src), str(target))
                return target
            except Exception as e2:
                self._log("failed to copy portal file:", e2)
                return None

    def _fallback_cli(self, target: Path) -> Optional[Path]:
        rc, out, err = self._run_cmd(["gnome-screenshot", "--file", str(target)], timeout=6.0)
        if rc == 0 and target.exists():
            return target
        rc, out, err = self._run_cmd(["scrot", str(target)], timeout=6.0)
        if rc == 0 and target.exists():
            return target
        self._log("fallback CLI screenshot failed:", err.strip())
        return None

    def capture(self, *, when: Optional[datetime] = None) -> Optional[Path]:
        when = when or datetime.now()
        target = _screenshot_path(self.screenshot_base, when)

        handle = self._call_portal()
        if handle:
            self._log("portal handle", handle)
            uri = self._wait_for_response_uri(handle, timeout=self.monitor_cmd_timeout)
            if uri:
                p = self._copy_uri_to_target(uri, target)
                if p:
                    self._log("portal screenshot saved", p)
                    return p
            else:
                self._log("no response uri for handle (timeout?)", handle)

        # fallback
        self._log("trying fallback CLI screenshot", target)
        p2 = self._fallback_cli(target)
        if p2:
            self._log("fallback screenshot saved", p2)
            return p2

        self._log("screenshot: all methods failed")
        return None
