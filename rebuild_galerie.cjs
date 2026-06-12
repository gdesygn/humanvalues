const fs = require('fs');

// Sections à supprimer entièrement
const REMOVE_SECTIONS = new Set(['nexus-stade-rochelais','icones','arene','nexus-messi','nexus-netflix','olympe']);

// Lire le fichier original (avant toute modification) — on repart du backup si dispo, sinon du courant
const src = fs.existsSync('./src/pages/Galerie.jsx.bak')
  ? fs.readFileSync('./src/pages/Galerie.jsx.bak', 'utf8')
  : fs.readFileSync('./src/pages/Galerie.jsx', 'utf8');

// Créer backup
if (!fs.existsSync('./src/pages/Galerie.jsx.bak')) {
  fs.writeFileSync('./src/pages/Galerie.jsx.bak', src, 'utf8');
  console.log('📦 Backup créé.');
}

// Extraire la partie JS avant le composant React
const beforeComponent = src.split('const Galerie = ()')[0];
const afterArray = src.split('];')[1]; // tout ce qui vient après le tableau ailes

// Parser les ailes via eval-like: on extrait le contenu du tableau ailes[]
// Approche: on isole le contenu entre "const ailes = [" et "];"
const match = src.match(/const ailes = \[([\s\S]*?)\];\s*\nconst Galerie/);
if (!match) { console.error('❌ Impossible de trouver le tableau ailes'); process.exit(1); }

// On va travailler sur les lignes pour reconstruire
// Stratégie: lire les ailes une par une en détectant { id: "..." au niveau racine
const ailesRaw = match[1];

// Splitter par sections de niveau 0 (objets dans le tableau principal)
// On cherche les blocs: "  {\n    id: "..." ... \n  },"
const sectionRegex = /\{\s*\n\s*id:\s*"([^"]+)"[\s\S]*?\n  \},?/g;
let sections = [];
let m;
while ((m = sectionRegex.exec(ailesRaw)) !== null) {
  sections.push({ id: m[1], raw: m[0] });
}

console.log(`📋 Sections trouvées: ${sections.map(s=>s.id).join(', ')}`);

// Filtrer les sections à supprimer
const kept = sections.filter(s => !REMOVE_SECTIONS.has(s.id));
console.log(`✅ Sections conservées: ${kept.map(s=>s.id).join(', ')}`);

// Dans chaque section conservée, supprimer les artworks hc:true
const cleanedSections = kept.map(section => {
  let raw = section.raw;
  // Supprimer les lignes d'artwork avec hc: true
  raw = raw.replace(/^\s*\{[^\n]*hc:\s*true[^\n]*\},?\n/gm, '');
  // Nettoyer virgules trailing avant ]
  raw = raw.replace(/,(\s*\])/g, '$1');
  return raw;
});

// Reconstruire le fichier
const newAilesContent = `const ailes = [\n  ${cleanedSections.join(',\n  ')}\n];\n`;

// Isoler le composant React (tout ce qui suit "const Galerie")
const componentPart = 'const Galerie = ()' + src.split('const Galerie = ()')[1];

const newFile = `import React, { useEffect } from 'react';\nimport { useLocation, Link } from 'react-router-dom';\n\n` 
  + newAilesContent + '\n' + componentPart;

fs.writeFileSync('./src/pages/Galerie.jsx', newFile, 'utf8');
console.log('✅ Galerie.jsx reconstruit avec succès.');
console.log(`📊 Taille: ${newFile.length} octets`);
