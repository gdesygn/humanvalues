const fs = require('fs');
const p = './src/pages/Galerie.jsx';
let c = fs.readFileSync(p, 'utf8');

// 1. Corriger Armenia : geo_pays_6 → geo_pays_4
c = c.replace('Armenia", subject: "Pays", text: "Le lac Sevan, les montagnes sacrées, une histoire millénaire.", image: "/artworks/geo_pays_6.jpg"',
               'Armenia", subject: "Pays", text: "Le lac Sevan, les montagnes sacrées, une histoire millénaire.", image: "/artworks/geo_pays_4.jpg"');

// 2. Mettre à jour Suisse → geo_pays_20
c = c.replace('suisse.jpg"', 'geo_pays_20.jpg"');

// 3. Mettre à jour Chine → geo_pays_15
c = c.replace('"Chine", subject: "Pays", text: "L\'Empire du Milieu. Les étoiles dorées brillant sur l\'immensité de la nation rouge.", image: "/artworks/chine.jpg"',
              '"Chine", subject: "Pays", text: "L\'Empire du Milieu. Les étoiles dorées brillant sur l\'immensité de la nation rouge.", image: "/artworks/geo_pays_15.jpg"');

// 4. Mettre à jour Tunisie → geo_pays_21
c = c.replace('tunisie.jpg"', 'geo_pays_21.jpg"');

// 5. Mettre à jour Uruguay → geo_pays_17 + ajouter nouveaux pays
const newPays = `
      { id: "gp6", title: "Congo", subject: "Pays", text: "Le fleuve majestueux, le cœur vert de l'Afrique centrale.", image: "/artworks/geo_pays_6.jpg" },
      { id: "gp10", title: "France", subject: "Pays", text: "La République. La patrie des droits de l'homme, sculptée dans l'hexagone.", image: "/artworks/geo_pays_10.jpg" },
      { id: "gp11", title: "Equateur", subject: "Pays", text: "La ligne zéro. Le pays coupé en deux par l'équateur géographique.", image: "/artworks/geo_pays_11.jpg" },
      { id: "gp12", title: "Cameroon", subject: "Pays", text: "L'Afrique en miniature. La diversité des paysages et la force du Lion Indomptable.", image: "/artworks/geo_pays_12.jpg" },
      { id: "gp13", title: "Guinée", subject: "Pays", text: "Le berceau du Sahel, l'énergie du golfe de Guinée et la richesse de la terre.", image: "/artworks/geo_pays_13.jpg" },
      { id: "gp14", title: "Egypte", subject: "Pays", text: "La civilisation millénaire, les pharaons et l'éternité gravée dans la pierre.", image: "/artworks/geo_pays_14.jpg" },
      { id: "gp16", title: "Ghana", subject: "Pays", text: "Le pays de l'or. La fierté africaine et l'étoile noire de l'indépendance.", image: "/artworks/geo_pays_16.jpg" },
      { id: "gp18", title: "Venezuela", subject: "Pays", text: "El Dorado. Les llanos infinis, les chutes d'Angel et la terre de Bolívar.", image: "/artworks/geo_pays_18.jpg" },
      { id: "gp19", title: "Sénégal", subject: "Pays", text: "La Téranga. L'hospitalité légendaire du pays de la Téranga et du peuple wolof.", image: "/artworks/geo_pays_19.jpg" }`;

c = c.replace(
  '{ id: "an29_2", title: "Uruguay", subject: "Pays", text: "Le soleil de mai rayonnant sur la ferveur céleste et l\'héritage sud-américain.", image: "/artworks/uruguay.jpg" }',
  '{ id: "an29_2", title: "Uruguay", subject: "Pays", text: "Le soleil de mai rayonnant sur la ferveur céleste et l\'héritage sud-américain.", image: "/artworks/geo_pays_17.jpg" },' + newPays
);

fs.writeFileSync(p, c);
console.log('✅ Galerie.jsx mis à jour — geo_pays_1 à 21 intégrés.');
