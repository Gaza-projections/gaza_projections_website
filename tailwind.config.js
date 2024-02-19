/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin';
const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  content: ['./index.html', './src/**/*.{html,js,ts,jsx,tsx}'],
  theme: {
    screens: {
      xsm: '400px',
      ...defaultTheme.screens
    },
    extend: {
      screens: {
        'mid-lg': '867px'
      },
      fontFamily: {
        sans: ['"Inter"', 'sans-serif'],
        roboto: ['Roboto', 'Helvetica', 'Arial', 'sans-serif']
      },
      fontSize: {
        xs: '12px',
        sm: '14px',
        md: '16px',
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
        '.text-h3': {
          fontSize: '20px',
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
