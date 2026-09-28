import chokidar from 'chokidar';
import { exec } from 'child_process';
import { dirname, resolve, join, relative } from 'path';
import { fileURLToPath } from 'url';

// 1. Get the absolute path of this script file, and resolve up to your project root
const filename = fileURLToPath(import.meta.url);
const repo_source_web_script = dirname(filename);

// ADJUST THIS: If this script is nested inside a subfolder (like /bin/watch.js), 
// add standard relative steps to reach the real repo root: path.resolve(__dirname, '..')
const repo_source_web = resolve(repo_source_web_script, '..');
const script = `b convert`

const watch_dir = join(repo_source_web, 'design');

// Helper checking logic (remains based on path components)
const is_yaml = (path) => path.endsWith('.yaml') || path.endsWith('.yml');
const is_legacy = (path) => path.split(path.sep).includes('legacy');

// 2. Initialize Chokidar passing the absolute target folder
const watcher = chokidar.watch(watch_dir, {
  persistent: true,
  ignoreInitial: true,

  ignored: (path, stats) => {
    if (!stats) return false;
    if (stats.isDirectory()) return false;

    // Isolate relative path logic from absolute paths for safety
    const relativePath = relative(repo_source_web, path);

    if (is_legacy(relativePath)) return true;
    return !is_yaml(relativePath);
  }
});

function run_script(event, path) {
  const relative_path = relative(repo_source_web, path);
  console.log(`[Watcher] Change detected: "${relative_path}". Executing script...`);

  // 3. Force the execution environment window to point directly at your repo root
  exec(script, { cwd: repo_source_web }, (error, stdout, stderr) => {
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
