import React from 'react';
import { Link } from 'react-router-dom';

const NexusOcean = () => {
  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '4rem 2rem 8rem' }}>

      {/* Breadcrumb */}
      <p style={{ fontSize: '0.85rem', color: '#999', marginBottom: '2rem' }}>
        <Link to="/galerie" style={{ color: '#999', textDecoration: 'none' }}>Le Registre</Link>
        {' → '}
        <Link to="/collections" style={{ color: '#999', textDecoration: 'none' }}>Acquisitions</Link>
        {' → '}
        <span style={{ color: 'var(--hv-black)' }}>Nexus H2O'CEAN</span>
      </p>

      {/* Hero */}
      <header style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <p style={{ fontSize: '0.85rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--hv-accent)', marginBottom: '1rem' }}>
          Code HG : HG-624-312-1
        </p>
        <h1 style={{ fontSize: '3.5rem', lineHeight: '1.1', marginBottom: '1.5rem' }}>H2O'CEAN</h1>
        <p style={{ fontSize: '1.3rem', fontStyle: 'italic', color: 'var(--hv-grey)', marginBottom: '2rem' }}>
          La source de vie et l'immensité aquatique
        </p>
        <p style={{ fontSize: '0.95rem', color: '#aaa', letterSpacing: '0.1em' }}>
          Tirage Plexiglas – 100×80 cm – Édition signée et numérotée (certificat HV) – Présentée sous l'égide de la Fondation François Schneider
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
          src="/artworks/ocean_world.jpg"
          alt="Nexus H2O'CEAN"
          style={{ width: '100%', display: 'block', maxHeight: '500px', objectFit: 'contain' }}
        />
      </div>

      {/* Récit central */}
      <section style={{ marginBottom: '5rem', borderLeft: '4px solid var(--hv-accent)', paddingLeft: '2rem' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Le Récit</h2>

        <p style={{ fontSize: '1.15rem', lineHeight: '1.9', marginBottom: '1.5rem', color: 'var(--hv-grey)' }}>
          L'eau n'a pas de forme. Elle prend celle de ce qui la contient, tout en façonnant le monde.
        </p>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.9', marginBottom: '1.5rem', color: 'var(--hv-grey)' }}>
          Présentée sous l'égide de la Fondation François Schneider, cette création d'art typographique met en valeur le côté littéraire, éducatif et culturel de l'élément liquide. « H2O'CEAN » définit l'immensité aquatique, énergique et jaillissante. Elle est la source, l'origine, et la condition incontournable de toute forme de vie sur Terre – de l'homme au végétal, en passant par le règne animal.
        </p>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.9', marginBottom: '1.5rem', color: 'var(--hv-grey)' }}>
          À travers cette œuvre, l'artiste donne corps à la valeur de la vie. La goutte d'eau y est représentée de manière imagée, rappelant par ses formes arrondies le ventre d'une femme enceinte portant la vie. Cette même goutte s'adapte, prend forme même par des températures bien en dessous de zéro degré dans les endroits les plus hostiles de notre globe. Une bouteille se dessine également, mettant en évidence un monde en bonne santé, en perpétuel mouvement et en constante régénération.
        </p>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.9', marginBottom: '1.5rem', color: 'var(--hv-grey)' }}>
          Au cœur de la création, la carte du monde donne toute sa puissance au rôle de l'eau face à la vie. Pour que cette carte prenne forme, l'artiste a dû apposer méticuleusement <strong>624 fois le mot « Océan »</strong> et utiliser <strong>312 fois le terme « H2O »</strong> à l'aide d'un logiciel de photographie. Une technique évolutive et exclusive permettant des variations de couleurs et de dégradés à l'infini.
        </p>
        <p style={{ fontSize: '1.15rem', lineHeight: '1.9', fontStyle: 'italic', color: 'var(--hv-black)', fontWeight: '500' }}>
          Le tirage sur Plexiglas capte la brillance cristalline de l'eau, jouant avec la lumière comme les rayons du soleil à travers la surface de l'océan, offrant à l'œuvre une profondeur et une fluidité saisissantes.
        </p>
        <p style={{ fontSize: '1.15rem', lineHeight: '1.9', fontStyle: 'italic', color: 'var(--hv-black)', fontWeight: '500' }}>
          Ce Nexus est une immersion dans l'élément originel. Une leçon de clarté et de persistance.
        </p>
      </section>

      {/* Valeurs */}
      <section style={{ marginBottom: '5rem' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Valeurs associées</h2>
        <div style={{ display: 'grid', gap: '1.5rem' }}>
          {[
            {
              valeur: 'Vitalité',
              texte: "L'eau comme arme naturelle indispensable à toutes les existences (humaine, végétale, animale). Donner la vie et traverser le temps."
            },
            {
              valeur: 'Pureté',
              texte: "Sa fraîcheur éclatante, limpide et inodore, rappelant qu'« un monde sans eau est un monde dénudé de toute vie, terne et obscur »."
            },
            {
              valeur: 'Mouvement',
              texte: "Un monde en perpétuel renouvellement et régénérant, symbolisé par les courbes de la goutte d'eau et le dessin de la bouteille."
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
        <p style={{ fontSize: '0.8', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#aaa', marginBottom: '1rem' }}>
          Identifiant Nexus
        </p>
        <p style={{ fontSize: '2.5rem', fontFamily: 'var(--font-heading)', color: 'var(--hv-accent)', letterSpacing: '0.1em', marginBottom: '1rem' }}>
          HG-624-312-1
        </p>
        <p style={{ fontSize: '0.85rem', color: '#aaa', lineHeight: '1.8' }}>
          624 : Le nombre exact d'appositions du mot « Océan » ayant servi à dessiner la carte du monde typographique.<br />
          312 : Le nombre d'utilisations du terme « H2O » structurant le visuel.<br />
          -1 : Premier Nexus de la catégorie des Fluides (ID f1).
        </p>
      </section>

      {/* CTA Acquisition */}
      <section style={{ textAlign: 'center', padding: '4rem 2rem', backgroundColor: 'var(--hv-black)', color: 'white' }}>
        <p style={{ fontSize: '0.85rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#aaa', marginBottom: '1rem' }}>
          Édition signée XXL – 100×80 cm
        </p>
        <h2 style={{ fontSize: '2rem', color: 'white', marginBottom: '0.5rem' }}>Tirage Plexiglas – "H2O'CEAN"</h2>
        <p style={{ fontStyle: 'italic', color: '#aaa', marginBottom: '2rem' }}>
          La carte du monde typographique dédiée au thème de l'eau.<br /><br />
          — Le Conseil des Nexus
        </p>
        <p style={{ fontStyle: 'italic', color: '#aaa', marginBottom: '2rem' }}>
          Ce que vous emportez : non une simple œuvre d'art, mais une immersion dans la source de toute vie.
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

export default NexusOcean;
