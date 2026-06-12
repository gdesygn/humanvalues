const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/pages/Galerie.jsx');
let content = fs.readFileSync(filePath, 'utf8');

// ── 1. Sections entières à supprimer ──────────────────────────────────────────
// Ces IDs seront effacés avec tout leur bloc { id: "...", ... }
const sectionsToRemove = [
  'nexus-stade-rochelais',
  'icones',
  'arene',
  'nexus-messi',
  'nexus-netflix',
  'olympe',
];

for (const id of sectionsToRemove) {
  // Regex : capture le bloc objet dont id: "<id>" jusqu'à la virgule finale ou la fin du tableau
  // On cherche le { précédant id: "..." jusqu'au prochain }, (avec virgule optionnelle)
  const re = new RegExp(
    `\\{[^{}]*?id:\\s*"${id}"[\\s\\S]*?\\},?\\s*`,
    'g'
  );
  content = content.replace(re, '');
}

// ── 2. Supprimer les entrées hc: true dans les sections restantes ─────────────
// Supprime chaque ligne d'artwork qui contient hc: true
content = content.replace(/^\s*\{[^{}]*hc:\s*true[^{}]*\},?\n/gm, '');

// ── 3. Nettoyage des virgules trailing avant ] ─────────────────────────────────
// Supprime les virgules orphelines avant la fermeture du tableau d'artworks
content = content.replace(/,(\s*\])/g, '$1');

// ── 4. Écriture ───────────────────────────────────────────────────────────────
fs.writeFileSync(filePath, content, 'utf8');
console.log('✅ Galerie.jsx nettoyé avec succès.');
