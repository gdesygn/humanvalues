import React from 'react';
import { Link } from 'react-router-dom';

const NexusKante = () => {
  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '4rem 2rem 8rem' }}>
      {/* Breadcrumb */}
      <p style={{ fontSize: '0.85rem', color: '#999', marginBottom: '2rem' }}>
        <Link to="/galerie" style={{ color: '#999', textDecoration: 'none' }}>Le Registre</Link>
        {' → '}
        <Link to="/collections" style={{ color: '#999', textDecoration: 'none' }}>Acquisitions</Link>
        {' → '}
        <span style={{ color: 'var(--hv-black)' }}>Nexus Kanté</span>
      </p>

      {/* Hero */}
      <header style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <p style={{ fontSize: '0.85rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--hv-accent)', marginBottom: '1rem' }}>
          Code HG : HG-2018-7-1
        </p>
        <h1 style={{ fontSize: '3.5rem', lineHeight: '1.1', marginBottom: '1.5rem' }}>N'Golo Kanté | Le Cœur Tricolore</h1>
        <p style={{ fontSize: '1.3rem', fontStyle: 'italic', color: 'var(--hv-grey)', marginBottom: '2rem' }}>
          Le moteur inépuisable, l'humilité incarnée, l'âme des Bleus
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
          src="/artworks/nexus_kante.jpg"
          alt="Nexus Kanté - Le Cœur Tricolore"
          style={{ width: '100%', display: 'block', maxHeight: '600px', objectFit: 'contain' }}
        />
      </div>

      {/* Récit central */}
      <section style={{ marginBottom: '5rem', borderLeft: '4px solid var(--hv-accent)', paddingLeft: '2rem' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Le Récit</h2>
        <p style={{ fontSize: '1.15rem', lineHeight: '1.9', marginBottom: '1.5rem', color: 'var(--hv-grey)' }}>
          N'Golo Kanté ne court pas pour lui, il court pour les autres.
        </p>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.9', marginBottom: '1.5rem', color: 'var(--hv-grey)' }}>
          Né le <strong>29 mars 1991 à Paris</strong>, il a gravi un à un tous les échelons : <strong>Suresnes, Boulogne, Caen, Leicester, Chelsea, Al-Ittihad</strong>. 
          Champion du monde <strong>2018</strong>, vainqueur de la <strong>Ligue des Champions 2021</strong>, champion d'Angleterre à deux reprises… 
          mais jamais il n'a changé de visage.
        </p>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.9', marginBottom: '1.5rem', color: 'var(--hv-grey)' }}>
          Depuis ses débuts humbles jusqu'au sommet du football mondial, son ascension est une leçon d'abnégation. 
          Il n'a jamais réclamé la lumière, mais ses performances l'y ont inévitablement placé.
        </p>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.9', marginBottom: '1.5rem', color: 'var(--hv-grey)' }}>
          Le coq français, emblème de toute une nation, est ici entièrement tissé par son nom. Une répétition infinie, à l'image de ses efforts sur le terrain. 
          Il est partout. Il récupère, il relance, il sourit. Et la France gagne.
        </p>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.9', marginBottom: '1.5rem', color: 'var(--hv-grey)' }}>
          <strong>Le tirage sur Plexiglas</strong> capture l'intensité de son regard et la répétition infinie de son nom – 
          comme ses courses, invisibles mais décisives.
        </p>
        <p style={{ fontSize: '1.15rem', lineHeight: '1.9', fontStyle: 'italic', color: 'var(--hv-black)', fontWeight: '500' }}>
          Cette œuvre rend hommage à l'âme bleue de l'équipe de France. Le cœur battant du coq tricolore.
        </p>
      </section>

      {/* Valeurs associées */}
      <section style={{ marginBottom: '5rem' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Valeurs associées</h2>
        <div style={{ display: 'grid', gap: '1.5rem' }}>
          {[
            {
              valeur: 'Humilité',
              texte: 'Le triomphe sans arrogance. Le sourire qui désarme les critiques.'
            },
            {
              valeur: 'Abnégation',
              texte: "L'effort invisible qui rend possible la gloire collective."
            },
            {
              valeur: 'Joie',
              texte: "Le sourire qui ne triche pas. Même après avoir couru 12 km, même après avoir tout gagné."
            },
            {
              valeur: 'Collectif',
              texte: "Un homme dont le seul but est de rendre les autres meilleurs."
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
          HG-2018-7-1
        </p>
        <p style={{ fontSize: '0.85rem', color: '#aaa', lineHeight: '1.8' }}>
          <strong>2018</strong> : Année du sacre mondial avec les Bleus – la consécration ultime.<br />
          <strong>7</strong> : Son numéro de maillot en équipe de France, devenu légendaire.<br />
          <strong>1</strong> : Premier tirage de la série des « Cœurs Tricolores ».
        </p>
      </section>

      {/* Ce que vous emportez */}
      <section style={{ marginBottom: '5rem', textAlign: 'center', padding: '2rem', backgroundColor: '#f5f5f5', borderRadius: '4px' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', letterSpacing: '0.05em' }}>Ce que vous emportez</h2>
        <p style={{ fontSize: '1.2rem', fontStyle: 'italic', color: 'var(--hv-grey)', maxWidth: '600px', margin: '0 auto', lineHeight: '1.8' }}>
          « Ce que vous emportez : non un portrait de star, mais le visage de l'humilité triomphante – 
          un homme qui a gagné le monde sans jamais cesser de sourire. »
        </p>
      </section>

      {/* CTA Acquisition */}
      <section style={{ textAlign: 'center', padding: '4rem 2rem', backgroundColor: 'var(--hv-black)', color: 'white' }}>
        <p style={{ fontSize: '0.85rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#aaa', marginBottom: '1rem' }}>
          Édition signée XXL – 100×80 cm
        </p>
        <h2 style={{ fontSize: '2rem', color: 'white', marginBottom: '0.5rem' }}>Tirage Plexiglas – "Kanté | Le Cœur Tricolore"</h2>
        <p style={{ fontStyle: 'italic', color: '#aaa', marginBottom: '2rem' }}>
          "71% de la surface de la terre est couverte d'eau. Le reste est couvert par N'Golo Kanté."<br />
          Le mythe devenu réalité.
        </p>
        <p style={{ fontSize: '0.9rem', color: '#777', marginBottom: '0.5rem' }}>— Le Conseil des Nexus</p>
        <p style={{ fontSize: '2.5rem', fontWeight: '600', color: 'white', marginBottom: '0.5rem', marginTop: '1.5rem' }}>890 €</p>
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

export default NexusKante;
