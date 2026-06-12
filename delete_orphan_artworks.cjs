const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const artworksDir = path.join(__dirname, 'public/artworks');
const srcDir = path.join(__dirname, 'src');

// 1. Lister tous les fichiers dans /public/artworks
const allFiles = fs.readdirSync(artworksDir).filter(f => !fs.statSync(path.join(artworksDir, f)).isDirectory());
console.log(`📁 ${allFiles.length} fichiers dans /public/artworks`);

// 2. Scanner tout le code source pour trouver les images référencées
function scanDir(dir) {
  let refs = new Set();
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const full = path.join(dir, item);
    if (fs.statSync(full).isDirectory()) {
      scanDir(full).forEach(r => refs.add(r));
    } else if (item.endsWith('.jsx') || item.endsWith('.js') || item.endsWith('.tsx')) {
      const content = fs.readFileSync(full, 'utf8');
      const matches = content.matchAll(/\/artworks\/([^"'\s]+)/g);
      for (const m of matches) refs.add(m[1]);
    }
  }
  return refs;
}

const referencedFiles = scanDir(srcDir);
console.log(`🔗 ${referencedFiles.size} fichiers référencés dans le code`);

// 3. Trouver les orphelins
const orphans = allFiles.filter(f => !referencedFiles.has(f));
console.log(`\n🗑️  ${orphans.length} fichiers orphelins à supprimer :`);
orphans.forEach(f => console.log(`   - ${f}`));

// 4. Supprimer
let deleted = 0;
for (const f of orphans) {
  fs.unlinkSync(path.join(artworksDir, f));
  deleted++;
}

console.log(`\n✅ ${deleted} fichiers supprimés.`);
console.log(`✅ ${allFiles.length - deleted} fichiers conservés.`);
