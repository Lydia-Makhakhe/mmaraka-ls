import {
  ArrowUpRight,
  ArrowUp,
  Store,
} from 'lucide-react';

import './Footer.css';

const exploreLinks = [
  { label: 'Shop products', href: '/shop' },
  { label: 'Browse categories', href: '/#categories' },
  { label: 'Discover brands', href: '/#brands' },
  { label: 'Explore services', href: '/#services' },
];

const businessLinks = [
  { label: 'Become a seller', href: '/#sell' },
  { label: 'Advertise a service', href: '/#advertise-service' },
];

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-main">

          {/* BRAND INTRODUCTION */}

          <div className="footer-brand">
            <a href="/" className="footer-logo">
              mmaraka<span>.LS</span>
            </a>

            <p className="footer-brand-description">
              A marketplace for discovering local businesses,
              finding great products and connecting with the
              people behind them.
            </p>

            <div className="footer-brand-note">
              <span>✳</span>
              <p>Locally discovered. Locally celebrated.</p>
            </div>
          </div>

          {/* EXPLORE LINKS */}

          <div className="footer-column">
            <h3>Explore</h3>

            <ul>
              {exploreLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* BUSINESS LINKS */}

          <div className="footer-column">
            <h3>For businesses</h3>

            <ul>
              {businessLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* MARKETPLACE MESSAGE */}

          <div className="footer-marketplace">
            <span className="footer-marketplace-icon">
              <Store size={22} />
            </span>

            <h3>
              Something local.
              <br />
              Something worth finding.
            </h3>

            <a href="/shop" className="footer-shop-link">
              Explore the marketplace
              <ArrowUpRight size={17} />
            </a>
          </div>

        </div>

        {/* FOOTER BOTTOM */}

        <div className="footer-bottom">

          <div className="footer-copyright">
            <span>© {new Date().getFullYear()} mmaraka.LS</span>
            <span>Made for local discovery.</span>
          </div>

          <div className="footer-bottom-links">
            <a href="/#top">
              Back to top
              <ArrowUp size={16} />
            </a>
          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;
