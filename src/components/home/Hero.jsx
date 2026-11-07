
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import './Hero.css';

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-container">

        {/* Left content */}
        <div className="hero-content">

          <div className="hero-eyebrow">
            <span className="hero-eyebrow-line"></span>
            <span>THE HOME OF LOCAL DISCOVERY</span>
          </div>

          <h1>
            Discover local.
            <br />
            <span>Shop differently.</span>
          </h1>

          <p className="hero-description">
            From emerging brands to everyday favourites,
            discover products from businesses across Lesotho.
            Your next great find starts here.
          </p>

          <div className="hero-buttons">
            <a href="#shop" className="hero-primary-button">
              Explore the marketplace
              <ArrowUpRight size={18} />
            </a>

            <a href="#brands" className="hero-secondary-button">
              Discover our brands
              <ArrowRight size={17} />
            </a>
          </div>

          <div className="hero-note">
            <span className="hero-note-star">✳</span>
            <span>Locally discovered. Locally celebrated.</span>
          </div>

        </div>

        {/* Right image */}
        <div className="hero-visual">

          <div className="hero-image-wrapper">
            <img
              src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1200&q=85"
              alt="Contemporary African-inspired fashion editorial"
              className="hero-image"
            />

            <div className="hero-image-label">
              <span>01 / LOCAL FINDS</span>
              <span>MADE TO BE DISCOVERED</span>
            </div>
          </div>

          <div className="hero-floating-card">
            <span className="floating-card-icon">✳</span>
            <div>
              <strong>Made closer.</strong>
              <span>Found on Mmaraka.</span>
            </div>
          </div>

          <div className="hero-decoration">
            ✳
          </div>

        </div>
      </div>

      <div className="hero-bottom-line">
        <span>FASHION</span>
        <span>BEAUTY</span>
        <span>ART & CRAFT</span>
        <span>HOME & LIVING</span>
        <span>EVERYDAY FINDS</span>
      </div>
    </section>
  );
}

export default Hero;
