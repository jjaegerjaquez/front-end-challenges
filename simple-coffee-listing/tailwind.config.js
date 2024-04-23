/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'header': "url('./assets/images/bg-cafe.jpg')",
      },
      fontFamily: {
        'dm-sans': ['DM Sans', 'sans-serif']
      },
      colors: {
        'text-secondary': '#6F757C',
      }
    },
  },
  plugins: [],
}

