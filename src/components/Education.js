import React from 'react';
import { education } from '../data/profile';

function Education() {
  return (
    <section className="education" id="education">
      <div className="section-heading">
        <p className="section-index">04</p>
        <h2>Education</h2>
      </div>
      <div className="education-grid">
        <article className="education-card">
          <h3>{education.school}</h3>
          <p className="education-span">
            {education.location}
            <span aria-hidden="true"> · </span>
            {education.time}
          </p>
          <p>
            <strong>{education.degree}</strong>
          </p>
        </article>
        <article className="education-card">
          <h3>Awards</h3>
          <ul>
            {education.awards.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}

export default Education;
