import {
  Store,
  Users,
  TrendingUp,
  ArrowUpRight,
  CheckCircle2,
} from 'lucide-react';

import './SellerSection.css';

const sellerBenefits = [
  {
    icon: Users,
    title: 'Reach more customers',
    description:
      'Make your products discoverable to people looking to support businesses across Lesotho.',
  },
  {
    icon: Store,
    title: 'Give your business a home',
    description:
      'Showcase your products, prices and business details in one dedicated storefront.',
  },
  {
    icon: TrendingUp,
    title: 'Grow your visibility',
    description:
      'Put your brand alongside other local businesses in one shared marketplace.',
  },
];

const sellerSteps = [
  'Create your seller profile',
  'Add your products and photos',
  'Start getting discovered',
];

function SellerSection() {
  return (
    <section className="seller-section" id="sell">
      <div className="seller-container">

        <div className="seller-main">

          <div className="seller-content">
            <span className="seller-eyebrow">
              <span className="seller-eyebrow-dot"></span>
              FOR LOCAL BUSINESSES
            </span>

            <h2>
              Your business deserves
              <br />
              <span>to be discovered.</span>
            </h2>

            <p className="seller-description">
              Whether you're an established business or just
              getting started, Mmaraka gives you a space to
              showcase what you offer and reach more customers.
            </p>

            <a href="#seller-registration" className="seller-primary-button">
              Start selling on Mmaraka
              <ArrowUpRight size={19} />
            </a>

            <div className="seller-note">
              <CheckCircle2 size={17} />
              <span>Built to put local businesses in the spotlight.</span>
            </div>
          </div>

          <div className="seller-visual">
            <div className="seller-visual-image">
              <img
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1000&q=85"
                alt="Small business owner preparing products for customers"
                loading="lazy"
              />
            </div>

            <div className="seller-visual-card">
              <span className="seller-card-icon">
                <Store size={21} />
              </span>

              <div>
                <strong>Your store. Your story.</strong>
                <span>One marketplace. More possibilities.</span>
              </div>
            </div>

            <span className="seller-visual-decoration">✳</span>
          </div>

        </div>

        <div className="seller-benefits">
          {sellerBenefits.map((benefit, index) => {
            const Icon = benefit.icon;

            return (
              <article className="seller-benefit" key={benefit.title}>
                <div className="seller-benefit-top">
                  <span className="seller-benefit-number">
                    0{index + 1}
                  </span>

                  <span className="seller-benefit-icon">
                    <Icon size={23} strokeWidth={1.7} />
                  </span>
                </div>

                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </article>
            );
          })}
        </div>

        <div className="seller-steps">
          <div className="seller-steps-heading">
            <span className="seller-steps-eyebrow">
              GET STARTED
            </span>

            <h3>
              Three steps to <span>getting discovered.</span>
            </h3>
          </div>

          <div className="seller-steps-list">
            {sellerSteps.map((step, index) => (
              <div className="seller-step" key={step}>
                <span className="seller-step-number">
                  0{index + 1}
                </span>

                <span>{step}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default SellerSection;