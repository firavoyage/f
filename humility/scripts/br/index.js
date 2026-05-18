#!/usr/bin/env node
const fs = require("fs");
const path = require("path");
const { spawn } = require("child_process");

function findBunfig(currentDir) {
  const targetPath = path.join(currentDir, "bunfig.toml");

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
  const isWindows = process.platform === "win32";

  const child = spawn("bun", finalArgs, {
    // Pipe stdout to parent, pipe stderr to filter it, inherit stdin
    stdio: ["inherit", "inherit", "pipe"],
    shell: isWindows,
  });

  // Listen to the stderr stream
  child.stderr.on("data", (data) => {
    const lines = data.toString().split("\n");

    const filteredLines = lines.filter((line) => {
      // Returns false if the line contains the Bun version pattern
      return !/Bun v\d+\.\d+\.\d+/.test(line);
    });

    // Print the remaining stderr output to the terminal
    if (filteredLines.length > 0) {
      process.stderr.write(filteredLines.join("\n"));
    }
  });

  child.on("exit", (code) => {
    process.exit(code ?? 0);
  });
}

run();
