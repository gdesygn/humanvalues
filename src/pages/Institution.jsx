import React from 'react';
import { Link } from 'react-router-dom';

const Institution = () => {
  return (
    <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', paddingBottom: '10vh' }}>
      <header style={{ marginBottom: '4rem', textAlign: 'center' }}>
        <h1>HumanValues</h1>
        <p style={{ fontStyle: 'italic', fontSize: '1.2rem', color: 'var(--hv-grey)' }}>
          "L'exigence comme seul laissez-passer."
        </p>

        {/* Executive summary */}
        <div style={{ maxWidth: '800px', margin: '2rem auto 0 auto', padding: '1.5rem', backgroundColor: '#f9f9f9', border: '1px solid #eee', textAlign: 'left' }}>
          <p style={{ margin: '0', fontSize: '1.05rem', lineHeight: '1.6', fontWeight: '500', textAlign: 'center' }}>
            HumanValues présente sa démarche auprès d'acteurs du sport et de la culture.<br/>
            Notre objectif est de sensibiliser le public et les décideurs à une inclusion exigeante par le sport, la culture et le récit.
          </p>
        </div>
      </header>

      {/* Bandeau de contexte vers autres pages */}
      <div style={{ maxWidth: '800px', margin: '0 auto 4rem auto', backgroundColor: 'var(--hv-cream)', border: '1px solid var(--hv-light-grey)', padding: '1.5rem', textAlign: 'center' }}>
        <p style={{ margin: '0 0 0.5rem 0' }}>
          🏛️ <strong>Découvrir notre charte fondatrice</strong> → <Link to="/collectif" style={{ color: 'var(--hv-accent)', textDecoration: 'underline' }}>Le Conseil des Nexus</Link>
        </p>
        <p style={{ margin: 0 }}>
          📖 <strong>Lire le manifeste</strong> → <Link to="/nexus" style={{ color: 'var(--hv-accent)', textDecoration: 'underline' }}>Transmission & Inclusion</Link>
        </p>
      </div>

      {/* Section UNESCO + CIC */}
      <section className="nexus-reading" style={{ marginBottom: '4rem' }}>
        <h2 style={{ fontSize: '1.8rem', borderBottom: '1px solid var(--hv-light-grey)', paddingBottom: '1rem', marginBottom: '2rem', textAlign: 'center' }}>Échanges et Rencontres</h2>
        <p style={{ marginBottom: '2rem', textAlign: 'center' }}>
          HumanValues présente sa vision et échange avec divers acteurs<br/>
          pour promouvoir le sport adapté et l'inclusion :
        </p>

        <ul style={{ listStyleType: 'none', padding: 0, margin: '0 0 3rem 0', textAlign: 'center' }}>
          <li style={{ marginBottom: '1.2rem' }}>
            <strong>• Présentation à l'UNESCO</strong> –<br/>
            Échanges lors de la journée internationale des personnes handicapées<br/>
            concernant l'inclusion et l'accessibilité.
          </li>
          <li style={{ marginBottom: '1.2rem' }}>
            <strong>• Rencontre CIC-Crédit Mutuel</strong> –<br/>
            Présentation de notre démarche d'inclusion à Raphaël Rébert.
          </li>
          <li style={{ marginBottom: '1.2rem' }}>
            <strong>• Échanges sportifs</strong> –<br/>
            Rencontres avec des représentants du Stade Français Rugby (Thomas Lombard)<br/>
            et d'initiatives associatives de Cécifoot.
          </li>
          <li style={{ marginBottom: '1.2rem' }}>
            <strong>• Acteurs des sports de combat</strong> –<br/>
            Présentations et échanges sur les valeurs d'engagement et de discipline avec Fernand Lopez,<br/>
            Greg MMA et Karaté Bushido.
          </li>
        </ul>
      </section>

      {/* Galerie photos avec légendes */}
      <section style={{ marginBottom: '6rem', marginTop: '4rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
          
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
        <p style={{ fontSize: '0.9rem', color: '#999', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '2rem' }}>HumanValues HV dialogue avec le monde du sport et de l'inclusion :</p>
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
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', textAlign: 'center' }}>Déployer un Nexus – Licence & protocole pédagogique</h2>
        
        <p style={{ marginBottom: '1.5rem', textAlign: 'center' }}>
          La propriété intellectuelle des Nexus et du protocole éducatif associé est disponible sous licence.
        </p>

        <p style={{ marginBottom: '1.5rem', fontWeight: '500', textAlign: 'center' }}>
          Écoles, musées, fédérations sportives, municipalités :<br/>
          transformez le récit en outil pédagogique et social.
        </p>

        <p style={{ fontStyle: 'italic', fontSize: '0.85rem', color: '#888', textAlign: 'center' }}>
          HumanValues est une marque déposée (INPI).
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
          🤝 Devenons partenaires d'un récit qui compte.<br/>Contactez le Conseil des Nexus.
        </button>
      </div>

      <footer style={{ textAlign: 'center', marginTop: '4rem', fontSize: '0.9rem', color: '#888' }}>
        HumanValues – Maison culturelle des récits universels<br/>
        <span style={{ fontStyle: 'italic' }}>Des récits pour relier ce qui compte</span>
      </footer>
    </div>
  );
};

export default Institution;
