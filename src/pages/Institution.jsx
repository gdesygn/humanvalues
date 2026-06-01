import React from 'react';

const Institution = () => {
  return (
    <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', paddingBottom: '10vh' }}>
      <header style={{ marginBottom: '4rem', textAlign: 'center' }}>
        <h1>HumanValues HV</h1>
        <p style={{ fontStyle: 'italic', fontSize: '1.2rem', color: 'var(--hv-grey)' }}>
          "L'exigence comme seul laissez-passer."
        </p>

        {/* Executive summary */}
        <div style={{ maxWidth: '800px', margin: '2rem auto 0 auto', padding: '1.5rem', backgroundColor: '#f9f9f9', border: '1px solid #eee', textAlign: 'left' }}>
          <p style={{ margin: '0', fontSize: '1.05rem', lineHeight: '1.6', fontWeight: '500' }}>
            HumanValues HV est aujourd'hui reconnu et sollicité par des acteurs institutionnels majeurs.<br/>
            Notre engagement en faveur d'une inclusion exigeante – par le sport, la culture et le récit – a éveillé l'intérêt de décideurs internationaux.
          </p>
        </div>
      </header>

      {/* Bandeau de contexte vers autres pages */}
      <div style={{ maxWidth: '800px', margin: '0 auto 4rem auto', backgroundColor: 'var(--hv-cream)', border: '1px solid var(--hv-light-grey)', padding: '1.5rem', textAlign: 'center' }}>
        <p style={{ margin: '0 0 0.5rem 0' }}>
          🏛️ <strong>Découvrir notre charte fondatrice</strong> → <a href="/collectif" style={{ color: 'var(--hv-accent)', textDecoration: 'underline' }}>Le Conseil des Nexus</a>
        </p>
        <p style={{ margin: 0 }}>
          📖 <strong>Lire le manifeste</strong> → <a href="/nexus" style={{ color: 'var(--hv-accent)', textDecoration: 'underline' }}>Transmission & Inclusion</a>
        </p>
      </div>

      {/* Section UNESCO + CIC */}
      <section className="nexus-reading" style={{ marginBottom: '4rem' }}>
        <h2 style={{ fontSize: '1.8rem', borderBottom: '1px solid var(--hv-light-grey)', paddingBottom: '1rem', marginBottom: '2rem' }}>Le poids des actes</h2>
        <p style={{ marginBottom: '2rem' }}>
          HumanValues s'inscrit au cœur des décisions institutionnelles majeures. Voici ce que nos partenaires ont rendu possible :
        </p>

        <ul style={{ listStyleType: 'none', padding: 0, margin: '0 0 3rem 0' }}>
          <li style={{ marginBottom: '1rem', paddingLeft: '1.5rem', position: 'relative' }}>
            <span style={{ position: 'absolute', left: 0, color: 'var(--hv-accent)' }}>•</span>
            <strong>Reconnaissance internationale</strong> – Invitation à contribuer aux travaux de cercles de réflexion de l'UNESCO sur l'inclusion et l'accessibilité culturelle.
          </li>
          <li style={{ marginBottom: '1rem', paddingLeft: '1.5rem', position: 'relative' }}>
            <span style={{ position: 'absolute', left: 0, color: 'var(--hv-accent)' }}>•</span>
            <strong>Partenariats bancaires et territoriaux</strong> – Raphaël Rébert (CIC-Crédit Mutuel) : échanges et construction de ponts entre sport, art et inclusion.
          </li>
          <li style={{ marginBottom: '1rem', paddingLeft: '1.5rem', position: 'relative' }}>
            <span style={{ position: 'absolute', left: 0, color: 'var(--hv-accent)' }}>•</span>
            <strong>Clubs sportifs engagés</strong> – Stade Français Rugby (Thomas Lombard) & Bondy Cécifoot Club : actions concrètes pour l'inclusion par le sport de haut niveau.
          </li>
          <li style={{ marginBottom: '1rem', paddingLeft: '1.5rem', position: 'relative' }}>
            <span style={{ position: 'absolute', left: 0, color: 'var(--hv-accent)' }}>•</span>
            <strong>Figures des sports de combat</strong> – Fernand Lopez, Greg MMA, Karaté Bushido : des noms majeurs qui ancrent discipline et respect au cœur de HV.
          </li>
        </ul>
      </section>

      {/* Galerie photos avec légendes */}
      <section style={{ marginBottom: '6rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          
          <figure style={{ margin: 0 }}>
            <div style={{ borderRadius: '8px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', marginBottom: '1rem', backgroundColor: '#fafafa', display: 'flex', justifyContent: 'center' }}>
              <img src="/artworks/unesco_lego.jpg" alt="Détail UNESCO" style={{ width: '100%', height: 'auto', display: 'block' }} />
            </div>
            <figcaption style={{ fontSize: '0.85rem', color: '#666', fontStyle: 'italic', textAlign: 'center' }}>
              3 Décembre 2024 – International Day of Persons with Disabilities / Group of Friends for Inclusion and Disability to UNESCO
            </figcaption>
          </figure>

          <figure style={{ margin: 0 }}>
            <div style={{ borderRadius: '8px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', marginBottom: '1rem', backgroundColor: '#fafafa', display: 'flex', justifyContent: 'center' }}>
              <img src="/artworks/unesco_1.jpg" alt="Délégation UNESCO" style={{ width: '100%', height: 'auto', display: 'block' }} />
            </div>
            <figcaption style={{ fontSize: '0.85rem', color: '#666', fontStyle: 'italic', textAlign: 'center' }}>
              Présentation du Concept L'Echo des Mains aux décideurs institutionnels
            </figcaption>
          </figure>

          <figure style={{ margin: 0 }}>
            <div style={{ borderRadius: '8px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', marginBottom: '1rem', backgroundColor: '#fafafa', display: 'flex', justifyContent: 'center' }}>
              <img src="/artworks/bank_boss.jpg" alt="Raphaël Rebert CIC" style={{ width: '100%', height: 'auto', display: 'block' }} />
            </div>
            <figcaption style={{ fontSize: '0.85rem', color: '#666', fontStyle: 'italic', textAlign: 'center' }}>
              Raphaël Rébert (CIC-Crédit Mutuel) – Échanges et partage de projets d'inclusion
            </figcaption>
          </figure>

          <figure style={{ margin: 0 }}>
            <div style={{ borderRadius: '8px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', marginBottom: '1rem', backgroundColor: '#fafafa', display: 'flex', justifyContent: 'center' }}>
              <img src="/artworks/greg_mma.jpg" alt="Greg MMA et Karaté Bushido" style={{ width: '100%', height: 'auto', display: 'block' }} />
            </div>
            <figcaption style={{ fontSize: '0.85rem', color: '#666', fontStyle: 'italic', textAlign: 'center' }}>
              Greg MMA & Karaté Bushido – Le soutien des grands noms des sports de combat
            </figcaption>
          </figure>

          <figure style={{ margin: 0 }}>
            <div style={{ borderRadius: '8px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', marginBottom: '1rem', backgroundColor: '#fafafa', display: 'flex', justifyContent: 'center' }}>
              <img src="/artworks/thomas_lombard.jpg" alt="Thomas Lombard - Stade Français" style={{ width: '100%', height: 'auto', display: 'block' }} />
            </div>
            <figcaption style={{ fontSize: '0.85rem', color: '#666', fontStyle: 'italic', textAlign: 'center' }}>
              Thomas Lombard (Stade Français Rugby) – Synergies pour l'inclusion par le sport de haut niveau
            </figcaption>
          </figure>

          <figure style={{ margin: 0 }}>
            <div style={{ borderRadius: '8px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', marginBottom: '1rem', backgroundColor: '#fafafa', display: 'flex', justifyContent: 'center' }}>
              <img src="/artworks/fernand_lopez.jpg" alt="Fernand Lopez - MMA Factory" style={{ width: '100%', height: 'auto', display: 'block' }} />
            </div>
            <figcaption style={{ fontSize: '0.85rem', color: '#666', fontStyle: 'italic', textAlign: 'center' }}>
              Fernand Lopez (Head Coach MMA Factory) – Transmettre l'excellence et la discipline
            </figcaption>
          </figure>

        </div>
      </section>

      {/* Bande thématique */}
      <section style={{ marginBottom: '5rem', padding: '3rem 0', borderTop: '1px solid #eee', borderBottom: '1px solid #eee', textAlign: 'center' }}>
        <p style={{ fontSize: '0.9rem', color: '#999', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '2rem' }}>HumanValues HV dialogue et conseille :</p>
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '2rem', alignItems: 'center', fontFamily: 'Playfair Display', fontSize: '1.4rem', fontWeight: 'bold', color: 'var(--hv-black)' }}>
          <span style={{ transition: 'color 0.3s', cursor: 'default' }}>Instances internationales (UNESCO)</span>
          <span style={{ color: 'var(--hv-accent)' }}>•</span>
          <span style={{ transition: 'color 0.3s', cursor: 'default' }}>Institutions & collectivités</span>
          <span style={{ color: 'var(--hv-accent)' }}>•</span>
          <span style={{ transition: 'color 0.3s', cursor: 'default' }}>Clubs & médias sportifs de haut niveau</span>
        </div>
      </section>

      {/* Section Licences */}
      <section className="nexus-reading" style={{ marginBottom: '4rem' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Déployer un Nexus – Licence & protocole pédagogique</h2>
        
        <p style={{ marginBottom: '1.5rem' }}>
          La propriété intellectuelle des Nexus et du protocole éducatif associé est disponible sous licence.
        </p>

        <p style={{ marginBottom: '1.5rem', fontWeight: '500' }}>
          Écoles, musées, fédérations sportives, municipalités :<br/>
          transformez le récit en outil pédagogique et social.
        </p>

        <p style={{ fontStyle: 'italic', fontSize: '0.85rem', color: '#888' }}>
          HumanValues HV est une marque déposée (INPI).
        </p>
      </section>

      {/* Zone conversion partenaire */}
      <div style={{ textAlign: 'center', backgroundColor: '#f8f8f8', padding: '3rem', border: '1px solid #333' }}>
        <p style={{ fontWeight: 'bold', fontSize: '1.2rem', marginBottom: '1.5rem', color: 'var(--hv-black)' }}>
          Vous représentez une institution ?
        </p>
        <button 
          className="btn-accent" 
          onClick={() => window.location.href = "mailto:partenaires@humanvalues.fr?subject=Partenariat%20HV"}
        >
          🤝 Devenons partenaires d'un récit qui compte. Contactez le Conseil des Nexus.
        </button>
      </div>

      <footer style={{ textAlign: 'center', marginTop: '4rem', fontSize: '0.9rem', color: '#888' }}>
        HumanValues HV – Maison culturelle des récits universels<br/>
        <span style={{ fontStyle: 'italic' }}>Des récits pour relier ce qui compte</span>
      </footer>
    </div>
  );
};

export default Institution;
