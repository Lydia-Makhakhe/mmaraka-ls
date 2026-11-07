import { useState } from 'react';
import { Heart, ArrowUpRight } from 'lucide-react';

import { products } from '../../data/products';
import './FeaturedProducts.css';

function FeaturedProducts() {
  const [favourites, setFavourites] = useState([]);

  const featuredProducts = products.slice(0, 4);

  const toggleFavourite = (productId) => {
    setFavourites((current) =>
      current.includes(productId)
        ? current.filter((id) => id !== productId)
        : [...current, productId]
    );
  };

  return (
    <section className="featured-section" id="shop">
      <div className="featured-container">

        <div className="featured-heading">
          <div className="featured-heading-content">
            <span className="featured-eyebrow">
              A LITTLE SOMETHING FOR EVERYONE
            </span>

            <h2>
              Featured <span>finds.</span>
            </h2>

            <p>
              Discover interesting products from businesses
              across Lesotho. Your next favourite might be
              closer than you think.
            </p>
          </div>

          <a href="/shop" className="featured-view-all">
            View all products
            <ArrowUpRight size={18} />
          </a>
        </div>

        <div className="featured-products-grid">
          {featuredProducts.map((product) => (
            <article className="product-card" key={product.id}>

              <div className="product-image-wrapper">
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-image"
                  loading="lazy"
                />

                {product.tag && (
                  <span className="product-tag">
                    {product.tag}
                  </span>
                )}

                <button
                  type="button"
                  className={`product-favourite ${
                    favourites.includes(product.id) ? 'active' : ''
                  }`}
                  onClick={() => toggleFavourite(product.id)}
                  aria-label={
                    favourites.includes(product.id)
                      ? `Remove ${product.name} from favourites`
                      : `Add ${product.name} to favourites`
                  }
                  aria-pressed={favourites.includes(product.id)}
                >
                  <Heart
                    size={19}
                    fill={
                      favourites.includes(product.id)
                        ? 'currentColor'
                        : 'none'
                    }
                  />
                </button>
              </div>

              <div className="product-information">
                <span className="product-category">
                  {product.category}
                </span>

                <h3>{product.name}</h3>

                <span className="product-seller">
                  Sold by {product.seller}
                </span>

                <div className="product-card-bottom">
                  <span className="product-price">
                    M {product.price.toLocaleString('en-LS')}
                  </span>

                  <a
                    href={`/products/${product.id}`}
                    className="product-view-link"
                    aria-label={`View ${product.name}`}
                  >
                    <ArrowUpRight size={18} />
                  </a>
                </div>
              </div>

            </article>
          ))}
        </div>

        <div className="featured-bottom">
          <span className="featured-bottom-line"></span>
          <p>Good finds. Great local businesses.</p>
          <span className="featured-bottom-line"></span>
        </div>

      </div>
    </section>
  );
}

export default FeaturedProducts;