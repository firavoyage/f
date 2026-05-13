#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

function findBunfig(currentDir) {
    const targetPath = path.join(currentDir, 'bunfig.toml');
    
    if (fs.existsSync(targetPath)) {
        return targetPath;
    }
    
    const parentDir = path.dirname(currentDir);
    
    if (currentDir === parentDir) {
        return null;
    }
    
    return findBunfig(parentDir);
}

function run() {
    const args = process.argv.slice(2);
    const bunfigPath = findBunfig(process.cwd());
    
    let finalArgs = [...args];
    
    if (bunfigPath) {
        finalArgs = [`--config=${bunfigPath}`, ...args];
    }

    // Windows requires shell: true for .cmd/.ps1 scripts, macOS/Linux do not
    const isWindows = process.platform === 'win32';

    const child = spawn('bun', finalArgs, { 
        stdio: 'inherit', 
        shell: isWindows 
    });

    child.on('exit', (code) => {
        process.exit(code ?? 0);
    });
}

run();