import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [userType, setUserType] = useState("admin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    switch (userType) {
      case "admin":
        window.location.href = "/admin-dashboard";
        break;
      case "organization":
        window.location.href = "/organization-dashboard";
        break;
      case "insurance":
        window.location.href = "/insurance-dashboard";
        break;
      default:
        alert("Invalid user type");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Cyber Safe Login</h2>
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label>User Type</label>
            <select
              value={userType}
              onChange={(e) => setUserType(e.target.value)}
            >
              <option value="admin">Administrator</option>
              <option value="organization">Organization</option>
              <option value="insurance">Insurance Provider</option>
            </select>
          </div>
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
