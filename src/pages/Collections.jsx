import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css'; // S'assurer que le CSS global est chargé

const Collections = () => {
  const handleProductClick = (product) => {
    const urls = {
      nexus1: "mailto:contact@humanvalues.fr?subject=Acquisition%20Dossier%20Nexus%201",
      nexus1_premium: "mailto:contact@humanvalues.fr?subject=Acquisition%20Edition%20Audio%20Nexus%201",
      plexi: "mailto:contact@humanvalues.fr?subject=Acquisition%20Plexiglas"
    };
    
    if (urls[product]) {
      window.location.href = urls[product];
    }
  };

  return (
    <div>
      {/* HERO */}
      <section className="acquisitions-hero" style={{ paddingBottom: '2rem' }}>
        <h1>Salle des Acquisitions</h1>
        <p className="subtitle">Éditions limitées – Tirage certifié HV</p>
        <div className="hero-divider"></div>
        <p className="intro">
          Chaque acquisition soutient le développement de nouveaux Nexus<br/>
          et l'expansion du patrimoine narratif HumanValues.
        </p>
      </section>

      {/* Bandeau de contexte */}
      <div style={{ maxWidth: '800px', margin: '0 auto 4rem auto', backgroundColor: '#f9f9f9', border: '1px solid #eee', padding: '1.5rem', textAlign: 'center' }}>
        <p style={{ margin: '0 0 0.5rem 0', fontWeight: '500' }}>
          📖 <strong>Dossier Nexus #1 – Transmission & Héritage</strong>
        </p>
        <p style={{ margin: 0, fontSize: '0.9rem' }}>
          Découvrir le résumé du contenu → <Link to="/nexus" style={{ color: 'var(--hv-accent)', fontWeight: 'bold', textDecoration: 'underline' }}>Lire le manifeste</Link>
        </p>
      </div>

      {/* GRILLE DES PRODUITS */}
      <section className="acquisitions-grid">
        
        {/* Carte 1 – Dossier Nexus #1 */}
        <div className="acquisition-card">
          <div className="card-media" style={{ position: 'relative' }}>
            <img src="/assets/images/mockup_nexus1_hv.png" alt="Mockup Dossier Nexus 1" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <h3>Dossier Nexus #1<br/><span style={{ fontSize: '1rem', fontWeight: 'normal' }}>Transmission & Héritage</span></h3>
          <p className="description" style={{ marginBottom: '0.5rem' }}>
            Édition numérique complète : récit, valeurs décryptées, code HG, archives.
          </p>
          <p className="description" style={{ fontSize: '0.85rem', color: '#666', fontStyle: 'italic', marginBottom: '1.5rem' }}>
            Format PDF – 16 pages – Immédiat après paiement
          </p>
          <div className="price">19 €</div>
          <button className="btn-primary" onClick={() => handleProductClick('nexus1')}>
            📦 Acquérir l'archive
          </button>
          <p style={{ fontSize: '0.75rem', color: '#888', marginTop: '1rem', fontStyle: 'italic' }}>
            Édition numérique – Tirage non limité, code HG unique
          </p>
        </div>

        {/* Carte 2 – Édition Limitée (PDF + Audio) */}
        <div className="acquisition-card">
          <div className="card-media" style={{ position: 'relative' }}>
            <img src="/assets/images/mockup_audio.png" alt="Mockup Audio Voix et Récit" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            <div style={{
              position: 'absolute',
              top: '0.85rem',
              left: '50%',
              transform: 'translateX(-50%)',
              color: '#FFFFFF',
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.55rem',
              fontWeight: '500',
              letterSpacing: '0.2em',
              textShadow: '0 1px 3px rgba(0,0,0,0.4)',
              pointerEvents: 'none'
            }}>
              HumanValues
            </div>
          </div>
          <h3>Voix & Récit<br/><span style={{ fontSize: '1rem', fontWeight: 'normal' }}>La lecture audio du Nexus #1</span></h3>
          <p className="description" style={{ marginBottom: '0.5rem' }}>
            PDF + enregistrement audio (voix humaine, 15 min).
          </p>
          <p className="description" style={{ fontSize: '0.85rem', color: '#666', fontStyle: 'italic', marginBottom: '0.5rem' }}>
            Fichier MP3 haute définition + certificat numérique de tirage
          </p>
          <p className="description" style={{ fontSize: '0.85rem', color: 'var(--hv-accent)', fontWeight: 'bold', marginBottom: '1.5rem' }}>
            Édition spéciale avec lecture audio immersive.
          </p>
          <div className="price">39 €</div>
          <button className="btn-accent" onClick={() => handleProductClick('nexus1_premium')}>
            🎧 Acquérir l'édition audio
          </button>
        </div>

        {/* Carte 3 – Tirage Plexiglas Premium */}
        <div className="acquisition-card">
          <div className="card-media">
            <img src="/assets/images/mockup_plexi.png" alt="Tirage Plexiglas La terre battue - HumanValues" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <h3>Tirage Plexiglas – "La terre battue"<br/><span style={{ fontSize: '1rem', fontWeight: 'normal' }}>Édition signée XXL – 100x80 cm</span></h3>
          <p className="description" style={{ marginBottom: '0.5rem' }}>
            Tirage d'art sur Plexiglas, dos alu, prêt à accrocher. Format monumental.
          </p>
          <p className="description" style={{ fontSize: '0.85rem', color: '#666', fontStyle: 'italic', marginBottom: '1.5rem' }}>
            Livré avec certificat d'authenticité HV.
          </p>
          <div className="price" style={{ marginBottom: '0.5rem' }}>890 €</div>
          <p style={{ fontSize: '0.85rem', color: '#666', marginBottom: '1.5rem' }}>
            (livraison offerte France par transporteur d'art)
          </p>
          <button className="btn-primary" style={{ backgroundColor: 'transparent', color: 'var(--hv-black)', border: '1px solid var(--hv-black)' }} onClick={() => handleProductClick('plexi')}>
            🖼️ Contacter la galerie
          </button>
          <p style={{ fontSize: '0.85rem', color: '#666', marginTop: '1rem' }}>
            Certificat d'authenticité inclus.
          </p>
        </div>

      </section>

      {/* Infos livraison globales */}
      <div style={{ maxWidth: '800px', margin: '4rem auto', padding: '2rem', borderTop: '1px solid #eee', textAlign: 'center' }}>
        <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '0.5rem' }}>
          🚚 Livraison offerte en France métropolitaine pour toute commande physique.
        </p>
        <p style={{ fontSize: '0.9rem', color: '#666' }}>
          🌍 Pour toute acquisition internationale, <a href="mailto:contact@humanvalues.fr" style={{ color: 'var(--hv-accent)', textDecoration: 'underline' }}>nous contacter</a> avant paiement.
        </p>
      </div>

    </div>
  );
};

export default Collections;
