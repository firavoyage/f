import xdg from '@folder/xdg';
import fs from 'node:fs';
import path from 'node:path';

// 1. Initialize XDG paths for your specific app
// The 'subdir' option automatically handles the subfolder naming for you
const dirs = xdg({ subdir: 'my-awesome-app' });

console.log('--- Platform Specific Paths ---');
console.log('Config:', dirs.config);
console.log('Data:  ', dirs.data);
console.log('Cache: ', dirs.cache);

/**
 * Proof of Concept: Save a user setting
 */
function saveConfig(settings) {
  try {
    // 2. Ensure the directory exists (recursive: true is key)
    if (!fs.existsSync(dirs.config)) {
      fs.mkdirSync(dirs.config, { recursive: true });
    }

    // 3. Write the file
    const filePath = path.join(dirs.config, 'config.json');
    fs.writeFileSync(filePath, JSON.stringify(settings, null, 2));
    
    console.log(`\nSuccess: Config saved to ${filePath}`);
  } catch (err) {
    console.error('Failed to save config:', err);
  }
}

// Run the PoC
saveConfig({ 
  theme: 'nord', 
  lastLogin: new Date().toISOString() 
});
