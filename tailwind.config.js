/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'gray500': '#2A2A39',
        'gray900': '#181828',
        'red500': '#ff0000'
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
  plugins: [],
}