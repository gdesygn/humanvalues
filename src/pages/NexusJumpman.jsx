import React from 'react';
import { Link } from 'react-router-dom';

const NexusJumpman = () => {
  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '4rem 2rem 8rem' }}>

      {/* Breadcrumb */}
      <p style={{ fontSize: '0.85rem', color: '#999', marginBottom: '2rem' }}>
        <Link to="/galerie" style={{ color: '#999', textDecoration: 'none' }}>Le Registre</Link>
        {' → '}
        <Link to="/collections" style={{ color: '#999', textDecoration: 'none' }}>Acquisitions</Link>
        {' → '}
        <span style={{ color: 'var(--hv-black)' }}>Nexus Jumpman 23</span>
      </p>

      {/* Hero */}
      <header style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <p style={{ fontSize: '0.85rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--hv-accent)', marginBottom: '1rem' }}>
          Code HG : HG-023-006-1
        </p>
        <h1 style={{ fontSize: '3.5rem', lineHeight: '1.1', marginBottom: '1.5rem' }}>Michael Jordan | His Airness</h1>
        <p style={{ fontSize: '1.3rem', fontStyle: 'italic', color: 'var(--hv-grey)', marginBottom: '2rem' }}>
          Le GOAT absolu sculpté par ses records et ses Final MVPs.
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
        backgroundColor: '#000'
      }}>
        <img
          src="/artworks/sport_14.jpg"
          alt="Nexus Jumpman 23 - Michael Jordan His Airness"
          style={{ width: '100%', display: 'block', maxHeight: '600px', objectFit: 'contain' }}
        />
      </div>

      {/* Récit central */}
      <section style={{ marginBottom: '5rem', borderLeft: '4px solid var(--hv-accent)', paddingLeft: '2rem' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>L'Œuvre</h2>

        <p style={{ fontSize: '1.15rem', lineHeight: '1.9', marginBottom: '1.5rem', color: 'var(--hv-grey)' }}>
          Cette création unique dessine la silhouette iconique de Michael Jordan (le célèbre Jumpman) en utilisant exclusivement les mots, les dates et les chiffres qui ont forgé sa légende. Chaque détail de cette envolée est composé de l'encre de son histoire.
        </p>

        <div style={{ backgroundColor: '#fafafa', padding: '1.5rem', borderRadius: '4px', marginBottom: '2rem', border: '1px solid #eee' }}>
          <ul style={{ listStyleType: 'none', padding: 0, margin: 0, color: 'var(--hv-grey)', lineHeight: '1.8', fontSize: '1.05rem' }}>
            <li><strong>Naissance :</strong> 17 février 1963 à Brooklyn, New York</li>
            <li><strong>Clubs :</strong> Chicago Bulls, Washington Wizards (NBA) · Tar Heels (Université de Caroline du Nord)</li>
            <li><strong>Palmarès majeur :</strong>
              <ul style={{ marginTop: '0.5rem', marginBottom: '0', paddingLeft: '1.5rem', listStyleType: 'circle' }}>
                <li>6× Champion NBA (1991–1993, 1996–1998)</li>
                <li>6× MVP des Finales NBA</li>
                <li>5× MVP de la saison régulière</li>
                <li>10× Meilleur marqueur de la NBA</li>
                <li>14× NBA All-Star</li>
                <li>2× Champion Olympique (1984, 1992 - The Dream Team)</li>
                <li>Défenseur de l'année de la NBA (1988)</li>
              </ul>
            </li>
          </ul>
        </div>

        <p style={{ fontSize: '1.1rem', lineHeight: '1.9', marginBottom: '1.5rem', color: 'var(--hv-grey)' }}>
          <strong>Le tirage sur Plexiglas</strong> capture l'élan de cette silhouette suspendue dans le vide – comme Jordan au sommet de son saut, figé pour l'éternité.
        </p>

        <p style={{ fontSize: '1.1rem', lineHeight: '1.9', marginBottom: '1.5rem', color: 'var(--hv-grey)' }}>
          "I've failed over and over and over again in my life. And that is why I succeed." C'est par cette obsession de la perfection, par cette soif inextinguible de victoire, qu'il s'est élevé au-dessus de tous. 
        </p>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.9', marginBottom: '1.5rem', color: 'var(--hv-grey)' }}>
          Son empreinte va bien au-delà des parquets. Il est le symbole ultime du dépassement de soi, l'icône culturelle dont l'envol est figé pour l'éternité dans l'imaginaire collectif.
        </p>
      </section>

      {/* Valeurs associées */}
      <section style={{ marginBottom: '5rem' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Valeurs associées</h2>
        <div style={{ display: 'grid', gap: '1.5rem' }}>
          {[
            {
              valeur: 'Excellence',
              texte: "L'exigence absolue. Ne jamais se satisfaire de ce qui a été accompli hier."
            },
            {
              valeur: 'Transcendance',
              texte: "S'élever littéralement et figurativement au-dessus de l'adversité et des limites humaines."
            },
            {
              valeur: 'Compétitivité',
              texte: "Une détermination féroce et une obsession pour la victoire."
            },
            {
              valeur: 'Héritage',
              texte: "Avant lui, le basket était un sport. Après lui, il est devenu une culture. Les sneakers, les films, la légende – tout porte son empreinte."
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

      {/* Signification du Code HG */}
      <section style={{ marginBottom: '5rem', textAlign: 'center', padding: '3rem', border: '1px solid #e0e0e0' }}>
        <p style={{ fontSize: '0.8rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#aaa', marginBottom: '1rem' }}>
          Identifiant Nexus
        </p>
        <p style={{ fontSize: '2.5rem', fontFamily: 'var(--font-heading)', color: 'var(--hv-accent)', letterSpacing: '0.1em', marginBottom: '1rem' }}>
          HG-023-006-1
        </p>
        <p style={{ fontSize: '0.85rem', color: '#aaa', lineHeight: '1.8' }}>
          <strong>023</strong> : Le numéro mythique de Sa Majesté, entré dans la légende.<br />
          <strong>006</strong> : Les 6 titres NBA et les 6 trophées de MVP des Finales – un doublé inégalé.<br />
          <strong>1</strong> : Le statut unique de GOAT. Il n'y en a qu'un.
        </p>
      </section>

      {/* Ce que vous emportez */}
      <section style={{ marginBottom: '5rem', textAlign: 'center', padding: '2rem', backgroundColor: '#f5f5f5', borderRadius: '4px' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', letterSpacing: '0.05em' }}>Ce que vous emportez</h2>
        <p style={{ fontSize: '1.2rem', fontStyle: 'italic', color: 'var(--hv-grey)', maxWidth: '600px', margin: '0 auto', lineHeight: '1.8' }}>
          « Ce que vous emportez n'est pas qu'une image de basketball, c'est l'incarnation absolue de la volonté de vaincre. »
        </p>
      </section>

      {/* CTA Acquisition */}
      <section style={{ textAlign: 'center', padding: '4rem 2rem', backgroundColor: 'var(--hv-black)', color: 'white' }}>
        <p style={{ fontSize: '0.85rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#aaa', marginBottom: '1rem' }}>
          Édition signée XXL – 100×80 cm
        </p>
        <h2 style={{ fontSize: '2rem', color: 'white', marginBottom: '0.5rem' }}>Tirage Plexiglas – "Jumpman"</h2>
        <p style={{ fontStyle: 'italic', color: '#aaa', marginBottom: '2rem' }}>
          "Some people want it to happen, some wish it would happen, others make it happen."<br/>
          — Le Conseil des Nexus
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

export default NexusJumpman;
