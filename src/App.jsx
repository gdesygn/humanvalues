import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import Nexus from './pages/Nexus';
import Collectif from './pages/Collectif';
import Collections from './pages/Collections';
import Institution from './pages/Institution';
import Galerie from './pages/Galerie';
import Legal from './pages/Legal';
import Footer from './components/Footer';
import './index.css';

const Layout = ({ children }) => (
  <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
    <header className="nav-header">
      <Link to="/" className="nav-logo">HV.</Link>
      <nav className="nav-links">
        <NavLink to="/nexus" className={({isActive}) => isActive ? 'active' : ''}>Registre</NavLink>
        <NavLink to="/galerie" className={({isActive}) => isActive ? 'active' : ''}>Galerie</NavLink>
        <NavLink to="/collectif" className={({isActive}) => isActive ? 'active' : ''}>Collectif</NavLink>
        <NavLink to="/collections" className={({isActive}) => isActive ? 'active' : ''}>Collections</NavLink>
        <NavLink to="/institution" className={({isActive}) => isActive ? 'active' : ''}>Institution</NavLink>
      </nav>
    </header>
    <main style={{ flex: '1 0 auto' }}>
      {children}
    </main>
    <Footer />
  </div>
);

import Maintenance from './pages/Maintenance';

function App() {
  return <Maintenance />;
}

export default App;
