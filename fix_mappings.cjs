const fs = require('fs');
const p = './src/pages/Galerie.jsx';
let c = fs.readFileSync(p, 'utf8');

// Suisse : geo_pays_20 → geo_pays_21
c = c.replace('"Suisse", subject: "Pays", text: "L\'helvétie façonnée par les lettres. La précision, la neutralité et le survol alpin.", image: "/artworks/geo_pays_20.jpg"',
              '"Suisse", subject: "Pays", text: "L\'helvétie façonnée par les lettres. La précision, la neutralité et le survol alpin.", image: "/artworks/geo_pays_21.jpg"');

// Tunisie : geo_pays_21 → geo_pays_22
c = c.replace('"Tunisie", subject: "Pays", text: "L\'histoire carthaginoise, le soleil méditerranéen et l\'ancrage nord-africain.", image: "/artworks/geo_pays_21.jpg"',
              '"Tunisie", subject: "Pays", text: "L\'histoire carthaginoise, le soleil méditerranéen et l\'ancrage nord-africain.", image: "/artworks/geo_pays_22.jpg"');

// Argentina : geo_pays_22 → geo_pays_23
c = c.replace('"Argentina", subject: "Pays", text: "Le soleil de mai, la cordillère, l\'albiceleste dans les cieux.", image: "/artworks/geo_pays_22.jpg"',
              '"Argentina", subject: "Pays", text: "Le soleil de mai, la cordillère, l\'albiceleste dans les cieux.", image: "/artworks/geo_pays_23.jpg"');

fs.writeFileSync(p, c);
console.log('✅ Mappings corrigés : Suisse→21, Tunisie→22, Argentina→23');
