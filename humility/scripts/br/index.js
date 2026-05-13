#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

function findBunfig(currentDir) {
    const targetPath = path.join(currentDir, 'bunfig.toml');
    
    // Check if bunfig.toml exists in this directory
    if (fs.existsSync(targetPath)) {
        return targetPath;
    }
    
    const parentDir = path.dirname(currentDir);
    
    // Stop if we hit the root filesystem directory
    if (currentDir === parentDir) {
        return null;
    }
    
    return findBunfig(parentDir);
}

function run() {
    const args = process.argv.slice(2);
    const bunfigPath = findBunfig(process.cwd());
    
    let finalArgs = [...args];
    
    // If a configuration file is discovered upstream, inject the flag first
    if (bunfigPath) {
        finalArgs = [`--config=${bunfigPath}`, ...args];
    }

    // Spawn bun process and pipe standard input/output directly to user terminal
    const child = spawn('bun', finalArgs, { stdio: 'inherit', shell: true });

    child.on('exit', (code) => {
        process.exit(code ?? 0);
    });
}

run();
