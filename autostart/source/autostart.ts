import chokidar from 'chokidar';
import { dirname, resolve, join, relative } from 'path';
import { fileURLToPath } from 'url';

import { parse } from 'yaml'

import { read } from 'lib/file'
import { run } from 'lib/run'

// standardize path from repo root
const filename = fileURLToPath(import.meta.url);
const script_dir = dirname(filename);
const repo = resolve(script_dir, '..');

const watch_dir = join(repo);

const watcher = chokidar.watch(watch_dir, {
  persistent: true,
  ignoreInitial: true,

  ignored: (path, stats) => {
    if (!stats) return false;
    if (stats.isDirectory()) return false;

    const relative_path = relative(repo, path);
    return relative_path != 'config.yaml';
  }
});

async function run_script(event, path) {
  const relative_path = relative(repo, path);
  console.log(`[Watcher] Change detected: "${relative_path}". Executing script...`);

  const scripts = await read(resolve(repo, 'config.yaml'))
  log(parse(scripts))

  // // 3. Force the execution environment window to point directly at your repo root
  // exec(script, { cwd: repo }, (error, stdout, stderr) => {
  //   if (error) {
  //     console.error(`${script} failed: ${error.message}`);
  //     return;
  //   }
  //   if (stderr) console.error(`[Stderr]:\n${stderr}`);
  //   if (stdout) console.log(`[Stdout]:\n${stdout}`);
  // });
}

watcher.on('all', (event, path) => {
  run_script(event, path);
});

watcher.on('ready', () => {
  console.log(`Watching ${watch_dir}`);
});
