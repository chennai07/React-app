/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
        'sans': ['Montserrat', 'sans-serif'],
      },
      colors: {
        gold: {
          50: '#fbf7ed',
          100: '#f5e6c3',
          200: '#e8c98d',
          300: '#dba857',
          400: '#d19338',
          500: '#bd7b22',
          600: '#a66219',
          700: '#8b4d15',
          800: '#723d15',
          900: '#5f3314',
        },
      },
    },
  },
  plugins: [],
};