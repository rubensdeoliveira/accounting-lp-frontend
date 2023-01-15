/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'gray900': '#181828',
        'red500': 'red'
      },
      maxWidth: {
        'screen-max-size': '1200px',
        'hero-texts-container': '527px'
      },
      width: {
        'hero-image': '578px'
      },
      height: {
        'hero-image': '670px',
      },
    },
  },
  plugins: [],
}
