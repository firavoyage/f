import chokidar from 'chokidar';
import { exec } from 'child_process';
import { dirname, resolve, join, relative } from 'path';
import { fileURLToPath } from 'url';

// standardize path from repo root
const filename = fileURLToPath(import.meta.url);
const script_dir = dirname(filename);
const repo = resolve(script_dir);

const watch_dir = join(repo);

// Helper checking logic (remains based on path components)
const is_yaml = (path) => path 'config.yaml')

const watcher = chokidar.watch(watch_dir, {
  persistent: true,
  ignoreInitial: true,

  ignored: (path, stats) => {
    console.log(path)

    if (!stats) return false;
    if (stats.isDirectory()) return false;

    // Isolate relative path logic from absolute paths for safety
    const relativePath = relative(repo, path);

    return !is_yaml(relativePath);
  }
});

function run_script(event, path) {
  const relative_path = relative(repo, path);
  console.log(`[Watcher] Change detected: "${relative_path}". Executing script...`);

  // 3. Force the execution environment window to point directly at your repo root
  exec(script, { cwd: repo }, (error, stdout, stderr) => {
    if (error) {
      console.error(`${script} failed: ${error.message}`);
      return;
    }
    if (stderr) console.error(`[Stderr]:\n${stderr}`);
    if (stdout) console.log(`[Stdout]:\n${stdout}`);
  });
}

watcher.on('all', (event, path) => {
  run_script(event, path);
});

watcher.on('ready', () => {
  console.log(`Watching ${watch_dir}`);
});
