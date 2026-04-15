#!/usr/bin/env node

/**
 * Auto-restarting dev server wrapper for Priceless CPA
 * Monitors for Next.js build errors and automatically restarts
 */

const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

const MAX_RETRIES = 3;
const RESTART_DELAY = 3000;
const PORT = 3001; // Priceless CPA runs on 3001 to avoid conflicts
const ERROR_PATTERNS = [
  /ENOENT.*build-manifest\.json/,
  /ENOENT.*_buildManifest\.js/,
  /ENOENT.*buildManifest\.js\.tmp/,
  /ENOENT.*app-paths-manifest\.json/,
  /ENOENT.*\.next\/server/,
  /ENOENT.*\.next\/static/,
];

let currentProcess = null;
let consecutiveErrors = 0;
let isRestarting = false;

function cleanNextCache() {
  const nextDir = path.join(__dirname, '..', '.next');
  console.log('\n🧹 Cleaning .next cache...');

  try {
    if (fs.existsSync(nextDir)) {
      fs.rmSync(nextDir, { recursive: true, force: true });
      console.log('✅ Cache cleaned successfully\n');
    }
  } catch (error) {
    console.log('⚠️  Could not clean cache:', error.message);
  }
}

function killPort() {
  console.log(`🔍 Checking for processes on port ${PORT}...`);
  try {
    const { execSync } = require('child_process');

    const pids = execSync(`lsof -ti:${PORT} 2>/dev/null || true`, { encoding: 'utf8' })
      .trim()
      .split('\n')
      .filter(pid => pid);

    if (pids.length === 0) return;

    let killedCount = 0;
    for (const pid of pids) {
      try {
        execSync(`kill -9 ${pid} 2>/dev/null || true`, { stdio: 'ignore' });
        killedCount++;
      } catch (e) {
        // Already dead
      }
    }

    if (killedCount > 0) {
      console.log(`✅ Freed port ${PORT} (killed ${killedCount} process${killedCount === 1 ? '' : 'es'})\n`);
    }
  } catch (error) {
    // Port was already free
  }
}

function killCurrentProcess() {
  if (currentProcess) {
    console.log('\n🛑 Stopping dev server...');
    try {
      process.kill(-currentProcess.pid, 'SIGTERM');
    } catch (error) {
      try {
        currentProcess.kill('SIGTERM');
      } catch (e) {
        // Already dead
      }
    }
    currentProcess = null;
  }
  killPort();
}

function startDevServer() {
  if (isRestarting) return;

  killPort();

  console.log(`🚀 Starting Priceless CPA dev server on port ${PORT}...\n`);

  currentProcess = spawn('npx', ['next', 'dev', '--port', String(PORT)], {
    stdio: 'pipe',
    shell: true,
    env: { ...process.env },
    detached: true,
    cwd: path.join(__dirname, '..'),
  });

  let errorBuffer = '';

  currentProcess.stdout.on('data', (data) => {
    const output = data.toString();
    process.stdout.write(output);

    if (output.includes('Compiled') || output.includes('Ready in')) {
      consecutiveErrors = 0;
    }
  });

  currentProcess.stderr.on('data', (data) => {
    const error = data.toString();
    errorBuffer += error;
    process.stderr.write(error);

    const hasManifestError = ERROR_PATTERNS.some(pattern => pattern.test(errorBuffer));

    if (hasManifestError && !isRestarting) {
      consecutiveErrors++;

      if (consecutiveErrors <= MAX_RETRIES) {
        console.log(`\n❌ Detected build error (attempt ${consecutiveErrors}/${MAX_RETRIES})`);
        console.log('🔄 Auto-restarting in 2 seconds...\n');

        isRestarting = true;
        killCurrentProcess();

        setTimeout(() => {
          cleanNextCache();
          killPort();
          setTimeout(() => {
            errorBuffer = '';
            isRestarting = false;
            startDevServer();
          }, 1000);
        }, RESTART_DELAY);
      } else {
        console.log(`\n❌ Max retries (${MAX_RETRIES}) reached.`);
        console.log('💡 Try manually running: rm -rf .next && npm run dev\n');
        process.exit(1);
      }
    }
  });

  currentProcess.on('close', (code) => {
    if (!isRestarting && code !== 0 && code !== null) {
      console.log(`\n⚠️  Dev server exited with code ${code}`);

      if (consecutiveErrors < MAX_RETRIES) {
        console.log('🔄 Restarting...\n');
        setTimeout(() => {
          startDevServer();
        }, RESTART_DELAY);
      }
    }
  });

  currentProcess.on('error', (error) => {
    console.error('❌ Failed to start dev server:', error.message);
    process.exit(1);
  });
}

// Graceful shutdown
process.on('SIGINT', () => {
  console.log('\n\n👋 Shutting down Priceless CPA...');
  killCurrentProcess();
  setTimeout(() => process.exit(0), 500);
});

process.on('SIGTERM', () => {
  console.log('\n\n👋 Shutting down Priceless CPA...');
  killCurrentProcess();
  setTimeout(() => process.exit(0), 500);
});

process.on('exit', () => {
  if (currentProcess) {
    try {
      process.kill(-currentProcess.pid, 'SIGKILL');
    } catch (error) {
      // Already dead
    }
  }
});

// Start
console.log('🎯 Priceless CPA - Auto-restart dev server');
console.log(`   Port: ${PORT}`);
console.log('   Watching for Next.js build errors...\n');
startDevServer();
