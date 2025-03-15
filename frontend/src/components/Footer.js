// React.js Footer Component for Cyber Insurance Website
import React from "react";
import "./Footer.css";
import { FaFacebook, FaTwitter, FaLinkedin, FaEnvelope } from "react-icons/fa";
import img1 from "./Images/CyberSafe Insurance Logo - 2.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          {" "}
          <img src={img1} alt="img1" width="200vw" />
        </div>
        <p className="footer-description">
          Protect your business with our advanced cyber insurance solutions.
        </p>
        <div className="footer-links">
          <a href="/about">About Us</a>
          <a href="/services">Services</a>
          <a href="/contact">Contact</a>
          <a href="/privacy">Privacy Policy</a>
        </div>
        <div className="footer-socials">
          <a href="#" className="social-icon">
            <FaFacebook />
          </a>
          <a href="#" className="social-icon">
            <FaTwitter />
          </a>
          <a href="#" className="social-icon">
            <FaLinkedin />
          </a>
          <a href="mailto:support@cybersafe.com" className="social-icon">
            <FaEnvelope />
          </a>
        </div>
        <p className="footer-copy">
          &copy; {new Date().getFullYear()} Cyber Safe. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
