import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../assets/css/Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // 🌙 Default DARK theme
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "dark"
  );

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Reviews', path: '/reviews' },
    { name: 'Contact Us', path: '/Contact-Us' },
  ];

  // Apply theme
  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  // prevent scroll on mobile menu
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  // toggle theme
  const toggleTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  };

  return (
    <header>
      <nav className="navbar navbar-expand-lg bp-nav">
        <div className="bp-container d-flex align-items-center justify-content-between w-100">

          {/* Logo */}
          <Link to="/" className="navbar-brand" onClick={handleLinkClick}>
            <span>Bid Connectors</span>
          </Link>



          {/* Overlay */}
          {isOpen && (
            <div
              onClick={() => setIsOpen(false)}
              style={{
                position: "fixed",
                inset: 0,
                background: "rgba(0,0,0,0.6)",
                zIndex: 999
              }}
            />
          )}

          {/* Menu */}
          <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>

            <ul className="navbar-nav mx-auto">
              {menuItems.map(item => (
                <li className="nav-item" key={item.name}>
                  <Link
                    to={item.path}
                    className="nav-link"
                    onClick={handleLinkClick}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mobile-buttons">
                        {/* 🌙 Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="btn btn-md "
          >
            {theme === "dark" ? "☀️ " : "🌙 "}
          </button>

          {/* Mobile toggle */}
          <button
            className="navbar-toggler"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
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