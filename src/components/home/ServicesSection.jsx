import {
  Camera,
  Laptop,
  Scissors,
  Paintbrush,
  Wrench,
  PartyPopper,
  ArrowUpRight,
  MoveUpRight,
} from 'lucide-react';

import './ServicesSection.css';

const services = [
  {
    number: '01',
    title: 'Photography & Media',
    description:
      'Photographers, videographers and creative media professionals.',
    icon: Camera,
  },
  {
    number: '02',
    title: 'Technology & IT',
    description:
      'Tech support, web development, repairs and digital solutions.',
    icon: Laptop,
  },
  {
    number: '03',
    title: 'Beauty & Personal Care',
    description:
      'Hair stylists, makeup artists, nail technicians and beauty professionals.',
    icon: Scissors,
  },
  {
    number: '04',
    title: 'Creative & Design',
    description:
      'Graphic designers, decorators, artists and branding specialists.',
    icon: Paintbrush,
  },
  {
    number: '05',
    title: 'Home & Maintenance',
    description:
      'Plumbers, electricians, cleaners and home improvement services.',
    icon: Wrench,
  },
  {
    number: '06',
    title: 'Events & Experiences',
    description:
      'Event planners, caterers, entertainers and other event professionals.',
    icon: PartyPopper,
  },
];

function ServicesSection() {
  return (
    <section className="services-section" id="services">
      <div className="services-container">

        <div className="services-heading">
          <div className="services-heading-content">
            <span className="services-eyebrow">
              MORE THAN PRODUCTS
            </span>

            <h2>
              Services worth <span>knowing.</span>
            </h2>

            <p>
              Looking for someone who can get the job done?
              Discover local professionals and service providers
              offering skills, expertise and solutions across Lesotho.
            </p>
          </div>

          <a href="#advertise-service" className="services-view-all">
            Advertise a service
            <ArrowUpRight size={18} />
          </a>
        </div>

        <div className="services-grid">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <a
                href="#advertise-service"
                className="service-card"
                key={service.number}
              >
                <div className="service-card-top">
                  <span className="service-number">
                    {service.number}
                  </span>

                  <span className="service-icon">
                    <Icon size={24} strokeWidth={1.6} />
                  </span>
                </div>

                <div className="service-card-bottom">
                  <div>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </div>

                  <span className="service-arrow">
                    <MoveUpRight size={19} />
                  </span>
                </div>
              </a>
            );
          })}
        </div>

        <div className="services-promo" id="advertise-service">
          <div className="services-promo-content">
            <span className="services-promo-eyebrow">
              FOR SERVICE PROVIDERS
            </span>

            <h3>
              Turn your skills into <span>opportunities.</span>
            </h3>

            <p>
              Make your services easier to find. Put your work
              in front of people looking for the skills and
              expertise you offer.
            </p>
          </div>

          <a href="#sell" className="services-promo-button">
            Advertise your service
            <ArrowUpRight size={18} />
          </a>

          <span className="services-promo-decoration">✳</span>
        </div>

      </div>
    </section>
  );
}

export default ServicesSection;