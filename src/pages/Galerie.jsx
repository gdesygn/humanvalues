import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ailes = [
  {
    id: "ancrage",
    title: "L'Ancrage",
    color: "#795548", // Marron / Terre
    description: "Les territoires, les origines, la géographie, l'ancrage profond dans le sol.",
    artworks: [
      { id: "an1_0", title: "Rio de Janeiro", subject: "Géographie", text: "La Cidade Maravilhosa, sculptée par sa baie et son énergie.", image: "/artworks/ville_rio.jpg" },
      { id: "an1", title: "New York", subject: "Géographie", text: "L'effervescence urbaine, la ligne d'horizon sculptée par les gratte-ciels en lettres.", image: "/artworks/ville_newyork.jpg" },
      { id: "an3", title: "Madrid", subject: "Géographie", text: "L'élégance castillane, le soleil et la passion.", image: "/artworks/ville_madrid.jpg" },
      { id: "an3_1", title: "Paris", subject: "Géographie", text: "Le 75. La capitale rayonnante, historique et intemporelle.", image: "/artworks/ville_paris.jpg" },
      { id: "an4", title: "Las Vegas", subject: "Géographie", text: "Le mirage du désert, l'oasis de lumière et de démesure.", image: "/artworks/ville_vegas.jpg" },
      { id: "an5", title: "Tokyo", subject: "Géographie", text: "La mégalopole infinie, l'alliance de la tradition et du futur.", image: "/artworks/ville_tokyo.jpg" },
      { id: "an5_1", title: "Lille", subject: "Géographie", text: "Le 59. La chaleur du Nord, l'architecture flamande en typographie.", image: "/artworks/ville_lille.jpg" },
      { id: "an5_2", title: "Béziers", subject: "Géographie", text: "L'accent du Sud, l'arène et le soleil d'Occitanie.", image: "/artworks/ville_beziers.jpg" },
      { id: "an5_3", title: "Lyon", subject: "Géographie", text: "Le 69. La capitale des Gaules forgée par ses deux fleuves.", image: "/artworks/ville_lyon.jpg" },
      { id: "an5_4", title: "Marseille", subject: "Géographie", text: "Le 13. La cité phocéenne, rebelle, vibrante et méditerranéenne.", image: "/artworks/ville_marseille.jpg" },
      { id: "an5_5", title: "Rennes", subject: "Géographie", text: "Le 35. Le cœur vibrant de la Bretagne, historique et festif.", image: "/artworks/ville_rennes.jpg" },
      { id: "an5_5_1", title: "Toulouse", subject: "Géographie", text: "Le 31. La ville rose, capitale de l'aéronautique sculptée par son code postal.", image: "/artworks/ville_toulouse.jpg" },
      { id: "an5_6", title: "Cognac", subject: "Géographie", text: "L'élégance charentaise. La ville et son spiritueux d'exception forgés par les lettres.", image: "/artworks/ville_cognac.jpg" },
      { id: "an5_7", title: "Angoulême", subject: "Géographie", text: "La cité des Valois et capitale de l'image, dessinée par la typographie.", image: "/artworks/ville_angouleme.jpg" },
      { id: "an5_8", title: "Bordeaux Métropole", subject: "Géographie", text: "Le 33. L'ensemble métropolitain sculpté dans le code postal.", image: "/artworks/ville_bordeaux.jpg" },
      { id: "an5_9", title: "Ivry-sur-Seine", subject: "Géographie", text: "Le 94. L'identité francilienne aux portes de la capitale.", image: "/artworks/ville_ivry.jpg" },
      { id: "an5_10", title: "Berlin", subject: "Géographie", text: "L'âme vibrante et historique de la capitale allemande réunifiée.", image: "/artworks/ville_berlin.jpg" },
      { id: "an5_11", title: "London", subject: "Géographie", text: "EC2P 2E. La majesté britannique, entre tradition et modernité absolue.", image: "/artworks/ville_london.jpg" },
      { id: "an5_12", title: "Dakar", subject: "Géographie", text: "Le 686. Le rythme effréné, la presqu'île vibrante et la porte de l'Afrique.", image: "/artworks/ville_dakar.jpg" },
      { id: "an5_13", title: "Genève", subject: "Géographie", text: "Le 41. Le carrefour international, le jet d'eau et l'excellence suisse.", image: "/artworks/ville_geneve.jpg" },
      { id: "an6", title: "Alpes Maritimes", subject: "Territoire", text: "La rencontre majestueuse entre la montagne et la Méditerranée.", image: "/artworks/region_1.jpg" },
      { id: "an7", title: "Alpes de Haute-Provence", subject: "Territoire", text: "Les gorges, la lavande, l'air pur des sommets du Sud.", image: "/artworks/region_2.jpg" },
      { id: "an8", title: "Monaco", subject: "Territoire", text: "La Principauté perchée, le Rocher au bord de l'eau.", image: "/artworks/region_3.jpg" },
      { id: "an9", title: "Ibiza", subject: "Territoire", text: "L'île blanche, vibrante de musique et d'énergie baléarique.", image: "/artworks/region_4.jpg" },
      { id: "an10", title: "Cap-Vert", subject: "Territoire", text: "L'archipel volcanique, balayé par les vents de l'Atlantique.", image: "/artworks/ville_capvert.jpg" },
      { id: "an29", title: "Bouches-du-Rhône", subject: "Département", text: "Le 13. Le soleil éclatant et l'âme méditerranéenne.", image: "/artworks/region_6.jpg" },
      { id: "an30", title: "Bretagne", subject: "Région", text: "Le 35. L'Armor et l'Argoat, la force brute face à l'océan.", image: "/artworks/region_7.jpg" },
      { id: "an31", title: "Corse", subject: "Région", text: "L'île de Beauté, la montagne majestueuse dans la mer.", image: "/artworks/region_8.jpg" },
      { id: "an31_1", title: "Martinique", subject: "Département", text: "Le 972. L'île aux fleurs, entre mer des Caraïbes et océan Atlantique.", image: "/artworks/outremer_martinique.jpg" },
      { id: "an31_2", title: "La Réunion", subject: "Département", text: "Le 974. L'île intense, volcanique et majestueuse de l'océan Indien.", image: "/artworks/outremer_reunion.jpg" },
      { id: "an31_3", title: "Guyane", subject: "Département", text: "Le 973. L'immensité de l'Amazonie et la force de l'équateur.", image: "/artworks/outremer_guyane.jpg" },
      { id: "an31_4", title: "Guadeloupe", subject: "Département", text: "Le 971. Le papillon des Caraïbes, l'archipel aux eaux turquoises.", image: "/artworks/outremer_guadeloupe.jpg" },
      { id: "an32", title: "Gironde", subject: "Département", text: "Le 33. L'élégance du grand Ouest et la noblesse de la terre.", image: "/artworks/region_9.jpg" },
      { id: "an33", title: "Grand-Est", subject: "Région", text: "Le 67. Le carrefour de l'Europe, fort de son héritage.", image: "/artworks/region_10.jpg" },
      { id: "an35_1", title: "Normandie", subject: "Région", text: "Le 14. L'histoire et le rivage, la bravoure forgée face à l'océan.", image: "/artworks/region_normandie.jpg" },
      { id: "an35_5", title: "Hauts de France", subject: "Région", text: "Le 59. Le cœur de la région tissé par la chaleur et la solidarité du Nord.", image: "/artworks/hauts_de_france.jpg" },
      { id: "an35_2", title: "Pays de Monts", subject: "Territoire", text: "Le 85. La dune, la pinède et la force de l'océan atlantique.", image: "/artworks/region_paysdemonts.jpg" },
      { id: "an35_3", title: "Var", subject: "Département", text: "Le 83. Le soleil éclatant et l'âme méditerranéenne en lettres majuscules.", image: "/artworks/region_var.jpg" },
      { id: "an35_4", title: "Vaucluse", subject: "Département", text: "Le 84. La terre ensoleillée, le mistral et le charme provençal.", image: "/artworks/region_vaucluse.jpg" },
      { id: "an35", title: "Nouvelle-Aquitaine", subject: "Région HV", text: "Le code postal 33000 tissé au cœur du grand Sud-Ouest.", image: "/artworks/region_aquitaine_restored.jpg" },
      { id: "an34", title: "Le Département 33", subject: "Gironde HV", text: "L'identité institutionnelle redessinée en lettres majuscules.", image: "/artworks/region_11.jpg" },
      { id: "an11", title: "Afrika", subject: "Continent", text: "Le berceau de l'humanité, l'énergie pure de la terre.", image: "/artworks/geo_pays_1.jpg" },
      { id: "an12", title: "Brazil", subject: "Pays", text: "Ordem e Progresso. La passion, le rythme, la forêt infinie.", image: "/artworks/geo_pays_2.jpg" },
      { id: "an13", title: "Germany", subject: "Pays", text: "L'histoire, la rigueur, le cœur battant de l'Europe.", image: "/artworks/geo_pays_3.jpg" },
      { id: "an14", title: "Italia", subject: "Pays", text: "L'art antique, la dolce vita, la péninsule au centre de l'histoire.", image: "/artworks/italia_eagle.jpg" },
      { id: "an15", title: "Norway", subject: "Pays", text: "Les fjords majestueux, les aurores boréales, l'appel du Nord.", image: "/artworks/geo_pays_5.jpg" },
      { id: "an15_0", title: "Argentina", subject: "Pays", text: "Le soleil de mai, la cordillère, l'albiceleste dans les cieux.", image: "/artworks/argentina.jpg" },
      { id: "an15_1", title: "Armenia", subject: "Pays", text: "Le lac Sevan, les montagnes sacrées, une histoire millénaire.", image: "/artworks/geo_pays_6.jpg" },
      { id: "an15_2", title: "Algeria", subject: "Pays", text: "DZ. L'immensité du désert et l'héritage d'un peuple fier.", image: "/artworks/geo_pays_7.jpg" },
      { id: "an15_3", title: "England", subject: "Pays", text: "UK. La couronne, le flegme britannique et la terre de légendes.", image: "/artworks/geo_pays_8.jpg" },
      { id: "an15_4", title: "Mexico", subject: "Pays", text: "52. L'aigle sur le cactus, le soleil aztèque et la ferveur.", image: "/artworks/geo_pays_9.jpg" },
      { id: "an14_1", title: "Suisse", subject: "Pays", text: "L'helvétie façonnée par les lettres. La précision, la neutralité et le survol alpin.", image: "/artworks/suisse.jpg" },
      { id: "an29", title: "Chine", subject: "Pays", text: "L'Empire du Milieu. Les étoiles dorées brillant sur l'immensité de la nation rouge.", image: "/artworks/chine.jpg" },
      { id: "an29_1", title: "Tunisie", subject: "Pays", text: "L'histoire carthaginoise, le soleil méditerranéen et l'ancrage nord-africain.", image: "/artworks/tunisie.jpg" },
      { id: "an29_2", title: "Uruguay", subject: "Pays", text: "Le soleil de mai rayonnant sur la ferveur céleste et l'héritage sud-américain.", image: "/artworks/uruguay.jpg" },
      { id: "an16", title: "Arc de Triomphe", subject: "Monument", text: "Symbole de victoire, carrefour de la nation.", image: "/artworks/monument_1.jpg" },
      { id: "an17", title: "Burj Khalifa", subject: "Monument", text: "L'ascension vertigineuse, le désir humain de toucher les cieux.", image: "/artworks/monument_2.jpg" },
      { id: "an18", title: "Statue de la Liberté", subject: "Monument", text: "L'accueil, la flamme, l'espoir d'un monde nouveau.", image: "/artworks/monument_3.jpg" },
      { id: "an19", title: "Tour de Pise", subject: "Monument", text: "La beauté dans l'imperfection, le miracle de l'équilibre.", image: "/artworks/monument_4.jpg" },
      { id: "an20", title: "Danseuse du Lido", subject: "Spectacle", text: "L'élégance parisienne, le glamour intemporel et la magie des revues des Champs-Élysées.", image: "/artworks/monument_5.jpg" },
      { id: "an21", title: "Île de Pâques", subject: "Monument", text: "Le mystère des Moaï, le regard figé sur l'immensité du Pacifique.", image: "/artworks/monument_6.jpg" },
      { id: "an22", title: "Tour Eiffel", subject: "Monument", text: "La Dame de Fer, l'élégance architecturale s'élevant au-dessus de Paris.", image: "/artworks/monument_7.jpg" },
      { id: "an23", title: "Masque Vénitien", subject: "Culture", text: "L'énigme du carnaval, l'élégance mystérieuse de la Sérénissime dissimulée derrière le masque.", image: "/artworks/monument_8.jpg" },
      { id: "an24", title: "Legend", subject: "Légende", text: "The Greatest. Vole comme le papillon, pique comme l'abeille.", image: "/artworks/monument_9.jpg" },
      { id: "an25", title: "Corcovado", subject: "Monument", text: "Le Christ Rédempteur, veillant majestueusement sur Rio de Janeiro.", image: "/artworks/monument_10.jpg" },
      { id: "an26", title: "La Bonne Mère", subject: "Monument", text: "Notre-Dame de la Garde, la protectrice de la cité phocéenne.", image: "/artworks/monument_11.jpg" },
      { id: "an27", title: "Burj Al Arab", subject: "Monument", text: "L'icône de Dubaï, la voile hissée vers la démesure.", image: "/artworks/monument_12.jpg" },
      { id: "an28", title: "Les Pyramides", subject: "Monument", text: "Le Sphinx et l'immensité de Gizeh, l'éternité gravée dans la pierre.", image: "/artworks/monument_13.jpg" },
      { id: "an28_1", title: "Mémorial de Vimy", subject: "Monument", text: "L'hommage canadien. Les piliers de la mémoire dressés vers l'éternité.", image: "/artworks/memorial_canadien.jpg" }
    ]
  },
  {
    id: "vertus",
    title: "Les Vertus",
    color: "#00BCD4", // Cyan
    description: "L'essence de l'effort. Les vertus humaines incarnées dans le mouvement sportif et l'harmonie des éléments.",
    artworks: [
      { id: "val1", title: "Universalité", subject: "Vertu Sportive", text: "L'équilibre sur l'eau, le kayak propulsé par l'idéal universel.", image: "/artworks/valeur_1.jpg" },
      { id: "val2", title: "Ski de piste & Anticipation", subject: "Vertu Sportive", text: "La glisse, l'anticipation, le ski de piste tracé par les valeurs.", image: "/artworks/valeur_2.jpg" },
      { id: "val3", title: "Collectif", subject: "Vertu Sportive", text: "Le hockey sur glace, la force du groupe, l'union inébranlable.", image: "/artworks/valeur_3.jpg" },
      { id: "val4", title: "Liberté", subject: "Vertu Sportive", text: "Le slalom, la trajectoire libre à travers les portes du défi.", image: "/artworks/valeur_4.jpg" },
      { id: "val5", title: "Résistant", subject: "Vertu Sportive", text: "Le ski de fond, l'endurance absolue, la ténacité dans l'effort long.", image: "/artworks/valeur_5.jpg" },
      { id: "val6", title: "Humilité", subject: "Vertu Sportive", text: "Le contrôle parfait. Le football au service du jeu sans artifice.", image: "/artworks/valeur_6.jpg" },
      { id: "val7", title: "Détente & Élévation", subject: "Vertu Sportive", text: "L'envol vers le panier, l'élévation par l'esprit et la détente.", image: "/artworks/valeur_7.jpg" },
      { id: "val8", title: "Humilité", subject: "Vertu Sportive", text: "Le meneur de jeu. L'humilité dans la construction de l'action collective.", image: "/artworks/valeur_8.jpg" },
      { id: "val9", title: "Santé", subject: "Vertu Sportive", text: "Le service smashé, la vitalité pure et l'énergie du corps en mouvement.", image: "/artworks/valeur_9.jpg" },
      { id: "val10", title: "Liberté", subject: "Vertu Sportive", text: "L'extension en plein vol. La liberté de mouvement avant l'impact en handball.", image: "/artworks/valeur_10.jpg" },
      { id: "val11", title: "Arène & Engagement", subject: "Vertu Sportive", text: "Le coup de genou sauté en Muay Thaï. L'engagement total dans l'arène.", image: "/artworks/valeur_11.jpg" },
      { id: "val12", title: "Humilité", subject: "Vertu Sportive", text: "Les gants suspendus. Le respect absolu du ring, de l'effort et de l'adversaire.", image: "/artworks/valeur_12.jpg" },
      { id: "val13", title: "Détermination Brute", subject: "Vertu Sportive", text: "Le boxeur thaï de face, genou levé. La détermination brute et l'impact imminent.", image: "/artworks/valeur_13.jpg" },
      { id: "val14", title: "Excellence", subject: "Vertu Sportive", text: "Le coup de pied haut. L'équilibre et la recherche de la perfection martiale.", image: "/artworks/valeur_14.jpg" },
      { id: "val15", title: "Courage", subject: "Vertu Sportive", text: "La garde montée. La détermination sans faille face à l'impact imminent.", image: "/artworks/valeur_15.jpg" },
      { id: "val15_1", title: "Précision", subject: "Vertu Sportive", text: "Le sac de poing. L'impact millimétré et la répétition du geste parfait.", image: "/artworks/valeur_precision.jpg" },
      { id: "val16", title: "Victoire", subject: "Vertu Sportive", text: "La croix de fer aux anneaux en gymnastique. La maîtrise absolue de la gravité.", image: "/artworks/valeur_16.jpg" },
      { id: "val17", title: "Technique", subject: "Vertu Sportive", text: "Le lancer de javelot. L'équilibre parfait entre puissance et technique pure.", image: "/artworks/valeur_17.jpg" },
      { id: "val18", title: "Régularité", subject: "Vertu Sportive", text: "Le lancer de marteau. La force centrifuge maîtrisée dans la régularité du geste.", image: "/artworks/valeur_18.jpg" },
      { id: "val19", title: "Individuel", subject: "Vertu Sportive", text: "Le lancer de disque. L'engagement total et solitaire de l'athlète.", image: "/artworks/valeur_19.jpg" },
      { id: "val20", title: "Énergie", subject: "Vertu Sportive", text: "Le lancer de poids. L'énergie explosive et concentrée pour repousser la masse.", image: "/artworks/valeur_20.jpg" },
      { id: "val21", title: "Fauteuil & Résilience", subject: "Vertu Sportive", text: "Le tennis fauteuil. La frappe, la mobilité et la résilience pure.", image: "/artworks/valeur_21.jpg" },
      { id: "val22", title: "Lame & Transcendance", subject: "Vertu Sportive", text: "Le sprint paralympique. La lame affûtée pour transcender les limites humaines.", image: "/artworks/valeur_22.jpg" },
      { id: "val23", title: "Descente & Équilibre", subject: "Vertu Sportive", text: "Le para-ski alpin. L'équilibre et la vitesse au service du dépassement de soi.", image: "/artworks/valeur_23.jpg" },
      { id: "val24", title: "Effort & Vélocité", subject: "Vertu Sportive", text: "Le para-cyclisme. L'effort mécanique et la vélocité repoussant l'horizon.", image: "/artworks/valeur_24.jpg" },
      { id: "val25", title: "Puissance & Précision", subject: "Vertu Sportive", text: "Le baseball fauteuil. L'attente du lancer, la puissance et la précision de la frappe.", image: "/artworks/valeur_25.jpg" },
      { id: "val30", title: "Force & Alignement", subject: "Vertu Sportive", text: "L'haltérophilie. La force pure et l'alignement parfait pour s'élever au-dessus des limites physiques.", image: "/artworks/valeur_30.jpg" },
      { id: "val26", title: "HV (Ruban)", subject: "Gymnastique Rythmique", text: "L'harmonie du mouvement et la légèreté du ruban, sculptées par les lettres HV.", image: "/artworks/grace_ruban.jpg" },
      { id: "val27", title: "La Grâce (Poutre)", subject: "Gymnastique Artistique", text: "L'équilibre parfait sur la poutre. La grâce incarnée dans chaque syllabe.", image: "/artworks/grace_poutre.jpg" },
      { id: "val28", title: "La Grâce (Ballon)", subject: "Gymnastique Rythmique", text: "L'élégance absolue. La capture du ballon suspendue dans le temps.", image: "/artworks/grace_ballon.jpg" },
      { id: "val29", title: "Le Service Parfait", subject: "Tennis", text: "La puissance et la précision du service, dessinées par la typographie HV 2025.", image: "/artworks/hv_tennis_service.jpg" },
      { id: "val31", title: "Collectif", subject: "Vertu Sportive", text: "La création est une femme sur un cheval au saut d'obstacle.", image: "/artworks/swiss_horse.jpg", hc: true },
      { id: "val32", title: "Individuel & Collectif", subject: "Vertu Sportive", text: "Le tennis de table. La dualité parfaite entre la discipline individuelle et la dynamique collective.", image: "/artworks/swiss_pingpong.jpg", hc: true },
      { id: "val33", title: "Performance", subject: "Vertu Sportive", text: "Le vélo de piste. L'aérodynamisme et la recherche absolue de la vitesse et de la performance.", image: "/artworks/swiss_cycling.jpg", hc: true }
    ]
  },
  {
    id: "artefacts",
    title: "Les Artefacts",
    color: "#424242", // Gris/Noir
    description: "L'objet inerte, le symbole manufacturé, les marques et l'héritage humain.",
    artworks: [
      { id: "ar1", title: "Brioche Vendéenne", subject: "Gastronomie", text: "La tresse dorée, symbole gourmand de la tradition et du terroir vendéen.", image: "/artworks/stjean_boat.jpg" },
      { id: "ar1_1", title: "La 2CV de St-Jean-de-Monts", subject: "Objet", text: "L'icône populaire, façonnée par les codes de la Vendée.", image: "/artworks/obj_2cv.jpg" },
      { id: "ar1_2", title: "Le Margouillat Vendéen", subject: "Faune", text: "L'animal solaire tissé des lettres de St-Jean-de-Monts 85160.", image: "/artworks/obj_margouillat.jpg" },
      { id: "ar1_3", title: "Vendée Océan", subject: "Territoire", text: "L'empreinte maritime et l'horizon bleu de la côte vendéenne 85160.", image: "/artworks/vendee_ocean.jpg" },
      { id: "ar1_4", title: "Le Cœur Vendéen", subject: "Emblème", text: "Le double cœur entrelacé. L'âme, la passion et l'histoire du 85.", image: "/artworks/vendee_coeur.jpg" },
      { id: "ar2", title: "Le Gouvernail", subject: "Objet", text: "La direction, le cap maintenu contre vents et marées.", image: "/artworks/obj_region_2.jpg" },
      { id: "ar3", title: "Vin Bordelais", subject: "Objet de Région", text: "Le cépage, la robe, le millésime. Le savoir-faire des vignobles.", image: "/artworks/bordeaux.jpg" },
      { id: "ar4", title: "Le Ruban", subject: "Saint-Étienne", text: "L'excellence de la passementerie, le textile de luxe, l'artisanat du XVIIe.", image: "/artworks/st_etienne_1.jpg" },
      { id: "ar5", title: "Lampe de Mineur", subject: "Saint-Étienne", text: "Le Bassin Forézien, l'or noir, la lumière dans les profondeurs de la Terre.", image: "/artworks/st_etienne_2.jpg" },
      { id: "ar6", title: "Le Fusil", subject: "Saint-Étienne", text: "La manufacture d'armes, l'industrie lourde de la Loire, la précision mécanique.", image: "/artworks/st_etienne_3.jpg" },
      { id: "ar7", title: "La Rose d'Angleterre", subject: "Emblème", text: "La fleur Tudor, symbole historique de la couronne britannique.", image: "/artworks/embleme_1.jpg" },
      { id: "ar8", title: "Le Chardon Écossais", subject: "Emblème", text: "L'épine protectrice, la fierté indomptable des Highlands.", image: "/artworks/embleme_2.jpg" },
      { id: "ar9", title: "Le Lion de Norvège", subject: "Emblème", text: "L'identité nordique gravée dans le symbole national.", image: "/artworks/embleme_3.jpg" },
      { id: "ar10", title: "La Feuille d'Érable", subject: "Emblème", text: "L'emblème rougeoyant, l'âme naturelle de l'Amérique du Nord.", image: "/artworks/embleme_4.jpg" },
      { id: "ar11", title: "Le Pur Sang Emirates", subject: "Excellence Hippique", text: "L'élégance animale et la noblesse brute sculptées par les lettres d'Emirates.", image: "/artworks/embleme_5.jpg", hc: true },
      { id: "ar12", title: "L'Origine Nike", subject: "Équipementier", text: "The Goddess of Victory. Philip Knight et la naissance du mythe.", image: "/artworks/nexus_nike_1.jpg", hc: true },
      { id: "ar13", title: "La Typographie", subject: "Équipementier", text: "No Fear. Keep Going. L'effort taillé dans la lettre massive.", image: "/artworks/nexus_nike_2.jpg", hc: true },
      { id: "ar14", title: "Le Swoosh", subject: "Équipementier", text: "L'épure parfaite. La virgule qui souligne les légendes.", image: "/artworks/nexus_nike_3.jpg", hc: true },
      { id: "ar14_1", title: "MJ2.0", subject: "Équipementier", text: "Le Jumpman, le 23. L'empreinte de la légende tissée dans le tissu.", image: "/artworks/jordan_cap.jpg", hc: true },
      { id: "ar14_2", title: "Venum", subject: "Équipementier", text: "Les crocs du serpent. L'équipement martial, officiel de l'UFC, taillé dans l'impact.", image: "/artworks/venum.jpg", hc: true },
      { id: "ar15", title: "Les 3 Bandes (Clubs)", subject: "Adidas", text: "Real Madrid, Juventus, All Blacks... Les géants réunis sous le même logo.", image: "/artworks/adidas_1.jpg", hc: true },
      { id: "ar16", title: "Les 3 Bandes (Athlètes)", subject: "Adidas", text: "Messi, Mahomes, Serena... Les icônes qui forgent l'histoire du sport.", image: "/artworks/adidas_2.jpg", hc: true },
      { id: "ar19", title: "Tennis 2.0", subject: "Lacoste", text: "Un emblème devenu universel sur les terrains et dans la rue.", image: "/artworks/lacoste_3.jpg", hc: true },
      { id: "ar20", title: "Le Crocodile de Mots", subject: "Lacoste", text: "L'animal entier reconstitué par les valeurs de la marque au crocodile.", image: "/artworks/lacoste_4.jpg", hc: true },
      { id: "ar21", title: "Microphone RMC", subject: "Média", text: "Afterfoot, Jeanot, 1998... La voix du sport transmise aux ondes.", image: "/artworks/rmc_mic.jpg", hc: true },
      { id: "ar22", title: "Louis Vuitton", subject: "Marque de Luxe", text: "Arnault, l'Impératrice Eugénie, le monogramme intemporel.", image: "/artworks/lv_arnault.jpg", hc: true },
      { id: "ar32", title: "Coach Prime", subject: "Football Américain", text: "Le casque tissé de l'aura de Deion Sanders. L'ère Prime Time au Colorado.", image: "/artworks/coach_prime_helmet.jpg" },
      { id: "ar33", title: "Buffaloes CUB", subject: "Football Américain", text: "Le bison universitaire. L'emblème des Buffaloes sculpté par la ferveur de Boulder.", image: "/artworks/buffaloes_cub.jpg", hc: true },
      { id: "ar34", title: "Le Volant", subject: "Badminton", text: "L'aérodynamisme et la légèreté du volant tissés par les valeurs humaines.", image: "/artworks/volant_badminton.jpg" },
      { id: "ar35", title: "Sneakers HV", subject: "Lifestyle", text: "L'empreinte du streetwear et du basket sculptée dans la matière 2025.", image: "/artworks/hv_sneakers.jpg" },
      { id: "ar36", title: "Home Run", subject: "Baseball", text: "La batte et la balle. Le classique américain forgé par les lettres HV 2025.", image: "/artworks/hv_baseball.jpg" },
      { id: "ar37", title: "Le Strike", subject: "Bowling", text: "La quille et la boule. L'alignement parfait avant l'impact 2025.", image: "/artworks/hv_bowling.jpg" },
      { id: "ar38", title: "Le Caddie", subject: "Golf", text: "Le célèbre véhicule des greens, dessiné par l'empreinte de la collection 2025.", image: "/artworks/caddie.jpg" },
      { id: "ar39", title: "Ballon de Basket", subject: "Objet Sportif", text: "La sphère orange sculptée par la typographie Human Values 2025.", image: "/artworks/ballon_basket.jpg" },
      { id: "ar40", title: "Ballon de Foot US", subject: "Objet Sportif", text: "L'ovale du gridiron, taillé dans l'esprit de l'édition 2025.", image: "/artworks/ballon_us.jpg" },
      { id: "ar41", title: "Le Sifflet", subject: "Respect", text: "Le symbole de l'arbitrage et du fair-play, tissé par le respect absolu.", image: "/artworks/sifflet.jpg" }
    ]
  },
  {
    id: "fluides",
    title: "Les Fluides",
    color: "#4FC3F7", // Bleu Ciel
    description: "Le mouvement immatériel, la grâce, l'océan, la trace éphémère dans l'eau.",
    artworks: [
      { id: "f1", title: "H2O'CEAN", subject: "La Source", text: "L'immensité bleue, les vagues, la vie aquatique.", image: "/artworks/ocean_world.jpg" },
      { id: "f2", title: "VALEURS ET PROPRIETES", subject: "La Goutte", text: "L'étymologie de la mer, la fluidité de la typographie.", image: "/artworks/nexus_eau.jpg" }
    ]
  },
  {
    id: "pantheon",
    title: "Le Panthéon",
    color: "#C25939", // Ocre / Or
    description: "L'humain devenu légende, l'imaginaire, les figures tutélaires du sport, des arts et de l'écran.",
    artworks: [
      { id: "m1", title: "Le 13 Éternel", subject: "Football", text: "Le record absolu. Les 13 buts qui défient le temps.", image: "/artworks/portrait_1.jpg" },
      { id: "m2", title: "Numéro 10", subject: "Football", text: "Le Roi Michel. Le numéro 10, le chef d'orchestre, le coup franc parfait.", image: "/artworks/portrait_2.jpg" },
      { id: "m3", title: "The King", subject: "Football", text: "Le col relevé. The King, la poésie rebelle et le théâtre des rêves.", image: "/artworks/portrait_3.jpg" },
      { id: "m4", title: "Galactic ⭐", subject: "Football", text: "Zizou. La roulette, la grâce absolue, la finale 98.", image: "/artworks/portrait_4.jpg" },
      { id: "m5", title: "Goleador", subject: "Football", text: "La fulgurance. La vitesse pure, la coupe du monde à 19 ans.", image: "/artworks/portrait_5.jpg" },
      { id: "m6", title: "Krongsak (Origines) ⭐", subject: "Muay Thaï", text: "Guerrier né d'un art royal. Nak Muay. Respect. Knees.", image: "/artworks/martial_arts_1.jpg" },
      { id: "m7", title: "Krongsak (Mindset) ⭐", subject: "Muay Thaï", text: "L\'esprit martial, la garde d'acier, la posture royale.", image: "/artworks/martial_arts_2.jpg" },
      { id: "m8", title: "Skarbowsky (L'Héritage) ⭐", subject: "Muay Thaï", text: "Jean-Charles Skarbowsky. KO 51, Victories 75. La fiole des statistiques.", image: "/artworks/martial_arts_3.jpg" },
      { id: "m9", title: "Skarbowsky (Karma) ⭐", subject: "Muay Thaï", text: "Sang, Ancrage, Rigueur, Bangkok. Le karma du combattant.", image: "/artworks/martial_arts_4.jpg" },
      { id: "m9_1", title: "Karate & Bushido ⭐", subject: "Arts Martiaux", text: "L'opposition de style, la voie du guerrier. La pureté du combat typographique.", image: "/artworks/martial_arts_karate.jpg" },
      { id: "m10", title: "L'Avenir du Court", subject: "Tennis", text: "US Open, Roland Garros. La balle de tennis en lettres, l'avenir sur le court.", image: "/artworks/gauff.jpg", hc: true },
      { id: "m11", title: "Le Prodige", subject: "Football", text: "Le joga bonito, le prodige brésilien et la barre des 700.", image: "/artworks/neymar_700.jpg", hc: true },
      { id: "m12", title: "Le O de Omar", subject: "Cinéma & Parcours", text: "Toute son histoire dans le O de Omar. De Trappes à Hollywood, le sourire de la France.", image: "/artworks/omar_sy.jpg" },
      { id: "m13", title: "La Vérité de José", subject: "Cinéma & Humour", text: "Le rire flamboyant. De Nulle Part Ailleurs aux sommets du box-office.", image: "/artworks/jose_garcia.jpg" },
      { id: "m14", title: "Diogo JOTA 20", subject: "Football & R&D", text: "L'oiseau mythique de Liverpool tissé par le parcours, les statistiques et l'esport de Diogo Jota.", image: "/artworks/diogo_jota_lfc.jpg", hc: true },
      { id: "m15", title: "The Austrian Oak", subject: "Cinéma & Légende", text: "Arnie. Gouvernator. Schwarzy. L'incarnation du rêve américain et de la volonté absolue.", image: "/artworks/arnold_schwarzenegger.jpg" },
      { id: "m16", title: "Le 7 de CR7", subject: "Football & Légende", text: "L'obsession de la perfection. Le numéro mythique entièrement tissé par l'identité de Cristiano Ronaldo.", image: "/artworks/cr7.jpg", hc: true },
      { id: "m17", title: "NX Donnarumma", subject: "Football", text: "Le rempart ultime. L'envergure du gardien sculptée par le PSG, l'AC Milan et la Ligue des Champions.", image: "/artworks/donnarumma.jpg", hc: true }
    ]
  },
  {
    id: "monuments",
    title: "Les Monuments",
    color: "#607D8B", // Bleu Gris
    description: "L'histoire incarnée, les figures intemporelles et l'héritage universel.",
    artworks: [
      { id: "mon1", title: "La Grâce", subject: "Le Chat", text: "L'élégance féline sculptée par la typographie.", image: "/artworks/monument_chat.jpg" },
      { id: "mon2", title: "Elizabeth II", subject: "Reine d'Angleterre", text: "La Maison Windsor, Londres et le siècle. Le portrait de la souveraine absolue.", image: "/artworks/monument_elizabeth.jpg" }
    ]
  },
  {
    id: "arene",
    title: "L'Arène",
    color: "#D32F2F", // Rouge
    description: "Le stade, l'institution, le club, l'équipe, la compétition féroce.",
    artworks: [
      { id: "are_jo_1", title: "L'Anneau Olympique", subject: "Paris 2024", text: "Les cinq anneaux entrelacés, tissés des lettres de la ville lumière.", image: "/artworks/paris_jo_rings.jpg", hc: true },
      { id: "are_jo_2", title: "L'Emblème Paris", subject: "Paris 2024", text: "La silhouette typographique de la Tour Eiffel, symbole de l'élégance et de la performance.", image: "/artworks/paris_jo_logo.jpg", hc: true },
      { id: "are_jo_3", title: "La Flamme 2024", subject: "Paris 2024", text: "Le visage de Marianne embrasé par l'esprit olympique, forgé dans la date fondatrice.", image: "/artworks/paris_jo_flame.jpg", hc: true },
      { id: "are_inst_1", title: "Le Coq Olympique", subject: "CNOSF", text: "L'esprit du sport français réuni sous l'emblème national.", image: "/artworks/obj_coq_olympique.jpg", hc: true },
      { id: "are_inst_2", title: "Le Coq du Volley", subject: "FFVolley", text: "L'envol, le smash, l'excellence de la Fédération Française de Volley.", image: "/artworks/ffvolley_rooster.jpg", hc: true },
      { id: "are_club_1", title: "Spartiates", subject: "Club", text: "Le casque de Sparte, le bouclier, la fierté de Marseille sur la glace.", image: "/artworks/spartiates.jpg" },
      { id: "ar1", title: "09 Playground", subject: "Basket", text: "La Fédération Française de Basket, l'héritage d'une nation.", image: "/artworks/ffbb_1.jpg", hc: true },
      { id: "ar2", title: "Team 99", subject: "Basket", text: "L'épopée fondatrice, les grands noms du basket tricolore.", image: "/artworks/ffbb_2.jpg", hc: true },
      { id: "ar3", title: "NX Legends", subject: "Basket", text: "Le meneur, le Hall of Fame, le premier des géants.", image: "/artworks/ffbb_3.jpg", hc: true },
      { id: "ar4", title: "NX Icons", subject: "Basket", text: "L'Alien. La mutation du jeu, l'envergure vertigineuse.", image: "/artworks/ffbb_4.jpg", hc: true },
      { id: "ar5", title: "NX The Dancing Bear", subject: "Basket", text: "La légende de Limoges, la combativité, le titre européen.", image: "/artworks/ffbb_5.jpg", hc: true },
      { id: "ar6", title: "NX flying Dac", subject: "Basket", text: "Les éléments tactiques, le parquet, la balle.", image: "/artworks/ffbb_6.jpg" },
      { id: "ar7", title: "NX Wemby", subject: "Basket", text: "La formation, les Ligues, le maillot bleu.", image: "/artworks/ffbb_7.jpg" },
      { id: "ar8", title: "NX Ovni", subject: "Basket", text: "Les médailles, les sélections, l'impact mondial.", image: "/artworks/ffbb_8.jpg" },
      { id: "ar9", title: "NX T.Parker", subject: "Basket", text: "L'esprit d'équipe, le pick and roll, la défense.", image: "/artworks/ffbb_9.jpg", hc: true },
      { id: "ar10", title: "NX TP vs TP", subject: "Basket", text: "La conclusion, le buzzer beater, la victoire collective.", image: "/artworks/ffbb_10.jpg" },
      { id: "ar11", title: "NX Champions 25", subject: "Club", text: "Champion 2025. La capitale s'impose sur les parquets.", image: "/artworks/paris_basket_1.jpg", hc: true },
      { id: "ar12", title: "NX PB Triomphe", subject: "Club", text: "L'identité visuelle du club de la Ville Lumière.", image: "/artworks/paris_basket_2.jpg", hc: true },
      { id: "ar13", title: "NX PB Sneakers", subject: "Club", text: "Le roster qui a ramené le titre à Paris.", image: "/artworks/paris_basket_3.jpg", hc: true },
      { id: "ar14", title: "PFL", subject: "Arts Martiaux", text: "Professional Fighters League. Francis Ngannou, The Predator, Champion Poids Lourd.", image: "/artworks/pfl_1.jpg", hc: true },
      { id: "ar15", title: "UFC", subject: "Arts Martiaux", text: "Tom Aspinall, Team Kaobon, BJJ, Boxing. La suprématie du Royaume-Uni.", image: "/artworks/ufc_1.jpg", hc: true },
      { id: "ar16", title: "La Couronne", subject: "Boxe", text: "La couronne de Bud. WBO, WBA, WBC, IBF. L'unification absolue.", image: "/artworks/crawford.jpg" },
      { id: "ar17", title: "L'Étoile du PSG", subject: "Club de Football", text: "L'effectif 2024/2025 gravé dans l'étoile. Enrique, Marquinhos, Barcola, Dembele.", image: "/artworks/psg_1.jpg", hc: true },
      { id: "ar18", title: "Le Cadratin", subject: "Rugby", text: "La course folle du Top 14, forgée par les noms des clubs et instances.", image: "/artworks/rugby_1.jpg" },
      { id: "ar19", title: "Jour de gloire", subject: "Rugby", text: "L'ombre du joueur façonnée par les chiffres de la Coupe du Monde 2023.", image: "/artworks/rugby_2.jpg" },
      { id: "ar20", title: "Le Ballon Ovale", subject: "Rugby", text: "L'essence du jeu encapsulée dans la typographie du tournoi mondial.", image: "/artworks/rugby_3.jpg" },
      { id: "ar21", title: "Le Trophée Webb Ellis", subject: "Rugby", text: "Le Graal du rugby, taillé dans les mots de la Coupe du Monde.", image: "/artworks/rugby_4.jpg" },
      { id: "ar21_1", title: "Fly Emirates F1", subject: "Course Automobile", text: "L'aérodynamisme taillé dans le texte, l'alliance de la vitesse et de la puissance.", image: "/artworks/emirates_f1.jpg", hc: true },
      { id: "ar22", title: "La Puissance Pure", subject: "Cyclisme", text: "La puissance pure. L'arc-en-ciel sur les routes, la domination d'un champion hors norme.", image: "/artworks/sport_8.jpg", hc: true },
      { id: "ar23", title: "L'Échappé", subject: "Cyclisme", text: "Le solitaire de l'avant, l'effort unique façonné par les Human Values.", image: "/artworks/sport_10.jpg" },
      { id: "ar24", title: "Le Groupetto", subject: "Cyclisme", text: "La solidarité dans l'effort. L'union fait la force face à la montagne.", image: "/artworks/sport_11.jpg" },
      { id: "ar25", title: "Le Peloton", subject: "Cyclisme", text: "La meute humaine au pied de la Tour Eiffel. La cohésion du Tour de France.", image: "/artworks/sport_12.jpg" },
      { id: "ar26", title: "NX Snowboarder", subject: "Sports d'Hiver", text: "L'envol blanc. La glisse extrême taillée dans les Human Values.", image: "/artworks/sport_13.jpg" },
      { id: "ar27", title: "Le Roi de la Terre", subject: "Tennis", text: "La Fondation. 14 titres à Roland Garros, le roi incontesté de la terre battue.", image: "/artworks/sport_9.jpg", hc: true },
      { id: "ar28", title: "NX Jumpman 23", subject: "Basket & Légende", text: "His Airness. Le GOAT absolu sculpté par ses records et ses Final MVPs.", image: "/artworks/sport_14.jpg" },
      { id: "ar29", title: "L'Échec et Mat", subject: "Jeux d'Esprit", text: "Les rois face à face, sculptés par la stratégie et l'anticipation de 2025.", image: "/artworks/jeu_1.jpg" },
      { id: "ar30", title: "L'Échiquier des Valeurs", subject: "Jeux d'Esprit", text: "Toutes les pièces maîtresses façonnées par les Human Values.", image: "/artworks/jeu_2.jpg" },
      { id: "ar31", title: "Le Carré d'As", subject: "Jeux d'Esprit", text: "Résistance, Discipline, Réflexion, Individuel. Les quatre atouts dans la manche.", image: "/artworks/jeu_3.jpg" }
    ]
  },
  {
    id: "edifice",
    title: "L'Édifice",
    color: "#F57C00", // Jaune Orangé
    description: "La transmission, les valeurs humaines, l'inclusion, la chaleur du groupe.",
    artworks: [
      { id: "fo_logo", title: "L'Emblème 2025", subject: "Collection HumanValues", text: "Le flambeau de la liberté hissé par les mots. L'icône fondatrice de la collection artistique 2025.", image: "/artworks/flambeau_hv.jpg" },
      { id: "fo16", title: "L'Accord Inclusif", subject: "UNESCO X Inclusion", text: "La poignée de main universelle. Diversité, autisme, soutien aux aînés et valeurs partagées à l'échelle mondiale.", image: "/artworks/concept_unesco.jpg" },
      { id: "fo17", title: "Ivry S/Seine", subject: "Territoire & Inclusion", text: "L'identité de la ville tissée par les mots de l'inclusion, du handicap et de la solidarité. Hommage à Philippe Bouyssou.", image: "/artworks/ivry_inclusion.jpg", hc: true },
      { id: "fo1", title: "Logo PMR", subject: "FFBB X Inclusion", text: "L'empathie, la solidarité, l'humanité. Le handicap visible et invisible.", image: "/artworks/inclusion_1.jpg", hc: true },
      { id: "fo3", title: "Nadir Hifi", subject: "Paris Basket X Inclusion", text: "La silhouette typographique. Ensemble, l'égalité des chances.", image: "/artworks/inclusion_3.jpg", hc: true },
      { id: "fo4", title: "Caisse d'Épargne", subject: "Institution & Valeurs", text: "L'écureuil rouge. Égalité des chances, inclusion, handicap visible et invisible.", image: "/artworks/corp_1.jpg", hc: true },
      { id: "fo5", title: "BNP Paribas", subject: "Institution & Valeurs", text: "Les étoiles vertes. Solidarité, bienveillance, énergies positives et soutien.", image: "/artworks/corp_2.jpg", hc: true },
      { id: "fo6", title: "CIC", subject: "Institution & Valeurs", text: "Construisons dans un monde qui bouge. Valeurs humaines et respect.", image: "/artworks/corp_3.jpg", hc: true },
      { id: "fo7", title: "La Poste", subject: "Institution & Valeurs", text: "Le lien humain. La poignée de main façonnée par l'inclusion et la fraternité.", image: "/artworks/corp_4.jpg", hc: true },
      { id: "fo8", title: "Carrefour", subject: "Institution & Valeurs", text: "Le grand croisement. L'inclusion au cœur de la distribution.", image: "/artworks/corp_5.jpg", hc: true },
      { id: "fo9", title: "RATP", subject: "Institution & Valeurs", text: "La mobilité pour tous. Le visage de l'intégration tracé par la ligne bleue.", image: "/artworks/corp_6.jpg", hc: true },
      { id: "fo13", title: "Groupe Dubreuil", subject: "Institution & Valeurs", text: "L'envol inclusif. Le mécénat et l'autonomie gravés dans l'oiseau solaire.", image: "/artworks/corp_7.jpg", hc: true },
      { id: "fo14", title: "Les Jardins d'Arcadie", subject: "Institution & Valeurs", text: "L'arbre protecteur. L'accompagnement, la sérénité et le bien-être des seniors.", image: "/artworks/corp_8.jpg", hc: true },
      { id: "fo15", title: "Swiss", subject: "Institution & Valeurs", text: "L'empennage solidaire. La croix helvétique façonnée par l'inclusion et la transmission.", image: "/artworks/corp_9.jpg", hc: true },
      { id: "fo10", title: "Le Coq FFF", subject: "LFP X Inclusion", text: "L'emblème tricolore. Diversité, mécénat et humilité sur le terrain.", image: "/artworks/sport_5.jpg", hc: true },
      { id: "fo11", title: "Ligue de Football", subject: "LFP X Inclusion", text: "Le championnat professionnel porté par les valeurs saines et le cécifoot.", image: "/artworks/sport_6.jpg", hc: true },
      { id: "fo12", title: "Bondy Cécifoot Club", subject: "Club X Inclusion", text: "L'emblème du serpent. Déficience visuelle, transmission et solidarité sur le terrain.", image: "/artworks/sport_7.jpg", hc: true },
      { id: "lan1", title: "L'Accord Parfait", subject: "Signe OK", text: "Le respect et le partage tissent le langage universel de l'approbation.", image: "/artworks/hands_echo_ok.jpg" },
      { id: "lan2", title: "L'Amour Universel", subject: "Cœur", text: "Handicap et inclusion s'entrelacent pour former le symbole absolu.", image: "/artworks/hands_echo_heart.jpg" },
      { id: "fo18", title: "La Ligue", subject: "Ligue Contre le Cancer", text: "Le maillot solidaire tissé par le soutien, les bénévoles et l'espoir face à la maladie.", image: "/artworks/ligue_cancer.jpg", hc: true }
    ]
  },
  {
    id: "nexus-netflix",
    title: "Nexus Netflix",
    color: "#E50914", // Rouge Netflix
    description: "Le catalogue mondial, l'histoire et les fondateurs gravés dans les lettres de la légende.",
    artworks: [
      { id: "nx1", title: "N", subject: "Séries & Origines", text: "1997. Los Gatos. L'amorce de la révolution du divertissement.", image: "/artworks/nexus_netflix_n.jpg", hc: true },
      { id: "nx2", title: "E", subject: "Séries & Origines", text: "Reed Hastings, l'architecte du binge-watching mondial.", image: "/artworks/nexus_netflix_e.jpg", hc: true },
      { id: "nx3", title: "T", subject: "Séries & Origines", text: "Le temps de l'innocence révolu, The Social Network, Squid Game...", image: "/artworks/nexus_netflix_t.jpg", hc: true },
      { id: "nx4", title: "F", subject: "Séries & Origines", text: "Marc Randolph, l'autre visage de la fondation.", image: "/artworks/nexus_netflix_f.jpg", hc: true },
      { id: "nx5", title: "L", subject: "Séries & Origines", text: "Ted Sarandos. Le Seigneur de Bombay à Brooklyn.", image: "/artworks/nexus_netflix_l.jpg", hc: true },
      { id: "nx6", title: "I", subject: "Séries & Origines", text: "The Irishman. L'empreinte indélébile du N rouge dans le cinéma.", image: "/artworks/nexus_netflix_i.jpg", hc: true },
      { id: "nx7", title: "X", subject: "Séries & Origines", text: "Greg Peters. Le point d'orgue d'un empire qui a changé nos vies.", image: "/artworks/nexus_netflix_x.jpg", hc: true }
    ]
  },
  {
    id: "nexus-stade-rochelais",
    title: "Nexus Stade Rochelais",
    color: "#FFDD00", // Jaune Stade Rochelais
    description: "Les champions d'Europe. Le territoire et le blason sculptés par ceux qui les défendent.",
    artworks: [
      { id: "nxr1", title: "Charente-Maritime", subject: "Stade Rochelais", text: "Le 17. Le département dessiné par les noms de ses fiers corsaires.", image: "/artworks/hands_echo_1.jpg", hc: true },
      { id: "nxr2", title: "La Caravelle", subject: "Stade Rochelais", text: "Le logo historique sculpté par l'effectif maritime champion d'Europe.", image: "/artworks/hands_echo_2.jpg", hc: true },
      { id: "nxr3", title: "Charente-Maritime (Or)", subject: "Stade Rochelais", text: "Le 17. Le département dessiné par les noms de ses fiers corsaires sur fond or.", image: "/artworks/rochelais_map_1.jpg", hc: true },
      { id: "nxr4", title: "La Caravelle (Or)", subject: "Stade Rochelais", text: "Le logo historique sculpté par l'effectif maritime champion d'Europe sur fond or.", image: "/artworks/rochelais_caravelle_1.jpg", hc: true },
      { id: "nxr5", title: "Charente-Maritime (Noir)", subject: "Stade Rochelais", text: "Le département façonné par les noms, incrusté de noir profond.", image: "/artworks/rochelais_map_2.jpg", hc: true },
      { id: "nxr6", title: "La Caravelle (Noir)", subject: "Stade Rochelais", text: "L'emblème du club et l'héritage européen en noir intense.", image: "/artworks/rochelais_caravelle_2.jpg", hc: true }
    ]
  },
  {
    id: "nexus-messi",
    title: "Nexus Messi",
    color: "#E53935", // Rouge
    description: "L'icône absolue. Le génie argentin décliné sous ses trois maillots historiques.",
    artworks: [
      { id: "nxm1", title: "Messi (Miami)", subject: "Inter Miami", text: "MAGIC, EFFICIENCY, STILLNESS. Le génie argentin sous les couleurs de la Floride.", image: "/artworks/messi_miami.jpg", hc: true },
      { id: "nxm2", title: "Messi (Barcelone)", subject: "FC Barcelone", text: "SHARPNESS, IMMORTAL. La légende absolue sculptée aux couleurs du Camp Nou.", image: "/artworks/messi_fcb.jpg", hc: true },
      { id: "nxm3", title: "Messi (Argentine)", subject: "AFA", text: "L'immortalité dorée. La consécration ultime avec l'Albiceleste.", image: "/artworks/messi_afa.jpg", hc: true }
    ]
  }
];

