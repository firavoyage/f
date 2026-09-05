import chokidar from 'chokidar';
import { dirname, relative } from 'path';
import { fileURLToPath } from 'url';

import { parse } from 'yaml'

import { path, read } from 'lib/file'
import { spawn } from 'child_process'

// standardize path from repo root
const filename = fileURLToPath(import.meta.url);
const script_dir = dirname(filename);
const repo = path(script_dir, '..');

const watch_dir = path(repo);

const watcher = chokidar.watch(watch_dir, {
  persistent: true,
  ignoreInitial: true,

  ignored: (file, stats) => {
    if (!stats) return false;
    if (stats.isDirectory()) return false;

    const relative_path = relative(repo, file);
    return relative_path != 'config.yaml';
  }
});

const existing_daemons: Set<ReturnType<typeof spawn>> = new Set()

async function run_script(event, file) {
  const relative_path = relative(repo, file);
  console.log(`[Watcher] Change detected: "${relative_path}". Executing script...`);

  for (const daemon of existing_daemons) {
    daemon.kill()
  }

  // @ts-expect-error 
  const scripts = parse(await read(path(repo, 'config.yaml')))

  for (const script of scripts) {
    const daemon = spawn(script, [], { shell: 'zsh' })

    daemon.stdout.setEncoding('utf8');
    daemon.stderr.setEncoding('utf8');

    daemon.stdout.on('data', (chunk) => {
      log(`[stdout] ${chunk}`)
    });

    daemon.stderr.on('data', (chunk) => {
      log(`[stderr] ${chunk}`)
    });

    existing_daemons.add(daemon)
  }
}

watcher.on('all', (event, file) => {
  run_script(event, file);
});

watcher.on('ready', () => {
  console.log(`Watching ${watch_dir}`);
});
