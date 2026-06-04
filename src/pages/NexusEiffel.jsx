import React from 'react';
import { Link } from 'react-router-dom';

const NexusEiffel = () => {
  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '4rem 2rem 8rem' }}>

      {/* Breadcrumb */}
      <p style={{ fontSize: '0.85rem', color: '#999', marginBottom: '2rem' }}>
        <Link to="/galerie" style={{ color: '#999', textDecoration: 'none' }}>Le Registre</Link>
        {' → '}
        <Link to="/collections" style={{ color: '#999', textDecoration: 'none' }}>Acquisitions</Link>
        {' → '}
        <span style={{ color: 'var(--hv-black)' }}>Nexus La Grande Dame</span>
      </p>

      {/* Hero */}
      <header style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <p style={{ fontSize: '0.85rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--hv-accent)', marginBottom: '1rem' }}>
          Code HG : HG-889-330-1
        </p>
        <h1 style={{ fontSize: '3.5rem', lineHeight: '1.1', marginBottom: '1.5rem' }}>La Grande Dame</h1>
        <p style={{ fontSize: '1.3rem', fontStyle: 'italic', color: 'var(--hv-grey)', marginBottom: '2rem' }}>
          L'élégance industrielle s'élevant au-dessus de la Ville Lumière
        </p>
        <p style={{ fontSize: '0.95rem', color: '#aaa', letterSpacing: '0.1em' }}>
          Tirage Plexiglas – 100×80 cm – Édition signée et numérotée (certificat HV) – Image issue d’une archive sous licence
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
          src="/artworks/monument_7.jpg"
          alt="Nexus Tour Eiffel"
          style={{ width: '100%', display: 'block', maxHeight: '500px', objectFit: 'contain' }}
        />
      </div>

      {/* Récit central */}
      <section style={{ marginBottom: '5rem', borderLeft: '4px solid var(--hv-accent)', paddingLeft: '2rem' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Le Récit</h2>

        <p style={{ fontSize: '1.15rem', lineHeight: '1.9', marginBottom: '1.5rem', color: 'var(--hv-grey)' }}>
          La Tour Eiffel ne se visite pas. Elle s’éprouve. 300 mètres de fer découpant le ciel, une leçon de gravité devenue grâce.
        </p>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.9', marginBottom: '1.5rem', color: 'var(--hv-grey)' }}>
          Érigée par Gustave Eiffel pour l'Exposition Universelle de 1889, elle devait être éphémère. Vivement contestée par les artistes de l'époque qui la qualifiaient de "squelette disgracieux", elle a résisté à tout. Menacée de démantèlement vingt ans après sa naissance, elle fut sauvée par la science : devenue antenne radio stratégique, elle gagna son droit à l’éternité et l'amour d'une ville qui a fini par fusionner son image avec la sienne.
        </p>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.9', marginBottom: '1.5rem', color: 'var(--hv-grey)' }}>
          Ses 7 300 tonnes de fer puddlé forment une dentelle géométrique qui capte le vent, s'adapte aux températures et découpe l'horizon parisien avec une finesse inégalée. Elle est à la fois le symbole de la modernité triomphante du XIXe siècle et le repère immuable des rêves du monde entier.
        </p>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.9', marginBottom: '1.5rem', color: 'var(--hv-grey)' }}>
          Le tirage sur Plexiglas capte les reflets de la structure métallique comme les faisceaux de son phare dans la nuit parisienne.
        </p>
        <p style={{ fontSize: '1.15rem', lineHeight: '1.9', fontStyle: 'italic', color: 'var(--hv-black)', fontWeight: '500' }}>
          Ce Nexus est l'empreinte de la verticalité absolue, l'acier transformé en dentelle céleste.
        </p>
      </section>

      {/* Valeurs */}
      <section style={{ marginBottom: '5rem' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Valeurs associées</h2>
        <div style={{ display: 'grid', gap: '1.5rem' }}>
          {[
            {
              valeur: 'Audace',
              texte: "S'élever à 300 mètres de hauteur quand le reste du monde criait à l'impossible effondrement."
            },
            {
              valeur: 'Précision',
              texte: "Transformer des tonnes de fer industriel en une dentelle légère suspendue dans le ciel de Paris."
            },
            {
              valeur: 'Résistance',
              texte: "L’éphémère qui a vaincu le temps. Vingt ans promis, un siècle et demi de résistance."
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
          HG-889-330-1
        </p>
        <p style={{ fontSize: '0.85rem', color: '#aaa', lineHeight: '1.8' }}>
          889 : Inauguration en 1889 pour l'Exposition Universelle de Paris.<br />
          330 : 330 mètres de hauteur, s'élevant vers l'éther.<br />
          -1 : Premier grand symbole architectural de la collection.
        </p>
      </section>

      {/* CTA Acquisition */}
      <section style={{ textAlign: 'center', padding: '4rem 2rem', backgroundColor: 'var(--hv-black)', color: 'white' }}>
        <p style={{ fontSize: '0.85rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#aaa', marginBottom: '1rem' }}>
          Édition signée XXL – 100×80 cm
        </p>
        <h2 style={{ fontSize: '2rem', color: 'white', marginBottom: '0.5rem' }}>Tirage Plexiglas – "Tour Eiffel"</h2>
        <p style={{ fontStyle: 'italic', color: '#aaa', marginBottom: '2rem' }}>
          Le monument le plus célèbre du monde, dessiné par la typographie de la collection 2025.<br /><br />
          — Le Conseil des Nexus
        </p>
        <p style={{ fontStyle: 'italic', color: '#aaa', marginBottom: '2rem' }}>
          Ce que vous emportez : non une simple vue, mais un morceau d'éternité parisienne.
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

export default NexusEiffel;
