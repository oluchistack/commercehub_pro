module.exports = {
  content: ["./pages/*.{html,js}", "./index.html", "./js/*.js"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#e6f3ff",
          100: "#b3d9ff", 
          200: "#80bfff",
          300: "#4da6ff",
          400: "#1a8cff",
          500: "#1a365d", // blue-900 equivalent - Deep trust foundation
          600: "#153056",
          700: "#102a4f",
          800: "#0b2448",
          900: "#061e41",
          DEFAULT: "#1a365d"
        },
        secondary: {
          50: "#f7fafc", // gray-50
          100: "#edf2f7", // gray-100
          200: "#e2e8f0", // gray-200
          300: "#cbd5e0", // gray-300
          400: "#a0aec0", // gray-400
          500: "#718096", // gray-500
          600: "#4a5568", // gray-600
          700: "#2d3748", // gray-700 - Sophisticated content structure
          800: "#1a202c", // gray-800
          900: "#171923", // gray-900
          DEFAULT: "#2d3748"
        },
        accent: {
          50: "#fff5f5", // red-50
          100: "#fed7d7", // red-100
          200: "#feb2b2", // red-200
          300: "#fc8181", // red-300
          400: "#f56565", // red-400
          500: "#ff6b6b", // red-400 equivalent - Strategic action guidance
          600: "#e53e3e", // red-500
          700: "#c53030", // red-600
          800: "#9b2c2c", // red-700
          900: "#742a2a", // red-800
          DEFAULT: "#ff6b6b"
        },
        background: "#ffffff", // Clean canvas for product photography
        surface: "#f7fafc", // gray-50 - Subtle card depth
        text: {
          primary: "#2d3748", // gray-700 - Comfortable reading
          secondary: "#718096" // gray-500 - Clear hierarchy
        },
        success: {
          50: "#f0fff4", // green-50
          100: "#c6f6d5", // green-100
          200: "#9ae6b4", // green-200
          300: "#68d391", // green-300
          400: "#48bb78", // green-400 - Positive confirmation
          500: "#38a169", // green-500
          600: "#2f855a", // green-600
          700: "#276749", // green-700
          800: "#22543d", // green-800
          900: "#1c4532", // green-900
          DEFAULT: "#48bb78"
        },
        warning: {
          50: "#fffaf0", // orange-50
          100: "#feebc8", // orange-100
          200: "#fbd38d", // orange-200
          300: "#f6ad55", // orange-300
          400: "#ed8936", // orange-400 - Helpful urgency
          500: "#dd6b20", // orange-500
          600: "#c05621", // orange-600
          700: "#9c4221", // orange-700
          800: "#7b341e", // orange-800
          900: "#652b19", // orange-900
          DEFAULT: "#ed8936"
        },
        error: {
          50: "#fff5f5", // red-50
          100: "#fed7d7", // red-100
          200: "#feb2b2", // red-200
          300: "#fc8181", // red-300
          400: "#f56565", // red-400
          500: "#e53e3e", // red-500 - Clear concern guidance
          600: "#c53030", // red-600
          700: "#9b2c2c", // red-700
          800: "#822727", // red-800
          900: "#63171b", // red-900
          DEFAULT: "#e53e3e"
        },
        border: {
          light: "#e2e8f0", // gray-200
          DEFAULT: "#cbd5e0" // gray-300
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        accent: ['Playfair Display', 'serif'],
        playfair: ['Playfair Display', 'serif']
      },
      fontWeight: {
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700'
      },
      boxShadow: {
        'subtle': '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        'card': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)'
      },
      borderRadius: {
        'lg': '0.5rem',
        'xl': '0.75rem',
        '2xl': '1rem'
      },
      transitionDuration: {
        '300': '300ms'
      },
      transitionTimingFunction: {
        'ease-out': 'cubic-bezier(0, 0, 0.2, 1)'
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-out',
        'slide-up': 'slideUp 0.3s ease-out'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem'
      }
    }
  },
  plugins: []
}