import React from 'react';
import { useLocation } from 'react-router-dom';

const Legal = () => {
  const { pathname } = useLocation();

  let title = "Mentions Légales";
  let content = [];

  if (pathname.includes("cgv")) {
    title = "Conditions Générales de Vente (CGV)";
    content = [
      "1. Préambule : Les présentes conditions régissent les ventes d'œuvres d'art sur le site HumanValues.",
      "2. Produits : Chaque œuvre est imprimée sur Plexiglas Premium avec système d'accroche inclus.",
      "3. Tarifs : Toutes les œuvres de la collection standard sont affichées au prix unique de 890€ TTC.",
      "4. Livraison : L'expédition est assurée par un transporteur spécialisé avec assurance ad valorem.",
      "5. Rétractation : Le délai légal de 14 jours s'applique, hors œuvres personnalisées."
    ];
  } else if (pathname.includes("confidentialite")) {
    title = "Politique de Confidentialité";
    content = [
      "1. Collecte des données : Nous collectons uniquement les informations nécessaires au traitement de vos commandes.",
      "2. Utilisation : Vos données ne seront jamais vendues à des tiers.",
      "3. Sécurité : Toutes les transactions sont chiffrées (certificat SSL) et sécurisées par notre partenaire bancaire.",
      "4. Vos droits : Vous disposez d'un droit d'accès, de modification et de suppression de vos données personnelles (RGPD)."
    ];
  } else {
    title = "Mentions Légales";
    content = [
      "Éditeur du site : HumanValues",
      "Directeur de la publication : Équipe de Direction",
      "Hébergement : Hébergeur Web Sécurisé",
      "Propriété intellectuelle : L'ensemble du contenu (textes, images, œuvres typographiques) est protégé par le droit d'auteur. Toute reproduction sans autorisation est interdite."
    ];
  }

  return (
    <div className="container animate-fade-in-up" style={{ maxWidth: '800px', margin: '4rem auto', padding: '0 2rem', minHeight: '60vh' }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '3rem', borderBottom: '2px solid var(--hv-light-grey)', paddingBottom: '1rem' }}>
        {title}
      </h1>
      
      <div style={{ fontSize: '1.1rem', color: 'var(--hv-grey)', lineHeight: '1.8' }}>
        {content.map((paragraph, idx) => (
          <p key={idx} style={{ marginBottom: '1.5rem' }}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
};

export default Legal;
