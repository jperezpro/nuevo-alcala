/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        sans: ['Lato', 'system-ui', 'sans-serif'],
      },
      colors: {
        marron: '#4A2A2A',
        crema: '#F5F0E1',
      },
    },
  },
  plugins: [],
}
