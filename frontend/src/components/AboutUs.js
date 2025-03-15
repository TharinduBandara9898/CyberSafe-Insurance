import React from 'react'
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1>About Cyber Safe</h1>
        <p>Empowering Businesses with Data-Driven Cyber Insurance Solutions</p>
      </div>

      <div className="about-content">
        <h2>Who We Are</h2>
        <p>
          Cyber Safe is a cutting-edge Cyber Insurance Risk Assessment Platform designed to
          revolutionize the way cyber risks are quantified and insured. We leverage the power
          of Machine Learning (ML) and real-time threat intelligence to provide accurate risk
          evaluations, enabling businesses to make informed decisions regarding cyber insurance coverage.
        </p>
      </div>

      <div className="about-content">
        <h2>Our Mission</h2>
        <p>
          Our mission is to bridge the gap between cybersecurity risk assessment and
          insurance automation by providing insurers and businesses with a standardized,
          scalable, and efficient cyber risk assessment framework.
        </p>
      </div>

      <div className="about-content">
        <h2>What We Offer</h2>
        <ul>
          <li>Comprehensive Cyber Risk Assessments using AI and ML</li>
          <li>Dynamic Risk Scoring and Financial Loss Predictions</li>
          <li>Automated Cyber Insurance Policy Underwriting</li>
          <li>Real-time Threat Intelligence Integration</li>
          <li>Regulatory Compliance Monitoring (ISO/IEC 27001, GDPR)</li>
          <li>Secure, Cloud-Based Deployment for Scalability</li>
        </ul>
      </div>

      <div className="about-content">
        <h2>Why Choose Cyber Safe?</h2>
        <p>
          With cyber threats evolving at an unprecedented rate, traditional insurance models
          struggle to keep up. Cyber Safe ensures businesses receive accurate, real-time risk
          insights, reducing underwriting costs, and improving cyber resilience through advanced analytics
          and automation.
        </p>
      </div>

      <div className="about-content">
        <h2>Get in Touch</h2>
        <p>
          Whether you’re an insurer looking to optimize policy underwriting or a business seeking
          robust cyber insurance solutions, Cyber Safe is here to help. Contact us today to
          learn more about how our platform can enhance your cybersecurity risk management strategies.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;