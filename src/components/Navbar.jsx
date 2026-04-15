import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../assets/css/Navbar.css"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Reviews', path: '/reviews' },
    { name: 'Contact Us', path: '/Contact-Us' },
  ];

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Close menu when clicking on a link
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bp-nav">
        <div className="bp-container d-flex align-items-center justify-content-between w-100">

          {/* Logo */}
          <Link to="/" className="navbar-brand d-flex align-items-center gap-2" onClick={handleLinkClick}>
            <div className="bp-logo-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                <path d="M3 9.5L12 3l9 6.5V21H3V9.5z" />
              </svg>
            </div>
            <span className="bp-brand"><span>Build</span>Pulse</span>
          </Link>

          {/* Mobile Toggle Button */}
          <button
            className="navbar-toggler"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation"
            style={{
              background: 'transparent',
              border: '1px solid rgba(255,255,255,0.2)',
              borderRadius: '8px',
              padding: '8px 12px'
            }}
          >
            <span className="navbar-toggler-icon" style={{ filter: 'invert(1)' }} />
          </button>

          {/* Mobile Menu Overlay */}
          {isOpen && (
            <div
              className="mobile-menu-overlay"
              onClick={() => setIsOpen(false)}
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0,0,0,0.7)',
                zIndex: 999,
              }}
            />
          )}

          {/* Menu Container */}
          <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
            {/* Navigation Links */}
            <ul className="navbar-nav mx-auto">
              {menuItems.map(item => (
                <li className="nav-item" key={item.name}>
                  <Link
                    to={item.path}
                    className="nav-link bp-link"
                    onClick={handleLinkClick}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Buttons */}
            <div className="mobile-buttons">
              <a
                href="https://bidconnectors.com/login"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-signin"
              >
                <button className="btn-signin">Sign In</button></a>
              <button className="btn-startfree">Start Free</button>
            </div>
          </div>

        </div>
      </nav>

      {/* Additional CSS for mobile menu */}
      <style jsx>{`
        @media (max-width: 991px) {
          .navbar-collapse {
            position: fixed;
            top: 0;
            right: -100%;
            width: 85%;
            max-width: 350px;
            height: 100vh;
            background-color: var(--color-black, #111111);
            padding: 80px 24px 30px;
            transition: right 0.3s ease-in-out;
            z-index: 1000;
            overflow-y: auto;
            box-shadow: -5px 0 20px rgba(0,0,0,0.3);
            display: block !important;
          }

          .navbar-collapse.show {
            right: 0;
          }

          .navbar-toggler {
            position: relative;
            z-index: 1001;
          }

          /* Menu Items */
          .navbar-nav {
            flex-direction: column;
            width: 100%;
            margin-bottom: 30px;
            gap: 8px;
          }

          .nav-item {
            width: 100%;
            text-align: left;
            border-bottom: 1px solid rgba(255,255,255,0.1);
          }

          .bp-link {
            display: block;
            padding: 14px 0 !important;
            font-size: 16px !important;
            font-weight: 500;
            transition: all 0.3s ease;
          }

          .bp-link:hover {
            padding-left: 10px !important;
            color: var(--color-orange, #E86129) !important;
          }

          /* Mobile Buttons */
          .mobile-buttons {
            display: flex;
            flex-direction: column;
            gap: 12px;
            width: 100%;
            margin-top: 20px;
            padding-top: 20px;
            border-top: 1px solid rgba(255,255,255,0.1);
          }

          .btn-signin,
          .btn-startfree {
            width: 100%;
            padding: 12px 20px;
            font-size: 16px;
            text-align: center;
          }

          .btn-signin {
            background: transparent;
            border: 1px solid rgba(255,255,255,0.2);
            border-radius: 8px;
          }

          .btn-startfree {
            background: var(--color-orange, #E86129);
          }
        }

        /* Desktop styles */
        @media (min-width: 992px) {
          .navbar-collapse {
            display: flex !important;
            justify-content: space-between;
            align-items: center;
            flex-grow: 1;
          }

          .navbar-nav {
            display: flex;
            align-items: center;
            gap: 8px;
          }

          .mobile-buttons {
            display: flex;
            flex-direction: row;
            gap: 12px;
            align-items: center;
          }

          .btn-signin,
          .btn-startfree {
            white-space: nowrap;
          }
        }

        /* Animation for menu items */
        .navbar-collapse.show .nav-item {
          animation: slideIn 0.3s ease forwards;
          opacity: 0;
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        /* Stagger animation */
        .navbar-collapse.show .nav-item:nth-child(1) { animation-delay: 0.05s; }
        .navbar-collapse.show .nav-item:nth-child(2) { animation-delay: 0.1s; }
        .navbar-collapse.show .nav-item:nth-child(3) { animation-delay: 0.15s; }
        .navbar-collapse.show .nav-item:nth-child(4) { animation-delay: 0.2s; }
        .navbar-collapse.show .nav-item:nth-child(5) { animation-delay: 0.25s; }
        .navbar-collapse.show .nav-item:nth-child(6) { animation-delay: 0.3s; }

        /* Smooth transitions */
        .navbar-collapse {
          transition: right 0.3s ease-in-out;
        }

        /* Custom scrollbar for mobile menu */
        .navbar-collapse::-webkit-scrollbar {
          width: 4px;
        }

        .navbar-collapse::-webkit-scrollbar-track {
          background: rgba(255,255,255,0.1);
        }

        .navbar-collapse::-webkit-scrollbar-thumb {
          background: var(--color-orange, #E86129);
          border-radius: 4px;
        }
      `}</style>
    </>
  );
};

export default Navbar;