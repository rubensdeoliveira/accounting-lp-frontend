/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'gray300': '#D9D9D9',
        'gray500': '#2A2A39',
        'gray900': '#2E2E30',
        'red500': '#d2140a',
        'red900': '#6C0C0F'

      },
      fontFamily: {
        raleway: 'Raleway',
        dmSans: 'DM Sans',
      },
      letterSpacing: {
        'default': '-0.03em !important'
      }
    },
  },
  plugins: [
    require("flowbite/plugin")
  ],
  darkMode: 'class'
}
