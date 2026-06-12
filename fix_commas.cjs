const fs = require('fs');
const p = './src/pages/Galerie.jsx';
let c = fs.readFileSync(p, 'utf8');
c = c.replace(/,,/g, ',');
fs.writeFileSync(p, c);
console.log('✅ Doubles virgules corrigées');
