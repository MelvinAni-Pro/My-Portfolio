import React from 'react';
import ContactLinks from './ContactLinks';
import { location, stats } from '../data/profile';

const navItems = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#education', label: 'Education' },
  { href: '#results', label: 'Results' },
  { href: '#contact', label: 'Contact' },
];

export function Hero() {
  return (
    <section className="hero" aria-labelledby="intro-heading">
      <div className="hero-copy">
        <p className="eyebrow">{location}</p>
        <h1 id="intro-heading">Melvin Ani</h1>
        <p className="headline">Account Manager, Cybersecurity Sales</p>
        <p className="value-prop">
          I sell MFA and FIDO2 hardware at FEITIAN Technologies, on direct and channel deals, and I handle technical discovery and customer success on the same accounts.
        </p>
        <ContactLinks className="contact-links hero-actions" />
      </div>
      <div className="portrait">
        <img
          src={`${process.env.PUBLIC_URL}/images/melvin-ani.jpg`}
          alt="Melvin Ani"
          width="460"
          height="460"
        />
      </div>
      <dl className="stat-row">
        {stats.map((stat) => (
          <div key={stat.figure} className="stat">
            <dt>{stat.figure}</dt>
            <dd>{stat.label}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

function Header() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <div className="nav-inner">
          <a className="brand" href="#intro-heading">Melvin Ani</a>
          <nav aria-label="Primary">
            <ul className="nav-links">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
