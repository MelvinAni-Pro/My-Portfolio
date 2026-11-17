import React from 'react';
import { results } from '../data/profile';

function Results() {
  return (
    <section className="results" id="results">
      <div className="section-heading">
        <p className="section-index">05</p>
        <h2>Results</h2>
      </div>
      <p className="section-lead">
        Quota, account, and support numbers from FEITIAN, Genfaith, and NextGen.
      </p>
      <div className="result-list">
        {results.map((item) => (
          <article key={item.title} className="result">
            <p className="result-figure">{item.figure}</p>
            <h3>{item.title}</h3>
            <p>{item.detail}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Results;
