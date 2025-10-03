// ===================================
// LAYOUT COMPONENT
// Main application layout with navigation
// ===================================

import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Layout.css';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Dashboard', icon: '📊' },
    { path: '/planning', label: 'Annual Planning', icon: '📅' },
    { path: '/gantt', label: 'Planning Board', icon: '📈' },
    { path: '/resources', label: 'Resources', icon: '👥' },
    { path: '/materials', label: 'Materials', icon: '📦' },
    { path: '/cost', label: 'Cost Analysis', icon: '💰' }
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    return path !== '/' && location.pathname.startsWith(path);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="layout">
      <header className="layout-header">
        <div className="header-content">
          <div className="header-brand">
            <span className="brand-icon">⚙️</span>
            <h1 className="brand-title">Maintenance Planning Tool</h1>
          </div>
          <button
            className="mobile-menu-btn no-print"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </header>

      <div className="layout-body">
        <nav className={`layout-nav no-print ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          <ul className="nav-list">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`nav-link ${isActive(item.path) ? 'active' : ''}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="nav-icon" aria-hidden="true">{item.icon}</span>
                  <span className="nav-label">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <main className="layout-main">
          <div className="container">
            {children}
          </div>
        </main>
      </div>

      <footer className="layout-footer no-print">
        <div className="footer-content">
          <p>&copy; 2025 Maintenance Planning Tool. Connected to ERPAPP10 System.</p>
          <p className="footer-note">
            Real-time data integration • Automated reporting • WCAG Compliant
          </p>
        </div>
      </footer>
    </div>
  );
};
