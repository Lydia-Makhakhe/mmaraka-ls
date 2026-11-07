
import {
  Shirt,
  Utensils,
  Sparkles,
  Smartphone,
  Palette,
  Armchair,
  ArrowUpRight,
} from 'lucide-react';

import './Categories.css';

const categories = [
  {
    number: '01',
    title: 'Fashion',
    description: 'Clothing and everyday style.',
    icon: Shirt,
  },
  {
    number: '02',
    title: 'Food & Local Goods',
    description: 'Local flavours and everyday essentials.',
    icon: Utensils,
  },
  {
    number: '03',
    title: 'Beauty & Skincare',
    description: 'Beauty, care and self-expression.',
    icon: Sparkles,
  },
  {
    number: '04',
    title: 'Electronics & Gadgets',
    description: 'Technology for everyday life.',
    icon: Smartphone,
  },
  {
    number: '05',
    title: 'Arts & Crafts',
    description: 'Creative pieces and local craft.',
    icon: Palette,
  },
  {
    number: '06',
    title: 'Home & Living',
    description: 'Pieces that make a space yours.',
    icon: Armchair,
  },
];

function Categories() {
  return (
    <section className="categories-section" id="categories">
      <div className="categories-container">

        <div className="categories-heading">
          <div className="categories-heading-left">
            <span className="section-eyebrow">
              EXPLORE THE MARKETPLACE
            </span>

            <h2>
              Find your <span>kind of thing.</span>
            </h2>

            <p>
              From everyday essentials to unique local finds,
              explore products across different categories.
            </p>
          </div>

          <a href="#shop" className="categories-view-all">
            Explore everything
            <ArrowUpRight size={18} />
          </a>
        </div>

        <div className="categories-grid">
          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <a
                href="#shop"
                className="category-card"
                key={category.number}
              >
                <div className="category-card-top">
                  <span className="category-number">
                    {category.number}
                  </span>

                  <span className="category-icon">
                    <Icon size={25} strokeWidth={1.6} />
                  </span>
                </div>

                <div className="category-card-bottom">
                  <div>
                    <h3>{category.title}</h3>
                    <p>{category.description}</p>
                  </div>

                  <span className="category-arrow">
                    <ArrowUpRight size={19} />
                  </span>
                </div>
              </a>
            );
          })}
        </div>

        <div className="categories-footer">
          <span className="categories-footer-star">✳</span>
          <p>
            One marketplace. Many local discoveries.
          </p>
        </div>

      </div>
    </section>
  );
}

export default Categories;
