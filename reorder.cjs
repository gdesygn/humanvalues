const fs = require('fs');
const file = 'c:/EbookAntiGrav/HumanValues/Hub_Web/app/src/pages/Galerie.jsx';
let content = fs.readFileSync(file, 'utf8');

const startIdx = content.indexOf('const ailes = [');
const endIdx = content.indexOf('];\n\nconst Galerie');
const ailesStr = content.substring(startIdx, endIdx + 2);

const order = ['ancrage', 'vertus', 'nexus-stade-rochelais', 'artefacts', 'monuments', 'pantheon', 'fluides', 'arene', 'edifice', 'langage', 'nexus-messi', 'nexus-netflix', 'olympe'];

let blocks = {};
let currentId = null;
let currentBlock = '';
let lines = ailesStr.split('\n');
let inBlock = false;

for (let line of lines) {
    if (line === '  {' && !inBlock) {
        inBlock = true;
        currentBlock = line + '\n';
    } else if (inBlock) {
        currentBlock += line + '\n';
        if (line.includes('id: "')) {
            currentId = line.split('"')[1];
        }
        if (line === '  },' || line === '  }') {
            blocks[currentId] = currentBlock.trim();
            inBlock = false;
        }
    }
}

let newAilesStr = 'const ailes = [\n';
for (let i = 0; i < order.length; i++) {
    let id = order[i];
    let block = blocks[id];
    if (id === 'pantheon') {
        block = block.replace('id: "pantheon"', 'id: "icones"').replace('title: "Le Panthéon"', 'title: "Les Icônes"');
    }
    // Remove trailing comma if it's the last one, add it if it's not
    if (block.endsWith(',')) {
        block = block.slice(0, -1);
    }
    newAilesStr += '  ' + block + (i === order.length - 1 ? '\n' : ',\n');
}
newAilesStr += '];';

content = content.replace(ailesStr, newAilesStr);
fs.writeFileSync(file, content);
console.log('Reordered successfully');
