import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../assets/css/navbar.css";

const productsMega = {
  name: 'Products',
  path: '/products',
  wide: true,
  columns: [
    {
      heading: 'FIND PROJECTS',
      links: [
        { name: 'Project Intelligence', desc: 'Find and qualify projects to bid', path: 'products/project-intelligence' },
        { name: 'Intelligent Leads', desc: 'Curated leads matched to your business', path: 'products/project-intelligence' },
      ],
    },
    {
      heading: 'ASSESS FIT & ESTIMATE',
      links: [
        { name: 'On-Screen Takeoff', desc: 'Scalable takeoff measurement', path: 'products/takeoff' },
        { name: 'Quick Bid', desc: 'Turn takeoffs into fast bids', path: 'products/quick-bid' },
      ],
    },
    {
      heading: 'MANAGE & WIN BIDS',
      links: [
        { name: 'Bid Management', desc: 'Track every submission to award', path: 'products/bid-management' },
        { name: 'Pipeline Insights', desc: 'See win/loss patterns and forecast', path: 'products/pipeline-insights' },
      ],
    },
    {
      heading: 'PLATFORM',
      links: [
        { name: 'Bid Connectors Platform', desc: 'The connected bidding suite', path: 'products/platform' },
      ],
    },
  ],
  featured: {
    eyebrow: 'READY TO BUY?',
    title: 'See pricing built for your team',
    desc: 'Plans for every stage, from finding work to winning it.',
    ctaText: 'Get Started',
    ctaLink: 'https://bidconnectors.com/bidconnectors/register',
  },
};

const solutionsMega = {
  name: 'Solutions',
  path: '/solutions',
  links: [
    { name: 'Subcontractors', desc: 'Find & win more of the right work', path: 'solutions/subcontractors' },
    { name: 'General Contractors', desc: 'Fill your plan room & bid faster', path: 'solutions/general-contractors' },
    { name: 'Building Product Manufacturers', desc: 'Get specified on more projects', path: 'solutions/building-product-manufacturers' },
    { name: 'Suppliers & Distributors', desc: 'Spot demand earlier', path: 'solutions/suppliers-and-distributors-solutions' },
    { name: 'Hospitality', desc: 'Track renovation and build projects', path: 'solutions/hospitality' },
    { name: 'Service Providers', desc: 'Reach active buyers', path: 'solutions/service-providers' },
  ],
  featured: {
    eyebrow: 'NEED JOBS TO BID ON?',
    title: 'Get matched to active projects',
    desc: 'Search local commercial work that fits your trade and region.',
    ctaText: 'Get Pricing',
    ctaPath: '/pricing',
  },
};

const menuItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  productsMega,
  solutionsMega,
  { name: 'Faq', path: '/faq' },
  { name: 'Contact Us', path: '/contact-us' },
  { name: 'Pricing', path: '/pricing' },
];

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);

  const lastScrollY = useRef(0);
  const location = useLocation();

  // Sticky navbar: solid background past 20px, and hide on
  // scroll-down / reveal on scroll-up past 120px so it doesn't
  // eat screen space while reading but is always one scroll-up
  // away. Never hides while the mobile menu itself is open.
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 20);

      if (isOpen) {
        setHidden(false);
      } else if (currentY > lastScrollY.current && currentY > 120) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  // Mobile menu open hote hi body scroll lock
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
  }, [isOpen]);

  const closeMenu = () => {
    setIsOpen(false);
    setOpenMenu(null);
  };

  return (
    <header>
      <nav
        className={`navbar navbar-expand-lg bp-nav ${scrolled ? "bp-scrolled" : ""} ${
          hidden ? "bp-nav-hidden" : ""
        }`}
      >
        <div className="nav-container d-flex align-items-center justify-content-between w-100">

          <Link to="/" className="navbar-brand bp-brand" onClick={closeMenu}>
            Bid <span>Connectors</span>
          </Link>

          <button
            className="navbar-toggler"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            ☰
          </button>

          {isOpen && <div className="bp-overlay" onClick={closeMenu} />}

          <div className={`navbar-collapse ${isOpen ? "mobile-show" : ""}`}>
            <button className="bp-close" onClick={closeMenu} aria-label="Close menu">✕</button>

            <ul className="navbar-nav mx-auto">
              {menuItems.map((item) =>
                item.links || item.columns ? (
                  <li
                    className="nav-item bp-dropdown"
                    key={item.name}
                    // Hover-based open/close sirf DESKTOP par chahiye.
                    // Mobile par isOpen true hone par ye handlers disable
                    // kar diye — warna tap par mouseenter+click dono fire
                    // ho kar dropdown ko turant band kar dete the.
                    onMouseEnter={() => { if (!isOpen) setOpenMenu(item.name); }}
                    onMouseLeave={() => { if (!isOpen) setOpenMenu(null); }}
                  >
                    <span
                      className={`nav-link bp-link bp-dropdown-toggle ${
                        location.pathname.startsWith(item.path) ? "active" : ""
                      }`}
                      onClick={(e) => {
                        e.stopPropagation();
                        setOpenMenu((prev) => (prev === item.name ? null : item.name));
                      }}
                      role="button"
                    >
                      {item.name}
                      <i className={`bi bi-chevron-down bp-caret ${openMenu === item.name ? "bp-caret-open" : ""}`}></i>
                    </span>

                    {/* ---------- MEGA MENU ---------- */}
                    <div
                      className={`bp-dropdown-menu bp-mega-menu ${item.wide ? "bp-mega-wide" : ""} ${
                        openMenu === item.name ? "bp-dropdown-menu-open" : ""
                      }`}
                    >

                      {item.columns ? (
                        <div className="bp-mega-columns">
                          {item.columns.map((col) => (
                            <div className="bp-mega-col" key={col.heading}>
                              <span className="bp-mega-col-heading">{col.heading}</span>
                              {col.links.map((link) => (
                                <Link
                                  key={link.name}
                                  to={link.path}
                                  className={`bp-mega-item ${location.pathname === link.path ? "active" : ""}`}
                                  onClick={closeMenu}
                                >
                                  <span className="bp-mega-item-title">{link.name}</span>
                                  <span className="bp-mega-item-desc">{link.desc}</span>
                                </Link>
                              ))}
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="bp-mega-grid">
                          {item.links.map((link) => (
                            <Link
                              key={link.name}
                              to={link.path}
                              className={`bp-mega-item ${location.pathname === link.path ? "active" : ""}`}
                              onClick={closeMenu}
                            >
                              <span className="bp-mega-item-title">{link.name}</span>
                              <span className="bp-mega-item-desc">{link.desc}</span>
                            </Link>
                          ))}
                        </div>
                      )}

                      <div className="bp-mega-featured">
                        <span className="bp-mega-featured-eyebrow">{item.featured.eyebrow}</span>
                        <h4 className="bp-mega-featured-title">{item.featured.title}</h4>
                        <p className="bp-mega-featured-desc">{item.featured.desc}</p>
                        {item.featured.ctaPath ? (
                          <Link to={item.featured.ctaPath} className="bp-mega-featured-cta" onClick={closeMenu}>
                            {item.featured.ctaText}
                          </Link>
                        ) : (
                          <a
                            href={item.featured.ctaLink}
                            className="bp-mega-featured-cta"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={closeMenu}
                          >
                            {item.featured.ctaText}
                          </a>
                        )}
                      </div>

                    </div>

                  </li>
                ) : (
                  <li className="nav-item" key={item.name}>
                    <Link
                      to={item.path}
                      className={`nav-link bp-link ${location.pathname === item.path ? "active" : ""}`}
                      onClick={closeMenu}
                    >
                      {item.name}
                    </Link>
                  </li>
                )
              )}
            </ul>

            <div className="mobile-buttons d-flex align-items-center gap-2">
              <a
                className="btn btn-signin"
                href="https://bidconnectors.com/bidconnectors/login"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sign In
              </a>

              <a
                href="https://bidconnectors.com/bidconnectors/register"
                className="btn btn-startfree"
                onClick={closeMenu}
                target="_blank"
                rel="noopener noreferrer"
              >
                Start Free
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;