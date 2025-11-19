import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAward, faGem, faBrush, faHeart, faStar, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const About = () => {
  const features = [
    {
      icon: faAward,
      title: "Bridal Jewelry Rental",
      description: "Exquisite bridal jewelry available for rent at affordable prices",
      color: "from-yellow-400 to-gypsy-gold"
    },
    {
      icon: faGem,
      title: "Premium Cosmetics",
      description: "High-quality cosmetics for flawless beauty looks",
      color: "from-gypsy-gold to-yellow-600"
    },
    {
      icon: faBrush,
      title: "Salon Accessories",
      description: "Professional salon tools and accessories for beauty professionals",
      color: "from-yellow-600 to-gypsy-gold"
    },
    {
      icon: faHeart,
      title: "Customer Satisfaction",
      description: "Your happiness is our ultimate goal",
      color: "from-gypsy-gold to-yellow-400"
    }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gypsy-gold/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-yellow-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Floating Stars */}
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
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 mb-6 px-6 py-3 bg-white/5 backdrop-blur-xl rounded-full border border-white/10">
            <FontAwesomeIcon icon={faStar} className="text-gypsy-gold text-xl animate-pulse" />
            <span className="text-gypsy-gold font-lato text-sm uppercase tracking-widest font-bold">About Us</span>
            <FontAwesomeIcon icon={faStar} className="text-gypsy-gold text-xl animate-pulse" style={{ animationDelay: '0.5s' }} />
          </div>

          <h2 className="text-4xl md:text-6xl font-playfair font-bold text-white mb-6 leading-tight">
            Our <span className="bg-gradient-to-r from-gypsy-gold via-yellow-400 to-gypsy-gold bg-clip-text text-transparent">Story</span>
          </h2>

          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-gypsy-gold to-gypsy-gold"></div>
            <FontAwesomeIcon icon={faStar} className="text-gypsy-gold animate-pulse" />
            <div className="w-20 h-px bg-gradient-to-r from-gypsy-gold via-gypsy-gold to-transparent"></div>
          </div>

          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto font-lato leading-relaxed">
            Your one-stop destination for <span className="text-gypsy-gold font-semibold">bridal jewelry rentals</span>, cosmetics, and salon accessories
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-20 items-center mb-20">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <div className="space-y-6 mb-12">
              <div className="relative pl-6 border-l-4 border-gypsy-gold">
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-lato">
                  <span className="text-gypsy-gold font-bold">GYPSY</span> is your trusted partner for making your special day absolutely perfect.
                  We specialize in bridal jewelry rentals, offering exquisite pieces that add
                  elegance and glamour to your wedding without the hefty price tag of purchasing.
                </p>
              </div>

              <div className="relative pl-6 border-l-4 border-white/20 hover:border-gypsy-gold transition-colors duration-300">
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-lato">
                  Beyond jewelry, we provide premium cosmetics and professional salon accessories
                  to complete your beauty needs. Whether you're a bride-to-be or a beauty professional,
                  we have everything you need to look and feel your absolute best.
                </p>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 border-2 border-white/20 shadow-2xl">
              <h3 className="text-3xl font-playfair font-bold text-white mb-8 flex items-center gap-3">
                <FontAwesomeIcon icon={faCheckCircle} className="text-gypsy-gold" />
                Why Choose Us
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-gypsy-gold/50 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-xl hover:shadow-gypsy-gold/20"
                  >
                    <div className="flex items-start gap-4">
                      <div className={`flex-shrink-0 w-14 h-14 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <FontAwesomeIcon
                          icon={feature.icon}
                          className="text-white text-xl"
                        />
                      </div>
                      <div>
                        <h4 className="text-lg font-playfair font-bold text-white mb-2 group-hover:text-gypsy-gold transition-colors">
                          {feature.title}
                        </h4>
                        <p className="text-sm text-gray-400 font-lato leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Image Content */}
          <div className="relative order-1 lg:order-2">
            <div className="relative">
              {/* Main Image */}
              <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-all duration-700 border-4 border-gypsy-gold/30">
                <img
                  src="/insta prfl pic-01[1].jpg"
                  alt="GYPSY Bridal & Beauty"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=800&fit=crop';
                  }}
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
              </div>

              {/* Floating Stats Card */}
              <div className="absolute -bottom-10 -right-10 bg-gradient-to-br from-gypsy-gold via-yellow-500 to-gypsy-gold text-white p-10 rounded-3xl shadow-2xl hidden lg:block transform hover:scale-105 transition-all duration-500 hover:rotate-2 border-4 border-white/20">
                <div className="relative">
                  <div className="absolute -top-2 -right-2">
                    <FontAwesomeIcon icon={faStar} className="text-yellow-200 text-2xl animate-pulse" />
                  </div>
                  <p className="text-6xl font-playfair font-bold mb-2">1000+</p>
                  <p className="text-sm font-lato uppercase tracking-[0.2em] font-bold">Happy Customers</p>
                </div>
              </div>

              {/* Decorative Circle */}
              <div className="absolute -top-10 -left-10 w-40 h-40 border-[6px] border-gypsy-gold/30 rounded-full hidden lg:block animate-pulse"></div>

              {/* Small Decorative Elements */}
              <div className="absolute top-10 right-10 w-4 h-4 bg-gypsy-gold rounded-full animate-pulse hidden lg:block"></div>
              <div className="absolute bottom-20 left-10 w-3 h-3 bg-yellow-400 rounded-full animate-pulse hidden lg:block" style={{ animationDelay: '0.5s' }}></div>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-16">
          {[
            { number: "500+", label: "Happy Brides" },
            { number: "1000+", label: "Jewelry Pieces" },
            { number: "100%", label: "Satisfaction" }
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-8 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl border border-white/20 hover:border-gypsy-gold/50 shadow-lg hover:shadow-xl hover:shadow-gypsy-gold/20 transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="text-4xl md:text-5xl font-playfair font-bold bg-gradient-to-r from-gypsy-gold to-yellow-400 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-sm md:text-base text-gray-400 font-lato uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
