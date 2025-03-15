import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>
            Safeguard Your Business Against Cyber Threats With{" "}
            <span>Cyber Safe</span>.
          </h1>
          <p>
            Our cutting-edge solutions shield your operations from data
            breaches, ransomware, and online risks. Stay ahead of cybercrime
            with comprehensive protection tailored to your needs.
          </p>
          <button className="primary-button">Learn more</button>
        </div>
        <div className="hero-image">
          <img src="hero-image.png" alt="Cyber Security" />
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="feature">
          <h3>🛡️ Financial Protection</h3>
          <p>Covers costs from data breaches, ransomware, or cyberattacks.</p>
        </div>
        <div className="feature">
          <h3>⚖️ Legal Support</h3>
          <p>
            Provides assistance for regulatory compliance and legal defense.
          </p>
        </div>
        <div className="feature">
          <h3>📊 Risk Assessment</h3>
          <p>Identifies and analyzes threats to minimize their impact.</p>
        </div>
        <div className="feature">
          <h3>🔄 Business Continuity</h3>
          <p>
            Ensures minimal disruption with recovery support after an attack.
          </p>
        </div>
      </section>

      {/* About Us Section */}
      <section className="about">
        <div className="about-text">
          <h2>Mitigate financial losses and safeguard your reputation</h2>
          <p>
            From data breaches to ransomware, we've got your risks covered.
            Protect your business today to thrive in tomorrow’s digital
            landscape.
          </p>
          <div className="stats">
            <div>
              <h3>08+</h3>
              <p>Machine Learning Models</p>
            </div>
            <div>
              <h3>200+</h3>
              <p>Industry Leading Experts</p>
            </div>
          </div>
          <button className="primary-button">Get Started</button>
        </div>
        <div className="about-image">
          <img src="about-image.png" alt="Cyber Security Platform" />
        </div>
      </section>

      {/* Objective Section */}
      <section className="objective">
        <h2>Predict and assess Cyber Insurance for All Organizations.</h2>
        <div className="logos">
          <img src="logo1.png" alt="Brand 1" />
          <img src="logo2.png" alt="Brand 2" />
          <img src="logo3.png" alt="Brand 3" />
          <img src="logo4.png" alt="Brand 4" />
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose">
        <div className="why-text">
          <h2>Trusted protection for your Business begins here</h2>
          <p>
            Cyber insurance helps protect against financial losses resulting
            from cyber attacks and data breaches.
          </p>
          <button className="primary-button">Learn More</button>
        </div>
        <div className="why-features">
          <div className="why-feature">
            <h3>📈 Network Traffic Analytics</h3>
            <p>Analyze traffic patterns to detect unusual behavior.</p>
          </div>
          <div className="why-feature">
            <h3>🔍 Enterprise-Proven Threat Detection</h3>
            <p>Identify emerging threats with AI-driven solutions.</p>
          </div>
          <div className="why-feature">
            <h3>💳 Cybercrime and Fraud Detection</h3>
            <p>
              Prevent fraud and security breaches with our robust detection
              system.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
