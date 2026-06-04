import React from 'react';
import { Link } from 'react-router-dom';

const NexusCantona = () => {
  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '4rem 2rem 8rem' }}>

      {/* Breadcrumb */}
      <p style={{ fontSize: '0.85rem', color: '#999', marginBottom: '2rem' }}>
        <Link to="/galerie" style={{ color: '#999', textDecoration: 'none' }}>Le Registre</Link>
        {' → '}
        <Link to="/collections" style={{ color: '#999', textDecoration: 'none' }}>Acquisitions</Link>
        {' → '}
        <span style={{ color: 'var(--hv-black)' }}>Nexus The King</span>
      </p>

      {/* Hero */}
      <header style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <p style={{ fontSize: '0.85rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--hv-accent)', marginBottom: '1rem' }}>
          Code HG : HG-992-7-3
        </p>
        <h1 style={{ fontSize: '3.5rem', lineHeight: '1.1', marginBottom: '1.5rem' }}>The King</h1>
        <p style={{ fontSize: '1.3rem', fontStyle: 'italic', color: 'var(--hv-grey)', marginBottom: '2rem' }}>
          La poésie rebelle et le théâtre des rêves
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
          src="/artworks/portrait_3.jpg"
          alt="Nexus The King — Eric Cantona"
          style={{ width: '100%', display: 'block', maxHeight: '500px', objectFit: 'contain' }}
        />
      </div>

      {/* Récit central */}
      <section style={{ marginBottom: '5rem', borderLeft: '4px solid var(--hv-accent)', paddingLeft: '2rem' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Le Récit</h2>

        <p style={{ fontSize: '1.15rem', lineHeight: '1.9', marginBottom: '1.5rem', color: 'var(--hv-grey)' }}>
          Sur ce portrait, les mots racontent sa vie : ses clubs, ses trophées, sa date et son lieu de naissance. Marseille, Auxerre, Leeds, Manchester. Championnats, coupes, légendes.
        </p>
        <p style={{ fontSize: '1.15rem', lineHeight: '1.9', marginBottom: '1.5rem', color: 'var(--hv-grey)' }}>
          Mais ce que ces mots ne disent pas, c’est ceci : aucun titre ne suffit à expliquer pourquoi on l’appelle encore The King.
        </p>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.9', marginBottom: '1.5rem', color: 'var(--hv-grey)' }}>
          Eric Cantona ne jouait pas au football. Il y jouait sa vie, comme sur les planches d’un théâtre élisabéthain. Arrivé à Manchester United en 1992, il a transfiguré un club en attente de gloire pour en faire l’épicentre du football mondial. Col relevé, buste droit, regard de défi : il régnait sur Old Trafford – le bien nommé Théâtre des Rêves.
        </p>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.9', marginBottom: '1.5rem', color: 'var(--hv-grey)' }}>
          Il y eut le génie. La passe décisive comme une signature. Le coup de patte comme une insulte élégante. Il y eut aussi le coup de sang – ce fameux soir de janvier 1995. Huit mois de suspension. Huit mois à apprendre que la rébellion a un prix, mais que le peuple d’Old Trafford n’oublie jamais ses rois. À son retour, il n’était pas pardonné. Il était plus roi que jamais. Parce que Cantona n’a jamais eu besoin d’être aimé pour être respecté.
        </p>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.9', marginBottom: '1.5rem', color: 'var(--hv-grey)' }}>
          Ses déclarations sur les mouettes et les chalutiers ? Une provocation de poète. Son numéro 7 ? Un mystère qu’il a chargé d’une aura que seuls les géants peuvent assumer. Les mots imprimés sur son portrait ne sont pas une biographie. Ce sont les preuves que le génie, quand il est absolu, finit toujours par s’écrire en majuscules.
        </p>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.9', marginBottom: '1.5rem', color: 'var(--hv-grey)' }}>
          Le tirage sur Plexiglas fige son col relevé comme une armure, son regard comme un verdict. La photo ne se regarde pas : elle se soutient.
        </p>
        <p style={{ fontSize: '1.15rem', lineHeight: '1.9', fontStyle: 'italic', color: 'var(--hv-black)', fontWeight: '500' }}>
          Ce Nexus est l’empreinte d’un roi sans couronne autre que celle décernée par le peuple d’Old Trafford – et que lui-même a toujours refusé de rendre.
        </p>
      </section>

      {/* Valeurs */}
      <section style={{ marginBottom: '5rem' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Valeurs associées</h2>
        <div style={{ display: 'grid', gap: '1.5rem' }}>
          {[
            {
              valeur: 'Audace',
              texte: "Le col relevé, le geste provocateur. Imposer son rythme au monde, jamais l’inverse."
            },
            {
              valeur: 'Providence',
              texte: "Ce mélange unique de génie imprévisible et d’autorité naturelle – on ne savait jamais s’il allait marquer un but, taquiner un gardien ou dire une phrase qui deviendrait culte."
            },
            {
              valeur: 'Fidélité',
              texte: "À ses convictions, à son art, à lui-même. Quitte à payer le prix. Quitte à faire taire les conventions."
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
          HG-992-7-3
        </p>
        <p style={{ fontSize: '0.85rem', color: '#aaa', lineHeight: '1.8' }}>
          992 : 1992 – année de son arrivée fracassante à Manchester United. Le début du règne.<br />
          7 : Le numéro légendaire qu’il a porté à Old Trafford. Celui qu’il a transformé en mythe.<br />
          -3 : Troisième Nexus de la catégorie des Mythes (ID m3).
        </p>
      </section>

      {/* CTA Acquisition */}
      <section style={{ textAlign: 'center', padding: '4rem 2rem', backgroundColor: 'var(--hv-black)', color: 'white' }}>
        <p style={{ fontSize: '0.85rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#aaa', marginBottom: '1rem' }}>
          Édition signée XXL – 100×80 cm
        </p>
        <h2 style={{ fontSize: '2rem', color: 'white', marginBottom: '0.5rem' }}>Tirage Plexiglas – "The King"</h2>
        <p style={{ fontStyle: 'italic', color: '#aaa', marginBottom: '2rem' }}>
          Le portrait d'Eric Cantona dessiné par la typographie de la collection 2025.<br /><br />
          — Le Conseil des Nexus
        </p>
        <p style={{ fontStyle: 'italic', color: '#aaa', marginBottom: '2rem' }}>
          Ce que vous emportez : non un simple souvenir de match, ni une affiche de supporter. Mais le portrait-même de la rébellion pure – écrit, imprimé, figé dans l’acier et le verre.
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

export default NexusCantona;
