import chokidar from 'chokidar';
import { exec } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

// 1. Get the absolute path of this script file, and resolve up to your project root
const filename = fileURLToPath(import.meta.url);
const repo_source_web_script = path.dirname(filename);

// ADJUST THIS: If this script is nested inside a subfolder (like /bin/watch.js), 
// add standard relative steps to reach the real repo root: path.resolve(__dirname, '..')
const repo_source_web = path.resolve(repo_source_web_script, '..'); 

const watch_dir = path.join(repo_source_web, 'design');

// Helper checking logic (remains based on path components)
const is_yaml = (path) => path.endsWith('.yaml') || path.endsWith('.yml');
const is_legacy = (path) => path.split(path.sep).includes('legacy');

// 2. Initialize Chokidar passing the absolute target folder
const watcher = chokidar.watch(watch_dir, {
  persistent: true,
  ignoreInitial: true,
  
  ignored: (filePath, stats) => {
    if (!stats) return false;
    if (stats.isDirectory()) return false;

    // Isolate relative path logic from absolute paths for safety
    const relativePath = path.relative(repo_source_web, filePath);

    if (is_legacy(relativePath)) return true;
    return !is_yaml(relativePath);
  }
});

function run_script(event, path) {
  const relativePath = path.relative(repo_source_web, path);
  console.log(`[Watcher] Change detected: "${relativePath}". Executing foo.sh...`);
  
  // 3. Force the execution environment window to point directly at your repo root
  exec(`b convert`, { cwd: repo_source_web }, (error, stdout, stderr) => {
    if (error) {
      console.error(`b convert failed: ${error.message}`);
      return;
    }
    if (stderr) console.error(`[Stderr]:\n${stderr}`);
    if (stdout) console.log(`[Stdout]:\n${stdout}`);
  });
}

watcher.on('all', (event, filePath) => {
  run_script(event, filePath);
});

watcher.on('ready', () => {
  console.log(`Successfully watching absolute path: ${watch_dir}`);
});
