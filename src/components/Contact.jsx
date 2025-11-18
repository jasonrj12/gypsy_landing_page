import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faClock, faStar, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTiktok, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  const socialLinks = [
    {
      icon: faFacebook,
      url: "https://www.facebook.com/gypsy.lk",
      label: "Facebook",
      color: "hover:bg-blue-600"
    },
    {
      icon: faInstagram,
      url: "https://www.instagram.com/_gypsy.official_",
      label: "Instagram",
      color: "hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-600"
    },
    {
      icon: faTiktok,
      url: "https://www.tiktok.com/@_gypsy.official",
      label: "TikTok",
      color: "hover:bg-black"
    },
    {
      icon: faWhatsapp,
      url: "https://wa.me/94766061433",
      label: "WhatsApp",
      color: "hover:bg-green-600"
    }
  ];

  return (
    <section id="contact" className="py-16 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gypsy-gold/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gypsy-gold/5 rounded-full blur-3xl"></div>
      
      {/* Decorative Stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
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
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <FontAwesomeIcon icon={faEnvelope} className="text-gypsy-gold text-xl animate-pulse" />
            <span className="text-gypsy-gold font-lato text-sm uppercase tracking-widest font-bold">Contact Us</span>
            <FontAwesomeIcon icon={faEnvelope} className="text-gypsy-gold text-xl animate-pulse" style={{ animationDelay: '0.5s' }} />
          </div>
          
          <h2 className="text-3xl md:text-5xl font-playfair font-bold mb-4 leading-tight">
            Get In <span className="bg-gradient-to-r from-gypsy-gold via-yellow-400 to-gypsy-gold bg-clip-text text-transparent">Touch</span>
          </h2>
          
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-gypsy-gold to-gypsy-gold"></div>
            <FontAwesomeIcon icon={faStar} className="text-gypsy-gold animate-pulse" />
            <div className="w-16 h-px bg-gradient-to-r from-gypsy-gold via-gypsy-gold to-transparent"></div>
          </div>
          
          <p className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto font-lato leading-relaxed">
            We'd love to hear from you. Visit us or reach out through any of these <span className="text-gypsy-gold font-semibold">channels</span>
          </p>
        </div>
        
        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Location Card */}
          <div className="group relative p-6 bg-gradient-to-br from-white/5 to-white/10 rounded-2xl backdrop-blur-md border-2 border-white/10 hover:border-gypsy-gold/50 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-gypsy-gold/20">
            <div className="absolute inset-0 bg-gradient-to-br from-gypsy-gold/0 via-gypsy-gold/5 to-gypsy-gold/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-gypsy-gold to-yellow-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                <FontAwesomeIcon 
                  icon={faMapMarkerAlt} 
                  className="text-3xl text-white" 
                />
              </div>
              
              <h3 className="text-2xl font-playfair font-bold mb-3 group-hover:text-gypsy-gold transition-colors">
                Visit Us
              </h3>
              
              <p className="text-gray-300 font-lato leading-relaxed text-base mb-4">
                No. 28, St. Anthony's Mawatha<br />
                <span className="text-gypsy-gold font-semibold">Colombo 13, Sri Lanka</span>
              </p>

              {/* Mini Map */}
              <div className="mb-4 rounded-lg overflow-hidden border border-white/20 shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.548423772917!2d79.85587289159534!3d6.9444447322043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25900395e1b43%3A0x698c50402a408e41!2sGypsy!5e0!3m2!1sen!2slk!4v1763471867701!5m2!1sen!2slk"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full"
                  title="GYPSY Location Map"
                ></iframe>
              </div>

              <div className="mt-4 pt-4 border-t border-white/10">
                <div className="flex items-center justify-center gap-2 text-gray-400 text-sm">
                  <FontAwesomeIcon icon={faClock} className="text-gypsy-gold" />
                  <span>Open for Appointments</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Social Media Card */}
          <div className="group relative p-6 bg-gradient-to-br from-white/5 to-white/10 rounded-2xl backdrop-blur-md border-2 border-white/10 hover:border-gypsy-gold/50 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-gypsy-gold/20">
            <div className="absolute inset-0 bg-gradient-to-br from-gypsy-gold/0 via-gypsy-gold/5 to-gypsy-gold/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10">
              <div className="flex justify-center mb-4">
                <FontAwesomeIcon icon={faStar} className="text-3xl text-gypsy-gold animate-pulse" />
              </div>
              
              <h3 className="text-2xl font-playfair font-bold mb-4 group-hover:text-gypsy-gold transition-colors">
                Follow Us
              </h3>
              
              <div className="grid grid-cols-2 gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group/social relative w-full aspect-square bg-white/10 rounded-xl flex flex-col items-center justify-center ${social.color} transition-all duration-300 transform hover:scale-110 border-2 border-white/20 hover:border-white/40 shadow-lg hover:shadow-xl`}
                    aria-label={social.label}
                  >
                    <FontAwesomeIcon 
                      icon={social.icon} 
                      className="text-2xl text-white mb-1 group-hover/social:scale-110 transition-transform" 
                    />
                    <span className="text-xs font-lato uppercase tracking-wider text-white/80">
                      {social.label}
                    </span>
                  </a>
                ))}
              </div>

              <p className="mt-4 text-gray-400 text-sm font-lato text-center">
                Stay updated with our latest collections
              </p>
            </div>
          </div>
          
          {/* Phone Card */}
          <div className="group relative p-6 bg-gradient-to-br from-white/5 to-white/10 rounded-2xl backdrop-blur-md border-2 border-white/10 hover:border-gypsy-gold/50 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-gypsy-gold/20">
            <div className="absolute inset-0 bg-gradient-to-br from-gypsy-gold/0 via-gypsy-gold/5 to-gypsy-gold/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-gypsy-gold to-yellow-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                <FontAwesomeIcon 
                  icon={faPhone} 
                  className="text-3xl text-white" 
                />
              </div>
              
              <h3 className="text-2xl font-playfair font-bold mb-3 group-hover:text-gypsy-gold transition-colors">
                Call Us
              </h3>
              
              <a 
                href="tel:+94776061433"
                className="text-xl font-bold text-gypsy-gold hover:text-yellow-400 transition-colors block mb-3"
              >
                +94 77 606 1433
              </a>

              <div className="space-y-2 pt-4 border-t border-white/10">
                <div className="flex items-center justify-center gap-2 text-gray-300">
                  <FontAwesomeIcon icon={faClock} className="text-gypsy-gold" />
                  <span className="font-lato">Mon-Sat: 10AM - 7PM</span>
                </div>
                <p className="text-gray-400 text-sm font-lato">
                  Sundays & Public Holidays: Closed
                </p>
              </div>
            </div>
          </div>
        </div>


        {/* Footer */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-gray-400 font-lato">
            © 2025 GYPSY. All rights reserved. | Bridal Jewelry Rentals, Cosmetics & Salon Accessories
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;

