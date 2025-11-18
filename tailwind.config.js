/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gypsy-gold': '#D4AF37',
        'gypsy-dark': '#1a1a1a',
        'gypsy-light': '#F4E5C2',
        'gold': {
          50: '#FFFCF0',
          100: '#FFF8DB',
          200: '#FFF0B8',
          300: '#FFE894',
          400: '#F4D870',
          500: '#D4AF37',
          600: '#B8941F',
          700: '#8B7520',
          800: '#6B5A19',
          900: '#4A3E11',
        },
      },
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'cormorant': ['Cormorant Garamond', 'serif'],
        'lato': ['Lato', 'sans-serif'],
      },
      boxShadow: {
        'gold': '0 10px 40px rgba(212, 175, 55, 0.3)',
        'gold-lg': '0 20px 60px rgba(212, 175, 55, 0.4)',
        'gold-xl': '0 30px 80px rgba(212, 175, 55, 0.5)',
      },
      animation: {
        'float': 'float 4s ease-in-out infinite',
        'shimmer': 'shimmer 2s infinite',
        'shimmer-text': 'shimmer-text 3s linear infinite',
        'glow': 'glow 2s ease-in-out infinite',
        'scale-pulse': 'scale-pulse 2s ease-in-out infinite',
        'rotate-slow': 'rotate-slow 20s linear infinite',
        'slide-in-left': 'slide-in-left 0.8s ease-out',
        'slide-in-right': 'slide-in-right 0.8s ease-out',
        'gradient': 'gradient-shift 3s ease infinite',
      },
      backgroundImage: {
        'gradient-gold': 'linear-gradient(135deg, #D4AF37 0%, #F4D870 50%, #D4AF37 100%)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}

