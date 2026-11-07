import { Routes, Route } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

import Hero from './components/home/Hero';
import Categories from './components/home/Categories';
import FeaturedProducts from './components/home/FeaturedProducts';
import BrandShowcase from './components/home/BrandShowcase';
import ServicesSection from './components/home/ServicesSection';
import SellerSection from './components/home/SellerSection';

import Shop from './pages/Shop';
import SellerStorefront from './pages/SellerStorefront';

function HomePage() {
  return (
    <>
      <Hero />
      <Categories />
      <FeaturedProducts />
      <BrandShowcase />
      <ServicesSection />
      <SellerSection />
    </>
  );
}

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        {/* Homepage */}
        <Route path="/" element={<HomePage />} />

        {/* Marketplace */}
        <Route path="/shop" element={<Shop />} />

        {/* Seller storefront */}
        <Route
          path="/seller-storefront"
          element={<SellerStorefront />}
        />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
