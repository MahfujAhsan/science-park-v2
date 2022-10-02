/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
    fontFamily: {
      greatFredricka: ['Fredericka the Great', 'cursive'],
      aladinCursive: ['Aladin', 'cursive'],
      robotoSerif: ['Roboto', 'sans-serif'],
      atma: ['Atma', 'cursive']
    },
    screens: {
      'mobile__screen': '640px',
      // => @media (min-width: 640px) { ... }

      'tablet__screen': '768px',
      // => @media (min-width: 768px) { ... }

      'notepad__screen': '1024px',
      // => @media (min-width: 1024px) { ... }

      'laptop__screen': '1280px',
      // => @media (min-width: 1280px) { ... }

      'desktop__screen': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [],
}
