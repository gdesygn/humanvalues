import React from 'react';
import { Link } from 'react-router-dom';

const Collectif = () => {
  return (
    <div className="container" style={{ maxWidth: '800px', margin: '0 auto', paddingBottom: '4rem' }}>
      <header style={{ marginBottom: '4rem', textAlign: 'center' }}>
        <h1>Le Collectif & Les Valeurs</h1>
        <p style={{ fontStyle: 'italic', fontSize: '1.2rem', color: 'var(--hv-grey)' }}>
          L'institution, la charte et le Conseil des Nexus.
        </p>
        
        <div style={{ maxWidth: '600px', margin: '2rem auto 0 auto', padding: '1.5rem', backgroundColor: '#f9f9f9', border: '1px solid #eee', textAlign: 'left' }}>
          <p style={{ margin: '0', fontSize: '1rem', lineHeight: '1.5', fontWeight: '500' }}>
            HumanValues est une Maison Culturelle. Nos récits (Nexus) sont étudiés et validés par notre équipe éditoriale pour garantir leur authenticité.
          </p>
        </div>
      </header>

      <section className="nexus-reading" style={{ marginBottom: '4rem' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>La Charte Fondatrice</h2>
        <p>
          HumanValues (HV) est une Maison Culturelle et une Institution Moderne. Sa mission : bâtir un système narratif mondial reliant les cultures, les sports et les mémoires par le prisme de valeurs humaines universelles.
        </p>
      </section>

      <section className="nexus-reading" style={{ marginBottom: '4rem' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Les 3 Piliers</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem', marginTop: '2rem' }}>
          <div>
            <h3 style={{ fontSize: '1.3rem', color: 'var(--hv-black)', marginBottom: '0.5rem' }}>I. Transmission</h3>
            <p style={{ margin: 0 }}>La transmission n'est pas un don – c'est un relais que l'on accepte de porter. Relier les pionniers d'hier aux acteurs de demain.</p>
          </div>
          <div>
            <h3 style={{ fontSize: '1.3rem', color: 'var(--hv-black)', marginBottom: '0.5rem' }}>II. Résilience</h3>
            <p style={{ margin: 0 }}>Le corps vieillit, la volonté s'affûte. Continuer à avancer est un acte de rébellion silencieuse et magnifique contre la fatalité.</p>
          </div>
          <div>
            <h3 style={{ fontSize: '1.3rem', color: 'var(--hv-black)', marginBottom: '0.5rem' }}>III. Partage</h3>
            <p style={{ margin: 0 }}>Le filet ne sépare pas les hommes, il les réunit. Le terrain n'a pas d'ennemis – seulement des équipiers qu'on ne connaît pas encore.</p>
          </div>
        </div>
      </section>

      <section className="nexus-reading" style={{ marginBottom: '4rem' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Le Conseil des Nexus</h2>
        <p style={{ fontStyle: 'italic', color: 'var(--hv-grey)', marginBottom: '2rem' }}>
          Là où les récits naissent, là où les récits sont jugés.
        </p>

        <p style={{ marginBottom: '2rem', lineHeight: '1.8' }}>
          L'institution est régie par la transparence, la rigueur et l'éthique. Le Conseil analyse et valide les <strong>Nexus Narratifs HumanValues</strong> — garantissant que chaque récit intégré au Registre porte une vérité, une force et une cohérence dignes de l'Institution.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem', marginBottom: '2rem' }}>

          <div style={{ padding: '1.5rem 1.8rem', borderLeft: '4px solid var(--hv-black)', backgroundColor: '#fafafa' }}>
            <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '0.4rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>⬛ L'Omniscient</h3>
            <p style={{ margin: 0, lineHeight: '1.7', color: '#333' }}>
              Vision totale. Intelligence stratégique. Il perçoit ce que les autres ne voient pas encore — les cohérences profondes, les lacunes narratives, les récits qui transcendent leur époque. Son verdict est final.
            </p>
          </div>

          <div style={{ padding: '1.5rem 1.8rem', borderLeft: '4px solid var(--hv-accent)', backgroundColor: '#fafafa' }}>
            <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '0.4rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>🔴 Le Brutal Board</h3>
            <p style={{ margin: 0, lineHeight: '1.7', color: '#333' }}>
              Pas de concession. Pas de complaisance. Le Brutal Board évalue chaque Nexus à l'aune d'un seul critère : <em>ce récit mérite-t-il d'exister ?</em> Il traque la falsification, brise les faux mythes, et n'approuve que ce qui résiste à l'épreuve du réel.
            </p>
          </div>

          <div style={{ padding: '1.5rem 1.8rem', borderLeft: '4px solid #888', backgroundColor: '#fafafa' }}>
            <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '0.4rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>⚖️ La Constitution</h3>
            <p style={{ margin: 0, lineHeight: '1.7', color: '#333' }}>
              Gardienne des principes fondateurs. Elle s'assure que chaque Nexus validé est aligné avec les valeurs cardinales de l'Institution — universalité, dignité, excellence, transmission. Sans son aval, aucun récit n'entre au Registre.
            </p>
          </div>
        </div>

        <p style={{ fontStyle: 'italic', paddingLeft: '1rem', borderLeft: '3px solid var(--hv-accent)', color: '#555', marginBottom: '1.5rem' }}>
          Trois instances. Une seule exigence commune : que chaque Nexus soit vrai, fort, et durable.
        </p>

        <p style={{ marginTop: '1rem', fontWeight: 'bold' }}>
          ✅ Les nouveaux récits sont régulièrement soumis, délibérés et intégrés au Registre.
        </p>
      </section>

      <section className="nexus-reading" style={{ marginBottom: '4rem' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>L'Équipe Éditoriale</h2>
        <p style={{ fontStyle: 'italic', color: 'var(--hv-grey)', marginBottom: '2rem' }}>
          Les gardiens de la forme, du fond et de la rigueur littéraire.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
          <div style={{ padding: '1.5rem', border: '1px solid #eee', backgroundColor: '#fafafa', borderRadius: '4px' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '0.5rem', color: 'var(--hv-black)' }}>Alexandre</h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--hv-grey)', textTransform: 'uppercase', letterSpacing: '0.05em', margin: '0 0 0.8rem 0' }}>Directeur Éditorial & Technique</p>
            <p style={{ margin: 0, fontSize: '0.95rem', lineHeight: '1.6', color: '#555' }}>
              Coordonne la chaîne de production littéraire. Il veille à ce que l'architecture technique du registre soutienne parfaitement la clarté et l'accessibilité des textes.
            </p>
          </div>

          <div style={{ padding: '1.5rem', border: '1px solid #eee', backgroundColor: '#fafafa', borderRadius: '4px' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '0.5rem', color: 'var(--hv-black)' }}>Céline</h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--hv-grey)', textTransform: 'uppercase', letterSpacing: '0.05em', margin: '0 0 0.8rem 0' }}>Correctrice & Garante de Cohérence</p>
            <p style={{ margin: 0, fontSize: '0.95rem', lineHeight: '1.6', color: '#555' }}>
              Spécialiste de la cohérence et de l'éthique de la charte. Elle passe chaque texte sous la loupe de la sincérité émotionnelle et du respect des faits décrits.
            </p>
          </div>

          <div style={{ padding: '1.5rem', border: '1px solid #eee', backgroundColor: '#fafafa', borderRadius: '4px' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '0.5rem', color: 'var(--hv-black)' }}>David</h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--hv-grey)', textTransform: 'uppercase', letterSpacing: '0.05em', margin: '0 0 0.8rem 0' }}>Concepteur de Récits & Archives</p>
            <p style={{ margin: 0, fontSize: '0.95rem', lineHeight: '1.6', color: '#555' }}>
              Recherche les fils conducteurs historiques et documente la véracité des parcours d'athlètes et de territoires pour tisser les bases de chaque Nexus.
            </p>
          </div>

          <div style={{ padding: '1.5rem', border: '1px solid #eee', backgroundColor: '#fafafa', borderRadius: '4px' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '0.5rem', color: 'var(--hv-black)' }}>Sophie</h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--hv-grey)', textTransform: 'uppercase', letterSpacing: '0.05em', margin: '0 0 0.8rem 0' }}>Validation Finale & Relecture</p>
            <p style={{ margin: 0, fontSize: '0.95rem', lineHeight: '1.6', color: '#555' }}>
              Détentrice du regard holistique final. Elle s'assure que la facture stylistique et le ton de chaque publication respectent les exigences de rigueur de la Maison.
            </p>
          </div>
        </div>
      </section>

      <hr style={{ border: 'none', borderTop: '1px solid #eee', margin: '3rem 0' }} />

      <div style={{ textAlign: 'center', backgroundColor: 'var(--hv-cream)', padding: '3rem', border: '1px solid var(--hv-light-grey)' }}>
        <p style={{ fontWeight: 'bold', fontSize: '1.1rem', marginBottom: '1rem' }}>
          Ces valeurs animent chaque Nexus enregistré.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', marginTop: '2rem' }}>
          <Link to="/nexus" style={{ color: 'var(--hv-black)', fontWeight: 'bold', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem', transition: 'color 0.3s' }} className="hover-accent">
            → Découvrir le Registre et activer le code HG
          </Link>
          <a href="mailto:contact@humanvalues.fr?subject=Proposer%20un%20Nexus" style={{ color: 'var(--hv-black)', fontWeight: 'bold', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem', transition: 'color 0.3s' }} className="hover-accent">
            → Proposer un Nexus
          </a>
          <a href="mailto:contact@humanvalues.fr?subject=Rejoindre%20le%20réseau%20HV" style={{ color: 'var(--hv-black)', fontWeight: 'bold', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem', transition: 'color 0.3s' }} className="hover-accent">
            → Rejoindre le réseau HV
          </a>
        </div>
      </div>

      <footer style={{ textAlign: 'center', marginTop: '4rem', fontSize: '0.9rem', color: '#888' }}>
        HumanValues HV – Maison culturelle des récits universels<br/>
        <span style={{ fontStyle: 'italic' }}>Des récits pour relier ce qui compte</span>
      </footer>
    </div>
  );
};

export default Collectif;
