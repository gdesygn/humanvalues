import React from 'react';
import { Link } from 'react-router-dom';

const NexusMaradona = () => {
  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '4rem 2rem 8rem' }}>

      {/* Breadcrumb */}
      <p style={{ fontSize: '0.85rem', color: '#999', marginBottom: '2rem' }}>
        <Link to="/galerie" style={{ color: '#999', textDecoration: 'none' }}>Le Registre</Link>
        {' → '}
        <Link to="/collections" style={{ color: '#999', textDecoration: 'none' }}>Acquisitions</Link>
        {' → '}
        <span style={{ color: 'var(--hv-black)' }}>Nexus Maradona</span>
      </p>

      {/* Hero */}
      <header style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <p style={{ fontSize: '0.85rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--hv-accent)', marginBottom: '1rem' }}>
          Code HG : HG-460-086-1
        </p>
        <h1 style={{ fontSize: '3.5rem', lineHeight: '1.1', marginBottom: '1.5rem' }}>El Pibe de Oro</h1>
        <p style={{ fontSize: '1.3rem', fontStyle: 'italic', color: 'var(--hv-grey)', marginBottom: '2rem' }}>
          Le génie absolu, la main de Dieu, l'éternité d'un homme
        </p>
        <p style={{ fontSize: '0.95rem', color: '#aaa', letterSpacing: '0.1em' }}>
          Tirage Plexiglas – 100×80 cm – Édition signée et numérotée (certificat HV)
        </p>
      </header>

      {/* Visuel (Image fixe car pas de vidéo) */}
      <div style={{
        position: 'relative',
        width: '100%',
        maxWidth: '500px',
        margin: '0 auto 5rem auto'
      }}>
        <img
          src="/artworks/olympe_maradona.jpg"
          alt="Nexus Maradona"
          style={{ width: '100%', display: 'block', maxHeight: '400px', objectFit: 'contain' }}
        />
      </div>

      {/* Récit central */}
      <section style={{ marginBottom: '5rem', borderLeft: '4px solid var(--hv-accent)', paddingLeft: '2rem' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Le Récit</h2>

        <p style={{ fontSize: '1.15rem', lineHeight: '1.9', marginBottom: '1.5rem', color: 'var(--hv-grey)' }}>
          Diego Armando Maradona n'est pas un footballeur. Il est une religion à lui seul.
        </p>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.9', marginBottom: '1.5rem', color: 'var(--hv-grey)' }}>
          Né dans la villa 31 de Buenos Aires, dans la poussière et la chaleur de Fiorito, il a appris le monde avec un ballon comme unique boussole. Pas de coach. Pas d'académie. Juste une ruelle, deux briques, et un don que personne sur Terre n'a su expliquer.
        </p>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.9', marginBottom: '1.5rem', color: 'var(--hv-grey)' }}>
          Il a joué pour l'Argentine comme d'autres meurent pour leur pays. Le maillot bleu et blanc n'était pas un uniforme — c'était sa peau. Et en 1986, au Mexique, il a fait quelque chose que personne n'avait fait avant, ni ne fera après : il a battu l'Angleterre deux fois en quatre minutes.
        </p>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.9', marginBottom: '1.5rem', color: 'var(--hv-grey)' }}>
          La première fois, avec la main de Dieu.<br/>
          La deuxième, avec ses jambes.
        </p>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.9', marginBottom: '2rem', color: 'var(--hv-grey)' }}>
          Le monde entier a vu. Le monde entier a jugé. Maradona, lui, a souri.
        </p>
        
        <p style={{ fontSize: '1.1rem', lineHeight: '1.9', marginBottom: '1.5rem', color: 'var(--hv-grey)' }}>
          À Naples, il n'est pas arrivé comme une star. Il est arrivé comme un Messie.
        </p>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.9', marginBottom: '1.5rem', color: 'var(--hv-grey)' }}>
          Le Napoli était une équipe du Sud dans un pays qui méprisait le Sud. Un club sans titre, sans argent, sans espoir. Diego est descendu de l'avion et a regardé le stade San Paolo comme si c'était sa maison.
        </p>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.9', marginBottom: '1.5rem', color: 'var(--hv-grey)' }}>
          Deux Scudettos. Une Coupe UEFA. Le Nord humilié. Le Sud relevé.
        </p>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.9', marginBottom: '2rem', color: 'var(--hv-grey)' }}>
          Aujourd'hui encore, des fresques de lui ornent les murs de la ville. Des autels dans les ruelles. Des cierges allumés pour un homme qui respirait encore. À sa mort, Naples a pleuré pendant trois jours.
        </p>

        <p style={{ fontSize: '1.1rem', lineHeight: '1.9', marginBottom: '1.5rem', color: 'var(--hv-grey)' }}>
          Il avait des failles aussi larges que son talent. Il a perdu des batailles contre lui-même que personne ne lui demandait de mener. Il a menti, trébuchait, recommençait.
        </p>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.9', marginBottom: '2rem', color: 'var(--hv-grey)' }}>
          Et c'est précisément pour cela qu'il est immortel.<br/>
          Il n'était pas un dieu. Il était un homme — le plus humain de tous les génies — qui a joué comme un dieu pendant dix ans.
        </p>

        <p style={{ fontSize: '1.15rem', lineHeight: '1.9', fontStyle: 'italic', color: 'var(--hv-black)', fontWeight: '500' }}>
          Cette œuvre n'est pas un portrait. C'est une mémoire que vous accrochez au mur.
        </p>
      </section>

      {/* Valeurs */}
      <section style={{ marginBottom: '5rem' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Valeurs associées</h2>
        <div style={{ display: 'grid', gap: '1.5rem' }}>
          {[
            {
              valeur: 'Passion',
              texte: 'Le maillot porté comme une seconde peau — le foot vécu comme une religion collective.'
            },
            {
              valeur: 'Transmission',
              texte: "De Fiorito à Naples — le génie qui traverse les classes sociales et les continents."
            },
            {
              valeur: 'Résilience',
              texte: "Les chutes, les rechutes, les retours — l'homme qui refusait de rester à terre."
            },
            {
              valeur: 'Universalité',
              texte: "Argentin, Napolitain, et planétaire — il appartient à ceux qui ont rêvé grand depuis trop bas."
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
          HG-460-086-1
        </p>
        <p style={{ fontSize: '0.85rem', color: '#aaa', lineHeight: '1.8' }}>
          460 : Buenos Aires, Villa Fiorito. Naissance du génie.<br />
          086 : Mexico 1986. La Coupe du Monde la plus personnelle de l'histoire.<br />
          1 : Premier et unique.
        </p>
      </section>

      {/* CTA Acquisition */}
      <section style={{ textAlign: 'center', padding: '4rem 2rem', backgroundColor: 'var(--hv-black)', color: 'white' }}>
        <p style={{ fontSize: '0.85rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#aaa', marginBottom: '1rem' }}>
          Édition signée XXL – 100×80 cm
        </p>
        <h2 style={{ fontSize: '2rem', color: 'white', marginBottom: '0.5rem' }}>Tirage Plexiglas – "Maradona"</h2>
        <p style={{ fontStyle: 'italic', color: '#aaa', marginBottom: '2rem' }}>
          "Quand je mourrai, je veux que les gens disent : il a joué au football."<br/>
          Il a joué. Et comment.<br/><br/>
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

export default NexusMaradona;
