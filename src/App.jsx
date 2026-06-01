import './index.css';

function App() {
  return (
    <div style={{
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh', 
      backgroundColor: '#050505', 
      color: '#ffffff',
      fontFamily: 'Inter, system-ui, sans-serif',
      textAlign: 'center',
      padding: '20px'
    }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem', letterSpacing: '0.1em', fontWeight: 'bold' }}>HUMANVALUES</h1>
      <div style={{ width: '50px', height: '2px', backgroundColor: '#333', marginBottom: '2rem' }}></div>
      <p style={{ fontSize: '1.2rem', color: '#888', maxWidth: '600px', lineHeight: '1.6' }}>
        Notre portail est actuellement en cours de mise à jour pour vous offrir une meilleure expérience.<br/><br/>
        Bientôt disponible.
      </p>
    </div>
  );
}

export default App;
