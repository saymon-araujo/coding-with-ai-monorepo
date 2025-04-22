#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Configuration
const sourceDir = process.cwd(); // Current directory is source (e.g., apps/web)
const monorepoRoot = path.resolve(sourceDir, '..', '..'); // Go up two levels to the monorepo root
const intermediateDirName = 'ui-only';
const targetDirName = 'rosebud-ui-only';
const targetDir = path.join(monorepoRoot, intermediateDirName, targetDirName);

// UI-relevant directories to copy  
const directoriesToCopy = [
  'app',
  'components',
  'context',
  'hooks',
  'lib',
  'schema',
  'public',
  'sample'
];

// Configuration files to copy
const filesToCopy = [
  'package.json',
  'tsconfig.json',
  'components.json',
  'next.config.js',
  'next.config.mjs',
  'next.config.ts',
  'postcss.config.js',
  'postcss.config.mjs',
  'next-env.d.ts',
  'eslint.config.js',
  'eslint.config.mjs',
  'tailwind.config.js',
  'tailwind.config.ts',
  'tsconfig.json',
  '.eslintrc.json',
  'utils.ts'
];

// Directories to exclude (will be ignored during copying)
const excludeDirs = [
  '.git',
  '.next',
  'node_modules'
];

// Clean and create target directory
function setupTargetDirectory() {
  console.log(`Setting up target directory: ${targetDir}`);
  
  if (fs.existsSync(targetDir)) {
    console.log('Target directory exists. Removing...');
    execSync(`rm -rf "${targetDir}"`);
  }
  
  console.log('Creating fresh target directory...');
  fs.mkdirSync(targetDir, { recursive: true });
}

// Copy directory with exclusions
function copyDirectoryWithExclusions(source, target) {
  if (!fs.existsSync(target)) {
    fs.mkdirSync(target, { recursive: true });
  }

  const entries = fs.readdirSync(source, { withFileTypes: true });

  for (const entry of entries) {
    const sourcePath = path.join(source, entry.name);
    const targetPath = path.join(target, entry.name);
    
    // Skip excluded directories
    if (entry.isDirectory() && excludeDirs.includes(entry.name)) {
      continue;
    }
    
    if (entry.isDirectory()) {
      copyDirectoryWithExclusions(sourcePath, targetPath);
    } else {
      fs.copyFileSync(sourcePath, targetPath);
    }
  }
}

// Copy individual files
function copyFiles() {
  console.log('Copying individual files...');
  
  for (const file of filesToCopy) {
    const sourcePath = path.join(sourceDir, file);
    const targetPath = path.join(targetDir, file);
    
    if (fs.existsSync(sourcePath)) {
      fs.copyFileSync(sourcePath, targetPath);
      console.log(`Copied: ${file}`);
    } else {
      console.log(`Warning: ${file} not found in source directory.`);
    }
  }
}

// Create README
function createReadme() {
  console.log('Creating README...');
  
  const readmeContent = `# Ben+ Admin UI

This repository contains only the UI-related files for the Ben+ Admin application. It has been optimized for v0 submission by removing build artifacts, git history, and other non-UI elements.

## Structure
- \`app/\` - Pages and routes
- \`components/\` - UI components
- \`context/\` - React context providers for UI state management
- \`hooks/\` - Custom React hooks for UI functionality
- \`lib/\` - Utility functions and helpers
- \`schema/\` - Data models and schemas for UI elements
- \`public/\` - Static assets and resources

## Key UI Features
The main UI features can be found in:
- \`app/users/\` - User pages and user interface flows
- \`components/routes/users/\` - User UI components
- \`context/\` - UI state management (search context, user context, etc.)
- \`components/ui/\` - Shared UI components
- \`schema/user/\` - User data models and form schemas

## UI Context
The application uses React Context API for UI state management:
- User interface state
- Search and filtering
- UI preferences and settings
`;

  fs.writeFileSync(path.join(targetDir, 'README.md'), readmeContent);
}

// Validate UI dependencies in package.json
function validateUIDependencies() {
  console.log('Validating UI dependencies...');
  
  const packageJsonPath = path.join(sourceDir, 'package.json');
  if (!fs.existsSync(packageJsonPath)) {
    console.log('Warning: package.json not found.');
    return;
  }
  
  try {
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
    
    // Essential UI dependencies to check for
    const essentialUIDeps = [
      'react', 
      'react-dom', 
      'next', 
      '@radix-ui',
      'tailwindcss',
      'class-variance-authority',
      'clsx',
      'tailwind-merge'
    ];
    
    const dependencies = { 
      ...packageJson.dependencies || {}, 
      ...packageJson.devDependencies || {}
    };
    
    const missingDeps = essentialUIDeps.filter(dep => 
      !Object.keys(dependencies).some(key => key === dep || key.startsWith(`${dep}/`))
    );
    
    if (missingDeps.length > 0) {
      console.log(`Warning: Some essential UI dependencies may be missing: ${missingDeps.join(', ')}`);
    } else {
      console.log('All essential UI dependencies found.');
    }
  } catch (error) {
    console.error('Error validating package.json:', error.message);
  }
}

// Create minimal .env file for UI
function createEnvFile() {
  console.log('Creating minimal .env file...');
  
  const envContent = `# UI Environment Variables
NEXT_PUBLIC_APP_NAME="Ben+ Admin"
NEXT_PUBLIC_APP_VERSION="1.0.0"
NEXT_PUBLIC_API_MOCKING=true
`;

  fs.writeFileSync(path.join(targetDir, '.env.local'), envContent);
  console.log('Created .env.local with minimal UI environment variables');
}

// Main execution
function main() {
  console.log('Starting UI-only version creation...');
  
  // Validate UI dependencies
  validateUIDependencies();
  
  // Setup target directory
  setupTargetDirectory();
  
  // Copy directories
  console.log('Copying directories...');
  for (const dir of directoriesToCopy) {
    const sourceSubDir = path.join(sourceDir, dir);
    const targetSubDir = path.join(targetDir, dir);
    
    if (fs.existsSync(sourceSubDir)) {
      console.log(`Copying directory: ${dir}`);
      copyDirectoryWithExclusions(sourceSubDir, targetSubDir);
    } else {
      console.log(`Warning: Directory ${dir} not found in source.`);
    }
  }
  
  // Copy files
  copyFiles();
  
  // Create README
  createReadme();
  
  // Create env file
  createEnvFile();
  
  // Print summary
  const fileCount = parseInt(execSync(`find "${targetDir}" -type f | wc -l`).toString().trim());
  const dirSize = execSync(`du -sh "${targetDir}"`).toString().trim();
  
  console.log('\nSummary:');
  console.log(`Files: ${fileCount}`);
  console.log(`Size: ${dirSize}`);
  console.log(`Location: ${targetDir}`);
  console.log('\nUI-only version created successfully!');
}

main(); 