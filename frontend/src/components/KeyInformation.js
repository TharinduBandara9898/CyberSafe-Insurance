import React, { useState } from "react";
import "./KeyInformation.css";

const KeyInformation = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedOption1, setSelectedOption1] = useState(null);
  const [selectedOption2, setSelectedOption2] = useState(null);
  const [selectedOption3, setSelectedOption3] = useState(null);
  const [selectedOption4, setSelectedOption4] = useState(null);

  const handleSelect = (option) => {
    setSelectedOption(option);
  };
  const handleSelect1 = (option) => {
    setSelectedOption1(option);
  };
  const handleSelect2 = (option) => {
    setSelectedOption2(option);
  };
  const handleSelect3 = (option) => {
    setSelectedOption3(option);
  };
  const handleSelect4 = (option) => {
    setSelectedOption4(option);
  };

  return (
    <div className="container">
      <div className="header">
        <h1>Sector Based Key Information Areas</h1>
        <p>
          Calculating a cyber insurance fee for a company involves assessing
          various factors related to the company’s cybersecurity posture, risk
          profile, and potential exposure to cyber threats.
        </p>
      </div>

      {/* Company Profile Section */}
      <div className="section">
        <h2>1. Company Profile</h2>
        <div className="form-group">
          <h3>Company Name</h3>
          <input
            type="text"
            placeholder="Enter company name"
            className="txtnm"
          />
        </div>

        {/* Company Category - Based on Annual Revenue */}
        <div className="section">
          <h3>Company Category Based on Annual Revenue</h3>
          <div className="radio-group">
            <label className="radio-option">
              <input
                type="radio"
                name="companyCategory"
                value="micro"
                className="rddd"
              />
              <span>Micro-enterprises: Annual revenue below $1 million.</span>
            </label>

            <label className="radio-option">
              <input
                type="radio"
                name="companyCategory"
                value="small"
                defaultChecked
                className="rddd"
              />
              <span>Small enterprises: $1 million to $10 million.</span>
            </label>

            <label className="radio-option">
              <input
                type="radio"
                name="companyCategory"
                value="medium"
                className="rddd"
              />
              <span>Medium enterprises: $10 million to $50 million.</span>
            </label>

            <label className="radio-option">
              <input
                type="radio"
                name="companyCategory"
                value="large"
                className="rddd"
              />
              <span>Large enterprises: Above $50 million.</span>
            </label>
          </div>
        </div>

        <div className="form-group">
          <h3>Email</h3>
          <input type="email" placeholder="Enter email" className="txtnm" />
        </div>
        <div className="form-group">
          <h3>Industry Type</h3>
          <select>
            <option>Select Industry</option>
            <option>Financial</option>
            <option>Medical</option>
            <option>Education</option>
            <option>Retail</option>
            <option>Manufacturing</option>
            <option>Energy and Utilities</option>
            <option>Government and Public</option>
            <option>Technology and Telecommunications</option>
          </select>
        </div>
      </div>

      {/* Cyber Security Posture */}
      <div className="section">
        <h2>2. Cyber Security Posture</h2>
        <div className="form-group">
          <h3>Existing Security Measures</h3>
          <div className="checkbox-group">
            <label>
              <input type="checkbox" /> Firewalls
            </label>
            <label>
              <input type="checkbox" /> Intrusion Detection Systems
            </label>
            <label>
              <input type="checkbox" /> Secure Development Practices
            </label>
            <label>
              <input type="checkbox" /> Antivirus software
            </label>
            <label>
              <input type="checkbox" /> Patch Management
            </label>
            <label>
              <input type="checkbox" /> Web Application Firewalls (WAF)
            </label>
            <label>
              <input type="checkbox" /> Device Encryption
            </label>
            <label>
              <input type="checkbox" /> Data Loss Prevention (DLP)
            </label>
            <label>
              <input type="checkbox" /> Single Sign-On (SSO)
            </label>
          </div>

          <h3>Data Protection</h3>
          <div className="checkbox-group">
            <label>
              <input type="checkbox" /> At Rest Encryption
            </label>
            <label>
              <input type="checkbox" /> Multi-Factor Authentication (MFA)
            </label>
            <label>
              <input type="checkbox" /> Data Masking
            </label>
            <label>
              <input type="checkbox" /> In Transit Encryption
            </label>
            <label>
              <input type="checkbox" /> Principle of Least Privilege (PoLP)
            </label>
            <label>
              <input type="checkbox" /> Regular Backups
            </label>
            <label>
              <input type="checkbox" /> End-to-End Encryption (E2EE)
            </label>
            <label>
              <input type="checkbox" /> Role-Based Access Control (RBAC)
            </label>
            <label>
              <input type="checkbox" /> Mobile Device Management (MDM)
            </label>
          </div>

          <div className="incident-response-container">
            {/* Incident Response Plan */}
            <h2>Do you have an updated Incident Response Plan?</h2>
            <div className="button-group">
              <button
                className={`response-button ${
                  selectedOption === "yes" ? "selected-yes" : ""
                }`}
                onClick={() => handleSelect("yes")}
              >
                ✅ Yes - We have an updated Incident Response Plan
              </button>
              <button
                className={`response-button ${
                  selectedOption === "no" ? "selected-no" : ""
                }`}
                onClick={() => handleSelect("no")}
              >
                ❌ No - We don’t have an updated Incident Response Plan
              </button>
            </div>
            {selectedOption && (
              <p className="confirmation-message">
                You selected:{" "}
                <strong>
                  {selectedOption === "yes"
                    ? "Yes, we have an updated plan."
                    : "No, we don’t have an updated plan."}
                </strong>
              </p>
            )}

            {/* Do you have an updated Employee Training Plan */}
            <h2>Do you have an updated Employee Training Plan?</h2>
            <div className="button-group">
              <button
                className={`response-button ${
                  selectedOption1 === "yes" ? "selected-yes" : ""
                }`}
                onClick={() => handleSelect1("yes")}
              >
                ✅ Yes - We have An updated Employee Training Plan
              </button>
              <button
                className={`response-button ${
                  selectedOption1 === "no" ? "selected-no" : ""
                }`}
                onClick={() => handleSelect1("no")}
              >
                ❌ No - We don’t have An updated Employee Training Plan
              </button>
            </div>
            {selectedOption1 && (
              <p className="confirmation-message">
                You selected:{" "}
                <strong>
                  {selectedOption1 === "yes"
                    ? "Yes, We have An updated Employee Training Plan."
                    : "No, We don’t have An updated Employee Training Plan."}
                </strong>
              </p>
            )}

            {/* Do you have an Access Control Mechanisms */}
            <h2>Do you have an Access Control Mechanisms?</h2>
            <div className="button-group">
              <button
                className={`response-button ${
                  selectedOption2 === "yes" ? "selected-yes" : ""
                }`}
                onClick={() => handleSelect2("yes")}
              >
                ✅ Yes - We have An Access Control Mechanisms
              </button>
              <button
                className={`response-button ${
                  selectedOption2 === "no" ? "selected-no" : ""
                }`}
                onClick={() => handleSelect2("no")}
              >
                ❌ No - We don’t have An Access Control Mechanisms
              </button>
            </div>
            {selectedOption2 && (
              <p className="confirmation-message">
                You selected:{" "}
                <strong>
                  {selectedOption2 === "yes"
                    ? "Yes, We have An Access Control Mechanisms."
                    : "No, We don’t have An Access Control Mechanisms."}
                </strong>
              </p>
            )}

            {/* Do you have Any Past Cyber Incidents happened to your company? */}
            <h2>
              {" "}
              Do you have Any Past Cyber Incidents happened to your company?{" "}
            </h2>
            <div className="button-group">
              <button
                className={`response-button ${
                  selectedOption3 === "yes" ? "selected-yes" : ""
                }`}
                onClick={() => handleSelect3("yes")}
              >
                ✅ Yes - We have Past Cyber Incidents
              </button>
              <button
                className={`response-button ${
                  selectedOption3 === "no" ? "selected-no" : ""
                }`}
                onClick={() => handleSelect3("no")}
              >
                ❌ No - We don’t have Past Cyber Incidents
              </button>
            </div>
            {selectedOption3 && (
              <p className="confirmation-message">
                You selected:{" "}
                <strong>
                  {selectedOption3 === "yes"
                    ? "Yes, We have Past Cyber Incidents."
                    : "No, We don’t have Past Cyber Incidents."}
                </strong>
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Risk Factors */}
      <div className="section">
        <h2>3. Risk Factors</h2>
        <div className="form-group">
          <h3>Volume of Data</h3>
          <div className="radio-group">
            <label className="radio-option">
              <input
                type="radio"
                name="companyCategory"
                value="micro"
                className="rddd"
              />
              <span>Low : Less Than 1TB</span>
            </label>

            <label className="radio-option">
              <input
                type="radio"
                name="companyCategory"
                value="small"
                defaultChecked
                className="rddd"
              />
              <span>Medium: 1 TB - 10 TB</span>
            </label>

            <label className="radio-option">
              <input
                type="radio"
                name="companyCategory"
                value="medium"
                className="rddd"
              />
              <span>High: 10 TB - 100 TB</span>
            </label>

            <label className="radio-option">
              <input
                type="radio"
                name="companyCategory"
                value="large"
                className="rddd"
              />
              <span>Very High : Higher Than 100 TB</span>
            </label>
          </div>
        </div>
      </div>
      <h3>Compliance Requirements</h3>
      <div className="checkbox-group">
        <label>
          <input type="checkbox" /> PCI DSS (Payment Card Industry Data Security
          Standard)
        </label>
        <label>
          <input type="checkbox" /> SWIFT CSP (Customer Security Programme)
        </label>
        <label>
          <input type="checkbox" /> ISO/IEC 27001 (Information Security
          Management)
        </label>
        <label>
          <input type="checkbox" /> SOC 2 (Service Organization Control 2)
        </label>
        <label>
          <input type="checkbox" /> GDPR (General Data Protection Regulation)
        </label>
        <label>
          <input type="checkbox" /> CCPA (California Consumer Privacy Act)
        </label>
        <label>
          <input type="checkbox" /> Basel III
        </label>
        <label>
          <input type="checkbox" /> AML/CFT (Anti-Money Laundering/Combating the
          Financing of Terrorism) Frameworks
        </label>
        <label>
          <input type="checkbox" /> NIST Cybersecurity Framework
        </label>
        <label>
          <input type="checkbox" /> FIDO (Fast Identity Online) Alliance
        </label>
        <label>
          <input type="checkbox" /> Open Banking and PSD2 (Payment Services
          Directive 2)
        </label>
        <label>
          <input type="checkbox" /> Federal Financial Institutions Examination
          Council (FFIEC) Guidelines
        </label>
        <label>
          <input type="checkbox" /> FINRA (Financial Industry Regulatory
          Authority) Rules
        </label>
        <label>
          <input type="checkbox" /> MAS Technology Risk Management (TRM)
          Guidelines
        </label>
        <label>
          <input type="checkbox" /> Financial Action Task Force (FATF)
          Recommendations
        </label>
        <label>
          <input type="checkbox" /> FS-ISAC (Financial Services Information
          Sharing and Analysis Center)
        </label>
        <label>
          <input type="checkbox" /> HITRUST (Health Information Trust Alliance)
          Framework
        </label>
        <label>
          <input type="checkbox" /> Cloud Security Alliance (CSA)
        </label>
        <label>
          <input type="checkbox" /> COBIT (Control Objectives for Information
          and Related Technologies)
        </label>
        <label>
          <input type="checkbox" /> GDPR-like Regulations in Other Regions
        </label>
      </div>
      {/* Insurance Coverage Requirements */}
      <div className="section">
        <h2>4. Insurance Coverage Requirements</h2>
        <div className="form-group">
          <h3>Policy Limits</h3>
          <input type="text" placeholder="Enter policy limit" />
        </div>
        <h3>Add-Ons</h3>
        <div className="checkbox-group">
          <label>
            <input type="checkbox" /> Ransomware
          </label>
          <label>
            <input type="checkbox" /> Social Engineering Fraud
          </label>
          <label>
            <input type="checkbox" /> Regulatory Fines
          </label>
        </div>

        {/* Coverage Type*/}
        <h3>Coverage Type</h3>
        <div className="button-group">
          <button
            className={`response-button ${
              selectedOption4 === "yes" ? "selected-yes" : ""
            }`}
            onClick={() => handleSelect4("yes")}
          >
            First-Party Coverage (Protects the insured company directly)
          </button>
          <button
            className={`response-button ${
              selectedOption4 === "no" ? "selected-no" : ""
            }`}
            onClick={() => handleSelect4("no")}
          >
            Third-Party Coverage (Protects against claims from others due to a
            cyber incident)
          </button>
        </div>
        {selectedOption4 && (
          <p className="confirmation-message">
            You selected:{" "}
            <strong>
              {selectedOption4 === "yes"
                ? "First-Party Coverage (Data Breach Response, Business Interruption, Ransomware & Extortion, Digital Asset Restoration, Fraud & Social Engineering)"
                : "Third-Party Coverage (Network Security Liability, Privacy Liability, Regulatory Fines & Penalties, Media Liability)"}
            </strong>
          </p>
        )}
      </div>

      {/* Reputation Impact */}
      <div className="section">
        <h2>5. Reputation Impact</h2>
        <div className="form-group">
          <h3>Brand Reputation</h3>
        </div>
      </div>
      {/* Risk Factors */}
      <div className="section">
        <div className="form-group">
          <div className="radio-group">
            <label className="radio-option">
              <input
                type="radio"
                name="companyCategory"
                value="micro"
                className="rddd"
              />
              <span>
                Low : Negative Public Perception, Poor Trust, Frequent
                Controversies.
              </span>
            </label>

            <label className="radio-option">
              <input
                type="radio"
                name="companyCategory"
                value="small"
                defaultChecked
                className="rddd"
              />
              <span>
                Medium : Mixed Reputation, Some Trust But Occasional Issues.
              </span>
            </label>

            <label className="radio-option">
              <input
                type="radio"
                name="companyCategory"
                value="medium"
                className="rddd"
              />
              <span>
                High : Strong Reputation, Trusted By Customers And Industry.
              </span>
            </label>

            <label className="radio-option">
              <input
                type="radio"
                name="companyCategory"
                value="large"
                className="rddd"
              />
              <span>
                Very High : Excellent Reputation, Widely Respected, Minimal
                Risk.
              </span>
            </label>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="form-group">
          <h3>Customer Trust</h3>
        </div>
      </div>
      <div className="section">
        <div className="form-group">
          <div className="radio-group">
            <label className="radio-option">
              <input
                type="radio"
                name="companyCategory"
                value="micro"
                className="rddd"
              />
              <span>Low: Customers Doubt Reliability And Honesty.</span>
            </label>

            <label className="radio-option">
              <input
                type="radio"
                name="companyCategory"
                value="small"
                defaultChecked
                className="rddd"
              />
              <span>Medium: Some Trust, But Concerns Exist.</span>
            </label>

            <label className="radio-option">
              <input
                type="radio"
                name="companyCategory"
                value="medium"
                className="rddd"
              />
              <span>High: Customers Generally Rely On The Company.</span>
            </label>

            <label className="radio-option">
              <input
                type="radio"
                name="companyCategory"
                value="large"
                className="rddd"
              />
              <span>
                Very High: Strong Loyalty And Confidence In The Company.
              </span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeyInformation;
