import React from 'react';

const Legal = () => {
  return (
    <div className="container animate-fade-in-up" style={{ maxWidth: '800px', margin: '4rem auto', padding: '0 2rem', minHeight: '60vh' }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '0.5rem', borderBottom: '2px solid var(--hv-light-grey)', paddingBottom: '1rem', fontFamily: 'var(--font-title, Playfair Display)', color: 'var(--hv-black)' }}>
        HumanValues – Mentions Légales
      </h1>
      <p style={{ fontStyle: 'italic', color: 'var(--hv-grey)', marginBottom: '3rem', fontSize: '1.1rem' }}>
        HumanValues – Maison culturelle des récits universels
      </p>
      
      <div style={{ fontSize: '1.1rem', color: 'var(--hv-grey)', lineHeight: '1.8' }}>
        
        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.8rem', color: 'var(--hv-black)', marginBottom: '1.5rem', fontFamily: 'var(--font-title, Playfair Display)' }}>1. Édition du site</h2>
          <p style={{ marginBottom: '0.5rem' }}><strong>HumanValues</strong><br/>Maison culturelle des récits universels</p>
          <p style={{ marginBottom: '0.5rem' }}><strong>Directeur de publication :</strong><br/>Le Conseil des Nexus (représenté par le fondateur de HumanValues)</p>
          <p style={{ marginBottom: '0.5rem' }}><strong>Siège social :</strong><br/>déclaré au siège du Conseil des Nexus</p>
          <p style={{ marginBottom: '0.5rem' }}><strong>Contact :</strong><br/>Email : contact@humanvalues.fr</p>
          <p><strong>Hébergement :</strong><br/>Vercel Inc.<br/>340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis<br/><a href="https://vercel.com" target="_blank" rel="noopener noreferrer" style={{color: 'var(--hv-accent)', textDecoration: 'underline'}}>https://vercel.com</a></p>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.8rem', color: 'var(--hv-black)', marginBottom: '1.5rem', fontFamily: 'var(--font-title, Playfair Display)' }}>2. Propriété intellectuelle</h2>
          <p style={{ marginBottom: '1rem' }}>HumanValues, HV, Nexus narratifs, Code HG, CCOCCO, le système de nomenclature HG-XXX-XXX-X, ainsi que l'ensemble des œuvres, textes, visuels et archives présents sur le site humanvalues.art sont la propriété exclusive de HumanValues.</p>
          <p style={{ marginBottom: '1rem' }}><strong>Dépôt INPI :</strong> HumanValues est une marque déposée.</p>
          <p style={{ marginBottom: '1rem' }}>Toute reproduction, distribution, modification, adaptation ou exploitation partielle ou totale des contenus, sous quelque forme que ce soit, est interdite sans autorisation écrite préalable du Conseil des Nexus.</p>
          <p>Les œuvres estampillées <strong>H.C. (Hors Commerce)</strong> sont des études de style destinées à illustrer le savoir-faire de la Maison Culturelle. Elles ne sont pas disponibles à l’acquisition publique.</p>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.8rem', color: 'var(--hv-black)', marginBottom: '1.5rem', fontFamily: 'var(--font-title, Playfair Display)' }}>3. Paiement et livraison</h2>
          <p style={{ marginBottom: '1rem' }}>Les acquisitions de dossiers Nexus s’effectuent via la plateforme sécurisée Lemon Squeezy (ou Stripe). HumanValues ne manipule ni ne stocke aucune donnée bancaire.</p>
          <p style={{ marginBottom: '1rem' }}>Le paiement est exigible à la commande. Le dossier Nexus est livré par voie électronique (téléchargement sécurisé) dans les minutes suivant la confirmation du paiement.</p>
          <p><strong>Droit de rétractation :</strong> Conformément à l’article L221-28 du Code de la consommation, les produits numériques ne font l’objet d’aucun droit de rétractation dès lors que leur exécution a commencé avec votre accord et que vous avez renoncé expressément à ce droit. En téléchargeant le dossier, vous acceptez ces conditions.</p>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.8rem', color: 'var(--hv-black)', marginBottom: '1.5rem', fontFamily: 'var(--font-title, Playfair Display)' }}>4. Responsabilité</h2>
          <p style={{ marginBottom: '1rem' }}>HumanValues met tout en œuvre pour assurer l’exactitude des informations diffusées sur le site. Toutefois, des erreurs ou omissions involontaires peuvent survenir.</p>
          <p style={{ marginBottom: '1rem' }}>HumanValues ne saurait être tenu responsable des dommages directs ou indirects résultant de l’utilisation du site ou de l’impossibilité d’y accéder.</p>
          <p>Les liens hypertextes éventuels vers des sites tiers n’engagent pas la responsabilité de HumanValues.</p>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.8rem', color: 'var(--hv-black)', marginBottom: '1.5rem', fontFamily: 'var(--font-title, Playfair Display)' }}>5. Sécurité et confidentialité</h2>
          <p style={{ marginBottom: '1rem' }}>Aucune donnée personnelle n’est collectée sans votre consentement explicite. Les seules informations traitées sont celles nécessaires à la gestion des commandes (nom, email) via Lemon Squeezy.</p>
          <p style={{ marginBottom: '1rem' }}>Conformément au règlement (UE) 2016/679 (RGPD), vous disposez d’un droit d’accès, de rectification et de suppression des données vous concernant. Pour l’exercer : contact@humanvalues.fr.</p>
          <p>Le site ne dépose pas de cookies publicitaires. Seuls les cookies techniques indispensables à son bon fonctionnement peuvent être utilisés.</p>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.8rem', color: 'var(--hv-black)', marginBottom: '1.5rem', fontFamily: 'var(--font-title, Playfair Display)' }}>6. Droit applicable</h2>
          <p>Les présentes mentions légales sont régies par le droit français.</p>
        </section>

        <div style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid var(--hv-light-grey)', textAlign: 'center', fontSize: '0.95rem' }}>
          <p style={{ marginBottom: '0.5rem', fontStyle: 'italic' }}>Dernière mise à jour : Juin 2026</p>
          <p style={{ fontWeight: '600', color: 'var(--hv-black)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>HumanValues – Maison culturelle des récits universels</p>
          <p style={{ fontStyle: 'italic', color: 'var(--hv-accent)' }}>Des récits pour relier ce qui compte</p>
        </div>
        
      </div>
    </div>
  );
};

export default Legal;
