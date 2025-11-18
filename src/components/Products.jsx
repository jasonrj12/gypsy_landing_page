import React, { useState } from 'react';
import { products } from '../data/products';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGem, faStar, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Products = () => {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section id="products" className="py-32 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gypsy-gold/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-3 mb-6 p-4 bg-gradient-to-r from-transparent via-gypsy-gold/10 to-transparent rounded-full">
            <FontAwesomeIcon icon={faGem} className="text-4xl text-gypsy-gold animate-pulse" />
            <div className="flex gap-1">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 bg-gypsy-gold rounded-full animate-pulse" style={{ animationDelay: `${i * 0.2}s` }}></div>
              ))}
            </div>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-playfair font-bold text-gray-900 mb-6 leading-tight">
            Our Exclusive <span className="bg-gradient-to-r from-gypsy-gold via-yellow-600 to-gypsy-gold bg-clip-text text-transparent">Collection</span>
          </h2>
          
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-gypsy-gold to-gypsy-gold"></div>
            <FontAwesomeIcon icon={faStar} className="text-gypsy-gold text-sm" />
            <div className="w-32 h-px bg-gradient-to-r from-gypsy-gold to-gypsy-gold"></div>
            <FontAwesomeIcon icon={faStar} className="text-gypsy-gold text-sm" />
            <div className="w-16 h-px bg-gradient-to-r from-gypsy-gold via-gypsy-gold to-transparent"></div>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-lato leading-relaxed">
            Bridal jewelry rentals, premium cosmetics, and professional salon accessories for your <span className="text-gypsy-gold font-semibold">perfect look</span>
          </p>
        </div>
        
        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="group relative bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-4 border-2 border-transparent hover:border-gypsy-gold/20"
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              {/* Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-gypsy-gold/0 via-gypsy-gold/5 to-gypsy-gold/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-10"></div>
              
              {/* Image Container */}
              <div className="aspect-square overflow-hidden bg-gradient-to-br from-gray-100 via-gray-50 to-gray-100 relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-2 transition-all duration-700"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="500" height="500"%3E%3Crect width="500" height="500" fill="%23f3f4f6"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="Arial" font-size="24" fill="%239ca3af"%3EProduct Image%3C/text%3E%3C/svg%3E';
                  }}
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Floating Badge */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gypsy-gold rounded-full blur-md"></div>
                    <div className="relative w-12 h-12 bg-gradient-to-br from-gypsy-gold to-yellow-600 rounded-full flex items-center justify-center shadow-2xl border-2 border-white/30">
                      <FontAwesomeIcon icon={faGem} className="text-white text-base animate-pulse" />
                    </div>
                  </div>
                </div>

                {/* Category Tag */}
                <div className="absolute top-4 left-4 transform -translate-y-20 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="backdrop-blur-md bg-black/50 px-4 py-2 rounded-full border border-white/20">
                    <span className="text-xs font-lato uppercase tracking-wider text-white font-bold">
                      {product.category}
                    </span>
                  </div>
                </div>
              </div>

              {/* Content Container */}
              <div className="p-7 relative">
                {/* Decorative Corner */}
                <div className="absolute top-0 right-8 w-16 h-1 bg-gradient-to-r from-gypsy-gold/50 to-transparent transform -translate-y-px"></div>
                
                <h3 className="text-xl font-playfair font-bold text-gray-900 mb-3 group-hover:text-gypsy-gold transition-colors duration-300 leading-snug min-h-[3.5rem]">
                  {product.name}
                </h3>
                
                <p className="text-gray-600 mb-6 h-12 overflow-hidden font-lato text-sm leading-relaxed"
                  style={{
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                  }}
                >
                  {product.description}
                </p>

                {/* Price and CTA */}
                <div className="flex justify-between items-center pt-5 border-t-2 border-gray-100 group-hover:border-gypsy-gold/20 transition-colors duration-300">
                  <div>
                    <span className="text-2xl font-playfair font-bold bg-gradient-to-r from-gypsy-gold to-yellow-600 bg-clip-text text-transparent">
                      {product.price}
                    </span>
                  </div>
                  
                  <button className="flex items-center gap-2 text-gypsy-gold hover:text-yellow-600 font-lato text-sm uppercase tracking-wider font-bold transition-all duration-300 group/btn">
                    <span className="transform group-hover/btn:translate-x-1 transition-transform">
                      {product.category.includes('Rental') ? 'Rent' : 'View'}
                    </span>
                    <FontAwesomeIcon 
                      icon={faArrowRight} 
                      className="text-xs transform group-hover/btn:translate-x-2 transition-transform" 
                    />
                  </button>
                </div>

                {/* Decorative Stars */}
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {[...Array(3)].map((_, i) => (
                    <FontAwesomeIcon 
                      key={i}
                      icon={faStar} 
                      className="text-gypsy-gold text-xs animate-pulse" 
                      style={{ animationDelay: `${i * 0.2}s` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <p className="text-gray-600 font-lato text-lg mb-6">Can't find what you're looking for?</p>
          <button className="group relative px-10 py-4 bg-gradient-to-r from-gypsy-gold via-yellow-500 to-gypsy-gold text-white font-bold text-sm uppercase tracking-wider rounded-full shadow-xl hover:shadow-2xl hover:shadow-gypsy-gold/40 transition-all duration-500 transform hover:scale-105 overflow-hidden">
            <span className="relative z-10 flex items-center gap-3">
              Contact Us for Custom Orders
              <FontAwesomeIcon icon={faArrowRight} className="group-hover:translate-x-2 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-gypsy-gold to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Products;

