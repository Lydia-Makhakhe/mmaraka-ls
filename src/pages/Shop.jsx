import { useMemo, useState } from 'react';
import {
  Search,
  Heart,
  ArrowUpRight,
  SlidersHorizontal,
  X,
} from 'lucide-react';

import { products, productCategories } from '../data/products';
import './Shop.css';

function Shop() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All products');
  const [sortBy, setSortBy] = useState('featured');
  const [favourites, setFavourites] = useState([]);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (selectedCategory !== 'All products') {
      result = result.filter(
        (product) => product.category === selectedCategory
      );
    }

    if (searchTerm.trim()) {
      const search = searchTerm.toLowerCase();

      result = result.filter((product) =>
        `${product.name} ${product.category} ${product.seller}`
          .toLowerCase()
          .includes(search)
      );
    }

    if (sortBy === 'price-low') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'name') {
      result.sort((a, b) => a.name.localeCompare(b.name));
    }

    return result;
  }, [searchTerm, selectedCategory, sortBy]);

  const toggleFavourite = (productId) => {
    setFavourites((current) =>
      current.includes(productId)
        ? current.filter((id) => id !== productId)
        : [...current, productId]
    );
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('All products');
    setSortBy('featured');
  };

  return (
    <main className="shop-page">

      <section className="shop-intro">
        <div className="shop-intro-container">
          <span className="shop-eyebrow">
            DISCOVER SOMETHING LOCAL
          </span>

          <h1>
            The <span>marketplace.</span>
          </h1>

          <p>
            Explore products from independent businesses and
            local brands across Lesotho. Find something you
            love, and discover the people behind it.
          </p>

          <div className="shop-intro-note">
            <span>✳</span>
            <span>One marketplace. Many local discoveries.</span>
          </div>
        </div>
      </section>

      <section className="shop-catalogue">
        <div className="shop-catalogue-container">

          <div className="shop-toolbar">
            <div className="shop-search">
              <Search size={19} />

              <input
                type="search"
                placeholder="Search products, categories or sellers..."
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                aria-label="Search products"
              />

              {searchTerm && (
                <button
                  type="button"
                  onClick={() => setSearchTerm('')}
                  aria-label="Clear search"
                >
                  <X size={17} />
                </button>
              )}
            </div>

            <div className="shop-sort">
              <SlidersHorizontal size={17} />

              <label htmlFor="shop-sort-select">Sort by</label>

              <select
                id="shop-sort-select"
                value={sortBy}
                onChange={(event) => setSortBy(event.target.value)}
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to high</option>
                <option value="price-high">Price: High to low</option>
                <option value="name">Product name</option>
              </select>
            </div>
          </div>

          <div className="shop-layout">

            <aside className="shop-sidebar">
              <div className="shop-sidebar-heading">
                <h2>Categories</h2>
                <span>{productCategories.length - 1}</span>
              </div>

              <div className="shop-category-list">
                {productCategories.map((category) => (
                  <button
                    type="button"
                    key={category}
                    className={
                      selectedCategory === category
                        ? 'shop-category active'
                        : 'shop-category'
                    }
                    onClick={() => setSelectedCategory(category)}
                  >
                    <span>{category}</span>
                    {selectedCategory === category && (
                      <span className="shop-category-indicator">•</span>
                    )}
                  </button>
                ))}
              </div>

              {(selectedCategory !== 'All products' || searchTerm) && (
                <button
                  type="button"
                  className="shop-clear-filters"
                  onClick={clearFilters}
                >
                  <X size={15} />
                  Clear filters
                </button>
              )}
            </aside>

            <div className="shop-results">

              <div className="shop-results-heading">
                <div>
                  <span className="shop-results-eyebrow">
                    EXPLORE THE COLLECTION
                  </span>

                  <h2>
                    {selectedCategory === 'All products'
                      ? 'All products'
                      : selectedCategory}
                  </h2>
                </div>

                <span className="shop-result-count">
                  {filteredProducts.length}{' '}
                  {filteredProducts.length === 1 ? 'product' : 'products'}
                </span>
              </div>

              {filteredProducts.length > 0 ? (
                <div className="shop-products-grid">
                  {filteredProducts.map((product) => (
                    <article className="shop-product-card" key={product.id}>

                      <div className="shop-product-image-wrapper">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="shop-product-image"
                          loading="lazy"
                        />

                        {product.tag && (
                          <span className="shop-product-tag">
                            {product.tag}
                          </span>
                        )}

                        <button
                          type="button"
                          className={`shop-favourite ${
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

                      <div className="shop-product-info">
                        <span className="shop-product-category">
                          {product.category}
                        </span>

                        <h3>{product.name}</h3>

                        <span className="shop-product-seller">
                          Sold by {product.seller}
                        </span>

                        <div className="shop-product-bottom">
                          <span className="shop-product-price">
                            M {product.price.toLocaleString('en-LS')}
                          </span>

                          <a
                            href={`/products/${product.id}`}
                            className="shop-product-link"
                            aria-label={`View ${product.name}`}
                          >
                            <ArrowUpRight size={18} />
                          </a>
                        </div>
                      </div>

                    </article>
                  ))}
                </div>
              ) : (
                <div className="shop-empty-state">
                  <span className="shop-empty-icon">
                    <Search size={27} />
                  </span>

                  <h3>No products found</h3>

                  <p>
                    We couldn't find anything matching your search.
                    Try another search term or explore a different category.
                  </p>

                  <button type="button" onClick={clearFilters}>
                    View all products
                  </button>
                </div>
              )}

            </div>
          </div>

        </div>
      </section>

    </main>
  );
}

export default Shop;