import { useState } from 'react';

import {
  Search,
  ShoppingBag,
  UserRound,
  Menu,
  X,
  Heart,
} from 'lucide-react';

import './Navbar.css';

const navigationLinks = [
  { label: 'Home', href: '/' },
  { label: 'Shop', href: '/shop' },
  { label: 'Categories', href: '/#categories' },
  { label: 'Brands', href: '/#brands' },
  { label: 'Services', href: '/#services' },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">

        {/* Brand */}
        <a href="/" className="navbar-logo">
          mmaraka<span>.LS</span>
        </a>

        {/* Navigation */}
        <nav className={`navbar-links ${menuOpen ? 'active' : ''}`}>
          {navigationLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={closeMenu}
              className="navbar-link"
            >
              {link.label}
            </a>
          ))}

          {/* Become a Seller: mobile navigation */}
          <a
            href="/seller-storefront"
            className="mobile-seller-link"
            onClick={closeMenu}
          >
            Become a Seller
          </a>
        </nav>

        {/* Navbar actions */}
        <div className="navbar-actions">

          <button
            className="navbar-icon"
            type="button"
            aria-label="Search"
          >
            <Search size={21} strokeWidth={1.7} />
          </button>

          <button
            className="navbar-icon desktop-icon"
            type="button"
            aria-label="Favourites"
          >
            <Heart size={21} strokeWidth={1.7} />
          </button>

          <button
            className="navbar-icon"
            type="button"
            aria-label="Shopping bag"
          >
            <ShoppingBag size={21} strokeWidth={1.7} />
          </button>

          <button
            className="navbar-icon desktop-icon"
            type="button"
            aria-label="My account"
          >
            <UserRound size={21} strokeWidth={1.7} />
          </button>

          {/* Become a Seller: desktop button */}
          <a
            href="/seller-storefront"
            className="seller-button"
          >
            Become a Seller
          </a>

          {/* Mobile menu toggle */}
          <button
            className="mobile-menu-button"
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <X size={25} />
            ) : (
              <Menu size={25} />
            )}
          </button>

        </div>
      </div>
    </header>
  );
}

export default Navbar;
