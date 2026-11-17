import React from 'react';
import { focusAreas } from '../data/profile';

function About() {
  return (
    <section className="about" id="about">
      <div className="section-heading">
        <p className="section-index">01</p>
        <h2>About</h2>
      </div>
      <div className="about-lead">
        <p>
          Cybersecurity sales professional with 4+ years of B2B sales experience, closing identity and phishing-resistant MFA (FIDO2) deals with enterprise, public-sector, and channel buyers. At FEITIAN, reached 125% of a $1M annual quota (60% direct / 40% channel), with a $130K largest deal and MEDDPICC-qualified sales cycles of 1 to 3 months.
        </p>
        <p>
          Full-cycle closing, with hands-on work across Microsoft Entra ID, Okta, Duo, and Auth0, and selling through VAR and distributor channels. Primary point of contact for a book of 42 accounts through renewal and expansion.
        </p>
      </div>
      <div className="focus-grid">
        {focusAreas.map((area) => (
          <article key={area.title} className="focus-card">
            <h3>{area.title}</h3>
            <p>{area.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default About;