const Galerie = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash.replace('#', ''));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 150);
    }
  }, [hash]);

  return (
    <div className="container" style={{ maxWidth: '1400px', margin: '0 auto', paddingBottom: '10vh' }}>
      <header style={{ marginBottom: '6rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: '3.5rem', fontWeight: 'bold' }}>Le Registre</h1>
        <p style={{ fontStyle: 'italic', fontSize: '1.2rem', color: 'var(--hv-grey)', marginBottom: '1.5rem' }}>
          Entrez dans le Registre. 235 œuvres, 11 Ailes, une seule maison culturelle.
        </p>
        
      </header>

      {/* NAVIGATION INTERNE (ANCRES) STICKY */}
      <nav style={{
        position: 'sticky', top: '0', backgroundColor: 'rgba(255, 255, 255, 0.95)', 
        padding: '1.5rem 0', borderBottom: '1px solid var(--hv-light-grey)', zIndex: 100,
        marginBottom: '6rem', display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '2rem',
        boxShadow: '0 4px 20px rgba(0,0,0,0.05)'
      }}>
        {ailes.map(aile => (
          <a key={aile.id} href={`#${aile.id}`} style={{
            fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '1.5px', 
            fontWeight: '600', color: aile.color, textDecoration: 'none', borderBottom: `2px solid transparent`,
            transition: 'border-color 0.3s'
          }}
          onMouseOver={(e) => e.currentTarget.style.borderBottom = `2px solid ${aile.color}`}
          onMouseOut={(e) => e.currentTarget.style.borderBottom = `2px solid transparent`}
          >
            {aile.title}
          </a>
        ))}
      </nav>

      {/* LES 6 AILES */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10rem' }}>
        {ailes.map((aile, index) => (
          <section key={aile.id} id={aile.id} style={{ scrollMarginTop: '120px' }}>
            
            {/* EN-TÊTE DE L'AILE */}
            <div style={{ 
              borderLeft: `8px solid ${aile.color}`, 
              paddingLeft: '2rem', marginBottom: '5rem' 
            }}>
              <h2 style={{ fontSize: '3.5rem', margin: '0', color: 'var(--hv-black)', letterSpacing: '-1px' }}>{aile.title}</h2>
              <p style={{ fontSize: '1.3rem', color: 'var(--hv-grey)', fontStyle: 'italic', marginTop: '1rem', maxWidth: '800px' }}>
                {aile.description}
              </p>
            </div>

            {/* GRILLE DES ŒUVRES */}
            <div className="galerie-grid">
              {aile.artworks.map((art, idx) => (
                <div key={art.id} className={`animate-fade-in-up delay-${(idx % 5) * 100 + 100}`} style={{ 
                  display: 'flex', flexDirection: 'column', 
                  marginTop: idx % 2 === 1 ? '4rem' : '0' // Effet asymétrique pour casser la grille
                }}>
                  <div style={{ 
                    height: '500px', backgroundColor: 'var(--hv-cream)', 
                    marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    borderBottom: `3px solid ${aile.color}`, overflow: 'hidden',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.03)',
                    transition: 'transform 0.3s ease',
                    cursor: 'pointer'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                  onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                  >
                    {art.image ? (
                      <img src={art.image} alt={art.subject} loading="lazy" style={{ width: '90%', height: '90%', objectFit: 'contain' }} />
                    ) : (
                      <span style={{ color: 'var(--hv-grey)', fontSize: '0.85rem', textTransform: 'uppercase', textAlign: 'center', padding: '1rem' }}>
                        [ Visuel : {art.subject} ]
                      </span>
                    )}
                  </div>
                  <h3 style={{ fontSize: '1.6rem', marginBottom: '0.5rem', fontWeight: '700' }}>{art.title}</h3>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                    <span style={{ 
                      fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '1px', 
                      backgroundColor: aile.color, color: 'white', padding: '0.2rem 0.6rem', borderRadius: '4px' 
                    }}>
                      {art.subject}
                    </span>
                    {art.hc && (
                      <span style={{ 
                        fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '1px', 
                        backgroundColor: 'transparent', color: 'var(--hv-grey)', border: '1px solid #ccc',
                        padding: '0.1rem 0.4rem', borderRadius: '4px', fontWeight: 'bold' 
                      }} title="Hors Commerce - Prestation B2B">
                        H.C.
                      </span>
                    )}
                  </div>
                  <p style={{ fontSize: '1rem', color: 'var(--hv-grey)', lineHeight: '1.6' }}>{art.text}</p>
                </div>
              ))}
            </div>

          </section>
        ))}
      </div>
      
      {/* APPEL À L'ACTION PLEXIGLAS */}
      <div style={{ textAlign: 'center', marginTop: '12rem', borderTop: '1px solid var(--hv-light-grey)', paddingTop: '6rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', marginBottom: '4rem' }}>
          <div style={{ 
            padding: '0.8rem 1.5rem', border: '1px solid var(--hv-light-grey)', 
            borderRadius: '4px', backgroundColor: 'var(--hv-cream)', fontSize: '0.85rem', color: 'var(--hv-grey)',
            textAlign: 'left', maxWidth: '800px'
          }}>
            <strong>Note :</strong> Les pièces estampillées <strong>H.C. (Hors Commerce)</strong> illustrent notre savoir-faire en matière de R&D et d'Inclusion institutionnelle.<br/>Ces études de style représentent des prestations de services B2B et ne sont pas disponibles à l'acquisition publique.
          </div>
          
          <div style={{ 
            padding: '0.8rem 1.5rem', border: '1px solid #C25939', 
            borderRadius: '4px', backgroundColor: '#fffdfa', fontSize: '0.85rem', color: '#a64526',
            textAlign: 'left', maxWidth: '800px'
          }}>
            <strong>⭐ Solidarité & Mécénat :</strong> Pour toute acquisition d'une œuvre signalée par une étoile jaune, <strong>20% des revenus</strong> sont automatiquement reversés à nos partenaires caritatifs (JC Skarbowsky Gym, Fondation ELA).
          </div>
        </div>

        <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Acquérir une œuvre – Tirage d'art exclusif</h3>
        <p style={{ fontSize: '1.1rem', marginBottom: '2.5rem', color: 'var(--hv-grey)' }}>Chaque pièce du Registre peut devenir une pièce de votre collection (Plexiglas Premium).</p>
        <a href="/collections" className="btn-accent" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>
          → Accéder à la Salle des Acquisitions
        </a>
      </div>
    </div>
  );
};

export default Galerie;
