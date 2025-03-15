import React from "react";
import "./Navbar.css";
import img1 from "./Images/CyberSafe Insurance Logo.png";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={img1} width="140vw" alt="img1" className="aaaaa" />
      </div>
      <div className="nav-links">
        <div className="nav-item">Home</div>
        <div className="nav-item">About us</div>
        <div className="nav-item">Services</div>
        <div className="nav-item">Contact</div>
        <div className="nav-item">Login</div>
      </div>
      <div className="get-started">
        <span>AI Assistent</span>
      </div>
    </div>
  );
};

export default Navbar;
