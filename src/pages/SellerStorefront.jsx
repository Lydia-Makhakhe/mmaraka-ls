import {
  Store,
  ArrowUpRight,
  CheckCircle2,
  Package,
  Users,
  TrendingUp,
} from 'lucide-react';

import './SellerStorefront.css';

const sellerBenefits = [
  {
    icon: Users,
    title: 'Reach more customers',
    description:
      'Make your business discoverable to customers across Lesotho.',
  },
  {
    icon: Store,
    title: 'Create your own storefront',
    description:
      'Give your business a dedicated space to showcase your products.',
  },
  {
    icon: TrendingUp,
    title: 'Grow your visibility',
    description:
      'Connect with new customers and help your business get noticed.',
  },
];

const sellerSteps = [
  'Tell us about your business.',
  'Add your products and product photos.',
  'Get your business discovered on Mmaraka.',
];

function SellerStorefront() {
  return (
    <main className="seller-storefront">

      {/* Hero */}
      <section className="seller-storefront-hero">
        <div className="seller-storefront-hero-content">
          <span className="seller-storefront-eyebrow">
            YOUR BUSINESS. YOUR MARKETPLACE.
          </span>

          <h1>
            Your business deserves
            <br />
            to be <span>discovered.</span>
          </h1>

          <p>
            Bring your business to Mmaraka.LS and connect
            with customers looking for products like yours.
            Your next customer could be just around the corner.
          </p>

          <a
            href="#seller-registration"
            className="seller-storefront-primary-button"
          >
            Start your seller journey
            <ArrowUpRight size={19} />
          </a>

          <div className="seller-storefront-note">
            <CheckCircle2 size={17} />
            <span>Made for businesses across Lesotho</span>
          </div>
        </div>

        <div className="seller-storefront-hero-visual">
          <img
            src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1000&q=85"
            alt="Small business owner preparing products for customers"
          />

          <div className="seller-storefront-image-card">
            <span className="seller-storefront-image-icon">
              <Store size={22} />
            </span>

            <div>
              <strong>Your store. Your story.</strong>
              <span>Start growing with Mmaraka.</span>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="seller-storefront-benefits">
        <div className="seller-storefront-section-heading">
          <span className="seller-storefront-eyebrow">
            WHY SELL ON MMARAKA?
          </span>

          <h2>
            More visibility.
            <br />
            <span>More opportunity.</span>
          </h2>

          <p>
            We’re creating a marketplace where local businesses
            can showcase what they offer and reach more people.
          </p>
        </div>

        <div className="seller-storefront-benefits-grid">
          {sellerBenefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <article
                className="seller-storefront-benefit-card"
                key={benefit.title}
              >
                <div className="seller-storefront-benefit-icon">
                  <Icon size={25} strokeWidth={1.6} />
                </div>

                <h3>{benefit.title}</h3>

                <p>{benefit.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      {/* How it works */}
      <section className="seller-storefront-how-it-works">
        <div className="seller-storefront-how-content">
          <span className="seller-storefront-eyebrow">
            GETTING STARTED
          </span>

          <h2>
            Three steps to
            <br />
            <span>getting discovered.</span>
          </h2>

          <p>
            Setting up your business on Mmaraka should be
            straightforward. Here’s how the journey begins.
          </p>
        </div>

        <div className="seller-storefront-steps">
          {sellerSteps.map((step, index) => (
            <div className="seller-storefront-step" key={step}>
              <span className="seller-storefront-step-number">
                0{index + 1}
              </span>

              <p>{step}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Seller registration placeholder */}
      <section
        className="seller-storefront-registration"
        id="seller-registration"
      >
        <div className="seller-storefront-registration-content">
          <span className="seller-storefront-eyebrow">
            READY TO GET STARTED?
          </span>

          <h2>
            Let’s put your business
            <br />
            <span>on the map.</span>
          </h2>

          <p>
            Seller registration is the next step in building
            your presence on Mmaraka.LS.
          </p>

          <div className="seller-storefront-registration-status">
            <Package size={20} />

            <span>
              Seller registration is coming soon.
            </span>
          </div>
        </div>
      </section>

    </main>
  );
}

export default SellerStorefront;