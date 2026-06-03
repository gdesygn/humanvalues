import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const highlights = [
  {
    code: "HG-776-276-4",
    title: "L'Inclusion Universelle",
    subtitle: "Du sport de légende à l'engagement institutionnel.",
    link: "/nexus",
    linkText: "Lire le récit"
  },
  {
    code: "COLLECTION INCLUSION",
    title: "L'Humilité au-delà de l'Ombre",
    subtitle: "La soumission absolue d'un corps à la discipline du geste.",
    link: "/galerie",
    linkText: "Découvrir l'œuvre"
  },
  {
    code: "HÉRITAGE LOCAL",
    title: "L'Excellence Tissée",
    subtitle: "Des architectes invisibles de la beauté textile stéphanoise.",
    link: "/galerie",
    linkText: "Découvrir l'œuvre"
  }
];

const Home = () => {
  const [currentHighlight, setCurrentHighlight] = useState(0);

  useEffect(() => {
    // Rotation toutes les 8 secondes
    const interval = setInterval(() => {
      setCurrentHighlight((prev) => (prev + 1) % highlights.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const highlight = highlights[currentHighlight];

  return (
    <div className="container">
      <div className="hero" style={{ textAlign: 'center', marginBottom: '15vh', marginTop: '10vh' }}>
        <h1>HumanValues</h1>
        <p className="subtitle" style={{ fontSize: '1.4rem', fontWeight: '600', color: 'var(--hv-black)', marginBottom: '1rem' }}>Maison culturelle des récits universels</p>
        <p className="description" style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto', color: 'var(--hv-grey)', lineHeight: '1.6' }}>
          Des Nexus narratifs où sport, territoires et valeurs humaines convergent.<br />
          Notre mission est de soutenir le développement et la visibilité du sport adapté.
        </p>
        <div className="spacer-lg" style={{ height: '2rem' }}></div>
        <Link to="/nexus" className="btn-accent">Explorer le Registre</Link>
      </div>

      <div style={{ maxWidth: '700px', margin: '0 auto', marginBottom: '15vh' }}>
        <p>Bienvenue.</p>
        <p>Ce lieu n'est ni un musée, ni une boutique, ni une école.<br/>
        Il est un peu tout cela à la fois.</p>
        <p>HumanValues est une maison culturelle.<br/>
        Chaque Nexus que vous trouverez ici est un récit qui tisse ensemble un sport, un lieu, un visage, un objet – et par-dessus tout, une valeur humaine : résilience, transmission, inclusion, dignité.</p>
        <p>Derrière ces récits, il y a un collectif d'athlètes, d'éducateurs, d'institutions et de créateurs.<br/>
        Devant, il y a vous – si vous venez pour apprendre, ressentir ou participer.</p>
        <p>Ce site est vivant. Il grandit Nexus après Nexus.</p>
        <p style={{ marginTop: '1.5rem', fontWeight: '500' }}>
          Parcourez les 13 ailes thématiques de notre Registre : <br/>
          <Link to="/galerie#mythes" style={{ color: 'var(--hv-accent)' }}>Les Mythes</Link> — 
          <Link to="/galerie#olympe" style={{ color: 'var(--hv-accent)' }}> L'Olympe</Link> — 
          <Link to="/galerie#arene" style={{ color: 'var(--hv-accent)' }}> L'Arène</Link> — 
          <Link to="/galerie#fluides" style={{ color: 'var(--hv-accent)' }}> Les Fluides</Link> — 
          <Link to="/galerie#ancrage" style={{ color: 'var(--hv-accent)' }}> L'Ancrage</Link> — 
          <Link to="/galerie#edifice" style={{ color: 'var(--hv-accent)' }}> L'Édifice</Link> — 
          <Link to="/galerie#langage" style={{ color: 'var(--hv-accent)' }}> Le Langage</Link> — 
          <Link to="/galerie#artefacts" style={{ color: 'var(--hv-accent)' }}> Les Artefacts</Link>.
        </p>
        <p style={{ marginTop: '2rem', fontStyle: 'italic' }}>— Le Conseil des Nexus</p>
      </div>

      {/* ROTATION DYNAMIQUE */}
      <div style={{ borderTop: '1px solid var(--hv-light-grey)', paddingTop: '4rem', textAlign: 'center', height: '250px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <p style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.8rem', color: 'var(--hv-grey)', transition: 'opacity 0.5s' }}>
          {highlight.code}
        </p>
        <h2 style={{ transition: 'opacity 0.5s' }}>{highlight.title}</h2>
        <p style={{ transition: 'opacity 0.5s', marginBottom: '1.5rem' }}>{highlight.subtitle}</p>
        <Link to={highlight.link} style={{ textDecoration: 'underline', color: 'var(--hv-accent)' }}>{highlight.linkText}</Link>
      </div>
    </div>
  );
};

export default Home;
