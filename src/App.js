import React from 'react';
import Header, { Hero } from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Results from './components/Results';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Education />
        <Results />
      </main>
      <Footer />
    </div>
  );
}

export default App;
