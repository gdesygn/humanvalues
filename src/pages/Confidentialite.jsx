import React from 'react';

const Confidentialite = () => {
  return (
    <div className="container animate-fade-in-up" style={{ maxWidth: '800px', margin: '4rem auto', padding: '0 2rem', minHeight: '60vh' }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '3rem', borderBottom: '2px solid var(--hv-light-grey)', paddingBottom: '1rem', fontFamily: 'var(--font-title, Playfair Display)', color: 'var(--hv-black)' }}>
        Politique de Confidentialité
      </h1>
      
      <div style={{ fontSize: '1.1rem', color: 'var(--hv-grey)', lineHeight: '1.8' }}>
        <p style={{ fontStyle: 'italic', marginBottom: '2rem' }}>
          Date d’entrée en vigueur : Juin 2026 | Version : 1.0
        </p>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.8rem', color: 'var(--hv-black)', marginBottom: '1.5rem', fontFamily: 'var(--font-title, Playfair Display)' }}>Préambule</h2>
          <p style={{ marginBottom: '1rem' }}>
            HumanValues HV (ci-après « la Maison Culturelle ») attache une importance fondamentale à la protection de vos données personnelles.
          </p>
          <p style={{ marginBottom: '1rem' }}>
            La présente Politique de Confidentialité vous informe de la manière dont nous collectons, utilisons, conservons et protégeons vos informations lorsque vous :
          </p>
          <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', marginBottom: '1rem' }}>
            <li>Naviguez sur notre site <a href="https://humanvalues.art" style={{ color: 'var(--hv-accent)', textDecoration: 'underline' }}>humanvalues.art</a></li>
            <li>Acquérez un dossier Nexus ou une édition limitée</li>
            <li>Nous contactez par email</li>
            <li>Vous abonnez à d’éventuelles communications</li>
          </ul>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.8rem', color: 'var(--hv-black)', marginBottom: '1.5rem', fontFamily: 'var(--font-title, Playfair Display)' }}>Article 1 – Responsable de traitement</h2>
          <p style={{ marginBottom: '1rem' }}>
            <strong>Responsable :</strong> HumanValues HV – représenté par le Conseil des Nexus
          </p>
          <p style={{ marginBottom: '1rem' }}>
            <strong>Contact :</strong> <a href="mailto:contact@humanvalues.fr" style={{ color: 'var(--hv-accent)', textDecoration: 'underline' }}>contact@humanvalues.fr</a>
          </p>
          <p>
            HumanValues HV n’a pas de délégué à la protection des données (DPO) désigné, la structure n’y étant pas légalement tenue (moins de 250 salariés, traitement non sensible). Toute question relative à vos données peut être adressée à l’adresse ci-dessus.
          </p>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.8rem', color: 'var(--hv-black)', marginBottom: '1.5rem', fontFamily: 'var(--font-title, Playfair Display)' }}>Article 2 – Données collectées</h2>
          
          <h3 style={{ fontSize: '1.3rem', color: 'var(--hv-black)', marginBottom: '1rem', marginTop: '1.5rem' }}>2.1 – Données que vous nous fournissez directement</h3>
          <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '1.5rem', fontSize: '0.95rem', border: '1px solid var(--hv-light-grey)' }}>
            <thead>
              <tr style={{ backgroundColor: '#f9f9f9', borderBottom: '1px solid var(--hv-light-grey)' }}>
                <th style={{ padding: '0.75rem', textAlign: 'left', fontWeight: 'bold', borderRight: '1px solid var(--hv-light-grey)' }}>Contexte</th>
                <th style={{ padding: '0.75rem', textAlign: 'left', fontWeight: 'bold' }}>Données collectées</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid var(--hv-light-grey)' }}>
                <td style={{ padding: '0.75rem', borderRight: '1px solid var(--hv-light-grey)' }}>Achat d’un dossier Nexus (via Lemon Squeezy)</td>
                <td style={{ padding: '0.75rem' }}>Adresse email, nom (facultatif), adresse IP (technique)</td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--hv-light-grey)' }}>
                <td style={{ padding: '0.75rem', borderRight: '1px solid var(--hv-light-grey)' }}>Contact via email</td>
                <td style={{ padding: '0.75rem' }}>Nom, prénom, adresse email, tout contenu que vous choisissez de partager</td>
              </tr>
              <tr>
                <td style={{ padding: '0.75rem', borderRight: '1px solid var(--hv-light-grey)' }}>Demande de renseignement (tirages Plexiglas)</td>
                <td style={{ padding: '0.75rem' }}>Nom, email, éventuellement numéro de téléphone</td>
              </tr>
            </tbody>
          </table>

          <p style={{ marginBottom: '0.5rem' }}><strong>HumanValues HV ne collecte jamais :</strong></p>
          <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
            <li>De données bancaires (le paiement est externalisé)</li>
            <li>De données sensibles (santé, origines ethniques, opinions politiques)</li>
            <li>De données relatives aux mineurs de moins de 15 ans</li>
          </ul>

          <h3 style={{ fontSize: '1.3rem', color: 'var(--hv-black)', marginBottom: '1rem', marginTop: '1.5rem' }}>2.2 – Données collectées automatiquement</h3>
          <p style={{ marginBottom: '1rem' }}>
            Lors de votre navigation, notre hébergeur (Vercel) peut collecter des données techniques anonymisées :
          </p>
          <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', marginBottom: '1rem' }}>
            <li>Adresse IP (anonymisée partiellement)</li>
            <li>Type de navigateur, système d’exploitation</li>
            <li>Pages visitées, durée de la visite</li>
          </ul>
          <p>
            Ces données sont utilisées à des fins statistiques et de sécurité. Elles ne permettent pas de vous identifier personnellement.
          </p>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.8rem', color: 'var(--hv-black)', marginBottom: '1.5rem', fontFamily: 'var(--font-title, Playfair Display)' }}>Article 3 – Finalités du traitement</h2>
          <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '1.5rem', fontSize: '0.95rem', border: '1px solid var(--hv-light-grey)' }}>
            <thead>
              <tr style={{ backgroundColor: '#f9f9f9', borderBottom: '1px solid var(--hv-light-grey)' }}>
                <th style={{ padding: '0.75rem', textAlign: 'left', fontWeight: 'bold', borderRight: '1px solid var(--hv-light-grey)' }}>Finalité</th>
                <th style={{ padding: '0.75rem', textAlign: 'left', fontWeight: 'bold', borderRight: '1px solid var(--hv-light-grey)' }}>Base légale</th>
                <th style={{ padding: '0.75rem', textAlign: 'left', fontWeight: 'bold' }}>Données concernées</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid var(--hv-light-grey)' }}>
                <td style={{ padding: '0.75rem', borderRight: '1px solid var(--hv-light-grey)' }}>Gestion et livraison de votre commande</td>
                <td style={{ padding: '0.75rem', borderRight: '1px solid var(--hv-light-grey)' }}>Exécution du contrat</td>
                <td style={{ padding: '0.75rem' }}>Email, nom (facultatif)</td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--hv-light-grey)' }}>
                <td style={{ padding: '0.75rem', borderRight: '1px solid var(--hv-light-grey)' }}>Envoi du lien de téléchargement sécurisé</td>
                <td style={{ padding: '0.75rem', borderRight: '1px solid var(--hv-light-grey)' }}>Exécution du contrat</td>
                <td style={{ padding: '0.75rem' }}>Email</td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--hv-light-grey)' }}>
                <td style={{ padding: '0.75rem', borderRight: '1px solid var(--hv-light-grey)' }}>Réponse à vos demandes de contact</td>
                <td style={{ padding: '0.75rem', borderRight: '1px solid var(--hv-light-grey)' }}>Intérêt légitime</td>
                <td style={{ padding: '0.75rem' }}>Nom, email, contenu du message</td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--hv-light-grey)' }}>
                <td style={{ padding: '0.75rem', borderRight: '1px solid var(--hv-light-grey)' }}>Amélioration du site (statistiques)</td>
                <td style={{ padding: '0.75rem', borderRight: '1px solid var(--hv-light-grey)' }}>Intérêt légitime</td>
                <td style={{ padding: '0.75rem' }}>Données techniques anonymes</td>
              </tr>
              <tr>
                <td style={{ padding: '0.75rem', borderRight: '1px solid var(--hv-light-grey)' }}>Respect des obligations légales (facturation, lutte contre la fraude)</td>
                <td style={{ padding: '0.75rem', borderRight: '1px solid var(--hv-light-grey)' }}>Obligation légale</td>
                <td style={{ padding: '0.75rem' }}>Email, IP, date de transaction</td>
              </tr>
            </tbody>
          </table>
          <p>
            Aucune prospection commerciale (newsletter, offres promotionnelles) n’est effectuée sans votre consentement explicite.
          </p>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.8rem', color: 'var(--hv-black)', marginBottom: '1.5rem', fontFamily: 'var(--font-title, Playfair Display)' }}>Article 4 – Durée de conservation</h2>
          <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '1.5rem', fontSize: '0.95rem', border: '1px solid var(--hv-light-grey)' }}>
            <thead>
              <tr style={{ backgroundColor: '#f9f9f9', borderBottom: '1px solid var(--hv-light-grey)' }}>
                <th style={{ padding: '0.75rem', textAlign: 'left', fontWeight: 'bold', borderRight: '1px solid var(--hv-light-grey)' }}>Type de données</th>
                <th style={{ padding: '0.75rem', textAlign: 'left', fontWeight: 'bold' }}>Durée de conservation</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid var(--hv-light-grey)' }}>
                <td style={{ padding: '0.75rem', borderRight: '1px solid var(--hv-light-grey)' }}>Données de commande (email, nom, reçu)</td>
                <td style={{ padding: '0.75rem' }}>3 ans à compter de la dernière transaction (obligation fiscale et garantie)</td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--hv-light-grey)' }}>
                <td style={{ padding: '0.75rem', borderRight: '1px solid var(--hv-light-grey)' }}>Demandes de contact (emails échangés)</td>
                <td style={{ padding: '0.75rem' }}>1 an après le dernier échange</td>
              </tr>
              <tr>
                <td style={{ padding: '0.75rem', borderRight: '1px solid var(--hv-light-grey)' }}>Données techniques (logs Vercel)</td>
                <td style={{ padding: '0.75rem' }}>30 jours maximum</td>
              </tr>
            </tbody>
          </table>
          <p>
            Passé ces délais, les données sont supprimées ou anonymisées.
          </p>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.8rem', color: 'var(--hv-black)', marginBottom: '1.5rem', fontFamily: 'var(--font-title, Playfair Display)' }}>Article 5 – Destinataires des données</h2>
          <p style={{ marginBottom: '1.5rem' }}>
            Vos données personnelles ne sont ni vendues, ni louées, ni échangées avec des tiers à des fins commerciales.
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            Elles peuvent être transmises aux destinataires suivants (strictement nécessaires au service) :
          </p>
          <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '1.5rem', fontSize: '0.95rem', border: '1px solid var(--hv-light-grey)' }}>
            <thead>
              <tr style={{ backgroundColor: '#f9f9f9', borderBottom: '1px solid var(--hv-light-grey)' }}>
                <th style={{ padding: '0.75rem', textAlign: 'left', fontWeight: 'bold', borderRight: '1px solid var(--hv-light-grey)' }}>Destinataire</th>
                <th style={{ padding: '0.75rem', textAlign: 'left', fontWeight: 'bold', borderRight: '1px solid var(--hv-light-grey)' }}>Finalité</th>
                <th style={{ padding: '0.75rem', textAlign: 'left', fontWeight: 'bold' }}>Données transmises</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid var(--hv-light-grey)' }}>
                <td style={{ padding: '0.75rem', borderRight: '1px solid var(--hv-light-grey)' }}>Lemon Squeezy (plateforme de paiement)</td>
                <td style={{ padding: '0.75rem', borderRight: '1px solid var(--hv-light-grey)' }}>Traitement du paiement et génération du reçu</td>
                <td style={{ padding: '0.75rem' }}>Email, nom (facultatif), IP technique</td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--hv-light-grey)' }}>
                <td style={{ padding: '0.75rem', borderRight: '1px solid var(--hv-light-grey)' }}>Vercel Inc. (hébergeur)</td>
                <td style={{ padding: '0.75rem', borderRight: '1px solid var(--hv-light-grey)' }}>Hébergement du site, logs de sécurité</td>
                <td style={{ padding: '0.75rem' }}>IP anonymisée, données techniques</td>
              </tr>
              <tr>
                <td style={{ padding: '0.75rem', borderRight: '1px solid var(--hv-light-grey)' }}>Services de messagerie (Gmail, ProtonMail, etc.)</td>
                <td style={{ padding: '0.75rem', borderRight: '1px solid var(--hv-light-grey)' }}>Réception et envoi des emails</td>
                <td style={{ padding: '0.75rem' }}>Nom, email, contenu</td>
              </tr>
            </tbody>
          </table>
          <p>
            HumanValues HV s’assure que tous ses sous-traitants respectent le RGPD et offrent des garanties suffisantes en matière de sécurité.
          </p>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.8rem', color: 'var(--hv-black)', marginBottom: '1.5rem', fontFamily: 'var(--font-title, Playfair Display)' }}>Article 6 – Transferts hors UE</h2>
          <p style={{ marginBottom: '1rem' }}>
            Le paiement via Lemon Squeezy peut impliquer un transfert de données vers les États-Unis. Lemon Squeezy est certifié Privacy Shield (ou équivalent) et respecte les clauses contractuelles types de la Commission européenne.
          </p>
          <p style={{ marginBottom: '1rem' }}>
            Vercel Inc. est également basé aux États-Unis et respecte le cadre légal applicable.
          </p>
          <p>
            En acceptant la présente politique, vous consentez à ces transferts dans les conditions décrites.
          </p>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.8rem', color: 'var(--hv-black)', marginBottom: '1.5rem', fontFamily: 'var(--font-title, Playfair Display)' }}>Article 7 – Vos droits (RGPD)</h2>
          <p style={{ marginBottom: '1.5rem' }}>
            Conformément au Règlement (UE) 2016/679 et à la loi Informatique et Libertés, vous disposez des droits suivants :
          </p>
          <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '2rem', fontSize: '0.95rem', border: '1px solid var(--hv-light-grey)' }}>
            <thead>
              <tr style={{ backgroundColor: '#f9f9f9', borderBottom: '1px solid var(--hv-light-grey)' }}>
                <th style={{ padding: '0.75rem', textAlign: 'left', fontWeight: 'bold', borderRight: '1px solid var(--hv-light-grey)' }}>Droit</th>
                <th style={{ padding: '0.75rem', textAlign: 'left', fontWeight: 'bold', borderRight: '1px solid var(--hv-light-grey)' }}>Description</th>
                <th style={{ padding: '0.75rem', textAlign: 'left', fontWeight: 'bold' }}>Délai de réponse</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid var(--hv-light-grey)' }}>
                <td style={{ padding: '0.75rem', borderRight: '1px solid var(--hv-light-grey)' }}><strong>Droit d’accès</strong></td>
                <td style={{ padding: '0.75rem', borderRight: '1px solid var(--hv-light-grey)' }}>Obtenir la confirmation que vos données sont traitées et y accéder</td>
                <td style={{ padding: '0.75rem' }}>30 jours</td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--hv-light-grey)' }}>
                <td style={{ padding: '0.75rem', borderRight: '1px solid var(--hv-light-grey)' }}><strong>Droit de rectification</strong></td>
                <td style={{ padding: '0.75rem', borderRight: '1px solid var(--hv-light-grey)' }}>Faire corriger des données inexactes ou incomplètes</td>
                <td style={{ padding: '0.75rem' }}>30 jours</td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--hv-light-grey)' }}>
                <td style={{ padding: '0.75rem', borderRight: '1px solid var(--hv-light-grey)' }}><strong>Droit à l’effacement</strong></td>
                <td style={{ padding: '0.75rem', borderRight: '1px solid var(--hv-light-grey)' }}>Demander la suppression de vos données (dans les limites légales)</td>
                <td style={{ padding: '0.75rem' }}>30 jours</td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--hv-light-grey)' }}>
                <td style={{ padding: '0.75rem', borderRight: '1px solid var(--hv-light-grey)' }}><strong>Droit à la limitation</strong></td>
                <td style={{ padding: '0.75rem', borderRight: '1px solid var(--hv-light-grey)' }}>Demander le gel de l’utilisation de vos données</td>
                <td style={{ padding: '0.75rem' }}>30 jours</td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--hv-light-grey)' }}>
                <td style={{ padding: '0.75rem', borderRight: '1px solid var(--hv-light-grey)' }}><strong>Droit à la portabilité</strong></td>
                <td style={{ padding: '0.75rem', borderRight: '1px solid var(--hv-light-grey)' }}>Recevoir vos données dans un format structuré (pour les données que vous avez fournies)</td>
                <td style={{ padding: '0.75rem' }}>30 jours</td>
              </tr>
              <tr>
                <td style={{ padding: '0.75rem', borderRight: '1px solid var(--hv-light-grey)' }}><strong>Droit d’opposition</strong></td>
                <td style={{ padding: '0.75rem', borderRight: '1px solid var(--hv-light-grey)' }}>Vous opposer à un traitement basé sur l’intérêt légitime</td>
                <td style={{ padding: '0.75rem' }}>30 jours</td>
              </tr>
            </tbody>
          </table>

          <p style={{ marginBottom: '0.5rem' }}><strong>Comment exercer vos droits ?</strong></p>
          <p style={{ marginBottom: '1rem' }}>
            Envoyez un email à : <a href="mailto:contact@humanvalues.fr" style={{ color: 'var(--hv-accent)', textDecoration: 'underline' }}>contact@humanvalues.fr</a><br/>
            Objet : « Exercice de mes droits RGPD »<br/>
            Précisez votre demande et joignez tout élément permettant de vous identifier (email utilisé lors de l’achat).
          </p>
          <p>
            Nous pouvons vous demander une preuve d’identité (carte d’identité partiellement caviardée) pour éviter les usurpations.
          </p>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.8rem', color: 'var(--hv-black)', marginBottom: '1.5rem', fontFamily: 'var(--font-title, Playfair Display)' }}>Article 8 – Droit de réclamation (CNIL)</h2>
          <p>
            Si vous estimez que vos droits ne sont pas respectés, vous pouvez adresser une réclamation à la CNIL :
          </p>
          <p style={{ marginTop: '1rem' }}>
            CNIL – 3 Place de Fontenoy, 75007 Paris<br/>
            Tél : 01 53 73 22 22 – Site : <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--hv-accent)', textDecoration: 'underline' }}>www.cnil.fr</a>
          </p>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.8rem', color: 'var(--hv-black)', marginBottom: '1.5rem', fontFamily: 'var(--font-title, Playfair Display)' }}>Article 9 – Cookies et traceurs</h2>
          <p style={{ marginBottom: '1.5rem' }}>
            Le site humanvalues.art n’utilise aucun cookie publicitaire ni traceur marketing.
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            Seuls peuvent être déposés :
          </p>
          <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '1.5rem', fontSize: '0.95rem', border: '1px solid var(--hv-light-grey)' }}>
            <thead>
              <tr style={{ backgroundColor: '#f9f9f9', borderBottom: '1px solid var(--hv-light-grey)' }}>
                <th style={{ padding: '0.75rem', textAlign: 'left', fontWeight: 'bold', borderRight: '1px solid var(--hv-light-grey)' }}>Type de cookie</th>
                <th style={{ padding: '0.75rem', textAlign: 'left', fontWeight: 'bold', borderRight: '1px solid var(--hv-light-grey)' }}>Finalité</th>
                <th style={{ padding: '0.75rem', textAlign: 'left', fontWeight: 'bold' }}>Durée</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid var(--hv-light-grey)' }}>
                <td style={{ padding: '0.75rem', borderRight: '1px solid var(--hv-light-grey)' }}>Cookies techniques (strictement nécessaires)</td>
                <td style={{ padding: '0.75rem', borderRight: '1px solid var(--hv-light-grey)' }}>Maintien de la session de navigation, chargement du site</td>
                <td style={{ padding: '0.75rem' }}>Session</td>
              </tr>
              <tr>
                <td style={{ padding: '0.75rem', borderRight: '1px solid var(--hv-light-grey)' }}>Cookies d’analyse anonyme (optionnels)</td>
                <td style={{ padding: '0.75rem', borderRight: '1px solid var(--hv-light-grey)' }}>Mesure d’audience (Vercel Analytics) – sans croisement avec des données personnelles</td>
                <td style={{ padding: '0.75rem' }}>30 jours max</td>
              </tr>
            </tbody>
          </table>
          <p style={{ marginBottom: '1rem' }}>
            <strong>Votre consentement :</strong> Les cookies techniques ne nécessitent pas de consentement. Les cookies d’analyse ne sont déposés qu’avec votre accord explicite (bannière cookies).
          </p>
          <p>
            Vous pouvez à tout moment supprimer les cookies via les paramètres de votre navigateur.
          </p>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.8rem', color: 'var(--hv-black)', marginBottom: '1.5rem', fontFamily: 'var(--font-title, Playfair Display)' }}>Article 10 – Sécurité</h2>
          <p style={{ marginBottom: '1rem' }}>
            HumanValues HV met en œuvre les mesures techniques et organisationnelles suivantes pour protéger vos données :
          </p>
          <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', marginBottom: '1rem' }}>
            <li>Chiffrement HTTPS (certificat SSL/TLS) pour toutes les communications</li>
            <li>Hébergement sécurisé via Vercel (edge network, isolation)</li>
            <li>CSP (Content-Security-Policy) stricte bloquant les scripts externes non autorisés</li>
            <li>Externalisation des paiements (aucune donnée bancaire sur nos serveurs)</li>
            <li>Accès limité aux données personnelles (seul le Conseil des Nexus y a accès)</li>
          </ul>
          <p>
            En cas de violation de données susceptible d’engendrer un risque élevé pour vos droits, nous vous informerons dans les 72 heures, conformément au RGPD.
          </p>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.8rem', color: 'var(--hv-black)', marginBottom: '1.5rem', fontFamily: 'var(--font-title, Playfair Display)' }}>Article 11 – Mineurs</h2>
          <p>
            Le site n’est pas destiné aux mineurs de moins de 15 ans. HumanValues HV ne collecte pas sciemment de données relatives à des mineurs. Si un parent ou tuteur estime que des données d’un mineur ont été collectées, qu’il nous contacte pour obtenir leur suppression.
          </p>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.8rem', color: 'var(--hv-black)', marginBottom: '1.5rem', fontFamily: 'var(--font-title, Playfair Display)' }}>Article 12 – Modification de la politique</h2>
          <p style={{ marginBottom: '1rem' }}>
            HumanValues HV se réserve le droit de modifier la présente Politique de Confidentialité à tout moment.
          </p>
          <p>
            La version applicable est celle en vigueur à la date de votre navigation ou de votre achat. En cas de modification substantielle, un avertissement pourra être affiché sur le site.
          </p>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.8rem', color: 'var(--hv-black)', marginBottom: '1.5rem', fontFamily: 'var(--font-title, Playfair Display)' }}>Article 13 – Contact</h2>
          <p>
            Pour toute question relative à la protection de vos données personnelles, vous pouvez contacter le Conseil des Nexus :
          </p>
          <p style={{ marginTop: '1rem' }}>
            Email : <a href="mailto:contact@humanvalues.fr" style={{ color: 'var(--hv-accent)', textDecoration: 'underline' }}>contact@humanvalues.fr</a><br/>
            Objet recommandé : « RGPD – Données personnelles »
          </p>
        </section>

        <div style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid var(--hv-light-grey)', textAlign: 'center', fontSize: '0.95rem' }}>
          <p style={{ marginBottom: '0.5rem', fontStyle: 'italic' }}>Dernière mise à jour : Juin 2026</p>
          <p style={{ fontWeight: '600', color: 'var(--hv-black)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>HumanValues HV – Maison culturelle des récits universels</p>
          <p style={{ fontStyle: 'italic', color: 'var(--hv-accent)' }}>Des récits pour relier ce qui compte</p>
        </div>
      </div>
    </div>
  );
};

export default Confidentialite;
