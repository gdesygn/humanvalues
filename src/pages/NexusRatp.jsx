import React from 'react';
import { Link } from 'react-router-dom';

const NexusRatp = () => {
  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '4rem 2rem 8rem' }}>

      {/* Breadcrumb */}
      <p style={{ fontSize: '0.85rem', color: '#999', marginBottom: '2rem' }}>
        <Link to="/galerie" style={{ color: '#999', textDecoration: 'none' }}>Le Registre</Link>
        {' → '}
        <span style={{ color: 'var(--hv-black)' }}>Nexus RATP</span>
      </p>

      {/* Hero */}
      <header style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <p style={{ fontSize: '0.85rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--hv-accent)', marginBottom: '1rem' }}>
          Code HG : HG-194-892-9
        </p>
        <h1 style={{ fontSize: '3.5rem', lineHeight: '1.1', marginBottom: '1.5rem' }}>RATP</h1>
        <p style={{ fontSize: '1.3rem', fontStyle: 'italic', color: 'var(--hv-grey)', marginBottom: '2rem' }}>
          Une revisite inclusive du logo historique, le visage de l'intégration tracé par la ligne bleue
        </p>
        <p style={{ fontSize: '0.95rem', color: '#aaa', letterSpacing: '0.1em' }}>
          Étude de style – Collection Privée Institutionnelle – Image issue d’une archive sous licence
        </p>
      </header>

      {/* Visuel */}
      <div style={{
        position: 'relative',
        width: '100%',
        maxWidth: '500px',
        margin: '0 auto 5rem auto',
        borderRadius: '4px',
        overflow: 'hidden',
        boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
        backgroundColor: '#fafafa',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <img
          src="/artworks/corp_6.jpg"
          alt="Nexus RATP"
          style={{ width: '100%', display: 'block', maxHeight: '500px', objectFit: 'contain' }}
        />
      </div>

      {/* Récit central */}
      <section style={{ marginBottom: '5rem', borderLeft: '4px solid var(--hv-accent)', paddingLeft: '2rem' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Le Récit</h2>

        <p style={{ fontSize: '1.15rem', lineHeight: '1.9', marginBottom: '1.5rem', color: 'var(--hv-grey)' }}>
          Le visage de Paris. Un profil stylisé dessiné par le cours de la Seine, tourné vers le ciel, inséré dans un cercle de transport. Cette œuvre propose une revisite inclusive du logo historique de la RATP, où la silhouette familière se dessine à travers la typographie des valeurs d'intégration.
        </p>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.9', marginBottom: '1.5rem', color: 'var(--hv-grey)' }}>
          HumanValues redessine cette silhouette iconique à travers les mots de l’intégration, de la diversité et du service public. La ligne bleue, fluide et continue, devient le fil d’Ariane qui unit la périphérie au centre, abolissant les distances pour faire de la ville un espace commun.
        </p>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.9', marginBottom: '1.5rem', color: 'var(--hv-grey)' }}>
          En tissant le tracé du fleuve parisien avec les termes de la fraternité et de l'accessibilité, l'œuvre rappelle que le plus beau des voyages est celui qui permet à chacun, sans distinction, de se déplacer librement et de trouver sa place.
        </p>
        <p style={{ fontSize: '1.15rem', lineHeight: '1.9', fontStyle: 'italic', color: 'var(--hv-black)', fontWeight: '500' }}>
          Cette étude de style démontre comment le design graphique peut réenchanter le quotidien des transports en lui redonnant sa vocation profondément humaine.
        </p>
      </section>

      {/* Valeurs */}
      <section style={{ marginBottom: '5rem' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Valeurs associées</h2>
        <div style={{ display: 'grid', gap: '1.5rem' }}>
          {[
            {
              valeur: 'Intégration',
              texte: "Assurer le lien physique entre tous les territoires et tous les citoyens, sans laisser personne à quai."
            },
            {
              valeur: 'Service Public',
              texte: "L'engagement quotidien de faire de la mobilité un droit universel et un facteur de progrès social."
            },
            {
              valeur: 'Diversité',
              texte: "À l'image de la métropole, un flux humain d'histoires et de cultures qui cheminent ensemble."
            }
          ].map((v) => (
            <div key={v.valeur} style={{
              display: 'flex',
              gap: '1.5rem',
              padding: '1.5rem',
              backgroundColor: '#fafafa',
              borderLeft: '3px solid var(--hv-accent)'
            }}>
              <strong style={{ minWidth: '130px', color: 'var(--hv-accent)', fontSize: '1rem' }}>{v.valeur}</strong>
              <p style={{ margin: 0, color: 'var(--hv-grey)', lineHeight: '1.7' }}>{v.texte}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Code HG */}
      <section style={{ marginBottom: '5rem', textAlign: 'center', padding: '3rem', border: '1px solid #e0e0e0' }}>
        <p style={{ fontSize: '0.8rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#aaa', marginBottom: '1rem' }}>
          Identifiant Nexus
        </p>
        <p style={{ fontSize: '2.5rem', fontFamily: 'var(--font-heading)', color: 'var(--hv-accent)', letterSpacing: '0.1em', marginBottom: '1rem' }}>
          HG-194-892-9
        </p>
        <p style={{ fontSize: '0.85rem', color: '#aaa', lineHeight: '1.8' }}>
          194 : 1948, loi de création de la RATP unifiant le réseau de transport francilien.<br />
          892 : 1992, année d'adoption de l'actuel logo au profil de femme et fleuve.<br />
          -9 : Neuvième œuvre de la thématique de l'Édifice (id: fo9).
        </p>
      </section>

      {/* CTA Collaboratif B2B (Style Hors Commerce) */}
      <section style={{ textAlign: 'center', padding: '4rem 2rem', backgroundColor: '#fafafa', border: '1px solid #e0e0e0', borderRadius: '4px' }}>
        <p style={{ fontSize: '0.85rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--hv-accent)', marginBottom: '1.5rem', fontWeight: '600' }}>
          Collection Privée – Hors Commerce
        </p>
        <h2 style={{ fontSize: '2rem', color: 'var(--hv-black)', marginBottom: '1rem' }}>Étude de style & Partenariat Institutionnel</h2>
        <p style={{ fontStyle: 'italic', color: 'var(--hv-grey)', maxWidth: '600px', margin: '0 auto 2rem auto', lineHeight: '1.6' }}>
          Cette œuvre fait partie des archives privées de la maison. Elle n'est pas disponible à l'achat public, mais illustre le savoir-faire de HumanValues au service des institutions publiques.
        </p>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '400px', margin: '0 auto' }}>
          <a
            href="mailto:contact@humanvalues.fr?subject=Collaboration%20design%20Institutionnel%20RATP"
            style={{
              display: 'inline-block',
              padding: '1rem 2rem',
              backgroundColor: 'var(--hv-black)',
              color: 'white',
              textDecoration: 'none',
              fontSize: '0.9rem',
              fontWeight: 'bold',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              transition: 'all 0.3s ease'
            }}
          >
            🏢 Solliciter un projet de design Institutionnel
          </a>
          <Link
            to="/galerie"
            style={{
              display: 'inline-block',
              padding: '1rem 2rem',
              border: '1px solid var(--hv-black)',
              color: 'var(--hv-black)',
              textDecoration: 'none',
              fontSize: '0.9rem',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              transition: 'all 0.3s ease'
            }}
            onMouseOver={e => { e.currentTarget.style.backgroundColor = 'var(--hv-black)'; e.currentTarget.style.color = 'white'; }}
            onMouseOut={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = 'var(--hv-black)'; }}
          >
            📂 Retourner au Registre
          </Link>
        </div>
      </section>

    </div>
  );
};

export default NexusRatp;
