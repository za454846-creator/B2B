import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../assets/css/Navbar.css";

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "dark"
  );
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Reviews', path: '/reviews' },
    { name: 'Contact Us', path: '/contact-us' },
  ];

  // Theme
  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock scroll
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
  }, [isOpen]);

  const toggleTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  };

  return (
    <header>
      <nav className={`navbar navbar-expand-lg bp-nav ${scrolled ? "bp-scrolled" : ""}`}>
        <div className="bp-container d-flex align-items-center justify-content-between w-100">

          {/* Logo */}
          <Link to="/" className="navbar-brand bp-brand">
            Bid <span>Connectors</span>
          </Link>

          {/* Hamburger */}
          <button
            className="navbar-toggler"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>

          {/* Overlay */}
          {isOpen && (
            <div className="bp-overlay" onClick={() => setIsOpen(false)} />
          )}

          {/* Menu */}
          <div className={`navbar-collapse ${isOpen ? "mobile-show" : ""}`}>

            {/* CLOSE BUTTON */}
            <button className="bp-close" onClick={() => setIsOpen(false)}>
              ✕
            </button>

            <ul className="navbar-nav mx-auto">
              {menuItems.map(item => (
                <li className="nav-item" key={item.name}>
                  <Link
                    to={item.path}
                    className={`nav-link bp-link ${
                      location.pathname === item.path ? "active" : ""
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mobile-buttons d-flex align-items-center gap-2">

              <button onClick={toggleTheme} className="btn btn-sm">
                {theme === "dark" ? "☀️" : "🌙"}
              </button>

              <button className="btn-signin">Sign In</button>
              <button className="btn-startfree">Start Free</button>

            </div>

          </div>

        </div>
      </nav>
    </header>
  );
};

export default Navbar;