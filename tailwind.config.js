/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        'mid-lg': '867px'
      },
      fontFamily: {
        sans: ['"Inter"', 'sans-serif']
      },
      fontSize: {
        lg: '18px',
        '2xl': '24px',
        '4xl': '36px',
        '5xl': '40px'
      },
      padding: {
        3: '13px'
      },
      borderRadius: {
        '4xl': '50px'
      },
      colors: {
        primary: {
          DEFAULT: '#28574E',
          dark: '#1C3D36'
        },
        gray: {
          DEFAULT: '#4E4E4E',
          dark: '#2D2C2C',
          light: '#F9FAFB'
        }
      }
    }
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const textUtilities = {
        '.text-h1': {
          fontSize: '40px',
          fontWeight: '700'
        },
        '.text-h2': {
          fontSize: '24px',
          fontWeight: '700'
        },
        '.text-body-1': {
          fontSize: '18px',
          fontWeight: '400'
        },
        '.text-body-2': {
          fontSize: '24px',
          fontWeight: '400'
        }
      };
      addUtilities(textUtilities);
    })
  ]
};
