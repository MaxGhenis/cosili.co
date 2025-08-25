import React from 'react';
import './App.css';
import Logo from './components/Logo';

function App() {
  return (
    <div className="App">
      {/* Navigation */}
      <nav className="navbar">
        <div className="container">
          <Logo size={48} />
          <div className="nav-links">
            <a href="#features">Features</a>
            <a href="#about">About</a>
            <a href="https://github.com/maxghenis/cosilico.org" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1 className="hero-title">
            Open Infrastructure for <span className="gradient-text">Societal Simulation</span>
          </h1>
          <p className="hero-subtitle">
            Modular, open-source tools for modeling society. From calibrated microdata to economic models, 
            built on the foundation of PolicyEngine.
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary">Get Started</button>
            <button className="btn btn-secondary">View Documentation</button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <div className="container">
          <h2 className="section-title">Core Components</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h3>Calibrated Microdata</h3>
              <p>High-quality, representative datasets ready for analysis and modeling.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⚙️</div>
              <h3>Rules Engines</h3>
              <p>Comprehensive policy rules systems for accurate simulations.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📈</div>
              <h3>Economic Models</h3>
              <p>Sophisticated models for understanding societal dynamics and impacts.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔌</div>
              <h3>Modular Architecture</h3>
              <p>Mix and match components for your specific use case - policy, commercial, or research.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🌐</div>
              <h3>Open Source</h3>
              <p>Transparent, collaborative development with a growing community.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🚀</div>
              <h3>Ready to Scale</h3>
              <p>From individual research to enterprise applications, built to grow with your needs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <h2 className="section-title">Bridging Reality and Simulation</h2>
          <p className="about-text">
            Cosilico provides the essential building blocks for understanding and modeling society. 
            Whether you're analyzing policy impacts, conducting research, or building commercial applications, 
            our open infrastructure gives you the tools you need.
          </p>
          <div className="logo-showcase">
            <Logo size={120} showText={false} />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <Logo size={32} />
            <p>© 2025 Cosilico. Built on PolicyEngine.</p>
            <div className="footer-links">
              <a href="https://github.com/maxghenis/cosilico.org" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://policyengine.org" target="_blank" rel="noopener noreferrer">PolicyEngine</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;