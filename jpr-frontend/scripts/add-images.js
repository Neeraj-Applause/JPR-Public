#!/usr/bin/env node

/**
 * Helper script to add images to static data
 * Usage: node scripts/add-images.js
 */

const fs = require('fs');
const path = require('path');

const IMAGES_DIR = path.join(__dirname, '../src/assets/dynamic_images');
const DATA_DIR = path.join(__dirname, '../src/data');

function listImages() {
  console.log('📁 Available Images:\n');
  
  const categories = ['news', 'publications', 'projects'];
  
  categories.forEach(category => {
    const categoryDir = path.join(IMAGES_DIR, category);
    if (fs.existsSync(categoryDir)) {
      const files = fs.readdirSync(categoryDir);
      console.log(`${category.toUpperCase()}:`);
      files.forEach(file => {
        console.log(`  - ${file}`);
      });
      console.log('');
    }
  });
}

function generateImportStatements(category) {
  const categoryDir = path.join(IMAGES_DIR, category);
  if (!fs.existsSync(categoryDir)) {
    console.log(`❌ Directory not found: ${categoryDir}`);
    return;
  }
  
  const files = fs.readdirSync(categoryDir);
  console.log(`\n📋 Import statements for ${category}:\n`);
  
  files.forEach((file, index) => {
    const name = file.replace(/\.[^/.]+$/, ""); // Remove extension
    const varName = `${category}Image${index + 1}`;
    console.log(`import ${varName} from '../assets/dynamic_images/${category}/${file}';`);
  });
  
  console.log('\n📋 Usage in data array:\n');
  console.log('images: [');
  files.forEach((file, index) => {
    const varName = `${category}Image${index + 1}`;
    console.log(`  ${varName}${index < files.length - 1 ? ',' : ''}`);
  });
  console.log(']');
}

function showHelp() {
  console.log(`
🖼️  Image Management Helper

Commands:
  list                    - List all available images
  imports <category>      - Generate import statements for category
  help                    - Show this help

Categories: news, publications, projects

Examples:
  node scripts/add-images.js list
  node scripts/add-images.js imports news
  node scripts/add-images.js imports publications

📁 Image Directory Structure:
  src/assets/dynamic_images/
  ├── news/
  ├── publications/
  └── projects/

💡 Tips:
  1. Add your images to the appropriate folder
  2. Run 'imports <category>' to get import statements
  3. Copy the imports to your data file
  4. Update your data objects to use the imported variables
`);
}

// Main execution
const command = process.argv[2];
const category = process.argv[3];

switch (command) {
  case 'list':
    listImages();
    break;
  case 'imports':
    if (!category) {
      console.log('❌ Please specify a category: news, publications, or projects');
      console.log('Example: node scripts/add-images.js imports news');
    } else if (!['news', 'publications', 'projects'].includes(category)) {
      console.log('❌ Invalid category. Use: news, publications, or projects');
    } else {
      generateImportStatements(category);
    }
    break;
  case 'help':
  default:
    showHelp();
    break;
}