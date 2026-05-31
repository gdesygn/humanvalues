import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer style={{
      backgroundColor: 'var(--hv-black, #111)',
      color: '#fff',
      padding: '4rem 2rem',
      marginTop: '6rem',
      borderTop: '1px solid #333'
    }}>
      <div className="container" style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        gap: '2rem'
      }}>
        <div style={{ flex: '1 1 300px' }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', fontFamily: 'var(--font-title, Playfair Display)' }}>HumanValues</h3>
          <p style={{ color: '#aaa', fontSize: '0.9rem', lineHeight: '1.6' }}>
            La première galerie digitale alliant typographie, design et valeurs humaines. 
            Éditions d'art exclusives, limitées et engagées.
          </p>
        </div>
        
        <div style={{ flex: '1 1 200px' }}>
          <h4 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Navigation</h4>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '0.5rem' }}><Link to="/nexus" style={{ color: '#ccc', textDecoration: 'none' }}>NEXUS</Link></li>
            <li style={{ marginBottom: '0.5rem' }}><Link to="/galerie" style={{ color: '#ccc', textDecoration: 'none' }}>Le Registre</Link></li>
            <li style={{ marginBottom: '0.5rem' }}><Link to="/collections" style={{ color: '#ccc', textDecoration: 'none' }}>Acquisitions</Link></li>
          </ul>
        </div>

        <div style={{ flex: '1 1 200px' }}>
          <h4 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Légal & Informations</h4>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '0.5rem' }}><Link to="/mentions-legales" style={{ color: '#ccc', textDecoration: 'none' }}>Mentions Légales</Link></li>
            <li style={{ marginBottom: '0.5rem' }}><Link to="/cgv" style={{ color: '#ccc', textDecoration: 'none' }}>Conditions Générales de Vente</Link></li>
            <li style={{ marginBottom: '0.5rem' }}><Link to="/confidentialite" style={{ color: '#ccc', textDecoration: 'none' }}>Politique de Confidentialité</Link></li>
          </ul>
        </div>
      </div>
      
      <div style={{
        maxWidth: '1200px',
        margin: '3rem auto 0',
        paddingTop: '2rem',
        borderTop: '1px solid #333',
        textAlign: 'center',
        color: '#777',
        fontSize: '0.8rem'
      }}>
        <p>&copy; {new Date().getFullYear()} HumanValues. Tous droits réservés. L'excellence au service des valeurs.</p>
      </div>
    </footer>
  );
};

export default Footer;
