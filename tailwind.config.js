/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  content: [],
  theme: {
    screens: {
      'sm': '0',
      'md': '500px',  // Set to 450 pixels for md breakpoint
      'lg': '900px',  // Set to 600 pixels for lg breakpoint
      'xl': '1280px',
    },
  },
  plugins: [],
}

