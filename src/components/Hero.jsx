import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faStar } from '@fortawesome/free-solid-svg-icons';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToProducts = () => {
    const element = document.getElementById('products');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-[70vh] flex items-center justify-center overflow-hidden py-16">
      {/* Background Image with Parallax Effect */}
      <div 
        className="absolute inset-0 bg-no-repeat transition-transform duration-700 ease-out"
        style={{
          backgroundImage: 'url(/hero2.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundAttachment: 'fixed',
          transform: `translate(${(mousePosition.x - 50) * 0.02}px, ${(mousePosition.y - 50) * 0.02}px) scale(1.05)`,
        }}
      >
        {/* Multi-layer Gradient Overlay for Depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/60"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30"></div>
        
        {/* Animated Light Effect */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(212, 175, 55, 0.2) 0%, transparent 50%)`,
            transition: 'background 0.3s ease-out',
          }}
        ></div>
      </div>

      {/* Floating Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 30}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${4 + (i % 3)}s`,
            }}
          >
            <FontAwesomeIcon 
              icon={faStar} 
              className="w-4 h-4 text-gypsy-gold/40"
            />
          </div>
        ))}
      </div>
      
      {/* Main Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 w-full py-8">
        <div className="max-w-6xl mx-auto space-y-6">
          {/* Main Title with Glow Effect */}
          <div className="animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-playfair font-bold text-white tracking-wider drop-shadow-2xl relative inline-block leading-tight">
              <span className="relative z-10">GYPSY</span>
              <span 
                className="absolute inset-0 blur-3xl opacity-50"
                style={{
                  textShadow: '0 0 40px rgba(212, 175, 55, 0.5), 0 0 80px rgba(212, 175, 55, 0.3)',
                }}
              >
                GYPSY
              </span>
            </h1>
          </div>

          {/* Animated Divider */}
          <div className="flex items-center justify-center gap-3 sm:gap-4 animate-fade-in-up-delay-1 py-4">
            <div className="w-12 sm:w-16 h-px bg-gradient-to-r from-transparent via-gypsy-gold to-transparent"></div>
            <div className="w-2 h-2 rounded-full bg-gypsy-gold animate-pulse"></div>
            <div className="w-24 sm:w-32 h-px bg-gradient-to-r from-transparent via-gypsy-gold to-transparent"></div>
            <div className="w-2 h-2 rounded-full bg-gypsy-gold animate-pulse"></div>
            <div className="w-12 sm:w-16 h-px bg-gradient-to-r from-transparent via-gypsy-gold to-transparent"></div>
          </div>

          {/* Tagline with Shimmer Effect */}
          <div className="animate-fade-in-up-delay-2 py-2">
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-cormorant text-gypsy-gold max-w-4xl mx-auto font-light italic tracking-wide px-4">
              <span className="relative z-10 bg-gradient-to-r from-gypsy-gold via-yellow-300 to-gypsy-gold bg-clip-text text-transparent animate-shimmer-text">
                Your Perfect Bridal Look, Complete Beauty Solutions
              </span>
            </p>
          </div>

          {/* Description with Glassmorphism Card */}
          <div className="max-w-3xl mx-auto animate-fade-in-up-delay-3 py-4">
            <div className="backdrop-blur-md bg-white/5 rounded-2xl p-4 sm:p-6 md:p-8 border border-white/10 shadow-2xl">
              <p className="text-base sm:text-lg md:text-xl text-gray-100 font-lato leading-relaxed">
                Premium bridal jewelry rentals, quality cosmetics, and professional salon accessories to make your special day <span className="text-gypsy-gold font-semibold">unforgettable</span>.
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 animate-fade-in-up-delay-4 py-4">
            <button
              onClick={scrollToProducts}
              className="group relative bg-gradient-to-r from-gypsy-gold via-yellow-500 to-gypsy-gold text-black font-semibold py-4 sm:py-5 px-10 sm:px-12 rounded-full transition-all duration-500 transform hover:scale-110 shadow-2xl hover:shadow-gypsy-gold/60 text-base sm:text-lg tracking-wide font-playfair uppercase overflow-hidden w-full sm:w-auto"
            >
              <span className="relative z-10 flex items-center justify-center">
                Explore Our Services
                <span className="ml-3 inline-block transform group-hover:translate-x-2 transition-transform duration-300"></span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-gypsy-gold to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer"></div>
            </button>
          </div>

          {/* Luxury Jewel Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 pt-8 max-w-5xl mx-auto animate-fade-in-up-delay-5">
            {[
              { number: '500+', label: 'Happy Brides' },
              { number: '1000+', label: 'Jewelry Pieces' },
              { number: '100%', label: 'Satisfaction Rate' },
            ].map((stat, index) => (
              <div 
                key={index}
                className="relative group"
              >
                {/* Outer Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-gypsy-gold/30 to-yellow-600/30 rounded-2xl blur-lg opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Main Card */}
                <div className="relative backdrop-blur-md bg-gradient-to-br from-gypsy-gold/15 via-black/50 to-gypsy-gold/15 p-1 rounded-2xl border-3 border-gypsy-gold shadow-2xl group-hover:scale-105 transition-all duration-300">
                  {/* Inner Black Background */}
                  <div className="bg-gradient-to-br from-black/90 via-black/95 to-black/90 rounded-xl px-6 py-8 relative overflow-hidden">
                    {/* Corner Sparkles */}
                    <div className="absolute top-2 right-2 w-2 h-2 bg-gypsy-gold rounded-full animate-pulse"></div>
                    <div className="absolute bottom-2 left-2 w-1.5 h-1.5 bg-yellow-300 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                    
                    {/* Content */}
                    <div className="relative z-10 flex flex-col items-center text-center gap-4">
                      {/* Star Icon */}
                      <FontAwesomeIcon 
                        icon={faStar} 
                        className="w-6 h-6 text-gypsy-gold drop-shadow-lg animate-pulse" 
                      />
                      
                      {/* Number */}
                      <div className="text-3xl sm:text-4xl md:text-5xl font-playfair font-bold text-gypsy-gold leading-none drop-shadow-lg">
                        {stat.number}
                      </div>
                      
                      {/* Label */}
                      <div className="text-gray-300 font-lato text-xs uppercase tracking-[0.2em] leading-tight">
                        {stat.label}
                      </div>
                    </div>
                    
                    {/* Shine Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-gypsy-gold/0 group-hover:via-gypsy-gold/10 to-transparent transition-all duration-700"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Horizontal Jewel-Style Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="relative group cursor-pointer">
          {/* Outer Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-gypsy-gold/30 via-yellow-600/30 to-gypsy-gold/30 rounded-full blur-xl animate-pulse"></div>
          
          {/* Horizontal Diamond/Jewel Container */}
          <div className="relative backdrop-blur-md bg-gradient-to-r from-gypsy-gold/20 via-yellow-500/10 to-gypsy-gold/20 px-8 py-3 rounded-full border-2 border-gypsy-gold/40 hover:border-gypsy-gold transition-all duration-500 group-hover:scale-110">
            {/* Inner Jewel Facets */}
            <div className="relative flex items-center gap-4">
              {/* Sparkle Effects */}
              <div className="absolute -top-1 left-4 w-1.5 h-1.5 bg-gypsy-gold rounded-full animate-pulse"></div>
              <div className="absolute -bottom-1 right-4 w-1.5 h-1.5 bg-yellow-300 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              
              {/* Horizontal Content */}
              <div className="flex items-center gap-3 relative z-10">
                {/* Jewel Icon */}
                <FontAwesomeIcon 
                  icon={faStar} 
                  className="w-4 h-4 text-gypsy-gold group-hover:text-yellow-300 transition-colors duration-300 drop-shadow-lg animate-pulse" 
                />
                
                {/* Scroll Text */}
                <span className="text-gypsy-gold text-xs font-playfair uppercase tracking-[0.15em] font-semibold whitespace-nowrap">
                  Scroll Down
                </span>
                
                {/* Diamond Shape Divider */}
                <div className="flex items-center gap-1">
                  <div className="w-1 h-1 rotate-45 bg-gypsy-gold"></div>
                  <div className="w-1.5 h-1.5 rotate-45 bg-gradient-to-br from-gypsy-gold to-yellow-400"></div>
                  <div className="w-1 h-1 rotate-45 bg-gypsy-gold"></div>
                </div>
                
                {/* Animated Arrows */}
                <div className="flex items-center gap-0.5">
                  <FontAwesomeIcon 
                    icon={faChevronDown} 
                    className="w-3 h-3 text-gypsy-gold/60 animate-bounce" 
                  />
                  <FontAwesomeIcon 
                    icon={faChevronDown} 
                    className="w-3 h-3 text-gypsy-gold animate-bounce" 
                    style={{ animationDelay: '0.15s' }}
                  />
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom Glow */}
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-2 bg-gypsy-gold/30 rounded-full blur-md"></div>
        </div>
      </div>

    </section>
  );
};

export default Hero;

