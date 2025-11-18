import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faHome, faGem, faInfoCircle, faEnvelope, faStar } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-xl shadow-2xl border-b-2 border-gypsy-gold/20' 
        : 'bg-white/90 backdrop-blur-md shadow-md border-b border-gray-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center group cursor-pointer" onClick={() => scrollToSection('hero')}>
            <div className="relative">
              <img 
                src="/logo.png" 
                alt="GYPSY Logo" 
                className="h-14 w-auto transition-all duration-300 group-hover:scale-110 drop-shadow-md"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="hidden items-center gap-2">
                <div className="w-12 h-12 bg-gradient-to-br from-gypsy-gold to-yellow-600 rounded-full flex items-center justify-center shadow-lg">
                  <FontAwesomeIcon icon={faStar} className="text-white text-xl" />
                </div>
                <h1 className="text-3xl font-playfair font-bold bg-gradient-to-r from-gypsy-gold via-yellow-600 to-gypsy-gold bg-clip-text text-transparent">
                  GYPSY
                </h1>
              </div>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-2">
              <button
                onClick={() => scrollToSection('hero')}
                className="relative px-5 py-2 text-gray-700 hover:text-gypsy-gold transition-all duration-300 font-lato font-semibold text-sm uppercase tracking-wider flex items-center gap-2 group overflow-hidden rounded-lg"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-gypsy-gold/0 via-gypsy-gold/5 to-gypsy-gold/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <FontAwesomeIcon icon={faHome} className="w-4 h-4 relative z-10 group-hover:scale-110 transition-transform" />
                <span className="relative z-10">Home</span>
              </button>
              
              <button
                onClick={() => scrollToSection('products')}
                className="relative px-5 py-2 text-gray-700 hover:text-gypsy-gold transition-all duration-300 font-lato font-semibold text-sm uppercase tracking-wider flex items-center gap-2 group overflow-hidden rounded-lg"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-gypsy-gold/0 via-gypsy-gold/5 to-gypsy-gold/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <FontAwesomeIcon icon={faGem} className="w-4 h-4 relative z-10 group-hover:scale-110 transition-transform" />
                <span className="relative z-10">Collection</span>
              </button>
              
              <button
                onClick={() => scrollToSection('about')}
                className="relative px-5 py-2 text-gray-700 hover:text-gypsy-gold transition-all duration-300 font-lato font-semibold text-sm uppercase tracking-wider flex items-center gap-2 group overflow-hidden rounded-lg"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-gypsy-gold/0 via-gypsy-gold/5 to-gypsy-gold/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <FontAwesomeIcon icon={faInfoCircle} className="w-4 h-4 relative z-10 group-hover:scale-110 transition-transform" />
                <span className="relative z-10">About</span>
              </button>
              
              <button
                onClick={() => scrollToSection('contact')}
                className="relative ml-2 px-6 py-2.5 bg-gradient-to-r from-gypsy-gold to-yellow-600 text-white transition-all duration-300 font-lato font-bold text-sm uppercase tracking-wider flex items-center gap-2 group overflow-hidden rounded-full shadow-lg hover:shadow-xl hover:shadow-gypsy-gold/30 hover:scale-105"
              >
                <FontAwesomeIcon icon={faEnvelope} className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                <span>Contact</span>
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              className="w-10 h-10 flex items-center justify-center rounded-lg text-gray-700 hover:text-gypsy-gold hover:bg-gypsy-gold/10 transition-all duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <FontAwesomeIcon 
                icon={isMenuOpen ? faTimes : faBars} 
                className="h-6 w-6" 
              />
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-6 border-t border-gypsy-gold/20 bg-gradient-to-b from-white to-gray-50 animate-fade-in-down">
            <div className="flex flex-col space-y-2">
              <button
                onClick={() => scrollToSection('hero')}
                className="text-left px-4 py-3 text-gray-700 hover:text-gypsy-gold hover:bg-gypsy-gold/5 transition-all duration-200 font-lato font-semibold text-sm uppercase tracking-wider flex items-center gap-3 rounded-lg"
              >
                <FontAwesomeIcon icon={faHome} className="w-4 h-4" />
                Home
              </button>
              <button
                onClick={() => scrollToSection('products')}
                className="text-left px-4 py-3 text-gray-700 hover:text-gypsy-gold hover:bg-gypsy-gold/5 transition-all duration-200 font-lato font-semibold text-sm uppercase tracking-wider flex items-center gap-3 rounded-lg"
              >
                <FontAwesomeIcon icon={faGem} className="w-4 h-4" />
                Collection
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-left px-4 py-3 text-gray-700 hover:text-gypsy-gold hover:bg-gypsy-gold/5 transition-all duration-200 font-lato font-semibold text-sm uppercase tracking-wider flex items-center gap-3 rounded-lg"
              >
                <FontAwesomeIcon icon={faInfoCircle} className="w-4 h-4" />
                About
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="mx-2 mt-2 px-4 py-3 bg-gradient-to-r from-gypsy-gold to-yellow-600 text-white transition-all duration-300 font-lato font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-3 rounded-lg shadow-lg"
              >
                <FontAwesomeIcon icon={faEnvelope} className="w-4 h-4" />
                Contact Us
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

