const { execSync } = require('child_process');
const fs = require('fs-extra');
const path = require('path');

const exportDir = 'wordpress-export';
const outDir = 'out';

console.log('Starting export process...');

// Run the Next.js export command
try {
  execSync('npm run export', { stdio: 'inherit' });
  console.log('Next.js export completed successfully.');
} catch (error) {
  console.error('Error during Next.js export:', error);
  process.exit(1);
}

// Clear the export directory if it exists
if (fs.existsSync(exportDir)) {
  fs.rmSync(exportDir, { recursive: true, force: true });
}
fs.mkdirSync(exportDir);

// Move the contents of the 'out' directory to the export directory
const outPath = path.join(__dirname, outDir);
const exportPath = path.join(__dirname, exportDir);

if (fs.existsSync(outPath)) {
  fs.copySync(outPath, exportPath);
  console.log(`Copied files from '${outDir}' to '${exportDir}'.`);
} else {
  console.error(`Error: The '${outDir}' directory was not found after the export process.`);
  process.exit(1);
}

console.log('Export process finished. Files are ready in the "wordpress-export" directory.');
