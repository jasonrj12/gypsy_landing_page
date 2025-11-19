import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faHome, faGem, faInfoCircle, faEnvelope, faStar } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [logoError, setLogoError] = useState(false);

  const navLinks = [
    { label: 'Home', icon: faHome, section: 'hero' },
    { label: 'Collection', icon: faGem, section: 'products' },
    { label: 'About', icon: faInfoCircle, section: 'about' },
  ];

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
    <nav className="fixed inset-x-0 top-0 z-50 pointer-events-none">
      <div
        className={`w-full px-4 sm:px-6 lg:px-10 transition-all duration-500 ${
          isScrolled ? 'pt-3 pb-3' : 'pt-5 pb-5'
        }`}
      >
        <div
          className={`relative flex w-full max-w-7xl mx-auto items-center gap-4 rounded-[2.5rem] border transition-all duration-500 backdrop-blur-2xl pointer-events-auto ${
            isScrolled
              ? 'border-white/10 bg-gradient-to-br from-black/90 via-purple-950/80 to-rose-900/70 shadow-2xl shadow-purple-900/30 px-5 py-3'
              : 'border-white/20 bg-white/80 bg-gradient-to-br from-white/90 via-white/70 to-white/80 shadow-2xl shadow-gypsy-gold/15 px-8 py-4'
          }`}
        >
          {/* Glow Accent */}
          <div
            className={`absolute -inset-1 rounded-[2.75rem] blur-2xl pointer-events-none transition-all duration-500 ${
              isScrolled
                ? 'bg-gradient-to-r from-purple-600/30 via-gypsy-gold/25 to-pink-500/30 opacity-70'
                : 'bg-gradient-to-r from-gypsy-gold/40 via-transparent to-yellow-500/40 opacity-70'
            }`}
          ></div>
          <div
            className={`absolute inset-0 rounded-[2.5rem] border pointer-events-none transition-all duration-500 ${
              isScrolled
                ? 'bg-gradient-to-br from-black/70 via-purple-900/60 to-rose-900/60 border-white/10'
                : 'bg-white/40 border-white/20'
            }`}
          ></div>

          {/* Logo Section */}
          <button
            onClick={() => scrollToSection('hero')}
            className="relative z-10 flex items-center group cursor-pointer"
          >
            {!logoError ? (
              <img
                src="/logo.png"
                alt="Gypsy Fashion Jewellery logo"
                className="h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-[0_6px_15px_rgba(0,0,0,0.45)] brightness-110"
                onError={() => setLogoError(true)}
              />
            ) : (
              <div className="h-14 w-14 rounded-full bg-gradient-to-br from-gypsy-gold to-yellow-500 flex items-center justify-center shadow-lg shadow-gypsy-gold/30">
                <FontAwesomeIcon icon={faStar} className="text-white text-xl" />
              </div>
            )}
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex flex-1 justify-center relative z-10">
            <div className="inline-flex items-center gap-1 rounded-full bg-white/80 border border-white/40 px-3 py-1 shadow-inner shadow-white/30">
              {navLinks.map(({ label, icon, section }) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="relative flex items-center gap-2 px-4 py-2 text-[0.7rem] font-lato font-semibold uppercase tracking-[0.35em] text-gray-600 transition-all duration-300 overflow-hidden rounded-full group"
                >
                  <span className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-gypsy-gold/10 via-yellow-500/10 to-transparent blur-[1px] transition-opacity duration-300 rounded-full"></span>
                  <FontAwesomeIcon icon={icon} className="w-3.5 h-3.5 relative z-10 group-hover:scale-110 transition-transform" />
                  <span className="relative z-10">{label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex relative z-10">
            <button
              onClick={() => scrollToSection('contact')}
              className="flex items-center gap-2 rounded-full bg-gradient-to-r from-gypsy-gold via-yellow-500 to-gypsy-gold px-6 py-2 text-white text-xs font-bold tracking-[0.3em] uppercase shadow-lg shadow-gypsy-gold/40 transition-transform duration-300 hover:scale-105"
            >
              <FontAwesomeIcon icon={faEnvelope} className="w-4 h-4" />
              Contact Us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden relative z-10 ml-auto">
            <button
              className="w-11 h-11 flex items-center justify-center rounded-full bg-gradient-to-br from-gypsy-gold to-rose-500 text-white shadow-lg shadow-gypsy-gold/30 hover:scale-105 transition-all duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">{isMenuOpen ? 'Close menu' : 'Open menu'}</span>
              <div className="relative w-5 h-5">
                <span
                  className={`absolute inset-x-0 h-[2px] bg-white rounded-full transition-all duration-300 ${
                    isMenuOpen ? 'top-1/2 rotate-45' : 'top-1'
                  }`}
                ></span>
                <span
                  className={`absolute inset-x-0 h-[2px] bg-white rounded-full transition-all duration-300 ${
                    isMenuOpen ? 'opacity-0' : 'top-1/2'
                  }`}
                ></span>
                <span
                  className={`absolute inset-x-0 h-[2px] bg-white rounded-full transition-all duration-300 ${
                    isMenuOpen ? 'bottom-1/2 -rotate-45' : 'bottom-1'
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden px-4 sm:px-6 pb-6 animate-fade-in-down pointer-events-auto">
          <div className="rounded-3xl border border-white/15 bg-white/90 backdrop-blur-2xl shadow-xl shadow-gypsy-gold/20 p-4 space-y-3">
            {navLinks.map(({ label, icon, section }) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-left text-sm font-semibold uppercase tracking-[0.3em] text-gray-600 bg-white/70 hover:bg-gypsy-gold/10 transition-all duration-200"
              >
                <FontAwesomeIcon icon={icon} className="w-4 h-4 text-gypsy-gold" />
                {label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('contact')}
              className="w-full flex items-center justify-center gap-3 px-4 py-3 rounded-2xl bg-gradient-to-r from-gypsy-gold via-yellow-500 to-gypsy-gold text-white text-sm font-bold uppercase tracking-[0.3em] shadow-lg shadow-gypsy-gold/30"
            >
              <FontAwesomeIcon icon={faEnvelope} className="w-4 h-4" />
              Contact Us
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

