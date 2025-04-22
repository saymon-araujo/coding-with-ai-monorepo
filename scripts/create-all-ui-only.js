#!/usr/bin/env node

const { execSync } = require('child_process');
const path = require('path');
const readline = require('readline');

const monorepoRoot = process.cwd(); // Script is run from the root
const webAppDir = path.join(monorepoRoot, 'apps', 'web');
const mobileAppDir = path.join(monorepoRoot, 'apps', 'mobile');
const webScript = path.join(webAppDir, 'scripts', 'create-ui-only.js');
const mobileScript = path.join(mobileAppDir, 'scripts', 'create-ui-only.js');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function executeScript(scriptPath, cwd) {
  console.log(`\nExecuting script in ${cwd}...`);
  try {
    // Execute the node script directly
    execSync(`node "${scriptPath}"`, { cwd: cwd, stdio: 'inherit' });
    console.log(`Script executed successfully in ${cwd}.`);
  } catch (error) {
    console.error(`Error executing script in ${cwd}:`, error.message);
    // Optional: exit if one script fails, or continue
    // process.exit(1); 
  }
}

console.log('Select which UI-only version to create:');
console.log('1. Web');
console.log('2. Mobile');
console.log('3. Both');

rl.question('Enter your choice (1, 2, or 3): ', (choice) => {
  choice = choice.trim();
  
  switch (choice) {
    case '1':
      console.log('Generating Web UI-only version...');
      executeScript(webScript, webAppDir);
      break;
    case '2':
      console.log('Generating Mobile UI-only version...');
      executeScript(mobileScript, mobileAppDir);
      break;
    case '3':
      console.log('Generating Both Web and Mobile UI-only versions...');
      executeScript(webScript, webAppDir);
      executeScript(mobileScript, mobileAppDir);
      break;
    default:
      console.log('Invalid choice. Please enter 1, 2, or 3.');
  }
  
  rl.close();
});

rl.on('close', () => {
  console.log('\nUI-only generation process finished.');
  process.exit(0);
}); 