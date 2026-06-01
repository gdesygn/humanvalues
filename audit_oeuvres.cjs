const fs = require('fs');
const path = require('path');

const galeriePath = path.join(__dirname, 'src', 'pages', 'Galerie.jsx');
const publicArtworksPath = path.join(__dirname, 'public');

if (!fs.existsSync(galeriePath)) {
  console.error('File not found:', galeriePath);
  process.exit(1);
}

const content = fs.readFileSync(galeriePath, 'utf8');

// Use regex to find all image properties in the objects
const imageRegex = /image:\s*['"](\/artworks\/[^'"]+)['"]/g;
let match;
let missingImages = [];
let totalArtworksCount = 0;

while ((match = imageRegex.exec(content)) !== null) {
  totalArtworksCount++;
  const imagePath = match[1]; // e.g. /artworks/xxx.jpg
  // The actual path on disk relative to public
  const fullPath = path.join(publicArtworksPath, imagePath);
  
  if (!fs.existsSync(fullPath)) {
    missingImages.push(imagePath);
  }
}

// Typo checks (simple search for double spaces, weird chars, etc.)
const textRegex = /text:\s*['"]([^'"]+)['"]/g;
let textMatch;
let typos = [];

while ((textMatch = textRegex.exec(content)) !== null) {
  const txt = textMatch[1];
  if (txt.includes('  ')) typos.push(`Double espace dans: "${txt}"`);
  if (txt.includes('..')) typos.push(`Double point dans: "${txt}"`);
  // Add other common checks if needed
}

console.log('--- AUDIT REPORT ---');
console.log(`Total artworks found in Galerie.jsx: ${totalArtworksCount}`);

console.log(`\n1. MISSING IMAGES: ${missingImages.length}`);
missingImages.forEach(img => console.log(' - ' + img));

console.log(`\n2. TYPOS / FORMATTING WARNINGS: ${typos.length}`);
typos.forEach(t => console.log(' - ' + t));

console.log('\nAudit complete.');
