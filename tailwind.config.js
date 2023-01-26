/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        // 'gray500': '#2A2A39',
        'gray500': '#33373d',
        // 'gray900': '#181828',
        'gray900': '#1d2025',
        // 'red500': '#d2140a'
        'red500': '#d2140a'
        
      },
      fontFamily: {
        raleway: 'var(--font-raleway)',
        dmSans: 'var(--font-dmSans)',
      },
      letterSpacing: {
        'default': '-0.03em'
      }
    },
  },
  plugins: [
    require("flowbite/plugin")
  ],
  darkMode: 'class'
}