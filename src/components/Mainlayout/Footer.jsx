import React from "react";
import { Link } from "react-router-dom";
import "../../assets/css/Footer.css";
import "../../assets/css/Footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">

        {/* TOP SECTION */}
        <div className="footer-top">

          {/* BRAND */}
          <div className="footer-brand">
            <img src="/logo.png" alt="BuildPulse" />
            <p>
              BuildPulse helps contractors find, bid, and win more commercial projects with ease.
            </p>
          </div>

          {/* LINKS */}
          <div className="footer-links">

            <div>
              <h6>Platform</h6>
              <Link to="/project-finder">⋙ Project Finder</Link>
              <Link to="/bid-manager">⋙ Bid Manager</Link>
              <Link to="/estimating">⋙ Estimating</Link>
              <Link to="/analytics">⋙ Analytics</Link>
            </div>

            <div>
              <h6>Company</h6>
              <Link to="/about">⋙ About</Link>
              <Link to="/careers">⋙ Careers</Link>
              <Link to="/blog">⋙ Blog</Link>
              <Link to="/contact">⋙ Contact</Link>
            </div>

            <div>
              <h6>Resources</h6>
              <Link to="/help">⋙ Help Center</Link>
              <Link to="/api">⋙ API Docs</Link>
              <Link to="/security">⋙ Security</Link>
              <Link to="/privacy">⋙ Privacy</Link>
            </div>

          </div>

        </div>

        {/* DIVIDER */}
        <div className="divider"></div>

        {/* BOTTOM */}
        <div className="footer-bottom">

          <p>© {new Date().getFullYear()} BuildPulse. All rights reserved.</p>

          <div className="badges">
            <span>SOC 2</span>
            <span>AES-256</span>
            <span>99.99%</span>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;