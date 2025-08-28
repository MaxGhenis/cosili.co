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
            <a href="#platform">Platform</a>
            <a href="#gallery" className="desktop-only">Gallery</a>
            <a href="#enterprise" className="desktop-only">Enterprise</a>
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
            Open-source API platform for modeling tax systems, benefits, and economic behavior. 
            Build any societal simulation with our comprehensive data and rules.
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary">Try Playground</button>
            <button className="btn btn-secondary">View Documentation</button>
          </div>
        </div>
      </section>

      {/* Platform Section */}
      <section id="platform" className="engine">
        <div className="container">
          <h2 className="section-title">The Cosilico Platform</h2>
          <p className="section-subtitle">
            Three core components power comprehensive societal modeling
          </p>
          <div className="engine-grid">
            <div className="engine-component">
              <div className="engine-icon">⚖️</div>
              <h3>Rules</h3>
              <p>Complete tax and benefit systems encoded as code. Every federal, state, and local policy parameter validated and versioned.</p>
              <ul className="engine-features">
                <li>50,000+ policy parameters</li>
                <li>Historical policy tracking</li>
                <li>Multi-jurisdiction support</li>
                <li>Continuous validation</li>
              </ul>
            </div>
            <div className="engine-component">
              <div className="engine-icon">👥</div>
              <h3>Data</h3>
              <p>Representative microdata calibrated to any geography. Synthetic households matching real demographic distributions.</p>
              <ul className="engine-features">
                <li>50M+ simulated households</li>
                <li>Local area calibration</li>
                <li>Survey data integration</li>
                <li>Privacy-preserving methods</li>
              </ul>
            </div>
            <div className="engine-component">
              <div className="engine-icon">📊</div>
              <h3>Dynamics</h3>
              <p>Economic behavioral modeling and responses. Labor supply elasticities, consumption patterns, and equilibrium effects.</p>
              <ul className="engine-features">
                <li>Behavioral responses</li>
                <li>Monte Carlo simulations</li>
                <li>Optimal tax theory</li>
                <li>General equilibrium</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Access Section */}
      <section id="access" className="products">
        <div className="container">
          <h2 className="section-title">Access the Platform</h2>
          <p className="section-subtitle">
            Multiple ways to integrate Cosilico. No API keys or authentication required. 100% open source.
          </p>
          <div className="products-grid">
            <div className="product-card">
              <div className="product-header">
                <div className="product-icon">🎮</div>
                <h3>Interactive <span className="product-verb">Playground</span></h3>
              </div>
              <p>Try Cosilico directly in your browser. Live Python environment with Jupyter notebooks. No installation needed, just start coding.</p>
              <a href="/playground" className="product-link">Open playground →</a>
            </div>
            <div className="product-card">
              <div className="product-header">
                <div className="product-icon">🐍</div>
                <h3>Python <span className="product-verb">Package</span></h3>
              </div>
              <p>Full-featured Python library for direct integration. Complete access to rules, data, and dynamics. Used by governments and research institutions.</p>
              <a href="/docs/python" className="product-link">pip install cosilico →</a>
            </div>
            <div className="product-card">
              <div className="product-header">
                <div className="product-icon">🌐</div>
                <h3>REST <span className="product-verb">API</span></h3>
              </div>
              <p>Open HTTP endpoints for any language. Calculate taxes, generate households, model reforms. No authentication barriers.</p>
              <a href="/docs/rest" className="product-link">View endpoints →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="gallery-section">
        <div className="container">
          <h2 className="section-title">Built with Cosilico</h2>
          <p className="section-subtitle">
            See what's possible with the platform. From government tools to research dashboards.
          </p>
          <div className="gallery-grid">
            <div className="gallery-item">
              <div className="gallery-image">
                <img src="https://policyengine.org/static/media/policyengine-white.b6f81ab1b1e1dc1dc58e.png" alt="PolicyEngine" />
              </div>
              <div className="gallery-content">
                <h3>PolicyEngine</h3>
                <p>The flagship policy simulation platform. Model any tax or benefit reform across the US and UK with distributional analysis and household impacts.</p>
                <ul className="gallery-features">
                  <li>Used by governments worldwide</li>
                  <li>50M+ simulations run</li>
                  <li>Real-time policy modeling</li>
                </ul>
                <a href="https://policyengine.org" target="_blank" rel="noopener noreferrer" className="gallery-link">Visit PolicyEngine →</a>
              </div>
            </div>
            <div className="gallery-item">
              <div className="gallery-image">
                <div className="gallery-placeholder">OBBBA Tool</div>
              </div>
              <div className="gallery-content">
                <h3>OBBBA Household by Household</h3>
                <p>Interactive tool analyzing the Build Back Better Act's impacts on specific household types across different income levels.</p>
                <ul className="gallery-features">
                  <li>Interactive household comparisons</li>
                  <li>Budget impact analysis</li>
                  <li>Policy parameter exploration</li>
                </ul>
                <a href="https://policyengine.org/us/obbba-household-by-household" target="_blank" rel="noopener noreferrer" className="gallery-link">Explore the tool →</a>
              </div>
            </div>
            <div className="gallery-item">
              <div className="gallery-image">
                <div className="gallery-placeholder">Research Tools</div>
              </div>
              <div className="gallery-content">
                <h3>Research Dashboards</h3>
                <p>Custom analysis tools built by universities and think tanks. From poverty metrics to optimal tax calculators.</p>
                <ul className="gallery-features">
                  <li>Academic research tools</li>
                  <li>Policy scoring models</li>
                  <li>Calibration dashboards</li>
                </ul>
                <a href="/gallery" className="gallery-link">View gallery →</a>
              </div>
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
                Cosilico builds on the principle that understanding society requires transparency. 
                We open source all our code, document our methodologies, and make our data accessible.
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
              <div className="simple-marquee-wrapper">
                <div className="simple-marquee">
                  <div className="marquee-inner">
                    <span className="marquee-text"><span className="recursive-bold">co</span>sili<span className="recursive-bold">co</span>sili<span className="recursive-bold">co</span>sili<span className="recursive-bold">co</span>sili<span className="recursive-bold">co</span>sili<span className="recursive-bold">co</span>sili<span className="recursive-bold">co</span>sili<span className="recursive-bold">co</span>sili<span className="recursive-bold">co</span>sili<span className="recursive-bold">co</span>sili<span className="recursive-bold">co</span>sili<span className="recursive-bold">co</span>sili</span>
                    <span className="marquee-text"><span className="recursive-bold">co</span>sili<span className="recursive-bold">co</span>sili<span className="recursive-bold">co</span>sili<span className="recursive-bold">co</span>sili<span className="recursive-bold">co</span>sili<span className="recursive-bold">co</span>sili<span className="recursive-bold">co</span>sili<span className="recursive-bold">co</span>sili<span className="recursive-bold">co</span>sili<span className="recursive-bold">co</span>sili<span className="recursive-bold">co</span>sili<span className="recursive-bold">co</span>sili</span>
                  </div>
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
              <h4>AI Companies</h4>
              <p>Build custom policy tools on demand. LLMs use our APIs to create tailored simulations for specific use cases.</p>
            </div>
            <div className="use-case">
              <h4>Government Agencies</h4>
              <p>Python packages for policy analysis. OBR, JCT, and state departments model reforms programmatically.</p>
            </div>
            <div className="use-case">
              <h4>Research Institutions</h4>
              <p>Access calibrated microdata via API. Universities worldwide use our platform for economic research.</p>
            </div>
            <div className="use-case">
              <h4>Financial Apps</h4>
              <p>Integrate accurate tax calculations. Personal finance tools use our rules engine for planning features.</p>
            </div>
            <div className="use-case">
              <h4>Think Tanks</h4>
              <p>Model policy impacts at scale. Score proposals and analyze distributional effects through our APIs.</p>
            </div>
            <div className="use-case">
              <h4>Developers</h4>
              <p>Build societal modeling tools. Free tier for experimentation, comprehensive docs, and client libraries.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Section */}
      <section id="enterprise" className="use-cases">
        <div className="container">
          <h2 className="section-title">Enterprise Solutions</h2>
          <p className="section-subtitle">
            Custom integrations, dedicated support, and tailored solutions for organizations with complex needs.
          </p>
          <div className="use-cases-grid">
            <div className="use-case">
              <h4>Custom Development</h4>
              <p>We build bespoke tools and integrations. From specialized dashboards to complex policy models tailored to your jurisdiction.</p>
            </div>
            <div className="use-case">
              <h4>Dedicated Support</h4>
              <p>Priority access to our engineering team. SLAs, dedicated Slack channels, and direct technical guidance.</p>
            </div>
            <div className="use-case">
              <h4>Model Extensions</h4>
              <p>Extend the platform with your proprietary rules and data. Private deployments with custom parameters and calculations.</p>
            </div>
            <div className="use-case">
              <h4>Research Partnerships</h4>
              <p>Collaborate on academic research and policy analysis. Co-author papers, develop new methodologies, access pre-release features.</p>
            </div>
            <div className="use-case">
              <h4>Training & Workshops</h4>
              <p>On-site training for your team. Learn to leverage the full platform capabilities and best practices for your use cases.</p>
            </div>
            <div className="use-case">
              <h4>Compliance & Security</h4>
              <p>SOC2, GDPR compliance, and custom security requirements. Private cloud deployments and data residency options.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Documentation Section */}
      <section id="docs" className="about">
        <div className="container">
          <h2 className="section-title">Developer Documentation</h2>
          <p className="about-text">
            Everything you need to integrate Cosilico into your applications. Interactive API explorer, 
            comprehensive method documentation, and tutorials to get you started quickly.
          </p>
          <div className="use-cases-grid" style={{maxWidth: '800px', margin: '40px auto'}}>
            <div className="use-case">
              <h4>Quick Start</h4>
              <p>Get your API key and make your first call in minutes. Python, JavaScript, and R examples.</p>
            </div>
            <div className="use-case">
              <h4>API Reference</h4>
              <p>Complete documentation for all endpoints. Interactive explorer to test calls in your browser.</p>
            </div>
            <div className="use-case">
              <h4>Tutorials</h4>
              <p>Step-by-step guides for common use cases. From basic calculations to complex simulations.</p>
            </div>
            <div className="use-case">
              <h4>Best Practices</h4>
              <p>Performance tips, caching strategies, and architectural patterns for production deployments.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <h2>Start Building with Cosilico</h2>
          <p>No API key needed. Try it right in your browser or install locally.</p>
          <div className="cta-buttons">
            <button className="btn btn-primary">Open Playground</button>
            <a href="https://github.com/maxghenis/cosili.co" className="btn btn-secondary">
              View on GitHub
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
                <h5>Platform</h5>
                <a href="/docs/python">Python Package</a>
                <a href="/docs/rest">REST API</a>
                <a href="/docs">Documentation</a>
                <a href="/pricing">Pricing</a>
              </div>
              <div className="footer-section">
                <h5>Developers</h5>
                <a href="/docs">Documentation</a>
                <a href="/api">API Explorer</a>
                <a href="https://github.com/maxghenis/cosili.co">GitHub</a>
                <a href="/pricing">Pricing</a>
              </div>
              <div className="footer-section">
                <h5>Solutions</h5>
                <a href="#enterprise">Enterprise</a>
                <a href="https://policyengine.org">PolicyEngine</a>
                <a href="/gallery">Gallery</a>
                <a href="/contact">Contact Sales</a>
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