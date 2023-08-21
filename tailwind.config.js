/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'primary': '#0D0D0D',
      'secondary': '#979797',
      'backgroundprimary': '#EFF2F6',
      'textprimary': '#000000',
      'textsecondary': '#979797',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      primary: ['Inter']
    },
    extend: {},
  },
  plugins: [],
}

