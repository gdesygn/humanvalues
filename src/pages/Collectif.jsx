import React from 'react';

const Collectif = () => {
  return (
    <div className="container" style={{ maxWidth: '800px', margin: '0 auto', paddingBottom: '4rem' }}>
      <header style={{ marginBottom: '4rem', textAlign: 'center' }}>
        <h1>Le Collectif & Les Valeurs</h1>
        <p style={{ fontStyle: 'italic', fontSize: '1.2rem', color: 'var(--hv-grey)' }}>
          L'institution, la charte et le Conseil des 5.
        </p>
        
        <div style={{ maxWidth: '600px', margin: '2rem auto 0 auto', padding: '1.5rem', backgroundColor: '#f9f9f9', border: '1px solid #eee', textAlign: 'left' }}>
          <p style={{ margin: '0', fontSize: '1rem', lineHeight: '1.5', fontWeight: '500' }}>
            HumanValues est une Maison Culturelle. Depuis 2023, <strong>47 Nexus</strong> ont été validés par notre Conseil.
          </p>
        </div>
      </header>

      <section className="nexus-reading" style={{ marginBottom: '4rem' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>La Charte Fondatrice</h2>
        <p>
          HumanValues (HV) n'est pas une entreprise classique, ni une simple marque. C'est une Maison Culturelle et une Institution Moderne. Notre mission est de bâtir un système narratif mondial reliant les cultures, les sports et les mémoires par le prisme de valeurs humaines universelles.
        </p>
      </section>

      <section className="nexus-reading" style={{ marginBottom: '4rem' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Les 3 Piliers</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem', marginTop: '2rem' }}>
          <div>
            <h3 style={{ fontSize: '1.3rem', color: 'var(--hv-black)', marginBottom: '0.5rem' }}>I. Transmission</h3>
            <p style={{ margin: 0 }}>La transmission n'est pas un don, c'est un relais que l'on accepte de porter. Refuser que l'expérience s'efface. Relier les pionniers d'hier aux acteurs de demain.</p>
          </div>
          <div>
            <h3 style={{ fontSize: '1.3rem', color: 'var(--hv-black)', marginBottom: '0.5rem' }}>II. Résilience</h3>
            <p style={{ margin: 0 }}>Le corps vieillit, la volonté s'affûte. Continuer à avancer est un acte de rébellion silencieuse et magnifique contre la fatalité.</p>
          </div>
          <div>
            <h3 style={{ fontSize: '1.3rem', color: 'var(--hv-black)', marginBottom: '0.5rem' }}>III. Partage</h3>
            <p style={{ margin: 0 }}>Le filet ne sépare pas les hommes, il les réunit. Le terrain n'a pas d'ennemis – seulement des équipiers qu'on ne connaît pas encore. L'adversité s'efface au profit de la communion et de l'inclusion radicale.</p>
          </div>
        </div>
      </section>

      <section className="nexus-reading" style={{ marginBottom: '4rem' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Le Conseil des Nexus</h2>
        <p>
          L'institution est régie par la transparence, la rigueur et l'éthique. Le Conseil, formé de 5 membres issus du monde du sport, de la culture et de l'éducation, valide l'intégration de tout nouveau Nexus au Registre.
        </p>
        <p style={{ fontStyle: 'italic', paddingLeft: '1rem', borderLeft: '3px solid var(--hv-accent)', color: '#555' }}>
          Parmi ses membres : des personnalités issues de fédérations sportives nationales, de clubs formateurs historiques et du monde académique.
        </p>
        <p style={{ marginTop: '1.5rem', fontWeight: 'bold' }}>
          ✅ 47 Nexus validés depuis 2023.
        </p>
      </section>

      <hr style={{ border: 'none', borderTop: '1px solid #eee', margin: '3rem 0' }} />

      <div style={{ textAlign: 'center', backgroundColor: 'var(--hv-cream)', padding: '3rem', border: '1px solid var(--hv-light-grey)' }}>
        <p style={{ fontWeight: 'bold', fontSize: '1.1rem', marginBottom: '1rem' }}>
          Ces valeurs animent chaque Nexus enregistré.
        </p>
        <a href="/nexus" style={{ color: 'var(--hv-accent)', fontWeight: 'bold', textDecoration: 'underline' }}>
          → Découvrir le Registre et activer le code HG
        </a>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '3rem', flexWrap: 'wrap' }}>
          <button 
            className="btn-primary" 
            style={{ backgroundColor: 'transparent', color: 'var(--hv-black)', border: '1px solid var(--hv-black)' }}
            onClick={() => window.location.href = "mailto:contact@humanvalues.fr?subject=Proposer%20un%20Nexus"}
          >
            💬 Proposer un Nexus
          </button>
          <button 
            className="btn-accent" 
            onClick={() => window.location.href = "mailto:contact@humanvalues.fr?subject=Rejoindre%20le%20réseau%20HV"}
          >
            🤝 Rejoindre le réseau HV
          </button>
        </div>
      </div>

      <footer style={{ textAlign: 'center', marginTop: '4rem', fontSize: '0.9rem', color: '#888' }}>
        HumanValues HV – Maison culturelle des récits universels<br/>
        <span style={{ fontStyle: 'italic' }}>Des récits pour relier ce qui compte</span>
      </footer>
    </div>
  );
};

export default Collectif;
