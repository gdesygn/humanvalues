import React from 'react';
import { Link } from 'react-router-dom';

const NexusItalia = () => {
  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '4rem 2rem 8rem' }}>

      {/* Breadcrumb */}
      <p style={{ fontSize: '0.85rem', color: '#999', marginBottom: '2rem' }}>
        <Link to="/galerie" style={{ color: '#999', textDecoration: 'none' }}>Le Registre</Link>
        {' → '}
        <Link to="/collections" style={{ color: '#999', textDecoration: 'none' }}>Acquisitions</Link>
        {' → '}
        <span style={{ color: 'var(--hv-black)' }}>Nexus Italia</span>
      </p>

      {/* Hero */}
      <header style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <p style={{ fontSize: '0.85rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--hv-accent)', marginBottom: '1rem' }}>
          Code HG : HG-877-443-1
        </p>
        <h1 style={{ fontSize: '3.5rem', lineHeight: '1.1', marginBottom: '1.5rem' }}>Italia</h1>
        <p style={{ fontSize: '1.3rem', fontStyle: 'italic', color: 'var(--hv-grey)', marginBottom: '2rem' }}>
          L'emblème en mouvement, symbole de puissance et de liberté.
        </p>
        <p style={{ fontSize: '0.95rem', color: '#aaa', letterSpacing: '0.1em' }}>
          Tirage Plexiglas – 100×80 cm – Édition signée et numérotée (certificat HV)
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
          src="/artworks/italia_eagle.jpg"
          alt="Nexus Italia"
          style={{ width: '100%', display: 'block', maxHeight: '500px', objectFit: 'contain' }}
        />
      </div>

      {/* Récit central */}
      <section style={{ marginBottom: '5rem', borderLeft: '4px solid var(--hv-accent)', paddingLeft: '2rem' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Le Récit</h2>

        <p style={{ fontSize: '1.15rem', lineHeight: '1.9', marginBottom: '1.5rem', color: 'var(--hv-grey)' }}>
          L'Italie n'est pas un pays. C'est une encre qui a coloré le monde.
        </p>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.9', marginBottom: '1.5rem', color: 'var(--hv-grey)' }}>
          Du Colisée au Vatican, des canaux de Venise aux collines de Toscane, chaque pierre raconte vingt siècles d'invention humaine. Ici, l'art n'est pas au musée – il est dans la rue, sur un mur, au fond d'une assiette. La beauté n'est pas une option : c'est l'oxygène.
        </p>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.9', marginBottom: '1.5rem', color: 'var(--hv-grey)' }}>
          Le sport, lui, est une passion collective. Le maillot bleu n'est pas un équipement – c'est une seconde peau. Les stades ne sont pas des arènes – ce sont des théâtres où se joue l'identité. Le vélo des champions, le football des poètes, la Formule 1 des princes.
        </p>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.9', marginBottom: '1.5rem', color: 'var(--hv-grey)' }}>
          Nexus Italia scelle cette alliance : l'antique et le moderne, le marbre et le bitume, la main de Michel-Ange et le pied de Baggio.
        </p>
        <p style={{ fontSize: '1.15rem', lineHeight: '1.9', fontStyle: 'italic', color: 'var(--hv-black)', fontWeight: '500' }}>
          Cette œuvre n'est pas une photographie. C'est un fragment d'éternité que vous accrochez au mur.
        </p>
      </section>

      {/* Valeurs */}
      <section style={{ marginBottom: '5rem' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Valeurs associées</h2>
        <div style={{ display: 'grid', gap: '1.5rem' }}>
          {[
            {
              valeur: 'Passion',
              texte: 'Le maillot bleu comme seconde peau – le sport vécu comme drame collectif.'
            },
            {
              valeur: 'Universalité',
              texte: "L'Italie comme creuset : Empire romain, Renaissance, Dolce Vita – un rayonnement qui n'a pas d'âge."
            },
            {
              valeur: 'Transmission',
              texte: 'De la main de Michel-Ange au pied de Baggio – le geste qui traverse les époques.'
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
          HG-877-443-1
        </p>
        <p style={{ fontSize: '0.85rem', color: '#aaa', lineHeight: '1.8' }}>
          877 : Valeur Passion + Ancrage Péninsule italienne<br />
          443 : Marqueur Universalité culturelle<br />
          1 : Premier Nexus dédié à un pays
        </p>
      </section>

      {/* CTA Acquisition */}
      <section style={{ textAlign: 'center', padding: '4rem 2rem', backgroundColor: 'var(--hv-black)', color: 'white' }}>
        <p style={{ fontSize: '0.85rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#aaa', marginBottom: '1rem' }}>
          Édition signée XXL – 100×80 cm
        </p>
        <h2 style={{ fontSize: '2rem', color: 'white', marginBottom: '0.5rem' }}>Tirage Plexiglas – "Italia"</h2>
        <p style={{ fontStyle: 'italic', color: '#aaa', marginBottom: '2rem' }}>
          "L'emblème en mouvement, symbole de puissance et de liberté."
        </p>
        <p style={{ fontSize: '2.5rem', fontWeight: '600', color: 'white', marginBottom: '0.5rem' }}>890 €</p>
        <p style={{ fontSize: '0.9rem', color: '#777', marginBottom: '2.5rem' }}>Livraison offerte France · Certificat HV inclus</p>
        <Link
          to="/collections"
          style={{
            display: 'inline-block',
            padding: '1rem 2.5rem',
            border: '1px solid white',
            color: 'white',
            textDecoration: 'none',
            fontSize: '0.9rem',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            transition: 'all 0.3s ease'
          }}
          onMouseOver={e => { e.currentTarget.style.backgroundColor = 'white'; e.currentTarget.style.color = '#111'; }}
          onMouseOut={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = 'white'; }}
        >
          🖼️ Contacter la galerie
        </Link>
      </section>

    </div>
  );
};

export default NexusItalia;
