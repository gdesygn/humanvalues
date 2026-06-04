import React from 'react';
import { Link } from 'react-router-dom';

const NexusResilience = () => {
  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '4rem 2rem 8rem' }}>

      {/* Breadcrumb */}
      <p style={{ fontSize: '0.85rem', color: '#999', marginBottom: '2rem' }}>
        <Link to="/galerie" style={{ color: '#999', textDecoration: 'none' }}>Le Registre</Link>
        {' → '}
        <Link to="/collections" style={{ color: '#999', textDecoration: 'none' }}>Acquisitions</Link>
        {' → '}
        <span style={{ color: 'var(--hv-black)' }}>Nexus Athlétisme Fauteuil & Résilience</span>
      </p>

      {/* Hero */}
      <header style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <p style={{ fontSize: '0.85rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--hv-accent)', marginBottom: '1rem' }}>
          Code HG : HG-976-992-3
        </p>
        <h1 style={{ fontSize: '3.5rem', lineHeight: '1.1', marginBottom: '1.5rem' }}>Athlétisme Fauteuil & Résilience</h1>
        <p style={{ fontSize: '1.3rem', fontStyle: 'italic', color: 'var(--hv-grey)', marginBottom: '2rem' }}>
          L’art de l’inclinaison, du braquet et du combat en mouvement
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
          src="/artworks/valeur_21.jpg"
          alt="Nexus Athlétisme Fauteuil & Résilience"
          style={{ width: '100%', display: 'block', maxHeight: '500px', objectFit: 'contain' }}
        />
      </div>

      {/* Récit central */}
      <section style={{ marginBottom: '5rem', borderLeft: '4px solid var(--hv-accent)', paddingLeft: '2rem' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Le Récit</h2>

        <p style={{ fontSize: '1.15rem', lineHeight: '1.9', marginBottom: '1.5rem', color: 'var(--hv-grey)' }}>
          La piste n’est pas une ligne droite. C’est un diagnostic de volonté. Ici, ce ne sont pas les jambes qui propulsent, mais un bras, un buste, un souffle.
        </p>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.9', marginBottom: '1.5rem', color: 'var(--hv-grey)' }}>
          L’athlétisme fauteuil est né dans les années 70 de la rage silencieuse de blessés médullaires refusant l’immobilité. Pas de filet, pas d’adversaire direct : seulement le chrono, l’asphalte, et soi-même.
        </p>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.9', marginBottom: '1.5rem', color: 'var(--hv-grey)' }}>
          Le fauteuil de course n’a rien d’un fauteuil roulant ordinaire. Trois roues, un carénage, un braquet pensé comme un rapport de force. À l’accélération, le buste se plaque sur le dossier. Dans les virages, le corps s’incline jusqu’à frôler le sol. La roue arrière cambrée capte l’adhérence. La main gantée tourne, pousse, relâche – quarante fois sur 400 mètres.
        </p>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.9', marginBottom: '1.5rem', color: 'var(--hv-grey)' }}>
          Ce sport n’est pas une adaptation du sport valide. C’est un sport à part entière, avec sa physique, sa tactique et sa violence douce.
        </p>
        <p style={{ fontSize: '1.15rem', lineHeight: '1.9', fontStyle: 'italic', color: 'var(--hv-black)', fontWeight: '500' }}>
          Le tirage sur Plexiglas capte la tension des rayons métalliques sous l’effort, la vibration de la roue figée dans la transparence du matériau.
        </p>
        <p style={{ fontSize: '1.15rem', lineHeight: '1.9', fontStyle: 'italic', color: 'var(--hv-black)', fontWeight: '500' }}>
          Ce Nexus est un hommage au geste le plus fondamental : avancer. Quoi qu’il en coûte.
        </p>
      </section>

      {/* Valeurs */}
      <section style={{ marginBottom: '5rem' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Valeurs associées</h2>
        <div style={{ display: 'grid', gap: '1.5rem' }}>
          {[
            {
              valeur: 'Adaptation',
              texte: "Transformer le fauteuil en machine de guerre contre l’inertie."
            },
            {
              valeur: 'Résilience',
              texte: "Refuser l’arrêt. Faire de chaque tour de roue une réponse."
            },
            {
              valeur: 'Maîtrise',
              texte: "L’inclinaison parfaite, le braquet choisi, le geste répété dix mille fois."
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
          HG-976-992-3
        </p>
        <p style={{ fontSize: '0.85rem', color: '#aaa', lineHeight: '1.8' }}>
          976 : 1976, premiers championnats officiels d’athlétisme fauteuil (Canada, Allemagne, États-Unis).<br />
          992 : 1992, Barcelone – intégration paralympique de l’athlétisme fauteuil comme discipline reine.<br />
          -3 : Troisième Nexus de la catégorie des Vertus.
        </p>
      </section>

      {/* CTA Acquisition */}
      <section style={{ textAlign: 'center', padding: '4rem 2rem', backgroundColor: 'var(--hv-black)', color: 'white' }}>
        <p style={{ fontSize: '0.85rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#aaa', marginBottom: '1rem' }}>
          Édition signée XXL – 100×80 cm
        </p>
        <h2 style={{ fontSize: '2rem', color: 'white', marginBottom: '0.5rem' }}>Tirage Plexiglas – "Athlétisme Fauteuil & Résilience"</h2>
        <p style={{ fontStyle: 'italic', color: '#aaa', marginBottom: '2rem' }}>
          La vertu de la résilience sportive, dessinée par la typographie de la collection 2025.<br /><br />
          — Le Conseil des Nexus
        </p>
        <p style={{ fontStyle: 'italic', color: '#aaa', marginBottom: '2rem' }}>
          Ce que vous emportez : non un fauteuil, mais une foulée d'acier.
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

export default NexusResilience;
