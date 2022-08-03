/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      colors: {
        primary: '#FFC23C',
        secondary: '#FA2FB5',
        background: '#100720',
        highlight: '#1c0545',
      },
    },
  },
  plugins: [],
};
