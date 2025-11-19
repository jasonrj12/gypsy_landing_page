import React, { useState } from 'react';
import { products } from '../data/products';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGem, faStar, faArrowRight, faHeart, faCut, faBrush } from '@fortawesome/free-solid-svg-icons';

const Products = () => {
  const [hoveredId, setHoveredId] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Bridal Jewelry Rental', 'Cosmetics', 'Salon Accessories'];

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Bridal Jewelry Rental': return faHeart;
      case 'Cosmetics': return faBrush;
      case 'Salon Accessories': return faCut;
      default: return faGem;
    }
  };

  const filteredProducts = activeCategory === 'All'
    ? products
    : products.filter(p => p.category === activeCategory);

  return (
    <section id="products" className="py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gypsy-gold/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-yellow-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Floating Stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          >
            <FontAwesomeIcon
              icon={faStar}
              className="text-gypsy-gold/20 text-xs"
            />
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-6 px-6 py-3 bg-white/5 backdrop-blur-xl rounded-full border border-white/10">
            <FontAwesomeIcon icon={faGem} className="text-gypsy-gold text-2xl animate-pulse" />
            <span className="text-gypsy-gold font-lato text-sm uppercase tracking-widest font-bold">Premium Collection</span>
            <FontAwesomeIcon icon={faGem} className="text-gypsy-gold text-2xl animate-pulse" style={{ animationDelay: '0.5s' }} />
          </div>

          <h2 className="text-4xl md:text-6xl font-playfair font-bold text-white mb-6 leading-tight">
            Discover Our <span className="bg-gradient-to-r from-gypsy-gold via-yellow-400 to-gypsy-gold bg-clip-text text-transparent animate-pulse">Exclusive</span> Products
          </h2>

          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-gypsy-gold to-gypsy-gold"></div>
            <FontAwesomeIcon icon={faStar} className="text-gypsy-gold animate-pulse" />
            <div className="w-20 h-px bg-gradient-to-r from-gypsy-gold via-gypsy-gold to-transparent"></div>
          </div>

          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto font-lato leading-relaxed">
            Premium bridal jewelry rentals, luxury cosmetics, and professional salon accessories curated for your <span className="text-gypsy-gold font-semibold">special moments</span>
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`group relative px-6 py-3 rounded-full font-lato font-bold text-sm uppercase tracking-wider transition-all duration-500 transform hover:scale-105 ${activeCategory === category
                ? 'bg-gradient-to-r from-gypsy-gold via-yellow-500 to-gypsy-gold text-white shadow-xl shadow-gypsy-gold/30'
                : 'bg-white/5 backdrop-blur-md text-gray-300 border border-white/10 hover:border-gypsy-gold/50 hover:text-white'
                }`}
            >
              <span className="relative z-10 flex items-center gap-2">
                {category !== 'All' && (
                  <FontAwesomeIcon
                    icon={getCategoryIcon(category)}
                    className={`text-sm ${activeCategory === category ? 'animate-pulse' : ''}`}
                  />
                )}
                {category}
              </span>
              {activeCategory !== category && (
                <div className="absolute inset-0 bg-gradient-to-r from-gypsy-gold/10 to-yellow-500/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              )}
            </button>
          ))}
        </div>

        {/* Products Grid - Modern Bento Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              className="group relative bg-gradient-to-br from-white/10 to-white/5 rounded-3xl overflow-hidden backdrop-blur-xl border border-white/20 hover:border-gypsy-gold/50 transition-all duration-700 transform hover:-translate-y-3 hover:shadow-2xl hover:shadow-gypsy-gold/20"
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
              style={{
                animation: 'fadeInUp 0.6s ease-out forwards',
                animationDelay: `${index * 0.1}s`,
                opacity: 0
              }}
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-gypsy-gold/0 via-gypsy-gold/10 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

              {/* Image Container with Overlay */}
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="500" height="500"%3E%3Cdefs%3E%3ClinearGradient id="grad" x1="0%25" y1="0%25" x2="100%25" y2="100%25"%3E%3Cstop offset="0%25" style="stop-color:%23D4AF37;stop-opacity:0.3" /%3E%3Cstop offset="100%25" style="stop-color:%23F4D03F;stop-opacity:0.3" /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width="500" height="500" fill="url(%23grad)"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="Arial" font-size="24" fill="%23D4AF37"%3E✨ GYPSY ✨%3C/text%3E%3C/svg%3E';
                  }}
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4 transform -translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="flex items-center gap-2 backdrop-blur-xl bg-gypsy-gold/20 px-4 py-2 rounded-full border border-gypsy-gold/30">
                    <FontAwesomeIcon
                      icon={getCategoryIcon(product.category)}
                      className="text-gypsy-gold text-xs"
                    />
                    <span className="text-xs font-lato uppercase tracking-wider text-white font-bold">
                      {product.category}
                    </span>
                  </div>
                </div>

                {/* Floating Icon */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:rotate-12">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gypsy-gold rounded-full blur-xl opacity-50"></div>
                    <div className="relative w-12 h-12 bg-gradient-to-br from-gypsy-gold to-yellow-600 rounded-full flex items-center justify-center shadow-2xl border-2 border-white/30">
                      <FontAwesomeIcon icon={faGem} className="text-white text-lg animate-pulse" />
                    </div>
                  </div>
                </div>

                {/* Bottom Quick View Bar */}
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <button className="w-full py-3 bg-gradient-to-r from-gypsy-gold to-yellow-600 text-white font-bold text-sm uppercase tracking-wider rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2 backdrop-blur-xl">
                    <FontAwesomeIcon icon={faArrowRight} className="text-xs" />
                    Quick View
                  </button>
                </div>
              </div>

              {/* Content Container */}
              <div className="p-6 relative">
                {/* Decorative Line */}
                <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-gypsy-gold/50 to-transparent"></div>

                <h3 className="text-xl font-playfair font-bold text-white mb-3 group-hover:text-gypsy-gold transition-colors duration-300 leading-tight min-h-[3rem]">
                  {product.name}
                </h3>

                <p className="text-gray-400 mb-4 font-lato text-sm leading-relaxed line-clamp-2">
                  {product.description}
                </p>

                {/* Price and CTA */}
                <div className="flex justify-between items-center pt-4 border-t border-white/10">
                  <div>
                    <div className="text-xs text-gray-500 font-lato uppercase tracking-wider mb-1">Price</div>
                    <span className="text-2xl font-playfair font-bold bg-gradient-to-r from-gypsy-gold via-yellow-400 to-gypsy-gold bg-clip-text text-transparent">
                      {product.price}
                    </span>
                  </div>

                  <button className="group/btn relative px-5 py-2.5 bg-white/10 backdrop-blur-sm text-gypsy-gold hover:text-white border border-gypsy-gold/50 hover:border-gypsy-gold rounded-xl font-lato text-xs uppercase tracking-wider font-bold transition-all duration-300 overflow-hidden">
                    <span className="relative z-10 flex items-center gap-2">
                      View Details
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className="text-xs transform group-hover/btn:translate-x-1 transition-transform"
                      />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-gypsy-gold to-yellow-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                  </button>
                </div>

                {/* Rating Stars */}
                <div className="flex gap-1 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {[...Array(5)].map((_, i) => (
                    <FontAwesomeIcon
                      key={i}
                      icon={faStar}
                      className="text-gypsy-gold text-xs animate-pulse"
                      style={{ animationDelay: `${i * 0.1}s` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-20 text-center">
          <div className="max-w-3xl mx-auto p-10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl">
            <FontAwesomeIcon icon={faStar} className="text-gypsy-gold text-4xl mb-4 animate-pulse" />
            <h3 className="text-3xl font-playfair font-bold text-white mb-4">
              Looking for Something <span className="bg-gradient-to-r from-gypsy-gold via-yellow-400 to-gypsy-gold bg-clip-text text-transparent">Special?</span>
            </h3>
            <p className="text-gray-300 font-lato text-lg mb-6">
              Can't find what you need? Contact us for custom orders and personalized recommendations.
            </p>
            <button className="group relative px-10 py-4 bg-gradient-to-r from-gypsy-gold via-yellow-500 to-gypsy-gold text-white font-bold text-sm uppercase tracking-wider rounded-full shadow-xl hover:shadow-2xl hover:shadow-gypsy-gold/50 transition-all duration-500 transform hover:scale-105 overflow-hidden">
              <span className="relative z-10 flex items-center gap-3">
                <FontAwesomeIcon icon={faGem} className="animate-pulse" />
                Contact Us for Custom Orders
                <FontAwesomeIcon icon={faArrowRight} className="group-hover:translate-x-2 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-gypsy-gold to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </button>
          </div>
        </div>
      </div>

      {/* CSS Animation Keyframes */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Products;
