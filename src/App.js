import React, { useState } from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import Experience from './components/Experience';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  const [activeSection, setActiveSection] = useState('experience');

  function renderSection() {
    switch (activeSection) {
      case 'experience':
        return <Experience />;
      case 'projects':
        return <Projects />;
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      default:
        return <Experience />;
    }
  }

  return (
    <div className="app-container">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="main-content">{renderSection()}</main>
      <Footer />
    </div>
  );
}

export default App;
