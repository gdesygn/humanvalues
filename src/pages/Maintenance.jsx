import React from 'react';

const Maintenance = () => {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#0a0a0a',
      color: '#ffffff',
      fontFamily: '"Outfit", sans-serif',
      padding: '2rem',
      textAlign: 'center'
    }}>
      <div style={{
        maxWidth: '600px',
        padding: '3rem',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        borderRadius: '12px',
        background: 'linear-gradient(145deg, rgba(20,20,20,1) 0%, rgba(10,10,10,1) 100%)',
        boxShadow: '0 20px 40px rgba(0,0,0,0.5)'
      }}>
        <h1 style={{ fontSize: '3rem', margin: '0 0 1rem 0', letterSpacing: '-0.02em' }}>HV.</h1>
        <h2 style={{ fontSize: '1.5rem', fontWeight: '400', margin: '0 0 1.5rem 0', color: '#888' }}>
          Maintenance & Audit en cours
        </h2>
        <p style={{ lineHeight: '1.6', color: '#ccc', marginBottom: '2rem' }}>
          L'Escadron Qualité (Brigade Anti-Coquilles) procède actuellement à des tests d'intégrité sur la galerie et l'expérience utilisateur.
        </p>
        <div style={{
          width: '40px',
          height: '4px',
          backgroundColor: '#333',
          margin: '0 auto',
          borderRadius: '2px',
          overflow: 'hidden',
          position: 'relative'
        }}>
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            width: '100%',
            backgroundColor: '#ffffff',
            animation: 'pulse 1.5s infinite ease-in-out'
          }}></div>
        </div>
      </div>
      <style>{`
        @keyframes pulse {
          0% { opacity: 0.2; }
          50% { opacity: 1; }
          100% { opacity: 0.2; }
        }
      `}</style>
    </div>
  );
};

export default Maintenance;
