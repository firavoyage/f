import fs from "fs";
import path from "path";
import os from "os";

const BASE_DIR = path.join(os.homedir(), ".local", "share", "humility", "browser");

const DEFAULT_DIR = path.join(BASE_DIR, "default");
const PROFILES_DIR = path.join(BASE_DIR, "profiles");

fs.mkdirSync(DEFAULT_DIR, { recursive: true });
fs.mkdirSync(PROFILES_DIR, { recursive: true });

function profile_path(name) {
  return name === "default" ? DEFAULT_DIR : path.join(PROFILES_DIR, name);
}

/**
 * Shared browser launch options for all profiles.
 * Moves window off-screen while keeping headless false.
 */
function browser_options(extra = {}) {
  return {
    headless: false,
    args: [
      // "--headless=new",
      // "--window-position=-10000,-10000", // hide window off-screen
      // "--window-size=1280,800",
    ],
    ...extra,
  };
}

/**
 * Launch like a normal browser.
 * Loads default profile unless changed.
 */
export async function launch(chromium, options = {}) {
  const dir = profile_path("default");

  return await chromium.launchPersistentContext(dir, browser_options(options));
}

/**
 * Save current browser state as a named profile.
 * Uses a full directory copy for safety.
 */
export async function save(context, name) {
  if (!name || name === "default") {
    throw new Error("cannot overwrite default profile");
  }

  const target = profile_path(name);
  fs.rmSync(target, { recursive: true, force: true });
  fs.mkdirSync(target, { recursive: true });

  fs.cpSync(context._options.userDataDir, target, { recursive: true });
}

/**
 * List all available profiles.
 */
export function see() {
  const profiles = fs.existsSync(PROFILES_DIR)
    ? fs.readdirSync(PROFILES_DIR)
    : [];

  return ["default", ...profiles];
}

/**
 * Switch to another profile.
 * Closes the old context and launches a new one.
 */
export async function change(chromium, name, options = {}) {
  const dir = profile_path(name);
  fs.mkdirSync(dir, { recursive: true });

  return await chromium.launchPersistentContext(dir, browser_options(options));
}