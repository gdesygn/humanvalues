import { BrowserRouter as Router, Routes, Route, Link, NavLink, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
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

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    // Si on a un hash (ex: #pantheon), on ne scrolle pas brutalement en haut
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname]);
  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nexus" element={<Nexus />} />
          <Route path="/galerie" element={<Galerie />} />
          <Route path="/collectif" element={<Collectif />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/institution" element={<Institution />} />
          <Route path="/mentions-legales" element={<Legal />} />
          <Route path="/cgv" element={<Legal />} />
          <Route path="/confidentialite" element={<Legal />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
