import React from 'react';

const CGV = () => {
  return (
    <div className="container animate-fade-in-up" style={{ maxWidth: '800px', margin: '4rem auto', padding: '0 2rem', minHeight: '60vh' }}>
      <h1 style={{ fontSize: '1.8rem', marginBottom: '1rem', fontFamily: 'var(--font-title, Playfair Display)', color: 'var(--hv-black)' }}>
        Conditions Générales de Vente
      </h1>
      <p style={{ fontSize: '1.2rem', color: 'var(--hv-grey)', marginBottom: '3rem', borderBottom: '2px solid var(--hv-light-grey)', paddingBottom: '1rem' }}>
        HumanValues
      </p>
      
      <div style={{ fontSize: '1.1rem', color: 'var(--hv-grey)', lineHeight: '1.8' }}>
        <p style={{ marginBottom: '2rem', fontStyle: 'italic' }}>
          Date d’entrée en vigueur : Juin 2026<br/>
          Version : 1.0
        </p>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.8rem', color: 'var(--hv-black)', marginBottom: '1.5rem', fontFamily: 'var(--font-title, Playfair Display)' }}>Article 1 – Champ d’application</h2>
          <p style={{ marginBottom: '1rem' }}>Les présentes Conditions Générales de Vente (CGV) s’appliquent à l’ensemble des acquisitions effectuées sur le site humanvalues.art par tout acheteur (ci-après « le Client ») auprès de HumanValues HV (ci-après « la Maison Culturelle »).</p>
          <p>Toute commande implique l’acceptation sans réserve des présentes CGV.</p>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.8rem', color: 'var(--hv-black)', marginBottom: '1.5rem', fontFamily: 'var(--font-title, Playfair Display)' }}>Article 2 – Produits et services</h2>
          <p style={{ marginBottom: '1.5rem' }}>HumanValues HV propose :</p>
          
          <div style={{ overflowX: 'auto', marginBottom: '2rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '1rem' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid var(--hv-light-grey)' }}>
                  <th style={{ padding: '1rem 0.5rem', color: 'var(--hv-black)' }}>Type de produit</th>
                  <th style={{ padding: '1rem 0.5rem', color: 'var(--hv-black)' }}>Description</th>
                  <th style={{ padding: '1rem 0.5rem', color: 'var(--hv-black)' }}>Disponibilité</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid #eee' }}>
                  <td style={{ padding: '1rem 0.5rem', fontWeight: '500', color: 'var(--hv-black)' }}>Dossier Nexus numérique</td>
                  <td style={{ padding: '1rem 0.5rem' }}>Archive PDF (16 pages) comprenant récit, valeurs décryptées, code HG, annexes – référence HV-DOC-001</td>
                  <td style={{ padding: '1rem 0.5rem' }}>Téléchargement immédiat</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #eee' }}>
                  <td style={{ padding: '1rem 0.5rem', fontWeight: '500', color: 'var(--hv-black)' }}>Édition limitée (PDF + audio)</td>
                  <td style={{ padding: '1rem 0.5rem' }}>Dossier Nexus + lecture audio (15 min) – tirage numéroté à 100 exemplaires</td>
                  <td style={{ padding: '1rem 0.5rem' }}>Sur précommande</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #eee' }}>
                  <td style={{ padding: '1rem 0.5rem', fontWeight: '500', color: 'var(--hv-black)' }}>Tirage Plexiglas Premium</td>
                  <td style={{ padding: '1rem 0.5rem' }}>Œuvre d’art (ex: "La terre battue") – 30x40 cm, tirage signé, certificat d’authenticité</td>
                  <td style={{ padding: '1rem 0.5rem' }}>Contact galerie</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p style={{ padding: '1.5rem', backgroundColor: '#f9f9f9', borderLeft: '4px solid var(--hv-accent)', fontStyle: 'italic' }}>
            Chaque dossier numérique acquis contribue à soutenir le développement du sport adapté (cécifoot, handisport, inclusion des aînés). Le Client soutient ainsi nos actions de valorisation et d'inclusion.
          </p>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.8rem', color: 'var(--hv-black)', marginBottom: '1.5rem', fontFamily: 'var(--font-title, Playfair Display)' }}>Article 3 – Prix</h2>
          <p style={{ marginBottom: '1.5rem' }}>Les prix sont indiqués en euros, toutes taxes comprises (TVA non applicable – article 293 B du CGI).</p>
          
          <ul style={{ listStyleType: 'none', padding: 0, marginBottom: '1.5rem' }}>
            <li style={{ padding: '0.8rem 0', borderBottom: '1px solid #eee', display: 'flex', justifyContent: 'space-between' }}>
              <span>Dossier Nexus #1 – Transmission & Héritage</span>
              <strong style={{ color: 'var(--hv-black)' }}>19 €</strong>
            </li>
            <li style={{ padding: '0.8rem 0', borderBottom: '1px solid #eee', display: 'flex', justifyContent: 'space-between' }}>
              <span>Édition limitée (PDF + audio)</span>
              <strong style={{ color: 'var(--hv-black)' }}>39 €</strong>
            </li>
            <li style={{ padding: '0.8rem 0', borderBottom: '1px solid #eee', display: 'flex', justifyContent: 'space-between' }}>
              <span>Tirage Plexiglas Premium</span>
              <strong style={{ color: 'var(--hv-black)' }}>149 € <span style={{ fontSize: '0.9rem', color: '#999', fontWeight: 'normal' }}>(hors livraison)</span></strong>
            </li>
          </ul>
          
          <p>HumanValues HV se réserve le droit de modifier ses prix à tout moment. Les produits sont facturés sur la base des tarifs en vigueur au moment de la validation de la commande.</p>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.8rem', color: 'var(--hv-black)', marginBottom: '1.5rem', fontFamily: 'var(--font-title, Playfair Display)' }}>Article 4 – Commande et paiement</h2>
          
          <h3 style={{ fontSize: '1.2rem', color: 'var(--hv-black)', marginBottom: '1rem', marginTop: '2rem' }}>4.1 – Processus de commande</h3>
          <ol style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
            <li style={{ marginBottom: '0.5rem' }}>Le Client sélectionne un produit sur le site (Registre → Salle des Acquisitions).</li>
            <li style={{ marginBottom: '0.5rem' }}>Il est redirigé vers la plateforme sécurisée Lemon Squeezy (ou Stripe).</li>
            <li style={{ marginBottom: '0.5rem' }}>Il renseigne son adresse email et ses coordonnées de paiement.</li>
            <li style={{ marginBottom: '0.5rem' }}>Il valide sa commande après avoir pris connaissance des présentes CGV.</li>
          </ol>

          <h3 style={{ fontSize: '1.2rem', color: 'var(--hv-black)', marginBottom: '1rem', marginTop: '2rem' }}>4.2 – Moyens de paiement</h3>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
            <li style={{ marginBottom: '0.5rem' }}>Cartes bancaires (Visa, MasterCard, American Express)</li>
            <li style={{ marginBottom: '0.5rem' }}>Autres moyens proposés par Lemon Squeezy (Apple Pay, Google Pay, etc.)</li>
          </ul>
          <p style={{ marginBottom: '1.5rem' }}>HumanValues HV ne manipule ni ne stocke aucune donnée bancaire. Le paiement est entièrement externalisé et sécurisé par Lemon Squeezy.</p>

          <h3 style={{ fontSize: '1.2rem', color: 'var(--hv-black)', marginBottom: '1rem', marginTop: '2rem' }}>4.3 – Facturation</h3>
          <p>Un reçu (facture) est envoyé par email automatiquement à l’issue du paiement.</p>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.8rem', color: 'var(--hv-black)', marginBottom: '1.5rem', fontFamily: 'var(--font-title, Playfair Display)' }}>Article 5 – Livraison (produits numériques)</h2>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
            <li style={{ marginBottom: '0.8rem' }}>Le dossier Nexus (PDF) est disponible en téléchargement immédiat après confirmation du paiement.</li>
            <li style={{ marginBottom: '0.8rem' }}>Un lien de téléchargement sécurisé est envoyé à l’adresse email renseignée par le Client.</li>
            <li style={{ marginBottom: '0.8rem' }}>Validité du lien : 48 heures (3 tentatives de téléchargement maximum).</li>
            <li style={{ marginBottom: '0.8rem' }}>Après expiration, le Client peut contacter HumanValues HV pour obtenir un nouveau lien (justificatif d’achat requis).</li>
            <li style={{ marginBottom: '0.8rem' }}>Aucune livraison physique n’est effectuée pour les produits numériques.</li>
          </ul>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.8rem', color: 'var(--hv-black)', marginBottom: '1.5rem', fontFamily: 'var(--font-title, Playfair Display)' }}>Article 6 – Droit de rétractation et retour</h2>
          
          <h3 style={{ fontSize: '1.2rem', color: 'var(--hv-black)', marginBottom: '1rem' }}>6.1 – Produits numériques</h3>
          <p style={{ marginBottom: '1rem' }}>Conformément à l’article L221-28 du Code de la consommation :</p>
          <blockquote style={{ borderLeft: '4px solid var(--hv-light-grey)', paddingLeft: '1.5rem', margin: '0 0 1.5rem 0', fontStyle: 'italic', color: '#666' }}>
            « Le droit de rétractation ne peut être exercé pour les contrats de fourniture de contenu numérique non fourni sur un support matériel, dont l’exécution a commencé après accord préalable exprès du consommateur et renoncement exprès à son droit de rétractation. »
          </blockquote>
          <p style={{ marginBottom: '2rem' }}>En cliquant sur le bouton « Acquérir l’archive » et en téléchargeant le dossier, le Client renonce expressément à son droit de rétractation. Aucun remboursement ne sera effectué après téléchargement.</p>

          <h3 style={{ fontSize: '1.2rem', color: 'var(--hv-black)', marginBottom: '1rem' }}>6.2 – Tirages Plexiglas (produits physiques)</h3>
          <p>Pour les tirages Plexiglas, le Client dispose d’un délai de 14 jours à compter de la réception du produit pour exercer son droit de rétractation, conformément à la loi. Les frais de retour sont à la charge du Client.</p>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.8rem', color: 'var(--hv-black)', marginBottom: '1.5rem', fontFamily: 'var(--font-title, Playfair Display)' }}>Article 7 – Soutien au sport adapté</h2>
          <p style={{ marginBottom: '1rem' }}>HumanValues HV s’engage à soutenir le développement du sport adapté (cécifoot, handisport, inclusion des aînés) par le biais de projets d'exposition ou de dons de mécénat.</p>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.8rem', color: 'var(--hv-black)', marginBottom: '1.5rem', fontFamily: 'var(--font-title, Playfair Display)' }}>Article 8 – Propriété intellectuelle</h2>
          <p style={{ marginBottom: '1rem' }}>Le dossier Nexus, son contenu (textes, mise en page, code HG), ainsi que l’ensemble des œuvres du Registre sont la propriété exclusive de HumanValues HV (marque déposée INPI).</p>
          <p style={{ marginBottom: '1rem' }}>Le Client acquiert un droit d’usage personnel et non commercial :</p>
          <ul style={{ listStyleType: 'none', padding: 0, marginBottom: '1.5rem' }}>
            <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'flex-start' }}><span style={{ color: 'green', marginRight: '10px' }}>✅</span> Télécharger et stocker le PDF sur ses appareils personnels</li>
            <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'flex-start' }}><span style={{ color: 'green', marginRight: '10px' }}>✅</span> Lire et partager le contenu dans un cadre privé ou éducatif (classe, atelier, famille)</li>
            <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'flex-start' }}><span style={{ color: 'red', marginRight: '10px' }}>❌</span> Diffuser, reproduire, commercialiser ou modifier le dossier sans autorisation écrite du Conseil des Nexus</li>
            <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'flex-start' }}><span style={{ color: 'red', marginRight: '10px' }}>❌</span> Extraire le code HG ou les œuvres pour les intégrer dans un autre système</li>
          </ul>
          <p>Toute violation expose le contrevenant à des poursuites civiles et pénales.</p>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.8rem', color: 'var(--hv-black)', marginBottom: '1.5rem', fontFamily: 'var(--font-title, Playfair Display)' }}>Article 9 – Responsabilité</h2>
          <p style={{ marginBottom: '1rem' }}>HumanValues HV met tout en œuvre pour assurer l’exactitude des informations fournies sur le site et dans les dossiers Nexus. Toutefois, la Maison Culturelle ne saurait être tenue responsable :</p>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
            <li style={{ marginBottom: '0.5rem' }}>Des erreurs ou omissions involontaires</li>
            <li style={{ marginBottom: '0.5rem' }}>Des dommages indirects (perte d’exploitation, préjudice immatériel) résultant de l’utilisation du produit</li>
            <li style={{ marginBottom: '0.5rem' }}>Des dysfonctionnements techniques indépendants de sa volonté (plateforme de paiement, hébergement)</li>
          </ul>
          <p>En aucun cas, la responsabilité de HumanValues HV ne pourra excéder le montant payé par le Client pour le produit concerné.</p>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.8rem', color: 'var(--hv-black)', marginBottom: '1.5rem', fontFamily: 'var(--font-title, Playfair Display)' }}>Article 10 – Données personnelles et sécurité</h2>
          <p style={{ marginBottom: '1rem' }}>Conformément au RGPD, les données personnelles collectées (nom, email) sont strictement utilisées pour :</p>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
            <li style={{ marginBottom: '0.5rem' }}>La gestion de la commande et la livraison du lien de téléchargement</li>
            <li style={{ marginBottom: '0.5rem' }}>L’envoi occasionnel d’informations sur les nouveaux Nexus (uniquement si le Client a donné son consentement)</li>
          </ul>
          <p style={{ marginBottom: '1rem' }}>Le Client dispose d’un droit d’accès, de rectification et de suppression de ses données. Pour l’exercer : <a href="mailto:contact@humanvalues.fr" style={{color: 'var(--hv-accent)', textDecoration: 'underline'}}>contact@humanvalues.fr</a></p>
          <p>Le site ne dépose pas de cookies publicitaires. Seuls les cookies techniques indispensables au bon fonctionnement du site sont utilisés.</p>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.8rem', color: 'var(--hv-black)', marginBottom: '1.5rem', fontFamily: 'var(--font-title, Playfair Display)' }}>Article 11 – Preuve de la transaction</h2>
          <p style={{ marginBottom: '1rem' }}>Les registres informatisés de Lemon Squeezy (et, le cas échéant, de Stripe) sont considérés comme preuve de la transaction entre HumanValues HV et le Client.</p>
          <p>En cas de litige, le Client est invité à conserver son reçu (email de confirmation).</p>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.8rem', color: 'var(--hv-black)', marginBottom: '1.5rem', fontFamily: 'var(--font-title, Playfair Display)' }}>Article 12 – Modification des CGV</h2>
          <p>HumanValues HV se réserve le droit de modifier les présentes CGV à tout moment. Les CGV applicables sont celles en vigueur à la date de la commande du Client.</p>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.8rem', color: 'var(--hv-black)', marginBottom: '1.5rem', fontFamily: 'var(--font-title, Playfair Display)' }}>Article 13 – Droit applicable et litiges</h2>
          <p style={{ marginBottom: '1rem' }}>Les présentes CGV sont régies par le droit français.</p>
          <p style={{ marginBottom: '1rem' }}>En cas de litige, une solution amiable sera recherchée avant toute action judiciaire. À défaut d’accord, le litige sera porté devant les tribunaux compétents du ressort de Paris.</p>
          <p>Conformément à l’article L612-1 du Code de la consommation, le Client peut recourir à un médiateur de la consommation (ex: CNPM – Médiation de la consommation).</p>
        </section>

        <div style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid var(--hv-light-grey)', textAlign: 'center', fontSize: '0.95rem' }}>
          <p style={{ fontWeight: '600', color: 'var(--hv-black)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>HumanValues HV – Maison culturelle des récits universels</p>
          <p style={{ fontStyle: 'italic', color: 'var(--hv-accent)' }}>Des récits pour relier ce qui compte</p>
        </div>
        
      </div>
    </div>
  );
};

export default CGV;
