
import { ArrowUpRight, MoveUpRight } from 'lucide-react';

import './BrandShowcase.css';

const brands = [
  {
    id: '01',
    name: 'The Style Edit',
    category: 'FASHION & STYLE',
    description: 'Everyday pieces with a little personality.',
    image:
      'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=85',
    label: 'STYLE',
  },
  {
    id: '02',
    name: 'Root & Ritual',
    category: 'BEAUTY & SKINCARE',
    description: 'Thoughtful essentials for your everyday routine.',
    image:
      'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=900&q=85',
    label: 'BEAUTY',
  },
  {
    id: '03',
    name: 'Made in the Mountains',
    category: 'ARTS & CRAFTS',
    description: 'Creative pieces inspired by local craftsmanship.',
    image:
      'https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?auto=format&fit=crop&w=900&q=85',
    label: 'CRAFT',
  },
  {
    id: '04',
    name: 'The Home Edit',
    category: 'HOME & LIVING',
    description: 'Little details that make a house feel like home.',
    image:
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=900&q=85',
    label: 'LIVING',
  },
];

function BrandShowcase() {
  return (
    <section className="brands-section" id="brands">
      <div className="brands-container">

        <div className="brands-heading">
          <div className="brands-heading-content">
            <span className="brands-eyebrow">
              THE PEOPLE BEHIND THE PRODUCTS
            </span>

            <h2>
              Get to know <span>the brands.</span>
            </h2>

            <p>
              Every business has a story. Discover the local
              brands, independent sellers and creative
              entrepreneurs bringing something special to
              the marketplace.
            </p>
          </div>

          <a href="#all-brands" className="brands-view-all">
            Discover all brands
            <ArrowUpRight size={18} />
          </a>
        </div>

        <div className="brands-grid">
          {brands.map((brand) => (
            <article className="brand-card" key={brand.id}>

              <a
                href="#shop"
                className="brand-image-link"
                aria-label={`Explore products from ${brand.name}`}
              >
                <div className="brand-image-wrapper">
                  <img
                    src={brand.image}
                    alt={`${brand.name} brand collection`}
                    className="brand-image"
                    loading="lazy"
                  />

                  <span className="brand-image-label">
                    {brand.label}
                  </span>

                  <span className="brand-image-arrow">
                    <MoveUpRight size={20} />
                  </span>
                </div>
              </a>

              <div className="brand-information">
                <span className="brand-category">
                  {brand.category}
                </span>

                <h3>{brand.name}</h3>

                <p>{brand.description}</p>

                <a href="#shop" className="brand-explore-link">
                  Explore brand
                  <ArrowUpRight size={16} />
                </a>
              </div>

            </article>
          ))}
        </div>

        <div className="brands-cta">
          <div className="brands-cta-decoration">✳</div>

          <div className="brands-cta-content">
            <span className="brands-cta-eyebrow">
              YOUR BUSINESS BELONGS HERE
            </span>

            <h3>
              Have something worth <span>sharing?</span>
            </h3>

            <p>
              Put your business in front of more customers.
              Join a marketplace built to help local businesses
              get discovered.
            </p>
          </div>

          <a href="#sell" className="brands-cta-button">
            Bring your brand to Mmaraka
            <ArrowUpRight size={18} />
          </a>
        </div>

      </div>
    </section>
  );
}

export default BrandShowcase;
