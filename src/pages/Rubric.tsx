import React from 'react';
import DomainRubric from '../components/DomainRubric';
import Logo from '../components/Logo';
import '../styles/Rubric.css';

const Rubric: React.FC = () => {
  return (
    <div className="rubric-page">
      {/* Navigation */}
      <nav className="navbar">
        <div className="container">
          <a href="/" style={{ textDecoration: 'none' }}>
            <Logo size={48} />
          </a>
          <div className="nav-links">
            <a href="/#features">Features</a>
            <a href="/#about">About</a>
            <a href="/rubric" className="active">Domain Rubric</a>
            <a href="https://github.com/maxghenis/cosilico.org" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="rubric-main">
        <div className="container">
          <DomainRubric />
        </div>
      </main>

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
};

export default Rubric;