import { exec } from 'child_process';
import { promisify } from 'util';
import { mkdirSync, appendFileSync } from 'fs';
import { dirname } from 'path';
import config from './config.json';

type config_type = {
  log_interval: number;
  data_directory: string;
  screenshot_interval: number;
  screenshot_directory: string;
  screenshots_enabled: boolean;
};

const exec_async = promisify(exec);

function expand_home({ path }: { path: string }): string {
  const home = process.env.HOME || '';
  return path.replace('$HOME', home);
}

function ensure_directory({ file_path }: { file_path: string }): void {
  const dir = dirname(file_path);
  mkdirSync(dir, { recursive: true });
}

async function run_command({
  command,
}: {
  command: string;
}): Promise<string> {
  try {
    const { stdout } = await exec_async(command, { timeout: 1000 });
    return stdout.trim();
  } catch {
    return '';
  }
}

async function get_active_window(): Promise<{
  app: string;
  title: string;
}> {
  const wid = await run_command({
    command: 'xdotool getwindowfocus',
  });

  if (wid === '') {
    return { app: '', title: '' };
  }

  const title = await run_command({
    command: `xdotool getwindowname "${wid}"`,
  });

  const app = await run_command({
    command: `xprop -id "${wid}" WM_CLASS | awk -F'"' '{print $2}'`,
  });

  return { app, title };
}

function pad({ value }: { value: number }): string {
  return value < 10 ? `0${value}` : `${value}`;
}

function format_timestamp(): string {
  const d = new Date();

  const year = d.getFullYear();
  const month = pad({ value: d.getMonth() + 1 });
  const day = pad({ value: d.getDate() });

  const hours = pad({ value: d.getHours() });
  const minutes = pad({ value: d.getMinutes() });
  const seconds = pad({ value: d.getSeconds() });

  const offset_minutes_total = -d.getTimezoneOffset();
  const offset_sign = offset_minutes_total >= 0 ? '+' : '-';
  const offset_abs = Math.abs(offset_minutes_total);
  const offset_hours = pad({ value: Math.floor(offset_abs / 60) });
  const offset_minutes = pad({ value: offset_abs % 60 });

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}${offset_sign}${offset_hours}:${offset_minutes}`;
}

function write_log({
  file_path,
  line,
}: {
  file_path: string;
  line: string;
}): void {
  try {
    appendFileSync(file_path, line + '\n');
  } catch {
    return;
  }
}

async function log_tick({
  cfg,
}: {
  cfg: config_type;
}): Promise<void> {
  const { app, title } = await get_active_window();

  if (app === '' || title === '') {
    return;
  }

  const timestamp = format_timestamp();
  const line = `${timestamp} ${app} ${title}`;

  write_log({
    file_path: expand_home({ path: cfg.data_directory }),
    line,
  });
}

async function screenshot_tick({
  cfg,
}: {
  cfg: config_type;
}): Promise<void> {
  if (!cfg.screenshots_enabled) {
    return;
  }

  const path = expand_home({ path: cfg.screenshot_directory });

  ensure_directory({ file_path: path });

  await run_command({
    command: `scrot "${path}"`,
  });
}

function start_loop({ cfg }: { cfg: config_type }): void {
  const log_path = expand_home({ path: cfg.data_directory });
  ensure_directory({ file_path: log_path });

  const screenshot_path = expand_home({
    path: cfg.screenshot_directory,
  });
  ensure_directory({ file_path: screenshot_path });

  setInterval(() => {
    log_tick({ cfg });
  }, cfg.log_interval * 1000);

  setInterval(() => {
    screenshot_tick({ cfg });
  }, cfg.screenshot_interval * 1000);
}

function main(): void {
  const cfg = config as config_type;
  start_loop({ cfg });
}

main();