import React from "react";
import { Link } from "react-router-dom";
import "../../assets/css/footer.css";

/*
  FIXES IN THIS VERSION:
  - Removed a duplicate `import "../../assets/css/footer.css"` (it was
    imported twice, back to back — harmless but redundant).
  - Rebuilt the footer links to ONLY include pages that actually exist
    as routes in App.jsx right now:
      Home (/), About (/about), Subcontractors
      (/solutions/subcontractors), Building Product Manufacturers
      (/solutions/building-product-manufacturers), FAQ (/faq),
      Contact Us (/contact-us), Pricing (/pricing).
    Every other link from the previous version (Project Finder, Bid
    Manager, Estimating, Analytics, Careers, Blog, Help Center, API
    Docs, Security, Privacy) pointed to pages that don't exist yet and
    would have hit the 404 route — removed until those pages exist.
  - Added a <nav> landmark with aria-label around the link columns for
    better accessibility/SEO page-structure signals.

  When you add a new page + route later, just add its link here too —
  keep the path in sync with whatever you register in App.jsx.
*/

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">

        {/* TOP SECTION */}
        <div className="footer-top">

          {/* BRAND */}
          <div className="footer-brand">
            <Link to="/" className="navbar-brand bp-brand">
              Bid  <span>Connectors</span>
            </Link>
            <p>
              Bid Connectors is a one-stop shop to track, manage, and bid on top commercial and public construction projects in the USA. Our daily updated database is the best bet to find your next high-ROI project!
            </p>
          </div>

          {/* LINKS */}
          <nav className="footer-links" aria-label="Footer navigation">

            <div>
              <h3>Company</h3>
              <Link to="/">⋙ Home</Link>
              <Link to="/about">⋙ About</Link>
              <Link to="/contact-us">⋙ Contact Us</Link>
            </div>

            <div>
              <h3>Solutions</h3>
              <Link to="/solutions/subcontractors">⋙ Subcontractors</Link>
              <Link to="/solutions/building-product-manufacturers">⋙ Building Product Manufacturers</Link>
            </div>

            <div>
              <h3>Support</h3>
              <Link to="/faq">⋙ FAQ</Link>
              <Link to="/pricing">⋙ Pricing</Link>
            </div>

          </nav>

        </div>

        {/* DIVIDER */}
        <div className="divider"></div>

        {/* BOTTOM */}
        <div className="footer-bottom">

          <p>© {new Date().getFullYear()} Bid Connectors. All rights reserved.</p>

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