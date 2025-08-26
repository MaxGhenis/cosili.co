import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import Logo from './components/Logo';

function App() {
  return (
    <div className="App">
      {/* Navigation */}
      <nav className="navbar">
        <div className="container">
          <Logo size={40} />
          <div className="nav-links">
            <a href="#products">Products</a>
            <a href="#engine" className="desktop-only">Engine</a>
            <a href="#about" className="desktop-only">About</a>
            <a href="https://github.com/maxghenis/cosili.co" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1 className="hero-title">
            Simulating Society <span className="gradient-text">Together</span>
          </h1>
          <p className="hero-subtitle">
            Open-source infrastructure for modeling society in silico. From tax and benefit systems to 
            human behavior, we're building the tools to understand and improve how society works.
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary">Explore Products</button>
            <button className="btn btn-secondary">View Documentation</button>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="products">
        <div className="container">
          <h2 className="section-title">The Cosilico Suite</h2>
          <p className="section-subtitle">
            Action-oriented tools that transform complex societal systems into understandable, testable models.
          </p>
          <div className="products-grid">
            <div className="product-card">
              <div className="product-header">
                <div className="product-icon">🏛️</div>
                <h3>Cosilico <span className="product-verb">Govern</span></h3>
              </div>
              <p>Model and test policy changes before implementation. Simulate tax systems, benefits programs, and regulatory impacts with unprecedented accuracy.</p>
              <a href="/govern" className="product-link">Learn more →</a>
            </div>
            <div className="product-card">
              <div className="product-header">
                <div className="product-icon">💰</div>
                <h3>Cosilico <span className="product-verb">Budget</span></h3>
              </div>
              <p>Personal financial planning powered by real policy rules. Understand how taxes and benefits affect individual households using Monte Carlo methods.</p>
              <a href="/budget" className="product-link">Learn more →</a>
            </div>
            <div className="product-card">
              <div className="product-header">
                <div className="product-icon">📋</div>
                <h3>Cosilico <span className="product-verb">Survey</span></h3>
              </div>
              <p>Run simulated human surveys in silico. Test questions against representative microdata to predict real-world responses before fielding.</p>
              <a href="/survey" className="product-link">Learn more →</a>
            </div>
            <div className="product-card">
              <div className="product-header">
                <div className="product-icon">📝</div>
                <h3>Cosilico <span className="product-verb">Propose</span></h3>
              </div>
              <p>AI-powered grant and proposal assistance. Get feedback on funding applications using models trained on successful proposals.</p>
              <a href="/propose" className="product-link">Learn more →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Engine Section */}
      <section id="engine" className="engine">
        <div className="container">
          <h2 className="section-title">Powered by the Cosilico Engine</h2>
          <p className="section-subtitle">
            Three core engines work together to create a complete picture of society.
          </p>
          <div className="engine-grid">
            <div className="engine-component">
              <div className="engine-icon">⚖️</div>
              <h3>Rules Engine</h3>
              <p>Encode laws, regulations, and policies as code. Our deterministic rules engine captures every edge case, from federal tax law to local benefit programs.</p>
              <ul className="engine-features">
                <li>Complete tax and benefit calculations</li>
                <li>Multi-jurisdiction support</li>
                <li>Historical policy parameters</li>
                <li>API access for developers</li>
              </ul>
            </div>
            <div className="engine-component">
              <div className="engine-icon">👥</div>
              <h3>Data Engine</h3>
              <p>Generate representative microdata calibrated to any geography. From cities to states, get the full distribution of households and individuals.</p>
              <ul className="engine-features">
                <li>Local-area calibration</li>
                <li>Synthetic population generation</li>
                <li>Demographic weighting</li>
                <li>Privacy-preserving techniques</li>
              </ul>
            </div>
            <div className="engine-component">
              <div className="engine-icon">📊</div>
              <h3>Economics Engine</h3>
              <p>Model behavioral responses and economic impacts. Understand how policy changes ripple through society using state-of-the-art economic models.</p>
              <ul className="engine-features">
                <li>Labor supply responses</li>
                <li>Consumption patterns</li>
                <li>General equilibrium effects</li>
                <li>Monte Carlo simulations</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Open Source Section */}
      <section className="open-source">
        <div className="container">
          <h2 className="section-title">Open Source, Open Society</h2>
          <div className="open-source-content">
            <div className="open-source-text">
              <p>
                Cosilico is built on the principle that understanding society requires transparency. 
                All our code is open source, our methodologies are documented, and our data is accessible.
              </p>
              <p>
                We're not just simulating society — we're doing it together. Join our community of 
                researchers, developers, and policy makers working to make societal systems more 
                understandable and improvable.
              </p>
              <div className="open-source-stats">
                <div className="stat">
                  <div className="stat-number">100%</div>
                  <div className="stat-label">Open Source</div>
                </div>
                <div className="stat">
                  <div className="stat-number">50M+</div>
                  <div className="stat-label">Simulated Households</div>
                </div>
                <div className="stat">
                  <div className="stat-number">∞</div>
                  <div className="stat-label">Possibilities</div>
                </div>
              </div>
            </div>
            <div className="recursive-visual">
              <div className="recursive-scroll-container">
                <div className="recursive-text">
                  <span className="recursive-bold">co</span>silico<span className="recursive-bold">co</span>silico<span className="recursive-bold">co</span>silico
                </div>
              </div>
              <div className="recursive-description">
                Endless recursive simulation where each model informs the next, 
                creating ever-better representations of society.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="use-cases">
        <div className="container">
          <h2 className="section-title">Who Uses Cosilico?</h2>
          <div className="use-cases-grid">
            <div className="use-case">
              <h4>Policy Makers</h4>
              <p>Test legislation before implementation. Understand distributional impacts across demographics.</p>
            </div>
            <div className="use-case">
              <h4>Researchers</h4>
              <p>Access high-quality microdata and policy rules for academic studies and analysis.</p>
            </div>
            <div className="use-case">
              <h4>Developers</h4>
              <p>Build benefit calculators, tax tools, and financial planning applications using our APIs.</p>
            </div>
            <div className="use-case">
              <h4>Nonprofits</h4>
              <p>Advocate with data. Show exactly how policies affect the communities you serve.</p>
            </div>
            <div className="use-case">
              <h4>Businesses</h4>
              <p>Understand market dynamics and policy impacts on customers and operations.</p>
            </div>
            <div className="use-case">
              <h4>Individuals</h4>
              <p>Plan your financial future with tools that understand the full complexity of the system.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <h2 className="section-title">From PolicyEngine to Cosilico</h2>
          <p className="about-text">
            Cosilico evolved from PolicyEngine, expanding beyond policy simulation to encompass 
            the full spectrum of societal modeling. We're building the infrastructure for a world 
            where complex systems can be understood, tested, and improved through open collaboration.
          </p>
          <p className="about-text">
            Our vision: a future where every major decision — from legislation to personal finance — 
            is informed by accurate, accessible simulation. Where society's rules are not just written 
            in law books, but encoded, tested, and continuously improved.
          </p>
          <div className="logo-showcase">
            <Logo size={120} showText={false} />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <h2>Ready to Start Simulating?</h2>
          <p>Join the open-source movement to make society more understandable.</p>
          <div className="cta-buttons">
            <button className="btn btn-primary">Get Started</button>
            <a href="https://github.com/maxghenis/cosili.co" className="btn btn-secondary">
              Contribute on GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-main">
              <Logo size={40} />
              <p className="footer-tagline">Simulating Society Together</p>
            </div>
            <div className="footer-sections">
              <div className="footer-section">
                <h5>Products</h5>
                <a href="/govern">Govern</a>
                <a href="/budget">Budget</a>
                <a href="/survey">Survey</a>
                <a href="/propose">Propose</a>
              </div>
              <div className="footer-section">
                <h5>Developers</h5>
                <a href="/docs">Documentation</a>
                <a href="/api">API Reference</a>
                <a href="https://github.com/maxghenis/cosili.co">GitHub</a>
                <a href="/contribute">Contribute</a>
              </div>
              <div className="footer-section">
                <h5>Company</h5>
                <a href="/about">About</a>
                <a href="/blog">Blog</a>
                <a href="/contact">Contact</a>
                <a href="https://policyengine.org">PolicyEngine</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2025 Cosilico. Open source under MIT License.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;